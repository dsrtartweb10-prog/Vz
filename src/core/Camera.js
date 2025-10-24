import { Matrix4 } from '../math/Matrix4.js';
import { Object3D } from './Object3D.js';

export class Camera extends Object3D {
  constructor() {
    super();
    this.projectionMatrix = Matrix4.perspective(45, 1, 0.1, 100);
    this.viewMatrix = Matrix4.identity();
  }

  lookAt(target) {
    this.viewMatrix = Matrix4.lookAt(this.position, target, [0, 1, 0]);
  }
}
