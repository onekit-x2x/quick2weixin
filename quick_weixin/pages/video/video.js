
// import prompt from "../../onekit/api/system/prompt.js";
// import network from "../../onekit/api/system/network.js";

Page({
  data: {
    componentName: 'video',
    showicon: true,
    ignorenet: false,
    showControls: true,
    muted: true,
    objectFitValues: [
      "cover", "contain", "fill", "none", "scale-down"
    ],
    objectFitClass: ''
  },
  onLoad() {
  //  this.$page.setTitleBar({ text: 'Video' })
  },
  startVideo(e) {
    if (e.usenet) {
      // 非wifi情况下继续播放
      this.ignorenet = true
    }
    this.networkstatus('video')
  },
  networkstatus() {
    network.subscribe({
      callback: function (data) {
        if (data.type === 'wifi' || this.ignorenet) {
          this.$element('video').start()
          this.showmask = false
        } else {
          this.showmask = true
          this.$element('video').pause()
          this.showicon = false
        }
      }.bind(this)
    })
  },
  switchShowControls(e) {
    this.showControls = e.checked
  },
  onMutedSwitched(e) {
    this.muted = e.checked
  },
  onMulchSwitched(e) {
    this.$element('stackDemo01').requestFullscreen({ screenOrientation: "landscape" })
  },
  changeOption(e) {
    this.objectFitClass = e.newValue
    prompt.showToast({
      message: `object-fit切换为 ${e.newValue}`
    })
  }

});