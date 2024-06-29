/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/checkmark.svg */ \"./src/icons/checkmark.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/***\n    The new CSS reset - version 1.11.2 (last updated 15.11.2023)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n    - The \"html\" element is excluded, otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)\n */\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Fix mobile Safari increase font-size on landscape mode */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na, button {\n  cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol, ul, menu, summary {\n  list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n  max-inline-size: 100%;\n  max-block-size: 100%;\n}\n\n/* removes spacing between cells in tables */\ntable {\n  border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\ninput, textarea {\n  -webkit-user-select: auto;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n  white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n  -webkit-appearance: revert;\n  appearance: revert;\n}\n\n/* preformatted text - use only for this feature */\n:where(pre) {\n  all: revert;\n  box-sizing: border-box;\n}\n\n/* reset default text opacity of input placeholder */\n::placeholder {\n  color: unset;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n  display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly.\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  -webkit-user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n/* Revert Modal native behavior */\n:where(dialog:modal) {\n  all: revert;\n  box-sizing: border-box;\n}\n\n/* Remove details summary webkit styles */\n::-webkit-details-marker {\n  display: none;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* Colors */\n.h1, .todos__title {\n  font-size: clamp(40px, 10vw, 96px);\n  font-weight: 700;\n  line-height: 109%;\n  letter-spacing: 2px;\n}\n\n.p-normal, body, .input {\n  font-size: clamp(15px, 5vw, 20px);\n  font-weight: 400;\n  line-height: 142%;\n}\n\n.p-small, .todos__hint, .todos__controls {\n  font-size: clamp(14px, 3vw, 17px);\n  font-weight: 400;\n  line-height: 142%;\n  letter-spacing: -0.17px;\n}\n\n/* Colors */\n/* Colors */\n.active, .task__title--active, .task--active, .input:focus {\n  box-shadow: inset 0 0 1px 2px #3B7E7B;\n}\n\n/* Colors */\n.button {\n  padding: 1px 7px;\n  color: #1B1F2B;\n  border-radius: 5px;\n  outline: 1px solid #1B1F2B;\n  cursor: pointer;\n  transition: background 0.4s, color 0.2s;\n}\n.button:hover {\n  color: #FFF;\n  background: rgba(27, 31, 43, 0.7);\n}\n.button:active {\n  color: #FFF;\n  background: #1B1F2B;\n}\n.button--active {\n  outline: 3px solid #286562;\n}\n.button--active:hover {\n  background: rgba(40, 101, 98, 0.4);\n}\n\n/* Colors */\n.checkbox {\n  display: flex;\n  flex: none;\n  width: clamp(24px, 1.142rem + 1.53vw, 30px);\n  height: clamp(24px, 1.142rem + 1.53vw, 30px);\n  border: 1px solid #1B1F2B;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.checkbox:hover {\n  background: rgba(166, 166, 166, 0.4);\n}\n.checkbox:checked {\n  width: clamp(24px, 1.142rem + 1.53vw, 30px);\n  height: clamp(24px, 1.142rem + 1.53vw, 30px);\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;\n  background-size: cover;\n}\n\n/* Colors */\n.input {\n  position: relative;\n  padding: clamp(7px, 2.5vw, 15px) clamp(10px, 2.5vw, 20px) clamp(7px, 2.5vw, 15px) clamp(45px, 1.322rem + 6.36vw, 70px);\n  color: #1B1F2B;\n  background: #FFF;\n  border: 1px solid #A6A6A6;\n  border-radius: 10px;\n  box-shadow: rgba(255, 255, 255, 0.1) 0 0 10px 3px;\n  transition: all 0.3s;\n}\n.input::placeholder {\n  font-style: italic;\n  color: #A6A6A6;\n}\n/* Colors */\n.task {\n  display: flex;\n  align-items: center;\n  gap: clamp(5px, -0.229rem + 2.31vw, 20px);\n  padding: clamp(7px, 2.5vw, 15px) clamp(10px, 2.5vw, 20px);\n  color: #1B1F2B;\n  background: #FFF;\n  border-bottom: 1px solid #A6A6A6;\n  transition: all 0.2s;\n}\n.task__title {\n  flex: 1 1 auto;\n  padding: 5px;\n  word-break: break-all;\n  border-radius: 5px;\n}\n.task__inner {\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.task__btn {\n  flex: none;\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.task--finished {\n  text-decoration: line-through;\n  color: #A6A6A6;\n}\n.task:hover .task__btn {\n  opacity: 1;\n}\n\n@media (hover: none) {\n  .task__btn {\n    opacity: 1;\n  }\n}\n/* Colors */\nbody {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  color: #FFF;\n  background: #1B1F2B;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  overflow: hidden;\n}\n\n.container {\n  max-width: 660px;\n  width: 100%;\n  padding: 0 clamp(10px, 3vw, 30px);\n  margin: 0 auto;\n}\n\n.todos__inner {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n}\n.todos__title {\n  padding: 10px 0;\n  text-align: center;\n}\n.todos__wrapper {\n  position: relative;\n}\n.todos__input {\n  width: 100%;\n}\n.todos__arrow {\n  position: absolute;\n  top: 55%;\n  left: clamp(0px, -0.596rem + 2.54vw, 10px);\n  z-index: 5;\n  display: block;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.todos__tasks {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.todos__controls {\n  position: relative;\n  display: none;\n  grid-template-columns: repeat(3, 1fr);\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 10px;\n  color: #1B1F2B;\n  background: #FFF;\n  border-radius: 10px;\n}\n.todos__controls-text {\n  font-weight: bold;\n}\n.todos__text {\n  flex: none;\n}\n.todos__filters {\n  display: flex;\n  flex: none;\n  gap: 7px;\n}\n.todos__hint {\n  text-align: center;\n}\n.todos__clear {\n  position: relative;\n  text-align: right;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 200ms ease, color 0.3s;\n}\n.todos__clear:hover {\n  color: rgba(27, 31, 43, 0.6);\n}\n\n.hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n\n@media (max-width: 425px) {\n  .todos__controls {\n    grid-template-columns: repeat(2, 1fr);\n    grid-row-gap: 5px;\n    grid-template-rows: repeat(2, 1fr);\n  }\n  .todos__filters {\n    grid-row: 2;\n    grid-column: span 2;\n    justify-content: center;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/domUtils.js":
/*!****************************!*\
  !*** ./src/js/domUtils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearActiveButton: () => (/* binding */ clearActiveButton),\n/* harmony export */   removeTaskElement: () => (/* binding */ removeTaskElement),\n/* harmony export */   render: () => (/* binding */ render),\n/* harmony export */   renderTask: () => (/* binding */ renderTask),\n/* harmony export */   updateTaskElement: () => (/* binding */ updateTaskElement),\n/* harmony export */   updateTasksCount: () => (/* binding */ updateTasksCount)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\nconst updateTasksCount = () => {\r\n    const tasksCount = _main__WEBPACK_IMPORTED_MODULE_0__.todoList.tasks.length;\r\n    const activeTasksCount = _main__WEBPACK_IMPORTED_MODULE_0__.todoList.getActiveTasksCount();\r\n    _main__WEBPACK_IMPORTED_MODULE_0__.controlsNumber.textContent = activeTasksCount;\r\n    _main__WEBPACK_IMPORTED_MODULE_0__.controls.style.display = tasksCount === 0 ? \"none\" : \"grid\";\r\n    _main__WEBPACK_IMPORTED_MODULE_0__.arrowButton.style.display = tasksCount === 0 ? \"none\" : \"block\";\r\n    _main__WEBPACK_IMPORTED_MODULE_0__.clearButton.classList.toggle(\"hidden\", activeTasksCount === tasksCount);\r\n};\r\n\r\nconst updateTaskElement = (taskId) => {\r\n    const taskElem = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getTaskById)(taskId);\r\n    const taskData = _main__WEBPACK_IMPORTED_MODULE_0__.todoList.findTask(taskId);\r\n\r\n    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.satisfyFilter)(taskData, _main__WEBPACK_IMPORTED_MODULE_0__.todoList.filter)) {\r\n        taskElem.className = `task ${taskData.isActive ? \"\" : \"task--finished\"}`;\r\n        taskElem.querySelector(\".checkbox\").checked = !taskData.isActive;\r\n    } else {\r\n        taskElem.remove()\r\n    }\r\n\r\n    updateTasksCount();\r\n}\r\n\r\nconst renderTask = (task) => {\r\n    const taskElem = document.createElement(\"div\");\r\n    taskElem.className = `task ${task.isActive ? \"\" : \"task--finished\"}`;\r\n    taskElem.dataset.id = task.id;\r\n\r\n    taskElem.innerHTML = `\r\n            <input class=\"task__checkbox checkbox\" type=\"checkbox\" ${task.isActive ? \"\" : \"checked\"}>\r\n            <div class=\"task__inner\">\r\n                <span class=\"task__title title\">${task.title}</span>\r\n                <button class=\"task__btn\">\r\n                    <img class=\"delete\" src=\"./icons/cross.svg\" alt=\"delete icon\">\r\n                </button>\r\n            </div>\r\n    `;\r\n    _main__WEBPACK_IMPORTED_MODULE_0__.tasksWrapper.appendChild(taskElem);\r\n}\r\n\r\nconst render = (filter) => {{\r\n    _main__WEBPACK_IMPORTED_MODULE_0__.tasksWrapper.innerHTML = \"\";\r\n    const filteredTasks = _main__WEBPACK_IMPORTED_MODULE_0__.todoList.getFilteredTasks(filter);\r\n    filteredTasks.forEach(task => renderTask(task));\r\n}}\r\n\r\nconst clearActiveButton = () => {\r\n    _main__WEBPACK_IMPORTED_MODULE_0__.filterButtons.forEach(btn => btn.classList.remove(\"button--active\"));\r\n};\r\n\r\nconst removeTaskElement = (taskId) => {\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getTaskById)(taskId)?.remove();\r\n    updateTasksCount();\r\n}\n\n//# sourceURL=webpack://todo/./src/js/domUtils.js?");

/***/ }),

/***/ "./src/js/handlers.js":
/*!****************************!*\
  !*** ./src/js/handlers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   handleClearFinished: () => (/* binding */ handleClearFinished),\n/* harmony export */   handleTaskAction: () => (/* binding */ handleTaskAction),\n/* harmony export */   handleTaskDelete: () => (/* binding */ handleTaskDelete),\n/* harmony export */   handleTitleChange: () => (/* binding */ handleTitleChange),\n/* harmony export */   handleToggleAll: () => (/* binding */ handleToggleAll),\n/* harmony export */   makeTitleEditable: () => (/* binding */ makeTitleEditable),\n/* harmony export */   saveTaskTitle: () => (/* binding */ saveTaskTitle)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils */ \"./src/js/domUtils.js\");\n\r\n\r\n\r\n\r\nconst addTask = () => {\r\n    if (_main__WEBPACK_IMPORTED_MODULE_1__.input.value.length !== 0) {\r\n        const task = _main__WEBPACK_IMPORTED_MODULE_1__.todoList.addTask({title: _main__WEBPACK_IMPORTED_MODULE_1__.input.value.trim()});\r\n        _main__WEBPACK_IMPORTED_MODULE_1__.input.value = \"\";\r\n        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.satisfyFilter)(task, _main__WEBPACK_IMPORTED_MODULE_1__.todoList.filter)) {\r\n            (0,_domUtils__WEBPACK_IMPORTED_MODULE_2__.renderTask)(task);\r\n        }\r\n        (0,_domUtils__WEBPACK_IMPORTED_MODULE_2__.updateTasksCount)();\r\n    }\r\n};\r\n\r\nconst handleTaskDelete = (taskId) => {\r\n    _main__WEBPACK_IMPORTED_MODULE_1__.todoList.removeTask(taskId);\r\n    (0,_domUtils__WEBPACK_IMPORTED_MODULE_2__.removeTaskElement)(taskId);\r\n}\r\n\r\nconst handleTaskAction = event => {\r\n    const elem = event.target;\r\n    const task = elem.closest(\".task\");\r\n    if (!task) return;\r\n\r\n    const taskId = Number(task.dataset.id);\r\n    if (elem.classList.contains(\"checkbox\")) {\r\n        _main__WEBPACK_IMPORTED_MODULE_1__.todoList.toggleActive(taskId);\r\n        (0,_domUtils__WEBPACK_IMPORTED_MODULE_2__.updateTaskElement)(taskId);\r\n        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeOutline)(task, elem);\r\n    } else if (elem.classList.contains(\"delete\")) {\r\n        handleTaskDelete(taskId);\r\n    }\r\n};\r\n\r\nconst saveTaskTitle = (elem, taskId) => {\r\n    elem.setAttribute(\"contenteditable\", \"false\");\r\n    elem.setAttribute(\"spellcheck\", \"false\");\r\n    elem.classList.remove(\"task__title--active\");\r\n    const title = elem.textContent.trim();\r\n    if (title.length === 0) {\r\n        handleTaskDelete(taskId);\r\n        _main__WEBPACK_IMPORTED_MODULE_1__.todoList.removeTask(taskId);\r\n    } else {\r\n        _main__WEBPACK_IMPORTED_MODULE_1__.todoList.changeTitle(taskId, title);\r\n    }\r\n}\r\n\r\nconst makeTitleEditable = (elem, taskId) => {\r\n    elem.setAttribute(\"contenteditable\", \"true\");\r\n    elem.setAttribute(\"spellcheck\", \"true\");\r\n    elem.classList.add(\"task__title--active\");\r\n    elem.focus();\r\n    elem.addEventListener(\"focusout\", () => saveTaskTitle(elem, taskId));\r\n}\r\n\r\nconst handleClearFinished = () => {\r\n    const tasksToDelete = _main__WEBPACK_IMPORTED_MODULE_1__.todoList.clearFinished();\r\n    tasksToDelete.forEach(task => (0,_domUtils__WEBPACK_IMPORTED_MODULE_2__.removeTaskElement)(task.id));\r\n}\r\n\r\nconst handleTitleChange = (event) => {\r\n    const elem = event.target;\r\n    const taskId = Number(elem.closest(\".task\").dataset.id);\r\n    if (!elem.classList.contains(\"title\")) return;\r\n    makeTitleEditable(elem, taskId);\r\n}\r\n\r\nconst handleToggleAll = () => {\r\n    _main__WEBPACK_IMPORTED_MODULE_1__.todoList.toggleAllActive();\r\n    (0,_domUtils__WEBPACK_IMPORTED_MODULE_2__.render)(_main__WEBPACK_IMPORTED_MODULE_1__.todoList.filter);\r\n    (0,_domUtils__WEBPACK_IMPORTED_MODULE_2__.updateTasksCount)();\r\n}\n\n//# sourceURL=webpack://todo/./src/js/handlers.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrowButton: () => (/* binding */ arrowButton),\n/* harmony export */   clearButton: () => (/* binding */ clearButton),\n/* harmony export */   controls: () => (/* binding */ controls),\n/* harmony export */   controlsNumber: () => (/* binding */ controlsNumber),\n/* harmony export */   filterButtons: () => (/* binding */ filterButtons),\n/* harmony export */   input: () => (/* binding */ input),\n/* harmony export */   tasksWrapper: () => (/* binding */ tasksWrapper),\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ \"./src/js/todoList.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers */ \"./src/js/handlers.js\");\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domUtils */ \"./src/js/domUtils.js\");\n\r\n\r\n\r\n\r\n\r\nconst input = document.querySelector(\".input\");\r\nconst controls = document.querySelector(\".controls\");\r\nconst tasksWrapper = document.querySelector(\".tasks-wrapper\");\r\nconst controlsNumber = document.querySelector(\".number\");\r\nconst filterButtons = document.querySelectorAll(\".todos__btn\");\r\nconst arrowButton = document.querySelector(\".arrow-btn\");\r\nconst clearButton = document.querySelector(\".clear\");\r\n\r\nconst todoList = new _todoList_js__WEBPACK_IMPORTED_MODULE_1__.TodoList(\".tasks-wrapper\");\r\n\r\nfilterButtons.forEach(btn => btn.addEventListener(\"click\", () => {\r\n    (0,_domUtils__WEBPACK_IMPORTED_MODULE_3__.clearActiveButton)();\r\n    btn.classList.add(\"button--active\");\r\n    (0,_domUtils__WEBPACK_IMPORTED_MODULE_3__.render)(btn.dataset.filter);\r\n    (0,_domUtils__WEBPACK_IMPORTED_MODULE_3__.updateTasksCount)();\r\n}));\r\n\r\ninput.addEventListener(\"keydown\", event => {\r\n    if (event.key === \"Enter\") {\r\n        (0,_handlers__WEBPACK_IMPORTED_MODULE_2__.addTask)();\r\n    }\r\n});\r\n\r\ntasksWrapper.addEventListener(\"click\", _handlers__WEBPACK_IMPORTED_MODULE_2__.handleTaskAction);\r\ntasksWrapper.addEventListener(\"dblclick\", _handlers__WEBPACK_IMPORTED_MODULE_2__.handleTitleChange);\r\ntasksWrapper.addEventListener(\"touchend\", _handlers__WEBPACK_IMPORTED_MODULE_2__.handleTitleChange);\r\narrowButton.addEventListener(\"click\", _handlers__WEBPACK_IMPORTED_MODULE_2__.handleToggleAll);\r\nclearButton.addEventListener(\"click\", _handlers__WEBPACK_IMPORTED_MODULE_2__.handleClearFinished);\r\n\r\nif (todoList.tasks.length !== 0) {\r\n    document.querySelector(`[data-filter=\"${todoList.filter}\"]`).classList.add(\"button--active\");\r\n    (0,_domUtils__WEBPACK_IMPORTED_MODULE_3__.render)(todoList.filter);\r\n    (0,_domUtils__WEBPACK_IMPORTED_MODULE_3__.updateTasksCount)();\r\n}\n\n//# sourceURL=webpack://todo/./src/js/main.js?");

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor({id, title, isActive}) {\r\n        this.id = id ?? Date.now();\r\n        this.title = title;\r\n        this.isActive = isActive ?? true;\r\n    }\r\n\r\n    toggleActive() {\r\n        this.isActive = !this.isActive;\r\n    }\r\n\r\n    changeTitle(newTitle) {\r\n        this.title = newTitle;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo/./src/js/task.js?");

/***/ }),

/***/ "./src/js/todoList.js":
/*!****************************!*\
  !*** ./src/js/todoList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoList: () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/js/task.js\");\n\r\n\r\nclass TodoList {\r\n    constructor() {\r\n        this.tasks = [];\r\n        this.filter = \"all\";\r\n        this.loadTasks();\r\n    }\r\n\r\n    loadTasks() {\r\n        const savedTasks = JSON.parse(localStorage.getItem(\"tasks\"));\r\n        if (!savedTasks) return;\r\n        this.filter = savedTasks.filter;\r\n        savedTasks.tasks.forEach(task => {\r\n            this.addTask({\r\n                id: task.id,\r\n                title: task.title,\r\n                isActive: task.isActive\r\n            });\r\n        });\r\n    }\r\n\r\n    saveTasks() {\r\n        const saveData = {\r\n            filter: this.filter,\r\n            tasks: this.tasks\r\n        }\r\n        localStorage.setItem(\"tasks\", JSON.stringify(saveData));\r\n    }\r\n\r\n    addTask({id, title, isActive}) {\r\n        const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task({id, title, isActive});\r\n        this.tasks.push(task);\r\n        this.saveTasks();\r\n        return task;\r\n    }\r\n\r\n    removeTask(taskId) {\r\n        this.tasks = this.tasks.filter(task => task.id !== taskId);\r\n        this.saveTasks();\r\n    }\r\n\r\n    findTask(taskId) {\r\n        return this.tasks.find(task => task.id === taskId);\r\n    }\r\n\r\n    toggleActive(taskId) {\r\n        const task = this.findTask(taskId);\r\n        task.toggleActive();\r\n        this.saveTasks();\r\n    }\r\n\r\n    changeTitle(taskId, newTitle) {\r\n        const task = this.findTask(taskId);\r\n        task.changeTitle(newTitle);\r\n        this.saveTasks();\r\n    }\r\n\r\n    clearFinished() {\r\n        const tasksToDelete = this.tasks.filter(task => !task.isActive);\r\n        this.tasks = this.tasks.filter(task => task.isActive);\r\n        this.saveTasks();\r\n        return tasksToDelete;\r\n    }\r\n\r\n    toggleAllActive() {\r\n        const isAllActive = this.tasks.some(task => task.isActive);\r\n        this.tasks.forEach(task => {\r\n            task.isActive = !isAllActive;\r\n        });\r\n        this.saveTasks();\r\n    }\r\n\r\n    getActiveTasksCount() {\r\n        return this.tasks.filter(task => task.isActive).length;\r\n    }\r\n\r\n    getFilteredTasks(filter) {\r\n        this.filter = filter;\r\n        this.saveTasks();\r\n        if (filter === \"active\") {\r\n            return this.tasks.filter(task => task.isActive);\r\n        } else if (filter === \"completed\") {\r\n            return this.tasks.filter(task => !task.isActive);\r\n        }\r\n        return this.tasks;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo/./src/js/todoList.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTaskById: () => (/* binding */ getTaskById),\n/* harmony export */   makeOutline: () => (/* binding */ makeOutline),\n/* harmony export */   satisfyFilter: () => (/* binding */ satisfyFilter)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUtils */ \"./src/js/domUtils.js\");\n\r\n\r\n\r\n// Checking that the task that we are changing or adding satisfies the current filter\r\nconst satisfyFilter = (task, filter) => {\r\n    switch (filter) {\r\n        case \"all\":\r\n            return true;\r\n        case \"active\":\r\n            return task.isActive;\r\n        case \"completed\":\r\n            return !task.isActive;\r\n        default:\r\n            return true;\r\n    }\r\n};\r\n\r\nconst getTaskById = (taskId) => {\r\n    return _main_js__WEBPACK_IMPORTED_MODULE_0__.tasksWrapper.querySelector(`[data-id=\"${taskId}\"]`);\r\n}\r\n\r\nconst makeOutline = (task, elem) => {\r\n    task.classList.add(\"task--active\");\r\n    window.addEventListener(\"click\", (event) => {\r\n        if (!elem.contains(event.target)) {\r\n            task.classList.remove(\"task--active\");\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://todo/./src/js/utils.js?");

/***/ }),

/***/ "./src/icons/checkmark.svg":
/*!*********************************!*\
  !*** ./src/icons/checkmark.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ff178040dbf61f686e4.svg\";\n\n//# sourceURL=webpack://todo/./src/icons/checkmark.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;