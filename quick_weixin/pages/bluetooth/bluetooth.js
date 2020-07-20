import bluetooth from "../../onekit/api/system/bluetooth.js"
Page({
  data: {},
  onLoad: function() {
    // bluetooth.openAdapter({
    //   operateAdapter: true,
    //   success: function () {
    //     console.log('success openAdapter')
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   },
    //   complete: function () {
    //     console.log('complete')
    //   }
    // })
    /////////////////////////////////////////
    /* bluetooth.getAdapterState({
       success: function (data) {
         console.log("getAdapterState",data)
       },
       fail: function (data, code) {
         console.log(`handling fail`, data)
       },
       complete: function () {
         console.log('complete')
       }
     })
     /////////////////////////////////
     bluetooth.closeAdapter({
       success: function () {
         console.log('success closeAdapter')
       },
       fail: function (data, code) {
         console.log(`handling fail, code = ${code}`)
       },
       complete: function () {
         console.log('complete')
       }
     })*/
    ////////////////////////////////]
    // bluetooth.startDevicesDiscovery({
    //   services: ['FEE7'],
    //   success: function () {
    //     console.log('success startDevicesDiscovery')
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail startDevicesDiscovery`, data)
    //   },
    //   complete: function () {
    //     console.log('complete startDevicesDiscovery')
    //   }
    // })

    // bluetooth.stopDevicesDiscovery({
    //   success: function () {
    //     console.log('success stopDevicesDiscovery')
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail stopDevicesDiscovery`, data)
    //   },
    //   complete: function () {
    //     console.log('complete stopDevicesDiscovery')
    //   }
    // })
    bluetooth.onblecharacteristicvaluechange = function(data) {
      console.log(data)
      console.log(
        `handling characteristic value change: deviceId = ${
      data.deviceId
    }, serviceId = ${data.serviceId}, characteristicId = ${
      data.characteristicId
    }, value = ${ab2hex(data.value)}`
      )
    }
  },
})