import websocketfactory from "../../onekit/api/system/websocketfactory.js";
let ws = {
    websocket1: null,
    websocket2: null,
  }
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  create1(){
    this.create("websocket1", false);
  },
  create2(){
    this.create("websocket2", true);
  },

  create(name, isbuffer) {
    console.log(name, isbuffer);
    // var name = "websocket1";
    // var isbuffer = true;
    if (ws[name]) {
      // prompt.showToast({
      //   message: `[client ${name}] has been existed`
      // })
      console.log(`[client ${name} has been existed]`);
      return false
    }
    // prompt.showToast({
    //   message: `[client ${name}] is creating, wait please.`
    // })
    console.log(`[client ${name} is creating, wait please]`);

    let _ws = websocketfactory.create({
      // url: isbuffer === true ? 'ws://demos.kaazing.com/echo' : 'wss://echo.websocket.org',
      url: isbuffer === true ? 'ws://localhost/quick/quick/websocket/websocket2' : 'ws://localhost/quick/quick/websocket/websocket1',
      header: {
        'content-type': 'application/json'
      },
      protocols: ['protocol2']
    })
  
    console.info("ssssssss", _ws);
    if (isbuffer === true) {
      _ws.binaryType = 'arraybuffer'
    }
    _ws.onopen = function () {
      console.info("ddddddddddd");
      // prompt.showToast({
      //   message: `[client ${name}] connect open`
      // })
    }

    _ws.onopen = function () {
      // prompt.showToast({
      //   message: `[client ${name}] connect open`
      // })
      console.log(`[client ${name} connect open]`);
    }

    _ws.onmessage = function (data) {
      let res = data.data
      let type = Object.prototype.toString.call(res)
      function ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint16Array(buf))
      }
      if (Object.prototype.toString.call(res) === '[object ArrayBuffer]') {
        res = ab2str(res)
      }
      // prompt.showToast({
      //   message: `[client ${name}] has received,type: ${type}; message: ${res} from server`
      // })
      console.log(`getMessage : ${data.data}`);
    }

    _ws.onerror = function (data) {
      console.info(data);
      // prompt.showToast({
      //   message: `onerror [client ${name}] data.data = ${data.data}`
      // })
      console.log(`onerror [client ${name}] data.data = ${data.data}`);
    }

    _ws.onclose = function (data) {
      console.info(data);
      // prompt.showToast({
      //   message: `onclose [client ${name}] data.code = ${data.code}, data.reason = ${data.reason}, data.wasClean = ${data.wasClean}`
      // })
      console.log(`onclose [client ${name}] data.code = ${data.code}, data.reason = ${data.reason}, data.wasClean = ${data.wasClean}`);
    }

    ws[name] = _ws
  },

  handleChange(e) {
    this.message = e.value
  },
  send1(){
    this.send("websocket1");
  },
  send2(){
    this.send("websocket2");
  },
  send(name) {
    // var name = "websocket1";
    let _ws = ws[name]
    if (!_ws) {
      return false
    }

    this.message = "abc";
    function str2ab(str) {
      var buf = new ArrayBuffer(str.length * 2) // 每个字符占用2个字节
      var bufView = new Uint16Array(buf)
      for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i)
      }
      return buf;
    }
    let msg = _ws.binaryType !== 'arraybuffer' ? this.message : str2ab(this.message)
    // var msg = "hello, I'm weChat";
    _ws.send({
      data: msg,
      success: function () {
        console.log(msg);
        // prompt.showToast({
        //   message: `[client ${name}] send success`
        // })
        console.log(`[client ${name}] send success`);
      },
      fail: function (data, code) {
        // prompt.showToast({
        //   message: `[client ${name}] handling fail, code = ${code}`
        // })
        console.log(`[client ${name}] handling fail, code = ${code}`);
      }
    })
  },
  close1(){
    this.close("websocket1");
  },
  close2(){
    this.close("websocket2");
  },

  close(name) {
    // var name = "websocket1";
    if (!ws[name]) {
      return false
    }
    ws[name].close({
      success: function () {
        // prompt.showToast({
        //   message: `[client ${name}] close success`
        // })
        console.log(`[client ${name}] close success`);
        ws[name] = null
      },
      fail: function (data, code) {
        // prompt.showToast({
        //   message: `[client ${name}] handling fail, code = ${code}`
        // })
        console.log(`[client ${name}] handling fail, code = ${code}`);
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})