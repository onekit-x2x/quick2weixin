/* eslint-disable no-console */
/* eslint-disable camelcase */
import CryptoJS from 'crypto-js'

module.exports = {
  rsa(quick_object) {
    const quick_action = quick_object.action
    const quick_text = quick_object.text
    const quick_key = quick_object.key
    const quick_transformation = quick_object.transformation || 'RSA/None/OAEPwithSHA-256andMGF1Padding'
    const quick_success = quick_object.success
    quick_object = null

    // ///////////////////////
    const transformations = quick_transformation.split('/')
    const options = {
      mode: CryptoJS.mode[transformations[2]],
      pad: CryptoJS.pad[transformations[3]]
    }

    if (quick_action === 'encrypt') {
      const ciphertext = CryptoJS.AES.encrypt(quick_text, quick_key, options).toString()
      quick_success({
        text: ciphertext
      })
    } else {
      const bytes = CryptoJS.AES.decrypt(quick_text, quick_key, options)
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
      quick_success({
        text: decryptedData
      })
    }
  },
  aes(quick_object) {
    const quick_action = quick_object.action
    const quick_text = quick_object.text
    const quick_key = quick_object.key
    const quick_transformation = quick_object.transformation || 'AES/CBC/PKCS5Padding'
    const quick_iv = quick_object.iv || quick_key
    const quick_ivOffset = quick_object.ivOffset || 0
    const quick_ivLen = quick_object.ivLen || 16
    const quick_success = quick_object.success
    quick_object = null

    // ///////////////////////
    const transformations = quick_transformation.split('/')
    const options = {
      iv: quick_iv,
      offset: quick_ivOffset,
      length: quick_ivLen,
      mode: CryptoJS.mode[transformations[1]],
      pad: CryptoJS.pad[transformations[2]]
    }

    if (quick_action === 'encrypt') {
      const ciphertext = CryptoJS.AES.encrypt(quick_text, quick_key, options).toString()
      quick_success({
        text: ciphertext
      })
    } else {
      const bytes = CryptoJS.AES.decrypt(quick_text, quick_key, options)
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
      quick_success({
        text: decryptedData
      })
    }
  }
}
