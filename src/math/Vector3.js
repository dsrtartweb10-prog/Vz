export class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(x, y, z) {
    this.x = x; this.y = y; this.z = z;
    return this;
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  add(v) {
    this.x += v.x; this.y += v.y; this.z += v.z;
    return this;
  }

  sub(v) {
    this.x -= v.x; this.y -= v.y; this.z -= v.z;
    return this;
  }

  multiplyScalar(s) {
    this.x *= s; this.y *= s; this.z *= s;
    return this;
  }

  divideScalar(s) {
    return this.multiplyScalar(1 / s);
  }

  cross(v) {
    const x = this.y * v.z - this.z * v.y;
    const y = this.z * v.x - this.x * v.z;
    const z = this.x * v.y - this.y * v.x;
    return new Vector3(x, y, z);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  normalize() {
    const len = this.length();
    return len > 0 ? this.divideScalar(len) : this;
  }

  applyMatrix4(m) {
    const e = m.elements;
    const x = this.x, y = this.y, z = this.z;
    const w = 1 / (e[3]*x + e[7]*y + e[11]*z + e[15]);
    this.x = (e[0]*x + e[4]*y + e[8]*z + e[12]) * w;
    this.y = (e[1]*x + e[5]*y + e[9]*z + e[13]) * w;
    this.z = (e[2]*x + e[6]*y + e[10]*z + e[14]) * w;
    return this;
  }
  }
