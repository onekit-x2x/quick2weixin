/* eslint-disable no-console */
Component({
  options: {
    virtualHost: true
  },
  properties: {
    onekitStyle: {
      type: String,
      value: ''
    },
    onekitClass: {
      type: String,
      value: ''
    },
    onekitId: {
      type: String,
      value: ''
    },
    devicePosition: {
      type: String,
      value: 'back',
    },
    flash: {
      type: String,
      value: 'auto',
    },
  },


  methods: {

    camera_error(e) {
      console.log('camera_error', e)
      this.triggerEvent('error', e.details)
    },
  }
})
