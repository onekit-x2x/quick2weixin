/* eslint-disable camelcase */
// import URL from 'oneutil/URL'

module.exports = {
  /** webview.loadUrl */
  loadUrl(quick_object) {
    const quick_url = quick_object.url
    // const quick_allowthirdpartycookies = quick_object.allowthirdpartycookies || true
    // const quick_showloadingdialog = quick_object.showloadingdialog || true
    quick_object = null
    // /////////////////
    return wx.navigateTo({
      url: `/onekit/page/router.push/ie?url=${encodeURI(quick_url)}`
    })
  }
}
