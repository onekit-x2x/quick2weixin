Component({
  options: {
    virtualHost: true
  },
  properties:{
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    Id:{type:String,value:""},
    value:{type:String,value:""}
  },
  methods:{
  option_tap(e){
   // console.log("A",e);
    const value = e.target.dataset.value;
    this.triggerEvent('onekit_option_change', {value}, { bubbles: true, composed: true }) 
  }
}
})
