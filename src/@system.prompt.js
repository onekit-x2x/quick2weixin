/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  showToast(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_message = quick_object.message
    const quick_duration = quick_object.duration || 0
    let wx_duration
    if (quick_duration === 0) {
      wx_duration = 1500
    } else {
      wx_duration = 3000
    }
    const wx_object = {
      title: quick_message,
      duration: wx_duration
    }
    wx.showToast(wx_object)
  },

  showDialog(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_title = quick_object.title || ''
    const quick_message = quick_object.message || ''
    const quick_buttons = quick_object.buttons
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    console.log(quick_buttons.length, '...........')
    quick_object = null
    if (quick_buttons.length === 1) {
      const confirmText = quick_buttons[0].text
      const confirmColor = quick_buttons[0].color
      PROMISE((SUCCESS) => {
        wx.showModal({
          title: quick_title,
          content: quick_message,
          confirmText,
          confirmColor,
          success: wx_res => {
            let quick_res
            if (wx_res.confirm) {
              quick_res = {
                index: 0
              }
            } else {
              quick_res = {
                index: 1
              }
            }
            SUCCESS(quick_res)
          }
        })
      }, quick_success, quick_fail, quick_complete)
    }
    if (quick_buttons.length === 2 || quick_buttons.length === 3) {
      const cancelText = quick_buttons[0].text
      const cancelColor = quick_buttons[0].color
      const confirmText = quick_buttons[1].text
      const confirmColor = quick_buttons[1].color
      PROMISE((SUCCESS) => {
        wx.showModal({
          title: quick_title,
          content: quick_message,
          cancelText,
          cancelColor,
          confirmText,
          confirmColor,
          success: wx_res => {
            let quick_res
            if (wx_res.confirm) {
              quick_res = {
                index: 0
              }
            } else {
              quick_res = {
                index: 1
              }
            }
            SUCCESS(quick_res)
          }
        })
      }, quick_success, quick_fail, quick_complete)
    }
  },

  showContextMenu(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_itemList = quick_object.itemList
    const quick_itemColor = quick_object.itemColor || '#000000'
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.showActionSheet({
        itemList: quick_itemList,
        itemColor: quick_itemColor,
        success: wx_res => {
          const quick_res = {
            index: wx_res.tapIndex
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
