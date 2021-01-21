export default class audio {
  static _checkContext() {
    if (!audio.audioContext) {
      audio.audioContext = wx.createInnerAudioContext()
    }
  }

  static set src(src) {
    audio._src = src
  }

  static set currentTime(currentTime) {
    audio._currentTime = currentTime
  }

  static set duration(duration) {
    audio._duration = duration
  }

  static set autoplay(autoplay) {
    audio._autoplay = autoplay
  }

  static set loop(loop) {
    audio._loop = loop
  }

  static set volume(volume) {
    audio._volume = volume
  }

  static set muted(muted) {
    audio._muted = muted
  }

  static set notificationVisible(notificationVisible) {
    audio._notificationVisible = notificationVisible
  }

  static set title(title) {
    audio._title = title
  }

  static set artist(artist) {
    audio._artist = artist
  }

  static set cover(cover) {
    audio._cover = cover
  }

  static set streamType(streamType) {
    audio._streamType = streamType
  }
  // //////////////////////////////

  static play() {
    if (!audio._src) {
      return
    }
    this._checkContext()
    if (audio._src) {
      audio.audioContext.src = audio._src
    }
    if (audio._duration) {
      audio.audioContext.duration = audio._duration
    }
    if (audio._autoplay) {
      audio.audioContext.autoplay = audio._autoplay
    }
    if (audio._loop) {
      audio.audioContext.loop = audio._loop
    }
    if (audio._volume) {
      audio.audioContext.volume = audio._volume
    }
    if (audio._muted) {
      audio.audioContext.obeyMuteSwitch = audio._muted
    }
    audio.audioContext.play()
  }

  static stop() {
    this._checkContext()
    audio.audioContext.stop()
  }

  static pause() {
    this._checkContext()
    audio.audioContext.pause()
  }

  static onended(onended) {
    this._checkContext()
    audio.audioContext.onSeeked(onended || function () {})
  }

  static onerror(onerror) {
    this._checkContext()
    audio.audioContext.onError(onerror || function () {})
  }

  static set ontimeupdate(ontimeupdate) {
    this._checkContext()
    audio.audioContext.onTimeUpdate(ontimeupdate || function () {})
  }
}
