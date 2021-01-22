module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _system = __webpack_require__(1);

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  options: {
    virtualHost: true
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
    onekitId: {
      type: String,
      value: ''
    },
    href: {
      type: String,
      value: ''
    }
  },
  lifetimes: {
    attached: function attached() {
      this.setData({
        href: this.properties.href
      });
      console.log(this.data);
    },
    detached: function detached() {
      // 在组件实例被从页面节点树移除时执行
    }
  },
  data: {},
  methods: {
    a_bindtap: function a_bindtap() {
      _system2.default.push({
        uri: this.data.href,
        params: this.data.params
      });
    }
  }
}); /* eslint-disable no-console */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _URL = __webpack_require__(2);

var _URL2 = _interopRequireDefault(_URL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /*  network.getType/// */
  push: function push(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_uri = quick_object.uri;
    var quick_params = quick_object.params;
    // ///////////////
    var wx_object = {};
    var url = new _URL2.default(quick_uri);
    console.log(url);
    if (url.scheme) {
      switch (url.scheme) {
        case 'tel':
          wx.makePhoneCall({
            phoneNumber: url.host
          });
          break;
        case 'sms':
          wx.showModal({
            title: '不支持',
            content: '微信小程序暂不支持发短信'
          });
          break;
        case 'http':
        case 'https':
          wx.navigateTo({
            url: '/onekit/page/router.push/ie?url=' + encodeURI(quick_uri)
          });
          break;
        case 'internal':
          wx.showModal({
            title: '带配置',
            content: '请配置要打开的App'
          });
          break;
        case 'hap':
          switch (url.host) {
            case 'app':
              wx.showModal({
                title: '带配置',
                content: '请配置要打开的小程序'
              });
              break;
            case 'settings':
              break;
            default:
              throw new Error(url.host);
          }
          // wx.showModal({
          //   title: '不支持',
          //   content: '微信小程序暂不支持',
          // });
          break;
        default:
          throw new Error(url.scheme);
      }
    } else {
      if (quick_params) {
        wx_object.url = quick_uri + ('?params=' + quick_params.body);
      } else {
        wx_object.url = quick_uri;
      }
      wx.navigateTo(wx_object);
    }
  },

  /** router.replace */

  replace: function replace(quick_object) {
    var quick_uri = quick_object.uri;
    // ///////////////
    var wx_object = {};
    var url = new _URL2.default(quick_uri);
    wx_object.url = url;
    wx.redirectTo(wx_object);
  },

  /** router.back */

  back: function back(quick_object) {
    var quick_uri = quick_object.uri;
    // ///////////////
    var wx_object = {};
    var url = new _URL2.default(quick_uri);
    wx_object.url = url;
    wx.navigateBack(wx_object);
  },

  /** router.clear() */

  clear: function clear() {
    //  const wx_object = {}
  },

  /** router.getLength */

  getLength: function getLength() {
    //  const wx_object = {}
  },

  /** router.getState */

  getState: function getState() {
    //  const wx_object = {}
  },

  /** router.getPages */

  getPages: function getPages() {
    //  const wx_object = {}
  }
}; /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("oneutil/URL");

/***/ })
/******/ ]);