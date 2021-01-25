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

export default {
  OnekitApp,
  OnekitBehavior,
  OnekitComponent,
  OnekitPage,
  '@system.router': system_router,
  '@system.configuration': system_configuration,
  '@system.prompt': system_prompt,

}
