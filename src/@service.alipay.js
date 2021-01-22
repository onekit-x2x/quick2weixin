/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  /**
   * 支付宝app支付暂未开通
   *
   */
  pay(quick_object) {
    if (!quick_object) {
      return
    }
    // const quick_callback = quick_object.callback
    // //////////////////////
    console.error('[quick2weixin]', '暂未开通支付宝app支付')
  }


}
