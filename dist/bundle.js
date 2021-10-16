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
___CSS_LOADER_EXPORT___.push([module.id, "#modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {\n  #modal {\n    background-color: rgba(0, 0, 0, 0.1);\n    -webkit-backdrop-filter: blur(30px);\n            backdrop-filter: blur(30px);\n  }\n}\n#modal ::-webkit-scrollbar {\n  width: 0.4rem;\n}\n#modal ::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n#modal ::-webkit-scrollbar-thumb {\n  background-color: #fa4848;\n  border-radius: 100vw;\n}\n#modal button {\n  border: none;\n}\n#modal img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n#modal input:not([type=submit]),\n#modal textarea {\n  background-color: transparent;\n  border: none;\n}\n#modal .content {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 1rem;\n  gap: 1rem;\n  background-color: #2e2e2e;\n  border-radius: 1rem;\n  color: #dbdbdb;\n  width: 50vw;\n  height: 80vh;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 4rem 2rem;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n#modal .content .close-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0.8rem;\n  font-size: 1.2rem;\n  margin: 1rem;\n  cursor: pointer;\n  border-radius: 0.2rem;\n  transition: all 200ms;\n}\n#modal .content .close-btn:hover {\n  background-color: rgba(219, 219, 219, 0.2);\n  color: #fa4848;\n}\n#modal .content .image {\n  border-radius: 1rem;\n  overflow: hidden;\n  width: 80%;\n  flex-shrink: 1;\n  min-height: 0;\n}\n#modal .content .heading {\n  font-weight: bolder;\n  color: whitesmoke;\n  font-size: 1.4rem;\n  padding: 0.4rem;\n  margin-bottom: 0.4rem;\n}\n#modal .content .sub-heading {\n  color: #fa4848;\n  background-color: #393939;\n  padding: 0.6rem;\n  border-radius: 0.2rem;\n}\n#modal .content .comments {\n  width: 80%;\n  border-radius: 0.2rem;\n  flex: 1 0 auto;\n  min-height: 5rem;\n  overflow: auto;\n  background-color: #1f1f1f;\n  margin-bottom: 2rem;\n  border-top: 2px solid #1a1a1a;\n}\n#modal .content .comments .comment-box {\n  padding: 1rem;\n  padding-left: 2rem;\n}\n#modal .content .comments .comment-box .details .username-date .user {\n  color: #dbdbdb;\n}\n#modal .content .comments .comment-box .details .username-date .date {\n  font-size: 0.8rem;\n  color: #a8a8a8;\n}\n#modal .content .comments .comment-box .details .comment {\n  padding-top: 0.8rem;\n  padding-left: 0.2rem;\n}\n#modal .content .comments .comment-box:nth-child(even) {\n  background-color: #292929;\n}\n#modal .content form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  grid-gap: 1rem;\n  gap: 1rem;\n  width: 80%;\n}\n#modal .content form textarea {\n  width: 100%;\n  box-sizing: border-box;\n}\n#modal .content form input,\n#modal .content form textarea {\n  border-radius: 0.2rem;\n  padding: 0.6rem 0.8rem;\n  font-size: 1rem;\n  background-color: #1f1f1f;\n  color: #dbdbdb;\n  transition: all 420ms;\n}\n#modal .content form input::-moz-placeholder, #modal .content form textarea::-moz-placeholder {\n  color: #dbdbdb;\n  opacity: 0.3;\n}\n#modal .content form input:-ms-input-placeholder, #modal .content form textarea:-ms-input-placeholder {\n  color: #dbdbdb;\n  opacity: 0.3;\n}\n#modal .content form input::placeholder,\n#modal .content form textarea::placeholder {\n  color: #dbdbdb;\n  opacity: 0.3;\n}\n#modal .content form input:focus,\n#modal .content form textarea:focus {\n  outline: none;\n  background-color: #1a1a1a;\n}\n#modal .content form input[type=submit] {\n  font-size: 1rem;\n  padding: 0.8rem 1rem;\n  cursor: pointer;\n  border: 2px solid #fa4848;\n  background-color: transparent;\n  color: #fa4848;\n  margin-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  transition: background-color 120ms;\n}\n#modal .content form input[type=submit]:hover {\n  color: #dbdbdb;\n  background-color: #fa4848;\n}\n\n#modal.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/modal/modal.scss"],"names":[],"mappings":"AACA;EAKE,eAAA;EACA,MAAA;EAAA,QAAA;EAAA,SAAA;EAAA,OAAA;EACA,0CAAA;AAJF;AAME;EATF;IAUI,oCAAA;IACA,mCAAA;YAAA,2BAAA;EAHF;AACF;AAKE;EACE,aAAA;AAHJ;AAME;EACE,6BAAA;AAJJ;AAOE;EACE,yBAAA;EACA,oBAAA;AALJ;AAQE;EACE,YAAA;AANJ;AASE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;AAPJ;AAUE;;EAEE,6BAAA;EACA,YAAA;AARJ;AAWE;EACE,cAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;EACA,yBAhDM;EAiDN,mBAAA;EACA,cAnDM;EAoDN,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,kBAAA;EACA,yCAAA;AATJ;AAWI;EACE,kBAAA;EACA,QAAA;EACA,MAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AATN;AAWM;EACE,0CAAA;EACA,cAAA;AATR;AAaI;EACE,mBAAA;EACA,gBAAA;EACA,UAAA;EACA,cAAA;EACA,aAAA;AAXN;AAcI;EACE,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;AAZN;AAeI;EACE,cAAA;EACA,yBAAA;EACA,eAAA;EACA,qBAAA;AAbN;AAgBI;EAGE,UAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,cAAA;EACA,yBA3GS;EA4GT,mBAAA;EACA,6BAAA;AAhBN;AAkBM;EACE,aAAA;EACA,kBAAA;AAhBR;AAoBY;EACE,cAxHJ;AAsGV;AAqBY;EACE,iBAAA;EACA,cAAA;AAnBd;AAuBU;EACE,mBAAA;EACA,oBAAA;AArBZ;AA0BM;EACE,yBAAA;AAxBR;AA4BI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;EAAA,SAAA;EACA,UAAA;AA1BN;AA4BM;EACE,WAAA;EACA,sBAAA;AA1BR;AA6BM;;EAEE,qBAAA;EACA,sBAAA;EACA,eAAA;EACA,yBA5JO;EA6JP,cA/JE;EAgKF,qBAAA;AA3BR;AA6BQ;EACE,cAnKA;EAoKA,YAAA;AA1BV;AAwBQ;EACE,cAnKA;EAoKA,YAAA;AA1BV;AAwBQ;;EACE,cAnKA;EAoKA,YAAA;AA1BV;AA6BQ;;EACE,aAAA;EACA,yBAAA;AA1BV;AA8BM;EACE,eAAA;EACA,oBAAA;EACA,eAAA;EACA,yBAAA;EACA,6BAAA;EACA,cAAA;EACA,kBAAA;EAAA,qBAAA;EACA,kCAAA;AA5BR;AA8BQ;EACE,cAxLA;EAyLA,yBAAA;AA5BV;;AAmCA;EACE,aAAA;AAhCF","sourcesContent":["// MODAL\r\n#modal {\r\n  $white: rgb(219, 219, 219);\r\n  $black: rgb(46, 46, 46);\r\n  $dark-black: #1f1f1f;\r\n\r\n  position: fixed;\r\n  inset: 0;\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n\r\n  @supports (backdrop-filter: none) {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    backdrop-filter: blur(30px);\r\n  }\r\n\r\n  ::-webkit-scrollbar {\r\n    width: 0.4rem;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background-color: transparent;\r\n  }\r\n\r\n  ::-webkit-scrollbar-thumb {\r\n    background-color: rgb(250, 72, 72);\r\n    border-radius: 100vw;\r\n  }\r\n\r\n  button {\r\n    border: none;\r\n  }\r\n\r\n  img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n\r\n  input:not([type=submit]),\r\n  textarea {\r\n    background-color: transparent;\r\n    border: none;\r\n  }\r\n\r\n  .content {\r\n    overflow: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: $black;\r\n    border-radius: 1rem;\r\n    color: $white;\r\n    width: 50vw;\r\n    height: 80vh;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    padding: 4rem 2rem;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n\r\n    .close-btn {\r\n      position: absolute;\r\n      right: 0;\r\n      top: 0;\r\n      padding: 0.8rem;\r\n      font-size: 1.2rem;\r\n      margin: 1rem;\r\n      cursor: pointer;\r\n      border-radius: 0.2rem;\r\n      transition: all  200ms;\r\n\r\n      &:hover {\r\n        background-color: rgba($white, 0.2);\r\n        color: rgb(250, 72, 72);\r\n      }\r\n    }\r\n\r\n    .image {\r\n      border-radius: 1rem;\r\n      overflow: hidden;\r\n      width: 80%;\r\n      flex-shrink: 1;\r\n      min-height: 0;\r\n    }\r\n\r\n    .heading {\r\n      font-weight: bolder;\r\n      color: whitesmoke;\r\n      font-size: 1.4rem;\r\n      padding: 0.4rem;\r\n      margin-bottom: 0.4rem;\r\n    }\r\n\r\n    .sub-heading {\r\n      color: rgb(250, 72, 72);\r\n      background-color: lighten($dark-black, 10%);\r\n      padding: 0.6rem;\r\n      border-radius: 0.2rem;\r\n    }\r\n\r\n    .comments {\r\n      $bg-color: $dark-black;\r\n\r\n      width: 80%;\r\n      border-radius: 0.2rem;\r\n      flex: 1 0 auto;\r\n      min-height: 5rem;\r\n      overflow: auto;\r\n      background-color: $bg-color;\r\n      margin-bottom: 2rem;\r\n      border-top: 2px solid darken($dark-black, 2%);\r\n\r\n      .comment-box {\r\n        padding: 1rem;\r\n        padding-left: 2rem;\r\n\r\n        .details {\r\n          .username-date {\r\n            .user {\r\n              color: $white;\r\n            }\r\n\r\n            .date {\r\n              font-size: 0.8rem;\r\n              color: darken($white, 20%);\r\n            }\r\n          }\r\n\r\n          .comment {\r\n            padding-top: 0.8rem;\r\n            padding-left: 0.2rem;\r\n          }\r\n        }\r\n      }\r\n\r\n      .comment-box:nth-child(even) {\r\n        background-color: lighten($bg-color, 4%);\r\n      }\r\n    }\r\n\r\n    form {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      gap: 1rem;\r\n      width: 80%;\r\n\r\n      textarea {\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n      }\r\n\r\n      input,\r\n      textarea {\r\n        border-radius: 0.2rem;\r\n        padding: 0.6rem 0.8rem;\r\n        font-size: 1rem;\r\n        background-color: $dark-black;\r\n        color: $white;\r\n        transition: all 420ms;\r\n\r\n        &::placeholder {\r\n          color: $white;\r\n          opacity: 0.3;\r\n        }\r\n\r\n        &:focus {\r\n          outline: none;\r\n          background-color: darken($dark-black, 2%);\r\n        }\r\n      }\r\n\r\n      input[type=submit] {\r\n        font-size: 1rem;\r\n        padding: 0.8rem 1rem;\r\n        cursor: pointer;\r\n        border: 2px solid rgb(250, 72, 72);\r\n        background-color: transparent;\r\n        color: rgb(250, 72, 72);\r\n        margin-block: 0.4rem;\r\n        transition: background-color 120ms;\r\n\r\n        &:hover {\r\n          color: $white;\r\n          background-color: rgb(250, 72, 72);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#modal.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
  await main();
  await showTotalOfItems();
};

initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFdkM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGdCQUFnQiwrREFBZTtBQUMvQjtBQUNBLDZCQUE2QixNQUFNO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvbW9kYWwvbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9tb2RhbC9tb2RhbC5zY3NzP2MxZmIiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvc3R5bGUuc2Nzcz80MGY3Iiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvYXBpL2NyZWRlbnRpYWxzLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL2FwaS9mYWN0b3J5LmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL2FwaS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvLi9zcmMvY291bnRUb3RhbEl0ZW1zLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovL211c2ljLWJvYXJkLy4vc3JjL21vZGFsL3V0aWxzLmpzIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL211c2ljLWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXVzaWMtYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tdXNpYy1ib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNtb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxufVxcbkBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBub25lKSkge1xcbiAgI21vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XFxuICB9XFxufVxcbiNtb2RhbCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwLjRyZW07XFxufVxcbiNtb2RhbCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4jbW9kYWwgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE0ODQ4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxufVxcbiNtb2RhbCBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4jbW9kYWwgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4jbW9kYWwgaW5wdXQ6bm90KFt0eXBlPXN1Ym1pdF0pLFxcbiNtb2RhbCB0ZXh0YXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuI21vZGFsIC5jb250ZW50IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTJlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGNvbG9yOiAjZGJkYmRiO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogNHJlbSAycmVtO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbiNtb2RhbCAuY29udGVudCAuY2xvc2UtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMC44cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XFxufVxcbiNtb2RhbCAuY29udGVudCAuY2xvc2UtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCAyMTksIDIxOSwgMC4yKTtcXG4gIGNvbG9yOiAjZmE0ODQ4O1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmltYWdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbiAgbWluLWhlaWdodDogMDtcXG59XFxuI21vZGFsIC5jb250ZW50IC5oZWFkaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLnN1Yi1oZWFkaW5nIHtcXG4gIGNvbG9yOiAjZmE0ODQ4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuI21vZGFsIC5jb250ZW50IC5jb21tZW50cyB7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBtaW4taGVpZ2h0OiA1cmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMWExYTFhO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmNvbW1lbnRzIC5jb21tZW50LWJveCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmNvbW1lbnRzIC5jb21tZW50LWJveCAuZGV0YWlscyAudXNlcm5hbWUtZGF0ZSAudXNlciB7XFxuICBjb2xvcjogI2RiZGJkYjtcXG59XFxuI21vZGFsIC5jb250ZW50IC5jb21tZW50cyAuY29tbWVudC1ib3ggLmRldGFpbHMgLnVzZXJuYW1lLWRhdGUgLmRhdGUge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogI2E4YThhODtcXG59XFxuI21vZGFsIC5jb250ZW50IC5jb21tZW50cyAuY29tbWVudC1ib3ggLmRldGFpbHMgLmNvbW1lbnQge1xcbiAgcGFkZGluZy10b3A6IDAuOHJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgLmNvbW1lbnRzIC5jb21tZW50LWJveDpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcXG59XFxuI21vZGFsIC5jb250ZW50IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuI21vZGFsIC5jb250ZW50IGZvcm0gdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSBpbnB1dCxcXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYSB7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBwYWRkaW5nOiAwLjZyZW0gMC44cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZjtcXG4gIGNvbG9yOiAjZGJkYmRiO1xcbiAgdHJhbnNpdGlvbjogYWxsIDQyMG1zO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgI21vZGFsIC5jb250ZW50IGZvcm0gdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNkYmRiZGI7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbiNtb2RhbCAuY29udGVudCBmb3JtIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgI21vZGFsIC5jb250ZW50IGZvcm0gdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjZGJkYmRiO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuI21vZGFsIC5jb250ZW50IGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjZGJkYmRiO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSBpbnB1dDpmb2N1cyxcXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG59XFxuI21vZGFsIC5jb250ZW50IGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZhNDg0ODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmYTQ4NDg7XFxuICBtYXJnaW4tdG9wOiAwLjRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEyMG1zO1xcbn1cXG4jbW9kYWwgLmNvbnRlbnQgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xcbiAgY29sb3I6ICNkYmRiZGI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE0ODQ4O1xcbn1cXG5cXG4jbW9kYWwuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2RhbC9tb2RhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBS0UsZUFBQTtFQUNBLE1BQUE7RUFBQSxRQUFBO0VBQUEsU0FBQTtFQUFBLE9BQUE7RUFDQSwwQ0FBQTtBQUpGO0FBTUU7RUFURjtJQVVJLG9DQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFQUhGO0FBQ0Y7QUFLRTtFQUNFLGFBQUE7QUFISjtBQU1FO0VBQ0UsNkJBQUE7QUFKSjtBQU9FO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBQUxKO0FBUUU7RUFDRSxZQUFBO0FBTko7QUFTRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFQSjtBQVVFOztFQUVFLDZCQUFBO0VBQ0EsWUFBQTtBQVJKO0FBV0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLHlCQWhETTtFQWlETixtQkFBQTtFQUNBLGNBbkRNO0VBb0ROLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQVRKO0FBV0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBVE47QUFXTTtFQUNFLDBDQUFBO0VBQ0EsY0FBQTtBQVRSO0FBYUk7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBWE47QUFjSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVpOO0FBZUk7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFiTjtBQWdCSTtFQUdFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkEzR1M7RUE0R1QsbUJBQUE7RUFDQSw2QkFBQTtBQWhCTjtBQWtCTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWhCUjtBQW9CWTtFQUNFLGNBeEhKO0FBc0dWO0FBcUJZO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBbkJkO0FBdUJVO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQXJCWjtBQTBCTTtFQUNFLHlCQUFBO0FBeEJSO0FBNEJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLFVBQUE7QUExQk47QUE0Qk07RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUExQlI7QUE2Qk07O0VBRUUscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkE1Sk87RUE2SlAsY0EvSkU7RUFnS0YscUJBQUE7QUEzQlI7QUE2QlE7RUFDRSxjQW5LQTtFQW9LQSxZQUFBO0FBMUJWO0FBd0JRO0VBQ0UsY0FuS0E7RUFvS0EsWUFBQTtBQTFCVjtBQXdCUTs7RUFDRSxjQW5LQTtFQW9LQSxZQUFBO0FBMUJWO0FBNkJROztFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQTFCVjtBQThCTTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQUEscUJBQUE7RUFDQSxrQ0FBQTtBQTVCUjtBQThCUTtFQUNFLGNBeExBO0VBeUxBLHlCQUFBO0FBNUJWOztBQW1DQTtFQUNFLGFBQUE7QUFoQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gTU9EQUxcXHJcXG4jbW9kYWwge1xcclxcbiAgJHdoaXRlOiByZ2IoMjE5LCAyMTksIDIxOSk7XFxyXFxuICAkYmxhY2s6IHJnYig0NiwgNDYsIDQ2KTtcXHJcXG4gICRkYXJrLWJsYWNrOiAjMWYxZjFmO1xcclxcblxcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxyXFxuXFxyXFxuICBAc3VwcG9ydHMgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogMC40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDcyLCA3Mik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW5wdXQ6bm90KFt0eXBlPXN1Ym1pdF0pLFxcclxcbiAgdGV4dGFyZWEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRlbnQge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA1MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDgwdmg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW0gMnJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuXFxyXFxuICAgIC5jbG9zZS1idG4ge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAgMjAwbXM7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC4yKTtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMjUwLCA3MiwgNzIpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW1hZ2Uge1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgIGZsZXgtc2hyaW5rOiAxO1xcclxcbiAgICAgIG1pbi1oZWlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRpbmcge1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3ViLWhlYWRpbmcge1xcclxcbiAgICAgIGNvbG9yOiByZ2IoMjUwLCA3MiwgNzIpO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGRhcmstYmxhY2ssIDEwJSk7XFxyXFxuICAgICAgcGFkZGluZzogMC42cmVtO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29tbWVudHMge1xcclxcbiAgICAgICRiZy1jb2xvcjogJGRhcmstYmxhY2s7XFxyXFxuXFxyXFxuICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICAgICAgZmxleDogMSAwIGF1dG87XFxyXFxuICAgICAgbWluLWhlaWdodDogNXJlbTtcXHJcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgZGFya2VuKCRkYXJrLWJsYWNrLCAyJSk7XFxyXFxuXFxyXFxuICAgICAgLmNvbW1lbnQtYm94IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuXFxyXFxuICAgICAgICAuZGV0YWlscyB7XFxyXFxuICAgICAgICAgIC51c2VybmFtZS1kYXRlIHtcXHJcXG4gICAgICAgICAgICAudXNlciB7XFxyXFxuICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuZGF0ZSB7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHdoaXRlLCAyMCUpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAuY29tbWVudCB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuOHJlbTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuY29tbWVudC1ib3g6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA0JSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGZvcm0ge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgICBnYXA6IDFyZW07XFxyXFxuICAgICAgd2lkdGg6IDgwJTtcXHJcXG5cXHJcXG4gICAgICB0ZXh0YXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGlucHV0LFxcclxcbiAgICAgIHRleHRhcmVhIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbSAwLjhyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibGFjaztcXHJcXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNDIwbXM7XFxyXFxuXFxyXFxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGRhcmstYmxhY2ssIDIlKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1MCwgNzIsIDcyKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgY29sb3I6IHJnYigyNTAsIDcyLCA3Mik7XFxyXFxuICAgICAgICBtYXJnaW4tYmxvY2s6IDAuNHJlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTIwbXM7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgNzIsIDcyKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0NhdmVhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9Ba3JvbmltLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDYXZlYXRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBa3JvbmltXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYm94LXNoYWRvdzogLTFweCA1cHggMjRweCA1cHggIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LXNwYWNlLWFyb3VuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxufVxcblxcbi5tYXJnaW4tYXV0byB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jdXJzb3ItcG9pbnRlcixcXG4uYWxidW0tcGhvdG8sXFxuLmhlYXJ0LFxcbiNjb21tZW50cy1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29tbWVudHMtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1ZjVmO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3V0bGluZTogbGlnaHRzZWFncmVlbjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGZvbnQtd2VpZ2h0IDAuNXM7XFxufVxcblxcbiNtb2JpbGUtbmF2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICBtYXJnaW46IDI1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxubmF2IGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IEFrcm9uaW0sIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDFzO1xcbn1cXG5cXG5uYXYgbGkgYTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jaXRlbXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyN3B4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjg0KTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzO1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXI6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyN3B4IC0zcHggcmdiYSgyNTUsIDY5LCA2OSwgMC44NCk7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciBwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBmb250LWZhbWlseTogQ2F2ZWF0LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYWxidW0tcGhvdG8sXFxuI2NvbW1lbnRzLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRpc3BsYXktZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jY29tbWVudHMtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5oZWFydCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5oZWFydDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogNDVweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBjb2xvcjogaXZvcnk7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgYmFja2dyb3VuZDogI2FhN2U3NjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOGRlZywgI2FhN2U3NiAwJSwgI2M5Nzc2ZiAwJSwgcmdiYSgxNDcsIDc1LCA3NSwgMC41OTk4Nzc0NTEpIDEwMCUpO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5mb290ZXItaW1hZ2Uge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XFxuICAjaXRlbXMtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNiaWctbmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbmF2IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MnB4KSB7XFxuICAjaXRlbXMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuaXRlbS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaXRlbS1jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSwwREFBQTtBQUNGO0FBRUE7RUFDRSxzQkFBQTtFQUNBLDBEQUFBO0FBQUY7QUFHQTtFQUNFLHlDQUFBO0FBREY7O0FBSUE7RUFFRSxrQ0FBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7QUFERjs7QUFJQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7Ozs7RUFJRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsaURBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBRUUscURBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQURGOztBQUlBOztFQUVFLFdBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQUEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtGQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxxQ0FBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFO0lBQ0UsYUFBQTtFQUZGOztFQUtBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUFIRjs7RUFNQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUFIRjs7RUFNQTtJQUNFLFdBQUE7RUFIRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xcclxcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0NhdmVhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQWtyb25pbSc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvQWtyb25pbS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggNXB4IDI0cHggNXB4ICMwMDA7XFxyXFxuICBib3gtc2hhZG93OiAtMXB4IDVweCAyNHB4IDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYXJvdW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1jb250ZW50LXNwYWNlLWJldHdlZW4ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpbi1hdXRvIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnNvci1wb2ludGVyLFxcclxcbi5hbGJ1bS1waG90byxcXHJcXG4uaGVhcnQsXFxyXFxuI2NvbW1lbnRzLWJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50cy1idXR0b24ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDk1LCA5NSk7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBvdXRsaW5lOiBsaWdodHNlYWdyZWVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcywgZm9udC13ZWlnaHQgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuI21vYmlsZS1uYXYge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIHtcXHJcXG4gIG1hcmdpbjogMjVweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogQWtyb25pbSwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMXM7XFxyXFxufVxcclxcblxcclxcbm5hdiBsaSBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNpdGVtcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMjdweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC44NCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDI3cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuODQpO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lcjpob3ZlciB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMjdweCAtM3B4IHJnYmEoMjU1LCA2OSwgNjksIDAuODQpO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyN3B4IC0zcHggcmdiYSgyNTUsIDY5LCA2OSwgMC44NCk7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lciBwIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBmb250LWZhbWlseTogQ2F2ZWF0LCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxidW0tcGhvdG8sXFxyXFxuI2NvbW1lbnRzLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNDVweDtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBjb2xvcjogaXZvcnk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDE3MCwgMTI2LCAxMTgpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4ZGVnLCByZ2JhKDE3MCwgMTI2LCAxMTgsIDEpIDAlLCByZ2JhKDIwMSwgMTE5LCAxMTEsIDEpIDAlLCByZ2JhKDE0NywgNzUsIDc1LCAwLjU5OTg3NzQ1MDk4MDM5MjEpIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRleHQge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItaW1hZ2Uge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XFxyXFxuICAjaXRlbXMtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gICNiaWctbmF2IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNtb2JpbGUtbmF2IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MnB4KSB7XFxyXFxuICAjaXRlbXMtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaXRlbS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaXRlbS1jb250YWluZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2lkOiAnMDNjOTNmYmQ4Y2U3NGI1MWIyODk5ZDhiZWVlOGQxNzcnLFxuICBjczogJzgzNDJjYzkzNmRhMTQ4M2FiYWRlMTEwM2ExZjQyZDM5JyxcbiAgdG9rZW5fZW5kcG9pbnQ6ICcnLFxuICBhY2Nlc3NfdG9rZW46ICcnLFxufTsiLCJleHBvcnQgZGVmYXVsdCAoeyBjcmVkZW50aWFscywgZmV0Y2ggfSkgPT4ge1xuICBjcmVkZW50aWFscy5hY2Nlc3NfdG9rZW4gPSAnQlFEODFvWUVuUTNaaE5UNEE5cTg5alI2T1czYTZmNGhfc3E0ZzZVOHg0V3Fya21HSkFiLS1PZXBGV0hsTFZ3WUFIREIwSDJKcVJtaU5hd2F6aXMnO1xuXG4gIGNvbnN0IGludm9sdmVtZW50QmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvJztcbiAgY29uc3QgYXBwSWQgPSAnb00waTlIZmpkN1p3cWRQNGl6VmonO1xuXG4gIGNvbnN0IGFjY2Vzc1Rva2VuUHJvbWlzZSA9IGZldGNoKCdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlbicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtidG9hKGAke2NyZWRlbnRpYWxzLmNpZH06JHtjcmVkZW50aWFscy5jc31gKX1gLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0sXG4gICAgYm9keTogJ2dyYW50X3R5cGU9Y2xpZW50X2NyZWRlbnRpYWxzJyxcbiAgfSlcbiAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNyZWRlbnRpYWxzLmFjY2Vzc190b2tlbiA9IGRhdGEuYWNjZXNzX3Rva2VuO1xuICAgIH0pO1xuXG4gIGNvbnN0IEFQSU1ldGhvZHMgPSB7XG4gICAgYXN5bmMgZ2V0TmV3UmVsZWFzZXMoKSB7XG4gICAgICBhd2FpdCBhY2Nlc3NUb2tlblByb21pc2U7XG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y3JlZGVudGlhbHMuYWNjZXNzX3Rva2VufWAsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH07XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9icm93c2UvbmV3LXJlbGVhc2VzP2xpbWl0PTIxJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBjb25zdCBhbGxBbGJ1bUxpa2VzID0gYXdhaXQgdGhpcy5nZXRBbGxMaWtlcygpO1xuXG4gICAgICByZXR1cm4gZGF0YS5hbGJ1bXMuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGFydGlzdCA9IGl0ZW0uYXJ0aXN0cy5tYXAoKGFydGlzdCkgPT4gYXJ0aXN0Lm5hbWUpLmpvaW4oJywgJyk7XG4gICAgICAgIGNvbnN0IGxpa2VzID0gYWxsQWxidW1MaWtlcy5maW5kKChhbGJ1bSkgPT4gYWxidW0uaXRlbV9pZCA9PT0gaXRlbS5pZCk/Lmxpa2VzIHx8IDA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICBhbGJ1bV9uYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgYXJ0aXN0LFxuICAgICAgICAgIGxpa2VzLFxuICAgICAgICAgIGltYWdlOiBpdGVtLmltYWdlc1swXS51cmwsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFzeW5jIGdldEFsbExpa2VzKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEJhc2VVUkx9YXBwcy8ke2FwcElkfS9saWtlc2ApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH0sXG4gICAgYXN5bmMgZ2V0TGlrZXNGb3IoaWQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmdldEFsbExpa2VzKCk7XG4gICAgICByZXR1cm4gZGF0YS5maW5kKChpKSA9PiBpLml0ZW1faWQgPT09IGlkKT8ubGlrZXM7XG4gICAgfSxcbiAgICBhc3luYyBnZXRDb21tZW50c0ZvcihpZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEJhc2VVUkx9YXBwcy8ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgYWRkTGlrZUZvcihpZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEJhc2VVUkx9YXBwcy8ke2FwcElkfS9saWtlc2AsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRTdGF0dXMgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGlmIChjcmVhdGVkU3RhdHVzICE9PSAnQ3JlYXRlZCcpIHRocm93IEVycm9yO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBhZGRDb21tZW50Rm9yKGlkLCB1c2VybmFtZSwgY29tbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEJhc2VVUkx9YXBwcy8ke2FwcElkfS9jb21tZW50c2AsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIGNvbW1lbnQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjcmVhdGVkU3RhdHVzID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBpZiAoY3JlYXRlZFN0YXR1cyAhPT0gJ0NyZWF0ZWQnKSB0aHJvdyBFcnJvcjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG4gIHJldHVybiBBUElNZXRob2RzO1xufTtcbiIsImltcG9ydCBBUElGYWN0b3J5IGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSAnLi9jcmVkZW50aWFscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEFQSUZhY3RvcnkoeyBjcmVkZW50aWFscywgZmV0Y2ggfSk7IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tY29udGFpbmVyJykubGVuZ3RoOyIsImltcG9ydCAnLi9tb2RhbC5zY3NzJztcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL2Z1bmN0aW9ucy5qcyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVOdW1iZXJPZkNvbW1lbnRzLCBhZGRDb21tZW50IH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2hvd01vZGFsOiBhc3luYyAoeyBhbGJ1bV9uYW1lOiBhbGJ1bU5hbWUsIGltYWdlLCBpZCB9KSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5pZCA9ICdtb2RhbCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1idG5cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCJhbGJ1bS1hcnRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGluZ1wiPiR7YWxidW1OYW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWItaGVhZGluZ1wiPkNvbW1lbnRzICgwKTwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudHNcIj5cblxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN1Yi1oZWFkaW5nXCI+QWRkIGEgY29tbWVudDwvc3Bhbj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiaW5zaWdodHNcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNvbW1lbnRcIj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+YDtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgY29uc3QgY29tbWVudHNCb3ggPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKTtcblxuICAgIGxldCBjb21tZW50cyA9IGF3YWl0IEFQSS5nZXRDb21tZW50c0ZvcihpZCk7XG5cbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50RGV0YWlscykgPT4ge1xuICAgICAgYWRkQ29tbWVudChjb21tZW50c0JveCwgY29tbWVudERldGFpbHMpO1xuICAgIH0pO1xuXG4gICAgbGV0IHRvdGFsQ29tbWVudHMgPSBjYWxjdWxhdGVOdW1iZXJPZkNvbW1lbnRzKGNvbW1lbnRzKTtcbiAgICBjb25zdCBzdWJIZWFkaW5nID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnN1Yi1oZWFkaW5nJyk7XG4gICAgc3ViSGVhZGluZy50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHt0b3RhbENvbW1lbnRzfSlgO1xuXG4gICAgY29uc3QgZm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gZm9ybS51c2VybmFtZS52YWx1ZTtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBmb3JtLmluc2lnaHRzLnZhbHVlO1xuICAgICAgaWYgKCF1c2VybmFtZSB8fCAhY29tbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3JtLnVzZXJuYW1lLnZhbHVlID0gJyc7XG4gICAgICBmb3JtLmluc2lnaHRzLnZhbHVlID0gJyc7XG4gICAgICBhd2FpdCBBUEkuYWRkQ29tbWVudEZvcihpZCwgdXNlcm5hbWUsIGNvbW1lbnQpO1xuXG4gICAgICAvLyBjbGVhciBjb21tZW50c0JveFxuICAgICAgY29tbWVudHNCb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICBjb21tZW50cyA9IGF3YWl0IEFQSS5nZXRDb21tZW50c0ZvcihpZCk7XG4gICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50RGV0YWlscykgPT4ge1xuICAgICAgICBhZGRDb21tZW50KGNvbW1lbnRzQm94LCBjb21tZW50RGV0YWlscyk7XG4gICAgICB9KTtcbiAgICAgIC8vIHVwZGF0ZSBDb21tZW50cyBjb3VudGVyXG4gICAgICB0b3RhbENvbW1lbnRzICs9IDE7XG4gICAgICBzdWJIZWFkaW5nLnRleHRDb250ZW50ID0gYENvbW1lbnRzICgke3RvdGFsQ29tbWVudHN9KWA7XG4gICAgfSk7XG5cbiAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfSxcbiAgaGlkZU1vZGFsOiAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKT8ucmVtb3ZlKCksXG59OyIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVOdW1iZXJPZkNvbW1lbnRzID0gKGNvbW1lbnRzKSA9PiBjb21tZW50cy5sZW5ndGg7XG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChjb250YWluZXIsIHsgY3JlYXRpb25fZGF0ZTogY3JlYXRlZEF0LCB1c2VybmFtZSwgY29tbWVudCB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbnRhaW5lcik7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1ib3gnKTtcblxuICBjb25zdCBkYXRlID0gKG5ldyBEYXRlKGNyZWF0ZWRBdCkpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICBjb25zdCBpbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1c2VybmFtZS1kYXRlXCI+XG4gICAgICAgIDxzdHJvbmcgY2xhcz1cInVzZXJuYW1lXCI+JHt1c2VybmFtZX08L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlXCI+JHtkYXRlfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj5cbiAgICAgICAgPHNwYW4+JHtjb21tZW50fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICBsaS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaSk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEFQSSBmcm9tICcuL2FwaS9mdW5jdGlvbnMuanMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwvaW5kZXguanMnO1xuaW1wb3J0IGNvdW50VG90YWxJdGVtcyBmcm9tICcuL2NvdW50VG90YWxJdGVtcy5qcyc7XG5cbmNvbnN0IHBvcHVsYXRlTGlzdCA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IGl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zLWNvbnRhaW5lcicpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbS1jb250YWluZXInKTtcbiAgY29uc3QgcGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcbiAgcGhvdG8uc2V0QXR0cmlidXRlKCdzcmMnLCBpdGVtLmltYWdlKTtcbiAgcGhvdG8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhbGJ1bS1waG90bycpO1xuICBkaXYuYXBwZW5kQ2hpbGQocGhvdG8pO1xuICBjb25zdCBoZWFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NQQU4nKTtcbiAgY29uc3QgbGlrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gIGhlYXJ0LmlubmVySFRNTCA9ICfinaQnO1xuICBoZWFydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYXJ0Jyk7XG4gIGhlYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IEFQSS5hZGRMaWtlRm9yKGl0ZW0uaWQpO1xuICAgIGNvbnN0IG5ld0xpa2VzID0gYXdhaXQgQVBJLmdldExpa2VzRm9yKGl0ZW0uaWQpO1xuICAgIGxpa2VzLmlubmVySFRNTCA9IGAke25ld0xpa2VzfSBsaWtlc2A7XG4gIH0pO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaXRlbS5hcnRpc3QpO1xuICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICB0aXRsZS5hcHBlbmRDaGlsZChoZWFydCk7XG4gIGxpa2VzLmlubmVySFRNTCA9IGAke2l0ZW0ubGlrZXN9IGxpa2VzYDtcbiAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcbiAgY29tbWVudHMuc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZW50cy1idXR0b24nKTtcbiAgY29tbWVudHMudGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xuICBjb21tZW50cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IE1vZGFsLnNob3dNb2RhbCh7XG4gICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXG4gICAgaWQ6IGl0ZW0uaWQsXG4gICAgYWxidW1fbmFtZTogaXRlbS5hbGJ1bV9uYW1lLFxuICB9KSk7XG4gIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGRpdi5hcHBlbmRDaGlsZChsaWtlcyk7XG4gIGRpdi5hcHBlbmRDaGlsZChjb21tZW50cyk7XG4gIGl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgQVBJLmdldE5ld1JlbGVhc2VzKCk7XG5cbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgcG9wdWxhdGVMaXN0KGVsZW1lbnQpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNob3dUb3RhbE9mSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRvdGFsID0gY291bnRUb3RhbEl0ZW1zKCk7XG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwtaXRlbXMnKTtcbiAgdG90YWxJdGVtcy5pbm5lckhUTUwgPSBgKCR7dG90YWx9KWA7XG59O1xuXG5jb25zdCBpbml0aWFsaXplID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBtYWluKCk7XG4gIGF3YWl0IHNob3dUb3RhbE9mSXRlbXMoKTtcbn07XG5cbmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==