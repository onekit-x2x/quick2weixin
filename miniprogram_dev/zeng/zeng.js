import quickapp2weixin from '../quickapp2weixin/index';
const router = quickapp2weixin["@system.router"]

const configuration = quickapp2weixin["@system.configuration"]
const prompt = quickapp2weixin["@system.prompt"]
Page({
  onLoad: function () {
    prompt.showContextMenu({
      itemList: ['item1', 'item2'],
      itemColor: '#ff33ff',
      success: function(data) {
        console.log('handling success',data)
      },
      cancel: function() {
        console.log('handling cancel')
      },
      fail: function(data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })

  }
})