export class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x; this.y = y;
    return this;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  add(v) {
    this.x += v.x; this.y += v.y;
    return this;
  }

  sub(v) {
    this.x -= v.x; this.y -= v.y;
    return this;
  }

  multiplyScalar(s) {
    this.x *= s; this.y *= s;
    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  length() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }

  normalize() {
    const len = this.length();
    if (len > 0) this.multiplyScalar(1 / len);
    return this;
  }
}
