// onekit/ui/tab-content/tab-content.js
Component({
  options: {
    virtualHost: true,
    multipleSlots: true
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
    scrollable: {
      type: Boolean,
      value: true
    },
    count: Number
  }
})
