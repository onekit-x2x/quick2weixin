Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties:{
    value:String
  },
  methods:{
  option_tap(e){
   // console.log("A",e);
    const value = e.target.dataset.value;
    this.triggerEvent('onekit_option_change', {value}, { bubbles: true, composed: true }) 
  }
}
})
