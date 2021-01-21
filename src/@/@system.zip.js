/* eslint-disable camelcase */
/* eslint-disable no-console */
module.exports = {
  decompress(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_srcUri = quick_object.srcUri
    const quick_dstUri = quick_object.dstUri
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // //////////////////////////////////
    const path = wx.env.USER_DATA_PATH
    const wx_object = {
      zipFilePath: quick_srcUri.indexOf('internal://') === 0 ? path + quick_srcUri.substring(10) : quick_srcUri,
      targetPath: quick_dstUri.indexOf('internal://') === 0 ? path + quick_dstUri.substring(10) : quick_dstUri,
    }
    console.log('xxxxxxxxxxx', wx_object)
    wx_object.success = function (res) {
      console.log(res)
      if (quick_success) {
        quick_success('success')
      }
      if (quick_complete) {
        quick_complete('success')
      }
    }
    wx_object.fail = function (res, code) {
      console.log(res, code)
      let quick_data
      if (res.errMsg.indexOf('Undefined') > 0) {
        code = 202
        if (!wx_object.zipFilePath) {
          quick_data.data = 'srcUri not define'
        } else {
          quick_data.data = 'dstUri not define'
        }
      } else {
        // srcUri internal://mass/download/1-4.zips  is  not exists 300
        code = 300
        quick_data = res.errMsg
      }
      if (quick_fail) {
        quick_fail(quick_data, code)
      }
      if (quick_complete) {
        quick_complete(quick_data, code)
      }
    }

    wx.getFileSystemManager().unzip(wx_object)
  }

}
