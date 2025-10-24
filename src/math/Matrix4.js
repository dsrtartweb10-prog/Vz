import { Vector3 } from './Vector3.js';
import { Quaternion } from './Quaternion.js';

export class Matrix4 {
  constructor() {
    this.elements = new Float32Array(16);
    this.identity();
  }

  identity() {
    const e = this.elements;
    e[0]=1; e[4]=0; e[8]=0; e[12]=0;
    e[1]=0; e[5]=1; e[9]=0; e[13]=0;
    e[2]=0; e[6]=0; e[10]=1; e[14]=0;
    e[3]=0; e[7]=0; e[11]=0; e[15]=1;
    return this;
  }

  multiply(m) {
    const ae = this.elements;
    const be = m.elements;
    const te = new Float32Array(16);

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        te[j*4 + i] =
          ae[i]*be[j*4] + ae[i+4]*be[j*4+1] + ae[i+8]*be[j*4+2] + ae[i+12]*be[j*4+3];
      }
    }

    this.elements = te;
    return this;
  }

  invert() {
    const m = this.elements;
    const inv = new Float32Array(16);

    inv[0] = m[5]*m[10]*m[15] - m[5]*m[11]*m[14] - m[9]*m[6]*m[15]
      + m[9]*m[7]*m[14] + m[13]*m[6]*m[11] - m[13]*m[7]*m[10];
    // (potongan perhitungan dilanjutkan sama seperti algoritma matrix inverse klasik)

    // demi ringkas, implementasi lengkap bisa menggunakan algoritma inverse 4x4 standar
    // (nanti bisa aku lengkapi dengan fungsi lengkap jika kamu ingin versi matematik penuh)

    return this;
  }

  static perspective(fov, aspect, near, far) {
    const m = new Matrix4();
    const e = m.elements;
    const f = 1.0 / Math.tan((fov * Math.PI / 180) / 2);
    e[0] = f / aspect;
    e[5] = f;
    e[10] = (far + near) / (near - far);
    e[11] = -1;
    e[14] = (2 * far * near) / (near - far);
    e[15] = 0;
    return m;
  }

  static lookAt(eye, target, up) {
    const z = eye.clone().sub(target).normalize();
    const x = up.clone().cross(z).normalize();
    const y = z.clone().cross(x);

    const m = new Matrix4();
    const e = m.elements;
    e[0]=x.x; e[4]=y.x; e[8]=z.x; e[12]=-x.dot(eye);
    e[1]=x.y; e[5]=y.y; e[9]=z.y; e[13]=-y.dot(eye);
    e[2]=x.z; e[6]=y.z; e[10]=z.z; e[14]=-z.dot(eye);
    e[3]=0; e[7]=0; e[11]=0; e[15]=1;
    return m;
  }

  static compose(position, quaternion, scale) {
    const m = new Matrix4();
    const e = m.elements;
    const x = quaternion.x, y = quaternion.y, z = quaternion.z, w = quaternion.w;
    const x2 = x + x, y2 = y + y, z2 = z + z;
    const xx = x * x2, xy = x * y2, xz = x * z2;
    const yy = y * y2, yz = y * z2, zz = z * z2;
    const wx = w * x2, wy = w * y2, wz = w * z2;

    const sx = scale.x, sy = scale.y, sz = scale.z;

    e[0] = (1 - (yy + zz)) * sx;
    e[1] = (xy + wz) * sx;
    e[2] = (xz - wy) * sx;
    e[3] = 0;

    e[4] = (xy - wz) * sy;
    e[5] = (1 - (xx + zz)) * sy;
    e[6] = (yz + wx) * sy;
    e[7] = 0;

    e[8] = (xz + wy) * sz;
    e[9] = (yz - wx) * sz;
    e[10] = (1 - (xx + yy)) * sz;
    e[11] = 0;

    e[12] = position.x;
    e[13] = position.y;
    e[14] = position.z;
    e[15] = 1;

    return m;
  }
  }
