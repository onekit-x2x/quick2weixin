/* eslint-disable consistent-return */
/* eslint-disable getter-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */

module.exports = {

  play() {
    getApp().onekit_play = 'play'
    if (getApp().onekit_src) {
      this.inneraudioContext.src = getApp().onekit_src
    }
    if (getApp().onekit_currentTime) {
      this.inneraudioContext.currentTime = getApp().onekit_currentTime
    }
    if (getApp().onekit_autoplay) {
      this.inneraudioContext.autoplay = getApp().onekit_autoplay
    } else {
      this.inneraudioContext.autoplay = false
    }
    if (getApp().onekit_loop) {
      this.inneraudioContext.loop = getApp().onekit_loop
    } else {
      this.inneraudioContext.loop = false
    }
    if (getApp().onekit_volume) {
      this.inneraudioContext.volume = getApp().onekit_volume
    }
    if (getApp().onekit_muted) {
      this.inneraudioContext.obeyMuteSwitch = getApp().onekit_muted
    } else {
      this.inneraudioContext.obeyMuteSwitch = false
    }
    this.inneraudioContext.play()
  },

  pause() {
    getApp().onekit_play = 'pause'
    this.inneraudioContext.pause()
  },

  stop() {
    getApp().onekit_play = 'stop'
    this.inneraudioContext.stop()
  },

  getPlayState(quick_object) {
    const quick_success = quick_object.success
    let state
    switch (getApp().onekit_play) {
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
    quick_success(quick_res)
  },

  set src(src) {
    getApp().onekit_src = src
    const InnerAudioContext = wx.createInnerAudioContext()
    this.inneraudioContext = InnerAudioContext
    this.inneraudioContext.src = InnerAudioContext
  },

  set currentTime(currentTime) {
    getApp().onekit_currentTime = currentTime
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
    getApp().onekit_autoplay = autoplay
    wx.createInnerAudioContext().autoplay = autoplay
  },
  get autoplay() {
    if (getApp().onekit_autoplay) {
      return getApp().onekit_autoplay
    } else {
      return false
    }
  },

  set loop(loop) {
    getApp().onekit_loop = loop
    wx.createInnerAudioContext().loop = loop
  },
  get loop() {
    if (getApp().onekit_loop) {
      return getApp().onekit_loop
    } else {
      return false
    }
  },

  set volume(volume) {
    getApp().onekit_volume = volume
    wx.createInnerAudioContext().volume = volume
  },
  get volume() {
    if (getApp().onekit_volume) {
      return getApp().onekit_volume
    } else {
      return 1
    }
  },

  set muted(muted) {
    getApp().onekit_muted = muted
    wx.createInnerAudioContext().obeyMuteSwitch = muted
  },

  get notificationVisible() {
    if (wx.createInnerAudioContext().paused) {
      return wx.createInnerAudioContext().paused
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
