// onekit/ui/picker/picker.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    Id:{type:String,value:""},
    title:{type:String},
    range:{type:Array},
    value:{type:Number,value:0},
    selected:{type:String,value:""},
 
    start:{type:String,value:"1970-1-1"},
    end:{type:String,value:"2100-12-31"},
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
    piker_change(e){
      this.triggerEvent("Change",{})
    }
  }
})
