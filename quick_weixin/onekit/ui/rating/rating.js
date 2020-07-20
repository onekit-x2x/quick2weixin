// onekit/ui/rating/rating.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    Style: String,
    Class: String,
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

  attached: function () {
    var that = this;
    /////////////////////////////////
    if (that.properties.stepsize != 1) {
      that.properties.stepsize = 0.5;
    }
    var values = Array(this.properties.numstars);
    //////////////////////////////////
    const query = wx.createSelectorQuery().in(this)
    query.select('.onekit-rating').boundingClientRect(function (res) {
      var width = res.width / that.properties.numstars;
      var height = res.height;
      that.setData({
        width,
        height,
        values
      });
    }).exec()
  },
  methods: {
    rating_tap(e) {
      var that = this;
      var index = e.target.dataset.index;
      var values = this.data.values;
      var value = values[index];
      if (value) {
        value+=this.properties.stepsize;
        if(value>1){
          value = 0;
        }
      } else {
        value = this.properties.stepsize;
      }
      if(value>0){
        for(var i=0;i<index;i++){
          values[i] = 1;
        }
      }   else if(value==0){
        for(var i=index+1;i<values.length;i++){
          values[i] = 0;
        }
      }
      values[index] = value;
      that.setData({
        values
      });
      var rating = index+value;
      this.triggerEvent('change',{rating});
    }
  }
})