/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  showToast(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_message = quick_object.message
    const quick_duration = quick_object.duration || 1000
    // //////////////////////////////////////////
    const wx_object = {
      icon: 'none',
    }
    if (quick_message) {
      wx_object.title = quick_message
    }
    if (quick_duration) {
      wx_object.duration = quick_duration
    }
    wx.showToast(wx_object)
  },

  showDialog(quick_object) {
    if (!quick_object) {
      return
    }
    // 标题
    const quick_title = quick_object.title
    // 内容
    const quick_message = quick_object.message
    // 按钮数组
    const quick_buttons = quick_object.buttons
    // 点击遮罩是否关闭对话框,待补充
    const quick_autocancel = quick_object.autocancel || true
    const quick_success = quick_object.success
    // const quick_cancel = quick_object.cancel
    const quick_complete = quick_object.complete
    quick_object = null
    // /////////////////////////////////////////////
    const wx_object = {
      quick_autocancel,
    }
    if (quick_title) {
      wx_object.title = quick_title
    }
    if (quick_message) {
      wx_object.content = quick_message
    }
    if (quick_buttons) {
      const length = Math.min(3, quick_buttons.length)
      for (let i = 0; i < length; i++) {
        const button = quick_buttons[i]
        if (i === 0) {
          // 确定按钮
          wx_object.confirmText = button.text || '确定'
          wx_object.confirmColor = button.color || '#000000'
        } else if (i === 1) {
          // 取消按钮
          wx_object.cancelText = button.text || '取消'
          wx_object.cancelColor = button.color || '#000000'
        } else {
          break
        }
      }
    }
    wx_object.success = function (res) {
      console.log(res)
      let index = 0
      if (res.cancel) {
        index = 1
      }
      if (quick_success) {
        quick_success({
          index
        })
      }
      if (quick_complete) {
        quick_complete({
          index
        })
      }
    }
    wx_object.cancel = function (res) {
      console.log(res)
    }

    wx.showModal(wx_object)
  },

  showContextMenu(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_itemList = quick_object.itemList
    const quick_itemColor = quick_object.itemColor
    const quick_success = quick_object.success
    const quick_cancel = quick_object.cancel
    const quick_complete = quick_object.complete
    // //////////////////////////////////////////////
    const wx_object = {
      itemList: quick_itemList,
      itemColor: quick_itemColor
    }
    wx_object.success = function (res) {
      console.log(res)
      if (quick_success) {
        quick_success({
          index: res.tapIndex
        })
      }
      if (quick_complete) {
        quick_complete({
          index: res.tapIndex
        })
      }
    }
    wx_object.fail = function (res) {
      console.log(res)
      const quick_data = {}
      if (quick_cancel) {
        quick_cancel(quick_data)
      }
      if (quick_complete) {
        quick_complete(quick_data)
      }
    }
    wx.showActionSheet(wx_object)
  }
}
