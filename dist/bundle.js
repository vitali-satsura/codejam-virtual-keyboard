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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: ROW1, ROW2, ROW3, ROW4, ROW5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROW1\", function() { return ROW1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROW2\", function() { return ROW2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROW3\", function() { return ROW3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROW4\", function() { return ROW4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROW5\", function() { return ROW5; });\nconst ROW1 = [\r\n  ['Backquote', '`', '~', 'ё', 'Ё'],\r\n  ['Digit1', '1', '!', '1', '!'],\r\n  ['Digit2', '2', '@', '2', '\"'],\r\n  ['Digit3', '3', '#', '3', '№'],\r\n  ['Digit4', '4', '$', '4', ';'],\r\n  ['Digit5', '5', '%', '5', '%'],\r\n  ['Digit6', '6', '^', '6', ':'],\r\n  ['Digit7', '7', '&', '7', '?'],\r\n  ['Digit8', '8', '*', '8', '*'],\r\n  ['Digit9', '9', '(', '9', '('],\r\n  ['Digit0', '0', ')', '0', ')'],\r\n  ['Digit-', '-', '_', '-', '_'],\r\n  ['Equal=', '=', '+', '=', '+'],\r\n  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']\r\n];\r\n\r\nconst ROW2 = [\r\n  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],\r\n  ['KeyQ', 'q', 'Q', 'й', 'Й'],\r\n  ['KeyW', 'w', 'W', 'ц', 'Ц'],\r\n  ['KeyE', 'e', 'E', 'у', 'У'],\r\n  ['KeyR', 'r', 'R', 'к', 'К'],\r\n  ['KeyT', 't', 'T', 'е', 'Е'],\r\n  ['KeyY', 'y', 'Y', 'н', 'Н'],\r\n  ['KeyU', 'u', 'U', 'г', 'Г'],\r\n  ['KeyI', 'i', 'I', 'ш', 'Ш'],\r\n  ['KeyO', 'o', 'O', 'щ', 'Щ'],\r\n  ['KeyP', 'p', 'P', 'з', 'З'],\r\n  ['BracketLeft', '[', '{', 'х', 'Х'],\r\n  ['BracketRight', ']', '}', 'ъ', 'Ъ'],\r\n  ['Backslash', '\\\\', '|', '\\\\', '/'],\r\n  ['Delete', 'Del', 'Del', 'Del', 'Del']\r\n];\r\n\r\nconst ROW3 = [\r\n  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],\r\n  ['KeyA', 'a', 'A', 'ф', 'Ф'],\r\n  ['KeyS', 's', 'S', 'ы', 'Ы'],\r\n  ['KeyD', 'd', 'D', 'в', 'В'],\r\n  ['KeyF', 'f', 'F', 'а', 'А'],\r\n  ['KeyG', 'g', 'G', 'п', 'П'],\r\n  ['KeyH', 'h', 'H', 'р', 'Р'],\r\n  ['KeyJ', 'j', 'J', 'о', 'О'],\r\n  ['KeyK', 'k', 'K', 'л', 'Л'],\r\n  ['KeyL', 'l', 'L', 'д', 'Д'],\r\n  ['Semicolon', ';', ':', 'ж', 'Ж'],\r\n  ['Quote', \"'\", '\"', 'э', 'Э'],\r\n  ['Enter', 'Enter', 'Enter', 'Enter', 'Enter']\r\n];\r\n\r\nconst ROW4 = [\r\n  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],\r\n  ['KeyZ', 'z', 'Z', 'я', 'Я'],\r\n  ['KeyX', 'x', 'X', 'ч', 'Ч'],\r\n  ['KeyC', 'c', 'C', 'с', 'С'],\r\n  ['KeyV', 'v', 'V', 'м', 'М'],\r\n  ['KeyB', 'b', 'B', 'и', 'И'],\r\n  ['KeyN', 'n', 'N', 'т', 'Т'],\r\n  ['KeyM', 'm', 'M', 'ь', 'Ь'],\r\n  ['Comma', ',', '<', 'б', 'Б'],\r\n  ['Period', '.', '>', 'ю', 'Ю'],\r\n  ['Slash', '/', '?', '.', ','],\r\n  ['ArrowUp', '\\u25B2', '&#9650;', '&#9650;', '&#9650;'],\r\n  ['ShiftRight', \"Shift\", 'Shift', 'Shift', 'Shift']\r\n];\r\n\r\nconst ROW5 = [\r\n  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],\r\n  ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],\r\n  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],\r\n  ['Space', 'Space', 'Space', 'Space', 'Space'],\r\n  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],\r\n  ['ArrowLeft', '&#9664;', '&#9664;', '&#9664;', '&#9664;'],\r\n  ['ArrowDown', '&#9660;', '&#9660;', '&#9660;', '&#9660;'],\r\n  ['ArrowRight', '&#9654;', '&#9654;', '&#9654;', '&#9654;'],\r\n  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']\r\n];\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/normalize.css/normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ \"./src/js/keyboard.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n  const keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  keyboard.init();\r\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n\n\n\nclass Keyboard {\n  constructor() {\n    this.lang = '';\n    this.isShiftPressed = false;\n    this.caseState = 'lower';\n  }\n\n  init() {\n    this.language('eng');\n\n    document.body.insertAdjacentHTML('afterBegin',\n      '<div class=\"container\"><textarea id=\"textarea\" class=\"textarea\" rows=\"5\" cols=\"50\"></textarea><div id=\"keyboard\" class=\"keyboard\"></div></div>');\n\n    const kb = document.getElementById('keyboard');\n    kb.appendChild(this.createKeys(_data__WEBPACK_IMPORTED_MODULE_0__[\"ROW1\"]));\n    kb.appendChild(this.createKeys(_data__WEBPACK_IMPORTED_MODULE_0__[\"ROW2\"]));\n    kb.appendChild(this.createKeys(_data__WEBPACK_IMPORTED_MODULE_0__[\"ROW3\"]));\n    kb.appendChild(this.createKeys(_data__WEBPACK_IMPORTED_MODULE_0__[\"ROW4\"]));\n    kb.appendChild(this.createKeys(_data__WEBPACK_IMPORTED_MODULE_0__[\"ROW5\"]));\n\n    this.keyDown();\n    this.keyUp();\n  }\n\n  createKeys(keyRow) {\n    const fragment = document.createDocumentFragment();\n\n    const row = document.createElement('div');\n    row.classList.add('row');\n\n    keyRow.forEach((key) => {\n      const keyElement = document.createElement('div');\n      keyElement.classList.add('key');\n      if (this.lang === 'eng') {\n        keyElement.insertAdjacentHTML('afterBegin',\n          `<span class=\"rus lower hidden\">${key[3]}</span><span class=\"rus upper hidden\">${key[4]}</span><span class=\"eng lower\">${key[1]}</span><span class=\"eng upper hidden\">${key[2]}</span>`);\n      } else {\n        keyElement.insertAdjacentHTML('afterBegin',\n          `<span class=\"rus lower\">${key[3]}</span><span class=\"rus upper hidden\">${key[4]}</span><span class=\"eng lower hidden\">${key[1]}</span><span class=\"eng upper hidden\">${key[2]}</span>`);\n      }\n\n      keyElement.classList.add(key[0]);\n\n\n      row.appendChild(keyElement);\n      fragment.appendChild(row);\n      this.mouseClick(keyElement, key[0]);\n    });\n\n    return fragment;\n  }\n\n  language(language) {\n    if (localStorage.getItem('language')) {\n      this.lang = localStorage.getItem('language');\n    } else {\n      localStorage.setItem('language', language);\n      this.lang = language;\n    }\n  }\n\n  keyDown() {\n    document.addEventListener('keydown', (event) => {\n      event.preventDefault();\n      const textarea = document.getElementById('textarea');\n      textarea.focus();\n      const keyElement = document.querySelector(`.${event.code}`);\n      const text = keyElement.querySelector(':not(.hidden)').textContent;\n\n      Keyboard.addActiveState(keyElement);\n\n      switch (event.code) {\n        case 'Backspace':\n          textarea.value = textarea.value.slice(0, textarea.value.length - 1);\n          break;\n\n        case 'CapsLock':\n          this.toggleCase();\n          break;\n\n        case 'Tab':\n          textarea.value += '\\t';\n          break;\n\n        case 'Delete':\n          if (textarea.selectionStart < textarea.value.length) {\n            const tmp = textarea.selectionStart;\n            textarea.value = textarea.value.slice(0, textarea.selectionStart)\n              + textarea.value.slice(textarea.selectionEnd + 1, textarea.value.length);\n            textarea.selectionStart = tmp;\n          }\n          break;\n\n        case 'Enter':\n          textarea.value += '\\n';\n          break;\n\n        case 'Space':\n          textarea.value += ' ';\n          break;\n\n        case 'ShiftRight':\n          if (!this.isShiftPressed) {\n            this.isShiftPressed = true;\n            this.toggleCase();\n          }\n          break;\n\n        case 'ShiftLeft':\n          if (!this.isShiftPressed) {\n            this.isShiftPressed = true;\n            this.toggleCase();\n          }\n          break;\n\n        case 'ControlLeft':\n          break;\n\n        case 'ControlRight':\n          break;\n\n        case 'AltLeft':\n          break;\n\n        case 'AltRight':\n          break;\n\n        case 'ArrowLeft':\n          textarea.selectionEnd -= 1;\n          break;\n\n        case 'ArrowRight':\n          textarea.selectionStart += 1;\n          break;\n\n        case 'ArrowUp':\n\n          break;\n\n        case 'ArrowDown':\n          break;\n\n        case 'MetaLeft':\n          break;\n\n        default:\n          textarea.value += text;\n          break;\n      }\n\n      if (event.ctrlKey && event.altKey) {\n        this.changeLanguage();\n      }\n    });\n  }\n\n  keyUp() {\n    document.addEventListener('keyup', (event) => {\n      const keyElement = document.querySelector(`.${event.code}.active`);\n\n      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\n        this.toggleCase();\n        this.isShiftPressed = false;\n      }\n      Keyboard.removeActiveState(keyElement);\n    });\n  }\n\n  static addActiveState(element) {\n    element.classList.add('active');\n  }\n\n  static removeActiveState(element) {\n    element.classList.remove('active');\n  }\n\n  mouseClick(keyElement, key) {\n    keyElement.addEventListener('click', () => {\n      const textarea = document.getElementById('textarea');\n      textarea.focus();\n      const text = keyElement.querySelector(':not(.hidden)').textContent;\n      switch (key) {\n        case 'Backspace':\n          textarea.value = textarea.value.slice(0, textarea.value.length - 1);\n          break;\n\n        case 'CapsLock':\n          this.toggleCase();\n          break;\n\n        case 'Tab':\n          textarea.value += '\\t';\n          break;\n\n        case 'Delete':\n          if (textarea.selectionStart < textarea.value.length) {\n            const tmp = textarea.selectionStart;\n            textarea.value = textarea.value.slice(0, textarea.selectionStart)\n              + textarea.value.slice(textarea.selectionStart + 1, textarea.value.length);\n            textarea.selectionStart = tmp;\n          }\n          break;\n\n        case 'Enter':\n          textarea.value += '\\n';\n          break;\n\n        case 'Space':\n          textarea.value += ' ';\n          break;\n\n        case 'ShiftRight':\n          break;\n\n        case 'ShiftLeft':\n          break;\n\n        case 'ControlLeft':\n          break;\n\n        case 'ControlRight':\n          break;\n\n        case 'AltLeft':\n          break;\n\n        case 'AltRight':\n          break;\n\n        case 'ArrowLeft':\n          textarea.selectionEnd -= 1;\n          break;\n\n        case 'ArrowRight':\n          textarea.selectionStart += 1;\n          break;\n\n        case 'ArrowUp':\n          textarea.selectionEnd -= textarea.length;\n          break;\n\n        case 'ArrowDown':\n          break;\n\n        case 'MetaLeft':\n          break;\n\n        default:\n          textarea.value += text;\n          break;\n      }\n    });\n  }\n\n  toggleCase() {\n    const spanElements = document.querySelectorAll(`.${this.lang}`);\n    spanElements.forEach((element) => {\n      element.classList.toggle('hidden');\n    });\n\n    this.caseState = (this.caseState === 'upper') ? 'lower' : 'upper';\n  }\n\n  changeLanguage() {\n    const currentElements = document.querySelectorAll(`.${this.lang}.${this.caseState}`);\n    currentElements.forEach((element) => {\n      element.classList.toggle('hidden');\n    });\n\n    if (this.lang === 'eng') {\n      this.lang = 'rus';\n      localStorage.setItem('language', 'rus');\n    } else {\n      this.lang = 'eng';\n      localStorage.setItem('language', 'eng');\n    }\n\n    const hiddenElements = document.querySelectorAll(`.${this.lang}.${this.caseState}`);\n    hiddenElements.forEach((element) => {\n      element.classList.toggle('hidden');\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keyboard);\n\n\n//# sourceURL=webpack:///./src/js/keyboard.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });