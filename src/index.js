/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import OnekitApp from './OnekitApp'
import OnekitBehavior from './OnekitBehavior'
import OnekitComponent from './OnekitComponent'
import OnekitPage from './OnekitPage'

import system_router from './@system.router'
import system_configuration from './@system.configuration'
import system_prompt from './@system.prompt'
import system_webview from './@system.webview'
import system_request from './@system.request'
import system_fetch from './@system.fetch'
import system_websocketfactory from './@system.websocketfactory'
import system_storage from './@system.storage'
import system_file from './@system.file'
import system_vibrator from './@system.vibrator'
import system_barcode from './@system.barcode'
import system_sensor from './@system.sensor'
import system_clipboard from './@system.clipboard'
import system_geolocation from './@system.geolocation'
import system_network from './@system.network'
import system_device from './@system.device'
import system_brightness from './@system.brightness'
import system_battery from './@system.battery'
import system_wifi from './@system.wifi'
import system_record from './@system.record'
import system_bluetooth from './@system.bluetooth'
import system_zip from './@system.zip'
import system_media from './@system.media'
import system_image from './@system.image'
import system_audio from './@system.audio'
import hap_io_Video from './api/Video'
import service_texttoaudio from './@service.texttoaudio'

export default {
  OnekitApp,
  OnekitBehavior,
  OnekitComponent,
  OnekitPage,
  '@system.router': system_router,
  '@system.configuration': system_configuration,
  '@system.prompt': system_prompt,
  '@system.webview': system_webview,
  '@system.request': system_request,
  '@system.fetch': system_fetch,
  '@system.websocketfactory': system_websocketfactory,
  '@system.storage': system_storage,
  '@system.file': system_file,
  '@system.vibrator': system_vibrator,
  '@system.barcode': system_barcode,
  '@system.sensor': system_sensor,
  '@system.clipboard': system_clipboard,
  '@system.geolocation': system_geolocation,
  '@system.network': system_network,
  '@system.device': system_device,
  '@system.brightness': system_brightness,
  '@system.battery': system_battery,
  '@system.wifi': system_wifi,
  '@system.record': system_record,
  '@system.bluetooth': system_bluetooth,
  '@system.zip': system_zip,
  '@system.media': system_media,
  '@system.image': system_image,
  '@system.audio': system_audio,
  '@hap.io.Video': hap_io_Video,
  '@service.texttoaudio': service_texttoaudio,
}
