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
    const quick_duration = quick_object.duration || 60000
    const quick_sampleRate = quick_object.sampleRate || 8000
    const quick_numberOfChannels = quick_object.numberOfChannels || 2
    const quick_encodeBitRate = quick_object.encodeBitRate || 48000
    const quick_format = quick_object.format || 'aac'
    quick_object = null
    const wx_object = {
      duration: quick_duration,
      sampleRate: quick_sampleRate,
      numberOfChannels: quick_numberOfChannels,
      encodeBitRate: quick_encodeBitRate,
      format: quick_format,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
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
