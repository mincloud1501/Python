import { createModuleInjection } from '@luma.gl/core';
var vs = "\nuniform DATAFILTER_TYPE filter_min;\nuniform DATAFILTER_TYPE filter_softMin;\nuniform DATAFILTER_TYPE filter_softMax;\nuniform DATAFILTER_TYPE filter_max;\nuniform bool filter_useSoftMargin;\nuniform bool filter_enabled;\nuniform bool filter_transformSize;\n\n#ifdef NON_INSTANCED_MODEL\nattribute DATAFILTER_TYPE filterValues;\n#else\nattribute DATAFILTER_TYPE instanceFilterValues;\n#endif\n\nvarying float dataFilter_value;\n\nfloat dataFilter_reduceValue(float value) {\n  return value;\n}\nfloat dataFilter_reduceValue(vec2 value) {\n  return min(value.x, value.y);\n}\nfloat dataFilter_reduceValue(vec3 value) {\n  return min(min(value.x, value.y), value.z);\n}\nfloat dataFilter_reduceValue(vec4 value) {\n  return min(min(value.x, value.y), min(value.z, value.w));\n}\nvoid dataFilter_setValue(DATAFILTER_TYPE value) {\n  if (filter_enabled) {\n    if (filter_useSoftMargin) {\n      dataFilter_value = dataFilter_reduceValue(\n        smoothstep(filter_min, filter_softMin, value) *\n        (1.0 - smoothstep(filter_softMax, filter_max, value))\n      );\n    } else {\n      dataFilter_value = dataFilter_reduceValue(\n        step(filter_min, value) * step(value, filter_max)\n      );\n    }\n  } else {\n    dataFilter_value = 1.0;\n  }\n}\n";
var fs = "\nuniform bool filter_transformColor;\nvarying float dataFilter_value;\n";

var getUniforms = function getUniforms(opts) {
  if (!opts || !opts.extensions) {
    return {};
  }

  var _opts$filterRange = opts.filterRange,
      filterRange = _opts$filterRange === void 0 ? [-1, 1] : _opts$filterRange,
      _opts$filterEnabled = opts.filterEnabled,
      filterEnabled = _opts$filterEnabled === void 0 ? true : _opts$filterEnabled,
      _opts$filterTransform = opts.filterTransformSize,
      filterTransformSize = _opts$filterTransform === void 0 ? true : _opts$filterTransform,
      _opts$filterTransform2 = opts.filterTransformColor,
      filterTransformColor = _opts$filterTransform2 === void 0 ? true : _opts$filterTransform2;
  var filterSoftRange = opts.filterSoftRange || filterRange;
  var uniforms = Number.isFinite(filterRange[0]) ? {
    filter_min: filterRange[0],
    filter_softMin: filterSoftRange[0],
    filter_softMax: filterSoftRange[1],
    filter_max: filterRange[1]
  } : {
    filter_min: filterRange.map(function (r) {
      return r[0];
    }),
    filter_softMin: filterSoftRange.map(function (r) {
      return r[0];
    }),
    filter_softMax: filterSoftRange.map(function (r) {
      return r[1];
    }),
    filter_max: filterRange.map(function (r) {
      return r[1];
    })
  };
  uniforms.filter_enabled = filterEnabled;
  uniforms.filter_useSoftMargin = Boolean(opts.filterSoftRange);
  uniforms.filter_transformSize = filterEnabled && filterTransformSize;
  uniforms.filter_transformColor = filterEnabled && filterTransformColor;
  return uniforms;
};

var moduleName = 'data-filter';
createModuleInjection(moduleName, {
  hook: 'vs:#main-start',
  injection: "\n#ifdef NON_INSTANCED_MODEL\ndataFilter_setValue(filterValues);\n#else\ndataFilter_setValue(instanceFilterValues);\n#endif\n  "
});
createModuleInjection(moduleName, {
  hook: 'vs:DECKGL_FILTER_SIZE',
  injection: "\nif (filter_transformSize) {\n  size = size * dataFilter_value;\n}\n  "
});
createModuleInjection(moduleName, {
  hook: 'fs:DECKGL_FILTER_COLOR',
  injection: "\nif (dataFilter_value == 0.0) discard;\nif (filter_transformColor) {\n  color.a *= dataFilter_value;\n}\n  "
});
export default {
  name: moduleName,
  vs: vs,
  fs: fs,
  getUniforms: getUniforms
};
//# sourceMappingURL=shader-module.js.map