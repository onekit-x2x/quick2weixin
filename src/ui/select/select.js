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
  },
  data: {
    show: false
  },
  methods: {
    select_click() {
      this.setData({
        show: !this.data.show
      })
    },
    option_change(e) {
      // console.log("B",e);
      const newValue = e.detail.value
      this.triggerEvent('change', {
        newValue
      })
    }
  }
})
