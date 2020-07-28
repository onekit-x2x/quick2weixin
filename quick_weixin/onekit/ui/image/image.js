// onekit/ui/image/image.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    Class: {
      type: String,
      value: ""
    },
    Style: {
      type: String,
      value: ""
    },
    // 快应用：wx
    src:{
      type:String,
      value:''
    },
    alt: {
      type:String,
    }
  },

  methods: {
    image_load(e){
//    console.log("[image_load]",e)
      var width = e.detail.width;
      var height = e.detail.height;
      this.triggerEvent("complete",{width,height})
    },
    image_error(e){
//    console.log("[image_error]",e)
      this.triggerEvent("error",e.detail)
    }
  }
})