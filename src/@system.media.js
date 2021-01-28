/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** media.takePhoto */

  takePhoto(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    const CameraContext = wx.createCameraContext()
    PROMISE((SUCCESS) => {
      CameraContext.takePhoto({
        success: wx_res => {
          const quick_res = {
            uri: wx_res.tempImagePath
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** media.takeVideo */
  takeVideo(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    const CameraContext = wx.createCameraContext()
    PROMISE((SUCCESS) => {
      CameraContext.startRecord({
        success: wx_res => {
          const quick_res = {
            uri: wx_res.tempVideoPath,
            tempThumbPath: wx_res.tempThumbPath
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.pickImage */
  pickImage(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      wx.chooseImage({
        count: 1,
        success: wx_res => {
          const quick_res = {
            tempFilePaths: wx_res.tempFilePaths,
            uri: wx_res.tempFiles[0].path,
            size: wx_res.tempFiles[0].size
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.pickImages */
  pickImages(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      wx.chooseImage({
        success: wx_res => {
          const quick_files = wx_res.tempFiles.map(file => ({
            uri: file.path,
            size: file.size
          }))
          const quick_res = {
            uris: wx_res.tempFilePaths,
            files: quick_files
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


  /** media.pickVideo */
  pickVideo(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      wx.chooseVideo({
        success: wx_res => {
          const quick_res = {
            uri: wx_res.tempFilePath,
            size: wx_res.size,
            duration: wx_res.duration,
            height: wx_res.height,
            width: wx_res.width,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.pickVideos */
  pickVideos(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      wx.chooseMedia({
        mediaType: ['video'],
        success: wx_res => {
          const quick_files = wx_res.tempFiles.map(file => ({
            uri: file.tempFilePath,
            size: file.size,
            duration: file.duration,
            height: file.height,
            width: file.width,
            thumbTempFilePath: file.thumbTempFilePath,
          }))
          const quick_res = {
            uris: wx_res.tempFiles,
            files: quick_files,
            type: wx_res.type
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


  /** media.pickFile */
  pickFile(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      wx.chooseMessageFile({
        count: 1,
        success: wx_res => {
          const quick_res = {
            tempFiles: wx_res.tempFiles,
            uri: wx_res.tempFiles[0].path,
            size: wx_res.tempFiles[0].size,
            name: wx_res.tempFiles[0].name,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.saveToPhotosAlbum */
  saveToPhotosAlbum(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    quick_object = null
    const wx_object = {
      filePath: quick_uri,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    wx.saveImageToPhotosAlbum(wx_object)
  },

  /** media.previewImage */
  previewImage(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uris = quick_object.uris
    const quick_current = quick_object.current || 0
    // const quick_cancel = quick_object.cancel
    quick_object = null
    const wx_object = {
      urls: quick_uris,
      current: quick_current,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    wx.previewImage(wx_object)
  },
  /** media.getRingtone */
  getRingtone() {
    console.error('[quick2weixin] 暂不支持 media.getRingtone')
  },
  /** setRingtone */
  setRingtone() {
    console.error('[quick2weixin] 暂不支持 media.setRingtone')
  }

}
