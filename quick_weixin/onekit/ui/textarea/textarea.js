// onekit/ui/textarea/textarea.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field'],
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    Id:{type:String,value:""},
    value:{type:String},
    name:{type:String},
    placeholder:{type:String,value:""},
    placeholderStyle :{type:String,value:""},
    placeholderClass :{type:String,value:""},
    disabled :{type:Boolean,value:false},
    maxlength :{type:Number,value:"140"},
    focus :{type:Boolean,value:false},
    autoHeight:{type:Boolean,value:false},
    
    showCount:{type:Boolean,value:true},
    controlled:{type:Boolean,value:false}
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
