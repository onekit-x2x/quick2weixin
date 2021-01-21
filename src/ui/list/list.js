/* eslint-disable camelcase */
/* eslint-disable max-len */
let isIPhone = false
let deviceWidth = 0
let deviceDPR = 0
const BASE_DEVICE_WIDTH = 750
const checkDeviceWidth = function checkDeviceWidth() {
  const info = wx.getSystemInfoSync()
  // console.log('info', info)
  isIPhone = info.platform === 'ios'
  const newDeviceWidth = info.screenWidth || 375
  const newDeviceDPR = info.pixelRatio || 2

  if (!isIPhone) {
    // HACK switch width and height when landscape
    // const newDeviceHeight = info.screenHeight || 375
    // 暂时不处理转屏的情况
  }

  if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
    deviceWidth = newDeviceWidth
    deviceDPR = newDeviceDPR
    // console.info('Updated device width: ' + newDeviceWidth + 'px DPR ' + newDeviceDPR)
  }
}
checkDeviceWidth()

const eps = 1e-4
const transformByDPR = function transformByDPR(number) {
  if (number === 0) {
    return 0
  }
  number = number / BASE_DEVICE_WIDTH * deviceWidth
  number = Math.floor(number + eps)
  if (number === 0) {
    if (deviceDPR === 1 || !isIPhone) {
      return 1
    }
    return 0.5
  }
  return number
}

const rpxRE = /([+-]?\d+(?:\.\d+)?)rpx/gi
const transformRpx = function transformRpx(style, inline) {
  if (typeof style !== 'string') {
    return style
  }
  const re = rpxRE
  return style.replace(re, function (match, num) {
    return transformByDPR(Number(num)) + (inline ? 'px' : '')
  })
}

const DEFAULT_SHOW_SCREENS = 4
const RECT_SIZE = 200
const systemInfo = wx.getSystemInfoSync()
const DEBUG = false

Component({
  options: {
    virtualHost: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  relations: {
    '../list-item/list-item': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function linked(target) {
        // 检查第一个的尺寸就好了吧
        if (!this._hasCheckSize) {
          this._hasCheckSize = true
          const size = this.boundingClientRect(this._pos.beginIndex)
          if (!size) {
            return
          }
          setTimeout(function () {
            try {
              target.createSelectorQuery().select('.wx-recycle-item').boundingClientRect(function (rect) {
                if (rect && (rect.width !== size.width || rect.height !== size.height)) {
                  // eslint-disable-next-line no-console
                  console.warn('[list] the size in <recycle-item> is not the same with param itemSize, expect {width: ' + rect.width + ', height: ' + rect.height + '} but got {width: ' + size.width + ', height: ' + size.height + '}')
                }
              }).exec()
            } catch (e) {
              // do nothing
            }
          }, 10)
        }
      }
    }
  },
  properties: {
    onekitClass: {
      type: String,
      value: ''
    },
    onekitStyle: {
      type: String,
      value: ''
    },
    onekitId: {
      type: String,
      value: ''
    },
    scrollpage: {
      type: Boolean,
      value: false
    },
    debug: {
      type: Boolean,
      value: false
    },
    scrollY: {
      type: Boolean,
      value: true
    },
    batch: {
      type: Boolean,
      value: false,
      public: true,
      observer: '_recycleInnerBatchDataChanged'
    },
    batchKey: {
      type: String,
      value: 'batchSetRecycleData',
      public: true
    },
    scrollTop: {
      type: Number,
      value: 0,
      public: true,
      observer: '_scrollTopChanged',
      observeAssignments: true
    },
    height: {
      type: Number,
      value: systemInfo.windowHeight,
      public: true,
      observer: '_heightChanged'
    },
    width: {
      type: Number,
      value: systemInfo.windowWidth,
      public: true,
      observer: '_widthChanged'
    },
    // 距顶部/左边多远时，触发bindscrolltoupper
    upperThreshold: {
      type: Number,
      value: 50,
      public: true
    },
    // 距底部/右边多远时，触发bindscrolltolower
    lowerThreshold: {
      type: Number,
      value: 50,
      public: true
    },
    scrollToIndex: {
      type: Number,
      public: true,
      value: 0,
      observer: '_scrollToIndexChanged',
      observeAssignments: true
    },
    scrollWithAnimation: {
      type: Boolean,
      public: true,
      value: false
    },
    enableBackToTop: {
      type: Boolean,
      public: true,
      value: false
    },
    // 是否节流，默认是
    throttle: {
      type: Boolean,
      public: true,
      value: true
    },
    placeholderImage: {
      type: String,
      public: true,
      value: ''
    },
    screen: { // 默认渲染多少屏的数据
      type: Number,
      public: true,
      value: DEFAULT_SHOW_SCREENS
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    innerBeforeHeight: 0,
    innerAfterHeight: 0,
    innerScrollTop: 0,
    innerScrollIntoView: '',
    placeholderImageStr: '',
    totalHeight: 0,
    useInPage: false
  },
  attached: function attached() {
    if (this.data.placeholderImage) {
      this.setData({
        placeholderImageStr: transformRpx(this.data.placeholderImage, true)
      })
    }
    this.setItemSize({
      array: [],
      map: {},
      totalHeight: 0
    })
  },
  ready: function ready() {
    const _this = this

    this._initPosition(function () {
      _this._isReady = true // DOM结构ready了
      // 有一个更新的timer在了
      if (_this._updateTimerId) return

      _this._scrollViewDidScroll({
        detail: {
          scrollLeft: _this._pos.left,
          scrollTop: _this._pos.top,
          ignoreScroll: true
        }
      }, true)
    })
  },
  detached: function detached() {
    this.page = null
    // 销毁对应的RecycleContext
    if (this.context) {
      this.context.destroy()
      this.context = null
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _log: function _log(...params) {
      let _console

      if (!DEBUG && !this.data.debug) return
      const h = new Date()
      const str = h.getHours() + ':' + h.getMinutes() + ':' + h.getSeconds() + '.' + h.getMilliseconds()
      const args = {}
      for (let _len = params.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = params[_key]
      }

      Array.prototype.splice.call(args, 0, 0, str);
      // eslint-disable-next-line no-console
      (_console = console).log.apply(_console, args)
    },
    _scrollToUpper: function _scrollToUpper(e) {
      this.triggerEvent('scrolltoupper', e.detail)
    },
    _scrollToLower: function _scrollToLower(e) {
      this.triggerEvent('scrolltolower', e.detail)
    },
    _beginToScroll: function _beginToScroll() {
      if (!this._lastScrollTop) {
        this._lastScrollTop = this._pos && (this._pos.top || 0)
      }
    },
    _clearList: function _clearList(cb) {
      this.currentScrollTop = 0
      this._lastScrollTop = 0
      const pos = this._pos
      pos.beginIndex = this._pos.endIndex = -1
      pos.afterHeight = pos.minTop = pos.maxTop = 0
      this.page._recycleViewportChange({
        detail: {
          data: pos,
          id: this.id
        }
      }, cb)
    },

    // 判断RecycleContext是否Ready
    _isValid: function _isValid() {
      return this.page && this.context && this.context.isDataReady
    },

    // eslint-disable-next-line no-complexity
    _scrollViewDidScroll: function _scrollViewDidScroll(e, force) {
      // 如果RecycleContext还没有初始化, 不做任何事情
      if (!this._isValid()) {
        return
      }
      // 监测白屏时间
      if (!e.detail.ignoreScroll) {
        this.triggerEvent('scroll', e.detail)
      }
      this.currentScrollTop = e.detail.scrollTop
      // 高度为0的情况, 不做任何渲染逻辑
      if (!this._pos.height || !this.sizeArray.length) {
        // 没有任何数据的情况下, 直接清理所有的状态
        this._clearList(e.detail.cb)
        return
      }

      // 在scrollWithAnimation动画最后会触发一次scroll事件, 这次scroll事件必须要被忽略
      if (this._isScrollingWithAnimation) {
        this._isScrollingWithAnimation = false
        return
      }
      const pos = this._pos
      const that = this
      const scrollLeft = e.detail.scrollLeft
      const scrollTop = e.detail.scrollTop
      const scrollDistance = Math.abs(scrollTop - this._lastScrollTop)
      if (!force && Math.abs(scrollTop - pos.top) < pos.height * 1.5) {
        this._log('【not exceed height')
        return
      }
      this._lastScrollTop = scrollTop
      const SHOW_SCREENS = this.data.screen // 固定4屏幕
      this._log('SHOW_SCREENS', SHOW_SCREENS, scrollTop)
      this._calcViewportIndexes(scrollLeft, scrollTop, function (beginIndex, endIndex, minTop, afterHeight, maxTop) {
        that._log('scrollDistance', scrollDistance, 'indexes', beginIndex, endIndex)
        // 渲染的数据不变
        if (!force && pos.beginIndex === beginIndex && pos.endIndex === endIndex && pos.minTop === minTop && pos.afterHeight === afterHeight) {
          that._log('------------is the same beginIndex and endIndex')
          return
        }
        // 如果这次渲染的范围比上一次的范围小，则忽略
        that._log('【check】before setData, old pos is', pos.minTop, pos.maxTop, minTop, maxTop)
        that._throttle = false
        pos.left = scrollLeft
        pos.top = scrollTop
        pos.beginIndex = beginIndex
        pos.endIndex = endIndex
        // console.log('render indexes', endIndex - beginIndex + 1, endIndex, beginIndex)
        pos.minTop = minTop
        pos.maxTop = maxTop
        pos.afterHeight = afterHeight
        pos.ignoreBeginIndex = pos.ignoreEndIndex = -1
        that.page._recycleViewportChange({
          detail: {
            data: that._pos,
            id: that.id
          }
        }, function () {
          if (e.detail.cb) {
            e.detail.cb()
          }
        })
      })
    },

    // 计算在视窗内渲染的数据
    _calcViewportIndexes: function _calcViewportIndexes(left, top, cb) {
      const that = this
      // const st = +new Date
      this._getBeforeSlotHeight(function () {
        const _that$__calcViewportI = that.__calcViewportIndexes(left, top)
        const beginIndex = _that$__calcViewportI.beginIndex
        const endIndex = _that$__calcViewportI.endIndex
        const minTop = _that$__calcViewportI.minTop
        const afterHeight = _that$__calcViewportI.afterHeight
        const maxTop = _that$__calcViewportI.maxTop

        if (cb) {
          cb(beginIndex, endIndex, minTop, afterHeight, maxTop)
        }
      })
    },
    _getBeforeSlotHeight: function _getBeforeSlotHeight(cb) {
      if (typeof this.data.beforeSlotHeight !== 'undefined') {
        if (cb) {
          cb(this.data.beforeSlotHeight)
        }
      } else {
        this.reRender(cb)
      }
    },
    _getAfterSlotHeight: function _getAfterSlotHeight(cb) {
      if (typeof this.data.afterSlotHeight !== 'undefined') {
        if (cb) {
          cb(this.data.afterSlotHeight)
        }
        // cb && cb(this.data.afterSlotHeight)
      } else {
        this.reRender(cb)
      }
    },
    _getIndexes: function _getIndexes(minTop, maxTop) {
      if (minTop === maxTop && maxTop === 0) {
        return {
          beginIndex: -1,
          endIndex: -1
        }
      }
      const startLine = Math.floor(minTop / RECT_SIZE)
      const endLine = Math.ceil(maxTop / RECT_SIZE)
      const rectEachLine = Math.floor(this.data.width / RECT_SIZE)
      let beginIndex = 0
      let endIndex = 0
      const sizeMap = this.sizeMap
      for (let i = startLine; i <= endLine; i++) {
        for (let col = 0; col < rectEachLine; col++) {
          const key = i + '.' + col
          // 找到sizeMap里面的最小值和最大值即可
          if (!sizeMap[key]) continue
          for (let j = 0; j < sizeMap[key].length; j++) {
            if (typeof beginIndex === 'undefined') {
              beginIndex = endIndex = sizeMap[key][j]
              continue
            }
            if (beginIndex > sizeMap[key][j]) {
              beginIndex = sizeMap[key][j]
            } else if (endIndex < sizeMap[key][j]) {
              endIndex = sizeMap[key][j]
            }
          }
        }
      }
      return {
        beginIndex,
        endIndex
      }
    },
    _isIndexValid: function _isIndexValid(beginIndex, endIndex) {
      if (typeof beginIndex === 'undefined' || beginIndex === -1 || typeof endIndex === 'undefined' || endIndex === -1 || endIndex >= this.sizeArray.length) {
        return false
      }
      return true
    },
    __calcViewportIndexes: function __calcViewportIndexes(left, top) {
      if (!this.sizeArray.length) return {}
      const pos = this._pos
      if (typeof left === 'undefined') {
        left = pos.left
      }
      if (typeof top === 'undefined') {
        top = pos.top
      }
      // top = Math.max(top, this.data.beforeSlotHeight)
      const beforeSlotHeight = this.data.beforeSlotHeight || 0
      // 和direction无关了
      const SHOW_SCREENS = this.data.screen
      let minTop = top - pos.height * SHOW_SCREENS - beforeSlotHeight
      let maxTop = top + pos.height * SHOW_SCREENS - beforeSlotHeight
      // maxTop或者是minTop超出了范围
      if (maxTop > this.totalHeight) {
        minTop -= maxTop - this.totalHeight
        maxTop = this.totalHeight
      }
      if (minTop < beforeSlotHeight) {
        maxTop += Math.min(beforeSlotHeight - minTop, this.totalHeight)
        minTop = 0
      }
      // 计算落在minTop和maxTop之间的方格有哪些
      const indexObj = this._getIndexes(minTop, maxTop)
      const beginIndex = indexObj.beginIndex
      let endIndex = indexObj.endIndex
      if (endIndex >= this.sizeArray.length) {
        endIndex = this.sizeArray.length - 1
      }
      // 校验一下beginIndex和endIndex的有效性,
      if (!this._isIndexValid(beginIndex, endIndex)) {
        return {
          beginIndex: -1,
          endIndex: -1,
          minTop: 0,
          afterHeight: 0,
          maxTop: 0
        }
      }
      // 计算白屏的默认占位的区域
      const maxTopFull = this.sizeArray[endIndex].beforeHeight + this.sizeArray[endIndex].height
      const minTopFull = this.sizeArray[beginIndex].beforeHeight

      // console.log('render indexes', beginIndex, endIndex)
      const afterHeight = this.totalHeight - maxTopFull
      return {
        beginIndex,
        endIndex,
        minTop: minTopFull, // 取整, beforeHeight的距离
        afterHeight,
        maxTop
      }
    },
    setItemSize: function setItemSize(size) {
      this.sizeArray = size.array
      this.sizeMap = size.map
      if (size.totalHeight !== this.totalHeight) {
        // console.log('---totalHeight is', size.totalHeight);
        this.setData({
          totalHeight: size.totalHeight,
          useInPage: this.useInPage || false
        })
      }
      this.totalHeight = size.totalHeight
    },
    setList: function setList(key, newList) {
      this._currentSetDataKey = key
      this._currentSetDataList = newList
    },
    setPage: function setPage(page) {
      this.page = page
    },
    forceUpdate: function forceUpdate(cb, reInit) {
      const _this2 = this

      if (!this._isReady) {
        if (this._updateTimerId) {
          // 合并多次的forceUpdate
          clearTimeout(this._updateTimerId)
        }
        this._updateTimerId = setTimeout(function () {
          _this2.forceUpdate(cb, reInit)
        }, 10)
        return
      }
      this._updateTimerId = null
      const that = this
      if (reInit) {
        this.reRender(function () {
          that._scrollViewDidScroll({
            detail: {
              scrollLeft: that._pos.left,
              scrollTop: that.currentScrollTop || that.data.scrollTop || 0,
              ignoreScroll: true,
              cb
            }
          }, true)
        })
      } else {
        this._scrollViewDidScroll({
          detail: {
            scrollLeft: that._pos.left,
            scrollTop: that.currentScrollTop || that.data.scrollTop || 0,
            ignoreScroll: true,
            cb
          }
        }, true)
      }
    },
    _initPosition: function _initPosition(cb) {
      const that = this
      that._pos = {
        left: that.data.scrollLeft || 0,
        top: that.data.scrollTop || 0,
        width: this.data.width,
        height: Math.max(500, this.data.height), // 一个屏幕的高度
        direction: 0
      }
      this.reRender(cb)
    },
    _widthChanged: function _widthChanged(newVal) {
      if (!this._isReady) return newVal
      this._pos.width = newVal
      this.forceUpdate()
      return newVal
    },
    _heightChanged: function _heightChanged(newVal) {
      if (!this._isReady) return newVal
      this._pos.height = Math.max(500, newVal)
      this.forceUpdate()
      return newVal
    },
    reRender: function reRender(cb) {
      const _this3 = this

      let beforeSlotHeight = 0
      let afterSlotHeight = 0
      const that = this
      // const reRenderStart = Date.now()
      function newCb() {
        if (that._lastBeforeSlotHeight !== beforeSlotHeight || that._lastAfterSlotHeight !== afterSlotHeight) {
          that.setData({
            hasBeforeSlotHeight: true,
            hasAfterSlotHeight: true,
            beforeSlotHeight,
            afterSlotHeight
          })
        }
        that._lastBeforeSlotHeight = beforeSlotHeight
        that._lastAfterSlotHeight = afterSlotHeight
        // console.log('_getBeforeSlotHeight use time', Date.now() - reRenderStart)
        if (cb) {
          cb()
        }
      }
      // 重新渲染事件发生
      let beforeReady = false
      let afterReady = false
      // fix：#16 确保获取slot节点实际高度
      this.setData({
        hasBeforeSlotHeight: false,
        hasAfterSlotHeight: false
      }, function () {
        _this3.createSelectorQuery().select('.slot-before').boundingClientRect(function (rect) {
          beforeSlotHeight = rect.height
          beforeReady = true
          if (afterReady) {
            if (newCb) {
              newCb()
            }
          }
        }).exec()
        _this3.createSelectorQuery().select('.slot-after').boundingClientRect(function (rect) {
          afterSlotHeight = rect.height
          afterReady = true
          if (beforeReady) {
            if (newCb) {
              newCb()
            }
          }
        }).exec()
      })
    },
    _setInnerBeforeAndAfterHeight: function _setInnerBeforeAndAfterHeight(obj) {
      if (typeof obj.beforeHeight !== 'undefined') {
        this._tmpBeforeHeight = obj.beforeHeight
      }
      if (obj.afterHeight) {
        this._tmpAfterHeight = obj.afterHeight
      }
    },
    _recycleInnerBatchDataChanged: function _recycleInnerBatchDataChanged(cb) {
      const _this4 = this

      if (typeof this._tmpBeforeHeight !== 'undefined') {
        const setObj = {
          innerBeforeHeight: this._tmpBeforeHeight || 0,
          innerAfterHeight: this._tmpAfterHeight || 0
        }
        if (typeof this._tmpInnerScrollTop !== 'undefined') {
          setObj.innerScrollTop = this._tmpInnerScrollTop
        }
        const pageObj = {}
        let hasPageData = false
        if (typeof this._currentSetDataKey !== 'undefined') {
          pageObj[this._currentSetDataKey] = this._currentSetDataList
          hasPageData = true
        }
        const saveScrollWithAnimation = this.data.scrollWithAnimation
        const groupSetData = function groupSetData() {
          // 如果有分页数据的话
          if (hasPageData) {
            _this4.page.setData(pageObj)
          }
          _this4.setData(setObj, function () {
            _this4.setData({
              scrollWithAnimation: saveScrollWithAnimation
            })
            if (typeof cb === 'function') {
              cb()
            }
          })
        }
        groupSetData()
        delete this._currentSetDataKey
        delete this._currentSetDataList
        this._tmpBeforeHeight = undefined
        this._tmpAfterHeight = undefined
        this._tmpInnerScrollTop = undefined
      }
    },
    _renderByScrollTop: function _renderByScrollTop(scrollTop) {
      // 先setData把目标位置的数据补齐
      this._scrollViewDidScroll({
        detail: {
          scrollLeft: this._pos.scrollLeft,
          scrollTop,
          ignoreScroll: true
        }
      }, true)
      if (this.data.scrollWithAnimation) {
        this._isScrollingWithAnimation = true
      }
      this.setData({
        innerScrollTop: scrollTop
      })
    },
    _scrollTopChanged: function _scrollTopChanged(newVal, oldVal) {
      const _this5 = this

      // if (newVal === oldVal && newVal === 0) return
      if (!this._isInitScrollTop && newVal === 0) {
        this._isInitScrollTop = true
        return newVal
      }
      this.currentScrollTop = newVal
      if (!this._isReady) {
        if (this._scrollTopTimerId) {
          clearTimeout(this._scrollTopTimerId)
        }
        this._scrollTopTimerId = setTimeout(function () {
          _this5._scrollTopChanged(newVal, oldVal)
        }, 10)
        return newVal
      }
      this._isInitScrollTop = true
      this._scrollTopTimerId = null
      // this._lastScrollTop = oldVal
      if (typeof this._lastScrollTop === 'undefined') {
        this._lastScrollTop = this.data.scrollTop
      }
      // 滑动距离小于一个屏幕的高度, 直接setData
      if (Math.abs(newVal - this._lastScrollTop) < this._pos.height) {
        this.setData({
          innerScrollTop: newVal
        })
        return newVal
      }
      if (!this._isScrollTopChanged) {
        // 首次的值需要延后一点执行才能生效
        setTimeout(function () {
          _this5._isScrollTopChanged = true
          _this5._renderByScrollTop(newVal)
        }, 10)
      } else {
        this._renderByScrollTop(newVal)
      }
      return newVal
    },
    _scrollToIndexChanged: function _scrollToIndexChanged(newVal, oldVal) {
      const _this6 = this

      // if (newVal === oldVal && newVal === 0) return
      // 首次滚动到0的不执行
      if (!this._isInitScrollToIndex && newVal === 0) {
        this._isInitScrollToIndex = true
        return newVal
      }
      if (!this._isReady) {
        if (this._scrollToIndexTimerId) {
          clearTimeout(this._scrollToIndexTimerId)
        }
        this._scrollToIndexTimerId = setTimeout(function () {
          _this6._scrollToIndexChanged(newVal, oldVal)
        }, 10)
        return newVal
      }
      this._isInitScrollToIndex = true
      this._scrollToIndexTimerId = null
      if (typeof this._lastScrollTop === 'undefined') {
        this._lastScrollTop = this.data.scrollTop
      }
      const rect = this.boundingClientRect(newVal)
      if (!rect) return newVal
      // console.log('rect top', rect, this.data.beforeSlotHeight)
      const calScrollTop = rect.top + (this.data.beforeSlotHeight || 0)
      this.currentScrollTop = calScrollTop
      if (Math.abs(calScrollTop - this._lastScrollTop) < this._pos.height) {
        this.setData({
          innerScrollTop: calScrollTop
        })
        return newVal
      }
      if (!this._isScrollToIndexChanged) {
        setTimeout(function () {
          _this6._isScrollToIndexChanged = true
          _this6._renderByScrollTop(calScrollTop)
        }, 10)
      } else {
        this._renderByScrollTop(calScrollTop)
      }
      return newVal
    },

    // 提供给开发者使用的接口
    boundingClientRect: function boundingClientRect(idx) {
      if (idx < 0 || idx >= this.sizeArray.length) {
        return null
      }
      return {
        left: 0,
        top: this.sizeArray[idx].beforeHeight,
        width: this.sizeArray[idx].width,
        height: this.sizeArray[idx].height
      }
    },

    // 获取当前出现在屏幕内数据项， 返回数据项组成的数组
    // 参数inViewportPx表示当数据项至少有多少像素出现在屏幕内才算是出现在屏幕内，默认是1
    getIndexesInViewport: function getIndexesInViewport(inViewportPx) {
      if (!inViewportPx) {
        inViewportPx = 1
      }
      const scrollTop = this.currentScrollTop
      let minTop = scrollTop + inViewportPx
      if (minTop < 0) minTop = 0
      let maxTop = scrollTop + this.data.height - inViewportPx
      if (maxTop > this.totalHeight) maxTop = this.totalHeight
      const indexes = []
      for (let i = 0; i < this.sizeArray.length; i++) {
        if (this.sizeArray[i].beforeHeight + this.sizeArray[i].height >= minTop && this.sizeArray[i].beforeHeight <= maxTop) {
          indexes.push(i)
        }
        if (this.sizeArray[i].beforeHeight > maxTop) break
      }
      return indexes
    },
    getTotalHeight: function getTotalHeight() {
      return this.totalHeight
    },
    setUseInPage: function setUseInPage(useInPage) {
      this.useInPage = useInPage
    },
    setPlaceholderImage: function setPlaceholderImage(svgs, size) {
      const fill = 'style=\'fill:rgb(204,204,204);\''
      const placeholderImages = ['data:image/svg+xml,%3Csvg height=\'' + size.height + '\' width=\'' + size.width + '\' xmlns=\'http://www.w3.org/2000/svg\'%3E']
      svgs.forEach(function (svg) {
        placeholderImages.push('%3Crect width=\'' + svg.width + '\' x=\'' + svg.left + '\' height=\'' + svg.height + '\' y=\'' + svg.top + '\' ' + fill + ' /%3E')
      })
      placeholderImages.push('%3C/svg%3E')
      this.setData({
        placeholderImageStr: placeholderImages.join('')
      })
    }
  }
})
