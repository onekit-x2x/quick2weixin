/* eslint-disable no-console */
import router from '../../@system.router'

Component({
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass: {
      type: String,
      value: ''
    },
    onekitStyle: {
      type: String,
      value: ''
    },
    onekitId: {
      type: String,
      value: ''
    },
    href: {
      type: String,
      value: ''
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        href: this.properties.href
      })
      console.log(this.data)
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  data: {},
  methods: {
    a_bindtap() {
      router.push({
        uri: this.data.href,
        params: this.data.params
      })
    }
  }
})
