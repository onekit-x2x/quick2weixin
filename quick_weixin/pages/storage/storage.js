import storage from "../../onekit/api/system/storage.js"
Page({
  data: {},
  onLoad: function() {
    storage.set({
      key: 'A4',
      value: 'V1',
      success: function(data) {
        console.log('storage.set', data)
      },
      fail: function(data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })
    /////////////clear/////////////////

    // storage.clear({
    //   success: function (data) {
    //     console.log('storage.clear success', data)
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    //
    // storage.delete({
    //   key: 'A1',
    //   success: function (data) {
    //     console.log('storage.delete x', data)
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    ////////////////////////////
    storage.get({
      key: 'A2',
      success: function(data) {
        console.log("storage.get success", data)
      },
      fail: function(data, code) {
        console.log(`handling fail`,data)
      },
    })
   
    storage.key({
      index: 2,
      success: function (data) {
        console.log(`handling success`,data)
      },
      fail: function (data) {
        console.log(`handling fail`,data)
      }
    })
  },
})