/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../../node_modules/oneutil/PROMISE'

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
        quality: 'medium',
        bitrate: quick_bitrate,
        fps: quick_framerate,
        resolution: 0.5,
        success: wx_res => {
          const quick_res = {
            uri: wx_res.tempFilePath,
            size: wx_res.size
          }
          SUCCESS(quick_res)
        },
        fail: res => {
          console.log(res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }

  getVideoInfo(quick_object) {
    const quick_uri = quick_object.uri
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
        },
        fail: res => {
          console.log(res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
