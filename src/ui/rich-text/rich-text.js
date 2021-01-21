import HTML from '../../lib/HTML'

Component({
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
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
    nodes: {
      type: String,
      value: '',
    }
  },
  lifetimes: {
    attached() {
      let nodes = this.properties.nodes
      if (typeof (nodes) === 'string') {
        nodes = HTML.html2nodes(nodes)
        this.setData({
          nodes
        })
      }
      this.setData({
        nodes: this.properties.nodes
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的初始数据
   */

  data: {},

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
