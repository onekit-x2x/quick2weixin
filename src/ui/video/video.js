/* eslint-disable no-console */
Component({
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass: {
      type: String,
      value: ''
    },
    onekitStyle: {
      type: String,
      value: ''
    },
    onekitId: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: '',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    poster: {
      type: String,
      value: '',
    },
    controls: {
      type: Boolean,
      value: true,
    },
    muted: {
      type: Boolean,
      value: true,
    },
    orientation: {
      type: Number,
      value: '',
    },
    title: {
      type: String,
      value: '',
    },
  },
  methods: {
    video_start(e) {
      console.log('video_start', e)
      this.triggerEvent('play', e.details)
    },
    video_pause(e) {
      console.log('video_pause', e)
      this.triggerEvent('pause', e.details)
    },
    video_finish(e) {
      console.log('video_finish', e)
      this.triggerEvent('ended', e.details)
    },
    video_timeupdate(e) {
      console.log('video_timeupdate', e)
      this.triggerEvent('timeupdate', e.details)
    },
    video_fullscreenchange(e) {
      console.log('video_fullscreenchange', e)
      this.triggerEvent('fullscreenchange', e.details)
    },
    video_error(e) {
      console.log('video_error', e)
      this.triggerEvent('error', e.details)
    }
  }


})
