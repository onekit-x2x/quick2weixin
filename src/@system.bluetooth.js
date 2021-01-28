/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* bluetooth.openAdapter */
  openAdapter(quick_object) {
    return wx.openBluetoothAdapter(quick_object)
  },
  /**
     bluetooth.closeAdapter({
    *
    */

  closeAdapter(quick_object) {
    return wx.closeBluetoothAdapter(quick_object)
  },
  /** bluetooth.getAdapterState */

  getAdapterState(quick_object) {
    return wx.getBluetoothAdapterState(quick_object)
  },
  /** bluetooth.onadapterstatechange 监听监听蓝牙适配器状态变化事件 */

  set onadapterstatechange(callback) {
    return wx.onBluetoothAdapterStateChange(callback)
  },
  /** bluetooth.startDevicesDiscovery */

  startDevicesDiscovery(quick_object) {
    return wx.startBluetoothDevicesDiscovery(quick_object)
  },
  /** bluetooth.stopDevicesDiscovery */

  stopDevicesDiscovery(quick_object) {
    return wx.stopBluetoothDevicesDiscovery(quick_object)
  },
  /** bluetooth.getDevices */

  getDevices(quick_object) {
    return wx.getBluetoothDevices(quick_object)
  },
  /** bluetooth.ondevicefound */

  set ondevicefound(callback) {
    return wx.onBluetoothDeviceFound(callback)
  },
  /** bluetooth.getConnectedDevices */

  getConnectedDevices(quick_object) {
    return wx.getConnectedBluetoothDevices(quick_object)
  },
  /** bluetooth.createBLEConnection */

  createBLEConnection(quick_object) {
    return wx.createBLEConnection(quick_object)
  },
  /** bluetooth.closeBLEConnection */

  closeBLEConnection(quick_object) {
    return wx.closeBLEConnection(quick_object)
  },
  /** bluetooth.getBLEDeviceServices */

  getBLEDeviceServices(quick_object) {
    return wx.getBLEDeviceServices(quick_object)
  },
  /** bluetooth.getBLEDeviceCharacteristics */

  getBLEDeviceCharacteristics(quick_object) {
    return wx.getBLEDeviceCharacteristics(quick_object)
  },
  /** bluetooth.readBLECharacteristicValue */

  readBLECharacteristicValue(quick_object) {
    return wx.readBLECharacteristicValue(quick_object)
  },
  /** bluetooth.writeBLECharacteristicValue */

  writeBLECharacteristicValue(quick_object) {
    return wx.writeBLECharacteristicValue(quick_object)
  },
  /** bluetooth.notifyBLECharacteristicValueChange */

  notifyBLECharacteristicValueChange(quick_object) {
    return wx.notifyBLECharacteristicValueChange(quick_object)
  },
  /** bluetooth.onblecharacteristicvaluechange */

  set onblecharacteristicvaluechange(callback) {
    return wx.onBLECharacteristicValueChange(callback)
  },
  /** bluetooth.onbleconnectionstatechange  */

  set onbleconnectionstatechange(callback) {
    return wx.onBLEConnectionStateChange(callback)
  }
}
