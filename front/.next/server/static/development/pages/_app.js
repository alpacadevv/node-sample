module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _containers_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/LoginForm */ \"./containers/LoginForm.js\");\n/* harmony import */ var _containers_UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/UserProfile */ \"./containers/UserProfile.js\");\n\n\n // 프로그래밍적으로 이동하는 방법\n\n // 컴포넌트적으로 이동하는 방법\n\n\n\n\n\n\nvar AppLayout = function AppLayout(_ref) {\n  var children = _ref.children;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  var onSearch = function onSearch(value) {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({\n      pathname: '/hashtag',\n      query: {\n        tag: value\n      }\n    }, // 내부적으로 접근하는 주소 (server.js에서 동적라우팅할떄도 이런 개념임)\n    \"/hashtag/\".concat(value) // 실제로 눈으로 보이는 보일 주소\n    );\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"], {\n    mode: \"horizontal\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"].Item, {\n    key: \"home\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", null, \"NodeBird\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"].Item, {\n    key: \"profile\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/profile\",\n    prefetch: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", null, \"Profile\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"].Item, {\n    key: \"mail\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"].Search, {\n    enterButton: true,\n    style: {\n      verticalAlign: 'middle'\n    },\n    onSearch: onSearch\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    gutter: 10\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 24,\n    md: 6\n  }, me ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_UserProfile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_LoginForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 24,\n    md: 12\n  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 24,\n    md: 6\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"https://jinseoplee.github.io/portfolio/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\"\n  }, \"Made by Alpaca\")))));\n};\n\nAppLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\n//# sourceURL=webpack:///./components/AppLayout.js?");

/***/ }),

/***/ "./containers/LoginForm.js":
/*!*********************************!*\
  !*** ./containers/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/signup */ \"./pages/signup.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  color: red;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar LoginError = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.p(_templateObject());\n\nvar LoginForm = function LoginForm() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n\n  var _useInput = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_7__[\"useInput\"])(''),\n      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n      userId = _useInput2[0],\n      onChangeUserId = _useInput2[1];\n\n  var _useInput3 = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_7__[\"useInput\"])(''),\n      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput3, 2),\n      password = _useInput4[0],\n      onChangePassword = _useInput4[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      isLoggingIn = _useSelector.isLoggingIn,\n      logInErrorReason = _useSelector.logInErrorReason;\n\n  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    e.preventDefault();\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__[\"LOG_IN_REQUEST\"],\n      data: {\n        userId: userId,\n        password: password\n      }\n    });\n  }, [userId, password]);\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    onSubmit: onSubmitForm,\n    style: {\n      padding: '10px'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-id\"\n  }, \"ID\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    name: \"user-id\",\n    value: userId,\n    onChange: onChangeUserId,\n    required: true\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-password\"\n  }, \"Password\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    name: \"user-password\",\n    type: \"password\",\n    value: password,\n    onChange: onChangePassword,\n    required: true\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoginError, null, logInErrorReason), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    style: {\n      marginTop: '10px'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: isLoggingIn\n  }, \"Login\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/signup\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"Sign Up\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\n//# sourceURL=webpack:///./containers/LoginForm.js?");

/***/ }),

/***/ "./containers/UserProfile.js":
/*!***********************************!*\
  !*** ./containers/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"LOG_OUT_REQUEST\"]\n    });\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/profile\",\n      key: \"twit\",\n      prefetch: true\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"twit\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), me.Posts.length))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/profile\",\n      key: \"following\",\n      prefetch: true\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"following\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), me.Followings.length))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/profile\",\n      key: \"follower\",\n      prefetch: true\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"follower\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), me.Followers.length)))]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Meta, {\n    avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], null, me.nickname[0]),\n    title: me.nickname\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: onLogout\n  }, \"Log out\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\n\n//# sourceURL=webpack:///./containers/UserProfile.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ \"core-js/library/fn/array/from\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/array/from.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ \"core-js/library/fn/array/is-array\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ \"core-js/library/fn/get-iterator\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ \"core-js/library/fn/is-iterable\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ \"core-js/library/fn/json/stringify\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ \"core-js/library/fn/object/assign\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/assign.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ \"core-js/library/fn/object/create\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ \"core-js/library/fn/object/define-properties\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ \"core-js/library/fn/object/define-property\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ \"core-js/library/fn/object/freeze\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ \"core-js/library/fn/object/get-own-property-descriptor\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ \"core-js/library/fn/object/get-own-property-symbols\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ \"core-js/library/fn/object/get-prototype-of\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ \"core-js/library/fn/object/keys\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/keys.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"core-js/library/fn/object/set-prototype-of\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/promise */ \"core-js/library/fn/promise\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/promise.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ \"core-js/library/fn/symbol\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"core-js/library/fn/symbol/iterator\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n\n    _Object$defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithHoles; });\n/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ \"./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js\");\n/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _arrayWithHoles(arr) {\n  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithoutHoles; });\n/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ \"./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js\");\n/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _arrayWithoutHoles(arr) {\n  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\n/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ \"./node_modules/@babel/runtime-corejs2/core-js/promise.js\");\n/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js\");\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArray; });\n/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ \"./node_modules/@babel/runtime-corejs2/core-js/array/from.js\");\n/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ \"./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js\");\n/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _iterableToArray(iter) {\n  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArrayLimit; });\n/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ \"./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js\");\n/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableRest; });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableSpread; });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectSpread; });\n/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js\");\n/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js\");\n/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ \"./node_modules/@babel/runtime-corejs2/core-js/object/keys.js\");\n/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js\");\n\n\n\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);\n\n    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {\n      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {\n        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _slicedToArray; });\n/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js\");\n\n\n\nfunction _slicedToArray(arr, i) {\n  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _taggedTemplateLiteral; });\n/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js\");\n/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ \"./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js\");\n/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n  if (!raw) {\n    raw = strings.slice(0);\n  }\n\n  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {\n    raw: {\n      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)\n    }\n  }));\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toConsumableArray; });\n/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js\");\n\n\n\nfunction _toConsumableArray(arr) {\n  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js\");\n\nvar _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js\");\n\nfunction _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || _Object$getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/@babel/runtime-corejs2/core-js/object/create.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = _Object$create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime-corejs2/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js\");\n\nfunction _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js\");\n\nvar _Symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/@babel/runtime-corejs2/core-js/symbol.js\");\n\nfunction _typeof2(obj) { if (typeof _Symbol === \"function\" && typeof _Symbol$iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof _Symbol === \"function\" && _typeof2(_Symbol$iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"regenerator-runtime\");\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n\n\n//# sourceURL=webpack:///./node_modules/next/app.js?");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global __NEXT_DATA__ */\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js\");\n\nvar _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ \"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ \"./node_modules/@babel/runtime-corejs2/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ \"./node_modules/@babel/runtime-corejs2/helpers/inherits.js\"));\n\nvar __importStar = void 0 && (void 0).__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  }\n  result[\"default\"] = mod;\n  return result;\n};\n\nvar __importDefault = void 0 && (void 0).__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar url_1 = __webpack_require__(/*! url */ \"url\");\n\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nvar prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar router_1 = __importStar(__webpack_require__(/*! next/router */ \"next/router\"));\n\nvar utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ \"next-server/dist/lib/utils\");\n\nfunction isLocal(href) {\n  var url = url_1.parse(href, false, true);\n  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);\n  return !url.host || url.protocol === origin.protocol && url.host === origin.host;\n}\n\nfunction memoizedFormatUrl(formatFunc) {\n  var lastHref = null;\n  var lastAs = null;\n  var lastResult = null;\n  return function (href, as) {\n    if (href === lastHref && as === lastAs) {\n      return lastResult;\n    }\n\n    var result = formatFunc(href, as);\n    lastHref = href;\n    lastAs = as;\n    lastResult = result;\n    return result;\n  };\n}\n\nfunction formatUrl(url) {\n  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;\n}\n\nvar Link =\n/*#__PURE__*/\nfunction (_react_1$Component) {\n  (0, _inherits2.default)(Link, _react_1$Component);\n\n  function Link() {\n    var _this;\n\n    (0, _classCallCheck2.default)(this, Link);\n    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed\n    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html\n\n    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {\n      return {\n        href: formatUrl(href),\n        as: formatUrl(asHref, true)\n      };\n    });\n\n    _this.linkClicked = function (e) {\n      var _e$currentTarget = e.currentTarget,\n          nodeName = _e$currentTarget.nodeName,\n          target = _e$currentTarget.target;\n\n      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {\n        // ignore click for new tab / new window behavior\n        return;\n      }\n\n      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),\n          href = _this$formatUrls.href,\n          as = _this$formatUrls.as;\n\n      if (!isLocal(href)) {\n        // ignore click if it's outside our scope\n        return;\n      }\n\n      var pathname = window.location.pathname;\n      href = url_1.resolve(pathname, href);\n      as = as ? url_1.resolve(pathname, as) : href;\n      e.preventDefault(); //  avoid scroll for urls with anchor refs\n\n      var scroll = _this.props.scroll;\n\n      if (scroll == null) {\n        scroll = as.indexOf('#') < 0;\n      } // replace state instead of push if prop is present\n\n\n      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {\n        shallow: _this.props.shallow\n      }).then(function (success) {\n        if (!success) return;\n\n        if (scroll) {\n          window.scrollTo(0, 0);\n          document.body.focus();\n        }\n      }).catch(function (err) {\n        if (_this.props.onError) _this.props.onError(err);\n      });\n    };\n\n    return _this;\n  }\n\n  (0, _createClass2.default)(Link, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.prefetch();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {\n        this.prefetch();\n      }\n    }\n  }, {\n    key: \"prefetch\",\n    value: function prefetch() {\n      if (!this.props.prefetch) return;\n      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)\n\n      var pathname = window.location.pathname;\n\n      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),\n          parsedHref = _this$formatUrls2.href;\n\n      var href = url_1.resolve(pathname, parsedHref);\n      router_1.default.prefetch(href);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var children = this.props.children;\n\n      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),\n          href = _this$formatUrls3.href,\n          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag\n\n\n      if (typeof children === 'string') {\n        children = react_1.default.createElement(\"a\", null, children);\n      } // This will return the first child, if multiple are provided it will throw an error\n\n\n      var child = react_1.Children.only(children);\n      var props = {\n        onClick: function onClick(e) {\n          if (child.props && typeof child.props.onClick === 'function') {\n            child.props.onClick(e);\n          }\n\n          if (!e.defaultPrevented) {\n            _this2.linkClicked(e);\n          }\n        }\n      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is\n      // defined, we specify the current 'href', so that repetition is not needed by the user\n\n      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {\n        props.href = as || href;\n      } // Add the ending slash to the paths. So, we can serve the\n      // \"<page>/index.html\" directly.\n\n\n      if (true) {\n        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {\n          props.href = router_1.Router._rewriteUrlForNextExport(props.href);\n        }\n      }\n\n      return react_1.default.cloneElement(child, props);\n    }\n  }]);\n  return Link;\n}(react_1.Component);\n\nif (true) {\n  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin\n\n  var exact = __webpack_require__(/*! prop-types-exact */ \"prop-types-exact\");\n\n  Link.propTypes = exact({\n    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,\n    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),\n    prefetch: prop_types_1.default.bool,\n    replace: prop_types_1.default.bool,\n    shallow: prop_types_1.default.bool,\n    passHref: prop_types_1.default.bool,\n    scroll: prop_types_1.default.bool,\n    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {\n      var value = props[propName];\n\n      if (typeof value === 'string') {\n        warn(\"Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>\");\n      }\n\n      return null;\n    }]).isRequired\n  });\n}\n\nexports.default = Link;\n\n//# sourceURL=webpack:///./node_modules/next/dist/client/link.js?");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js\");\n\nvar _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ \"./node_modules/@babel/runtime-corejs2/core-js/promise.js\"));\n\nvar _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ \"./node_modules/@babel/runtime-corejs2/core-js/object/assign.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ \"./node_modules/@babel/runtime-corejs2/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ \"./node_modules/@babel/runtime-corejs2/helpers/inherits.js\"));\n\nvar __importStar = void 0 && (void 0).__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  }\n  result[\"default\"] = mod;\n  return result;\n};\n\nvar __importDefault = void 0 && (void 0).__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nvar prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ \"next-server/dist/lib/utils\");\n\nvar router_1 = __webpack_require__(/*! next/router */ \"next/router\");\n\nvar App =\n/*#__PURE__*/\nfunction (_react_1$Component) {\n  (0, _inherits2.default)(App, _react_1$Component);\n\n  function App() {\n    (0, _classCallCheck2.default)(this, App);\n    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(App, [{\n    key: \"getChildContext\",\n    value: function getChildContext() {\n      return {\n        router: router_1.makePublicRouterInstance(this.props.router)\n      };\n    } // Kept here for backwards compatibility.\n    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.\n\n  }, {\n    key: \"componentDidCatch\",\n    value: function componentDidCatch(err) {\n      throw err;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          router = _this$props.router,\n          Component = _this$props.Component,\n          pageProps = _this$props.pageProps;\n      var url = createUrl(router);\n      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {\n        url: url\n      })));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function (_ref) {\n      var Component = _ref.Component,\n          router = _ref.router,\n          ctx = _ref.ctx;\n\n      try {\n        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {\n          return {\n            pageProps: pageProps\n          };\n        });\n      } catch (e) {\n        return _promise.default.reject(e);\n      }\n    }\n  }]);\n  return App;\n}(react_1.Component);\n\nApp.childContextTypes = {\n  router: prop_types_1.default.object\n};\nexports.default = App;\n\nvar Container =\n/*#__PURE__*/\nfunction (_react_1$Component2) {\n  (0, _inherits2.default)(Container, _react_1$Component2);\n\n  function Container() {\n    (0, _classCallCheck2.default)(this, Container);\n    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(Container, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.scrollToHash();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      this.scrollToHash();\n    }\n  }, {\n    key: \"scrollToHash\",\n    value: function scrollToHash() {\n      var hash = window.location.hash;\n      hash = hash ? hash.substring(1) : false;\n      if (!hash) return;\n      var el = document.getElementById(hash);\n      if (!el) return; // If we call scrollIntoView() in here without a setTimeout\n      // it won't scroll properly.\n\n      setTimeout(function () {\n        return el.scrollIntoView();\n      }, 0);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.props.children;\n    }\n  }]);\n  return Container;\n}(react_1.Component);\n\nexports.Container = Container;\nvar warnUrl = utils_1.execOnce(function () {\n  if (true) {\n    console.error(\"Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated\");\n  }\n});\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  var pathname = router.pathname,\n      asPath = router.asPath,\n      query = router.query;\n  return {\n    get query() {\n      warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      warnUrl();\n      return asPath;\n    },\n\n    back: function back() {\n      warnUrl();\n      router.back();\n    },\n    push: function push(url, as) {\n      warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: function pushTo(href, as) {\n      warnUrl();\n      var pushRoute = as ? href : null;\n      var pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: function replace(url, as) {\n      warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: function replaceTo(href, as) {\n      warnUrl();\n      var replaceRoute = as ? href : null;\n      var replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}\n\nexports.createUrl = createUrl;\n\n//# sourceURL=webpack:///./node_modules/next/dist/pages/_app.js?");

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/client/link */ \"./node_modules/next/dist/client/link.js\")\n\n\n//# sourceURL=webpack:///./node_modules/next/link.js?");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ \"./node_modules/@babel/runtime-corejs2/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * 원래 document, error, app등은 App을 extends한 클래스로 만들어줘야한다.;\n * 공식문서에선 extends하라는데 안해도 문제가 없다고함;\n */\n// class NodeBird extends App {\n//   static getInitialProps(context) {\n//   }\n//   return() {\n//   }\n// }\n\n/**\n * _app.js는 next에서 최상위 부모 컴포넌트 역할을 한다.\n * index.js, profile.js 등등의 컴포넌트들이 모두 _app.js를 부모로 갖는다.\n * Props인 Component는 next에서 일반 컴포넌트들을 prop으로 보내준다.\n * @param {*} param0\n */\n\nvar NodeBird = function NodeBird(_ref) {\n  var Component = _ref.Component,\n      store = _ref.store,\n      pageProps = _ref.pageProps;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__[\"Container\"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    title: \"NodeBird\",\n    htmlAttributes: {\n      lang: 'ko'\n    },\n    meta: [{\n      charset: 'UTF-8'\n    }, {\n      name: 'viewport',\n      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover'\n    }, {\n      'http-equiv': 'X-UA-Compatible',\n      content: 'IE=edge'\n    }, {\n      name: 'description',\n      content: '노드벌드~'\n    }, {\n      name: 'og:title',\n      content: 'nodebird sns'\n    }, {\n      name: 'og:description',\n      content: 'nodebird sns'\n    }, {\n      property: 'og:type',\n      content: 'website'\n    }, {\n      // 이건 이미지가 없을때를 대비한 기본이미지 설정\n      property: 'og:image',\n      content: 'http://localhost:3060/favicon.ico'\n    }],\n    link: [{\n      rel: 'shortcut icon',\n      href: '/favicon.ico'\n    }, {\n      rel: 'stylesheet',\n      href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.8/antd.css'\n    }, {\n      rel: 'stylesheet',\n      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'\n    }, {\n      rel: 'stylesheet',\n      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'\n    }],\n    script: [{\n      src: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.8/antd.js'\n    }]\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AppLayout__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, pageProps))));\n};\n\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,\n  store: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n}; // next에서 제공하는 getInitialProps를 쓰려면 _app.js에서 아래처럼 해줘야함\n// _app.js의 context는 next에서 내려주는거임.\n// context.ctx는 _app.js에서 다른 컴포넌트들로 내려주는거임\n// Component들에 getInitialProps가 있을 경우 실행을 시켜주는역할을 함.\n\nNodeBird.getInitialProps =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  /*#__PURE__*/\n  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var ctx, Component, pageProps, state, cookie;\n    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            ctx = context.ctx, Component = context.Component;\n            pageProps = {}; // getInitialProps는 pages 에만 써야하기 때문에 AppLayout에 안쓰고 여기다 써줌\n            // 내 정보를 가져온 다음에 Component.getInitialProps를 실행 해줘야 각 컴포넌트의\n            // getInitialProps에서 실행되는 dispatch나 그런것들보다 LOAD_USER_REQUEST가\n            // 먼저 실행된다. 그래서 쿠키가 제대로 첨부가 안댐.\n            // 우리는 front, back 이렇게 두개의 서버가 있다.\n            // 지금까지는 SSR 적용 안됬을땐 클라이언트라고 했을 때 프론트에서 백으로 요청하면 백에서  프론트로 주는 형식이었는데\n            // 이제는 프론트 서버를 통해서 서버사이드 렌더링을 한다.\n            // (클라이언트에서 axios 쏠때 브라우저가 쿠키 같이 동봉해줬음, 이제는 클라이언트가 axios 쏘는게아니라 프론트 서버가 함)\n            // (서버사이드 렌더링 할때는 브라우저가 없음... 그래서 쿠키 자동으로 넣어주는애가 없음, 그래서 직접 넣어줘야함)\n\n            state = ctx.store.getState(); // ctx 안에 req와 res가 있는데 이게 서버환경일때만 있음, 클라이언트 환경일땐 undefined일꺼임\n\n            cookie = ctx.isServer ? ctx.req.headers.cookie : ''; // 클라이언트일땐 브라우저가 쿠키를 알아서 넣어준댔는데 클라이언트일땐 이걸 실행해줄 필요가 없으니까\n            // 서버와 클라이언트 구분지어주면 좋음\n\n            if (ctx.isServer) {\n              // 쿠키 직접 넣어주는 현장\n              axios__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.headers.Cookie = cookie;\n            }\n\n            if (!state.user.me) {\n              ctx.store.dispatch({\n                type: _reducers_user__WEBPACK_IMPORTED_MODULE_12__[\"LOAD_USER_REQUEST\"]\n              });\n            }\n\n            if (!Component.getInitialProps) {\n              _context.next = 13;\n              break;\n            }\n\n            _context.next = 9;\n            return Component.getInitialProps(ctx);\n\n          case 9:\n            _context.t0 = _context.sent;\n\n            if (_context.t0) {\n              _context.next = 12;\n              break;\n            }\n\n            _context.t0 = {};\n\n          case 12:\n            pageProps = _context.t0;\n\n          case 13:\n            return _context.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar configureStore = function configureStore(initialState, options) {\n  var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_8___default()();\n  var middlewares = [sagaMiddleware, function (store) {\n    return function (next) {\n      return function (action) {\n        // 커스텀 미들웨어는 3단 커링함수임\n        // 리덕스 사가 에러 찾는데 용이함\n        // console.log(action);\n        next(action);\n      };\n    };\n  }];\n  var enhancer =  false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_6__[\"compose\"])(redux__WEBPACK_IMPORTED_MODULE_6__[\"applyMiddleware\"].apply(void 0, middlewares), !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {\n    return f;\n  });\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_14__[\"default\"], initialState, enhancer); // withReduxSaga 사용하려면 saga 미들위어 런 한걸 이렇게 넣어줘야함\n\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_15__[\"default\"]);\n  return store;\n}; // withReduxSaga 이게 있어야 next 서버에서 리덕스 사가를 돌릴수 있음\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(configureStore)(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(NodeBird)));\n\n//# sourceURL=webpack:///./pages/_app.js?");

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useInput\", function() { return useInput; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: red;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// folder 이름이 pages인 이유 : next는 라우터 기능의 Link를 쓸때 페이지의 주소체게를 잡는데 pages폴더가 root로 잡힌다\n\n\n\n\n\n\nvar useInput = function useInput() {\n  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initValue),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      value = _useState2[0],\n      setter = _useState2[1];\n\n  var handler = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    setter(e.target.value);\n  }, []);\n  return [value, handler];\n};\nvar SignupError = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject());\n\nvar Signup = function Signup() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState3, 2),\n      passwordCheck = _useState4[0],\n      setPasswordCheck = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState5, 2),\n      term = _useState6[0],\n      setTerm = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState7, 2),\n      passwordError = _useState8[0],\n      setPasswordError = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState9, 2),\n      termError = _useState10[0],\n      setTermError = _useState10[1];\n\n  var _useInput = useInput(''),\n      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useInput, 2),\n      userId = _useInput2[0],\n      onChangeUserId = _useInput2[1];\n\n  var _useInput3 = useInput(''),\n      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useInput3, 2),\n      nickname = _useInput4[0],\n      onChangeNickname = _useInput4[1];\n\n  var _useInput5 = useInput(''),\n      _useInput6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useInput5, 2),\n      password = _useInput6[0],\n      onChangePassword = _useInput6[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me,\n      isSigningUp = _useSelector.isSigningUp;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // 우리가 SSR을 하기때문에 me가 확실히 있거나 없거나 하는걸 알 수가 있음\n    // 기존에는 처음에는 me가 항상 없다가 LOAD_USER_REQUEST해서 나중에 받아왔는데\n    // 그래서 me가 잠깐 없던 그 시절이 있었는데 그래서 아래처럼 체크하는데 무리가 있었음.\n    // 서버사이드 렌더링으로 하면 처음에 데이터 받아오니까 상태가 확실해짐 그래서 개발할때 편함\n    // 새로고침으로 페이지 처음 들어갈때는 SSR 그 후는 불러온 데이터를 이용한 클라이언트 사이드 렌더링\n    if (me) {\n      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n    }\n  }, [me && me.id]);\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    e.preventDefault();\n\n    if (password !== passwordCheck) {\n      return setPasswordError(true);\n    }\n\n    if (!term) {\n      return setTermError(true);\n    }\n\n    return dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__[\"SIGN_UP_REQUEST\"],\n      data: {\n        userId: userId,\n        password: password,\n        nickname: nickname\n      }\n    });\n  }, [userId, nickname, password, passwordCheck, term]);\n  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    setPasswordError(e.target.value !== password);\n    setPasswordCheck(e.target.value);\n  }, [password]);\n  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    setTermError(false);\n    setTerm(e.target.checked);\n  }, []);\n\n  if (me) {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"], {\n    onSubmit: onSubmit,\n    style: {\n      padding: 10\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-id\"\n  }, \"ID\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], {\n    name: \"user-id\",\n    required: true,\n    value: userId,\n    onChange: onChangeUserId\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-nickname\"\n  }, \"Nickname\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], {\n    name: \"user-nickname\",\n    required: true,\n    value: nickname,\n    onChange: onChangeNickname\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-password\"\n  }, \"Password\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], {\n    name: \"user-password\",\n    type: \"password\",\n    required: true,\n    value: password,\n    onChange: onChangePassword\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"user-password-check\"\n  }, \"Password check\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], {\n    name: \"user-password-check\",\n    type: \"password\",\n    required: true,\n    value: passwordCheck,\n    onChange: onChangePasswordCheck\n  }), passwordError && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SignupError, null, \"Wrong password!\")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Checkbox\"], {\n    name: \"user-term\",\n    value: term,\n    onChange: onChangeTerm\n  }, \"Fallow us!!\"), termError && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SignupError, null, \"Please fallow us!\")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    style: {\n      marginTop: 10\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: isSigningUp\n  }, \"Sign Up\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\n\n//# sourceURL=webpack:///./pages/signup.js?");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  user: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./reducers/index.js?");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_REQUEST\", function() { return LOAD_MAIN_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_SUCCESS\", function() { return LOAD_MAIN_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_FAILURE\", function() { return LOAD_MAIN_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_REQUEST\", function() { return LOAD_HASHTAG_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_SUCCESS\", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_FAILURE\", function() { return LOAD_HASHTAG_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_REQUEST\", function() { return LOAD_USER_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_SUCCESS\", function() { return LOAD_USER_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_FAILURE\", function() { return LOAD_USER_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_REQUEST\", function() { return UPLOAD_IMAGES_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_SUCCESS\", function() { return UPLOAD_IMAGES_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_FAILURE\", function() { return UPLOAD_IMAGES_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_IMAGE\", function() { return REMOVE_IMAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_REQUEST\", function() { return LIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_SUCCESS\", function() { return LIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_FAILURE\", function() { return LIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_REQUEST\", function() { return UNLIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_SUCCESS\", function() { return UNLIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_FAILURE\", function() { return UNLIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_REQUEST\", function() { return LOAD_COMMENTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_SUCCESS\", function() { return LOAD_COMMENTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_FAILURE\", function() { return LOAD_COMMENTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_REQUEST\", function() { return RETWEET_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_SUCCESS\", function() { return RETWEET_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_FAILURE\", function() { return RETWEET_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_REQUEST\", function() { return LOAD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_SUCCESS\", function() { return LOAD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_FAILURE\", function() { return LOAD_POST_FAILURE; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar initialState = {\n  mainPosts: [],\n  // 화면에 보일 포스트들\n  imagePaths: [],\n  // 미리보기 이미지 경로들\n  addPostErrorReason: '',\n  // 포스트 업로드 실패 사유\n  isAddingPost: false,\n  // 포스트 업로드 중\n  postAdded: false,\n  // 포스트 업로드 성공\n  isAddingComment: false,\n  // 댓글 업로드 중\n  addCommentErrorReason: '',\n  // 댓글 업로드 실패 사유\n  commentAdded: false,\n  // 댓글 업로드 성공\n  singlePost: null\n}; // 메인 포스트 로딩 액션\n\nvar LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';\nvar LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';\nvar LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE'; // 해시태그로 검색시 로딩하는 액션\n\nvar LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';\nvar LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';\nvar LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE'; // 사용자가 어떤 게시글 썼는지 로딩하는 액션\n\nvar LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';\nvar LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';\nvar LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE'; // 이미지 업로드 액션\n\nvar UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';\nvar UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';\nvar UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE'; // 이미지 업로드 취소 액션\n\nvar REMOVE_IMAGE = 'REMOVE_IMAGE'; // 포스트 추가 액션\n\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE'; // 하트버튼 클릭 액션\n\nvar LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';\nvar LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';\nvar LIKE_POST_FAILURE = 'LIKE_POST_FAILURE'; // 하트버튼 취소 액션\n\nvar UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';\nvar UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';\nvar UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE'; // 게시글 댓글 남기기 액션\n\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; // 게시글 댓글들 불러오기 액션\n\nvar LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';\nvar LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';\nvar LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE'; // 리트윗 액션\n\nvar RETWEET_REQUEST = 'RETWEET_REQUEST';\nvar RETWEET_SUCCESS = 'RETWEET_SUCCESS';\nvar RETWEET_FAILURE = 'RETWEET_FAILURE'; // 포스트 제거 액션\n\nvar REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';\nvar REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';\nvar REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';\nvar LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';\nvar LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';\nvar LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';\n\nvar reducers = function reducers() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, function (draft) {\n    switch (action.type) {\n      case ADD_POST_REQUEST:\n        {\n          draft.isAddingPost = true;\n          draft.addPostErrorReason = '';\n          draft.postAdded = false;\n          break;\n        }\n\n      case ADD_POST_SUCCESS:\n        {\n          draft.isAddingPost = false;\n          draft.mainPosts.unshift(action.data);\n          draft.postAdded = true;\n          draft.imagePaths = [];\n          break;\n        }\n\n      case ADD_POST_FAILURE:\n        {\n          draft.isAddingPost = false;\n          draft.addPostErrorReason = action.error;\n          break;\n        }\n\n      case LOAD_MAIN_POSTS_REQUEST:\n      case LOAD_HASHTAG_POSTS_REQUEST:\n      case LOAD_USER_POSTS_REQUEST:\n        {\n          draft.mainPosts = !action.lastId ? [] : draft.mainPosts;\n          draft.hasMorePost = action.lastId ? draft.hasMorePost : true;\n          break;\n        }\n\n      case LOAD_MAIN_POSTS_SUCCESS:\n      case LOAD_HASHTAG_POSTS_SUCCESS:\n      case LOAD_USER_POSTS_SUCCESS:\n        {\n          var _draft$mainPosts;\n\n          (_draft$mainPosts = draft.mainPosts).push.apply(_draft$mainPosts, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(action.data));\n\n          draft.hasMorePost = action.data.length === 10;\n          break;\n        }\n\n      case LOAD_MAIN_POSTS_FAILURE:\n      case LOAD_HASHTAG_POSTS_FAILURE:\n      case LOAD_USER_POSTS_FAILURE:\n        {\n          break;\n        }\n\n      case ADD_COMMENT_REQUEST:\n        {\n          draft.isAddingComment = true;\n          draft.addCommentErrorReason = '';\n          draft.commentAdded = false;\n          break;\n        }\n\n      case ADD_COMMENT_SUCCESS:\n        {\n          var postIndex = draft.mainPosts.findIndex(function (v) {\n            return v.id === action.data.postId;\n          });\n          draft.mainPosts[postIndex].Comments.push(action.data.comments);\n          draft.isAddingComment = false;\n          draft.commentAdded = true;\n          break;\n        }\n\n      case ADD_COMMENT_FAILURE:\n        {\n          draft.isAddingComment = false;\n          draft.addCommentErrorReason = action.error;\n          break;\n        }\n\n      case LOAD_COMMENTS_REQUEST:\n        {\n          break;\n        }\n\n      case LOAD_COMMENTS_SUCCESS:\n        {\n          var _postIndex = draft.mainPosts.findIndex(function (v) {\n            return v.id === action.data.postId;\n          });\n\n          draft.mainPosts[_postIndex].Comments = action.data.comments;\n          break;\n        }\n\n      case LOAD_COMMENTS_FAILURE:\n        {\n          break;\n        }\n\n      case UPLOAD_IMAGES_REQUEST:\n        {\n          break;\n        }\n\n      case UPLOAD_IMAGES_SUCCESS:\n        {\n          var _draft$imagePaths;\n\n          (_draft$imagePaths = draft.imagePaths).push.apply(_draft$imagePaths, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(action.data));\n\n          break;\n        }\n\n      case UPLOAD_IMAGES_FAILURE:\n        {\n          break;\n        }\n\n      case REMOVE_IMAGE:\n        {\n          var index = draft.imagePaths.findIndex(function (v, i) {\n            return i !== action.index;\n          });\n          draft.imagePaths.splice(index, 1);\n          break;\n        }\n\n      case LIKE_POST_REQUEST:\n        {\n          break;\n        }\n\n      case LIKE_POST_SUCCESS:\n        {\n          var _postIndex2 = draft.mainPosts.findIndex(function (v) {\n            return v.id === action.data.postId;\n          });\n\n          draft.mainPosts[_postIndex2].Likers.unshift({\n            id: action.data.userId\n          });\n\n          break;\n        }\n\n      case LIKE_POST_FAILURE:\n        {\n          break;\n        }\n\n      case UNLIKE_POST_REQUEST:\n        {\n          break;\n        }\n\n      case UNLIKE_POST_SUCCESS:\n        {\n          var _postIndex3 = draft.mainPosts.findIndex(function (v) {\n            return v.id === action.data.postId;\n          });\n\n          var likersIndex = draft.mainPosts[_postIndex3].Likers.findIndex(function (v) {\n            return v.id === action.data.userId;\n          });\n\n          draft.mainPosts[_postIndex3].Likers.splice(likersIndex, 1);\n\n          break;\n        }\n\n      case UNLIKE_POST_FAILURE:\n        {\n          break;\n        }\n\n      case RETWEET_REQUEST:\n        {\n          break;\n        }\n\n      case RETWEET_SUCCESS:\n        {\n          draft.mainPost.unshift(action.data);\n          break;\n        }\n\n      case RETWEET_FAILURE:\n        {\n          break;\n        }\n\n      case REMOVE_POST_REQUEST:\n        {\n          break;\n        }\n\n      case REMOVE_POST_SUCCESS:\n        {\n          var _index = draft.mainPosts.findIndex(function (v) {\n            return v.id !== action.data;\n          });\n\n          draft.mainPosts.splice(_index, 1);\n          break;\n        }\n\n      case REMOVE_POST_FAILURE:\n        {\n          break;\n        }\n\n      case LOAD_POST_REQUEST:\n        {\n          break;\n        }\n\n      case LOAD_POST_SUCCESS:\n        {\n          draft.singlePost = action.data;\n          break;\n        }\n\n      case LOAD_POST_FAILURE:\n        {\n          break;\n        }\n\n      default:\n        {\n          break;\n        }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducers);\n\n//# sourceURL=webpack:///./reducers/post.js?");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_REQUEST\", function() { return LOAD_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_SUCCESS\", function() { return LOAD_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_FAILURE\", function() { return LOAD_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_REQUEST\", function() { return LOAD_FOLLOWERS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_SUCCESS\", function() { return LOAD_FOLLOWERS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_FAILURE\", function() { return LOAD_FOLLOWERS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_REQUEST\", function() { return LOAD_FOLLOWINGS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_SUCCESS\", function() { return LOAD_FOLLOWINGS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_FAILURE\", function() { return LOAD_FOLLOWINGS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_REQUEST\", function() { return FOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_SUCCESS\", function() { return FOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_FAILURE\", function() { return FOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_REQUEST\", function() { return UNFOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_SUCCESS\", function() { return UNFOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_FAILURE\", function() { return UNFOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_REQUEST\", function() { return REMOVE_FOLLOWER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_SUCCESS\", function() { return REMOVE_FOLLOWER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_FAILURE\", function() { return REMOVE_FOLLOWER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_TO_ME\", function() { return ADD_POST_TO_ME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_OF_ME\", function() { return REMOVE_POST_OF_ME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_REQUEST\", function() { return EDIT_NICKNAME_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_SUCCESS\", function() { return EDIT_NICKNAME_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_FAILURE\", function() { return EDIT_NICKNAME_FAILURE; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar initialState = {\n  isLoggingIn: false,\n  // 로그인 시도중\n  isLoggingOut: false,\n  // 로그아웃 시도중\n  logInErrorReason: '',\n  // 로그인 실패 사유\n  isSignedUp: false,\n  // 회원가입 성공\n  isSigningUp: false,\n  // 회원가입 시도중\n  signUpErrorReason: '',\n  // 회원가입 실패 사유\n  me: null,\n  // 내 정보\n  followingList: [],\n  // 팔로잉 리스트\n  followerList: [],\n  // 팔로워 리스트\n  userInfo: null,\n  // 남의 정보\n  isEditingNickname: false,\n  // 이름 변경 중\n  editNicknameErrorReason: '',\n  // 이름 변경 실패 사유\n  hasMoreFollower: false,\n  hasMoreFollowing: false\n}; // 회원가입 액션\n\nvar SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nvar SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';\nvar SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; // 로그인 액션\n\nvar LOG_IN_REQUEST = 'LOG_IN_REQUEST';\nvar LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';\nvar LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 사용자 정보 로딩 액션\n\nvar LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';\nvar LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';\nvar LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'; // 로그아웃 액션\n\nvar LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';\nvar LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';\nvar LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 나를 팔로우 하는사람 목록 조회 액션\n\nvar LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';\nvar LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';\nvar LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE'; // 내가 팔로우 하고있는 목록 조회 액션\n\nvar LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';\nvar LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';\nvar LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE'; // 다른사람 팔로우 하는 액션\n\nvar FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';\nvar FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';\nvar FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE'; // 다른사람 언팔로우 하는 액션\n\nvar UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';\nvar UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';\nvar UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE'; // 나를 팔로우하는 사람 없애는 액션\n\nvar REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';\nvar REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';\nvar REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';\nvar ADD_POST_TO_ME = 'ADD_POST_TO_ME';\nvar REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';\nvar EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';\nvar EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';\nvar EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  return immer__WEBPACK_IMPORTED_MODULE_2___default()(state, function (draft) {\n    switch (action.type) {\n      case SIGN_UP_REQUEST:\n        {\n          draft.isSigningUp = true;\n          draft.isSignedUp = false;\n          draft.signUpErrorReason = '';\n          break;\n        }\n\n      case SIGN_UP_SUCCESS:\n        {\n          draft.isSigningUp = false;\n          draft.isSignedUp = true;\n          break;\n        }\n\n      case SIGN_UP_FAILURE:\n        {\n          draft.isSigningUp = false;\n          draft.signUpErrorReason = action.error;\n          break;\n        }\n\n      case LOG_IN_REQUEST:\n        {\n          draft.isLoggingIn = true;\n          draft.logInErrorReason = '';\n          break;\n        }\n\n      case LOG_IN_SUCCESS:\n        {\n          draft.isLoggingIn = false;\n          draft.me = action.data;\n          draft.isLoading = false;\n          break;\n        }\n\n      case LOG_IN_FAILURE:\n        {\n          draft.isLoggingIn = false;\n          draft.logInErrorReason = action.reason;\n          draft.me = null;\n          break;\n        }\n\n      case LOG_OUT_REQUEST:\n        {\n          draft.isLoggingOut = true;\n          break;\n        }\n\n      case LOG_OUT_SUCCESS:\n        {\n          draft.isLoggingOut = false;\n          draft.me = null;\n          break;\n        }\n\n      case LOAD_USER_REQUEST:\n        {\n          break;\n        }\n\n      case LOAD_USER_SUCCESS:\n        {\n          if (action.me) {\n            draft.me = action.data;\n            break;\n          }\n\n          draft.userInfo = action.data;\n          break;\n        }\n\n      case LOAD_USER_FAILURE:\n        {\n          break;\n        }\n\n      case LOAD_FOLLOWERS_REQUEST:\n        {\n          draft.followerList = !action.offset ? [] : draft.followerList; // 처음 데이터를 가져올때는 더보기 버튼을 true로\n\n          draft.hasMoreFollower = action.offset ? draft.hasMoreFollower : true;\n          break;\n        }\n\n      case LOAD_FOLLOWERS_SUCCESS:\n        {\n          var _draft$followerList;\n\n          (_draft$followerList = draft.followerList).push.apply(_draft$followerList, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(action.data));\n\n          draft.hasMoreFollower = action.data.length === 3;\n          break;\n        }\n\n      case LOAD_FOLLOWERS_FAILURE:\n        {\n          break;\n        }\n\n      case LOAD_FOLLOWINGS_REQUEST:\n        {\n          draft.followingList = !action.offset ? [] : draft.followingList;\n          draft.hasMoreFollowing = action.offset ? draft.hasMoreFollowing : true;\n          break;\n        }\n\n      case LOAD_FOLLOWINGS_SUCCESS:\n        {\n          var _draft$followingList;\n\n          (_draft$followingList = draft.followingList).push.apply(_draft$followingList, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(action.data));\n\n          draft.hasMoreFollowing = action.data.length === 3;\n          break;\n        }\n\n      case LOAD_FOLLOWINGS_FAILURE:\n        {\n          break;\n        }\n\n      case FOLLOW_USER_REQUEST:\n        {\n          break;\n        }\n\n      case FOLLOW_USER_SUCCESS:\n        {\n          draft.me.Followings.unshift({\n            id: action.data\n          });\n          break;\n        }\n\n      case FOLLOW_USER_FAILURE:\n        {\n          break;\n        }\n\n      case UNFOLLOW_USER_REQUEST:\n        {\n          break;\n        }\n\n      case UNFOLLOW_USER_SUCCESS:\n        {\n          var followingIndexOfMe = draft.me.Followings.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          var followingIndex = draft.followingList.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          draft.me.Followings.splice(followingIndexOfMe, 1);\n          draft.followingList.splice(followingIndex, 1);\n          break;\n        }\n\n      case UNFOLLOW_USER_FAILURE:\n        {\n          break;\n        }\n\n      case REMOVE_FOLLOWER_REQUEST:\n        {\n          break;\n        }\n\n      case REMOVE_FOLLOWER_SUCCESS:\n        {\n          var followerIndexOfMe = draft.me.Followers.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          var followerIndex = draft.followerList.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          draft.me.Followers.splice(followerIndexOfMe, 1);\n          draft.followerList.splice(followerIndex);\n          break;\n        }\n\n      case REMOVE_FOLLOWER_FAILURE:\n        {\n          break;\n        }\n\n      case ADD_POST_TO_ME:\n        {\n          draft.me.Posts.unshift({\n            id: action.data\n          });\n          break;\n        }\n\n      case REMOVE_POST_OF_ME:\n        {\n          console.log('action.data : ', action.data);\n          var postIndex = draft.me.Posts.findIndex(function (v) {\n            return v.id !== action.data;\n          });\n          draft.me.Posts.splice(postIndex, 1);\n          break;\n        }\n\n      case EDIT_NICKNAME_REQUEST:\n        {\n          draft.isEditingNickname = true;\n          draft.editNicknameErrorReason = '';\n          break;\n        }\n\n      case EDIT_NICKNAME_SUCCESS:\n        {\n          draft.isEditingNickname = false;\n          draft.me.nickname = action.data;\n          break;\n        }\n\n      case EDIT_NICKNAME_FAILURE:\n        {\n          draft.isEditingNickname = false;\n          draft.editNicknameErrorReason = action.error;\n          break;\n        }\n\n      default:\n        {\n          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n        }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./reducers/user.js?");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ \"./node_modules/@babel/runtime-corejs2/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"./sagas/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ \"./sagas/post.js\");\n\n\nvar _marked =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);\n\n\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = 'http://localhost:3065/api';\nfunction rootSaga() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(_post__WEBPACK_IMPORTED_MODULE_4__[\"default\"])]);\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n\n//# sourceURL=webpack:///./sagas/index.js?");

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ \"./node_modules/@babel/runtime-corejs2/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\nvar _marked =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),\n    _marked2 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),\n    _marked3 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),\n    _marked4 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),\n    _marked5 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadComments),\n    _marked6 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadComments),\n    _marked7 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadMainPosts),\n    _marked8 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadMainPosts),\n    _marked9 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadHashtagPosts),\n    _marked10 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadHashtagPosts),\n    _marked11 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUserPosts),\n    _marked12 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUserPosts),\n    _marked13 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(uploadImages),\n    _marked14 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUploadImages),\n    _marked15 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(likePost),\n    _marked16 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLikePost),\n    _marked17 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unlikePost),\n    _marked18 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnlikePost),\n    _marked19 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(retweet),\n    _marked20 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRetweet),\n    _marked21 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),\n    _marked22 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),\n    _marked23 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPost),\n    _marked24 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPost),\n    _marked25 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);\n\n\n\n\n\n\nfunction addPostAPI(postData) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post/', postData, {\n    withCredentials: true\n  });\n}\n\nfunction addPost(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(addPostAPI, action.data);\n\n        case 3:\n          result = _context.sent;\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // post reducer의 데이터 수정\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context.next = 8;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // user reducer의 데이터 수정\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"ADD_POST_TO_ME\"],\n            data: result.data.id\n          });\n\n        case 8:\n          _context.next = 15;\n          break;\n\n        case 10:\n          _context.prev = 10;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(_context.t0);\n          _context.next = 15;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_FAILURE\"],\n            error: _context.t0\n          });\n\n        case 15:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 10]]);\n}\n\nfunction watchAddPost() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_REQUEST\"], addPost);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\nfunction addCommentAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/post/\".concat(data.postId, \"/comment\"), {\n    content: data.content\n  }, {\n    withCredentials: true\n  });\n}\n\nfunction addComment(action) {\n  var _result;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          _context3.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(addCommentAPI, action.data);\n\n        case 3:\n          _result = _context3.sent;\n          _context3.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_SUCCESS\"],\n            data: {\n              postId: action.data.postId,\n              comment: _result.data\n            }\n          });\n\n        case 6:\n          _context3.next = 13;\n          break;\n\n        case 8:\n          _context3.prev = 8;\n          _context3.t0 = _context3[\"catch\"](0);\n          console.error(_context3.t0);\n          _context3.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_FAILURE\"],\n            error: _context3.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3, null, [[0, 8]]);\n}\n\nfunction watchAddComment() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_REQUEST\"], addComment);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nfunction loadCommentsAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/post/\".concat(postId, \"/comments\"));\n}\n\nfunction loadComments(action) {\n  var _result2;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadComments$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.prev = 0;\n          _context5.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loadCommentsAPI, action.data);\n\n        case 3:\n          _result2 = _context5.sent;\n          _context5.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_COMMENTS_SUCCESS\"],\n            data: {\n              postId: action.data,\n              comments: _result2.data\n            }\n          });\n\n        case 6:\n          _context5.next = 13;\n          break;\n\n        case 8:\n          _context5.prev = 8;\n          _context5.t0 = _context5[\"catch\"](0);\n          console.error(_context5.t0);\n          _context5.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_COMMENTS_FAILURE\"],\n            error: _context5.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5, null, [[0, 8]]);\n}\n\nfunction watchLoadComments() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadComments$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_COMMENTS_REQUEST\"], loadComments);\n\n        case 2:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _marked6);\n}\n\nfunction loadMainPostsAPI() {\n  var lastId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/posts?lastId=\".concat(lastId, \"&limit=\").concat(limit));\n}\n\nfunction loadMainPosts(action) {\n  var _result3;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadMainPosts$(_context7) {\n    while (1) {\n      switch (_context7.prev = _context7.next) {\n        case 0:\n          _context7.prev = 0;\n          _context7.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loadMainPostsAPI, action.lastId);\n\n        case 3:\n          _result3 = _context7.sent;\n          _context7.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_MAIN_POSTS_SUCCESS\"],\n            data: _result3.data\n          });\n\n        case 6:\n          _context7.next = 13;\n          break;\n\n        case 8:\n          _context7.prev = 8;\n          _context7.t0 = _context7[\"catch\"](0);\n          console.error(_context7.t0);\n          _context7.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_MAIN_POSTS_FAILURE\"],\n            error: _context7.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context7.stop();\n      }\n    }\n  }, _marked7, null, [[0, 8]]);\n}\n\nfunction watchLoadMainPosts() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadMainPosts$(_context8) {\n    while (1) {\n      switch (_context8.prev = _context8.next) {\n        case 0:\n          _context8.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"throttle\"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_MAIN_POSTS_REQUEST\"], loadMainPosts);\n\n        case 2:\n        case \"end\":\n          return _context8.stop();\n      }\n    }\n  }, _marked8);\n}\n\nfunction loadHashtagPostsAPI(tag) {\n  var lastId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // 한글 처리 : encodeURIComponent\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/hashtag/\".concat(encodeURIComponent(tag), \"?lastId=\").concat(lastId, \"&limit=10\"));\n}\n\nfunction loadHashtagPosts(action) {\n  var _result4;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadHashtagPosts$(_context9) {\n    while (1) {\n      switch (_context9.prev = _context9.next) {\n        case 0:\n          _context9.prev = 0;\n          _context9.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loadHashtagPostsAPI, action.data, action.lastId);\n\n        case 3:\n          _result4 = _context9.sent;\n          _context9.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_HASHTAG_POSTS_SUCCESS\"],\n            data: _result4.data\n          });\n\n        case 6:\n          _context9.next = 13;\n          break;\n\n        case 8:\n          _context9.prev = 8;\n          _context9.t0 = _context9[\"catch\"](0);\n          console.error(_context9.t0);\n          _context9.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_HASHTAG_POSTS_FAILURE\"],\n            error: _context9.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context9.stop();\n      }\n    }\n  }, _marked9, null, [[0, 8]]);\n}\n\nfunction watchLoadHashtagPosts() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadHashtagPosts$(_context10) {\n    while (1) {\n      switch (_context10.prev = _context10.next) {\n        case 0:\n          _context10.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_HASHTAG_POSTS_REQUEST\"], loadHashtagPosts);\n\n        case 2:\n        case \"end\":\n          return _context10.stop();\n      }\n    }\n  }, _marked10);\n}\n\nfunction loadUserPostsAPI(id) {\n  var lastId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/user/\".concat(id || 0, \"/posts?lastId=\").concat(lastId, \"&limit=10\"));\n}\n\nfunction loadUserPosts(action) {\n  var _result5;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUserPosts$(_context11) {\n    while (1) {\n      switch (_context11.prev = _context11.next) {\n        case 0:\n          _context11.prev = 0;\n          _context11.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loadUserPostsAPI, action.data, action.lastId);\n\n        case 3:\n          _result5 = _context11.sent;\n          _context11.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_USER_POSTS_SUCCESS\"],\n            data: _result5.data\n          });\n\n        case 6:\n          _context11.next = 13;\n          break;\n\n        case 8:\n          _context11.prev = 8;\n          _context11.t0 = _context11[\"catch\"](0);\n          console.error(_context11.t0);\n          _context11.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_USER_POSTS_FAILURE\"],\n            error: _context11.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context11.stop();\n      }\n    }\n  }, _marked11, null, [[0, 8]]);\n}\n\nfunction watchLoadUserPosts() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUserPosts$(_context12) {\n    while (1) {\n      switch (_context12.prev = _context12.next) {\n        case 0:\n          _context12.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_USER_POSTS_REQUEST\"], loadUserPosts);\n\n        case 2:\n        case \"end\":\n          return _context12.stop();\n      }\n    }\n  }, _marked12);\n}\n\nfunction uploadImagesAPI(formData) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post/images', formData, {\n    withCredentials: true\n  });\n}\n\nfunction uploadImages(action) {\n  var _result6;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function uploadImages$(_context13) {\n    while (1) {\n      switch (_context13.prev = _context13.next) {\n        case 0:\n          _context13.prev = 0;\n          _context13.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(uploadImagesAPI, action.data);\n\n        case 3:\n          _result6 = _context13.sent;\n          _context13.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"UPLOAD_IMAGES_SUCCESS\"],\n            data: _result6.data // 이미지를 업로드하면 서버에서 업로드된 이미지 위치 주소를 알려줌\n\n          });\n\n        case 6:\n          _context13.next = 13;\n          break;\n\n        case 8:\n          _context13.prev = 8;\n          _context13.t0 = _context13[\"catch\"](0);\n          console.error(_context13.t0);\n          _context13.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"UPLOAD_IMAGES_FAILURE\"],\n            error: _context13.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context13.stop();\n      }\n    }\n  }, _marked13, null, [[0, 8]]);\n}\n\nfunction watchUploadImages() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUploadImages$(_context14) {\n    while (1) {\n      switch (_context14.prev = _context14.next) {\n        case 0:\n          _context14.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"UPLOAD_IMAGES_REQUEST\"], uploadImages);\n\n        case 2:\n        case \"end\":\n          return _context14.stop();\n      }\n    }\n  }, _marked14);\n}\n\nfunction likePostAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/post/\".concat(postId, \"/like\"), {}, {\n    withCredentials: true\n  });\n}\n\nfunction likePost(action) {\n  var _result7;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function likePost$(_context15) {\n    while (1) {\n      switch (_context15.prev = _context15.next) {\n        case 0:\n          _context15.prev = 0;\n          _context15.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(likePostAPI, action.data);\n\n        case 3:\n          _result7 = _context15.sent;\n          _context15.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LIKE_POST_SUCCESS\"],\n            data: {\n              postId: action.data,\n              userId: _result7.data.userId\n            }\n          });\n\n        case 6:\n          _context15.next = 13;\n          break;\n\n        case 8:\n          _context15.prev = 8;\n          _context15.t0 = _context15[\"catch\"](0);\n          console.error(_context15.t0);\n          _context15.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LIKE_POST_FAILURE\"],\n            error: _context15.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context15.stop();\n      }\n    }\n  }, _marked15, null, [[0, 8]]);\n}\n\nfunction watchLikePost() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikePost$(_context16) {\n    while (1) {\n      switch (_context16.prev = _context16.next) {\n        case 0:\n          _context16.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LIKE_POST_REQUEST\"], likePost);\n\n        case 2:\n        case \"end\":\n          return _context16.stop();\n      }\n    }\n  }, _marked16);\n}\n\nfunction unlikePostAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(\"/post/\".concat(postId, \"/like\"), {\n    withCredentials: true\n  });\n}\n\nfunction unlikePost(action) {\n  var _result8;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlikePost$(_context17) {\n    while (1) {\n      switch (_context17.prev = _context17.next) {\n        case 0:\n          _context17.prev = 0;\n          _context17.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(unlikePostAPI, action.data);\n\n        case 3:\n          _result8 = _context17.sent;\n          _context17.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"UNLIKE_POST_SUCCESS\"],\n            data: {\n              postId: action.data,\n              userId: _result8.data.userId\n            }\n          });\n\n        case 6:\n          _context17.next = 13;\n          break;\n\n        case 8:\n          _context17.prev = 8;\n          _context17.t0 = _context17[\"catch\"](0);\n          console.error(_context17.t0);\n          _context17.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"UNLIKE_POST_FAILURE\"],\n            error: _context17.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context17.stop();\n      }\n    }\n  }, _marked17, null, [[0, 8]]);\n}\n\nfunction watchUnlikePost() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnlikePost$(_context18) {\n    while (1) {\n      switch (_context18.prev = _context18.next) {\n        case 0:\n          _context18.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"UNLIKE_POST_REQUEST\"], unlikePost);\n\n        case 2:\n        case \"end\":\n          return _context18.stop();\n      }\n    }\n  }, _marked18);\n}\n\nfunction retweetAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/post/\".concat(postId, \"/retweet\"), {}, {\n    withCredentials: true\n  });\n}\n\nfunction retweet(action) {\n  var _result9;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function retweet$(_context19) {\n    while (1) {\n      switch (_context19.prev = _context19.next) {\n        case 0:\n          _context19.prev = 0;\n          _context19.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(retweetAPI, action.data);\n\n        case 3:\n          _result9 = _context19.sent;\n          _context19.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"RETWEET_SUCCESS\"],\n            data: _result9.data\n          });\n\n        case 6:\n          _context19.next = 14;\n          break;\n\n        case 8:\n          _context19.prev = 8;\n          _context19.t0 = _context19[\"catch\"](0);\n          console.error(_context19.t0);\n          _context19.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"RETWEET_FAILURE\"],\n            error: _context19.t0\n          });\n\n        case 13:\n          alert(_context19.t0.response && _context19.t0.response.data);\n\n        case 14:\n        case \"end\":\n          return _context19.stop();\n      }\n    }\n  }, _marked19, null, [[0, 8]]);\n}\n\nfunction watchRetweet() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRetweet$(_context20) {\n    while (1) {\n      switch (_context20.prev = _context20.next) {\n        case 0:\n          _context20.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"RETWEET_REQUEST\"], retweet);\n\n        case 2:\n        case \"end\":\n          return _context20.stop();\n      }\n    }\n  }, _marked20);\n}\n\nfunction removePostAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(\"/post/\".concat(postId), {\n    withCredentials: true\n  });\n}\n\nfunction removePost(action) {\n  var _result10;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context21) {\n    while (1) {\n      switch (_context21.prev = _context21.next) {\n        case 0:\n          _context21.prev = 0;\n          _context21.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(removePostAPI, action.data);\n\n        case 3:\n          _result10 = _context21.sent;\n          _context21.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_POST_SUCCESS\"],\n            data: _result10.data\n          });\n\n        case 6:\n          console.log('result.data : ', _result10.data);\n          _context21.next = 9;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"REMOVE_POST_OF_ME\"],\n            data: _result10.data\n          });\n\n        case 9:\n          _context21.next = 16;\n          break;\n\n        case 11:\n          _context21.prev = 11;\n          _context21.t0 = _context21[\"catch\"](0);\n          console.error(_context21.t0);\n          _context21.next = 16;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_POST_FAILURE\"],\n            error: _context21.t0\n          });\n\n        case 16:\n        case \"end\":\n          return _context21.stop();\n      }\n    }\n  }, _marked21, null, [[0, 11]]);\n}\n\nfunction watchRemovePost() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context22) {\n    while (1) {\n      switch (_context22.prev = _context22.next) {\n        case 0:\n          _context22.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_POST_REQUEST\"], removePost);\n\n        case 2:\n        case \"end\":\n          return _context22.stop();\n      }\n    }\n  }, _marked22);\n}\n\nfunction loadPostAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/post/\".concat(postId));\n}\n\nfunction loadPost(action) {\n  var _result11;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPost$(_context23) {\n    while (1) {\n      switch (_context23.prev = _context23.next) {\n        case 0:\n          _context23.prev = 0;\n          _context23.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loadPostAPI, action.data);\n\n        case 3:\n          _result11 = _context23.sent;\n          _context23.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_POST_SUCCESS\"],\n            data: _result11.data\n          });\n\n        case 6:\n          _context23.next = 13;\n          break;\n\n        case 8:\n          _context23.prev = 8;\n          _context23.t0 = _context23[\"catch\"](0);\n          console.error(_context23.t0);\n          _context23.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_POST_FAILURE\"],\n            error: _context23.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context23.stop();\n      }\n    }\n  }, _marked23, null, [[0, 8]]);\n}\n\nfunction watchLoadPost() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPost$(_context24) {\n    while (1) {\n      switch (_context24.prev = _context24.next) {\n        case 0:\n          _context24.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_POST_REQUEST\"], loadPost);\n\n        case 2:\n        case \"end\":\n          return _context24.stop();\n      }\n    }\n  }, _marked24);\n}\n\nfunction postSaga() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context25) {\n    while (1) {\n      switch (_context25.prev = _context25.next) {\n        case 0:\n          _context25.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLoadMainPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLoadComments), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLoadPost)]);\n\n        case 2:\n        case \"end\":\n          return _context25.stop();\n      }\n    }\n  }, _marked25);\n}\n\n//# sourceURL=webpack:///./sagas/post.js?");

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ \"./node_modules/@babel/runtime-corejs2/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\nvar _marked =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),\n    _marked2 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),\n    _marked3 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),\n    _marked4 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),\n    _marked5 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),\n    _marked6 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),\n    _marked7 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),\n    _marked8 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),\n    _marked9 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),\n    _marked10 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),\n    _marked11 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),\n    _marked12 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),\n    _marked13 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowers),\n    _marked14 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowers),\n    _marked15 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowings),\n    _marked16 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowings),\n    _marked17 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeFollower),\n    _marked18 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemoveFollower),\n    _marked19 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(editNickname),\n    _marked20 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchEditNickname),\n    _marked21 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);\n\n\n\n\n/**\n * 로그인\n */\n\nfunction logInAPI(loginData) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', loginData, {\n    // 이걸 적어줘야 서로 쿠키를 주고받을 수 있게됨(프론트 입장)\n    // 서버에선 cors가 담당\n    withCredentials: true\n  });\n}\n\nfunction logIn(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(logInAPI, action.data);\n\n        case 3:\n          result = _context.sent;\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_IN_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context.next = 13;\n          break;\n\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(_context.t0);\n          _context.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_IN_FAILURE\"],\n            reason: _context.t0.response && _context.t0.response.data\n          });\n\n        case 13:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 8]]);\n}\n\nfunction watchLogIn() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_IN_REQUEST\"], logIn);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n/**\n * 로그아웃\n */\n\n\nfunction logOutAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout', {}, {\n    withCredentials: true\n  });\n}\n\nfunction logOut(action) {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          _context3.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(logOutAPI, action.data);\n\n        case 3:\n          _context3.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_OUT_SUCCESS\"]\n          });\n\n        case 5:\n          _context3.next = 12;\n          break;\n\n        case 7:\n          _context3.prev = 7;\n          _context3.t0 = _context3[\"catch\"](0);\n          console.error(_context3.t0);\n          _context3.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_OUT_FAILURE\"]\n          });\n\n        case 12:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3, null, [[0, 7]]);\n}\n\nfunction watchLogOut() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_OUT_REQUEST\"], logOut);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n/**\n * 사용자 정보 조회\n */\n\n\nfunction loadUserAPI(userId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(userId ? \"/user/\".concat(userId) : '/user/', {\n    withCredentials: true\n  });\n}\n\nfunction loadUser(action) {\n  var _result;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.prev = 0;\n          _context5.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(loadUserAPI, action.data);\n\n        case 3:\n          _result = _context5.sent;\n          _context5.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_USER_SUCCESS\"],\n            data: _result.data,\n            me: !action.data\n          });\n\n        case 6:\n          _context5.next = 13;\n          break;\n\n        case 8:\n          _context5.prev = 8;\n          _context5.t0 = _context5[\"catch\"](0);\n          console.error(_context5.t0);\n          _context5.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_USER_FAILURE\"],\n            error: _context5.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5, null, [[0, 8]]);\n}\n\nfunction watchLoadUser() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_USER_REQUEST\"], loadUser);\n\n        case 2:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _marked6);\n}\n/**\n * 회원 가입\n */\n\n\nfunction signUpAPI(signUpData) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/', signUpData);\n}\n\nfunction signUp(action) {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context7) {\n    while (1) {\n      switch (_context7.prev = _context7.next) {\n        case 0:\n          _context7.prev = 0;\n          _context7.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(signUpAPI, action.data);\n\n        case 3:\n          _context7.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"SIGN_UP_SUCCESS\"]\n          });\n\n        case 5:\n          _context7.next = 12;\n          break;\n\n        case 7:\n          _context7.prev = 7;\n          _context7.t0 = _context7[\"catch\"](0);\n          console.error(_context7.t0);\n          _context7.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"SIGN_UP_FAILURE\"],\n            error: _context7.t0\n          });\n\n        case 12:\n        case \"end\":\n          return _context7.stop();\n      }\n    }\n  }, _marked7, null, [[0, 7]]);\n}\n\nfunction watchSignUp() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context8) {\n    while (1) {\n      switch (_context8.prev = _context8.next) {\n        case 0:\n          _context8.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"SIGN_UP_REQUEST\"], signUp);\n\n        case 2:\n        case \"end\":\n          return _context8.stop();\n      }\n    }\n  }, _marked8);\n}\n\nfunction followAPI(userId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"/user/\".concat(userId, \"/follow\"), {}, {\n    withCredentials: true\n  });\n}\n\nfunction follow(action) {\n  var _result2;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context9) {\n    while (1) {\n      switch (_context9.prev = _context9.next) {\n        case 0:\n          _context9.prev = 0;\n          _context9.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(followAPI, action.data);\n\n        case 3:\n          _result2 = _context9.sent;\n          _context9.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"FOLLOW_USER_SUCCESS\"],\n            data: _result2.data\n          });\n\n        case 6:\n          _context9.next = 13;\n          break;\n\n        case 8:\n          _context9.prev = 8;\n          _context9.t0 = _context9[\"catch\"](0);\n          console.error(_context9.t0);\n          _context9.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"FOLLOW_USER_FAILURE\"],\n            error: _context9.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context9.stop();\n      }\n    }\n  }, _marked9, null, [[0, 8]]);\n}\n\nfunction watchFollow() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context10) {\n    while (1) {\n      switch (_context10.prev = _context10.next) {\n        case 0:\n          _context10.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"FOLLOW_USER_REQUEST\"], follow);\n\n        case 2:\n        case \"end\":\n          return _context10.stop();\n      }\n    }\n  }, _marked10);\n}\n\nfunction unfollowAPI(userId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(\"/user/\".concat(userId, \"/follow\"), {\n    withCredentials: true\n  });\n}\n\nfunction unfollow(action) {\n  var _result3;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context11) {\n    while (1) {\n      switch (_context11.prev = _context11.next) {\n        case 0:\n          _context11.prev = 0;\n          _context11.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(unfollowAPI, action.data);\n\n        case 3:\n          _result3 = _context11.sent;\n          _context11.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"UNFOLLOW_USER_SUCCESS\"],\n            data: _result3.data\n          });\n\n        case 6:\n          _context11.next = 13;\n          break;\n\n        case 8:\n          _context11.prev = 8;\n          _context11.t0 = _context11[\"catch\"](0);\n          console.error(_context11.t0);\n          _context11.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"UNFOLLOW_USER_FAILURE\"],\n            error: _context11.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context11.stop();\n      }\n    }\n  }, _marked11, null, [[0, 8]]);\n}\n\nfunction watchUnfollow() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context12) {\n    while (1) {\n      switch (_context12.prev = _context12.next) {\n        case 0:\n          _context12.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"UNFOLLOW_USER_REQUEST\"], unfollow);\n\n        case 2:\n        case \"end\":\n          return _context12.stop();\n      }\n    }\n  }, _marked12);\n} // null일때는 기본값이 적용이 안되서 userId = 0 이런식으로 하면 안되고\n// 아래처럼 해야함\n// 기존 주소를 파기하지 않고 새로운 파라미터를 보내고싶다면 아래처럼 ㄲ\n\n\nfunction loadFollowersAPI(userId) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"/user/\".concat(userId || 0, \"/followers?offset=\").concat(offset, \"&limit=\").concat(limit), {\n    withCredentials: true\n  });\n}\n\nfunction loadFollowers(action) {\n  var _result4;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowers$(_context13) {\n    while (1) {\n      switch (_context13.prev = _context13.next) {\n        case 0:\n          _context13.prev = 0;\n          _context13.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(loadFollowersAPI, action.data, action.offset);\n\n        case 3:\n          _result4 = _context13.sent;\n          _context13.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_FOLLOWERS_SUCCESS\"],\n            data: _result4.data\n          });\n\n        case 6:\n          _context13.next = 13;\n          break;\n\n        case 8:\n          _context13.prev = 8;\n          _context13.t0 = _context13[\"catch\"](0);\n          console.error(_context13.t0);\n          _context13.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_FOLLOWERS_FAILURE\"],\n            error: _context13.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context13.stop();\n      }\n    }\n  }, _marked13, null, [[0, 8]]);\n}\n\nfunction watchLoadFollowers() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowers$(_context14) {\n    while (1) {\n      switch (_context14.prev = _context14.next) {\n        case 0:\n          _context14.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_FOLLOWERS_REQUEST\"], loadFollowers);\n\n        case 2:\n        case \"end\":\n          return _context14.stop();\n      }\n    }\n  }, _marked14);\n}\n\nfunction loadFollowingsAPI(userId) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"/user/\".concat(userId || 0, \"/followings?offset=\").concat(offset, \"&limit=\").concat(limit), {\n    withCredentials: true\n  });\n}\n\nfunction loadFollowings(action) {\n  var _result5;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowings$(_context15) {\n    while (1) {\n      switch (_context15.prev = _context15.next) {\n        case 0:\n          _context15.prev = 0;\n          _context15.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(loadFollowingsAPI, action.data, action.offset);\n\n        case 3:\n          _result5 = _context15.sent;\n          _context15.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_FOLLOWINGS_SUCCESS\"],\n            data: _result5.data\n          });\n\n        case 6:\n          _context15.next = 13;\n          break;\n\n        case 8:\n          _context15.prev = 8;\n          _context15.t0 = _context15[\"catch\"](0);\n          console.error(_context15.t0);\n          _context15.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_FOLLOWINGS_FAILURE\"],\n            error: _context15.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context15.stop();\n      }\n    }\n  }, _marked15, null, [[0, 8]]);\n}\n\nfunction watchLoadFollowings() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowings$(_context16) {\n    while (1) {\n      switch (_context16.prev = _context16.next) {\n        case 0:\n          _context16.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_FOLLOWINGS_REQUEST\"], loadFollowings);\n\n        case 2:\n        case \"end\":\n          return _context16.stop();\n      }\n    }\n  }, _marked16);\n}\n\nfunction removeFollowerAPI(userId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(\"/user/\".concat(userId, \"/follower\"), {\n    withCredentials: true\n  });\n}\n\nfunction removeFollower(action) {\n  var _result6;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeFollower$(_context17) {\n    while (1) {\n      switch (_context17.prev = _context17.next) {\n        case 0:\n          _context17.prev = 0;\n          _context17.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(removeFollowerAPI, action.data);\n\n        case 3:\n          _result6 = _context17.sent;\n          _context17.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_FOLLOWER_SUCCESS\"],\n            data: _result6.data\n          });\n\n        case 6:\n          _context17.next = 13;\n          break;\n\n        case 8:\n          _context17.prev = 8;\n          _context17.t0 = _context17[\"catch\"](0);\n          console.error(_context17.t0);\n          _context17.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_FOLLOWER_FAILURE\"],\n            error: _context17.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context17.stop();\n      }\n    }\n  }, _marked17, null, [[0, 8]]);\n}\n\nfunction watchRemoveFollower() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemoveFollower$(_context18) {\n    while (1) {\n      switch (_context18.prev = _context18.next) {\n        case 0:\n          _context18.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_FOLLOWER_REQUEST\"], removeFollower);\n\n        case 2:\n        case \"end\":\n          return _context18.stop();\n      }\n    }\n  }, _marked18);\n}\n\nfunction editNicknameAPI(nickname) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {\n    nickname: nickname\n  }, {\n    withCredentials: true\n  });\n}\n\nfunction editNickname(action) {\n  var _result7;\n\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function editNickname$(_context19) {\n    while (1) {\n      switch (_context19.prev = _context19.next) {\n        case 0:\n          _context19.prev = 0;\n          _context19.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(editNicknameAPI, action.data);\n\n        case 3:\n          _result7 = _context19.sent;\n          _context19.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"EDIT_NICKNAME_SUCCESS\"],\n            data: _result7.data\n          });\n\n        case 6:\n          _context19.next = 13;\n          break;\n\n        case 8:\n          _context19.prev = 8;\n          _context19.t0 = _context19[\"catch\"](0);\n          console.error(_context19.t0);\n          _context19.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"EDIT_NICKNAME_FAILURE\"],\n            error: _context19.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context19.stop();\n      }\n    }\n  }, _marked19, null, [[0, 8]]);\n}\n\nfunction watchEditNickname() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchEditNickname$(_context20) {\n    while (1) {\n      switch (_context20.prev = _context20.next) {\n        case 0:\n          _context20.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"EDIT_NICKNAME_REQUEST\"], editNickname);\n\n        case 2:\n        case \"end\":\n          return _context20.stop();\n      }\n    }\n  }, _marked20);\n}\n\nfunction userSaga() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context21) {\n    while (1) {\n      switch (_context21.prev = _context21.next) {\n        case 0:\n          _context21.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchEditNickname)]);\n\n        case 2:\n        case \"end\":\n          return _context21.stop();\n      }\n    }\n  }, _marked21);\n}\n\n//# sourceURL=webpack:///./sagas/user.js?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! private-next-pages/_app.js */\"./pages/_app.js\");\n\n\n//# sourceURL=webpack:///multi_private-next-pages/_app.js?");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");\n\n//# sourceURL=webpack:///external_%22antd%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/array/from\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/array/from%22?");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/array/is-array\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/array/is-array%22?");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/get-iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/get-iterator%22?");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/is-iterable\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/is-iterable%22?");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/json/stringify\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/json/stringify%22?");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/assign\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/assign%22?");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/create\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/create%22?");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/define-properties\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/define-properties%22?");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/define-property\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/define-property%22?");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/freeze\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/freeze%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-own-property-descriptor\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-own-property-descriptor%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-own-property-symbols\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-own-property-symbols%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-prototype-of\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-prototype-of%22?");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/keys\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/keys%22?");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/set-prototype-of\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/set-prototype-of%22?");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/promise\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/promise%22?");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/symbol\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/symbol%22?");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/symbol/iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/symbol/iterator%22?");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");\n\n//# sourceURL=webpack:///external_%22immer%22?");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");\n\n//# sourceURL=webpack:///external_%22next-redux-saga%22?");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");\n\n//# sourceURL=webpack:///external_%22next-redux-wrapper%22?");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-server/dist/lib/utils\");\n\n//# sourceURL=webpack:///external_%22next-server/dist/lib/utils%22?");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");\n\n//# sourceURL=webpack:///external_%22next/router%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types-exact\");\n\n//# sourceURL=webpack:///external_%22prop-types-exact%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ })

/******/ });