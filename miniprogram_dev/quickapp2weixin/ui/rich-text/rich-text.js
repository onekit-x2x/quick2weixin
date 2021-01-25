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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HTML = __webpack_require__(20);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  /**
   * 组件的属性列表
   */
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
    nodes: {
      type: String,
      value: ''
    }
  },
  lifetimes: {
    attached: function attached() {
      var nodes = this.properties.nodes;
      if (typeof nodes === 'string') {
        nodes = _HTML2.default.html2nodes(nodes);
        this.setData({
          nodes: nodes
        });
      }
      this.setData({
        nodes: this.properties.nodes
      });
    },
    detached: function detached() {
      // 在组件实例被从页面节点树移除时执行
    }
  },
  /**
   * 组件的初始数据
   */

  data: {},

  /**
   * 组件的方法列表
   */
  methods: {}
});

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
var HTML = function () {
  function HTML() {
    _classCallCheck(this, HTML);
  }

  HTML.html2nodes = function html2nodes(html) {
    function _html2node(xParent) {
      var nodes = [];
      for (var _iterator = xParent.childNodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var xNode = _ref;

        var node = void 0;
        switch (xNode.nodeType) {
          case 3:
            node = {
              type: 'text',
              text: xNode.nodeValue
            };
            break;
          case 1:
            node = {
              name: xNode.tagName.toLowerCase(),
              children: _html2node(xNode),
              attrs: {}
            };
            if (xNode.attributes.class) {
              node.attrs.class = xNode.attributes.class.value;
            }
            if (xNode.attributes.style) {
              node.attrs.style = xNode.attributes.style.value;
            }
            break;
          default:
            console.warn(xNode.nodeType);
            node = null;
            break;
        }
        if (node) {
          nodes.push(node);
        }
      }
      return nodes;
    }
    // eslint-disable-next-line no-undef
    var document = new DOMParser().parseFromString(html, 'text/html');
    return _html2node(document.querySelector('body'));
  };

  HTML.nodes2html = function nodes2html(nodes) {
    function _node2html(node) {
      var selfCloses = ['br', 'img'];
      switch (node.type) {
        case 'text':
          return node.text;
        default:
          {
            var attributs = '';
            if (node.attrs) {
              for (var _iterator2 = Object.keys(node.attrs), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                var _ref2;

                if (_isArray2) {
                  if (_i2 >= _iterator2.length) break;
                  _ref2 = _iterator2[_i2++];
                } else {
                  _i2 = _iterator2.next();
                  if (_i2.done) break;
                  _ref2 = _i2.value;
                }

                var key = _ref2;

                var value = node.attrs[key];
                attributs += ' ' + key + '="' + value + '"';
              }
            }
            //
            var children = node.children ? HTML.nodes2html(node.children) : '';
            if (selfCloses.indexOf(node.name) >= 0) {
              return '<' + node.name + attributs + '/>';
            } else {
              return '<' + node.name + attributs + '>' + children + '</' + node.name + '>';
            }
          }
      }
    }
    var html = '';
    for (var _iterator3 = nodes, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var node = _ref3;

      html += _node2html(node);
    }
    return html;
  };

  return HTML;
}();

exports.default = HTML;

/***/ })

/******/ });