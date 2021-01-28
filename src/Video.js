/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

export default class Video {
  constructor(object) {
    this.object = object
  }

  compressVideo(quick_object) {
    const quick_uri = this.object.uri
    const quick_bitrate = this.object.bitrate || 0.5
    const quick_framerate = this.object.framerate || 30
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.compressVideo({
        src: quick_uri,
        bitrate: quick_bitrate,
        fps: quick_framerate,
        success: wx_res => {
          const quick_res = {
            uri: wx_res.tempFilePath,
            size: wx_res.size
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
