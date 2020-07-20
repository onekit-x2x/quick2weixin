import audio from "../../onekit/api/system/audio.js"
Page({
  data: {},
  onLoad: function() {
    audio.ontimeupdate = function () {
			console.log(`audio current time:`,audio)
		}
		//audio.ontimeupdate = null
			audio.src = "https://www.onekitwx.com/quick/demo.mp3";
			audio.tilte = "上一首歌名";
			audio.play();
  },

})