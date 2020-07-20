import file from "../../onekit/api/system/file.js"
Page({
  data: {},
  onLoad: function(options) {
    // file.move({
    //   srcUri: 'internal://cache/path/to/file',
    //   dstUri: 'internal://files/path/to/file',
    //   success: function(uri) {
    //     console.log(`move success: ${uri}`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail`, data, code)
    //   }
    // })

    // file.copy({
    //   srcUri: 'internal://cache/path/to/file',
    //   dstUri: 'internal://files/path/to/file',
    //   success: function(uri) {
    //     console.log(`copy success: ${uri}`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail`,data,code)
    //   }
    // })

    // file.list({
    //   uri: 'internal://alipay',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail`, data, code)
    //   }
    // })

    // file.get({
    //   uri: 'internal://files/path/to/file',
    //   success: function(data) {
    //     console.log("success get",data)
    //     },
    //   fail: function(data, code) {
    //     console.log(`handling fail fail`,data,code)
    //   }
    // })

    // file.delete({
    //   uri: 'internal://files/path/to/file',
    //   success: function (data) {
    //     console.log('handling success delete',data)
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail delete`,data,code)
    //   }
    // })

    // file.writeText({
    //   uri: 'internal://files/work/demo.txt',
    //   text: 'test',
    //   success: function () {
    //     console.log('handling success writeText')
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail writeText`,data,code)
    //   }
    // })
    file.access({
      uri: 'internal://files/test',
      success: function(data) {
        console.log(`handling success access`,data)
      },
      fail: function(data, code) {
        console.log(`handling fail access`,data)
      }
    })
  },
})