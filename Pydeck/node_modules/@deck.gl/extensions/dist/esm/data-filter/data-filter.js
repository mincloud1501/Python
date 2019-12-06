import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { LayerExtension } from '@deck.gl/core';
import shaderModule from './shader-module';
var defaultProps = {
  getFilterValue: {
    type: 'accessor',
    value: 0
  },
  filterEnabled: true,
  filterRange: [-1, 1],
  filterSoftRange: null,
  filterTransformSize: true,
  filterTransformColor: true
};
var DATA_TYPE_FROM_SIZE = {
  1: 'float',
  2: 'vec2',
  3: 'vec3',
  4: 'vec4'
};

var DataFilterExtension = function (_LayerExtension) {
  _inherits(DataFilterExtension, _LayerExtension);

  function DataFilterExtension() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$filterSize = _ref.filterSize,
        filterSize = _ref$filterSize === void 0 ? 1 : _ref$filterSize;

    _classCallCheck(this, DataFilterExtension);

    if (!DATA_TYPE_FROM_SIZE[filterSize]) {
      throw new Error('filterSize out of range');
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(DataFilterExtension).call(this, {
      filterSize: filterSize
    }));
  }

  _createClass(DataFilterExtension, [{
    key: "getShaders",
    value: function getShaders(extension) {
      var filterSize = extension.opts.filterSize;
      return {
        modules: [shaderModule],
        defines: {
          DATAFILTER_TYPE: DATA_TYPE_FROM_SIZE[filterSize]
        }
      };
    }
  }, {
    key: "initializeState",
    value: function initializeState(context, extension) {
      var attributeManager = this.getAttributeManager();

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
  }]);

  return DataFilterExtension;
}(LayerExtension);

export { DataFilterExtension as default };
DataFilterExtension.extensionName = 'DataFilterExtension';
DataFilterExtension.defaultProps = defaultProps;
//# sourceMappingURL=data-filter.js.map