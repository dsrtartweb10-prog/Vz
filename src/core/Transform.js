import { Vector3 } from '../math/Vector3.js';
import { Quaternion } from '../math/Quaternion.js';
import { Matrix4 } from '../math/Matrix4.js';

export class Transform {
  constructor() {
    this.position = new Vector3(0, 0, 0);
    this.rotation = new Quaternion();
    this.scale = new Vector3(1, 1, 1);
    this.matrixWorld = Matrix4.identity();
  }

  updateMatrix() {
    this.matrixWorld = Matrix4.compose(
      this.position, this.rotation, this.scale
    );
  }
}
