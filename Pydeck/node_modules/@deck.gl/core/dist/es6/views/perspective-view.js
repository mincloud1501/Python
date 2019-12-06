import View from './view';
import Viewport from '../viewports/viewport';
import * as mat4 from 'gl-matrix/mat4';
const DEGREES_TO_RADIANS = Math.PI / 180;
export default class PerspectiveView extends View {
  _getViewport(props) {
    const {
      x,
      y,
      width,
      height,
      viewState
    } = props;
    const {
      eye,
      lookAt = [0, 0, 0],
      up = [0, 1, 0]
    } = viewState;
    const fovy = props.fovy || viewState.fovy || 75;
    const near = props.near || viewState.near || 1;
    const far = props.far || viewState.far || 100;
    const aspect = Number.isFinite(viewState.aspect) ? viewState.aspect : width / height;
    const fovyRadians = fovy * DEGREES_TO_RADIANS;
    return new Viewport({
      id: this.id,
      x,
      y,
      width,
      height,
      viewMatrix: mat4.lookAt([], eye, lookAt, up),
      projectionMatrix: mat4.perspective([], fovyRadians, aspect, near, far)
    });
  }

}
PerspectiveView.displayName = 'PerspectiveView';
//# sourceMappingURL=perspective-view.js.map