/* eslint-disable camelcase */
module.exports = {
  /** * record.start */
  start(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_duration = quick_object.duration
    const quick_sampleRate = quick_object.sampleRate || 8000
    const quick_numberOfChannels = quick_object.numberOfChannels
    const quick_encodeBitRate = quick_object.encodeBitRate
    const quick_format = quick_object.format
    quick_object = null
    // //////////////////////////////////////////////
    const wx_object = {}
    if (quick_duration) {
      wx_object.duration = quick_duration
    }
    if (quick_sampleRate) {
      wx_object.quick_sampleRate = quick_sampleRate
    }
    if (quick_numberOfChannels) {
      wx_object.numberOfChannels = quick_numberOfChannels
    }
    if (quick_encodeBitRate) {
      wx_object.encodeBitRate = quick_encodeBitRate
    }
    if (quick_format) {
      wx_object.format = quick_format
    }

    wx_object.success = function (wx_res) {
      const quick_res = {}
      quick_res.uri = wx_res.tempFilePath
      if (quick_success) {
        quick_success(quick_res)
      }
      if (quick_complete) {
        quick_complete(quick_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (quick_fail) {
        quick_fail(wx_res)
      }
      if (quick_complete) {
        quick_complete(wx_res)
      }
    }
    const recorderManager = wx.getRecorderManager()
    recorderManager.start(wx_object)
  },
  /** record.stop */
  stop() {
    const recorderManager = wx.getRecorderManager()
    recorderManager.start()
  }
}
