"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // src/engine/math/NDArray.ts
  var View3DUint8Clamped = class _View3DUint8Clamped {
    constructor(data, shape, stride, offset) {
      this._data = data;
      this._shape = shape.filter((item) => {
        return typeof item !== "undefined";
      });
      this._stride = stride.filter((item) => {
        return typeof item !== "undefined";
      });
      this._offset = offset | 0;
      this._dtype = "uint8_clamped";
      this._dimension = this._shape.length;
    }
    get data() {
      return this._data;
    }
    get shape() {
      return this._shape;
    }
    get stride() {
      return this._stride;
    }
    get offset() {
      return this._offset;
    }
    get dtype() {
      return this._dtype;
    }
    get dimension() {
      return this._dimension;
    }
    get size() {
      return this.shape[0] * this.shape[1] * this.shape[2];
    }
    get order() {
      const s0 = Math.abs(this.stride[0]);
      const s1 = Math.abs(this.stride[1]);
      const s2 = Math.abs(this.stride[2]);
      if (s0 > s1) {
        if (s1 > s2) {
          return [2, 1, 0];
        } else if (s0 > s2) {
          return [1, 2, 0];
        } else {
          return [1, 0, 2];
        }
      } else if (s0 > s2) {
        return [2, 0, 1];
      } else if (s2 > s1) {
        return [0, 1, 2];
      }
      return [0, 2, 1];
    }
    set(i0, i1, i2, v) {
      switch (arguments.length) {
        case 1: {
          return this.data[this.offset] = arguments[arguments.length - 1];
        }
        case 2: {
          return this.data[this.offset + this.stride[0] * arguments[0]] = arguments[arguments.length - 1];
        }
        case 3: {
          return this.data[this.offset + this.stride[0] * arguments[0] + this.stride[1] * arguments[1]] = arguments[arguments.length - 1];
        }
        case 4: {
          return this.data[this.offset + this.stride[0] * arguments[0] + this.stride[1] * arguments[1] + this.stride[2] * arguments[2]] = arguments[arguments.length - 1];
        }
      }
      throw new Error("View3DUint8Clamped.Set: arguments error.");
    }
    get(i0, i1, i2) {
      switch (arguments.length) {
        case 0: {
          return this.data[this.offset];
        }
        case 1: {
          return this.data[this.offset + this.stride[0] * arguments[0]];
        }
        case 2: {
          return this.data[this.offset + this.stride[0] * arguments[0] + this.stride[1] * arguments[1]];
        }
        case 3: {
          return this.data[this.offset + this.stride[0] * arguments[0] + this.stride[1] * arguments[1] + this.stride[2] * arguments[2]];
        }
      }
      throw new Error("View3DUint8Clamped.Get: arguments error.");
    }
    index(i0, i1, i2) {
      switch (arguments.length) {
        case 0: {
          return this.data[this.offset];
        }
        case 1: {
          return this.data[this.offset + this.stride[0] * arguments[0]];
        }
        case 2: {
          return this.data[this.offset + this.stride[0] * arguments[0] + this.stride[1] * arguments[1]];
        }
        case 3: {
          return this.data[this.offset + this.stride[0] * arguments[0] + this.stride[1] * arguments[1] + this.stride[2] * arguments[2]];
        }
      }
      throw new Error("View3DUint8Clamped.Index: arguments error.");
    }
    hi(i0, i1, i2) {
      switch (arguments.length) {
        case 0: {
          return new _View3DUint8Clamped(this.data, [void 0, void 0, void 0], [void 0, void 0, void 0], this.offset);
        }
        case 1: {
          return new _View3DUint8Clamped(
            this.data,
            [typeof arguments[0] !== "number" || arguments[0] < 0 ? this.shape[0] : arguments[0] | 0, void 0, void 0],
            [this.stride[0], void 0, void 0],
            this.offset
          );
        }
        case 2: {
          return new _View3DUint8Clamped(
            this.data,
            [
              typeof arguments[0] !== "number" || arguments[0] < 0 ? this.shape[0] : arguments[0] | 0,
              typeof arguments[1] !== "number" || arguments[1] < 0 ? this.shape[1] : arguments[1] | 0,
              void 0
            ],
            [this.stride[0], this.stride[1], void 0],
            this.offset
          );
        }
        case 3: {
          return new _View3DUint8Clamped(
            this.data,
            [
              typeof arguments[0] !== "number" || arguments[0] < 0 ? this.shape[0] : arguments[0] | 0,
              typeof arguments[1] !== "number" || arguments[1] < 0 ? this.shape[1] : arguments[1] | 0,
              typeof arguments[2] !== "number" || arguments[2] < 0 ? this.shape[2] : arguments[2] | 0
            ],
            [this.stride[0], this.stride[1], this.stride[2]],
            this.offset
          );
        }
      }
      throw new Error("View3DUint8Clamped.Hi: arguments error.");
    }
    lo(i0, i1, i2) {
      switch (arguments.length) {
        case 0: {
          let offset = this.offset;
          return new _View3DUint8Clamped(this.data, [void 0, void 0, void 0], [void 0, void 0, void 0], offset);
        }
        case 1: {
          let offset = this.offset;
          let d = 0;
          let a0 = this.shape[0];
          let c0 = this.stride[0];
          if (typeof arguments[0] === "number" && arguments[0] >= 0) {
            d = arguments[0] | 0;
            offset += c0 * d;
            a0 -= d;
          }
          return new _View3DUint8Clamped(this.data, [a0, void 0, void 0], [c0, void 0, void 0], offset);
        }
        case 2: {
          let offset = this.offset;
          let d = 0;
          let a0 = this.shape[0];
          let a1 = this.shape[1];
          let c0 = this.stride[0];
          let c1 = this.stride[1];
          if (typeof arguments[0] === "number" && arguments[0] >= 0) {
            d = arguments[0] | 0;
            offset += c0 * d;
            a0 -= d;
          }
          if (typeof arguments[1] === "number" && arguments[1] >= 0) {
            d = arguments[1] | 0;
            offset += c1 * d;
            a1 -= d;
          }
          return new _View3DUint8Clamped(this.data, [a0, a1, void 0], [c0, c1, void 0], offset);
        }
        case 3: {
          let offset = this.offset;
          let d = 0;
          let a0 = this.shape[0];
          let a1 = this.shape[1];
          let a2 = this.shape[2];
          let c0 = this.stride[0];
          let c1 = this.stride[1];
          let c2 = this.stride[2];
          if (typeof arguments[0] === "number" && arguments[0] >= 0) {
            d = arguments[0] | 0;
            offset += c0 * d;
            a0 -= d;
          }
          if (typeof arguments[1] === "number" && arguments[1] >= 0) {
            d = arguments[1] | 0;
            offset += c1 * d;
            a1 -= d;
          }
          if (typeof arguments[2] === "number" && arguments[2] >= 0) {
            d = arguments[2] | 0;
            offset += c2 * d;
            a2 -= d;
          }
          return new _View3DUint8Clamped(this.data, [a0, a1, a2], [c0, c1, c2], offset);
        }
      }
      throw new Error("View3DUint8Clamped.Lo: arguments error.");
    }
    step(i0, i1, i2) {
      switch (arguments.length) {
        case 0: {
          let offset = this.offset;
          return new _View3DUint8Clamped(this.data, [void 0, void 0, void 0], [void 0, void 0, void 0], offset);
        }
        case 1: {
          let a0 = this.shape[0];
          let b0 = this.stride[0];
          let offset = this.offset;
          let d = 0;
          if (typeof arguments[0] === "number") {
            d = arguments[0] | 0;
            if (d < 0) {
              offset += b0 * (a0 - 1);
              a0 = Math.ceil(-a0 / d);
            } else {
              a0 = Math.ceil(a0 / d);
            }
            b0 *= d;
          }
          return new _View3DUint8Clamped(this.data, [a0, void 0, void 0], [b0, void 0, void 0], offset);
        }
        case 2: {
          let a0 = this.shape[0];
          let a1 = this.shape[1];
          let b0 = this.stride[0];
          let b1 = this.stride[1];
          let offset = this.offset;
          let d = 0;
          if (typeof arguments[0] === "number") {
            d = arguments[0] | 0;
            if (d < 0) {
              offset += b0 * (a0 - 1);
              a0 = Math.ceil(-a0 / d);
            } else {
              a0 = Math.ceil(a0 / d);
            }
            b0 *= d;
          }
          if (typeof arguments[1] === "number") {
            d = arguments[1] | 0;
            if (d < 0) {
              offset += b1 * (a1 - 1);
              a1 = Math.ceil(-a1 / d);
            } else {
              a1 = Math.ceil(a1 / d);
            }
            b1 *= d;
          }
          return new _View3DUint8Clamped(this.data, [a0, a1, void 0], [b0, b1, void 0], offset);
        }
        case 3: {
          let a0 = this.shape[0];
          let a1 = this.shape[1];
          let a2 = this.shape[2];
          let b0 = this.stride[0];
          let b1 = this.stride[1];
          let b2 = this.stride[2];
          let offset = this.offset;
          let d = 0;
          if (typeof arguments[0] === "number") {
            d = arguments[0] | 0;
            if (d < 0) {
              offset += b0 * (a0 - 1);
              a0 = Math.ceil(-a0 / d);
            } else {
              a0 = Math.ceil(a0 / d);
            }
            b0 *= d;
          }
          if (typeof arguments[1] === "number") {
            d = arguments[1] | 0;
            if (d < 0) {
              offset += b1 * (a1 - 1);
              a1 = Math.ceil(-a1 / d);
            } else {
              a1 = Math.ceil(a1 / d);
            }
            b1 *= d;
          }
          if (typeof arguments[2] === "number") {
            d = arguments[2] | 0;
            if (d < 0) {
              offset += b2 * (a2 - 1);
              a2 = Math.ceil(-a2 / d);
            } else {
              a2 = Math.ceil(a2 / d);
            }
            b2 *= d;
          }
          return new _View3DUint8Clamped(this.data, [a0, a1, a2], [b0, b1, b2], offset);
        }
      }
      throw new Error("View3DUint8Clamped.Step: arguments error.");
    }
    transpose(i0 = 0, i1 = 0, i2 = 0) {
      switch (arguments.length) {
        case 0: {
          const shape = this.shape;
          const stride = this.stride;
          return new _View3DUint8Clamped(this.data, [void 0, void 0, void 0], [void 0, void 0, void 0], this.offset);
        }
        case 1: {
          arguments[0] = arguments[0] === void 0 ? 0 : arguments[0] | 0;
          const shape = this.shape;
          const stride = this.stride;
          return new _View3DUint8Clamped(
            this.data,
            [shape[arguments[0]], void 0, void 0],
            [stride[arguments[0]], void 0, void 0],
            this.offset
          );
        }
        case 2: {
          arguments[0] = arguments[0] === void 0 ? 0 : arguments[0] | 0;
          arguments[1] = arguments[1] === void 0 ? 1 : arguments[1] | 0;
          const shape = this.shape;
          const stride = this.stride;
          return new _View3DUint8Clamped(
            this.data,
            [shape[arguments[0]], shape[arguments[1]], void 0],
            [stride[arguments[0]], stride[arguments[1]], void 0],
            this.offset
          );
        }
        case 3: {
          arguments[0] = arguments[0] === void 0 ? 0 : arguments[0] | 0;
          arguments[1] = arguments[1] === void 0 ? 1 : arguments[1] | 0;
          arguments[2] = arguments[2] === void 0 ? 2 : arguments[2] | 0;
          const shape = this.shape;
          const stride = this.stride;
          return new _View3DUint8Clamped(
            this.data,
            [shape[arguments[0]], shape[arguments[1]], shape[arguments[2]]],
            [stride[arguments[0]], stride[arguments[1]], stride[arguments[2]]],
            this.offset
          );
        }
      }
      throw new Error("View3DUint8Clamped.Transpose: arguments error.");
    }
    pick(i0, i1, i2) {
      const stride = [];
      const shape = [];
      let offset = this.offset;
      if (typeof arguments[0] === "number" && arguments[0] >= 0) {
        offset = offset + this.stride[0] * arguments[0] | 0;
      } else {
        stride.push(this.shape[0]);
        shape.push(this.stride[0]);
      }
      if (typeof arguments[1] === "number" && arguments[1] >= 0) {
        offset = offset + this.stride[1] * arguments[1] | 0;
      } else {
        stride.push(this.shape[1]);
        shape.push(this.stride[1]);
      }
      if (typeof arguments[2] === "number" && arguments[2] >= 0) {
        offset = offset + this.stride[2] * arguments[2] | 0;
      } else {
        stride.push(this.shape[2]);
        shape.push(this.stride[2]);
      }
      return new _View3DUint8Clamped(this.data, stride, shape, offset);
    }
  };
  function createCanvasImageDataArray(data, shape) {
    const d = shape.length;
    const stride = new Array(d);
    for (let i = d - 1, sz = 1; i >= 0; --i) {
      stride[i] = sz;
      sz *= shape[i];
    }
    let offset = 0;
    for (let i = 0; i < d; i++) {
      if (stride[i] < 0) {
        offset -= (shape[i] - 1) * stride[i];
      }
    }
    return new View3DUint8Clamped(data, shape, stride, offset);
  }

  // src/engine/math/Twos.ts
  var SPLITTER = +(Math.pow(2, 27) + 1);
  var Twos = class {
    static twoProduct(a, b, result = null) {
      let x = a * b;
      let c = SPLITTER * a;
      let abig = c - a;
      let ahi = c - abig;
      let alo = a - ahi;
      let d = SPLITTER * b;
      let bbig = d - b;
      let bhi = d - bbig;
      let blo = b - bhi;
      let err1 = x - ahi * bhi;
      let err2 = err1 - alo * bhi;
      let err3 = err2 - ahi * blo;
      let y = alo * blo - err3;
      if (result) {
        result[0] = y;
        result[1] = x;
        return result;
      }
      return [y, x];
    }
    static twoSum(a, b, result = null) {
      let x = a + b;
      let bv = x - a;
      let av = x - bv;
      let br = b - bv;
      let ar = a - av;
      if (result) {
        result[0] = ar + br;
        result[1] = x;
        return result;
      }
      return [ar + br, x];
    }
  };

  // src/engine/algorithm/geometry/Orients.ts
  var EPSILON = 11102230246251565e-32;
  var ERRBOUND3 = (3 + 16 * EPSILON) * EPSILON;
  var ERRBOUND4 = (7 + 56 * EPSILON) * EPSILON;
  function scalarScalar(a, b) {
    let x = a + b;
    let bv = x - a;
    let av = x - bv;
    let br = b - bv;
    let ar = a - av;
    let y = ar + br;
    if (y) {
      return [y, x];
    }
    return [x];
  }
  function linearExpansionSum(e, f) {
    let ne = e.length | 0;
    let nf = f.length | 0;
    if (ne === 1 && nf === 1) {
      return scalarScalar(e[0], f[0]);
    }
    let n = ne + nf;
    let g = new Array(n);
    let count = 0;
    let eptr = 0;
    let fptr = 0;
    let ei = e[eptr];
    let ea = Math.abs(ei);
    let fi = f[fptr];
    let fa = Math.abs(fi);
    let a;
    let b;
    if (ea < fa) {
      b = ei;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
        ea = Math.abs(ei);
      }
    } else {
      b = fi;
      fptr += 1;
      if (fptr < nf) {
        fi = f[fptr];
        fa = Math.abs(fi);
      }
    }
    if (eptr < ne && ea < fa || fptr >= nf) {
      a = ei;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
        ea = Math.abs(ei);
      }
    } else {
      a = fi;
      fptr += 1;
      if (fptr < nf) {
        fi = f[fptr];
        fa = Math.abs(fi);
      }
    }
    let x = a + b;
    let bv = x - a;
    let y = b - bv;
    let q0 = y;
    let q1 = x;
    let _x;
    let _bv;
    let _av;
    let _br;
    let _ar;
    while (eptr < ne && fptr < nf) {
      if (ea < fa) {
        a = ei;
        eptr += 1;
        if (eptr < ne) {
          ei = e[eptr];
          ea = Math.abs(ei);
        }
      } else {
        a = fi;
        fptr += 1;
        if (fptr < nf) {
          fi = f[fptr];
          fa = Math.abs(fi);
        }
      }
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
    }
    while (eptr < ne) {
      a = ei;
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
      }
    }
    while (fptr < nf) {
      a = fi;
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
      fptr += 1;
      if (fptr < nf) {
        fi = f[fptr];
      }
    }
    if (q0) {
      g[count++] = q0;
    }
    if (q1) {
      g[count++] = q1;
    }
    if (!count) {
      g[count++] = 0;
    }
    g.length = count;
    return g;
  }
  function robustSubtract(e, f) {
    let ne = e.length | 0;
    let nf = f.length | 0;
    if (ne === 1 && nf === 1) {
      return scalarScalar(e[0], -f[0]);
    }
    let n = ne + nf;
    let g = new Array(n);
    let count = 0;
    let eptr = 0;
    let fptr = 0;
    let ei = e[eptr];
    let ea = Math.abs(ei);
    let fi = -f[fptr];
    let fa = Math.abs(fi);
    let a;
    let b;
    if (ea < fa) {
      b = ei;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
        ea = Math.abs(ei);
      }
    } else {
      b = fi;
      fptr += 1;
      if (fptr < nf) {
        fi = -f[fptr];
        fa = Math.abs(fi);
      }
    }
    if (eptr < ne && ea < fa || fptr >= nf) {
      a = ei;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
        ea = Math.abs(ei);
      }
    } else {
      a = fi;
      fptr += 1;
      if (fptr < nf) {
        fi = -f[fptr];
        fa = Math.abs(fi);
      }
    }
    let x = a + b;
    let bv = x - a;
    let y = b - bv;
    let q0 = y;
    let q1 = x;
    let _x;
    let _bv;
    let _av;
    let _br;
    let _ar;
    while (eptr < ne && fptr < nf) {
      if (ea < fa) {
        a = ei;
        eptr += 1;
        if (eptr < ne) {
          ei = e[eptr];
          ea = Math.abs(ei);
        }
      } else {
        a = fi;
        fptr += 1;
        if (fptr < nf) {
          fi = -f[fptr];
          fa = Math.abs(fi);
        }
      }
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
    }
    while (eptr < ne) {
      a = ei;
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
      eptr += 1;
      if (eptr < ne) {
        ei = e[eptr];
      }
    }
    while (fptr < nf) {
      a = fi;
      b = q0;
      x = a + b;
      bv = x - a;
      y = b - bv;
      if (y) {
        g[count++] = y;
      }
      _x = q1 + x;
      _bv = _x - q1;
      _av = _x - _bv;
      _br = x - _bv;
      _ar = q1 - _av;
      q0 = _ar + _br;
      q1 = _x;
      fptr += 1;
      if (fptr < nf) {
        fi = -f[fptr];
      }
    }
    if (q0) {
      g[count++] = q0;
    }
    if (q1) {
      g[count++] = q1;
    }
    if (!count) {
      g[count++] = 0;
    }
    g.length = count;
    return g;
  }
  function orientation3Exact(...args) {
    const m0 = arguments[0];
    const m1 = arguments[1];
    const m2 = arguments[2];
    let p = linearExpansionSum(
      linearExpansionSum(Twos.twoProduct(m1[1], m2[0]), Twos.twoProduct(-m2[1], m1[0])),
      linearExpansionSum(Twos.twoProduct(m0[1], m1[0]), Twos.twoProduct(-m1[1], m0[0]))
    );
    let n = linearExpansionSum(Twos.twoProduct(m0[1], m2[0]), Twos.twoProduct(-m2[1], m0[0]));
    let d = robustSubtract(p, n);
    return d[d.length - 1];
  }
  function orient(...args) {
    switch (arguments.length) {
      case 0: {
        return 0;
      }
      case 1: {
        return 0;
      }
      case 2: {
        return arguments[0] - arguments[0];
      }
      case 3: {
        const a = arguments[0];
        const b = arguments[1];
        const c = arguments[2];
        let l = (b[0] - c[0]) * (a[1] - c[1]);
        let r = (b[1] - c[1]) * (a[0] - c[0]);
        let det = l - r;
        let s = void 0;
        if (l > 0) {
          if (r <= 0) {
            return det;
          } else {
            s = l + r;
          }
        } else if (l < 0) {
          if (r >= 0) {
            return det;
          } else {
            s = -(l + r);
          }
        } else {
          return det;
        }
        let tol = ERRBOUND3 * s;
        if (det >= tol || det <= -tol) {
          return det;
        }
        return orientation3Exact(...args);
      }
    }
    return 0;
  }

  // src/engine/modules/d2Canvas2Svg/simplify/Simplifys.ts
  function errorWeight(base, a, b) {
    const area = Math.abs(orient(base, a, b));
    const perim = Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
    return area / perim;
  }
  function compareCells(a, b) {
    let n = a.length;
    let t = a.length - b.length;
    if (t) {
      return t;
    }
    switch (n) {
      case 0:
        return 0;
      case 1:
        return a[0] - b[0];
      case 2: {
        const d = a[0] + a[1] - (b[0] + b[1]);
        if (d) {
          return d;
        }
        return Math.min(a[0], a[1]) - Math.min(b[0], b[1]);
      }
      case 3: {
        const l1 = a[0] + a[1];
        const m1 = b[0] + b[1];
        let d = l1 + a[2] - (m1 + b[2]);
        if (d) {
          return d;
        }
        const l0 = Math.min(a[0], a[1]);
        const m0 = Math.min(b[0], b[1]);
        d = Math.min(l0, a[2]) - Math.min(m0, b[2]);
        if (d) {
          return d;
        }
        return Math.min(l0 + a[2], l1) - Math.min(m0 + b[2], m1);
      }
      default: {
        const as = a.slice(0);
        as.sort();
        const bs = b.slice(0);
        bs.sort();
        for (let i = 0; i < n; i++) {
          t = as[i] - bs[i];
          if (t) {
            return t;
          }
        }
        return 0;
      }
    }
  }
  function normalize(cells, attr = void 0) {
    if (attr) {
      const len = cells.length;
      const zipped = new Array(len);
      for (let i = 0; i < len; i++) {
        zipped[i] = [cells[i], attr[i]];
      }
      zipped.sort((a, b) => {
        return compareCells(a[0], b[0]);
      });
      for (let i = 0; i < len; i++) {
        cells[i] = zipped[i][0];
        attr[i] = zipped[i][1];
      }
      return cells;
    }
    cells.sort(compareCells);
    return cells;
  }
  function unique(cells) {
    if (cells.length === 0) {
      return [];
    }
    let ptr = 1;
    for (let i = 1; i < cells.length; i++) {
      let a = cells[i];
      if (compareCells(a, cells[i - 1])) {
        if (i === ptr) {
          ptr++;
          continue;
        }
        cells[ptr++] = a;
      }
    }
    cells.length = ptr;
    return cells;
  }
  var Simplifys = class {
    static proecss(cells, positions, minArea) {
      const positionsLen = positions.length;
      const cellsLen = cells.length;
      const inv = new Array(positionsLen);
      const outv = new Array(positionsLen);
      const weights = new Array(positionsLen);
      const dead = new Array(positionsLen);
      const heap = [];
      const index = new Array(positionsLen);
      const npositions = [];
      const ncells = [];
      let heapCount = heap.length;
      const computeWeight = (i) => {
        if (dead[i]) {
          return Infinity;
        }
        const s = inv[i];
        const t = outv[i];
        if (s < 0 || t < 0) {
          return Infinity;
        }
        return errorWeight(positions[i], positions[s], positions[t]);
      };
      const heapSwap = (i, j) => {
        const a = heap[i];
        const b = heap[j];
        heap[i] = b;
        heap[j] = a;
        index[a] = j;
        index[b] = i;
      };
      const heapParent = (i) => {
        if (i & 1) {
          return i - 1 >> 1;
        }
        return (i >> 1) - 1;
      };
      const heapDown = (i) => {
        let w = weights[heap[i]];
        while (true) {
          let tw = w;
          let left = 2 * i + 1;
          let right = 2 * (i + 1);
          let next = i;
          if (left < heapCount) {
            const lw = weights[heap[left]];
            if (lw < tw) {
              next = left;
              tw = lw;
            }
          }
          if (right < heapCount) {
            const rw = weights[heap[right]];
            if (rw < tw) {
              next = right;
            }
          }
          if (next === i) {
            return i;
          }
          heapSwap(i, next);
          i = next;
        }
      };
      const heapUp = (i) => {
        const w = weights[heap[i]];
        while (i > 0) {
          const parent = heapParent(i);
          if (parent >= 0) {
            const pw = weights[heap[parent]];
            if (w < pw) {
              heapSwap(i, parent);
              i = parent;
              continue;
            }
          }
          return i;
        }
      };
      const heapPop = () => {
        if (heapCount > 0) {
          const head = heap[0];
          heapSwap(0, heapCount - 1);
          heapCount -= 1;
          heapDown(0);
          return head;
        }
        return -1;
      };
      const heapUpdate = (i, w) => {
        const a = heap[i];
        if (weights[a] === w) {
          return i;
        }
        weights[a] = -Infinity;
        heapUp(i);
        heapPop();
        weights[a] = w;
        heapCount += 1;
        return heapUp(heapCount - 1);
      };
      const kill = (i) => {
        if (dead[i]) {
          return;
        }
        dead[i] = true;
        const s = inv[i];
        const t = outv[i];
        if (inv[t] >= 0) {
          inv[t] = s;
        }
        if (outv[s] >= 0) {
          outv[s] = t;
        }
        if (index[s] >= 0) {
          heapUpdate(index[s], computeWeight(s));
        }
        if (index[t] >= 0) {
          heapUpdate(index[t], computeWeight(t));
        }
      };
      const tortoiseHare = (seq, start) => {
        if (seq[start] < 0) {
          return start;
        }
        let t = start;
        let h = start;
        do {
          let nh = seq[h];
          if (!dead[h] || nh < 0 || nh === h) {
            break;
          }
          h = nh;
          nh = seq[h];
          if (!dead[h] || nh < 0 || nh === h) {
            break;
          }
          h = nh;
          t = seq[t];
        } while (t !== h);
        for (let v = start; v !== h; v = seq[v]) {
          seq[v] = h;
        }
        return h;
      };
      for (let i = 0; i < positionsLen; i++) {
        inv[i] = outv[i] = -1;
        weights[i] = Infinity;
        dead[i] = false;
      }
      for (let i = 0; i < cellsLen; i++) {
        const c = cells[i];
        if (c.length !== 2) {
          throw new Error("input must be a graph.");
        }
        const s = c[1];
        const t = c[0];
        if (outv[t] !== -1) {
          outv[t] = -2;
        } else {
          outv[t] = s;
        }
        if (inv[s] !== -1) {
          inv[s] = -2;
        } else {
          inv[s] = t;
        }
      }
      for (let i = 0; i < positionsLen; i++) {
        const w = weights[i] = computeWeight(i);
        if (w < Infinity) {
          index[i] = heap.length;
          heap.push(i);
        } else {
          index[i] = -1;
        }
      }
      heapCount = heap.length;
      for (let i = heapCount >> 1; i >= 0; --i) {
        heapDown(i);
      }
      while (true) {
        const hmin = heapPop();
        if (hmin < 0 || weights[hmin] > minArea) {
          break;
        }
        kill(hmin);
      }
      for (let i = 0; i < positionsLen; i++) {
        if (!dead[i]) {
          index[i] = npositions.length;
          npositions.push(positions[i].slice());
        }
      }
      for (let i = 0; i < cells.length; i++) {
        const c = cells[i];
        const tin = tortoiseHare(inv, c[0]);
        const tout = tortoiseHare(outv, c[1]);
        if (tin >= 0 && tout >= 0 && tin !== tout) {
          const cin = index[tin];
          const cout = index[tout];
          if (cin !== cout) {
            ncells.push([cin, cout]);
          }
        }
      }
      unique(normalize(ncells));
      return {
        positions: npositions,
        edges: ncells
      };
    }
  };

  // src/engine/modules/d2Canvas2Svg/surfaceNets/Mallocs.ts
  function bitsNextPow2(v) {
    let _v = v;
    _v += +(_v === 0);
    _v -= 1;
    _v |= _v >>> 1;
    _v |= _v >>> 2;
    _v |= _v >>> 4;
    _v |= _v >>> 8;
    _v |= _v >>> 16;
    return _v + 1;
  }
  function mallocUint32(n) {
    return new Uint32Array(new ArrayBuffer(bitsNextPow2(4 * n)), 0, n);
  }

  // src/engine/modules/d2Canvas2Svg/surfaceNets/SurfaceNets.ts
  function createHandleParam(order) {
    const handleParam = {
      order,
      phase: function(p, a, b, c) {
        return +(p > c) | 0;
      },
      vertex: function(d0, d1, v0, v1, v2, v3, p0, p1, p2, p3, a, b, c) {
        const m = (p0 << 0) + (p1 << 1) + (p2 << 2) + (p3 << 3) | 0;
        if (m === 0 || m === 15) {
          return;
        }
        const yFlip = -1;
        switch (m) {
          case 0: {
            a.push([d0 - 0.5, (d1 - 0.5) * yFlip]);
            break;
          }
          case 1: {
            a.push([d0 - 0.25 - 0.25 * (v1 + v0 - 2 * c) / (v0 - v1), (d1 - 0.25 - 0.25 * (v2 + v0 - 2 * c) / (v0 - v2)) * yFlip]);
            break;
          }
          case 2: {
            a.push([d0 - 0.75 - 0.25 * (-v1 - v0 + 2 * c) / (v1 - v0), (d1 - 0.25 - 0.25 * (v3 + v1 - 2 * c) / (v1 - v3)) * yFlip]);
            break;
          }
          case 3: {
            a.push([d0 - 0.5, (d1 - 0.5 - 0.5 * (v2 + v0 + v3 + v1 - 4 * c) / (v0 - v2 + v1 - v3)) * yFlip]);
            break;
          }
          case 4: {
            a.push([d0 - 0.25 - 0.25 * (v3 + v2 - 2 * c) / (v2 - v3), (d1 - 0.75 - 0.25 * (-v2 - v0 + 2 * c) / (v2 - v0)) * yFlip]);
            break;
          }
          case 5: {
            a.push([d0 - 0.5 - 0.5 * (v1 + v0 + v3 + v2 - 4 * c) / (v0 - v1 + v2 - v3), (d1 - 0.5) * yFlip]);
            break;
          }
          case 6: {
            a.push([
              d0 - 0.5 - 0.25 * (-v1 - v0 + v3 + v2) / (v1 - v0 + v2 - v3),
              (d1 - 0.5 - 0.25 * (-v2 - v0 + v3 + v1) / (v2 - v0 + v1 - v3)) * yFlip
            ]);
            break;
          }
          case 7: {
            a.push([d0 - 0.75 - 0.25 * (v3 + v2 - 2 * c) / (v2 - v3), (d1 - 0.75 - 0.25 * (v3 + v1 - 2 * c) / (v1 - v3)) * yFlip]);
            break;
          }
          case 8: {
            a.push([d0 - 0.75 - 0.25 * (-v3 - v2 + 2 * c) / (v3 - v2), (d1 - 0.75 - 0.25 * (-v3 - v1 + 2 * c) / (v3 - v1)) * yFlip]);
            break;
          }
          case 9: {
            a.push([
              d0 - 0.5 - 0.25 * (v1 + v0 + -v3 - v2) / (v0 - v1 + v3 - v2),
              (d1 - 0.5 - 0.25 * (v2 + v0 + -v3 - v1) / (v0 - v2 + v3 - v1)) * yFlip
            ]);
            break;
          }
          case 10: {
            a.push([d0 - 0.5 - 0.5 * (-v1 - v0 + -v3 - v2 + 4 * c) / (v1 - v0 + v3 - v2), (d1 - 0.5) * yFlip]);
            break;
          }
          case 11: {
            a.push([d0 - 0.25 - 0.25 * (-v3 - v2 + 2 * c) / (v3 - v2), (d1 - 0.75 - 0.25 * (v2 + v0 - 2 * c) / (v0 - v2)) * yFlip]);
            break;
          }
          case 12: {
            a.push([d0 - 0.5, (d1 - 0.5 - 0.5 * (-v2 - v0 + -v3 - v1 + 4 * c) / (v2 - v0 + v3 - v1)) * yFlip]);
            break;
          }
          case 13: {
            a.push([d0 - 0.75 - 0.25 * (v1 + v0 - 2 * c) / (v0 - v1), (d1 - 0.25 - 0.25 * (-v3 - v1 + 2 * c) / (v3 - v1)) * yFlip]);
            break;
          }
          case 14: {
            a.push([d0 - 0.25 - 0.25 * (-v1 - v0 + 2 * c) / (v1 - v0), (d1 - 0.25 - 0.25 * (-v2 - v0 + 2 * c) / (v2 - v0)) * yFlip]);
            break;
          }
          case 15: {
            a.push([d0 - 0.5, (d1 - 0.5) * yFlip]);
            break;
          }
        }
      },
      cell: function(v0, v1, c0, c1, p0, p1, a, b, c) {
        if (p0) {
          b.push([v0, v1]);
        } else {
          b.push([v1, v0]);
        }
      }
    };
    return handleParam;
  }
  function fillVertexData(handleParam, pixels, verts, cells, level) {
    const shape0 = pixels.shape[0] | 0;
    const shape1 = pixels.shape[1] | 0;
    const pixelData = pixels.data;
    const stride0 = pixels.stride[0] | 0;
    const stride1 = pixels.stride[1] | 0;
    let p0 = pixels.offset | 0;
    let c0_0 = 0;
    let d0_1 = -stride0 | 0;
    let c0_1 = 0;
    let d0_2 = -stride1 | 0;
    let c0_2 = 0;
    let d0_3 = -stride0 - stride1 | 0;
    let c0_3 = 0;
    let u0_0 = stride0 | 0;
    let u0_1 = stride1 - stride0 * shape0 | 0;
    let i0 = 0;
    let i1 = 0;
    let N = 0;
    let Q = 2 * shape0 | 0;
    let P = mallocUint32(Q);
    let V = mallocUint32(Q);
    let X = 0;
    let b0 = 0;
    let e1 = -1 | 0;
    let y1 = -1 | 0;
    let b1 = 0;
    let e2 = -shape0 | 0;
    let y2 = shape0 | 0;
    let b2 = 0;
    let e3 = -shape0 - 1 | 0;
    let y3 = shape0 - 1 | 0;
    let b3 = 0;
    let v0 = 0;
    let T = 0;
    for (i0 = 0; i0 < shape0; ++i0) {
      P[X++] = handleParam.phase(pixelData[p0], verts, cells, level);
      p0 += u0_0;
    }
    p0 += u0_1;
    if (shape1 > 0) {
      i1 = 1;
      P[X++] = handleParam.phase(pixelData[p0], verts, cells, level);
      p0 += u0_0;
      if (shape0 > 0) {
        i0 = 1;
        c0_0 = pixelData[p0];
        b0 = P[X] = handleParam.phase(c0_0, verts, cells, level);
        b1 = P[X + e1];
        b2 = P[X + e2];
        b3 = P[X + e3];
        if (b0 !== b1 || b0 !== b2 || b0 !== b3) {
          c0_1 = pixelData[p0 + d0_1];
          c0_2 = pixelData[p0 + d0_2];
          c0_3 = pixelData[p0 + d0_3];
          handleParam.vertex(i0, i1, c0_0, c0_1, c0_2, c0_3, b0, b1, b2, b3, verts, cells, level);
          v0 = V[X] = N++;
        }
        X += 1;
        p0 += u0_0;
        for (i0 = 2; i0 < shape0; ++i0) {
          c0_0 = pixelData[p0];
          b0 = P[X] = handleParam.phase(c0_0, verts, cells, level);
          b1 = P[X + e1];
          b2 = P[X + e2];
          b3 = P[X + e3];
          if (b0 !== b1 || b0 !== b2 || b0 !== b3) {
            c0_1 = pixelData[p0 + d0_1];
            c0_2 = pixelData[p0 + d0_2];
            c0_3 = pixelData[p0 + d0_3];
            handleParam.vertex(i0, i1, c0_0, c0_1, c0_2, c0_3, b0, b1, b2, b3, verts, cells, level);
            v0 = V[X] = N++;
            if (b3 !== b1) {
              handleParam.cell(V[X + e1], v0, c0_3, c0_1, b3, b1, verts, cells, level);
            }
          }
          X += 1;
          p0 += u0_0;
        }
      }
      p0 += u0_1;
      X = 0;
      T = e1;
      e1 = y1;
      y1 = T;
      T = e2;
      e2 = y2;
      y2 = T;
      T = e3;
      e3 = y3;
      y3 = T;
      for (i1 = 2; i1 < shape1; ++i1) {
        P[X++] = handleParam.phase(pixelData[p0], verts, cells, level);
        p0 += u0_0;
        if (shape0 > 0) {
          i0 = 1;
          c0_0 = pixelData[p0];
          b0 = P[X] = handleParam.phase(c0_0, verts, cells, level);
          b1 = P[X + e1];
          b2 = P[X + e2];
          b3 = P[X + e3];
          if (b0 !== b1 || b0 !== b2 || b0 !== b3) {
            c0_1 = pixelData[p0 + d0_1];
            c0_2 = pixelData[p0 + d0_2];
            c0_3 = pixelData[p0 + d0_3];
            handleParam.vertex(i0, i1, c0_0, c0_1, c0_2, c0_3, b0, b1, b2, b3, verts, cells, level);
            v0 = V[X] = N++;
            if (b3 !== b2) {
              handleParam.cell(V[X + e2], v0, c0_2, c0_3, b2, b3, verts, cells, level);
            }
          }
          X += 1;
          p0 += u0_0;
          for (i0 = 2; i0 < shape0; ++i0) {
            c0_0 = pixelData[p0];
            b0 = P[X] = handleParam.phase(c0_0, verts, cells, level);
            b1 = P[X + e1];
            b2 = P[X + e2];
            b3 = P[X + e3];
            if (b0 !== b1 || b0 !== b2 || b0 !== b3) {
              c0_1 = pixelData[p0 + d0_1];
              c0_2 = pixelData[p0 + d0_2];
              c0_3 = pixelData[p0 + d0_3];
              handleParam.vertex(i0, i1, c0_0, c0_1, c0_2, c0_3, b0, b1, b2, b3, verts, cells, level);
              v0 = V[X] = N++;
              if (b3 !== b2) {
                handleParam.cell(V[X + e2], v0, c0_2, c0_3, b2, b3, verts, cells, level);
              }
              if (b3 !== b1) {
                handleParam.cell(V[X + e1], v0, c0_3, c0_1, b3, b1, verts, cells, level);
              }
            }
            X += 1;
            p0 += u0_0;
          }
        }
        if (i1 & 1) {
          X = 0;
        }
        T = e1;
        e1 = y1;
        y1 = T;
        T = e2;
        e2 = y2;
        y2 = T;
        T = e3;
        e3 = y3;
        y3 = T;
        p0 += u0_1;
      }
    }
  }
  var _SurfaceNets = class _SurfaceNets {
    /**
     * 将阵列化像素图形分解成顶点坐标
     */
    static process(pixels, level) {
      const typesig = pixels.order.join() + "-" + pixels.dtype;
      let proc = _SurfaceNets.CACHE[typesig];
      level = +level || 0;
      if (!proc) {
        proc = _SurfaceNets.CACHE[typesig] = function(pixels2, level2) {
          const handleParam = createHandleParam(pixels2.order);
          const verts = [];
          const cells = [];
          fillVertexData(handleParam, pixels2, verts, cells, level2);
          return {
            positions: verts,
            cells
          };
        };
      }
      return proc(pixels, level);
    }
  };
  _SurfaceNets.CACHE = {};
  var SurfaceNets = _SurfaceNets;

  // src/engine/algorithm/faceIndex/FaceIndex.ts
  function arrangement(a, b, c) {
    let p = a;
    let q = b;
    let r = c;
    if (b < c) {
      if (b < a) {
        p = b;
        q = c;
        r = a;
      }
    } else if (c < a) {
      p = c;
      q = a;
      r = b;
    }
    return {
      p,
      q,
      r
    };
  }
  function indexCells(triangulation) {
    const cells = triangulation.cells();
    const nc = cells.length;
    for (let n = 0; n < nc; n++) {
      const { p, q, r } = arrangement(cells[n][0], cells[n][1], cells[n][2]);
      cells[n][0] = p;
      cells[n][1] = q;
      cells[n][2] = r;
    }
    cells.sort((a, b) => {
      return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
    });
    const flags = new Array(nc);
    for (let i = 0; i < flags.length; i++) {
      flags[i] = 0;
    }
    const allPointsSize = 3 * nc;
    const faceIndex = new FaceIndex(cells, new Array(allPointsSize), new Array(allPointsSize), flags, []);
    const active = [];
    const next = [];
    for (let triangleIndex = 0; triangleIndex < nc; triangleIndex++) {
      for (let pointIndex = 0; pointIndex < 3; pointIndex++) {
        const ai = faceIndex.cells[triangleIndex][pointIndex];
        const bi = faceIndex.cells[triangleIndex][(pointIndex + 1) % 3];
        const o_ci = triangulation.opposite(ai, bi);
        const m = 3 * triangleIndex + pointIndex;
        faceIndex.neighbor[m] = faceIndex.findIndexByFullMatch(bi, ai, o_ci);
        faceIndex.constraint[m] = triangulation.isConstraint(ai, bi);
        if (faceIndex.neighbor[m] < 0) {
          if (faceIndex.constraint[m]) {
            next.push(triangleIndex);
            continue;
          }
          active.push(triangleIndex);
          faceIndex.flags[triangleIndex] = 1;
        }
      }
    }
    return {
      faceIndex,
      initActive: active,
      initNext: next
    };
  }
  function classifyFaces(triangulation) {
    let { faceIndex, initActive: active, initNext: next } = indexCells(triangulation);
    let side = 1;
    while (active.length > 0 || next.length > 0) {
      while (active.length > 0) {
        const triangleIndex = active.pop();
        if (faceIndex.flags[triangleIndex] === -side) {
          continue;
        }
        faceIndex.flags[triangleIndex] = side;
        for (let pointIndex = 0; pointIndex < 3; pointIndex++) {
          const m = 3 * triangleIndex + pointIndex;
          const nIdx = faceIndex.neighbor[m];
          if (nIdx >= 0 && faceIndex.flags[nIdx] === 0) {
            if (faceIndex.constraint[m]) {
              next.push(nIdx);
              continue;
            }
            active.push(nIdx);
            faceIndex.flags[nIdx] = side;
          }
        }
      }
      const tmp = next;
      next = active;
      active = tmp;
      next.length = 0;
      side = -side;
    }
    return faceIndex;
  }
  var FaceIndex = class {
    constructor(cells, neighbor, constraint, flags, boundary) {
      this._cells = cells;
      this._neighbor = neighbor;
      this._constraint = constraint;
      this._flags = flags;
      this._cells = cells;
      this._boundary = boundary;
    }
    get cells() {
      return this._cells;
    }
    set cells(value) {
      this._cells = value;
    }
    get neighbor() {
      return this._neighbor;
    }
    set neighbor(value) {
      this._neighbor = value;
    }
    get constraint() {
      return this._constraint;
    }
    set constraint(value) {
      this._constraint = value;
    }
    get flags() {
      return this._flags;
    }
    set flags(value) {
      this._flags = value;
    }
    get boundary() {
      return this._boundary;
    }
    set boundary(value) {
      this._boundary = value;
    }
    /**
     * 查找由顶点 a b c 尝试构成的三角形是否存在于 this.cells 中, 并返回在 this.cells 中的索引
     * 		未找到时返回 -1
     * 		通过索引逐项逐项匹配
     */
    findIndexByFullMatch(a, b, c) {
      const { p, q, r } = arrangement(a, b, c);
      if (p < 0) {
        return -1;
      }
      const key = [p, q, r];
      let idx = -1;
      for (let n = 0; n < this.cells.length; n++) {
        if (this.cells[n][0] === key[0] && this.cells[n][1] === key[1] && this.cells[n][2] === key[2]) {
          idx = n;
          break;
        }
      }
      return idx;
    }
  };
  function createCells(triangulation) {
    const faceIndex = classifyFaces(triangulation);
    const resultCells = [];
    const target = -1;
    for (let i = 0; i < faceIndex.cells.length; i++) {
      if (faceIndex.flags[i] === target) {
        resultCells.push(faceIndex.cells[i]);
      }
    }
    return resultCells;
  }

  // src/engine/algorithm/triangulation/Triangulation.ts
  function removePair(list, j, k) {
    for (let i = 1, n = list.length; i < n; i += 2) {
      if (list[i - 1] === j && list[i] === k) {
        list[i - 1] = list[n - 2];
        list[i] = list[n - 1];
        list.length = n - 2;
        break;
      }
    }
  }
  var Triangulation = class {
    constructor(stars, edges) {
      this._stars = stars;
      this._edges = edges;
    }
    get stars() {
      return this._stars;
    }
    set stars(value) {
      this._stars = value;
    }
    get edges() {
      return this._edges;
    }
    set edges(value) {
      this._edges = value;
    }
    /**
     * 判断顶点 i 和 j 组成的边是否是约束边
     */
    isConstraint(i, j) {
      const e = [Math.min(i, j), Math.max(i, j)];
      let idx = -1;
      for (let i2 = 0; i2 < this.edges.length; i2++) {
        if (this.edges[i2][0] === e[0] && this.edges[i2][1] === e[1]) {
          idx = i2;
          break;
        }
      }
      return idx >= 0;
    }
    /**
     * 从 this.stars 中移除由顶点 i j k 组成的三角形连接关系
     */
    removeTriangle(i, j, k) {
      removePair(this.stars[i], j, k);
      removePair(this.stars[j], k, i);
      removePair(this.stars[k], i, j);
    }
    /**
     * 向 this.stars 中新增由顶点 i j k 组成的三角形连接关系
     */
    addTriangle(i, j, k) {
      this.stars[i].push(j, k);
      this.stars[j].push(k, i);
      this.stars[k].push(i, j);
    }
    /**
     * 查找顶点 refi 的邻接顶点列表中, 与顶点 j 共同构成三角形的第三个顶点
     */
    opposite(refi, j) {
      const list = this.stars[refi];
      for (let k = 1, n = list.length; k < n; k += 2) {
        if (list[k] === j) {
          return list[k - 1];
        }
      }
      return -1;
    }
    /**
     * 翻转边 (i, j), 即将其相邻的两个三角形拆分为另外两个新的三角形
     */
    flip(i, j) {
      const a = this.opposite(j, i);
      const b = this.opposite(i, j);
      this.removeTriangle(i, j, a);
      this.removeTriangle(j, i, b);
      this.addTriangle(i, b, a);
      this.addTriangle(j, a, b);
    }
    /**
     * 生成三角形顶点列表
     */
    cells() {
      const result = [];
      for (let i = 0, n = this.stars.length; i < n; i++) {
        for (let j = 0, m = this.stars[i].length; j < m; j += 2) {
          let s = this.stars[i][j];
          let t = this.stars[i][j + 1];
          if (i < Math.min(s, t)) {
            result.push([i, s, t]);
          }
        }
      }
      return result;
    }
  };
  function createTriangulation(numVerts, edges) {
    const filterEdges = edges.map((e) => {
      return [Math.min(e[0], e[1]), Math.max(e[0], e[1])];
    }).sort((a, b) => {
      return a[0] - b[0] || a[1] - b[1];
    });
    const stars = new Array(numVerts);
    for (let i = 0; i < numVerts; i++) {
      stars[i] = [];
    }
    return new Triangulation(stars, filterEdges);
  }

  // src/engine/algorithm/monotoneTriangulates/MonotoneTriangulates.ts
  var PartialHull = class {
    constructor(a, b, idx, upperIndices, lowerIndices) {
      this._a = a;
      this._b = b;
      this._idx = idx;
      this._upperIndices = upperIndices;
      this._lowerIndices = lowerIndices;
    }
    get a() {
      return this._a;
    }
    set a(value) {
      this._a = value;
    }
    get b() {
      return this._b;
    }
    set b(value) {
      this._b = value;
    }
    get idx() {
      return this._idx;
    }
    set idx(value) {
      this._idx = value;
    }
    get upperIndices() {
      return this._upperIndices;
    }
    set upperIndices(value) {
      this._upperIndices = value;
    }
    get lowerIndices() {
      return this._lowerIndices;
    }
    set lowerIndices(value) {
      this._lowerIndices = value;
    }
  };
  var Event = class _Event {
    constructor(a, b, type, idx) {
      this._a = a;
      this._b = b;
      this._type = type;
      this._idx = idx;
    }
    get a() {
      return this._a;
    }
    set a(value) {
      this._a = value;
    }
    get b() {
      return this._b;
    }
    set b(value) {
      this._b = value;
    }
    get type() {
      return this._type;
    }
    set type(value) {
      this._type = value;
    }
    get idx() {
      return this._idx;
    }
    set idx(value) {
      this._idx = value;
    }
    createSwaped() {
      const a = this.a;
      const b = this._b;
      return new _Event([...b], [...a], this.type, this.idx);
    }
  };
  function findSplit(hull, edgeEvent) {
    let d = void 0;
    if (edgeEvent.a[0] >= hull.a[0]) {
      d = orient(hull.a, hull.b, edgeEvent.a);
    } else {
      d = orient(edgeEvent.b, edgeEvent.a, hull.a);
    }
    if (d) {
      return d;
    }
    if (edgeEvent.b[0] < hull.b[0]) {
      d = orient(hull.a, hull.b, edgeEvent.b);
    } else {
      d = orient(edgeEvent.b, edgeEvent.a, hull.b);
    }
    return d || hull.idx - edgeEvent.idx;
  }
  function queryLtHullsByOrient(hulls, point) {
    for (let i = hulls.length - 1; i >= 0; i--) {
      const hull = hulls[i];
      if (orient(hull.a, hull.b, point) < 0) {
        return i;
      }
    }
    return -1;
  }
  function queryLeHullsByFindSplit(hulls, edgeEvent) {
    for (let i = hulls.length - 1; i >= 0; i--) {
      const hull = hulls[i];
      if (findSplit(hull, edgeEvent) <= 0) {
        return i;
      }
    }
    return -1;
  }
  function queryEqHullsByFindSplit(hulls, edgeEvent) {
    for (let i = hulls.length - 1; i >= 0; i--) {
      const hull = hulls[i];
      if (findSplit(hull, edgeEvent) === 0) {
        return i;
      }
    }
    return -1;
  }
  function queryGtHullsByOrient(hulls, point) {
    for (let i = 0; i < hulls.length; i++) {
      const hull = hulls[i];
      if (orient(hull.a, hull.b, point) > 0) {
        return i;
      }
    }
    return hulls.length;
  }
  function addPoint(cells, hulls, points, pointEvent) {
    const p = pointEvent.a;
    const pointEventIndex = pointEvent.idx;
    const lo = queryLtHullsByOrient(hulls, p);
    const hi = queryGtHullsByOrient(hulls, p);
    for (let i = lo; i < hi; i++) {
      let m = 0;
      const upperIndices = hulls[i].upperIndices;
      m = upperIndices.length;
      while (m > 1 && orient(points[upperIndices[m - 2]], points[upperIndices[m - 1]], p) < 0) {
        cells.push([upperIndices[m - 2], upperIndices[m - 1], pointEventIndex]);
        m -= 1;
      }
      upperIndices.length = m;
      upperIndices.push(pointEventIndex);
      const lowerIndices = hulls[i].lowerIndices;
      m = lowerIndices.length;
      while (m > 1 && orient(points[lowerIndices[m - 2]], points[lowerIndices[m - 1]], p) > 0) {
        cells.push([lowerIndices[m - 1], lowerIndices[m - 2], pointEventIndex]);
        m -= 1;
      }
      lowerIndices.length = m;
      lowerIndices.push(pointEventIndex);
    }
  }
  function splitHulls(hulls, edgeEvent) {
    let splitIdx = queryLeHullsByFindSplit(hulls, edgeEvent);
    let hull = hulls[splitIdx];
    let upperIndices = hull.upperIndices;
    let lastIndice = upperIndices[upperIndices.length - 1];
    hulls.splice(splitIdx + 1, 0, new PartialHull(edgeEvent.a, edgeEvent.b, edgeEvent.idx, [...upperIndices], [lastIndice]));
    hull.upperIndices = [lastIndice];
  }
  function mergeHulls(hulls, edgeEvent) {
    const sw = edgeEvent.createSwaped();
    let mergeIdx = queryEqHullsByFindSplit(hulls, sw);
    let nowHull = hulls[mergeIdx];
    let prevHull = hulls[mergeIdx - 1];
    hulls.splice(mergeIdx, 1);
    prevHull.upperIndices = nowHull.upperIndices;
  }
  function monotoneTriangulates(points, edges) {
    const events = [];
    for (let i = 0; i < points.length; i++) {
      events.push(new Event(points[i], null, 0 /* POINT */, i));
    }
    for (let i = 0; i < edges.length; i++) {
      const p0 = points[edges[i][0]];
      const p1 = points[edges[i][1]];
      if (p0[0] < p1[0]) {
        events.push(new Event(p0, p1, 2 /* START */, i));
        events.push(new Event(p1, p0, 1 /* END */, i));
      } else if (p0[0] > p1[0]) {
        events.push(new Event(p1, p0, 2 /* START */, i));
        events.push(new Event(p0, p1, 1 /* END */, i));
      }
    }
    events.sort((a, b) => {
      let d = a.a[0] - b.a[0] || a.a[1] - b.a[1] || a.type - b.type;
      if (d) {
        return d;
      }
      if (a.type !== 0 /* POINT */) {
        d = orient(a.a, a.b, b.b);
        if (d) {
          return d;
        }
      }
      return a.idx - b.idx;
    });
    const minX = events[0].a[0] - (1 + Math.abs(events[0].a[0])) * Math.pow(2, -52);
    const hulls = [new PartialHull([minX, 1], [minX, 0], -1, [], [])];
    const cells = [];
    for (let i = 0, numEvents = events.length; i < numEvents; i++) {
      if (events[i].type === 0 /* POINT */) {
        addPoint(cells, hulls, points, events[i]);
        continue;
      }
      if (events[i].type === 2 /* START */) {
        splitHulls(hulls, events[i]);
        continue;
      }
      if (events[i].type === 1 /* END */) {
        mergeHulls(hulls, events[i]);
        continue;
      }
    }
    return cells;
  }

  // src/engine/modules/d2Canvas2Svg/cdt2ds/Cdt2ds.ts
  var Cdt2ds = class {
    static process(points, edges) {
      const cells = monotoneTriangulates(points, edges);
      const triangulation = createTriangulation(points.length, edges);
      for (let i = 0; i < cells.length; i++) {
        triangulation.addTriangle(cells[i][0], cells[i][1], cells[i][2]);
      }
      return createCells(triangulation);
    }
  };

  // src/engine/modules/d2Canvas2Svg/pixelFilter/PixelFilter.ts
  var PixelFilter = class {
    constructor(type) {
      this._type = type;
    }
    process(pixels) {
      try {
        if (this._type === "TRIANGLE" /* TRIANGLE */) {
          return {
            triangles: this.covertPixel2Triangles(pixels, true)
          };
        }
        return {
          graphs: this.covertPixel2GraphLines(pixels, true)
        };
      } catch (e) {
        console.error(e);
      }
      return {
        triangles: null,
        graphs: null
      };
    }
    covertPixel2GraphLines(pixels, simplify) {
      const surface = SurfaceNets.process(pixels, 128);
      const contour = { edges: null, positions: null };
      if (simplify) {
        const { edges, positions } = Simplifys.proecss(surface.cells, surface.positions, 0.25);
        contour.edges = edges;
        contour.positions = positions;
      } else {
        contour.edges = surface.cells;
        contour.positions = surface.positions;
      }
      return {
        edges: contour.edges,
        positions: contour.positions
      };
    }
    covertPixel2Triangles(pixels, simplify = true) {
      const surface = SurfaceNets.process(pixels, 128);
      const contour = { edges: [], positions: [] };
      if (simplify) {
        const { edges, positions } = Simplifys.proecss(surface.cells, surface.positions, 0.25);
        contour.edges = edges;
        contour.positions = positions;
      } else {
        contour.edges = surface.cells;
        contour.positions = surface.positions;
      }
      const indices = Cdt2ds.process(contour.positions, contour.edges);
      return {
        indices,
        positions: contour.positions
      };
    }
  };

  // src/worker/d2CanvasPixel2Svg/CacheData.ts
  var taskDataList = [];

  // src/worker/d2CanvasPixel2Svg/D2CanvasPixel2Svg.ts
  var D2CANVAS_PIXEL2SVG_WORKER_ID = `VectorizeText`;
  var POINT_ARRAY_OCCUPY_SIZE = 2;
  self.onmessage = (event) => {
    const payload = event.data;
    if (!payload.ID || payload.ID !== D2CANVAS_PIXEL2SVG_WORKER_ID) {
      return;
    }
    taskDataList.push(__spreadProps(__spreadValues({}, payload.data), { isRuning: false, pixelFilter: null }));
    main();
  };
  function main() {
    consumeTask();
  }
  function consumeTask() {
    if (taskDataList.length <= 0) {
      return;
    }
    const taskDataItem = taskDataList.shift();
    taskDataItem.isRuning = true;
    if (!taskDataItem.pixelFilter) {
      taskDataItem.pixelFilter = new PixelFilter(taskDataItem.pixelFilterType);
    }
    const { textArray, textPolygonBbox2Arrays, textCanvasRenderMetricsArray, imageCutArray, imagePixelArray, vertexDataArray } = taskDataItem;
    for (let rowIndex = 0; rowIndex < textArray.length; rowIndex++) {
      const colSize = textArray[rowIndex].length;
      for (let colIndex = 0; colIndex < colSize; colIndex++) {
        if (imagePixelArray[rowIndex][colIndex]) {
          const cutValueOfCell = imageCutArray[rowIndex][colIndex];
          const pixels = getPixels(imagePixelArray[rowIndex][colIndex], cutValueOfCell.xCut, cutValueOfCell.yCut);
          const pixelProgressResult = taskDataItem.pixelFilter.process(pixels);
          const { templateTriangleVertexData, templatePolygonBbox2 } = flatAllTrianglesVertexData(pixelProgressResult.triangles);
          vertexDataArray[rowIndex][colIndex] = templateTriangleVertexData;
          textPolygonBbox2Arrays[rowIndex][colIndex] = templatePolygonBbox2;
          imagePixelArray[rowIndex][colIndex] = void 0;
          imageCutArray[rowIndex][colIndex] = void 0;
          continue;
        }
      }
    }
    self.postMessage({
      ID: D2CANVAS_PIXEL2SVG_WORKER_ID,
      data: {
        taskId: taskDataItem.taskId,
        textStrId: taskDataItem.textStrId,
        optional: taskDataItem.optional,
        pixelFilterType: taskDataItem.pixelFilterType,
        profile: taskDataItem.profile,
        textArray,
        textPolygonBbox2Arrays,
        textCanvasRenderMetricsArray,
        vertexDataArray
      }
    });
    consumeTask();
  }
  function getPixels(imageData, xCut, yCut) {
    const pixels = createCanvasImageDataArray(imageData, [yCut, xCut, 4]);
    return pixels.pick(-1, -1, 0).transpose(1, 0);
  }
  function flatAllTrianglesVertexData(sourceTriangles) {
    const templateTriangleVertexData = {
      positions: [],
      indices: []
    };
    const allPositions = [];
    for (let i = 0; i < sourceTriangles.positions.length; i++) {
      for (let j = 0; j < sourceTriangles.positions[i].length; j++) {
        templateTriangleVertexData.positions.push(sourceTriangles.positions[i][j]);
        allPositions.push(sourceTriangles.positions[i][j]);
      }
    }
    for (let i = 0; i < sourceTriangles.indices.length; i++) {
      for (let j = 0; j < sourceTriangles.indices[i].length; j++) {
        templateTriangleVertexData.indices.push(sourceTriangles.indices[i][j]);
      }
    }
    let minX = 0;
    let minY = 0;
    let maxX = 0;
    let maxY = 0;
    for (let i = 0; i < allPositions.length; i += POINT_ARRAY_OCCUPY_SIZE) {
      const x = allPositions[i];
      const y = allPositions[i + 1];
      if (i === 0) {
        maxX = minX = x;
        maxY = minY = y;
      }
      minX = minX >= x ? x : minX;
      maxX = maxX <= x ? x : maxX;
      minY = minY >= y ? y : minY;
      maxY = maxY <= y ? y : maxY;
    }
    return {
      templateTriangleVertexData,
      templatePolygonBbox2: {
        minX,
        maxX,
        minY,
        maxY
      }
    };
  }
})();
//# sourceMappingURL=worker/d2CanvasPixel2Svg/D2CanvasPixel2Svg.js.map
