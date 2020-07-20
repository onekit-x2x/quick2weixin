// component/canvas/canvas.js
import { drawClock, drawLogo, drawGradientLogo, grayFilter, drawRectByGloComOperation } from "../../onekit/api/CanvasContext"
Page({

    /**
     * 页面的初始数据
     */
    data: {
      componentName: 'canvas',
      globalCompositeOperation: 'source-over',
      imageUrl: '',
      blur:'0',
      color:'black',
      OffsetX:'0',
      OffsetY:'0'

    },

    onLoad: function (options) {

    },

    onReady: function () {

    },

    onShow: function () {
        // this.drawCanvas1()

    },
    drawCanvas1() {
        const conf = {
          'indicate': true,
          'indicateColor': '#222',
          'dial1Color': '#666600',
          'dial2Color': '#81812e',
          'dial3Color': '#9d9d5c',
          'timeAdd': 1,
          'time24h': true,
          'dateAdd': 3,
          'dateAddColor': '#999'
        }
        const canvas = this.$element('canvas1')
        const ctx = canvas.getContext('2d')
        drawClock(400, ctx, conf)
      },

    onUnload: function () {

    },

})