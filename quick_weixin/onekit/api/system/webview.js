import URL from "../../js/URL.js"
module.exports = {
  /** webview.loadUrl */
  loadUrl(quick_object) {
    var quick_url = quick_object.url;
    var quick_allowthirdpartycookies = quick_object.allowthirdpartycookies||true;
    var quick_showloadingdialog = quick_object.showloadingdialog||true;
    // /////////////////
    var wx_object = {};
    return wx.navigateTo({
      url: `/onekit/page/router.push/ie?url=${encodeURI(quick_url)}`
    })
  }
}