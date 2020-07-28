Component({
   options: {
      virtualHost: true
    },
      properties: {
         devicePosition:{
          type:String,
          value:'back',
         },
         flash:{
          type:String,
          value:'auto',
         },
      },
  
  
      methods: {
        
         camera_error(e){
          console.log("camera_error", e);
          this.triggerEvent('error',e.details)
         },
      }
  });