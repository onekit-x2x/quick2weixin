// onekit/ui/tab-content/tab-content.js
Component({
  options: {
    virtualHost: true,
    multipleSlots: true
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    scrollable:{type:Boolean,value:true},
    count:Number
  }
})
