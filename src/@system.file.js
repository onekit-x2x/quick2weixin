/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-undef */

import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** file.move */
  move(quick_object) {
    const quick_srcUri = quick_object.srcUri
    const quick_dstUri = quick_object.dstUri
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    const FileSystemManager = wx.getFileSystemManager()
    PROMISE((SUCCESS) => {
      FileSystemManager.copyFile({
        srcPath: quick_srcUri,
        destPath: quick_dstUri,
        success: () => {
          const quick_res = {}
          SUCCESS(quick_res)
        }
      })
      FileSystemManager.removeSavedFile({
        filePath: quick_srcUri
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** file.copy */

  copy(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_srcUri = quick_object.srcUri
    const quick_dstUri = quick_object.dstUri
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    const FileSystemManager = wx.getFileSystemManager()
    PROMISE((SUCCESS) => {
      FileSystemManager.copyFile({
        srcPath: quick_srcUri,
        destPath: quick_dstUri,
        success: () => {
          const quick_res = {}
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** file.list */

  list(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    quick_object = null
    const FileSystemManager = wx.getFileSystemManager()
    PROMISE((SUCCESS) => {
      FileSystemManager.readdir({
        dirPath: quick_uri,
        success: (wx_res) => {
          const quick_res = {
            fileList: wx_res.files
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** file.get */

  get(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    quick_object = null
    const FileSystemManager = wx.getFileSystemManager()
    PROMISE((SUCCESS) => {
      FileSystemManager.getFileInfo({
        filePath: quick_uri,
        success: (wx_res) => {
          const quick_res = {
            length: wx_res.size,
            lastModifiedTime: new Date().getTime(),
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** file.delete */

  delete(quick_object) {
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
    return wx.getFileSystemManager().unlink(wx_object)
  },
  /** file.writeText */

  writeText(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    const quick_text = quick_object.text
    const quick_encoding = quick_object.encoding || 'UTF-8'
    quick_object = null
    const wx_object = {
      filePath: quick_uri,
      data: quick_text,
      encoding: quick_encoding,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    return wx.getFileSystemManager().writeFile(wx_object)
  },
  /** file.writeArrayBuffer */

  writeArrayBuffer(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    const quick_text = quick_object.text
    quick_object = null
    const wx_object = {
      filePath: quick_uri,
      data: quick_text,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    return wx.getFileSystemManager().writeFile(wx_object)
  },
  /** file.readText */

  readText(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    const quick_encoding = quick_object.encoding || 'UTF-8'
    quick_object = null
    const FileSystemManager = wx.getFileSystemManager()
    PROMISE((SUCCESS) => {
      FileSystemManager.readFile({
        filePath: quick_uri,
        encoding: quick_encoding,
        success: (wx_res) => {
          const quick_res = {
            text: wx_res.data
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** file.readArrayBuffer */

  readArrayBuffer(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    quick_object = null
    const FileSystemManager = wx.getFileSystemManager()
    PROMISE((SUCCESS) => {
      FileSystemManager.readFile({
        filePath: quick_uri,
        success: (wx_res) => {
          const quick_res = {
            buffer: wx_res.data
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** file.access */

  access(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    quick_object = null
    const wx_object = {
      path: quick_uri,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    return wx.getFileSystemManager().access(wx_object)
  },
  /** file.mkdir */

  mkdir(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    const quick_recursive = quick_object.recursive || false
    quick_object = null
    const wx_object = {
      dirPath: quick_uri,
      recursive: quick_recursive,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    return wx.getFileSystemManager().mkdir(wx_object)
  },
  /** file.rmdir */

  rmdir(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    const quick_recursive = quick_object.recursive || false
    quick_object = null
    const wx_object = {
      dirPath: quick_uri,
      recursive: quick_recursive,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    return wx.getFileSystemManager().rmdir(wx_object)
  }
}
