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

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(newNode, pivot) {\n    // console.log('将', newNode, '插入到', pivot, 'pivot之前')\n    const container = document.createElement(newNode.sel)\n    if (newNode.text !== '' && (newNode.children && newNode.children.length === 0 || newNode.children === undefined)) {\n        container.innerText = newNode.text\n        // console.log('pivot', pivot.parentNode)\n        // newNode.elm = container // container 为 h1 元素节点 \n        // parentNode 节点的父节点\n        // insertBefore（a, b） 参数一：插入的新节点， 参数二：插入新节点到哪个位置的标识\n        // pivot.parentNode.insertBefore(container, pivot) 暂不在createDom中插入，如果有children，就没有标杆，所以当children为文本， 就可以return出去，交给patch\n    } else if (newNode.children && newNode.children.length > 0) {\n        for (let i = 0; i < newNode.children.length; i ++) {\n            // console.log('newNode.children[i]', newNode.children[i]);\n            const newLiDom = createElement(newNode.children[i])\n            // console.log('newLiDom', newLiDom)\n            container.appendChild(newLiDom)\n        }\n    }\n\n    console.log('container', container);\n    newNode.elm = container\n    return  newNode.elm\n}\n\n//# sourceURL=webpack://snabbdom/./src/createElement.js?");

/***/ }),

/***/ "./src/h.js":
/*!******************!*\
  !*** ./src/h.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/vnode.js\");\n// 'div', {}, ['p', {}, '我是p标签']\n// 'div', {}, h()\n// 'div', {}, '文本'\n//  栗子1:\n// import vnode from './vnode'\n// console.log(vnode('ul', {}, [vnode('li', {}, [ ], '我是文本', 'li') ], '我是文本', 'ul'))\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(sel, data, c) {\n    console.log('c', c)\n    if (arguments.length !== 3) {\n        throw  new Error('需要输入够三个参数')\n    }\n    if (typeof c === 'string') {\n        console.log('2222', (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.default)(sel, data, undefined, c, undefined))\n        return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.default)(sel, data, undefined, c, undefined)\n    } else if (Array.isArray(c)) {\n        const children = []\n\n        for (let i = 0; i < c.length; i++) {\n            if (!(Object.prototype.toString.call(c[i]) === '[object Object]' && c[i].hasOwnProperty('sel'))) {\n                throw new Error('传入的参数有误')\n            }\n            children.push(c[i])\n        }\n        return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.default)(sel, data, children, undefined, undefined)\n    } else if (Object.prototype.toString.call(c) === '[object Object]' && c.hasOwnProperty('sel')) {\n\n        return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.default)(sel, data, [c], undefined, undefined)\n    } else{\n        throw new Error('传入的参数有误')\n    }\n\n}\n\n\n//# sourceURL=webpack://snabbdom/./src/h.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./src/h.js\");\n/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch */ \"./src/patch.js\");\n\n\n\nconst container = document.getElementById('container')\n\n// const vnode = h('h1', {}, '我是来上树的')\nconst vnode = (0,_h__WEBPACK_IMPORTED_MODULE_0__.default)('ul', {}, [\n    (0,_h__WEBPACK_IMPORTED_MODULE_0__.default)('li', {}, 'A'),\n    (0,_h__WEBPACK_IMPORTED_MODULE_0__.default)('li', {}, 'B'),\n    (0,_h__WEBPACK_IMPORTED_MODULE_0__.default)('li', {}, 'C'),\n    (0,_h__WEBPACK_IMPORTED_MODULE_0__.default)('li', {}, 'D')\n])\n\n;(0,_patch__WEBPACK_IMPORTED_MODULE_1__.default)(container, vnode)\n\n//# sourceURL=webpack://snabbdom/./src/index.js?");

/***/ }),

/***/ "./src/patch.js":
/*!**********************!*\
  !*** ./src/patch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/vnode.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n\n \n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(oldNode, newNode) {\n    console.log('oldNode--获取的是DOM没有sel属性', oldNode)\n    if (oldNode.sel === '' || oldNode.sel === undefined) {\n        oldNode = (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.default)(oldNode.tagName.toLowerCase(), {}, [], undefined, oldNode)\n    }\n    if (oldNode.key === newNode.key && newNode.sel === oldNode.sel) {\n        console.log('是相同的节点');\n    } else {\n        console.log('不是相同的节点，暴力删除旧节点，将新节点插入');\n        // createElement(newNode, oldNode.elm)\n        const newElm = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.default)(newNode)\n        console.log('newElm', newElm)\n        if (newElm) {\n            oldNode.elm.parentNode.insertBefore(newElm, oldNode.elm)\n        }\n    }\n}\n\n/**\n * patch 函数，\n * 1.旧节点与新节点对比，如果旧的为dom需要把他转化为虚拟节点，\n * 2.然后在判断新旧节点与新节点是否相等， \n *  2.1如果不等，暴力删除，并设置标记，等待新节点插入，（需要找到旧节点的elm元素，pivot.parentNode.insertBefore(新的元素节点，标记点)\n *  2.2 如果相等，递归\n * \n * \n */\n\n//# sourceURL=webpack://snabbdom/./src/patch.js?");

/***/ }),

/***/ "./src/vnode.js":
/*!**********************!*\
  !*** ./src/vnode.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(sel, data, children, text, elm) {\n    return {\n        sel,\n        data,\n        children,\n        text,\n        elm\n    }\n}\n\n//# sourceURL=webpack://snabbdom/./src/vnode.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;