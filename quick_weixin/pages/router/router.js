import router from "../../onekit/api/system/router.js"
Page({
  data: {

  },
  onLoad: function () {
    // router.push({
    //   uri: 'sms:10086',
    //   params: {
    //     body: 'message'
    //   }
    // })
    // router.push({
    //   uri: 'tel:18602874077'
    // })
    // router.push({
    //   uri: '/pages/request/request',
    //   params: {
    //     testId: '1',
    //     body: 'message',
    //     id: 'sss'
    //   }
    // })
    router.push({
      uri: 'http://www.baidu.com'
    })
    // router.push({
    //   uri: 'internal://cache/example.apk'
    // })
    // router.push({
    //   uri: 'hap://app/com.example.quickapp/page?key=value'
    // })
    // router.push({
    //   uri: 'hap://settings/wlan_manager'
    // })


    // router.replace({
    //   uri: '/pages/request/request',
    //   params: {
    //     testId: '1'
    //   }
    // })
   
  },
})