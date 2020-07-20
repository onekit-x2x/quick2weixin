import wxpay from "../../../onekit/api/service/wxpay.js";
import prompt from '../../../onekit/api/system/prompt.js';
import fetch from '../../../onekit/api/system/fetch.js';
// pages/thirdparty/wxpay/wxpay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  doLogin(){
    var that = this;
    wx.login({
      success: function (res) {
        console.log("get code success", res);
        wx.request({
          // url: 'http://localhost/weixin_app/jscode2session.jsp',
          url: 'http://192.168.23.234/quick/weixin/wxaccount/authorize',
          data : {
            JSCODE : res.code
          },
          success : function(res){
            console.log("获取openid", res.data);
            that.openid = res.data.openid;
            that.session_key = res.data.session_key;

          },
          fail: function (res) {
            console.log("获取openid失败", res);
          }
        })


      },
      fail: function (res) {
        console.log("login fail", res);
      }
    });
  },
  useWxpay (type) {
    var that = this;
    const payType = wxpay.getType();
    console.info(payType);

    if (payType == 'APP') {
      prompt.showToast({
        message: '当前可用微信支付方式：原生支付'
      })
      ///////////////////////////////

      fetch.fetch({
        // url: 'https://www.onekitwx.com/quick/quick/wxpay/pay',
        url: 'http://192.168.23.234/quick/weixin/wxpay/pay', // 根据实际业务填写正确的地址
        data : {
          trade_type : payType,
          openid : that.openid,
        },
        success: function (ret) {
          console.info(ret);

          const order = ret.data;//JSON.parse(ret.data)
          console.info(order);
          console.info('WXPAY:prepayid:' + order.prepayid)
          // console.info('WXPAY:timestamp:' + order.timestamp)
          // console.info('WXPAY:noncestr:' + order.noncestr)
          // console.info('WXPAY:appid:' + order.appid)
          prompt.showToast({
            message: 'fetch order success  ' + ret.data
          })

          wxpay.pay({
            prepayid: order.prepayid,
            //微信原生支付的prepayId
            // extra: {
            //   app_id: order.appid,
            //   partner_id: order.partnerid,
            //   package_value: order.package,
            //   nonce_str: order.noncestr,
            //   time_stamp: order.timestamp,
            //   order_sign: order.sign
            // },
            extra : order.extra,

            fail: function (data, code) {
              console.info('WXPAY handling fail, code=' + code + ' data:' + JSON.stringify(data))

              if (code == '900') {
                prompt.showToast({
                  message: '支付失败：签名错误'
                })
              } else if (code == '901') {
                prompt.showToast({
                  message: '支付失败：包名错误'
                })
              } else if (code == '1000') {
                prompt.showToast({
                  message: '支付失败：未安装微信'
                })
              } else if (code == '2001') {
                prompt.showToast({
                  message: '支付失败：微信app返回订单错误'
                })
              } else {
                prompt.showToast({
                  message: '支付失败：' + code
                })
              }
            },
            cancel: function () {
              console.info('WXPAY handling cancel')
            },
            success: function (data) {
              console.info('WXPAY handling success' + ' data:' + JSON.stringify(data))
              prompt.showToast({
                message: '支付提交微信成功'
              })
            }
          })
        }
      })
    } else if (payType == 'MWEB') {
      prompt.showToast({
        message: '当前可用微信支付方式：网页支付'
      })

      let param = {}
       fetch.fetch({
        // url: 'https://www.onekitwx.com/quick/quick/wxpay/pay',
        url: 'http://192.168.23.234/quick/quick/wxpay/pay', // 根据实际业务填写正确的地址
        data : {
          trade_type : "MWEB"
        },
        success: function (ret) {
          console.log(ret.data);
          var data = JSON.parse(ret.data);
//  if (type === 'referer') {
        param = {
          // 微信网页支付的prepayId
          prepayid: data.prepayid,
          // 微信后台注册的服务器地址
          // referer: 'http://****',
          extra: {
            // 支付服务器下单后，微信返回的MWEB_URL
            mweb_url: data.extra.mweb_url
          }
        }
      // }else {
      //   param = {
      //     // 微信网页支付的prepayId
      //     prepayid: 'xxxxxxxxxx',
      //     extra: {
      //       // 传递给支付页面的自定义参数, 根据需要进行设置, 需要被urlEncode, 会被拼接在配置的url尾部
      //       customeKey1: 'customeValue1',
      //       customeKey2: 'customeValue2'
      //     }
      //   }
      // }

      const callbackFn = {
        fail: function (data, code) {
          console.info('H5 WXPAY handling fail, code=' + code + ' data:' + JSON.stringify(data))
          if (code == '1000') {
            prompt.showToast({
              message: '支付失败：未安装微信'
            })
          } else if (code == '1001') {
            prompt.showToast({
              message: '支付失败：url not found'
            })
          } else {
            prompt.showToast({
              message: '支付失败：' + code
            })
          }
        },
        cancel: function () {
          console.info('H5 WXPAY handling cancel')
        },
        success: function (data) {
          console.info('H5 WXPAY handling success' + ' data:' + JSON.stringify(data))
          prompt.showToast({
            message: '支付提交微信成功'
          })
        }
      }

      wxpay.pay(Object.assign({}, param, callbackFn))

        }
       });


   
    } else {
      prompt.showToast({
        message: '当前无可用微信支付方式'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  getPay(){
    var payType = wxpay.getType();
    console.log("支持的支付方式", payType);
    var order = this.data.order;
    console.log("order", order);
    if (payType == 'APP') {

      wxpay.pay({
        prepayid: order.prepayid,
        //微信原生支付的prepayId
        extra: {
          app_id: order.appid,
          partner_id: order.partnerid,
          package_value: order.package,
          nonce_str: order.noncestr,
          time_stamp: order.timestamp,
          order_sign: order.sign
        },

        fail: function (data, code) {
          console.log('WXPAY handling fail, code=' + code + ' data:' + JSON.stringify(data))

          if (code == '900') {
            console.log({
              message: '支付失败：签名错误'
            })
          } else if (code == '901') {
            console.log({
              message: '支付失败：包名错误'
            })
          } else if (code == '1000') {
            console.log({
              message: '支付失败：未安装微信'
            })
          } else if (code == '2001') {
            console.log({
              message: '支付失败：微信app返回订单错误'
            })
          } else {
            console.log({
              message: '支付失败：' + code
            })
          }
        },
        cancel: function () {
          console.log('WXPAY handling cancel')
        },
        success: function (data) {
          console.log('WXPAY handling success' + ' data:' + JSON.stringify(data))
          console.log({
            message: '支付提交微信成功'
          })
        }
      })
    } else if (payType == 'MWEB') {
      console.log({
        message: '当前可用微信支付方式：网页支付'
      })

      let param = {}

      if (type === 'referer') {
        param = {
          // 微信网页支付的prepayId
          prepayid: 'xxxxxxxxxx',
          // 微信后台注册的服务器地址
          referer: 'http://****',
          extra: {
            // 支付服务器下单后，微信返回的MWEB_URL
            mweb_url: 'http://****'
          }
        }
      }
      else {
        param = {
          // 微信网页支付的prepayId
          prepayid: 'xxxxxxxxxx',
          extra: {
            // 传递给支付页面的自定义参数, 根据需要进行设置, 需要被urlEncode, 会被拼接在配置的url尾部
            customeKey1: 'customeValue1',
            customeKey2: 'customeValue2'
          }
        }
      }

      const callbackFn = {
        fail: function (data, code) {
          console.log('H5 WXPAY handling fail, code=' + code + ' data:' + JSON.stringify(data))
          if (code == '1000') {
            console.log({
              message: '支付失败：未安装微信'
            })
          } else if (code == '1001') {
            console.log({
              message: '支付失败：url not found'
            })
          } else {
            console.log({
              message: '支付失败：' + code
            })
          }
        },
        cancel: function () {
          console.log('H5 WXPAY handling cancel')
        },
        success: function (data) {
          console.log('H5 WXPAY handling success' + ' data:' + JSON.stringify(data))
          console.log({
            message: '支付提交微信成功'
          })
        }
      }

      wxpay.pay(Object.assign({}, param, callbackFn))
    } else {
      console.log({
        message: '当前无可用微信支付方式'
      })
    }

  },

})