/* eslint-disable vars-on-top */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable default-case */
/* eslint-disable camelcase */
/* eslint-disable no-console */
module.exports = {
  /** file.move */
  move() {
    return console.log('move暂不支持！')
  },
  /** file.copy */

  copy(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_srcUri = quick_object.srcUri
    const quick_dstUri = quick_object.dstUri
    quick_object = null
    // /////////////////////////
    const wx_object = {}
    if (quick_srcUri) {
      wx_object.srcPath = quick_srcUri
    }
    if (quick_dstUri) {
      wx_object.destPath = quick_srcUri
    }
    wx_object.success = function () {
      const quick_res = {}
      if (quick_success) {
        quick_success(quick_res)
      }
      if (quick_complete) {
        quick_complete(quick_res)
      }
    }
    wx_object.fail = function (wx_res) {
<<<<<<< HEAD:src/api/system/file.js
      for (const wx_res_key in wx_res) {
=======
      /*  const quick_res = {
          fail: 202
        } */
      for (const wx_res_key of Object.keys(wx_res)) {
        //   const wx_res_value = wx_res[wx_res_key]
>>>>>>> ce805d71c4a5e5f6a3ab48643ef0117d0c50dca0:src/@/@system.file.js
        switch (wx_res_key) {
          case 'errMsg':
            break
          default:
            break
        }
      }
      if (quick_fail) {
        quick_fail(wx_res)
      }
      if (quick_complete) {
        quick_complete(wx_res)
      }
    }
    wx.getFileSystemManager().copyFile(wx_object)
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
    // /////////////////////////////////////////////
    const wx_object = {}
    if (quick_uri) {
      wx_object.dirPath = quick_uri
    }
    wx_object.success = function (wx_res) {
      const quick_res = {}
      quick_res.fileList = wx_res.files
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
    wx.getFileSystemManager().readdir(wx_object)
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
    // const quick_recursive = quick_object.recursive || false
    // /////////////////////////////////////////////
    const wx_object = {}
    if (quick_uri) {
      wx_object.filePath = quick_uri
    }
    wx_object.success = function (wx_res) {
      const lastModifiedTime = {}
      const type = {}
      const subFiles = {}
      const quick_res = {
        uri: wx_object.filePath,
        lastModifiedTime,
        type,
        subFiles
      }
      quick_res.length = wx_res.size
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
    wx.getFileSystemManager().getFileInfo(wx_object)
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
    const wx_object = {}
    if (quick_uri) {
      wx_object.filePath = quick_uri
    }
    wx_object.success = function () {
      const quick_res = {}
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
    wx.getFileSystemManager().unlink(wx_object)
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
<<<<<<< HEAD:src/api/system/file.js
    const quick_encoding = quick_object.encoding || 'UTF-8'
=======
    const quick_encoding = quick_object.encoding || 'UTF - 8'
    // const quick_append = quick_object.append || false
>>>>>>> ce805d71c4a5e5f6a3ab48643ef0117d0c50dca0:src/@/@system.file.js
    const wx_object = {}
    if (quick_uri) {
      wx_object.filePath = quick_uri
    }
    if (quick_text) {
      wx_object.data = quick_text
    }
    if (quick_encoding) {
      wx_object.encoding = quick_encoding
    }
    wx_object.success = function () {
      const quick_res = {}
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
    wx.getFileSystemManager().writeFile(wx_object)
  },
  /** file.writeArrayBuffer */

  writeArrayBuffer() {
    return console.log('暂不支持！')
  },
  /** file.readText */

  readText() {},
  /** file.readArrayBuffer */

  readArrayBuffer() {},
  /** file.access */

  access(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    // ////////////////////////////////////
    const wx_object = {}
    if (quick_uri) {
      wx_object.path = quick_uri
    }
    wx_object.success = function () {
      const quick_res = {}
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
    wx.getFileSystemManager().access(wx_object)
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
    // /////////////////////////////////////////////
    const wx_object = {}
    if (quick_uri) {
      wx_object.dirPath = quick_uri
    }
    if (quick_recursive) {
      wx_object.recursive = quick_recursive
    }
    wx_object.success = function () {
      const quick_res = {}
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
    wx.getFileSystemManager().mkdir(wx_object)
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
    // /////////////////////////////////////////////
    const wx_object = {}
    if (quick_uri) {
      wx_object.dirPath = quick_uri
    }
    if (quick_recursive) {
      wx_object.recursive = quick_recursive
    }
    wx_object.success = function () {
      const quick_res = {}
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
    wx.getFileSystemManager().rmdir(wx_object)
  }
}
