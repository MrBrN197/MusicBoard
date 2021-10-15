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
___CSS_LOADER_EXPORT___.push([module.id, "#modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: transparent;\n}\n#modal button {\n  border: none;\n}\n#modal img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n#modal input:not([type=submit]),\n#modal textarea {\n  background-color: transparent;\n  border: none;\n}\n#modal .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 1rem;\n  gap: 1rem;\n  background-color: whitesmoke;\n  border: 2px solid black;\n  width: 50vw;\n  height: 80vh;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 1rem;\n}\n#modal .content .close-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0.8rem;\n  font-size: 1.2rem;\n  margin: 1rem;\n  cursor: pointer;\n  border-radius: 0.2rem;\n}\n#modal .content .close-btn:hover {\n  background-color: #b3b3b3;\n}\n#modal .content .image {\n  width: 80%;\n  flex-shrink: 1;\n  min-height: 0;\n}\n#modal .content .heading,\n#modal .content .sub-heading {\n  font-weight: bolder;\n}\n#modal .content .comments-box {\n  height: 20%;\n  flex-shrink: 0;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.1);\n  padding: 0.4rem;\n}\n#modal .content form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n#modal .content form input,\n#modal .content form textarea {\n  border: 2px solid black;\n  padding: 0.2rem 0.4rem;\n}\n#modal .content form input[type=submit] {\n  font-size: 1rem;\n  padding: 0.4rem 1rem;\n  cursor: pointer;\n}\n\n#modal.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/modal/modal.scss"],"names":[],"mappings":"AACA;EACE,eAAA;EACA,MAAA;EAAA,QAAA;EAAA,SAAA;EAAA,OAAA;EACA,6BAAA;AAAF;AAEE;EACE,YAAA;AAAJ;AAGE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;AADJ;AAIE;;EAEE,6BAAA;EACA,YAAA;AAFJ;AAKE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;EACA,4BAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;AAHJ;AAKI;EACE,kBAAA;EACA,QAAA;EACA,MAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;AAHN;AAKM;EACE,yBAAA;AAHR;AAOI;EACE,UAAA;EACA,cAAA;EACA,aAAA;AALN;AAQI;;EAEE,mBAAA;AANN;AASI;EACE,WAAA;EACA,cAAA;EACA,cAAA;EACA,oCAAA;EACA,eAAA;AAPN;AAUI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;EAAA,SAAA;AARN;AAUM;;EAEE,uBAAA;EACA,sBAAA;AARR;AAWM;EACE,eAAA;EACA,oBAAA;EACA,eAAA;AATR;;AAeA;EACE,aAAA;AAZF","sourcesContent":["// MODAL\r\n#modal {\r\n  position: fixed;\r\n  inset: 0;\r\n  background-color: transparent;\r\n\r\n  button {\r\n    border: none;\r\n  }\r\n\r\n  img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n\r\n  input:not([type=submit]),\r\n  textarea {\r\n    background-color: transparent;\r\n    border: none;\r\n  }\r\n\r\n  .content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: whitesmoke;\r\n    border: 2px solid black;\r\n    width: 50vw;\r\n    height: 80vh;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    padding: 1rem;\r\n\r\n    .close-btn {\r\n      position: absolute;\r\n      right: 0;\r\n      top: 0;\r\n      padding: 0.8rem;\r\n      font-size: 1.2rem;\r\n      margin: 1rem;\r\n      cursor: pointer;\r\n      border-radius: 0.2rem;\r\n\r\n      &:hover {\r\n        background-color: rgb(179, 179, 179);\r\n      }\r\n    }\r\n\r\n    .image {\r\n      width: 80%;\r\n      flex-shrink: 1;\r\n      min-height: 0;\r\n    }\r\n\r\n    .heading,\r\n    .sub-heading {\r\n      font-weight: bolder;\r\n    }\r\n\r\n    .comments-box {\r\n      height: 20%;\r\n      flex-shrink: 0;\r\n      overflow: auto;\r\n      background-color: rgba(0, 0, 0, 0.1);\r\n      padding: 0.4rem;\r\n    }\r\n\r\n    form {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      gap: 1rem;\r\n\r\n      input,\r\n      textarea {\r\n        border: 2px solid black;\r\n        padding: 0.2rem 0.4rem;\r\n      }\r\n\r\n      input[type=submit] {\r\n        font-size: 1rem;\r\n        padding: 0.4rem 1rem;\r\n        cursor: pointer;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#modal.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n}\n\n@font-face {\n  font-family: \"Caveat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Akronim\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"ttf\");\n}\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nheader {\n  box-shadow: -1px 5px 24px 5px #000000;\n  background-color: black;\n}\n\n.justify-content-space-around {\n  justify-content: space-around;\n}\n\n.justify-content-space-between {\n  justify-content: space-between;\n}\n\n#logo {\n  transform: rotate(20deg);\n  width: 80px;\n  height: 70px;\n  margin-top: 6px;\n}\n\n.margin-auto {\n  margin: auto;\n}\n\n.cursor-pointer,\n.album-photo,\n.heart,\n#comments-button {\n  cursor: pointer;\n}\n\n#comments-button {\n  color: white;\n  font-size: large;\n  background-color: #f05f5f;\n  padding: 8px;\n  border-radius: 6px;\n  outline: lightseagreen;\n  border: none;\n  transition: background-color 1s, font-weight 0.5s;\n}\n\n#comments-button:hover {\n  background-color: red;\n  font-weight: 900;\n}\n\nul {\n  list-style: none;\n}\n\nnav ul li {\n  margin: 25px;\n  justify-content: space-around;\n}\n\nnav li a {\n  text-decoration: none;\n  font-family: Akronim, cursive;\n  font-weight: bolder;\n  font-size: 30px;\n  font-style: italic;\n  display: inline-flex;\n  color: whitesmoke;\n  transition: color 1s;\n}\n\nnav li a:hover {\n  color: red;\n}\n\n#items-container {\n  display: grid;\n  padding-left: 20rem;\n  padding-right: 20rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.item-container {\n  box-shadow: 2px 2px 27px -3px rgba(0, 0, 0, 0.84);\n  margin: 30px;\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 15px;\n  transition: box-shadow 1s;\n}\n\n.item-container:hover {\n  box-shadow: 2px 2px 27px -3px rgba(255, 69, 69, 0.84);\n}\n\n.item-container p {\n  padding-right: 10%;\n  padding-left: 10%;\n  font-size: 1.3rem;\n  margin-top: 5px;\n  font-family: Caveat;\n}\n\n.album-photo,\n#comments-button {\n  width: 100%;\n}\n\n.display-flex {\n  display: flex;\n}\n\n.heart {\n  float: right;\n  font-size: 3rem;\n}\n\n.heart:hover {\n  color: red;\n}\n\nfooter {\n  padding: 30px;\n  color: ivory;\n  font-weight: bolder;\n  font-size: 1.1rem;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  background: #aa7e76;\n  background: linear-gradient(18deg, #aa7e76 0%, #c9776f 0%, rgba(147, 75, 75, 0.599877451) 100%);\n}\n\n.footer-text {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.footer-image {\n  float: right;\n  transform: rotate(40deg);\n  height: 60px;\n  width: 60px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;;;EAGE,UAAA;EACA,SAAA;AACF;;AAEA;EACE,qBAAA;EACA,0DAAA;AACF;AAEA;EACE,sBAAA;EACA,0DAAA;AAAF;AAGA;EACE,yCAAA;AADF;;AAIA;EAEE,qCAAA;EACA,uBAAA;AADF;;AAIA;EACE,6BAAA;AADF;;AAIA;EACE,8BAAA;AADF;;AAIA;EACE,wBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AADF;;AAIA;EACE,YAAA;AADF;;AAIA;;;;EAIE,eAAA;AADF;;AAIA;EACE,YAAA;EACA,gBAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,iDAAA;AADF;;AAIA;EACE,qBAAA;EACA,gBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,YAAA;EACA,6BAAA;AADF;;AAIA;EACE,qBAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;EACA,oBAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,qCAAA;AADF;;AAIA;EAEE,iDAAA;EACA,YAAA;EACA,gCAAA;EACA,4BAAA;EACA,yBAAA;AADF;;AAIA;EAEA,qDAAA;AADA;;AAIA;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;AADF;;AAIA;;EAEE,WAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,YAAA;EACA,eAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,aAAA;EACA,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EAAA,oBAAA;EACA,mBAAA;EACA,+FAAA;AADF;;AAIA;EACE,gBAAA;EACA,mBAAA;AADF;;AAIA;EACE,YAAA;EACA,wBAAA;EACA,YAAA;EACA,WAAA;AADF","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Caveat';\r\n  src: url('./assets/fonts/Caveat-VariableFont_wght.ttf') format('ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Akronim';\r\n  src: url('./assets/fonts/Akronim-Regular.ttf') format('ttf');\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nheader {\r\n  -webkit-box-shadow: -1px 5px 24px 5px #000000; \r\n  box-shadow: -1px 5px 24px 5px #000000;\r\n  background-color: black;\r\n}\r\n\r\n.justify-content-space-around {\r\n  justify-content: space-around;\r\n}\r\n\r\n.justify-content-space-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n#logo {\r\n  transform: rotate(20deg);\r\n  width: 80px;\r\n  height: 70px;\r\n  margin-top: 6px;\r\n}\r\n\r\n.margin-auto {\r\n  margin: auto;\r\n}\r\n\r\n.cursor-pointer,\r\n.album-photo,\r\n.heart,\r\n#comments-button {\r\n  cursor: pointer;\r\n}\r\n\r\n#comments-button {\r\n  color: white;\r\n  font-size: large;\r\n  background-color: rgb(240, 95, 95);\r\n  padding: 8px;\r\n  border-radius: 6px;\r\n  outline: lightseagreen;\r\n  border: none;\r\n  transition: background-color 1s, font-weight 0.5s;\r\n}\r\n\r\n#comments-button:hover {\r\n  background-color: red;\r\n  font-weight: 900;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li {\r\n  margin: 25px;\r\n  justify-content: space-around;\r\n}\r\n\r\nnav li a {\r\n  text-decoration: none;\r\n  font-family: Akronim, cursive;\r\n  font-weight: bolder;\r\n  font-size: 30px;\r\n  font-style: italic;\r\n  display: inline-flex;\r\n  color:whitesmoke;\r\n  transition: color 1s;\r\n}\r\n\r\nnav li a:hover {\r\n  color:red;\r\n}\r\n\r\n#items-container {\r\n  display: grid;\r\n  padding-left: 20rem;\r\n  padding-right: 20rem;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n.item-container {\r\n  -webkit-box-shadow: 2px 2px 27px -3px rgba(0,0,0,0.84); \r\n  box-shadow: 2px 2px 27px -3px rgba(0,0,0,0.84);\r\n  margin: 30px;\r\n  border-bottom-right-radius: 10px;\r\n  border-top-left-radius: 15px;\r\n  transition: box-shadow 1s;\r\n}\r\n\r\n.item-container:hover {\r\n  -webkit-box-shadow: 2px 2px 27px -3px rgba(255,69,69,0.84); \r\nbox-shadow: 2px 2px 27px -3px rgba(255,69,69,0.84);\r\n}\r\n\r\n.item-container p {\r\n  padding-right: 10%;\r\n  padding-left: 10%;\r\n  font-size: 1.3rem;\r\n  margin-top: 5px;\r\n  font-family: Caveat;\r\n}\r\n\r\n.album-photo,\r\n#comments-button {\r\n  width: 100%;\r\n}\r\n\r\n.display-flex {\r\n  display: flex;\r\n}\r\n\r\n.heart {\r\n  float: right;\r\n  font-size:3rem;\r\n}\r\n\r\n.heart:hover {\r\n  color: red;\r\n}\r\n\r\nfooter {\r\n  padding: 30px;\r\n  color:ivory;\r\n  font-weight: bolder;\r\n  font-size: 1.1rem;\r\n  padding-block: 2rem;\r\n  background: rgb(170,126,118);\r\n  background: linear-gradient(18deg, rgba(170,126,118,1) 0%, rgba(201,119,111,1) 0%, rgba(147,75,75,0.5998774509803921) 100%);\r\n}\r\n\r\n.footer-text {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.footer-image {\r\n  float: right;\r\n  transform: rotate(40deg);\r\n  height: 60px;\r\n  width: 60px;\r\n}\r\n"],"sourceRoot":""}]);
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
  all_comments: _data_js__WEBPACK_IMPORTED_MODULE_2__["default"].items.map((item) => ({
    item_id: item.id,
    comments: [
      {
        username: 'Jane',
        comment: 'Hi this is the first comment',
        creation_date: '2021-10-13',
      },
      {
        username: 'Michael',
        comment: 'This is really great!',
        creation_date: '2021-10-12',
      },
      {
        username: 'Evelyn',
        comment: 'Wow Amazing!!!!',
        creation_date: '2021-10-14',
      },
    ],
  })),
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
/* harmony import */ var _api_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/functions.js */ "./src/api/functions.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/modal/utils.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  showModal: async ({ album_name: albumName, image, id }) => {
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
          <img src="${image}" alt="album-art">
        </div>
        <span class="heading">${albumName}</span>
        <span class="sub-heading">Comments (0)</span>
        <ul class="comments-box">

        </ul>
        <span class="sub-heading">Add a comment</span>
        <form action="#">
            <input type="text" placeholder="Your name" name="username">
            <textarea name="insights" placeholder="Your insights"></textarea>
            <input type="submit" value="Comment">
        </form>
      </div>`;
    modal.innerHTML = innerHTML;
    const commentsBox = modal.querySelector('.comments-box');

    let comments = await _api_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCommentsFor(id);

    comments.forEach((commentDetails) => {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addComment)(commentsBox, commentDetails);
    });

    let totalComments = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.calculateNumberOfComments)(comments);
    const subHeading = modal.querySelector('.sub-heading');
    subHeading.textContent = `Comments (${totalComments})`;

    const form = modal.querySelector('form');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = form.username.value;
      const comment = form.insights.value;
      if (!username || !comment) {
        return;
      }
      form.username.value = '';
      form.insights.value = '';
      await _api_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"].addCommentFor(id, username, comment);

      // update Comments counter
      totalComments += 1;
      subHeading.textContent = `Comments (${totalComments})`;

      // clear commentsBox
      commentsBox.innerHTML = '';
      comments = await _api_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCommentsFor(id);
      comments.forEach((commentDetails) => {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addComment)(commentsBox, commentDetails);
      });
    });

    modal.querySelector('.close-btn').addEventListener('click', () => {
      modal.remove();
    });
  },
  hideModal: () => document.getElementById('modal')?.remove(),
});

/***/ }),

/***/ "./src/modal/utils.js":
/*!****************************!*\
  !*** ./src/modal/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateNumberOfComments": () => (/* binding */ calculateNumberOfComments),
/* harmony export */   "addComment": () => (/* binding */ addComment)
/* harmony export */ });
const calculateNumberOfComments = (comments) => comments.length;
const addComment = (container, { creation_date: createdAt, username, comment }) => {
  const li = document.createElement('li');
  const date = (new Date(createdAt)).toLocaleDateString();
  li.textContent = `${date} ${username}: ${comment}`;
  container.appendChild(li);
};

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
  comments.addEventListener('click', () => _modal_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].showModal({
    image: item.image,
    id: item.id,
    album_name: item.album_name,
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix3RUFBa0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGdCQUFnQiwrREFBZTtBQUMvQjtBQUNBLDZCQUE2QixNQUFNO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvbW9kYWwvbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9tb2RhbC9tb2RhbC5zY3NzP2MxZmIiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvc3R5bGUuc2Nzcz80MGY3Iiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvYXBpL2NyZWRlbnRpYWxzLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL2FwaS9kYXRhLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL2FwaS9mYWN0b3J5LmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL2FwaS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvY291bnRUb3RhbEl0ZW1zLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL21vZGFsL3V0aWxzLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNtb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuI21vZGFsIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNtb2RhbCBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbiNtb2RhbCBpbnB1dDpub3QoW3R5cGU9c3VibWl0XSksXFxuI21vZGFsIHRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmNsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmNsb3NlLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiM2IzO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmltYWdlIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBmbGV4LXNocmluazogMTtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxufVxcbiNtb2RhbCAuY29udGVudCAuaGVhZGluZyxcXG4jbW9kYWwgLmNvbnRlbnQgLnN1Yi1oZWFkaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbiNtb2RhbCAuY29udGVudCAuY29tbWVudHMtYm94IHtcXG4gIGhlaWdodDogMjAlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG59XFxuI21vZGFsIC5jb250ZW50IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSBpbnB1dCxcXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XFxufVxcbiNtb2RhbCAuY29udGVudCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21vZGFsLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kYWwvbW9kYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQUEsUUFBQTtFQUFBLFNBQUE7RUFBQSxPQUFBO0VBQ0EsNkJBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtBQUFKO0FBR0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBREo7QUFJRTs7RUFFRSw2QkFBQTtFQUNBLFlBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFISjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFITjtBQUtNO0VBQ0UseUJBQUE7QUFIUjtBQU9JO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBTE47QUFRSTs7RUFFRSxtQkFBQTtBQU5OO0FBU0k7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUFQTjtBQVVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQVJOO0FBVU07O0VBRUUsdUJBQUE7RUFDQSxzQkFBQTtBQVJSO0FBV007RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBVFI7O0FBZUE7RUFDRSxhQUFBO0FBWkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gTU9EQUxcXHJcXG4jbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGlucHV0Om5vdChbdHlwZT1zdWJtaXRdKSxcXHJcXG4gIHRleHRhcmVhIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIGhlaWdodDogODB2aDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgLmNsb3NlLWJ0biB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbWFnZSB7XFxyXFxuICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICBmbGV4LXNocmluazogMTtcXHJcXG4gICAgICBtaW4taGVpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkaW5nLFxcclxcbiAgICAuc3ViLWhlYWRpbmcge1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbW1lbnRzLWJveCB7XFxyXFxuICAgICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBmb3JtIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgICAgIGlucHV0LFxcclxcbiAgICAgIHRleHRhcmVhIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwuaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQ2F2ZWF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0Frcm9uaW0tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNhdmVhdFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFrcm9uaW1cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuICBib3gtc2hhZG93OiAtMXB4IDVweCAyNHB4IDVweCAjMDAwMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYXJvdW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LXNwYWNlLWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbG9nbyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG59XFxuXFxuLm1hcmdpbi1hdXRvIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmN1cnNvci1wb2ludGVyLFxcbi5hbGJ1bS1waG90byxcXG4uaGVhcnQsXFxuI2NvbW1lbnRzLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb21tZW50cy1idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDVmNWY7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBvdXRsaW5lOiBsaWdodHNlYWdyZWVuO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgZm9udC13ZWlnaHQgMC41cztcXG59XFxuXFxuI2NvbW1lbnRzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcbiAgbWFyZ2luOiAyNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbm5hdiBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBBa3JvbmltLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAxcztcXG59XFxuXFxubmF2IGxpIGE6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2l0ZW1zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjdweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC44NCk7XFxuICBtYXJnaW46IDMwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzO1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXI6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyN3B4IC0zcHggcmdiYSgyNTUsIDY5LCA2OSwgMC44NCk7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciBwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBmb250LWZhbWlseTogQ2F2ZWF0O1xcbn1cXG5cXG4uYWxidW0tcGhvdG8sXFxuI2NvbW1lbnRzLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRpc3BsYXktZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGVhcnQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uaGVhcnQ6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBjb2xvcjogaXZvcnk7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgYmFja2dyb3VuZDogI2FhN2U3NjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOGRlZywgI2FhN2U3NiAwJSwgI2M5Nzc2ZiAwJSwgcmdiYSgxNDcsIDc1LCA3NSwgMC41OTk4Nzc0NTEpIDEwMCUpO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5mb290ZXItaW1hZ2Uge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSwwREFBQTtBQUNGO0FBRUE7RUFDRSxzQkFBQTtFQUNBLDBEQUFBO0FBQUY7QUFHQTtFQUNFLHlDQUFBO0FBREY7O0FBSUE7RUFFRSxxQ0FBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7QUFERjs7QUFJQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7Ozs7RUFJRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7QUFERjs7QUFJQTtFQUVFLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBRUEscURBQUE7QUFEQTs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBOztFQUVFLFdBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUFBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrRkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9DYXZlYXQtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCd0dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0Frcm9uaW0nO1xcclxcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0Frcm9uaW0tUmVndWxhci50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDVweCAyNHB4IDVweCAjMDAwMDAwOyBcXHJcXG4gIGJveC1zaGFkb3c6IC0xcHggNXB4IDI0cHggNXB4ICMwMDAwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktY29udGVudC1zcGFjZS1hcm91bmQge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlbiB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyZ2luLWF1dG8ge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY3Vyc29yLXBvaW50ZXIsXFxyXFxuLmFsYnVtLXBob3RvLFxcclxcbi5oZWFydCxcXHJcXG4jY29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzLWJ1dHRvbiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgOTUsIDk1KTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG91dGxpbmU6IGxpZ2h0c2VhZ3JlZW47XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBmb250LXdlaWdodCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBtYXJnaW46IDI1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IEFrcm9uaW0sIGN1cnNpdmU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBjb2xvcjp3aGl0ZXNtb2tlO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMXM7XFxyXFxufVxcclxcblxcclxcbm5hdiBsaSBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOnJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI2l0ZW1zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcmVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY29udGFpbmVyIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAyN3B4IC0zcHggcmdiYSgwLDAsMCwwLjg0KTsgXFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDI3cHggLTNweCByZ2JhKDAsMCwwLDAuODQpO1xcclxcbiAgbWFyZ2luOiAzMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAyN3B4IC0zcHggcmdiYSgyNTUsNjksNjksMC44NCk7IFxcclxcbmJveC1zaGFkb3c6IDJweCAycHggMjdweCAtM3B4IHJnYmEoMjU1LDY5LDY5LDAuODQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1jb250YWluZXIgcCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IENhdmVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmFsYnVtLXBob3RvLFxcclxcbiNjb21tZW50cy1idXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTozcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQ6aG92ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBjb2xvcjppdm9yeTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTcwLDEyNiwxMTgpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4ZGVnLCByZ2JhKDE3MCwxMjYsMTE4LDEpIDAlLCByZ2JhKDIwMSwxMTksMTExLDEpIDAlLCByZ2JhKDE0Nyw3NSw3NSwwLjU5OTg3NzQ1MDk4MDM5MjEpIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRleHQge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItaW1hZ2Uge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2lkOiAnJyxcbiAgY3M6ICcnLFxuICB0b2tlbl9lbmRwb2ludDogJycsXG4gIGFjY2Vzc190b2tlbjogJycsXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaXRlbXM6IFtcbiAgICB7XG4gICAgICBhcnRpc3Q6ICdEb24gVG9saXZlcicsXG4gICAgICBhbGJ1bV9uYW1lOiAnTGlmZSBvZiBhIERPTicsXG4gICAgICBpZDogJzJXbUo1d3A1d0tCbElKRTZGREFJQkonLFxuICAgICAgaW1hZ2U6ICdodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczYWI3MzhiMjViODZiZjAyZjAzNDZjNTNkJyxcbiAgICAgIGxpa2VzOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgYXJ0aXN0OiAnYmJubyQnLFxuICAgICAgYWxidW1fbmFtZTogJ2VhdCB5YSB2ZWdnaWVzJyxcbiAgICAgIGlkOiAnNmlNc2hzaXhaZThvTXRlUWRsbjVrcCcsXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzM4YzI1YWE1OGQ3ZTA4OTRkZjc0MzYzNDgnLFxuICAgICAgbGlrZXM6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBhcnRpc3Q6ICdKYW1lcyBCbGFrZScsXG4gICAgICBhbGJ1bV9uYW1lOiAnRnJpZW5kcyBUaGF0IEJyZWFrIFlvdXIgSGVhcnQnLFxuICAgICAgaWQ6ICcxek50SkZNQ05JeVQwWDE5anBjSTNqJyxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzM4ZDAzMDA0OGVjNzcwYjE1NjMzZGJjMScsXG4gICAgICBsaWtlczogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGFydGlzdDogJ1BpbmtQYW50aGVyZXNzJyxcbiAgICAgIGFsYnVtX25hbWU6ICdJIG11c3QgYXBvbG9naXNlJyxcbiAgICAgIGlkOiAnMG0xd3dJeDlFb2E3ZldiOUtZaDdwdCcsXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMwZTNhZDlmN2UzNWIyZDJlMzljNThlODEnLFxuICAgICAgbGlrZXM6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBhcnRpc3Q6ICdNaXRza2knLFxuICAgICAgYWxidW1fbmFtZTogJ1dvcmtpbmcgZm9yIHRoZSBLbmlmZScsXG4gICAgICBpZDogJzV6MWJBN3pobFdseUJnQkEyck40dUUnLFxuICAgICAgaW1hZ2U6ICdodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczZjM3YWM1NGQ4ZjNlNDVmMGQxZDAxNWJkJyxcbiAgICAgIGxpa2VzOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgYXJ0aXN0OiAnVGFpbnknLFxuICAgICAgYWxidW1fbmFtZTogJ0xvIFNpZW50byBCQjovICh3aXRoIEJhZCBCdW5ueSAmIEp1bGlldGEgVmVuZWdhcyknLFxuICAgICAgaWQ6ICc0NTg5T0lGUlpwNDFxYnNwN1RXRkN4JyxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2QyZGNjNjg4NTFkMDA0MTMxNDdkOWFmNicsXG4gICAgICBsaWtlczogMCxcbiAgICB9LFxuICBdLFxufTsiLCJleHBvcnQgZGVmYXVsdCAoeyBjcmVkZW50aWFscywgZmV0Y2ggfSkgPT4ge1xuICBjb25zdCBoZWFkZXJzID0ge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjcmVkZW50aWFscy5hY2Nlc3NfdG9rZW59YCxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gIH07XG5cbiAgY29uc3QgaW52b2x2ZW1lbnRCYXNlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nO1xuICBjb25zdCBhcHBJZCA9ICcnOyAvLyBUT0RPOlxuXG4gIGNvbnN0IEFQSU1ldGhvZHMgPSB7XG4gICAgZ2V0TmV3UmVsZWFzZXM6IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL2Jyb3dzZS9uZXctcmVsZWFzZXMnLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHJldHVybiBkYXRhLmFsYnVtcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgYXJ0aXN0cyA9IGl0ZW0uYXJ0aXN0cy5tYXAoKGFydGlzdCkgPT4gKHtcbiAgICAgICAgICBocmVmOiBhcnRpc3QuaHJlZixcbiAgICAgICAgICBuYW1lOiBhcnRpc3QubmFtZSxcbiAgICAgICAgICB0eXBlOiBhcnRpc3QudHlwZSxcbiAgICAgICAgICBpZDogYXJ0aXN0LmlkLFxuICAgICAgICAgIGFydGlzdDogYXJ0aXN0Lm5hbWUsXG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICBhcnRpc3RzLFxuICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcbiAgICAgICAgICBhbGJ1bV90eXBlOiBpdGVtLmFsYnVtX3R5cGUsXG4gICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2VzWzBdLnVybCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgZ2V0QWxsTGlrZXMoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QmFzZVVSTH1hcHBzLyR7YXBwSWR9L2xpa2VzYCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfSxcbiAgICBhc3luYyBnZXRMaWtlc0ZvcihpZCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0QWxsTGlrZXMoKTtcbiAgICAgIHJldHVybiBkYXRhLmZpbmQoKGkpID0+IGkuaXRlbV9pZCA9PT0gaWQpPy5saWtlcztcbiAgICB9LFxuICAgIGFzeW5jIGdldENvbW1lbnRzRm9yKGlkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QmFzZVVSTH1hcHBzLyR7YXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBhZGRMaWtlRm9yKGlkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QmFzZVVSTH1hcHBzLyR7YXBwSWR9L2xpa2VzYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlZFN0YXR1cyA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgaWYgKGNyZWF0ZWRTdGF0dXMgIT09ICdDcmVhdGVkJykgdGhyb3cgRXJyb3I7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGFkZENvbW1lbnRGb3IoaWQsIHVzZXJuYW1lLCBjb21tZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QmFzZVVSTH1hcHBzLyR7YXBwSWR9L2NvbW1lbnRzYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgY29tbWVudCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRTdGF0dXMgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGlmIChjcmVhdGVkU3RhdHVzICE9PSAnQ3JlYXRlZCcpIHRocm93IEVycm9yO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIEFQSU1ldGhvZHM7XG59O1xuIiwiaW1wb3J0IEFQSUZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBjcmVkZW50aWFscyBmcm9tICcuL2NyZWRlbnRpYWxzLmpzJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzJztcblxuY29uc3QgYXBpUGxhY2Vob2xkZXIgPSBBUElGYWN0b3J5KHsgY3JlZGVudGlhbHMsIGZldGNoIH0pO1xuXG4vLyBOT1RFOiBUSElTIGFyZSBwbGFjZWhvbGRlcnMgZm9yIHRoZSByZWFsIEFQSVxuXG5jb25zdCBmYWtlRGF0YSA9IHtcbiAgbGlrZXM6IGRhdGEuaXRlbXMubWFwKChpdGVtKSA9PiAoeyBpdGVtX2lkOiBpdGVtLmlkLCBsaWtlczogMCB9KSksXG4gIGFsbF9jb21tZW50czogZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgaXRlbV9pZDogaXRlbS5pZCxcbiAgICBjb21tZW50czogW1xuICAgICAge1xuICAgICAgICB1c2VybmFtZTogJ0phbmUnLFxuICAgICAgICBjb21tZW50OiAnSGkgdGhpcyBpcyB0aGUgZmlyc3QgY29tbWVudCcsXG4gICAgICAgIGNyZWF0aW9uX2RhdGU6ICcyMDIxLTEwLTEzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVzZXJuYW1lOiAnTWljaGFlbCcsXG4gICAgICAgIGNvbW1lbnQ6ICdUaGlzIGlzIHJlYWxseSBncmVhdCEnLFxuICAgICAgICBjcmVhdGlvbl9kYXRlOiAnMjAyMS0xMC0xMicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1c2VybmFtZTogJ0V2ZWx5bicsXG4gICAgICAgIGNvbW1lbnQ6ICdXb3cgQW1hemluZyEhISEnLFxuICAgICAgICBjcmVhdGlvbl9kYXRlOiAnMjAyMS0xMC0xNCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pKSxcbn07XG5cbmFwaVBsYWNlaG9sZGVyLmdldE5ld1JlbGVhc2VzID0gYXN5bmMgKCkgPT4gZGF0YS5pdGVtcztcblxuYXBpUGxhY2Vob2xkZXIuZ2V0QWxsTGlrZXMgPSBhc3luYyAoKSA9PiBmYWtlRGF0YS5saWtlcztcbmFwaVBsYWNlaG9sZGVyLmdldExpa2VzRm9yID0gYXN5bmMgKGlkKSA9PiBmYWtlRGF0YS5saWtlcy5maW5kKChsKSA9PiBsLml0ZW1faWQgPT09IGlkKS5saWtlcztcbmFwaVBsYWNlaG9sZGVyLmdldENvbW1lbnRzRm9yID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBmYWtlRGF0YS5hbGxfY29tbWVudHMuZmluZCgoYykgPT4gYy5pdGVtX2lkID09PSBpZCk7XG4gIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG4gIHJldHVybiB1c2VyLmNvbW1lbnRzO1xufTtcblxuYXBpUGxhY2Vob2xkZXIuYWRkQ29tbWVudEZvciA9IGFzeW5jIChpZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgdXNlciA9IGZha2VEYXRhLmFsbF9jb21tZW50cy5maW5kKChjKSA9PiBjLml0ZW1faWQgPT09IGlkKTtcbiAgaWYgKCF1c2VyKSByZXR1cm4gZmFsc2U7XG4gIHVzZXIuY29tbWVudHMucHVzaCh7XG4gICAgY3JlYXRpb25fZGF0ZTogJzIwMjEtMTAtMTMnLFxuICAgIHVzZXJuYW1lLFxuICAgIGNvbW1lbnQsXG4gIH0pO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5hcGlQbGFjZWhvbGRlci5hZGRMaWtlRm9yID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBmYWtlRGF0YS5saWtlcy5maW5kKChsKSA9PiBsLml0ZW1faWQgPT09IGlkKTtcbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHVzZXIubGlrZXMgKz0gMTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGlQbGFjZWhvbGRlcjsiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1jb250YWluZXInKS5sZW5ndGg7IiwiaW1wb3J0ICcuL21vZGFsLnNjc3MnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi9hcGkvZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7IGNhbGN1bGF0ZU51bWJlck9mQ29tbWVudHMsIGFkZENvbW1lbnQgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93TW9kYWw6IGFzeW5jICh7IGFsYnVtX25hbWU6IGFsYnVtTmFtZSwgaW1hZ2UsIGlkIH0pID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmlkID0gJ21vZGFsJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjb25zdCBpbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWJ0blwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cImFsYnVtLWFydFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkaW5nXCI+JHthbGJ1bU5hbWV9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN1Yi1oZWFkaW5nXCI+Q29tbWVudHMgKDApPC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50cy1ib3hcIj5cblxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN1Yi1oZWFkaW5nXCI+QWRkIGEgY29tbWVudDwvc3Bhbj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiaW5zaWdodHNcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNvbW1lbnRcIj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+YDtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgY29uc3QgY29tbWVudHNCb3ggPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtYm94Jyk7XG5cbiAgICBsZXQgY29tbWVudHMgPSBhd2FpdCBBUEkuZ2V0Q29tbWVudHNGb3IoaWQpO1xuXG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudERldGFpbHMpID0+IHtcbiAgICAgIGFkZENvbW1lbnQoY29tbWVudHNCb3gsIGNvbW1lbnREZXRhaWxzKTtcbiAgICB9KTtcblxuICAgIGxldCB0b3RhbENvbW1lbnRzID0gY2FsY3VsYXRlTnVtYmVyT2ZDb21tZW50cyhjb21tZW50cyk7XG4gICAgY29uc3Qgc3ViSGVhZGluZyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zdWItaGVhZGluZycpO1xuICAgIHN1YkhlYWRpbmcudGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7dG90YWxDb21tZW50c30pYDtcblxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IGZvcm0udXNlcm5hbWUudmFsdWU7XG4gICAgICBjb25zdCBjb21tZW50ID0gZm9ybS5pbnNpZ2h0cy52YWx1ZTtcbiAgICAgIGlmICghdXNlcm5hbWUgfHwgIWNvbW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9ybS51c2VybmFtZS52YWx1ZSA9ICcnO1xuICAgICAgZm9ybS5pbnNpZ2h0cy52YWx1ZSA9ICcnO1xuICAgICAgYXdhaXQgQVBJLmFkZENvbW1lbnRGb3IoaWQsIHVzZXJuYW1lLCBjb21tZW50KTtcblxuICAgICAgLy8gdXBkYXRlIENvbW1lbnRzIGNvdW50ZXJcbiAgICAgIHRvdGFsQ29tbWVudHMgKz0gMTtcbiAgICAgIHN1YkhlYWRpbmcudGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7dG90YWxDb21tZW50c30pYDtcblxuICAgICAgLy8gY2xlYXIgY29tbWVudHNCb3hcbiAgICAgIGNvbW1lbnRzQm94LmlubmVySFRNTCA9ICcnO1xuICAgICAgY29tbWVudHMgPSBhd2FpdCBBUEkuZ2V0Q29tbWVudHNGb3IoaWQpO1xuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudERldGFpbHMpID0+IHtcbiAgICAgICAgYWRkQ29tbWVudChjb21tZW50c0JveCwgY29tbWVudERldGFpbHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfSxcbiAgaGlkZU1vZGFsOiAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKT8ucmVtb3ZlKCksXG59OyIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVOdW1iZXJPZkNvbW1lbnRzID0gKGNvbW1lbnRzKSA9PiBjb21tZW50cy5sZW5ndGg7XG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChjb250YWluZXIsIHsgY3JlYXRpb25fZGF0ZTogY3JlYXRlZEF0LCB1c2VybmFtZSwgY29tbWVudCB9KSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZGF0ZSA9IChuZXcgRGF0ZShjcmVhdGVkQXQpKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgbGkudGV4dENvbnRlbnQgPSBgJHtkYXRlfSAke3VzZXJuYW1lfTogJHtjb21tZW50fWA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaSk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEFQSSBmcm9tICcuL2FwaS9mdW5jdGlvbnMuanMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwvaW5kZXguanMnO1xuaW1wb3J0IGNvdW50VG90YWxJdGVtcyBmcm9tICcuL2NvdW50VG90YWxJdGVtcy5qcyc7XG5cbmNvbnN0IHBvcHVsYXRlTGlzdCA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IGl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zLWNvbnRhaW5lcicpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbS1jb250YWluZXInKTtcbiAgY29uc3QgcGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcbiAgcGhvdG8uc2V0QXR0cmlidXRlKCdzcmMnLCBpdGVtLmltYWdlKTtcbiAgcGhvdG8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhbGJ1bS1waG90bycpO1xuICBkaXYuYXBwZW5kQ2hpbGQocGhvdG8pO1xuICBjb25zdCBoZWFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NQQU4nKTtcbiAgY29uc3QgbGlrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gIGhlYXJ0LmlubmVySFRNTCA9ICfinaQnO1xuICBoZWFydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYXJ0Jyk7XG4gIGhlYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IEFQSS5hZGRMaWtlRm9yKGl0ZW0uaWQpO1xuICAgIGNvbnN0IG5ld0xpa2VzID0gYXdhaXQgQVBJLmdldExpa2VzRm9yKGl0ZW0uaWQpO1xuICAgIGxpa2VzLmlubmVySFRNTCA9IGAke25ld0xpa2VzfSBsaWtlc2A7XG4gIH0pO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaXRlbS5hcnRpc3QpO1xuICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICB0aXRsZS5hcHBlbmRDaGlsZChoZWFydCk7XG4gIGxpa2VzLmlubmVySFRNTCA9IGAke2l0ZW0ubGlrZXN9IGxpa2VzYDtcbiAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcbiAgY29tbWVudHMuc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZW50cy1idXR0b24nKTtcbiAgY29tbWVudHMudGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xuICBjb21tZW50cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IE1vZGFsLnNob3dNb2RhbCh7XG4gICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXG4gICAgaWQ6IGl0ZW0uaWQsXG4gICAgYWxidW1fbmFtZTogaXRlbS5hbGJ1bV9uYW1lLFxuICB9KSk7XG4gIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGRpdi5hcHBlbmRDaGlsZChsaWtlcyk7XG4gIGRpdi5hcHBlbmRDaGlsZChjb21tZW50cyk7XG4gIGl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgQVBJLmdldE5ld1JlbGVhc2VzKCk7XG4gIC8vIGF3YWl0IEFQSS5hZGRMaWtlRm9yKGlkKVxuXG4gIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHBvcHVsYXRlTGlzdChlbGVtZW50KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzaG93VG90YWxPZkl0ZW1zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0b3RhbCA9IGNvdW50VG90YWxJdGVtcygpO1xuICBjb25zdCB0b3RhbEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLWl0ZW1zJyk7XG4gIHRvdGFsSXRlbXMuaW5uZXJIVE1MID0gYCgke3RvdGFsfSlgO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgbWFpbigpO1xuICBhd2FpdCBzaG93VG90YWxPZkl0ZW1zKCk7XG59O1xuXG5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=