/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modal/modal.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modal/modal.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: transparent;\n}\n#modal .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 1rem;\n  gap: 1rem;\n  background-color: whitesmoke;\n  border: 2px solid black;\n  width: 50vw;\n  height: 80vh;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 1rem;\n}\n#modal .content .close-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0.8rem;\n  font-size: 1.2rem;\n  margin: 1rem;\n  cursor: pointer;\n  border-radius: 0.2rem;\n}\n#modal .content .close-btn:hover {\n  background-color: #b3b3b3;\n}\n#modal .content .image {\n  width: 80%;\n  flex-shrink: 1;\n  min-height: 0;\n}\n#modal .content .heading,\n#modal .content .sub-heading {\n  font-weight: bolder;\n}\n#modal .content form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n#modal .content form input,\n#modal .content form textarea {\n  border: 2px solid black;\n  padding: 0.2rem 0.4rem;\n}\n#modal .content form input[type=submit] {\n  font-size: 1rem;\n  padding: 0.4rem 1rem;\n}\n\n#modal.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/modal/modal.scss"],"names":[],"mappings":"AACA;EACE,eAAA;EACA,MAAA;EAAA,QAAA;EAAA,SAAA;EAAA,OAAA;EACA,6BAAA;AAAF;AAEE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;EACA,4BAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;AAAJ;AAEI;EACE,kBAAA;EACA,QAAA;EACA,MAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;AAAN;AAEM;EACE,yBAAA;AAAR;AAII;EACE,UAAA;EACA,cAAA;EACA,aAAA;AAFN;AAKI;;EAEE,mBAAA;AAHN;AAMI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;EAAA,SAAA;AAJN;AAMM;;EAEE,uBAAA;EACA,sBAAA;AAJR;AAOM;EACE,eAAA;EACA,oBAAA;AALR;;AAWA;EACE,aAAA;AARF","sourcesContent":["// MODAL\r\n#modal {\r\n  position: fixed;\r\n  inset: 0;\r\n  background-color: transparent;\r\n\r\n  .content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: whitesmoke;\r\n    border: 2px solid black;\r\n    width: 50vw;\r\n    height: 80vh;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    padding: 1rem;\r\n\r\n    .close-btn {\r\n      position: absolute;\r\n      right: 0;\r\n      top: 0;\r\n      padding: 0.8rem;\r\n      font-size: 1.2rem;\r\n      margin: 1rem;\r\n      cursor: pointer;\r\n      border-radius: 0.2rem;\r\n\r\n      &:hover {\r\n        background-color: rgb(179, 179, 179);\r\n      }\r\n    }\r\n\r\n    .image {\r\n      width: 80%;\r\n      flex-shrink: 1;\r\n      min-height: 0;\r\n    }\r\n\r\n    .heading,\r\n    .sub-heading {\r\n      font-weight: bolder;\r\n    }\r\n\r\n    form {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      gap: 1rem;\r\n\r\n      input,\r\n      textarea {\r\n        border: 2px solid black;\r\n        padding: 0.2rem 0.4rem;\r\n      }\r\n\r\n      input[type=submit] {\r\n        font-size: 1rem;\r\n        padding: 0.4rem 1rem;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#modal.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Caveat-VariableFont_wght.ttf */ "./src/assets/fonts/Caveat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Akronim-Regular.ttf */ "./src/assets/fonts/Akronim-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n}\n\n@font-face {\n  font-family: \"Caveat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Akronim\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"ttf\");\n}\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nheader {\n  box-shadow: -1px 5px 24px 5px #000000;\n  background-color: black;\n}\n\n.justify-content-space-around {\n  justify-content: space-around;\n}\n\n.justify-content-space-between {\n  justify-content: space-between;\n}\n\n#logo {\n  width: 80px;\n  height: 70px;\n}\n\n.margin-auto {\n  margin: auto;\n}\n\n.cursor-pointer,\n.album-photo,\n.heart,\n#comments-button {\n  cursor: pointer;\n}\n\n#comments-button {\n  color: white;\n  font-size: large;\n  background-color: #f05f5f;\n  padding: 8px;\n  border-radius: 6px;\n  outline: lightseagreen;\n  border: none;\n  transition: background-color 1s, font-weight 0.5s;\n}\n\n#comments-button:hover {\n  background-color: red;\n  font-weight: 900;\n}\n\nul {\n  list-style: none;\n}\n\nnav ul li {\n  margin: 25px;\n  justify-content: space-around;\n}\n\nnav li a {\n  text-decoration: none;\n  font-family: Akronim, cursive;\n  font-weight: bolder;\n  font-size: 30px;\n  font-style: italic;\n  display: inline-flex;\n  color: whitesmoke;\n  transition: color 1s;\n}\n\nnav li a:hover {\n  color: red;\n}\n\n#items-container {\n  display: grid;\n  padding-left: 20rem;\n  padding-right: 20rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.item-container {\n  box-shadow: 2px 2px 27px -3px rgba(0, 0, 0, 0.84);\n  margin: 30px;\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 15px;\n  transition: box-shadow 1s;\n}\n\n.item-container:hover {\n  box-shadow: 2px 2px 27px -3px rgba(255, 69, 69, 0.84);\n}\n\n.item-container p {\n  padding-right: 10%;\n  padding-left: 10%;\n  font-size: 1.3rem;\n  margin-top: 5px;\n  font-family: Caveat;\n}\n\n.album-photo,\n#comments-button {\n  width: 100%;\n}\n\n.display-flex {\n  display: flex;\n}\n\n.heart {\n  float: right;\n  font-size: 3rem;\n}\n\n.heart:hover {\n  color: red;\n}\n\nfooter {\n  border-top: 1px solid black;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;;;EAGE,UAAA;EACA,SAAA;AACF;;AAEA;EACE,qBAAA;EACA,0DAAA;AACF;AAEA;EACE,sBAAA;EACA,0DAAA;AAAF;AAGA;EACE,yCAAA;AADF;;AAIA;EAEE,qCAAA;EACA,uBAAA;AADF;;AAIA;EACE,6BAAA;AADF;;AAIA;EACE,8BAAA;AADF;;AAIA;EACE,WAAA;EACA,YAAA;AADF;;AAIA;EACE,YAAA;AADF;;AAIA;;;;EAIE,eAAA;AADF;;AAIA;EACE,YAAA;EACA,gBAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,iDAAA;AADF;;AAIA;EACE,qBAAA;EACA,gBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,YAAA;EACA,6BAAA;AADF;;AAIA;EACE,qBAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;EACA,oBAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,qCAAA;AADF;;AAIA;EAEE,iDAAA;EACA,YAAA;EACA,gCAAA;EACA,4BAAA;EACA,yBAAA;AADF;;AAIA;EAEA,qDAAA;AADA;;AAIA;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;AADF;;AAIA;;EAEE,WAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,YAAA;EACA,eAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,2BAAA;EACA,iBAAA;EAAA,oBAAA;AADF","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Caveat';\r\n  src: url('./assets/fonts/Caveat-VariableFont_wght.ttf') format('ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Akronim';\r\n  src: url('./assets/fonts/Akronim-Regular.ttf') format('ttf');\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nheader {\r\n  -webkit-box-shadow: -1px 5px 24px 5px #000000; \r\n  box-shadow: -1px 5px 24px 5px #000000;\r\n  background-color: black;\r\n}\r\n\r\n.justify-content-space-around {\r\n  justify-content: space-around;\r\n}\r\n\r\n.justify-content-space-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n#logo {\r\n  width: 80px;\r\n  height: 70px;\r\n}\r\n\r\n.margin-auto {\r\n  margin: auto;\r\n}\r\n\r\n.cursor-pointer,\r\n.album-photo,\r\n.heart,\r\n#comments-button {\r\n  cursor: pointer;\r\n}\r\n\r\n#comments-button {\r\n  color: white;\r\n  font-size: large;\r\n  background-color: rgb(240, 95, 95);\r\n  padding: 8px;\r\n  border-radius: 6px;\r\n  outline: lightseagreen;\r\n  border: none;\r\n  transition: background-color 1s, font-weight 0.5s;\r\n}\r\n\r\n#comments-button:hover {\r\n  background-color: red;\r\n  font-weight: 900;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li {\r\n  margin: 25px;\r\n  justify-content: space-around;\r\n}\r\n\r\nnav li a {\r\n  text-decoration: none;\r\n  font-family: Akronim, cursive;\r\n  font-weight: bolder;\r\n  font-size: 30px;\r\n  font-style: italic;\r\n  display: inline-flex;\r\n  color:whitesmoke;\r\n  transition: color 1s;\r\n}\r\n\r\nnav li a:hover {\r\n  color:red;\r\n}\r\n\r\n#items-container {\r\n  display: grid;\r\n  padding-left: 20rem;\r\n  padding-right: 20rem;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n.item-container {\r\n  -webkit-box-shadow: 2px 2px 27px -3px rgba(0,0,0,0.84); \r\n  box-shadow: 2px 2px 27px -3px rgba(0,0,0,0.84);\r\n  margin: 30px;\r\n  border-bottom-right-radius: 10px;\r\n  border-top-left-radius: 15px;\r\n  transition: box-shadow 1s;\r\n}\r\n\r\n.item-container:hover {\r\n  -webkit-box-shadow: 2px 2px 27px -3px rgba(255,69,69,0.84); \r\nbox-shadow: 2px 2px 27px -3px rgba(255,69,69,0.84);\r\n}\r\n\r\n.item-container p {\r\n  padding-right: 10%;\r\n  padding-left: 10%;\r\n  font-size: 1.3rem;\r\n  margin-top: 5px;\r\n  font-family: Caveat;\r\n}\r\n\r\n.album-photo,\r\n#comments-button {\r\n  width: 100%;\r\n}\r\n\r\n.display-flex {\r\n  display: flex;\r\n}\r\n\r\n.heart {\r\n  float: right;\r\n  font-size:3rem;\r\n}\r\n\r\n.heart:hover {\r\n  color: red;\r\n}\r\n\r\nfooter {\r\n  border-top: 1px solid black;\r\n  padding-block: 2rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/modal/modal.scss":
/*!******************************!*\
  !*** ./src/modal/modal.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modal/modal.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/credentials.js":
/*!********************************!*\
  !*** ./src/api/credentials.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  cid: '',
  cs: '',
  token_endpoint: '',
  access_token: '',
});

/***/ }),

/***/ "./src/api/data.js":
/*!*************************!*\
  !*** ./src/api/data.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  items: [
    {
      artist: 'Don Toliver',
      album_name: 'Life of a DON',
      id: '2WmJ5wp5wKBlIJE6FDAIBJ',
      image: 'https://i.scdn.co/image/ab67616d0000b273ab738b25b86bf02f0346c53d',
      likes: 0,
    },
    {
      artist: 'bbno$',
      album_name: 'eat ya veggies',
      id: '6iMshsixZe8oMteQdln5kp',
      image: 'https://i.scdn.co/image/ab67616d0000b2738c25aa58d7e0894df7436348',
      likes: 0,
    },
    {
      artist: 'James Blake',
      album_name: 'Friends That Break Your Heart',
      id: '1zNtJFMCNIyT0X19jpcI3j',
      image: 'https://i.scdn.co/image/ab67616d0000b27338d030048ec770b15633dbc1',
      likes: 0,
    },
    {
      artist: 'PinkPantheress',
      album_name: 'I must apologise',
      id: '0m1wwIx9Eoa7fWb9KYh7pt',
      image: 'https://i.scdn.co/image/ab67616d0000b2730e3ad9f7e35b2d2e39c58e81',
      likes: 0,
    },
    {
      artist: 'Mitski',
      album_name: 'Working for the Knife',
      id: '5z1bA7zhlWlyBgBA2rN4uE',
      image: 'https://i.scdn.co/image/ab67616d0000b273f37ac54d8f3e45f0d1d015bd',
      likes: 0,
    },
    {
      artist: 'Tainy',
      album_name: 'Lo Siento BB:/ (with Bad Bunny & Julieta Venegas)',
      id: '4589OIFRZp41qbsp7TWFCx',
      image: 'https://i.scdn.co/image/ab67616d0000b273d2dcc68851d00413147d9af6',
      likes: 0,
    },
  ],
});

/***/ }),

/***/ "./src/api/factory.js":
/*!****************************!*\
  !*** ./src/api/factory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ credentials, fetch }) => {
  const headers = {
    Authorization: `Bearer ${credentials.access_token}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const involvementBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
  const appId = ''; // TODO:

  const APIMethods = {
    getNewReleases: async () => {
      const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
        method: 'GET',
        headers,
      });
      const data = await response.json();

      return data.albums.items.map((item) => {
        const artists = item.artists.map((artist) => ({
          href: artist.href,
          name: artist.name,
          type: artist.type,
          id: artist.id,
          artist: artist.name,
        }));

        return {
          id: item.id,
          name: item.name,
          artists,
          type: item.type,
          album_type: item.album_type,
          image: item.images[0].url,
        };
      });
    },
    async getAllLikes() {
      const response = await fetch(`${involvementBaseURL}apps/${appId}/likes`);
      const data = await response.text();
      return JSON.parse(data);
    },
    async getLikesFor(id) {
      const data = await this.getAllLikes();
      return data.find((i) => i.item_id === id)?.likes;
    },
    async getCommentsFor(id) {
      try {
        const response = await fetch(`${involvementBaseURL}apps/${appId}/comments?item_id=${id}`);
        const data = await response.json();
        return data;
      } catch {
        return null;
      }
    },
    async addLikeFor(id) {
      try {
        const response = await fetch(`${involvementBaseURL}apps/${appId}/likes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            item_id: id,
          }),
        });

        const createdStatus = await response.text();
        if (createdStatus !== 'Created') throw Error;
        return true;
      } catch (err) {
        console.log('ERROR:', err);
        return false;
      }
    },
    async addCommentFor(id, username, comment) {
      try {
        const response = await fetch(`${involvementBaseURL}apps/${appId}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            item_id: id,
            username,
            comment,
          }),
        });
        const createdStatus = await response.text();
        if (createdStatus !== 'Created') throw Error;
        return true;
      } catch (err) {
        console.log('ERROR:', err);
        return false;
      }
    },
  };
  return APIMethods;
});


/***/ }),

/***/ "./src/api/functions.js":
/*!******************************!*\
  !*** ./src/api/functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./src/api/factory.js");
/* harmony import */ var _credentials_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credentials.js */ "./src/api/credentials.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/api/data.js");





const apiPlaceholder = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ credentials: _credentials_js__WEBPACK_IMPORTED_MODULE_1__["default"], fetch });

// NOTE: THIS are placeholders for the real API

const fakeData = {
  likes: _data_js__WEBPACK_IMPORTED_MODULE_2__["default"].items.map((item) => ({ item_id: item.id, likes: 0 })),
  all_comments: _data_js__WEBPACK_IMPORTED_MODULE_2__["default"].items.map((item) => ({ item_id: item.id, comments: [] })),
};

apiPlaceholder.getNewReleases = async () => _data_js__WEBPACK_IMPORTED_MODULE_2__["default"].items;

apiPlaceholder.getAllLikes = async () => fakeData.likes;
apiPlaceholder.getLikesFor = async (id) => fakeData.likes.find((l) => l.item_id === id).likes;
apiPlaceholder.getCommentsFor = async (id) => {
  const user = fakeData.all_comments.find((c) => c.item_id === id);
  if (!user) return null;
  return user.comments;
};

apiPlaceholder.addCommentFor = async (id, username, comment) => {
  const user = fakeData.all_comments.find((c) => c.item_id === id);
  if (!user) return false;
  user.comments.push({
    creation_date: '2021-10-13',
    username,
    comment,
  });
  return true;
};
apiPlaceholder.addLikeFor = async (id) => {
  const user = fakeData.likes.find((l) => l.item_id === id);
  if (!user) {
    return false;
  }
  user.likes += 1;
  return true;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiPlaceholder);

/***/ }),

/***/ "./src/countTotalItems.js":
/*!********************************!*\
  !*** ./src/countTotalItems.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => document.querySelectorAll('.item-container').length);

/***/ }),

/***/ "./src/modal/index.js":
/*!****************************!*\
  !*** ./src/modal/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.scss */ "./src/modal/modal.scss");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  showModal: () => {
    const modal = document.createElement('div');
    modal.id = 'modal';
    document.body.appendChild(modal);
    modal.classList.remove('hidden');
    const innerHTML = `
    <div class="content">
        <div class="close-btn">
          <i class="fas fa-times"></i>
        </div>
        <div class="image">
          <img src="https://images.unsplash.com/photo-1632207191677-8446985f9d65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1161&q=80" alt="album-art">
        </div>
        <span class="heading">Space 3</span>
        <span class="sub-heading">Comments (2)</span>
        <ul>
          <li>03/11/2021 Alex: I'd love to buy it</li>
          <li>03/12/2021 Mia: I love</li>
        </ul>
        <span class="sub-heading">Add a comment</span>
        <form action="#">
            <input type="text" placeholder="Your name">
            <textarea name="insights" placeholder="Your insights"></textarea>
            <input type="submit" value="Comment">
        </form>
      </div>`;
    modal.innerHTML = innerHTML;
    modal.querySelector('.close-btn').addEventListener('click', () => {
      modal.remove();
    });
  },
  hideModal: () => document.getElementById('modal')?.remove(),
});

/***/ }),

/***/ "./src/assets/fonts/Akronim-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Akronim-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/84bacde1c4694f652911.ttf";

/***/ }),

/***/ "./src/assets/fonts/Caveat-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Caveat-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/ddaa3ca37faf96573328.ttf";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _api_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/functions.js */ "./src/api/functions.js");
/* harmony import */ var _modal_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/index.js */ "./src/modal/index.js");
/* harmony import */ var _countTotalItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countTotalItems.js */ "./src/countTotalItems.js");





const populateList = (item) => {
  const itemsContainer = document.getElementById('items-container');
  const div = document.createElement('DIV');
  div.setAttribute('class', 'item-container');
  const photo = document.createElement('IMG');
  photo.setAttribute('src', item.image);
  photo.setAttribute('class', 'album-photo');
  div.appendChild(photo);
  const heart = document.createElement('SPAN');
  const likes = document.createElement('P');
  heart.innerHTML = '❤';
  heart.setAttribute('class', 'heart');
  heart.addEventListener('click', async () => {
    await _api_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"].addLikeFor(item.id);
    const newLikes = await _api_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLikesFor(item.id);
    likes.innerHTML = `${newLikes} likes`;
  });
  const title = document.createElement('P');
  const titleText = document.createTextNode(item.artist);
  title.appendChild(titleText);
  title.appendChild(heart);
  likes.innerHTML = `${item.likes} likes`;
  const comments = document.createElement('BUTTON');
  comments.setAttribute('id', 'comments-button');
  comments.textContent = 'Comments';
  comments.addEventListener('click', () => _modal_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].showModal('showModal called!!'));
  div.appendChild(title);
  div.appendChild(likes);
  div.appendChild(comments);
  itemsContainer.appendChild(div);
};

const main = async () => {
  const data = await _api_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"].getNewReleases();

  // await API.addLikeFor(id)

  data.forEach((element) => {
    populateList(element);
  });
};

const showTotalOfItems = async () => {
  const total = (0,_countTotalItems_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const totalItems = document.getElementById('total-items');
  totalItems.innerHTML = `(${total})`;
};

const initialize = async () => {
  await main();
  await showTotalOfItems();
};

initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQnNCO0FBQ2U7QUFDQTtBQUNjOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0VBQWM7QUFDeEIsMkJBQTJCLHFFQUFlO0FBQzFDLHlCQUF5QixVQUFVO0FBQ25DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpRUFBZTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHdFQUFrQjs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGdCQUFnQiwrREFBZTtBQUMvQjtBQUNBLDZCQUE2QixNQUFNO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvbW9kYWwvbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9tb2RhbC9tb2RhbC5zY3NzP2MxZmIiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvc3R5bGUuc2Nzcz80MGY3Iiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvYXBpL2NyZWRlbnRpYWxzLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL2FwaS9kYXRhLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL2FwaS9mYWN0b3J5LmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL2FwaS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvY291bnRUb3RhbEl0ZW1zLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNtb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuI21vZGFsIC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuI21vZGFsIC5jb250ZW50IC5jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuI21vZGFsIC5jb250ZW50IC5jbG9zZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzYjNiMztcXG59XFxuI21vZGFsIC5jb250ZW50IC5pbWFnZSB7XFxuICB3aWR0aDogODAlO1xcbiAgZmxleC1zaHJpbms6IDE7XFxuICBtaW4taGVpZ2h0OiAwO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmhlYWRpbmcsXFxuI21vZGFsIC5jb250ZW50IC5zdWItaGVhZGluZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBnYXA6IDFyZW07XFxufVxcbiNtb2RhbCAuY29udGVudCBmb3JtIGlucHV0LFxcbiNtb2RhbCAuY29udGVudCBmb3JtIHRleHRhcmVhIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcXG59XFxuI21vZGFsIC5jb250ZW50IGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbn1cXG5cXG4jbW9kYWwuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2RhbC9tb2RhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFBQSxRQUFBO0VBQUEsU0FBQTtFQUFBLE9BQUE7RUFDQSw2QkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUFOO0FBRU07RUFDRSx5QkFBQTtBQUFSO0FBSUk7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFGTjtBQUtJOztFQUVFLG1CQUFBO0FBSE47QUFNSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFKTjtBQU1NOztFQUVFLHVCQUFBO0VBQ0Esc0JBQUE7QUFKUjtBQU9NO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FBTFI7O0FBV0E7RUFDRSxhQUFBO0FBUkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gTU9EQUxcXHJcXG4jbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHJcXG4gIC5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIGhlaWdodDogODB2aDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgLmNsb3NlLWJ0biB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbWFnZSB7XFxyXFxuICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICBmbGV4LXNocmluazogMTtcXHJcXG4gICAgICBtaW4taGVpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkaW5nLFxcclxcbiAgICAuc3ViLWhlYWRpbmcge1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZm9ybSB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIGdhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgICBpbnB1dCxcXHJcXG4gICAgICB0ZXh0YXJlYSB7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0NhdmVhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9Ba3JvbmltLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDYXZlYXRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBa3JvbmltXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYm94LXNoYWRvdzogLTFweCA1cHggMjRweCA1cHggIzAwMDAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LXNwYWNlLWFyb3VuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5tYXJnaW4tYXV0byB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jdXJzb3ItcG9pbnRlcixcXG4uYWxidW0tcGhvdG8sXFxuLmhlYXJ0LFxcbiNjb21tZW50cy1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29tbWVudHMtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1ZjVmO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3V0bGluZTogbGlnaHRzZWFncmVlbjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGZvbnQtd2VpZ2h0IDAuNXM7XFxufVxcblxcbiNjb21tZW50cy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIG1hcmdpbjogMjVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5uYXYgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogQWtyb25pbSwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMXM7XFxufVxcblxcbm5hdiBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiNpdGVtcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmctbGVmdDogMjByZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDI3cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuODQpO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcztcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjdweCAtM3B4IHJnYmEoMjU1LCA2OSwgNjksIDAuODQpO1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXIgcCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZm9udC1mYW1pbHk6IENhdmVhdDtcXG59XFxuXFxuLmFsYnVtLXBob3RvLFxcbiNjb21tZW50cy1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kaXNwbGF5LWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhlYXJ0IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmhlYXJ0OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsMERBQUE7QUFDRjtBQUVBO0VBQ0Usc0JBQUE7RUFDQSwwREFBQTtBQUFGO0FBR0E7RUFDRSx5Q0FBQTtBQURGOztBQUlBO0VBRUUscUNBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBOzs7O0VBSUUsZUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0FBREY7O0FBSUE7RUFFRSxpREFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUVBLHFEQUFBO0FBREE7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTs7RUFFRSxXQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtFQUFBLG9CQUFBO0FBREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0NhdmVhdCc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvQ2F2ZWF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdBa3JvbmltJztcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9Ba3JvbmltLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCA1cHggMjRweCA1cHggIzAwMDAwMDsgXFxyXFxuICBib3gtc2hhZG93OiAtMXB4IDVweCAyNHB4IDVweCAjMDAwMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYXJvdW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1jb250ZW50LXNwYWNlLWJldHdlZW4ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpbi1hdXRvIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnNvci1wb2ludGVyLFxcclxcbi5hbGJ1bS1waG90byxcXHJcXG4uaGVhcnQsXFxyXFxuI2NvbW1lbnRzLWJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50cy1idXR0b24ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDk1LCA5NSk7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBvdXRsaW5lOiBsaWdodHNlYWdyZWVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgZm9udC13ZWlnaHQgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkge1xcclxcbiAgbWFyZ2luOiAyNXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbm5hdiBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBa3JvbmltLCBjdXJzaXZlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgY29sb3I6d2hpdGVzbW9rZTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDFzO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgbGkgYTpob3ZlciB7XFxyXFxuICBjb2xvcjpyZWQ7XFxyXFxufVxcclxcblxcclxcbiNpdGVtcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjByZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHJlbTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lciB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMjdweCAtM3B4IHJnYmEoMCwwLDAsMC44NCk7IFxcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyN3B4IC0zcHggcmdiYSgwLDAsMCwwLjg0KTtcXHJcXG4gIG1hcmdpbjogMzBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lcjpob3ZlciB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMjdweCAtM3B4IHJnYmEoMjU1LDY5LDY5LDAuODQpOyBcXHJcXG5ib3gtc2hhZG93OiAycHggMnB4IDI3cHggLTNweCByZ2JhKDI1NSw2OSw2OSwwLjg0KTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY29udGFpbmVyIHAge1xcclxcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBDYXZlYXQ7XFxyXFxufVxcclxcblxcclxcbi5hbGJ1bS1waG90byxcXHJcXG4jY29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBmb250LXNpemU6M3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAycmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNpZDogJycsXG4gIGNzOiAnJyxcbiAgdG9rZW5fZW5kcG9pbnQ6ICcnLFxuICBhY2Nlc3NfdG9rZW46ICcnLFxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGl0ZW1zOiBbXG4gICAge1xuICAgICAgYXJ0aXN0OiAnRG9uIFRvbGl2ZXInLFxuICAgICAgYWxidW1fbmFtZTogJ0xpZmUgb2YgYSBET04nLFxuICAgICAgaWQ6ICcyV21KNXdwNXdLQmxJSkU2RkRBSUJKJyxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2FiNzM4YjI1Yjg2YmYwMmYwMzQ2YzUzZCcsXG4gICAgICBsaWtlczogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGFydGlzdDogJ2Jibm8kJyxcbiAgICAgIGFsYnVtX25hbWU6ICdlYXQgeWEgdmVnZ2llcycsXG4gICAgICBpZDogJzZpTXNoc2l4WmU4b010ZVFkbG41a3AnLFxuICAgICAgaW1hZ2U6ICdodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczOGMyNWFhNThkN2UwODk0ZGY3NDM2MzQ4JyxcbiAgICAgIGxpa2VzOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgYXJ0aXN0OiAnSmFtZXMgQmxha2UnLFxuICAgICAgYWxidW1fbmFtZTogJ0ZyaWVuZHMgVGhhdCBCcmVhayBZb3VyIEhlYXJ0JyxcbiAgICAgIGlkOiAnMXpOdEpGTUNOSXlUMFgxOWpwY0kzaicsXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMzOGQwMzAwNDhlYzc3MGIxNTYzM2RiYzEnLFxuICAgICAgbGlrZXM6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBhcnRpc3Q6ICdQaW5rUGFudGhlcmVzcycsXG4gICAgICBhbGJ1bV9uYW1lOiAnSSBtdXN0IGFwb2xvZ2lzZScsXG4gICAgICBpZDogJzBtMXd3SXg5RW9hN2ZXYjlLWWg3cHQnLFxuICAgICAgaW1hZ2U6ICdodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMGUzYWQ5ZjdlMzViMmQyZTM5YzU4ZTgxJyxcbiAgICAgIGxpa2VzOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgYXJ0aXN0OiAnTWl0c2tpJyxcbiAgICAgIGFsYnVtX25hbWU6ICdXb3JraW5nIGZvciB0aGUgS25pZmUnLFxuICAgICAgaWQ6ICc1ejFiQTd6aGxXbHlCZ0JBMnJONHVFJyxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2YzN2FjNTRkOGYzZTQ1ZjBkMWQwMTViZCcsXG4gICAgICBsaWtlczogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGFydGlzdDogJ1RhaW55JyxcbiAgICAgIGFsYnVtX25hbWU6ICdMbyBTaWVudG8gQkI6LyAod2l0aCBCYWQgQnVubnkgJiBKdWxpZXRhIFZlbmVnYXMpJyxcbiAgICAgIGlkOiAnNDU4OU9JRlJacDQxcWJzcDdUV0ZDeCcsXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNkMmRjYzY4ODUxZDAwNDEzMTQ3ZDlhZjYnLFxuICAgICAgbGlrZXM6IDAsXG4gICAgfSxcbiAgXSxcbn07IiwiZXhwb3J0IGRlZmF1bHQgKHsgY3JlZGVudGlhbHMsIGZldGNoIH0pID0+IHtcbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y3JlZGVudGlhbHMuYWNjZXNzX3Rva2VufWAsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICB9O1xuXG4gIGNvbnN0IGludm9sdmVtZW50QmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvJztcbiAgY29uc3QgYXBwSWQgPSAnJzsgLy8gVE9ETzpcblxuICBjb25zdCBBUElNZXRob2RzID0ge1xuICAgIGdldE5ld1JlbGVhc2VzOiBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9icm93c2UvbmV3LXJlbGVhc2VzJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICByZXR1cm4gZGF0YS5hbGJ1bXMuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGFydGlzdHMgPSBpdGVtLmFydGlzdHMubWFwKChhcnRpc3QpID0+ICh7XG4gICAgICAgICAgaHJlZjogYXJ0aXN0LmhyZWYsXG4gICAgICAgICAgbmFtZTogYXJ0aXN0Lm5hbWUsXG4gICAgICAgICAgdHlwZTogYXJ0aXN0LnR5cGUsXG4gICAgICAgICAgaWQ6IGFydGlzdC5pZCxcbiAgICAgICAgICBhcnRpc3Q6IGFydGlzdC5uYW1lLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgYXJ0aXN0cyxcbiAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXG4gICAgICAgICAgYWxidW1fdHlwZTogaXRlbS5hbGJ1bV90eXBlLFxuICAgICAgICAgIGltYWdlOiBpdGVtLmltYWdlc1swXS51cmwsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFzeW5jIGdldEFsbExpa2VzKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEJhc2VVUkx9YXBwcy8ke2FwcElkfS9saWtlc2ApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH0sXG4gICAgYXN5bmMgZ2V0TGlrZXNGb3IoaWQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmdldEFsbExpa2VzKCk7XG4gICAgICByZXR1cm4gZGF0YS5maW5kKChpKSA9PiBpLml0ZW1faWQgPT09IGlkKT8ubGlrZXM7XG4gICAgfSxcbiAgICBhc3luYyBnZXRDb21tZW50c0ZvcihpZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEJhc2VVUkx9YXBwcy8ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgYWRkTGlrZUZvcihpZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEJhc2VVUkx9YXBwcy8ke2FwcElkfS9saWtlc2AsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRTdGF0dXMgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGlmIChjcmVhdGVkU3RhdHVzICE9PSAnQ3JlYXRlZCcpIHRocm93IEVycm9yO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6JywgZXJyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgYWRkQ29tbWVudEZvcihpZCwgdXNlcm5hbWUsIGNvbW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2ZW1lbnRCYXNlVVJMfWFwcHMvJHthcHBJZH0vY29tbWVudHNgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBjb21tZW50LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY3JlYXRlZFN0YXR1cyA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgaWYgKGNyZWF0ZWRTdGF0dXMgIT09ICdDcmVhdGVkJykgdGhyb3cgRXJyb3I7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjonLCBlcnIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIEFQSU1ldGhvZHM7XG59O1xuIiwiaW1wb3J0IEFQSUZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBjcmVkZW50aWFscyBmcm9tICcuL2NyZWRlbnRpYWxzLmpzJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzJztcblxuY29uc3QgYXBpUGxhY2Vob2xkZXIgPSBBUElGYWN0b3J5KHsgY3JlZGVudGlhbHMsIGZldGNoIH0pO1xuXG4vLyBOT1RFOiBUSElTIGFyZSBwbGFjZWhvbGRlcnMgZm9yIHRoZSByZWFsIEFQSVxuXG5jb25zdCBmYWtlRGF0YSA9IHtcbiAgbGlrZXM6IGRhdGEuaXRlbXMubWFwKChpdGVtKSA9PiAoeyBpdGVtX2lkOiBpdGVtLmlkLCBsaWtlczogMCB9KSksXG4gIGFsbF9jb21tZW50czogZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7IGl0ZW1faWQ6IGl0ZW0uaWQsIGNvbW1lbnRzOiBbXSB9KSksXG59O1xuXG5hcGlQbGFjZWhvbGRlci5nZXROZXdSZWxlYXNlcyA9IGFzeW5jICgpID0+IGRhdGEuaXRlbXM7XG5cbmFwaVBsYWNlaG9sZGVyLmdldEFsbExpa2VzID0gYXN5bmMgKCkgPT4gZmFrZURhdGEubGlrZXM7XG5hcGlQbGFjZWhvbGRlci5nZXRMaWtlc0ZvciA9IGFzeW5jIChpZCkgPT4gZmFrZURhdGEubGlrZXMuZmluZCgobCkgPT4gbC5pdGVtX2lkID09PSBpZCkubGlrZXM7XG5hcGlQbGFjZWhvbGRlci5nZXRDb21tZW50c0ZvciA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1c2VyID0gZmFrZURhdGEuYWxsX2NvbW1lbnRzLmZpbmQoKGMpID0+IGMuaXRlbV9pZCA9PT0gaWQpO1xuICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuICByZXR1cm4gdXNlci5jb21tZW50cztcbn07XG5cbmFwaVBsYWNlaG9sZGVyLmFkZENvbW1lbnRGb3IgPSBhc3luYyAoaWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBmYWtlRGF0YS5hbGxfY29tbWVudHMuZmluZCgoYykgPT4gYy5pdGVtX2lkID09PSBpZCk7XG4gIGlmICghdXNlcikgcmV0dXJuIGZhbHNlO1xuICB1c2VyLmNvbW1lbnRzLnB1c2goe1xuICAgIGNyZWF0aW9uX2RhdGU6ICcyMDIxLTEwLTEzJyxcbiAgICB1c2VybmFtZSxcbiAgICBjb21tZW50LFxuICB9KTtcbiAgcmV0dXJuIHRydWU7XG59O1xuYXBpUGxhY2Vob2xkZXIuYWRkTGlrZUZvciA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1c2VyID0gZmFrZURhdGEubGlrZXMuZmluZCgobCkgPT4gbC5pdGVtX2lkID09PSBpZCk7XG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB1c2VyLmxpa2VzICs9IDE7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpUGxhY2Vob2xkZXI7IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tY29udGFpbmVyJykubGVuZ3RoOyIsImltcG9ydCAnLi9tb2RhbC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93TW9kYWw6ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmlkID0gJ21vZGFsJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjb25zdCBpbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWJ0blwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzMjIwNzE5MTY3Ny04NDQ2OTg1ZjlkNjU/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNjEmcT04MFwiIGFsdD1cImFsYnVtLWFydFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkaW5nXCI+U3BhY2UgMzwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWItaGVhZGluZ1wiPkNvbW1lbnRzICgyKTwvc3Bhbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT4wMy8xMS8yMDIxIEFsZXg6IEknZCBsb3ZlIHRvIGJ1eSBpdDwvbGk+XG4gICAgICAgICAgPGxpPjAzLzEyLzIwMjEgTWlhOiBJIGxvdmU8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN1Yi1oZWFkaW5nXCI+QWRkIGEgY29tbWVudDwvc3Bhbj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiaW5zaWdodHNcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNvbW1lbnRcIj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+YDtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgbW9kYWwucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH0sXG4gIGhpZGVNb2RhbDogKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk/LnJlbW92ZSgpLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBBUEkgZnJvbSAnLi9hcGkvZnVuY3Rpb25zLmpzJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsL2luZGV4LmpzJztcbmltcG9ydCBjb3VudFRvdGFsSXRlbXMgZnJvbSAnLi9jb3VudFRvdGFsSXRlbXMuanMnO1xuXG5jb25zdCBwb3B1bGF0ZUxpc3QgPSAoaXRlbSkgPT4ge1xuICBjb25zdCBpdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcy1jb250YWluZXInKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0tY29udGFpbmVyJyk7XG4gIGNvbnN0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XG4gIHBob3RvLnNldEF0dHJpYnV0ZSgnc3JjJywgaXRlbS5pbWFnZSk7XG4gIHBob3RvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWxidW0tcGhvdG8nKTtcbiAgZGl2LmFwcGVuZENoaWxkKHBob3RvKTtcbiAgY29uc3QgaGVhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTUEFOJyk7XG4gIGNvbnN0IGxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xuICBoZWFydC5pbm5lckhUTUwgPSAn4p2kJztcbiAgaGVhcnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFydCcpO1xuICBoZWFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBBUEkuYWRkTGlrZUZvcihpdGVtLmlkKTtcbiAgICBjb25zdCBuZXdMaWtlcyA9IGF3YWl0IEFQSS5nZXRMaWtlc0ZvcihpdGVtLmlkKTtcbiAgICBsaWtlcy5pbm5lckhUTUwgPSBgJHtuZXdMaWtlc30gbGlrZXNgO1xuICB9KTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGl0ZW0uYXJ0aXN0KTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoaGVhcnQpO1xuICBsaWtlcy5pbm5lckhUTUwgPSBgJHtpdGVtLmxpa2VzfSBsaWtlc2A7XG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gIGNvbW1lbnRzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tbWVudHMtYnV0dG9uJyk7XG4gIGNvbW1lbnRzLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcbiAgY29tbWVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBNb2RhbC5zaG93TW9kYWwoJ3Nob3dNb2RhbCBjYWxsZWQhIScpKTtcbiAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZGl2LmFwcGVuZENoaWxkKGxpa2VzKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNvbW1lbnRzKTtcbiAgaXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBBUEkuZ2V0TmV3UmVsZWFzZXMoKTtcblxuICAvLyBhd2FpdCBBUEkuYWRkTGlrZUZvcihpZClcblxuICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBwb3B1bGF0ZUxpc3QoZWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd1RvdGFsT2ZJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdG90YWwgPSBjb3VudFRvdGFsSXRlbXMoKTtcbiAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbC1pdGVtcycpO1xuICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IGAoJHt0b3RhbH0pYDtcbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IG1haW4oKTtcbiAgYXdhaXQgc2hvd1RvdGFsT2ZJdGVtcygpO1xufTtcblxuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9