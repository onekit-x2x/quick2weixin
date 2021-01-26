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
}
