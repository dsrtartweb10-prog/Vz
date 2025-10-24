export const MathUtils = {
  degToRad: deg => deg * Math.PI / 180,
  radToDeg: rad => rad * 180 / Math.PI,

  clamp: (x, min, max) => Math.min(Math.max(x, min), max),

  lerp: (a, b, t) => a + (b - a) * t,

  randFloat: (min, max) => min + Math.random() * (max - min),
  randInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
};
