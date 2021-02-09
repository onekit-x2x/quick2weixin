/* eslint-disable no-console */
/* eslint-disable camelcase */
import CryptoJS from 'crypto-js'
import forge from 'node-forge'

forge.options.usePureJavaScript = false
module.exports = {
  rsa(quick_object) {
    const quick_action = quick_object.action
    const quick_text = quick_object.text
    const quick_key = quick_object.key
    const quick_transformation = (quick_object.transformation || 'RSA/None/OAEPwithSHA-256andMGF1Padding').toUpperCase()
    const quick_success = quick_object.success
    quick_object = null
    // ///////////////////////
    let type = null
    let
      options = null
    if (quick_transformation === 'RSA/ECB/NoPadding'.toUpperCase()) {
      console.log('11111111111')
    } else if (quick_transformation === 'RSA/ECB/OAEPPadding'.toUpperCase()) {
      console.log('11111111111')
    } else if (quick_transformation === 'RSA/ECB/OAEPwithSHA-1andMGF1Padding'.toUpperCase()) {
      console.log('11111111111')
    } else if (quick_transformation === 'RSA/ECB/OAEPwithSHA-256andMGF1Padding'.toUpperCase()) {
      type = 'RSA-OAEP'
      options = {
        md: forge.md.sha256.create(),
        mgf1: {
          md: forge.md.sha1.create()
        }
      }
    } else if (quick_transformation === 'RSA/ECB/PKCS1Padding'.toUpperCase()) {
      console.log('11111111111')
    } else if (quick_transformation === 'RSA/NONE/NoPadding'.toUpperCase()) {
      console.log('11111111111')
    } else if (quick_transformation === 'RSA/NONE/OAEPPadding'.toUpperCase()) {
      console.log('11111111111')
    } else if (quick_transformation === 'RSA/NONE/OAEPwithSHA-1andMGF1Padding'.toUpperCase()) {
      console.log('11111111111')
    } else if (quick_transformation === 'RSA/NONE/OAEPwithSHA-256andMGF1Padding'.toUpperCase()) {
      console.log('11111111111')
    } else if (quick_transformation === 'RSA/NONE/PKCS1Padding'.toUpperCase()) {
      console.log('11111111111')
    } else {
      throw new Error(quick_transformation)
    }
    if (quick_action === 'encrypt') {
      const publicKey = forge.pki.publicKeyFromPem(`-----BEGIN PUBLIC KEY-----\n${quick_key}\n-----END PUBLIC KEY-----`)
      // 在node-rsa模块中加解密默认使用 pkcs1_oaep ,而在js中加密解密默认使用的是 pkcs1
      const encrypted = publicKey.encrypt(quick_text, type, options)
      const text = forge.util.encode64(encrypted)
      quick_success({
        text
      })
    } else {
      const privateKey = forge.pki.privateKeyFromPem(`-----BEGIN PRIVATE KEY-----\n${quick_key}\n-----END PRIVATE KEY-----`)
      const decrypted = privateKey.decrypt(forge.util.decode64(quick_text), type, options)
      quick_success({
        text: decrypted
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
