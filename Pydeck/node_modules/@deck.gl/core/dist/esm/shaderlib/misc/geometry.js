var vs = "\nstruct VertexGeometry {\n  vec4 position;\n  vec3 worldPosition;\n  vec3 worldPositionAlt;\n  vec3 normal;\n  vec2 uv;\n} geometry;\n";
var fs = "\nstruct FragmentGeometry {\n  vec2 uv;\n} geometry;\n";
export default {
  name: 'geometry',
  vs: vs,
  fs: fs
};
//# sourceMappingURL=geometry.js.map