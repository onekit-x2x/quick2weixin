function OnekitPage(options){
  /*for(var key in options){
    var method = options[key];
    if(typeof method == 'function'){
      if(["onInit"].indexOf(key)<0){
        console.log(key)
        options[`onekit_${key}`] = function(e){
          console.log("xxxx2");
        };
        console.log(options);
      }
    }
  }*/
  options.data = options.private;
  options.private = null;
  //
  options.onLoad = function(query){
    this.onInit(query);
  };
  options.$set = function(key,value){
    this.setData({[key]:value});
  }
  Page(options);
};
module.exports = {OnekitPage};