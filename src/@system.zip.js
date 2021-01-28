/* eslint-disable camelcase */
/* eslint-disable no-console */
import PROMISE from '../node_modules/oneutil/PROMISE'

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
    quick_object = null
    const path = wx.env.USER_DATA_PATH
    const FileSystemManager = wx.getFileSystemManager()
    PROMISE((SUCCESS) => {
      FileSystemManager.unzip({
        zipFilePath: quick_srcUri.indexOf('internal://') === 0 ? path + quick_srcUri.substring(10) : quick_srcUri,
        targetPath: quick_dstUri.indexOf('internal://') === 0 ? path + quick_dstUri.substring(10) : quick_dstUri,
        success: () => {
          const quick_res = {
            errMsg: 'decompress: ok'
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }

}
