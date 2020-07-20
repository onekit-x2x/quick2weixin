// pages/camera/camera.js
Page({
  data: {
    componentName: 'camera',
    pictureUrl: '',
    photoQuality: 'normal',
    deviceposition: "back",
    flash: "auto",
    flashText: '自动'
  },
  onLoad() {
    // this.$page.setTitleBar({ text: 'Camera' })
  },
  takePhoto () {
    let _this = this

    // 调用相机组件的照相功能
    this.$element('camera').takePhoto({
      // 通过quality参数设置照片质量 默认为normal
      quality: _this.photoQuality,
      success(data){
        // 获取回调中的照片地址
        _this.pictureUrl = data.uri
      },
      fail(data, code) {
        console.log('take photos failed：code' + code.code)
      },
      complete() {
        console.log('complete')
      }
    })
  },
  // 切换照片质量
  switchQuality () {
    const qualityArr = ['low', 'normal', 'high']
    const index = qualityArr.indexOf(this.photoQuality)

    if (index >= 2) {
      this.photoQuality = qualityArr[0]
    }
    else {
      this.photoQuality = qualityArr[index + 1]
    }
  },
  // 切换摄像头
  switchCamera (e) {
    this.deviceposition = this.deviceposition === 'back' ? 'front' : 'back'
  },
  // 切换闪关灯
  switchFlash () {
    const flashArr = ['auto', 'on', 'off', 'torch']
    const textArr = ['自动', '开', '关', '常亮']
    const index = flashArr.indexOf(this.flash)

    if (index >= 3) {
      this.flash = flashArr[0]
    }
    else {
      this.flash = flashArr[index + 1]
    }

    this.flashText = textArr[flashArr.indexOf(this.flash)]
  },
  // 权限不允许处理
  handlerError () {
    console.log('用户不允许使用摄像头')
  }
})