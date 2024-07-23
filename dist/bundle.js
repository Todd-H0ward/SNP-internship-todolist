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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/checkmark.svg */ \"./src/icons/checkmark.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/***\n    The new CSS reset - version 1.11.2 (last updated 15.11.2023)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n    - The \"html\" element is excluded, otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)\n */\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Fix mobile Safari increase font-size on landscape mode */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na,\nbutton {\n  cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol,\nul,\nmenu,\nsummary {\n  list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n  max-inline-size: 100%;\n  max-block-size: 100%;\n}\n\n/* removes spacing between cells in tables */\ntable {\n  border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\ninput,\ntextarea {\n  -webkit-user-select: auto;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n  white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n  -webkit-appearance: revert;\n  appearance: revert;\n}\n\n/* preformatted text - use only for this feature */\n:where(pre) {\n  all: revert;\n  box-sizing: border-box;\n}\n\n/* reset default text opacity of input placeholder */\n::placeholder {\n  color: unset;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n  display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly.\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  -webkit-user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n/* Revert Modal native behavior */\n:where(dialog:modal) {\n  all: revert;\n  box-sizing: border-box;\n}\n\n/* Remove details summary webkit styles */\n::-webkit-details-marker {\n  display: none;\n}\n\n* {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* Colors */\n.h1, .todos__title {\n  font-size: clamp(40px, 10vw, 96px);\n  font-weight: 700;\n  line-height: 109%;\n  letter-spacing: 2px;\n}\n\n.p-normal, body, .input {\n  font-size: clamp(15px, 5vw, 20px);\n  font-weight: 400;\n  line-height: 142%;\n}\n\n.p-small, .todos__hint, .todos__controls {\n  font-size: clamp(14px, 3vw, 17px);\n  font-weight: 400;\n  line-height: 142%;\n  letter-spacing: -0.17px;\n}\n\n/* Colors */\n/* Colors */\n.active, .task__title--active, .task--active, .input:focus {\n  box-shadow: inset 0 0 1px 2px #3b7e7b;\n}\n\n/* Colors */\n.button {\n  padding: 1px 7px;\n  color: #1b1f2b;\n  border-radius: 5px;\n  outline: 1px solid #1b1f2b;\n  cursor: pointer;\n  transition: background 0.4s, color 0.2s;\n}\n.button:hover {\n  color: #fff;\n  background: rgba(27, 31, 43, 0.7);\n}\n.button:active {\n  color: #fff;\n  background: #1b1f2b;\n}\n.button--active {\n  outline: 3px solid #286562;\n}\n.button--active:hover {\n  background: rgba(40, 101, 98, 0.4);\n}\n\n/* Colors */\n.checkbox {\n  display: flex;\n  flex: none;\n  width: clamp(24px, 1.142rem + 1.53vw, 30px);\n  height: clamp(24px, 1.142rem + 1.53vw, 30px);\n  border: 1px solid #1b1f2b;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.checkbox:hover {\n  background: rgba(166, 166, 166, 0.4);\n}\n.checkbox:checked {\n  width: clamp(24px, 1.142rem + 1.53vw, 30px);\n  height: clamp(24px, 1.142rem + 1.53vw, 30px);\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;\n  background-size: cover;\n}\n\n/* Colors */\n.input {\n  position: relative;\n  padding: clamp(7px, 2.5vw, 15px) clamp(10px, 2.5vw, 20px) clamp(7px, 2.5vw, 15px) clamp(45px, 1.322rem + 6.36vw, 70px);\n  color: #1b1f2b;\n  background: #fff;\n  border: 1px solid #a6a6a6;\n  border-radius: 10px;\n  box-shadow: rgba(255, 255, 255, 0.1) 0 0 10px 3px;\n  transition: all 0.3s;\n}\n.input::placeholder {\n  font-style: italic;\n  color: #a6a6a6;\n}\n/* Colors */\n.task {\n  display: flex;\n  align-items: center;\n  gap: clamp(5px, -0.229rem + 2.31vw, 20px);\n  padding: clamp(7px, 2.5vw, 15px) clamp(10px, 2.5vw, 20px);\n  color: #1b1f2b;\n  background: #fff;\n  border-bottom: 1px solid #a6a6a6;\n  transition: all 0.2s;\n}\n.task__title {\n  flex: 1 1 auto;\n  padding: 5px;\n  word-break: break-all;\n  border-radius: 5px;\n}\n.task__inner {\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.task__btn {\n  flex: none;\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.task--finished {\n  text-decoration: line-through;\n  color: #a6a6a6;\n}\n.task:hover .task__btn {\n  opacity: 1;\n}\n\n@media (hover: none) {\n  .task__btn {\n    opacity: 1;\n  }\n}\n/* Colors */\nbody {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  color: #fff;\n  background: #1b1f2b;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  overflow: hidden;\n}\n\n.container {\n  max-width: 660px;\n  width: 100%;\n  padding: 0 clamp(10px, 3vw, 30px);\n  margin: 0 auto;\n}\n\n.todos__inner {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n}\n.todos__title {\n  padding: 10px 0;\n  text-align: center;\n}\n.todos__header {\n  position: relative;\n}\n.todos__input {\n  width: 100%;\n}\n.todos__arrow {\n  position: absolute;\n  top: 55%;\n  left: clamp(0px, -0.596rem + 2.54vw, 10px);\n  z-index: 5;\n  display: none;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.todos__tasks {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.todos__controls {\n  position: relative;\n  display: none;\n  grid-template-columns: repeat(3, 1fr);\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 10px;\n  color: #1b1f2b;\n  background: #fff;\n  border-bottom: 1px solid #a6a6a6;\n  border-radius: 10px;\n}\n.todos__controls-text {\n  font-weight: bold;\n}\n.todos__text {\n  flex: none;\n}\n.todos__filters {\n  display: flex;\n  flex: none;\n  gap: 7px;\n}\n.todos__hint {\n  text-align: center;\n}\n.todos__clear {\n  position: relative;\n  text-align: right;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 200ms ease, color 0.3s;\n}\n.todos__clear:hover {\n  color: rgba(27, 31, 43, 0.6);\n}\n\n.hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n\n@media (max-width: 425px) {\n  .todos__controls {\n    grid-template-columns: repeat(2, 1fr);\n    grid-row-gap: 5px;\n    grid-template-rows: repeat(2, 1fr);\n  }\n  .todos__filters {\n    grid-row: 2;\n    grid-column: span 2;\n    justify-content: center;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n\n\nconst todosWrapper = document.querySelector(\".todos__wrapper\");\nconst tasksWrapper = todosWrapper.querySelector(\".tasks-wrapper\");\nconst controls = todosWrapper.querySelector(\".controls\");\nconst controlsNumber = controls.querySelector(\".number\");\nconst taskTemplate = tasksWrapper.querySelector(\"#task-template\");\nconst input = todosWrapper.querySelector(\".input\");\nconst arrowButton = todosWrapper.querySelector(\".arrow-btn\");\nconst clearButton = todosWrapper.querySelector(\".clear\");\nconst todosFilter = todosWrapper.querySelector(\".todos__filters\");\nconst filterButtons = todosFilter.querySelectorAll(\".todos__btn\");\n\nconst savedTasks = JSON.parse(localStorage.getItem(\"tasks\"));\nlet filter = savedTasks.filter ?? \"all\";\nlet tasks = savedTasks.tasks ?? [];\n\nconst saveTasks = () =>\n    localStorage.setItem(\"tasks\", JSON.stringify({ filter, tasks }));\n\n// Utilities\nconst satisfyFilter = (task, filter) => {\n    switch (filter) {\n        case \"all\":\n            return true;\n        case \"active\":\n            return task.isActive;\n        case \"completed\":\n            return !task.isActive;\n        default:\n            return true;\n    }\n};\n\nconst getFilteredTasks = (filter) => {\n    if (filter === \"active\") {\n        return tasks.filter((task) => task.isActive);\n    } else if (filter === \"completed\") {\n        return tasks.filter((task) => !task.isActive);\n    }\n    return tasks;\n};\n\nconst makeOutline = (taskElem, elem) => {\n    taskElem.classList.add(\"task--active\");\n\n    const handleOutsideClick = (event) => {\n        if (!elem.contains(event.target)) {\n            taskElem.classList.remove(\"task--active\");\n            window.removeEventListener(\"click\", handleOutsideClick);\n        }\n    };\n\n    window.addEventListener(\"click\", handleOutsideClick);\n};\n\nconst makeSelection = (elem) => {\n    elem.setAttribute(\"contenteditable\", \"true\");\n    elem.setAttribute(\"spellcheck\", \"true\");\n    elem.classList.add(\"task__title--active\");\n    elem.focus();\n};\n\nconst clearSelection = (elem) => {\n    elem.setAttribute(\"contenteditable\", \"false\");\n    elem.setAttribute(\"spellcheck\", \"false\");\n    elem.classList.remove(\"task__title--active\");\n};\n\nconst clearActiveButton = () => {\n    filterButtons.forEach((btn) => btn.classList.remove(\"button--active\"));\n};\n\nconst updateTaskClasses = (taskElem, isActive) => {\n    const closestTask = taskElem.closest(\".task\");\n    closestTask.classList.toggle(\"task--finished\", !isActive);\n};\n\n// Dom utils\nconst updateTasksCount = () => {\n    const activeTasksCount = tasks.filter((task) => task.isActive).length;\n    controlsNumber.textContent = String(activeTasksCount);\n    controls.style.display = tasks.length === 0 ? \"none\" : \"grid\";\n    arrowButton.style.display = tasks.length === 0 ? \"none\" : \"block\";\n    clearButton.classList.toggle(\"hidden\", activeTasksCount === tasks.length);\n};\n\nconst updateTaskElement = (elem, taskId) => {\n    const taskData = tasks.find((task) => task.id === taskId);\n    taskData.isActive = !taskData.isActive;\n\n    if (satisfyFilter(taskData, filter)) {\n        elem.className = \"task\";\n        updateTaskClasses(elem, taskData.isActive);\n    } else {\n        elem?.remove();\n    }\n\n    updateTasksCount();\n    saveTasks();\n};\n\nconst handleTaskDelete = (elem, taskId) => {\n    tasks = tasks.filter((task) => task.id !== taskId);\n    elem?.remove();\n    updateTasksCount();\n    saveTasks();\n};\n\nconst saveTaskTitle = (elem, task) => {\n    const title = elem.textContent.trim();\n    clearSelection(elem);\n\n    if (title.length === 0) {\n        elem.textContent = task.title;\n    } else {\n        elem.textContent = title;\n        task.title = title;\n        updateTaskClasses(elem, task.isActive);\n    }\n\n    saveTasks();\n};\n\nconst handleTitleChange = (elem, taskId) => {\n    const taskData = tasks.find((task) => task.id === taskId);\n\n    makeSelection(elem);\n    updateTaskClasses(elem, true);\n\n    const saveTaskTitleOnFocusout = () => saveTaskTitle(elem, taskData);\n    const handleKeydownOnTaskTitle = (event) => {\n        if (event.key === \"Enter\") {\n            saveTaskTitle(elem, taskData);\n        } else if (event.key === \"Escape\") {\n            elem.textContent = taskData.title;\n            clearSelection(elem);\n        }\n    };\n\n    elem.addEventListener(\"focusout\", saveTaskTitleOnFocusout);\n    elem.addEventListener(\"keydown\", handleKeydownOnTaskTitle);\n};\n\nconst renderTask = (task) => {\n    const template = taskTemplate.content.cloneNode(true);\n    const taskElem = template.querySelector(\".task\");\n    const taskCheckbox = taskElem.querySelector(\".task__checkbox\");\n    const taskBtn = taskElem.querySelector(\".task__btn\");\n    const taskTitle = taskElem.querySelector(\".task__title\");\n\n    taskCheckbox.checked = !task.isActive;\n    taskTitle.textContent = task.title;\n    taskElem.dataset.id = task.id;\n    taskElem.classList.toggle(\"task--finished\", !task.isActive);\n\n    const handleTaskBtnClick = () => handleTaskDelete(taskElem, task.id);\n    const handleTaskTitleClick = () => handleTitleChange(taskTitle, task.id);\n    const handleTaskCheckboxChange = (event) => {\n        updateTaskElement(taskElem, task.id);\n        makeOutline(taskElem, event.target);\n    };\n\n    taskBtn.addEventListener(\"click\", handleTaskBtnClick);\n    taskTitle.addEventListener(\"dblclick\", handleTaskTitleClick);\n    taskTitle.addEventListener(\"touchstart\", handleTaskTitleClick);\n    taskCheckbox.addEventListener(\"change\", handleTaskCheckboxChange);\n\n    tasksWrapper.appendChild(taskElem);\n};\n\nconst render = (filter) => {\n    tasksWrapper.innerHTML = \"\";\n    const filteredTasks = getFilteredTasks(filter);\n    filteredTasks.forEach((task) => renderTask(task));\n    updateTasksCount();\n    saveTasks();\n};\n\nconst addTask = () => {\n    const inputValue = input.value.trim();\n    if (inputValue) {\n        const task = {\n            id: Date.now(),\n            title: inputValue,\n            isActive: true,\n        };\n        tasks.push(task);\n        input.value = \"\";\n        if (satisfyFilter(task, filter)) renderTask(task);\n        saveTasks();\n        updateTasksCount();\n    }\n};\n\n// Event listener functions\nconst handleClickOutsideTaskInput = (event) => {\n    if (!todosWrapper.contains(event.target)) addTask();\n};\n\nconst addTaskOnEnter = (event) => {\n    if (event.key === \"Enter\") addTask();\n};\n\nconst handleFilterSelection = (event) => {\n    const currentBtn = event.target;\n    const filterValue = currentBtn.dataset.filter;\n    clearActiveButton();\n    currentBtn.classList.add(\"button--active\");\n    render(filterValue);\n    updateTasksCount();\n    filter = filterValue;\n    saveTasks();\n};\n\nconst handleClearFinished = () => {\n    tasks = tasks.filter((task) => task.isActive);\n    render(filter);\n};\n\nconst handleToggleAll = () => {\n    const isAllActive = tasks.some((task) => task.isActive);\n    tasks.forEach((task) => (task.isActive = !isAllActive));\n    render(filter);\n    updateTasksCount();\n};\n\narrowButton.addEventListener(\"click\", handleToggleAll);\nclearButton.addEventListener(\"click\", handleClearFinished);\nwindow.addEventListener(\"click\", handleClickOutsideTaskInput);\ninput.addEventListener(\"keydown\", addTaskOnEnter);\n\nfilterButtons.forEach((btn) =>\n    btn.addEventListener(\"click\", handleFilterSelection),\n);\n\nif (tasks.length !== 0) {\n    clearActiveButton();\n    todosFilter\n        .querySelector(`[data-filter=\"${filter}\"]`)\n        .classList.add(\"button--active\");\n    render(filter);\n    updateTasksCount();\n}\n\n\n//# sourceURL=webpack://todo/./src/js/main.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;