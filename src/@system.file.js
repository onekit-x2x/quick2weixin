/* eslint-disable no-console */
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
    const fileSystemManager = wx.getFileSystemManager()
    const srcPath = wx.env.USER_DATA_PATH + quick_srcUri.substring(10)
    const destPath = wx.env.USER_DATA_PATH + quick_dstUri.substring(10)
    PROMISE((SUCCESS) => {
      fileSystemManager.copyFile({
        srcPath,
        destPath,
        success: () => {
          const quick_res = {
            errMsg: 'copyFile: ok'
          }
          SUCCESS(quick_res)
        }
      })
      fileSystemManager.unlink({
        filePath: srcPath,
        success: () => {
          const quick_res = {
            errMsg: 'unlink: ok'
          }
          SUCCESS(quick_res)
        }
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
    const fileSystemManager = wx.getFileSystemManager()
    const srcPath = wx.env.USER_DATA_PATH + quick_srcUri.substring(10)
    const destPath = wx.env.USER_DATA_PATH + quick_dstUri.substring(10)
    PROMISE((SUCCESS) => {
      fileSystemManager.copyFile({
        srcPath,
        destPath,
        success: () => {
          const quick_res = {
            errMsg: 'copyFile: ok'
          }
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
    const fileSystemManager = wx.getFileSystemManager()
    const dirPath = wx.env.USER_DATA_PATH + quick_uri.substring(10)
    PROMISE((SUCCESS) => {
      fileSystemManager.readdir({
        dirPath,
        success: (swan_res) => {
          const quick_res = {
            fileList: swan_res.files
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
    const fileSystemManager = wx.getFileSystemManager()
    const filePath = wx.env.USER_DATA_PATH + quick_uri.substring(10)
    PROMISE((SUCCESS) => {
      fileSystemManager.getFileInfo({
        filePath,
        success: (swan_res) => {
          const quick_res = {
            length: swan_res.size,
            lastModifiedTime: new Date().getTime(),
            errMsg: 'getFileInfo: ok'
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
    const filePath = wx.env.USER_DATA_PATH + quick_uri.substring(10)
    const swan_object = {
      filePath,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    return wx.getFileSystemManager().unlink(swan_object)
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
    const quick_encoding = quick_object.encoding || 'utf8'
    quick_object = null
    const fileSystemManager = wx.getFileSystemManager()
    const filePath = wx.env.USER_DATA_PATH + quick_uri.substring(10)
    PROMISE((SUCCESS) => {
      fileSystemManager.writeFile({
        filePath,
        data: quick_text,
        encoding: quick_encoding,
        success: () => {
          const quick_res = {
            errMsg: 'writeFile: ok'
          }
          SUCCESS(quick_res)
        },
        fail: res => {
          console.log(res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
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
    const quick_buffer = quick_object.buffer
    quick_object = null
    const fileSystemManager = wx.getFileSystemManager()
    const filePath = wx.env.USER_DATA_PATH + quick_uri.substring(10)
    PROMISE((SUCCESS) => {
      fileSystemManager.writeFile({
        filePath,
        data: quick_buffer,
        success: () => {
          const quick_res = {
            errMsg: 'writeFile: ok'
          }
          SUCCESS(quick_res)
        },
        fail: res => {
          console.log(res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** file.readText */

  readText(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    const quick_encoding = quick_object.encoding || 'utf8'
    quick_object = null
    const fileSystemManager = wx.getFileSystemManager()
    const filePath = wx.env.USER_DATA_PATH + quick_uri.substring(10)
    PROMISE((SUCCESS) => {
      fileSystemManager.readFile({
        filePath,
        encoding: quick_encoding,
        success: (swan_res) => {
          const quick_res = {
            text: swan_res.data
          }
          SUCCESS(quick_res)
        },
        fail: res => {
          console.log(res)
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
    const fileSystemManager = wx.getFileSystemManager()
    const filePath = wx.env.USER_DATA_PATH + quick_uri.substring(10)
    PROMISE((SUCCESS) => {
      fileSystemManager.readFile({
        filePath,
        success: (swan_res) => {
          const quick_res = {
            buffer: swan_res.data
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
    const fileSystemManager = wx.getFileSystemManager()
    PROMISE((SUCCESS, FAIL) => {
      const path = wx.env.USER_DATA_PATH + quick_uri.substring(10)
      fileSystemManager.access({
        path,
        success: () => {
          const quick_res =
            'Response { code=0 content=success }'
          SUCCESS(quick_res)
        },
        fail: () => {
          const quick_res =
            'file does not exists'
          FAIL(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
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
    const fileSystemManager = wx.getFileSystemManager()
    PROMISE((SUCCESS) => {
      const dirPath = wx.env.USER_DATA_PATH + quick_uri.substring(10)
      fileSystemManager.mkdir({
        dirPath,
        recursive: quick_recursive,
        success: () => {
          const quick_res = {
            errMsg: 'mkdir: ok'
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
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
    const fileSystemManager = wx.getFileSystemManager()
    PROMISE((SUCCESS) => {
      const dirPath = wx.env.USER_DATA_PATH + quick_uri.substring(10)
      fileSystemManager.rmdir({
        dirPath,
        recursive: quick_recursive,
        success: () => {
          const quick_res = {
            errMsg: 'rmdir: ok'
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
