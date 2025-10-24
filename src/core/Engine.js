import { Renderer } from './Renderer.js';
import { Scene } from './Scene.js';
import { Camera } from './Camera.js';

export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl');
    if (!this.gl) throw new Error('WebGL not supported');

    this.renderer = new Renderer(this.gl);
    this.scene = new Scene();
    this.camera = new Camera();

    this._loop = this._loop.bind(this);
  }

  start() {
    requestAnimationFrame(this._loop);
  }

  _loop() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this._loop);
  }
}
