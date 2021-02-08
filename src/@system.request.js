/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'
import TASK from '../node_modules/oneutil/TASK'


module.exports = {
  /** request.upload */
  upload(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_url = quick_object.url
    const quick_header = quick_object.header || {}
    const quick_files = quick_object.files
    const quick_data = quick_object.data
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      TASK(quick_files, (quick_file, callback) => {
        const filePath = quick_file.uri
        const name = quick_file.name
        wx.uploadFile({
          url: quick_url,
          name,
          filePath,
          header: quick_header,
          formData: quick_data[0],
          success: wx_res => {
            const quick_res = {
              code: wx_res.statusCode,
              data: wx_res.data
            }
            callback(quick_res)
          }

        })
      }, (quick_res) => {
        const res = {
          quick_res
        }
        SUCCESS(res)
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** request.download */

  download(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_url = quick_object.url
    const filename = quick_object.filename || quick_url.substring(quick_url.lastIndexOf('/') + 1)
    const filePath = wx.env.USER_DATA_PATH + '/' + filename
    quick_object = null
    const wx_object = {
      url: quick_url,
      filePath,
    }
    PROMISE((SUCCESS) => {
      wx.downloadFile({
        url: quick_url,
        filePath,
        success: wx_res => {
          const token = '' + new Date().getTime()
          const quick_res = {
            tempFilePath: wx_res.tempFilePath,
            filePath: wx_res.filePath,
            statusCode: wx_res.statusCode,
            profile: wx_res.profile,
            token
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
    getApp().onekit_DownloadTask = wx.downloadFile(wx_object)
    getApp().onekit_download_url = quick_url
  },
  /** onDownloadComplete */

  onDownloadComplete(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    if (getApp().onekit_DownloadTask) {
      const DownloadTask = getApp().onekit_DownloadTask
      DownloadTask.onProgressUpdate(wx_res => {
        if (wx_res.progress === 100) {
          quick_success({
            uri: getApp().onekit_download_url
          })
        }
      })
    }
  }
}
