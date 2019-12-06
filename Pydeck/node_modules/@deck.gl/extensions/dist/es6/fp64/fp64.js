import { LayerExtension, COORDINATE_SYSTEM, project64 } from '@deck.gl/core';
export default class Fp64Extension extends LayerExtension {
  getShaders(opts) {
    if (this.props.coordinateSystem !== COORDINATE_SYSTEM.LNGLAT_DEPRECATED) {
      throw new Error('fp64: coordinateSystem must be LNGLAT_DEPRECATED');
    }

    return {
      modules: [project64]
    };
  }

}
Fp64Extension.extensionName = 'Fp64Extension';
//# sourceMappingURL=fp64.js.map