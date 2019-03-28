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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/news.controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/environment.config.js":
/*!**********************************!*\
  !*** ./js/environment.config.js ***!
  \**********************************/
/*! exports provided: ENV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENV\", function() { return ENV; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ENV =\n/*#__PURE__*/\nfunction () {\n  function ENV() {\n    _classCallCheck(this, ENV);\n  }\n\n  _createClass(ENV, null, [{\n    key: \"apiUrl\",\n    get: function get() {\n      return 'https://newsapi.org/v2';\n    }\n  }, {\n    key: \"apiKey\",\n    get: function get() {\n      return 'bbf67e88aa41440489b3612418a700a1';\n    }\n  }, {\n    key: \"country\",\n    get: function get() {\n      return 'ua';\n    }\n  }, {\n    key: \"category\",\n    get: function get() {\n      return 'technology';\n    }\n  }]);\n\n  return ENV;\n}();\n\n//# sourceURL=webpack:///./js/environment.config.js?");

/***/ }),

/***/ "./js/httpClient.js":
/*!**************************!*\
  !*** ./js/httpClient.js ***!
  \**************************/
/*! exports provided: HttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HttpClient\", function() { return HttpClient; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HttpClient =\n/*#__PURE__*/\nfunction () {\n  function HttpClient() {\n    _classCallCheck(this, HttpClient);\n  }\n\n  _createClass(HttpClient, [{\n    key: \"get\",\n\n    /**\r\n     * \r\n     * @param {String} url \r\n     * @param {Function} callback\r\n     */\n    value: function get(url) {\n      return new Promise(function (res, rej) {\n        var xhr = new XMLHttpRequest();\n        xhr.open('GET', url);\n        xhr.send();\n        xhr.addEventListener('load', function () {\n          return res(JSON.parse(xhr.responseText));\n        });\n        xhr.addEventListener('error', function () {\n          return rej({\n            status: xhr.status,\n            url: url\n          });\n        });\n      });\n    }\n    /**\r\n    * \r\n    * @param {String} url \r\n    * @param {any} data\r\n    * @param {Function} callback\r\n    */\n\n  }, {\n    key: \"post\",\n    value: function post(url, data, callback) {\n      var xhr = new XMLHttpRequest();\n      xhr.open('POST', url);\n      xhr.setRequestHeader('Content-type', 'application/json');\n      xhr.send(data);\n      xhr.addEventListener('load', function () {\n        return callback(xhr.responseText);\n      });\n    }\n  }]);\n\n  return HttpClient;\n}();\n\n//# sourceURL=webpack:///./js/httpClient.js?");

/***/ }),

/***/ "./js/news.controller.js":
/*!*******************************!*\
  !*** ./js/news.controller.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/news.service */ \"./js/news.service.js\");\n/* harmony import */ var _js_news_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/news.ui.service */ \"./js/news.ui.service.js\");\n\n\nvar newsService = new _js_news_service__WEBPACK_IMPORTED_MODULE_0__[\"NewsService\"]();\nvar uiService = new _js_news_ui_service__WEBPACK_IMPORTED_MODULE_1__[\"NewsUI\"](); // UI Elements\n\nvar form = document.forms['newsControlForm'];\nvar countrySelect = form['country'];\nvar categorySelect = form['category'];\nvar searchInput = form['search']; //переделал функцию onSelectChange(), добвил возможность искать одновременно по категориям, странам и ключевому слову; если не выбрана категория и страна то функция ищет везде; изменил XHR запросы на промисы; добавил появление уведомления если ни одна новость по указанным параметрам не найдена.\n\nfunction onSelectChange() {\n  var country = countrySelect.value ? \"country=\".concat(countrySelect.value, \"&\") : '';\n  var category = categorySelect.value ? \"category=\".concat(categorySelect.value, \"&\") : '';\n  var keyword = searchInput.value.length > 3 ? \"q=\".concat(searchInput.value, \"&\") : '';\n  var endpoint = !countrySelect.value && !categorySelect.value ? \"everything\" : \"top-headlines\";\n\n  if (!country && !category && !keyword) {\n    uiService.clearContainer();\n    return console.error('Введите значение хотя-бы одного параметра для поиска');\n  }\n\n  newsService.getTopHeadlinesNews(category, country, keyword, endpoint).then(function (response) {\n    var totalResults = response.totalResults,\n        articles = response.articles;\n    uiService.clearContainer();\n    articles.forEach(function (article) {\n      return uiService.addArticle(article);\n    });\n\n    if (!totalResults) {\n      var rowElem = document.querySelector('.news-wrap').querySelector('.row');\n      rowElem.insertAdjacentHTML('afterbegin', \" \\n                    <div class=\\\"custom-error\\\">\\n                        <p>\\u041D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0439 \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u043E</p>\\n                    </div>\\n                \");\n      setTimeout(function () {\n        rowElem.innerHTML = '';\n      }, 3000);\n    }\n  }).catch(function (error) {\n    return console.log(error);\n  });\n}\n\ncountrySelect.addEventListener('change', onSelectChange);\ncategorySelect.addEventListener('change', onSelectChange);\nsearchInput.addEventListener('input', onSelectChange);\n\n//# sourceURL=webpack:///./js/news.controller.js?");

/***/ }),

/***/ "./js/news.service.js":
/*!****************************!*\
  !*** ./js/news.service.js ***!
  \****************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsService\", function() { return NewsService; });\n/* harmony import */ var _js_environment_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/environment.config */ \"./js/environment.config.js\");\n/* harmony import */ var _js_httpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/httpClient */ \"./js/httpClient.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar httpClient = new _js_httpClient__WEBPACK_IMPORTED_MODULE_1__[\"HttpClient\"]();\nvar NewsService =\n/*#__PURE__*/\nfunction () {\n  function NewsService() {\n    _classCallCheck(this, NewsService);\n  }\n\n  _createClass(NewsService, [{\n    key: \"getTopHeadlinesNews\",\n\n    /**\r\n     * \r\n     * @param {String} category \r\n     * @param {String} country \r\n     * @param {Function} callback\r\n     * @param {String} keyword\r\n      */\n    value: function getTopHeadlinesNews() {\n      var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n      var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var keyword = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n      var endpoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'top-headlines';\n      return httpClient.get(\"\".concat(_js_environment_config__WEBPACK_IMPORTED_MODULE_0__[\"ENV\"].apiUrl, \"/\").concat(endpoint, \"?\").concat(keyword).concat(category).concat(country, \"apiKey=\").concat(_js_environment_config__WEBPACK_IMPORTED_MODULE_0__[\"ENV\"].apiKey));\n    }\n  }]);\n\n  return NewsService;\n}();\n\n//# sourceURL=webpack:///./js/news.service.js?");

/***/ }),

/***/ "./js/news.ui.service.js":
/*!*******************************!*\
  !*** ./js/news.ui.service.js ***!
  \*******************************/
/*! exports provided: NewsUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsUI\", function() { return NewsUI; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar NewsUI =\n/*#__PURE__*/\nfunction () {\n  function NewsUI() {\n    _classCallCheck(this, NewsUI);\n\n    this.newsContainer = document.querySelector('.news-wrap .row');\n  }\n  /**\r\n   * \r\n   * @param {Object} article \r\n   */\n\n\n  _createClass(NewsUI, [{\n    key: \"addArticle\",\n    value: function addArticle(article) {\n      // console.time();\n      var template = NewsUI.generateArticleTemplate(article); // console.timeEnd();\n\n      this.newsContainer.insertAdjacentHTML(\"afterbegin\", template);\n    }\n  }, {\n    key: \"clearContainer\",\n    value: function clearContainer() {\n      var first = this.newsContainer.firstElementChild;\n\n      while (first) {\n        this.newsContainer.removeChild(first);\n        first = this.newsContainer.firstElementChild;\n      }\n    }\n    /**\r\n     * \r\n     * @param {Object} article \r\n     */\n\n  }], [{\n    key: \"generateArticleTemplate\",\n    value: function generateArticleTemplate(article) {\n      return \"\\n        <div class=\\\"col s12 m6\\\">\\n            <div class=\\\"card\\\">\\n                <div class=\\\"card-image\\\">\\n                    <img src=\\\"\".concat(article.urlToImage, \"\\\">\\n                </div>\\n                <div class=\\\"card-content\\\">\\n                    <span class=\\\"card-title\\\">\").concat(article.title || '', \"</span>\\n\\n                    <p>\").concat(article.description || '', \"</p>\\n                </div>\\n                <div class=\\\"card-action\\\">\\n                    <a href=\\\"\").concat(article.url, \"\\\" target=\\\"_blank\\\">Read more</a>\\n                </div>\\n            </div>\\n        </div>\\n        \");\n    }\n  }]);\n\n  return NewsUI;\n}();\n\n//# sourceURL=webpack:///./js/news.ui.service.js?");

/***/ })

/******/ });