// component/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentName: 'swiper',
    autoPlay: true,
    indicator: true,
    loopPlay: true,
    sliderValue: 1000,
    durationValue: 1000,
    isVertical: false,
    marginValue: '0px',
    topValue: '210px',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onInit() {
    this.$page.setTitleBar({
      text: 'Swiper'
    })
  },
  startAutoPlay(e) {
    this.autoPlay = e.checked
  },
  showIndicator(e) {
    this.indicator = e.checked
  },
  switchLoopPlay(e) {
    this.loopPlay = e.checked
  },
  switchDirection(e) {
    this.isVertical = e.checked

    if (e.checked) {
      this.topValue = 68 + 'px'
    } else {
      this.topValue = 195 + 'px'
    }
  },
  setSliderValue(e) {
    this.sliderValue = e.progress
  },
  setDurationValue(e) {
    this.durationValue = e.progress
  },
  setMarginValue(e) {
    this.marginValue = e.progress + 'px'
  },
  setTopValue(e) {
    this.topValue = e.progress + 'px'
  }

})