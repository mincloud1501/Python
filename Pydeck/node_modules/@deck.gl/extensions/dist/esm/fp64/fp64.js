import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { LayerExtension, COORDINATE_SYSTEM, project64 } from '@deck.gl/core';

var Fp64Extension = function (_LayerExtension) {
  _inherits(Fp64Extension, _LayerExtension);

  function Fp64Extension() {
    _classCallCheck(this, Fp64Extension);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fp64Extension).apply(this, arguments));
  }

  _createClass(Fp64Extension, [{
    key: "getShaders",
    value: function getShaders(opts) {
      if (this.props.coordinateSystem !== COORDINATE_SYSTEM.LNGLAT_DEPRECATED) {
        throw new Error('fp64: coordinateSystem must be LNGLAT_DEPRECATED');
      }

      return {
        modules: [project64]
      };
    }
  }]);

  return Fp64Extension;
}(LayerExtension);

export { Fp64Extension as default };
Fp64Extension.extensionName = 'Fp64Extension';
//# sourceMappingURL=fp64.js.map