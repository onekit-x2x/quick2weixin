/* eslint-disable consistent-return */
/* eslint-disable getter-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */

module.exports = {

  play() {
    getApp().onekit_inneraudioContextplay = 'play'
    this.inneraudioContext.play()
  },

  pause() {
    getApp().onekit_inneraudioContextplay = 'pause'
    this.inneraudioContext.pause()
  },

  stop() {
    getApp().onekit_inneraudioContextplay = 'stop'
    this.inneraudioContext.stop()
  },

  getPlayState() {
    let state
    switch (getApp().onekit_inneraudioContextplay) {
      case 'play':
        state = 'play'
        break
      case 'pase':
        state = 'pase'
        break
      default:
        state = 'stop'
        break
    }
    const quick_res = {
      state
    }
    return quick_res
  },

  set src(src) {
    const InnerAudioContext = wx.createInnerAudioContext()
    this.inneraudioContext = InnerAudioContext
    this.inneraudioContext.src = src
  },

  set currentTime(currentTime) {
    this.inneraudioContext.currentTime = currentTime
  },
  get currentTime() {
    if (wx.createInnerAudioContext().currentTime) {
      return wx.createInnerAudioContext().currentTime
    }
  },

  get duration() {
    if (wx.createInnerAudioContext().duration) {
      return wx.createInnerAudioContext().duration
    }
  },

  set autoplay(autoplay) {
    this.inneraudioContext.autoplay = autoplay
  },
  get autoplay() {
    if (getApp().onekit_autoplay) {
      return getApp().onekit_autoplay
    } else {
      return false
    }
  },

  set loop(loop) {
    this.inneraudioContext.loop = loop
  },
  get loop() {
    if (this.inneraudioContext.loop) {
      return this.inneraudioContext.loop
    } else {
      return false
    }
  },

  set volume(volume) {
    this.inneraudioContext.volume = volume
  },
  get volume() {
    if (this.inneraudioContext.volume) {
      return this.inneraudioContext.volume
    } else {
      return 1
    }
  },

  set muted(muted) {
    this.inneraudioContext.obeyMuteSwitch = muted
  },

  get notificationVisible() {
    if (this.inneraudioContext.obeyMuteSwitch) {
      return this.inneraudioContext.obeyMuteSwitch
    } else {
      return true
    }
  },

  set title(title) {
    console.log('title is not support')
  },

  set artist(artist) {
    console.log('artist is not support')
  },

  set cover(cover) {
    console.log('cover is not support')
  },

  set streamType(streamType) {
    console.log('streamType is not support')
  },
}
