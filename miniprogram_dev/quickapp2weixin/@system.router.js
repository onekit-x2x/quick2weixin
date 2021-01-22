/* eslint-disable no-console */
/* eslint-disable camelcase */
import URL from '../../node_modules/oneutil/URL'

module.exports = {
  /*  network.getType/// */
  push(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_uri = quick_object.uri
    const quick_params = quick_object.params
    // ///////////////
    const wx_object = {}
    const url = new URL(quick_uri)
    console.log(url)
    if (url.scheme) {
      switch (url.scheme) {
        case 'tel':
          wx.makePhoneCall({
            phoneNumber: url.host,
          })
          break
        case 'sms':
          wx.showModal({
            title: '不支持',
            content: '微信小程序暂不支持发短信',
          })
          break
        case 'http':
        case 'https':
          wx.navigateTo({
            url: `/onekit/page/router.push/ie?url=${encodeURI(quick_uri)}`
          })
          break
        case 'internal':
          wx.showModal({
            title: '带配置',
            content: '请配置要打开的App',
          })
          break
        case 'hap':
          switch (url.host) {
            case 'app':
              wx.showModal({
                title: '带配置',
                content: '请配置要打开的小程序',
              })
              break
            case 'settings':
              break
            default:
              throw new Error(url.host)
          }
          // wx.showModal({
          //   title: '不支持',
          //   content: '微信小程序暂不支持',
          // });
          break
        default:
          throw new Error(url.scheme)
      }
    } else {
      if (quick_params) {
        wx_object.url = quick_uri + `?params=${quick_params.body}`
      } else {
        wx_object.url = quick_uri
      }
      wx.navigateTo(wx_object)
    }
  },
  /** router.replace */

  replace(quick_object) {
    const quick_uri = quick_object.uri
    // ///////////////
    const wx_object = {}
    const url = new URL(quick_uri)
    wx_object.url = url
    wx.redirectTo(wx_object)
  },
  /** router.back */

  back(quick_object) {
    const quick_uri = quick_object.uri
    // ///////////////
    const wx_object = {}
    const url = new URL(quick_uri)
    wx_object.url = url
    wx.navigateBack(wx_object)
  },
  /** router.clear() */

  clear() {
    //  const wx_object = {}
  },
  /** router.getLength */

  getLength() {
    //  const wx_object = {}
  },
  /** router.getState */

  getState() {
    //  const wx_object = {}
  },
  /** router.getPages */

  getPages() {
    //  const wx_object = {}
  }
}
