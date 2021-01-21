// onekit/ui/slider/slider.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field-group'],
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
    min: {
      type: String,
      value: 0
    },
    max: {
      type: Number,
      value: 100
    },
    step: {
      type: Number,
      value: 1
    },
    value: {
      type: Number,
      value: 0
    },
    blockColor: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    slider_change() {
      this.triggerEvent('Change', {})
    },

  }
})
