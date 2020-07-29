function OnekitPage(options){
  options.data = options.private;
  options.private = null;
  //
  options.onLoad = function(query){
    this.onInit(query);
  }
  options.$set = function(key,value){
    this.setData({[key]:value});
  }
  Page(options);
};
module.exports = {OnekitPage};