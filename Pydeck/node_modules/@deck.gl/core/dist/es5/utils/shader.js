"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeShaders = mergeShaders;

function mergeShaders(target, source) {
  if (!source) {
    return target;
  }

  var result = Object.assign({}, target, source);

  if ('defines' in source) {
    result.defines = Object.assign({}, target.defines, source.defines);
  }

  if ('modules' in source) {
    result.modules = (target.modules || []).concat(source.modules);

    if (source.modules.some(function (module) {
      return module === 'project64' || module.name === 'project64';
    })) {
      var index = result.modules.findIndex(function (module) {
        return module === 'project32' || module.name === 'project32';
      });

      if (index >= 0) {
        result.modules.splice(index, 1);
      }
    }
  }

  if ('inject' in source) {
    result.inject = Object.assign({}, target.inject, source.inject);
  }

  return result;
}
//# sourceMappingURL=shader.js.map