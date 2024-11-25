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

/***/ "./src/app/App.tsx":
/*!*************************!*\
  !*** ./src/app/App.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_assets_style_prefix_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/assets/style/prefix.less */ \"./src/common/assets/style/prefix.less\");\n/* harmony import */ var _node_modules_antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var _pages_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/root */ \"./src/app/pages/root.tsx\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar __defProp = Object.defineProperty;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\n\n\n\n\nfunction App(props) {\n  console.log(`App \\u2606\\u2606\\u2606`, props);\n  const __app_id__ = Math.random();\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", { \"data-tagitem\": \"React-App-Section\", style: { width: \"100vw\", height: \"100vh\" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_root__WEBPACK_IMPORTED_MODULE_3__[\"default\"], __spreadValues({ __AppProps__: { __app_id__ } }, props)));\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/App.tsx?");

/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvasIframeLoadURL\": () => (/* binding */ canvasIframeLoadURL)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nconst canvasIframeLoadURL = \"/canvas\";\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/config/config.ts?");

/***/ }),

/***/ "./src/app/config/drawAction.ts":
/*!**************************************!*\
  !*** ./src/app/config/drawAction.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_BLANK_DRALAYER_ID\": () => (/* binding */ DEFAULT_BLANK_DRALAYER_ID),\n/* harmony export */   \"EDrwaAction\": () => (/* binding */ EDrwaAction)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar EDrwaAction = /* @__PURE__ */ ((EDrwaAction2) => {\n  EDrwaAction2[\"DRAW_LINE\"] = \"DRAW_LINE\";\n  EDrwaAction2[\"DRWA_CIRCLE\"] = \"DRWA_CIRCLE\";\n  EDrwaAction2[\"SET_SELECTION\"] = \"SET_SELECTION\";\n  EDrwaAction2[\"DO_COPY\"] = \"DO_COPY\";\n  EDrwaAction2[\"DO_DELETE\"] = \"DO_DELETE\";\n  EDrwaAction2[\"DO_UNDO\"] = \"DO_UNDO\";\n  EDrwaAction2[\"DO_REDO\"] = \"DO_REDO\";\n  EDrwaAction2[\"EXPORT\"] = \"EXPORT\";\n  EDrwaAction2[\"IMPORT\"] = \"IMPORT\";\n  EDrwaAction2[\"RESET_CANVAS\"] = \"RESET_CANVAS\";\n  EDrwaAction2[\"CLEAR_DRAWLAYER_ELEMENTS\"] = \"CLEAR_DRAWLAYER_ELEMENTS\";\n  EDrwaAction2[\"CLEAR_CANVAS_ELEMENTS\"] = \"CLEAR_CANVAS_ELEMENTS\";\n  EDrwaAction2[\"CREATE_DRAWLAYER_ITEM\"] = \"CREATE_DRAWLAYER_ITEM\";\n  EDrwaAction2[\"DELETE_DRAWLAYER_ITEM\"] = \"DELETE_DRAWLAYER_ITEM\";\n  EDrwaAction2[\"SWITCH_ACTIVE_DRAWLAYER_ITEM\"] = \"SWITCH_ACTIVE_DRAWLAYER_ITEM\";\n  return EDrwaAction2;\n})(EDrwaAction || {});\nconst DEFAULT_BLANK_DRALAYER_ID = \"$0\";\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/config/drawAction.ts?");

/***/ }),

/***/ "./src/app/i18n/I18nProvider.tsx":
/*!***************************************!*\
  !*** ./src/app/i18n/I18nProvider.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* unused harmony export i18Next */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-xhr-backend */ \"./node_modules/i18next-xhr-backend/dist/esm/i18nextXHRBackend.js\");\n/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-browser-languagedetector */ \"./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/I18nextProvider.js\");\n/* harmony import */ var _locales_zh_cn_translation_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales/zh_cn/translation.json */ \"./src/app/i18n/locales/zh_cn/translation.json\");\n/* harmony import */ var _locales_en_us_translation_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales/en_us/translation.json */ \"./src/app/i18n/locales/en_us/translation.json\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\n\n\n\n\n\nconst DEFAULT_NAMESPACE = \"DEFAULT_NAMESPACE\";\nconst i18n = i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).init({\n  backend: {\n    loadPath: \"/locales/{{lng}}/{{ns}}.json\"\n  },\n  debug: false,\n  lng: \"en_us\",\n  fallbackLng: \"en_us\",\n  defaultNS: DEFAULT_NAMESPACE,\n  ns: [DEFAULT_NAMESPACE],\n  partialBundledLanguages: true,\n  resources: {\n    zh_cn: { [DEFAULT_NAMESPACE]: _locales_zh_cn_translation_json__WEBPACK_IMPORTED_MODULE_4__ },\n    en_us: { [DEFAULT_NAMESPACE]: _locales_en_us_translation_json__WEBPACK_IMPORTED_MODULE_5__ }\n  },\n  parseMissingKeyHandler(missing) {\n    return missing;\n  }\n});\ni18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].languages = [\"zh_cn\", \"en_us\"];\nconst i18Next = i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nfunction I18nProvider(props) {\n  const languageSetting = \"en_us\";\n  const [isInitial, setIsInitial] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  console.log(`I18nProvider \\u{1F319}\\u{1F319}\\u{1F319}`, props, languageSetting);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeLanguage(languageSetting);\n  }, [languageSetting]);\n  if (isInitial) {\n    setIsInitial(false);\n    i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeLanguage(languageSetting);\n  }\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_i18next__WEBPACK_IMPORTED_MODULE_6__.I18nextProvider, { i18n: i18next__WEBPACK_IMPORTED_MODULE_1__[\"default\"] }, props.children);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(I18nProvider));\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/i18n/I18nProvider.tsx?");

/***/ }),

/***/ "./src/app/index.tsx":
/*!***************************!*\
  !*** ./src/app/index.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* unused harmony export renderReactApp */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _i18n_I18nProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/I18nProvider */ \"./src/app/i18n/I18nProvider.tsx\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/app/App.tsx\");\n/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/event */ \"./src/app/utils/event.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\n\n\n\nfunction renderReactApp() {\n  const __render_id__ = Math.random();\n  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById(\"app\")).render(\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_i18n_I18nProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { __RenderProps__: { __render_id__ } }))\n  );\n}\n(0,_utils_event__WEBPACK_IMPORTED_MODULE_4__.messageHandle)();\nrenderReactApp();\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/index.tsx?");

/***/ }),

/***/ "./src/app/modules/drawActionPanel/drawElementsPanel.tsx":
/*!***************************************************************!*\
  !*** ./src/app/modules/drawActionPanel/drawElementsPanel.tsx ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DrawElementsPanel\": () => (/* binding */ DrawElementsPanel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ \"./src/app/modules/drawActionPanel/index.module.less\");\n/* harmony import */ var _config_drawAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/drawAction */ \"./src/app/config/drawAction.ts\");\n/* harmony import */ var _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/globalDefault/store */ \"./src/app/store/globalDefault/store.ts\");\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! valtio */ \"./node_modules/valtio/esm/index.mjs\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\n\n\n\nfunction DrawElementsPanel(props) {\n  const valtioStoreSnap = (0,valtio__WEBPACK_IMPORTED_MODULE_4__.useSnapshot)(_store_globalDefault_store__WEBPACK_IMPORTED_MODULE_3__.valtioStore);\n  const clickAction = (e) => {\n    const targetElement = e.currentTarget;\n    _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_3__.valtioAction.dispatchCanvasAction(targetElement.getAttribute(\"data-cmd\"), \"\");\n  };\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-container\"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-label\"] }, \"\\u7ED8\\u5236\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"|\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-wrapper\"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DRAW_LINE) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DRAW_LINE,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u7EBF\\u6BB5\")\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DRWA_CIRCLE) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DRWA_CIRCLE,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u6B63\\u5706\")\n  )));\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/modules/drawActionPanel/drawElementsPanel.tsx?");

/***/ }),

/***/ "./src/app/modules/drawActionPanel/editOptionsPanel.tsx":
/*!**************************************************************!*\
  !*** ./src/app/modules/drawActionPanel/editOptionsPanel.tsx ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EditOptionsPanel\": () => (/* binding */ EditOptionsPanel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ \"./src/app/modules/drawActionPanel/index.module.less\");\n/* harmony import */ var _config_drawAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/drawAction */ \"./src/app/config/drawAction.ts\");\n/* harmony import */ var _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/globalDefault/store */ \"./src/app/store/globalDefault/store.ts\");\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! valtio */ \"./node_modules/valtio/esm/index.mjs\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\n\n\n\nfunction EditOptionsPanel(props) {\n  const valtioStoreSnap = (0,valtio__WEBPACK_IMPORTED_MODULE_4__.useSnapshot)(_store_globalDefault_store__WEBPACK_IMPORTED_MODULE_3__.valtioStore);\n  const clickAction = (e) => {\n    const targetElement = e.currentTarget;\n    _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_3__.valtioAction.dispatchCanvasAction(targetElement.getAttribute(\"data-cmd\"), \"\");\n  };\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-container\"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-label\"] }, \"\\u64CD\\u4F5C\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"|\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-wrapper\"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.SET_SELECTION) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.SET_SELECTION,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u9009\\u62E9\")\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DO_COPY) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DO_COPY,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u590D\\u5236\")\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DO_UNDO) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DO_UNDO,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u64A4\\u9500\")\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DO_REDO) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DO_REDO,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u91CD\\u505A\")\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DO_DELETE) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DO_DELETE,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u5220\\u9664(\\u9009\\u4E2D)\")\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.IMPORT) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.IMPORT,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u5BFC\\u5165\")\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.EXPORT) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.EXPORT,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u5BFC\\u51FA\")\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.CLEAR_DRAWLAYER_ELEMENTS) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.CLEAR_DRAWLAYER_ELEMENTS,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u6E05\\u7A7A\\u5F53\\u524D\\u5C42\\u6240\\u6709\\u56FE\\u5143\")\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.CLEAR_CANVAS_ELEMENTS) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.CLEAR_CANVAS_ELEMENTS,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u6E05\\u7A7A\\u753B\\u5E03\\u6240\\u6709\\u56FE\\u5143\")\n  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"li\",\n    {\n      className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] + \" \" + (valtioStoreSnap.disabledCMDItems.includes(_config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.RESET_CANVAS) ? _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item-disabled\"] : \"\"),\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.RESET_CANVAS,\n      onClick: clickAction\n    },\n    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u91CD\\u7F6E\\u753B\\u5E03\\u5185\\u5BB9\")\n  )));\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/modules/drawActionPanel/editOptionsPanel.tsx?");

/***/ }),

/***/ "./src/app/modules/drawActionPanel/index.tsx":
/*!***************************************************!*\
  !*** ./src/app/modules/drawActionPanel/index.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DrawActionPanel\": () => (/* binding */ DrawActionPanel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _drawElementsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawElementsPanel */ \"./src/app/modules/drawActionPanel/drawElementsPanel.tsx\");\n/* harmony import */ var _editOptionsPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editOptionsPanel */ \"./src/app/modules/drawActionPanel/editOptionsPanel.tsx\");\n/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.less */ \"./src/app/modules/drawActionPanel/index.module.less\");\n/* harmony import */ var _layerOptionsPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layerOptionsPanel */ \"./src/app/modules/drawActionPanel/layerOptionsPanel.tsx\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\n\n\n\nfunction DrawActionPanel(props) {\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_3__[\"default\"].container, style: { display: \"none\" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layerOptionsPanel__WEBPACK_IMPORTED_MODULE_4__.LayerOptionsPanel, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_editOptionsPanel__WEBPACK_IMPORTED_MODULE_2__.EditOptionsPanel, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_drawElementsPanel__WEBPACK_IMPORTED_MODULE_1__.DrawElementsPanel, null));\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/modules/drawActionPanel/index.tsx?");

/***/ }),

/***/ "./src/app/modules/drawActionPanel/layerOptionsPanel.tsx":
/*!***************************************************************!*\
  !*** ./src/app/modules/drawActionPanel/layerOptionsPanel.tsx ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LayerOptionsPanel\": () => (/* binding */ LayerOptionsPanel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.less */ \"./src/app/modules/drawActionPanel/index.module.less\");\n/* harmony import */ var _config_drawAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/drawAction */ \"./src/app/config/drawAction.ts\");\n/* harmony import */ var _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/globalDefault/store */ \"./src/app/store/globalDefault/store.ts\");\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! valtio */ \"./node_modules/valtio/esm/index.mjs\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\n\n\n\nfunction LayerOptionsPanel(props) {\n  const valtioStoreSnap = (0,valtio__WEBPACK_IMPORTED_MODULE_4__.useSnapshot)(_store_globalDefault_store__WEBPACK_IMPORTED_MODULE_3__.valtioStore);\n  const clickAction = (e) => {\n    const targetElement = e.currentTarget;\n    _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_3__.valtioAction.dispatchCanvasAction(targetElement.getAttribute(\"data-cmd\"), \"\");\n  };\n  const selectChangeAction = (e) => {\n    const targetElement = e.currentTarget;\n    _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_3__.valtioAction.dispatchCanvasAction(targetElement.getAttribute(\"data-cmd\"), targetElement.value);\n  };\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-container\"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-label\"] }, \"\\u56FE\\u5C42\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"|\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-wrapper\"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"], \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.CREATE_DRAWLAYER_ITEM, onClick: clickAction }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u65B0\\u5EFA\")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\n    \"select\",\n    {\n      name: \"draw-layers\",\n      id: \"drawLayers\",\n      value: valtioStoreSnap.selectedDrawLayerItemId,\n      onChange: selectChangeAction,\n      \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.SWITCH_ACTIVE_DRAWLAYER_ITEM,\n      style: { width: `135px` }\n    },\n    valtioStoreSnap.allDrawLayers.map((item, index) => {\n      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", { key: index, value: item.layerItemId }, item.layerItemName);\n    })\n  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", { className: _index_module_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"panel-list-item\"], \"data-cmd\": _config_drawAction__WEBPACK_IMPORTED_MODULE_2__.EDrwaAction.DELETE_DRAWLAYER_ITEM, onClick: clickAction }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u5220\\u9664\\u8BE5\\u56FE\\u5C42\"))));\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/modules/drawActionPanel/layerOptionsPanel.tsx?");

/***/ }),

/***/ "./src/app/modules/iframeView/index.tsx":
/*!**********************************************!*\
  !*** ./src/app/modules/iframeView/index.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IframeView\": () => (/* binding */ IframeView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./src/app/config/config.ts\");\n/* harmony import */ var _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/globalDefault/store */ \"./src/app/store/globalDefault/store.ts\");\n/* harmony import */ var _utils_iframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/iframe */ \"./src/app/utils/iframe.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\n\n\nconst iframeElementCommonStyle = {\n  position: \"absolute\",\n  left: 0,\n  top: 0,\n  width: \"100vw\",\n  height: \"100vh\",\n  display: \"flex\",\n  justifyContent: \"center\",\n  alignContent: \"center\",\n  alignItems: \"center\",\n  transition: \"all 0.5s ease-out\",\n  opacity: \"1\"\n};\nfunction IframeView(props) {\n  const iframeWrapperElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    (0,_utils_iframe__WEBPACK_IMPORTED_MODULE_3__.initIframeElement)(iframeWrapperElementRef.current, _config_config__WEBPACK_IMPORTED_MODULE_1__.canvasIframeLoadURL).then((result) => {\n      window.setTimeout(() => {\n        _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_2__.valtioAction.setIframeLoadedStatus(true);\n        _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_2__.valtioAction.setIframeElementId(result.id);\n      });\n    });\n  }, []);\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", { ref: iframeWrapperElementRef, style: iframeElementCommonStyle }));\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/modules/iframeView/index.tsx?");

/***/ }),

/***/ "./src/app/modules/loadingMask/index.tsx":
/*!***********************************************!*\
  !*** ./src/app/modules/loadingMask/index.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadingMask\": () => (/* binding */ LoadingMask)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! valtio */ \"./node_modules/valtio/esm/index.mjs\");\n/* harmony import */ var _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/globalDefault/store */ \"./src/app/store/globalDefault/store.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar __defProp = Object.defineProperty;\nvar __defProps = Object.defineProperties;\nvar __getOwnPropDescs = Object.getOwnPropertyDescriptors;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\nvar __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));\n\n\n\nconst maskElementCommonStyle = {\n  position: \"absolute\",\n  left: 0,\n  top: 0,\n  width: \"100vw\",\n  height: \"100vh\",\n  display: \"flex\",\n  justifyContent: \"center\",\n  alignContent: \"center\",\n  alignItems: \"center\",\n  zIndex: 99999,\n  transition: \"all 0.5s ease-out\",\n  backgroundColor: \"#ffffff\",\n  opacity: 1\n};\nconst maskElementShowStyle = __spreadProps(__spreadValues({}, maskElementCommonStyle), {\n  opacity: 1\n});\nconst maskElementHiddenStyle = __spreadProps(__spreadValues({}, maskElementCommonStyle), {\n  opacity: 0\n});\nfunction LoadingMask(props) {\n  const valtioStoreSnap = (0,valtio__WEBPACK_IMPORTED_MODULE_2__.useSnapshot)(_store_globalDefault_store__WEBPACK_IMPORTED_MODULE_1__.valtioStore);\n  const [isLoadMaskElement, setIsLoadMaskElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const maskElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const hasBindMaskElementEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  const transitionendCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {\n    if (maskElementRef.current) {\n      maskElementRef.current.removeEventListener(\"transitionend\", transitionendCallback);\n    }\n    setIsLoadMaskElement(false);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (maskElementRef.current && !hasBindMaskElementEvent.current) {\n      hasBindMaskElementEvent.current = true;\n      maskElementRef.current.addEventListener(\"transitionend\", transitionendCallback);\n    }\n  }, [maskElementRef.current]);\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isLoadMaskElement ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", { ref: maskElementRef, style: !valtioStoreSnap.iframeStatusLoaded ? maskElementShowStyle : maskElementHiddenStyle }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Iframe Canvas loading...\")) : null);\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/modules/loadingMask/index.tsx?");

/***/ }),

/***/ "./src/app/modules/viewRoot.tsx":
/*!**************************************!*\
  !*** ./src/app/modules/viewRoot.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ViewRoot\": () => (/* binding */ ViewRoot)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _drawActionPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawActionPanel */ \"./src/app/modules/drawActionPanel/index.tsx\");\n/* harmony import */ var _iframeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframeView */ \"./src/app/modules/iframeView/index.tsx\");\n/* harmony import */ var _loadingMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadingMask */ \"./src/app/modules/loadingMask/index.tsx\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\n\n\nfunction ViewRoot(props) {\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", { style: { position: \"relative\" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_loadingMask__WEBPACK_IMPORTED_MODULE_3__.LoadingMask, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iframeView__WEBPACK_IMPORTED_MODULE_2__.IframeView, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_drawActionPanel__WEBPACK_IMPORTED_MODULE_1__.DrawActionPanel, null));\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/modules/viewRoot.tsx?");

/***/ }),

/***/ "./src/app/pages/root.tsx":
/*!********************************!*\
  !*** ./src/app/pages/root.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_viewRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/viewRoot */ \"./src/app/modules/viewRoot.tsx\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\nfunction Root(props) {\n  console.log(`Root \\u2606\\u2606\\u2606`, props);\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_viewRoot__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(Root));\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/pages/root.tsx?");

/***/ }),

/***/ "./src/app/store/globalDefault/store.ts":
/*!**********************************************!*\
  !*** ./src/app/store/globalDefault/store.ts ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"valtioAction\": () => (/* binding */ valtioAction),\n/* harmony export */   \"valtioStore\": () => (/* binding */ valtioStore)\n/* harmony export */ });\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! valtio */ \"./node_modules/valtio/esm/vanilla.mjs\");\n/* harmony import */ var _config_drawAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/drawAction */ \"./src/app/config/drawAction.ts\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/MessageTool */ \"./src/app/utils/MessageTool.ts\");\n/* harmony import */ var _app_utils_openFileSysDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/openFileSysDialog */ \"./src/app/utils/openFileSysDialog.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\n\n\n\n\nconst valtioStore = (0,valtio__WEBPACK_IMPORTED_MODULE_3__.proxy)({\n  iframeStatusLoaded: false,\n  iframeElementId: \"\",\n  allDrawLayers: [],\n  selectedDrawLayerItemId: \"\",\n  disabledCMDItems: [_config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.DO_UNDO, _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.DO_REDO]\n});\nconst valtioAction = {\n  setIframeLoadedStatus(value) {\n    valtioStore.iframeStatusLoaded = value;\n  },\n  setIframeElementId(value) {\n    valtioStore.iframeElementId = value;\n  },\n  setAllDrawLayers(value) {\n    const allDrawLayers = [\n      {\n        layerItemName: \"\",\n        layerItemId: _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_BLANK_DRALAYER_ID,\n        layerItemStatus: 0,\n        layerItemType: 0,\n        layerItemOpacity: 0\n      },\n      ...value\n    ];\n    if (value.length <= 0) {\n      valtioAction.setSelectedDrawLayerItemId(\"-\");\n    }\n    valtioStore.allDrawLayers = allDrawLayers;\n  },\n  setDisabledCMDItems(value) {\n    valtioStore.disabledCMDItems = value;\n  },\n  setSelectedDrawLayerItemId(value) {\n    valtioStore.selectedDrawLayerItemId = value;\n  },\n  dispatchCanvasAction(cmd, value) {\n    return __async(this, null, function* () {\n      const iframeElement = document.getElementById(valtioStore.iframeElementId);\n      if (!iframeElement) {\n        return;\n      }\n      const iframeContentWindow = iframeElement.contentWindow;\n      switch (cmd) {\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.DRAW_LINE: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u5207\\u6362\\u7ED8\\u5236\\u56FE\\u5F62: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleDrawMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.DRWA_CIRCLE: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u5207\\u6362\\u7ED8\\u5236\\u56FE\\u5F62: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleDrawMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.SET_SELECTION: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u5207\\u6362\\u884C\\u4E3A: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleActionMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.CLEAR_DRAWLAYER_ELEMENTS: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u6267\\u884C\\u64CD\\u4F5C: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(\n            `toggleActionMode`,\n            { cmd, targetItemId: valtioStore.selectedDrawLayerItemId },\n            iframeContentWindow\n          );\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.CLEAR_CANVAS_ELEMENTS: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u6267\\u884C\\u64CD\\u4F5C: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleActionMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.DO_COPY: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].warn(`\\u6682\\u672A\\u652F\\u6301\\u6B64\\u64CD\\u4F5C: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleActionMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.DO_DELETE: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u6267\\u884C\\u64CD\\u4F5C: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleActionMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.DO_UNDO: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u6267\\u884C\\u64CD\\u4F5C: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleActionMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.DO_REDO: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u6267\\u884C\\u64CD\\u4F5C: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleActionMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.IMPORT: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u6267\\u884C\\u64CD\\u4F5C: ${cmd}`);\n          (0,_app_utils_openFileSysDialog__WEBPACK_IMPORTED_MODULE_2__.openFileSysDialog)((e) => {\n            const inputElement = e.target;\n            window.setTimeout(() => {\n              (0,_app_utils_openFileSysDialog__WEBPACK_IMPORTED_MODULE_2__.removeInputFileElement)(inputElement);\n            });\n            const fileItem = inputElement.files ? inputElement.files[0] : null;\n            if (!fileItem) {\n              return;\n            }\n            antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u6B63\\u5728\\u8BFB\\u53D6\\u6E90\\u7801\\u6587\\u4EF6: ${cmd}`);\n            const reader = new FileReader();\n            reader.readAsText(fileItem, \"UTF-8\");\n            reader.onload = function(e2) {\n              antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u6B63\\u5728\\u89E3\\u6790\\u6E90\\u7801\\u6587\\u4EF6: ${cmd}`);\n              const content = e2.target ? e2.target.result : null;\n              _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleActionMode`, { cmd, content }, iframeContentWindow);\n            };\n          });\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.EXPORT: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u6B63\\u5728\\u5BFC\\u51FA\\u6E90\\u7801\\u6587\\u672C\\u6587\\u4EF6: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleActionMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.CREATE_DRAWLAYER_ITEM: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u521B\\u5EFA\\u65B0\\u7ED8\\u5236\\u56FE\\u5C42: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleDrawLayerMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.DELETE_DRAWLAYER_ITEM: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u5220\\u9664\\u7ED8\\u5236\\u56FE\\u5C42: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(\n            `toggleDrawLayerMode`,\n            { cmd, targetItemId: valtioStore.selectedDrawLayerItemId },\n            iframeContentWindow\n          );\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.SWITCH_ACTIVE_DRAWLAYER_ITEM: {\n          if (value === _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_BLANK_DRALAYER_ID) {\n            antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u6E05\\u7A7A\\u56FE\\u5C42\\u9009\\u4E2D: ${cmd}`);\n          } else {\n            antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u5207\\u6362\\u9009\\u4E2D\\u7ED8\\u5236\\u56FE\\u5C42: ${cmd}`);\n          }\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleDrawLayerMode`, { cmd, targetItemId: value }, iframeContentWindow);\n          break;\n        }\n        case _config_drawAction__WEBPACK_IMPORTED_MODULE_0__.EDrwaAction.RESET_CANVAS: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u91CD\\u7F6E\\u753B\\u5E03\\u5185\\u5BB9: ${cmd}`);\n          _utils_MessageTool__WEBPACK_IMPORTED_MODULE_1__.messageTool.windowMessageBridge.publish(`toggleActionMode`, { cmd }, iframeContentWindow);\n          break;\n        }\n        default: {\n          antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info(`\\u672A\\u77E5\\u7684\\u64CD\\u4F5C: ${cmd}`);\n        }\n      }\n    });\n  }\n};\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/store/globalDefault/store.ts?");

/***/ }),

/***/ "./src/app/utils/MessageTool.ts":
/*!**************************************!*\
  !*** ./src/app/utils/MessageTool.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"messageTool\": () => (/* binding */ messageTool)\n/* harmony export */ });\n/* harmony import */ var _utils_section_messageBus_MessageBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils-section/messageBus/MessageBus */ \"../utils-section/messageBus/MessageBus.ts\");\n/* harmony import */ var _utils_section_messageBus_WindowMessageBridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils-section/messageBus/WindowMessageBridge */ \"../utils-section/messageBus/WindowMessageBridge.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\nclass MessageTool {\n  constructor() {\n    this._messageBus = new _utils_section_messageBus_MessageBus__WEBPACK_IMPORTED_MODULE_0__.MessageBus();\n    this._windowMessageBridge = new _utils_section_messageBus_WindowMessageBridge__WEBPACK_IMPORTED_MODULE_1__.WindowMessageBridge(this._messageBus);\n  }\n  get messageBus() {\n    return this._messageBus;\n  }\n  get windowMessageBridge() {\n    return this._windowMessageBridge;\n  }\n}\nconst messageTool = new MessageTool();\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/utils/MessageTool.ts?");

/***/ }),

/***/ "./src/app/utils/downloadFile.ts":
/*!***************************************!*\
  !*** ./src/app/utils/downloadFile.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"downloadTxtFile\": () => (/* binding */ downloadTxtFile)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nfunction downloadTxtFile(filename, content) {\n  var element = document.createElement(\"a\");\n  element.setAttribute(\"href\", \"data:text/plain;charset=utf-8,\" + encodeURIComponent(content));\n  element.setAttribute(\"download\", filename);\n  element.style.display = \"none\";\n  document.body.appendChild(element);\n  element.click();\n  document.body.removeChild(element);\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/utils/downloadFile.ts?");

/***/ }),

/***/ "./src/app/utils/event.ts":
/*!********************************!*\
  !*** ./src/app/utils/event.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"messageHandle\": () => (/* binding */ messageHandle)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/globalDefault/store */ \"./src/app/store/globalDefault/store.ts\");\n/* harmony import */ var _downloadFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downloadFile */ \"./src/app/utils/downloadFile.ts\");\n/* harmony import */ var _MessageTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageTool */ \"./src/app/utils/MessageTool.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\n\n\n\nfunction messageHandle() {\n  _MessageTool__WEBPACK_IMPORTED_MODULE_2__.messageTool.messageBus.registeAsyncService(`CANVAS_READY`, (params) => __async(this, null, function* () {\n    const { ready } = params;\n    if (ready) {\n      antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(`\\u753B\\u5E03\\u521D\\u59CB\\u5316\\u5B8C\\u6BD5`);\n    }\n  }));\n  _MessageTool__WEBPACK_IMPORTED_MODULE_2__.messageTool.messageBus.registeAsyncService(\n    `updateDrawLayerListOptions`,\n    (params) => __async(this, null, function* () {\n      const { allDrawLayers, selectedDrawLayerItemId } = params;\n      _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_0__.valtioAction.setAllDrawLayers(allDrawLayers);\n      _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_0__.valtioAction.setSelectedDrawLayerItemId(selectedDrawLayerItemId);\n    })\n  );\n  _MessageTool__WEBPACK_IMPORTED_MODULE_2__.messageTool.messageBus.registeAsyncService(`createCanvasFileData`, (params) => __async(this, null, function* () {\n    const { canvasFileData } = params;\n    (0,_downloadFile__WEBPACK_IMPORTED_MODULE_1__.downloadTxtFile)(`canvas.txt`, canvasFileData.dataStr);\n  }));\n  _MessageTool__WEBPACK_IMPORTED_MODULE_2__.messageTool.messageBus.registeAsyncService(\n    `updateOperationPlaneItemStatus`,\n    (params) => __async(this, null, function* () {\n      const { disabledItems } = params;\n      _store_globalDefault_store__WEBPACK_IMPORTED_MODULE_0__.valtioAction.setDisabledCMDItems([...disabledItems]);\n    })\n  );\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/utils/event.ts?");

/***/ }),

/***/ "./src/app/utils/hashIden.ts":
/*!***********************************!*\
  !*** ./src/app/utils/hashIden.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHashIden\": () => (/* binding */ getHashIden)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/app/utils/utils.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\nfunction getHashIden(length = 10) {\n  const s = [];\n  const HEX_DIGITS = \"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n  for (let i = 0; i < length; i++) {\n    s[i] = HEX_DIGITS.substr(Math.floor(Math.random() * 16), 1);\n  }\n  s[14] = String((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInArea)(1, 9));\n  s[19] = HEX_DIGITS.substr(+s[19] & 3 | 8, 1);\n  s[8] = String((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInArea)(1, 9));\n  s[13] = String((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInArea)(1, 9));\n  s[18] = String((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInArea)(1, 9));\n  s[23] = String((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInArea)(1, 9));\n  return s.join(\"\");\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/utils/hashIden.ts?");

/***/ }),

/***/ "./src/app/utils/iframe.ts":
/*!*********************************!*\
  !*** ./src/app/utils/iframe.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initIframeElement\": () => (/* binding */ initIframeElement)\n/* harmony export */ });\n/* harmony import */ var _hashIden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashIden */ \"./src/app/utils/hashIden.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\nfunction initIframeElement(container, loadURL) {\n  return __async(this, null, function* () {\n    return new Promise((_) => {\n      const iframeElement = document.createElement(\"iframe\");\n      const elementId = (0,_hashIden__WEBPACK_IMPORTED_MODULE_0__.getHashIden)();\n      iframeElement.src = loadURL;\n      iframeElement.style.width = \"100%\";\n      iframeElement.style.height = \"100%\";\n      iframeElement.style.border = \"0\";\n      iframeElement.onload = function() {\n        _({ element: iframeElement, id: elementId });\n      };\n      iframeElement.id = elementId;\n      container.appendChild(iframeElement);\n    });\n  });\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/utils/iframe.ts?");

/***/ }),

/***/ "./src/app/utils/openFileSysDialog.ts":
/*!********************************************!*\
  !*** ./src/app/utils/openFileSysDialog.ts ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openFileSysDialog\": () => (/* binding */ openFileSysDialog),\n/* harmony export */   \"removeInputFileElement\": () => (/* binding */ removeInputFileElement)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nfunction openFileSysDialog(callback, accept = \".txt\") {\n  const inputElement = document.createElement(\"input\");\n  inputElement.type = \"file\";\n  inputElement.accept = accept;\n  inputElement.addEventListener(\"change\", callback);\n  document.body.appendChild(inputElement);\n  inputElement.dispatchEvent(new MouseEvent(\"click\"));\n}\nfunction removeInputFileElement(inputElement) {\n  inputElement.remove();\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/utils/openFileSysDialog.ts?");

/***/ }),

/***/ "./src/app/utils/utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomInArea\": () => (/* binding */ getRandomInArea)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nfunction getRandomInArea(min = 0, max = Number.MAX_SAFE_INTEGER) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/./src/app/utils/utils.ts?");

/***/ }),

/***/ "../utils-section/messageBus/BaseMessageBridge.ts":
/*!********************************************************!*\
  !*** ../utils-section/messageBus/BaseMessageBridge.ts ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseMessageBridge\": () => (/* binding */ BaseMessageBridge)\n/* harmony export */ });\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ \"../utils-section/messageBus/Config.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\nclass BaseMessageBridge {\n  constructor(bus) {\n    this._bus = bus;\n  }\n  processRemoteMessage(messageItem, source) {\n    const { topic, type, data } = messageItem;\n    switch (type) {\n      case _Config__WEBPACK_IMPORTED_MODULE_0__.EMessageType.PULL: {\n        this._bus.pull(topic, (data2) => {\n          this.push(topic, data2, source);\n        });\n        break;\n      }\n      case _Config__WEBPACK_IMPORTED_MODULE_0__.EMessageType.SUBSCRIBE: {\n        this._bus.subscribe(topic, (data2) => {\n          this.publish(topic, data2, source);\n        });\n        break;\n      }\n      case _Config__WEBPACK_IMPORTED_MODULE_0__.EMessageType.PUBLISH: {\n        this._bus.publish(topic, data, this, source);\n        break;\n      }\n      case _Config__WEBPACK_IMPORTED_MODULE_0__.EMessageType.PUSH: {\n        this._bus.push(topic, data, this, source);\n        break;\n      }\n    }\n  }\n  asyncRequest(topic, data, target) {\n    return __async(this, null, function* () {\n      return new Promise((_) => {\n        const reply = this._bus.uniqueRpcTopic(topic);\n        this.publish(topic, { data, reply }, target);\n        this._bus.pull(reply, (data2, bridge, source) => {\n          _({ data: data2, bridge, source });\n        });\n      });\n    });\n  }\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/../utils-section/messageBus/BaseMessageBridge.ts?");

/***/ }),

/***/ "../utils-section/messageBus/Config.ts":
/*!*********************************************!*\
  !*** ../utils-section/messageBus/Config.ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EMessageType\": () => (/* binding */ EMessageType),\n/* harmony export */   \"RPC_RDM_PREFIX\": () => (/* binding */ RPC_RDM_PREFIX)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar EMessageType = /* @__PURE__ */ ((EMessageType2) => {\n  EMessageType2[\"PUBLISH\"] = \"PUBLISH\";\n  EMessageType2[\"SUBSCRIBE\"] = \"SUBSCRIBE\";\n  EMessageType2[\"PUSH\"] = \"PUSH\";\n  EMessageType2[\"PULL\"] = \"PULL\";\n  return EMessageType2;\n})(EMessageType || {});\nconst RPC_RDM_PREFIX = `__RPC_RDM_PREFIX__`;\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/../utils-section/messageBus/Config.ts?");

/***/ }),

/***/ "../utils-section/messageBus/MessageBus.ts":
/*!*************************************************!*\
  !*** ../utils-section/messageBus/MessageBus.ts ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessageBus\": () => (/* binding */ MessageBus)\n/* harmony export */ });\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ \"../utils-section/messageBus/Config.ts\");\n/* harmony import */ var _MessageBusTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageBusTask */ \"../utils-section/messageBus/MessageBusTask.ts\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ \"../utils-section/messageBus/Utils.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\n\n\nclass MessageBus {\n  constructor() {\n    this._subscribedTasks = {};\n    this._pulledTasks = {};\n    this._pushedMessages = {};\n    this._rpcTicket = 0;\n  }\n  rpcReply(data, topic, bridge, source) {\n    if (bridge) {\n      bridge.push(topic, data, source);\n      return;\n    }\n    this.push(topic, data);\n  }\n  uniqueRpcTopic(topic) {\n    return topic + _Config__WEBPACK_IMPORTED_MODULE_0__.RPC_RDM_PREFIX + ++this._rpcTicket;\n  }\n  publish(topic, data, bridge, source) {\n    const tasks = this._subscribedTasks[topic];\n    if (tasks instanceof Array) {\n      let removedTasks = [];\n      for (let i = 0; i < tasks.length; i++) {\n        const taskItem = tasks[i];\n        if (taskItem.isRunning) {\n          taskItem.execute(data, bridge, source);\n          continue;\n        }\n        removedTasks.push(taskItem);\n      }\n      if (removedTasks.length) {\n        for (let i = 0; i < removedTasks.length; i++) {\n          const taskItem = removedTasks[i];\n          this._subscribedTasks[topic] = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.remove)(this._subscribedTasks[topic], taskItem);\n        }\n      }\n    }\n  }\n  subscribe(topic, callback) {\n    const taskItem = new _MessageBusTask__WEBPACK_IMPORTED_MODULE_1__.MessageBusTask(callback);\n    (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getOrInitArr)(this._subscribedTasks, topic).push(taskItem);\n    return taskItem;\n  }\n  push(topic, data, bridge, source) {\n    let consumed = false;\n    const tasks = this._pulledTasks[topic];\n    if (tasks instanceof Array) {\n      while (tasks.length) {\n        const taskItem = tasks.shift();\n        if (taskItem && taskItem.isRunning) {\n          taskItem.execute(data, bridge, source);\n          consumed = true;\n          break;\n        }\n      }\n    }\n    if (consumed) {\n      (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getOrInitArr)(this._pushedMessages, topic).push({ data, bridge, source });\n    }\n  }\n  pull(topic, callback) {\n    const newTaskItem = new _MessageBusTask__WEBPACK_IMPORTED_MODULE_1__.MessageBusTask(callback);\n    const messageList = this._pushedMessages[topic];\n    if (messageList instanceof Array) {\n      const messageItem = messageList.shift();\n      if (messageItem) {\n        newTaskItem.execute(messageItem.data, messageItem.bridge, messageItem.source);\n        if (messageList.length <= 0) {\n          delete this._pushedMessages[topic];\n        }\n      }\n      return newTaskItem;\n    }\n    (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getOrInitArr)(this._pulledTasks, topic).push(newTaskItem);\n    return newTaskItem;\n  }\n  registeAsyncService(topic, callback) {\n    this.subscribe(topic, (rpcData, bridge, source) => {\n      const { data, reply } = rpcData;\n      const returnal = callback(data);\n      if (returnal instanceof Promise) {\n        returnal.then((result) => {\n          this.rpcReply(result, reply, bridge, source);\n        }).catch((error) => {\n          console.error(error);\n        });\n        return;\n      }\n      this.rpcReply(returnal, reply, bridge, source);\n    });\n  }\n  asyncRequest(topic, data) {\n    return __async(this, null, function* () {\n      return new Promise((_) => {\n        const reply = this.uniqueRpcTopic(topic);\n        this.publish(topic, { data, reply });\n        this.pull(reply, (data2, bridge, source) => {\n          _({ data: data2, bridge, source });\n        });\n      });\n    });\n  }\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/../utils-section/messageBus/MessageBus.ts?");

/***/ }),

/***/ "../utils-section/messageBus/MessageBusTask.ts":
/*!*****************************************************!*\
  !*** ../utils-section/messageBus/MessageBusTask.ts ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessageBusTask\": () => (/* binding */ MessageBusTask)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"../utils-section/messageBus/Utils.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\nclass MessageBusTask {\n  constructor(callback) {\n    this._callback = callback;\n    this._isRunning = true;\n  }\n  get isRunning() {\n    return this._isRunning;\n  }\n  execute(data, bridge, source) {\n    try {\n      const copyData = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.deepClone)(data);\n      this._callback(copyData, bridge, source);\n    } catch (e) {\n      console.error(e);\n    }\n  }\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/../utils-section/messageBus/MessageBusTask.ts?");

/***/ }),

/***/ "../utils-section/messageBus/Utils.ts":
/*!********************************************!*\
  !*** ../utils-section/messageBus/Utils.ts ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deepClone\": () => (/* binding */ deepClone),\n/* harmony export */   \"getOrInitArr\": () => (/* binding */ getOrInitArr),\n/* harmony export */   \"remove\": () => (/* binding */ remove)\n/* harmony export */ });\n/* unused harmony export getOrInit */\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nfunction remove(list, item) {\n  const newList = [];\n  for (let i = 0; i < list.length; i++) {\n    if (list[i] !== item) {\n      newList.push(list[i]);\n    }\n  }\n  return newList;\n}\nfunction deepClone(data) {\n  return traverse(data);\n  function traverse(data2) {\n    if (typeof data2 !== \"object\" || data2 === null || data2 instanceof Date || data2 instanceof ArrayBuffer || data2 instanceof Uint8ClampedArray || data2 instanceof Uint8Array || data2 instanceof Uint16Array || data2 instanceof Uint32Array) {\n      return data2;\n    }\n    if (Array.isArray(data2)) {\n      return data2.map(traverse);\n    }\n    const obj = {};\n    for (let key in data2) {\n      if (data2.hasOwnProperty(key)) {\n        obj[key] = traverse(data2[key]);\n      }\n    }\n    return obj;\n  }\n}\nfunction getOrInit(obj, key, initializer = (key2) => null) {\n  let value = obj[key];\n  if (typeof value !== \"undefined\") {\n    return value;\n  }\n  value = initializer(key);\n  obj[key] = value;\n  return value;\n}\nfunction getOrInitArr(obj, key) {\n  return getOrInit(obj, key, () => {\n    return [];\n  });\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/../utils-section/messageBus/Utils.ts?");

/***/ }),

/***/ "../utils-section/messageBus/WindowMessageBridge.ts":
/*!**********************************************************!*\
  !*** ../utils-section/messageBus/WindowMessageBridge.ts ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WindowMessageBridge\": () => (/* binding */ WindowMessageBridge)\n/* harmony export */ });\n/* harmony import */ var _BaseMessageBridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseMessageBridge */ \"../utils-section/messageBus/BaseMessageBridge.ts\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ \"../utils-section/messageBus/Config.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\n\n\nclass WindowMessageBridge extends _BaseMessageBridge__WEBPACK_IMPORTED_MODULE_0__.BaseMessageBridge {\n  constructor(bus) {\n    super(bus);\n    window.addEventListener(\n      \"message\",\n      (e) => {\n        this.processRemoteMessage(e.data, e.source);\n      },\n      false\n    );\n  }\n  postMessage(topic, type, data, target) {\n    const messageItem = {\n      topic,\n      type,\n      data\n    };\n    target && target.postMessage(messageItem, \"*\");\n  }\n  publish(topic, message, target) {\n    this.postMessage(topic, _Config__WEBPACK_IMPORTED_MODULE_1__.EMessageType.PUBLISH, message, target);\n  }\n  subscribe(topic, target) {\n    if (target === window) {\n      throw new Error(`regist remote subscribe from current window is premittied.`);\n    }\n    this.postMessage(topic, _Config__WEBPACK_IMPORTED_MODULE_1__.EMessageType.SUBSCRIBE, null, target);\n  }\n  push(topic, message, target) {\n    this.postMessage(topic, _Config__WEBPACK_IMPORTED_MODULE_1__.EMessageType.PUSH, message, target);\n  }\n  pull(topic, target) {\n    if (target === window) {\n      throw new Error(`regist remote pull from current window is premittied.`);\n    }\n    this.postMessage(topic, _Config__WEBPACK_IMPORTED_MODULE_1__.EMessageType.PULL, null, target);\n  }\n}\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://local-webcanvas/../utils-section/messageBus/WindowMessageBridge.ts?");

/***/ }),

/***/ "./src/app/modules/drawActionPanel/index.module.less":
/*!***********************************************************!*\
  !*** ./src/app/modules/drawActionPanel/index.module.less ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"container\":\"index-module_-DgVNH7pA\",\"panel-container\":\"index-module_-JdCN1VO3\",\"panel-label\":\"index-module_-U_U0NQY3\",\"panel-list-wrapper\":\"index-module_-wFLIlxng\",\"panel-list-item\":\"index-module_-alz00iHk\",\"panel-list-item-disabled\":\"index-module_-zTQirYa9\"});\n    if(true) {\n      // 1708697221296\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"../\",\"locals\":true});\n      module.hot.dispose(cssReload);\n      \n    }\n  \n\n//# sourceURL=webpack://local-webcanvas/./src/app/modules/drawActionPanel/index.module.less?");

/***/ }),

/***/ "./src/common/assets/style/prefix.less":
/*!*********************************************!*\
  !*** ./src/common/assets/style/prefix.less ***!
  \*********************************************/
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1704210044320\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"../\",\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://local-webcanvas/./src/common/assets/style/prefix.less?");

/***/ }),

/***/ "./src/app/i18n/locales/en_us/translation.json":
/*!*****************************************************!*\
  !*** ./src/app/i18n/locales/en_us/translation.json ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n//# sourceURL=webpack://local-webcanvas/./src/app/i18n/locales/en_us/translation.json?");

/***/ }),

/***/ "./src/app/i18n/locales/zh_cn/translation.json":
/*!*****************************************************!*\
  !*** ./src/app/i18n/locales/zh_cn/translation.json ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"China\":\"中国\",\"Click here to enter the Link List page\":\"点击此处进入 Link List 页面\",\"An application developed by React\":\"一个使用 React 开发的应用\"}');\n\n//# sourceURL=webpack://local-webcanvas/./src/app/i18n/locales/zh_cn/translation.json?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d5a91e955cf36ef1687a")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "local-webcanvas:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = function (moduleObject, moduleExports, webpackRequire) {
/******/ 				__webpack_require__.$Refresh$.setup(options.id);
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					if (typeof Promise !== 'undefined' && moduleObject.exports instanceof Promise) {
/******/ 						options.module.exports = options.module.exports.then(
/******/ 							(result) => {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return result;
/******/ 							},
/******/ 							(reason) => {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return Promise.reject(reason);
/******/ 							}
/******/ 						);
/******/ 					} else {
/******/ 						__webpack_require__.$Refresh$.cleanup(options.id)
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		})
/******/ 		
/******/ 		__webpack_require__.$Refresh$ = {
/******/ 			register: () => (undefined),
/******/ 			signature: () => ((type) => (type)),
/******/ 			runtime: {
/******/ 				createSignatureFunctionForTransform: () => ((type) => (type)),
/******/ 				register: () => (undefined)
/******/ 			},
/******/ 			setup: (currentModuleId) => {
/******/ 				const prevModuleId = __webpack_require__.$Refresh$.moduleId;
/******/ 				const prevRegister = __webpack_require__.$Refresh$.register;
/******/ 				const prevSignature = __webpack_require__.$Refresh$.signature;
/******/ 				const prevCleanup = __webpack_require__.$Refresh$.cleanup;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.moduleId = currentModuleId;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.register = (type, id) => {
/******/ 					const typeId = currentModuleId + " " + id;
/******/ 					__webpack_require__.$Refresh$.runtime.register(type, typeId);
/******/ 				}
/******/ 		
/******/ 				__webpack_require__.$Refresh$.signature = () => (__webpack_require__.$Refresh$.runtime.createSignatureFunctionForTransform());
/******/ 		
/******/ 				__webpack_require__.$Refresh$.cleanup = (cleanupModuleId) => {
/******/ 					if (currentModuleId === cleanupModuleId) {
/******/ 						__webpack_require__.$Refresh$.moduleId = prevModuleId;
/******/ 						__webpack_require__.$Refresh$.register = prevRegister;
/******/ 						__webpack_require__.$Refresh$.signature = prevSignature;
/******/ 						__webpack_require__.$Refresh$.cleanup = prevCleanup;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 			linkTag.setAttribute("id", "link1708798905292");
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatelocal_webcanvas"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklocal_webcanvas"] = self["webpackChunklocal_webcanvas"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/app/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;