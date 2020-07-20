import router from "../../../onekit/api/system/router"
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    Style:String,
    Class:String,
    href:{
      type:String,
      value:''
    }
  },
  lifetimes: {
    attached: function() {
    this.setData({href:this.properties.href});
    console.log(this.data)
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  data: {
  },
  methods: {
    a_bindtap(e){
      router.push({
        uri: this.data.href,
        params:this.data.params
      })
    }
  }
})
