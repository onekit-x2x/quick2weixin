
Page({
  onUnload : function(){
    wx.hideLoading();
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '处理中',
    });
    this.params = JSON.parse(options.params);

    this.eventChannel = this.getOpenerEventChannel();
    // eventChannel.on('acceptDataFromOpenerPage', function (data) {
    //   console.log(data)
    // })

    wx.createSelectorQuery()
      .select('#myCanvas')
      .fields({
        node: true,
        size: true,
      })
      .exec(this.init.bind(this))
  },
  init(res) {
    var that = this;
    console.log(this.params);
    var canvas = res[0].node;
    var context = canvas.getContext('2d')
    this.doit(this.params.uri, canvas, context, 0);

  },
  eventHandler(res){
    this.eventChannel.emit('success', { uri: res.tempFilePath });
    this.eventChannel.emit('complete', { uri: res.tempFilePath });
  },
  doit(imgUrl, canvas, context, index){
    var that = this;
    if (index >= this.params.operations.length){
      //回调
      that.eventHandler({
        tempFilePath : imgUrl
      });
      wx.navigateBack({
        delta: 1
      })
      return;
    }
    var operation = this.params.operations[index];
    const img = canvas.createImage();
    img.onload = function () {
      if (operation.action == "crop") {
        that.crop(img, canvas, context, operation, index);
      } else if (operation.action == "scale") {
        that.scale(img, canvas, context, operation, index);
      } else if (operation.action == "rotate") {
        that.rotate(img, canvas, context, operation, index);
      }
    }
    img.src = imgUrl;

  },
  rotate(img, canvas, context, operation, index) {

    var that = this;
    var img_width = img.width;
    var img_height = img.height;
    // A
    var degree = operation.degree;
    var agree = degree * Math.PI / 180;
    var x = Math.sin(agree) * img_height;
    var img_width2 = Math.sin(agree) * img_height + Math.cos(agree) * img_width;
    var img_height2 = Math.cos(agree) * img_height + Math.sin(agree) * img_width;
    img_width = img_width2;
    img_height = img_height2;

    canvas.width = img_width;
    canvas.height = img_height;
    that.setData({ canvas_width: img_width, canvas_height: img_height });
    // B
    console.log(context);
    context.translate(x, 0);
    context.rotate(degree * Math.PI / 180);
    ////////////////////////////////////////////////
    context.drawImage(img, 0, 0);
    wx.canvasToTempFilePath({
      canvasId: "myCanvas",
      canvas: canvas,
      fileType: that.params.format,
      quality: that.params.quality,
      success: function (res) {
        console.log("rotate success ", res);
        that.doit(res.tempFilePath, canvas, context, ++index);
      },
      fail: function (res) {
        console.log("rotate fail ", res);
      }

    }, this);
  }, 
  
  scale(img, canvas, context, operation, index) {
    var that = this;
    var img_width = img.width;
    var img_height = img.height;
    var img_width2, img_height2;
    
    // A
    var scaleX = operation.scaleX;
    var scaleY = operation.scaleY;
    img_width = img_width * scaleX;
    img_height = img_height * scaleY;
    //
    canvas.width = img_width;
    canvas.height = img_height;
    that.setData({ canvas_width : img_width, canvas_height : img_height });

    // B
    context.scale(scaleX, scaleY);
    ////////////////////////////////////////////////
    context.drawImage(img, 0, 0);
    wx.canvasToTempFilePath({
      canvasId: "myCanvas",
      canvas: canvas,
      fileType: that.params.format,
      quality: that.params.quality,
      success: function (res) {
        console.log("scale success ", res);
        that.doit(res.tempFilePath, canvas, context, ++index);
      },
      fail: function (res) {
        console.log("scale fail ", res);
      }
    }, this);
  },

  crop(img, canvas, context, operation, index) {
    var that = this;
    var img_width = img.width;
    var img_height = img.height;
    // A
    var x = operation.x;
    var y = operation.y;
    var img_width = operation.width;
    var img_height = operation.height;
    //
    canvas.width = img_width;
    canvas.height = img_height;
    that.setData({ canvas_width : img_width, canvas_height : img_height });
    // B
    console.log(context);
    context.translate(-x, -y);
    ////////////////////////////////////////////////
    context.drawImage(img, 0, 0);
    wx.canvasToTempFilePath({
      canvasId: "myCanvas",
      canvas: canvas,
      fileType: that.params.format,
      quality: that.params.quality,
      success: function (res) {
        console.log("crop success ", res);
        that.doit(res.tempFilePath, canvas, context, ++index);
      },
      fail: function (res) {
        console.log("crop fail ", res);
      }

    }, this);
  }
})