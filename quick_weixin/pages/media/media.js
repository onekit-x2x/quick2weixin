import media from "../../onekit/api/system/media.js"
Page({
  data: {},
  onLoad: function () {
    // media.pickImage({
    //   success: function (data) {
    //     console.log(`handling succes pickImages`, data)
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail`, data)
    //   }
    // })

    // media.pickImages({
    //   success: function (data) {
    //     console.log(`handling succes pickImages`, data)
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail`, data)
    //   }
    // })

    // media.pickVideo({
    //   success: function (data) {
    //     console.log(`handling succes pickImages`, data)
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail`, data)
    //   }
    // })

    // media.pickVideos({
    //   success: function (data) {
    //     console.log(`handling succes pickImages`, data)
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail`, data)
    //   }
    // })
    
    // media.pickFile({
    //   success: function (data) {
    //     console.log(`handling success pickFile`, data)
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })

    // media.previewImage({
    //   current: 'internal://tmp/1a4f723e-4823-4be7-8447-9d566fc13657/Screenshot_20200428-220325.jpg',
    //   uris: [
    //     'internal://tmp/1a4f723e-4823-4be7-8447-9d566fc13657/Screenshot_20200428-220325.jpg',
    //     'internal://tmp/8815d059-62ec-4b74-ad18-cf3ab7de3799/mmexport1588065300693.jpg',
    //     'http://www.xxx.com/c.jpg'
    //   ],
    //   success: function () {
    //     console.log('preview success previewImage')
    //   },
    //   fail: function (data, code) {
    //     console.log('preview fail', data)
    //   }
    // })
    // media.takePhoto({
    //   success: function(data) {
    //     console.log(`handling success`,data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   },
    //   cancel:function(res){
    //     console.log("cancel",res)
    //   }
    // })
    media.takeVideo({
			success: function (data) {
				console.log(`handling success: ${data.uri}`,data)
			},
			fail: function (data, code) {
				console.log(`handling fail, code = ${code}`)
			}
		})

  },
})