/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  getLocale() {
    const wx_res = wx.getSystemInfoSync()
    const quick_res = {
      language: wx_res.language,
      countryOrRegion: 'CN'
    }
    return quick_res
  },
  setLocale() {

  },
  getThemeMode() {
    const wx_res = wx.getSystemInfoSync()
    if (wx_res.theme === 'light') {
      return 0
    } else {
      return 1
    }
  }

}
