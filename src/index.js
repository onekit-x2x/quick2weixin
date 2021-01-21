/* eslint-disable camelcase */
/* eslint-disable no-console */
import OnekitApp from './OnekitApp'
import OnekitBehavior from './OnekitBehavior'
import OnekitComponent from './OnekitComponent'
import OnekitPage from './OnekitPage'

import service_alipay from './api/service/alipay'
import service_share from './api/service/share'
import service_wxaccount from './api/service/wxaccount'
import service_wxpay from './api/service/wxpay'

import system_alarm from './api/system/alarm'
import system_audio from './api/system/audio'
import system_barcode from './api/system/barcode'
import system_battery from './api/system/battery'
import system_bluetooth from './api/system/bluetooth'
import system_brightness from './api/system/brightness'
import system_clipboard from './api/system/clipboard'
import system_contact from './api/system/contact'
import system_device from './api/system/device'
import system_dhtml from './api/system/dhtml'
import system_fetch from './api/system/fetch'
import system_file from './api/system/file'
import system_geolocation from './api/system/geolocation'
import system_image from './api/system/image'
import system_media from './api/system/media'
import system_network from './api/system/network'
import system_prompt from './api/system/prompt'
import system_record from './api/system/record'
import system_request from './api/system/request'
import system_router from './api/system/router'
import system_sensor from './api/system/sensor'
import system_share from './api/system/share'
import system_storage from './api/system/storage'
import system_vibrator from './api/system/vibrator'
import system_websocketfactory from './api/system/websocketfactory'
import system_webview from './api/system/webview'
import system_wifi from './api/system/wifi'
import system_zip from './api/system/zip'

export default {
  OnekitApp,
  OnekitBehavior,
  OnekitComponent,
  OnekitPage,

  '@service.alipay': service_alipay,
  '@service.share': service_share,
  '@service.wxaccount': service_wxaccount,
  '@service.wxpay': service_wxpay,

  '@system.alarm': system_alarm,
  '@system.audio': system_audio,
  '@system.barcode': system_barcode,
  '@system.battery': system_battery,
  '@system.bluetooth': system_bluetooth,
  '@system.brightness': system_brightness,
  '@system.clipboard': system_clipboard,
  '@system.contact': system_contact,
  '@system.device': system_device,
  '@system.dhtml': system_dhtml,
  '@system.fetch': system_fetch,
  '@system.file': system_file,
  '@system.geolocation': system_geolocation,
  '@system.image': system_image,
  '@system.media': system_media,
  '@system.network': system_network,
  '@system.prompt': system_prompt,
  '@system.record': system_record,
  '@system.request': system_request,
  '@system.router': system_router,
  '@system.sensor': system_sensor,
  '@system.share': system_share,
  '@system.storage': system_storage,
  '@system.vibrator': system_vibrator,
  '@system.websocketfactory': system_websocketfactory,
  '@system.webview': system_webview,
  '@system.wifi': system_wifi,
  '@system.zip': system_zip,
}
