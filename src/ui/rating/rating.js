// onekit/ui/rating/rating.js
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
    numstars: {
      type: Number,
      value: 5
    },
    rating: {
      type: Number,
      value: 0
    },
    stepsize: {
      type: Number,
      value: 0.5
    },
    indicator: {
      type: Boolean,
      value: false
    },
    starBackground: {
      type: String
    },
    starSecondary: {
      type: String
    },
    starForeground: {
      type: String
    },
  },

  attached() {
    const that = this
    // ///////////////////////////////
    if (that.properties.stepsize !== 1) {
      that.properties.stepsize = 0.5
    }
    const values = Array(this.properties.numstars)
    // ////////////////////////////////
    const query = wx.createSelectorQuery().in(this)
    query.select('.onekit-rating').boundingClientRect(function (res) {
      const width = res.width / that.properties.numstars
      const height = res.height
      that.setData({
        width,
        height,
        values
      })
    }).exec()
  },
  methods: {
    rating_tap(e) {
      const that = this
      const index = e.target.dataset.index
      const values = this.data.values
      let value = values[index]
      if (value) {
        value += this.properties.stepsize
        if (value > 1) {
          value = 0
        }
      } else {
        value = this.properties.stepsize
      }
      if (value > 0) {
        for (let i = 0; i < index; i++) {
          values[i] = 1
        }
      } else if (value === 0) {
        for (let i = index + 1; i < values.length; i++) {
          values[i] = 0
        }
      }
      values[index] = value
      that.setData({
        values
      })
      const rating = index + value
      this.triggerEvent('change', {
        rating
      })
    }
  }
})
