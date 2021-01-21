Component({
  relations: {
    '../list/list': {
      type: 'parent', // 关联的目标节点应为子节点
      linked: function linked() {}
    }
  },
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    type: {
      type: String,
      value: ''
    },
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
  },

  /**
   * 组件的初始数据
   */
  data: {
    // height: 100
  },

  /**
   * 组件的方法列表
   */
  methods: {
    heightChange: function heightChange() {}
  }
})
