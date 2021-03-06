/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* storage.set/// */

  getVideoInfo(quick_object) {
    const quick_uri = this.object.uri
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.getVideoInfo({
        src: quick_uri,
        success: wx_res => {
          const quick_res = {
            uri: quick_uri,
            size: wx_res.size,
            height: wx_res.height,
            width: wx_res.width,
            bitrate: wx_res.bitrate,
            framerate: wx_res.fps,
            orientation: wx_res.orientation,
            type: wx_res.type,
            duration: wx_res.duration,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
