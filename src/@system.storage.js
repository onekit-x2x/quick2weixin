/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* storage.set/// */
  set(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_key = quick_object.key
    const quick_value = quick_object.value
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      if (quick_value != null) {
        if (quick_value.length === 0) {
          wx.clearStorage({
            success: () => {
              const quick_res = {
                errMsg: 'clearStorage: ok'
              }
              SUCCESS(quick_res)
            }
          })
        } else {
          wx.setStorage({
            key: quick_key,
            data: quick_value,
            success: () => {
              const quick_res = {
                errMsg: 'setStorage: ok'
              }
              SUCCESS(quick_res)
            }
          })
        }
      } else {
        wx.clearStorage({
          success: () => {
            const quick_res = {
              errMsg: 'clearStorage: ok'
            }
            SUCCESS(quick_res)
          }
        })
      }
    }, quick_success, quick_fail, quick_complete)
  },
  /* storage.get */

  get(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_key = quick_object.key
    const quick_default = quick_object.default || ''
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.getStorage({
        key: quick_key,
        success: (wx_res) => {
          const quick_res = wx_res.data
          SUCCESS(quick_res)
        },
        fail: () => {
          SUCCESS(quick_default)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /* Storage.clear */

  clear(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.clearStorage({
        success: () => {
          const quick_res = {}
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /* Storage.delete */

  delete(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_key = quick_object.key
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.removeStorage({
        key: quick_key,
        success: () => {
          const quick_res = {}
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /* storage.key */

  key(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_index = quick_object.index
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.getStorageInfo({
        success: (wx_res) => {
          const quick_res =
            wx_res.keys[quick_index]
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  get length() {
    const swan_res = wx.getStorageInfoSync()
    return swan_res.keys.length
  }
}
