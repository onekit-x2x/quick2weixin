/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import OnekitApp from './OnekitApp'
import OnekitBehavior from './OnekitBehavior'
import OnekitComponent from './OnekitComponent'
import OnekitPage from './OnekitPage'

import system_router from './@system.router'

export default {
  OnekitApp,
  OnekitBehavior,
  OnekitComponent,
  OnekitPage,
  '@system.router': system_router,

}
