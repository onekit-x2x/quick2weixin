// onekit/page/media.takePhoto/takePhon.js
Page({
  /**拍摄 */
  data:{},
  takePhoto() {
    var that =this;
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      success: (res) => {
        var path = res.tempImagePath;
        var result= {
          uri:path,
          name:path.substring(path.lastIndexOf("/")+1),
        }
      wx.getFileInfo({
        filePath:res.tempImagePath,
        success:function(res){
          result.size = res.size,
          that.a = result.uri;
          that.eventChannel.emit('success', result);
          wx.navigateBack({
            delta:1
          })
        }
      });
      }
    })
  },
  /**录制视频 */
  startRecord(){
    var that =this;
    const ctx = wx.createCameraContext()
    ctx.startRecord({
    })
  },
  
   /**停止录制视频 */
   stopRecord(){
    var that =this;
    const ctx = wx.createCameraContext()
    ctx.stopRecord({
      success:function(res){
        var path = res.tempVideoPath;
        var result= {
          uri:path,
          name:path.substring(path.lastIndexOf("/")+1),
        }
        wx.getFileInfo({
          filePath:res.tempVideoPath,
          success:function(res){
            result.size = res.size,
            that.a = result.uri;
            that.eventChannel.emit('success', result);
          }
        });
      },
    })
  },
  onLoad:function(option){
    this.setData({option})
    console.log(this.data.option.type)
    this.eventChannel = this.getOpenerEventChannel()
  },

  onUnload:function(){
    if(!this.a){
      this.eventChannel.emit('cancel',"已取消！")
    }
    
  }
})