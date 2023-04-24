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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  setUpAccordion();\n  colorPicker();\n  colorPicker02();\n  colorPicker03();\n});\n\nconst setUpAccordion = () => {\n  const details = document.querySelectorAll(\".js-details\");\n  const RUNNING_VALUE = \"running\"; // アニメーション実行中のときに付与する予定のカスタムデータ属性の値\n  const IS_OPENED_CLASS = \"is-opened\"; // アイコン操作用のクラス名\n\n  details.forEach((element) => {\n    const summary = element.querySelector(\".js-summary\");\n    const content = element.querySelector(\".js-content\");\n\n    summary.addEventListener(\"click\", (event) => {\n      event.preventDefault();\n      // 連打防止用。アニメーション中だったらクリックイベントを受け付けないでリターンする\n      if (element.dataset.animStatus === RUNNING_VALUE) {\n        return;\n      }\n      // detailsのopen属性を判定\n      if (element.open) {\n        // アコーディオンを閉じるときの処理\n        // アイコン操作用クラスを切り替える(クラスを取り除く)\n        element.classList.toggle(IS_OPENED_CLASS);\n\n        //アニメーションを実行\n        const closingAnim = content.animate(\n          closingAnimKeyFrames(content),\n          animTiming\n        );\n        // アニメーション実行中用の値を付与\n        element.dataset.animStatus = RUNNING_VALUE;\n        // アニメーションの完了後に\n        closingAnim.onfinish = () => {\n          element.removeAttribute(\"open\");\n          element.dataset.animStatus = \"\";\n        };\n      } else {\n        // アコーディオンを開くときの処理\n        // open属性を付与\n        element.setAttribute(\"open\", \"true\");\n        // アイコン操作用クラスを切り替える(クラスを付与)\n        element.classList.toggle(IS_OPENED_CLASS);\n        // アニメーションを実行\n        const openingAnim = content.animate(\n          openingAnimKeyframes(content),\n          animTiming\n        );\n        // アニメーション実行中用の値を入れる\n        element.dataset.animStatus = RUNNING_VALUE;\n\n        // アニメーション完了後にアニメーション実行中用の値を取り除く\n        openingAnim.onfinish = () => {\n          element.dataset.animStatus = \"\";\n        };\n      }\n    });\n  });\n\n  /**\n   * アニメーションの時間とイージング\n   */\n  const animTiming = { duration: 400, easing: \"ease-out\" };\n  /**\n   * アコーディオンを閉じるときのキーフレーム\n   */\n  const closingAnimKeyFrames = (content) => [\n    {\n      height: content.offsetHeight + \"px\",\n      opacity: 1,\n    },\n    {\n      height: 0,\n      opacity: 0,\n    },\n  ];\n  /**\n   * アコーディオンを開くときのキーフレーム\n   */\n  const openingAnimKeyframes = (content) => [\n    {\n      height: 0,\n      opacity: 0,\n    },\n    {\n      height: content.offsetHeight + \"px\",\n      opacity: 1,\n    },\n  ];\n};\n\nconst colorPicker = () => {\n  const colorElement = document.getElementById(\"color\");\n  const colorText = document.getElementById(\"colorCode\");\n  colorText.readOnly = true;\n\n  const button = document.getElementById(\"colorCheck\");\n  button.addEventListener(\"click\", () => {\n    colorText.value = colorElement.value;\n  });\n};\nconst colorPicker02 = () => {\n  const colorElement = document.getElementById(\"color02\");\n  const colorText = document.getElementById(\"colorCode02\");\n  colorText.readOnly = true;\n\n  const button = document.getElementById(\"colorCheck02\");\n  button.addEventListener(\"click\", () => {\n    colorText.value = colorElement.value;\n  });\n};\nconst colorPicker03 = () => {\n  const colorElement = document.getElementById(\"color03\");\n  const colorText = document.getElementById(\"colorCode03\");\n  colorText.readOnly = true;\n\n  const button = document.getElementById(\"colorCheck03\");\n  button.addEventListener(\"click\", () => {\n    colorText.value = colorElement.value;\n  });\n};\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

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