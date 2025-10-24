export class Renderer {
  constructor(gl) {
    this.gl = gl;
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.enable(gl.DEPTH_TEST);
  }

  render(scene, camera) {
    const gl = this.gl;
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    scene.traverse(obj => {
      if (obj.draw) obj.draw(gl, camera);
    });
  }
}
