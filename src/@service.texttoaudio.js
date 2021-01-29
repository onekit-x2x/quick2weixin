/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

const plugin = requirePlugin('myPlugin')

module.exports = {

  speak(quick_object) {
    const InnerAudioContext = wx.createInnerAudioContext()
    this.innerAudioContext = InnerAudioContext
    getApp().onekit_speak = 'play'
    if (!quick_object) {
      return
    }
    const quick_lang = quick_object.lang
    const quick_content = quick_object.content
    const quick_rate = quick_object.rate || 1
    const quick_pitch = quick_object.pitch || 1
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      plugin.textToSpeech({
        lang: quick_lang,
        content: quick_content,
        success: (wx_res) => {
          InnerAudioContext.src = wx_res.filename
          InnerAudioContext.volume = quick_pitch
          InnerAudioContext.playbackRate = quick_rate
          InnerAudioContext.play()
          const quick_res = {
            utteranceId: wx_res.retcode.toString(),
            origin: wx_res.origin,
            filename: wx_res.filename,
            expired_time: wx_res.expired_time,
          }
          SUCCESS(quick_res)
        },
        fail: res => {
          console.log(res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  textToAudioFile(quick_object) {
    getApp().onekit_textToAudioFile = 'done'
    if (!quick_object) {
      return
    }
    const quick_lang = quick_object.lang
    const quick_content = quick_object.content
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      plugin.textToSpeech({
        lang: quick_lang,
        content: quick_content,
        success: (wx_res) => {
          const quick_res = {
            utteranceId: wx_res.retcode.toString(),
            origin: wx_res.origin,
            filePath: wx_res.filename,
            expired_time: wx_res.expired_time,
          }
          SUCCESS(quick_res)
        },
        fail: res => {
          console.log(res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  isLanguageAvailable(quick_object) {
    const quick_lang = quick_object.lang
    const quick_success = quick_object.success
    let quick_res
    if (quick_lang === 'zh_CN' || quick_lang === 'en_US') {
      quick_res = {
        isAvailable: true
      }
    } else {
      quick_res = {
        isAvailable: false
      }
    }
    quick_success(quick_res)
  },
  set onttsstatechange(callback) {
    let state
    switch (getApp().onekit_speak) {
      case 'play':
        state = 'onStart'
        break
      case 'done':
        state = 'onDone'
        break
      case 'stop':
        state = 'onStop'
        break
      default:
        state = 'onError'
    }
    const quick_res = {
      state
    }
    callback(quick_res)
  },
  stop() {
    getApp().onekit_speak = 'stop'
    if (!this.innerAudioContext) return
    this.innerAudioContext.stop()
  },
  isSpeaking() {
    if (getApp().onekit_speak === 'stop') {
      return false
    } else {
      return true
    }
  }
}
