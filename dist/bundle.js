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
___CSS_LOADER_EXPORT___.push([module.id, "#modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  background-color: rgba(255, 255, 255, 0.9);\n}\n@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {\n  #modal {\n    background-color: rgba(255, 0, 0, 0.5);\n    -webkit-backdrop-filter: blur(30px);\n            backdrop-filter: blur(30px);\n  }\n}\n#modal ::-webkit-scrollbar {\n  width: 0.4rem;\n}\n#modal ::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n#modal ::-webkit-scrollbar-thumb {\n  background-color: #fa4848;\n  border-radius: 100vw;\n}\n#modal button {\n  border: none;\n}\n#modal img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n#modal input:not([type=submit]),\n#modal textarea {\n  background-color: transparent;\n  border: none;\n}\n#modal .content {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 1rem;\n  gap: 1rem;\n  background-color: #2e2e2e;\n  border-radius: 1rem;\n  color: #dbdbdb;\n  width: 50vw;\n  height: 80vh;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 4rem 2rem;\n}\n#modal .content .close-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0.8rem;\n  font-size: 1.2rem;\n  margin: 1rem;\n  cursor: pointer;\n  border-radius: 0.2rem;\n  transition: all 200ms;\n}\n#modal .content .close-btn:hover {\n  background-color: rgba(219, 219, 219, 0.2);\n  color: #fa4848;\n}\n#modal .content .image {\n  border-radius: 1rem;\n  overflow: hidden;\n  width: 80%;\n  flex-shrink: 1;\n  min-height: 0;\n}\n#modal .content .heading {\n  font-weight: bolder;\n  color: whitesmoke;\n  font-size: 1.4rem;\n  padding: 0.4rem;\n  margin-bottom: 0.4rem;\n}\n#modal .content .sub-heading {\n  color: #fa4848;\n  background-color: #393939;\n  padding: 0.6rem;\n  border-radius: 0.2rem;\n}\n#modal .content .comments {\n  width: 80%;\n  border-radius: 0.2rem;\n  flex-shrink: 0;\n  overflow: auto;\n  background-color: #1f1f1f;\n  margin-bottom: 2rem;\n  border-top: 2px solid #1a1a1a;\n}\n#modal .content .comments .comment-box {\n  padding: 1rem;\n  padding-left: 2rem;\n}\n#modal .content .comments .comment-box .details .username-date .user {\n  color: #dbdbdb;\n}\n#modal .content .comments .comment-box .details .username-date .date {\n  font-size: 0.8rem;\n  color: #a8a8a8;\n}\n#modal .content .comments .comment-box .details .comment {\n  padding-top: 0.8rem;\n  padding-left: 0.2rem;\n}\n#modal .content .comments .comment-box:nth-child(even) {\n  background-color: #292929;\n}\n#modal .content form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  grid-gap: 1rem;\n  gap: 1rem;\n  width: 80%;\n}\n#modal .content form textarea {\n  width: 100%;\n  box-sizing: border-box;\n}\n#modal .content form input,\n#modal .content form textarea {\n  border-radius: 0.2rem;\n  padding: 0.6rem 0.8rem;\n  font-size: 1rem;\n  background-color: #1f1f1f;\n  color: #dbdbdb;\n  transition: all 420ms;\n}\n#modal .content form input::-moz-placeholder, #modal .content form textarea::-moz-placeholder {\n  color: #dbdbdb;\n  opacity: 0.3;\n}\n#modal .content form input:-ms-input-placeholder, #modal .content form textarea:-ms-input-placeholder {\n  color: #dbdbdb;\n  opacity: 0.3;\n}\n#modal .content form input::placeholder,\n#modal .content form textarea::placeholder {\n  color: #dbdbdb;\n  opacity: 0.3;\n}\n#modal .content form input:focus,\n#modal .content form textarea:focus {\n  outline: none;\n  background-color: #1a1a1a;\n}\n#modal .content form input[type=submit] {\n  font-size: 1rem;\n  padding: 0.8rem 1rem;\n  cursor: pointer;\n  border: 2px solid #fa4848;\n  background-color: transparent;\n  color: #fa4848;\n  margin-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  transition: background-color 120ms;\n}\n#modal .content form input[type=submit]:hover {\n  color: #dbdbdb;\n  background-color: #fa4848;\n}\n\n#modal.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/modal/modal.scss"],"names":[],"mappings":"AACA;EAKE,eAAA;EACA,MAAA;EAAA,QAAA;EAAA,SAAA;EAAA,OAAA;EACA,oCAAA;EACA,0CAAA;AAJF;AAME;EAVF;IAWI,sCAAA;IAEA,mCAAA;YAAA,2BAAA;EAJF;AACF;AAME;EACE,aAAA;AAJJ;AAOE;EACE,6BAAA;AALJ;AAQE;EACE,yBAAA;EACA,oBAAA;AANJ;AASE;EACE,YAAA;AAPJ;AAUE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;AARJ;AAWE;;EAEE,6BAAA;EACA,YAAA;AATJ;AAYE;EACE,cAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;EACA,yBAlDM;EAmDN,mBAAA;EACA,cArDM;EAsDN,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,kBAAA;AAVJ;AAYI;EACE,kBAAA;EACA,QAAA;EACA,MAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AAVN;AAYM;EACE,0CAAA;EACA,cAAA;AAVR;AAcI;EACE,mBAAA;EACA,gBAAA;EACA,UAAA;EACA,cAAA;EACA,aAAA;AAZN;AAeI;EACE,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;AAbN;AAgBI;EACE,cAAA;EACA,yBAAA;EACA,eAAA;EACA,qBAAA;AAdN;AAiBI;EAGE,UAAA;EACA,qBAAA;EACA,cAAA;EACA,cAAA;EACA,yBA3GS;EA4GT,mBAAA;EACA,6BAAA;AAjBN;AAmBM;EACE,aAAA;EACA,kBAAA;AAjBR;AAqBY;EACE,cAxHJ;AAqGV;AAsBY;EACE,iBAAA;EACA,cAAA;AApBd;AAwBU;EACE,mBAAA;EACA,oBAAA;AAtBZ;AA2BM;EACE,yBAAA;AAzBR;AA6BI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;EAAA,SAAA;EACA,UAAA;AA3BN;AA6BM;EACE,WAAA;EACA,sBAAA;AA3BR;AA8BM;;EAEE,qBAAA;EACA,sBAAA;EACA,eAAA;EACA,yBA5JO;EA6JP,cA/JE;EAgKF,qBAAA;AA5BR;AA8BQ;EACE,cAnKA;EAoKA,YAAA;AA3BV;AAyBQ;EACE,cAnKA;EAoKA,YAAA;AA3BV;AAyBQ;;EACE,cAnKA;EAoKA,YAAA;AA3BV;AA8BQ;;EACE,aAAA;EACA,yBAAA;AA3BV;AA+BM;EACE,eAAA;EACA,oBAAA;EACA,eAAA;EACA,yBAAA;EACA,6BAAA;EACA,cAAA;EACA,kBAAA;EAAA,qBAAA;EACA,kCAAA;AA7BR;AA+BQ;EACE,cAxLA;EAyLA,yBAAA;AA7BV;;AAoCA;EACE,aAAA;AAjCF","sourcesContent":["// MODAL\r\n#modal {\r\n  $white: rgb(219, 219, 219);\r\n  $black: rgb(46, 46, 46);\r\n  $dark-black: #1f1f1f;\r\n\r\n  position: fixed;\r\n  inset: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n\r\n  @supports (backdrop-filter: none) {\r\n    background-color: rgba(255, 0, 0, 0.5);\r\n    // background-color: rgba(255, 255, 255, 0.5);\r\n    backdrop-filter: blur(30px);\r\n  }\r\n\r\n  ::-webkit-scrollbar {\r\n    width: 0.4rem;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background-color: transparent;\r\n  }\r\n\r\n  ::-webkit-scrollbar-thumb {\r\n    background-color: rgb(250, 72, 72);\r\n    border-radius: 100vw;\r\n  }\r\n\r\n  button {\r\n    border: none;\r\n  }\r\n\r\n  img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n\r\n  input:not([type=submit]),\r\n  textarea {\r\n    background-color: transparent;\r\n    border: none;\r\n  }\r\n\r\n  .content {\r\n    overflow: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: $black;\r\n    border-radius: 1rem;\r\n    color: $white;\r\n    width: 50vw;\r\n    height: 80vh;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    padding: 4rem 2rem;\r\n\r\n    .close-btn {\r\n      position: absolute;\r\n      right: 0;\r\n      top: 0;\r\n      padding: 0.8rem;\r\n      font-size: 1.2rem;\r\n      margin: 1rem;\r\n      cursor: pointer;\r\n      border-radius: 0.2rem;\r\n      transition: all  200ms;\r\n\r\n      &:hover {\r\n        background-color: rgba($white, 0.2);\r\n        color: rgb(250, 72, 72);\r\n      }\r\n    }\r\n\r\n    .image {\r\n      border-radius: 1rem;\r\n      overflow: hidden;\r\n      width: 80%;\r\n      flex-shrink: 1;\r\n      min-height: 0;\r\n    }\r\n\r\n    .heading {\r\n      font-weight: bolder;\r\n      color: whitesmoke;\r\n      font-size: 1.4rem;\r\n      padding: 0.4rem;\r\n      margin-bottom: 0.4rem;\r\n    }\r\n\r\n    .sub-heading {\r\n      color: rgb(250, 72, 72);\r\n      background-color: lighten($dark-black, 10%);\r\n      padding: 0.6rem;\r\n      border-radius: 0.2rem;\r\n    }\r\n\r\n    .comments {\r\n      $bg-color: $dark-black;\r\n\r\n      width: 80%;\r\n      border-radius: 0.2rem;\r\n      flex-shrink: 0;\r\n      overflow: auto;\r\n      background-color: $bg-color;\r\n      margin-bottom: 2rem;\r\n      border-top: 2px solid darken($dark-black, 2%);\r\n\r\n      .comment-box {\r\n        padding: 1rem;\r\n        padding-left: 2rem;\r\n\r\n        .details {\r\n          .username-date {\r\n            .user {\r\n              color: $white;\r\n            }\r\n\r\n            .date {\r\n              font-size: 0.8rem;\r\n              color: darken($white, 20%);\r\n            }\r\n          }\r\n\r\n          .comment {\r\n            padding-top: 0.8rem;\r\n            padding-left: 0.2rem;\r\n          }\r\n        }\r\n      }\r\n\r\n      .comment-box:nth-child(even) {\r\n        background-color: lighten($bg-color, 4%);\r\n      }\r\n    }\r\n\r\n    form {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      gap: 1rem;\r\n      width: 80%;\r\n\r\n      textarea {\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n      }\r\n\r\n      input,\r\n      textarea {\r\n        border-radius: 0.2rem;\r\n        padding: 0.6rem 0.8rem;\r\n        font-size: 1rem;\r\n        background-color: $dark-black;\r\n        color: $white;\r\n        transition: all 420ms;\r\n\r\n        &::placeholder {\r\n          color: $white;\r\n          opacity: 0.3;\r\n        }\r\n\r\n        &:focus {\r\n          outline: none;\r\n          background-color: darken($dark-black, 2%);\r\n        }\r\n      }\r\n\r\n      input[type=submit] {\r\n        font-size: 1rem;\r\n        padding: 0.8rem 1rem;\r\n        cursor: pointer;\r\n        border: 2px solid rgb(250, 72, 72);\r\n        background-color: transparent;\r\n        color: rgb(250, 72, 72);\r\n        margin-block: 0.4rem;\r\n        transition: background-color 120ms;\r\n\r\n        &:hover {\r\n          color: $white;\r\n          background-color: rgb(250, 72, 72);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#modal.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n}\n\n@font-face {\n  font-family: \"Caveat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n}\n@font-face {\n  font-family: \"Akronim\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"ttf\");\n}\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nheader {\n  box-shadow: -1px 5px 24px 5px #000;\n  background-color: black;\n}\n\n.justify-content-space-around {\n  justify-content: space-around;\n}\n\n.justify-content-space-between {\n  justify-content: space-between;\n}\n\n#logo {\n  transform: rotate(20deg);\n  width: 80px;\n  height: 70px;\n  margin-top: 6px;\n}\n\n.margin-auto {\n  margin: auto;\n}\n\n.cursor-pointer,\n.album-photo,\n.heart,\n#comments-button {\n  cursor: pointer;\n}\n\n#comments-button {\n  color: white;\n  font-size: large;\n  background-color: #f05f5f;\n  padding: 8px;\n  border-radius: 6px;\n  outline: lightseagreen;\n  border: none;\n  transition: background-color 1s, font-weight 0.5s;\n}\n\n#mobile-nav {\n  display: none;\n}\n\nul {\n  list-style: none;\n}\n\nnav ul li {\n  margin: 25px;\n  justify-content: space-around;\n}\n\nnav li a {\n  text-decoration: none;\n  font-family: Akronim, cursive;\n  font-weight: bolder;\n  font-size: 30px;\n  font-style: italic;\n  display: inline-flex;\n  color: whitesmoke;\n  transition: color 1s;\n}\n\nnav li a:hover {\n  color: red;\n}\n\n#items-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.item-container {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 40px;\n  box-shadow: 2px 2px 27px -3px rgba(0, 0, 0, 0.84);\n  border-bottom-right-radius: 10px;\n  border-top-left-radius: 15px;\n  max-width: 250px;\n  transition: box-shadow 1s;\n}\n\n.item-container:hover {\n  box-shadow: 2px 2px 27px -3px rgba(255, 69, 69, 0.84);\n}\n\n.item-container p {\n  padding-right: 10%;\n  padding-left: 10%;\n  font-size: 1.3rem;\n  margin-top: 5px;\n  font-family: Caveat, sans-serif;\n}\n\n.album-photo,\n#comments-button {\n  width: 100%;\n}\n\n.display-flex {\n  display: flex;\n}\n\n#comments-button:hover {\n  background-color: red;\n  font-weight: 900;\n}\n\n.heart {\n  float: right;\n  font-size: 3rem;\n}\n\n.heart:hover {\n  color: red;\n}\n\nfooter {\n  margin-top: 45px;\n  padding: 30px;\n  color: ivory;\n  font-weight: bolder;\n  font-size: 1.1rem;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  background: #aa7e76;\n  background: linear-gradient(18deg, #aa7e76 0%, #c9776f 0%, rgba(147, 75, 75, 0.599877451) 100%);\n}\n\n.footer-text {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.footer-image {\n  float: right;\n  transform: rotate(40deg);\n  height: 60px;\n  width: 60px;\n}\n\n@media screen and (max-width: 770px) {\n  #items-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 650px) {\n  #big-nav {\n    display: none;\n  }\n\n  #mobile-nav {\n    display: block;\n    color: whitesmoke;\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 552px) {\n  #items-container {\n    padding: 0;\n    display: block;\n  }\n\n  .item-container {\n    padding: 0;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n  }\n\n  .item-container img {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;;;EAGE,UAAA;EACA,SAAA;AACF;;AAEA;EACE,qBAAA;EACA,0DAAA;AACF;AAEA;EACE,sBAAA;EACA,0DAAA;AAAF;AAGA;EACE,yCAAA;AADF;;AAIA;EAEE,kCAAA;EACA,uBAAA;AADF;;AAIA;EACE,6BAAA;AADF;;AAIA;EACE,8BAAA;AADF;;AAIA;EACE,wBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AADF;;AAIA;EACE,YAAA;AADF;;AAIA;;;;EAIE,eAAA;AADF;;AAIA;EACE,YAAA;EACA,gBAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,iDAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,YAAA;EACA,6BAAA;AADF;;AAIA;EACE,qBAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;EACA,oBAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,aAAA;EACA,qCAAA;AADF;;AAIA;EACE,iBAAA;EACA,kBAAA;EACA,gBAAA;EAEA,iDAAA;EACA,gCAAA;EACA,4BAAA;EACA,gBAAA;EACA,yBAAA;AADF;;AAIA;EAEE,qDAAA;AADF;;AAIA;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;EACA,+BAAA;AADF;;AAIA;;EAEE,WAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,qBAAA;EACA,gBAAA;AADF;;AAIA;EACE,YAAA;EACA,eAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,gBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EAAA,oBAAA;EACA,mBAAA;EACA,+FAAA;AADF;;AAIA;EACE,gBAAA;EACA,mBAAA;AADF;;AAIA;EACE,YAAA;EACA,wBAAA;EACA,YAAA;EACA,WAAA;AADF;;AAIA;EACE;IACE,qCAAA;EADF;AACF;AAIA;EACE;IACE,aAAA;EAFF;;EAKA;IACE,cAAA;IACA,iBAAA;IACA,eAAA;EAFF;AACF;AAKA;EACE;IACE,UAAA;IACA,cAAA;EAHF;;EAMA;IACE,UAAA;IACA,iBAAA;IACA,kBAAA;IACA,kBAAA;EAHF;;EAMA;IACE,WAAA;EAHF;AACF","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Caveat';\r\n  src: url('./assets/fonts/Caveat-VariableFont_wght.ttf') format('ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Akronim';\r\n  src: url('./assets/fonts/Akronim-Regular.ttf') format('ttf');\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nheader {\r\n  -webkit-box-shadow: -1px 5px 24px 5px #000;\r\n  box-shadow: -1px 5px 24px 5px #000;\r\n  background-color: black;\r\n}\r\n\r\n.justify-content-space-around {\r\n  justify-content: space-around;\r\n}\r\n\r\n.justify-content-space-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n#logo {\r\n  transform: rotate(20deg);\r\n  width: 80px;\r\n  height: 70px;\r\n  margin-top: 6px;\r\n}\r\n\r\n.margin-auto {\r\n  margin: auto;\r\n}\r\n\r\n.cursor-pointer,\r\n.album-photo,\r\n.heart,\r\n#comments-button {\r\n  cursor: pointer;\r\n}\r\n\r\n#comments-button {\r\n  color: white;\r\n  font-size: large;\r\n  background-color: rgb(240, 95, 95);\r\n  padding: 8px;\r\n  border-radius: 6px;\r\n  outline: lightseagreen;\r\n  border: none;\r\n  transition: background-color 1s, font-weight 0.5s;\r\n}\r\n\r\n#mobile-nav {\r\n  display: none;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li {\r\n  margin: 25px;\r\n  justify-content: space-around;\r\n}\r\n\r\nnav li a {\r\n  text-decoration: none;\r\n  font-family: Akronim, cursive;\r\n  font-weight: bolder;\r\n  font-size: 30px;\r\n  font-style: italic;\r\n  display: inline-flex;\r\n  color: whitesmoke;\r\n  transition: color 1s;\r\n}\r\n\r\nnav li a:hover {\r\n  color: red;\r\n}\r\n\r\n#items-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n.item-container {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 40px;\r\n  -webkit-box-shadow: 2px 2px 27px -3px rgba(0, 0, 0, 0.84);\r\n  box-shadow: 2px 2px 27px -3px rgba(0, 0, 0, 0.84);\r\n  border-bottom-right-radius: 10px;\r\n  border-top-left-radius: 15px;\r\n  max-width: 250px;\r\n  transition: box-shadow 1s;\r\n}\r\n\r\n.item-container:hover {\r\n  -webkit-box-shadow: 2px 2px 27px -3px rgba(255, 69, 69, 0.84);\r\n  box-shadow: 2px 2px 27px -3px rgba(255, 69, 69, 0.84);\r\n}\r\n\r\n.item-container p {\r\n  padding-right: 10%;\r\n  padding-left: 10%;\r\n  font-size: 1.3rem;\r\n  margin-top: 5px;\r\n  font-family: Caveat, sans-serif;\r\n}\r\n\r\n.album-photo,\r\n#comments-button {\r\n  width: 100%;\r\n}\r\n\r\n.display-flex {\r\n  display: flex;\r\n}\r\n\r\n#comments-button:hover {\r\n  background-color: red;\r\n  font-weight: 900;\r\n}\r\n\r\n.heart {\r\n  float: right;\r\n  font-size: 3rem;\r\n}\r\n\r\n.heart:hover {\r\n  color: red;\r\n}\r\n\r\nfooter {\r\n  margin-top: 45px;\r\n  padding: 30px;\r\n  color: ivory;\r\n  font-weight: bolder;\r\n  font-size: 1.1rem;\r\n  padding-block: 2rem;\r\n  background: rgb(170, 126, 118);\r\n  background: linear-gradient(18deg, rgba(170, 126, 118, 1) 0%, rgba(201, 119, 111, 1) 0%, rgba(147, 75, 75, 0.5998774509803921) 100%);\r\n}\r\n\r\n.footer-text {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.footer-image {\r\n  float: right;\r\n  transform: rotate(40deg);\r\n  height: 60px;\r\n  width: 60px;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n  #items-container {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  #big-nav {\r\n    display: none;\r\n  }\r\n\r\n  #mobile-nav {\r\n    display: block;\r\n    color: whitesmoke;\r\n    font-size: 40px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 552px) {\r\n  #items-container {\r\n    padding: 0;\r\n    display: block;\r\n  }\r\n\r\n  .item-container {\r\n    padding: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n  }\r\n\r\n  .item-container img {\r\n    width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  cid: '03c93fbd8ce74b51b2899d8beee8d177',
  cs: '8342cc936da1483abade1103a1f42d39',
  token_endpoint: '',
  access_token: '',
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
  credentials.access_token = 'BQD81oYEnQ3ZhNT4A9q89jR6OW3a6f4h_sq4g6U8x4WqrkmGJAb--OepFWHlLVwYAHDB0H2JqRmiNawazis';

  const involvementBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
  const appId = 'oM0i9Hfjd7ZwqdP4izVj';

  const accessTokenPromise = fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${credentials.cid}:${credentials.cs}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
    .then((resp) => resp.json())
    .then((data) => {
      credentials.access_token = data.access_token;
    });

  const APIMethods = {
    async getNewReleases() {
      await accessTokenPromise;
      const headers = {
        Authorization: `Bearer ${credentials.access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const response = await fetch('https://api.spotify.com/v1/browse/new-releases?limit=21', {
        method: 'GET',
        headers,
      });
      const data = await response.json();

      const allAlbumLikes = await this.getAllLikes();

      return data.albums.items.map((item) => {
        const artist = item.artists.map((artist) => artist.name).join(', ');
        const likes = allAlbumLikes.find((album) => album.item_id === item.id)?.likes || 0;

        return {
          id: item.id,
          album_name: item.name,
          artist,
          likes,
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
        if (data.error) {
          throw Error;
        }
        return data;
      } catch {
        return [];
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ credentials: _credentials_js__WEBPACK_IMPORTED_MODULE_1__["default"], fetch }));

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
        <ul class="comments">

        </ul>
        <span class="sub-heading">Add a comment</span>
        <form action="#" autocomplete="off">
            <input type="text" placeholder="Your name" name="username">
            <textarea name="insights" placeholder="Your insights"></textarea>
            <input type="submit" value="Comment">
        </form>
      </div>`;
    modal.innerHTML = innerHTML;
    const commentsBox = modal.querySelector('.comments');

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

      // clear commentsBox
      commentsBox.innerHTML = '';
      comments = await _api_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCommentsFor(id);
      comments.forEach((commentDetails) => {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addComment)(commentsBox, commentDetails);
      });
      // update Comments counter
      totalComments += 1;
      subHeading.textContent = `Comments (${totalComments})`;
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
  console.log(container);
  const li = document.createElement('li');
  li.classList.add('comment-box');

  const date = (new Date(createdAt)).toLocaleDateString();
  const innerHTML = `
    <div class="details">
      <div class="username-date">
        <strong clas="username">${username}</strong>
        <span class="date">${date}</span>
      </div>
      <div class="comment">
        <span>${comment}</span>
      </div>
    </div>
  `;
  li.innerHTML = innerHTML;
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
  // await main();
  // await showTotalOfItems();
  const item = {
    album_name: 'Easy On Me',
    artist: 'Adele',
    id: '224jZ4sUX7OhAuMwaxp86S',
    image: 'https://i.scdn.co/image/ab67616d0000b27350dba34377a595e35f81b0e4',
    likes: 11,
  };
  const button = document.createElement('button');
  button.textContent = 'Click Me';
  document.body.appendChild(button);
  button.addEventListener('click', () => _modal_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].showModal(item));
};

initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGdCQUFnQiwrREFBZTtBQUMvQjtBQUNBLDZCQUE2QixNQUFNO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlFQUFlO0FBQ3hEOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvbW9kYWwvbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9tb2RhbC9tb2RhbC5zY3NzP2MxZmIiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvc3R5bGUuc2Nzcz80MGY3Iiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvYXBpL2NyZWRlbnRpYWxzLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL2FwaS9mYWN0b3J5LmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL2FwaS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvY291bnRUb3RhbEl0ZW1zLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL21vZGFsL3V0aWxzLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNtb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxufVxcbkBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBub25lKSkge1xcbiAgI21vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcXG4gIH1cXG59XFxuI21vZGFsIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDAuNHJlbTtcXG59XFxuI21vZGFsIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbiNtb2RhbCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTQ4NDg7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG59XFxuI21vZGFsIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNtb2RhbCBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbiNtb2RhbCBpbnB1dDpub3QoW3R5cGU9c3VibWl0XSksXFxuI21vZGFsIHRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJlMmU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgY29sb3I6ICNkYmRiZGI7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwYWRkaW5nOiA0cmVtIDJyZW07XFxufVxcbiNtb2RhbCAuY29udGVudCAuY2xvc2UtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMC44cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XFxufVxcbiNtb2RhbCAuY29udGVudCAuY2xvc2UtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCAyMTksIDIxOSwgMC4yKTtcXG4gIGNvbG9yOiAjZmE0ODQ4O1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmltYWdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbiAgbWluLWhlaWdodDogMDtcXG59XFxuI21vZGFsIC5jb250ZW50IC5oZWFkaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLnN1Yi1oZWFkaW5nIHtcXG4gIGNvbG9yOiAjZmE0ODQ4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuI21vZGFsIC5jb250ZW50IC5jb21tZW50cyB7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxYTFhMWE7XFxufVxcbiNtb2RhbCAuY29udGVudCAuY29tbWVudHMgLmNvbW1lbnQtYm94IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcbiNtb2RhbCAuY29udGVudCAuY29tbWVudHMgLmNvbW1lbnQtYm94IC5kZXRhaWxzIC51c2VybmFtZS1kYXRlIC51c2VyIHtcXG4gIGNvbG9yOiAjZGJkYmRiO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmNvbW1lbnRzIC5jb21tZW50LWJveCAuZGV0YWlscyAudXNlcm5hbWUtZGF0ZSAuZGF0ZSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjYThhOGE4O1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmNvbW1lbnRzIC5jb21tZW50LWJveCAuZGV0YWlscyAuY29tbWVudCB7XFxuICBwYWRkaW5nLXRvcDogMC44cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxufVxcbiNtb2RhbCAuY29udGVudCAuY29tbWVudHMgLmNvbW1lbnQtYm94Om50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogODAlO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNtb2RhbCAuY29udGVudCBmb3JtIGlucHV0LFxcbiNtb2RhbCAuY29udGVudCBmb3JtIHRleHRhcmVhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIHBhZGRpbmc6IDAuNnJlbSAwLjhyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xcbiAgY29sb3I6ICNkYmRiZGI7XFxuICB0cmFuc2l0aW9uOiBhbGwgNDIwbXM7XFxufVxcbiNtb2RhbCAuY29udGVudCBmb3JtIGlucHV0OjotbW96LXBsYWNlaG9sZGVyLCAjbW9kYWwgLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2RiZGJkYjtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuI21vZGFsIC5jb250ZW50IGZvcm0gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAjbW9kYWwgLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNkYmRiZGI7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbiNtb2RhbCAuY29udGVudCBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNkYmRiZGI7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbiNtb2RhbCAuY29udGVudCBmb3JtIGlucHV0OmZvY3VzLFxcbiNtb2RhbCAuY29udGVudCBmb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmE0ODQ4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZhNDg0ODtcXG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTIwbXM7XFxufVxcbiNtb2RhbCAuY29udGVudCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XFxuICBjb2xvcjogI2RiZGJkYjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTQ4NDg7XFxufVxcblxcbiNtb2RhbC5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZGFsL21vZGFsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFLRSxlQUFBO0VBQ0EsTUFBQTtFQUFBLFFBQUE7RUFBQSxTQUFBO0VBQUEsT0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QUFKRjtBQU1FO0VBVkY7SUFXSSxzQ0FBQTtJQUVBLG1DQUFBO1lBQUEsMkJBQUE7RUFKRjtBQUNGO0FBTUU7RUFDRSxhQUFBO0FBSko7QUFPRTtFQUNFLDZCQUFBO0FBTEo7QUFRRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUFOSjtBQVNFO0VBQ0UsWUFBQTtBQVBKO0FBVUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBUko7QUFXRTs7RUFFRSw2QkFBQTtFQUNBLFlBQUE7QUFUSjtBQVlFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSx5QkFsRE07RUFtRE4sbUJBQUE7RUFDQSxjQXJETTtFQXNETixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBVko7QUFZSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFWTjtBQVlNO0VBQ0UsMENBQUE7RUFDQSxjQUFBO0FBVlI7QUFjSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFaTjtBQWVJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBYk47QUFnQkk7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFkTjtBQWlCSTtFQUdFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBM0dTO0VBNEdULG1CQUFBO0VBQ0EsNkJBQUE7QUFqQk47QUFtQk07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFqQlI7QUFxQlk7RUFDRSxjQXhISjtBQXFHVjtBQXNCWTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQXBCZDtBQXdCVTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUF0Qlo7QUEyQk07RUFDRSx5QkFBQTtBQXpCUjtBQTZCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxVQUFBO0FBM0JOO0FBNkJNO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBM0JSO0FBOEJNOztFQUVFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBNUpPO0VBNkpQLGNBL0pFO0VBZ0tGLHFCQUFBO0FBNUJSO0FBOEJRO0VBQ0UsY0FuS0E7RUFvS0EsWUFBQTtBQTNCVjtBQXlCUTtFQUNFLGNBbktBO0VBb0tBLFlBQUE7QUEzQlY7QUF5QlE7O0VBQ0UsY0FuS0E7RUFvS0EsWUFBQTtBQTNCVjtBQThCUTs7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUEzQlY7QUErQk07RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUFBLHFCQUFBO0VBQ0Esa0NBQUE7QUE3QlI7QUErQlE7RUFDRSxjQXhMQTtFQXlMQSx5QkFBQTtBQTdCVjs7QUFvQ0E7RUFDRSxhQUFBO0FBakNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIE1PREFMXFxyXFxuI21vZGFsIHtcXHJcXG4gICR3aGl0ZTogcmdiKDIxOSwgMjE5LCAyMTkpO1xcclxcbiAgJGJsYWNrOiByZ2IoNDYsIDQ2LCA0Nik7XFxyXFxuICAkZGFyay1ibGFjazogIzFmMWYxZjtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcclxcblxcclxcbiAgQHN1cHBvcnRzIChiYWNrZHJvcC1maWx0ZXI6IG5vbmUpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAwLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgNzIsIDcyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpbnB1dDpub3QoW3R5cGU9c3VibWl0XSksXFxyXFxuICB0ZXh0YXJlYSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudCB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIGhlaWdodDogODB2aDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgcGFkZGluZzogNHJlbSAycmVtO1xcclxcblxcclxcbiAgICAuY2xvc2UtYnRuIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgIDIwMG1zO1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIDAuMik7XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDI1MCwgNzIsIDcyKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmltYWdlIHtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICBmbGV4LXNocmluazogMTtcXHJcXG4gICAgICBtaW4taGVpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkaW5nIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1Yi1oZWFkaW5nIHtcXHJcXG4gICAgICBjb2xvcjogcmdiKDI1MCwgNzIsIDcyKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRkYXJrLWJsYWNrLCAxMCUpO1xcclxcbiAgICAgIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbW1lbnRzIHtcXHJcXG4gICAgICAkYmctY29sb3I6ICRkYXJrLWJsYWNrO1xcclxcblxcclxcbiAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBkYXJrZW4oJGRhcmstYmxhY2ssIDIlKTtcXHJcXG5cXHJcXG4gICAgICAuY29tbWVudC1ib3gge1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG5cXHJcXG4gICAgICAgIC5kZXRhaWxzIHtcXHJcXG4gICAgICAgICAgLnVzZXJuYW1lLWRhdGUge1xcclxcbiAgICAgICAgICAgIC51c2VyIHtcXHJcXG4gICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5kYXRlIHtcXHJcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkd2hpdGUsIDIwJSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5jb21tZW50IHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC44cmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5jb21tZW50LWJveDpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmctY29sb3IsIDQlKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZm9ybSB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgICB3aWR0aDogODAlO1xcclxcblxcclxcbiAgICAgIHRleHRhcmVhIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXQsXFxyXFxuICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMC42cmVtIDAuOHJlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsYWNrO1xcclxcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA0MjBtcztcXHJcXG5cXHJcXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZGFyay1ibGFjaywgMiUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMC44cmVtIDFyZW07XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjUwLCA3MiwgNzIpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDI1MCwgNzIsIDcyKTtcXHJcXG4gICAgICAgIG1hcmdpbi1ibG9jazogMC40cmVtO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMjBtcztcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCA3MiwgNzIpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwuaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQ2F2ZWF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0Frcm9uaW0tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNhdmVhdFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFrcm9uaW1cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuICBib3gtc2hhZG93OiAtMXB4IDVweCAyNHB4IDVweCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYXJvdW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LXNwYWNlLWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbG9nbyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG59XFxuXFxuLm1hcmdpbi1hdXRvIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmN1cnNvci1wb2ludGVyLFxcbi5hbGJ1bS1waG90byxcXG4uaGVhcnQsXFxuI2NvbW1lbnRzLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb21tZW50cy1idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDVmNWY7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBvdXRsaW5lOiBsaWdodHNlYWdyZWVuO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgZm9udC13ZWlnaHQgMC41cztcXG59XFxuXFxuI21vYmlsZS1uYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIG1hcmdpbjogMjVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5uYXYgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogQWtyb25pbSwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMXM7XFxufVxcblxcbm5hdiBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiNpdGVtcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDI3cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuODQpO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXM7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lcjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDI3cHggLTNweCByZ2JhKDI1NSwgNjksIDY5LCAwLjg0KTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHAge1xcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBDYXZlYXQsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hbGJ1bS1waG90byxcXG4jY29tbWVudHMtYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGlzcGxheS1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNjb21tZW50cy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmhlYXJ0IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmhlYXJ0OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiA0NXB4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGNvbG9yOiBpdm9yeTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICBiYWNrZ3JvdW5kOiAjYWE3ZTc2O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4ZGVnLCAjYWE3ZTc2IDAlLCAjYzk3NzZmIDAlLCByZ2JhKDE0NywgNzUsIDc1LCAwLjU5OTg3NzQ1MSkgMTAwJSk7XFxufVxcblxcbi5mb290ZXItdGV4dCB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuLmZvb3Rlci1pbWFnZSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcXG4gICNpdGVtcy1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2JpZy1uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI21vYmlsZS1uYXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUycHgpIHtcXG4gICNpdGVtcy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5pdGVtLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pdGVtLWNvbnRhaW5lciBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLDBEQUFBO0FBQ0Y7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsMERBQUE7QUFBRjtBQUdBO0VBQ0UseUNBQUE7QUFERjs7QUFJQTtFQUVFLGtDQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLDZCQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtBQURGOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTs7OztFQUlFLGVBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpREFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFFRSxxREFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBREY7O0FBSUE7O0VBRUUsV0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFBQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0ZBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLHFDQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0U7SUFDRSxhQUFBO0VBRkY7O0VBS0E7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQUhGOztFQU1BO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQUhGOztFQU1BO0lBQ0UsV0FBQTtFQUhGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0NhdmVhdCc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvQ2F2ZWF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdBa3JvbmltJztcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9Ba3JvbmltLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCA1cHggMjRweCA1cHggIzAwMDtcXHJcXG4gIGJveC1zaGFkb3c6IC0xcHggNXB4IDI0cHggNXB4ICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktY29udGVudC1zcGFjZS1hcm91bmQge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlbiB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyZ2luLWF1dG8ge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY3Vyc29yLXBvaW50ZXIsXFxyXFxuLmFsYnVtLXBob3RvLFxcclxcbi5oZWFydCxcXHJcXG4jY29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzLWJ1dHRvbiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgOTUsIDk1KTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG91dGxpbmU6IGxpZ2h0c2VhZ3JlZW47XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBmb250LXdlaWdodCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9iaWxlLW5hdiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkge1xcclxcbiAgbWFyZ2luOiAyNXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbm5hdiBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBa3JvbmltLCBjdXJzaXZlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAxcztcXHJcXG59XFxyXFxuXFxyXFxubmF2IGxpIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI2l0ZW1zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAyN3B4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjg0KTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMjdweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC44NCk7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxyXFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAyN3B4IC0zcHggcmdiYSgyNTUsIDY5LCA2OSwgMC44NCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDI3cHggLTNweCByZ2JhKDI1NSwgNjksIDY5LCAwLjg0KTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY29udGFpbmVyIHAge1xcclxcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBDYXZlYXQsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5hbGJ1bS1waG90byxcXHJcXG4jY29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50cy1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA0NXB4O1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGNvbG9yOiBpdm9yeTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTcwLCAxMjYsIDExOCk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMThkZWcsIHJnYmEoMTcwLCAxMjYsIDExOCwgMSkgMCUsIHJnYmEoMjAxLCAxMTksIDExMSwgMSkgMCUsIHJnYmEoMTQ3LCA3NSwgNzUsIDAuNTk5ODc3NDUwOTgwMzkyMSkgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGV4dCB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1pbWFnZSB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcXHJcXG4gICNpdGVtcy1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xcclxcbiAgI2JpZy1uYXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgI21vYmlsZS1uYXYge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUycHgpIHtcXHJcXG4gICNpdGVtcy1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pdGVtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pdGVtLWNvbnRhaW5lciBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBjaWQ6ICcwM2M5M2ZiZDhjZTc0YjUxYjI4OTlkOGJlZWU4ZDE3NycsXG4gIGNzOiAnODM0MmNjOTM2ZGExNDgzYWJhZGUxMTAzYTFmNDJkMzknLFxuICB0b2tlbl9lbmRwb2ludDogJycsXG4gIGFjY2Vzc190b2tlbjogJycsXG59OyIsImV4cG9ydCBkZWZhdWx0ICh7IGNyZWRlbnRpYWxzLCBmZXRjaCB9KSA9PiB7XG4gIGNyZWRlbnRpYWxzLmFjY2Vzc190b2tlbiA9ICdCUUQ4MW9ZRW5RM1poTlQ0QTlxODlqUjZPVzNhNmY0aF9zcTRnNlU4eDRXcXJrbUdKQWItLU9lcEZXSGxMVndZQUhEQjBIMkpxUm1pTmF3YXppcyc7XG5cbiAgY29uc3QgaW52b2x2ZW1lbnRCYXNlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nO1xuICBjb25zdCBhcHBJZCA9ICdvTTBpOUhmamQ3WndxZFA0aXpWaic7XG5cbiAgY29uc3QgYWNjZXNzVG9rZW5Qcm9taXNlID0gZmV0Y2goJ2h0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke2J0b2EoYCR7Y3JlZGVudGlhbHMuY2lkfToke2NyZWRlbnRpYWxzLmNzfWApfWAsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSxcbiAgICBib2R5OiAnZ3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHMnLFxuICB9KVxuICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY3JlZGVudGlhbHMuYWNjZXNzX3Rva2VuID0gZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgfSk7XG5cbiAgY29uc3QgQVBJTWV0aG9kcyA9IHtcbiAgICBhc3luYyBnZXROZXdSZWxlYXNlcygpIHtcbiAgICAgIGF3YWl0IGFjY2Vzc1Rva2VuUHJvbWlzZTtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjcmVkZW50aWFscy5hY2Nlc3NfdG9rZW59YCxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL2Jyb3dzZS9uZXctcmVsZWFzZXM/bGltaXQ9MjEnLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGNvbnN0IGFsbEFsYnVtTGlrZXMgPSBhd2FpdCB0aGlzLmdldEFsbExpa2VzKCk7XG5cbiAgICAgIHJldHVybiBkYXRhLmFsYnVtcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgYXJ0aXN0ID0gaXRlbS5hcnRpc3RzLm1hcCgoYXJ0aXN0KSA9PiBhcnRpc3QubmFtZSkuam9pbignLCAnKTtcbiAgICAgICAgY29uc3QgbGlrZXMgPSBhbGxBbGJ1bUxpa2VzLmZpbmQoKGFsYnVtKSA9PiBhbGJ1bS5pdGVtX2lkID09PSBpdGVtLmlkKT8ubGlrZXMgfHwgMDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIGFsYnVtX25hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICBhcnRpc3QsXG4gICAgICAgICAgbGlrZXMsXG4gICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2VzWzBdLnVybCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgZ2V0QWxsTGlrZXMoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QmFzZVVSTH1hcHBzLyR7YXBwSWR9L2xpa2VzYCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfSxcbiAgICBhc3luYyBnZXRMaWtlc0ZvcihpZCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0QWxsTGlrZXMoKTtcbiAgICAgIHJldHVybiBkYXRhLmZpbmQoKGkpID0+IGkuaXRlbV9pZCA9PT0gaWQpPy5saWtlcztcbiAgICB9LFxuICAgIGFzeW5jIGdldENvbW1lbnRzRm9yKGlkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QmFzZVVSTH1hcHBzLyR7YXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBhZGRMaWtlRm9yKGlkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QmFzZVVSTH1hcHBzLyR7YXBwSWR9L2xpa2VzYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlZFN0YXR1cyA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgaWYgKGNyZWF0ZWRTdGF0dXMgIT09ICdDcmVhdGVkJykgdGhyb3cgRXJyb3I7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGFkZENvbW1lbnRGb3IoaWQsIHVzZXJuYW1lLCBjb21tZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QmFzZVVSTH1hcHBzLyR7YXBwSWR9L2NvbW1lbnRzYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgY29tbWVudCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRTdGF0dXMgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGlmIChjcmVhdGVkU3RhdHVzICE9PSAnQ3JlYXRlZCcpIHRocm93IEVycm9yO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIEFQSU1ldGhvZHM7XG59O1xuIiwiaW1wb3J0IEFQSUZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBjcmVkZW50aWFscyBmcm9tICcuL2NyZWRlbnRpYWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgQVBJRmFjdG9yeSh7IGNyZWRlbnRpYWxzLCBmZXRjaCB9KTsiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1jb250YWluZXInKS5sZW5ndGg7IiwiaW1wb3J0ICcuL21vZGFsLnNjc3MnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi9hcGkvZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7IGNhbGN1bGF0ZU51bWJlck9mQ29tbWVudHMsIGFkZENvbW1lbnQgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93TW9kYWw6IGFzeW5jICh7IGFsYnVtX25hbWU6IGFsYnVtTmFtZSwgaW1hZ2UsIGlkIH0pID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmlkID0gJ21vZGFsJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjb25zdCBpbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWJ0blwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cImFsYnVtLWFydFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkaW5nXCI+JHthbGJ1bU5hbWV9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN1Yi1oZWFkaW5nXCI+Q29tbWVudHMgKDApPC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50c1wiPlxuXG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3ViLWhlYWRpbmdcIj5BZGQgYSBjb21tZW50PC9zcGFuPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJpbnNpZ2h0c1wiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ29tbWVudFwiPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5gO1xuICAgIG1vZGFsLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICBjb25zdCBjb21tZW50c0JveCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpO1xuXG4gICAgbGV0IGNvbW1lbnRzID0gYXdhaXQgQVBJLmdldENvbW1lbnRzRm9yKGlkKTtcblxuICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnREZXRhaWxzKSA9PiB7XG4gICAgICBhZGRDb21tZW50KGNvbW1lbnRzQm94LCBjb21tZW50RGV0YWlscyk7XG4gICAgfSk7XG5cbiAgICBsZXQgdG90YWxDb21tZW50cyA9IGNhbGN1bGF0ZU51bWJlck9mQ29tbWVudHMoY29tbWVudHMpO1xuICAgIGNvbnN0IHN1YkhlYWRpbmcgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc3ViLWhlYWRpbmcnKTtcbiAgICBzdWJIZWFkaW5nLnRleHRDb250ZW50ID0gYENvbW1lbnRzICgke3RvdGFsQ29tbWVudHN9KWA7XG5cbiAgICBjb25zdCBmb3JtID0gbW9kYWwucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLnVzZXJuYW1lLnZhbHVlO1xuICAgICAgY29uc3QgY29tbWVudCA9IGZvcm0uaW5zaWdodHMudmFsdWU7XG4gICAgICBpZiAoIXVzZXJuYW1lIHx8ICFjb21tZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvcm0udXNlcm5hbWUudmFsdWUgPSAnJztcbiAgICAgIGZvcm0uaW5zaWdodHMudmFsdWUgPSAnJztcbiAgICAgIGF3YWl0IEFQSS5hZGRDb21tZW50Rm9yKGlkLCB1c2VybmFtZSwgY29tbWVudCk7XG5cbiAgICAgIC8vIGNsZWFyIGNvbW1lbnRzQm94XG4gICAgICBjb21tZW50c0JveC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGNvbW1lbnRzID0gYXdhaXQgQVBJLmdldENvbW1lbnRzRm9yKGlkKTtcbiAgICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnREZXRhaWxzKSA9PiB7XG4gICAgICAgIGFkZENvbW1lbnQoY29tbWVudHNCb3gsIGNvbW1lbnREZXRhaWxzKTtcbiAgICAgIH0pO1xuICAgICAgLy8gdXBkYXRlIENvbW1lbnRzIGNvdW50ZXJcbiAgICAgIHRvdGFsQ29tbWVudHMgKz0gMTtcbiAgICAgIHN1YkhlYWRpbmcudGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7dG90YWxDb21tZW50c30pYDtcbiAgICB9KTtcblxuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9LFxuICBoaWRlTW9kYWw6ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpPy5yZW1vdmUoKSxcbn07IiwiZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZU51bWJlck9mQ29tbWVudHMgPSAoY29tbWVudHMpID0+IGNvbW1lbnRzLmxlbmd0aDtcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGNvbnRhaW5lciwgeyBjcmVhdGlvbl9kYXRlOiBjcmVhdGVkQXQsIHVzZXJuYW1lLCBjb21tZW50IH0pID0+IHtcbiAgY29uc29sZS5sb2coY29udGFpbmVyKTtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWJveCcpO1xuXG4gIGNvbnN0IGRhdGUgPSAobmV3IERhdGUoY3JlYXRlZEF0KSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gIGNvbnN0IGlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInVzZXJuYW1lLWRhdGVcIj5cbiAgICAgICAgPHN0cm9uZyBjbGFzPVwidXNlcm5hbWVcIj4ke3VzZXJuYW1lfTwvc3Ryb25nPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGVcIj4ke2RhdGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuICAgICAgICA8c3Bhbj4ke2NvbW1lbnR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG4gIGxpLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgQVBJIGZyb20gJy4vYXBpL2Z1bmN0aW9ucy5qcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbC9pbmRleC5qcyc7XG5pbXBvcnQgY291bnRUb3RhbEl0ZW1zIGZyb20gJy4vY291bnRUb3RhbEl0ZW1zLmpzJztcblxuY29uc3QgcG9wdWxhdGVMaXN0ID0gKGl0ZW0pID0+IHtcbiAgY29uc3QgaXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMtY29udGFpbmVyJyk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtLWNvbnRhaW5lcicpO1xuICBjb25zdCBwaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xuICBwaG90by5zZXRBdHRyaWJ1dGUoJ3NyYycsIGl0ZW0uaW1hZ2UpO1xuICBwaG90by5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FsYnVtLXBob3RvJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChwaG90byk7XG4gIGNvbnN0IGhlYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICBjb25zdCBsaWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgaGVhcnQuaW5uZXJIVE1MID0gJ+KdpCc7XG4gIGhlYXJ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhcnQnKTtcbiAgaGVhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgQVBJLmFkZExpa2VGb3IoaXRlbS5pZCk7XG4gICAgY29uc3QgbmV3TGlrZXMgPSBhd2FpdCBBUEkuZ2V0TGlrZXNGb3IoaXRlbS5pZCk7XG4gICAgbGlrZXMuaW5uZXJIVE1MID0gYCR7bmV3TGlrZXN9IGxpa2VzYDtcbiAgfSk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xuICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpdGVtLmFydGlzdCk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKGhlYXJ0KTtcbiAgbGlrZXMuaW5uZXJIVE1MID0gYCR7aXRlbS5saWtlc30gbGlrZXNgO1xuICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xuICBjb21tZW50cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbW1lbnRzLWJ1dHRvbicpO1xuICBjb21tZW50cy50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XG4gIGNvbW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gTW9kYWwuc2hvd01vZGFsKHtcbiAgICBpbWFnZTogaXRlbS5pbWFnZSxcbiAgICBpZDogaXRlbS5pZCxcbiAgICBhbGJ1bV9uYW1lOiBpdGVtLmFsYnVtX25hbWUsXG4gIH0pKTtcbiAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZGl2LmFwcGVuZENoaWxkKGxpa2VzKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNvbW1lbnRzKTtcbiAgaXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBBUEkuZ2V0TmV3UmVsZWFzZXMoKTtcblxuICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBwb3B1bGF0ZUxpc3QoZWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd1RvdGFsT2ZJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdG90YWwgPSBjb3VudFRvdGFsSXRlbXMoKTtcbiAgY29uc3QgdG90YWxJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbC1pdGVtcycpO1xuICB0b3RhbEl0ZW1zLmlubmVySFRNTCA9IGAoJHt0b3RhbH0pYDtcbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGF3YWl0IG1haW4oKTtcbiAgLy8gYXdhaXQgc2hvd1RvdGFsT2ZJdGVtcygpO1xuICBjb25zdCBpdGVtID0ge1xuICAgIGFsYnVtX25hbWU6ICdFYXN5IE9uIE1lJyxcbiAgICBhcnRpc3Q6ICdBZGVsZScsXG4gICAgaWQ6ICcyMjRqWjRzVVg3T2hBdU13YXhwODZTJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzM1MGRiYTM0Mzc3YTU5NWUzNWY4MWIwZTQnLFxuICAgIGxpa2VzOiAxMSxcbiAgfTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGljayBNZSc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gTW9kYWwuc2hvd01vZGFsKGl0ZW0pKTtcbn07XG5cbmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==