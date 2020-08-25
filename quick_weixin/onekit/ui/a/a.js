import router from "../../../onekit/api/system/router"
Component({
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    onekitId:{type:String,value:""},
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
