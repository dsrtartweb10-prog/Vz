export const MathUtils = {
  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  },

  lerp(a, b, t) {
    return a + (b - a) * t;
  },

  degToRad(degrees) {
    return degrees * (Math.PI / 180);
  },

  radToDeg(radians) {
    return radians * (180 / Math.PI);
  },

  nearlyEqual(a, b, epsilon = 1e-6) {
    return Math.abs(a - b) < epsilon;
  },

  randomRange(min, max) {
    return min + Math.random() * (max - min);
  },
};
