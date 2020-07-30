// import my from "../../../onekit/my"
Page({
  data: {
    componentName: 'picker',
  list: ['中国', '美国', '日本', '韩国'],
  country: '中国',
  time: '',
  date: ''
  },
  onLoad () {
    const date = new Date()
    const Y = date.getFullYear()
    const M = date.getMonth() + 1
    const D = date.getDate()
    const H = date.getHours()
    const m = date.getMinutes()
    this.date = Y + '-' + M + '-' + D
    this.time = H + ':' + m
    // this.$page.setTitleBar({text: 'Picker'})
  },
  getCountry (e) {
    this.country = e.newValue
  },
  getTime (e) {
    this.time = e.hour + ':' + e.minute
  },
  getDate (e) {
    this.date = e.year + '-' + (e.month + 1) + '-' + e.day
  },
  show () {
    this.triggerEvent('picker').show()
  }
  
});




