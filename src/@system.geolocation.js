/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  getLocation(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_timeout = quick_object.timeout || 3000
    const quick_coordType = quick_object.coordType || 'wgs84'
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.getLocation({
        type: quick_coordType,
        highAccuracyExpireTime: quick_timeout,
        success: wx_res => {
          const quick_res = {
            latitude: wx_res.latitude,
            longitude: wx_res.longitude,
            speed: wx_res.speed,
            accuracy: wx_res.accuracy,
            altitude: wx_res.altitude,
            verticalAccuracy: wx_res.verticalAccuracy,
            horizontalAccuracy: wx_res.horizontalAccuracy,
            time: new Date().getTime()
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** openLocation */
  openLocation(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_latitude = quick_object.latitude
    const quick_longitude = quick_object.longitude
    const quick_scale = quick_object.scale || 18
    const quick_name = quick_object.name || ''
    const quick_address = quick_object.address || ''
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.openLocation({
        latitude: quick_latitude,
        longitude: quick_longitude,
        scale: quick_scale,
        name: quick_name,
        address: quick_address,
        success: () => {
          const quick_res = {
            errMsg: 'openLocation: ok'
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** chooseLocation */

  chooseLocation(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_latitude = quick_object.latitude
    const quick_longitude = quick_object.longitude
    const quick_coordType = quick_object.coordType || 'wgs84'
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.chooseLocation({
        latitude: quick_latitude,
        longitude: quick_longitude,
        success: (wx_res) => {
          const quick_res = {
            name: wx_res.name,
            address: wx_res.address,
            latitude: wx_res.latitude,
            longitude: wx_res.longitude,
            coordType: quick_coordType,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** getLocationType */

  getLocationType(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_res = {
      types: ['gps', 'network']
    }
    quick_success(quick_res)
  },
  /** geolocation.subscribe */

  subscribe(quick_object) {
    if (!quick_object) {
      return
    }
    wx.startLocationUpdate()
    const quick_callback = quick_object.callback
    quick_object = null
    wx.onLocationChange(function (wx_res) {
      const quick_res = {
        latitude: wx_res.latitude,
        longitude: wx_res.longitude,
        speed: wx_res.speed,
        accuracy: wx_res.accuracy,
        altitude: wx_res.altitude,
        verticalAccuracy: wx_res.verticalAccuracy,
        horizontalAccuracy: wx_res.horizontalAccuracy,
        time: new Date().getTime()
      }
      quick_callback(quick_res)
    })
  },
  /** wx.offLocationChange */
  unsubscribe() {
    wx.offLocationChange()
  },
  /** geolocation.getSupportedCoordTypes() */
  getSupportedCoordTypes() {
    console.log('getSupportedCoordTypes is not support')
  },

  /** geolocation.geocodeQuery() */
  geocodeQuery() {
    console.log('geocodeQuery is not support')
  },

  /** geolocation.reverseGeocodeQuery() */
  reverseGeocodeQuery() {
    console.log('reverseGeocodeQuery is not support')
  },

}
