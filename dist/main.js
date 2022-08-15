/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/shaian-ramesht-exSEmuA7R7k-unsplash.jpg */ "./src/img/shaian-ramesht-exSEmuA7R7k-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Italianno&family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --bg-color-main: rgb(31, 31, 31);\r\n    --primary-content-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody,\r\nhtml {\r\n    width: 100%;\r\n\r\n}\r\n\r\nbody {\r\n    /* min-height: 100%; */\r\n    background-color: var(--bg-color-main);\r\n    display: grid;\r\n    grid-template-columns: minmax(250px, 1fr) 3fr;\r\n}\r\n\r\n#content {\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    /* position: relative; */\r\n    grid-column: 2/3;\r\n    z-index: 100;\r\n    padding-left: 30px;\r\n    /* height: 100%; */\r\n}\r\n\r\n#content .display {\r\n    margin-top: 50px;\r\n}\r\n\r\n#content>header {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--primary-content-color);\r\n    padding: 5px 20px;\r\n    border-radius: 0px 0px 15px 15px;\r\n    left: 55%;\r\n    top: 0;\r\n}\r\n\r\n#content header #navbar {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n#content header button {\r\n    padding: 5px 15px;\r\n    background: none;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: all 100ms;\r\n}\r\n\r\n#content header button.btnActive {\r\n    border-bottom: 2px solid #FFFFFF;\r\n    font-weight: 600;\r\n}\r\n\r\n#content header button:hover {\r\n    border-bottom: 2px solid #FFFFFF;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n#bg-image {\r\n    font-family: 'Italianno', cursive;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    /* background-repeat: no-repeat; */\r\n    background-size: cover;\r\n    height: 100vh;\r\n    min-width: clamp(5%, 28%, 28%);\r\n    box-shadow: inset -90px 0px 24px -33px var(--bg-color-main);\r\n    display: flex;\r\n    justify-content: center;\r\n    position: fixed;\r\n    grid-column: 1/2;\r\n}\r\n\r\n#restaurant-name {\r\n    /* position: relative; */\r\n    margin-top: 50px;\r\n    margin-right: 5%;\r\n}\r\n\r\n#restaurant-name h1 {\r\n    font-size: 5rem;\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    color: white;\r\n}\r\n\r\n\r\n/* DISPLAY */\r\n.display {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding: 0px 50px;\r\n}\r\n\r\n.display hr {\r\n    width: 60%;\r\n}\r\n\r\n\r\n/* DISPLAY HOME */\r\n.display #display-home {\r\n    background: var(--primary-content-color);\r\n    box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);\r\n    min-width: 70%;\r\n    height: 600px;\r\n    border-radius: 10px;\r\n    padding: 15px 80px;\r\n    color: white;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 80px;\r\n    line-height: 0;\r\n\r\n    margin-top: 5rem;\r\n}\r\n\r\n.display #display-home header {\r\n    font-family: 'Italianno', cursive;\r\n    font-weight: 200;\r\n    font-size: 2rem;\r\n}\r\n\r\n.display #display-home span {\r\n    line-height: 1.8;\r\n    text-justify: left;\r\n}\r\n\r\n/* DISPLAY MENU */\r\n.display .display-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 100%;\r\n    gap: 60px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.menuPosition {\r\n    height: 400px;\r\n    min-width: 300px;\r\n    background: rgb(240, 239, 239, 0.1);\r\n    /* border-radius: 5px; */\r\n    border: 1px solid #FFFFFF;\r\n    /* box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1); */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    justify-content: space-between;\r\n    color: white;\r\n}\r\n\r\n.menuPosition div {\r\n    /* border: 4px solid #FFFFFF; */\r\n}\r\n\r\n.menuPosition img {\r\n    width: 100%;\r\n    height: 40%;\r\n}\r\n\r\n.menuPosition ul {\r\n    padding: 15px 25px;\r\n}\r\n\r\n.menuPosition .title-section h1 {\r\n    text-align: center;\r\n}\r\n\r\n.menuPosition .desc-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n/* DISPLAY CONTACT */\r\n.display-contact {\r\n    background: var(--primary-content-color);\r\n    box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);\r\n    min-width: 70%;\r\n    height: 600px;\r\n    border-radius: 10px;\r\n    padding: 15px 80px;\r\n    color: white;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    gap: 80px;\r\n    line-height: 1;\r\n\r\n    margin-top: 5rem;\r\n}", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAGA;IACI,gCAAgC;IAChC,iDAAiD;AACrD;;;;AAIA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;;IAEI,WAAW;;AAEf;;AAEA;IACI,sBAAsB;IACtB,sCAAsC;IACtC,aAAa;IACb,6CAA6C;AACjD;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,wBAAwB;IACxB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,wCAAwC;IACxC,iBAAiB;IACjB,gCAAgC;IAChC,SAAS;IACT,MAAM;AACV;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;AACpB;;;AAGA;IACI,iCAAiC;IACjC,mDAAiE;IACjE,kCAAkC;IAClC,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,2DAA2D;IAC3D,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,YAAY;AAChB;;;AAGA,YAAY;AACZ;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;;AAGA,iBAAiB;AACjB;IACI,wCAAwC;IACxC,6CAA6C;IAC7C,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,cAAc;;IAEd,gBAAgB;AACpB;;AAEA;IACI,iCAAiC;IACjC,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,mCAAmC;IACnC,wBAAwB;IACxB,yBAAyB;IACzB,sDAAsD;IACtD,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,oBAAoB;AACpB;IACI,wCAAwC;IACxC,6CAA6C;IAC7C,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,SAAS;IACT,cAAc;;IAEd,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Italianno&family=Roboto&display=swap');\r\n\r\n\r\n:root {\r\n    --bg-color-main: rgb(31, 31, 31);\r\n    --primary-content-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody,\r\nhtml {\r\n    width: 100%;\r\n\r\n}\r\n\r\nbody {\r\n    /* min-height: 100%; */\r\n    background-color: var(--bg-color-main);\r\n    display: grid;\r\n    grid-template-columns: minmax(250px, 1fr) 3fr;\r\n}\r\n\r\n#content {\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    /* position: relative; */\r\n    grid-column: 2/3;\r\n    z-index: 100;\r\n    padding-left: 30px;\r\n    /* height: 100%; */\r\n}\r\n\r\n#content .display {\r\n    margin-top: 50px;\r\n}\r\n\r\n#content>header {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--primary-content-color);\r\n    padding: 5px 20px;\r\n    border-radius: 0px 0px 15px 15px;\r\n    left: 55%;\r\n    top: 0;\r\n}\r\n\r\n#content header #navbar {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n#content header button {\r\n    padding: 5px 15px;\r\n    background: none;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: all 100ms;\r\n}\r\n\r\n#content header button.btnActive {\r\n    border-bottom: 2px solid #FFFFFF;\r\n    font-weight: 600;\r\n}\r\n\r\n#content header button:hover {\r\n    border-bottom: 2px solid #FFFFFF;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n#bg-image {\r\n    font-family: 'Italianno', cursive;\r\n    background: url('../img/shaian-ramesht-exSEmuA7R7k-unsplash.jpg');\r\n    /* background-repeat: no-repeat; */\r\n    background-size: cover;\r\n    height: 100vh;\r\n    min-width: clamp(5%, 28%, 28%);\r\n    box-shadow: inset -90px 0px 24px -33px var(--bg-color-main);\r\n    display: flex;\r\n    justify-content: center;\r\n    position: fixed;\r\n    grid-column: 1/2;\r\n}\r\n\r\n#restaurant-name {\r\n    /* position: relative; */\r\n    margin-top: 50px;\r\n    margin-right: 5%;\r\n}\r\n\r\n#restaurant-name h1 {\r\n    font-size: 5rem;\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    color: white;\r\n}\r\n\r\n\r\n/* DISPLAY */\r\n.display {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding: 0px 50px;\r\n}\r\n\r\n.display hr {\r\n    width: 60%;\r\n}\r\n\r\n\r\n/* DISPLAY HOME */\r\n.display #display-home {\r\n    background: var(--primary-content-color);\r\n    box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);\r\n    min-width: 70%;\r\n    height: 600px;\r\n    border-radius: 10px;\r\n    padding: 15px 80px;\r\n    color: white;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 80px;\r\n    line-height: 0;\r\n\r\n    margin-top: 5rem;\r\n}\r\n\r\n.display #display-home header {\r\n    font-family: 'Italianno', cursive;\r\n    font-weight: 200;\r\n    font-size: 2rem;\r\n}\r\n\r\n.display #display-home span {\r\n    line-height: 1.8;\r\n    text-justify: left;\r\n}\r\n\r\n/* DISPLAY MENU */\r\n.display .display-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 100%;\r\n    gap: 60px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.menuPosition {\r\n    height: 400px;\r\n    min-width: 300px;\r\n    background: rgb(240, 239, 239, 0.1);\r\n    /* border-radius: 5px; */\r\n    border: 1px solid #FFFFFF;\r\n    /* box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1); */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    justify-content: space-between;\r\n    color: white;\r\n}\r\n\r\n.menuPosition div {\r\n    /* border: 4px solid #FFFFFF; */\r\n}\r\n\r\n.menuPosition img {\r\n    width: 100%;\r\n    height: 40%;\r\n}\r\n\r\n.menuPosition ul {\r\n    padding: 15px 25px;\r\n}\r\n\r\n.menuPosition .title-section h1 {\r\n    text-align: center;\r\n}\r\n\r\n.menuPosition .desc-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n/* DISPLAY CONTACT */\r\n.display-contact {\r\n    background: var(--primary-content-color);\r\n    box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);\r\n    min-width: 70%;\r\n    height: 600px;\r\n    border-radius: 10px;\r\n    padding: 15px 80px;\r\n    color: white;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    gap: 80px;\r\n    line-height: 1;\r\n\r\n    margin-top: 5rem;\r\n}"],"sourceRoot":""}]);
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
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

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

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "divDisplay": () => (/* binding */ divDisplay)
/* harmony export */ });
/* harmony import */ var _pageInit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageInit.js */ "./src/pageInit.js");
/* harmony import */ var _tabFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabFunctions.js */ "./src/tabFunctions.js");
/* harmony import */ var _renderTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTab.js */ "./src/renderTab.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");





(0,_pageInit_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

const divDisplay = document.querySelector('.display');




// Tabs functions
const tabs = document.querySelectorAll('.btnTab');

tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn.classList.contains('btnActive')) (0,_tabFunctions_js__WEBPACK_IMPORTED_MODULE_1__["default"])(btn, tabs);
    })
});
// ================ //

(0,_renderTab_js__WEBPACK_IMPORTED_MODULE_2__.renderHome)();






/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = [
    {
        name: 'Margherita',
        price: 10,
        ingredients: [
            'oregano', 'tomato sauce', 'basil', 'mozzarella'
        ],
        descr: 'Classical pizza.',
        image: 'margherita.jpg'
    },
    {
        name: 'Pepperoni',
        price: 12,
        ingredients: [
            'oregano', 'tomato sauce', 'basil', 'mozzarella', 'salami'
        ],
        descr: 'Pizza with salami.',
        image: 'pepperoni.jpg'
    },
    {
        name: 'Napoletana',
        price: 13,
        ingredients: [
            'oregano', 'tomato sauce', 'basil', 'buffalo mozzarella'
        ],
        descr: 'Extra thin classical margherita with more basil.',
        image: 'napoletana.jpg'
    },
]

/***/ }),

/***/ "./src/pageInit.js":
/*!*************************!*\
  !*** ./src/pageInit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bodyElement = document.querySelector('body');

function appendBgLogo() {
    // Main DIV id='bg-image'
    const divBgImage = document.createElement('div');
    divBgImage.setAttribute('id', 'bg-image');
    bodyElement.appendChild(divBgImage);

    // bg-image Child
    const divRestaurantName = document.createElement('div');
    divRestaurantName.setAttribute('id', 'restaurant-name');
    divBgImage.appendChild(divRestaurantName);

    // restaurant-name childs
    const nameA = document.createElement('h1');
    const nameB = document.createElement('h1');
    const hr = document.createElement('hr');
    nameA.innerText = 'Ristorante';
    nameB.innerText = 'Tradizionale';
    divRestaurantName.appendChild(nameA);
    divRestaurantName.appendChild(hr);
    divRestaurantName.appendChild(nameB);
}

function appendMainContent() {
    // #content div
    const divContent = document.createElement('div');
    divContent.setAttribute('id', 'content');
    bodyElement.appendChild(divContent);

    // #content childs
    const header = document.createElement('header');
    const divDisplay = document.createElement('div');
    divDisplay.classList.add('display');
    divContent.appendChild(header);
    divContent.appendChild(divDisplay);

    // header child
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'navbar');
    header.appendChild(nav);

    // #navbar childs
    const btnHome = document.createElement('button');
    btnHome.setAttribute('id', 'btnHome');
    btnHome.innerText = 'Home';
    btnHome.classList.toggle('btnActive');
    btnHome.dataset.tab = 'home';

    const btnMenu = document.createElement('button');
    btnMenu.setAttribute('id', 'btnMenu');
    btnMenu.innerText = 'Menu';
    btnMenu.dataset.tab = 'menu';

    const btnContact = document.createElement('button');
    btnContact.setAttribute('id', 'btnContact');
    btnContact.innerText = 'Contact';
    btnContact.dataset.tab = 'contact';
    nav.appendChild(btnHome);
    nav.appendChild(btnMenu);
    nav.appendChild(btnContact);


    // Add classes to buttons
    btnHome.classList.add('btnTab');
    btnMenu.classList.add('btnTab');
    btnContact.classList.add('btnTab');
}


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    appendBgLogo();
    appendMainContent();
}

/***/ }),

/***/ "./src/renderTab.js":
/*!**************************!*\
  !*** ./src/renderTab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContact": () => (/* binding */ renderContact),
/* harmony export */   "renderHome": () => (/* binding */ renderHome),
/* harmony export */   "renderMenu": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



const weekDays = [
    {
        name: 'Monday',
        open: '8am - 10pm'
    },
    {
        name: 'Tuesday',
        open: '8am - 10pm'
    },
    {
        name: 'Wednesday',
        open: '8am - 10pm'
    },
    {
        name: 'Thursday',
        open: '8am - 10pm'
    },
    {
        name: 'Friday',
        open: '8am - 10pm'
    },
    {
        name: 'Saturday',
        open: '9am - 10pm'
    },
    {
        name: 'Sunday',
        open: '10am - 8pm'
    },
]


function renderHome() {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.divDisplay.innerHTML = '';
    // Home display creation
    const displayHome = document.createElement('div');
    displayHome.setAttribute('id', 'display-home');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.divDisplay.appendChild(displayHome);

    // Home display childs creation
    const header = document.createElement('header');
    const headerHOne = document.createElement('h1');
    headerHOne.innerText = 'Traditional Italian Cousine';
    header.appendChild(headerHOne);
    displayHome.appendChild(header);

    const hrOne = document.createElement('hr');
    displayHome.appendChild(hrOne);

    const spanDescr = document.createElement('span');
    spanDescr.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velitLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velitLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velitLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velitLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velitLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velit'
    displayHome.appendChild(spanDescr);

    const hrTwo = document.createElement('hr');
    displayHome.appendChild(hrTwo);

    const footer = document.createElement('h2');
    footer.innerText = 'Check out our Menu!';
    displayHome.appendChild(footer);

}
function renderMenu() {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.divDisplay.innerHTML = '';

    const displayMenu = document.createElement('div');
    displayMenu.classList.add('display-menu');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.divDisplay.appendChild(displayMenu);

    for (let pizza of _menu_js__WEBPACK_IMPORTED_MODULE_1__.menu) {
        const menuPosition = document.createElement('div');
        menuPosition.classList.add('menuPosition');
        displayMenu.appendChild(menuPosition);

        const image = document.createElement('img');
        image.setAttribute('src', `../src/img/${pizza.image}`);
        menuPosition.appendChild(image);

        const titleSection = document.createElement('div');
        titleSection.classList.add('title-section');
        menuPosition.appendChild(titleSection);
        const hOne = document.createElement('h1');
        hOne.innerText = pizza.name;
        titleSection.appendChild(hOne);

        const descSection = document.createElement('div');
        descSection.classList.add('desc-section');
        menuPosition.appendChild(descSection);

        const ul = document.createElement('ul');
        descSection.appendChild(ul);

        const descr = document.createElement('span');
        descr.innerText = pizza.descr;

        for (let ingr of pizza.ingredients) {
            const li = document.createElement('li');
            li.innerText = ingr;
            ul.appendChild(li);
        }
        descSection.appendChild(descr);

        const price = document.createElement('h3');
        price.innerText = `Price: \$${pizza.price}`;
        descSection.appendChild(price);
    }
}
function renderContact() {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.divDisplay.innerHTML = '';

    const displayContact = document.createElement('div');
    displayContact.classList.add('display-contact');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.divDisplay.appendChild(displayContact);

    const hTitle = document.createElement('h1')
    hTitle.innerText = 'Contact';
    displayContact.appendChild(hTitle);

    const hr = document.createElement('hr');
    displayContact.appendChild(hr);

    const hPhone = document.createElement('h3');
    hPhone.innerText = '📞 123 456 789';
    displayContact.appendChild(hPhone);

    const hAddress = document.createElement('h3');
    hAddress.innerText = '🏡 Hollywood Boulevard 42, Los Angeles, USA';
    displayContact.appendChild(hAddress);

    const hOpen = document.createElement('h3');
    hOpen.innerText = '📅Open:';
    displayContact.appendChild(hOpen);

    const ul = document.createElement('ul');
    displayContact.appendChild(ul);

    for (let i = 0; i < 7; i++) {
        const li = document.createElement('li');
        li.innerText = `${weekDays[i].name}: ${weekDays[i].open}`;
        ul.appendChild(li);
    }
}


/***/ }),

/***/ "./src/tabFunctions.js":
/*!*****************************!*\
  !*** ./src/tabFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderTab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTab.js */ "./src/renderTab.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(btn, tabs) {
    tabs.forEach(tab => {
        tab.classList.remove('btnActive');
    });
    btn.classList.toggle('btnActive');

    if (btn.dataset.tab === 'home') {
        (0,_renderTab_js__WEBPACK_IMPORTED_MODULE_0__.renderHome)();
    }
    else if (btn.dataset.tab === 'menu') {
        (0,_renderTab_js__WEBPACK_IMPORTED_MODULE_0__.renderMenu)();
    }
    else if (btn.dataset.tab === 'contact') {
        (0,_renderTab_js__WEBPACK_IMPORTED_MODULE_0__.renderContact)();
    }
    else {
        return;
    }
}

/***/ }),

/***/ "./src/img/shaian-ramesht-exSEmuA7R7k-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./src/img/shaian-ramesht-exSEmuA7R7k-unsplash.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16c38efb978e0d66653a.jpg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcHJvamVjdDktcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3RvcC1wcm9qZWN0OS1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDktcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDktcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0OS1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0OS1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDktcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDktcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDktcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlLy4vc3JjL3BhZ2VJbml0LmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0OS1yZXN0YXVyYW50cGFnZS8uL3NyYy9yZW5kZXJUYWIuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlLy4vc3JjL3RhYkZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDktcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1wcm9qZWN0OS1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC1wcm9qZWN0OS1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDktcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1wcm9qZWN0OS1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvcC1wcm9qZWN0OS1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3Q5LXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3NoYWlhbi1yYW1lc2h0LWV4U0VtdUE3UjdrLXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRhbGlhbm5vJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1iZy1jb2xvci1tYWluOiByZ2IoMzEsIDMxLCAzMSk7XFxyXFxuICAgIC0tcHJpbWFyeS1jb250ZW50LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgLyogbWluLWhlaWdodDogMTAwJTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbWFpbik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1MHB4LCAxZnIpIDNmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgLmRpc3BsYXkge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudD5oZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbnRlbnQtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XFxyXFxuICAgIGxlZnQ6IDU1JTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCBoZWFkZXIgI25hdmJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgaGVhZGVyIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXM7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IGhlYWRlciBidXR0b24uYnRuQWN0aXZlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkZGRkY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IGhlYWRlciBidXR0b246aG92ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGRkZGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2JnLWltYWdlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJdGFsaWFubm8nLCBjdXJzaXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtaW4td2lkdGg6IGNsYW1wKDUlLCAyOCUsIDI4JSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IC05MHB4IDBweCAyNHB4IC0zM3B4IHZhcigtLWJnLWNvbG9yLW1haW4pO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzdGF1cmFudC1uYW1lIHtcXHJcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzdGF1cmFudC1uYW1lIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBESVNQTEFZICovXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSBociB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIERJU1BMQVkgSE9NRSAqL1xcclxcbi5kaXNwbGF5ICNkaXNwbGF5LWhvbWUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbnRlbnQtY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDI0cHggMHB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICAgIG1pbi13aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogODBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5ICNkaXNwbGF5LWhvbWUgaGVhZGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJdGFsaWFubm8nLCBjdXJzaXZlO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5ICNkaXNwbGF5LWhvbWUgc3BhbiB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxuICAgIHRleHQtanVzdGlmeTogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRElTUExBWSBNRU5VICovXFxyXFxuLmRpc3BsYXkgLmRpc3BsYXktbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBnYXA6IDYwcHg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVQb3NpdGlvbiB7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDAsIDIzOSwgMjM5LCAwLjEpO1xcclxcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XFxyXFxuICAgIC8qIGJveC1zaGFkb3c6IDhweCA4cHggMjRweCAwcHggcmdiYSg2NiwgNjgsIDkwLCAxKTsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVBvc2l0aW9uIGRpdiB7XFxyXFxuICAgIC8qIGJvcmRlcjogNHB4IHNvbGlkICNGRkZGRkY7ICovXFxyXFxufVxcclxcblxcclxcbi5tZW51UG9zaXRpb24gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVBvc2l0aW9uIHVsIHtcXHJcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVBvc2l0aW9uIC50aXRsZS1zZWN0aW9uIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVBvc2l0aW9uIC5kZXNjLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIERJU1BMQVkgQ09OVEFDVCAqL1xcclxcbi5kaXNwbGF5LWNvbnRhY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbnRlbnQtY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDI0cHggMHB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICAgIG1pbi13aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGdhcDogODBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxnQ0FBZ0M7SUFDaEMsaURBQWlEO0FBQ3JEOzs7O0FBSUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOztJQUVJLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULE1BQU07QUFDVjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGlDQUFpQztJQUNqQyxtREFBaUU7SUFDakUsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJEQUEyRDtJQUMzRCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7OztBQUdBLFlBQVk7QUFDWjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBLGlCQUFpQjtBQUNqQjtJQUNJLHdDQUF3QztJQUN4Qyw2Q0FBNkM7SUFDN0MsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxjQUFjOztJQUVkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixzREFBc0Q7SUFDdEQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksd0NBQXdDO0lBQ3hDLDZDQUE2QztJQUM3QyxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULGNBQWM7O0lBRWQsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0YWxpYW5ubyZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1iZy1jb2xvci1tYWluOiByZ2IoMzEsIDMxLCAzMSk7XFxyXFxuICAgIC0tcHJpbWFyeS1jb250ZW50LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgLyogbWluLWhlaWdodDogMTAwJTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItbWFpbik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1MHB4LCAxZnIpIDNmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgLmRpc3BsYXkge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudD5oZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbnRlbnQtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XFxyXFxuICAgIGxlZnQ6IDU1JTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCBoZWFkZXIgI25hdmJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgaGVhZGVyIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXM7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IGhlYWRlciBidXR0b24uYnRuQWN0aXZlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkZGRkY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IGhlYWRlciBidXR0b246aG92ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGRkZGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2JnLWltYWdlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJdGFsaWFubm8nLCBjdXJzaXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9zaGFpYW4tcmFtZXNodC1leFNFbXVBN1I3ay11bnNwbGFzaC5qcGcnKTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWluLXdpZHRoOiBjbGFtcCg1JSwgMjglLCAyOCUpO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAtOTBweCAwcHggMjRweCAtMzNweCB2YXIoLS1iZy1jb2xvci1tYWluKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc3RhdXJhbnQtbmFtZSB7XFxyXFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc3RhdXJhbnQtbmFtZSBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogRElTUExBWSAqL1xcclxcbi5kaXNwbGF5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkgaHIge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBESVNQTEFZIEhPTUUgKi9cXHJcXG4uZGlzcGxheSAjZGlzcGxheS1ob21lIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb250ZW50LWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogOHB4IDhweCAyNHB4IDBweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgICBtaW4td2lkdGg6IDcwJTtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDgwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSAjZGlzcGxheS1ob21lIGhlYWRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSAjZGlzcGxheS1ob21lIHNwYW4ge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgICB0ZXh0LWp1c3RpZnk6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi8qIERJU1BMQVkgTUVOVSAqL1xcclxcbi5kaXNwbGF5IC5kaXNwbGF5LW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ2FwOiA2MHB4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5tZW51UG9zaXRpb24ge1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyMzksIDIzOSwgMC4xKTtcXHJcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xcclxcbiAgICAvKiBib3gtc2hhZG93OiA4cHggOHB4IDI0cHggMHB4IHJnYmEoNjYsIDY4LCA5MCwgMSk7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVQb3NpdGlvbiBkaXYge1xcclxcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCAjRkZGRkZGOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVBvc2l0aW9uIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVQb3NpdGlvbiB1bCB7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVQb3NpdGlvbiAudGl0bGUtc2VjdGlvbiBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVQb3NpdGlvbiAuZGVzYy1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBESVNQTEFZIENPTlRBQ1QgKi9cXHJcXG4uZGlzcGxheS1jb250YWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb250ZW50LWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogOHB4IDhweCAyNHB4IDBweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgICBtaW4td2lkdGg6IDcwJTtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBnYXA6IDgwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpbml0aWFsaXplUGFnZSBmcm9tICcuL3BhZ2VJbml0LmpzJztcclxuaW1wb3J0IHRhYkZ1bmN0aW9uIGZyb20gJy4vdGFiRnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgcmVuZGVySG9tZSB9IGZyb20gJy4vcmVuZGVyVGFiLmpzJztcclxuaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XHJcblxyXG5pbml0aWFsaXplUGFnZSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpdkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xyXG5cclxuXHJcblxyXG5cclxuLy8gVGFicyBmdW5jdGlvbnNcclxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5UYWInKTtcclxuXHJcbnRhYnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICghYnRuLmNsYXNzTGlzdC5jb250YWlucygnYnRuQWN0aXZlJykpIHRhYkZ1bmN0aW9uKGJ0biwgdGFicyk7XHJcbiAgICB9KVxyXG59KTtcclxuLy8gPT09PT09PT09PT09PT09PSAvL1xyXG5cclxucmVuZGVySG9tZSgpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IG1lbnUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ01hcmdoZXJpdGEnLFxyXG4gICAgICAgIHByaWNlOiAxMCxcclxuICAgICAgICBpbmdyZWRpZW50czogW1xyXG4gICAgICAgICAgICAnb3JlZ2FubycsICd0b21hdG8gc2F1Y2UnLCAnYmFzaWwnLCAnbW96emFyZWxsYSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRlc2NyOiAnQ2xhc3NpY2FsIHBpenphLicsXHJcbiAgICAgICAgaW1hZ2U6ICdtYXJnaGVyaXRhLmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1BlcHBlcm9uaScsXHJcbiAgICAgICAgcHJpY2U6IDEyLFxyXG4gICAgICAgIGluZ3JlZGllbnRzOiBbXHJcbiAgICAgICAgICAgICdvcmVnYW5vJywgJ3RvbWF0byBzYXVjZScsICdiYXNpbCcsICdtb3p6YXJlbGxhJywgJ3NhbGFtaSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRlc2NyOiAnUGl6emEgd2l0aCBzYWxhbWkuJyxcclxuICAgICAgICBpbWFnZTogJ3BlcHBlcm9uaS5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdOYXBvbGV0YW5hJyxcclxuICAgICAgICBwcmljZTogMTMsXHJcbiAgICAgICAgaW5ncmVkaWVudHM6IFtcclxuICAgICAgICAgICAgJ29yZWdhbm8nLCAndG9tYXRvIHNhdWNlJywgJ2Jhc2lsJywgJ2J1ZmZhbG8gbW96emFyZWxsYSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRlc2NyOiAnRXh0cmEgdGhpbiBjbGFzc2ljYWwgbWFyZ2hlcml0YSB3aXRoIG1vcmUgYmFzaWwuJyxcclxuICAgICAgICBpbWFnZTogJ25hcG9sZXRhbmEuanBnJ1xyXG4gICAgfSxcclxuXSIsImNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuZnVuY3Rpb24gYXBwZW5kQmdMb2dvKCkge1xyXG4gICAgLy8gTWFpbiBESVYgaWQ9J2JnLWltYWdlJ1xyXG4gICAgY29uc3QgZGl2QmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2QmdJbWFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JnLWltYWdlJyk7XHJcbiAgICBib2R5RWxlbWVudC5hcHBlbmRDaGlsZChkaXZCZ0ltYWdlKTtcclxuXHJcbiAgICAvLyBiZy1pbWFnZSBDaGlsZFxyXG4gICAgY29uc3QgZGl2UmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdlJlc3RhdXJhbnROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdGF1cmFudC1uYW1lJyk7XHJcbiAgICBkaXZCZ0ltYWdlLmFwcGVuZENoaWxkKGRpdlJlc3RhdXJhbnROYW1lKTtcclxuXHJcbiAgICAvLyByZXN0YXVyYW50LW5hbWUgY2hpbGRzXHJcbiAgICBjb25zdCBuYW1lQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCBuYW1lQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICBuYW1lQS5pbm5lclRleHQgPSAnUmlzdG9yYW50ZSc7XHJcbiAgICBuYW1lQi5pbm5lclRleHQgPSAnVHJhZGl6aW9uYWxlJztcclxuICAgIGRpdlJlc3RhdXJhbnROYW1lLmFwcGVuZENoaWxkKG5hbWVBKTtcclxuICAgIGRpdlJlc3RhdXJhbnROYW1lLmFwcGVuZENoaWxkKGhyKTtcclxuICAgIGRpdlJlc3RhdXJhbnROYW1lLmFwcGVuZENoaWxkKG5hbWVCKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kTWFpbkNvbnRlbnQoKSB7XHJcbiAgICAvLyAjY29udGVudCBkaXZcclxuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcbiAgICBib2R5RWxlbWVudC5hcHBlbmRDaGlsZChkaXZDb250ZW50KTtcclxuXHJcbiAgICAvLyAjY29udGVudCBjaGlsZHNcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgZGl2RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XHJcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkRpc3BsYXkpO1xyXG5cclxuICAgIC8vIGhlYWRlciBjaGlsZFxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXZiYXInKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xyXG5cclxuICAgIC8vICNuYXZiYXIgY2hpbGRzXHJcbiAgICBjb25zdCBidG5Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG5Ib21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuSG9tZScpO1xyXG4gICAgYnRuSG9tZS5pbm5lclRleHQgPSAnSG9tZSc7XHJcbiAgICBidG5Ib21lLmNsYXNzTGlzdC50b2dnbGUoJ2J0bkFjdGl2ZScpO1xyXG4gICAgYnRuSG9tZS5kYXRhc2V0LnRhYiA9ICdob21lJztcclxuXHJcbiAgICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG5NZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuTWVudScpO1xyXG4gICAgYnRuTWVudS5pbm5lclRleHQgPSAnTWVudSc7XHJcbiAgICBidG5NZW51LmRhdGFzZXQudGFiID0gJ21lbnUnO1xyXG5cclxuICAgIGNvbnN0IGJ0bkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bkNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdidG5Db250YWN0Jyk7XHJcbiAgICBidG5Db250YWN0LmlubmVyVGV4dCA9ICdDb250YWN0JztcclxuICAgIGJ0bkNvbnRhY3QuZGF0YXNldC50YWIgPSAnY29udGFjdCc7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuSG9tZSk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuTWVudSk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuQ29udGFjdCk7XHJcblxyXG5cclxuICAgIC8vIEFkZCBjbGFzc2VzIHRvIGJ1dHRvbnNcclxuICAgIGJ0bkhvbWUuY2xhc3NMaXN0LmFkZCgnYnRuVGFiJyk7XHJcbiAgICBidG5NZW51LmNsYXNzTGlzdC5hZGQoJ2J0blRhYicpO1xyXG4gICAgYnRuQ29udGFjdC5jbGFzc0xpc3QuYWRkKCdidG5UYWInKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGFwcGVuZEJnTG9nbygpO1xyXG4gICAgYXBwZW5kTWFpbkNvbnRlbnQoKTtcclxufSIsImltcG9ydCB7IGRpdkRpc3BsYXkgfSBmcm9tICcuL2luZGV4LmpzJztcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudS5qcyc7XHJcblxyXG5jb25zdCB3ZWVrRGF5cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTW9uZGF5JyxcclxuICAgICAgICBvcGVuOiAnOGFtIC0gMTBwbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1R1ZXNkYXknLFxyXG4gICAgICAgIG9wZW46ICc4YW0gLSAxMHBtJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnV2VkbmVzZGF5JyxcclxuICAgICAgICBvcGVuOiAnOGFtIC0gMTBwbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1RodXJzZGF5JyxcclxuICAgICAgICBvcGVuOiAnOGFtIC0gMTBwbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0ZyaWRheScsXHJcbiAgICAgICAgb3BlbjogJzhhbSAtIDEwcG0nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdTYXR1cmRheScsXHJcbiAgICAgICAgb3BlbjogJzlhbSAtIDEwcG0nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdTdW5kYXknLFxyXG4gICAgICAgIG9wZW46ICcxMGFtIC0gOHBtJ1xyXG4gICAgfSxcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xyXG4gICAgZGl2RGlzcGxheS5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIEhvbWUgZGlzcGxheSBjcmVhdGlvblxyXG4gICAgY29uc3QgZGlzcGxheUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpc3BsYXlIb21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlzcGxheS1ob21lJyk7XHJcbiAgICBkaXZEaXNwbGF5LmFwcGVuZENoaWxkKGRpc3BsYXlIb21lKTtcclxuXHJcbiAgICAvLyBIb21lIGRpc3BsYXkgY2hpbGRzIGNyZWF0aW9uXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckhPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZGVySE9uZS5pbm5lclRleHQgPSAnVHJhZGl0aW9uYWwgSXRhbGlhbiBDb3VzaW5lJztcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJIT25lKTtcclxuICAgIGRpc3BsYXlIb21lLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgaHJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgZGlzcGxheUhvbWUuYXBwZW5kQ2hpbGQoaHJPbmUpO1xyXG5cclxuICAgIGNvbnN0IHNwYW5EZXNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNwYW5EZXNjci5pbm5lclRleHQgPSAnTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1haW9yZXMgdm9sdXB0YXRlIHNhcGllbnRlIHF1aWEgdmVsaXRMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTWFpb3JlcyB2b2x1cHRhdGUgc2FwaWVudGUgcXVpYSB2ZWxpdExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNYWlvcmVzIHZvbHVwdGF0ZSBzYXBpZW50ZSBxdWlhIHZlbGl0TG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1haW9yZXMgdm9sdXB0YXRlIHNhcGllbnRlIHF1aWEgdmVsaXRMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTWFpb3JlcyB2b2x1cHRhdGUgc2FwaWVudGUgcXVpYSB2ZWxpdExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNYWlvcmVzIHZvbHVwdGF0ZSBzYXBpZW50ZSBxdWlhIHZlbGl0J1xyXG4gICAgZGlzcGxheUhvbWUuYXBwZW5kQ2hpbGQoc3BhbkRlc2NyKTtcclxuXHJcbiAgICBjb25zdCBoclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICBkaXNwbGF5SG9tZS5hcHBlbmRDaGlsZChoclR3byk7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGZvb3Rlci5pbm5lclRleHQgPSAnQ2hlY2sgb3V0IG91ciBNZW51ISc7XHJcbiAgICBkaXNwbGF5SG9tZS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcclxuICAgIGRpdkRpc3BsYXkuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgZGlzcGxheU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpc3BsYXlNZW51LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbWVudScpO1xyXG4gICAgZGl2RGlzcGxheS5hcHBlbmRDaGlsZChkaXNwbGF5TWVudSk7XHJcblxyXG4gICAgZm9yIChsZXQgcGl6emEgb2YgbWVudSkge1xyXG4gICAgICAgIGNvbnN0IG1lbnVQb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnVQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51UG9zaXRpb24nKTtcclxuICAgICAgICBkaXNwbGF5TWVudS5hcHBlbmRDaGlsZChtZW51UG9zaXRpb24pO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy9pbWcvJHtwaXp6YS5pbWFnZX1gKTtcclxuICAgICAgICBtZW51UG9zaXRpb24uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXRsZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGl0bGUtc2VjdGlvbicpO1xyXG4gICAgICAgIG1lbnVQb3NpdGlvbi5hcHBlbmRDaGlsZCh0aXRsZVNlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IGhPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGhPbmUuaW5uZXJUZXh0ID0gcGl6emEubmFtZTtcclxuICAgICAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoaE9uZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2NTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGVzY1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGVzYy1zZWN0aW9uJyk7XHJcbiAgICAgICAgbWVudVBvc2l0aW9uLmFwcGVuZENoaWxkKGRlc2NTZWN0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGRlc2NTZWN0aW9uLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVzY3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgZGVzY3IuaW5uZXJUZXh0ID0gcGl6emEuZGVzY3I7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZ3Igb2YgcGl6emEuaW5ncmVkaWVudHMpIHtcclxuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBsaS5pbm5lclRleHQgPSBpbmdyO1xyXG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlc2NTZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHByaWNlLmlubmVyVGV4dCA9IGBQcmljZTogXFwkJHtwaXp6YS5wcmljZX1gO1xyXG4gICAgICAgIGRlc2NTZWN0aW9uLmFwcGVuZENoaWxkKHByaWNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcclxuICAgIGRpdkRpc3BsYXkuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgZGlzcGxheUNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpc3BsYXlDb250YWN0LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktY29udGFjdCcpO1xyXG4gICAgZGl2RGlzcGxheS5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGFjdCk7XHJcblxyXG4gICAgY29uc3QgaFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgaFRpdGxlLmlubmVyVGV4dCA9ICdDb250YWN0JztcclxuICAgIGRpc3BsYXlDb250YWN0LmFwcGVuZENoaWxkKGhUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgZGlzcGxheUNvbnRhY3QuYXBwZW5kQ2hpbGQoaHIpO1xyXG5cclxuICAgIGNvbnN0IGhQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoUGhvbmUuaW5uZXJUZXh0ID0gJ/Cfk54gMTIzIDQ1NiA3ODknO1xyXG4gICAgZGlzcGxheUNvbnRhY3QuYXBwZW5kQ2hpbGQoaFBob25lKTtcclxuXHJcbiAgICBjb25zdCBoQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoQWRkcmVzcy5pbm5lclRleHQgPSAn8J+PoSBIb2xseXdvb2QgQm91bGV2YXJkIDQyLCBMb3MgQW5nZWxlcywgVVNBJztcclxuICAgIGRpc3BsYXlDb250YWN0LmFwcGVuZENoaWxkKGhBZGRyZXNzKTtcclxuXHJcbiAgICBjb25zdCBoT3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoT3Blbi5pbm5lclRleHQgPSAn8J+ThU9wZW46JztcclxuICAgIGRpc3BsYXlDb250YWN0LmFwcGVuZENoaWxkKGhPcGVuKTtcclxuXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBkaXNwbGF5Q29udGFjdC5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7d2Vla0RheXNbaV0ubmFtZX06ICR7d2Vla0RheXNbaV0ub3Blbn1gO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXJIb21lLCByZW5kZXJNZW51LCByZW5kZXJDb250YWN0IH0gZnJvbSAnLi9yZW5kZXJUYWIuanMnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChidG4sIHRhYnMpIHtcclxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdidG5BY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2J0bkFjdGl2ZScpO1xyXG5cclxuICAgIGlmIChidG4uZGF0YXNldC50YWIgPT09ICdob21lJykge1xyXG4gICAgICAgIHJlbmRlckhvbWUoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGJ0bi5kYXRhc2V0LnRhYiA9PT0gJ21lbnUnKSB7XHJcbiAgICAgICAgcmVuZGVyTWVudSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYnRuLmRhdGFzZXQudGFiID09PSAnY29udGFjdCcpIHtcclxuICAgICAgICByZW5kZXJDb250YWN0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=