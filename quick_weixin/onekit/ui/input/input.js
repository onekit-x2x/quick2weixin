// onekit/ui/input/input.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field'],
  options: {
    virtualHost: true
   
  },
  properties: {
    name:{type:String},
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    Id:{type:String,value:""},
    value:{type:String},
    type:{type:String,value:"text"},
    placeholder:{type:String,value:""},
    maxlength :{type:Number,value:"140"},
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange:function(e){
      console.log("input",e)
      this.setData({
        value: e.detail.value,
      })
    }
  }
})