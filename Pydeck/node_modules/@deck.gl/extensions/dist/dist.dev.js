(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("deck"), require("luma"));
	else if(typeof define === 'function' && define.amd)
		define(["deck", "luma"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("deck"), require("luma")) : factory(root["deck"], root["luma"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__deck_gl_core__, __WEBPACK_EXTERNAL_MODULE__luma_gl_core__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./bundle.js":
/*!*******************!*\
  !*** ./bundle.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Extensions = __webpack_require__(/*! ./src */ "./src/index.js");

/* global window, global */
const _global = typeof window === 'undefined' ? global : window;
const deck = _global.deck || {};

// Check if peer dependencies are included
if (!deck.Layer) {
  throw new Error('@deck.gl/core is not found');
}

module.exports = Object.assign(deck, Extensions);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/brushing/brushing.js":
/*!**********************************!*\
  !*** ./src/brushing/brushing.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrushingExtension; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader-module */ "./src/brushing/shader-module.js");
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




const defaultProps = {
  getBrushingTarget: {type: 'accessor', value: [0, 0]},

  brushingTarget: 'source',
  brushingEnabled: true,
  brushingRadius: 10000
};

class BrushingExtension extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["LayerExtension"] {
  getShaders(extension) {
    return {
      modules: [_shader_module__WEBPACK_IMPORTED_MODULE_1__["default"]]
    };
  }

  initializeState(context, extension) {
    const attributeManager = this.getAttributeManager();
    if (attributeManager) {
      attributeManager.add({
        brushingTargets: {
          size: 2,
          accessor: 'getBrushingTarget',
          // Hack: extension's defaultProps is not merged with the layer's defaultProps,
          // So we can't use the standard accessor when the prop is undefined
          update: !this.props.getBrushingTarget && extension.useConstantTargetPositions,
          shaderAttributes: {
            brushingTargets: {
              divisor: 0
            },
            instanceBrushingTargets: {
              divisor: 1
            }
          }
        }
      });
    }

    // Trigger redraw when mouse moves
    // TODO - expose this in a better way
    extension.onMouseMove = () => {
      this.getCurrentLayer().setNeedsRedraw();
    };
    if (this.context.deck) {
      this.context.deck.eventManager.on({
        pointermove: extension.onMouseMove,
        pointerleave: extension.onMouseMove
      });
    }
  }

  finalizeState(extension) {
    // Remove event listeners
    if (this.context.deck) {
      this.context.deck.eventManager.off({
        pointermove: extension.onMouseMove,
        pointerleave: extension.onMouseMove
      });
    }
  }

  useConstantTargetPositions(attribute) {
    attribute.constant = true;
    attribute.value = new Float32Array(2);
    return;
  }
}

BrushingExtension.extensionName = 'BrushingExtension';
BrushingExtension.defaultProps = defaultProps;


/***/ }),

/***/ "./src/brushing/shader-module.js":
/*!***************************************!*\
  !*** ./src/brushing/shader-module.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/core");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) 2015-2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


const vs = `
  uniform bool brushing_enabled;
  uniform int brushing_target;
  uniform vec2 brushing_mousePos;
  uniform float brushing_radius;

  #ifdef NON_INSTANCED_MODEL
  attribute vec2 brushingTargets;
  #else
  attribute vec2 instanceBrushingTargets;
  #endif

  varying float brushing_isVisible;

  bool brushing_isPointInRange(vec2 position) {
    if (!brushing_enabled) {
      return true;
    }
    vec2 source_commonspace = project_position(position);
    vec2 target_commonspace = project_position(brushing_mousePos);
    float distance = length((target_commonspace - source_commonspace) / project_uCommonUnitsPerMeter.xy);

    return distance <= brushing_radius;
  }

  void brushing_setVisible(bool visible) {
    brushing_isVisible = float(visible);
  }
`;

const fs = `
  uniform bool brushing_enabled;
  varying float brushing_isVisible;
`;

// filter_setValue(instanceFilterValue);
const moduleName = 'brushing';

const TARGET = {
  source: 0,
  target: 1,
  custom: 2
};

Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["createModuleInjection"])(moduleName, {
  hook: 'vs:DECKGL_FILTER_GL_POSITION',
  injection: `
vec2 brushingTarget;
if (brushing_target == 0) {
  brushingTarget = geometry.worldPosition.xy;
} else if (brushing_target == 1) {
  brushingTarget = geometry.worldPositionAlt.xy;
} else {
  #ifdef NON_INSTANCED_MODEL
  brushingTarget = brushingTargets;
  #else
  brushingTarget = instanceBrushingTargets;
  #endif
}
brushing_setVisible(brushing_isPointInRange(brushingTarget));
  `
});

Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["createModuleInjection"])(moduleName, {
  hook: 'fs:DECKGL_FILTER_COLOR',
  injection: `
if (brushing_enabled && brushing_isVisible < 0.5) {
  discard;
}
  `
});

/* harmony default export */ __webpack_exports__["default"] = ({
  name: moduleName,
  dependencies: ['project'],
  vs,
  fs,
  getUniforms: opts => {
    if (!opts || !opts.viewport) {
      return {};
    }
    const {
      brushingEnabled = true,
      brushingRadius = 10000,
      brushingTarget = 'source',
      mousePosition,
      viewport
    } = opts;
    return {
      brushing_enabled: Boolean(
        brushingEnabled && mousePosition && viewport.containsPixel(mousePosition)
      ),
      brushing_radius: brushingRadius,
      brushing_target: TARGET[brushingTarget] || 0,
      brushing_mousePos: mousePosition
        ? viewport.unproject([mousePosition.x - viewport.x, mousePosition.y - viewport.y])
        : [0, 0]
    };
  }
});


/***/ }),

/***/ "./src/data-filter/data-filter.js":
/*!****************************************!*\
  !*** ./src/data-filter/data-filter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataFilterExtension; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader-module */ "./src/data-filter/shader-module.js");
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




const defaultProps = {
  getFilterValue: {type: 'accessor', value: 0},

  filterEnabled: true,
  filterRange: [-1, 1],
  filterSoftRange: null,
  filterTransformSize: true,
  filterTransformColor: true
};

const DATA_TYPE_FROM_SIZE = {
  1: 'float',
  2: 'vec2',
  3: 'vec3',
  4: 'vec4'
};

class DataFilterExtension extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["LayerExtension"] {
  constructor({filterSize = 1} = {}) {
    if (!DATA_TYPE_FROM_SIZE[filterSize]) {
      throw new Error('filterSize out of range');
    }

    super({filterSize});
  }

  getShaders(extension) {
    const {filterSize} = extension.opts;
    return {
      modules: [_shader_module__WEBPACK_IMPORTED_MODULE_1__["default"]],
      defines: {
        DATAFILTER_TYPE: DATA_TYPE_FROM_SIZE[filterSize]
      }
    };
  }

  initializeState(context, extension) {
    const attributeManager = this.getAttributeManager();
    if (attributeManager) {
      attributeManager.add({
        filterValues: {
          size: extension.opts.filterSize,
          accessor: 'getFilterValue',
          shaderAttributes: {
            filterValues: {
              divisor: 0
            },
            instanceFilterValues: {
              divisor: 1
            }
          }
        }
      });
    }
  }
}

DataFilterExtension.extensionName = 'DataFilterExtension';
DataFilterExtension.defaultProps = defaultProps;


/***/ }),

/***/ "./src/data-filter/shader-module.js":
/*!******************************************!*\
  !*** ./src/data-filter/shader-module.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/core");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__);


/*
 * data filter shader module
 */
const vs = `
uniform DATAFILTER_TYPE filter_min;
uniform DATAFILTER_TYPE filter_softMin;
uniform DATAFILTER_TYPE filter_softMax;
uniform DATAFILTER_TYPE filter_max;
uniform bool filter_useSoftMargin;
uniform bool filter_enabled;
uniform bool filter_transformSize;

#ifdef NON_INSTANCED_MODEL
attribute DATAFILTER_TYPE filterValues;
#else
attribute DATAFILTER_TYPE instanceFilterValues;
#endif

varying float dataFilter_value;

float dataFilter_reduceValue(float value) {
  return value;
}
float dataFilter_reduceValue(vec2 value) {
  return min(value.x, value.y);
}
float dataFilter_reduceValue(vec3 value) {
  return min(min(value.x, value.y), value.z);
}
float dataFilter_reduceValue(vec4 value) {
  return min(min(value.x, value.y), min(value.z, value.w));
}
void dataFilter_setValue(DATAFILTER_TYPE value) {
  if (filter_enabled) {
    if (filter_useSoftMargin) {
      dataFilter_value = dataFilter_reduceValue(
        smoothstep(filter_min, filter_softMin, value) *
        (1.0 - smoothstep(filter_softMax, filter_max, value))
      );
    } else {
      dataFilter_value = dataFilter_reduceValue(
        step(filter_min, value) * step(value, filter_max)
      );
    }
  } else {
    dataFilter_value = 1.0;
  }
}
`;

const fs = `
uniform bool filter_transformColor;
varying float dataFilter_value;
`;

const getUniforms = opts => {
  if (!opts || !opts.extensions) {
    return {};
  }
  const {
    filterRange = [-1, 1],
    filterEnabled = true,
    filterTransformSize = true,
    filterTransformColor = true
  } = opts;
  const filterSoftRange = opts.filterSoftRange || filterRange;

  const uniforms = Number.isFinite(filterRange[0])
    ? {
        filter_min: filterRange[0],
        filter_softMin: filterSoftRange[0],
        filter_softMax: filterSoftRange[1],
        filter_max: filterRange[1]
      }
    : {
        filter_min: filterRange.map(r => r[0]),
        filter_softMin: filterSoftRange.map(r => r[0]),
        filter_softMax: filterSoftRange.map(r => r[1]),
        filter_max: filterRange.map(r => r[1])
      };
  uniforms.filter_enabled = filterEnabled;
  uniforms.filter_useSoftMargin = Boolean(opts.filterSoftRange);
  uniforms.filter_transformSize = filterEnabled && filterTransformSize;
  uniforms.filter_transformColor = filterEnabled && filterTransformColor;

  return uniforms;
};

// filter_setValue(instanceFilterValue);
const moduleName = 'data-filter';

Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["createModuleInjection"])(moduleName, {
  hook: 'vs:#main-start',
  injection: `
#ifdef NON_INSTANCED_MODEL
dataFilter_setValue(filterValues);
#else
dataFilter_setValue(instanceFilterValues);
#endif
  `
});

Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["createModuleInjection"])(moduleName, {
  hook: 'vs:DECKGL_FILTER_SIZE',
  injection: `
if (filter_transformSize) {
  size = size * dataFilter_value;
}
  `
});

Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["createModuleInjection"])(moduleName, {
  hook: 'fs:DECKGL_FILTER_COLOR',
  injection: `
if (dataFilter_value == 0.0) discard;
if (filter_transformColor) {
  color.a *= dataFilter_value;
}
  `
});

/* harmony default export */ __webpack_exports__["default"] = ({
  name: moduleName,
  vs,
  fs,
  getUniforms
});


/***/ }),

/***/ "./src/fp64/fp64.js":
/*!**************************!*\
  !*** ./src/fp64/fp64.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fp64Extension; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



class Fp64Extension extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["LayerExtension"] {
  getShaders(opts) {
    if (this.props.coordinateSystem !== _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["COORDINATE_SYSTEM"].LNGLAT_DEPRECATED) {
      throw new Error('fp64: coordinateSystem must be LNGLAT_DEPRECATED');
    }

    return {
      modules: [_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["project64"]]
    };
  }
}

Fp64Extension.extensionName = 'Fp64Extension';


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: BrushingExtension, DataFilterExtension, Fp64Extension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brushing_brushing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brushing/brushing */ "./src/brushing/brushing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrushingExtension", function() { return _brushing_brushing__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _data_filter_data_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-filter/data-filter */ "./src/data-filter/data-filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFilterExtension", function() { return _data_filter_data_filter__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _fp64_fp64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fp64/fp64 */ "./src/fp64/fp64.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fp64Extension", function() { return _fp64_fp64__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "@deck.gl/core":
/*!***********************!*\
  !*** external "deck" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__deck_gl_core__;

/***/ }),

/***/ "@luma.gl/core":
/*!***********************!*\
  !*** external "luma" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__luma_gl_core__;

/***/ })

/******/ });
});