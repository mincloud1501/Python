import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { LayerExtension } from '@deck.gl/core';
import shaderModule from './shader-module';
var defaultProps = {
  getBrushingTarget: {
    type: 'accessor',
    value: [0, 0]
  },
  brushingTarget: 'source',
  brushingEnabled: true,
  brushingRadius: 10000
};

var BrushingExtension = function (_LayerExtension) {
  _inherits(BrushingExtension, _LayerExtension);

  function BrushingExtension() {
    _classCallCheck(this, BrushingExtension);

    return _possibleConstructorReturn(this, _getPrototypeOf(BrushingExtension).apply(this, arguments));
  }

  _createClass(BrushingExtension, [{
    key: "getShaders",
    value: function getShaders(extension) {
      return {
        modules: [shaderModule]
      };
    }
  }, {
    key: "initializeState",
    value: function initializeState(context, extension) {
      var _this = this;

      var attributeManager = this.getAttributeManager();

      if (attributeManager) {
        attributeManager.add({
          brushingTargets: {
            size: 2,
            accessor: 'getBrushingTarget',
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

      extension.onMouseMove = function () {
        _this.getCurrentLayer().setNeedsRedraw();
      };

      if (this.context.deck) {
        this.context.deck.eventManager.on({
          pointermove: extension.onMouseMove,
          pointerleave: extension.onMouseMove
        });
      }
    }
  }, {
    key: "finalizeState",
    value: function finalizeState(extension) {
      if (this.context.deck) {
        this.context.deck.eventManager.off({
          pointermove: extension.onMouseMove,
          pointerleave: extension.onMouseMove
        });
      }
    }
  }, {
    key: "useConstantTargetPositions",
    value: function useConstantTargetPositions(attribute) {
      attribute.constant = true;
      attribute.value = new Float32Array(2);
      return;
    }
  }]);

  return BrushingExtension;
}(LayerExtension);

export { BrushingExtension as default };
BrushingExtension.extensionName = 'BrushingExtension';
BrushingExtension.defaultProps = defaultProps;
//# sourceMappingURL=brushing.js.map