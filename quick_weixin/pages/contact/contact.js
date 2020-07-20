import contact from "../../onekit/api/system/contact.js"
Page({
  data: {
  },
  onLoad: function () {
    contact.pick({
      success: function (data) {
        console.log('contact', data)
      },
      fail: function (data, code) {
        console.log('handling fail', data, code)
      }
    })
////////////////////////////////////////////
    contact.list({
      success: function (data) {
        console.log(data)
        for (const i in data.contactList) {
          console.log(
            `name: ${data.contactList[i].displayName},number:${
            data.contactList[i].number
            }`
          )
        }
      },
      fail: function (data, code) {
        console.log('handling fail, code=' + code)
      }
    })
  },
})