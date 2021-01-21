// onekit/ui/swiper/swiper.js
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
    index: {
      type: Number,
      value: 0
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    interval: {
      type: Number,
      value: 3000,
    },
    indicator: {
      type: Boolean,
      value: true
    },
    duration: {
      type: Number,
    },
    vertical: {
      type: Boolean,
      value: false
    },
    previousmargin: {
      type: String,
      value: '0px'
    },
    nextmargin: {
      type: String,
      value: '0px'
    }
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

  }
})
