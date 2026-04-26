"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
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
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/engine/utils/Utils.ts
  function getRandomInArea(min = 0, max = Number.MAX_SAFE_INTEGER) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getHashIden(length = 36) {
    const s = [];
    const HEX_DIGITS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < length; i++) {
      s[i] = HEX_DIGITS.substr(Math.floor(Math.random() * 16), 1);
    }
    s[14] && (s[14] = String(getRandomInArea(1, 9)));
    s[19] && (s[19] = HEX_DIGITS.substr(+s[19] & 3 | 8, 1));
    s[8] && (s[8] = String(getRandomInArea(1, 9)));
    s[13] && (s[13] = String(getRandomInArea(1, 9)));
    s[18] && (s[18] = String(getRandomInArea(1, 9)));
    s[23] && (s[23] = String(getRandomInArea(1, 9)));
    return s.join("");
  }
  function arrayCopy(sourceArray, sourceIndex, resultArray, resultIndex, copyLength) {
    if (sourceArray.length >= sourceIndex + copyLength && resultArray.length >= resultIndex + copyLength) {
      while (copyLength-- > 0) {
        resultArray[resultIndex++] = sourceArray[sourceIndex++];
      }
      return;
    }
    throw new Error("cannot read array out of range.");
  }
  function isSupportWebGPU() {
    return __async(this, null, function* () {
      try {
        if (!navigator.gpu) {
          throw new Error(`navigator.gpu is undefined.`);
        }
        const adapter = yield navigator.gpu.requestAdapter();
        const device = yield adapter.requestDevice();
        if (device) {
          return true;
        }
      } catch (e) {
        console.error(`The current environment does not support WebGPU: ${e}`);
      }
      return false;
    });
  }
  function format2Binary(num) {
    const str = num.toString(2);
    const leftPad = 32 - str.length;
    if (leftPad > 0) {
      return "0".repeat(leftPad) + str;
    }
    return str;
  }
  function isFloatEqual(a, b, precise = 1e-10) {
    const d = a - b;
    return (d > 0 ? d : -d) < precise;
  }
  function nextFrameTick(callback, delay = 0) {
    window.setTimeout(() => {
      window.requestAnimationFrame((timeStamp) => {
        callback(timeStamp);
      });
    }, delay);
  }

  // src/tool/GlobalIdenManager.ts
  var GlobalIdenManager = class {
    constructor() {
      this._commandIdenPrefix = `cmd_`;
      this._drawLayerIdenPrefix = `draw_`;
      this._elementIdenPrefix = `elem_`;
      this._componentIdenPrefix = `copt_`;
      this._eventHandlerIdenPrefix = `event`;
    }
    getCommandIden() {
      return this._commandIdenPrefix + this.getHashIden(12);
    }
    getDrawLayerIden() {
      return this._drawLayerIdenPrefix + this.getHashIden(12);
    }
    getElementIden() {
      return this._elementIdenPrefix + this.getHashIden(12);
    }
    getComponentIden() {
      return this._componentIdenPrefix + this.getHashIden(12);
    }
    getEventHandlerIden() {
      return this._eventHandlerIdenPrefix + +this.getHashIden(12);
    }
    getHashIden(length = 18) {
      return getHashIden(length);
    }
  };

  // src/config/CommandEnum.ts
  var EDrawD2ToolCommand = /* @__PURE__ */ ((EDrawD2ToolCommand2) => {
    EDrawD2ToolCommand2["BLANK_DROP"] = "BLANK_DROP";
    EDrawD2ToolCommand2["D2LINE"] = "D2LINE";
    EDrawD2ToolCommand2["D2CIRCLE"] = "D2CIRCLE";
    EDrawD2ToolCommand2["D2POINT"] = "D2POINT";
    EDrawD2ToolCommand2["D2ARC"] = "D2ARC";
    EDrawD2ToolCommand2["D2TEXT"] = "D2TEXT";
    EDrawD2ToolCommand2["D2IMAGE"] = "D2IMAGE";
    EDrawD2ToolCommand2["D2RECT"] = "D2RECT";
    return EDrawD2ToolCommand2;
  })(EDrawD2ToolCommand || {});

  // src/controller/BaseInterface.ts
  var BaseInterface = class {
  };

  // src/manager/BaseManage.ts
  var BaseManager = class extends BaseInterface {
    constructor() {
      super();
      this._items = /* @__PURE__ */ new Map();
    }
    get items() {
      return this._items;
    }
    set items(value) {
      this._items = value;
    }
    getAllItems() {
      const allItems = new Array(this.items.size);
      const items = this.items.values();
      let i = 0;
      for (let item of items) {
        allItems[i++] = item;
      }
      return allItems;
    }
    getItemById(gId) {
      return this.items.get(gId);
    }
    quit() {
      if (this._items) {
        this._items.clear();
        this._items = void 0;
      }
    }
  };

  // src/config/D2ElementProfile.ts
  var ED2ElementType = /* @__PURE__ */ ((ED2ElementType3) => {
    ED2ElementType3["D2Point"] = "D2Point";
    ED2ElementType3["D2AssistLine"] = "D2AssistLine";
    ED2ElementType3["D2AssistRect"] = "D2AssistRect";
    ED2ElementType3["D2Line"] = "D2Line";
    ED2ElementType3["D2Circle"] = "D2Circle";
    ED2ElementType3["D2Arc"] = "D2Arc";
    ED2ElementType3["D2Text"] = "D2Text";
    ED2ElementType3["D2Image"] = "D2Image";
    ED2ElementType3["D2Rect"] = "D2Rect";
    return ED2ElementType3;
  })(ED2ElementType || {});

  // src/engine/math/Doublekit.ts
  var DoubleKit = class {
    static regular(dis = 0) {
      return Math.round(dis * this.precision) / this.precision;
    }
    static eq(a, b, eps = this.eps1) {
      return Math.abs(a - b) <= eps;
    }
    static neq(a, b, eps = this.eps1) {
      return Math.abs(a - b) > eps;
    }
    static less(a, b, eps = this.eps1) {
      return a - b < -eps;
    }
    static lesseq(a, b, eps = this.eps1) {
      return a - b <= -eps;
    }
    static greater(a, b, eps = this.eps1) {
      return a - b > eps;
    }
    static greatereq(a, b, eps = this.eps1) {
      return a - b >= eps;
    }
    static sqrt(dis) {
      if (Math.abs(dis) <= 1e-10) {
        return 0;
      }
      return Math.sqrt(dis);
    }
    static sortAsc(a, b) {
      return a - b;
    }
    static sortDesc(a, b) {
      return b - a;
    }
  };
  DoubleKit.eps1 = 1e-8;
  DoubleKit.eps2 = 1e-6;
  DoubleKit.precision = 1e8;

  // src/engine/algorithm/geometry/bbox/BBox2.ts
  var BBox2Fac = class {
    constructor() {
      this._minX = Number.POSITIVE_INFINITY;
      this._maxX = Number.NEGATIVE_INFINITY;
      this._minY = Number.POSITIVE_INFINITY;
      this._maxY = Number.NEGATIVE_INFINITY;
    }
    extendByBBox2(bbox2) {
      this._minX = Math.min(this._minX, bbox2.minX);
      this._maxX = Math.max(this._maxX, bbox2.maxX);
      this._minY = Math.min(this._minY, bbox2.minY);
      this._maxY = Math.max(this._maxY, bbox2.maxY);
      return this;
    }
    extendByVector2(point) {
      this._minX = Math.min(this._minX, point.x);
      this._maxX = Math.max(this._maxX, point.x);
      this._minY = Math.min(this._minY, point.y);
      this._maxY = Math.max(this._maxY, point.y);
      return this;
    }
    extendByValue(x, y) {
      this._minX = Math.min(this._minX, x);
      this._maxX = Math.max(this._maxX, x);
      this._minY = Math.min(this._minY, y);
      this._maxY = Math.max(this._maxY, y);
      return this;
    }
    extendByOffset(offset) {
      if (offset < 0) {
        const s = offset * 2;
        if (s < this._minX - this._maxX || s < this._minY - this._maxY) {
          throw new Error(`beyond boundary limits.`);
        }
      }
      this._minX -= offset;
      this._maxX += offset;
      this._minY -= offset;
      this._maxY += offset;
      return this;
    }
    build() {
      if (!this.isValid()) {
        return new BBox2(0, 0, 0, 0);
      }
      return new BBox2(this._minX, this._maxX, this._minY, this._maxY);
    }
    isValid() {
      return Number.isFinite(this._minX) && Number.isFinite(this._maxX) && Number.isFinite(this._minY) && Number.isFinite(this._maxY);
    }
  };
  var BBox2 = class _BBox2 {
    static extend1(bbox2, point) {
      if (!bbox2) {
        return new _BBox2(point.x, point.x, point.y, point.y);
      }
      const minX = Math.min(bbox2.minX, point.x);
      const maxX = Math.max(bbox2.maxX, point.x);
      const minY = Math.min(bbox2.minY, point.y);
      const maxY = Math.max(bbox2.maxY, point.y);
      return new _BBox2(minX, maxX, minY, maxY);
    }
    static extend2(bbox2_1, bbox2_2) {
      const minX = Math.min(bbox2_1.minX, bbox2_2.minX);
      const maxX = Math.max(bbox2_1.maxX, bbox2_2.maxX);
      const minY = Math.min(bbox2_1.minY, bbox2_2.minY);
      const maxY = Math.max(bbox2_1.maxY, bbox2_2.maxY);
      return new _BBox2(minX, maxX, minY, maxY);
    }
    static extend3(point1, point2) {
      const minX = Math.min(point1.x, point2.x);
      const maxX = Math.max(point1.x, point2.x);
      const minY = Math.min(point1.y, point2.y);
      const maxY = Math.max(point1.y, point2.y);
      return new _BBox2(minX, maxX, minY, maxY);
    }
    static extend4(center, width, height) {
      const p1 = center.add(new Vector2(-width / 2, -height / 2));
      const p2 = center.add(new Vector2(width / 2, height / 2));
      return _BBox2.extend3(p1, p2);
    }
    static isValid(bbox2) {
      return Number.isFinite(bbox2.minX) && Number.isFinite(bbox2.minY) && Number.isFinite(bbox2.maxX) && Number.isFinite(bbox2.maxY);
    }
    static createByJSONData(jsonData) {
      return new _BBox2(jsonData.minX, jsonData.minY, jsonData.maxX, jsonData.maxY);
    }
    constructor(minX, minY, maxX, maxY) {
      this._data = new Float64Array(4);
      if (minX > maxX) {
        minX = [maxX, maxX = minX][0];
      }
      if (minY > maxY) {
        minY = [maxY, maxY = minY][0];
      }
      this._minX = minX;
      this._minY = minY;
      this._maxX = maxX;
      this._maxY = maxY;
    }
    get minX() {
      return this._minX;
    }
    set minX(value) {
      this._minX = value;
    }
    get minY() {
      return this._minY;
    }
    set minY(value) {
      this._minX = value;
    }
    get maxX() {
      return this._maxX;
    }
    set maxX(value) {
      this._maxX = value;
    }
    get maxY() {
      return this._maxY;
    }
    set maxY(value) {
      this._maxY = value;
    }
    get width() {
      return this.maxX - this.minX;
    }
    get height() {
      return this.maxY - this.minY;
    }
    get area() {
      return this.width * this.height;
    }
    get leftUp() {
      return new Vector2(this.minX, this.maxY);
    }
    get rightUp() {
      return new Vector2(this.maxX, this.maxY);
    }
    get leftDown() {
      return new Vector2(this.minX, this.minY);
    }
    get rightDown() {
      return new Vector2(this.maxX, this.minY);
    }
    get CenterPoint() {
      return new Vector2(this.maxX - (this.maxX - this.minX) / 2, this.maxY - (this.maxY - this.minY) / 2);
    }
    get data() {
      this._data[0] = this.minX;
      this._data[1] = this.minY;
      this._data[2] = this.maxX;
      this._data[3] = this.maxY;
      return this._data;
    }
    isContainsPoint(vector2) {
      return this.isContainsX(vector2.x) && this.isContainsY(vector2.y);
    }
    isContainsValue(x, y) {
      if (Number.isFinite(x) && Number.isFinite(y)) {
        return this.isContainsPoint(new Vector2(x, y));
      }
      return false;
    }
    isConatinsBBox2(bbox2) {
      return this.maxX >= bbox2.maxX && this.minX <= bbox2.minX && this.maxY >= bbox2.maxY && this.minY <= bbox2.minY;
    }
    isBeWrappedByBBox2(bbox2) {
      return this.minX >= bbox2.minX && this.maxX <= bbox2.maxX && this.minY >= bbox2.minY && this.maxY <= bbox2.maxY;
    }
    equals(bbox2) {
      if (this.minX === bbox2.minX && this.minY === bbox2.minY && this.maxX === bbox2.maxX && this.maxY === bbox2.maxY) {
        return true;
      }
      return false;
    }
    isIntersect(bbox2) {
      const _minX = Math.max(this.minX, bbox2.minX);
      const _maxX = Math.max(this.maxX, bbox2.maxX);
      if (_minX > _maxX) {
        return false;
      }
      const _minY = Math.max(this.minY, bbox2.minY);
      const _maxY = Math.max(this.maxY, bbox2.maxY);
      if (_minY > _maxY) {
        return false;
      }
      return true;
    }
    getIntersection(bbox2) {
      let [minX, maxX] = [Math.max(this.minX, bbox2.minX), Math.min(this.maxX, bbox2.maxX)];
      if (DoubleKit.greater(minX, maxX)) {
        return null;
      }
      if (minX > maxX) {
        maxX = minX;
      }
      let [minY, maxY] = [Math.max(this.minY, bbox2.minY), Math.min(this.maxY, bbox2.maxY)];
      if (DoubleKit.greater(minY, maxY)) {
        return null;
      }
      if (minY > maxY) {
        maxY = minY;
      }
      return new _BBox2(minX, minY, maxX, maxY);
    }
    extendByDist(dist) {
      if (dist >= 0) {
        return new _BBox2(this.minX - dist, this.minY - dist, this.maxX + dist, this.maxY + dist);
      }
      const minSize = Math.min(this.maxX - this.minX, this.maxY - this.minY);
      const iDist = Math.abs(dist <= -minSize / 2 ? -minSize / 2 : dist);
      return new _BBox2(this.minX + iDist, this.minY + iDist, this.maxX - iDist, this.maxY - iDist);
    }
    isContainsX(x) {
      return x >= this.minX && x <= this.maxX;
    }
    isContainsY(y) {
      return y >= this.minY && y <= this.maxY;
    }
    zoom(ratio) {
      let w = this.width;
      let h = this.height;
      let c = this.CenterPoint;
      if (ratio !== 0) {
        w /= ratio / 2;
        h /= ratio / 2;
      }
      return new _BBox2(c.x - w, c.x + w, c.y - h, c.y + h);
    }
    reset() {
      this.minX = Number.POSITIVE_INFINITY;
      this.maxX = Number.NEGATIVE_INFINITY;
      this.minY = Number.POSITIVE_INFINITY;
      this.maxY = Number.NEGATIVE_INFINITY;
    }
    toString() {
      return `BBox2 (${this.minX}, ${this.maxX}, ${this.minY}, ${this.maxY})`;
    }
    toJSON() {
      return {
        minX: this.minX,
        minY: this.minY,
        maxX: this.maxX,
        maxY: this.maxY
      };
    }
  };

  // src/engine/math/Calculation.ts
  function toFixed(number, digit = 2, fixedDecimal = true) {
    if (typeof number !== "number") {
      number = +number;
    }
    if (isNaN(number)) {
      throw new Error("nedd number or <number>string");
    }
    digit = digit | 0;
    if (digit <= 0 || !number && !fixedDecimal) {
      return String(Math.round(number));
    }
    const p = [1, 10, 100, 1e3, 1e4][digit] || Math.pow(10, digit) || 10;
    if (fixedDecimal) {
      const sign = number < 0 ? "-" : "";
      number = number < 0 ? -number : number;
      number = Math.round(number * p) + "";
      while (number.length <= digit) {
        number = "0" + number;
      }
      number = number.slice(0, -digit) + "." + number.slice(-digit);
      return sign + number;
    }
    return String(Math.round(number * p + 1e-10) / p);
  }
  function toFix(number, precision = 1) {
    const ratio = Math.pow(10, precision);
    return Math.round(number * ratio + 1e-10) / ratio;
  }
  function px2mm(pxValue, DPI) {
    if (typeof pxValue === "undefined" || isNaN(pxValue)) {
      return 0;
    }
    return pxValue * 25.4 / DPI;
  }
  function mm2px(mmValue, DPI) {
    if (typeof mmValue === "undefined" || isNaN(mmValue)) {
      return 0;
    }
    return mmValue * DPI / 25.4;
  }

  // src/engine/math/Decimals.ts
  var Decimals = class _Decimals {
    static equalsFloat(num1, num2, places = 0) {
      const delta = Math.abs(num1 - num2);
      if (places > 5 && delta > 1e-5) {
        return false;
      }
      if (isNaN(places) && delta > 1e-8) {
        return false;
      }
      if (delta < 1e-13) {
        return true;
      }
      let min = Math.min(_Decimals.getDecimalPlaces(num1), _Decimals.getDecimalPlaces(num2));
      if (min < 10) {
        min = 10;
      }
      if (!isNaN(places)) {
        min = Math.min(min, places);
      }
      return toFixed(num1, min) === toFixed(num2, min);
    }
    static getDecimalPlaces(num) {
      let di = 0;
      let dl = 0;
      if (num > 0) {
        di = num - Math.floor(num);
      } else {
        di = num - Math.ceil(num);
      }
      dl = String(di).length;
      if (dl > 2) {
        return dl - 2;
      }
      return 0;
    }
  };

  // src/engine/algorithm/geometry/vector/Vector.ts
  var Vector = class {
    /**
     * 计算由水平线段 deltaX 和垂直线段 deltaY 所构成的斜边长度
     */
    static hypot(deltaX, deltaY) {
      let [xs, ys] = [Math.abs(deltaX), Math.abs(deltaY)];
      if (ys > xs) {
        const swap = ys;
        ys = xs;
        xs = swap;
      }
      if (xs === 0) {
        return ys;
      }
      const t = ys / xs;
      return xs * Math.sqrt(1 + t * t);
    }
    static distance(p1, p2) {
      return this.hypot(p2.x - p1.x, p2.y - p1.y);
    }
  };

  // src/engine/algorithm/geometry/vector/Vector3.ts
  var VEN$VECTOR3_ORIGIN_DATA = [0, 0, 0];
  var _Vector3 = class _Vector3 extends Vector {
    static createByJSONData(jsonData) {
      return new _Vector3(jsonData.x, jsonData.y, jsonData.z);
    }
    static createByArray(array) {
      return new _Vector3(array[0] || 0, array[1] || 0, array[2] || 0);
    }
    constructor(x = VEN$VECTOR3_ORIGIN_DATA[0], y = VEN$VECTOR3_ORIGIN_DATA[1], z = VEN$VECTOR3_ORIGIN_DATA[2]) {
      super();
      this._x = x;
      this._y = y;
      this._z = z;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
    }
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
    }
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
    }
    /**
     * 向量长度
     */
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    /**
     * 向量副本
     */
    copy() {
      return new _Vector3(this.x, this.y, this.z);
    }
    /**
     * 向量与向量相加
     */
    add(vector3) {
      return new _Vector3(this.x + vector3.x, this.y + vector3.y, this.z + vector3.z);
    }
    /**
     * 向量与标量相加
     */
    addScalar(x, y = x, z = y) {
      return new _Vector3(this.x + x, this.y + y, this.z + z);
    }
    /**
     * 向量与向量相减
     */
    sub(vector3) {
      return new _Vector3(this.x - vector3.x, this.y - vector3.y, this.z - vector3.z);
    }
    /**
     * 向量与标量相减
     */
    subScalar(x, y = x, z = y) {
      return new _Vector3(this.x - x, this.y - y, this.z - z);
    }
    /**
     * 向量缩放
     */
    scale(x = 0, y = 0, z = 0) {
      return new _Vector3(this.x * x, this.y * y, this.z * z);
    }
    /**
     * 向量与标量的乘积
     */
    mul(x = 0, y = x, z = y) {
      return this.scale(x, y, z);
    }
    /**
     * 向量与向量叉乘
     */
    cross(vector3) {
      const x = this.y * vector3.z - this.z * vector3.y;
      const y = this.z * vector3.x - this.x * vector3.z;
      const z = this.x * vector3.y - this.y * vector3.x;
      return new _Vector3(x, y, z);
    }
    /**
     * 向量与向量点乘
     */
    dot(vector3) {
      return this.x * vector3.x + this.y * vector3.y + this.z * vector3.z;
    }
    /**
     * 应用 matrix4
     */
    multiplyMatrix4(matrix4) {
      const x = this.x * matrix4.data[0] + this.y * matrix4.data[4] + this.z * matrix4.data[8] + matrix4.data[12];
      const y = this.x * matrix4.data[1] + this.y * matrix4.data[5] + this.z * matrix4.data[9] + matrix4.data[13];
      const z = this.x * matrix4.data[2] + this.y * matrix4.data[6] + this.z * matrix4.data[10] + matrix4.data[14];
      const w = this.x * matrix4.data[3] + this.y * matrix4.data[7] + this.z * matrix4.data[11] + matrix4.data[15];
      return new _Vector3(x / w, y / w, z / w);
    }
    toString() {
      return `Vector3 (${this.x}, ${this.y}, ${this.z})`;
    }
    toJSON() {
      return {
        x: this._x,
        y: this._y,
        z: this._z
      };
    }
    /**
     * 向量的单位向量
     */
    normalize() {
      if (this.x === 0 && this.y === 0 && this.z === 0) {
        return new _Vector3(0, 0, 0);
      }
      const sx = this.x / this.length;
      const sy = this.y / this.length;
      const sz = this.z / this.length;
      return new _Vector3(sx, sy, sz);
    }
    toArray() {
      return [this.x, this.y, this.z];
    }
    toVector2() {
      return new Vector2(this.x, this.y);
    }
  };
  _Vector3.ORIGIN = new _Vector3();
  _Vector3.X_INIT_UNIT_VERCTOR2 = new _Vector3(1, 0, 0);
  _Vector3.Y_INIT_UNIT_VERCTOR2 = new _Vector3(0, 1, 0);
  _Vector3.Z_INIT_UNIT_VERCTOR2 = new _Vector3(0, 0, 1);
  var Vector3 = _Vector3;

  // src/engine/algorithm/geometry/vector/Vector2.ts
  var VEN$VECTOR2_ORIGIN_DATA = [0, 0];
  var _Vector2 = class _Vector2 extends Vector {
    /**
     * 判断两个向量的斜率是否相同
     */
    static isSameSlope(vector2_1, vector2_2) {
      if (vector2_1.x === 0 && vector2_2.x !== 0 || vector2_1.x !== 0 && vector2_2.x === 0) {
        return false;
      }
      if (vector2_1.x === 0 && vector2_2.x === 0) {
        return true;
      }
      const slope1 = vector2_1.y / vector2_1.x;
      const slope2 = vector2_2.y / vector2_2.x;
      return isFloatEqual(slope1, slope2, Math.sin(Math.PI / 180));
    }
    /**
     * 判断两个向量是否平行
     */
    static isParallel(vector2_1, vector2_2, eps = 1e-8) {
      return Math.abs(vector2_1.cross(vector2_2)) <= eps;
    }
    /**
     * 判断两个向量是否垂直
     */
    static isVertical(vector2_1, vector2_2, eps = 1e-8) {
      return Math.abs(vector2_1.dot(vector2_2)) <= eps;
    }
    /**
     * 计算弧度 radian 对应的单位向量
     */
    static getNorVector2ByRadian(radian) {
      return new _Vector2(Math.cos(radian), Math.sin(radian));
    }
    /**
     * 计算 AB 向量的弧度
     */
    static getRadianByVector2(vector1, vector2) {
      return Math.atan2(vector2.y - vector1.y, vector2.x - vector1.x);
    }
    static createByJSONData(jsonData) {
      return new _Vector2(jsonData.x, jsonData.y);
    }
    static createByArray(array) {
      return new _Vector2(array[0] || 0, array[1] || 0);
    }
    static hypot(x, y = x) {
      let _x = Math.abs(x);
      let _y = Math.abs(y);
      if (_y > _x) {
        let tmp = _y;
        _y = _x;
        _x = tmp;
      }
      if (_x === 0) {
        return _y;
      }
      let t = _y / _x;
      return _x * Math.sqrt(1 + t * t);
    }
    /**
     * 计算两向量组成的夹角对应的弧度值
     */
    static calculateRadianCCWByTwoVector2(vector2_1, vector2_2) {
      const { x: x1, y: y1 } = vector2_1;
      const { x: x2, y: y2 } = vector2_2;
      const dot = x1 * x2 + y1 * y2;
      const cross = x1 * y2 - y1 * x2;
      return Math.atan2(cross, dot);
    }
    /**
     * 计算某个初始弧度在经过特定矩阵变换后的弧度
     */
    static caculateRadian(radian, matrix4) {
      const cos = Math.cos(radian);
      const sin = Math.sin(radian);
      const x = cos * matrix4.data[0] + sin * matrix4.data[4];
      const y = cos * matrix4.data[1] + sin * matrix4.data[5];
      const vector2 = new _Vector2(x, y).normalize();
      return Math.atan2(vector2.x, vector2.y);
    }
    /**
     * 计算某个弧度的单位向量
     */
    static getInitVector2ByRadian(radian) {
      return new _Vector2(Math.cos(radian), Math.sin(radian));
    }
    static distanceSquare(x1, y1, x2, y2) {
      return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    }
    constructor(x = VEN$VECTOR2_ORIGIN_DATA[0], y = VEN$VECTOR2_ORIGIN_DATA[1]) {
      super();
      this._x = x;
      this._y = y;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
    }
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
    }
    /**
     * 向量长度
     */
    get length() {
      return Math.hypot(this.x, this.y);
    }
    /**
     * 向量弧度方向
     */
    get dir() {
      return Math.atan2(this.y, this.x);
    }
    /**
     * 向量角度方向
     */
    get dirDeg() {
      return Math.atan2(this.y, this.x) * (180 / Math.PI);
    }
    /**
     * 向量副本
     */
    copy() {
      return new _Vector2(this.x, this.y);
    }
    /**
     * 向量与向量相加
     */
    add(vector2) {
      return new _Vector2(this.x + vector2.x, this.y + vector2.y);
    }
    /**
     * 向量与标量相加
     */
    addScalar(x, y = x) {
      return new _Vector2(this.x + x, this.y + y);
    }
    /**
     * 向量与向量相减
     */
    sub(vector2) {
      return new _Vector2(this.x - vector2.x, this.y - vector2.y);
    }
    /**
     * 向量与标量相减
     */
    subScalar(x, y) {
      return new _Vector2(this.x - x, this.y - y);
    }
    /**
     * 向量缩放
     */
    scale(x = 0, y = x) {
      return new _Vector2(this.x * x, this.y * y);
    }
    /**
     * 向量与标量的乘积
     */
    mul(x = 0, y = x) {
      return this.scale(x, y);
    }
    /**
     * 向量与向量叉乘
     */
    cross(vector2) {
      return this.x * vector2.y - vector2.x * this.y;
    }
    /**
     * 向量与向量点乘
     */
    dot(vector2) {
      return this.x * vector2.x + this.y * vector2.y;
    }
    /**
     * 向量 sin 值
     */
    getSin() {
      return this.y / this.length;
    }
    /**
     * 向量 cos 值
     */
    getCos() {
      return this.x / this.length;
    }
    /**
     * 该向量的终点的 bbox2
     */
    getEndDotBbbox2() {
      return new BBox2(this.x, this.x, this.y, this.y);
    }
    /**
     * 设当前向量为 B, 输入向量 A, 计算 AB 向量的弧度
     */
    getRadianByVector2(vector2) {
      return Math.atan2(this.y - vector2.y, this.x - vector2.x);
    }
    /**
     * 计算当前点与输入点 P(vector2) 的距离
     * 		向量与向量 vector2 的距离
     */
    distance(vector2) {
      const deltaX = vector2.x - this._x;
      const deltaY = vector2.y - this._y;
      return Vector.hypot(deltaX, deltaY);
    }
    distanceSquare(vector2) {
      const deltaX = vector2.x - this._x;
      const deltaY = vector2.y - this._y;
      return deltaX * deltaX + deltaY * deltaY;
    }
    /**
     * 向量旋转 - 绕起点旋转 radian(弧度) 后的结果向量
     * 		将向量 v0(x0, y0) 旋转 θ 角度后
     * 			x = x0 * cos(θ) - y0 * sin(θ)
     * 			y = x0 * sin(θ) + x0 * cos(θ)
     */
    rotate(radian) {
      const c = Math.cos(radian);
      const s = Math.sin(radian);
      const [x, y] = [this.x, this.y];
      return new _Vector2(x * c + y * -s, x * s + y * c);
    }
    /**
     * 向量旋转 - 绕向量外定点旋转 radian(弧度) 后的结果向量
     */
    rotateSurround(center2, radian) {
      const cos = Math.cos(radian);
      const sin = Math.sin(radian);
      const dx = this.x - center2.x;
      const dy = this.y - center2.y;
      return new _Vector2(dx * cos + dy * -sin, dx * sin + dy * cos);
    }
    /**
     * 向量关于 origin2 坐标点的中心对称向量
     */
    mirrorSurround(origin2 = _Vector2.ORIGIN) {
      return new _Vector2(2 * origin2.x, 2 * origin2.y - this.y);
    }
    /**
     * 向量关于 origin2 坐标点的 x 坐标值的 X 轴镜像
     */
    mirrorSurroundX(origin2 = _Vector2.ORIGIN) {
      return new _Vector2(this.x, 2 * origin2.y - this.y);
    }
    /**
     * 向量关于 origin2 坐标点的 y 坐标值的 Y 轴镜像
     */
    mirrorSurroundY(origin2 = _Vector2.ORIGIN) {
      return new _Vector2(2 * origin2.x - this.x, this.y);
    }
    /**
     * 应用 matrix3
     */
    multiplyMatrix3(matrix3) {
      const x = this.x * matrix3.data[0] + this.y * matrix3.data[3] + matrix3.data[6];
      const y = this.x * matrix3.data[1] + this.y * matrix3.data[4] + matrix3.data[7];
      return new _Vector2(x, y);
    }
    /**
     * 应用 matrix4
     */
    multiplyMatrix4(matrix4) {
      const x = this.x * matrix4.data[0] + this.y * matrix4.data[4] + matrix4.data[12];
      const y = this.x * matrix4.data[1] + this.y * matrix4.data[5] + matrix4.data[13];
      return new _Vector2(x, y);
    }
    toString() {
      return `Vector2 (${this.x}, ${this.y})`;
    }
    toJSON() {
      return {
        x: this._x,
        y: this._y
      };
    }
    /**
     * 向量的单位向量
     */
    normalize() {
      if (this.x === 0 && this.y === 0) {
        return new _Vector2(0, 0);
      }
      const sx = this.x / this.length;
      const sy = this.y / this.length;
      return new _Vector2(sx, sy);
    }
    /**
     * 判断当前向量与输入向量是否相等
     */
    equalsWithVector2(vector2, place = 0) {
      if (vector2 instanceof _Vector2) {
        return Decimals.equalsFloat(vector2.x, this.x, place) && Decimals.equalsFloat(vector2.y, this.y, place);
      }
      return false;
    }
    /**
     * 判断当前坐标点与输入坐标点是否相等
     */
    equalsWithPoint(p) {
      return DoubleKit.eq(this.x, p.x) && DoubleKit.eq(this.y, p.y);
    }
    /**
     * 获取从 origin 到当前坐标点的延长线上距离当前点 dist 长度的点的坐标
     */
    getPointOnRays(origin, dist) {
      const d = origin.getRadianByVector2(this);
      return new _Vector2(this.x + Math.cos(d) * dist, this.y + Math.sin(d) * dist);
    }
    toArray() {
      return [this.x, this.y];
    }
    toVector3(z = 0) {
      return new Vector3(this.x, this.y, z);
    }
  };
  _Vector2.ORIGIN = new _Vector2();
  _Vector2.X_INIT_UNIT_VERCTOR2 = new _Vector2(1, 0);
  _Vector2.Y_INIT_UNIT_VERCTOR2 = new _Vector2(0, 1);
  var Vector2 = _Vector2;

  // src/engine/common/Color.ts
  var _Color = class _Color {
    static createByHex(hex) {
      const rgbaResult = _Color.hex2Rgba(hex);
      return new _Color(rgbaResult.r, rgbaResult.g, rgbaResult.b, rgbaResult.a);
    }
    static createByValue(r, g, b, a) {
      return new _Color(r, g, b, a);
    }
    static createByAlpha(alpha, color = _Color.WHITE) {
      alpha = alpha <= 0 ? 0 : alpha;
      alpha = alpha >= 1 ? 1 : alpha;
      return new _Color(color.r * 255, color.g * 255, color.b * 255, alpha);
    }
    /**
     * RGBA 转 HEX
     *
     * { r: 255, g: 165, b: 1, a: 255 } => 'ffa501'
     */
    static rgba2Hex(rgba) {
      const toHex = (value) => {
        const hex = Math.max(0, Math.min(255, value)).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
      const hexR = toHex(rgba.r);
      const hexG = toHex(rgba.g);
      const hexB = toHex(rgba.b);
      if (rgba.a !== void 0 && rgba.a >= 0 && rgba.a <= 1) {
        const alphaValue = Math.round(Math.max(0, Math.min(1, rgba.a)) * 255);
        const hexA = toHex(alphaValue);
        return `#${hexR}${hexG}${hexB}${hexA}`;
      }
      return `#${hexR}${hexG}${hexB}`;
    }
    /**
     * HEX 转 RGBA
     *
     * '#27ae60ff' => { r: 29, g: 174, b: 96, a: 255 }
     * '#27ae60' => { r: 29, g: 174, b: 96, a: 255 }
     */
    static hex2Rgba(hex) {
      const result = { r: 0, g: 0, b: 0, a: 0 };
      let alpha = false;
      let h = hex.slice(hex.startsWith("#") ? 1 : 0);
      if (h.length === 3) {
        h = [...h].map((x) => {
          return x + x;
        }).join("");
      } else if (h.length === 8) {
        alpha = true;
      }
      const n = parseInt(h, 16);
      result.r = n >>> (alpha ? 24 : 16);
      result.g = (n & (alpha ? 16711680 : 65280)) >>> (alpha ? 16 : 8);
      result.b = (n & (alpha ? 65280 : 255)) >>> (alpha ? 8 : 0);
      result.a = alpha ? n & 255 : 1;
      return result;
    }
    /**
     * RGBA 转 HSB
     */
    static rgba2Hsb(rgba) {
      const result = { h: 0, s: 0, b: 0 };
      const { r, g, b, a } = rgba;
      const nr = r / 255;
      const ng = g / 255;
      const nb = b / 255;
      const v = Math.max(r, g, b);
      const n = v - Math.min(r, g, b);
      const h = n === 0 ? 0 : n && v === nr ? (ng - b) / n : v === ng ? 2 + (nb - nr) / n : 4 + (nr - ng) / n;
      result.h = 60 * (h < 0 ? h + 6 : h);
      result.s = v && n / v * 100;
      result.b = v * 100;
      return result;
    }
    /**
     * HSB 转 RGBA
     */
    static hsb2Rgba(hsb) {
      const result = { r: 0, g: 0, b: 0, a: 0 };
      const { h, s, b } = hsb;
      const nh = h;
      const ns = s / 100;
      const nb = b / 100;
      const k = (n) => {
        return (n + nh / 60) % 6;
      };
      const f = (n) => {
        return nb * (1 - ns * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
      };
      result.r = 255 * f(5);
      result.r = 255 * f(3);
      result.r = 255 * f(1);
      result.a = 1;
      return result;
    }
    static rgba2Hsl(rgba) {
      const result = { h: 0, s: 0, l: 0 };
      const { r, g, b, a } = rgba;
      const nr = r / 255;
      const ng = g / 255;
      const nb = b / 255;
      const l = Math.max(r, g, b);
      const s = l - Math.min(nr, ng, nb);
      const h = s ? l === nr ? (g - nb) / s : l === ng ? 2 + (nb - nr) / s : 4 + (nr - ng) / s : 0;
      result.h = 60 * h < 0 ? 60 * h + 360 : 60 * h;
      result.s = 100 * (s ? l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s)) : 0);
      result.l = 100 * (2 * l - s) / 2;
      return result;
    }
    static hsl2Rgba(hsl) {
      const result = { r: 0, g: 0, b: 0, a: 0 };
      const { h, s, l } = hsl;
      const ns = s / 100;
      const nl = l / 100;
      const k = (n) => {
        return (n + h / 30) % 12;
      };
      const a = ns * Math.min(nl, 1 - nl);
      const f = (n) => {
        return nl - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      };
      result.r = 255 * f(0);
      result.g = 255 * f(8);
      result.b = 255 * f(4);
      result.a = 1;
      return result;
    }
    constructor(r, g, b, a = 1) {
      this._r = r / 255;
      this._g = g / 255;
      this._b = b / 255;
      this._a = a;
    }
    get r() {
      return this._r;
    }
    set r(value) {
      this._r = value;
    }
    get g() {
      return this._g;
    }
    set g(value) {
      this._g = value;
    }
    get b() {
      return this._b;
    }
    set b(value) {
      this._b = value;
    }
    get a() {
      return typeof this._a === "undefined" ? 1 : this._a;
    }
    set a(value) {
      this._a = value;
    }
    toRGBAString() {
      let result = `rgba(`;
      result += String(this.r * 255) + ", ";
      result += String(this.g * 255) + ", ";
      result += String(this.b * 255) + ", ";
      result += String(this.a * 255) + ")";
      return result;
    }
    toRGBAJSON() {
      return {
        r: this.r,
        g: this.g,
        b: this.b,
        a: this.a
      };
    }
  };
  _Color.WHITE = _Color.createByHex("#FFFFFF");
  _Color.BLACK = _Color.createByHex("#000000");
  _Color.RED = _Color.createByHex("#FF0000");
  _Color.GREEN = _Color.createByHex("#00FF00");
  _Color.BLUE = _Color.createByHex("#0000FF");
  _Color.GRAY = _Color.createByHex("#808080");
  _Color.DIM_GRAY = _Color.createByHex("#696969");
  _Color.GAINSBORO = _Color.createByHex("#DCDCDC");
  _Color.PINK = _Color.createByHex("#FFC0CB");
  _Color.SILVER = _Color.createByHex("#C0C0C0");
  _Color.PLUM = _Color.createByHex("#DDA0DD");
  _Color.DARK_MAGENTA = _Color.createByHex("#8B008B");
  _Color.INDIGO = _Color.createByHex("#4B0082");
  _Color.NAVY = _Color.createByHex("#000080");
  _Color.LIGHT_STEE_BLUE = _Color.createByHex("#B0C4DE");
  _Color.SLATE_GRAY = _Color.createByHex("#708090");
  _Color.DEEP_SKY_BLUE = _Color.createByHex("#00BFFF");
  _Color.CADE_BLUE = _Color.createByHex("#5F9EA0");
  _Color.CYAN = _Color.createByHex("#00FFFF");
  _Color.TEAL = _Color.createByHex("#008080");
  _Color.SPRING_GREEN = _Color.createByHex("#00FF7F");
  _Color.LIME = _Color.createByHex("#00FF00");
  _Color.GREEN_YELLOW = _Color.createByHex("#ADFF2F");
  _Color.YELLOW_GREEN = _Color.createByHex("#9ACD32");
  _Color.KHAKI = _Color.createByHex("#F0E68C");
  _Color.GOLDEN = _Color.createByHex("#DCAA14");
  _Color.YELLOW = _Color.createByHex("#FFFF00");
  _Color.GOLDENROD = _Color.createByHex("#DAA520");
  _Color.ORIGIN = _Color.createByHex("#FF6600");
  _Color.CORAL = _Color.createByHex("#FF7F50");
  _Color.ORIGIN_RED = _Color.createByHex("#FF4500");
  _Color.BROWN = _Color.createByHex("#A52A2A");
  var Color = _Color;

  // src/engine/config/PrimitiveProfile.ts
  var PRIMITIVE_INIT_STATUS = 1;
  var ECanvasD2LineCap = /* @__PURE__ */ ((ECanvasD2LineCap2) => {
    ECanvasD2LineCap2["BUTT"] = "BUTT";
    ECanvasD2LineCap2["ROUND"] = "ROUND";
    ECanvasD2LineCap2["SQUARE"] = "SQUARE";
    return ECanvasD2LineCap2;
  })(ECanvasD2LineCap || {});
  var ED2PointShape = /* @__PURE__ */ ((ED2PointShape2) => {
    ED2PointShape2["TRIANGLE"] = "TRIANGLE";
    ED2PointShape2["DOT"] = "DOT";
    return ED2PointShape2;
  })(ED2PointShape || {});
  var ED2FontStyle = /* @__PURE__ */ ((ED2FontStyle2) => {
    ED2FontStyle2["NORMAL"] = "normal";
    ED2FontStyle2["ITALIC"] = "italic";
    return ED2FontStyle2;
  })(ED2FontStyle || {});

  // src/engine/algorithm/geometry/matrix/Matrix.ts
  var Matrix = class _Matrix {
    /**
     * 计算矩阵 A 与矩阵 B 的乘积
     * 		mA - 矩阵 A 的行数
     * 		nA - 矩阵 A 的列数
     * 		mB - 矩阵 B 的行数
     * 		nB - 矩阵 B 的列数
     */
    static matrixMul(mA, nA, mB, nB, A, B) {
      if (nA !== mB) {
        throw new Error("does not satisfy the condition of matrix multiplication: nA === mB");
      }
      const result = new Array(mA * nB);
      let ri = 0;
      let ai = 0;
      for (let riA = 0; riA < mA; riA++) {
        for (let ciB = 0; ciB < nB; ciB++) {
          let bi = ciB;
          let sum = 0;
          for (let ciA = 0; ciA < nA; ciA++) {
            sum += A[ai + ciA] * B[bi];
            bi += nB;
          }
          result[ri++] = sum;
        }
        ai += nA;
      }
      return result;
    }
    /**
     * 依据某个数值在矩阵中的"坐标"参数, 获取其在数组中的真实索引
     *      例如
     *          A =
     * 			    1  2  3
     *    		    4  5  6
     *      需要获取矩阵 A 中第 2 行第 2 列的项(item = 5)在数组中的索引
     *      即 index = Matrix.matrixAt(3, 1, 1)
     */
    static matrixAt(colLen, rowIndex, columnIndex) {
      return colLen * rowIndex + columnIndex;
    }
    static getMatrixRankResult(matrixArr, rowLen, colLen) {
      const copyMatrixArr = matrixArr.slice(0);
      let rank = Math.min(rowLen, colLen);
      for (let ri = 0; ri < rowLen; ri++) {
        if (copyMatrixArr[_Matrix.matrixAt(colLen, ri, ri)] === 0) {
          let tmp = new Array(colLen);
          let ci = 0;
          for (ci = ri; ci < rowLen; ci++) {
            if (copyMatrixArr[_Matrix.matrixAt(colLen, ci, ri)] !== 0) {
              arrayCopy(copyMatrixArr, _Matrix.matrixAt(colLen, ci, 0), tmp, 0, colLen);
              arrayCopy(copyMatrixArr, _Matrix.matrixAt(colLen, ri, 0), copyMatrixArr, _Matrix.matrixAt(colLen, ci, 0), colLen);
              arrayCopy(tmp, 0, copyMatrixArr, _Matrix.matrixAt(colLen, ri, 0), colLen);
              break;
            }
          }
          if (ci >= rowLen) {
            rank -= 1;
          }
        }
        if (rank < rowLen) {
          continue;
        }
        for (let rii = 0; rii < rowLen; rii++) {
          if (rii === ri) {
            continue;
          }
          let multiplier = copyMatrixArr[_Matrix.matrixAt(colLen, rii, ri)] / copyMatrixArr[_Matrix.matrixAt(colLen, ri, ri)];
          for (let cii = 0; cii < colLen; cii++) {
            copyMatrixArr[_Matrix.matrixAt(colLen, rii, cii)] -= copyMatrixArr[_Matrix.matrixAt(colLen, ri, cii)] * multiplier;
          }
        }
      }
      return {
        rank,
        updatedMatrixArr: copyMatrixArr
      };
    }
    constructor(m, n, data) {
      this._m = m;
      this._n = n;
      this._data = data;
    }
    get m() {
      return this._m;
    }
    get n() {
      return this._n;
    }
    get data() {
      return this._data;
    }
    /**
     * 将当前矩阵与矩阵 B 相乘
     */
    multiply(B) {
      const resultMatrixArr = _Matrix.matrixMul(this.m, this.n, B.m, B.n, this.data, B.data);
      return new _Matrix(this.m, B.n, resultMatrixArr);
    }
    /**
     * 计算当前矩阵的秩
     */
    getMatrixRankResult() {
      return _Matrix.getMatrixRankResult(this.data, this.m, this.n).rank;
    }
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    getInverseMatrix() {
      const matrixArr = this.data.slice(0);
      if (this.m !== this.n) {
        throw new Error(`getInverseMatrix error: this.m !== this.n`);
      }
      const expandColLen = this.n * 2;
      const newMatrixArr = new Array(this.m * this.n).fill(0);
      let expandMatrixArr = this.initExpandMatrix(matrixArr);
      const { rank, updatedMatrixArr } = _Matrix.getMatrixRankResult(expandMatrixArr, this.m, expandColLen);
      expandMatrixArr = updatedMatrixArr;
      if (rank !== this.m) {
        throw new Error(`getInverseMatrix error: rank !== this.m`);
      }
      expandMatrixArr = this.inverseMatrix(expandMatrixArr, this.m, expandColLen);
      for (let ri = 0; ri < this.m; ri++) {
        for (let ci = this.n; ci < expandColLen; ci++) {
          newMatrixArr[_Matrix.matrixAt(this.n, ri, ci - this.n)] = expandMatrixArr[_Matrix.matrixAt(expandColLen, ri, ci)];
        }
      }
      return new _Matrix(this.m, this.n, newMatrixArr.slice(0));
    }
    hashCode() {
      let sum = 0;
      for (let num of this.data) {
        sum += num;
      }
      return sum;
    }
    /**
     * 以平铺模式生成矩阵字符串值
     */
    toString() {
      let b = [];
      b.push(`Matrix (`);
      for (let i = 0; i < this.data.length; i++) {
        b.push(String(this.data[i]));
        if (i >= this.data.length - 1) {
          continue;
        }
        b.push(", ");
      }
      b.push(`)`);
      return b.join("");
    }
    /**
     * 以格式化模式生成矩阵字符串值
     */
    toStringFormat() {
      let b = [];
      b.push(`Matrix (`);
      b.push(String(this.m));
      b.push(` x `);
      b.push(String(this.n));
      b.push(`)`);
      let idx = 0;
      for (let i = 0; i < this.m; i++) {
        for (let j = 0; j < this.n; j++) {
          let d = String(this.data[idx++]);
          if (j === 0) {
            b.push(`
`);
            b.push(`	`);
            b.push(d);
            continue;
          }
          b.push(", ");
          b.push(d);
        }
      }
      return b.join("");
    }
    /**
     * 矩阵转置
     */
    transpose() {
      const colLen = this.n;
      const rowLen = this.m;
      const transposeArr = [];
      for (let ci = 0; ci <= colLen - 1; ci++) {
        for (let ri = 0; ri <= rowLen - 1; ri++) {
          const index = ci + ri * colLen;
          transposeArr.push(this.data[index]);
        }
      }
      return new _Matrix(this.n, this.m, transposeArr);
    }
    equals(matrix) {
      if (matrix === null) {
        return false;
      }
      if (this === matrix) {
        return true;
      }
      if (matrix instanceof Matrix3) {
        if (this.m !== matrix.m) {
          return false;
        }
        if (this.n !== matrix.n) {
          return false;
        }
        let isEqual = true;
        loop1: for (let i = 0; i < this.data.length; i++) {
          for (let j = 0; j < matrix.data.length; j++) {
            if (this.data[i] !== matrix.data[j]) {
              isEqual = false;
              break loop1;
            }
          }
        }
        return isEqual;
      }
      return false;
    }
    initExpandMatrix(matrixArr) {
      const rowLen = this.m;
      const colLen = this.n;
      const expandColLen = this.n * 2;
      const expandMatrixArr = new Array(rowLen * expandColLen);
      for (let ri = 0; ri < rowLen; ri++) {
        for (let ci = 0; ci < expandColLen; ci++) {
          if (ci < colLen) {
            expandMatrixArr[_Matrix.matrixAt(expandColLen, ri, ci)] = matrixArr[_Matrix.matrixAt(colLen, ri, ci)];
            continue;
          }
          if (ci === rowLen + ri) {
            expandMatrixArr[_Matrix.matrixAt(expandColLen, ri, ci)] = 1;
            continue;
          }
          expandMatrixArr[_Matrix.matrixAt(expandColLen, ri, ci)] = 0;
        }
      }
      return expandMatrixArr;
    }
    inverseMatrix(expandMatrixArr, rowLen, colLen) {
      const copyExpandMatrixArr = expandMatrixArr.slice(0);
      for (let ri = 0; ri < rowLen; ri++) {
        let firstItem = copyExpandMatrixArr[_Matrix.matrixAt(colLen, ri, ri)];
        for (let ci = 0; ci < colLen; ci++) {
          copyExpandMatrixArr[_Matrix.matrixAt(colLen, ri, ci)] /= firstItem;
        }
      }
      return copyExpandMatrixArr;
    }
  };

  // src/engine/algorithm/geometry/matrix/Matrix3.ts
  var VEN$MATRIX3_ORIGIN_DATA = [
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1
  ];
  var _Matrix3 = class _Matrix3 extends Matrix {
    static translate(xOff, yOff) {
      return new _Matrix3([
        1,
        0,
        0,
        0,
        1,
        0,
        xOff,
        yOff,
        1
      ]);
    }
    static rotate(radian) {
      const cosV = Math.cos(radian);
      const sinV = Math.sin(radian);
      return new _Matrix3([
        cosV,
        sinV,
        0,
        -sinV,
        cosV,
        0,
        0,
        0,
        1
      ]);
    }
    static scale(xR, yR) {
      return new _Matrix3([
        xR,
        0,
        0,
        0,
        yR,
        0,
        0,
        0,
        1
      ]);
    }
    constructor(data = [...VEN$MATRIX3_ORIGIN_DATA]) {
      super(3, 3, data);
      const a = this.data[0];
      const b = this.data[3];
      const d = this.data[1];
      const e = this.data[4];
      this._iScale = Math.sqrt(a * a + d * d);
      this._jScale = Math.sqrt(b * b + e * e);
    }
    get iScale() {
      return this._iScale;
    }
    get jScale() {
      return this._jScale;
    }
    multiply3(matrix3) {
      return new _Matrix3(Matrix.matrixMul(3, 3, 3, 3, this.data, matrix3.data));
    }
    det() {
      return this.data[0] * this.data[4] - this.data[3] * this.data[1];
    }
    isMirrored() {
      return this.det() < 0;
    }
    scale(ratioX, ratioY) {
      return this.multiply3(_Matrix3.scale(ratioX, ratioY));
    }
    resetBy(matrix3) {
      for (let i = 0; i < matrix3.data.length; i++) {
        this.data[i] = matrix3.data[i];
      }
    }
    translate(xOff, yOff) {
      return this.multiply3(_Matrix3.translate(xOff, yOff));
    }
    setOrigin(x, y) {
      return _Matrix3.translate(-x, -y).multiply3(this).translate(x, y);
    }
    /**
     * 矩阵转置
     */
    transpose() {
      return new _Matrix3(super.transpose().data);
    }
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    getInverseMatrix() {
      return new _Matrix3(super.getInverseMatrix().data);
    }
  };
  _Matrix3.ORIGIN = new _Matrix3();
  // prettier-ignore
  _Matrix3.MIRROR_X = new _Matrix3([
    -1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1
  ]);
  // prettier-ignore
  _Matrix3.MIRROR_Y = new _Matrix3([
    1,
    0,
    0,
    0,
    -1,
    0,
    0,
    0,
    1
  ]);
  // prettier-ignore
  _Matrix3.ROT_90 = new _Matrix3([
    0,
    1,
    0,
    -1,
    0,
    0,
    0,
    0,
    1
  ]);
  // prettier-ignore
  _Matrix3.ROT_N90 = new _Matrix3([
    0,
    -1,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ]);
  var Matrix3 = _Matrix3;

  // src/engine/config/CommonProfile.ts
  var ESweep = /* @__PURE__ */ ((ESweep2) => {
    ESweep2[ESweep2["CW"] = 0] = "CW";
    ESweep2[ESweep2["CCW"] = 1] = "CCW";
    return ESweep2;
  })(ESweep || {});

  // src/engine/math/Angles.ts
  var _Angles = class _Angles {
    static limitAngularRange(angle) {
      if (angle >= 0 && angle <= Math.PI * 2) {
        return angle;
      }
      let angle2 = angle % Math.PI * 2;
      if (angle2 < 0) {
        angle2 += Math.PI * 2;
      }
      return angle2;
    }
    static radianToDegree(radian) {
      return radian * 180 / Math.PI;
    }
    static degreeToRadian(degree) {
      return degree / 180 * Math.PI;
    }
    static regularDegress(degree) {
      let dg = degree % 360;
      dg = dg < 0 ? 360 + dg : dg;
      return dg === 360 ? 0 : dg;
    }
    static regularRadian(radian) {
      let rd = radian % _Angles.PIx2;
      rd = rd < 0 ? _Angles.PIx2 + rd : rd;
      return rd === _Angles.PIx2 ? 0 : rd;
    }
    static toQuarterRadian(radian) {
      return _Angles.regularRadian((radian + _Angles.PI_4) / _Angles.PI_2 * _Angles.PI_2);
    }
    static toQuarterDegree(degree) {
      return _Angles.regularDegress((degree + 45 / 90 | 0) * 90);
    }
    static transform(radian, matrix3) {
      const cosV = Math.cos(radian);
      const sinV = Math.sin(radian);
      const p1 = new Vector2(matrix3.data[6], matrix3.data[7]);
      const p2 = new Vector2(cosV, sinV).multiplyMatrix3(matrix3);
      return _Angles.regularRadian(p2.getRadianByVector2(p1));
    }
    /**
     * 计算初始弧度 radian 在经过旋转矩阵 matrix 变换后得到的弧度
     */
    calcRotationMatrix4(radian, matrix) {
      const cosV = Math.cos(radian);
      const sinV = Math.sin(radian);
      const x = cosV * matrix.data[0] + sinV * matrix.data[4];
      const y = cosV * matrix.data[1] + sinV * matrix.data[5];
      const v = new Vector2(x, y).normalize();
      return Math.atan2(v.y, v.x);
    }
  };
  _Angles.PIx2 = Math.PI * 2;
  _Angles.PI_2 = Math.PI / 2;
  _Angles.PI_4 = Math.PI / 4;
  var Angles = _Angles;

  // src/algorithm/geometry/primitives/StructPrimitive.ts
  var StructPrimitive = class {
  };

  // src/algorithm/geometry/primitives/Polyline.ts
  var Polyline = class _Polyline extends StructPrimitive {
    static build1(primitives) {
      const ps = [];
      let prev = null;
      for (let i = 0; i < primitives.length; i++) {
        const p = primitives[i];
        const start = p.startPoint;
        if (prev !== null && !start.equalsWithVector2(prev)) {
          ps.push(new Line(prev, start));
        }
        ps.push(p);
        prev = p.endPoint;
      }
      if (ps.length === 0 && prev !== null) {
        ps.push(new Line(prev, prev));
      }
      return new _Polyline(ps);
    }
    static build2(primitives) {
      return _Polyline.build1([]);
    }
    static build3(points) {
      const ps = [];
      let prev = null;
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (prev !== null) {
          ps.push(new Line(prev, p));
        }
        prev = p;
      }
      return new _Polyline(ps);
    }
    static build4(points) {
      return _Polyline.build1([]);
    }
    static build5(xys) {
      const vs = [];
      for (let i = 0; i < xys.length; i += 2) {
        vs.push(new Vector2(xys[i], xys[i + 1]));
      }
      return this.build4(vs);
    }
    static build6(bbox2) {
      return _Polyline.build3([bbox2.leftDown, bbox2.rightDown, bbox2.leftUp, bbox2.leftDown]);
    }
    constructor(primitives) {
      super();
      this._bbox2 = null;
      this._primitives = primitives;
    }
    get primitives() {
      return this._primitives;
    }
    get startPoint() {
      const pt = this.primitives[0];
      return pt ? pt.startPoint : null;
    }
    get endPoint() {
      const len = this.primitives.length;
      const pt = len > 0 ? this.primitives[len - 1] : null;
      return pt ? pt.endPoint : null;
    }
    get bbox2() {
      if (this._bbox2 === null) {
        let bbox2 = new BBox2(0, 0, 0, 0);
        for (let i = 0; i < this.primitives.length; i++) {
          const pt = this.primitives[i];
          bbox2 = BBox2.extend2(bbox2, pt.bbox2);
        }
        this._bbox2 = bbox2;
      }
      return this._bbox2;
    }
    getArea(resolution) {
      let [startPoint, prevPoint] = [null, null];
      let sum = 0;
      this.points(resolution, (nowPoint) => {
        if (prevPoint) {
          sum += (nowPoint.x + prevPoint.x) * (nowPoint.y - prevPoint.y);
        } else {
          startPoint = nowPoint;
        }
        prevPoint = nowPoint;
      });
      sum += (startPoint.x + prevPoint.x) * (startPoint.y - prevPoint.y);
      return sum / 2;
    }
    isClosed(place) {
      if (this.primitives.length <= 1) {
        const p1 = this.primitives[0];
        if (p1 && p1 instanceof Arc && p1.isCicle) {
          return true;
        }
        return false;
      }
      const start = this.primitives[0];
      const end = this.primitives[this.primitives.length - 1];
      return start.startPoint.equalsWithVector2(end.endPoint, place);
    }
    asClose() {
      const start = this.primitives[0];
      const end = this.primitives[this.primitives.length - 1];
      const [startPoint, endPoint] = [start.startPoint, end.endPoint];
      if (!startPoint.equalsWithVector2(endPoint)) {
        const pts = [];
        for (let i = 0; i < this.primitives.length; i++) {
          pts.push(this.primitives[i]);
        }
        pts.push(new Line(endPoint, startPoint));
        return _Polyline.build2(pts);
      }
      return this;
    }
    closeEndPooint() {
      const start = this.primitives[0];
      const end = this.primitives[this.primitives.length - 1];
      const [startPoint, endPoint] = [start.startPoint, end.endPoint];
      if (!startPoint.equalsWithVector2(endPoint)) {
        const pts = [];
        for (let i = 0; i < this.primitives.length; i++) {
          pts.push(this.primitives[i]);
        }
        pts.push(new Line(endPoint, startPoint));
        return new _Polyline(pts);
      }
      return this;
    }
    reverse() {
      const pts = new Array(this.primitives.length);
      for (let i = 0, j = this.primitives.length - 1; j >= 0; i++, j--) {
        const pt = this.primitives[j];
        let nPt = null;
        if (pt instanceof Line) {
          nPt = new Line(pt.endPoint, pt.startPoint);
        } else if (pt instanceof Arc) {
          nPt = pt.exchangeSweep();
        } else {
          continue;
        }
        if (nPt) {
          pts[i] = nPt;
        }
      }
      return new _Polyline(pts);
    }
    mirror(origin) {
      const pts = [];
      for (let i = 0; i < this.primitives.length; i++) {
        const pt = this.primitives[i];
        let nPt = null;
        if (pt instanceof Line) {
          nPt = pt.mirror(origin);
        } else if (pt instanceof Arc) {
          nPt = pt.mirror(origin);
        } else {
          continue;
        }
        if (nPt) {
          pts[i] = nPt;
        }
      }
      return new _Polyline(pts);
    }
    points(resolution, calback) {
      if (this.primitives.length <= 0) {
        return;
      }
      for (let i = 0; i < this.primitives.length - 1; i++) {
        const points2 = this.primitives[i].toPoints(resolution);
        points2.pop();
        for (let j = 0; j < points2.length; j++) {
          calback(points2[j]);
        }
      }
      const points = this.primitives[this.primitives.length - 1].toPoints(resolution);
      for (let j = 0; j < points.length; j++) {
        calback(points[j]);
      }
    }
    multiplyMatrix3(matrix3) {
      const pts = new Array(this.primitives.length);
      for (let i = 0; i < this.primitives.length; i++) {
        pts[i] = this.primitives[i].multiplyMatrix3(matrix3);
      }
      return _Polyline.build2(pts);
    }
    isClose(place) {
      if (this.primitives.length <= 1 && !(this.primitives[0] instanceof Arc)) {
        return false;
      }
      const start = this.primitives[0];
      const end = this.primitives[this.primitives.length - 1];
      return start.startPoint.equalsWithVector2(end.endPoint, place);
    }
    isEqual(pl) {
      if (!(pl instanceof _Polyline)) {
        return false;
      }
      if (pl.primitives.length !== this.primitives.length) {
        return false;
      }
      for (let i = 0; i < pl.primitives.length; i++) {
        const pt1 = pl.primitives[i];
        const pt2 = this.primitives[i];
        if (JSON.stringify(pt1) !== JSON.stringify(pt2)) {
          return false;
        }
      }
      return true;
    }
    clone() {
      return _Polyline.build2(this.primitives);
    }
    putItem(item, place) {
      if (!item) {
        return false;
      }
      if (item instanceof _Polyline) {
        return this.mergePolyline(item, place);
      }
      const [startPoint, endPoint] = [this.startPoint, this.endPoint];
      if (!startPoint) {
        this.primitives.push(item);
        this._bbox2 = item.bbox2;
        return true;
      }
      if (startPoint.equalsWithVector2(endPoint, place)) {
        return false;
      }
      const [itemStartPoint, itemEndPoint] = [item.startPoint, item.endPoint];
      let [reverse, isEnd] = [true, false];
      if (startPoint.equalsWithVector2(itemStartPoint, place)) {
        reverse = true;
        isEnd = false;
      } else if (startPoint.equalsWithVector2(itemEndPoint, place)) {
        reverse = false;
        isEnd = false;
      } else if (endPoint.equalsWithVector2(itemStartPoint, place)) {
        reverse = false;
        isEnd = true;
      } else if (endPoint.equalsWithVector2(itemEndPoint, place)) {
        reverse = true;
        isEnd = true;
      } else {
        return false;
      }
      if (isEnd) {
        this.primitives.push(reverse ? item.reverse() : item);
      } else {
        this.primitives.unshift(reverse ? item.reverse() : item);
      }
      this._bbox2 = BBox2.extend2(this._bbox2, item.bbox2);
      return true;
    }
    mergePolyline(item, place) {
      if (!item) {
        return false;
      }
      const [startPoint, endPoint] = [this.startPoint, this.endPoint];
      if (!startPoint) {
        this.primitives.push(...item.primitives);
        this._bbox2 = item.bbox2;
        return true;
      }
      if (startPoint.equalsWithVector2(endPoint, place)) {
        return false;
      }
      const [itemStartPoint, itemEndPoint] = [item.startPoint, item.endPoint];
      let [reverse, isEnd] = [true, false];
      if (startPoint.equalsWithVector2(itemStartPoint, place)) {
        reverse = true;
        isEnd = false;
      } else if (startPoint.equalsWithVector2(itemEndPoint, place)) {
        reverse = false;
        isEnd = false;
      } else if (endPoint.equalsWithVector2(itemStartPoint, place)) {
        reverse = false;
        isEnd = true;
      } else if (endPoint.equalsWithVector2(itemEndPoint, place)) {
        reverse = true;
        isEnd = true;
      } else {
        return false;
      }
      const newItem = reverse ? item.reverse() : item;
      if (isEnd) {
        this.primitives.push(...newItem.primitives);
      } else {
        this.primitives.unshift(...newItem.primitives);
      }
      this._bbox2 = BBox2.extend2(this._bbox2, item.bbox2);
      return true;
    }
  };

  // src/algorithm/geometry/primitives/Primitive.ts
  var Primitive = class extends StructPrimitive {
  };

  // src/algorithm/geometry/primitives/Triangle.ts
  var Triangle = class _Triangle {
    /**
     * 重心
     */
    static getBaryCentre(p1, p2, p3) {
      const [x, y] = [p1.x + p2.x + p3.x, p1.y + p2.y + p3.y];
      return new Vector2(x / 3, y / 3);
    }
    /**
     * 内心
     */
    static getInCentre(p1, p2, p3) {
      const [l1, l2, l3] = [p2.sub(p3).length, p1.sub(p3).length, p1.sub(p2).length];
      const [d, x, y] = [l1 + l2 + l3, l1 * p1.x + l2 * p2.x + l3 * p3.x, l1 * p1.y + l2 * p2.y + l3 * p3.y];
      return new Vector2(x / d, y / d);
    }
    static getArea(p1, p2, p3) {
      return Math.abs(p2.sub(p1).cross(p3.sub(p2))) / 2;
    }
    constructor(p1, p2, p3) {
      this._p1 = p1;
      this._p2 = p2;
      this._p3 = p3;
    }
    get p1() {
      return this._p1;
    }
    get p2() {
      return this._p2;
    }
    get p3() {
      return this._p3;
    }
    getBaryCentre() {
      return _Triangle.getBaryCentre(this.p1, this.p2, this.p3);
    }
    getInCentre() {
      return _Triangle.getInCentre(this.p1, this.p2, this.p3);
    }
    getArea() {
      return _Triangle.getArea(this.p1, this.p2, this.p3);
    }
    scaleOnBarycentre(ratio) {
      return this.sacle(this.getBaryCentre(), ratio);
    }
    scaleOnIncentre(ratio) {
      return this.sacle(this.getInCentre(), ratio);
    }
    extend(ext) {
      const incentre = this.getInCentre();
      const cpp = this.p1.add(this.p2).sub(incentre).scale(1 / 2);
      const len = cpp.length;
      const ncpp = Vector2.ORIGIN.getPointOnRays(cpp, len + ext);
      return this.scaleOnIncentre(ncpp.length / len);
    }
    sacle(center, ratio) {
      const mat = Matrix3.translate(-center.x, -center.y).scale(ratio, ratio).translate(center.x, center.y);
      return new _Triangle(this.p1.multiplyMatrix3(mat), this.p2.multiplyMatrix3(mat), this.p3.multiplyMatrix3(mat));
    }
  };

  // src/algorithm/geometry/primitives/Arc.ts
  var Arc = class _Arc extends Primitive {
    static build1(startPoint, endPoint, rx, ry, isLarge, sweep) {
      const isCircle = startPoint.equalsWithVector2(endPoint);
      if (isCircle) {
        return new _Arc(rx, ry, startPoint, 0, isLarge ? 360 : 0);
      }
      rx = Math.abs(rx);
      ry = Math.abs(ry);
      const [x0, y0] = [startPoint.x, -startPoint.x];
      const [x, y] = [endPoint.x, -endPoint.y];
      const sweepFlag = sweep === 0 /* CW */;
      const [dx2, dy2] = [(x0 - x) / 2, (y0 - y) / 2];
      const [cosV, sinV] = [Math.cos(0), Math.sin(0)];
      const [x1, y1] = [cosV * dx2 + sinV * dy2, -sinV * dx2 + cosV * dy2];
      const [Prx, Pry] = [rx * rx, ry * ry];
      const [Px1, Py1] = [x1 * x1, y1 * y1];
      let [sign, sq] = [isLarge === sweepFlag ? -1 : 1, (Prx * Pry - Prx * Py1 - Pry * Px1) / (Prx * Py1 + Pry * Px1)];
      sq = sq < 0 ? 0 : sq;
      let coef = sign = Math.sqrt(sq);
      const [cx1, cy1] = [coef * (rx * y1 / ry), coef * -(ry * x1 / rx)];
      const [sx2, sy2] = [(x0 + x) / 2, (y0 + y) / 2];
      const [cx, cy] = [sx2 + (cosV * cx1 - sinV * cy1), sy2 + (sinV * cx1 + cosV * cy1)];
      const [ux, uy] = [(x1 - cx1) / rx, (y1 - cy1) / ry];
      const [vx, vy] = [(-x1 - cx1) / rx, (-y1 - cy1) / ry];
      let [p, n] = [ux, Math.sqrt(ux * ux + uy * uy)];
      sign = uy < 0 ? -1 : 1;
      const angleStart = Angles.radianToDegree(sign * Math.acos(p / n));
      n = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
      p = ux * vx + uy * vy;
      sign = ux * vy - uy * vx < 0 ? -1 : 1;
      const pn = p / n;
      let acos = void 0;
      if (pn < -1) {
        acos = Math.cos(-1);
      } else if (pn > 1) {
        acos = Math.acos(1);
      } else {
        acos = Math.acos(pn);
      }
      let angleExtent = Angles.radianToDegree(sign * acos);
      if (!sweepFlag && angleExtent > 0) {
        angleExtent -= 360;
      } else if (sweepFlag && angleExtent < 0) {
        angleExtent += 360;
      }
      const lambda = dx2 * dx2 / Prx + dy2 * dy2 / Pry;
      const distance = startPoint.distance(endPoint) / 2;
      if (rx < distance && ry < distance) {
        rx *= Math.sqrt(lambda);
        ry *= Math.sqrt(lambda);
      }
      const startRadian = isCircle ? 0 : Angles.regularDegress(-angleStart);
      const sweepRadian = isCircle ? isLarge ? 360 : 0 : -angleExtent;
      return new _Arc(rx, ry, new Vector2(cx, -cy), startRadian, sweepRadian);
    }
    static build2(center, startRadian, endRadian, rx, ry, sweep) {
      let sweepRadian = void 0;
      if (startRadian === endRadian) {
        startRadian = Angles.regularDegress(startRadian);
        endRadian = Angles.regularDegress(endRadian);
        sweepRadian = 0;
      } else {
        startRadian = Angles.radianToDegree(startRadian);
        endRadian = Angles.regularDegress(endRadian);
        if (sweep === 1 /* CCW */) {
          if (endRadian <= startRadian) {
            endRadian += 360;
          }
        } else {
          if (endRadian >= startRadian) {
            startRadian += 360;
          }
        }
        sweepRadian = endRadian - startRadian;
      }
      return new _Arc(rx, ry, center, Angles.radianToDegree(startRadian), sweepRadian);
    }
    static build3(center, startRadian, sweepRadian, rx, ry) {
      return new _Arc(rx, ry, center, Angles.radianToDegree(startRadian), sweepRadian);
    }
    static build4(startPoint, endPoint, center, rx, ry, sweep) {
      const startRadian = Angles.radianToDegree(startPoint.getRadianByVector2(center));
      const endRadian = Angles.radianToDegree(endPoint.getRadianByVector2(center));
      return _Arc.build2(center, startRadian, endRadian, rx, ry, sweep);
    }
    static build5(startPoint, endPoint, radian) {
      const direct = endPoint.sub(startPoint);
      const v = new Vector2(-direct.y / direct.x).normalize();
      const radian2 = Math.abs(radian) / 2;
      let radius = 0;
      if (radian2 === 0) {
        throw new Error(`cannot represent a cirlce.`);
      }
      radius = direct.length / 2 / Math.sin(radian2);
      const direct1 = v.rotateSurround(Vector2.ORIGIN, radian2);
      let sweep = 1 /* CCW */;
      let center = null;
      if (radian > 0) {
        sweep = 1 /* CCW */;
        center = endPoint.add(direct1.scale(radius));
      } else {
        sweep = 0 /* CW */;
        center = startPoint.sub(direct1.scale(radius));
      }
      const startRadian = Angles.radianToDegree(startPoint.getRadianByVector2(center));
      const endRadian = Angles.radianToDegree(endPoint.getRadianByVector2(center));
      return _Arc.build2(center, startRadian, endRadian, radius, radius, sweep);
    }
    static buildCircle(center, r, sweep) {
      return _Arc.build2(center, 0, 360, r, r, sweep);
    }
    constructor(rx, ry, centerPoint, startRadian, sweepRadian) {
      super();
      this._rx = rx;
      this._ry = ry;
      this._centerPoint = centerPoint;
      this._startRadian = startRadian;
      this._sweepRadian = sweepRadian;
      this._bbox2 = null;
      this._svgEnd = null;
      this._startPoint = this.pointOn(startRadian);
      this._endPoint = this.pointOn(startRadian + sweepRadian);
    }
    get startPoint() {
      return this._startPoint;
    }
    set startPoint(value) {
      this._startPoint = value;
    }
    get endPoint() {
      return this._endPoint;
    }
    set endPoint(value) {
      this._endPoint = value;
    }
    get centerPoint() {
      return this._centerPoint;
    }
    get startRadian() {
      return this._startRadian;
    }
    get endRadian() {
      return this.startRadian + this.sweepRadian;
    }
    get isOverHalfCircle() {
      return Math.abs(this.sweepRadian) > 180;
    }
    get isCicle() {
      return DoubleKit.eq(Math.abs(this.sweepRadian), 360) || this.startPoint.equalsWithVector2(this.endPoint) && this.rx === this.ry;
    }
    get sweepRadian() {
      return this._sweepRadian;
    }
    get rx() {
      return this._rx;
    }
    get ry() {
      return this._ry;
    }
    get sweep() {
      return this.sweepRadian >= 0 ? 1 /* CCW */ : 0 /* CW */;
    }
    get bbox2() {
      if (this._bbox2 === null) {
        this._bbox2 = this.buildBBox2();
      }
      return this._bbox2;
    }
    get length() {
      return Math.abs(this.rx * this.sweepRadian * Math.PI / 180);
    }
    get svgEnd() {
      if (this._svgEnd === null) {
        this._svgEnd = this.getSvgEnd(this.startRadian, this.sweepRadian, this.startPoint, this.endPoint);
      }
      return this._svgEnd;
    }
    toString() {
      return `Arc (${this.centerPoint.x}, ${this.centerPoint.y}, ${this.rx}, ${this.ry}, ${this.startRadian}, ${this.sweepRadian})`;
    }
    pointOn(radian) {
      if (radian === 0) {
        return this._centerPoint.add(new Vector2(this.rx, 0));
      }
      if (radian === Math.PI / 2) {
        return this._centerPoint.add(new Vector2(0, this.ry));
      }
      if (radian === Math.PI * 3 / 2) {
        return this._centerPoint.add(new Vector2(0, -this.ry));
      }
      const [rx2, ry2] = [this.rx * this.rx, this.ry * this.ry];
      const tg = Math.tan(radian);
      const tg2 = tg * tg;
      let [x, y] = [Math.sqrt(rx2 * ry2 / (ry2 + rx2 * tg2)), Math.sqrt(rx2 * ry2 / (rx2 + ry2 / tg2))];
      if (radian > Math.PI / 2 && radian < Math.PI * 3 / 2) {
        x = -x;
      }
      if (radian > Math.PI && radian < Math.PI * 2) {
        y = -y;
      }
      if (Number.isNaN(x)) {
        x = 0;
      }
      if (Number.isNaN(y)) {
        y = 0;
      }
      return this._centerPoint.add(new Vector2(x, y));
    }
    exchangeSweep() {
      return _Arc.build3(this.centerPoint, this.startRadian + this.sweepRadian, -this.sweepRadian, this.rx, this.ry);
    }
    exchangeSweepAndStart() {
      return _Arc.build1(this.endPoint, this.startPoint, this.rx, this.ry, this.isOverHalfCircle, this.sweepRadian >= 0 ? 0 /* CW */ : 1 /* CCW */);
    }
    mirror(origin) {
      if (this.startPoint.equalsWithVector2(this.endPoint)) {
        return _Arc.build3(this.centerPoint.mirrorSurroundY(), 0, 360, this.rx, this.ry);
      }
      return _Arc.build1(
        this.startPoint.mirrorSurroundY(origin),
        this.endPoint.mirrorSurroundY(origin),
        this.rx,
        this.ry,
        this.isOverHalfCircle,
        this.sweepRadian >= 0 ? 0 /* CW */ : 1 /* CCW */
      );
    }
    sectorArea() {
      return Math.abs(this.sweepRadian) / 360 * Math.PI * this.rx * this.ry;
    }
    getArea() {
      let triArea = Triangle.getArea(this.centerPoint, this.startPoint, this.pointOn(this.endRadian));
      return this.sectorArea() - triArea;
    }
    multiplyMatrix3(matrix3) {
      let sw = void 0;
      if (matrix3.isMirrored()) {
        sw = -this.sweepRadian;
      } else {
        sw = this.sweepRadian;
      }
      let sa = void 0;
      if (matrix3.equals(Matrix3.ROT_90)) {
        sa = Angles.toQuarterDegree(this.startRadian + 90);
      } else if (matrix3.equals(Matrix3.ROT_N90)) {
        sa = Angles.regularDegress(this.startRadian - 90);
      } else {
        sa = Angles.radianToDegree(Angles.transform(Angles.degreeToRadian(this.startRadian), matrix3));
      }
      return _Arc.build3(this.centerPoint.multiplyMatrix3(matrix3), sa, sw, matrix3.iScale * this.rx, matrix3.iScale * this.ry);
    }
    storke(width, cap, sweep) {
      const halfWidth = width / 2;
      const [rxLarge, ryLarge] = [this.rx + halfWidth, this.ry + halfWidth];
      let [rxSmall, rySmall] = [this.rx - halfWidth, this.ry - halfWidth];
      let a2Matrix = new Matrix3();
      if (rxSmall < 0) {
        rxSmall = -rxSmall;
        a2Matrix = a2Matrix.multiply3(Matrix3.MIRROR_Y);
      }
      if (rySmall < 0) {
        rySmall = -rySmall;
        a2Matrix = a2Matrix.multiply3(Matrix3.MIRROR_X);
      }
      if (rxSmall === 0) {
        rxSmall = 1e-3;
      }
      if (rySmall === 0) {
        rySmall = 1e-3;
      }
      a2Matrix = a2Matrix.setOrigin(this.centerPoint.x, this.centerPoint.y);
      let [a1, a2] = [null, null];
      if (sweep === this.sweep) {
        a1 = _Arc.build3(this.centerPoint, this.startRadian, this.sweepRadian, rxLarge, ryLarge);
        a2 = _Arc.build3(this.centerPoint, this.startRadian + this.sweepRadian, -this.sweepRadian, rxSmall, rySmall);
      } else {
        a1 = _Arc.build3(this.centerPoint, this.startRadian + this.sweepRadian, -this.sweepRadian, rxLarge, ryLarge);
        a2 = _Arc.build3(this.centerPoint, this.startRadian, this.sweepRadian, rxSmall, rySmall);
      }
      a2 = a2.multiplyMatrix3(a2Matrix);
      switch (cap) {
        case "ROUND" /* ROUND */: {
          const sweepRadian = sweep === 1 /* CCW */ ? 180 : -180;
          const [c1, c2] = [
            sweep === this.sweep ? this.pointOn(this.endRadian) : this.pointOn(this.startRadian),
            sweep === this.sweep ? this.pointOn(this.startRadian) : this.pointOn(this.endRadian)
          ];
          const [startRadian1, startRadian2] = [
            Angles.radianToDegree(a1.pointOn(a1.endRadian).getRadianByVector2(c1)),
            Angles.radianToDegree(a2.pointOn(a2.endRadian).getRadianByVector2(c2))
          ];
          return Polyline.build2([
            a1,
            _Arc.build3(c1, startRadian1, sweepRadian, halfWidth, halfWidth),
            a2,
            _Arc.build3(c2, startRadian2, sweepRadian, halfWidth, halfWidth)
          ]);
        }
        default: {
          return Polyline.build2([a1, a2]);
        }
      }
    }
    toPoints(resolution) {
      if (this.rx <= resolution) {
        return [this.startPoint, this.getSvgEnd(this.startRadian, this.sweepRadian, this.startPoint, this.endPoint)];
      }
      const cos = (this.rx - resolution) / this.rx;
      let cnt = Math.ceil(Math.abs(this.sweepRadian / Angles.radianToDegree(Math.acos(cos)) / 2));
      cnt = Math.max(cnt, 2);
      const ps = new Array(cnt + 1);
      let step = this.sweepRadian / cnt;
      let radian = this.startRadian;
      for (let i = 0; i <= cnt; i++, radian += step) {
        ps[i] = this.pointOn(radian);
      }
      return ps;
    }
    getMidPoint() {
      const [startRadian, endRadian] = [this.startRadian, this.endRadian];
      const [sweep, centerPoint, radius] = [this.sweep, this.centerPoint, this.rx];
      if (sweep === 1 /* CCW */) {
        if (endRadian > startRadian) {
          let radian3 = (endRadian - startRadian) / 2 + startRadian;
          let midPoint3 = centerPoint.add(new Vector2(Math.cos(radian3), Math.sin(radian3)).mul(radius));
          return midPoint3;
        }
        if (endRadian === startRadian) {
          let midPoint3 = centerPoint.add(new Vector2(Math.cos(Math.PI * 3 / 2), Math.sin(Math.PI * 3 / 2)).mul(radius));
          return midPoint3;
        }
        let radian2 = (endRadian + Math.PI * 2 - startRadian) / 2 + startRadian;
        let midPoint2 = centerPoint.add(new Vector2(Math.cos(radian2), Math.sin(radian2)).mul(radius));
        return midPoint2;
      }
      if (endRadian > startRadian) {
        let radian2 = (startRadian + Math.PI * 2 - endRadian) / 2 + endRadian;
        let midPoint2 = centerPoint.add(new Vector2(Math.cos(radian2), Math.sin(radian2)).mul(radius));
        return midPoint2;
      }
      if (endRadian === startRadian) {
        let midPoint2 = centerPoint.add(new Vector2(Math.cos(Math.PI * 3 / 2), Math.sin(Math.PI * 3 / 2)).mul(radius));
        return midPoint2;
      }
      const radian = (startRadian - endRadian) / 2 + endRadian;
      const midPoint = centerPoint.add(new Vector2(Math.cos(radian), Math.sin(radian)).mul(radius));
      return midPoint;
    }
    isInArea(point, width) {
      const { x, y } = point;
      const centerPoint = this.centerPoint;
      const radius = this.rx;
      let startRadian = Angles.degreeToRadian(this.startRadian);
      if (this.sweep === 0 /* CW */) {
        startRadian = Angles.degreeToRadian(this.endRadian);
      }
      let endRadian = Angles.degreeToRadian(this.endRadian);
      if (this.sweep === 0 /* CW */) {
        endRadian = Angles.degreeToRadian(this.startRadian);
      }
      const [innerRadius, outerRadius] = [radius - width / 2, radius + width / 2];
      const [dx, dy] = [x - centerPoint.x, y - centerPoint.y];
      let radian = Math.atan2(dy, dx);
      if (radian < 0) {
        endRadian += Math.PI * 2;
      }
      if (startRadian <= endRadian && radian >= startRadian && radian <= endRadian || startRadian > endRadian && (radian >= startRadian && radian <= Math.PI * 2 || radian >= 0 && radian <= endRadian) || startRadian === endRadian) {
        let r2 = Math.sqrt(dx * dx + dy * dy);
        if (r2 <= outerRadius && r2 >= innerRadius) {
          return true;
        }
        return false;
      }
      let r = (outerRadius + innerRadius) / 2;
      const [startP, endP] = [
        new Vector2(centerPoint.x + Math.cos(startRadian) * r, centerPoint.y + Math.sin(startRadian) * r),
        new Vector2(centerPoint.x + Math.cos(endRadian) * r, centerPoint.y + Math.sin(endRadian) * r)
      ];
      const [dx1, dy1] = [x - startP.x, y - startP.y];
      const [dx2, dy2] = [x - endP.x, y - endP.y];
      if (dx1 * dx1 + dy1 * dy1 <= width * width / 4) {
        return true;
      }
      if (dx2 * dx2 + dy2 * dy2 <= width * width / 4) {
        return true;
      }
      return false;
    }
    reverse() {
      return _Arc.build1(this.endPoint, this.startPoint, this.rx, this.ry, this.isOverHalfCircle, this.sweepRadian >= 0 ? 0 /* CW */ : 1 /* CCW */);
    }
    buildBBox2() {
      const endRadian = this.startRadian + this.sweepRadian;
      let [minX, maxX, minY, maxY] = [0, 0, 0, 0];
      if (this.sweepRadian > 0) {
        let nextAngle = 0;
        while (nextAngle < endRadian) {
          if (nextAngle >= this.startRadian) {
            const point = this.pointOn(Angles.radianToDegree(nextAngle));
            minX = Math.min(minX, point.x);
            maxX = Math.max(maxX, point.x);
            minY = Math.min(minY, point.y);
            maxY = Math.max(maxY, point.y);
          }
          nextAngle += Math.PI / 2;
        }
      } else if (this.sweepRadian < 0) {
        let nextAngle = 360;
        while (nextAngle > endRadian) {
          if (nextAngle <= this.startRadian) {
            const point = this.pointOn(Angles.radianToDegree(nextAngle));
            minX = Math.min(minX, point.x);
            maxX = Math.max(maxX, point.x);
            minY = Math.min(minY, point.y);
            maxY = Math.max(maxY, point.y);
          }
          nextAngle -= Math.PI / 2;
        }
      }
      return new BBox2(minX, minY, maxX, maxY);
    }
    getSvgEnd(startRadian, sweepRadian, startPoint, endPoint) {
      let step = sweepRadian >= 0 ? -0.01 : 0.01;
      let endRadian = startRadian + sweepRadian;
      while ((sweepRadian >= 0 && endRadian > startRadian || sweepRadian < 0 && endRadian < startRadian) && startPoint.distance(endPoint) < 2e-4) {
        step *= 2;
        endRadian += step;
        endPoint = this.pointOn(endRadian);
      }
      return endPoint;
    }
  };

  // src/algorithm/geometry/primitives/Line.ts
  var Line = class _Line extends Primitive {
    constructor(startPoint, endPoint) {
      super();
      this._startPoint = startPoint;
      this._endPoint = endPoint;
      this._a = null;
      this._b = null;
      this._c = null;
      this._hashsed = null;
      this._direct = null;
    }
    get startPoint() {
      return this._startPoint;
    }
    set startPoint(value) {
      this._startPoint = value;
    }
    get endPoint() {
      return this._endPoint;
    }
    set endPoint(value) {
      this._endPoint = value;
    }
    get a() {
      if (this._a === null) {
        if (this.startPoint.equalsWithPoint(this.endPoint)) {
          this._a = NaN;
          this._b = NaN;
          this._c = NaN;
        } else {
          this._a = this.endPoint.y - this.startPoint.y;
          this._b = this.endPoint.x - this.startPoint.x;
          this._c = this.endPoint.x * this.startPoint.y - this.startPoint.x * this.endPoint.y;
        }
      }
      return this._a;
    }
    get b() {
      if (this._b === null) {
        if (this.startPoint.equalsWithPoint(this.endPoint)) {
          this._a = NaN;
          this._b = NaN;
          this._c = NaN;
        } else {
          this._a = this.endPoint.y - this.startPoint.y;
          this._b = this.startPoint.x - this.endPoint.x;
          this._c = this.endPoint.x * this.startPoint.y - this.startPoint.x * this.endPoint.y;
        }
      }
      return this._b;
    }
    get c() {
      if (this._c === null) {
        if (this.startPoint.equalsWithPoint(this.endPoint)) {
          this._a = NaN;
          this._b = NaN;
          this._c = NaN;
        } else {
          this._a = this.endPoint.y - this.startPoint.y;
          this._b = this.startPoint.x - this.endPoint.x;
          this._c = this.endPoint.x * this.startPoint.y - this.startPoint.x * this.endPoint.y;
        }
      }
      return this._c;
    }
    get direct() {
      if (this._direct === null) {
        this._direct = this._endPoint.sub(this.startPoint).normalize();
      }
      return this._direct;
    }
    get bbox2() {
      const minX = Math.min(this.startPoint.x, this.endPoint.x);
      const maxX = Math.max(this.startPoint.x, this.endPoint.x);
      const minY = Math.min(this.startPoint.y, this.endPoint.y);
      const maxY = Math.max(this.startPoint.y, this.endPoint.y);
      return new BBox2(minX, minY, maxX, maxY);
    }
    get length() {
      return this.startPoint.distance(this.endPoint);
    }
    toString() {
      return `Line (${this.startPoint.x}, ${this.startPoint.y}, ${this.endPoint.x}, ${this.endPoint.y})`;
    }
    toPoints() {
      return [this.startPoint, this.endPoint];
    }
    reverse() {
      return new _Line(this.endPoint, this.startPoint);
    }
    isPoint() {
      if (this, this.startPoint.distance(this.endPoint) <= 1e-8) {
        return true;
      }
      return this.startPoint.equalsWithVector2(this.endPoint);
    }
    multiplyMatrix3(matrix3) {
      return new _Line(this._startPoint.multiplyMatrix3(matrix3), this._endPoint.multiplyMatrix3(matrix3));
    }
    mirror(origin) {
      return new _Line(this.startPoint.mirrorSurroundY(origin), this.endPoint.mirrorSurroundY(origin));
    }
    isParallel(stLine, needSameDir = false) {
      const parallel = DoubleKit.eq(Math.abs(this.direct.cross(stLine.direct)), 0);
      const isSameDir = !needSameDir || DoubleKit.greatereq(this.direct.dot(stLine.direct), 0);
      return parallel && isSameDir;
    }
    distance(point) {
      const [AB, AP] = [
        { x: this.endPoint.x - this.startPoint.x, y: this.endPoint.y - this.startPoint.y },
        { x: point.x - this.startPoint.x, y: point.y - this.startPoint.y }
      ];
      const [dot, lenSq] = [AB.x * AP.x + AB.y * AP.y, AB.x * AB.x + AB.y * AB.y];
      let t = dot / lenSq;
      if (t < 0) {
        t = 0;
      }
      if (t > 1) {
        t = 1;
      }
      const D = {
        x: this.startPoint.x + t * AB.x,
        y: this.startPoint.y + t * AB.y
      };
      const [dx, dy] = [point.x - D.x, point.y - D.y];
      return Math.sqrt(dx * dx + dy * dy);
    }
    storke(width, cap, sweep) {
      let origin = null;
      let [xOff, yOff] = [void 0, void 0];
      if (this.endPoint.x < this.startPoint.x) {
        xOff = this.startPoint.x - this.endPoint.x;
        yOff = this.startPoint.y - this.endPoint.y;
        origin = this.endPoint;
      } else {
        xOff = this.endPoint.x - this.startPoint.x;
        yOff = this.endPoint.y - this.startPoint.y;
        origin = this.startPoint;
      }
      const length = Math.sqrt(xOff * xOff + yOff * yOff);
      const halfWidth = width / 2;
      let pl = null;
      let [left, right] = [void 0, void 0];
      if (cap === "SQUARE" /* SQUARE */) {
        left = -halfWidth;
        right = length + halfWidth;
      } else {
        left = 0;
        right = length;
      }
      if (cap === "BUTT" /* BUTT */ || cap === "SQUARE" /* SQUARE */) {
        if (sweep === 0 /* CW */) {
          pl = Polyline.build5([left, -halfWidth, left, halfWidth, right, halfWidth, right, -halfWidth]);
        } else {
          pl = Polyline.build5([left, halfWidth, left, -halfWidth, right, -halfWidth, right, halfWidth]);
        }
      } else {
        if (sweep === 0 /* CW */) {
          pl = Polyline.build2([
            Arc.build3(new Vector2(left, 0), -90, -180, halfWidth, halfWidth),
            Arc.build3(new Vector2(right, 0), 90, -180, halfWidth, halfWidth)
          ]);
        } else {
          pl = Polyline.build2([
            Arc.build3(new Vector2(left, 0), 90, 180, halfWidth, halfWidth),
            Arc.build3(new Vector2(right, 0), -90, 180, halfWidth, halfWidth)
          ]);
        }
      }
      const orientation = Math.atan2(yOff, xOff);
      pl = pl.asClose();
      return pl.multiplyMatrix3(Matrix3.rotate(orientation).multiply3(Matrix3.translate(origin.x, origin.y)));
    }
    isInArea(point, width, cap) {
      const { x, y } = point;
      let [start, end] = [this.startPoint, this.endPoint];
      const isRound = cap === "ROUND" /* ROUND */ ? true : false;
      const [dx, dy] = [x - start.x, y - start.y];
      const [dx2, dy2] = [x - end.x, y - end.y];
      const [X, Y] = [end.x - start.y, end.y - start.y];
      const vertical = new Vector2(Y, X).normalize();
      const [limitX, limitY] = [X + vertical.x * width / 2, Y + vertical.y * width / 2];
      const limit = limitX * limitX + limitY * limitY;
      const [len, len2] = [dx * dx + dy * dy, dx2 * dx2 + dy2 * dy2];
      const length = Math.sqrt(X * X + Y * Y);
      if (Math.abs(dx * Y - dy * X) / 2 <= length * width / 4 && len <= limit && len2 <= limit) {
        if (isRound) {
          return true;
        }
        const p2end = new Vector2(x, y).sub(end).normalize();
        const p2start = new Vector2(x, y).sub(start).normalize();
        const cross = new Vector2(vertical.x, vertical.y).cross(p2end);
        const corss1 = new Vector2(vertical.x, vertical.y).cross(p2start);
        if (cross >= 0 && corss1 < 0) {
          return true;
        }
        return false;
      }
      if (isRound) {
        const r = width / 2;
        if (len <= r * r) {
          return true;
        }
        if (len2 <= r * r) {
          return true;
        }
        return false;
      }
      return false;
    }
  };

  // src/engine/algorithm/geometry/matrix/Matrix4.ts
  var VEN$MATRIX4_ORIGIN_DATA = [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ];
  var _Matrix4 = class _Matrix4 extends Matrix {
    static translate(xOff, yOff, zOff) {
      return new _Matrix4([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        xOff,
        yOff,
        zOff,
        1
      ]);
    }
    static rotateX(radian) {
      const cosV = Math.cos(radian);
      const sinV = Math.sin(radian);
      return new _Matrix4([
        1,
        0,
        0,
        0,
        0,
        cosV,
        sinV,
        0,
        0,
        -sinV,
        cosV,
        0,
        0,
        0,
        0,
        1
      ]);
    }
    static rotateY(radian) {
      const cosV = Math.cos(radian);
      const sinV = Math.sin(radian);
      return new _Matrix4([
        cosV,
        0,
        -sinV,
        0,
        0,
        1,
        0,
        0,
        sinV,
        0,
        cosV,
        0,
        0,
        0,
        0,
        1
      ]);
    }
    static rotateZ(radian) {
      const cosV = Math.cos(radian);
      const sinV = Math.sin(radian);
      return new _Matrix4([
        cosV,
        sinV,
        0,
        0,
        -sinV,
        cosV,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
    }
    static rotateZForPoint(center, radian) {
      if (center.equalsWithVector2(Vector2.ORIGIN)) {
        return _Matrix4.rotateZ(radian);
      }
      return _Matrix4.translate(-center.x, -center.y, 0).rotateZ(radian).translate(center.x, center.y, 0);
    }
    static scale(xR, yR, zR) {
      return new _Matrix4([
        xR,
        0,
        0,
        0,
        0,
        yR,
        0,
        0,
        0,
        0,
        zR,
        0,
        0,
        0,
        0,
        1
      ]);
    }
    static flipX() {
      return new _Matrix4([
        1,
        0,
        0,
        0,
        0,
        -1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
    }
    static flipY() {
      return new _Matrix4([
        -1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
    }
    static getMatrix4(startTranslate, endTranslate, radian, scaleX) {
      const cos = Math.cos(radian);
      const sin = Math.sin(radian);
      const x = scaleX * (startTranslate.x * cos - startTranslate.y * sin) + endTranslate.x;
      const y = startTranslate.x * sin + startTranslate.y * cos + endTranslate.y;
      const data = [
        scaleX * cos,
        sin,
        0,
        0,
        -sin * scaleX,
        cos,
        0,
        0,
        0,
        0,
        1,
        0,
        x,
        y,
        0,
        1
      ];
      return new _Matrix4(data);
    }
    constructor(data = [...VEN$MATRIX4_ORIGIN_DATA]) {
      super(4, 4, data);
    }
    multiply4(matrix4) {
      return new _Matrix4(Matrix.matrixMul(4, 4, 4, 4, this.data, matrix4.data));
    }
    toMatrix3() {
      return new Matrix3([
        this.data[0],
        this.data[1],
        0,
        this.data[4],
        this.data[5],
        0,
        this.data[12],
        this.data[13],
        1
      ]);
    }
    resetBy(matrix4) {
      for (let i = 0; i < matrix4.data.length; i++) {
        this.data[i] = matrix4.data[i];
      }
    }
    rotateX(radian) {
      return this.multiply4(_Matrix4.rotateX(radian));
    }
    rotateY(radian) {
      return this.multiply4(_Matrix4.rotateY(radian));
    }
    rotateZ(radian) {
      return this.multiply4(_Matrix4.rotateZ(radian));
    }
    scale(xR, yR, zR) {
      return this.multiply4(_Matrix4.scale(xR, yR, zR));
    }
    translate(xOff, yOff, zOff) {
      return this.multiply4(_Matrix4.translate(xOff, yOff, zOff));
    }
    setOrigin(x, y, z) {
      return _Matrix4.translate(-x, -y, -z).multiply4(this).translate(x, y, z);
    }
    /**
     * 矩阵转置
     */
    transpose() {
      return new _Matrix4(super.transpose().data);
    }
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    getInverseMatrix() {
      return new _Matrix4(super.getInverseMatrix().data);
    }
  };
  _Matrix4.ORIGIN = new _Matrix4();
  var Matrix4 = _Matrix4;

  // src/engine/algorithm/geometry/matrix/CanvasMatrix4.ts
  var CanvasMatrix4 = class _CanvasMatrix4 {
    static initMatrix() {
      return new Matrix4();
    }
    static setFromArray(array) {
      if (array.length !== 16) {
        return new Matrix4();
      }
      const matrix4 = new Matrix4();
      for (let i = 0; i < 16; i++) {
        matrix4.data[i] = array[i];
      }
      return matrix4;
    }
    static copyMatrix(refMatrix4) {
      const matrix4 = new Matrix4();
      for (let i = 0; i < refMatrix4.data.length; i++) {
        matrix4.data[i] = refMatrix4.data[i];
      }
      return matrix4;
    }
    static setRotationFromEuler(euler) {
      const matrix4 = new Matrix4();
      const { x, y, z, order } = euler;
      const a = Math.cos(x);
      const b = Math.sin(x);
      const c = Math.cos(y);
      const d = Math.sin(y);
      const e = Math.cos(z);
      const f = Math.sin(z);
      if (order === "XYZ" /* XYZ */) {
        const ae = a * e;
        const af = a * f;
        const be = b * e;
        const bf = b * f;
        matrix4.data[0] = c * e;
        matrix4.data[4] = -c * f;
        matrix4.data[8] = d;
        matrix4.data[1] = af + be * d;
        matrix4.data[5] = ae - bf * d;
        matrix4.data[9] = -b * c;
        matrix4.data[2] = bf - ae * d;
        matrix4.data[6] = be + af * d;
        matrix4.data[10] = a * c;
      } else if (order === "YXZ" /* YXZ */) {
        const ce = c * e;
        const cf = c * f;
        const de = d * e;
        const df = d * f;
        matrix4.data[0] = ce + df * b;
        matrix4.data[4] = de * b - cf;
        matrix4.data[8] = a * d;
        matrix4.data[1] = a * f;
        matrix4.data[5] = a * e;
        matrix4.data[9] = -b;
        matrix4.data[2] = cf * b - de;
        matrix4.data[6] = df + ce * b;
        matrix4.data[10] = a * c;
      } else if (order === "ZXY" /* ZXY */) {
        const ce = c * e;
        const cf = c * f;
        const de = d * e;
        const df = d * f;
        matrix4.data[0] = ce - df * b;
        matrix4.data[4] = -a * f;
        matrix4.data[8] = de + cf * b;
        matrix4.data[1] = cf + de * b;
        matrix4.data[5] = a * e;
        matrix4.data[9] = df - ce * b;
        matrix4.data[2] = -a * d;
        matrix4.data[6] = b;
        matrix4.data[10] = a * c;
      } else if (order === "ZYX" /* ZYX */) {
        const ae = a * e;
        const af = a * f;
        const be = b * e;
        const bf = b * f;
        matrix4.data[0] = c * e;
        matrix4.data[4] = be * d - af;
        matrix4.data[8] = ae * d + bf;
        matrix4.data[1] = c * f;
        matrix4.data[5] = bf * d + ae;
        matrix4.data[9] = af * d - be;
        matrix4.data[2] = -d;
        matrix4.data[6] = b * c;
        matrix4.data[10] = a * c;
      } else if (order === "YZX" /* YZX */) {
        const ac = a * c;
        const ad = a * d;
        const bc = b * c;
        const bd = b * d;
        matrix4.data[0] = c * e;
        matrix4.data[4] = bd - ac * f;
        matrix4.data[8] = bc * f + ad;
        matrix4.data[1] = f;
        matrix4.data[5] = a * e;
        matrix4.data[9] = -b * e;
        matrix4.data[2] = -d * e;
        matrix4.data[6] = ad * f + bc;
        matrix4.data[10] = ac - bd * f;
      } else if (order === "XZY" /* XZY */) {
        const ac = a * c;
        const ad = a * d;
        const bc = b * c;
        const bd = b * d;
        matrix4.data[0] = c * e;
        matrix4.data[4] = -f;
        matrix4.data[8] = d * e;
        matrix4.data[1] = ac * f + bd;
        matrix4.data[5] = a * e;
        matrix4.data[9] = ad * f - bc;
        matrix4.data[2] = bc * f - ad;
        matrix4.data[6] = b * e;
        matrix4.data[10] = bd * f + ac;
      }
      matrix4.data[3] = 0;
      matrix4.data[7] = 0;
      matrix4.data[11] = 0;
      matrix4.data[12] = 0;
      matrix4.data[13] = 0;
      matrix4.data[14] = 0;
      matrix4.data[15] = 1;
      return matrix4;
    }
    static setRotationFromQuaternion(quaternion) {
      const matrix4 = new Matrix4();
      const { x, y, z, w } = quaternion;
      const x2 = 2 * x;
      const y2 = 2 * y;
      const z2 = 2 * z;
      const xx = x * x2;
      const xy = x * y2;
      const xz = x * z2;
      const yy = y * y2;
      const yz = y * z2;
      const zz = z * z2;
      const wx = w * x2;
      const wy = w * y2;
      const wz = w * z2;
      matrix4.data[0] = 1 - (yy + zz);
      matrix4.data[1] = xy + wz;
      matrix4.data[2] = xz - wy;
      matrix4.data[3] = 0;
      matrix4.data[4] = xy - wz;
      matrix4.data[5] = 1 - (xx + zz);
      matrix4.data[6] = yz + wx;
      matrix4.data[7] = 0;
      matrix4.data[8] = xz + wy;
      matrix4.data[9] = yz - wx;
      matrix4.data[10] = 1 - (xx + yy);
      matrix4.data[11] = 0;
      matrix4.data[12] = 0;
      matrix4.data[13] = 0;
      matrix4.data[14] = 0;
      matrix4.data[15] = 1;
      return matrix4;
    }
    static setFlipByLine(PA, PB) {
      const ax = PA.x;
      const ay = PA.y;
      const az = PA.z;
      const bx = PB.x;
      const by = PB.y;
      const bz = PB.z;
      let dx = bx - ax;
      let dy = by - ay;
      let dz = bz - az;
      const len = Math.hypot(dx, dy, dz);
      dx /= len;
      dy /= len;
      dz /= len;
      const r00 = 2 * dx * dx - 1;
      const r01 = 2 * dx * dy;
      const r02 = 2 * dx * dz;
      const r10 = 2 * dy * dx;
      const r11 = 2 * dy * dy - 1;
      const r12 = 2 * dy * dz;
      const r20 = 2 * dz * dx;
      const r21 = 2 * dz * dy;
      const r22 = 2 * dz * dz - 1;
      const tx = ax - (r00 * ax + r01 * ay + r02 * az);
      const ty = ay - (r10 * ax + r11 * ay + r12 * az);
      const tz = az - (r20 * ax + r21 * ay + r22 * az);
      return new Matrix4([r00, r10, r20, 0, r01, r11, r21, 0, r02, r12, r22, 0, tx, ty, tz, 1]);
    }
    static setRotationByLine(radian, PA, PB) {
      const ax = PA.x;
      const ay = PA.y;
      const az = PA.z;
      let ux = PB.x - PA.x;
      let uy = PB.y - PA.y;
      let uz = PB.z - PA.z;
      const len = Math.hypot(ux, uy, uz);
      ux /= len;
      uy /= len;
      uz /= len;
      const c = Math.cos(radian);
      const s = Math.sin(radian);
      const t = 1 - c;
      const r00 = c + ux * ux * t;
      const r01 = ux * uy * t - uz * s;
      const r02 = ux * uz * t + uy * s;
      const r10 = uy * ux * t + uz * s;
      const r11 = c + uy * uy * t;
      const r12 = uy * uz * t - ux * s;
      const r20 = uz * ux * t - uy * s;
      const r21 = uz * uy * t + ux * s;
      const r22 = c + uz * uz * t;
      const tx = ax - (r00 * ax + r01 * ay + r02 * az);
      const ty = ay - (r10 * ax + r11 * ay + r12 * az);
      const tz = az - (r20 * ax + r21 * ay + r22 * az);
      return new Matrix4([r00, r10, r20, 0, r01, r11, r21, 0, r02, r12, r22, 0, tx, ty, tz, 1]);
    }
    static setRotationByVector3(radian, axisVector3) {
      const matrix4 = new Matrix4();
      const { x, y, z } = axisVector3;
      if (x === 0 && y === 0 && z === 0) {
        throw new Error("[CanvasMatrix4] the rotation vector cannot be a point.");
      }
      let vx = x;
      let vy = y;
      let vz = z;
      let s = Math.sin(radian);
      let c = Math.cos(radian);
      if (0 !== vx && 0 === vy && 0 === vz) {
        if (vx < 0) {
          s = -s;
        }
        matrix4.data[0] = 1;
        matrix4.data[4] = 0;
        matrix4.data[8] = 0;
        matrix4.data[12] = 0;
        matrix4.data[1] = 0;
        matrix4.data[5] = c;
        matrix4.data[9] = -s;
        matrix4.data[13] = 0;
        matrix4.data[2] = 0;
        matrix4.data[6] = s;
        matrix4.data[10] = c;
        matrix4.data[14] = 0;
        matrix4.data[3] = 0;
        matrix4.data[7] = 0;
        matrix4.data[11] = 0;
        matrix4.data[15] = 1;
      } else if (0 === vx && 0 !== vy && 0 === vz) {
        if (vy < 0) {
          s = -s;
        }
        matrix4.data[0] = c;
        matrix4.data[4] = 0;
        matrix4.data[8] = s;
        matrix4.data[12] = 0;
        matrix4.data[1] = 0;
        matrix4.data[5] = 1;
        matrix4.data[9] = 0;
        matrix4.data[13] = 0;
        matrix4.data[2] = -s;
        matrix4.data[6] = 0;
        matrix4.data[10] = c;
        matrix4.data[14] = 0;
        matrix4.data[3] = 0;
        matrix4.data[7] = 0;
        matrix4.data[11] = 0;
        matrix4.data[15] = 1;
      } else if (0 === vx && 0 === vy && 0 !== vz) {
        if (vz < 0) {
          s = -s;
        }
        matrix4.data[0] = c;
        matrix4.data[4] = -s;
        matrix4.data[8] = 0;
        matrix4.data[12] = 0;
        matrix4.data[1] = s;
        matrix4.data[5] = c;
        matrix4.data[9] = 0;
        matrix4.data[13] = 0;
        matrix4.data[2] = 0;
        matrix4.data[6] = 0;
        matrix4.data[10] = 1;
        matrix4.data[14] = 0;
        matrix4.data[3] = 0;
        matrix4.data[7] = 0;
        matrix4.data[11] = 0;
        matrix4.data[15] = 1;
      } else {
        const len = Math.sqrt(vx * vx + vy * vy + vz * vz);
        if (len !== 1) {
          const rlen = 1 / len;
          vx *= rlen;
          vy *= rlen;
          vz *= rlen;
        }
        const nc = 1 - c;
        const xy = vx * vy;
        const yz = vy * vz;
        const zx = vz * vx;
        const xs = vx * s;
        const ys = vy * s;
        const zs = vz * s;
        matrix4.data[0] = vx * vx * nc + c;
        matrix4.data[1] = xy * nc + zs;
        matrix4.data[2] = zx * nc - ys;
        matrix4.data[3] = 0;
        matrix4.data[4] = xy * nc - zs;
        matrix4.data[5] = vy * vy * nc + c;
        matrix4.data[6] = yz * nc + xs;
        matrix4.data[7] = 0;
        matrix4.data[8] = zx * nc + ys;
        matrix4.data[9] = yz * nc - xs;
        matrix4.data[10] = vz * vz * nc + c;
        matrix4.data[11] = 0;
        matrix4.data[12] = 0;
        matrix4.data[13] = 0;
        matrix4.data[14] = 0;
        matrix4.data[15] = 1;
      }
      return matrix4;
    }
    static setTranslateByVector3(directionVector3) {
      const matrix4 = new Matrix4();
      const { x, y, z } = directionVector3;
      matrix4.data[0] = 1;
      matrix4.data[4] = 0;
      matrix4.data[8] = 0;
      matrix4.data[12] = x;
      matrix4.data[1] = 0;
      matrix4.data[5] = 1;
      matrix4.data[9] = 0;
      matrix4.data[13] = y;
      matrix4.data[2] = 0;
      matrix4.data[6] = 0;
      matrix4.data[10] = 1;
      matrix4.data[14] = z;
      matrix4.data[3] = 0;
      matrix4.data[7] = 0;
      matrix4.data[11] = 0;
      matrix4.data[15] = 1;
      return matrix4;
    }
    static setScaleByValue(x, y, z) {
      const matrix4 = new Matrix4();
      matrix4.data[0] = x;
      matrix4.data[4] = 0;
      matrix4.data[8] = 0;
      matrix4.data[12] = 0;
      matrix4.data[1] = 0;
      matrix4.data[5] = y;
      matrix4.data[9] = 0;
      matrix4.data[13] = 0;
      matrix4.data[2] = 0;
      matrix4.data[6] = 0;
      matrix4.data[10] = z;
      matrix4.data[14] = 0;
      matrix4.data[3] = 0;
      matrix4.data[7] = 0;
      matrix4.data[11] = 0;
      matrix4.data[15] = 1;
      return matrix4;
    }
    /**
     * @description 创建正交投影矩阵
     * @function setOrtho
     * @param {number} left 可视范围左侧裁剪位置(左侧边界)
     * @param {number} right 可视范围右侧裁剪位置(右侧边界)
     * @param {number} bottom 可视范围底部裁剪位置(底部边界)
     * @param {number} top 可视范围顶部裁剪位置(顶部边界)
     * @param {number} near 可视范围纵深方向近端裁剪位置(近端边界)
     * @param {number} far 可视范围纵深方向远端裁剪位置(远端边界)
     * @return {Matrix4}
     */
    static setOrtho(left, right, bottom, top, near, far) {
      const matrix4 = new Matrix4();
      if (left === right || bottom === top || near === far) {
        throw "null frustum";
      }
      const rw = 1 / (right - left);
      const rh = 1 / (top - bottom);
      const rd = 1 / (far - near);
      matrix4.data[0] = 2 * rw;
      matrix4.data[1] = 0;
      matrix4.data[2] = 0;
      matrix4.data[3] = 0;
      matrix4.data[4] = 0;
      matrix4.data[5] = 2 * rh;
      matrix4.data[6] = 0;
      matrix4.data[7] = 0;
      matrix4.data[8] = 0;
      matrix4.data[9] = 0;
      matrix4.data[10] = -2 * rd;
      matrix4.data[11] = 0;
      matrix4.data[12] = -(right + left) * rw;
      matrix4.data[13] = -(top + bottom) * rh;
      matrix4.data[14] = -(far + near) * rd;
      matrix4.data[15] = 1;
      return matrix4;
    }
    static setOrthoRectView(aspect, near = 100, far = -100, padding = 1) {
      return this.setOrtho(-aspect * padding, aspect * padding, -padding, padding, near, far);
    }
    /**
     * @description 创建透视投影矩阵
     * @function setPerspective
     * @param {number} fovy 可视范围上下边界面构成的夹角
     * @param {number} aspect 可视范围宽高比
     * @param {number} near 可视范围纵深方向近端裁剪位置(近端边界)
     * @param {number} far 可视范围纵深方向远端裁剪位置(远端边界)
     * @return {Matrix4}
     */
    static setPerspective(fovy, aspect, near, far) {
      const matrix4 = new Matrix4();
      if (near === far || aspect === 0) {
        throw "null frustum";
      }
      if (near <= 0) {
        throw "near <= 0";
      }
      if (far <= 0) {
        throw "far <= 0";
      }
      const _fovy = Math.PI * fovy / 180 / 2;
      const s = Math.sin(_fovy);
      if (s === 0) {
        throw "null frustum";
      }
      const rd = 1 / (far - near);
      const ct = Math.cos(_fovy) / s;
      matrix4.data[0] = ct / aspect;
      matrix4.data[1] = 0;
      matrix4.data[2] = 0;
      matrix4.data[3] = 0;
      matrix4.data[4] = 0;
      matrix4.data[5] = ct;
      matrix4.data[6] = 0;
      matrix4.data[7] = 0;
      matrix4.data[8] = 0;
      matrix4.data[9] = 0;
      matrix4.data[10] = -(far + near) * rd;
      matrix4.data[11] = -1;
      matrix4.data[12] = 0;
      matrix4.data[13] = 0;
      matrix4.data[14] = -2 * near * far * rd;
      matrix4.data[15] = 0;
      return matrix4;
    }
    /**
     * @description 创建透视投影矩阵
     * @function setOrtho
     * @param {number} left 可视范围左侧裁剪位置(左侧边界)
     * @param {number} right 可视范围右侧裁剪位置(右侧边界)
     * @param {number} bottom 可视范围底部裁剪位置(底部边界)
     * @param {number} top 可视范围顶部裁剪位置(顶部边界)
     * @param {number} near 可视范围纵深方向近端裁剪位置(近端边界)
     * @param {number} far 可视范围纵深方向远端裁剪位置(远端边界)
     * @return {Matrix4}
     */
    static setFrustum(left, right, bottom, top, near, far) {
      const matrix4 = new Matrix4();
      if (left === right || top === bottom || near === far) {
        throw "null frustum";
      }
      if (near <= 0) {
        throw "near <= 0";
      }
      if (far <= 0) {
        throw "far <= 0";
      }
      const rw = 1 / (right - left);
      const rh = 1 / (top - bottom);
      const rd = 1 / (far - near);
      matrix4.data[0] = 2 * near * rw;
      matrix4.data[1] = 0;
      matrix4.data[2] = 0;
      matrix4.data[3] = 0;
      matrix4.data[4] = 0;
      matrix4.data[5] = 2 * near * rh;
      matrix4.data[6] = 0;
      matrix4.data[7] = 0;
      matrix4.data[8] = (right + left) * rw;
      matrix4.data[9] = (top + bottom) * rh;
      matrix4.data[10] = -(far + near) * rd;
      matrix4.data[11] = -1;
      matrix4.data[12] = 0;
      matrix4.data[13] = 0;
      matrix4.data[14] = -2 * near * far * rd;
      matrix4.data[15] = 0;
      return matrix4;
    }
    /**
     * @description 创建视图矩阵
     * @function setLookAt
     * @param {Vector3} eyeVector3 观察者视点位置
     * @param {Vector3} atVector3 观察目标点位置
     * @param {Vector3} upVector3 观察者上方向
     * @return {Matrix4}
     */
    static setLookAt(eyeVector3, atVector3, upVector3 = new Vector3(0, 1, 0)) {
      const matrix4 = new Matrix4();
      const { x: eyeX, y: eyeY, z: eyeZ } = eyeVector3;
      const { x: atX, y: atY, z: atZ } = atVector3;
      const { x: upX, y: upY, z: upZ } = upVector3;
      let fx = atX - eyeX;
      let fy = atY - eyeY;
      let fz = atZ - eyeZ;
      const rlf = 1 / Math.sqrt(fx * fx + fy * fy + fz * fz);
      fx *= rlf;
      fy *= rlf;
      fz *= rlf;
      let sx = fy * upZ - fz * upY;
      let sy = fz * upX - fx * upZ;
      let sz = fx * upY - fy * upX;
      const rls = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
      sx *= rls;
      sy *= rls;
      sz *= rls;
      let ux = sy * fz - sz * fy;
      let uy = sz * fx - sx * fz;
      let uz = sx * fy - sy * fx;
      matrix4.data[0] = sx;
      matrix4.data[1] = ux;
      matrix4.data[2] = -fx;
      matrix4.data[3] = 0;
      matrix4.data[4] = sy;
      matrix4.data[5] = uy;
      matrix4.data[6] = -fy;
      matrix4.data[7] = 0;
      matrix4.data[8] = sz;
      matrix4.data[9] = uz;
      matrix4.data[10] = -fz;
      matrix4.data[11] = 0;
      matrix4.data[12] = 0;
      matrix4.data[13] = 0;
      matrix4.data[14] = 0;
      matrix4.data[15] = 1;
      return _CanvasMatrix4.setTranslateByVector3(new Vector3(-eyeX, -eyeY, -eyeZ)).multiply4(matrix4);
    }
    /**
     * @description 创建转置矩阵
     * @function setTranspose
     * @param {Matrix4} sourceMatrix4 矩阵
     * @return {Matrix4}
     */
    static setTranspose(sourceMatrix4) {
      const matrix4 = new Matrix4();
      for (let i = 0; i < sourceMatrix4.data.length; i++) {
        matrix4.data[i] = sourceMatrix4.data[i];
      }
      let t = void 0;
      t = matrix4.data[1];
      matrix4.data[1] = matrix4.data[4];
      matrix4.data[4] = t;
      t = matrix4.data[2];
      matrix4.data[2] = matrix4.data[8];
      matrix4.data[8] = t;
      t = matrix4.data[3];
      matrix4.data[3] = matrix4.data[12];
      matrix4.data[12] = t;
      t = matrix4.data[6];
      matrix4.data[6] = matrix4.data[9];
      matrix4.data[9] = t;
      t = matrix4.data[7];
      matrix4.data[7] = matrix4.data[13];
      matrix4.data[13] = t;
      t = matrix4.data[11];
      matrix4.data[11] = matrix4.data[14];
      matrix4.data[14] = t;
      return matrix4;
    }
    /**
     * @description 创建逆矩阵
     * @function setInverse
     * @param {Matrix4} sourceMatrix4 矩阵
     * @return {Matrix4}
     */
    static setInverse(sourceMatrix4) {
      const invMatrix4 = new Matrix4();
      const resultMatrix4 = new Matrix4();
      invMatrix4.data[0] = sourceMatrix4.data[5] * sourceMatrix4.data[10] * sourceMatrix4.data[15] - sourceMatrix4.data[5] * sourceMatrix4.data[11] * sourceMatrix4.data[14] - sourceMatrix4.data[9] * sourceMatrix4.data[6] * sourceMatrix4.data[15] + sourceMatrix4.data[9] * sourceMatrix4.data[7] * sourceMatrix4.data[14] + sourceMatrix4.data[13] * sourceMatrix4.data[6] * sourceMatrix4.data[11] - sourceMatrix4.data[13] * sourceMatrix4.data[7] * sourceMatrix4.data[10];
      invMatrix4.data[4] = -sourceMatrix4.data[4] * sourceMatrix4.data[10] * sourceMatrix4.data[15] + sourceMatrix4.data[4] * sourceMatrix4.data[11] * sourceMatrix4.data[14] + sourceMatrix4.data[8] * sourceMatrix4.data[6] * sourceMatrix4.data[15] - sourceMatrix4.data[8] * sourceMatrix4.data[7] * sourceMatrix4.data[14] - sourceMatrix4.data[12] * sourceMatrix4.data[6] * sourceMatrix4.data[11] + sourceMatrix4.data[12] * sourceMatrix4.data[7] * sourceMatrix4.data[10];
      invMatrix4.data[8] = sourceMatrix4.data[4] * sourceMatrix4.data[9] * sourceMatrix4.data[15] - sourceMatrix4.data[4] * sourceMatrix4.data[11] * sourceMatrix4.data[13] - sourceMatrix4.data[8] * sourceMatrix4.data[5] * sourceMatrix4.data[15] + sourceMatrix4.data[8] * sourceMatrix4.data[7] * sourceMatrix4.data[13] + sourceMatrix4.data[12] * sourceMatrix4.data[5] * sourceMatrix4.data[11] - sourceMatrix4.data[12] * sourceMatrix4.data[7] * sourceMatrix4.data[9];
      invMatrix4.data[12] = -sourceMatrix4.data[4] * sourceMatrix4.data[9] * sourceMatrix4.data[14] + sourceMatrix4.data[4] * sourceMatrix4.data[10] * sourceMatrix4.data[13] + sourceMatrix4.data[8] * sourceMatrix4.data[5] * sourceMatrix4.data[14] - sourceMatrix4.data[8] * sourceMatrix4.data[6] * sourceMatrix4.data[13] - sourceMatrix4.data[12] * sourceMatrix4.data[5] * sourceMatrix4.data[10] + sourceMatrix4.data[12] * sourceMatrix4.data[6] * sourceMatrix4.data[9];
      invMatrix4.data[1] = -sourceMatrix4.data[1] * sourceMatrix4.data[10] * sourceMatrix4.data[15] + sourceMatrix4.data[1] * sourceMatrix4.data[11] * sourceMatrix4.data[14] + sourceMatrix4.data[9] * sourceMatrix4.data[2] * sourceMatrix4.data[15] - sourceMatrix4.data[9] * sourceMatrix4.data[3] * sourceMatrix4.data[14] - sourceMatrix4.data[13] * sourceMatrix4.data[2] * sourceMatrix4.data[11] + sourceMatrix4.data[13] * sourceMatrix4.data[3] * sourceMatrix4.data[10];
      invMatrix4.data[5] = sourceMatrix4.data[0] * sourceMatrix4.data[10] * sourceMatrix4.data[15] - sourceMatrix4.data[0] * sourceMatrix4.data[11] * sourceMatrix4.data[14] - sourceMatrix4.data[8] * sourceMatrix4.data[2] * sourceMatrix4.data[15] + sourceMatrix4.data[8] * sourceMatrix4.data[3] * sourceMatrix4.data[14] + sourceMatrix4.data[12] * sourceMatrix4.data[2] * sourceMatrix4.data[11] - sourceMatrix4.data[12] * sourceMatrix4.data[3] * sourceMatrix4.data[10];
      invMatrix4.data[9] = -sourceMatrix4.data[0] * sourceMatrix4.data[9] * sourceMatrix4.data[15] + sourceMatrix4.data[0] * sourceMatrix4.data[11] * sourceMatrix4.data[13] + sourceMatrix4.data[8] * sourceMatrix4.data[1] * sourceMatrix4.data[15] - sourceMatrix4.data[8] * sourceMatrix4.data[3] * sourceMatrix4.data[13] - sourceMatrix4.data[12] * sourceMatrix4.data[1] * sourceMatrix4.data[11] + sourceMatrix4.data[12] * sourceMatrix4.data[3] * sourceMatrix4.data[9];
      invMatrix4.data[13] = sourceMatrix4.data[0] * sourceMatrix4.data[9] * sourceMatrix4.data[14] - sourceMatrix4.data[0] * sourceMatrix4.data[10] * sourceMatrix4.data[13] - sourceMatrix4.data[8] * sourceMatrix4.data[1] * sourceMatrix4.data[14] + sourceMatrix4.data[8] * sourceMatrix4.data[2] * sourceMatrix4.data[13] + sourceMatrix4.data[12] * sourceMatrix4.data[1] * sourceMatrix4.data[10] - sourceMatrix4.data[12] * sourceMatrix4.data[2] * sourceMatrix4.data[9];
      invMatrix4.data[2] = sourceMatrix4.data[1] * sourceMatrix4.data[6] * sourceMatrix4.data[15] - sourceMatrix4.data[1] * sourceMatrix4.data[7] * sourceMatrix4.data[14] - sourceMatrix4.data[5] * sourceMatrix4.data[2] * sourceMatrix4.data[15] + sourceMatrix4.data[5] * sourceMatrix4.data[3] * sourceMatrix4.data[14] + sourceMatrix4.data[13] * sourceMatrix4.data[2] * sourceMatrix4.data[7] - sourceMatrix4.data[13] * sourceMatrix4.data[3] * sourceMatrix4.data[6];
      invMatrix4.data[6] = -sourceMatrix4.data[0] * sourceMatrix4.data[6] * sourceMatrix4.data[15] + sourceMatrix4.data[0] * sourceMatrix4.data[7] * sourceMatrix4.data[14] + sourceMatrix4.data[4] * sourceMatrix4.data[2] * sourceMatrix4.data[15] - sourceMatrix4.data[4] * sourceMatrix4.data[3] * sourceMatrix4.data[14] - sourceMatrix4.data[12] * sourceMatrix4.data[2] * sourceMatrix4.data[7] + sourceMatrix4.data[12] * sourceMatrix4.data[3] * sourceMatrix4.data[6];
      invMatrix4.data[10] = sourceMatrix4.data[0] * sourceMatrix4.data[5] * sourceMatrix4.data[15] - sourceMatrix4.data[0] * sourceMatrix4.data[7] * sourceMatrix4.data[13] - sourceMatrix4.data[4] * sourceMatrix4.data[1] * sourceMatrix4.data[15] + sourceMatrix4.data[4] * sourceMatrix4.data[3] * sourceMatrix4.data[13] + sourceMatrix4.data[12] * sourceMatrix4.data[1] * sourceMatrix4.data[7] - sourceMatrix4.data[12] * sourceMatrix4.data[3] * sourceMatrix4.data[5];
      invMatrix4.data[14] = -sourceMatrix4.data[0] * sourceMatrix4.data[5] * sourceMatrix4.data[14] + sourceMatrix4.data[0] * sourceMatrix4.data[6] * sourceMatrix4.data[13] + sourceMatrix4.data[4] * sourceMatrix4.data[1] * sourceMatrix4.data[14] - sourceMatrix4.data[4] * sourceMatrix4.data[2] * sourceMatrix4.data[13] - sourceMatrix4.data[12] * sourceMatrix4.data[1] * sourceMatrix4.data[6] + sourceMatrix4.data[12] * sourceMatrix4.data[2] * sourceMatrix4.data[5];
      invMatrix4.data[3] = -sourceMatrix4.data[1] * sourceMatrix4.data[6] * sourceMatrix4.data[11] + sourceMatrix4.data[1] * sourceMatrix4.data[7] * sourceMatrix4.data[10] + sourceMatrix4.data[5] * sourceMatrix4.data[2] * sourceMatrix4.data[11] - sourceMatrix4.data[5] * sourceMatrix4.data[3] * sourceMatrix4.data[10] - sourceMatrix4.data[9] * sourceMatrix4.data[2] * sourceMatrix4.data[7] + sourceMatrix4.data[9] * sourceMatrix4.data[3] * sourceMatrix4.data[6];
      invMatrix4.data[7] = sourceMatrix4.data[0] * sourceMatrix4.data[6] * sourceMatrix4.data[11] - sourceMatrix4.data[0] * sourceMatrix4.data[7] * sourceMatrix4.data[10] - sourceMatrix4.data[4] * sourceMatrix4.data[2] * sourceMatrix4.data[11] + sourceMatrix4.data[4] * sourceMatrix4.data[3] * sourceMatrix4.data[10] + sourceMatrix4.data[8] * sourceMatrix4.data[2] * sourceMatrix4.data[7] - sourceMatrix4.data[8] * sourceMatrix4.data[3] * sourceMatrix4.data[6];
      invMatrix4.data[11] = -sourceMatrix4.data[0] * sourceMatrix4.data[5] * sourceMatrix4.data[11] + sourceMatrix4.data[0] * sourceMatrix4.data[7] * sourceMatrix4.data[9] + sourceMatrix4.data[4] * sourceMatrix4.data[1] * sourceMatrix4.data[11] - sourceMatrix4.data[4] * sourceMatrix4.data[3] * sourceMatrix4.data[9] - sourceMatrix4.data[8] * sourceMatrix4.data[1] * sourceMatrix4.data[7] + sourceMatrix4.data[8] * sourceMatrix4.data[3] * sourceMatrix4.data[5];
      invMatrix4.data[15] = sourceMatrix4.data[0] * sourceMatrix4.data[5] * sourceMatrix4.data[10] - sourceMatrix4.data[0] * sourceMatrix4.data[6] * sourceMatrix4.data[9] - sourceMatrix4.data[4] * sourceMatrix4.data[1] * sourceMatrix4.data[10] + sourceMatrix4.data[4] * sourceMatrix4.data[2] * sourceMatrix4.data[9] + sourceMatrix4.data[8] * sourceMatrix4.data[1] * sourceMatrix4.data[6] - sourceMatrix4.data[8] * sourceMatrix4.data[2] * sourceMatrix4.data[5];
      let det = sourceMatrix4.data[0] * invMatrix4.data[0] + sourceMatrix4.data[1] * invMatrix4.data[4] + sourceMatrix4.data[2] * invMatrix4.data[8] + sourceMatrix4.data[3] * invMatrix4.data[12];
      if (det === 0) {
        return resultMatrix4;
      }
      det = 1 / det;
      for (let i = 0; i < invMatrix4.data.length; i++) {
        resultMatrix4.data[i] = invMatrix4.data[i] * det;
      }
      return resultMatrix4;
    }
  };

  // src/algorithm/geometry/D2RectToolkit.ts
  function isPointInRect(rectPoints, point) {
    let sign = 0;
    for (let i = 0; i < 4; i++) {
      const a = rectPoints[i];
      const b = rectPoints[(i + 1) % 4];
      const cross = (b.x - a.x) * (point.y - a.y) - (b.y - a.y) * (point.x - a.x);
      if (cross !== 0) {
        const s = Math.sign(cross);
        if (sign === 0) {
          sign = s;
          continue;
        }
        if (sign !== s) {
          return false;
        }
      }
    }
    return true;
  }
  function lineIntersection(p1, d1, p2, d2) {
    const cross = d1.x * d2.y - d1.y * d2.x;
    const t = ((p2.x - p1.x) * d2.y - (p2.y - p1.y) * d2.x) / cross;
    return new Vector2(p1.x + d1.x * t, p1.y + d1.y * t);
  }
  var D2RectToolkit = class {
    static rotationTranslate(newRotation, oldRotation, leftUp, rightUp, leftDown, rightDown) {
      const rotation = newRotation % (Math.PI * 2);
      const effectMatrix = CanvasMatrix4.setRotationByLine(
        rotation - oldRotation,
        new Vector3((leftUp.x + leftDown.x + rightUp.x + rightDown.x) / 4, (leftUp.y + leftDown.y + rightUp.y + rightDown.y) / 4, 0),
        new Vector3((leftUp.x + leftDown.x + rightUp.x + rightDown.x) / 4, (leftUp.y + leftDown.y + rightUp.y + rightDown.y) / 4, 1)
      );
      return {
        rotation,
        maxtrix4: effectMatrix
      };
    }
    static flipXTranslate(leftUp, rightUp, leftDown, rightDown) {
      const effectMatrix = CanvasMatrix4.setFlipByLine(
        leftUp.add(rightUp).mul(0.5).toVector3(0),
        leftDown.add(rightDown).mul(0.5).toVector3(0)
      );
      return {
        maxtrix4: effectMatrix
      };
    }
    static flipYTranslate(leftUp, rightUp, leftDown, rightDown) {
      const effectMatrix = CanvasMatrix4.setFlipByLine(
        leftUp.add(leftDown).mul(0.5).toVector3(0),
        rightUp.add(rightDown).mul(0.5).toVector3(0)
      );
      return {
        maxtrix4: effectMatrix
      };
    }
    /**
     * 判断点 point 是否处于矩形(由 rectPoints 构成的矩形)内部
     */
    static isPointOnRect(rectPoints, cornerRadius, point) {
      if (rectPoints.length !== 4) {
        throw new Error("rect must have 4 points");
      }
      if (cornerRadius <= 0) {
        return isPointInRect(rectPoints, point);
      }
      const insetRect = [];
      for (let i = 0; i < 4; i++) {
        const [prev, cur, next] = [rectPoints[(i + 3) % 4], rectPoints[i], rectPoints[(i + 1) % 4]];
        const [v1, v2] = [new Vector2(cur.x - prev.x, cur.y - prev.y), new Vector2(next.x - cur.x, next.y - cur.y)];
        const [n1, n2] = [new Vector2(-v1.y, v1.x).normalize(), new Vector2(-v2.y, v2.x).normalize()];
        const [p1, p2] = [
          new Vector2(cur.x + n1.x * cornerRadius, cur.y + n1.y * cornerRadius),
          new Vector2(cur.x + n2.x * cornerRadius, cur.y + n2.y * cornerRadius)
        ];
        insetRect.push(lineIntersection(p1, v1, p2, v2));
      }
      if (isPointInRect(insetRect, point)) {
        return true;
      }
      for (const v of rectPoints) {
        const dx = point.x - v.x;
        const dy = point.y - v.y;
        if (dx * dx + dy * dy <= cornerRadius * cornerRadius) {
          return true;
        }
      }
      return false;
    }
    static getRectCornerArcs(width, height, leftUp, leftLow, rightUp, rightLow, radius) {
      const arcs = [];
      if (radius <= 0) {
        return arcs;
      }
      const realCornerRadius = Math.min(width / 2, height / 2, radius);
      const horizontal = rightLow.sub(leftLow).normalize();
      const vertical = leftUp.sub(leftLow).normalize();
      const [p1, p2, p3, p4] = [
        leftLow.add(horizontal.mul(realCornerRadius)),
        rightLow.add(horizontal.mul(-realCornerRadius)),
        rightLow.add(vertical.mul(realCornerRadius)),
        rightUp.add(vertical.mul(-realCornerRadius))
      ];
      const [p5, p6, p7, p8] = [
        rightUp.add(horizontal.mul(-realCornerRadius)),
        leftUp.add(horizontal.mul(realCornerRadius)),
        leftUp.add(vertical.mul(-realCornerRadius)),
        leftLow.add(vertical.mul(realCornerRadius))
      ];
      const [c1, c2, c3, c4] = [
        p1.add(vertical.mul(realCornerRadius)),
        p3.add(horizontal.mul(-realCornerRadius)),
        p5.add(vertical.mul(-realCornerRadius)),
        p7.add(horizontal.mul(realCornerRadius))
      ];
      const ps = [p8, p1, p2, p3, p4, p5, p6, p7];
      const cs = [c1, c2, c3, c4];
      for (let i = 0; i < cs.length; i++) {
        const c = cs[i];
        arcs.push(
          Arc.build2(
            c,
            Angles.radianToDegree(ps[i * 2].getRadianByVector2(c)),
            Angles.radianToDegree(ps[i * 2 + 1].getRadianByVector2(c)),
            realCornerRadius,
            realCornerRadius,
            1 /* CCW */
          )
        );
      }
      return arcs;
    }
    static getRectArcCenters(width, height, leftUp, leftLow, rightUp, rightLow, radius) {
      const centerPoints = [];
      if (radius <= 0) {
        return centerPoints;
      }
      const realCornerRadius = Math.min(width / 2, height / 2, radius);
      const horizontal = rightLow.sub(leftLow).normalize();
      const vertical = leftUp.sub(leftLow).normalize();
      const [p1, p2, p3, p4] = [
        leftLow.add(horizontal.mul(realCornerRadius)),
        rightLow.add(horizontal.mul(realCornerRadius)),
        rightLow.add(vertical.mul(-realCornerRadius)),
        rightUp.add(vertical.mul(-realCornerRadius))
      ];
      const [c1, c2, c3, c4] = [
        p1.add(vertical.mul(realCornerRadius)),
        p2.add(horizontal.mul(-realCornerRadius)),
        p3.add(vertical.mul(-realCornerRadius)),
        p4.add(horizontal.mul(realCornerRadius))
      ];
      centerPoints.push(c1, c2, c3, c4);
      return centerPoints;
    }
  };

  // src/objects/models/primitive2d/utils/D2FlipUtils.ts
  var D2FlipUtils = class {
    static d2ElementFlipX(d2ElementItemModel) {
      switch (d2ElementItemModel.modelType) {
        case "D2Text" /* D2Text */: {
          const d2ModelItem = d2ElementItemModel;
          if (!d2ModelItem.contentReady) {
            return {
              matrix4: d2ModelItem.matrix
            };
          }
          const { maxtrix4 } = D2RectToolkit.flipXTranslate(
            d2ModelItem.leftUp,
            d2ModelItem.rightUp,
            d2ModelItem.leftDown,
            d2ModelItem.rightDown
          );
          return {
            matrix4: d2ModelItem.matrix.multiply4(maxtrix4)
          };
        }
        case "D2Rect" /* D2Rect */: {
          const d2ModelItem = d2ElementItemModel;
          const { maxtrix4 } = D2RectToolkit.flipXTranslate(
            d2ModelItem.leftUp,
            d2ModelItem.rightUp,
            d2ModelItem.leftDown,
            d2ModelItem.rightDown
          );
          return {
            matrix4: d2ModelItem.matrix.multiply4(maxtrix4)
          };
        }
        case "D2Image" /* D2Image */: {
          const d2ModelItem = d2ElementItemModel;
          const { maxtrix4 } = D2RectToolkit.flipXTranslate(
            d2ModelItem.leftUp,
            d2ModelItem.rightUp,
            d2ModelItem.leftDown,
            d2ModelItem.rightDown
          );
          return {
            matrix4: d2ModelItem.matrix.multiply4(maxtrix4)
          };
        }
      }
      return {
        matrix4: d2ElementItemModel.matrix
      };
    }
    static d2ElementFlipY(d2ElementItemModel) {
      switch (d2ElementItemModel.modelType) {
        case "D2Text" /* D2Text */: {
          const d2ModelItem = d2ElementItemModel;
          if (!d2ModelItem.contentReady) {
            return {
              matrix4: d2ModelItem.matrix
            };
          }
          const { maxtrix4 } = D2RectToolkit.flipYTranslate(
            d2ModelItem.leftUp,
            d2ModelItem.rightUp,
            d2ModelItem.leftDown,
            d2ModelItem.rightDown
          );
          return {
            matrix4: d2ModelItem.matrix.multiply4(maxtrix4)
          };
        }
        case "D2Rect" /* D2Rect */: {
          const d2ModelItem = d2ElementItemModel;
          const { maxtrix4 } = D2RectToolkit.flipYTranslate(
            d2ModelItem.leftUp,
            d2ModelItem.rightUp,
            d2ModelItem.leftDown,
            d2ModelItem.rightDown
          );
          return {
            matrix4: d2ModelItem.matrix.multiply4(maxtrix4)
          };
        }
        case "D2Image" /* D2Image */: {
          const d2ModelItem = d2ElementItemModel;
          const { maxtrix4 } = D2RectToolkit.flipYTranslate(
            d2ModelItem.leftUp,
            d2ModelItem.rightUp,
            d2ModelItem.leftDown,
            d2ModelItem.rightDown
          );
          return {
            matrix4: d2ModelItem.matrix.multiply4(maxtrix4)
          };
        }
      }
      return {
        matrix4: d2ElementItemModel.matrix
      };
    }
  };

  // src/engine/modules/d2Canvas2Svg/Config.ts
  var CANVAS_DRAW_TEXT_STD_MM = 100;
  function createDefaultOptional() {
    return {
      fontFamily: "normal",
      fontStyle: "normal" /* NORMAL */,
      fontVariant: "normal",
      fontWeight: 100
    };
  }

  // src/engine/modules/d2Canvas2Svg/Canvas.ts
  var Canvas = class {
    constructor(optional) {
      this._fillTextStr = "";
      this._profile = {
        xPos: 0,
        yPos: 0,
        zPos: 0
      };
      this._canvasBaseFontPixelSize = CANVAS_DRAW_TEXT_STD_MM;
      this._canvasElement = document.createElement("canvas");
      this._ctx = this._canvasElement.getContext("2d", { willReadFrequently: true });
      this.updateCanvasRect(this._canvasBaseFontPixelSize * 4, this._canvasBaseFontPixelSize * 4);
      this._text2RectMap = /* @__PURE__ */ new Map();
      this._optional = __spreadValues(__spreadValues({}, createDefaultOptional()), optional || {});
    }
    get ctx() {
      return this._ctx;
    }
    get width() {
      return this._width;
    }
    set width(value) {
      this._width = value;
    }
    get height() {
      return this._height;
    }
    set height(value) {
      this._height = value;
    }
    get canvasBaseFontPixelSize() {
      return this._canvasBaseFontPixelSize;
    }
    setContextProfile(optional) {
      this._ctx.font = [
        optional.fontStyle || this._optional.fontFamily,
        optional.fontVariant || this._optional.fontVariant,
        optional.fontWeight || this._optional.fontWeight,
        this._canvasBaseFontPixelSize + "px",
        optional.fontFamily
      ].join(" ");
      this._ctx.textAlign = "left";
      this._ctx.textBaseline = "alphabetic";
      this._ctx.direction = "ltr";
    }
    updateCanvasRect(canvasWidth, canvasHeight) {
      this.width = canvasWidth;
      this.height = canvasHeight;
      this._canvasElement.width = canvasWidth;
      this._canvasElement.height = canvasHeight;
    }
    getText2RectMap(text) {
      return this._text2RectMap.get(text) || {
        fontCanvasRenderWidthRatio: 0.5,
        fontCanvasRenderHeightRatio: 1
      };
    }
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = "#000000";
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = "#ffffff";
      this._text2RectMap.clear();
    }
    renderTextContent(rawString, renderLineHeight) {
      const allTextsOfLine = rawString.split("\n");
      const allTextSize = allTextsOfLine.length;
      const lineHeight = renderLineHeight;
      const startOffsetX = this._canvasBaseFontPixelSize;
      const startOffsetY = this._canvasBaseFontPixelSize * 2;
      let maxXCutWidth = 0;
      for (let i = 0; i < allTextSize; i++) {
        const txt = allTextsOfLine[i];
        this._profile.xPos = 0;
        this._profile.yPos = i * lineHeight;
        this._profile.zPos = this._canvasBaseFontPixelSize;
        this._fillTextStr = "";
        for (let j = 0; j < txt.length; j++) {
          this._fillTextStr += txt[j];
        }
        this.fillTextContentByBuffer(startOffsetX, startOffsetY);
        const width = Math.round(this._profile.xPos + 2 * startOffsetX) | 0;
        if (maxXCutWidth < width) {
          maxXCutWidth = width;
        }
      }
      const xCut = maxXCutWidth;
      const yCut = startOffsetY + lineHeight * allTextSize;
      return {
        xCut,
        yCut
      };
    }
    fillTextContentByBuffer(startOffsetX, startOffsetY) {
      if (this._fillTextStr !== "") {
        this._ctx.fillText(this._fillTextStr, startOffsetX + 0, startOffsetY + 0);
        const metrics = this._ctx.measureText(this._fillTextStr);
        const fontCanvasRenderWidthRatio = metrics.width / this._fillTextStr.length / this._canvasBaseFontPixelSize;
        const fontCanvasRenderHeightRatio = (metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent) / this._canvasBaseFontPixelSize;
        this._text2RectMap.set(this._fillTextStr, {
          fontCanvasRenderWidthRatio,
          fontCanvasRenderHeightRatio
        });
        const delta = metrics.width;
        this._profile.xPos += delta;
      }
    }
  };

  // src/engine/math/Twos.ts
  var SPLITTER = +(Math.pow(2, 27) + 1);

  // src/engine/algorithm/geometry/Orients.ts
  var EPSILON = 11102230246251565e-32;
  var ERRBOUND3 = (3 + 16 * EPSILON) * EPSILON;
  var ERRBOUND4 = (7 + 56 * EPSILON) * EPSILON;

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

  // src/algorithm/geometry/TextLayout.ts
  var TextLayout = class _TextLayout {
    /**
     * 段落文本字符排版
     */
    static worldComposing(textArray, textPolygonBbox2Arrays, textCanvasRenderMetricsArray, vertexDataArray, profile) {
      const { fontSize, lineHeight } = profile;
      const FONT_SCALE = fontSize / CANVAS_DRAW_TEXT_STD_MM;
      const { outerRectBbox2 } = _TextLayout.calculateOuterRectBbox2(textPolygonBbox2Arrays);
      const lineHeight2 = lineHeight || fontSize;
      Bbox2Calculator.clear();
      let [offsetX, offsetY] = [0, 0];
      for (let rowIndex = 0; rowIndex < textArray.length; rowIndex++) {
        const colSize = textArray[rowIndex].length;
        offsetX = 0;
        offsetY += rowIndex <= 0 ? Math.abs(lineHeight2 - fontSize) / 2 : lineHeight2;
        for (let colIndex = 0; colIndex < colSize; colIndex++) {
          offsetX += colIndex <= 0 ? -offsetX : fontSize * textCanvasRenderMetricsArray[rowIndex][colIndex - 1].fontCanvasRenderWidthRatio;
          const vertextData = vertexDataArray[rowIndex][colIndex];
          for (let j = 0; j < vertextData.positions.length; j += POINT_ARRAY_OCCUPY_SIZE) {
            vertextData.positions[j] -= outerRectBbox2.minX;
            vertextData.positions[j + 1] -= outerRectBbox2.maxY;
            vertextData.positions[j] *= FONT_SCALE;
            vertextData.positions[j + 1] *= FONT_SCALE;
            vertextData.positions[j] += offsetX;
            vertextData.positions[j + 1] -= offsetY;
            Bbox2Calculator.calculate(0, 0, vertextData.positions[j], vertextData.positions[j + 1]);
          }
        }
      }
      Bbox2Calculator.cache.d2TextShapeBboxMinY -= Math.abs(lineHeight2 - fontSize) / 2;
      const bbox2 = Bbox2Calculator.generateBbox2();
      return {
        width: bbox2.width,
        height: bbox2.height,
        initBbox2: bbox2,
        vertexDataArray
      };
    }
    /**
     * 计算该段文本在初始(未排版)状态下的包围盒
     * 		在未排版的情况下, 所有文本将以基线对齐的方式"堆叠"在同一坐标位置, 此时计算出该区域的最大包围盒
     */
    static calculateOuterRectBbox2(textPolygonBbox2Arrays) {
      let [minX, minY, maxX, maxY] = [0, 0, 0, 0];
      for (let rowIndex = 0; rowIndex < textPolygonBbox2Arrays.length; rowIndex++) {
        const colSize = textPolygonBbox2Arrays[rowIndex].length;
        for (let colIndex = 0; colIndex < colSize; colIndex++) {
          const textPolygonBbox2 = textPolygonBbox2Arrays[rowIndex][colIndex];
          if (textPolygonBbox2) {
            if (rowIndex === 0 && colIndex === 0) {
              minX = textPolygonBbox2.minX;
              maxX = textPolygonBbox2.maxX;
              minY = textPolygonBbox2.minY;
              maxY = textPolygonBbox2.maxY;
            }
            minX = minX >= textPolygonBbox2.minX ? textPolygonBbox2.minX : minX;
            maxX = maxX <= textPolygonBbox2.maxX ? textPolygonBbox2.maxX : maxX;
            minY = minY >= textPolygonBbox2.minY ? textPolygonBbox2.minY : minY;
            maxY = maxY <= textPolygonBbox2.maxY ? textPolygonBbox2.maxY : maxY;
          }
        }
      }
      return {
        outerRectBbox2: {
          minX,
          maxX,
          minY,
          maxY
        }
      };
    }
    static translateVertexData(vertexDataArray) {
      const vertexDataArray2 = [];
      let [d2TextShapeBboxMinX, d2TextShapeBboxMaxX, d2TextShapeBboxMinY, d2TextShapeBboxMaxY] = [
        void 0,
        void 0,
        void 0,
        void 0
      ];
      for (let rowIndex = 0; rowIndex < vertexDataArray.length; rowIndex++) {
        vertexDataArray2[rowIndex] = [];
        for (let colIndex = 0; colIndex < vertexDataArray[rowIndex].length; colIndex++) {
          const vertextData = vertexDataArray[rowIndex][colIndex];
          const vertextData2 = {
            indices: [...vertextData.indices],
            positions: []
          };
          for (let j = 0; j < vertextData.positions.length; j += POINT_ARRAY_OCCUPY_SIZE) {
            vertextData2.positions.push(vertextData.positions[j], vertextData.positions[j + 1]);
            const x = vertextData2.positions[j];
            const y = vertextData2.positions[j + 1];
            if (typeof d2TextShapeBboxMinX === "undefined") {
              d2TextShapeBboxMinX = d2TextShapeBboxMaxX = x;
              d2TextShapeBboxMinY = d2TextShapeBboxMaxY = y;
            }
            d2TextShapeBboxMinX = d2TextShapeBboxMinX >= x ? x : d2TextShapeBboxMinX;
            d2TextShapeBboxMaxX = d2TextShapeBboxMaxX <= x ? x : d2TextShapeBboxMaxX;
            d2TextShapeBboxMinY = d2TextShapeBboxMinY >= y ? y : d2TextShapeBboxMinY;
            d2TextShapeBboxMaxY = d2TextShapeBboxMaxY <= y ? y : d2TextShapeBboxMaxY;
          }
          vertexDataArray2[rowIndex][colIndex] = vertextData2;
        }
      }
      return {
        bbox2: new BBox2(d2TextShapeBboxMinX, d2TextShapeBboxMinY, d2TextShapeBboxMaxX, d2TextShapeBboxMaxY),
        vertexDataArray: vertexDataArray2
      };
    }
  };
  var _Bbox2Calculator = class _Bbox2Calculator {
    static calculate(initX, initY, setX, setY) {
      if (typeof _Bbox2Calculator.cache.d2TextShapeBboxMinX === "undefined") {
        _Bbox2Calculator.cache.d2TextShapeBboxMinX = _Bbox2Calculator.cache.d2TextShapeBboxMaxX = initX;
        _Bbox2Calculator.cache.d2TextShapeBboxMinY = _Bbox2Calculator.cache.d2TextShapeBboxMaxY = initY;
      }
      _Bbox2Calculator.cache.d2TextShapeBboxMinX = _Bbox2Calculator.cache.d2TextShapeBboxMinX >= setX ? setX : _Bbox2Calculator.cache.d2TextShapeBboxMinX;
      _Bbox2Calculator.cache.d2TextShapeBboxMaxX = _Bbox2Calculator.cache.d2TextShapeBboxMaxX <= setX ? setX : _Bbox2Calculator.cache.d2TextShapeBboxMaxX;
      _Bbox2Calculator.cache.d2TextShapeBboxMinY = _Bbox2Calculator.cache.d2TextShapeBboxMinY >= setY ? setY : _Bbox2Calculator.cache.d2TextShapeBboxMinY;
      _Bbox2Calculator.cache.d2TextShapeBboxMaxY = _Bbox2Calculator.cache.d2TextShapeBboxMaxY <= setY ? setY : _Bbox2Calculator.cache.d2TextShapeBboxMaxY;
    }
    static generateBbox2() {
      return new BBox2(
        _Bbox2Calculator.cache.d2TextShapeBboxMinX,
        _Bbox2Calculator.cache.d2TextShapeBboxMinY,
        _Bbox2Calculator.cache.d2TextShapeBboxMaxX,
        _Bbox2Calculator.cache.d2TextShapeBboxMaxY
      );
    }
    static clear() {
      _Bbox2Calculator.cache.d2TextShapeBboxMinX = void 0;
      _Bbox2Calculator.cache.d2TextShapeBboxMaxX = void 0;
      _Bbox2Calculator.cache.d2TextShapeBboxMinY = void 0;
      _Bbox2Calculator.cache.d2TextShapeBboxMaxY = void 0;
    }
  };
  _Bbox2Calculator.cache = {
    d2TextShapeBboxMinX: void 0,
    d2TextShapeBboxMaxX: void 0,
    d2TextShapeBboxMinY: void 0,
    d2TextShapeBboxMaxY: void 0
  };
  var Bbox2Calculator = _Bbox2Calculator;

  // src/manager/TextGraphicsManager.ts
  var TextGraphicTemplate = class {
    constructor(triangleVertexData, fontPolygonBbox2, fontCanvasRenderMetrics, fontFamily, fontStyle, fontWeight) {
      this._triangleVertexData = this.createTriangleVertexData(triangleVertexData);
      this._fontPolygonBbox2 = this.createFontPolygonBbox2(fontPolygonBbox2);
      this._fontCanvasRenderMetrics = this.createFontCanvasRenderMetrics(fontCanvasRenderMetrics);
      this._fontFamily = fontFamily;
      this._fontStyle = fontStyle;
      this._fontWeight = fontWeight;
    }
    get triangleVertexData() {
      return this.createTriangleVertexData(this._triangleVertexData);
    }
    get fontPolygonBbox2() {
      return this.createFontPolygonBbox2(this._fontPolygonBbox2);
    }
    get fontCanvasRenderMetrics() {
      return this.createFontCanvasRenderMetrics(this._fontCanvasRenderMetrics);
    }
    get fontFamily() {
      return this._fontFamily;
    }
    get fontStyle() {
      return this._fontStyle;
    }
    get fontWeight() {
      return this._fontWeight;
    }
    createTriangleVertexData(triangleVertexData) {
      const iTriangleVertexData = {
        positions: [],
        indices: []
      };
      for (let j = 0; j < triangleVertexData.positions.length; j++) {
        iTriangleVertexData.positions[j] = triangleVertexData.positions[j];
      }
      for (let j = 0; j < triangleVertexData.indices.length; j++) {
        iTriangleVertexData.indices[j] = triangleVertexData.indices[j];
      }
      return iTriangleVertexData;
    }
    createFontPolygonBbox2(templateBbox2) {
      return __spreadValues({}, templateBbox2);
    }
    createFontCanvasRenderMetrics(templateRect) {
      return __spreadValues({}, templateRect);
    }
  };
  var TextGraphicsManager = class _TextGraphicsManager extends BaseManager {
    static getInstance() {
      if (_TextGraphicsManager.instance === void 0) {
        _TextGraphicsManager.instance = new _TextGraphicsManager();
      }
      return _TextGraphicsManager.instance;
    }
    constructor() {
      super();
    }
    addTextGraphicCache(textStr, textGraphicTemplate) {
      let textGraphicCacheList = this.items.get(textStr);
      if (!textGraphicCacheList) {
        textGraphicCacheList = [];
      }
      textGraphicCacheList.push(textGraphicTemplate);
      this.items.set(textStr, textGraphicCacheList);
    }
    getTextGraphicCache(textStr, fontFamily = "auto", fontStyle = "normal" /* NORMAL */, fontWeight = 100) {
      let textGraphicCacheList = this.items.get(textStr);
      if (!textGraphicCacheList) {
        return null;
      }
      for (let i = 0; i < textGraphicCacheList.length; i++) {
        const textGraphicCache = textGraphicCacheList[i];
        if (textGraphicCache.fontFamily === fontFamily && textGraphicCache.fontStyle === fontStyle && textGraphicCache.fontWeight === fontWeight) {
          return textGraphicCache;
        }
      }
      return null;
    }
    quit() {
      super.quit();
      _TextGraphicsManager.instance = void 0;
    }
  };

  // src/manager/WorkerManager.ts
  var PUBLIC_PATH = `./worker`;
  var WorkerManager = class _WorkerManager extends BaseManager {
    static getInstance() {
      if (_WorkerManager.instance === void 0) {
        _WorkerManager.instance = new _WorkerManager();
      }
      return _WorkerManager.instance;
    }
    constructor() {
      super();
      this._id = 0;
      this._busMap = /* @__PURE__ */ new Map();
    }
    createWorker(tag) {
      const worker = new Worker(`${PUBLIC_PATH}/${tag}.js`);
      if (!worker) {
        throw new Error(`Create Worker Error.`);
      }
      const newId = String(++this._id);
      this.items.set(newId, worker);
      return {
        worker,
        id: newId
      };
    }
    destroyWorker(id) {
      const worker = this.items.get(id);
      if (!worker) {
        return;
      }
      worker.terminate();
      this.items.delete(id);
    }
    quit() {
      for (let [id, worker] of this.items) {
        this.destroyWorker(id);
      }
      this._busMap.clear();
      this._busMap = void 0;
      super.quit();
      _WorkerManager.instance = void 0;
    }
  };

  // src/service/Utils.ts
  function createFontArray(textContent) {
    const result = {
      textArray: [[]],
      textPolygonBbox2Arrays: [[]],
      textCanvasRenderMetricsArray: [[]],
      vertexDataArray: [[]]
    };
    const filterRawString = textContent.trim();
    let rowIndex = 0;
    for (let i = 0, colIndex = i; i < filterRawString.length; i++) {
      const text = filterRawString[i];
      if (text === "" || text === "	") {
        continue;
      }
      if (text === "\n" || text === "\r") {
        rowIndex += 1;
        result.textArray[rowIndex] = [];
        result.textPolygonBbox2Arrays[rowIndex] = [];
        result.textCanvasRenderMetricsArray[rowIndex] = [];
        result.vertexDataArray[rowIndex] = [];
        colIndex = 0;
        continue;
      }
      result.textArray[rowIndex][colIndex] = text;
      result.textPolygonBbox2Arrays[rowIndex][colIndex] = null;
      result.textCanvasRenderMetricsArray[rowIndex][colIndex] = null;
      result.vertexDataArray[rowIndex][colIndex] = {
        positions: [],
        indices: []
      };
      colIndex++;
    }
    return result;
  }

  // src/service/TextFontService.ts
  var POINT_ARRAY_OCCUPY_SIZE = 2;
  var TextFontService = class extends BaseInterface {
    constructor(type = "TRIANGLE" /* TRIANGLE */) {
      super();
      this._canvasInstance = new Canvas();
      this._pixelFilterType = type;
      this._taskDataList = [];
      this._flushCallbacks = [];
      this._isRuning = false;
      const { worker, id } = WorkerManager.getInstance().createWorker(`./D2CanvasPixel2Svg`);
      this._worker = worker;
      this._workerId = id;
      this._worker.onmessage = this.workerMessageHandler.bind(this);
    }
    addVectorizeTextTask(textStrId, textContent, profile, optional, flushCallback) {
      this._taskDataList.push({
        textStrId,
        textContent,
        profile,
        optional
      });
      this._flushCallbacks.push(flushCallback ? flushCallback : null);
      if (this._taskDataList.length && !this._isRuning) {
        const itemData = this._taskDataList.shift();
        this.vectorizeText(itemData.textStrId, itemData.textContent, itemData.profile, itemData.optional);
      }
    }
    quit() {
      this._canvasInstance = void 0;
      this._taskDataList = void 0;
      this._flushCallbacks = void 0;
      WorkerManager.getInstance().destroyWorker(this._workerId);
      this._worker = void 0;
      this._workerId = void 0;
    }
    vectorizeText(textStrId, textContent, profile, optional) {
      this._isRuning = true;
      const taskId = Constant.globalIdenManager.getHashIden();
      const iOptional = __spreadValues(__spreadValues({}, createDefaultOptional()), optional || {});
      this._canvasInstance.setContextProfile({
        fontFamily: iOptional.fontFamily,
        fontVariant: iOptional.fontVariant,
        fontWeight: iOptional.fontWeight,
        fontStyle: iOptional.fontStyle
      });
      const { textArray, textPolygonBbox2Arrays, textCanvasRenderMetricsArray, vertexDataArray } = createFontArray(textContent);
      const imagePixelArray = [];
      const imageCutArray = [];
      let hasCanvasRendered = false;
      for (let rowIndex = 0; rowIndex < textArray.length; rowIndex++) {
        const colSize = textArray[rowIndex].length;
        if (typeof imagePixelArray[rowIndex] === "undefined") {
          imagePixelArray[rowIndex] = [];
        }
        if (typeof imageCutArray[rowIndex] === "undefined") {
          imageCutArray[rowIndex] = [];
        }
        for (let colIndex = 0; colIndex < colSize; colIndex++) {
          const text = textArray[rowIndex][colIndex];
          const textGraphicTemplate = TextGraphicsManager.getInstance().getTextGraphicCache(
            text,
            iOptional.fontFamily,
            iOptional.fontStyle,
            iOptional.fontWeight
          );
          if (textGraphicTemplate) {
            textPolygonBbox2Arrays[rowIndex][colIndex] = textGraphicTemplate.fontPolygonBbox2;
            textCanvasRenderMetricsArray[rowIndex][colIndex] = textGraphicTemplate.fontCanvasRenderMetrics;
            vertexDataArray[rowIndex][colIndex] = textGraphicTemplate.triangleVertexData;
          } else {
            if (text === " ") {
              textPolygonBbox2Arrays[rowIndex][colIndex] = null;
              textCanvasRenderMetricsArray[rowIndex][colIndex] = {
                fontCanvasRenderWidthRatio: 0.5,
                fontCanvasRenderHeightRatio: 1
              };
              vertexDataArray[rowIndex][colIndex] = {
                positions: [],
                indices: []
              };
            } else {
              hasCanvasRendered = true;
              this._rawString = text;
              const { xCut, yCut } = this.calcRender();
              const imageData = this._canvasInstance.ctx.getImageData(0, 0, xCut, yCut).data;
              textPolygonBbox2Arrays[rowIndex][colIndex] = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
              textCanvasRenderMetricsArray[rowIndex][colIndex] = this._canvasInstance.getText2RectMap(text);
              vertexDataArray[rowIndex][colIndex] = {
                positions: [],
                indices: []
              };
              imagePixelArray[rowIndex][colIndex] = imageData;
              imageCutArray[rowIndex][colIndex] = { xCut, yCut };
            }
          }
          this.resetStatus();
        }
      }
      if (hasCanvasRendered) {
        this._worker.postMessage({
          ID: "VectorizeText",
          data: {
            taskId,
            textStrId,
            optional: __spreadValues({}, iOptional),
            pixelFilterType: this._pixelFilterType,
            profile,
            textArray,
            textPolygonBbox2Arrays,
            textCanvasRenderMetricsArray,
            vertexDataArray,
            imagePixelArray,
            imageCutArray
          }
        });
      } else {
        this.flushLayout(textStrId, textArray, textPolygonBbox2Arrays, textCanvasRenderMetricsArray, vertexDataArray, profile);
      }
    }
    workerMessageHandler(event) {
      const payload = event.data;
      const { textArray, vertexDataArray, textPolygonBbox2Arrays, textCanvasRenderMetricsArray, optional } = payload.data;
      for (let rowIndex = 0; rowIndex < textArray.length; rowIndex++) {
        const colSize = textArray[rowIndex].length;
        for (let colIndex = 0; colIndex < colSize; colIndex++) {
          const textGraphicTemplate = new TextGraphicTemplate(
            vertexDataArray[rowIndex][colIndex],
            textPolygonBbox2Arrays[rowIndex][colIndex],
            textCanvasRenderMetricsArray[rowIndex][colIndex],
            optional.fontFamily,
            optional.fontStyle,
            optional.fontWeight
          );
          TextGraphicsManager.getInstance().addTextGraphicCache(textArray[rowIndex][colIndex], textGraphicTemplate);
        }
      }
      this.flushLayout(
        payload.data.textStrId,
        payload.data.textArray,
        payload.data.textPolygonBbox2Arrays,
        payload.data.textCanvasRenderMetricsArray,
        payload.data.vertexDataArray,
        payload.data.profile
      );
    }
    flushLayout(elementModelItemId, textArray, textPolygonBbox2Arrays, textCanvasRenderMetricsArray, vertexDataArray, profile) {
      const {
        width,
        height,
        initBbox2,
        vertexDataArray: vertexDataArrayUpdated
      } = TextLayout.worldComposing(textArray, textPolygonBbox2Arrays, textCanvasRenderMetricsArray, vertexDataArray, profile);
      this._isRuning = false;
      const flushCallback = this._flushCallbacks.shift();
      if (flushCallback instanceof Function) {
        flushCallback({ textStrId: elementModelItemId, width, height, initBbox2, vertexDataArray: vertexDataArrayUpdated });
      }
      if (this._taskDataList.length && !this._isRuning) {
        const itemData = this._taskDataList.shift();
        this.vectorizeText(itemData.textStrId, itemData.textContent, itemData.profile, itemData.optional);
      }
    }
    calcRender() {
      const lineHeight = Math.round(1 * this._canvasInstance.canvasBaseFontPixelSize);
      this._canvasInstance.clearCanvas();
      return this._canvasInstance.renderTextContent(this._rawString, lineHeight);
    }
    resetStatus() {
      this._canvasInstance.clearCanvas();
    }
  };

  // src/objects/models/primitive2d/utils/D2RotationUtils.ts
  var D2RotationUtils = class {
    static d2ElementRotation(d2ElementItemModel, newRotation) {
      switch (d2ElementItemModel.modelType) {
        case "D2Text" /* D2Text */: {
          const d2ModelItem = d2ElementItemModel;
          if (!d2ModelItem.contentReady || newRotation === d2ModelItem.rotation) {
            return {
              rotation: d2ModelItem.rotation,
              matrix4: d2ElementItemModel.matrix
            };
          }
          const { rotation, maxtrix4 } = D2RectToolkit.rotationTranslate(
            newRotation,
            d2ModelItem.rotation,
            d2ModelItem.leftUp,
            d2ModelItem.rightUp,
            d2ModelItem.leftDown,
            d2ModelItem.rightDown
          );
          const allPositions = d2ModelItem.getVertexData().positions;
          for (let j = 0; j < allPositions.length; j += POINT_ARRAY_OCCUPY_SIZE) {
            const v2 = new Vector2(allPositions[j], allPositions[j + 1]).multiplyMatrix4(maxtrix4);
            allPositions[j] = v2.x;
            allPositions[j + 1] = v2.y;
          }
          return {
            rotation,
            matrix4: d2ModelItem.matrix.multiply4(maxtrix4)
          };
        }
        case "D2Rect" /* D2Rect */: {
          const d2ModelItem = d2ElementItemModel;
          const { rotation, maxtrix4 } = D2RectToolkit.rotationTranslate(
            newRotation,
            d2ModelItem.rotation,
            d2ModelItem.leftUp,
            d2ModelItem.rightUp,
            d2ModelItem.leftDown,
            d2ModelItem.rightDown
          );
          return {
            rotation,
            matrix4: d2ModelItem.matrix.multiply4(maxtrix4)
          };
        }
        case "D2Image" /* D2Image */: {
          const d2ModelItem = d2ElementItemModel;
          const { rotation, maxtrix4 } = D2RectToolkit.rotationTranslate(
            newRotation,
            d2ModelItem.rotation,
            d2ModelItem.leftUp,
            d2ModelItem.rightUp,
            d2ModelItem.leftDown,
            d2ModelItem.rightDown
          );
          return {
            rotation,
            matrix4: d2ModelItem.matrix.multiply4(maxtrix4)
          };
        }
      }
      return {
        rotation: newRotation % (Math.PI * 2),
        matrix4: d2ElementItemModel.matrix
      };
    }
  };

  // src/objects/models/primitive2d/elementBase/D2ElementModelBase.ts
  var D2ElementModelBase = class {
    constructor() {
    }
  };

  // src/objects/models/primitive2d/utils/D2PositionUtils.ts
  var D2PositionUtils = class {
    static d2ElementPosition(d2ElementItemModel, newPosition) {
      const prevPosition = d2ElementItemModel.position;
      const diffX = newPosition.x - prevPosition.x;
      const diffY = newPosition.y - prevPosition.y;
      switch (d2ElementItemModel.modelType) {
        case "D2Text" /* D2Text */: {
          const d2ModelItem = d2ElementItemModel;
          if (!d2ModelItem.contentReady || diffX === 0 && diffY === 0) {
            return {
              position: d2ModelItem.position,
              matrix4: d2ModelItem.matrix
            };
          }
          const allPositions = d2ModelItem.getVertexData().positions;
          for (let j = 0; j < allPositions.length; j += POINT_ARRAY_OCCUPY_SIZE) {
            allPositions[j] += diffX;
            allPositions[j + 1] += diffY;
          }
          const matrix4 = CanvasMatrix4.setTranslateByVector3(new Vector3(diffX, diffY, 0));
          return {
            position: newPosition,
            matrix4: d2ModelItem.matrix.multiply4(matrix4)
          };
        }
        default: {
          const matrix4 = CanvasMatrix4.setTranslateByVector3(new Vector3(diffX, diffY, 0));
          return {
            position: newPosition,
            matrix4: d2ElementItemModel.matrix.multiply4(matrix4)
          };
        }
      }
    }
  };

  // src/objects/models/primitive2d/elementBase/D2ElementModelItemBase.ts
  var D2ElementModelItemBase = class extends D2ElementModelBase {
    constructor(elementItemId, layerItemId) {
      super();
      this._elementItemId = elementItemId;
      this._elementItemName = "";
      this._groupId = void 0;
      this._parent = null;
      this._visible = true;
      this._layerItemId = layerItemId;
      this._alpha = 1;
      this._bbox2 = null;
      this._position = new Vector2(0, 0);
      this._rotation = 0;
      this._isFlipX = false;
      this._isFlipY = false;
      this._matrix = Matrix4.ORIGIN;
      this._isEnableSelect = true;
      this._transformCache = {
        position: new Vector2(0, 0),
        rotation: 0,
        isFlipX: false,
        isFlipY: false
      };
    }
    get elementItemName() {
      return this._elementItemName;
    }
    set elementItemName(value) {
      this._elementItemName = value;
    }
    get elementItemId() {
      return this._elementItemId;
    }
    set elementItemId(value) {
      this._elementItemId = value;
    }
    get groupId() {
      return this._groupId;
    }
    set groupId(value) {
      this._groupId = value;
    }
    get parent() {
      return this._parent;
    }
    set parent(value) {
      this._parent = value;
    }
    get visible() {
      return this._visible;
    }
    set visible(value) {
      this._visible = value;
    }
    get modelType() {
      return this._modelType;
    }
    set modelType(value) {
      this._modelType = value;
    }
    get layerItemId() {
      return this._layerItemId;
    }
    set layerItemId(value) {
      this._layerItemId = value;
    }
    get alpha() {
      return this._alpha;
    }
    set alpha(value) {
      this._alpha = value;
    }
    get bbox2() {
      return this._bbox2;
    }
    set bbox2(value) {
      this._bbox2 = value;
    }
    get position() {
      return this._position;
    }
    set position(value) {
      this._transformCache.position = value.copy();
      const { position, matrix4 } = D2PositionUtils.d2ElementPosition(this, value);
      this._position = position;
      this._matrix = matrix4;
    }
    get rotation() {
      return this._rotation;
    }
    set rotation(value) {
      this._transformCache.rotation = value;
      const { rotation, matrix4 } = D2RotationUtils.d2ElementRotation(this, value);
      this._rotation = rotation;
      this._matrix = matrix4;
    }
    get isFlipX() {
      return this._isFlipX;
    }
    set isFlipX(value) {
      this._transformCache.isFlipX = value;
      if (this._isFlipX !== value) {
        this._isFlipX = value;
        const { matrix4 } = D2FlipUtils.d2ElementFlipX(this);
        this._matrix = matrix4;
      }
    }
    get isFlipY() {
      return this._isFlipY;
    }
    set isFlipY(value) {
      this._transformCache.isFlipY = value;
      if (this._isFlipY !== value) {
        this._isFlipY = value;
        const { matrix4 } = D2FlipUtils.d2ElementFlipY(this);
        this._matrix = matrix4;
      }
    }
    get matrix() {
      return this._matrix;
    }
    get isEnableSelect() {
      return this._isEnableSelect;
    }
    set isEnableSelect(value) {
      this._isEnableSelect = value;
    }
    get transformCache() {
      return __spreadValues({}, this._transformCache);
    }
  };

  // src/algorithm/geometry/BBox2Creator.ts
  var BBox2Creator = class {
    static createD2LineBbox2(startPoint, endPoint, strokeWidth) {
      const halfStrokeWidth = strokeWidth * 0.5;
      const minX = Math.min(startPoint.x, endPoint.x) - halfStrokeWidth;
      const minY = Math.min(startPoint.y, endPoint.y) - halfStrokeWidth;
      const maxX = Math.max(startPoint.x, endPoint.x) + halfStrokeWidth;
      const maxY = Math.max(startPoint.y, endPoint.y) + halfStrokeWidth;
      return new BBox2(minX, minY, maxX, maxY);
    }
    static createD2CircleBbox2(centerPoint, radius, skrokeWidth) {
      const halfStrokeWidth = radius + skrokeWidth * 0.5;
      const minX = centerPoint.x - halfStrokeWidth;
      const minY = centerPoint.y - halfStrokeWidth;
      const maxX = centerPoint.x + halfStrokeWidth;
      const maxY = centerPoint.y + halfStrokeWidth;
      return new BBox2(minX, minY, maxX, maxY);
    }
    static createD2PointBbox2(centerPoint, radius) {
      const halfStrokeWidth = radius;
      const minX = centerPoint.x - halfStrokeWidth;
      const minY = centerPoint.y - halfStrokeWidth;
      const maxX = centerPoint.x + halfStrokeWidth;
      const maxY = centerPoint.y + halfStrokeWidth;
      return new BBox2(minX, minY, maxX, maxY);
    }
    static createD2ArcBbox2(centerPoint, radius, skrokeWidth) {
      const halfStrokeWidth = radius + skrokeWidth * 0.5;
      const minX = centerPoint.x - halfStrokeWidth;
      const minY = centerPoint.y - halfStrokeWidth;
      const maxX = centerPoint.x + halfStrokeWidth;
      const maxY = centerPoint.y + halfStrokeWidth;
      return new BBox2(minX, minY, maxX, maxY);
    }
    static createD2ImageBbox2(leftUp, rightUp, leftDown, rightDown) {
      let [minX, maxX, minY, maxY] = [leftUp.x, leftUp.x, leftUp.y, leftUp.y];
      minX = Math.min(minX, leftUp.x, leftDown.x, rightUp.x, rightDown.x);
      maxX = Math.max(maxX, leftUp.x, leftDown.x, rightUp.x, rightDown.x);
      minY = Math.min(minY, leftUp.y, leftDown.y, rightUp.y, rightDown.y);
      maxY = Math.max(maxY, leftUp.y, leftDown.y, rightUp.y, rightDown.y);
      return new BBox2(minX, minY, maxX, maxY);
    }
    static createD2RectBbox2(leftUp, rightUp, leftDown, rightDown) {
      let [minX, maxX, minY, maxY] = [leftUp.x, leftUp.x, leftUp.y, leftUp.y];
      minX = Math.min(minX, leftUp.x, leftDown.x, rightUp.x, rightDown.x);
      maxX = Math.max(maxX, leftUp.x, leftDown.x, rightUp.x, rightDown.x);
      minY = Math.min(minY, leftUp.y, leftDown.y, rightUp.y, rightDown.y);
      maxY = Math.max(maxY, leftUp.y, leftDown.y, rightUp.y, rightDown.y);
      return new BBox2(minX, minY, maxX, maxY);
    }
    static createD2TextBbox2(leftUp, rightUp, leftDown, rightDown) {
      let [minX, maxX, minY, maxY] = [leftUp.x, leftUp.x, leftUp.y, leftUp.y];
      minX = Math.min(minX, leftUp.x, leftDown.x, rightUp.x, rightDown.x);
      maxX = Math.max(maxX, leftUp.x, leftDown.x, rightUp.x, rightDown.x);
      minY = Math.min(minY, leftUp.y, leftDown.y, rightUp.y, rightDown.y);
      maxY = Math.max(maxY, leftUp.y, leftDown.y, rightUp.y, rightDown.y);
      return new BBox2(minX, minY, maxX, maxY);
    }
  };

  // src/objects/models/primitive2d/utils/D2DashedSegUtils.ts
  var D2DashedSegUtils = class {
    static updateDashedSegProfile(lineCap, strokeWidth) {
      let segSize = strokeWidth / 2 * 2;
      let gapSize = strokeWidth / 2;
      if (lineCap === "ROUND" /* ROUND */) {
        segSize = strokeWidth / 2 * 2;
        gapSize = strokeWidth / 2 * 5;
      }
      return {
        segSize,
        gapSize
      };
    }
  };

  // src/engine/math/ArraySort.ts
  function qsort(arr, cache, compara, start, end) {
    let pivot = void 0;
    let i = 0;
    let j = 0;
    let hole = void 0;
    if (start < end - 1) {
      let length = end - start;
      if (length > 50) {
        if (!cache) {
          cache = new Array(length + 1);
        }
        mergeSort(arr, cache, compara, start, (start + end) / 2 | 0, end);
      } else {
        pivot = arr[start];
        i = start;
        hole = start;
        j = end;
        let i2 = i + 1;
        while (i2 < j) {
          if (hole !== j) {
            j = j - 1;
            if (compara(pivot, arr[j]) <= 0) {
              continue;
            }
            arr[hole] = arr[j];
            hole = j;
            continue;
          }
          if (compara(pivot, arr[i2]) >= 0) {
            i = i2;
            i2 = i + 1;
            continue;
          }
          arr[hole] = arr[i2];
          i = i2;
          hole = i2;
          i2 = i + 1;
        }
        arr[hole] = pivot;
        qsort(arr, cache, compara, start, hole);
        qsort(arr, cache, compara, hole + 1, end);
      }
    }
  }
  function mergeSort(arr, cache, compara, start, mid, end) {
    qsort(arr, cache, compara, start, mid);
    qsort(arr, cache, compara, mid, end);
    let i = start;
    let j = mid;
    let k = 0;
    let left = arr[i];
    let right = arr[j];
    while (i < mid && j < end) {
      let c = compara(left, right);
      if (Number.isNaN(c)) {
        cache[k++] = right;
        right = arr[++j];
      } else {
        if (c <= 0) {
          cache[k++] = left;
          left = arr[++i];
        }
        if (c >= 0) {
          cache[k++] = right;
          right = arr[++j];
        }
      }
    }
    for (; i < mid; i++) {
      cache[k++] = arr[i];
    }
    for (; j < end; j++) {
      cache[k++] = arr[j];
    }
    for (i = start, j = 0; j < k; i++, j++) {
      arr[i] = cache[j];
    }
  }
  var ArraySort = class {
    static quickSort(arr, compara, start = 0, end = arr.length) {
      qsort(arr, null, compara, start, end);
    }
  };

  // src/algorithm/geometry/D2CircleToolkit.ts
  var D2CircleToolkit = class {
    /**
     * 非共线三点计算圆参数
     */
    static calculateCircleProfileByByThreePoint(startPoint, endPoint, thirdPoint) {
      const { x: x1, y: y1 } = startPoint;
      const { x: x2, y: y2 } = endPoint;
      const { x: x3, y: y3 } = thirdPoint;
      const G = (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1);
      if (G === 0) {
        throw new Error("three points are collinear, and it is impossible to determine a unique circle.");
      }
      const [centerX, centerY] = [
        ((x1 * x1 + y1 * y1) * (y2 - y3) + (x2 * x2 + y2 * y2) * (y3 - y1) + (x3 * x3 + y3 * y3) * (y1 - y2)) / (2 * G),
        ((x1 * x1 + y1 * y1) * (x3 - x2) + (x2 * x2 + y2 * y2) * (x1 - x3) + (x3 * x3 + y3 * y3) * (x2 - x1)) / (2 * G)
      ];
      const radius = Math.sqrt((centerX - x1) * (centerX - x1) + (centerY - y1) * (centerY - y1));
      const sweep = G > 0 ? 0 /* CW */ : 1 /* CCW */;
      return {
        centerPoint: new Vector2(centerX, centerY),
        radius,
        sweep
      };
    }
    /**
     * 点与圆的重叠关系
     */
    static isPointOnCircle(point, radius, circleCenter, strokeWidth, isFill) {
      const circleDirLine = point.sub(circleCenter);
      const [isOuter, isInner] = [
        circleDirLine.length > radius + strokeWidth / 2,
        circleDirLine.length < radius - strokeWidth / 2
      ];
      if (isOuter) {
        return false;
      } else if (isInner) {
        if (!isFill) {
          return false;
        }
        return true;
      }
      return true;
    }
    static getCircleBBox2(center, radius, storkeWidth) {
      if (radius <= 0) {
        return null;
      }
      const bbox2Fac = new BBox2Fac();
      bbox2Fac.extendByVector2(center).extendByOffset(radius + storkeWidth / 2);
      return bbox2Fac.build();
    }
  };

  // src/algorithm/geometry/Constant.ts
  var ARC_EPS = 1e-4;

  // src/algorithm/geometry/D2Intersection.ts
  function checkArcEndpoints(arcA, arcB) {
    const points = [];
    if (DoubleKit.eq(arcB.startPoint.distance(arcA.centerPoint), arcA.rx) && D2ArcToolkit.isPointOnArc(arcA, arcB.startPoint)) {
      points.push(arcB.startPoint);
      return points;
    }
    if (DoubleKit.eq(arcB.endPoint.distance(arcA.centerPoint), arcA.rx) && D2ArcToolkit.isPointOnArc(arcA, arcB.endPoint)) {
      points.push(arcB.endPoint);
      return points;
    }
    if (DoubleKit.eq(arcA.startPoint.distance(arcB.centerPoint), arcB.rx) && D2ArcToolkit.isPointOnArc(arcB, arcA.startPoint)) {
      points.push(arcA.startPoint);
      return points;
    }
    if (DoubleKit.eq(arcA.endPoint.distance(arcB.centerPoint), arcB.rx) && D2ArcToolkit.isPointOnArc(arcB, arcA.startPoint)) {
      points.push(arcA.endPoint);
      return points;
    }
    return points;
  }
  function checkArcResult1(arc, points) {
    const iPoints = [];
    for (let i = 0; i < points.length; i++) {
      if (D2ArcToolkit.isPointOnArc(arc, points[i])) {
        iPoints.push(points[i]);
      }
    }
    return iPoints;
  }
  function checkArcResult2(arc1, arc2, points) {
    const iPoints = [];
    for (let i = 0; i < points.length; i++) {
      if (D2ArcToolkit.isPointOnArc(arc1, points[i]) && D2ArcToolkit.isPointOnArc(arc2, points[i])) {
        iPoints.push(points[i]);
      }
    }
    return iPoints;
  }
  function endpointIsOn(endPoint, arc, nearPoint, farPoint) {
    return DoubleKit.eq(endPoint.distance(arc.centerPoint), arc.rx) && D2ArcToolkit.isPointOnArc(arc, endPoint) && endPoint.distanceSquare(nearPoint) < endPoint.distanceSquare(farPoint);
  }
  var D2Intersection = class _D2Intersection {
    /**
     * 计算 primitiveA 与 primitiveB 的交点数量
     */
    static getIntersectionsOfPrimitives(primitiveA, primitiveB) {
      if (primitiveA instanceof Line && primitiveB instanceof Line) {
        return _D2Intersection.getIntersectionsOfLines(primitiveA, primitiveB);
      }
      if (primitiveA instanceof Arc && primitiveB instanceof Line) {
        return _D2Intersection.getIntersectionsOfExtendLineAndArc(primitiveB, primitiveA);
      }
      if (primitiveA instanceof Line && primitiveB instanceof Arc) {
        return _D2Intersection.getIntersectionsOfExtendLineAndArc(primitiveA, primitiveB);
      }
      if (primitiveA instanceof Arc && primitiveB instanceof Arc) {
        return _D2Intersection.getIntersectionsOfArcs(primitiveA, primitiveB);
      }
      return { count: 0, points: [] };
    }
    /**
     * 计算线段 lineA 与线段 lineB 的交点数量
     */
    static getIntersectionsOfLines(lineA, lineB) {
      if (lineA.isPoint()) {
        return D2LineToolkit.isPointOnLine(lineB, lineA.startPoint) ? { count: 1, points: [lineA.startPoint] } : { count: 0, points: [] };
      }
      if (lineB.isPoint()) {
        return D2LineToolkit.isPointOnLine(lineA, lineB.startPoint) ? { count: 1, points: [lineB.startPoint] } : { count: 0, points: [] };
      }
      const inters = D2LineToolkit.getIntersectionByLines(lineA, lineB);
      if (inters === null) {
        return { count: 0, points: [] };
      }
      const [x1, y1] = [lineA.startPoint.x, lineA.startPoint.y];
      const [x2, y2] = [lineA.endPoint.x, lineA.endPoint.y];
      const [x3, y3] = [lineB.startPoint.x, lineB.startPoint.y];
      const [x4, y4] = [lineB.endPoint.x, lineB.endPoint.y];
      const [cross1, cross2] = [
        lineB.startPoint.sub(lineA.startPoint).cross(lineB.endPoint.sub(lineB.startPoint)),
        lineB.startPoint.sub(lineA.endPoint).cross(lineB.endPoint.sub(lineB.startPoint))
      ];
      if (cross1 * cross2 > 0 && !DoubleKit.eq(cross1, 0) && !DoubleKit.eq(cross2, 0)) {
        return { count: 0, points: [] };
      }
      const [cross3, cross4] = [
        lineA.startPoint.sub(lineB.startPoint).cross(lineA.endPoint.sub(lineA.startPoint)),
        lineA.startPoint.sub(lineB.endPoint).cross(lineA.endPoint.sub(lineA.startPoint))
      ];
      if (cross3 * cross4 > 0 && !DoubleKit.eq(cross3, 0) && !DoubleKit.eq(cross4, 0)) {
        return { count: 0, points: [] };
      }
      const result = { count: 0, points: [] };
      if (DoubleKit.eq(cross1, 0) && DoubleKit.eq(cross2, 0)) {
        if (DoubleKit.eq(inters.width, 0)) {
          if (DoubleKit.eq(inters.height, 0)) {
            result.points.push(inters.leftUp);
            result.count += 1;
          } else {
            result.points.push(inters.leftUp);
            result.points.push(inters.leftDown);
            result.count += 2;
          }
        } else if (DoubleKit.eq(inters.height, 0)) {
          result.points.push(inters.leftUp);
          result.points.push(inters.rightUp);
          result.count += 2;
        } else {
          const [ulArea, urArea] = [
            Triangle.getArea(inters.leftUp, new Vector2(x3, y3), new Vector2(x4, y4)),
            Triangle.getArea(inters.rightUp, new Vector2(x3, y3), new Vector2(x4, y4))
          ];
          if (ulArea < urArea) {
            result.points.push(inters.leftUp);
            result.points.push(inters.rightDown);
            result.count += 2;
          } else {
            result.points.push(inters.rightUp);
            result.points.push(inters.leftDown);
            result.count += 2;
          }
        }
      } else if (DoubleKit.eq(cross1, 0)) {
        if (inters.isContainsPoint(new Vector2(x1, y1))) {
          result.points.push(new Vector2(x1, y1));
          result.count += 1;
        }
      } else if (DoubleKit.eq(cross2, 0)) {
        if (inters.isContainsPoint(new Vector2(x2, y2))) {
          result.points.push(new Vector2(x2, y2));
          result.count += 1;
        }
      } else {
        const t0 = Math.abs(((x4 - x3) * (y3 - y1) - (y4 - y3) * (x3 - x1)) / ((y2 - y1) * (x4 - x3) - (x2 - x1) * (y4 - y3)));
        const t = Math.abs(cross1 / (cross1 - cross2));
        const [_x, _y] = [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
        if (inters.isContainsPoint(new Vector2(_x, _y))) {
          result.points.push(new Vector2(_x, _y));
          result.count += 1;
        }
      }
      return result;
    }
    /**
     * 计算线段 line 与圆弧 arc 的交点数量
     */
    static getIntersectionsOfLineAndArc(line, arc) {
      if (arc.rx === arc.ry) {
        let inters = arc.bbox2.getIntersection(line.bbox2);
        if (inters === null) {
          return { count: 0, points: [] };
        }
        const isInterPoint = (point) => {
          return inters.isContainsValue(point.x, point.y) && D2ArcToolkit.isPointOnArc(arc, point);
        };
        const [cx, cy, r, r2] = [arc.centerPoint.x, arc.centerPoint.y, arc.rx, arc.rx * arc.rx];
        const [x1, y1] = [line.startPoint.x, line.startPoint.y];
        const [x2, y2] = [line.endPoint.x, line.endPoint.y];
        const [d1, d2] = [arc.centerPoint.distanceSquare(line.startPoint), arc.centerPoint.distanceSquare(line.endPoint)];
        const [state1, state2] = [DoubleKit.eq(d1, r2) ? 0 : d1 > r2 ? 1 : -1, DoubleKit.eq(d2, r2) ? 0 : d2 > r2 ? 1 : -1];
        const result = { count: 0, points: [] };
        if (state1 === -1 && state2 === -1) {
          return result;
        }
        if (state1 === 0 && state2 === 0) {
          result.points.push(new Vector2(x1, y1));
          result.points.push(new Vector2(x2, y2));
          result.count += 2;
        }
        if (state1 === 1 && state2 === 1) {
          const footPoint = D2LineToolkit.calcFootOfPoint2Line(line, arc.centerPoint).point;
          const distance = footPoint.distance(arc.centerPoint);
          if (DoubleKit.greater(distance, r)) {
            return result;
          }
          if (DoubleKit.eq(distance, r)) {
            if (DoubleKit.eq(line.distance(arc.startPoint), 0)) {
              result.points.push(arc.startPoint);
              result.count += 1;
            } else if (DoubleKit.eq(line.distance(arc.endPoint), 0)) {
              result.points.push(arc.endPoint);
              result.count += 1;
            } else {
              result.points.push(footPoint);
              result.count += 1;
            }
          } else {
            const closedPoint = D2LineToolkit.getClosedPointOnLineWithPoint(
              new Line(new Vector2(x1, y1), new Vector2(x2, y2)),
              new Vector2(cx, cy)
            );
            const closedD = Vector.distance({ x: cx, y: cy }, { x: closedPoint.x, y: closedPoint.y });
            if (DoubleKit.eq(closedD, r)) {
              result.points.push(closedPoint);
              result.count += 1;
            } else if (closedD < r) {
              const points1 = D2LineToolkit.getPointsOnLineWithDistance(
                r,
                new Line(new Vector2(x1, y1), closedPoint),
                new Vector2(cx, cy)
              );
              for (let i = 0; i < points1.length; i++) {
                result.points.push(points1[i]);
                result.count += 1;
              }
              const points2 = D2LineToolkit.getPointsOnLineWithDistance(
                r,
                new Line(closedPoint, new Vector2(x2, y2)),
                new Vector2(cx, cy)
              );
              for (let i = 0; i < points2.length; i++) {
                result.points.push(points2[i]);
                result.count += 1;
              }
            } else {
              return result;
            }
          }
        } else if (state1 === -1 || state2 === -1) {
          const points = D2LineToolkit.getPointsOnLineWithDistance(
            r,
            new Line(new Vector2(x1, y1), new Vector2(x2, y2)),
            new Vector2(cx, cy)
          );
          for (let i = 0; i < points.length; i++) {
            result.points.push(points[i]);
            result.count += 1;
          }
        } else {
          const foot = D2LineToolkit.calcFootOfPoint2Line(line, arc.centerPoint).point;
          const distance = foot.distance(arc.centerPoint);
          if (DoubleKit.eq(distance, r)) {
            if (state1 === 0) {
              const p = line.startPoint;
              if (isInterPoint(p)) {
                result.points.push(p);
                result.count += 1;
                return result;
              }
              if (isInterPoint(foot)) {
                result.points.push(foot);
                result.count += 1;
                return result;
              }
              if (d1 <= r) {
                const points = D2LineToolkit.getPointsOnLineWithDistance(
                  r,
                  new Line(foot, new Vector2(x2, y2)),
                  new Vector2(cx, cy)
                );
                for (let i = 0; i < points.length; i++) {
                  result.points.push(points[i]);
                  result.count += 1;
                }
              } else if (distance < r) {
                const points1 = D2LineToolkit.getPointsOnLineWithDistance(
                  r,
                  new Line(foot, new Vector2(x2, y2)),
                  new Vector2(cx, cy)
                );
                if (points1.length === 1 && isInterPoint(points1[0])) {
                  for (let i = 0; i < points1.length; i++) {
                    result.points.push(points1[i]);
                    result.count += 1;
                  }
                  return result;
                }
                const points2 = D2LineToolkit.getPointsOnLineWithDistance(
                  r,
                  new Line(foot, new Vector2(x1, y1)),
                  new Vector2(cx, cy)
                );
                for (let i = 0; i < points2.length; i++) {
                  result.points.push(points2[i]);
                  result.count += 1;
                }
              }
            } else {
              const p = line.endPoint;
              if (isInterPoint(p)) {
                result.points.push(p);
                result.count += 1;
                return result;
              }
              if (isInterPoint(foot)) {
                result.points.push(foot);
                result.count += 1;
                return result;
              }
              if (d2 <= r) {
                const points = D2LineToolkit.getPointsOnLineWithDistance(
                  r,
                  new Line(foot, new Vector2(x1, y1)),
                  new Vector2(cx, cy)
                );
                for (let i = 0; i < points.length; i++) {
                  result.points.push(points[i]);
                  result.count += 1;
                }
              } else if (distance < r) {
                const points1 = D2LineToolkit.getPointsOnLineWithDistance(
                  r,
                  new Line(foot, new Vector2(x1, y1)),
                  new Vector2(cx, cy)
                );
                if (points1.length === 1 && isInterPoint(points1[0])) {
                  for (let i = 0; i < points1.length; i++) {
                    result.points.push(points1[i]);
                    result.count += 1;
                  }
                  return result;
                }
                const points2 = D2LineToolkit.getPointsOnLineWithDistance(
                  r,
                  new Line(foot, new Vector2(x2, y2)),
                  new Vector2(cx, cy)
                );
                for (let i = 0; i < points2.length; i++) {
                  result.points.push(points2[i]);
                  result.count += 1;
                }
              }
            }
          } else if (state1 === 0) {
            const p = line.startPoint;
            result.points.push(p);
            result.count += 1;
            if ((x1 - foot.x) * (x2 - foot.x) + (y1 - foot.y) * (y2 - foot.y) < 0) {
              const points = D2LineToolkit.getPointsOnLineWithDistance(
                r,
                new Line(foot, new Vector2(x2, y2)),
                new Vector2(cx, cy)
              );
              for (let i = 0; i < points.length; i++) {
                result.points.push(points[i]);
                result.count += 1;
              }
            }
          } else {
            const p = line.endPoint;
            result.points.push(p);
            result.count += 1;
            if ((x1 - foot.x) * (x2 - foot.x) + (y1 - foot.y) * (y2 - foot.y) < 0) {
              const points = D2LineToolkit.getPointsOnLineWithDistance(
                r,
                new Line(foot, new Vector2(x1, y1)),
                new Vector2(cx, cy)
              );
              for (let i = 0; i < points.length; i++) {
                result.points.push(points[i]);
                result.count += 1;
              }
            }
          }
        }
        if (result.count > 0) {
          const points = [];
          let count = 0;
          for (let i = 0; i < result.count; i++) {
            const point = result.points[i];
            if (Number.isFinite(point.x) && Number.isFinite(point.y) && inters.isContainsValue(point.x, point.y) && D2ArcToolkit.isPointOnArc(arc, new Vector2(point.x, point.y))) {
              points.push(point);
              count += 1;
            }
          }
          result.points = points;
          result.count = count;
          return result;
        }
        return result;
      }
      throw new Error(`not supportes ops.`);
    }
    /**
     * 计算线段 line (含延长线)与圆弧 arc 的交点数量
     */
    static getIntersectionsOfExtendLineAndArc(line, arc) {
      if (arc.rx === arc.ry) {
        const [cx, cy, r, r2] = [arc.centerPoint.x, arc.centerPoint.y, arc.rx, arc.rx * arc.rx];
        const [x1, y1] = [line.startPoint.x, line.startPoint.y];
        const [x2, y2] = [line.endPoint.x, line.endPoint.y];
        const [d1, d2] = [arc.centerPoint.distanceSquare(line.startPoint), arc.centerPoint.distanceSquare(line.endPoint)];
        const [state1, state2] = [DoubleKit.eq(d1, r2) ? 0 : d1 > r2 ? 1 : -1, DoubleKit.eq(d2, r2) ? 0 : d2 > r2 ? 1 : -1];
        const result = { count: 0, points: [] };
        if (state1 === -1 && state2 === -1) {
          return result;
        }
        if (state1 === 0 && state2 === 0) {
          result.points.push(new Vector2(x1, y1));
          result.points.push(new Vector2(x2, y2));
          result.count += 2;
        }
        if (state1 === 1 && state2 === 1) {
          const foot = D2LineToolkit.calcFootOfPoint2Line(line, arc.centerPoint).point;
          const distance = foot.distanceSquare(arc.centerPoint);
          if (DoubleKit.greater(distance, r2)) {
            return result;
          }
          if (DoubleKit.eq(distance, r2)) {
            const d3 = foot.distanceSquare(arc.startPoint);
            const d4 = foot.distanceSquare(arc.endPoint);
            if (DoubleKit.eq(d3, 0)) {
              result.points.push(arc.startPoint);
              result.count += 1;
            } else if (DoubleKit.eq(d4, 0)) {
              result.points.push(arc.endPoint);
              result.count += 1;
            } else {
              result.points.push(foot);
              result.count += 1;
            }
          } else {
            const closedPoint = D2LineToolkit.getClosedPointOnLineWithPoint(
              new Line(new Vector2(x1, y1), new Vector2(x2, y2)),
              new Vector2(cx, cy)
            );
            const closedD = Vector.distance({ x: cx, y: cy }, { x: closedPoint.x, y: closedPoint.y });
            if (DoubleKit.eq(closedD, r)) {
              result.points.push(closedPoint);
              result.count += 1;
            } else if (closedD < r) {
              const points1 = D2LineToolkit.getPointsOnLineWithDistance(
                r,
                new Line(new Vector2(x1, y1), closedPoint),
                new Vector2(cx, cy)
              );
              for (let i = 0; i < points1.length; i++) {
                result.points.push(points1[i]);
                result.count += 1;
              }
              const points2 = D2LineToolkit.getPointsOnLineWithDistance(
                r,
                new Line(closedPoint, new Vector2(x2, y2)),
                new Vector2(cx, cy)
              );
              for (let i = 0; i < points2.length; i++) {
                result.points.push(points2[i]);
                result.count += 1;
              }
            } else {
              return result;
            }
          }
        } else if (state1 === -1 || state2 === -1) {
          const points = D2LineToolkit.getPointsOnLineWithDistance(
            r,
            new Line(new Vector2(x1, y1), new Vector2(x2, y2)),
            new Vector2(cx, cy)
          );
          for (let i = 0; i < points.length; i++) {
            result.points.push(points[i]);
            result.count += 1;
          }
        } else {
          const foot = D2LineToolkit.calcFootOfPoint2Line(line, arc.centerPoint).point;
          if (state1 === 0) {
            result.points.push(line.startPoint);
            result.count += 1;
            if (DoubleKit.neq(foot.distanceSquare(line.startPoint), 0) && (x1 - foot.x) * (x2 - foot.x) + (y1 - foot.y) * (y2 - foot.y) < 0) {
              const points = D2LineToolkit.getPointsOnLineWithDistance(
                r,
                new Line(foot, new Vector2(x2, y2)),
                new Vector2(cx, cy)
              );
              for (let i = 0; i < points.length; i++) {
                result.points.push(points[i]);
                result.count += 1;
              }
            }
          } else {
            result.points.push(line.endPoint);
            result.count += 1;
            if (DoubleKit.neq(foot.distanceSquare(line.endPoint), 0) && (x1 - foot.x) * (x2 - foot.x) + (y1 - foot.y) * (y2 - foot.y) < 0) {
              const points = D2LineToolkit.getPointsOnLineWithDistance(
                r,
                new Line(foot, new Vector2(x1, y1)),
                new Vector2(cx, cy)
              );
              for (let i = 0; i < points.length; i++) {
                result.points.push(points[i]);
                result.count += 1;
              }
            }
          }
        }
        if (result.count > 0) {
          const points = [];
          let count = 0;
          for (let i = 0; i < result.points.length; i++) {
            const point = result.points[i];
            if (Number.isFinite(point.x) && Number.isFinite(point.y)) {
              points.push(point);
              count += 1;
            }
          }
          result.points = points;
          result.count = count;
          return result;
        }
        return result;
      }
      throw new Error(`not supportes ops.`);
    }
    /**
     * 计算圆弧 arcA 与圆弧 arcB 的交点数量
     */
    static getIntersectionsOfArcs(arcA, arcB) {
      if (arcA.rx === arcA.ry && arcB.rx === arcB.ry) {
        const [x1, y1] = [arcA.centerPoint.x, arcA.centerPoint.y];
        const [x2, y2] = [arcB.centerPoint.x, arcB.centerPoint.y];
        const [r1, r2] = [arcA.rx, arcB.rx];
        const [r21, r22] = [arcA.rx * arcA.rx, arcB.rx * arcB.rx];
        const d = arcA.centerPoint.distance(arcB.centerPoint);
        const deltaR = Math.abs(r1 - r2);
        const R2 = r1 + r2;
        const result = { count: 0, points: [] };
        if (DoubleKit.greater(d, R2) || DoubleKit.less(d, deltaR)) {
          return result;
        }
        if (DoubleKit.eq(deltaR, 0) && DoubleKit.eq(d, 0)) {
          let p = null;
          if (D2ArcToolkit.isPointOnArc(arcA, arcB.startPoint)) {
            result.points.push(arcB.startPoint);
            result.count += 1;
            p = arcB.startPoint;
          }
          if (D2ArcToolkit.isPointOnArc(arcA, arcB.endPoint)) {
            result.points.push(arcB.endPoint);
            result.count += 1;
            p = arcB.endPoint;
          }
          if (result.count === 0) {
            if (D2ArcToolkit.isPointOnArc(arcB, arcA.startPoint)) {
              result.points.push(arcA.startPoint);
              result.count += 1;
            }
            if (D2ArcToolkit.isPointOnArc(arcB, arcA.endPoint)) {
              result.points.push(arcA.endPoint);
              result.count += 1;
            }
          } else if (result.count === 1) {
            if (!p.equalsWithVector2(arcA.startPoint) && D2ArcToolkit.isPointOnArc(arcB, arcA.startPoint)) {
              result.points.push(arcA.startPoint);
              result.count += 1;
            }
            if (!p.equalsWithVector2(arcA.endPoint) && D2ArcToolkit.isPointOnArc(arcB, arcA.endPoint)) {
              result.points.push(arcA.endPoint);
              result.count += 1;
            }
          }
          return result;
        }
        if (DoubleKit.eq(d, R2)) {
          const checkPoints = checkArcEndpoints(arcA, arcB);
          if (checkPoints.length) {
            for (let i = 0; i < checkPoints.length; i++) {
              result.points.push(checkPoints[i]);
              result.count += 1;
            }
            return result;
          }
          const line = new Line(arcA.centerPoint, arcB.centerPoint);
          const iR1 = _D2Intersection.getIntersectionsOfLineAndArc(line, arcB);
          const iPoints1 = checkArcResult1(arcA, iR1.points);
          if (iPoints1.length) {
            for (let i = 0; i < iPoints1.length; i++) {
              result.points.push(iPoints1[i]);
              result.count += 1;
            }
            return result;
          }
          const iR2 = _D2Intersection.getIntersectionsOfLineAndArc(line, arcA);
          const iPoints2 = checkArcResult1(arcB, iR2.points);
          if (iPoints2.length) {
            for (let i = 0; i < iPoints2.length; i++) {
              result.points.push(iPoints2[i]);
              result.count += 1;
            }
            return result;
          }
          return result;
        }
        if (DoubleKit.greater(deltaR, 0) && DoubleKit.greater(d, 0) && DoubleKit.eq(d, deltaR)) {
          const checkPoints = checkArcEndpoints(arcA, arcB);
          if (checkPoints.length) {
            for (let i = 0; i < checkPoints.length; i++) {
              result.points.push(checkPoints[i]);
              result.count += 1;
            }
            return result;
          }
          if (r1 > r2) {
            const pro3 = (r1 - r2) / r1;
            result.points.push(new Vector2(x1 + (x2 - x1) / pro3, y1 + (y2 - y1) / pro3));
            result.count += 1;
            const iPoints2 = checkArcResult2(arcA, arcB, result.points);
            result.points = iPoints2;
            result.count = iPoints2.length;
            return result;
          }
          const pro2 = (r2 - r1) / r2;
          result.points.push(new Vector2(x2 + (x1 - x2) / pro2, y2 + (y1 - y2) / pro2));
          result.count += 1;
          const iPoints = checkArcResult2(arcA, arcB, result.points);
          result.points = iPoints;
          result.count = iPoints.length;
          return result;
        }
        const delta = (arcA.centerPoint.distanceSquare(arcB.centerPoint) - r22 + r21) / (d * 2);
        const pro = delta / d;
        const [x, y] = [(x2 - x1) * pro + x1, (y2 - y1) * pro + y1];
        const [lineA, lineB] = [x2 - x1, y2 - y1];
        const offset = Math.max(r1, r2);
        let [xl, yl, xr, yr] = [void 0, void 0, void 0, void 0];
        if (Math.abs(lineA) < Math.abs(lineB)) {
          const k = lineA / -lineB;
          const b = y - k * x;
          xl = x - offset;
          yl = k * xl + b;
          xr = x + offset;
          yr = k * xr + b;
        } else {
          const k = lineB / -lineA;
          const b = x - k * y;
          yl = y - offset;
          xl = k * yl + b;
          yr = y + offset;
          xr = k * yr + b;
        }
        const points1 = D2LineToolkit.getPointsOnLineWithDistance(
          r1,
          new Line(new Vector2(xl, yl), new Vector2(x, y)),
          new Vector2(x1, y1)
        );
        for (let i = 0; i < points1.length; i++) {
          result.points.push(points1[i]);
          result.count += 1;
        }
        const points2 = D2LineToolkit.getPointsOnLineWithDistance(
          r1,
          new Line(new Vector2(x, y), new Vector2(xr, yr)),
          new Vector2(x1, y1)
        );
        for (let i = 0; i < points2.length; i++) {
          result.points.push(points2[i]);
          result.count += 1;
        }
        if (result.count !== 2) {
          throw new Error(`cnt !== 4.`);
        }
        const [p1, p2] = result.points;
        if (D2ArcToolkit.isPointOnArc(arcA, p1) && D2ArcToolkit.isPointOnArc(arcB, p1)) {
          if (D2ArcToolkit.isPointOnArc(arcA, p2) && D2ArcToolkit.isPointOnArc(arcB, p2)) {
            return result;
          }
          if (endpointIsOn(arcA.startPoint, arcB, p2, p1)) {
            result.points[1] = arcA.startPoint;
            return result;
          }
          if (endpointIsOn(arcA.endPoint, arcB, p2, p1)) {
            result.points[1] = arcA.startPoint;
            return result;
          }
          if (endpointIsOn(arcB.startPoint, arcA, p2, p1)) {
            result.points[1] = arcB.startPoint;
            return result;
          }
          if (endpointIsOn(arcB.endPoint, arcA, p2, p1)) {
            result.points[1] = arcB.startPoint;
            return result;
          }
          if (endpointIsOn(arcA.startPoint, arcB, p1, p2)) {
            result.points[1] = arcA.startPoint;
            return result;
          }
          if (endpointIsOn(arcA.endPoint, arcB, p1, p2)) {
            result.points[1] = arcA.startPoint;
            return result;
          }
          if (endpointIsOn(arcB.startPoint, arcA, p1, p2)) {
            result.points[1] = arcB.startPoint;
            return result;
          }
          if (endpointIsOn(arcB.endPoint, arcA, p1, p2)) {
            result.points[1] = arcB.startPoint;
            return result;
          }
          return result;
        }
        if (D2ArcToolkit.isPointOnArc(arcA, p2) && D2ArcToolkit.isPointOnArc(arcB, p2)) {
          if (endpointIsOn(arcA.startPoint, arcB, p1, p2)) {
            result.points[1] = arcA.startPoint;
            return result;
          }
          if (endpointIsOn(arcA.endPoint, arcB, p1, p2)) {
            result.points[1] = arcA.startPoint;
            return result;
          }
          if (endpointIsOn(arcB.startPoint, arcA, p1, p2)) {
            result.points[1] = arcB.startPoint;
            return result;
          }
          if (endpointIsOn(arcB.endPoint, arcA, p1, p2)) {
            result.points[1] = arcB.startPoint;
            return result;
          }
          if (endpointIsOn(arcA.startPoint, arcB, p2, p1)) {
            result.points[1] = arcA.startPoint;
            return result;
          }
          if (endpointIsOn(arcA.endPoint, arcB, p2, p1)) {
            result.points[1] = arcA.startPoint;
            return result;
          }
          if (endpointIsOn(arcB.startPoint, arcA, p2, p1)) {
            result.points[1] = arcB.startPoint;
            return result;
          }
          if (endpointIsOn(arcB.endPoint, arcA, p2, p1)) {
            result.points[1] = arcB.startPoint;
            return result;
          }
          return result;
        }
        let [finded1, finded2] = [false, false];
        const check = (p, arc) => {
          const points = [];
          if (!(DoubleKit.eq(p.distance(arc.centerPoint), arc.rx) && D2ArcToolkit.isPointOnArc(arc, p))) {
            return points;
          }
          if (p.distanceSquare(p1) < p.distanceSquare(p2)) {
            if (finded1) {
              return points;
            }
            finded1 = true;
          } else {
            if (finded2) {
              return points;
            }
            finded2 = true;
          }
          points.push(p);
          return points;
        };
        result.points = [];
        result.count = 0;
        const cPoints = [].concat(
          check(arcA.startPoint, arcB),
          check(arcA.endPoint, arcB),
          check(arcB.startPoint, arcA),
          check(arcB.endPoint, arcA)
        );
        for (let i = 0; i < cPoints.length; i++) {
          result.points.push(cPoints[i]);
          result.count += 1;
        }
        return result;
      }
      throw new Error(`not supportes ops.`);
    }
    /**
     * 计算线段 lineA 与线段 lineB 的交点坐标
     * 		排除重叠场景
     */
    static getStictIntersectionPointOfSegment(A, B, C, D) {
      const equals = (A2, B2, place) => {
        if (A2 instanceof Vector2 && B2 instanceof Vector2) {
          return Math.abs(A2.x - B2.x) <= place && Math.abs(A2.y - B2.y) <= place;
        }
        return false;
      };
      let samePoint = equals(A, C, 0.5) || equals(A, D, 0.5) ? A : equals(B, C, 0.5) || equals(B, D, 0.5) ? B : null;
      if (samePoint) {
        return null;
      }
      let [dx, dy] = [B.x - A.x, B.y - A.y];
      let [da, db] = [D.x - C.x, D.y - C.y];
      let [t, s, u] = [void 0, void 0, void 0];
      let [dx13, dy13] = [void 0, void 0];
      u = da * dy - db * dx;
      if (u === 0) {
        return null;
      }
      dx13 = C.x - A.x;
      dy13 = C.y - A.y;
      s = (dx * dy13 - dy * dx13) / u;
      t = (da * dy13 - db * dx13) / u;
      if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
        return new Vector2(A.x + t * dx, A.y + t * dy);
      }
      return null;
    }
    /**
     * 判断线段 lineA 与线段 lineB 是否相交
     * 		包含延长线
     */
    static isIntersectOfLines(lineA, lineB) {
      const [A, B, C, D] = [lineA.startPoint, lineA.endPoint, lineB.startPoint, lineB.endPoint];
      const [a1, b1] = [B.y - A.y, A.x - B.x];
      const c1 = a1 * A.x + b1 * A.y;
      const [a2, b2] = [D.y - C.y, C.x - D.x];
      const c2 = a2 * C.x + b2 * C.y;
      const d = a1 * b2 - a2 * b1;
      if (d === 0) {
        return null;
      }
      const [x, y] = [(b2 * c1 - b1 * c2) / d, (a1 * c2 - a2 * c1) / d];
      return new Vector2(x, y);
    }
    /**
     * 判断折线 polyline 是否存在自交点
     */
    static isSelfIntersectionOfPolyline(pl) {
      const intersPoints = [];
      for (let i = 0; i < pl.primitives.length; i++) {
        const pt1 = pl.primitives[i];
        for (let j = i + 1; j < pl.primitives.length; j++) {
          const pt2 = pl.primitives[j];
          const intersPoint = _D2Intersection.getStictIntersectionPointOfSegment(
            pt1.startPoint.mul(0.1),
            pt1.endPoint.mul(0.1),
            pt2.startPoint.mul(0.1),
            pt2.endPoint.mul(0.1)
          );
          if (intersPoint) {
            intersPoints.push(intersPoint);
          }
        }
      }
      return intersPoints;
    }
  };

  // src/algorithm/geometry/D2ArcIdentify.ts
  var D2ArcIdentify = class {
    constructor() {
      this._deltaRadian = 1e-3 / 180 * Math.PI;
      this._minLength = 0.01;
    }
    /**
     * start = ...fixStartPoint(start, this.end, this.center, this.radius, this.sweep)
     */
    fixStartPoint(start, end, center, radius, sweep) {
      const [OS, OE] = [start.sub(center).normalize(), end.sub(center).normalize()];
      const radian = Math.acos(OS.dot(OE));
      const len = Math.abs(radius * radian);
      if (len > this._minLength && radian > this._deltaRadian) {
        return start;
      }
      const min = this._minLength / radius;
      const minRadian = Math.max(min, this._deltaRadian);
      let [startRadian, endRadian] = [start.getRadianByVector2(center), end.getRadianByVector2(center)];
      let sweepRadian = this.getRadian(sweep, startRadian, endRadian);
      if (Math.abs(sweepRadian) > Math.PI) {
        if (sweep === 1 /* CCW */) {
          startRadian = endRadian + minRadian;
        } else {
          startRadian = endRadian - minRadian;
        }
      } else {
        if (sweep === 1 /* CCW */) {
          startRadian = endRadian - minRadian;
        } else {
          startRadian = endRadian + minRadian;
        }
      }
      let newStart = new Vector2(Math.cos(startRadian), Math.sin(startRadian)).mul(radius).add(center);
      return newStart;
    }
    /**
     * end = ...fixStartPoint(end, this.start, this.center, this.radius, this.sweep)
     */
    fixEndPoint(end, start, center, radius, sweep) {
      const [OS, OE] = [start.sub(center).normalize(), end.sub(center).normalize()];
      const radian = Math.acos(OS.dot(OE));
      const len = Math.abs(radius * radian);
      if (len > this._minLength && radian > this._deltaRadian) {
        return start;
      }
      const min = this._minLength / radius;
      const minRadian = Math.max(min, this._deltaRadian);
      let [startRadian, endRadian] = [start.getRadianByVector2(center), end.getRadianByVector2(center)];
      let sweepRadian = this.getRadian(sweep, startRadian, endRadian);
      if (Math.abs(sweepRadian) > Math.PI) {
        if (sweep === 1 /* CCW */) {
          endRadian = startRadian - minRadian;
        } else {
          endRadian = startRadian + minRadian;
        }
      } else {
        if (sweep === 1 /* CCW */) {
          endRadian = startRadian + minRadian;
        } else {
          endRadian = startRadian - minRadian;
        }
      }
      let newEnd = new Vector2(Math.cos(endRadian), Math.sin(endRadian)).mul(radius).add(center);
      return newEnd;
    }
    fixStartRadian(startRadian, endRadian, radius, sweep) {
      let startRadian2 = startRadian;
      let sweepRadian = this.getRadian(sweep, startRadian2, endRadian);
      let radian = Math.PI * 2 - sweepRadian;
      radian = Math.min(radian, sweepRadian);
      let len = Math.abs(radius * radian);
      if (len > this._minLength && radian > this._deltaRadian) {
        return startRadian2;
      }
      let min = this._minLength / radius;
      let minRadian = Math.max(min, this._deltaRadian);
      if (Math.abs(sweepRadian) > Math.PI) {
        if (sweep === 1 /* CCW */) {
          startRadian2 = endRadian + minRadian;
        } else {
          startRadian2 = endRadian - minRadian;
        }
      } else {
        if (sweep === 1 /* CCW */) {
          startRadian2 = endRadian - minRadian;
        } else {
          startRadian2 = endRadian + minRadian;
        }
      }
      return startRadian2;
    }
    fixEndRadian(endRadian, startRadian, radius, sweep) {
      let endRadian2 = endRadian;
      let sweepRadian = this.getRadian(sweep, startRadian, endRadian2);
      let radian = Math.PI * 2 - sweepRadian;
      radian = Math.min(radian, sweepRadian);
      let len = Math.abs(radius * radian);
      if (len > this._minLength && radian > this._deltaRadian) {
        return endRadian2;
      }
      let min = this._minLength / radius;
      let minRadian = Math.max(min, this._deltaRadian);
      if (Math.abs(sweepRadian) > Math.PI) {
        if (sweep === 1 /* CCW */) {
          endRadian2 = startRadian - minRadian;
        } else {
          endRadian2 = startRadian + minRadian;
        }
      } else {
        if (sweep === 1 /* CCW */) {
          endRadian2 = startRadian + minRadian;
        } else {
          endRadian2 = startRadian - minRadian;
        }
      }
      return endRadian2;
    }
    getRadian(sweep, startRadian, endRadian) {
      let startRadian2 = (startRadian % Math.PI * 2 + Math.PI * 2) % Math.PI * 2;
      let endRadian2 = (endRadian % Math.PI * 2 + Math.PI * 2) % Math.PI * 2;
      let radian = 0;
      if (sweep === 1 /* CCW */) {
        radian = (endRadian2 - startRadian2 + Math.PI * 2) % Math.PI * 2;
      } else {
        radian = (startRadian2 - endRadian2 + Math.PI * 2) % Math.PI * 2;
      }
      return (radian % Math.PI * 2 + Math.PI * 2) % Math.PI * 2;
    }
  };

  // src/algorithm/geometry/D2ArcToolkit.ts
  var D2ArcToolkit = class _D2ArcToolkit {
    static fixCircleRadian(point, centerPoint) {
      const radian = Math.atan2(point.y - centerPoint.y, point.x - centerPoint.x);
      return radian < 0 ? radian + 2 * Math.PI : radian;
    }
    /**
     * 判断点 point 是否位于圆弧 arc 上
     */
    static isPointOnArc(arc, point) {
      const b = arc.bbox2;
      if (point.x - b.minX > -ARC_EPS && point.x - b.maxX < ARC_EPS && point.y - b.minY > -ARC_EPS && point.y - b.maxY < ARC_EPS) {
        if (Math.abs(arc.sweepRadian) >= 180) {
          let radian = Angles.regularRadian(point.getRadianByVector2(arc.centerPoint));
          if (DoubleKit.eq(radian, arc.startRadian, DoubleKit.eps2) || DoubleKit.eq(radian, arc.startRadian + Math.PI * 2, DoubleKit.eps2) || DoubleKit.eq(radian, arc.startRadian - Math.PI * 2, DoubleKit.eps2)) {
            return true;
          }
          if (DoubleKit.eq(radian, arc.endRadian, DoubleKit.eps2) || DoubleKit.eq(radian, arc.endRadian + Math.PI * 2, DoubleKit.eps2) || DoubleKit.eq(radian, arc.endRadian - Math.PI * 2, DoubleKit.eps2)) {
            return true;
          }
          if (arc.sweepRadian > 0) {
            if (DoubleKit.less(radian, arc.startRadian)) {
              radian += Math.PI * 2;
            }
            return DoubleKit.greatereq(arc.endRadian, radian);
          }
          if (DoubleKit.greater(radian, arc.startRadian)) {
            radian -= Math.PI * 2;
          }
          return DoubleKit.lesseq(arc.endRadian, radian);
        }
        return true;
      }
      return false;
    }
    /**
     * 判断点 point 是否位于圆弧 arc 上
     */
    static isPointOnArc2(arc, point, precise = 1e-3) {
      const [c, s] = [arc.centerPoint, arc.startPoint];
      const [rx, ry] = [arc.rx, arc.ry];
      const [radP, radPM, radPA] = [
        Math.atan2(point.y - c.y, point.x - c.x),
        Math.atan2(s.y - c.y, s.x - c.x),
        Math.atan2(ry - c.y, rx - c.x)
      ];
      if (Math.abs(radPM - radP) < precise || Math.abs(radPM - radP) > Math.PI * 2 - precise || Math.abs(radPA - radP) < precise) {
        return true;
      }
      let bool = Math.abs(radPM - radPA) > Math.PI === arc.isOverHalfCircle;
      if (Math.abs(Math.abs(radPM - radPA) - Math.PI) < precise) {
        bool = (radPM <= 0 && radPA >= 0) === !(arc.sweepRadian >= 0);
      }
      if (radPM >= radPA && radPM >= radP && radP >= radPA) {
        return bool;
      }
      if (radPM <= radPA && radPM <= radP && radP <= radPA) {
        return bool;
      }
      return !bool;
    }
    /**
     * 判断点 point 是否位于圆弧 arc 上
     */
    static isPointOnArc3(arc, point) {
      const arcRadius = arc.rx;
      const [arcLineStart, arcLineEnd, arcCenter] = [arc.startPoint, arc.endPoint, arc.centerPoint];
      const arcLineCenter = arc.centerPoint;
      const point2Center = point.distance(arcCenter);
      const [lineSP, lineEP, linePC] = [
        new Line(arcLineStart, arcLineCenter),
        new Line(arcLineEnd, arcLineCenter),
        new Line(point, arcCenter)
      ];
      const inter1 = D2Intersection.getIntersectionsOfLines(lineSP, linePC);
      const inter2 = D2Intersection.getIntersectionsOfLines(lineEP, linePC);
      const psIsInterSmOrm = inter1.count || inter2.count;
      const isPoint2CenterEqualRadius = isFloatEqual(point2Center, arcRadius, 1e-3);
      return isPoint2CenterEqualRadius && !!psIsInterSmOrm;
    }
    /**
     * 判断点 point 是否位于圆弧 arc 上
     */
    static isPointOnArc4(point, sRadian, eRadian, sweep, radius, circleCenter, strokeWidth, isFill) {
      const [R, r] = [radius + strokeWidth / 2, radius - strokeWidth / 2];
      const [sng, eng] = [sRadian % (Math.PI * 2), eRadian % (Math.PI * 2)];
      const [sng1, eng1] = [sweep === 1 /* CCW */ ? sng : eng, sweep === 1 /* CCW */ ? eng : sng];
      const [startRadian, endRadian] = [sng1, eng1];
      const sweepRadian = eng1 > sng1 ? eng1 - sng1 : eng1 - sng1 + Math.PI;
      const circleDirLine = point.sub(circleCenter);
      const norCircleDirLine = circleDirLine.normalize();
      const d = circleDirLine.length;
      if (d > R) {
        return false;
      }
      const [circleStartLine, circleEndLine] = [
        new Vector2(radius * Math.cos(startRadian), radius * Math.sin(startRadian)),
        new Vector2(radius * Math.cos(endRadian), radius * Math.sin(endRadian))
      ];
      const [norCircleStartLine, norCircleEndLine] = [circleStartLine.normalize(), circleEndLine.normalize()];
      const [startLine, endLine] = [circleCenter.add(circleStartLine), circleCenter.add(circleEndLine)];
      const [d1, d2] = [point.sub(startLine).length, point.sub(endLine).length];
      const SA = norCircleStartLine.x * norCircleDirLine.y - norCircleStartLine.y * norCircleDirLine.x;
      const EA = norCircleEndLine.x * norCircleDirLine.y - norCircleEndLine.y * norCircleDirLine.x;
      if (sweepRadian < Math.PI && SA > 0 && EA < 0 || sweepRadian >= Math.PI && (SA > 0 || EA < 0)) {
        if (d < r) {
          if (isFill) {
            return true;
          }
          return false;
        }
        return true;
      } else if (d1 < strokeWidth / 2 && SA <= 0) {
        if (isFill) {
          return false;
        }
        if (d < r) {
          return false;
        }
        return true;
      } else if (d2 < strokeWidth / 2 && EA >= 0) {
        if (isFill) {
          return false;
        }
        if (d < r) {
          return false;
        }
        return true;
      }
      return false;
    }
    /**
     * 已知:
     * 		起始点坐标 startPoint
     * 		结束点坐标 endPoint
     * 		第三点坐标 thirdPoint
     * 求解:
     * 		起始弧度 startRadian
     * 		终止弧度 endRadian
     * 		半径 radius
     * 		圆心坐标 centerPoint
     * 		旋转方向 sweep
     */
    static calculateD2ArcProfileByThreePoint(startPoint, endPoint, thirdPoint) {
      if (startPoint.equalsWithPoint(thirdPoint) || endPoint.equalsWithPoint(thirdPoint)) {
        const centerPoint2 = startPoint.add(thirdPoint).mul(0.5);
        return {
          centerPoint: centerPoint2,
          radius: thirdPoint.distance(startPoint) / 2,
          startRadian: startPoint.getRadianByVector2(centerPoint2),
          endRadian: endPoint.getRadianByVector2(centerPoint2),
          sweep: 1 /* CCW */
        };
      }
      const { centerPoint, radius, sweep } = D2CircleToolkit.calculateCircleProfileByByThreePoint(startPoint, endPoint, thirdPoint);
      const [thetaA, thetaB, thetaC] = [
        _D2ArcToolkit.fixCircleRadian(startPoint, centerPoint),
        _D2ArcToolkit.fixCircleRadian(endPoint, centerPoint),
        _D2ArcToolkit.fixCircleRadian(thirdPoint, centerPoint)
      ];
      let [startRadian, endRadian] = [0, 0];
      if (thetaC < Math.min(thetaA, thetaB) || thetaC > Math.max(thetaA, thetaB)) {
        if (thetaA < thetaB) {
          startRadian = thetaA;
          endRadian = thetaB - 2 * Math.PI;
        } else {
          startRadian = thetaA - 2 * Math.PI;
          endRadian = thetaB;
        }
      } else {
        startRadian = thetaA;
        endRadian = thetaB;
      }
      return {
        centerPoint,
        radius,
        sweep,
        startRadian,
        endRadian
      };
    }
    /**
     * 已知:
     * 		起始点坐标 startPoint
     * 		结束点坐标 endPoint
     * 		第三点坐标 thirdPoint
     * 求解:
     * 		起始弧度 startRadian
     * 		终止弧度 endRadian
     * 		半径 radius
     * 		圆心坐标 centerPoint
     * 		旋转方向 sweep
     */
    static calculateD2ArcProfileByThreePoint2(startPoint, endPoint, thirdPoint) {
      if (startPoint.equalsWithVector2(endPoint)) {
        if (thirdPoint.equalsWithVector2(startPoint)) {
          const centerPoint3 = startPoint.add(new Vector2(1e-3, 0));
          const radius3 = 1e-3;
          const [startRadian3, endRadian3] = [
            startPoint.getRadianByVector2(centerPoint3),
            endPoint.getRadianByVector2(centerPoint3)
          ];
          const sweep3 = 1 /* CCW */;
          return { centerPoint: centerPoint3, radius: radius3, startRadian: startRadian3, endRadian: endRadian3, sweep: sweep3 };
        }
        const centerPoint2 = startPoint.add(thirdPoint).mul(0.5);
        const radius2 = thirdPoint.distance(startPoint) / 2;
        const [startRadian2, endRadian2] = [startPoint.getRadianByVector2(centerPoint2), endPoint.getRadianByVector2(centerPoint2)];
        const sweep2 = 1 /* CCW */;
        return { centerPoint: centerPoint2, radius: radius2, startRadian: startRadian2, endRadian: endRadian2, sweep: sweep2 };
      }
      const [direct1, direct2] = [endPoint.sub(thirdPoint).normalize(), thirdPoint.sub(startPoint).normalize()];
      if (direct1.cross(direct2) === 0) {
        thirdPoint.add(new Vector2(-direct1.y, direct1.x)).mul(0.01);
      }
      const [A1, B1, C1] = [
        2 * (endPoint.x - startPoint.x),
        2 * (endPoint.y - startPoint.y),
        endPoint.x * endPoint.x + endPoint.y * endPoint.y - (startPoint.x * startPoint.x + startPoint.y * startPoint.y)
      ];
      const [A2, B2, C2] = [
        2 * (thirdPoint.x - endPoint.x),
        2 * (thirdPoint.y - endPoint.y),
        thirdPoint.x * thirdPoint.x + thirdPoint.y * thirdPoint.y - (endPoint.x * endPoint.x + endPoint.y * endPoint.y)
      ];
      const centerPoint = new Vector2((C1 * B2 - C2 * B1) / (A1 * B2 - A2 * B1), (A1 * C2 - A2 * C1) / (A1 * B2 - A2 * B1));
      const radius = centerPoint.distance(startPoint);
      const [startRadian, endRadian] = [startPoint.getRadianByVector2(centerPoint), endPoint.getRadianByVector2(centerPoint)];
      const crossV = direct2.cross(direct1);
      const sweep = crossV > 0 ? 1 /* CCW */ : 0 /* CW */;
      return { centerPoint, radius, startRadian, endRadian, sweep };
    }
    /**
     * 已知:
     * 		半径 radius
     * 		起始弧度 startRadian
     * 		终止弧度 endRadian
     * 求解:
     * 		起始点坐标 startPoint
     * 		结束点坐标 endPoint
     * 		弧线中点坐标 middlePoint
     */
    static calculateThreePointByArcProfile(radius, startRadian, endRadian) {
      const [arcStartPoint, arcEndPoint] = [
        new Vector2(radius * Math.cos(startRadian), radius * Math.sin(startRadian)),
        new Vector2(radius * Math.cos(endRadian), radius * Math.sin(endRadian))
      ];
      const addPoint = arcStartPoint.add(arcEndPoint);
      const dir = Math.abs(endRadian - startRadian) > Math.PI ? -1 : 1;
      return {
        startPoint: arcStartPoint,
        endPoint: arcEndPoint,
        middlePoint: addPoint.normalize().mul(dir * radius, dir * radius)
      };
    }
    /**
     * 已知:
     * 		起始点坐标 startPoint
     * 		结束点坐标 endPoint
     * 		圆心坐标 centerPoint
     * 		旋转方向 sweep
     * 求解:
     * 		起始弧度 startRadian
     * 		终止弧度 endRadian
     */
    static calculateRadianProfileByPoint(O, A, B, sweep) {
      const [vA, vB] = [
        { x: A.x - O.x, y: A.y - O.y },
        { x: B.x - O.x, y: B.y - O.y }
      ];
      let [start, end] = [Math.atan2(vA.y, vA.x), Math.atan2(vB.y, vB.x)];
      if (start < 0) {
        start += Math.PI * 2;
      }
      if (end < 0) {
        end += Math.PI * 2;
      }
      if (sweep === 1 /* CCW */) {
        if (end < start) {
          end += Math.PI * 2;
        }
      } else if (sweep === 0 /* CW */) {
        if (end > start) {
          end -= Math.PI * 2;
        }
      } else {
        throw new Error('dir must be "ccw" or "cw"');
      }
      return {
        startRadian: start,
        endRadian: end
      };
    }
    /**
     * 已知:
     * 		起始点坐标 startPoint
     * 		结束点坐标 endPoint
     * 		旋转弧度 radian
     * 求解:
     * 		起始弧度 startRadian
     * 		终止弧度 endRadian
     * 		半径 radius
     * 		圆心坐标 centerPoint
     * 		旋转方向 sweep
     */
    static calculateD2ArcProfileTwoPointsAndRadian(startPoint, endPoint, radian) {
      const direct = endPoint.sub(startPoint);
      const v = new Vector2(-direct.y, direct.x).normalize();
      const radian2 = Math.abs(radian) / 2;
      let radius = 0;
      if (radian2 !== 0) {
        radius = direct.length / 2 / Math.sin(radian2);
      } else {
        throw new Error(`can not represent circle.`);
      }
      let sweep = void 0;
      let centerPoint = void 0;
      if (radian > 0) {
        sweep = 1 /* CCW */;
        centerPoint = endPoint.add(v.rotateSurround(Vector2.ORIGIN, radian2).mul(radius));
      } else {
        sweep = 0 /* CW */;
        centerPoint = startPoint.sub(v.rotateSurround(Vector2.ORIGIN, radian2).mul(radius));
      }
      const [startRadian, endRadian] = [startPoint.getRadianByVector2(centerPoint), endPoint.getRadianByVector2(centerPoint)];
      return { centerPoint, radius, startRadian, endRadian, sweep };
    }
    static getMiddleInArc(pt) {
      const sweepRadian = Math.abs(pt.sweepRadian % 360);
      const [v1, v2] = [pt.startPoint.sub(pt.centerPoint), pt.endPoint.sub(pt.centerPoint)];
      let centerDirect = v1.add(v2).normalize();
      if (sweepRadian > 180) {
        centerDirect = centerDirect.mul(-1);
      }
      const middle = pt.centerPoint.add(centerDirect.mul(pt.rx));
      return middle;
    }
    static getArcLength(radius, sweepRadian) {
      return Math.abs(radius * sweepRadian * Math.PI / Math.PI);
    }
    static arcApplyTranslateMatrix4(matrix4, oldStartRadian, oldEndRadian, oldSweepRadian, oldRadius, oldCenter) {
      const result = {
        center: void 0,
        startRadian: void 0,
        endRadian: void 0,
        sweep: void 0
      };
      const [newStartPoint, newEndPoint] = [
        oldCenter.add(new Vector2(Math.cos(oldStartRadian) * oldRadius, Math.sin(oldStartRadian) * oldRadius)),
        oldCenter.add(new Vector2(Math.cos(oldEndRadian) * oldRadius, Math.sin(oldEndRadian) * oldRadius))
      ];
      const radian = oldSweepRadian;
      const midRadian = oldStartRadian + radian / 2;
      const mid = oldCenter.add(new Vector2(Math.cos(midRadian) * oldRadius, Math.sin(midRadian) * oldRadius));
      const [c, s, e, m] = [
        oldCenter.multiplyMatrix4(matrix4),
        newStartPoint.multiplyMatrix4(matrix4),
        newEndPoint.multiplyMatrix4(matrix4),
        mid.multiplyMatrix4(matrix4)
      ];
      const [newStartDir, newEndDir] = [s.sub(c), e.sub(c)];
      let [sRadian, eRadian] = [Math.atan2(newStartDir.y, newStartDir.x), Math.atan2(newEndDir.y, newEndDir.x)];
      if (sRadian < 0) {
        sRadian += Math.PI * 2;
      }
      if (eRadian < 0) {
        eRadian += Math.PI * 2;
      }
      result.center = c;
      result.startRadian = sRadian;
      result.endRadian = eRadian;
      const [d1, d2] = [m.sub(s), e.sub(m)];
      if (d1.cross(d2) >= 0) {
        result.sweep = 1 /* CCW */;
      } else {
        result.sweep = 0 /* CW */;
      }
      return result;
    }
    static getArcBBox2(center, radius, storkeWidth, startRadian, endRadian, sweep) {
      if (storkeWidth < 0) {
        return null;
      }
      const isContain = (radian) => {
        if (startRadian === endRadian) {
          return true;
        }
        if (sweep === 1 /* CCW */) {
          if (startRadian > endRadian) {
            if (radian >= startRadian && radian <= Math.PI * 2) {
              return true;
            }
            if (radian >= 0 && radian <= endRadian) {
              return true;
            }
            return false;
          }
          if (radian >= startRadian && radian <= endRadian) {
            return true;
          }
          return false;
        }
        if (startRadian > endRadian) {
          if (radian >= endRadian && radian <= startRadian) {
            return true;
          }
          return false;
        }
        if (radian >= endRadian && radian <= Math.PI * 2) {
          return true;
        }
        if (radian >= 0 && radian <= startRadian) {
          return true;
        }
        return false;
      };
      if (radius <= 0) {
        return null;
      }
      const bbox2Fac = new BBox2Fac();
      const [start, end] = [
        center.add(new Vector2(Math.cos(startRadian) * radius, Math.sin(startRadian) * radius)),
        center.add(new Vector2(Math.cos(endRadian) * radius, Math.sin(endRadian) * radius))
      ];
      bbox2Fac.extendByValue(start.x, start.y).extendByValue(end.x, end.y);
      if (isContain(0)) {
        const p = center.add(new Vector2(radius, 0));
        bbox2Fac.extendByValue(p.x, p.y);
      }
      if (isContain(Math.PI / 2)) {
        const p = center.add(new Vector2(0, radius));
        bbox2Fac.extendByValue(p.x, p.y);
      }
      if (isContain(Math.PI)) {
        const p = center.add(new Vector2(-radius, 0));
        bbox2Fac.extendByValue(p.x, p.y);
      }
      if (isContain(Math.PI * (3 / 2))) {
        const p = center.add(new Vector2(0, -radius));
        bbox2Fac.extendByValue(p.x, p.y);
      }
      bbox2Fac.extendByOffset(storkeWidth / 2);
      return bbox2Fac.build();
    }
    static getArcMiddlePoint(center, radius, startRadian, endRadian, sweep = 1 /* CCW */) {
      if (sweep === 1 /* CCW */) {
        if (endRadian > startRadian) {
          const radian3 = (endRadian - startRadian) / 2 + startRadian;
          const midPoint3 = center.add(new Vector2(Math.cos(radian3), Math.sin(radian3)).mul(radius));
          return midPoint3;
        }
        if (endRadian === startRadian) {
          const midPoint3 = center.add(new Vector2(Math.cos(Math.PI * 3 / 2), Math.sin(Math.PI * 3 / 2)).mul(radius));
          return midPoint3;
        }
        const radian2 = (endRadian + Math.PI * 2 - startRadian) / 2 + startRadian;
        const midPoint2 = center.add(new Vector2(Math.cos(radian2), Math.sin(radian2)).mul(radius));
        return midPoint2;
      }
      if (endRadian > startRadian) {
        const radian2 = (startRadian = Math.PI * 2 - endRadian) / 2 + endRadian;
        const midPoint2 = center.add(new Vector2(Math.cos(radian2), Math.sin(radian2)).mul(radius));
        return midPoint2;
      }
      if (endRadian === startRadian) {
        const midPoint2 = center.add(new Vector2(Math.cos(Math.PI * 3 / 2), Math.sin(Math.PI * 3 / 2)).mul(radius));
        return midPoint2;
      }
      const radian = (startRadian - endRadian) / 2 + endRadian;
      const midPoint = center.add(new Vector2(Math.cos(radian), Math.sin(radian)).mul(radius));
      return midPoint;
    }
    static updateArcParamByNewStartPoint(newStartPoint, oldStartPoint, oldEndPoint, oldMidPoint, oldCenterPoint, oldSweep, oldRadius) {
      const result = {
        center: null,
        startRadian: void 0,
        endRadian: void 0,
        radius: void 0
      };
      const newStartPoint2 = new D2ArcIdentify().fixStartPoint(newStartPoint, oldEndPoint, oldCenterPoint, oldRadius, oldSweep);
      let length2 = oldEndPoint.distanceSquare(newStartPoint2);
      let distance = Math.sqrt(oldMidPoint.distanceSquare(oldStartPoint) - oldEndPoint.distanceSquare(oldStartPoint) / 4);
      if (distance < 0.1 || Number.isNaN(distance)) {
        distance = 0.1;
      }
      let radius = distance / 2 + length2 / distance / 8;
      if (radius === 0) {
        radius = 1e-8;
      }
      result.radius = radius;
      const [direct, mid] = [oldEndPoint.sub(newStartPoint2), newStartPoint2.add(oldEndPoint).mul(0.5)];
      let l = null;
      if (oldSweep === 1 /* CCW */) {
        l = new Vector2(-direct.y, direct.x).normalize();
      } else {
        l = new Vector2(direct.y, -direct.x).normalize();
      }
      let center = mid.add(l.mul(radius - distance));
      result.center = center;
      const [OS, OE] = [newStartPoint2.sub(center).normalize(), oldEndPoint.sub(center).normalize()];
      result.startRadian = Math.atan2(OS.y, OS.x);
      result.endRadian = Math.atan2(OE.y, OE.x);
      return result;
    }
    static updateArcParamByNewEndPoint(newEndPoint, oldStartPoint, oldEndPoint, oldMidPoint, oldSweep) {
      const result = {
        center: null,
        startRadian: void 0,
        endRadian: void 0,
        radius: void 0
      };
      let length2 = newEndPoint.distanceSquare(oldStartPoint);
      let distance = Math.sqrt(oldMidPoint.distanceSquare(oldStartPoint) - oldEndPoint.distanceSquare(oldStartPoint) / 4);
      if (distance < 0.1 || Number.isNaN(distance)) {
        distance = 0.1;
      }
      let radius = distance / 2 + length2 / distance / 8;
      if (radius === 0) {
        radius = 1e-8;
      }
      result.radius = radius;
      let direct = newEndPoint.sub(oldStartPoint);
      let mid = oldStartPoint.add(newEndPoint).mul(0.5);
      let l = null;
      if (oldSweep === 1 /* CCW */) {
        l = new Vector2(-direct.y, direct.x).normalize();
      } else {
        l = new Vector2(direct.y, -direct.x);
      }
      let center = mid.add(l.mul(radius - distance));
      result.center = center;
      const [OS, OE] = [oldStartPoint.sub(center).normalize(), newEndPoint.sub(center).normalize()];
      result.startRadian = Math.atan2(OS.y, OS.x);
      result.endRadian = Math.atan2(OE.y, OE.x);
      return result;
    }
    /**
     * 已知圆弧起始坐标/结束坐标/起始点切线方向(视作与圆弧旋转方向一致), 求圆弧参数
     */
    static tangentPositionDirect2Arc(startPoint, startPointDirect, endPoint, fixStart = true) {
      if (startPoint.equalsWithVector2(endPoint)) {
        const v = new Vector2(startPointDirect.y, -startPointDirect.x).normalize();
        const centerPoint2 = startPoint.add(v);
        const startRadian2 = startPoint.getRadianByVector2(centerPoint2);
        const endRadian2 = startRadian2 + Math.PI * 2;
        if (fixStart) {
          return {
            centerPoint: centerPoint2,
            radius: 1,
            startRadian: startRadian2,
            endRadian: endRadian2,
            sweep: 0 /* CW */
          };
        }
        return {
          centerPoint: centerPoint2,
          radius: 1,
          startRadian: endRadian2,
          endRadian: startRadian2,
          sweep: 0 /* CW */
        };
      }
      const start2end = endPoint.sub(startPoint);
      const cross = startPointDirect.cross(start2end);
      let sweep = void 0;
      let [v1, v2] = [void 0, void 0];
      if (cross > 0) {
        sweep = 1 /* CCW */;
        v1 = new Vector2(-startPointDirect.y, startPointDirect.x).normalize();
        v2 = new Vector2(-start2end.y, start2end.x).normalize();
      } else {
        sweep = 0 /* CW */;
        v1 = new Vector2(startPointDirect.y, -startPointDirect.x).normalize();
        v2 = new Vector2(start2end.y, -startPointDirect.x).normalize();
      }
      const line1 = new Line(startPoint, startPoint.add(v1.mul(1e5)));
      const center1 = startPoint.add(endPoint).mul(0.5);
      const line2 = new Line(center1.sub(v2.mul(1e5)), center1.add(v2.mul(1e5)));
      const interRes = D2Intersection.getIntersectionsOfPrimitives(line1, line2);
      if (interRes.count > 0) {
        const centerPoint2 = interRes.points[0];
        const [radius2, startRadian2, endRadian2] = [
          centerPoint2.distance(startPoint),
          startPoint.getRadianByVector2(centerPoint2),
          endPoint.getRadianByVector2(centerPoint2)
        ];
        return {
          centerPoint: centerPoint2,
          radius: radius2,
          startRadian: startRadian2,
          endRadian: endRadian2,
          sweep
        };
      }
      const centerPoint = startPoint.add(v1.mul(1e5));
      const [radius, startRadian, endRadian] = [
        centerPoint.distance(startPoint),
        startPoint.getRadianByVector2(centerPoint),
        endPoint.getRadianByVector2(centerPoint)
      ];
      return {
        centerPoint,
        radius,
        startRadian,
        endRadian,
        sweep
      };
    }
  };

  // src/algorithm/geometry/D2PrimitiveToolkit.ts
  var D2PrimitiveToolkit = class _D2PrimitiveToolkit {
    static isEmptyPrimitive(pt) {
      if (pt instanceof Line) {
        return DoubleKit.eq(pt.length, 0);
      }
      if (pt instanceof Arc) {
        return DoubleKit.eq(pt.sweepRadian, 0);
      }
      return true;
    }
    static getPrimitivesAllLength(pts) {
      let lenSum = 0;
      for (let i = 0; i < pts.length; i++) {
        if (pts[i] instanceof Line) {
          lenSum += pts[i].length;
          continue;
        }
        if (pts[i] instanceof Arc) {
          lenSum += pts[i].length;
          continue;
        }
      }
      return lenSum;
    }
    static getPrimitiveItemLength(pt) {
      if (pt instanceof Line) {
        return pt.length;
      }
      if (pt instanceof Arc) {
        const sweepRadian = Angles.degreeToRadian(pt.sweepRadian);
        return Math.abs(pt.rx * sweepRadian);
      }
      return 0;
    }
    /**
     * 获取 Primitive 结束点的方向向量
     *      对于圆弧 Arc, 即结束点位置的切线方向
     */
    static getPrimitiveLastDirect(pts, end) {
      for (let i = pts.length - 1; i >= 0; i--) {
        const pt = pts[i];
        if (i > 0 && _D2PrimitiveToolkit.isEmptyPrimitive(pt)) {
          continue;
        }
        if (pt instanceof Line) {
          return pt.direct;
        }
        if (pt instanceof Arc) {
          const _end = end || pt.endPoint;
          const direc = _end.sub(pt.centerPoint).normalize();
          if (pt.sweep === 1 /* CCW */) {
            return new Vector2(-direc.y, direc.x);
          }
          return new Vector2(direc.y, -direc.x);
        }
      }
      return null;
    }
    static isPointInPt(p, pt) {
      if (pt instanceof Line) {
        const [v1, v2] = [p.sub(pt.startPoint), p.sub(pt.endPoint)];
        return DoubleKit.eq(Math.abs(v1.cross(v2)), 0) && DoubleKit.lesseq(v1.dot(v2), 0);
      }
      if (pt instanceof Arc) {
        return DoubleKit.eq(p.distance(pt.centerPoint), pt.rx) && D2ArcToolkit.isPointOnArc(pt, p);
      }
      return false;
    }
    static splitPrimitive(pt, point) {
      if (pt instanceof Line) {
        return [new Line(pt.startPoint, point), new Line(point, pt.endPoint)];
      }
      if (pt instanceof Arc) {
        if (Math.abs(pt.sweepRadian) === 360) {
          const mid = pt.centerPoint.sub(point).mul(2).add(point);
          const [pt12, pt22] = [
            Arc.build4(mid, point, pt.centerPoint, pt.rx, pt.rx, pt.sweep),
            Arc.build4(point, mid, pt.centerPoint, pt.rx, pt.rx, pt.sweep)
          ];
          return [pt12, pt22];
        }
        let [pt1, pt2] = [
          Arc.build4(pt.startPoint, point, pt.centerPoint, pt.rx, pt.rx, pt.sweep),
          Arc.build4(point, pt.endPoint, pt.centerPoint, pt.rx, pt.rx, pt.sweep)
        ];
        if (pt1.startPoint.equalsWithVector2(pt1.endPoint)) {
          pt1 = new Line(pt.startPoint, point);
        }
        if (pt2.startPoint.equalsWithVector2(pt2.endPoint)) {
          pt2 = new Line(point, pt.endPoint);
        }
        return [pt1, pt2];
      }
      return [];
    }
    static isPrimitivesClosed(pts, range = 1e-8) {
      if (pts.length === 1) {
        const pt = pts[0];
        if (pt instanceof Arc && DoubleKit.greatereq(Math.abs(pt.sweepRadian), Math.PI * 2)) {
          return true;
        }
      }
      if (pts.length === 2) {
        if (pts[0] instanceof Line && pts[1] instanceof Line) {
          return false;
        }
        const f2 = pts[0];
        const l2 = pts[pts.length - 1];
        if (f2.startPoint.distance(l2.endPoint) <= range) {
          return true;
        }
      }
      const f = pts[0];
      const l = pts[pts.length - 1];
      if (f.startPoint.distance(l.endPoint) <= range) {
        return true;
      }
      return false;
    }
    static sortForLine(points, line) {
      if (points.length <= 0) {
        return points;
      }
      if (line instanceof Line) {
        const startPoint = line.startPoint;
        ArraySort.quickSort(
          points,
          (p1, p2) => {
            return p1.distanceSquare(startPoint) - p2.distanceSquare(startPoint);
          },
          0,
          points.length
        );
        return points;
      }
      if (line instanceof Arc) {
        const centerPoint = line.centerPoint;
        const direct = line.startPoint.sub(centerPoint).normalize();
        const sweep = line.sweep;
        ArraySort.quickSort(
          points,
          (p1, p2) => {
            const [direct1, direct2] = [p1.sub(centerPoint).normalize(), p2.sub(centerPoint).normalize()];
            const [dot1, dot2] = [toFix(direct.dot(direct1), 8), toFix(direct.dot(direct2), 8)];
            const [corss1, corss2] = [direct.cross(direct1), direct.cross(direct2)];
            let [radian1, radian2] = [Math.acos(dot1), Math.acos(dot2)];
            if (sweep === 1 /* CCW */ && DoubleKit.less(corss1, 0) || sweep === 0 /* CW */ && DoubleKit.greater(corss1, 0)) {
              radian1 = Math.PI * 2 - radian1;
            }
            if (sweep === 1 /* CCW */ && DoubleKit.less(corss2, 0) || sweep === 0 /* CW */ && DoubleKit.greater(corss2, 0)) {
              radian2 = Math.PI * 2 - radian2;
            }
            return radian1 - radian2;
          },
          0,
          points.length
        );
        if (line.startPoint.equalsWithVector2(line.endPoint)) {
          points.push(line.endPoint);
        }
        return points;
      }
      return points;
    }
    static interceptPrimitive(pt, dis1, dis2) {
      if (DoubleKit.eq(dis1, 0) && !dis2) {
        return pt;
      }
      if (pt instanceof Line) {
        const startPoint = pt.startPoint.add(pt.direct.mul(dis1));
        const endPoint = dis2 ? pt.startPoint.add(pt.direct.mul(dis2)) : pt.endPoint;
        return new Line(startPoint, endPoint);
      }
      if (pt instanceof Arc) {
        const originstartRadian = Angles.regularRadian(pt.startRadian);
        const len = Math.PI * 1 * pt.rx * 2;
        const radian1 = dis1 / len * 360;
        const startRadian = pt.sweep === 0 /* CW */ ? originstartRadian - radian1 : originstartRadian + radian1;
        let endRadian = pt.endRadian;
        if (typeof dis2 === "number") {
          const radian2 = dis2 / len * 360;
          endRadian = pt.sweep === 0 /* CW */ ? originstartRadian - radian2 : originstartRadian + radian2;
        }
        return Arc.build2(pt.centerPoint, startRadian, endRadian, pt.rx, pt.rx, pt.sweep);
      }
      return pt;
    }
  };

  // src/algorithm/geometry/D2LineToolkit.ts
  var D2LineToolkit = class _D2LineToolkit {
    /**
     * 计算点 point 到直线 line 的垂足坐标
     * 		令
     * 			t = ((px - xa) * (xb - xa) + (py - ay) * (by - ay)) / ((bx - ax) * (bx - ax) + (by - ay) * (by - ay))
     * 		则
     * 			xf = xa + t * (bx - ax)
     * 			yf = ya + t * (by - ay)
     * 		当 t < 0 时, F 点在线段 L 的延长线上且靠近 A
     * 		当 t > 1 时, F 点在线段 L 的延长线上且靠近 B
     * 		当 0 <= t <= 1 时, F 点在线段 L 上
     */
    static calcFootOfPoint2Line(line, point) {
      const t = ((point.x - line.startPoint.x) * (line.endPoint.x - line.startPoint.x) + (point.y - line.startPoint.y) * (line.endPoint.y - line.startPoint.y)) / ((line.endPoint.x - line.startPoint.x) * (line.endPoint.x - line.startPoint.x) + (line.endPoint.y - line.startPoint.y) * (line.endPoint.y - line.startPoint.y));
      if (line.isPoint()) {
        return { point: line.startPoint, t };
      }
      if (!DoubleKit.eq(line.b, 0) && !DoubleKit.eq(line.a, 0)) {
        const [x, y] = [
          (line.b * line.b * point.x - line.a * line.b * point.y - line.a * line.c) / (line.b * line.b + line.a * line.a),
          (-line.a * line.b * point.x + line.a * line.a * point.y - line.b * line.c) / (line.b * line.b + line.a * line.a)
        ];
        return { point: new Vector2(x, y), t };
      }
      if (DoubleKit.eq(line.b, 0) && !DoubleKit.eq(line.a, 0)) {
        return { point: new Vector2(line.startPoint.x, point.y), t };
      }
      if (!DoubleKit.eq(line.b, 0) && DoubleKit.eq(line.a, 0)) {
        return { point: new Vector2(point.x, line.startPoint.y), t };
      }
      return { point, t };
    }
    /**
     * 判断点 point 是否位于线段 line 上
     */
    static isPointOnLine(line, point, place = DoubleKit.eps1) {
      if (!line.bbox2.extendByDist(1e-8).isContainsPoint(point)) {
        return false;
      }
      if (line.isPoint()) {
        if (point.equalsWithVector2(line.startPoint)) {
          return true;
        }
        return false;
      }
      if (DoubleKit.eq(Triangle.getArea(line.startPoint, line.endPoint, point), place)) {
        return true;
      }
      return false;
    }
    /**
     * 判断点 point 是否位于线段 line 上
     */
    static isPointOnLine2(line, point, place = 0.5) {
      const eps = DoubleKit.eps1;
      const [maxX, maxY, minX, minY] = [
        line.startPoint.x - line.endPoint.x > 0 ? line.startPoint.x : line.endPoint.x,
        line.startPoint.y - line.endPoint.y > 0 ? line.startPoint.y : line.endPoint.y,
        line.startPoint.x - line.endPoint.x > 0 ? line.endPoint.x : line.startPoint.x,
        line.startPoint.y - line.endPoint.y > 0 ? line.endPoint.y : line.startPoint.y
      ];
      const flg = point.x <= maxX + eps + place && point.x >= minX - eps - place && point.y <= maxY + eps + place && point.y >= minY - eps - place;
      if (!flg) {
        return false;
      }
      const crossValue = line.startPoint.sub(point).cross(line.endPoint.sub(line.startPoint));
      return crossValue < Math.sin(Math.PI / 180) + place;
    }
    /**
     * 判断点 point 是否位于有宽线段 stroke-line 上
     */
    static isPointOnStrokeLine(point, startPoint, endPoint, strokeWidth, isRound = false, rectBorderRadius = 0) {
      const [startPoint2Point, endPoint2Point, lineDirect] = [
        point.sub(startPoint),
        point.sub(endPoint),
        endPoint.sub(startPoint)
      ];
      const cl = new Vector2(
        (startPoint2Point.x * lineDirect.x + startPoint2Point.y * lineDirect.y) * lineDirect.x / (lineDirect.x * lineDirect.x + lineDirect.y * lineDirect.y),
        (startPoint2Point.x * lineDirect.x + startPoint2Point.y * lineDirect.y) * lineDirect.y / (lineDirect.x * lineDirect.x + lineDirect.y * lineDirect.y)
      );
      const norLineDirect = lineDirect.normalize();
      const halfWidthDirect = new Vector2(-norLineDirect.y, norLineDirect.x).scale(strokeWidth / 2);
      const lineCorner = halfWidthDirect.add(lineDirect);
      const [lineCornerLengthSqu, startPoint2PointLengthSqu, endPoint2PointLengthSqu] = [
        lineCorner.x * lineCorner.x + lineCorner.y * lineCorner.y,
        startPoint2Point.x * startPoint2Point.x + startPoint2Point.y * startPoint2Point.y,
        endPoint2Point.x * endPoint2Point.x + endPoint2Point.y * endPoint2Point.y
      ];
      if (startPoint2Point.sub(cl).length <= strokeWidth / 2 && startPoint2PointLengthSqu <= lineCornerLengthSqu && endPoint2PointLengthSqu <= lineCornerLengthSqu) {
        if (rectBorderRadius > 0) {
          const [lineMiddle, lineDirect2] = [startPoint.add(endPoint).scale(0.5), endPoint.sub(startPoint)];
          const [norLineDirect2, point2LineMiddle] = [lineDirect2.normalize(), point.sub(lineMiddle)];
          const [x, y] = [Math.abs(norLineDirect2.dot(point2LineMiddle)), Math.abs(point2LineMiddle.cross(norLineDirect2))];
          const [xEdge, yEdge] = [lineDirect2.length * 0.5 - rectBorderRadius, strokeWidth * 0.5 - rectBorderRadius];
          if (x > xEdge && y >= yEdge) {
            const [deltaX, deltaY] = [x - xEdge, y - yEdge];
            const dis = new Vector2(deltaX, deltaY).length;
            if (dis >= rectBorderRadius) {
              return false;
            } else {
              return true;
            }
          } else {
            return true;
          }
        }
        return true;
      }
      const r = strokeWidth / 2;
      if (isRound) {
        if (startPoint2PointLengthSqu <= r * r) {
          return true;
        }
        if (endPoint2PointLengthSqu <= r * r) {
          return true;
        }
      }
      return false;
    }
    /**
     * 判断线段 line12 与线段 line34 是否相交, 并返回交点
     *
     * 求线段 AB 与线段 CD 的交点
     * 		解参数方程
     * 			A + t(B − A) = C + s(D − C)
     * 		则
     * 			t = ((C − A) * (D − C)​) / ((B - A) * (D - C))
     * 		则交点 P
     * 			P = A + t * (B - A)
     */
    static isSegmentIntered(line1, line2) {
      const eps = DoubleKit.eps1;
      const orient2 = (a, b, c) => {
        return b.sub(a).cross(c.sub(a));
      };
      const onSegment = (a, b, p) => {
        const bl1 = Math.min(a.x, b.x) - p.x <= eps;
        const bl2 = Math.max(a.x, b.x) - p.x >= -eps;
        const bl3 = Math.min(a.y, b.y) - p.y <= eps;
        const bl4 = Math.max(a.y, b.y) - p.y >= -eps;
        return bl1 && bl2 && bl3 && bl4;
      };
      const [d1, d2, d3, d4] = [
        orient2(line1.startPoint, line1.endPoint, line2.startPoint),
        orient2(line1.startPoint, line1.endPoint, line2.endPoint),
        orient2(line2.startPoint, line2.endPoint, line1.startPoint),
        orient2(line2.startPoint, line2.endPoint, line1.endPoint)
      ];
      if ((d1 > eps && d2 < -eps || d1 < -eps && d2 > eps) && (d3 > eps && d4 < -eps || d3 < -eps && d4 > eps)) {
        const R = line1.endPoint.sub(line1.startPoint);
        const S = line2.endPoint.sub(line2.startPoint);
        const t = line2.startPoint.sub(line1.startPoint).cross(S) / R.cross(S);
        return new Vector2(line1.startPoint.x + t * R.x, line1.startPoint.y + t * R.y);
      }
      if (Math.abs(d1) <= eps && onSegment(line1.startPoint, line1.endPoint, line2.startPoint)) {
        return line2.startPoint.copy();
      }
      if (Math.abs(d2) <= eps && onSegment(line1.startPoint, line1.endPoint, line2.endPoint)) {
        return line2.endPoint.copy();
      }
      if (Math.abs(d3) <= eps && onSegment(line2.startPoint, line2.endPoint, line1.startPoint)) {
        return line1.startPoint.copy();
      }
      if (Math.abs(d4) <= eps && onSegment(line2.startPoint, line2.endPoint, line1.endPoint)) {
        return line1.endPoint.copy();
      }
      return null;
    }
    /**
     * 计算点 point 到线段 line 的最近点坐标
     */
    static getClosedPointOnLineWithPoint(line, point) {
      const c1 = line.endPoint.sub(line.startPoint).cross(point.sub(line.endPoint));
      if (c1 === 0) {
        const [dp1, dp2] = [
          line.endPoint.sub(line.startPoint).dot(point.sub(line.endPoint)),
          line.startPoint.sub(line.endPoint).dot(point.sub(line.startPoint))
        ];
        if (dp1 < 0 && dp2 < 0) {
          return point.copy();
        }
        if (dp1 >= 0) {
          return line.endPoint.copy();
        }
        return line.startPoint.copy();
      }
      const Q = { x: NaN, y: NaN };
      const startCut = { x: line.startPoint.x, y: line.startPoint.y };
      const endCut = { x: line.endPoint.x, y: line.endPoint.y };
      let [startDS, endDS, midDS] = [
        Vector2.distanceSquare(line.startPoint.x, line.startPoint.y, point.x, point.y),
        Vector2.distanceSquare(line.endPoint.x, line.endPoint.y, point.x, point.y),
        Number.POSITIVE_INFINITY
      ];
      let times = 0;
      while (midDS > 0) {
        times++;
        Q.x = startCut.x + (endCut.x - startCut.x) * 0.5;
        Q.y = startCut.y + (endCut.y - startCut.y) * 0.5;
        if (startDS === endDS || startCut.x === Q.x && startCut.y === Q.y || endCut.x === Q.x && endCut.y === Q.y) {
          break;
        }
        midDS = Vector2.distanceSquare(Q.x, Q.y, point.x, point.y);
        const dp = new Vector2(Q.x, Q.y).sub(new Vector2(startCut.x, startCut.y)).dot(new Vector2(point.x, point.y).sub(new Vector2(Q.x, Q.y)));
        if (dp === 0) {
          break;
        }
        if (dp < 0) {
          endCut.x = Q.x;
          endCut.y = Q.y;
          endDS = midDS;
        } else {
          startCut.x = Q.x;
          startCut.y = Q.y;
          startDS = midDS;
        }
      }
      return new Vector2(Q.x, Q.y);
    }
    /**
     * 计算点 point 到线段 line 的最近点坐标, 并计算该最近坐标点与点 point 的距离
     */
    static getClosedPointOnSegmentWithPoint(line, point) {
      let t = void 0;
      const [dx, dy] = [line.endPoint.x - line.startPoint.x, line.endPoint.y - line.startPoint.y];
      const [dxPA, dyPA] = [point.x - line.startPoint.x, point.y - line.startPoint.y];
      if (dx === 0 && dy === 0) {
        return {
          d: Math.sqrt(dxPA * dxPA + dyPA * dyPA),
          point: new Vector2(line.startPoint.x, line.startPoint.y)
        };
      }
      t = (dxPA * dx + dyPA * dy) / (dx * dx + dy * dy);
      if (t < 0) {
        return {
          d: Math.sqrt(dxPA * dxPA + dyPA * dyPA),
          point: new Vector2(line.startPoint.x, line.startPoint.y)
        };
      }
      if (t > 1) {
        const [dxPB, dyPB] = [point.x - line.endPoint.x, point.y - line.endPoint.y];
        return {
          d: Math.sqrt(dxPB * dxPB + dyPB * dyPB),
          point: new Vector2(line.endPoint.x, line.endPoint.y)
        };
      }
      const [qx, qy] = [line.startPoint.x + t * dx, line.startPoint.y + t * dy];
      const [dxPQ, dyPQ] = [point.x - qx, point.y - qy];
      return {
        d: Math.sqrt(dxPQ * dxPQ + dyPQ * dyPQ),
        point: new Vector2(qx, qy)
      };
    }
    /**
     * 求线段 line 上距离点 point 距离值为 distance 的点坐标
     *
     * 线段 L 参数方程:
     * 		P(t) = start + t * (end - start)
     * 			0 <= t <= 1
     * 也即:
     * 		L(t) = { startX + t * (endX - startX), startY + t * (endY - startY) }
     * 			0 <= t <= 1
     *
     * 圆方程:
     * 		(x - Ox) * (x - Ox) + (y - Oy) * (y - Oy) = r * r
     *
     * 将线段参数方程代入圆方程后得到一元二次方程:
     * 		At² + Bt + C = 0
     * 		其中:
     * 			A = (endX - startX) * (endX - startX) + (endY - startY) * (endY - startY)
     * 			B = 2 * ((endX - startX) * (startX - Ox) + (endY - startY) * (startY - Oy))
     * 			C = (startX - Ox) * (startX - Ox) + (startY - Oy) * (startY - Oy) - r * r
     *
     * 判别式:
     * 		Δ = B * B - 4 * A * C
     */
    static getPointsOnLineWithDistance(d, line, point, epsilon = DoubleKit.eps1) {
      const result = [];
      if (!Number.isFinite(d) || d < 0) {
        return result;
      }
      const [startX, startY, endX, endY] = [
        line.startPoint.x,
        line.startPoint.y,
        line.endPoint.x,
        line.endPoint.y
      ];
      const [dx, dy] = [endX - startX, endY - startY];
      const appendPoint = (t) => {
        if (t < -epsilon || t > 1 + epsilon) {
          return;
        }
        const clamped = Math.min(1, Math.max(0, t));
        const [x, y] = [startX + dx * clamped, startY + dy * clamped];
        for (const p of result) {
          if (Math.abs(p.x - x) <= epsilon && Math.abs(p.y - y) <= epsilon) {
            return;
          }
        }
        result.push(new Vector2(x, y));
      };
      const A = dx * dx + dy * dy;
      if (A <= epsilon) {
        const dist2 = (startX - point.x) * (startX - point.x) + (startY - point.y) * (startY - point.y);
        if (Math.abs(dist2 - d * d) <= epsilon) {
          result.push(new Vector2(startX, startY));
        }
        return result;
      }
      const fx = startX - point.x;
      const fy = startY - point.y;
      const B = 2 * (dx * fx + dy * fy);
      const C = fx * fx + fy * fy - d * d;
      const discriminant = B * B - 4 * A * C;
      if (discriminant < -epsilon) {
        return result;
      }
      if (Math.abs(discriminant) <= epsilon) {
        const t = -B / (2 * A);
        if (t >= -epsilon && t <= 1 + epsilon) {
          const clamped = Math.min(1, Math.max(0, t));
          result.push(new Vector2(startX + dx * clamped, startY + dy * clamped));
        }
        return result;
      }
      const sqrtDiscriminant = Math.sqrt(discriminant);
      appendPoint((-B - sqrtDiscriminant) / (2 * A));
      appendPoint((-B + sqrtDiscriminant) / (2 * A));
      return result;
    }
    /**
     * 获取线段 lineA 与线段 lineB 的重叠区域(返回 BBox2)
     * 		计算 lineA 所构成的 BBox2 与 lineB 所构成的 BBox2 的重叠区域, 生成新的 BBox2
     */
    static getIntersectionByLines(lineA, lineB) {
      const inters = lineA.bbox2.getIntersection(lineB.bbox2);
      if (inters === null) {
        return null;
      }
      const c1 = lineB.endPoint.sub(lineB.startPoint).cross(lineA.startPoint.sub(lineB.endPoint));
      const c2 = lineB.endPoint.sub(lineB.startPoint).cross(lineA.endPoint.sub(lineB.endPoint));
      if (Math.abs(c1) < 1e-8 || Math.abs(c2) < 1e-8 || c1 * c2 < 0) {
        return inters;
      }
      return null;
    }
    /**
     * 计算向量的垂线向量(单位化)
     */
    static calculatePerpendicular(vector2) {
      const [v1, v2] = [new Vector2(-vector2.y, vector2.x), new Vector2(vector2.y, -vector2.x)];
      const length = Math.sqrt(vector2.x * vector2.x + vector2.y * vector2.y);
      return {
        v1: new Vector2(v1.x / length, v1.y / length),
        v2: new Vector2(v2.x / length, v2.y / length)
      };
    }
    /**
     * 已知一段位移向量 moveDiffVector2, 求 moveDiffVector2 位移向量在 lineVector2 向量垂线方向上的投影向量
     */
    static calculateVectorProjection(lineVector2, moveDiffVector2) {
      const perpendicular = _D2LineToolkit.calculatePerpendicular(lineVector2);
      const B = perpendicular.v1;
      const A = moveDiffVector2;
      const C = new Vector2(
        (A.x * B.x + A.y * B.y) * B.x / (B.x * B.x + B.y * B.y),
        (A.x * B.x + A.y * B.y) * B.y / (B.x * B.x + B.y * B.y)
      );
      return C;
    }
    /**
     * 获取从 startPoint 到 endPoint 的线宽为 width 的线段 L 的外轮廓线集合
     * 		ratio 为线段 L 的端点圆角直径与线段 L 的 min(width, height) 的比值
     */
    static getCornerRectOutline(startPoint, endPoint, width, ratio, sweep = 0 /* CW */) {
      const direct = endPoint.sub(startPoint).normalize();
      const vertical = new Vector2(-direct.y, direct.x);
      const length = startPoint.distance(endPoint);
      const radius = Math.min(length, width) / 2 * ratio;
      const diameter = radius * 2;
      const deltaY = (width - diameter) / 2;
      const v = vertical.mul(deltaY);
      const [radiusDir, radiusVertical] = [direct.mul(radius), vertical.mul(radius)];
      const [startTop, startBottom] = [startPoint.add(v), startPoint.sub(v)];
      const [endTop, endBottom] = [endPoint.add(v), endPoint.sub(v)];
      const [startTopCenter, startBottomCenter] = [startTop.add(radiusDir), startBottom.add(radiusDir)];
      const [endTopCenter, endBottomCenter] = [endTop.sub(radiusDir), endBottom.sub(radiusDir)];
      const [topLeft, topRight] = [startTopCenter.sub(radiusVertical), endTopCenter.add(radiusVertical)];
      const [bottomLeft, bottomRight] = [startBottomCenter.sub(radiusVertical), endBottomCenter.sub(radiusVertical)];
      const pts = [];
      if (sweep === 1 /* CCW */) {
        const [line12, line22, line32, line42] = [
          new Line(startTop, startBottom),
          new Line(bottomLeft, bottomRight),
          new Line(endBottom, endTop),
          new Line(topRight, topLeft)
        ];
        if (radius > 0) {
          const [arc1, arc2, arc3, arc4] = [
            Arc.build1(startBottom, bottomLeft, radius, radius, false, 1 /* CCW */),
            Arc.build1(bottomRight, endBottom, radius, radius, false, 1 /* CCW */),
            Arc.build1(endTop, topRight, radius, radius, false, 1 /* CCW */),
            Arc.build1(topLeft, startTop, radius, radius, false, 1 /* CCW */)
          ];
          const list = [line12, arc1, line22, arc2, line32, arc3, line42, arc4];
          for (let pt of list) {
            if (pt && D2PrimitiveToolkit.getPrimitiveItemLength(pt) > 0) {
              pts.push(pt);
            }
          }
        } else {
          const list = [line12, line22, line32, line42];
          for (let pt of list) {
            if (pt && D2PrimitiveToolkit.getPrimitiveItemLength(pt) > 0) {
              pts.push(pt);
            }
          }
        }
        return Polyline.build2(pts).asClose();
      }
      const [line1, line2, line3, line4] = [
        new Line(startBottom, startTop),
        new Line(topLeft, topRight),
        new Line(endTop, endBottom),
        new Line(bottomRight, bottomLeft)
      ];
      if (radius > 0) {
        const [arc1, arc2, arc3, arc4] = [
          Arc.build1(startTop, topLeft, radius, radius, false, 0 /* CW */),
          Arc.build1(topRight, endTop, radius, radius, false, 0 /* CW */),
          Arc.build1(endBottom, bottomRight, radius, radius, false, 0 /* CW */),
          Arc.build1(bottomLeft, startBottom, radius, radius, false, 0 /* CW */)
        ];
        const list = [line1, arc1, line2, arc2, line3, arc3, line4, arc4];
        for (let pt of list) {
          if (pt && D2PrimitiveToolkit.getPrimitiveItemLength(pt) > 0) {
            pts.push(pt);
          }
        }
      } else {
        const list = [line1, line2, line3, line4];
        for (let pt of list) {
          if (pt && D2PrimitiveToolkit.getPrimitiveItemLength(pt) > 0) {
            pts.push(pt);
          }
        }
      }
      return Polyline.build2(pts).asClose();
    }
  };

  // src/objects/models/primitive2d/D2LineModel.ts
  function createBuildD2LineModelOptionalParam(optional = {}) {
    return __spreadValues({
      strokeWidth: 1,
      strokeColor: new Color(0, 0, 0, 1),
      alpha: 1,
      isSolid: true,
      lineCap: "ROUND" /* ROUND */,
      rectBorderRadius: 0,
      isFixedStrokeWidth: false,
      isEnableSelect: true
    }, optional);
  }
  function buildD2LineModel(layerItemId, startPoint, endPoint, optional = {}) {
    const locSetting = createBuildD2LineModelOptionalParam(optional);
    const elementItemId = Constant.globalIdenManager.getElementIden();
    const elementModelItem = new D2LineModel(
      elementItemId,
      layerItemId,
      startPoint,
      endPoint,
      locSetting.strokeWidth,
      locSetting.strokeColor,
      locSetting.alpha,
      locSetting.isSolid,
      locSetting.lineCap,
      locSetting.rectBorderRadius,
      locSetting.isFixedStrokeWidth,
      locSetting.isEnableSelect
    );
    return elementModelItem;
  }
  var D2LineModel = class extends D2ElementModelItemBase {
    constructor(elementItemId, layerItemId, startPoint, endPoint, strokeWidth = 1, strokeColor = new Color(0, 0, 0, 1), alpha = 1, isSolid = true, lineCap = "ROUND" /* ROUND */, rectBorderRadius = 0, isFixedStrokeWidth = false, isEnableSelect = true) {
      super(elementItemId, layerItemId);
      this._startPoint = startPoint;
      this._endPoint = endPoint;
      this._strokeWidth = strokeWidth;
      this._strokeColor = strokeColor;
      this._lineCap = lineCap;
      this._isSolid = isSolid;
      const { segSize, gapSize } = D2DashedSegUtils.updateDashedSegProfile(this._lineCap, this._strokeWidth);
      this._segSize = segSize;
      this._gapSize = gapSize;
      this._rectBorderRadius = rectBorderRadius;
      this._fixedStrokeWidth = isFixedStrokeWidth;
      this.modelType = "D2Line" /* D2Line */;
      this.alpha = alpha;
      this.isEnableSelect = isEnableSelect;
      this.bbox2 = BBox2Creator.createD2LineBbox2(this._startPoint, this._endPoint, this._strokeWidth);
    }
    get startPoint() {
      return this._startPoint;
    }
    set startPoint(value) {
      this._startPoint = value;
      this.bbox2 = BBox2Creator.createD2LineBbox2(this._startPoint, this._endPoint, this._strokeWidth);
    }
    get endPoint() {
      return this._endPoint;
    }
    set endPoint(value) {
      this._endPoint = value;
      this.bbox2 = BBox2Creator.createD2LineBbox2(this._startPoint, this._endPoint, this._strokeWidth);
    }
    get strokeWidth() {
      return this._strokeWidth;
    }
    set strokeWidth(value) {
      this._strokeWidth = value;
      this.bbox2 = BBox2Creator.createD2LineBbox2(this._startPoint, this._endPoint, this._strokeWidth);
    }
    get strokeColor() {
      return this._strokeColor;
    }
    set strokeColor(value) {
      this._strokeColor = value;
    }
    get lineCap() {
      return this._lineCap;
    }
    set lineCap(value) {
      this._lineCap = value;
      const { segSize, gapSize } = D2DashedSegUtils.updateDashedSegProfile(this._lineCap, this._strokeWidth);
      this._segSize = segSize;
      this._gapSize = gapSize;
    }
    get isSolid() {
      return this._isSolid;
    }
    set isSolid(value) {
      this._isSolid = value;
    }
    get segSize() {
      return this._segSize;
    }
    set segSize(value) {
      this._segSize = value;
    }
    get gapSize() {
      return this._gapSize;
    }
    set gapSize(value) {
      this._gapSize = value;
    }
    get rectBorderRadius() {
      return this._rectBorderRadius;
    }
    set rectBorderRadius(value) {
      if (value >= this.strokeWidth * 0.5) {
        value = this.strokeWidth * 0.5;
      }
      if (value <= 0) {
        value = 0;
      }
      this._rectBorderRadius = value;
    }
    get isFixedStrokeWidth() {
      return this._fixedStrokeWidth;
    }
    set isFixedStrokeWidth(value) {
      this._fixedStrokeWidth = value;
    }
    get length() {
      return this.startPoint.distance(this.endPoint);
    }
    set length(value) {
      const direct = this.endPoint.sub(this.startPoint).normalize();
      const endPoint = this.startPoint.add(direct.mul(value));
      this.endPoint = endPoint;
    }
    get element() {
      return new Line(this.startPoint, this.endPoint);
    }
    getBBox2() {
      return this.bbox2;
    }
    updatePosition(value) {
      super.position = value;
      this.bbox2 = BBox2Creator.createD2LineBbox2(this._startPoint, this._endPoint, this._strokeWidth);
    }
    updateRotation(value) {
      super.rotation = value;
      this.bbox2 = BBox2Creator.createD2LineBbox2(this._startPoint, this._endPoint, this._strokeWidth);
    }
    updateIsFlipX(value) {
      super.isFlipX = value;
      this.bbox2 = BBox2Creator.createD2LineBbox2(this._startPoint, this._endPoint, this._strokeWidth);
    }
    updateIsFlipY(value) {
      super.isFlipY = value;
      this.bbox2 = BBox2Creator.createD2LineBbox2(this._startPoint, this._endPoint, this._strokeWidth);
    }
    updateBBox2() {
      this.bbox2 = BBox2Creator.createD2LineBbox2(this.startPoint, this.endPoint, this.strokeWidth);
      return this.bbox2;
    }
    isInGraphical(x, y) {
      if (this.isEnableSelect === false) {
        return false;
      }
      return D2LineToolkit.isPointOnStrokeLine(
        new Vector2(x, y),
        this.startPoint,
        this.endPoint,
        this.strokeWidth,
        this.lineCap === "ROUND" /* ROUND */,
        this.rectBorderRadius
      );
    }
  };

  // src/objects/models/manager/primitive2d/D2LineModelManager.ts
  var D2LineModelManager = class _D2LineModelManager extends BaseManager {
    static getInstance() {
      if (_D2LineModelManager.instance === void 0) {
        _D2LineModelManager.instance = new _D2LineModelManager();
      }
      return _D2LineModelManager.instance;
    }
    constructor() {
      super();
    }
    createModelItem(elementItemId, layerItemId, startPoint, endPoint, optional = {}) {
      const locSetting = createBuildD2LineModelOptionalParam(optional);
      const elementModelItem = new D2LineModel(
        elementItemId,
        layerItemId,
        startPoint,
        endPoint,
        locSetting.strokeWidth,
        locSetting.strokeColor,
        locSetting.alpha,
        locSetting.isSolid,
        locSetting.lineCap,
        locSetting.rectBorderRadius,
        locSetting.isFixedStrokeWidth,
        locSetting.isEnableSelect
      );
      this.items.set(elementModelItem.elementItemId, elementModelItem);
      return elementModelItem;
    }
    deleteModelItem(elementItemId) {
      const elementModelItem = this.items.get(elementItemId);
      if (!elementModelItem) {
        return;
      }
      this.items.delete(elementModelItem.elementItemId);
    }
    quit() {
      super.quit();
      _D2LineModelManager.instance = void 0;
    }
  };

  // src/utils/RtreeItem.ts
  var RtreeItem = class {
    static getSimpleRectFromBbox2(bbox2) {
      return {
        x: bbox2.minX,
        y: bbox2.minY,
        w: Math.abs(bbox2.maxX - bbox2.minX),
        h: Math.abs(bbox2.maxY - bbox2.minY)
      };
    }
    static getSimpleRectFromModelBbox2(item) {
      const bbox2 = item.model.bbox2;
      return {
        x: bbox2.minX,
        y: bbox2.minY,
        w: Math.abs(bbox2.maxX - bbox2.minX),
        h: Math.abs(bbox2.maxY - bbox2.minY)
      };
    }
    constructor(target) {
      this._target = target;
      this._bbox2 = target.model.bbox2;
    }
    get target() {
      return this._target;
    }
    get targetId() {
      return this._target.elementItemId;
    }
    getBBox2() {
      return this._bbox2;
    }
    updateBBox2(bbox2) {
      this._bbox2 = new BBox2(bbox2.minX, bbox2.minY, bbox2.maxX, bbox2.maxY);
    }
  };

  // src/engine/common/Status.ts
  var Status = class {
    static isStatusMatch(nowStatus, bitIndex) {
      return (nowStatus & bitIndex) === bitIndex;
    }
    static setStatusMatch(bitIndex, nowStatus, value) {
      const _v = !!value;
      let statusResult = nowStatus;
      if (_v) {
        statusResult = statusResult | bitIndex;
        return statusResult;
      }
      statusResult = statusResult & ~bitIndex;
      return statusResult;
    }
  };

  // src/engine/common/Context.ts
  var Context = class {
    constructor(status) {
      this._status = status;
    }
    get status() {
      return this._status;
    }
    set status(status) {
      this._status = status;
    }
    isStatusMatch(bitIndex) {
      return Status.isStatusMatch(this._status, bitIndex);
    }
    setStatusMatch(bitIndex, value) {
      const statusResult = Status.setStatusMatch(bitIndex, this._status, value);
      this._status = statusResult;
      return statusResult;
    }
  };

  // src/objects/shapes/primitive2d/elementBase/D2ElementShapeBase.ts
  var D2ElementShapeBase = class extends Context {
    constructor() {
      super(PRIMITIVE_INIT_STATUS);
    }
  };

  // src/objects/shapes/primitive2d/elementBase/D2ElementShapeItemBase.ts
  var D2ElementShapeItemBase = class extends D2ElementShapeBase {
    constructor() {
      super();
      this._model = null;
      this._isSelectable = true;
    }
    get elementItemId() {
      return this._model.elementItemId;
    }
    get model() {
      return this._model;
    }
    set model(value) {
      this._model = value;
    }
    get isSelectable() {
      return this._isSelectable;
    }
    set isSelectable(value) {
      this._isSelectable = value;
    }
    get alpha() {
      return this._model.alpha;
    }
    set alpha(value) {
      this._model.alpha = value;
    }
    get visible() {
      return this.isStatusMatch(1 /* VISIBLE */);
    }
    set visible(value) {
      this.setStatusMatch(1 /* VISIBLE */, value);
      this.refreshRender();
    }
    get hightlight() {
      return this.isStatusMatch(8 /* HIGHTLIGHT */);
    }
    set hightlight(value) {
      this.setStatusMatch(8 /* HIGHTLIGHT */, value);
      this.refreshRender();
    }
    get locked() {
      return this.isStatusMatch(2 /* LOCKED */);
    }
    set locked(value) {
      this.setStatusMatch(2 /* LOCKED */, value);
      this.refreshRender();
    }
    get killed() {
      return this.isStatusMatch(4 /* KILLED */);
    }
    set killed(value) {
      this.setStatusMatch(4 /* KILLED */, value);
      this.refreshRender();
    }
    setSelect() {
      this.visible = true;
      this.hightlight = true;
    }
    setUnSelect() {
      this.visible = true;
      this.hightlight = false;
    }
    setVisible() {
      this.visible = true;
      this.hightlight = true;
    }
    setUnVisible() {
      this.visible = false;
      this.hightlight = false;
    }
    setHightlight() {
      this.visible = true;
      this.hightlight = true;
    }
    setUnHightlight() {
      this.visible = true;
      this.hightlight = false;
    }
    setDelete() {
      this.killed = true;
    }
    refreshRender() {
      Constant.modifyController.attachElement(this);
    }
  };

  // src/objects/shapes/primitive2d/D2LineShape.ts
  function buildD2LineShape(layerItemId, startPoint, endPoint, optional = {}) {
    const elementModelItem = buildD2LineModel(layerItemId, startPoint, endPoint, optional);
    const elementShapeItem = new D2LineShape(elementModelItem);
    return elementShapeItem;
  }
  var D2LineShape = class extends D2ElementShapeItemBase {
    constructor(model) {
      super();
      this.model = model;
      this.refreshRender();
    }
    get elementItemName() {
      return this.model.elementItemName;
    }
    set elementItemName(value) {
      ;
      this.model.elementItemName = value;
      this.refreshRender();
    }
    get startPoint() {
      return this.model.startPoint;
    }
    set startPoint(value) {
      ;
      this.model.startPoint = value;
      this.refreshRender();
    }
    get endPoint() {
      return this.model.endPoint;
    }
    set endPoint(value) {
      ;
      this.model.endPoint = value;
      this.refreshRender();
    }
    get strokeWidth() {
      return this.model.strokeWidth;
    }
    set strokeWidth(value) {
      ;
      this.model.strokeWidth = value;
      this.refreshRender();
    }
    get length() {
      return this.model.length;
    }
    set length(value) {
      ;
      this.model.length = value;
      this.refreshRender();
    }
    get strokeColor() {
      return this.model.strokeColor;
    }
    set strokeColor(value) {
      ;
      this.model.strokeColor = value;
      this.refreshRender();
    }
    get lineCap() {
      return this.model.lineCap;
    }
    set lineCap(value) {
      ;
      this.model.lineCap = value;
      this.refreshRender();
    }
    get isSolid() {
      return this.model.isSolid;
    }
    set isSolid(value) {
      ;
      this.model.isSolid = value;
      this.refreshRender();
    }
    get segSize() {
      return this.model.segSize;
    }
    set segSize(value) {
      ;
      this.model.segSize = value;
      this.refreshRender();
    }
    get gapSize() {
      return this.model.gapSize;
    }
    set gapSize(value) {
      ;
      this.model.gapSize = value;
      this.refreshRender();
    }
    get isFixedStrokeWidth() {
      return this.model.isFixedStrokeWidth;
    }
    set isFixedStrokeWidth(value) {
      ;
      this.model.isFixedStrokeWidth = value;
      this.refreshRender();
    }
    isSelect(x, y) {
      if (!this.isSelectable) {
        return false;
      }
      return this.model.isInGraphical(x, y);
    }
    transform(value) {
      const startPoint = this.startPoint.multiplyMatrix4(value);
      const endPoint = this.endPoint.multiplyMatrix4(value);
      this.startPoint = startPoint;
      this.endPoint = endPoint;
      this.refreshRender();
    }
    getType() {
      return "D2Line" /* D2Line */;
    }
    getStatus() {
      return this.status;
    }
    toJSON() {
      const elementModelItem = this.model;
      return {
        type: this.getType(),
        modelType: this.model.modelType,
        status: this.status,
        layerItemId: elementModelItem.layerItemId,
        elementItemId: elementModelItem.elementItemId,
        elementItemName: elementModelItem.elementItemName,
        alpha: elementModelItem.alpha,
        rotation: elementModelItem.rotation,
        isFlipX: elementModelItem.isFlipX,
        isFlipY: elementModelItem.isFlipY,
        strokeColorData: elementModelItem.strokeColor ? elementModelItem.strokeColor.toRGBAJSON() : null,
        strokeWidth: elementModelItem.strokeWidth,
        bbox2: elementModelItem.bbox2.toJSON(),
        /* ... */
        startPoint: elementModelItem.startPoint.toJSON(),
        endPoint: elementModelItem.endPoint.toJSON(),
        lineCap: elementModelItem.lineCap,
        isSolid: elementModelItem.isSolid,
        segSize: elementModelItem.segSize,
        gapSize: elementModelItem.gapSize,
        rectBorderRadius: elementModelItem.rectBorderRadius,
        isFixedStrokeWidth: elementModelItem.isFixedStrokeWidth
      };
    }
  };

  // src/objects/shapes/manager/primitive2d/D2LineShapeManager.ts
  var D2LineShapeManager = class _D2LineShapeManager extends BaseManager {
    static getInstance() {
      if (_D2LineShapeManager.instance === void 0) {
        _D2LineShapeManager.instance = new _D2LineShapeManager();
      }
      return _D2LineShapeManager.instance;
    }
    constructor() {
      super();
      this._rteeItems = /* @__PURE__ */ new Map();
    }
    createShapeItem(elementItemId, layerItemId, startPoint, endPoint, optional = {}) {
      const elementModelItem = D2LineModelManager.getInstance().createModelItem(
        elementItemId,
        layerItemId,
        startPoint,
        endPoint,
        optional
      );
      const elementShapeItem = new D2LineShape(elementModelItem);
      const op = this.addCache(elementShapeItem);
      return elementShapeItem;
    }
    deleteShapeItem(elementItemId) {
      const elementShapeItem = this.items.get(elementItemId);
      if (!elementShapeItem) {
        return;
      }
      const op = this.deleteCache(elementItemId);
      if (op === false) {
        return;
      }
      D2LineModelManager.getInstance().deleteModelItem(elementItemId);
      elementShapeItem.setDelete();
    }
    quit() {
      super.quit();
      _D2LineShapeManager.instance = void 0;
    }
    addCache(elementShapeItem) {
      this.items.set(elementShapeItem.model.elementItemId, elementShapeItem);
      const rtreeItem = new RtreeItem(elementShapeItem);
      this._rteeItems.set(elementShapeItem.model.elementItemId, rtreeItem);
      Constant.rtree.insertItemData(RtreeItem.getSimpleRectFromModelBbox2(elementShapeItem), rtreeItem);
      return true;
    }
    deleteCache(elementItemId) {
      const targetShapeItem = this.items.get(elementItemId);
      if (!targetShapeItem) {
        return false;
      }
      const rtreeItem = this._rteeItems.get(elementItemId);
      const deleteResults = Constant.rtree.remove(RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
      if (!deleteResults.length) {
        return false;
      }
      this.items.delete(elementItemId);
      this._rteeItems.delete(elementItemId);
      return true;
    }
  };

  // src/objects/models/primitive2d/D2CircleModel.ts
  function createBuildD2CircleModelOptionalParam(optional = {}) {
    return __spreadValues({
      radius: 1,
      strokeWidth: 1,
      strokeColor: new Color(0, 0, 0, 1),
      isFill: false,
      fillColor: Color.createByAlpha(0),
      alpha: 1,
      isSolid: true,
      lineCap: "ROUND" /* ROUND */,
      isFixedStrokeWidth: false,
      isEnableSelect: true
    }, optional);
  }
  function buildD2CircleModel(layerItemId, centerPoint, optional = {}) {
    const locSetting = createBuildD2CircleModelOptionalParam(optional);
    const elementItemId = Constant.globalIdenManager.getElementIden();
    const elementModelItem = new D2CircleModel(
      elementItemId,
      layerItemId,
      centerPoint,
      locSetting.radius,
      locSetting.strokeWidth,
      locSetting.strokeColor,
      locSetting.isFill,
      locSetting.fillColor,
      locSetting.alpha,
      locSetting.isSolid,
      locSetting.lineCap,
      locSetting.isFixedStrokeWidth,
      locSetting.isEnableSelect
    );
    return elementModelItem;
  }
  var D2CircleModel = class extends D2ElementModelItemBase {
    constructor(elementItemId, layerItemId, centerPoint, radius, strokeWidth, strokeColor = new Color(0, 0, 0, 1), isFill = false, fillColor = new Color(0, 0, 0, 0), alpha = 1, isSolid = true, lineCap = "ROUND" /* ROUND */, isFixedStrokeWidth = false, isEnableSelect = true) {
      super(elementItemId, layerItemId);
      this._centerPoint = centerPoint;
      this._radius = radius;
      this._strokeWidth = strokeWidth;
      this._strokeColor = strokeColor;
      this._fillColor = fillColor;
      this._lineCap = lineCap;
      this._isFill = isFill;
      this._isSolid = isSolid;
      const { segSize, gapSize } = D2DashedSegUtils.updateDashedSegProfile(this._lineCap, this._strokeWidth);
      this._segSize = segSize;
      this._gapSize = gapSize;
      this._fixedStrokeWidth = isFixedStrokeWidth;
      this.modelType = "D2Circle" /* D2Circle */;
      this.alpha = alpha;
      this.isEnableSelect = isEnableSelect;
      this.bbox2 = BBox2Creator.createD2CircleBbox2(this._centerPoint, this._radius, this._strokeWidth);
    }
    get centerPoint() {
      return this._centerPoint;
    }
    set centerPoint(value) {
      this._centerPoint = value;
    }
    get radius() {
      return this._radius;
    }
    set radius(value) {
      this._radius = value;
    }
    get strokeWidth() {
      return this._strokeWidth;
    }
    set strokeWidth(value) {
      this._strokeWidth = value;
    }
    get strokeColor() {
      return this._strokeColor;
    }
    set strokeColor(value) {
      this._strokeColor = value;
    }
    get fillColor() {
      return this._fillColor;
    }
    set fillColor(value) {
      this._fillColor = value;
    }
    get lineCap() {
      return this._lineCap;
    }
    set lineCap(value) {
      this._lineCap = value;
      const { segSize, gapSize } = D2DashedSegUtils.updateDashedSegProfile(this._lineCap, this._strokeWidth);
      this._segSize = segSize;
      this._gapSize = gapSize;
    }
    get isSolid() {
      return this._isSolid;
    }
    set isSolid(value) {
      this._isSolid = value;
    }
    get isFill() {
      return this._isFill;
    }
    set isFill(value) {
      this._isFill = value;
    }
    get segSize() {
      return this._segSize;
    }
    set segSize(value) {
      this._segSize = value;
    }
    get gapSize() {
      return this._gapSize;
    }
    set gapSize(value) {
      this._gapSize = value;
    }
    get isFixedStrokeWidth() {
      return this._fixedStrokeWidth;
    }
    set isFixedStrokeWidth(value) {
      this._fixedStrokeWidth = value;
    }
    get element() {
      return new Line(new Vector2(0, 0), new Vector2(0, 0));
    }
    getBBox2() {
      return this.bbox2;
    }
    updatePosition(value) {
      super.position = value;
      this.bbox2 = BBox2Creator.createD2CircleBbox2(this.centerPoint, this.radius, this.strokeWidth);
    }
    updateRotation(value) {
      super.rotation = value;
      this.bbox2 = BBox2Creator.createD2CircleBbox2(this.centerPoint, this.radius, this.strokeWidth);
    }
    updateIsFlipX(value) {
      super.isFlipX = value;
      this.bbox2 = BBox2Creator.createD2CircleBbox2(this.centerPoint, this.radius, this.strokeWidth);
    }
    updateIsFlipY(value) {
      super.isFlipY = value;
      this.bbox2 = BBox2Creator.createD2CircleBbox2(this.centerPoint, this.radius, this.strokeWidth);
    }
    updateBBox2() {
      this.bbox2 = BBox2Creator.createD2CircleBbox2(this.centerPoint, this.radius, this.strokeWidth);
      return this.bbox2;
    }
    isInGraphical(x, y) {
      if (this.isEnableSelect === false) {
        return false;
      }
      return D2CircleToolkit.isPointOnCircle(new Vector2(x, y), this.radius, this.centerPoint, this.strokeWidth, this.isFill);
    }
  };

  // src/objects/models/manager/primitive2d/D2CircleModelManager.ts
  var D2CircleModelManager = class _D2CircleModelManager extends BaseManager {
    static getInstance() {
      if (_D2CircleModelManager.instance === void 0) {
        _D2CircleModelManager.instance = new _D2CircleModelManager();
      }
      return _D2CircleModelManager.instance;
    }
    constructor() {
      super();
    }
    createModelItem(elementItemId, layerItemId, centerPoint, optional = {}) {
      const locSetting = createBuildD2CircleModelOptionalParam(optional);
      const elementModelItem = new D2CircleModel(
        elementItemId,
        layerItemId,
        centerPoint,
        locSetting.radius,
        locSetting.strokeWidth,
        locSetting.strokeColor,
        locSetting.isFill,
        locSetting.fillColor,
        locSetting.alpha,
        locSetting.isSolid,
        locSetting.lineCap,
        locSetting.isFixedStrokeWidth,
        locSetting.isEnableSelect
      );
      this.items.set(elementModelItem.elementItemId, elementModelItem);
      return elementModelItem;
    }
    deleteModelItem(elementItemId) {
      const elementModelItem = this.items.get(elementItemId);
      if (!elementModelItem) {
        return;
      }
      this.items.delete(elementModelItem.elementItemId);
    }
    quit() {
      super.quit();
      _D2CircleModelManager.instance = void 0;
    }
  };

  // src/objects/shapes/primitive2d/D2CircleShape.ts
  function buildD2CircleShape(layerItemId, centerPoint, optional = {}) {
    const elementModelItem = buildD2CircleModel(layerItemId, centerPoint, optional);
    const elementShapeItem = new D2CircleShape(elementModelItem);
    return elementShapeItem;
  }
  var D2CircleShape = class extends D2ElementShapeItemBase {
    constructor(model) {
      super();
      this.model = model;
      this.refreshRender();
    }
    get elementItemName() {
      return this.model.elementItemName;
    }
    set elementItemName(value) {
      ;
      this.model.elementItemName = value;
      this.refreshRender();
    }
    get centerPoint() {
      return this.model.centerPoint;
    }
    set centerPoint(value) {
      ;
      this.model.centerPoint = value;
      this.refreshRender();
    }
    get radius() {
      return this.model.radius;
    }
    set radius(value) {
      if (value < 0) {
        value = -value;
      }
      ;
      this.model.radius = value;
      this.refreshRender();
    }
    get strokeWidth() {
      return this.model.strokeWidth;
    }
    set strokeWidth(value) {
      ;
      this.model.strokeWidth = value;
      this.refreshRender();
    }
    get strokeColor() {
      return this.model.strokeColor;
    }
    set strokeColor(value) {
      ;
      this.model.strokeColor = value;
      this.refreshRender();
    }
    get fillColor() {
      return this.model.fillColor;
    }
    set fillColor(value) {
      ;
      this.model.fillColor = value;
      this.refreshRender();
    }
    get lineCap() {
      return this.model.lineCap;
    }
    set lineCap(value) {
      ;
      this.model.lineCap = value;
      this.refreshRender();
    }
    get isSolid() {
      return this.model.isSolid;
    }
    set isSolid(value) {
      ;
      this.model.isSolid = value;
      this.refreshRender();
    }
    get isFill() {
      return this.model.isFill;
    }
    set isFill(value) {
      ;
      this.model.isFill = value;
      this.refreshRender();
    }
    get segSize() {
      return this.model.segSize;
    }
    set segSize(value) {
      ;
      this.model.segSize = value;
      this.refreshRender();
    }
    get gapSize() {
      return this.model.gapSize;
    }
    set gapSize(value) {
      ;
      this.model.gapSize = value;
      this.refreshRender();
    }
    get isFixedStrokeWidth() {
      return this.model.isFixedStrokeWidth;
    }
    set isFixedStrokeWidth(value) {
      ;
      this.model.isFixedStrokeWidth = value;
      this.refreshRender();
    }
    isSelect(x, y) {
      return this.model.isInGraphical(x, y);
    }
    transform(value) {
      this.centerPoint = this.centerPoint.multiplyMatrix4(value);
      this.refreshRender();
    }
    updateRadius(x, y) {
      const point = new Vector2(x, y);
      const centerPoint = this.centerPoint;
      const distOfClickPointAndCenterPoint = point.sub(centerPoint).length;
      this.radius = distOfClickPointAndCenterPoint;
    }
    removeFill() {
      this.fillColor = Color.createByAlpha(0, this.fillColor);
    }
    getType() {
      return "D2Circle" /* D2Circle */;
    }
    getStatus() {
      return this.status;
    }
    toJSON() {
      const elementModelItem = this.model;
      return {
        type: this.getType(),
        modelType: this.model.modelType,
        status: this.status,
        layerItemId: elementModelItem.layerItemId,
        elementItemId: elementModelItem.elementItemId,
        elementItemName: elementModelItem.elementItemName,
        alpha: elementModelItem.alpha,
        rotation: elementModelItem.rotation,
        isFlipX: elementModelItem.isFlipX,
        isFlipY: elementModelItem.isFlipY,
        strokeColorData: elementModelItem.strokeColor ? elementModelItem.strokeColor.toRGBAJSON() : null,
        strokeWidth: elementModelItem.strokeWidth,
        bbox2: elementModelItem.bbox2.toJSON(),
        /* ... */
        centerPoint: elementModelItem.centerPoint.toJSON(),
        radius: elementModelItem.radius,
        fillColorData: elementModelItem.isFill && elementModelItem.fillColor ? elementModelItem.fillColor.toRGBAJSON() : null,
        lineCap: elementModelItem.lineCap,
        isSolid: elementModelItem.isSolid,
        isFill: elementModelItem.isFill,
        segSize: elementModelItem.segSize,
        gapSize: elementModelItem.gapSize,
        isFixedStrokeWidth: elementModelItem.isFixedStrokeWidth
      };
    }
  };

  // src/objects/shapes/manager/primitive2d/D2CircleShapeManager.ts
  var D2CircleShapeManager = class _D2CircleShapeManager extends BaseManager {
    static getInstance() {
      if (_D2CircleShapeManager.instance === void 0) {
        _D2CircleShapeManager.instance = new _D2CircleShapeManager();
      }
      return _D2CircleShapeManager.instance;
    }
    constructor() {
      super();
      this._rteeItems = /* @__PURE__ */ new Map();
    }
    createShapeItem(elementItemId, layerItemId, centerPoint, optional = {}) {
      const elementModelItem = D2CircleModelManager.getInstance().createModelItem(elementItemId, layerItemId, centerPoint, optional);
      const elementShapeItem = new D2CircleShape(elementModelItem);
      const op = this.addCache(elementShapeItem);
      return elementShapeItem;
    }
    deleteShapeItem(elementItemId) {
      const elementShapeItem = this.items.get(elementItemId);
      if (!elementShapeItem) {
        return;
      }
      const op = this.deleteCache(elementItemId);
      if (op === false) {
        return;
      }
      D2CircleModelManager.getInstance().deleteModelItem(elementItemId);
      elementShapeItem.setDelete();
    }
    quit() {
      super.quit();
      _D2CircleShapeManager.instance = void 0;
    }
    addCache(elementShapeItem) {
      this.items.set(elementShapeItem.model.elementItemId, elementShapeItem);
      const rtreeItem = new RtreeItem(elementShapeItem);
      this._rteeItems.set(elementShapeItem.model.elementItemId, rtreeItem);
      Constant.rtree.insertItemData(RtreeItem.getSimpleRectFromModelBbox2(elementShapeItem), rtreeItem);
      return true;
    }
    deleteCache(elementItemId) {
      const targetShapeItem = this.items.get(elementItemId);
      if (!targetShapeItem) {
        return false;
      }
      const rtreeItem = this._rteeItems.get(elementItemId);
      const deleteResults = Constant.rtree.remove(RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
      if (!deleteResults.length) {
        return false;
      }
      this.items.delete(elementItemId);
      this._rteeItems.delete(elementItemId);
      return true;
    }
  };

  // src/engine/config/PlaneProfile.ts
  var PLANE_INIT_STATUS = 1;

  // src/objects/models/DrawLayerBaseItemModel.ts
  var DrawLayerBaseItemModel = class {
    constructor(layerItemId, layerItemName, layerItemType) {
      this._layerItemType = void 0;
      this._layerItemName = layerItemName;
      this._layerItemOpacity = 1;
      this._groupId = void 0;
      this._layerItemId = layerItemId;
      this._layerItemType = layerItemType;
    }
    get layerItemType() {
      return this._layerItemType;
    }
    set layerItemType(value) {
      this._layerItemType = value;
    }
    get layerItemName() {
      return this._layerItemName;
    }
    set layerItemName(value) {
      this._layerItemName = value;
    }
    get layerItemOpacity() {
      return this._layerItemOpacity;
    }
    set layerItemOpacity(value) {
      this._layerItemOpacity = value;
    }
    get groupId() {
      return this._groupId;
    }
    set groupId(value) {
      this._groupId = value;
    }
    get layerItemId() {
      return this._layerItemId;
    }
    set layerItemId(value) {
      this._layerItemId = value;
    }
  };

  // src/objects/models/DrawLayerModel.ts
  var DrawLayerModel = class extends DrawLayerBaseItemModel {
    constructor(layerItemId, layerItemName, layerItemType) {
      super(layerItemId, layerItemName, layerItemType);
    }
  };

  // src/objects/models/manager/DrawLayerModelManager.ts
  var DrawLayerModelManager = class _DrawLayerModelManager extends BaseManager {
    static getInstance() {
      if (_DrawLayerModelManager.instance === void 0) {
        _DrawLayerModelManager.instance = new _DrawLayerModelManager();
      }
      return _DrawLayerModelManager.instance;
    }
    constructor() {
      super();
    }
    createControlItem(layerItemName) {
      const newLayerModelItem = new DrawLayerModel("dw_ml_1000001" /* MaskLayer */, layerItemName, 1 /* ControlPlane */);
      this.items.set(newLayerModelItem.layerItemId, newLayerModelItem);
      return newLayerModelItem;
    }
    createContentItem(layerItemName) {
      const newLayerModelItem = new DrawLayerModel(
        Constant.globalIdenManager.getDrawLayerIden(),
        layerItemName,
        2 /* ContentPlane */
      );
      this.items.set(newLayerModelItem.layerItemId, newLayerModelItem);
      return newLayerModelItem;
    }
    quit() {
      super.quit();
      _DrawLayerModelManager.instance = void 0;
    }
  };

  // src/objects/shapes/DrawLayerShapeBase.ts
  var DrawLayerShapeBase = class extends Context {
    constructor() {
      super(PLANE_INIT_STATUS);
    }
  };

  // src/objects/shapes/DrawLayerShapeItemBase.ts
  var DrawLayerShapeItemBase = class extends DrawLayerShapeBase {
    constructor() {
      super();
      this._model = null;
    }
    get layerItemId() {
      return this._model.layerItemId;
    }
    get model() {
      return this._model;
    }
    set model(value) {
      this._model = value;
    }
    refreshRender() {
      Constant.modifyController.attachDrawLayer(this);
    }
    get visible() {
      return this.isStatusMatch(1 /* VISIBLE */);
    }
    set visible(value) {
      this.setStatusMatch(1 /* VISIBLE */, value);
      this.refreshRender();
    }
    get locked() {
      return this.isStatusMatch(2 /* LOCKED */);
    }
    set locked(value) {
      this.setStatusMatch(2 /* LOCKED */, value);
      this.refreshRender();
    }
    get killed() {
      return this.isStatusMatch(4 /* KILLED */);
    }
    set killed(value) {
      this.setStatusMatch(4 /* KILLED */, value);
      this.refreshRender();
    }
    setSelect() {
    }
    setUnSelect() {
    }
    setDelete() {
      this.killed = true;
    }
  };

  // src/objects/shapes/DrawLayerShape.ts
  var DrawLayerShape = class extends DrawLayerShapeItemBase {
    constructor(model) {
      super();
      this.model = model;
      this.refreshRender();
    }
    get layerItemName() {
      return this.model.layerItemName;
    }
    set layerItemName(value) {
      ;
      this.model.layerItemName = value;
      this.refreshRender();
    }
    get layerItemOpacity() {
      return this.model.layerItemOpacity;
    }
    set layerItemOpacity(value) {
      ;
      this.model.layerItemOpacity = value;
      this.refreshRender();
    }
    get groupId() {
      return this.model.groupId;
    }
    set groupId(value) {
      ;
      this.model.groupId = value;
      this.refreshRender();
    }
    getType() {
      return this.model.layerItemType;
    }
    getStatus() {
      return this.status;
    }
    toJSON() {
      const itemModel = this.model;
      return {
        status: this.status,
        layerItemType: itemModel.layerItemType,
        layerItemId: itemModel.layerItemId,
        layerItemName: itemModel.layerItemName,
        layerItemOpacity: itemModel.layerItemOpacity,
        groupId: itemModel.groupId
      };
    }
  };

  // src/objects/shapes/manager/DrawLayerShapeManager.ts
  var DrawLayerShapeManager = class _DrawLayerShapeManager extends BaseManager {
    static getInstance() {
      if (_DrawLayerShapeManager.instance === void 0) {
        _DrawLayerShapeManager.instance = new _DrawLayerShapeManager();
      }
      return _DrawLayerShapeManager.instance;
    }
    constructor() {
      super();
    }
    get selectedLayersId() {
      return this._selectedLayersId;
    }
    set selectedLayersId(value) {
      this._selectedLayersId = value;
    }
    createControlShapeItem(layerItemName) {
      const layerModelItem = DrawLayerModelManager.getInstance().createControlItem(layerItemName);
      const drawLayerShapeItem = new DrawLayerShape(layerModelItem);
      this.addCache(drawLayerShapeItem);
      Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
      return drawLayerShapeItem;
    }
    createContentShapeItem(layerItemName) {
      const layerModelItem = DrawLayerModelManager.getInstance().createContentItem(layerItemName);
      const drawLayerShapeItem = new DrawLayerShape(layerModelItem);
      this.addCache(drawLayerShapeItem);
      this.selectedLayersId = /* @__PURE__ */ new Set([drawLayerShapeItem.model.layerItemId]);
      Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
      return drawLayerShapeItem;
    }
    deleteContentShapeItem(layerItemId) {
      const drawLayerShapeItem = this.items.get(layerItemId);
      if (!drawLayerShapeItem) {
        return;
      }
      const allElementShapes = Helper.getAllElementShapes();
      for (let i = 0; i < allElementShapes.length; i++) {
        if (allElementShapes[i].model.layerItemId !== layerItemId) {
          continue;
        }
        Helper.deleteElementShapeItem(allElementShapes[i]);
      }
      drawLayerShapeItem.setDelete();
      this.deleteCache(layerItemId);
    }
    getAllContentShapeItems() {
      const allItems = this.items;
      const results = [];
      allItems.forEach((item) => {
        if ([String("dw_ml_1000001" /* MaskLayer */)].indexOf(item.layerItemId) <= -1) {
          results.push(item);
        }
      });
      return results;
    }
    getContentShapeItem(layerItemId) {
      const allItems = this.items;
      let targetItem = null;
      allItems.forEach((item) => {
        if (item.layerItemId === layerItemId) {
          targetItem = item;
        }
      });
      return targetItem;
    }
    getFirstSelectedItem() {
      return this.items.get(Array.from(this.selectedLayersId)[0]);
    }
    setActiveItem(layerItemId) {
      if (!this.items.has(layerItemId)) {
        return;
      }
      this.selectedLayersId = /* @__PURE__ */ new Set([layerItemId]);
      Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
    }
    quit() {
      super.quit();
      _DrawLayerShapeManager.instance = void 0;
    }
    addCache(drawLayerShapeItem) {
      this.items.set(drawLayerShapeItem.model.layerItemId, drawLayerShapeItem);
    }
    deleteCache(drawLayerShapeId) {
      this.items.delete(drawLayerShapeId);
      if (this.selectedLayersId.has(drawLayerShapeId)) {
        this.selectedLayersId.delete(drawLayerShapeId);
      }
    }
  };

  // src/objects/models/primitive2d/D2ArcModel.ts
  function createBuildD2ArcModelOptionalParam(optional = {}) {
    return __spreadValues({
      strokeWidth: 1,
      strokeColor: Color.RED,
      isFill: false,
      fillColor: Color.createByAlpha(0),
      alpha: 1,
      isSolid: true,
      lineCap: "ROUND" /* ROUND */,
      isFixedStrokeWidth: false,
      isEnableSelect: true
    }, optional);
  }
  function buildD2ArcModel(layerItemId, centerPoint, radius, startRadian, endRadian, sweep, optional = {}) {
    const locSetting = createBuildD2ArcModelOptionalParam(optional);
    const elementItemId = Constant.globalIdenManager.getElementIden();
    const elementModelItem = new D2ArcModel(
      elementItemId,
      layerItemId,
      centerPoint,
      radius,
      startRadian,
      endRadian,
      sweep,
      locSetting.strokeWidth,
      locSetting.strokeColor,
      locSetting.isFill,
      locSetting.fillColor,
      locSetting.alpha,
      locSetting.isSolid,
      locSetting.lineCap,
      locSetting.isFixedStrokeWidth,
      locSetting.isEnableSelect
    );
    return elementModelItem;
  }
  var D2ArcModel = class extends D2ElementModelItemBase {
    constructor(elementItemId, layerItemId, centerPoint, radius, startRadian, endRadian, sweep, strokeWidth, strokeColor = new Color(0, 0, 0, 1), isFill = false, fillColor = new Color(0, 0, 0, 0), alpha = 1, isSolid = true, lineCap = "ROUND" /* ROUND */, isFixedStrokeWidth = false, isEnableSelect = true) {
      super(elementItemId, layerItemId);
      this._centerPoint = centerPoint;
      this._radius = radius;
      this._startRadian = startRadian;
      this._endRadian = endRadian;
      this._sweep = sweep;
      this._strokeWidth = strokeWidth;
      this._strokeColor = strokeColor;
      this._fillColor = fillColor;
      this._lineCap = lineCap;
      this._isSolid = isSolid;
      this._isFill = isFill;
      const { segSize, gapSize } = D2DashedSegUtils.updateDashedSegProfile(this._lineCap, this._strokeWidth);
      this._segSize = segSize;
      this._gapSize = gapSize;
      this._fixedStrokeWidth = isFixedStrokeWidth;
      this.modelType = "D2Arc" /* D2Arc */;
      this.alpha = alpha;
      this.isEnableSelect = isEnableSelect;
      this.bbox2 = BBox2Creator.createD2ArcBbox2(this._centerPoint, this._radius, this._strokeWidth);
    }
    get centerPoint() {
      return this._centerPoint;
    }
    set centerPoint(value) {
      this._centerPoint = value;
      this.bbox2 = BBox2Creator.createD2ArcBbox2(this._centerPoint, this._radius, this._strokeWidth);
    }
    get radius() {
      return this._radius;
    }
    set radius(value) {
      this._radius = value;
      this.bbox2 = BBox2Creator.createD2ArcBbox2(this._centerPoint, this._radius, this._strokeWidth);
    }
    get startRadian() {
      return this._startRadian;
    }
    set startRadian(value) {
      this._startRadian = value;
    }
    get endRadian() {
      return this._endRadian;
    }
    set endRadian(value) {
      this._endRadian = value;
    }
    get sweep() {
      return this._sweep;
    }
    set sweep(value) {
      this._sweep = value;
    }
    get strokeWidth() {
      return this._strokeWidth;
    }
    set strokeWidth(value) {
      this._strokeWidth = value;
      this.bbox2 = BBox2Creator.createD2ArcBbox2(this._centerPoint, this._radius, this._strokeWidth);
    }
    get strokeColor() {
      return this._strokeColor;
    }
    set strokeColor(value) {
      this._strokeColor = value;
    }
    get fillColor() {
      return this._fillColor;
    }
    set fillColor(value) {
      this._fillColor = value;
    }
    get startPoint() {
      return this.centerPoint.add(new Vector2(Math.cos(this.startRadian), Math.sin(this.startRadian)).mul(this.radius));
    }
    get endPoint() {
      return this.centerPoint.add(new Vector2(Math.cos(this.endRadian), Math.sin(this.endRadian)).mul(this.radius));
    }
    get lineCap() {
      return this._lineCap;
    }
    set lineCap(value) {
      this._lineCap = value;
      const { segSize, gapSize } = D2DashedSegUtils.updateDashedSegProfile(this._lineCap, this._strokeWidth);
      this._segSize = segSize;
      this._gapSize = gapSize;
    }
    get isSolid() {
      return this._isSolid;
    }
    set isSolid(value) {
      this._isSolid = value;
    }
    get isFill() {
      return this._isFill;
    }
    set isFill(value) {
      this._isFill = value;
    }
    get segSize() {
      return this._segSize;
    }
    set segSize(value) {
      this._segSize = value;
    }
    get gapSize() {
      return this._gapSize;
    }
    set gapSize(value) {
      this._gapSize = value;
    }
    get isFixedStrokeWidth() {
      return this._fixedStrokeWidth;
    }
    set isFixedStrokeWidth(value) {
      this._fixedStrokeWidth = value;
    }
    get element() {
      return new Line(new Vector2(0, 0), new Vector2(0, 0));
    }
    getBBox2() {
      return this.bbox2;
    }
    updatePosition(value) {
      super.position = value;
      this.bbox2 = BBox2Creator.createD2ArcBbox2(this._centerPoint, this._radius, this._strokeWidth);
    }
    updateRotation(value) {
      super.rotation = value;
      this.bbox2 = BBox2Creator.createD2ArcBbox2(this._centerPoint, this._radius, this._strokeWidth);
    }
    updateIsFlipX(value) {
      super.isFlipX = value;
      this.bbox2 = BBox2Creator.createD2ArcBbox2(this._centerPoint, this._radius, this._strokeWidth);
    }
    updateIsFlipY(value) {
      super.isFlipY = value;
      this.bbox2 = BBox2Creator.createD2ArcBbox2(this._centerPoint, this._radius, this._strokeWidth);
    }
    updateBBox2() {
      this.bbox2 = BBox2Creator.createD2ArcBbox2(this.centerPoint, this.radius, this.strokeWidth);
      return this.bbox2;
    }
    isInGraphical(x, y) {
      if (this.isEnableSelect === false) {
        return false;
      }
      return D2ArcToolkit.isPointOnArc4(
        new Vector2(x, y),
        this.startRadian,
        this.endRadian,
        this.sweep,
        this.radius,
        this.centerPoint,
        this.strokeWidth,
        this.isFill
      );
    }
  };

  // src/objects/shapes/primitive2d/D2ArcShape.ts
  var d2ArcIdentify = new D2ArcIdentify();
  function buildD2ArcShape(layerItemId, centerPoint, radius, startRadian, endRadian, sweep, optional = {}) {
    const elementModelItem = buildD2ArcModel(layerItemId, centerPoint, radius, startRadian, endRadian, sweep, optional);
    const elementShapeItem = new D2ArcShape(elementModelItem);
    return elementShapeItem;
  }
  var D2ArcShape = class extends D2ElementShapeItemBase {
    constructor(model) {
      super();
      this.model = model;
      this.refreshRender();
    }
    get elementItemName() {
      return this.model.elementItemName;
    }
    set elementItemName(value) {
      ;
      this.model.elementItemName = value;
      this.refreshRender();
    }
    get centerPoint() {
      return this.model.centerPoint;
    }
    set centerPoint(value) {
      ;
      this.model.centerPoint = value;
      this.refreshRender();
    }
    get radius() {
      return this.model.radius;
    }
    set radius(value) {
      if (value < 0) {
        value = -value;
      }
      ;
      this.model.radius = value;
      this.refreshRender();
    }
    get startRadian() {
      return this.model.startRadian;
    }
    set startRadian(value) {
      ;
      this.model.startRadian = d2ArcIdentify.fixStartRadian(value, this.endRadian, this.radius, this.sweep);
      this.refreshRender();
    }
    get endRadian() {
      return this.model.endRadian;
    }
    set endRadian(value) {
      ;
      this.model.endRadian = d2ArcIdentify.fixStartRadian(value, this.startRadian, this.radius, this.sweep);
      this.refreshRender();
    }
    get sweep() {
      return this.model.sweep;
    }
    set sweep(value) {
      ;
      this.model.sweep = value;
      this.refreshRender();
    }
    get strokeWidth() {
      return this.model.strokeWidth;
    }
    set strokeWidth(value) {
      ;
      this.model.strokeWidth = value;
      this.refreshRender();
    }
    get strokeColor() {
      return this.model.strokeColor;
    }
    set strokeColor(value) {
      ;
      this.model.strokeColor = value;
      this.refreshRender();
    }
    get fillColor() {
      return this.model.fillColor;
    }
    set fillColor(value) {
      ;
      this.model.fillColor = value;
      this.refreshRender();
    }
    get lineCap() {
      return this.model.lineCap;
    }
    set lineCap(value) {
      ;
      this.model.lineCap = value;
      this.refreshRender();
    }
    get isSolid() {
      return this.model.isSolid;
    }
    set isSolid(value) {
      ;
      this.model.isSolid = value;
      this.refreshRender();
    }
    get isFill() {
      return this.model.isFill;
    }
    set isFill(value) {
      ;
      this.model.isFill = value;
      this.refreshRender();
    }
    get segSize() {
      return this.model.segSize;
    }
    set segSize(value) {
      ;
      this.model.segSize = value;
      this.refreshRender();
    }
    get gapSize() {
      return this.model.gapSize;
    }
    set gapSize(value) {
      ;
      this.model.gapSize = value;
      this.refreshRender();
    }
    get isFixedStrokeWidth() {
      return this.model.isFixedStrokeWidth;
    }
    set isFixedStrokeWidth(value) {
      ;
      this.model.isFixedStrokeWidth = value;
      this.refreshRender();
    }
    isSelect(x, y) {
      if (!this.isSelectable) {
        return false;
      }
      return this.model.isInGraphical(x, y);
    }
    transform(value) {
      this.centerPoint = this.centerPoint.multiplyMatrix4(value);
      this.refreshRender();
    }
    updateRadius(x, y) {
      const point = new Vector2(x, y);
      const centerPoint = this.centerPoint;
      const distOfClickPointAndCenterPoint = point.sub(centerPoint).length;
      this.radius = distOfClickPointAndCenterPoint;
    }
    removeFill() {
      this.fillColor = Color.createByAlpha(0, this.fillColor);
    }
    getType() {
      return "D2Arc" /* D2Arc */;
    }
    getStatus() {
      return this.status;
    }
    toJSON() {
      const elementModelItem = this.model;
      return {
        type: this.getType(),
        modelType: this.model.modelType,
        status: this.status,
        layerItemId: elementModelItem.layerItemId,
        elementItemId: elementModelItem.elementItemId,
        elementItemName: elementModelItem.elementItemName,
        alpha: elementModelItem.alpha,
        rotation: elementModelItem.rotation,
        isFlipX: elementModelItem.isFlipX,
        isFlipY: elementModelItem.isFlipY,
        strokeColorData: elementModelItem.strokeColor ? elementModelItem.strokeColor.toRGBAJSON() : null,
        strokeWidth: elementModelItem.strokeWidth,
        bbox2: elementModelItem.bbox2.toJSON(),
        /* ... */
        startRadian: elementModelItem.startRadian,
        endRadian: elementModelItem.endRadian,
        sweep: elementModelItem.sweep,
        centerPoint: elementModelItem.centerPoint.toJSON(),
        radius: elementModelItem.radius,
        fillColorData: elementModelItem.isFill && elementModelItem.fillColor ? elementModelItem.fillColor.toRGBAJSON() : null,
        lineCap: elementModelItem.lineCap,
        isSolid: elementModelItem.isSolid,
        isFill: elementModelItem.isFill,
        segSize: elementModelItem.segSize,
        gapSize: elementModelItem.gapSize,
        isFixedStrokeWidth: elementModelItem.isFixedStrokeWidth
      };
    }
  };

  // src/objects/models/manager/primitive2d/D2ArcModelManager.ts
  var D2ArcModelManager = class _D2ArcModelManager extends BaseManager {
    static getInstance() {
      if (_D2ArcModelManager.instance === void 0) {
        _D2ArcModelManager.instance = new _D2ArcModelManager();
      }
      return _D2ArcModelManager.instance;
    }
    constructor() {
      super();
    }
    createModelItem(elementItemId, layerItemId, centerPoint, radius, startRadian, endRadian, sweep, optional = {}) {
      const locSetting = createBuildD2ArcModelOptionalParam(optional);
      const elementModelItem = new D2ArcModel(
        elementItemId,
        layerItemId,
        centerPoint,
        radius,
        startRadian,
        endRadian,
        sweep,
        locSetting.strokeWidth,
        locSetting.strokeColor,
        locSetting.isFill,
        locSetting.fillColor,
        locSetting.alpha,
        locSetting.isSolid,
        locSetting.lineCap,
        locSetting.isFixedStrokeWidth,
        locSetting.isEnableSelect
      );
      this.items.set(elementModelItem.elementItemId, elementModelItem);
      return elementModelItem;
    }
    deleteModelItem(elementItemId) {
      const elementModelItem = this.items.get(elementItemId);
      if (!elementModelItem) {
        return;
      }
      this.items.delete(elementModelItem.elementItemId);
    }
    quit() {
      super.quit();
      _D2ArcModelManager.instance = void 0;
    }
  };

  // src/objects/shapes/manager/primitive2d/D2ArcShapeManager.ts
  var D2ArcShapeManager = class _D2ArcShapeManager extends BaseManager {
    static getInstance() {
      if (_D2ArcShapeManager.instance === void 0) {
        _D2ArcShapeManager.instance = new _D2ArcShapeManager();
      }
      return _D2ArcShapeManager.instance;
    }
    constructor() {
      super();
      this._rteeItems = /* @__PURE__ */ new Map();
    }
    createShapeItem(elementItemId, layerItemId, centerPoint, radius, startRadian, endRadian, sweep, optional = {}) {
      const elementModelItem = D2ArcModelManager.getInstance().createModelItem(
        elementItemId,
        layerItemId,
        centerPoint,
        radius,
        startRadian,
        endRadian,
        sweep,
        optional
      );
      const elementShapeItem = new D2ArcShape(elementModelItem);
      const op = this.addCache(elementShapeItem);
      return elementShapeItem;
    }
    deleteShapeItem(elementItemId) {
      const elementShapeItem = this.items.get(elementItemId);
      if (!elementShapeItem) {
        return;
      }
      const op = this.deleteCache(elementItemId);
      if (op === false) {
        return;
      }
      D2ArcModelManager.getInstance().deleteModelItem(elementItemId);
      elementShapeItem.setDelete();
    }
    quit() {
      super.quit();
      _D2ArcShapeManager.instance = void 0;
    }
    addCache(elementShapeItem) {
      this.items.set(elementShapeItem.model.elementItemId, elementShapeItem);
      const rtreeItem = new RtreeItem(elementShapeItem);
      this._rteeItems.set(elementShapeItem.model.elementItemId, rtreeItem);
      Constant.rtree.insertItemData(RtreeItem.getSimpleRectFromModelBbox2(elementShapeItem), rtreeItem);
      return true;
    }
    deleteCache(elementItemId) {
      const targetShapeItem = this.items.get(elementItemId);
      if (!targetShapeItem) {
        return false;
      }
      const rtreeItem = this._rteeItems.get(elementItemId);
      const deleteResults = Constant.rtree.remove(RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
      if (!deleteResults.length) {
        return false;
      }
      this.items.delete(elementItemId);
      this._rteeItems.delete(elementItemId);
      return true;
    }
  };

  // src/objects/models/primitive2d/D2TextModelVertex.ts
  var D2TextModelVertex = class extends D2ElementModelItemBase {
    constructor(content, fontSize = 10, fontFamily = "auto", fontStyle = "normal" /* NORMAL */, fontWeight = 100) {
      super(void 0, void 0);
      this._contentReady = false;
      this._vertexData = {
        indices: [],
        positions: []
      };
      this._content = content;
      this._fontSize = fontSize;
      this._fontFamily = fontFamily;
      this._fontStyle = fontStyle;
      this._fontWeight = fontWeight;
      this.modelType = "D2Text" /* D2Text */;
      this.bbox2 = new BBox2(0, 0, 0, 0);
    }
    get contentReady() {
      return this._contentReady;
    }
    set contentReady(value) {
      this._contentReady = value;
    }
    get fontSize() {
      return this._fontSize;
    }
    set fontSize(value) {
      this._fontSize = value;
    }
    get fontFamily() {
      return this._fontFamily;
    }
    set fontFamily(value) {
      this._fontFamily = value;
    }
    get fontStyle() {
      return this._fontStyle;
    }
    set fontStyle(value) {
      this._fontStyle = value;
    }
    get fontWeight() {
      return this._fontWeight;
    }
    set fontWeight(value) {
      this._fontWeight = value;
    }
    get content() {
      return this._content;
    }
    getBBox2() {
      return this.bbox2;
    }
    updatePosition(value) {
    }
    updateRotation(value) {
    }
    updateIsFlipX(value) {
    }
    updateIsFlipY(value) {
    }
    updateBBox2() {
      return this.bbox2;
    }
    isInGraphical(x, y) {
      return false;
    }
    updateContent(content) {
      this.contentReady = false;
      this._content = content;
      this._vertexData = {
        indices: [],
        positions: []
      };
    }
    getVertexData() {
      return this._vertexData;
    }
    updateVertexData(vertexDataArray) {
      const allIndices = [];
      const allPositions = [];
      let addtionOffsets = [];
      let addtionCounter = 0;
      for (let rowIndex = 0; rowIndex < vertexDataArray.length; rowIndex++) {
        for (let colIndex = 0; colIndex < vertexDataArray[rowIndex].length; colIndex++) {
          const { positions, indices } = vertexDataArray[rowIndex][colIndex];
          addtionOffsets.push(positions.length / POINT_ARRAY_OCCUPY_SIZE);
          for (let k = 0; k < positions.length; k++) {
            allPositions.push(positions[k]);
          }
          if (rowIndex <= 0 && colIndex <= 0) {
            for (let k = 0; k < indices.length; k++) {
              allIndices.push(indices[k]);
            }
          } else {
            addtionCounter += addtionOffsets[addtionOffsets.length - 2];
            for (let k = 0; k < indices.length; k++) {
              allIndices.push(indices[k] + addtionCounter);
            }
          }
        }
      }
      this._vertexData.indices = allIndices;
      this._vertexData.positions = allPositions;
    }
  };

  // src/objects/models/primitive2d/D2TextModel.ts
  var DEFAULT_FONT_SIZE = 5;
  function createD2TextModelStyleDefaultSetting(fontSize) {
    return {
      backgourdColor: new Color(0, 0, 0, 0),
      borderRadius: 0,
      padding: { left: 1, top: 1, bottom: 1, right: 1 },
      lineHeight: fontSize
    };
  }
  function createBuildD2TextModelOptionalParam(optional = {}, fontSize = DEFAULT_FONT_SIZE, styleSetting = createD2TextModelStyleDefaultSetting(fontSize)) {
    return __spreadProps(__spreadValues({
      fontFamily: "auto",
      fontStyle: "normal" /* NORMAL */,
      fontSize,
      fontWeight: 100,
      strokeColor: Color.WHITE,
      alpha: 1,
      rotation: 0,
      isEnableSelect: true
    }, optional), {
      styleSetting
    });
  }
  function buildD2TextModel(layerItemId, position, content, optional = {}) {
    const fontSize = optional.fontSize || DEFAULT_FONT_SIZE;
    const styleSetting = __spreadValues(__spreadValues({}, createD2TextModelStyleDefaultSetting(fontSize)), optional.styleSetting || {});
    const locSetting = createBuildD2TextModelOptionalParam(optional, fontSize, styleSetting);
    const elementItemId = Constant.globalIdenManager.getElementIden();
    const elementModelItem = new D2TextModel(
      elementItemId,
      layerItemId,
      position,
      content,
      locSetting.fontFamily,
      locSetting.fontStyle,
      locSetting.fontSize,
      locSetting.fontWeight,
      locSetting.strokeColor,
      locSetting.alpha,
      locSetting.styleSetting,
      locSetting.rotation,
      false,
      false,
      locSetting.isEnableSelect
    );
    return elementModelItem;
  }
  var D2TextModel = class extends D2TextModelVertex {
    constructor(elementItemId, layerItemId, position, content, fontFamily = "auto", fontStyle = "normal" /* NORMAL */, fontSize = 10, fontWeight = 100, strokeColor = Color.WHITE, alpha = 1, styleSetting = createD2TextModelStyleDefaultSetting(fontSize), rotation = 0, isFlipX = false, isFlipY = false, isEnableSelect = true) {
      super(content, fontSize, fontFamily, fontStyle, fontWeight);
      this._refreshToken = getHashIden();
      this._width = 0;
      this._height = 0;
      this._strokeColor = strokeColor;
      this._styleSetting = styleSetting;
      this.elementItemId = elementItemId;
      this.layerItemId = layerItemId;
      this.bbox2 = new BBox2(0, 0, 0, 0);
      this.alpha = alpha;
      this.position = position;
      this.rotation = rotation;
      this.isFlipX = isFlipX;
      this.isFlipY = isFlipY;
      this.isEnableSelect = isEnableSelect;
      this.fixStyleSetting();
    }
    get refreshToken() {
      return this._refreshToken;
    }
    set refreshToken(value) {
      this._refreshToken = value;
    }
    get width() {
      return this._width;
    }
    set width(value) {
      this._width = value;
    }
    get height() {
      return this._height;
    }
    set height(value) {
      this._height = value;
    }
    get strokeColor() {
      return this._strokeColor;
    }
    set strokeColor(value) {
      this._strokeColor = value;
    }
    get styleSetting() {
      return this._styleSetting;
    }
    set styleSetting(value) {
      this._styleSetting = value;
      this.fixStyleSetting();
    }
    get leftUp() {
      const leftPadding = this.contentReady ? this.styleSetting.padding.left || 0 : 0;
      const topPadding = this.contentReady ? this.styleSetting.padding.top || 0 : 0;
      return Vector2.ORIGIN.add(new Vector2(-leftPadding, topPadding)).multiplyMatrix4(this.matrix);
    }
    get rightUp() {
      const rightPadding = this.contentReady ? this.styleSetting.padding.right || 0 : 0;
      const topPadding = this.contentReady ? this.styleSetting.padding.top || 0 : 0;
      return Vector2.ORIGIN.add(new Vector2(this.width, 0)).add(new Vector2(rightPadding, topPadding)).multiplyMatrix4(this.matrix);
    }
    get rightDown() {
      const rightPadding = this.contentReady ? this.styleSetting.padding.right || 0 : 0;
      const bottomPadding = this.contentReady ? this.styleSetting.padding.bottom || 0 : 0;
      return Vector2.ORIGIN.add(new Vector2(this.width, -this.height)).add(new Vector2(rightPadding, -bottomPadding)).multiplyMatrix4(this.matrix);
    }
    get leftDown() {
      const leftPadding = this.contentReady ? this.styleSetting.padding.left || 0 : 0;
      const bottomPadding = this.contentReady ? this.styleSetting.padding.bottom || 0 : 0;
      return Vector2.ORIGIN.add(new Vector2(0, -this.height)).add(new Vector2(-leftPadding, -bottomPadding)).multiplyMatrix4(this.matrix);
    }
    updateRefreshToken() {
      this.refreshToken = getHashIden();
    }
    updatePosition(value) {
      super.position = value;
      this.bbox2 = BBox2Creator.createD2TextBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateRotation(value) {
      super.rotation = value;
      this.bbox2 = BBox2Creator.createD2TextBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateIsFlipX(value) {
      super.isFlipX = value;
      this.bbox2 = BBox2Creator.createD2TextBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateIsFlipY(value) {
      super.isFlipY = value;
      this.bbox2 = BBox2Creator.createD2TextBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    isInGraphical(x, y) {
      if (this.isEnableSelect === false) {
        return false;
      }
      return D2RectToolkit.isPointOnRect([this.leftUp, this.rightUp, this.rightDown, this.leftDown], 0, new Vector2(x, y));
    }
    fixStyleSetting() {
      if (!this._styleSetting.lineHeight || this._styleSetting.lineHeight < this.fontSize) {
        this._styleSetting.lineHeight = this.fontSize;
      }
      if (!this._styleSetting.padding.left || this._styleSetting.padding.left <= 0) {
        this._styleSetting.padding.left = 0;
      }
      if (!this._styleSetting.padding.top || this._styleSetting.padding.top <= 0) {
        this._styleSetting.padding.top = 0;
      }
      if (!this._styleSetting.padding.right || this._styleSetting.padding.right <= 0) {
        this._styleSetting.padding.right = 0;
      }
      if (!this._styleSetting.padding.bottom || this._styleSetting.padding.bottom <= 0) {
        this._styleSetting.padding.bottom = 0;
      }
      if (!this._styleSetting.lineHeight || this._styleSetting.lineHeight <= this.fontSize) {
        this._styleSetting.lineHeight = this.fontSize;
      }
    }
  };

  // src/objects/models/manager/primitive2d/D2TextModelManager.ts
  var D2TextModelManager = class _D2TextModelManager extends BaseManager {
    static getInstance() {
      if (_D2TextModelManager.instance === void 0) {
        _D2TextModelManager.instance = new _D2TextModelManager();
      }
      return _D2TextModelManager.instance;
    }
    constructor() {
      super();
    }
    createModelItem(elementItemId, layerItemId, position, content, optional = {}) {
      const fontSize = optional.fontSize || DEFAULT_FONT_SIZE;
      const styleSetting = __spreadValues(__spreadValues({}, createD2TextModelStyleDefaultSetting(fontSize)), optional.styleSetting || {});
      const locSetting = createBuildD2TextModelOptionalParam(optional, fontSize, styleSetting);
      const elementModelItem = new D2TextModel(
        elementItemId,
        layerItemId,
        position,
        content,
        locSetting.fontFamily,
        locSetting.fontStyle,
        locSetting.fontSize,
        locSetting.fontWeight,
        locSetting.strokeColor,
        locSetting.alpha,
        locSetting.styleSetting,
        locSetting.rotation,
        false,
        false,
        locSetting.isEnableSelect
      );
      this.items.set(elementModelItem.elementItemId, elementModelItem);
      return elementModelItem;
    }
    deleteModelItem(elementItemId) {
      const elementModelItem = this.items.get(elementItemId);
      if (!elementModelItem) {
        return;
      }
      this.items.delete(elementModelItem.elementItemId);
    }
    quit() {
      super.quit();
      _D2TextModelManager.instance = void 0;
    }
  };

  // src/objects/shapes/primitive2d/D2TextShape.ts
  function buildD2TextShape(layerItemId, position, content, optional = {}, flushCallback) {
    const elementModelItem = buildD2TextModel(layerItemId, position, content, optional);
    const elementShapeItem = new D2TextShape(elementModelItem);
    Constant.textFontService.addVectorizeTextTask(
      elementModelItem.elementItemId,
      elementModelItem.content,
      {
        fontSize: elementModelItem.fontSize,
        lineHeight: elementModelItem.styleSetting.lineHeight
      },
      {
        fontFamily: elementModelItem.fontFamily,
        fontWeight: elementModelItem.fontWeight,
        fontStyle: elementModelItem.fontStyle
      },
      ({ initBbox2, width, height, vertexDataArray }) => {
        elementShapeItem.setContentReadyStatus(true);
        elementShapeItem.flushVertexDataMixins(vertexDataArray, width, height);
        elementShapeItem.updateCacheTransform();
        elementShapeItem.updateRender();
        if (elementShapeItem.isContentReady()) {
          flushCallback && flushCallback(elementShapeItem);
        }
      }
    );
    return elementShapeItem;
  }
  var D2TextShape = class extends D2ElementShapeItemBase {
    constructor(model) {
      super();
      this.model = model;
      this.refreshRender();
    }
    get elementItemName() {
      return this.model.elementItemName;
    }
    set elementItemName(value) {
      ;
      this.model.elementItemName = value;
      this.refreshRender();
    }
    get refreshToken() {
      return this.model.refreshToken;
    }
    set refreshToken(value) {
      ;
      this.model.refreshToken = value;
      this.refreshRender();
    }
    get position() {
      return this.model.position;
    }
    set position(value) {
      ;
      this.model.updatePosition(value);
      this.refreshRender();
    }
    get content() {
      return this.model.content;
    }
    get fontFamily() {
      return this.model.fontFamily;
    }
    set fontFamily(value) {
      ;
      this.model.fontFamily = value;
      this.refreshRender();
    }
    get fontStyle() {
      return this.model.fontStyle;
    }
    set fontStyle(value) {
      ;
      this.model.fontStyle = value;
      this.refreshRender();
    }
    get fontSize() {
      return this.model.fontSize;
    }
    set fontSize(value) {
      ;
      this.model.fontSize = value;
      this.refreshRender();
    }
    get fontWeight() {
      return this.model.fontWeight;
    }
    set fontWeight(value) {
      ;
      this.model.fontWeight = value;
      this.refreshRender();
    }
    get strokeColor() {
      return this.model.strokeColor;
    }
    set strokeColor(value) {
      ;
      this.model.strokeColor = value;
      this.refreshRender();
    }
    get alpha() {
      return this.model.alpha;
    }
    set alpha(value) {
      ;
      this.model.alpha = value;
      this.refreshRender();
    }
    get rotation() {
      return this.model.rotation;
    }
    set rotation(value) {
      ;
      this.model.updateRotation(value);
      this.refreshRender();
    }
    get isFlipX() {
      return this.model.isFlipX;
    }
    set isFlipX(value) {
      ;
      this.model.updateIsFlipX(value);
      this.refreshRender();
    }
    get isFlipY() {
      return this.model.isFlipY;
    }
    set isFlipY(value) {
      ;
      this.model.updateIsFlipY(value);
      this.refreshRender();
    }
    get styleSetting() {
      return this.model.styleSetting;
    }
    set styleSetting(value) {
      ;
      this.model.styleSetting = value;
      this.refreshRender();
    }
    get leftUp() {
      return this.model.leftUp;
    }
    get rightUp() {
      return this.model.rightUp;
    }
    get leftDown() {
      return this.model.leftDown;
    }
    get rightDown() {
      return this.model.rightDown;
    }
    isSelect(x, y) {
      if (!this.isSelectable) {
        return false;
      }
      return this.model.isInGraphical(x, y);
    }
    updateRender() {
      ;
      this.model.updateRefreshToken();
      this.refreshRender();
    }
    updateCacheTransform() {
      const model = this.model;
      model.updatePosition(model.transformCache.position);
      model.updateRotation(model.transformCache.rotation);
      model.updateIsFlipX(model.transformCache.isFlipX);
      model.updateIsFlipY(model.transformCache.isFlipY);
      this.refreshRender();
    }
    flushVertexDataMixins(vertexDataArray, width, height) {
      const model = this.model;
      model.updateVertexData(vertexDataArray);
      model.width = width;
      model.height = height;
      this.refreshRender();
    }
    setContentReadyStatus(status) {
      ;
      this.model.contentReady = status;
    }
    updateContent(content) {
      ;
      this.model.updateContent(content);
      this.refreshRender();
    }
    isContentReady() {
      return this.model.contentReady;
    }
    transform(value) {
      this.position = this.position.multiplyMatrix4(value);
      this.updateRender();
    }
    getType() {
      return "D2Text" /* D2Text */;
    }
    getStatus() {
      return this.status;
    }
    toJSON() {
      const elementModelItem = this.model;
      return {
        type: this.getType(),
        modelType: this.model.modelType,
        status: this.status,
        layerItemId: elementModelItem.layerItemId,
        elementItemId: elementModelItem.elementItemId,
        elementItemName: elementModelItem.elementItemName,
        alpha: elementModelItem.alpha,
        rotation: elementModelItem.rotation,
        isFlipX: elementModelItem.isFlipX,
        isFlipY: elementModelItem.isFlipY,
        strokeColorData: elementModelItem.strokeColor ? elementModelItem.strokeColor.toRGBAJSON() : null,
        strokeWidth: 0,
        bbox2: elementModelItem.bbox2.toJSON(),
        contentReady: elementModelItem.contentReady,
        /* ... */
        position: elementModelItem.position.toJSON(),
        refreshToken: elementModelItem.refreshToken,
        content: elementModelItem.content,
        fontFamily: elementModelItem.fontFamily,
        fontStyle: elementModelItem.fontStyle,
        fontSize: elementModelItem.fontSize,
        fontWeight: elementModelItem.fontWeight,
        width: elementModelItem.width,
        height: elementModelItem.height,
        leftUp: elementModelItem.leftUp.toJSON(),
        rightUp: elementModelItem.rightUp.toJSON(),
        leftDown: elementModelItem.leftDown.toJSON(),
        rightDown: elementModelItem.rightDown.toJSON(),
        styleSetting: elementModelItem.styleSetting,
        vertexData: elementModelItem.getVertexData()
      };
    }
  };

  // src/objects/shapes/manager/primitive2d/D2TextShapeManager.ts
  var D2TextShapeManager = class _D2TextShapeManager extends BaseManager {
    static getInstance() {
      if (_D2TextShapeManager.instance === void 0) {
        _D2TextShapeManager.instance = new _D2TextShapeManager();
      }
      return _D2TextShapeManager.instance;
    }
    constructor() {
      super();
      this._rteeItems = /* @__PURE__ */ new Map();
    }
    createShapeItem(elementItemId, layerItemId, position, content, optional = {}, callback) {
      const elementModelItem = D2TextModelManager.getInstance().createModelItem(
        elementItemId,
        layerItemId,
        position,
        content,
        optional
      );
      const elementShapeItem = new D2TextShape(elementModelItem);
      const op = this.addCache(elementShapeItem);
      this.refreshGraphicsPostions(elementModelItem, callback);
      return elementShapeItem;
    }
    createShapeItemByVertexData(elementItemId, layerItemId, position, textVertexData, optional = {}) {
      const elementModelItem = D2TextModelManager.getInstance().createModelItem(
        elementItemId,
        layerItemId,
        position,
        textVertexData.content,
        __spreadValues(__spreadValues({}, optional), textVertexData)
      );
      const elementShapeItem = new D2TextShape(elementModelItem);
      const op = this.addCache(elementShapeItem);
      elementShapeItem.setContentReadyStatus(true);
      elementShapeItem.flushVertexDataMixins(textVertexData.vertexDataArray, textVertexData.width, textVertexData.height);
      elementShapeItem.updateCacheTransform();
      elementShapeItem.updateRender();
      if (elementShapeItem.isContentReady()) {
        const rtreeItem = new RtreeItem(elementShapeItem);
        this._rteeItems.set(elementShapeItem.model.elementItemId, rtreeItem);
        Constant.rtree.insertItemData(RtreeItem.getSimpleRectFromModelBbox2(elementShapeItem), rtreeItem);
      }
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      return elementShapeItem;
    }
    deleteShapeItem(elementItemId) {
      const elementShapeItem = this.items.get(elementItemId);
      if (!elementShapeItem) {
        return;
      }
      const op = this.deleteCache(elementItemId);
      if (op === false) {
        return;
      }
      D2TextModelManager.getInstance().deleteModelItem(elementItemId);
      elementShapeItem.setDelete();
    }
    addCache(elementShapeItem) {
      this.items.set(elementShapeItem.model.elementItemId, elementShapeItem);
      return true;
    }
    deleteCache(elementItemId) {
      const targetShapeItem = this.items.get(elementItemId);
      if (!targetShapeItem) {
        return false;
      }
      const rtreeItem = this._rteeItems.get(elementItemId);
      if (targetShapeItem.isContentReady()) {
        const deleteResults = Constant.rtree.remove(RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
        if (!deleteResults.length) {
          return false;
        }
      }
      this.items.delete(elementItemId);
      this._rteeItems.delete(elementItemId);
      return true;
    }
    refreshGraphicsPostions(elementModelItem, callback) {
      Constant.textFontService.addVectorizeTextTask(
        elementModelItem.elementItemId,
        elementModelItem.content,
        {
          fontSize: elementModelItem.fontSize,
          lineHeight: elementModelItem.styleSetting.lineHeight
        },
        {
          fontFamily: elementModelItem.fontFamily,
          fontWeight: elementModelItem.fontWeight,
          fontStyle: elementModelItem.fontStyle
        },
        ({ textStrId, width, height, initBbox2, vertexDataArray }) => {
          const elementShapeItem = this.items.get(textStrId);
          if (!elementShapeItem || elementShapeItem.killed) {
            return;
          }
          elementShapeItem.setContentReadyStatus(true);
          elementShapeItem.flushVertexDataMixins(vertexDataArray, width, height);
          elementShapeItem.updateCacheTransform();
          elementShapeItem.updateRender();
          if (elementShapeItem.isContentReady()) {
            const rtreeItem = new RtreeItem(elementShapeItem);
            this._rteeItems.set(elementShapeItem.model.elementItemId, rtreeItem);
            Constant.rtree.insertItemData(RtreeItem.getSimpleRectFromModelBbox2(elementShapeItem), rtreeItem);
            callback && callback(elementShapeItem.toJSON());
          }
          Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
        }
      );
    }
    quit() {
      super.quit();
      _D2TextShapeManager.instance = void 0;
    }
  };

  // src/objects/models/primitive2d/D2ImageModelSource.ts
  var D2ImageModelSource = class extends D2ElementModelItemBase {
    constructor(fileHashUuid, imageDataURL) {
      super(void 0, void 0);
      this._contentReady = false;
      this._fileHashUuid = fileHashUuid;
      this._imageDataURL = imageDataURL;
      this._texImageSource = null;
      this.modelType = "D2Image" /* D2Image */;
      this.bbox2 = new BBox2(0, 0, 0, 0);
    }
    get contentReady() {
      return this._contentReady;
    }
    set contentReady(value) {
      this._contentReady = value;
    }
    get fileHashUuid() {
      return this._fileHashUuid;
    }
    set fileHashUuid(value) {
      this._fileHashUuid = value;
    }
    get texImageSource() {
      return this._texImageSource;
    }
    set texImageSource(value) {
      this._texImageSource = value;
    }
    get imageDataURL() {
      return this._imageDataURL;
    }
    set imageDataURL(value) {
      this._imageDataURL = value;
    }
    getBBox2() {
      return this.bbox2;
    }
    updatePosition(value) {
    }
    updateRotation(value) {
    }
    updateIsFlipX(value) {
    }
    updateIsFlipY(value) {
    }
    updateBBox2() {
      return this.bbox2;
    }
    isInGraphical(x, y) {
      return this.bbox2.minX <= x && this.bbox2.maxX >= x && this.bbox2.minY <= y && this.bbox2.maxY >= y;
    }
    updateTexImageSource(texImageSource) {
      this.texImageSource = texImageSource;
    }
  };

  // src/objects/models/primitive2d/D2ImageModel.ts
  function createBuildD2ImageModelOptionalParam(optional = {}) {
    return __spreadValues({
      isShowStroke: false,
      strokeWidth: 0,
      strokeColor: new Color(0, 0, 0, 1),
      alpha: 1,
      rotation: 0,
      isFlipX: false,
      isFlipY: false,
      isEnableSelect: true
    }, optional);
  }
  function buildD2ImageModel(layerItemId, position, fileHashUuid, imageDataURL, width, height, optional = {}) {
    const locSetting = createBuildD2ImageModelOptionalParam(optional);
    const elementItemId = Constant.globalIdenManager.getElementIden();
    const elementModelItem = new D2ImageModel(
      elementItemId,
      layerItemId,
      fileHashUuid,
      imageDataURL,
      position,
      width,
      height,
      locSetting.isShowStroke,
      locSetting.strokeWidth,
      locSetting.strokeColor,
      locSetting.alpha,
      locSetting.rotation,
      locSetting.isFlipX,
      locSetting.isFlipY,
      locSetting.isEnableSelect
    );
    return elementModelItem;
  }
  var D2ImageModel = class extends D2ImageModelSource {
    constructor(elementItemId, layerItemId, fileHashUuid, imageDataURL, position, width, height, isShowStroke = false, strokeWidth = 0, strokeColor = new Color(0, 0, 0, 1), alpha = 1, rotation = 0, isFlipX = false, isFlipY = false, isEnableSelect = true) {
      super(fileHashUuid, imageDataURL);
      this._isShowStroke = isShowStroke;
      this._strokeWidth = strokeWidth;
      this._strokeColor = strokeColor;
      this._width = width;
      this._height = height;
      this.elementItemId = elementItemId;
      this.layerItemId = layerItemId;
      this.alpha = alpha;
      this.position = position;
      this.rotation = rotation;
      this.isFlipX = isFlipX;
      this.isFlipY = isFlipY;
      this.isEnableSelect = isEnableSelect;
      this.bbox2 = BBox2Creator.createD2ImageBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    get refreshToken() {
      return this._refreshToken;
    }
    set refreshToken(value) {
      this._refreshToken = value;
    }
    get width() {
      return this._width;
    }
    set width(value) {
      this._width = value;
    }
    get height() {
      return this._height;
    }
    set height(value) {
      this._height = value;
    }
    get isShowStroke() {
      return this._isShowStroke;
    }
    set isShowStroke(value) {
      this._isShowStroke = value;
    }
    get strokeWidth() {
      return this._strokeWidth;
    }
    set strokeWidth(value) {
      this._strokeWidth = value;
    }
    get strokeColor() {
      return this._strokeColor;
    }
    set strokeColor(value) {
      this._strokeColor = value;
    }
    get leftUp() {
      return Vector2.ORIGIN.multiplyMatrix4(this.matrix);
    }
    get rightUp() {
      return Vector2.ORIGIN.add(new Vector2(this.width, 0)).multiplyMatrix4(this.matrix);
    }
    get rightDown() {
      return Vector2.ORIGIN.add(new Vector2(this.width, -this.height)).multiplyMatrix4(this.matrix);
    }
    get leftDown() {
      return Vector2.ORIGIN.add(new Vector2(0, -this.height)).multiplyMatrix4(this.matrix);
    }
    getBBox2() {
      return this.bbox2;
    }
    updatePosition(value) {
      super.position = value;
      this.bbox2 = BBox2Creator.createD2ImageBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateRotation(value) {
      super.rotation = value;
      this.bbox2 = BBox2Creator.createD2ImageBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateIsFlipX(value) {
      super.isFlipX = value;
      this.bbox2 = BBox2Creator.createD2ImageBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateIsFlipY(value) {
      super.isFlipY = value;
      this.bbox2 = BBox2Creator.createD2ImageBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateBBox2() {
      this.bbox2 = BBox2Creator.createD2ImageBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
      return this.bbox2;
    }
    isInGraphical(x, y) {
      if (this.isEnableSelect === false) {
        return false;
      }
      return D2RectToolkit.isPointOnRect([this.leftUp, this.rightUp, this.rightDown, this.leftDown], 0, new Vector2(x, y));
    }
    updateRefreshToken() {
      this.refreshToken = getHashIden();
    }
  };

  // src/objects/models/manager/primitive2d/D2ImageModelManager.ts
  var D2ImageModelManager = class _D2ImageModelManager extends BaseManager {
    static getInstance() {
      if (_D2ImageModelManager.instance === void 0) {
        _D2ImageModelManager.instance = new _D2ImageModelManager();
      }
      return _D2ImageModelManager.instance;
    }
    constructor() {
      super();
    }
    createModelItem(elementItemId, layerItemId, fileHashUuid, imageDataURL, position, width, height, optional = {}) {
      const locSetting = createBuildD2ImageModelOptionalParam(optional);
      const elementModelItem = new D2ImageModel(
        elementItemId,
        layerItemId,
        fileHashUuid,
        imageDataURL,
        position,
        width,
        height,
        locSetting.isShowStroke,
        locSetting.strokeWidth,
        locSetting.strokeColor,
        locSetting.alpha,
        locSetting.rotation,
        locSetting.isFlipX,
        locSetting.isFlipY,
        locSetting.isEnableSelect
      );
      this.items.set(elementModelItem.elementItemId, elementModelItem);
      return elementModelItem;
    }
    deleteModelItem(elementItemId) {
      const elementModelItem = this.items.get(elementItemId);
      if (!elementModelItem) {
        return;
      }
      this.items.delete(elementModelItem.elementItemId);
    }
    quit() {
      super.quit();
      _D2ImageModelManager.instance = void 0;
    }
  };

  // src/objects/shapes/primitive2d/D2ImageShape.ts
  function buildD2ImageShape(layerItemId, position, fileHashUuid, imageDataURL, width, height, optional = {}, flushCallback) {
    const elementModelItem = buildD2ImageModel(layerItemId, position, fileHashUuid, imageDataURL, width, height, optional);
    const elementShapeItem = new D2ImageShape(elementModelItem);
    Constant.imageReSourceService.addImageLoadTaskItem(
      elementModelItem.elementItemId,
      elementModelItem.fileHashUuid,
      elementModelItem.imageDataURL,
      (imageId, fileHashUuid2, texImageSource) => {
        elementShapeItem.setContentReadyStatus(true);
        elementShapeItem.flushTexImageSource(texImageSource);
        elementShapeItem.updateCacheTransform();
        if (elementShapeItem.isContentReady()) {
          flushCallback && flushCallback(elementShapeItem);
        }
        window.setTimeout(() => {
          elementShapeItem.updateRender();
          Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
        }, 1 / 60);
      }
    );
    return elementShapeItem;
  }
  var D2ImageShape = class extends D2ElementShapeItemBase {
    constructor(model) {
      super();
      this.model = model;
      this.refreshRender();
    }
    get elementItemName() {
      return this.model.elementItemName;
    }
    set elementItemName(value) {
      ;
      this.model.elementItemName = value;
      this.refreshRender();
    }
    get fileHashUuid() {
      return this.model.fileHashUuid;
    }
    set fileHashUuid(value) {
      ;
      this.model.fileHashUuid = value;
      this.refreshRender();
    }
    get texImageSource() {
      return this.model.texImageSource;
    }
    set texImageSource(value) {
      ;
      this.model.texImageSource = value;
      this.refreshRender();
    }
    get imageDataURL() {
      return this.model.imageDataURL;
    }
    set imageDataURL(value) {
      ;
      this.model.imageDataURL = value;
      this.refreshRender();
    }
    get position() {
      return this.model.position;
    }
    set position(value) {
      ;
      this.model.updatePosition(value);
      this.updateBBox2();
      this.refreshRender();
    }
    get width() {
      return this.model.width;
    }
    set width(value) {
      ;
      this.model.width = value;
      this.updateBBox2();
      this.refreshRender();
    }
    get height() {
      return this.model.height;
    }
    set height(value) {
      ;
      this.model.height = value;
      this.updateBBox2();
      this.refreshRender();
    }
    get alpha() {
      return this.model.alpha;
    }
    set alpha(value) {
      ;
      this.model.alpha = value;
      this.refreshRender();
    }
    get rotation() {
      return this.model.rotation;
    }
    set rotation(value) {
      ;
      this.model.updateRotation(value);
      this.updateBBox2();
      this.refreshRender();
    }
    get isFlipX() {
      return this.model.isFlipX;
    }
    set isFlipX(value) {
      ;
      this.model.updateIsFlipX(value);
      this.updateBBox2();
      this.refreshRender();
    }
    get isFlipY() {
      return this.model.isFlipY;
    }
    set isFlipY(value) {
      ;
      this.model.updateIsFlipY(value);
      this.updateBBox2();
      this.refreshRender();
    }
    get isShowStroke() {
      return this.model.isShowStroke;
    }
    set isShowStroke(value) {
      ;
      this.model.isShowStroke = value;
      this.refreshRender();
    }
    get strokeWidth() {
      return this.model.strokeWidth;
    }
    set strokeWidth(value) {
      ;
      this.model.strokeWidth = value;
      this.refreshRender();
    }
    get strokeColor() {
      return this.model.strokeColor;
    }
    set strokeColor(value) {
      ;
      this.model.strokeColor = value;
      this.refreshRender();
    }
    get leftUp() {
      return this.model.leftUp;
    }
    get rightUp() {
      return this.model.rightUp;
    }
    get leftDown() {
      return this.model.leftDown;
    }
    get rightDown() {
      return this.model.rightDown;
    }
    isSelect(x, y) {
      if (!this.isSelectable) {
        return false;
      }
      return this.model.isInGraphical(x, y);
    }
    updateCacheTransform() {
      const model = this.model;
      model.updatePosition(model.transformCache.position);
      model.updateRotation(model.transformCache.rotation);
      model.updateIsFlipX(model.transformCache.isFlipX);
      model.updateIsFlipY(model.transformCache.isFlipY);
      this.refreshRender();
    }
    setContentReadyStatus(status) {
      ;
      this.model.contentReady = status;
    }
    updateRender() {
      ;
      this.model.updateRefreshToken();
      this.refreshRender();
    }
    flushTexImageSource(texImageSource) {
      ;
      this.model.updateTexImageSource(texImageSource);
    }
    isContentReady() {
      return this.model.contentReady;
    }
    transform(value) {
      this.position = this.position.multiplyMatrix4(value);
      this.model.updateBBox2();
      this.refreshRender();
    }
    updateBBox2() {
      ;
      this.model.updateBBox2();
      this.refreshRender();
    }
    getType() {
      return "D2Image" /* D2Image */;
    }
    getStatus() {
      return this.status;
    }
    toJSON() {
      const elementModelItem = this.model;
      return {
        type: this.getType(),
        modelType: this.model.modelType,
        status: this.status,
        layerItemId: elementModelItem.layerItemId,
        elementItemId: elementModelItem.elementItemId,
        elementItemName: elementModelItem.elementItemName,
        alpha: elementModelItem.alpha,
        rotation: elementModelItem.rotation,
        isFlipX: elementModelItem.isFlipX,
        isFlipY: elementModelItem.isFlipY,
        strokeColorData: Color.RED.toRGBAJSON(),
        strokeWidth: elementModelItem.strokeWidth,
        bbox2: elementModelItem.bbox2 ? elementModelItem.bbox2.toJSON() : null,
        /* ... */
        refreshToken: elementModelItem.refreshToken,
        /* ... */
        texImageSource: elementModelItem.texImageSource,
        imageDataURL: elementModelItem.imageDataURL,
        fileHashUuid: elementModelItem.fileHashUuid,
        position: elementModelItem.position.toJSON(),
        width: elementModelItem.width,
        height: elementModelItem.height,
        isShowStroke: elementModelItem.isShowStroke,
        leftUp: elementModelItem.leftUp.toJSON(),
        rightUp: elementModelItem.rightUp.toJSON(),
        leftDown: elementModelItem.leftDown.toJSON(),
        rightDown: elementModelItem.rightDown.toJSON()
      };
    }
  };

  // src/objects/shapes/manager/primitive2d/D2ImageShapeManager.ts
  var D2ImageShapeManager = class _D2ImageShapeManager extends BaseManager {
    static getInstance() {
      if (_D2ImageShapeManager.instance === void 0) {
        _D2ImageShapeManager.instance = new _D2ImageShapeManager();
      }
      return _D2ImageShapeManager.instance;
    }
    constructor() {
      super();
      this._rteeItems = /* @__PURE__ */ new Map();
    }
    createShapeItem(elementItemId, layerItemId, position, fileHashUuid, imageDataURL, width, height, optional = {}) {
      const elementModelItem = D2ImageModelManager.getInstance().createModelItem(
        elementItemId,
        layerItemId,
        fileHashUuid,
        imageDataURL,
        position,
        width,
        height,
        optional
      );
      const elementShapeItem = new D2ImageShape(elementModelItem);
      const op = this.addCache(elementShapeItem);
      this.refreshTexImageSource(elementModelItem, fileHashUuid);
      return elementShapeItem;
    }
    deleteShapeItem(elementItemId) {
      const elementShapeItem = this.items.get(elementItemId);
      if (!elementShapeItem) {
        return;
      }
      const op = this.deleteCache(elementItemId);
      if (op === false) {
        return;
      }
      D2ImageModelManager.getInstance().deleteModelItem(elementItemId);
      elementShapeItem.setDelete();
    }
    addCache(elementShapeItem) {
      this.items.set(elementShapeItem.model.elementItemId, elementShapeItem);
      return true;
    }
    deleteCache(elementItemId) {
      const targetShapeItem = this.items.get(elementItemId);
      if (!targetShapeItem) {
        return false;
      }
      const rtreeItem = this._rteeItems.get(elementItemId);
      if (targetShapeItem.isContentReady()) {
        const deleteResults = Constant.rtree.remove(RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
        if (!deleteResults.length) {
          return false;
        }
      }
      this.items.delete(elementItemId);
      this._rteeItems.delete(elementItemId);
      return true;
    }
    refreshTexImageSource(elementModelItem, fileHashUuid) {
      Constant.imageReSourceService.addImageLoadTaskItem(
        elementModelItem.elementItemId,
        fileHashUuid,
        elementModelItem.imageDataURL,
        (imageId, fileHashUuid2, texImageSource) => {
          const elementShapeItem = this.items.get(imageId);
          if (!elementShapeItem) {
            return;
          }
          elementShapeItem.setContentReadyStatus(true);
          elementShapeItem.flushTexImageSource(texImageSource);
          elementShapeItem.updateCacheTransform();
          if (elementShapeItem.isContentReady()) {
            const rtreeItem = new RtreeItem(elementShapeItem);
            this._rteeItems.set(elementShapeItem.model.elementItemId, rtreeItem);
            Constant.rtree.insertItemData(RtreeItem.getSimpleRectFromModelBbox2(elementShapeItem), rtreeItem);
          }
          nextFrameTick(() => {
            elementShapeItem.updateRender();
            Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
          });
        }
      );
    }
    quit() {
      super.quit();
      _D2ImageShapeManager.instance = void 0;
    }
  };

  // src/objects/models/primitive2d/D2PointModel.ts
  function buildD2PointModel(layerItemId, centerPoint, optional = {}) {
    const locSetting = __spreadValues({
      size: 1,
      shape: "DOT" /* DOT */,
      strokeColor: Color.RED,
      alpha: 1,
      isEnableScale: false,
      isEnableSelect: true
    }, optional);
    const elementItemId = Constant.globalIdenManager.getElementIden();
    const elementModelItem = new D2PointModel(
      elementItemId,
      layerItemId,
      centerPoint,
      locSetting.size,
      locSetting.shape,
      locSetting.strokeColor,
      locSetting.alpha,
      locSetting.isEnableScale,
      locSetting.isEnableSelect
    );
    return elementModelItem;
  }
  var D2PointModel = class extends D2ElementModelItemBase {
    constructor(elementItemId, layerItemId, centerPoint, size, shape = "DOT" /* DOT */, strokeColor = Color.RED, alpha = 1, isEnableScale = false, isEnableSelect = false) {
      super(elementItemId, layerItemId);
      this._strokeColor = Color.RED;
      this._centerPoint = centerPoint;
      this._size = size;
      this._shape = shape;
      this._strokeColor = strokeColor;
      this._isEnableScale = isEnableScale;
      this.modelType = "D2Point" /* D2Point */;
      this.alpha = alpha;
      this.isEnableSelect = isEnableSelect;
      this.bbox2 = BBox2Creator.createD2PointBbox2(this._centerPoint, this._size);
    }
    get centerPoint() {
      return this._centerPoint;
    }
    set centerPoint(value) {
      this._centerPoint = value;
      this.bbox2 = BBox2Creator.createD2PointBbox2(this._centerPoint, this._size);
    }
    get size() {
      return this._size;
    }
    set size(value) {
      this._size = value;
      this.bbox2 = BBox2Creator.createD2PointBbox2(this._centerPoint, this._size);
    }
    get shape() {
      return this._shape;
    }
    set shape(value) {
      this._shape = value;
    }
    get strokeColor() {
      return this._strokeColor;
    }
    set strokeColor(value) {
      this._strokeColor = value;
    }
    get isEnableScale() {
      return this._isEnableScale;
    }
    set isEnableScale(value) {
      this._isEnableScale = value;
    }
    getBBox2() {
      return this.bbox2;
    }
    updatePosition(value) {
      super.position = value;
      this.bbox2 = BBox2Creator.createD2PointBbox2(this._centerPoint, this._size);
    }
    updateRotation(value) {
      super.rotation = value;
      this.bbox2 = BBox2Creator.createD2PointBbox2(this._centerPoint, this._size);
    }
    updateIsFlipX(value) {
      super.isFlipX = value;
      this.bbox2 = BBox2Creator.createD2PointBbox2(this._centerPoint, this._size);
    }
    updateIsFlipY(value) {
      super.isFlipY = value;
      this.bbox2 = BBox2Creator.createD2PointBbox2(this._centerPoint, this._size);
    }
    updateBBox2() {
      this.bbox2 = BBox2Creator.createD2PointBbox2(this.centerPoint, this.size);
      return this.bbox2;
    }
    isInGraphical(x, y) {
      if (this.isEnableSelect === false) {
        return false;
      }
      return D2CircleToolkit.isPointOnCircle(new Vector2(x, y), this.size, this.centerPoint, 0, true);
    }
  };

  // src/objects/models/manager/primitive2d/D2PointModelManager.ts
  var D2PointModelManager = class _D2PointModelManager extends BaseManager {
    static getInstance() {
      if (_D2PointModelManager.instance === void 0) {
        _D2PointModelManager.instance = new _D2PointModelManager();
      }
      return _D2PointModelManager.instance;
    }
    constructor() {
      super();
    }
    createModelItem(elementItemId, layerItemId, centerPoint, optional = {}) {
      const locSetting = __spreadValues({
        size: 1,
        shape: "DOT" /* DOT */,
        strokeColor: Color.RED,
        alpha: 1,
        isEnableScale: false,
        isEnableSelect: true
      }, optional);
      const elementModelItem = new D2PointModel(
        elementItemId,
        layerItemId,
        centerPoint,
        locSetting.size,
        locSetting.shape,
        locSetting.strokeColor,
        locSetting.alpha,
        locSetting.isEnableScale,
        locSetting.isEnableSelect
      );
      this.items.set(elementModelItem.elementItemId, elementModelItem);
      return elementModelItem;
    }
    deleteModelItem(elementItemId) {
      const elementModelItem = this.items.get(elementItemId);
      if (!elementModelItem) {
        return;
      }
      this.items.delete(elementModelItem.elementItemId);
    }
    quit() {
      super.quit();
      _D2PointModelManager.instance = void 0;
    }
  };

  // src/objects/shapes/primitive2d/D2PointShape.ts
  function buildD2PointShape(layerItemId, centerPoint, optional = {}) {
    const elementModelItem = buildD2PointModel(layerItemId, centerPoint, optional);
    const elementShapeItem = new D2PointShape(elementModelItem);
    return elementShapeItem;
  }
  var D2PointShape = class extends D2ElementShapeItemBase {
    constructor(model) {
      super();
      this.model = model;
      this.refreshRender();
    }
    get elementItemName() {
      return this.model.elementItemName;
    }
    set elementItemName(value) {
      ;
      this.model.elementItemName = value;
      this.refreshRender();
    }
    get centerPoint() {
      return this.model.centerPoint;
    }
    set centerPoint(value) {
      ;
      this.model.centerPoint = value;
      this.refreshRender();
    }
    get size() {
      return this.model.size;
    }
    set size(value) {
      if (value < 0) {
        value = -value;
      }
      ;
      this.model.size = value;
      this.refreshRender();
    }
    get shape() {
      return this.model.shape;
    }
    set shape(value) {
      ;
      this.model.shape = value;
      this.refreshRender();
    }
    get alpha() {
      return this.model.alpha;
    }
    set alpha(value) {
      ;
      this.model.alpha = value;
      this.refreshRender();
    }
    get rotation() {
      return this.model.rotation;
    }
    set rotation(value) {
      ;
      this.model.updateRotation(value);
      this.refreshRender();
    }
    get strokeColor() {
      return this.model.strokeColor;
    }
    set strokeColor(value) {
      ;
      this.model.strokeColor = value;
      this.refreshRender();
    }
    get isEnableScale() {
      return this.model.isEnableScale;
    }
    set isEnableScale(value) {
      ;
      this.model.isEnableScale = value;
      this.refreshRender();
    }
    get isEnableSelect() {
      return this.model.isEnableSelect;
    }
    set isEnableSelect(value) {
      ;
      this.model.isEnableSelect = value;
      this.refreshRender();
    }
    isSelect(x, y) {
      if (!this.isSelectable) {
        return false;
      }
      return this.model.isInGraphical(x, y);
    }
    transform(value) {
      this.centerPoint = this.centerPoint.multiplyMatrix4(value);
      this.refreshRender();
    }
    getType() {
      return "D2Point" /* D2Point */;
    }
    getStatus() {
      return this.status;
    }
    toJSON() {
      const elementModelItem = this.model;
      return {
        type: this.getType(),
        modelType: this.model.modelType,
        status: this.status,
        layerItemId: elementModelItem.layerItemId,
        elementItemId: elementModelItem.elementItemId,
        elementItemName: elementModelItem.elementItemName,
        alpha: elementModelItem.alpha,
        rotation: elementModelItem.rotation,
        isFlipX: elementModelItem.isFlipX,
        isFlipY: elementModelItem.isFlipY,
        strokeColorData: elementModelItem.strokeColor ? elementModelItem.strokeColor.toRGBAJSON() : null,
        strokeWidth: 0,
        bbox2: elementModelItem.bbox2.toJSON(),
        /* ... */
        centerPoint: elementModelItem.centerPoint.toJSON(),
        size: elementModelItem.size,
        shape: elementModelItem.shape,
        isEnableScale: elementModelItem.isEnableScale,
        isEnableSelect: elementModelItem.isEnableSelect
      };
    }
  };

  // src/objects/shapes/manager/primitive2d/D2PointShapeManager.ts
  var D2PointShapeManager = class _D2PointShapeManager extends BaseManager {
    static getInstance() {
      if (_D2PointShapeManager.instance === void 0) {
        _D2PointShapeManager.instance = new _D2PointShapeManager();
      }
      return _D2PointShapeManager.instance;
    }
    constructor() {
      super();
      this._rteeItems = /* @__PURE__ */ new Map();
    }
    createShapeItem(elementItemId, layerItemId, centerPoint, optional = {}) {
      const elementModelItem = D2PointModelManager.getInstance().createModelItem(elementItemId, layerItemId, centerPoint, optional);
      const elementShapeItem = new D2PointShape(elementModelItem);
      const op = this.addCache(elementShapeItem);
      return elementShapeItem;
    }
    deleteShapeItem(elementItemId) {
      const elementShapeItem = this.items.get(elementItemId);
      if (!elementShapeItem) {
        return;
      }
      const op = this.deleteCache(elementItemId);
      if (op === false) {
        return;
      }
      D2PointModelManager.getInstance().deleteModelItem(elementItemId);
      elementShapeItem.setDelete();
    }
    quit() {
      super.quit();
      _D2PointShapeManager.instance = void 0;
    }
    addCache(elementShapeItem) {
      this.items.set(elementShapeItem.model.elementItemId, elementShapeItem);
      const rtreeItem = new RtreeItem(elementShapeItem);
      this._rteeItems.set(elementShapeItem.model.elementItemId, rtreeItem);
      Constant.rtree.insertItemData(RtreeItem.getSimpleRectFromModelBbox2(elementShapeItem), rtreeItem);
      return true;
    }
    deleteCache(elementItemId) {
      const targetShapeItem = this.items.get(elementItemId);
      if (!targetShapeItem) {
        return false;
      }
      const rtreeItem = this._rteeItems.get(elementItemId);
      const deleteResults = Constant.rtree.remove(RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
      if (!deleteResults.length) {
        return false;
      }
      this.items.delete(elementItemId);
      this._rteeItems.delete(elementItemId);
      return true;
    }
  };

  // src/objects/models/primitive2d/D2RectModel.ts
  function createBuildD2RectModelOptionalParam(optional = {}) {
    return __spreadValues({
      strokeWidth: 1,
      strokeColor: new Color(0, 0, 0, 1),
      isFill: false,
      fillColor: new Color(0, 0, 0, 1),
      alpha: 1,
      isSolid: true,
      borderRadius: 0,
      isFixedStrokeWidth: false,
      rotation: 0,
      isFlipX: false,
      isFlipY: false,
      isEnableSelect: true
    }, optional);
  }
  function buildD2RectModel(layerItemId, position, width, height, optional = {}) {
    const locSetting = createBuildD2RectModelOptionalParam(optional);
    const elementItemId = Constant.globalIdenManager.getElementIden();
    const elementModelItem = new D2RectModel(
      elementItemId,
      layerItemId,
      position,
      width,
      height,
      locSetting.strokeWidth,
      locSetting.strokeColor,
      locSetting.isFill,
      locSetting.fillColor,
      locSetting.alpha,
      locSetting.isSolid,
      locSetting.borderRadius,
      locSetting.isFixedStrokeWidth,
      locSetting.rotation,
      locSetting.isFlipX,
      locSetting.isFlipY,
      locSetting.isEnableSelect
    );
    return elementModelItem;
  }
  var D2RectModel = class extends D2ElementModelItemBase {
    constructor(elementItemId, layerItemId, position, width, height, strokeWidth = 1, strokeColor = new Color(0, 0, 0, 1), isFill = false, fillColor = new Color(0, 0, 0, 1), alpha = 1, isSolid = true, borderRadius = 0, isFixedStrokeWidth = false, rotation = 0, isFlipX = false, isFlipY = false, isEnableSelect = true) {
      super(elementItemId, layerItemId);
      this._width = width;
      this._height = height;
      this._strokeWidth = strokeWidth;
      this._strokeColor = strokeColor;
      this._isFill = isFill;
      this._fillColor = fillColor;
      this._borderRadius = borderRadius;
      this._isSolid = isSolid;
      const { segSize, gapSize } = D2DashedSegUtils.updateDashedSegProfile("ROUND" /* ROUND */, this._strokeWidth);
      this._segSize = segSize;
      this._gapSize = gapSize;
      this._fixedStrokeWidth = isFixedStrokeWidth;
      this.modelType = "D2Rect" /* D2Rect */;
      this.position = position;
      this.rotation = rotation;
      this.isFlipX = isFlipX;
      this.isFlipY = isFlipY;
      this.alpha = alpha;
      this.isEnableSelect = isEnableSelect;
      this.bbox2 = BBox2Creator.createD2RectBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    get width() {
      return this._width;
    }
    set width(value) {
      this._width = value;
      this.bbox2 = BBox2Creator.createD2RectBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    get height() {
      return this._height;
    }
    set height(value) {
      this._height = value;
      this.bbox2 = BBox2Creator.createD2RectBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    get strokeWidth() {
      return this._strokeWidth;
    }
    set strokeWidth(value) {
      this._strokeWidth = value;
      this.bbox2 = BBox2Creator.createD2RectBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    get strokeColor() {
      return this._strokeColor;
    }
    set strokeColor(value) {
      this._strokeColor = value;
    }
    get isFill() {
      return this._isFill;
    }
    set isFill(value) {
      this._isFill = value;
    }
    get fillColor() {
      return this._fillColor;
    }
    set fillColor(value) {
      this._fillColor = value;
    }
    get borderRadius() {
      return this._borderRadius;
    }
    set borderRadius(value) {
      this._borderRadius = value;
    }
    get isSolid() {
      return this._isSolid;
    }
    set isSolid(value) {
      this._isSolid = value;
    }
    get segSize() {
      return this._segSize;
    }
    set segSize(value) {
      this._segSize = value;
    }
    get gapSize() {
      return this._gapSize;
    }
    set gapSize(value) {
      this._gapSize = value;
    }
    get isFixedStrokeWidth() {
      return this._fixedStrokeWidth;
    }
    set isFixedStrokeWidth(value) {
      this._fixedStrokeWidth = value;
    }
    get leftUp() {
      return Vector2.ORIGIN.multiplyMatrix4(this.matrix);
    }
    get rightUp() {
      return Vector2.ORIGIN.add(new Vector2(this.width, 0)).multiplyMatrix4(this.matrix);
    }
    get rightDown() {
      return Vector2.ORIGIN.add(new Vector2(this.width, -this.height)).multiplyMatrix4(this.matrix);
    }
    get leftDown() {
      return Vector2.ORIGIN.add(new Vector2(0, -this.height)).multiplyMatrix4(this.matrix);
    }
    getBBox2() {
      return this.bbox2;
    }
    updatePosition(value) {
      super.position = value;
      this.bbox2 = BBox2Creator.createD2RectBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateRotation(value) {
      super.rotation = value;
      this.bbox2 = BBox2Creator.createD2RectBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateIsFlipX(value) {
      super.isFlipX = value;
      this.bbox2 = BBox2Creator.createD2RectBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateIsFlipY(value) {
      super.isFlipY = value;
      this.bbox2 = BBox2Creator.createD2RectBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
    }
    updateBBox2() {
      this.bbox2 = BBox2Creator.createD2RectBbox2(this.leftUp, this.rightUp, this.leftDown, this.rightDown);
      return this.bbox2;
    }
    isInGraphical(x, y) {
      if (this.isEnableSelect === false) {
        return false;
      }
      return D2RectToolkit.isPointOnRect([this.leftUp, this.rightUp, this.rightDown, this.leftDown], 0, new Vector2(x, y));
    }
  };

  // src/objects/shapes/primitive2d/D2RectShape.ts
  function buildD2RectShape(layerItemId, position, width, height, optional = {}) {
    const elementModelItem = buildD2RectModel(layerItemId, position, width, height, optional);
    const elementShapeItem = new D2RectShape(elementModelItem);
    return elementShapeItem;
  }
  var D2RectShape = class extends D2ElementShapeItemBase {
    constructor(model) {
      super();
      this.model = model;
      this.refreshRender();
    }
    get elementItemName() {
      return this.model.elementItemName;
    }
    set elementItemName(value) {
      ;
      this.model.elementItemName = value;
      this.refreshRender();
    }
    get position() {
      return this.model.position;
    }
    set position(value) {
      ;
      this.model.updatePosition(value);
      this.refreshRender();
    }
    get width() {
      return this.model.width;
    }
    set width(value) {
      ;
      this.model.width = value;
      this.refreshRender();
    }
    get height() {
      return this.model.height;
    }
    set height(value) {
      ;
      this.model.height = value;
      this.refreshRender();
    }
    get alpha() {
      return this.model.alpha;
    }
    set alpha(value) {
      ;
      this.model.alpha = value;
      this.refreshRender();
    }
    get rotation() {
      return this.model.rotation;
    }
    set rotation(value) {
      ;
      this.model.updateRotation(value);
      this.refreshRender();
    }
    get isFlipX() {
      return this.model.isFlipX;
    }
    set isFlipX(value) {
      ;
      this.model.updateIsFlipX(value);
      this.refreshRender();
    }
    get isFlipY() {
      return this.model.isFlipY;
    }
    set isFlipY(value) {
      ;
      this.model.updateIsFlipY(value);
      this.refreshRender();
    }
    get strokeWidth() {
      return this.model.strokeWidth;
    }
    set strokeWidth(value) {
      ;
      this.model.strokeWidth = value;
      this.refreshRender();
    }
    get strokeColor() {
      return this.model.strokeColor;
    }
    set strokeColor(value) {
      ;
      this.model.strokeColor = value;
      this.refreshRender();
    }
    get isFill() {
      return this.model.isFill;
    }
    set isFill(value) {
      ;
      this.model.isFill = value;
      this.refreshRender();
    }
    get fillColor() {
      return this.model.fillColor;
    }
    set fillColor(value) {
      ;
      this.model.fillColor = value;
      this.refreshRender();
    }
    get borderRadius() {
      return this.model.borderRadius;
    }
    set borderRadius(value) {
      ;
      this.model.borderRadius = value;
      this.refreshRender();
    }
    get isSolid() {
      return this.model.isSolid;
    }
    set isSolid(value) {
      ;
      this.model.isSolid = value;
      this.refreshRender();
    }
    get segSize() {
      return this.model.segSize;
    }
    set segSize(value) {
      ;
      this.model.segSize = value;
      this.refreshRender();
    }
    get gapSize() {
      return this.model.gapSize;
    }
    set gapSize(value) {
      ;
      this.model.gapSize = value;
      this.refreshRender();
    }
    get isFixedStrokeWidth() {
      return this.model.isFixedStrokeWidth;
    }
    set isFixedStrokeWidth(value) {
      ;
      this.model.isFixedStrokeWidth = value;
      this.refreshRender();
    }
    get leftUp() {
      return this.model.leftUp;
    }
    get rightUp() {
      return this.model.rightUp;
    }
    get leftDown() {
      return this.model.leftDown;
    }
    get rightDown() {
      return this.model.rightDown;
    }
    isSelect(x, y) {
      if (!this.isSelectable) {
        return false;
      }
      return this.model.isInGraphical(x, y);
    }
    transform(value) {
      this.position = this.position.multiplyMatrix4(value);
      this.model.updateBBox2();
      this.refreshRender();
    }
    updateBBox2() {
      ;
      this.model.updateBBox2();
      this.refreshRender();
    }
    getType() {
      return "D2Rect" /* D2Rect */;
    }
    getStatus() {
      return this.status;
    }
    toJSON() {
      const elementModelItem = this.model;
      return {
        type: this.getType(),
        modelType: this.model.modelType,
        status: this.status,
        layerItemId: elementModelItem.layerItemId,
        elementItemId: elementModelItem.elementItemId,
        elementItemName: elementModelItem.elementItemName,
        alpha: elementModelItem.alpha,
        rotation: elementModelItem.rotation,
        isFlipX: elementModelItem.isFlipX,
        isFlipY: elementModelItem.isFlipY,
        strokeColorData: elementModelItem.strokeColor ? elementModelItem.strokeColor.toRGBAJSON() : null,
        strokeWidth: elementModelItem.strokeWidth,
        bbox2: elementModelItem.bbox2.toJSON(),
        /* ... */
        position: elementModelItem.position.toJSON(),
        width: elementModelItem.width,
        height: elementModelItem.height,
        fillColorData: elementModelItem.isFill && elementModelItem.fillColor ? elementModelItem.fillColor.toRGBAJSON() : null,
        isFill: elementModelItem.isFill,
        borderRadius: elementModelItem.borderRadius,
        isSolid: elementModelItem.isSolid,
        segSize: elementModelItem.segSize,
        gapSize: elementModelItem.gapSize,
        isFixedStrokeWidth: elementModelItem.isFixedStrokeWidth,
        leftUp: elementModelItem.leftUp.toJSON(),
        rightUp: elementModelItem.rightUp.toJSON(),
        leftDown: elementModelItem.leftDown.toJSON(),
        rightDown: elementModelItem.rightDown.toJSON()
      };
    }
  };

  // src/objects/models/manager/primitive2d/D2RectModelManager.ts
  var D2RectModelManager = class _D2RectModelManager extends BaseManager {
    static getInstance() {
      if (_D2RectModelManager.instance === void 0) {
        _D2RectModelManager.instance = new _D2RectModelManager();
      }
      return _D2RectModelManager.instance;
    }
    constructor() {
      super();
    }
    createModelItem(elementItemId, layerItemId, position, width, height, optional = {}) {
      const locSetting = createBuildD2RectModelOptionalParam(optional);
      const elementModelItem = new D2RectModel(
        elementItemId,
        layerItemId,
        position,
        width,
        height,
        locSetting.strokeWidth,
        locSetting.strokeColor,
        locSetting.isFill,
        locSetting.fillColor,
        locSetting.alpha,
        locSetting.isSolid,
        locSetting.borderRadius,
        locSetting.isFixedStrokeWidth,
        locSetting.rotation,
        locSetting.isFlipX,
        locSetting.isFlipY,
        locSetting.isEnableSelect
      );
      this.items.set(elementModelItem.elementItemId, elementModelItem);
      return elementModelItem;
    }
    deleteModelItem(elementItemId) {
      const elementModelItem = this.items.get(elementItemId);
      if (!elementModelItem) {
        return;
      }
      this.items.delete(elementModelItem.elementItemId);
    }
    quit() {
      super.quit();
      _D2RectModelManager.instance = void 0;
    }
  };

  // src/objects/shapes/manager/primitive2d/D2RectShapeManager.ts
  var D2RectShapeManager = class _D2RectShapeManager extends BaseManager {
    static getInstance() {
      if (_D2RectShapeManager.instance === void 0) {
        _D2RectShapeManager.instance = new _D2RectShapeManager();
      }
      return _D2RectShapeManager.instance;
    }
    constructor() {
      super();
      this._rteeItems = /* @__PURE__ */ new Map();
    }
    createShapeItem(elementItemId, layerItemId, position, width, height, optional = {}) {
      const elementModelItem = D2RectModelManager.getInstance().createModelItem(
        elementItemId,
        layerItemId,
        position,
        width,
        height,
        optional
      );
      const elementShapeItem = new D2RectShape(elementModelItem);
      const op = this.addCache(elementShapeItem);
      return elementShapeItem;
    }
    deleteShapeItem(elementItemId) {
      const elementShapeItem = this.items.get(elementItemId);
      if (!elementShapeItem) {
        return;
      }
      const op = this.deleteCache(elementItemId);
      if (op === false) {
        return;
      }
      D2RectModelManager.getInstance().deleteModelItem(elementItemId);
      elementShapeItem.setDelete();
    }
    quit() {
      super.quit();
      _D2RectShapeManager.instance = void 0;
    }
    addCache(elementShapeItem) {
      this.items.set(elementShapeItem.model.elementItemId, elementShapeItem);
      const rtreeItem = new RtreeItem(elementShapeItem);
      this._rteeItems.set(elementShapeItem.model.elementItemId, rtreeItem);
      Constant.rtree.insertItemData(RtreeItem.getSimpleRectFromModelBbox2(elementShapeItem), rtreeItem);
      return true;
    }
    deleteCache(elementItemId) {
      const targetShapeItem = this.items.get(elementItemId);
      if (!targetShapeItem) {
        return false;
      }
      const rtreeItem = this._rteeItems.get(elementItemId);
      const deleteResults = Constant.rtree.remove(RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
      if (!deleteResults.length) {
        return false;
      }
      this.items.delete(elementItemId);
      this._rteeItems.delete(elementItemId);
      return true;
    }
  };

  // src/utils/Helper.ts
  var Helper = class _Helper {
    /**
     * 获取画布内所有绘制图层
     */
    static getAllDrawLayerShapes() {
      const allDrawLayers = Array.from(DrawLayerShapeManager.getInstance().items.values());
      return allDrawLayers.filter((item) => {
        return item.model.layerItemType === 2 /* ContentPlane */;
      });
    }
    /**
     * 获取画布内所有图元
     */
    static getAllElementShapes() {
      const targetShapes = [
        ...D2LineShapeManager.getInstance().items.values(),
        ...D2CircleShapeManager.getInstance().items.values(),
        ...D2PointShapeManager.getInstance().items.values(),
        ...D2ArcShapeManager.getInstance().items.values(),
        ...D2TextShapeManager.getInstance().items.values(),
        ...D2ImageShapeManager.getInstance().items.values(),
        ...D2RectShapeManager.getInstance().items.values()
      ];
      return targetShapes;
    }
    /**
     * 获取画布内指定图元 ID 对应的图元
     */
    static getElementShapeItemById(elementItemId) {
      const allElementShapes = _Helper.getAllElementShapes();
      for (let i = 0; i < allElementShapes.length; i++) {
        if (allElementShapes[i].elementItemId === elementItemId) {
          return allElementShapes[i];
        }
      }
      return null;
    }
    /**
     * 获取画布内指定 ShapeType 类型的图元
     */
    static getMarkedElementShapeItem(elementItemId, markShapeType) {
      if (markShapeType === "D2Line" /* D2Line */) {
        return D2LineShapeManager.getInstance().getItemById(elementItemId);
      }
      if (markShapeType === "D2Circle" /* D2Circle */) {
        return D2CircleShapeManager.getInstance().getItemById(elementItemId);
      }
      if (markShapeType === "D2Point" /* D2Point */) {
        return D2PointShapeManager.getInstance().getItemById(elementItemId);
      }
      if (markShapeType === "D2Arc" /* D2Arc */) {
        return D2ArcShapeManager.getInstance().getItemById(elementItemId);
      }
      if (markShapeType === "D2Text" /* D2Text */) {
        return D2TextShapeManager.getInstance().getItemById(elementItemId);
      }
      if (markShapeType === "D2Image" /* D2Image */) {
        return D2ImageShapeManager.getInstance().getItemById(elementItemId);
      }
      if (markShapeType === "D2Rect" /* D2Rect */) {
        return D2RectShapeManager.getInstance().getItemById(elementItemId);
      }
      return null;
    }
    /**
     * 删除画布内指定图元
     */
    static deleteElementShapeItem(elementItem) {
      _Helper.deleteMarkedElementShapeItem(elementItem.model.elementItemId, elementItem.getType());
    }
    /**
     * 删除画布内指定 ShapeType 类型的图元
     */
    static deleteMarkedElementShapeItem(elementItemId, markShapeType) {
      if (markShapeType === "D2Line" /* D2Line */) {
        D2LineShapeManager.getInstance().deleteShapeItem(elementItemId);
        return;
      } else if (markShapeType === "D2Circle" /* D2Circle */) {
        D2CircleShapeManager.getInstance().deleteShapeItem(elementItemId);
        return;
      } else if (markShapeType === "D2Point" /* D2Point */) {
        D2PointShapeManager.getInstance().deleteShapeItem(elementItemId);
        return;
      } else if (markShapeType === "D2Arc" /* D2Arc */) {
        D2ArcShapeManager.getInstance().deleteShapeItem(elementItemId);
        return;
      } else if (markShapeType === "D2Text" /* D2Text */) {
        D2TextShapeManager.getInstance().deleteShapeItem(elementItemId);
        return;
      } else if (markShapeType === "D2Image" /* D2Image */) {
        D2ImageShapeManager.getInstance().deleteShapeItem(elementItemId);
        return;
      } else if (markShapeType === "D2Rect" /* D2Rect */) {
        D2RectShapeManager.getInstance().deleteShapeItem(elementItemId);
        return;
      }
    }
    /**
     * 检测传入的图元 ID 是否合法
     */
    static checkDrawLayer(drawLayerItemId) {
      const allDrawLayers = _Helper.getAllDrawLayerShapes();
      const checkResult = { code: 0, title: void 0 };
      for (let i = 0; i < allDrawLayers.length; i++) {
        if (allDrawLayers[i].model.layerItemId === drawLayerItemId) {
          checkResult.title = allDrawLayers[i].model.layerItemName;
          if (allDrawLayers[i].killed) {
            checkResult.code = -1;
            return checkResult;
          }
          return checkResult;
        }
      }
      checkResult.code = -1;
      return checkResult;
    }
  };

  // src/config/OperationProfile.ts
  var EOperationAction = /* @__PURE__ */ ((EOperationAction2) => {
    EOperationAction2["HISTORY_UNDO"] = "HISTORY_UNDO";
    EOperationAction2["HISTORY_REDO"] = "HISTORY_REDO";
    EOperationAction2["CREATE_ELEMENT"] = "CREATE_ELEMENT";
    EOperationAction2["MODIFY_ELEMENT"] = "MODIFY_ELEMENT";
    EOperationAction2["DELETE_ELEMENT"] = "DELETE_ELEMENT";
    EOperationAction2["REFRESH_DRAWLAYER"] = "REFRESH_DRAWLAYER";
    EOperationAction2["CREATED_DRAWLAYER"] = "CREATED_DRAWLAYER";
    EOperationAction2["DELETED_DRAWLAYER"] = "DELETED_DRAWLAYER";
    EOperationAction2["SWITCH_ACTIVE_DRAWLAYER"] = "SWITCH_ACTIVE_DRAWLAYER";
    EOperationAction2["CLEAR_ALL_ACTIVE_DRAWLAYER"] = "CLEAR_ALL_ACTIVE_DRAWLAYER";
    EOperationAction2["CLEAR_ALL_DRAWLAYER_ELEMENTS"] = "CLEAR_ALL_DRAWLAYER_ELEMENTS";
    EOperationAction2["IMPORT_DATASTR_START"] = "IMPORT_DATASTR_START";
    EOperationAction2["IMPORT_DATASTR_COMPLETE"] = "IMPORT_DATASTR_COMPLETE";
    EOperationAction2["EXPORT_DATASTR_START"] = "IMPORT_DATASTR_START";
    EOperationAction2["EXPORT_DATASTR_COMPLETE"] = "IMPORT_DATASTR_COMPLETE";
    return EOperationAction2;
  })(EOperationAction || {});

  // src/manager/EventsManager.ts
  var EPointerEventName = /* @__PURE__ */ ((EPointerEventName3) => {
    EPointerEventName3["POINTER_LEFTDOWN"] = "POINTER_LEFTDOWN";
    return EPointerEventName3;
  })(EPointerEventName || {});
  var EventsManager = class _EventsManager extends BaseManager {
    static getInstance() {
      if (_EventsManager.instance === void 0) {
        _EventsManager.instance = new _EventsManager();
      }
      return _EventsManager.instance;
    }
    constructor() {
      super();
      this._pointerLeftDownEvents = /* @__PURE__ */ new Map();
    }
    triggerEventHandlers(elementItemId, eventName) {
      const eventTypeMap = this.getEventTypeMap(eventName);
      if (!eventTypeMap) {
        throw new Error(`not support event: ${eventName}.`);
      }
      const eventMap = eventTypeMap.get(elementItemId);
      if (typeof eventMap === "undefined") {
        return null;
      }
      for (let [eventId, handler] of eventMap) {
        handler(elementItemId, eventId);
      }
    }
    appendEventItem(elementItemId, eventName, callback) {
      const eventTypeMap = this.getEventTypeMap(eventName);
      if (!eventTypeMap) {
        throw new Error(`not support event: ${eventName}.`);
      }
      let eventMap = eventTypeMap.get(elementItemId);
      if (typeof eventMap === "undefined") {
        eventMap = /* @__PURE__ */ new Map();
      }
      const eventHandlerId = Constant.globalIdenManager.getEventHandlerIden();
      eventMap.set(eventHandlerId, callback);
      eventTypeMap.set(elementItemId, eventMap);
      return eventHandlerId;
    }
    removeEventItem(elementItemId, eventName, eventHandlerId) {
      const eventTypeMap = this.getEventTypeMap(eventName);
      if (!eventTypeMap) {
        throw new Error(`not support event: ${eventName}.`);
      }
      let eventMap = eventTypeMap.get(elementItemId);
      if (typeof eventMap === "undefined") {
        return;
      }
      eventMap.delete(eventHandlerId);
    }
    removeAllEvents(elementItemId) {
      let allEventMaps = this.getAllEventTypeMaps();
      for (let i = 0; i < allEventMaps.length; i++) {
        const eventMap = allEventMaps[i].get(elementItemId);
        if (typeof eventMap !== "undefined") {
          eventMap.clear();
          allEventMaps[i].delete(elementItemId);
        }
      }
    }
    getEventTypeMap(eventName) {
      let eventMap = null;
      switch (eventName) {
        case "POINTER_LEFTDOWN" /* POINTER_LEFTDOWN */: {
          eventMap = this._pointerLeftDownEvents;
          break;
        }
      }
      return eventMap;
    }
    getAllEventTypeMaps() {
      return [this._pointerLeftDownEvents];
    }
    quit() {
      this._pointerLeftDownEvents.clear();
      this._pointerLeftDownEvents = void 0;
      super.quit();
      _EventsManager.instance = void 0;
    }
  };

  // src/engine/common/Camera.ts
  var Camera = class _Camera {
    static getInstance() {
      if (_Camera.instance === void 0) {
        _Camera.instance = new _Camera(1920, 1080);
      }
      return _Camera.instance;
    }
    constructor(width = 1920, height = 1080) {
      this._width = width;
      this._height = height;
      this._isNeedUpdate = false;
      this._lookForEyePosition = new Vector3(0, 0, 0.1);
      this._lookForAtPosition = new Vector3(0, 0, 0);
      this._projectionType = null;
      this._orthoProjection = {
        left: -1,
        right: 1,
        bottom: -1,
        top: 1,
        near: -100,
        far: 100
      };
      this._persProjection = {
        fovy: 100,
        aspect: 1,
        near: 1,
        far: 50
      };
      this._rectProjectionMatrix4 = Matrix4.ORIGIN;
      this._viewMatrix4 = Matrix4.ORIGIN;
      this._scaleRatio = 1;
    }
    get width() {
      return this._width;
    }
    get height() {
      return this._height;
    }
    setProjectionType(projectionType) {
      if (projectionType !== null) {
        this._projectionType = projectionType;
      }
    }
    updateRect(width, height) {
      this._width = width;
      this._height = height;
      this._isNeedUpdate = true;
      this._orthoProjection.left = -width / 2;
      this._orthoProjection.right = width / 2;
      this._orthoProjection.top = height / 2;
      this._orthoProjection.bottom = -height / 2;
    }
    getCenterSourceNativePixelPosition() {
      return new Vector3(this.width / 2, -this.height / 2, 0);
    }
    getZoomRatio() {
      if (this._projectionType === "ORHT" /* ORTH */) {
        return this._scaleRatio;
      }
      return Math.sqrt(this._viewMatrix4.data[0] * this._viewMatrix4.data[0] + this._viewMatrix4.data[1] * this._viewMatrix4.data[1]);
    }
    getZoomMatrix4() {
      const scale = this.getZoomRatio();
      return CanvasMatrix4.setScaleByValue(scale, scale, scale);
    }
    getInverseZoomMatrix4() {
      const scale = this.getZoomRatio();
      return CanvasMatrix4.setScaleByValue(1 / scale, 1 / scale, 1 / scale);
    }
    setZoomRatio(value) {
      if (this._projectionType === "ORHT" /* ORTH */) {
        this._scaleRatio = value;
      }
      this._isNeedUpdate = true;
    }
    setMoveIncrement(vector3) {
      this._lookForEyePosition.x -= vector3.x;
      this._lookForEyePosition.y -= vector3.y;
      this._lookForAtPosition.x -= vector3.x;
      this._lookForAtPosition.y -= vector3.y;
      this._isNeedUpdate = true;
    }
    setMoveTo(vector3) {
      this._lookForEyePosition.x = -vector3.x;
      this._lookForEyePosition.y = -vector3.y;
      this._lookForAtPosition.x = -vector3.x;
      this._lookForAtPosition.y = -vector3.y;
      this._isNeedUpdate = true;
    }
    /**
     * 获取视线矩阵
     */
    getLookMatrix4() {
      return CanvasMatrix4.setLookAt(
        new Vector3(this._lookForEyePosition.x, this._lookForEyePosition.y, this._lookForEyePosition.z),
        new Vector3(this._lookForAtPosition.x, this._lookForAtPosition.y, this._lookForAtPosition.z),
        new Vector3(0, 1, 0)
      );
    }
    /**
     * 获取透视矩阵
     */
    getProjectionMatrix4() {
      let projectionMatrix4 = null;
      if (this._projectionType === "ORHT" /* ORTH */) {
        projectionMatrix4 = this.getRectProjectionMatrix4();
        const scaleMatrix4 = CanvasMatrix4.setScaleByValue(this._scaleRatio, this._scaleRatio, this._scaleRatio);
        projectionMatrix4 = projectionMatrix4.multiply4(scaleMatrix4);
      } else {
        projectionMatrix4 = CanvasMatrix4.setPerspective(
          this._persProjection.fovy,
          this._persProjection.aspect,
          this._persProjection.near,
          this._persProjection.far
        );
      }
      return projectionMatrix4;
    }
    /**
     * 获取变换矩阵
     */
    getViewMatrix4(prevUpdate = false) {
      if (prevUpdate) {
        this._isNeedUpdate = true;
        this.updateViewMatrix4();
      }
      return this._viewMatrix4;
    }
    /**
     * 获取 Canvas 透视矩阵
     */
    getRectProjectionMatrix4() {
      return CanvasMatrix4.setOrtho(
        this._orthoProjection.left,
        this._orthoProjection.right,
        this._orthoProjection.bottom,
        this._orthoProjection.top,
        this._orthoProjection.near,
        this._orthoProjection.far
      );
    }
    quit() {
      _Camera.instance = void 0;
    }
    updateViewMatrix4() {
      if (this._isNeedUpdate) {
        const lookMatrix4 = this.getLookMatrix4();
        const projectionMatrix4 = this.getProjectionMatrix4();
        this._viewMatrix4 = lookMatrix4.multiply4(projectionMatrix4);
        this._isNeedUpdate = false;
      }
    }
  };

  // src/engine/common/InsConfig.ts
  var InsConfig = class {
  };
  InsConfig.DPI = [100, 100];

  // src/utils/OutMessage.ts
  var OutProfileMessage = class _OutProfileMessage {
    static dispatchInputsChangeMessage(inputInfo) {
      Constant.messageTool.messageBus.publish("INPUTS_CHANGE" /* INPUTS_CHANGE */, _OutProfileMessage.createInputsData(inputInfo));
    }
    static createInputsData(inputInfo) {
      const data = inputInfo.toJSON();
      data.canvasZoom = Camera.getInstance().getZoomRatio();
      return data;
    }
    static dispatchCanvasProfileChangeMessage() {
      Constant.messageTool.messageBus.publish("CANVASPROFILE_CHANGE" /* CANVASPROFILE_CHANGE */, _OutProfileMessage.createCanvasProfileData({}));
    }
    static createCanvasProfileData(params = {}) {
      return {
        zoomRatio: Camera.getInstance().getZoomRatio(),
        canvasWidth: Camera.getInstance().width,
        canvasHeight: Camera.getInstance().height,
        DPI: InsConfig.DPI,
        fpsCount: Constant.fpsCount.getFPSCount(),
        diffFreshInterval: Constant.fpsCount.getDiffFreshInterval()
      };
    }
    static dispatchOperationProfileChangeMessage(action, params = {}) {
      if (!Constant.systemConfig.enbaleOperationMessagesNotify) {
        return;
      }
      Constant.messageTool.messageBus.publish("OPERATION_CHANGE" /* OPERATION_CHANGE */, _OutProfileMessage.createOperationProfileData(action, params));
    }
    static createOperationProfileData(action, params = {}) {
      return __spreadValues({
        action
      }, params);
    }
  };

  // src/controller/D2ElementController.ts
  var D2ElementController = class extends BaseInterface {
    constructor() {
      super();
    }
    /**
     * 获取画布内所有图元结果
     */
    getAllD2ElementShapeResults() {
      return Helper.getAllElementShapes().map((elementItem) => {
        return elementItem.toJSON();
      });
    }
    /**
     * 获取画布内所有被选中的图元结果
     */
    getAllSelectedD2ElementShapeResults() {
      return Constant.selectManager.getAllSelectItems().map((elementItem) => {
        return elementItem.toJSON();
      });
    }
    /**
     * 创建 D2-Line-Shape
     */
    createD2LineElementShapeItem(layerItemId, startPoint, endPoint, optional = {}) {
      const checkResult = Helper.checkDrawLayer(layerItemId);
      if (checkResult.code !== 0) {
        console.error(`error: target layer does not exist or has been deleted.`);
        return null;
      }
      const elementItemId = Constant.globalIdenManager.getElementIden();
      const targetShapeItem = D2LineShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        startPoint,
        endPoint,
        optional
      );
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      return targetShapeItem.model.elementItemId;
    }
    /**
     * 创建 D2-Circle-Shape
     */
    createD2CircleElementShapeItem(layerItemId, centerPoint, optional = {}) {
      const checkResult = Helper.checkDrawLayer(layerItemId);
      if (checkResult.code !== 0) {
        console.error(`error: target layer does not exist or has been deleted.`);
        return null;
      }
      const elementItemId = Constant.globalIdenManager.getElementIden();
      const targetShapeItem = D2CircleShapeManager.getInstance().createShapeItem(elementItemId, layerItemId, centerPoint, optional);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      return targetShapeItem.model.elementItemId;
    }
    /**
     * 创建 D2-Point-Shape
     */
    createD2PointElementShapeItem(layerItemId, centerPoint, optional = {}) {
      const checkResult = Helper.checkDrawLayer(layerItemId);
      if (checkResult.code !== 0) {
        console.error(`error: target layer does not exist or has been deleted.`);
        return null;
      }
      const elementItemId = Constant.globalIdenManager.getElementIden();
      const targetShapeItem = D2PointShapeManager.getInstance().createShapeItem(elementItemId, layerItemId, centerPoint, optional);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      return targetShapeItem.model.elementItemId;
    }
    /**
     * 创建 D2-Arc-Shape
     */
    createD2ArcElementShapeItem(layerItemId, centerPoint, radius, startRadian, endRadian, sweep, optional = {}) {
      const checkResult = Helper.checkDrawLayer(layerItemId);
      if (checkResult.code !== 0) {
        console.error(`error: target layer does not exist or has been deleted.`);
        return null;
      }
      const elementItemId = Constant.globalIdenManager.getElementIden();
      const targetShapeItem = D2ArcShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        centerPoint,
        radius,
        startRadian,
        endRadian,
        sweep,
        optional
      );
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      return targetShapeItem.model.elementItemId;
    }
    /**
     * 创建 D2-Image-Shape
     */
    createD2ImageElementItem(layerItemId, position, fileHashUuid, imageDataURL, width, height, optional = {}) {
      const checkResult = Helper.checkDrawLayer(layerItemId);
      if (checkResult.code !== 0) {
        console.error(`error: target layer does not exist or has been deleted.`);
        return null;
      }
      const elementItemId = Constant.globalIdenManager.getElementIden();
      const targetShapeItem = D2ImageShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        position,
        fileHashUuid,
        imageDataURL,
        width,
        height,
        optional
      );
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      return targetShapeItem.model.elementItemId;
    }
    /**
     * 创建 D2-Rect-Shape
     */
    createD2RectElementShapeItem(layerItemId, position, width, height, optional = {}) {
      const checkResult = Helper.checkDrawLayer(layerItemId);
      if (checkResult.code !== 0) {
        console.error(`error: target layer does not exist or has been deleted.`);
        return null;
      }
      const elementItemId = Constant.globalIdenManager.getElementIden();
      const targetShapeItem = D2RectShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        position,
        width,
        height,
        optional
      );
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      return targetShapeItem.model.elementItemId;
    }
    /**
     * 获取图元 JSON 数据
     */
    getD2ElementShapeItemJSONData(elementItemId, markShapeType) {
      let targetElement = null;
      if (!markShapeType) {
        targetElement = Helper.getAllElementShapes().filter((elementItem) => {
          return elementItem.model.elementItemId === elementItemId;
        })[0];
      } else {
        targetElement = Helper.getMarkedElementShapeItem(elementItemId, markShapeType);
      }
      if (!targetElement) {
        return null;
      }
      if (targetElement instanceof D2TextShape) {
        const jsonData = targetElement.toJSON();
        return __spreadProps(__spreadValues({}, jsonData), {
          vertexData: void 0
        });
      }
      return targetElement.toJSON();
    }
    /**
     * 设置图元状态 - 显示/非显示
     */
    setD2ElementShapeItemVisible(elementItemId, visible, markShapeType) {
      let targetElement = null;
      if (!markShapeType) {
        targetElement = Helper.getAllElementShapes().filter((elementItem) => {
          return elementItem.model.elementItemId === elementItemId;
        })[0];
      } else {
        targetElement = Helper.getMarkedElementShapeItem(elementItemId, markShapeType);
      }
      if (!targetElement) {
        return;
      }
      if (visible) {
        targetElement.setVisible();
      } else {
        targetElement.setUnVisible();
      }
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
    }
    /**
     * 设置图元状态 - 高亮/非高亮
     */
    setD2ElementShapeItemHightlight(elementItemId, hightlight, markShapeType) {
      let targetElement = null;
      if (!markShapeType) {
        targetElement = Helper.getAllElementShapes().filter((elementItem) => {
          return elementItem.model.elementItemId === elementItemId;
        })[0];
      } else {
        targetElement = Helper.getMarkedElementShapeItem(elementItemId, markShapeType);
      }
      if (!targetElement) {
        return;
      }
      if (hightlight) {
        targetElement.setHightlight();
      } else {
        targetElement.setUnHightlight();
      }
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
    }
    /**
     * 更新图元属性
     */
    updateD2ElementShapeItemAttrByJSONData(elementItemId, jsonData, markShapeType) {
      let targetElement = null;
      if (!markShapeType) {
        targetElement = Helper.getAllElementShapes().filter((elementItem) => {
          return elementItem.model.elementItemId === elementItemId;
        })[0];
      } else {
        targetElement = Helper.getMarkedElementShapeItem(elementItemId, markShapeType);
      }
      if (!targetElement) {
        return;
      }
      const allKeys = Object.keys(jsonData);
      for (let i = 0; i < allKeys.length; i++) {
        const key = allKeys[i];
        if (typeof targetElement[key] === "undefined") {
          continue;
        }
        switch (key) {
          case "isFlipX" /* IS_FILP_X */: {
            const iTargetElement = targetElement;
            iTargetElement.isFlipX = jsonData[key];
            break;
          }
          case "isFlipY" /* IS_FILP_Y */: {
            const iTargetElement = targetElement;
            iTargetElement.isFlipY = jsonData[key];
            break;
          }
          case "rotation" /* ROTATION */: {
            const iTargetElement = targetElement;
            iTargetElement.rotation = jsonData[key];
            break;
          }
          case "borderRadius" /* BORDER_RADIUS */: {
            const iTargetElement = targetElement;
            iTargetElement.borderRadius = jsonData[key];
            break;
          }
          case "strokeColor" /* STROKE_COLOR */: {
            const iTargetElement = targetElement;
            iTargetElement.strokeColor = jsonData[key];
            break;
          }
          case "fillColor" /* FILL_COLOR */: {
            const iTargetElement = targetElement;
            if (jsonData[key] === void 0 || jsonData[key] === null) {
              iTargetElement.fillColor = Color.createByAlpha(0);
              iTargetElement.isFill = false;
            } else {
              iTargetElement.fillColor = jsonData[key];
              iTargetElement.isFill = true;
            }
            break;
          }
          case "lineCap" /* LINE_CAP */: {
            const iTargetElement = targetElement;
            iTargetElement.lineCap = jsonData[key];
            break;
          }
          case "isSolid" /* IS_SOLID */: {
            const iTargetElement = targetElement;
            iTargetElement.isSolid = jsonData[key];
            break;
          }
          case "elementItemName" /* ELEMENT_ITEM_NAME */: {
            const iTargetElement = targetElement;
            iTargetElement.elementItemName = jsonData[key];
            break;
          }
          case "position" /* POSITION */: {
            const iTargetElement = targetElement;
            iTargetElement.position = jsonData[key];
            break;
          }
          default: {
            console.warn("unkown shape attr: ", key);
          }
        }
        Constant.selectManager.clearSelectItemById(targetElement.elementItemId);
      }
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
    }
    /**
     * 更新图元特征属性
     */
    updateD2ElementShapeItemPropertyByJSONData(elementItemId, jsonData, markShapeType) {
      let targetElement = null;
      if (!markShapeType) {
        targetElement = Helper.getAllElementShapes().filter((elementItem) => {
          return elementItem.model.elementItemId === elementItemId;
        })[0];
      } else {
        targetElement = Helper.getMarkedElementShapeItem(elementItemId, markShapeType);
      }
      if (!targetElement) {
        return;
      }
      const allKeys = Object.keys(jsonData);
      for (let i = 0; i < allKeys.length; i++) {
        const key = allKeys[i];
        if (typeof targetElement[key] === "undefined") {
          continue;
        }
        switch (key) {
          case "isSelectable" /* IS_SELECTABLE */: {
            const iTargetElement = targetElement;
            iTargetElement.isSelectable = jsonData[key];
            break;
          }
          default: {
            console.warn("unkown shape property: ", key);
          }
        }
        Constant.selectManager.clearSelectItemById(targetElement.elementItemId);
      }
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
    }
    /**
     * 删除图元
     */
    deleteD2ElementShapeItemById(elementItemId, markShapeType) {
      let targetElement = null;
      if (!markShapeType) {
        targetElement = Helper.getAllElementShapes().filter((elementItem) => {
          return elementItem.model.elementItemId === elementItemId;
        })[0];
      } else {
        targetElement = Helper.getMarkedElementShapeItem(elementItemId, markShapeType);
      }
      if (!targetElement) {
        return;
      }
      if (!markShapeType) {
        Helper.deleteElementShapeItem(targetElement);
      } else {
        Helper.deleteMarkedElementShapeItem(targetElement.elementItemId, markShapeType);
      }
      Constant.selectManager.clearSelectItemById(targetElement.elementItemId);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("DELETE_ELEMENT" /* DELETE_ELEMENT */, {});
    }
    /**
     * 为图元增加事件
     */
    bindD2ElementShapeItemEvent(elementItemId, eventName, callback) {
      const targetElement = Helper.getElementShapeItemById(elementItemId);
      if (!targetElement) {
        return null;
      }
      const eventHandlerId = EventsManager.getInstance().appendEventItem(elementItemId, eventName, callback);
      return eventHandlerId;
    }
    /**
     * 为图元移除指定事件
     */
    removeD2ElementShapeItemEvent(elementItemId, eventName, eventHandlerId) {
      EventsManager.getInstance().removeEventItem(elementItemId, eventName, eventHandlerId);
    }
    /**
     * 为图元清空所有事件
     */
    clearD2ElementShapeItemAllEvents(elementItemId) {
      EventsManager.getInstance().removeAllEvents(elementItemId);
    }
    quit() {
    }
  };

  // src/controller/DrawLayerController.ts
  var DrawLayerController = class extends BaseInterface {
    constructor() {
      super();
    }
    /**
     * 获取所有绘制图层结果
     */
    getAllDrawLayerResults() {
      return Helper.getAllDrawLayerShapes().map((layerItem) => {
        return {
          layerItemId: layerItem.model.layerItemId,
          layerItemName: layerItem.model.layerItemName,
          layerItemStatus: layerItem.status,
          layerItemType: layerItem.model.layerItemType,
          layerItemOpacity: layerItem.model.layerItemOpacity
        };
      });
    }
    /**
     * 创建单个绘制图层
     */
    createDrawLayerShapeItem(layerItemName = "untitled draw-layer") {
      const drawLayerShapeItem = DrawLayerShapeManager.getInstance().createContentShapeItem(layerItemName);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CREATED_DRAWLAYER" /* CREATED_DRAWLAYER */, {
        targetItemId: drawLayerShapeItem.model.layerItemId
      });
      return drawLayerShapeItem.model.layerItemId;
    }
    /**
     * 删除单个绘制图层
     */
    deleteDrawLayerShapeItem(layerItemId) {
      DrawLayerShapeManager.getInstance().deleteContentShapeItem(layerItemId);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, { elementPriority: true });
      OutProfileMessage.dispatchOperationProfileChangeMessage("DELETED_DRAWLAYER" /* DELETED_DRAWLAYER */, {
        targetItemId: layerItemId
      });
    }
    /**
     * 获取第一个被选中的绘制图层的图层 ID
     */
    getActiveDrawLayerShapeItemId() {
      return DrawLayerShapeManager.getInstance().getFirstSelectedItem().layerItemId;
    }
    /**
     * 设置指定图层 ID 对应的图层为选中状态
     */
    setActiveDrawLayerShapeItem(layerItemId) {
      DrawLayerShapeManager.getInstance().setActiveItem(layerItemId);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("SWITCH_ACTIVE_DRAWLAYER" /* SWITCH_ACTIVE_DRAWLAYER */, {
        targetItemId: layerItemId
      });
    }
    /**
     * 清除所有选中的绘制图层的选中状态
     */
    clearAllDrawLayersSelectedStatus() {
      DrawLayerShapeManager.getInstance().selectedLayersId = /* @__PURE__ */ new Set([]);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CLEAR_ALL_ACTIVE_DRAWLAYER" /* CLEAR_ALL_ACTIVE_DRAWLAYER */, {});
    }
    /**
     * 删除指定图层 ID 对应的绘制图层中的所有图元
     */
    deleteDrawLayerElements(layerItemId) {
      const allElementShapes = Helper.getAllElementShapes();
      for (let i = 0; i < allElementShapes.length; i++) {
        if (allElementShapes[i].model.layerItemId !== layerItemId) {
          continue;
        }
        Helper.deleteElementShapeItem(allElementShapes[i]);
        Constant.selectManager.clearSelectItemById(allElementShapes[i].elementItemId);
      }
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CLEAR_ALL_DRAWLAYER_ELEMENTS" /* CLEAR_ALL_DRAWLAYER_ELEMENTS */, {
        targetItemId: layerItemId
      });
    }
    /**
     * 删除所有绘制层图元和绘制层
     */
    deleteAllDrawLayers() {
      const allDrawLayers = Constant.drawLayerController.getAllDrawLayerResults();
      for (let i = 0; i < allDrawLayers.length; i++) {
        Constant.drawLayerController.deleteDrawLayerElements(allDrawLayers[i].layerItemId);
        Constant.drawLayerController.deleteDrawLayerShapeItem(allDrawLayers[i].layerItemId);
      }
    }
    quit() {
      this.deleteAllDrawLayers();
    }
  };

  // src/presenter/ModifyController.ts
  var ModifyController = class extends BaseInterface {
    constructor() {
      super();
      this._drawLayers = /* @__PURE__ */ new Set([]);
      this._elements = /* @__PURE__ */ new Set([]);
      this._drawLayerPresenter = null;
      this._elementPresenter = null;
    }
    setLayerPresenter(drawLayerPresenter) {
      this._drawLayerPresenter = drawLayerPresenter;
    }
    setElementPresenter(elementPresenter) {
      this._elementPresenter = elementPresenter;
    }
    attachDrawLayer(drawLayerItem) {
      this._drawLayers.add(drawLayerItem);
    }
    attachElement(elementItem) {
      this._elements.add(elementItem);
    }
    notify(isShouldHandleElementsPriority = false) {
      if (isShouldHandleElementsPriority) {
        if (this._elementPresenter) {
          this._elementPresenter.notify(this._elements);
        }
        this._elements.clear();
        if (this._drawLayerPresenter) {
          this._drawLayerPresenter.notify(this._drawLayers);
        }
        this._drawLayers.clear();
        return;
      }
      if (this._drawLayerPresenter) {
        this._drawLayerPresenter.notify(this._drawLayers);
      }
      this._drawLayers.clear();
      if (this._elementPresenter) {
        this._elementPresenter.notify(this._elements);
      }
      this._elements.clear();
    }
    quit() {
      this._drawLayers.clear();
      this._drawLayers = void 0;
      this._elements.clear();
      this._elements = void 0;
      if (this._elementPresenter) {
        this._elementPresenter.quit();
        this._elementPresenter = void 0;
      }
      if (this._drawLayerPresenter) {
        this._drawLayerPresenter.quit();
        this._drawLayerPresenter = void 0;
      }
    }
  };

  // src/view/views/shapes/DrawLayerViewPayloads.ts
  var DrawLayerViewPayloads = class {
    constructor(parent) {
      this._parent = parent;
      this._d2ArcsProfileDeleted = /* @__PURE__ */ new Set();
      this._d2ArcsProfileCreated = /* @__PURE__ */ new Map();
      this._d2ArcsProfileUpdated = /* @__PURE__ */ new Map();
      this._d2CirclesProfileDeleted = /* @__PURE__ */ new Set();
      this._d2CirclesProfileCreated = /* @__PURE__ */ new Map();
      this._d2CirclesProfileUpdated = /* @__PURE__ */ new Map();
      this._d2ImagesProfileDeleted = /* @__PURE__ */ new Set();
      this._d2ImagesProfileCreated = /* @__PURE__ */ new Map();
      this._d2ImagesProfileUpdated = /* @__PURE__ */ new Map();
      this._d2LinesProfileDeleted = /* @__PURE__ */ new Set();
      this._d2LinesProfileCreated = /* @__PURE__ */ new Map();
      this._d2LinesProfileUpdated = /* @__PURE__ */ new Map();
      this._d2PointsProfileDeleted = /* @__PURE__ */ new Set();
      this._d2PointsProfileCreated = /* @__PURE__ */ new Map();
      this._d2PointsProfileUpdated = /* @__PURE__ */ new Map();
      this._d2TextsProfileDeleted = /* @__PURE__ */ new Set();
      this._d2TextsProfileCreated = /* @__PURE__ */ new Map();
      this._d2TextsProfileUpdated = /* @__PURE__ */ new Map();
    }
    get parent() {
      return this._parent;
    }
    deletedD2ArcProfileItem(id) {
      this._d2ArcsProfileDeleted.add(id);
    }
    addD2ArcProfileItem(data) {
      const id = Constant.globalIdenManager.getComponentIden();
      this._d2ArcsProfileCreated.set(id, data);
      return id;
    }
    updateD2ArcProfileItem(id, data) {
      this._d2ArcsProfileUpdated.set(id, data);
    }
    deletedD2CircleProfileItem(id) {
      this._d2CirclesProfileDeleted.add(id);
    }
    addD2CircleProfileItem(data) {
      const id = Constant.globalIdenManager.getComponentIden();
      this._d2CirclesProfileCreated.set(id, data);
      return id;
    }
    updateD2CircleProfileItem(id, data) {
      this._d2CirclesProfileUpdated.set(id, data);
    }
    deletedD2ImageProfileItem(id) {
      this._d2ImagesProfileDeleted.add(id);
    }
    addD2ImageProfileItem(data) {
      const id = Constant.globalIdenManager.getComponentIden();
      this._d2ImagesProfileCreated.set(id, data);
      return id;
    }
    updateD2ImageProfileItem(id, data) {
      this._d2ImagesProfileUpdated.set(id, data);
    }
    deletedD2LineProfileItem(id) {
      this._d2LinesProfileDeleted.add(id);
    }
    addD2LineProfileItem(data) {
      const id = Constant.globalIdenManager.getComponentIden();
      this._d2LinesProfileCreated.set(id, data);
      return id;
    }
    updateD2LineProfileItem(id, data) {
      this._d2LinesProfileUpdated.set(id, data);
    }
    deletedD2PointProfileItem(id) {
      this._d2PointsProfileDeleted.add(id);
    }
    addD2PointProfileItem(data) {
      const id = Constant.globalIdenManager.getComponentIden();
      this._d2PointsProfileCreated.set(id, data);
      return id;
    }
    updateD2PointProfileItem(id, data) {
      this._d2PointsProfileUpdated.set(id, data);
    }
    deletedD2TextProfileItem(id) {
      this._d2TextsProfileDeleted.add(id);
    }
    addD2TextProfileItem(data) {
      const id = Constant.globalIdenManager.getComponentIden();
      this._d2TextsProfileCreated.set(id, data);
      return id;
    }
    updateD2TextProfileItem(id, data) {
      this._d2TextsProfileUpdated.set(id, data);
    }
    notify() {
      const plane = this.parent.plane;
      if (this._d2ArcsProfileDeleted.size > 0) {
        plane.deleteD2ArcItems(this._d2ArcsProfileDeleted);
      }
      if (this._d2ArcsProfileCreated.size > 0) {
        plane.addD2ArcItems(this._d2ArcsProfileCreated);
      }
      if (this._d2ArcsProfileUpdated.size > 0) {
        plane.updateD2ArcItems(this._d2ArcsProfileUpdated);
      }
      if (this._d2CirclesProfileDeleted.size > 0) {
        plane.deleteD2CircleItems(this._d2CirclesProfileDeleted);
      }
      if (this._d2CirclesProfileCreated.size > 0) {
        plane.addD2CircleItems(this._d2CirclesProfileCreated);
      }
      if (this._d2CirclesProfileUpdated.size > 0) {
        plane.updateD2CircleItems(this._d2CirclesProfileUpdated);
      }
      if (this._d2ImagesProfileDeleted.size > 0) {
        plane.deleteD2ImageItems(this._d2ImagesProfileDeleted);
      }
      if (this._d2ImagesProfileCreated.size > 0) {
        plane.addD2ImageItems(this._d2ImagesProfileCreated);
      }
      if (this._d2ImagesProfileUpdated.size > 0) {
        plane.updateD2ImageItems(this._d2ImagesProfileUpdated);
      }
      if (this._d2LinesProfileDeleted.size > 0) {
        plane.deleteD2LineItems(this._d2LinesProfileDeleted);
      }
      if (this._d2LinesProfileCreated.size > 0) {
        plane.addD2LineItems(this._d2LinesProfileCreated);
      }
      if (this._d2LinesProfileUpdated.size > 0) {
        plane.updateD2LineItems(this._d2LinesProfileUpdated);
      }
      if (this._d2PointsProfileDeleted.size > 0) {
        plane.deleteD2PointItems(this._d2PointsProfileDeleted);
      }
      if (this._d2PointsProfileCreated.size > 0) {
        plane.addD2PointItems(this._d2PointsProfileCreated);
      }
      if (this._d2PointsProfileUpdated.size > 0) {
        plane.updateD2PointItems(this._d2PointsProfileUpdated);
      }
      if (this._d2TextsProfileDeleted.size > 0) {
        plane.deleteD2TextItems(this._d2TextsProfileDeleted);
      }
      if (this._d2TextsProfileCreated.size > 0) {
        plane.addD2TextItems(this._d2TextsProfileCreated);
      }
      if (this._d2TextsProfileUpdated.size > 0) {
        plane.updateD2TextItems(this._d2TextsProfileUpdated);
      }
      this._d2ArcsProfileDeleted.clear();
      this._d2ArcsProfileCreated.clear();
      this._d2ArcsProfileUpdated.clear();
      this._d2CirclesProfileDeleted.clear();
      this._d2CirclesProfileCreated.clear();
      this._d2CirclesProfileUpdated.clear();
      this._d2ImagesProfileDeleted.clear();
      this._d2ImagesProfileCreated.clear();
      this._d2ImagesProfileUpdated.clear();
      this._d2LinesProfileDeleted.clear();
      this._d2LinesProfileCreated.clear();
      this._d2LinesProfileUpdated.clear();
      this._d2PointsProfileDeleted.clear();
      this._d2PointsProfileCreated.clear();
      this._d2PointsProfileUpdated.clear();
      this._d2TextsProfileDeleted.clear();
      this._d2TextsProfileCreated.clear();
      this._d2TextsProfileUpdated.clear();
    }
  };

  // src/view/views/shapes/DrawLayerView.ts
  var DrawLayerView = class extends Context {
    constructor(scene, layerItemId, layerItemType, layerItemName, layerItemOpacity, groupId) {
      super(PLANE_INIT_STATUS);
      this._scene = scene;
      this._layerItemType = layerItemType;
      this._layerItemId = layerItemId;
      this._layerItemName = layerItemName;
      this._layerItemOpacity = layerItemOpacity;
      this._groupId = groupId;
      if (this._layerItemType === 1 /* ControlPlane */) {
        this._plane = scene.addControlPlaneItem(layerItemId);
      } else if (this._layerItemType === 2 /* ContentPlane */) {
        this._plane = scene.addContentPlaneItem(layerItemId);
      } else {
        throw new Error(`error layer type.`);
      }
      this._layerPayloads = new DrawLayerViewPayloads(this);
    }
    get plane() {
      return this._plane;
    }
    get scene() {
      return this._scene;
    }
    get layerItemType() {
      return this._layerItemType;
    }
    set layerItemType(value) {
      this._layerItemType = value;
    }
    get layerItemName() {
      return this._layerItemName;
    }
    set layerItemName(value) {
      this._layerItemName = value;
    }
    get layerItemOpacity() {
      return this._layerItemOpacity;
    }
    set layerItemOpacity(value) {
      this._layerItemOpacity = value;
    }
    get groupId() {
      return this._groupId;
    }
    set groupId(value) {
      this._groupId = value;
    }
    get layerItemId() {
      return this._layerItemId;
    }
    set layerItemId(value) {
      this._layerItemId = value;
    }
    get layerPayloads() {
      return this._layerPayloads;
    }
    set layerPayloads(value) {
      this._layerPayloads = value;
    }
    modify(layerItemData) {
      this.layerItemName = layerItemData.layerItemName;
      this.layerItemOpacity = layerItemData.layerItemOpacity;
      this.groupId = layerItemData.groupId;
    }
    delete() {
      if (this.layerItemType === 1 /* ControlPlane */) {
        this._scene.deleteControlPlaneItem(this.plane.planeId);
      } else if (this.layerItemType === 2 /* ContentPlane */) {
        this._scene.deleteContentPlaneItem(this.plane.planeId);
      }
    }
    notify(scene) {
      this.layerPayloads.notify();
    }
  };

  // src/view/manager/DrawLayerViewManager.ts
  var DrawLayerViewManager = class _DrawLayerViewManager extends BaseManager {
    static getInstance() {
      if (_DrawLayerViewManager.instance === void 0) {
        _DrawLayerViewManager.instance = new _DrawLayerViewManager();
      }
      return _DrawLayerViewManager.instance;
    }
    constructor() {
      super();
    }
    handleRefreshView(scene) {
      for (let [key, item] of this.items) {
        item.notify(scene);
      }
    }
    handleModify(scene, drawLayers) {
      for (let drawLayer of drawLayers) {
        if (drawLayer.killed) {
          this.deleteItem(drawLayer.model.layerItemId);
          continue;
        }
        const drawLayerItemType = drawLayer.getType();
        const drawLayerStatus = drawLayer.getStatus();
        const drawLayerItemData = drawLayer.toJSON();
        this.modifyItem(scene, drawLayer.model.layerItemId, drawLayerItemType, drawLayerStatus, drawLayerItemData);
      }
    }
    modifyItem(scene, drawLayerItemId, drawLayerItemType, drawLayerStatus, drawLayerItemData) {
      const drawLayerItem = this.items.get(drawLayerItemId);
      if (!drawLayerItem) {
        const drawLayerViewItem = new DrawLayerView(
          scene,
          drawLayerItemId,
          drawLayerItemType,
          drawLayerItemData.layerItemName,
          drawLayerItemData.layerItemOpacity,
          drawLayerItemData.groupId
        );
        this.items.set(drawLayerViewItem.layerItemId, drawLayerViewItem);
        return;
      }
      drawLayerItem.modify(drawLayerItemData);
    }
    deleteItem(drawLayerItemId) {
      const drawLayerViewItem = this.items.get(drawLayerItemId);
      if (!drawLayerViewItem) {
        return;
      }
      drawLayerViewItem.delete();
      this.items.delete(drawLayerItemId);
    }
    quit() {
      super.quit();
      _DrawLayerViewManager.instance = void 0;
    }
  };

  // src/presenter/Presenter.ts
  var Presenter = class extends BaseInterface {
    constructor() {
      super();
    }
  };

  // src/presenter/DrawLayerPresenter.ts
  var DrawLayerPresenter = class extends Presenter {
    constructor(scene) {
      super();
      this._scene = scene;
    }
    notify(drawLayers) {
      DrawLayerViewManager.getInstance().handleModify(this._scene, drawLayers);
    }
    quit() {
      DrawLayerViewManager.getInstance().quit();
    }
  };

  // src/view/views/shapes/primitive2d/elementBase/D2ShapeElementViewBase.ts
  var D2ShapeElementViewBase = class extends Context {
    constructor(shapeObjectItem) {
      super(PRIMITIVE_INIT_STATUS);
      this._shapeObjectItem = shapeObjectItem;
      this._elementItemId = shapeObjectItem.elementItemId;
    }
    get type() {
      return this._type;
    }
    set type(value) {
      this._type = value;
    }
    get layerItemId() {
      return this._layerItemId;
    }
    set layerItemId(value) {
      this._layerItemId = value;
    }
    get elementItemId() {
      return this._elementItemId;
    }
    get shapeObjectItem() {
      return this._shapeObjectItem;
    }
    getDrawLayerViewItem(layerItemId) {
      return DrawLayerViewManager.getInstance().items.get(layerItemId);
    }
    updateMaskElementItemId(elementItemId) {
      return elementItemId + "_mask";
    }
    get visible() {
      return this.isStatusMatch(1 /* VISIBLE */);
    }
    set visible(value) {
      this.setStatusMatch(1 /* VISIBLE */, value);
    }
    get hightlight() {
      return this.isStatusMatch(8 /* HIGHTLIGHT */);
    }
    set hightlight(value) {
      this.setStatusMatch(8 /* HIGHTLIGHT */, value);
    }
    get locked() {
      return this.isStatusMatch(2 /* LOCKED */);
    }
    set locked(value) {
      this.setStatusMatch(2 /* LOCKED */, value);
    }
    get killed() {
      return this.isStatusMatch(4 /* KILLED */);
    }
    set killed(value) {
      this.setStatusMatch(4 /* KILLED */, value);
    }
  };

  // src/view/views/utils/Mask.ts
  var MaskColor = class {
    static createStrokeColor(alpha = 0.65) {
      return new Color(255, 255, 255, alpha);
    }
    static createFillColor(fillColor) {
      return new Color(255, 255, 255, fillColor.a > 0 ? 0.75 : 0);
    }
  };

  // src/view/views/structure/primitive2d/elementBase/StructureBase.ts
  var StructureBase = class {
    constructor() {
    }
  };

  // src/view/views/structure/primitive2d/elementBase/StructureItemBase.ts
  var StructureItemBase = class extends StructureBase {
    constructor(layerItemId) {
      super();
      this._elementItemId = null;
      this._layerItemId = layerItemId;
      this._belongId = null;
    }
    get elementItemId() {
      return this._elementItemId;
    }
    set elementItemId(value) {
      this._elementItemId = value;
    }
    get belongId() {
      return this._belongId;
    }
    set belongId(value) {
      this._belongId = value;
    }
    get layerItemId() {
      return this._layerItemId;
    }
    set layerItemId(value) {
      this._layerItemId = value;
    }
    getDrawLayerViewItem(layerItemId) {
      return DrawLayerViewManager.getInstance().items.get(layerItemId);
    }
  };

  // src/view/views/structure/primitive2d/BaseD2Arc.ts
  var BaseD2Arc = class extends StructureItemBase {
    constructor(layerItemId, parent) {
      super(layerItemId);
      this.parent = parent;
    }
    modify(data) {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId === null) {
        this.belongId = drawLayerViewItem.layerPayloads.addD2ArcProfileItem(data);
      } else {
        drawLayerViewItem.layerPayloads.updateD2ArcProfileItem(this.belongId, data);
      }
    }
    delete() {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId !== null) {
        drawLayerViewItem.layerPayloads.deletedD2ArcProfileItem(this.belongId);
      }
    }
  };

  // src/view/views/shapes/primitive2d/D2ArcView.ts
  var D2ArcView = class extends D2ShapeElementViewBase {
    constructor(shapeObject) {
      super(shapeObject);
      this._mainPrimitive = null;
      this._maskPrimitive = null;
      this.type = shapeObject.getType();
      this.layerItemId = shapeObject.model.layerItemId;
    }
    modify(shapeObjectItem) {
      const { status, fillColor } = shapeObjectItem;
      const { layerItemId } = shapeObjectItem.model;
      this.layerItemId = layerItemId;
      this.status = status;
      const shapeObjectItemJson = shapeObjectItem.toJSON();
      if (this.killed) {
        this.delete();
      } else if (this.hightlight) {
        this.hightlighting();
      } else {
        this.normalview(shapeObjectItem);
      }
      if (this._mainPrimitive) {
        this._mainPrimitive.modify(shapeObjectItemJson);
      }
      if (this._maskPrimitive) {
        const maskElementItemData = __spreadProps(__spreadValues({}, shapeObjectItemJson), {
          layerItemId: this._maskPrimitive.layerItemId
        });
        maskElementItemData.strokeColorData = MaskColor.createStrokeColor().toRGBAJSON();
        maskElementItemData.fillColorData = MaskColor.createFillColor(fillColor.toRGBAJSON()).toRGBAJSON();
        this._maskPrimitive.modify(maskElementItemData);
      }
    }
    delete() {
      if (this._mainPrimitive) {
        this._mainPrimitive.delete();
        this._mainPrimitive = void 0;
      }
      if (this._maskPrimitive) {
        this._maskPrimitive.delete();
        this._maskPrimitive = void 0;
      }
    }
    normalview(shapeObjectItem) {
      if (this._maskPrimitive) {
        this._maskPrimitive.delete();
        this._maskPrimitive = void 0;
      }
      if (!this._mainPrimitive) {
        this._mainPrimitive = new BaseD2Arc(this.layerItemId, this);
      }
    }
    hightlighting() {
      if (!this._maskPrimitive) {
        this._maskPrimitive = new BaseD2Arc("dw_ml_1000001" /* MaskLayer */, this);
      }
    }
  };

  // src/view/views/structure/primitive2d/BaseD2Circle.ts
  var BaseD2Circle = class extends StructureItemBase {
    constructor(layerItemId, parent) {
      super(layerItemId);
      this.parent = parent;
    }
    modify(data) {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId === null) {
        this.belongId = drawLayerViewItem.layerPayloads.addD2CircleProfileItem(data);
      } else {
        drawLayerViewItem.layerPayloads.updateD2CircleProfileItem(this.belongId, data);
      }
    }
    delete() {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId !== null) {
        drawLayerViewItem.layerPayloads.deletedD2CircleProfileItem(this.belongId);
      }
    }
  };

  // src/view/views/shapes/primitive2d/D2CircleView.ts
  var D2CircleView = class extends D2ShapeElementViewBase {
    constructor(shapeObject) {
      super(shapeObject);
      this._mainPrimitive = null;
      this._maskPrimitive = null;
      this.type = shapeObject.getType();
      this.layerItemId = shapeObject.model.layerItemId;
    }
    modify(shapeObjectItem) {
      const { status, fillColor } = shapeObjectItem;
      const { layerItemId } = shapeObjectItem.model;
      this.layerItemId = layerItemId;
      this.status = status;
      const shapeObjectItemJson = shapeObjectItem.toJSON();
      if (this.killed) {
        this.delete();
      } else if (this.hightlight) {
        this.hightlighting();
      } else {
        this.normalview(shapeObjectItem);
      }
      if (this._mainPrimitive) {
        this._mainPrimitive.modify(shapeObjectItemJson);
      }
      if (this._maskPrimitive) {
        const maskElementItemData = __spreadProps(__spreadValues({}, shapeObjectItemJson), {
          layerItemId: this._maskPrimitive.layerItemId
        });
        maskElementItemData.strokeColorData = MaskColor.createStrokeColor().toRGBAJSON();
        maskElementItemData.fillColorData = MaskColor.createFillColor(fillColor.toRGBAJSON()).toRGBAJSON();
        this._maskPrimitive.modify(maskElementItemData);
      }
    }
    delete() {
      if (this._mainPrimitive) {
        this._mainPrimitive.delete();
        this._mainPrimitive = void 0;
      }
      if (this._maskPrimitive) {
        this._maskPrimitive.delete();
        this._maskPrimitive = void 0;
      }
    }
    normalview(shapeObjectItem) {
      if (this._maskPrimitive) {
        this._maskPrimitive.delete();
        this._maskPrimitive = void 0;
      }
      if (!this._mainPrimitive) {
        this._mainPrimitive = new BaseD2Circle(this.layerItemId, this);
      }
    }
    hightlighting() {
      if (!this._maskPrimitive) {
        this._maskPrimitive = new BaseD2Circle("dw_ml_1000001" /* MaskLayer */, this);
      }
    }
  };

  // src/view/views/structure/primitive2d/BaseD2Texture.ts
  var BaseD2Texture = class extends StructureItemBase {
    constructor(layerItemId, parent) {
      super(layerItemId);
      this._webGLTexture = null;
      this.parent = parent;
    }
    modify(data) {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId === null) {
        this._webGLTexture = drawLayerViewItem.plane.getScene().getWebGLTexture(data.texImageSource);
        this.belongId = drawLayerViewItem.layerPayloads.addD2ImageProfileItem(__spreadProps(__spreadValues({}, data), { texture: this._webGLTexture }));
      } else {
        drawLayerViewItem.layerPayloads.updateD2ImageProfileItem(this.belongId, __spreadProps(__spreadValues({}, data), { texture: this._webGLTexture }));
      }
    }
    delete() {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId !== null) {
        drawLayerViewItem.layerPayloads.deletedD2ImageProfileItem(this.belongId);
      }
    }
  };

  // src/view/views/structure/primitive2d/BaseD2Line.ts
  var BaseD2Line = class extends StructureItemBase {
    constructor(layerItemId, parent) {
      super(layerItemId);
      this.parent = parent;
    }
    modify(data) {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId === null) {
        this.belongId = drawLayerViewItem.layerPayloads.addD2LineProfileItem(data);
      } else {
        drawLayerViewItem.layerPayloads.updateD2LineProfileItem(this.belongId, data);
      }
    }
    delete() {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId !== null) {
        drawLayerViewItem.layerPayloads.deletedD2LineProfileItem(this.belongId);
      }
    }
  };

  // src/view/views/shapes/primitive2d/D2ImageView.ts
  var D2ImageView = class extends D2ShapeElementViewBase {
    constructor(shapeObject) {
      super(shapeObject);
      this._baseD2Texture = null;
      this._maskPrimitive = null;
      this._topBorderLinePrimitiveNormal = null;
      this._rightBorderLinePrimitiveNormal = null;
      this._bottomBorderLinePrimitiveNormal = null;
      this._leftBorderLinePrimitiveNormal = null;
      this._topBorderLinePrimitiveHightlight = null;
      this._rightBorderLinePrimitiveHightlight = null;
      this._bottomBorderLinePrimitiveHightlight = null;
      this._leftBorderLinePrimitiveHightlight = null;
      this.type = shapeObject.getType();
      this.layerItemId = shapeObject.model.layerItemId;
    }
    modify(shapeObjectItem) {
      const { status } = shapeObjectItem;
      const { layerItemId } = shapeObjectItem.model;
      if (!shapeObjectItem.isContentReady()) {
        return;
      }
      this.layerItemId = layerItemId;
      this.status = status;
      const shapeObjectItemJson = shapeObjectItem.toJSON();
      if (this.killed) {
        this.delete();
      } else if (this.hightlight) {
        this.hightlighting(shapeObjectItem);
      } else {
        this.normalview(shapeObjectItem);
      }
      if (this._baseD2Texture) {
        this._baseD2Texture.modify(shapeObjectItemJson);
      }
      if (this._maskPrimitive) {
        this._maskPrimitive.modify({
          status: shapeObjectItemJson.status,
          layerItemId: this._maskPrimitive.layerItemId,
          startPoint: new Vector2(
            (shapeObjectItemJson.leftUp.x + shapeObjectItemJson.leftDown.x) / 2,
            (shapeObjectItemJson.leftUp.y + shapeObjectItemJson.leftDown.y) / 2
          ).toJSON(),
          endPoint: new Vector2(
            (shapeObjectItemJson.rightUp.x + shapeObjectItemJson.rightDown.x) / 2,
            (shapeObjectItemJson.rightUp.y + shapeObjectItemJson.rightDown.y) / 2
          ).toJSON(),
          strokeWidth: shapeObjectItemJson.height,
          strokeColorData: MaskColor.createStrokeColor().toRGBAJSON(),
          alpha: 0.35,
          lineCap: "SQUARE" /* SQUARE */,
          isSolid: true,
          segSize: 0,
          gapSize: 0,
          isFixedStrokeWidth: false
        });
      }
      const topBorderLinePrimitive = this._topBorderLinePrimitiveNormal || this._topBorderLinePrimitiveHightlight;
      const rightBorderLinePrimitive = this._rightBorderLinePrimitiveNormal || this._rightBorderLinePrimitiveHightlight;
      const bottomBorderLinePrimitive = this._bottomBorderLinePrimitiveNormal || this._bottomBorderLinePrimitiveHightlight;
      const leftBorderLinePrimitive = this._leftBorderLinePrimitiveNormal || this._leftBorderLinePrimitiveHightlight;
      const lineLayerItemId = this.hightlight && this._topBorderLinePrimitiveHightlight ? this._topBorderLinePrimitiveHightlight.layerItemId : this.layerItemId;
      const lineColor = this.hightlight ? Color.GREEN_YELLOW : new Color(102, 248, 247);
      if (topBorderLinePrimitive) {
        topBorderLinePrimitive.modify({
          status: shapeObjectItemJson.status,
          layerItemId: lineLayerItemId,
          startPoint: shapeObjectItemJson.leftUp,
          endPoint: shapeObjectItemJson.rightUp,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: lineColor.toRGBAJSON(),
          alpha: 0.95,
          lineCap: "ROUND" /* ROUND */,
          isSolid: true,
          segSize: 0,
          gapSize: 0,
          isFixedStrokeWidth: true
        });
      }
      if (rightBorderLinePrimitive) {
        rightBorderLinePrimitive.modify({
          status: shapeObjectItemJson.status,
          layerItemId: lineLayerItemId,
          startPoint: shapeObjectItemJson.rightUp,
          endPoint: shapeObjectItemJson.rightDown,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: lineColor.toRGBAJSON(),
          alpha: 0.95,
          lineCap: "ROUND" /* ROUND */,
          isSolid: true,
          segSize: 0,
          gapSize: 0,
          isFixedStrokeWidth: true
        });
      }
      if (bottomBorderLinePrimitive) {
        bottomBorderLinePrimitive.modify({
          status: shapeObjectItemJson.status,
          layerItemId: lineLayerItemId,
          startPoint: shapeObjectItemJson.rightDown,
          endPoint: shapeObjectItemJson.leftDown,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: lineColor.toRGBAJSON(),
          alpha: 0.95,
          lineCap: "ROUND" /* ROUND */,
          isSolid: true,
          segSize: 0,
          gapSize: 0,
          isFixedStrokeWidth: true
        });
      }
      if (leftBorderLinePrimitive) {
        leftBorderLinePrimitive.modify({
          status: shapeObjectItemJson.status,
          layerItemId: lineLayerItemId,
          startPoint: shapeObjectItemJson.leftDown,
          endPoint: shapeObjectItemJson.leftUp,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: lineColor.toRGBAJSON(),
          alpha: 0.95,
          lineCap: "ROUND" /* ROUND */,
          isSolid: true,
          segSize: 0,
          gapSize: 0,
          isFixedStrokeWidth: true
        });
      }
    }
    delete() {
      if (this._baseD2Texture) {
        this._baseD2Texture.delete();
        this._baseD2Texture = void 0;
      }
      if (this._maskPrimitive) {
        this._maskPrimitive.delete();
        this._maskPrimitive = void 0;
      }
      if (this._topBorderLinePrimitiveNormal) {
        this._topBorderLinePrimitiveNormal.delete();
        this._topBorderLinePrimitiveNormal = void 0;
      }
      if (this._rightBorderLinePrimitiveNormal) {
        this._rightBorderLinePrimitiveNormal.delete();
        this._rightBorderLinePrimitiveNormal = void 0;
      }
      if (this._bottomBorderLinePrimitiveNormal) {
        this._bottomBorderLinePrimitiveNormal.delete();
        this._bottomBorderLinePrimitiveNormal = void 0;
      }
      if (this._leftBorderLinePrimitiveNormal) {
        this._leftBorderLinePrimitiveNormal.delete();
        this._leftBorderLinePrimitiveNormal = void 0;
      }
      if (this._topBorderLinePrimitiveHightlight) {
        this._topBorderLinePrimitiveHightlight.delete();
        this._topBorderLinePrimitiveHightlight = void 0;
      }
      if (this._rightBorderLinePrimitiveHightlight) {
        this._rightBorderLinePrimitiveHightlight.delete();
        this._rightBorderLinePrimitiveHightlight = void 0;
      }
      if (this._bottomBorderLinePrimitiveHightlight) {
        this._bottomBorderLinePrimitiveHightlight.delete();
        this._bottomBorderLinePrimitiveHightlight = void 0;
      }
      if (this._leftBorderLinePrimitiveHightlight) {
        this._leftBorderLinePrimitiveHightlight.delete();
        this._leftBorderLinePrimitiveHightlight = void 0;
      }
    }
    normalview(shapeObjectItem) {
      this._maskPrimitive && this._maskPrimitive.delete();
      this._maskPrimitive = null;
      if (this._topBorderLinePrimitiveHightlight) {
        this._topBorderLinePrimitiveHightlight.delete();
        this._topBorderLinePrimitiveHightlight = void 0;
      }
      if (this._rightBorderLinePrimitiveHightlight) {
        this._rightBorderLinePrimitiveHightlight.delete();
        this._rightBorderLinePrimitiveHightlight = void 0;
      }
      if (this._bottomBorderLinePrimitiveHightlight) {
        this._bottomBorderLinePrimitiveHightlight.delete();
        this._bottomBorderLinePrimitiveHightlight = void 0;
      }
      if (this._leftBorderLinePrimitiveHightlight) {
        this._leftBorderLinePrimitiveHightlight.delete();
        this._leftBorderLinePrimitiveHightlight = void 0;
      }
      if (!this._baseD2Texture) {
        this._baseD2Texture = new BaseD2Texture(this.layerItemId, this);
      }
      if (shapeObjectItem.isShowStroke && !this._topBorderLinePrimitiveNormal) {
        this._topBorderLinePrimitiveNormal = new BaseD2Line(this.layerItemId, this);
      }
      if (shapeObjectItem.isShowStroke && !this._rightBorderLinePrimitiveNormal) {
        this._rightBorderLinePrimitiveNormal = new BaseD2Line(this.layerItemId, this);
      }
      if (shapeObjectItem.isShowStroke && !this._bottomBorderLinePrimitiveNormal) {
        this._bottomBorderLinePrimitiveNormal = new BaseD2Line(this.layerItemId, this);
      }
      if (shapeObjectItem.isShowStroke && !this._leftBorderLinePrimitiveNormal) {
        this._leftBorderLinePrimitiveNormal = new BaseD2Line(this.layerItemId, this);
      }
    }
    hightlighting(shapeObjectItem) {
      if (!this._maskPrimitive) {
        this._maskPrimitive = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (this._topBorderLinePrimitiveNormal) {
        this._topBorderLinePrimitiveNormal.delete();
        this._topBorderLinePrimitiveNormal = null;
      }
      if (this._rightBorderLinePrimitiveNormal) {
        this._rightBorderLinePrimitiveNormal.delete();
        this._rightBorderLinePrimitiveNormal = null;
      }
      if (this._bottomBorderLinePrimitiveNormal) {
        this._bottomBorderLinePrimitiveNormal.delete();
        this._bottomBorderLinePrimitiveNormal = null;
      }
      if (this._leftBorderLinePrimitiveNormal) {
        this._leftBorderLinePrimitiveNormal.delete();
        this._leftBorderLinePrimitiveNormal = null;
      }
      if (shapeObjectItem.isShowStroke && !this._topBorderLinePrimitiveHightlight) {
        this._topBorderLinePrimitiveHightlight = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (shapeObjectItem.isShowStroke && !this._rightBorderLinePrimitiveHightlight) {
        this._rightBorderLinePrimitiveHightlight = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (shapeObjectItem.isShowStroke && !this._bottomBorderLinePrimitiveHightlight) {
        this._bottomBorderLinePrimitiveHightlight = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (shapeObjectItem.isShowStroke && !this._leftBorderLinePrimitiveHightlight) {
        this._leftBorderLinePrimitiveHightlight = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
    }
  };

  // src/view/views/shapes/primitive2d/D2LineView.ts
  var D2LineView = class extends D2ShapeElementViewBase {
    constructor(shapeObject) {
      super(shapeObject);
      this._mainPrimitive = null;
      this._maskPrimitive = null;
      this.type = shapeObject.getType();
      this.layerItemId = shapeObject.model.layerItemId;
    }
    modify(shapeObjectItem) {
      const { status } = shapeObjectItem;
      const { layerItemId } = shapeObjectItem.model;
      this.layerItemId = layerItemId;
      this.status = status;
      const shapeObjectItemJson = shapeObjectItem.toJSON();
      if (this.killed) {
        this.delete();
      } else if (this.hightlight) {
        this.hightlighting();
      } else {
        this.normalview(shapeObjectItem);
      }
      if (this._mainPrimitive) {
        this._mainPrimitive.modify(shapeObjectItemJson);
      }
      if (this._maskPrimitive) {
        const maskElementItemData = __spreadProps(__spreadValues({}, shapeObjectItemJson), {
          layerItemId: this._maskPrimitive.layerItemId
        });
        maskElementItemData.strokeColorData = MaskColor.createStrokeColor().toRGBAJSON();
        this._maskPrimitive.modify(maskElementItemData);
      }
    }
    delete() {
      if (this._mainPrimitive) {
        this._mainPrimitive.delete();
        this._mainPrimitive = void 0;
      }
      if (this._maskPrimitive) {
        this._maskPrimitive.delete();
        this._maskPrimitive = void 0;
      }
    }
    normalview(shapeObjectItem) {
      if (this._maskPrimitive) {
        this._maskPrimitive.delete();
        this._maskPrimitive = void 0;
      }
      const elementItemType = shapeObjectItem.getType();
      switch (elementItemType) {
        case "D2Line" /* D2Line */: {
          if (!this._mainPrimitive) {
            this._mainPrimitive = new BaseD2Line(this.layerItemId, this);
          }
          break;
        }
        case "D2AssistLine" /* D2AssistLine */: {
          if (!this._mainPrimitive) {
            this._mainPrimitive = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
          }
          break;
        }
      }
    }
    hightlighting() {
      if (!this._maskPrimitive) {
        this._maskPrimitive = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
    }
  };

  // src/view/views/structure/primitive2d/BaseD2Point.ts
  var BaseD2Point = class extends StructureItemBase {
    constructor(layerItemId, parent) {
      super(layerItemId);
      this.parent = parent;
    }
    modify(data) {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId === null) {
        this.belongId = drawLayerViewItem.layerPayloads.addD2PointProfileItem(data);
      } else {
        drawLayerViewItem.layerPayloads.updateD2PointProfileItem(this.belongId, data);
      }
    }
    delete() {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId !== null) {
        drawLayerViewItem.layerPayloads.deletedD2PointProfileItem(this.belongId);
      }
    }
  };

  // src/view/views/shapes/primitive2d/D2PointView.ts
  var D2PointView = class extends D2ShapeElementViewBase {
    constructor(shapeObject) {
      super(shapeObject);
      this._mainPrimitive = null;
      this._maskPrimitive = null;
      this.type = shapeObject.getType();
      this.layerItemId = shapeObject.model.layerItemId;
    }
    modify(shapeObjectItem) {
      const { status } = shapeObjectItem;
      const { layerItemId } = shapeObjectItem.model;
      this.layerItemId = layerItemId;
      this.status = status;
      const shapeObjectItemJson = shapeObjectItem.toJSON();
      if (this.killed) {
        this.delete();
      } else if (this.hightlight) {
        this.hightlighting();
      } else {
        this.normalview(shapeObjectItem);
      }
      if (this._mainPrimitive) {
        this._mainPrimitive.modify(shapeObjectItemJson);
      }
      if (this._maskPrimitive) {
        const maskElementItemData = __spreadProps(__spreadValues({}, shapeObjectItemJson), {
          layerItemId: this._maskPrimitive.layerItemId
        });
        maskElementItemData.strokeColorData = MaskColor.createStrokeColor().toRGBAJSON();
        this._maskPrimitive.modify(maskElementItemData);
      }
    }
    delete() {
      if (this._mainPrimitive) {
        this._mainPrimitive.delete();
        this._mainPrimitive = void 0;
      }
      if (this._maskPrimitive) {
        this._maskPrimitive.delete();
        this._maskPrimitive = void 0;
      }
    }
    normalview(shapeObjectItem) {
      if (this._maskPrimitive) {
        this._maskPrimitive.delete();
        this._maskPrimitive = void 0;
      }
      const elementItemType = shapeObjectItem.getType();
      switch (elementItemType) {
        case "D2Point" /* D2Point */: {
          if (!this._mainPrimitive) {
            this._mainPrimitive = new BaseD2Point(this.layerItemId, this);
          }
          break;
        }
      }
    }
    hightlighting() {
      if (!this._maskPrimitive) {
        this._maskPrimitive = new BaseD2Point("dw_ml_1000001" /* MaskLayer */, this);
      }
    }
  };

  // src/view/views/shapes/primitive2d/D2RectView.ts
  var D2RectView = class extends D2ShapeElementViewBase {
    constructor(shapeObject) {
      super(shapeObject);
      this._fillRegionPrimitiveNormal = null;
      this._topBorderLinePrimitiveNormal = null;
      this._rightBorderLinePrimitiveNormal = null;
      this._bottomBorderLinePrimitiveNormal = null;
      this._leftBorderLinePrimitiveNormal = null;
      this._topBorderLinePrimitiveHightlight = null;
      this._rightBorderLinePrimitiveHightlight = null;
      this._bottomBorderLinePrimitiveHightlight = null;
      this._leftBorderLinePrimitiveHightlight = null;
      this._leftUpBorderArcPrimitiveNormal = null;
      this._rightUpBorderArcPrimitiveNormal = null;
      this._rightBottomBorderArcPrimitiveNormal = null;
      this._leftBottomBorderArcPrimitiveNormal = null;
      this._leftUpBorderArcPrimitiveHightlight = null;
      this._rightUpBorderArcPrimitiveHightlight = null;
      this._rightBottomBorderArcPrimitiveHightlight = null;
      this._leftBottomBorderArcPrimitiveHightlight = null;
      this.type = shapeObject.getType();
      this.layerItemId = shapeObject.model.layerItemId;
    }
    modify(shapeObjectItem) {
      const { status } = shapeObjectItem;
      const { layerItemId } = shapeObjectItem.model;
      this.layerItemId = layerItemId;
      this.status = status;
      const shapeObjectItemJson = shapeObjectItem.toJSON();
      if (this.killed) {
        this.delete();
      } else if (this.hightlight) {
        this.hightlighting();
      } else {
        this.normalview(shapeObjectItem, shapeObjectItemJson.isFill);
      }
      const radius = Math.min(
        shapeObjectItemJson.borderRadius,
        Math.abs(shapeObjectItemJson.width / 2),
        Math.abs(shapeObjectItemJson.height / 2)
      );
      const leftUp = Vector2.createByJSONData(shapeObjectItemJson.leftUp);
      const rightUp = Vector2.createByJSONData(shapeObjectItemJson.rightUp);
      const rightDown = Vector2.createByJSONData(shapeObjectItemJson.rightDown);
      const leftDown = Vector2.createByJSONData(shapeObjectItemJson.leftDown);
      const topNorDirect = rightUp.sub(leftUp).normalize();
      const rightNorDirect = rightDown.sub(rightUp).normalize();
      const bottomNorDirect = leftDown.sub(rightDown).normalize();
      const leftNorDirect = leftUp.sub(leftDown).normalize();
      const topBorderLineStartPoint = leftUp.add(topNorDirect.scale(radius));
      const topBorderLineEndPoint = rightUp.add(topNorDirect.rotate(Math.PI).scale(radius));
      const rightBorderLineStartPoint = rightUp.add(rightNorDirect.scale(radius));
      const rightBorderLineEndPoint = rightDown.add(rightNorDirect.rotate(Math.PI).scale(radius));
      const bottomBorderLineStartPoint = rightDown.add(bottomNorDirect.scale(radius));
      const bottomBorderLineEndPoint = leftDown.add(bottomNorDirect.rotate(Math.PI).scale(radius));
      const leftBorderLineStartPoint = leftDown.add(leftNorDirect.scale(radius));
      const leftBorderLineEndPoint = leftUp.add(leftNorDirect.rotate(Math.PI).scale(radius));
      const leftUpBorderArcCenterPoint = leftBorderLineEndPoint.add(topNorDirect.scale(radius));
      const rightUpBorderArcCenterPoint = rightBorderLineStartPoint.add(topNorDirect.rotate(Math.PI).scale(radius));
      const rightBottomBorderArcCenterPoint = rightBorderLineEndPoint.add(bottomNorDirect.scale(radius));
      const leftBottomBorderArcCenterPoint = leftBorderLineStartPoint.add(bottomNorDirect.rotate(Math.PI).scale(radius));
      const halfStrokeWidth = shapeObjectItem.strokeWidth * 0.5;
      const topCenterPoint = leftUp.add(rightUp).scale(0.5).add(rightNorDirect.scale(halfStrokeWidth));
      const rightCenterPoint = rightDown.add(rightUp).scale(0.5).add(topNorDirect.rotate(Math.PI).scale(halfStrokeWidth));
      const bottomCenterPoint = leftDown.add(rightDown).scale(0.5).add(rightNorDirect.rotate(Math.PI).scale(halfStrokeWidth));
      const leftCenterPoint = leftDown.add(leftUp).scale(0.5).add(topNorDirect.scale(halfStrokeWidth));
      if (this._fillRegionPrimitiveNormal) {
        this._fillRegionPrimitiveNormal.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          startPoint: leftCenterPoint,
          endPoint: rightCenterPoint,
          strokeWidth: topCenterPoint.sub(bottomCenterPoint).length,
          strokeColorData: shapeObjectItemJson.fillColorData,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "SQUARE" /* SQUARE */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          rectBorderRadius: (rightCenterPoint.sub(leftCenterPoint).length - topBorderLineEndPoint.sub(topBorderLineStartPoint).length) / 2,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._topBorderLinePrimitiveNormal) {
        this._topBorderLinePrimitiveNormal.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          startPoint: topBorderLineStartPoint.toJSON(),
          endPoint: topBorderLineEndPoint.toJSON(),
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: shapeObjectItemJson.strokeColorData,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._rightBorderLinePrimitiveNormal) {
        this._rightBorderLinePrimitiveNormal.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          startPoint: rightBorderLineStartPoint.toJSON(),
          endPoint: rightBorderLineEndPoint.toJSON(),
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: shapeObjectItemJson.strokeColorData,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._bottomBorderLinePrimitiveNormal) {
        this._bottomBorderLinePrimitiveNormal.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          startPoint: bottomBorderLineStartPoint.toJSON(),
          endPoint: bottomBorderLineEndPoint.toJSON(),
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: shapeObjectItemJson.strokeColorData,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._leftBorderLinePrimitiveNormal) {
        this._leftBorderLinePrimitiveNormal.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          startPoint: leftBorderLineStartPoint.toJSON(),
          endPoint: leftBorderLineEndPoint.toJSON(),
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: shapeObjectItemJson.strokeColorData,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._topBorderLinePrimitiveHightlight) {
        this._topBorderLinePrimitiveHightlight.modify({
          status: shapeObjectItemJson.status,
          layerItemId: "dw_ml_1000001" /* MaskLayer */,
          startPoint: topBorderLineStartPoint.toJSON(),
          endPoint: topBorderLineEndPoint.toJSON(),
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: MaskColor.createStrokeColor().toRGBAJSON(),
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._rightBorderLinePrimitiveHightlight) {
        this._rightBorderLinePrimitiveHightlight.modify({
          status: shapeObjectItemJson.status,
          layerItemId: "dw_ml_1000001" /* MaskLayer */,
          startPoint: rightBorderLineStartPoint.toJSON(),
          endPoint: rightBorderLineEndPoint.toJSON(),
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: MaskColor.createStrokeColor().toRGBAJSON(),
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._bottomBorderLinePrimitiveHightlight) {
        this._bottomBorderLinePrimitiveHightlight.modify({
          status: shapeObjectItemJson.status,
          layerItemId: "dw_ml_1000001" /* MaskLayer */,
          startPoint: bottomBorderLineStartPoint.toJSON(),
          endPoint: bottomBorderLineEndPoint.toJSON(),
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: MaskColor.createStrokeColor().toRGBAJSON(),
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._leftBorderLinePrimitiveHightlight) {
        this._leftBorderLinePrimitiveHightlight.modify({
          status: shapeObjectItemJson.status,
          layerItemId: "dw_ml_1000001" /* MaskLayer */,
          startPoint: leftBorderLineStartPoint.toJSON(),
          endPoint: leftBorderLineEndPoint.toJSON(),
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: MaskColor.createStrokeColor().toRGBAJSON(),
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      const { startRadian: leftUpArcStartRadian, endRadian: leftUpArcEndRadian } = D2ArcToolkit.calculateRadianProfileByPoint(
        leftUpBorderArcCenterPoint,
        topBorderLineStartPoint,
        leftBorderLineEndPoint,
        1 /* CCW */
      );
      const { startRadian: rightUpArcStartRadian, endRadian: rightUpArcEndRadian } = D2ArcToolkit.calculateRadianProfileByPoint(
        rightUpBorderArcCenterPoint,
        rightBorderLineStartPoint,
        topBorderLineEndPoint,
        1 /* CCW */
      );
      const { startRadian: rightBottomArcStartRadian, endRadian: rightBottomArcEndRadian } = D2ArcToolkit.calculateRadianProfileByPoint(
        rightBottomBorderArcCenterPoint,
        bottomBorderLineStartPoint,
        rightBorderLineEndPoint,
        1 /* CCW */
      );
      const { startRadian: leftBottomArcStartRadian, endRadian: leftBottomArcEndRadian } = D2ArcToolkit.calculateRadianProfileByPoint(
        leftBottomBorderArcCenterPoint,
        leftBorderLineStartPoint,
        bottomBorderLineEndPoint,
        1 /* CCW */
      );
      if (this._leftUpBorderArcPrimitiveNormal) {
        this._leftUpBorderArcPrimitiveNormal.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          centerPoint: leftUpBorderArcCenterPoint,
          startRadian: leftUpArcStartRadian,
          endRadian: leftUpArcEndRadian,
          sweep: shapeObjectItemJson.width * shapeObjectItemJson.height < 0 ? 0 /* CW */ : 1 /* CCW */,
          radius,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: shapeObjectItemJson.strokeColorData,
          isFill: false,
          fillColorData: null,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._rightUpBorderArcPrimitiveNormal) {
        this._rightUpBorderArcPrimitiveNormal.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          centerPoint: rightUpBorderArcCenterPoint,
          startRadian: rightUpArcStartRadian,
          endRadian: rightUpArcEndRadian,
          sweep: shapeObjectItemJson.width * shapeObjectItemJson.height < 0 ? 0 /* CW */ : 1 /* CCW */,
          radius,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: shapeObjectItemJson.strokeColorData,
          isFill: false,
          fillColorData: null,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._rightBottomBorderArcPrimitiveNormal) {
        this._rightBottomBorderArcPrimitiveNormal.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          centerPoint: rightBottomBorderArcCenterPoint,
          startRadian: rightBottomArcStartRadian,
          endRadian: rightBottomArcEndRadian,
          sweep: shapeObjectItemJson.width * shapeObjectItemJson.height < 0 ? 0 /* CW */ : 1 /* CCW */,
          radius,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: shapeObjectItemJson.strokeColorData,
          isFill: false,
          fillColorData: null,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._leftBottomBorderArcPrimitiveNormal) {
        this._leftBottomBorderArcPrimitiveNormal.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          centerPoint: leftBottomBorderArcCenterPoint,
          startRadian: leftBottomArcStartRadian,
          endRadian: leftBottomArcEndRadian,
          sweep: shapeObjectItemJson.width * shapeObjectItemJson.height < 0 ? 0 /* CW */ : 1 /* CCW */,
          radius,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: shapeObjectItemJson.strokeColorData,
          isFill: false,
          fillColorData: null,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._leftUpBorderArcPrimitiveHightlight) {
        this._leftUpBorderArcPrimitiveHightlight.modify({
          status: shapeObjectItemJson.status,
          layerItemId: "dw_ml_1000001" /* MaskLayer */,
          centerPoint: leftUpBorderArcCenterPoint,
          startRadian: leftUpArcStartRadian,
          endRadian: leftUpArcEndRadian,
          sweep: shapeObjectItemJson.width * shapeObjectItemJson.height < 0 ? 0 /* CW */ : 1 /* CCW */,
          radius,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: MaskColor.createStrokeColor().toRGBAJSON(),
          isFill: false,
          fillColorData: null,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._rightUpBorderArcPrimitiveHightlight) {
        this._rightUpBorderArcPrimitiveHightlight.modify({
          status: shapeObjectItemJson.status,
          layerItemId: "dw_ml_1000001" /* MaskLayer */,
          centerPoint: rightUpBorderArcCenterPoint,
          startRadian: rightUpArcStartRadian,
          endRadian: rightUpArcEndRadian,
          sweep: shapeObjectItemJson.width * shapeObjectItemJson.height < 0 ? 0 /* CW */ : 1 /* CCW */,
          radius,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: MaskColor.createStrokeColor().toRGBAJSON(),
          isFill: false,
          fillColorData: null,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._rightBottomBorderArcPrimitiveHightlight) {
        this._rightBottomBorderArcPrimitiveHightlight.modify({
          status: shapeObjectItemJson.status,
          layerItemId: "dw_ml_1000001" /* MaskLayer */,
          centerPoint: rightBottomBorderArcCenterPoint,
          startRadian: rightBottomArcStartRadian,
          endRadian: rightBottomArcEndRadian,
          sweep: shapeObjectItemJson.width * shapeObjectItemJson.height < 0 ? 0 /* CW */ : 1 /* CCW */,
          radius,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: MaskColor.createStrokeColor().toRGBAJSON(),
          isFill: false,
          fillColorData: null,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
      if (this._leftBottomBorderArcPrimitiveHightlight) {
        this._leftBottomBorderArcPrimitiveHightlight.modify({
          status: shapeObjectItemJson.status,
          layerItemId: "dw_ml_1000001" /* MaskLayer */,
          centerPoint: leftBottomBorderArcCenterPoint,
          startRadian: leftBottomArcStartRadian,
          endRadian: leftBottomArcEndRadian,
          sweep: shapeObjectItemJson.width * shapeObjectItemJson.height < 0 ? 0 /* CW */ : 1 /* CCW */,
          radius,
          strokeWidth: shapeObjectItemJson.strokeWidth,
          strokeColorData: MaskColor.createStrokeColor().toRGBAJSON(),
          isFill: false,
          fillColorData: null,
          alpha: shapeObjectItemJson.alpha,
          lineCap: "ROUND" /* ROUND */,
          isSolid: shapeObjectItemJson.isSolid,
          segSize: shapeObjectItemJson.segSize,
          gapSize: shapeObjectItemJson.gapSize,
          isFixedStrokeWidth: shapeObjectItemJson.isFixedStrokeWidth
        });
      }
    }
    delete() {
      if (this._fillRegionPrimitiveNormal) {
        this._fillRegionPrimitiveNormal.delete();
        this._fillRegionPrimitiveNormal = void 0;
      }
      if (this._topBorderLinePrimitiveNormal) {
        this._topBorderLinePrimitiveNormal.delete();
        this._topBorderLinePrimitiveNormal = void 0;
      }
      if (this._rightBorderLinePrimitiveNormal) {
        this._rightBorderLinePrimitiveNormal.delete();
        this._rightBorderLinePrimitiveNormal = void 0;
      }
      if (this._bottomBorderLinePrimitiveNormal) {
        this._bottomBorderLinePrimitiveNormal.delete();
        this._bottomBorderLinePrimitiveNormal = void 0;
      }
      if (this._leftBorderLinePrimitiveNormal) {
        this._leftBorderLinePrimitiveNormal.delete();
        this._leftBorderLinePrimitiveNormal = void 0;
      }
      if (this._topBorderLinePrimitiveHightlight) {
        this._topBorderLinePrimitiveHightlight.delete();
        this._topBorderLinePrimitiveHightlight = void 0;
      }
      if (this._rightBorderLinePrimitiveHightlight) {
        this._rightBorderLinePrimitiveHightlight.delete();
        this._rightBorderLinePrimitiveHightlight = void 0;
      }
      if (this._bottomBorderLinePrimitiveHightlight) {
        this._bottomBorderLinePrimitiveHightlight.delete();
        this._bottomBorderLinePrimitiveHightlight = void 0;
      }
      if (this._leftBorderLinePrimitiveHightlight) {
        this._leftBorderLinePrimitiveHightlight.delete();
        this._leftBorderLinePrimitiveHightlight = void 0;
      }
      if (this._leftUpBorderArcPrimitiveNormal) {
        this._leftUpBorderArcPrimitiveNormal.delete();
        this._leftUpBorderArcPrimitiveNormal = void 0;
      }
      if (this._rightUpBorderArcPrimitiveNormal) {
        this._rightUpBorderArcPrimitiveNormal.delete();
        this._rightUpBorderArcPrimitiveNormal = void 0;
      }
      if (this._rightBottomBorderArcPrimitiveNormal) {
        this._rightBottomBorderArcPrimitiveNormal.delete();
        this._rightBottomBorderArcPrimitiveNormal = void 0;
      }
      if (this._leftBottomBorderArcPrimitiveNormal) {
        this._leftBottomBorderArcPrimitiveNormal.delete();
        this._leftBottomBorderArcPrimitiveNormal = void 0;
      }
      if (this._leftUpBorderArcPrimitiveHightlight) {
        this._leftUpBorderArcPrimitiveHightlight.delete();
      }
      if (this._rightUpBorderArcPrimitiveHightlight) {
        this._rightUpBorderArcPrimitiveHightlight.delete();
        this._rightUpBorderArcPrimitiveHightlight = void 0;
      }
      if (this._rightBottomBorderArcPrimitiveHightlight) {
        this._rightBottomBorderArcPrimitiveHightlight.delete();
        this._rightBottomBorderArcPrimitiveHightlight = void 0;
      }
      if (this._leftBottomBorderArcPrimitiveHightlight) {
        this._leftBottomBorderArcPrimitiveHightlight.delete();
        this._leftBottomBorderArcPrimitiveHightlight = void 0;
      }
    }
    normalview(shapeObjectItem, isFill) {
      if (this._topBorderLinePrimitiveHightlight) {
        this._topBorderLinePrimitiveHightlight.delete();
        this._topBorderLinePrimitiveHightlight = void 0;
      }
      if (this._rightBorderLinePrimitiveHightlight) {
        this._rightBorderLinePrimitiveHightlight.delete();
        this._rightBorderLinePrimitiveHightlight = void 0;
      }
      if (this._bottomBorderLinePrimitiveHightlight) {
        this._bottomBorderLinePrimitiveHightlight.delete();
        this._bottomBorderLinePrimitiveHightlight = void 0;
      }
      if (this._leftBorderLinePrimitiveHightlight) {
        this._leftBorderLinePrimitiveHightlight.delete();
        this._leftBorderLinePrimitiveHightlight = void 0;
      }
      if (this._leftUpBorderArcPrimitiveHightlight) {
        this._leftUpBorderArcPrimitiveHightlight.delete();
        this._leftUpBorderArcPrimitiveHightlight = void 0;
      }
      if (this._rightUpBorderArcPrimitiveHightlight) {
        this._rightUpBorderArcPrimitiveHightlight.delete();
        this._rightUpBorderArcPrimitiveHightlight = void 0;
      }
      if (this._rightBottomBorderArcPrimitiveHightlight) {
        this._rightBottomBorderArcPrimitiveHightlight.delete();
        this._rightBottomBorderArcPrimitiveHightlight = void 0;
      }
      if (this._leftBottomBorderArcPrimitiveHightlight) {
        this._leftBottomBorderArcPrimitiveHightlight.delete();
        this._leftBottomBorderArcPrimitiveHightlight = void 0;
      }
      const elementItemType = shapeObjectItem.getType();
      switch (elementItemType) {
        case "D2Rect" /* D2Rect */: {
          if (!this._fillRegionPrimitiveNormal && isFill) {
            this._fillRegionPrimitiveNormal = new BaseD2Line(this.layerItemId, this);
          }
          if (!this._topBorderLinePrimitiveNormal) {
            this._topBorderLinePrimitiveNormal = new BaseD2Line(this.layerItemId, this);
          }
          if (!this._rightBorderLinePrimitiveNormal) {
            this._rightBorderLinePrimitiveNormal = new BaseD2Line(this.layerItemId, this);
          }
          if (!this._bottomBorderLinePrimitiveNormal) {
            this._bottomBorderLinePrimitiveNormal = new BaseD2Line(this.layerItemId, this);
          }
          if (!this._leftBorderLinePrimitiveNormal) {
            this._leftBorderLinePrimitiveNormal = new BaseD2Line(this.layerItemId, this);
          }
          if (!this._leftUpBorderArcPrimitiveNormal) {
            this._leftUpBorderArcPrimitiveNormal = new BaseD2Arc(this.layerItemId, this);
          }
          if (!this._rightUpBorderArcPrimitiveNormal) {
            this._rightUpBorderArcPrimitiveNormal = new BaseD2Arc(this.layerItemId, this);
          }
          if (!this._rightBottomBorderArcPrimitiveNormal) {
            this._rightBottomBorderArcPrimitiveNormal = new BaseD2Arc(this.layerItemId, this);
          }
          if (!this._leftBottomBorderArcPrimitiveNormal) {
            this._leftBottomBorderArcPrimitiveNormal = new BaseD2Arc(this.layerItemId, this);
          }
          break;
        }
        case "D2AssistRect" /* D2AssistRect */: {
          if (!this._fillRegionPrimitiveNormal && isFill) {
            this._fillRegionPrimitiveNormal = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
          }
          if (!this._topBorderLinePrimitiveNormal) {
            this._topBorderLinePrimitiveNormal = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
          }
          if (!this._rightBorderLinePrimitiveNormal) {
            this._rightBorderLinePrimitiveNormal = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
          }
          if (!this._bottomBorderLinePrimitiveNormal) {
            this._bottomBorderLinePrimitiveNormal = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
          }
          if (!this._leftBorderLinePrimitiveNormal) {
            this._leftBorderLinePrimitiveNormal = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
          }
          if (!this._leftUpBorderArcPrimitiveNormal) {
            this._leftUpBorderArcPrimitiveNormal = new BaseD2Arc("dw_ml_1000001" /* MaskLayer */, this);
          }
          if (!this._rightUpBorderArcPrimitiveNormal) {
            this._rightUpBorderArcPrimitiveNormal = new BaseD2Arc("dw_ml_1000001" /* MaskLayer */, this);
          }
          if (!this._rightBottomBorderArcPrimitiveNormal) {
            this._rightBottomBorderArcPrimitiveNormal = new BaseD2Arc("dw_ml_1000001" /* MaskLayer */, this);
          }
          if (!this._leftBottomBorderArcPrimitiveNormal) {
            this._leftBottomBorderArcPrimitiveNormal = new BaseD2Arc("dw_ml_1000001" /* MaskLayer */, this);
          }
          break;
        }
      }
    }
    hightlighting() {
      if (!this._topBorderLinePrimitiveHightlight) {
        this._topBorderLinePrimitiveHightlight = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (!this._rightBorderLinePrimitiveHightlight) {
        this._rightBorderLinePrimitiveHightlight = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (!this._bottomBorderLinePrimitiveHightlight) {
        this._bottomBorderLinePrimitiveHightlight = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (!this._leftBorderLinePrimitiveHightlight) {
        this._leftBorderLinePrimitiveHightlight = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (!this._leftUpBorderArcPrimitiveHightlight) {
        this._leftUpBorderArcPrimitiveHightlight = new BaseD2Arc("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (!this._rightUpBorderArcPrimitiveHightlight) {
        this._rightUpBorderArcPrimitiveHightlight = new BaseD2Arc("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (!this._rightBottomBorderArcPrimitiveHightlight) {
        this._rightBottomBorderArcPrimitiveHightlight = new BaseD2Arc("dw_ml_1000001" /* MaskLayer */, this);
      }
      if (!this._leftBottomBorderArcPrimitiveHightlight) {
        this._leftBottomBorderArcPrimitiveHightlight = new BaseD2Arc("dw_ml_1000001" /* MaskLayer */, this);
      }
    }
  };

  // src/view/views/structure/primitive2d/BaseD2Text.ts
  var BaseD2Text = class extends StructureItemBase {
    constructor(layerItemId, parent) {
      super(layerItemId);
      this.parent = parent;
    }
    modify(data) {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId === null) {
        this.belongId = drawLayerViewItem.layerPayloads.addD2TextProfileItem(data);
      } else {
        drawLayerViewItem.layerPayloads.updateD2TextProfileItem(this.belongId, data);
      }
    }
    delete() {
      const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
      if (this.belongId !== null) {
        drawLayerViewItem.layerPayloads.deletedD2TextProfileItem(this.belongId);
      }
    }
  };

  // src/view/views/shapes/primitive2d/D2TextView.ts
  var D2TextView = class extends D2ShapeElementViewBase {
    constructor(shapeObject) {
      super(shapeObject);
      this._mainPrimitive = null;
      this._fillRegionPrimitiveNormal = null;
      this._fillRegionPrimitiveHightlight = null;
      this.type = shapeObject.getType();
      this.layerItemId = shapeObject.model.layerItemId;
    }
    modify(shapeObjectItem) {
      const { status } = shapeObjectItem;
      const { layerItemId } = shapeObjectItem.model;
      this.layerItemId = layerItemId;
      this.status = status;
      const shapeObjectItemJson = shapeObjectItem.toJSON();
      if (this.killed) {
        this.delete();
      } else if (this.hightlight) {
        this.hightlighting();
      } else {
        this.normalview(shapeObjectItem);
      }
      if (this._mainPrimitive) {
        this._mainPrimitive.modify(shapeObjectItemJson);
      }
      const radius = Math.min(
        shapeObjectItemJson.styleSetting.borderRadius,
        Math.abs(shapeObjectItemJson.width / 2),
        Math.abs(shapeObjectItemJson.height / 2)
      );
      const leftUp = Vector2.createByJSONData(shapeObjectItemJson.leftUp);
      const rightUp = Vector2.createByJSONData(shapeObjectItemJson.rightUp);
      const rightDown = Vector2.createByJSONData(shapeObjectItemJson.rightDown);
      const leftDown = Vector2.createByJSONData(shapeObjectItemJson.leftDown);
      const topNorDirect = rightUp.sub(leftUp).normalize();
      const rightNorDirect = rightDown.sub(rightUp).normalize();
      const bottomNorDirect = leftDown.sub(rightDown).normalize();
      const leftNorDirect = leftUp.sub(leftDown).normalize();
      const topBorderLineStartPoint = leftUp.add(topNorDirect.scale(radius));
      const topBorderLineEndPoint = rightUp.add(topNorDirect.rotate(Math.PI).scale(radius));
      const rightBorderLineStartPoint = rightUp.add(rightNorDirect.scale(radius));
      const rightBorderLineEndPoint = rightDown.add(rightNorDirect.rotate(Math.PI).scale(radius));
      const bottomBorderLineStartPoint = rightDown.add(bottomNorDirect.scale(radius));
      const bottomBorderLineEndPoint = leftDown.add(bottomNorDirect.rotate(Math.PI).scale(radius));
      const leftBorderLineStartPoint = leftDown.add(leftNorDirect.scale(radius));
      const leftBorderLineEndPoint = leftUp.add(leftNorDirect.rotate(Math.PI).scale(radius));
      const leftUpBorderArcCenterPoint = leftBorderLineEndPoint.add(topNorDirect.scale(radius));
      const rightUpBorderArcCenterPoint = rightBorderLineStartPoint.add(topNorDirect.rotate(Math.PI).scale(radius));
      const rightBottomBorderArcCenterPoint = rightBorderLineEndPoint.add(bottomNorDirect.scale(radius));
      const leftBottomBorderArcCenterPoint = leftBorderLineStartPoint.add(bottomNorDirect.rotate(Math.PI).scale(radius));
      const topCenterPoint = leftUp.add(rightUp).scale(0.5);
      const rightCenterPoint = rightDown.add(rightUp).scale(0.5);
      const bottomCenterPoint = leftDown.add(rightDown).scale(0.5);
      const leftCenterPoint = leftDown.add(leftUp).scale(0.5);
      if (this._fillRegionPrimitiveNormal) {
        this._fillRegionPrimitiveNormal.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          startPoint: leftCenterPoint,
          endPoint: rightCenterPoint,
          strokeWidth: topCenterPoint.sub(bottomCenterPoint).length,
          strokeColorData: shapeObjectItemJson.styleSetting.backgourdColor.toRGBAJSON(),
          alpha: shapeObjectItemJson.alpha,
          lineCap: "SQUARE" /* SQUARE */,
          isSolid: true,
          segSize: 0,
          gapSize: 0,
          rectBorderRadius: (rightCenterPoint.sub(leftCenterPoint).length - topBorderLineEndPoint.sub(topBorderLineStartPoint).length) / 2,
          isFixedStrokeWidth: false
        });
      }
      if (shapeObjectItemJson.contentReady && this._fillRegionPrimitiveHightlight) {
        this._fillRegionPrimitiveHightlight.modify({
          status: shapeObjectItemJson.status,
          layerItemId: shapeObjectItemJson.layerItemId,
          startPoint: leftCenterPoint,
          endPoint: rightCenterPoint,
          strokeWidth: topCenterPoint.sub(bottomCenterPoint).length,
          strokeColorData: MaskColor.createStrokeColor(0.25).toRGBAJSON(),
          alpha: shapeObjectItemJson.alpha,
          lineCap: "SQUARE" /* SQUARE */,
          isSolid: true,
          segSize: 0,
          gapSize: 0,
          rectBorderRadius: (rightCenterPoint.sub(leftCenterPoint).length - topBorderLineEndPoint.sub(topBorderLineStartPoint).length) / 2,
          isFixedStrokeWidth: false
        });
      }
    }
    delete() {
      if (this._mainPrimitive) {
        this._mainPrimitive.delete();
      }
      if (this._fillRegionPrimitiveHightlight) {
        this._fillRegionPrimitiveHightlight.delete();
        this._fillRegionPrimitiveHightlight = null;
      }
      if (this._fillRegionPrimitiveNormal) {
        this._fillRegionPrimitiveNormal.delete();
        this._fillRegionPrimitiveNormal = void 0;
      }
    }
    normalview(shapeObjectItem) {
      if (!this._mainPrimitive) {
        this._mainPrimitive = new BaseD2Text(this.layerItemId, this);
      }
      if (this._fillRegionPrimitiveHightlight) {
        this._fillRegionPrimitiveHightlight.delete();
        this._fillRegionPrimitiveHightlight = void 0;
      }
      if (!this._fillRegionPrimitiveNormal) {
        this._fillRegionPrimitiveNormal = new BaseD2Line(this.layerItemId, this);
      }
    }
    hightlighting() {
      if (!this._fillRegionPrimitiveHightlight) {
        this._fillRegionPrimitiveHightlight = new BaseD2Line("dw_ml_1000001" /* MaskLayer */, this);
      }
    }
  };

  // src/view/manager/ShapeViewManager.ts
  var ShapeViewManager = class _ShapeViewManager extends BaseManager {
    static getInstance() {
      if (_ShapeViewManager.instance === void 0) {
        _ShapeViewManager.instance = new _ShapeViewManager();
      }
      return _ShapeViewManager.instance;
    }
    constructor() {
      super();
    }
    handleModify(scene, elements) {
      for (let element of elements) {
        if (element.killed) {
          this.deleteItem(element.elementItemId);
          continue;
        }
        this.modifyItem(element);
      }
    }
    modifyItem(elementShapeObject) {
      const { elementItemId } = elementShapeObject;
      const elementType = elementShapeObject.getType();
      let elementItem = this.items.get(elementItemId);
      if (!elementItem) {
        let newElementItem = null;
        switch (elementType) {
          case "D2Point" /* D2Point */: {
            newElementItem = new D2PointView(elementShapeObject);
            break;
          }
          case "D2AssistLine" /* D2AssistLine */:
          case "D2Line" /* D2Line */: {
            newElementItem = new D2LineView(elementShapeObject);
            break;
          }
          case "D2Circle" /* D2Circle */: {
            newElementItem = new D2CircleView(elementShapeObject);
            break;
          }
          case "D2Arc" /* D2Arc */: {
            newElementItem = new D2ArcView(elementShapeObject);
            break;
          }
          case "D2Text" /* D2Text */: {
            newElementItem = new D2TextView(elementShapeObject);
            break;
          }
          case "D2Image" /* D2Image */: {
            newElementItem = new D2ImageView(elementShapeObject);
            break;
          }
          case "D2AssistRect" /* D2AssistRect */:
          case "D2Rect" /* D2Rect */: {
            newElementItem = new D2RectView(elementShapeObject);
            break;
          }
        }
        if (newElementItem) {
          this.items.set(elementShapeObject.elementItemId, newElementItem);
          elementItem = newElementItem;
        }
      }
      if (elementItem) {
        elementItem.modify(elementShapeObject);
      }
    }
    deleteItem(elementItemId) {
      const elementItem = this.items.get(elementItemId);
      if (!elementItem) {
        return;
      }
      elementItem.delete();
      this.items.delete(elementItemId);
    }
    quit() {
      super.quit();
      _ShapeViewManager.instance = void 0;
    }
  };

  // src/presenter/ElementPresenter.ts
  var ElementPresenter = class extends Presenter {
    constructor(scene) {
      super();
      this._scene = scene;
    }
    notify(elements) {
      ShapeViewManager.getInstance().handleModify(this._scene, elements);
      DrawLayerViewManager.getInstance().handleRefreshView(this._scene);
    }
    quit() {
      ShapeViewManager.getInstance().quit();
      DrawLayerViewManager.getInstance().quit();
    }
  };

  // src/engine/common/BaseInterface.ts
  var BaseInterface2 = class {
  };

  // src/engine/common/Scene.ts
  var Scene = class extends BaseInterface2 {
    constructor(canvasElement) {
      super();
      this._canvasElement = canvasElement;
      this._renderer = null;
      this._canvasBackgroundColor = new Color(0, 0, 0, 1);
      this._camera = null;
      this.updateCanvasStyle();
    }
    get renderer() {
      return this._renderer;
    }
    set renderer(value) {
      this._renderer = value;
    }
    get canvasBackgroundColor() {
      return this._canvasBackgroundColor;
    }
    set canvasBackgroundColor(value) {
      this._canvasBackgroundColor = value;
      this.updateCanvasStyle();
    }
    get camera() {
      return this._camera;
    }
    set camera(value) {
      this._camera = value;
    }
    quit() {
      this._canvasElement = void 0;
      this._renderer = void 0;
      this._camera = void 0;
    }
    updateCanvasStyle() {
      this._canvasElement.style.backgroundColor = Color.rgba2Hex(this.canvasBackgroundColor);
    }
  };

  // src/engine/common/BitmapIndex.ts
  var START_ADDRESS = 0;
  var FULL_ADDRESS = 4294967295;
  var EMPTY_TAG = 0;
  var BYTE_CHUNK_SIZE = 32;
  var BitmapIndex = class _BitmapIndex {
    constructor(size) {
      this._size = size;
      this._index = new Uint32Array(Math.ceil(size / BYTE_CHUNK_SIZE));
      this._max = -1;
      this._emptyStart = 0;
      this._marked = 0;
      this.init();
    }
    init(bitMapIndexItem = null) {
      if (bitMapIndexItem) {
        this._index.set(bitMapIndexItem._index);
        this._marked = bitMapIndexItem._marked;
        this._emptyStart = bitMapIndexItem._emptyStart;
        this._max = bitMapIndexItem._max;
        return this;
      }
      return this;
    }
    get size() {
      return this._size;
    }
    extendSize(size) {
      const newBitmapIndex = new _BitmapIndex(size);
      newBitmapIndex.init(this);
      return newBitmapIndex;
    }
    isEmpty() {
      return this._marked === 0;
    }
    getMarked() {
      return this._marked;
    }
    getChunk(idx) {
      return this._index[idx];
    }
    isUsed(idx) {
      const chunkIndex = idx / BYTE_CHUNK_SIZE | 0;
      const chunkItem = this._index[chunkIndex];
      if (chunkItem === FULL_ADDRESS) {
        return true;
      }
      if (chunkItem === EMPTY_TAG) {
        return false;
      }
      return (chunkItem >> BYTE_CHUNK_SIZE - 1 - idx & 1) === 1;
    }
    markUsed(idx) {
      const chunkIndex = idx / BYTE_CHUNK_SIZE | 0;
      const chunkItem = this._index[chunkIndex];
      const offset = 1 << BYTE_CHUNK_SIZE - 1 - idx;
      if ((chunkItem & offset) === 0) {
        this._index[chunkIndex] = chunkItem | offset;
        this._marked++;
      }
      if (idx > this._max) {
        this._max = idx;
      }
    }
    markRemove(idx) {
      const chunkIndex = idx / BYTE_CHUNK_SIZE | 0;
      const chunkItem = this._index[chunkIndex];
      const offset = 1 << BYTE_CHUNK_SIZE - 1 - idx;
      if ((chunkItem & offset) !== 0) {
        this._index[chunkIndex] = chunkItem & (FULL_ADDRESS ^ offset);
        this._marked--;
        if (idx < this._emptyStart) {
          this._emptyStart = idx;
        }
      }
    }
    reset() {
      this._index.fill(0);
      this._marked = 0;
      this._emptyStart = 0;
      this._max = -1;
    }
    findEmpty(chunks = -1) {
      if (this._size - this._marked < chunks) {
        return -1;
      }
      const index = this._index;
      let start = -1;
      let isSetEmptyStart = false;
      for (let i = Math.floor(this._emptyStart / BYTE_CHUNK_SIZE); i < index.length; i++) {
        const chunkItem = index[i];
        if (chunkItem === EMPTY_TAG) {
          if (start === -1) {
            start = i * BYTE_CHUNK_SIZE;
            if (isSetEmptyStart) {
              this._emptyStart = start;
              isSetEmptyStart = true;
            }
            if (chunks <= BYTE_CHUNK_SIZE) {
              return start;
            }
          } else {
            let end = (i + 1) * BYTE_CHUNK_SIZE;
            if (end - start >= chunks) {
              return start;
            }
          }
        } else if (chunkItem !== FULL_ADDRESS) {
          for (let j = BYTE_CHUNK_SIZE - 1; j >= 0; j--) {
            if ((chunkItem >> j & 1) === 0) {
              let endIndex = i * BYTE_CHUNK_SIZE + BYTE_CHUNK_SIZE - 1 - j;
              if (start === -1) {
                start = endIndex;
                if (!isSetEmptyStart) {
                  this._emptyStart = start;
                  isSetEmptyStart = true;
                }
              }
              if (endIndex - start + 1 >= chunks) {
                return start;
              }
            } else {
              start = -1;
            }
          }
        } else {
          start = -1;
        }
      }
      return -1;
    }
    hasNextEmpty(count = 1) {
      return this._size - this._marked >= count;
    }
    /**
     * 获取一组长度为 {count} 的可用空间并返回索引空间(地址)
     */
    findNextEmpty(count = 1) {
      const result = [];
      if (this._size - this._marked < count) {
        throw new Error("memory allocation failed: there is not enough memory address space for the current ObjectBlendBuffer.");
      }
      if (this._size - this._max - 1 >= count) {
        const end = this._max + count;
        for (let i = this._max + 1; i <= end; i++) {
          result.push(i);
        }
        return result;
      }
      const index = this._index;
      for (let i = Math.floor(this._emptyStart / BYTE_CHUNK_SIZE); i < index.length; i++) {
        if (this._marked + result.length === i * BYTE_CHUNK_SIZE) {
          for (let j = i * BYTE_CHUNK_SIZE; result.length !== count; j++) {
            result.push(j);
          }
          this._emptyStart = result[0];
          return result;
        }
        const chunkItem = index[i];
        if (chunkItem === START_ADDRESS) {
          const tmp = i * BYTE_CHUNK_SIZE;
          if (result.indexOf(tmp) === -1) {
            result.push(tmp);
            if (result.length >= count) {
              this._emptyStart = result[0];
              return result;
            } else {
              const num = count - result.length;
              if (num < BYTE_CHUNK_SIZE) {
                for (let k = 0; k < num; k++) {
                  result.push(tmp + k + 1);
                }
                this._emptyStart = result[0];
                return result;
              } else {
                for (let k = 0; k < BYTE_CHUNK_SIZE - 1; k++) {
                  result.push(tmp + k + 1);
                }
              }
            }
          }
        } else if (chunkItem !== FULL_ADDRESS) {
          for (let j = BYTE_CHUNK_SIZE - 1; j >= 0; j--) {
            if ((chunkItem >> j & 1) === 0) {
              const tmp = i * BYTE_CHUNK_SIZE + BYTE_CHUNK_SIZE - 1 - j;
              if (result.indexOf(tmp) === -1) {
                result.push(tmp);
                if (result.length === count) {
                  this._emptyStart = result[0];
                  return result;
                }
              }
            }
          }
        }
      }
      this._emptyStart = result.length === 0 ? this._size : result[0];
      return [];
    }
    getMax() {
      return this._max;
    }
    debug() {
      const display = [];
      const index = this._index;
      for (let i = 0; i < index.length; i++) {
        display.push(format2Binary(index[i]));
      }
      console.log(display);
    }
  };

  // src/engine/common/Plane.ts
  var Plane = class extends BaseInterface2 {
    constructor(planeId, sceneInstance) {
      super();
      this._scene = sceneInstance;
      this._planeId = planeId;
    }
    get scene() {
      return this._scene;
    }
    get planeId() {
      return this._planeId;
    }
    getColorAlpha() {
      return 1;
    }
    quit() {
      this._scene = void 0;
      this._planeId = void 0;
    }
  };

  // src/engine/webgl/primitives/PrimitiveGL.ts
  var PT_TYPES = [1 /* D2_ARC */, 2 /* D2_CIRCLE */, 3 /* D2_IMAGE */, 4 /* D2_LINE */, 5 /* D2_POINT */, 6 /* D2_TEXT */];

  // src/engine/webgl/buffer/DataBufferGL.ts
  var FLOAT_32_ARRAY_BYTESIZE = 4;
  var DataBufferGL = class _DataBufferGL {
    constructor(webGL, bufferSize32, glBufferTypeEnum, glUsage) {
      this._webGL = webGL;
      this._bufferSize32 = bufferSize32;
      this._glBufferTypeEnum = glBufferTypeEnum;
      this._glUsage = glUsage;
      this._webglBuffer = null;
      this._glBufferType = 0;
      if (this._glBufferTypeEnum === "ARRAY_BUFFER") {
        this._glBufferType = this._webGL.gl.ARRAY_BUFFER;
        this._webglBuffer = this._webGL.createWebGLArrayBufferBySize(this._bufferSize32, this._glUsage);
      } else if (this._glBufferTypeEnum === "ELEMENT_ARRAY_BUFFER") {
        this._glBufferType = this._webGL.gl.ELEMENT_ARRAY_BUFFER;
        this._webglBuffer = this._webGL.createWebGLElementBufferBySize(this._bufferSize32, this._glUsage);
      }
    }
    get bufferSize32() {
      return this._bufferSize32;
    }
    get webglBufferType() {
      return this._glBufferType;
    }
    get webglBuffer() {
      return this._webglBuffer;
    }
    destroy() {
      this._webGL.gl.deleteBuffer(this._webglBuffer);
    }
    setSize(bufferSize32) {
      if (bufferSize32 === this._bufferSize32) {
        return;
      }
      this._bufferSize32 = bufferSize32;
      if (this._glBufferTypeEnum === "ARRAY_BUFFER") {
        this._webglBuffer = this._webGL.createWebGLArrayBufferBySize(this._bufferSize32, this._glUsage);
      } else if (this._glBufferTypeEnum === "ELEMENT_ARRAY_BUFFER") {
        this._webglBuffer = this._webGL.createWebGLElementBufferBySize(this._bufferSize32, this._glUsage);
      }
      this.setBuffer(this._webglBuffer);
    }
    extSize(bufferSize32) {
      if (bufferSize32 === this._bufferSize32) {
        return;
      }
      this._bufferSize32 += bufferSize32;
      const dataBufferGL = new _DataBufferGL(this._webGL, this._bufferSize32, this._glBufferTypeEnum, this._glUsage);
      this.setBuffer(dataBufferGL.webglBuffer);
    }
    setBuffer(webglBuffer) {
      this._webGL.gl.deleteBuffer(this._webglBuffer);
      this._webglBuffer = webglBuffer;
    }
    submitData(data) {
      this._webGL.gl.bindBuffer(this._glBufferType, this._webglBuffer);
      this._webGL.gl.bufferData(this._glBufferType, data, this._glUsage);
      this._webGL.gl.bindBuffer(this._glBufferType, null);
    }
  };

  // src/engine/webgl/buffer/BufferBuilderGL.ts
  var BufferBuilderGL = class {
    constructor(arrayConstructor, dataBuffer, arr, maxLength = Number.POSITIVE_INFINITY) {
      this._arrayConstructor = arrayConstructor;
      this._dataBuffer = dataBuffer;
      this._arr = arr;
      this._maxLength = maxLength;
      this._upperItemIndex = -1;
    }
    get dataBuffer() {
      return this._dataBuffer;
    }
    get arr() {
      return this._arr;
    }
    get arrItemSize() {
      return this._upperItemIndex + 1;
    }
    get arrayConstructor() {
      return this._arrayConstructor;
    }
    getItemByIndex(index) {
      return this._arr[index];
    }
    setUpperItemIndex(value) {
      if (value <= -1) {
        value = -1;
      }
      if (value >= this._arr.length - 1) {
        value = this._arr.length - 1;
      }
      this._upperItemIndex = value;
    }
    getUpperItemIndex() {
      return this._upperItemIndex;
    }
    extArr(size) {
      const rsize = __pow(2, Math.ceil(Math.log2(size)));
      const arr = new this.arrayConstructor(Math.min(rsize, rsize >= this._maxLength ? rsize : this._maxLength));
      arr.set(this._arr);
      this._arr = arr;
      this._maxLength = this._arr.length;
    }
    setValueByIndex(index, value) {
      this._upperItemIndex = index >= this._upperItemIndex ? index : this._upperItemIndex;
      if (this._upperItemIndex > this._arr.length - 1) {
        this.extArr(this._upperItemIndex + 2);
      }
      this._arr[index] = value;
    }
    setArrByIndex(index, arr) {
      const endIndex = index + arr.length - 1;
      this._upperItemIndex = endIndex >= this._upperItemIndex ? endIndex : this._upperItemIndex;
      if (this._upperItemIndex > this._arr.length - 1) {
        this.extArr(this._upperItemIndex + 2);
      }
      this._arr.set(arr, index);
    }
    // public clearItemByIndex(index: number, value: number = 0): void {
    // 	if (this._upperItemIndex < index) {
    // 		return
    // 	}
    // 	if (this._upperItemIndex === index) {
    // 		this._upperItemIndex -= 1
    // 	}
    // 	this._arr[index] = value
    // }
    clearArrByIndex(index, arr) {
      if (this._upperItemIndex < index) {
        return;
      }
      if (this._upperItemIndex === index) {
        this._upperItemIndex -= 1;
      }
      this._arr.set(arr, index);
    }
    stretchArr(startIndex, endIndex, size) {
      const oldSize = endIndex - startIndex;
      const stretchSize = size - oldSize;
      if (stretchSize >= this._arr.length) {
        this.extArr(stretchSize + 2);
      }
      const subArray = this.arr.subarray(startIndex, endIndex);
      const newArr = new this.arrayConstructor(size);
      for (let i = startIndex; i < endIndex; i++) {
        newArr[i] = subArray[i];
      }
      subArray.set(newArr);
      if (this._upperItemIndex >= endIndex) {
        this._upperItemIndex += stretchSize;
      }
      return stretchSize;
    }
    update() {
      this._dataBuffer.submitData(this._arr);
      return this._dataBuffer;
    }
    clearArr() {
      this._arr = new this.arrayConstructor(this._maxLength);
      this._upperItemIndex = -1;
    }
    clear() {
      this._arr = new this.arrayConstructor(this._maxLength);
      this._upperItemIndex = -1;
      this._dataBuffer.setSize(1);
      this._dataBuffer.submitData(this._arr.slice(0, 0));
    }
  };

  // src/engine/webgl/buffer/PrimitiveDataBuilderGL.ts
  var MAX_DYNAMIC_PT_NUM = 2048;
  var PRIMITIVE_BLOCK_PTTYPE_MAXNUM = {
    [1 /* D2_ARC */]: MAX_DYNAMIC_PT_NUM,
    [2 /* D2_CIRCLE */]: MAX_DYNAMIC_PT_NUM,
    [3 /* D2_IMAGE */]: 1,
    [4 /* D2_LINE */]: MAX_DYNAMIC_PT_NUM,
    [5 /* D2_POINT */]: MAX_DYNAMIC_PT_NUM,
    [6 /* D2_TEXT */]: 1
  };
  var PrimitiveDataBuilderGL = class {
    constructor(webGL) {
      this._webGL = webGL;
      this._pmBitMapIndex = /* @__PURE__ */ new Map();
      this._pmBlocks = /* @__PURE__ */ new Map();
      this._pmBlockIndex = /* @__PURE__ */ new Map();
      this.initPtTypeBlocks();
    }
    getPmBlocks() {
      return this._pmBlocks;
    }
    initPtTypeBlocks() {
      for (let i = 0; i < PT_TYPES.length; i++) {
        this._pmBitMapIndex.set(PT_TYPES[i], new BitmapIndex(PRIMITIVE_BLOCK_PTTYPE_MAXNUM[PT_TYPES[i]]));
        this._pmBlocks.set(PT_TYPES[i], [this.initBlock(PT_TYPES[i])]);
        this._pmBlockIndex.set(PT_TYPES[i], 0);
      }
    }
    updateBlockTexture(blockItem, texture) {
      blockItem.texture = texture;
    }
    update(blockItem) {
      if (blockItem.isChanged) {
        blockItem.ptDatasBuilder.update();
        if (blockItem.isEnableIndices) {
          blockItem.indicesBuilder.update();
        }
      }
      blockItem.isChanged = false;
    }
    addPrimitiveItem(ptType, ptData, indices) {
      if (!this._pmBitMapIndex.has(ptType)) {
        throw new Error("illegal primitive type.");
      }
      let bitMapIndex = this._pmBitMapIndex.get(ptType);
      let globalIndex = bitMapIndex.findEmpty();
      const needExtIndexMap = globalIndex === -1;
      if (needExtIndexMap) {
        bitMapIndex = bitMapIndex.extendSize(bitMapIndex.size * 2);
        this._pmBitMapIndex.set(ptType, bitMapIndex);
        globalIndex = bitMapIndex.findEmpty();
      }
      bitMapIndex.markUsed(globalIndex);
      const blockItem = this.insertPtItem(ptType, globalIndex, ptData, indices);
      return { globalIndex, blockItem };
    }
    updatePrimitiveItem(ptType, globalIndex, ptData, indices) {
      const blockIndex = Math.floor(globalIndex / PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType]);
      const localIndex = globalIndex % PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType];
      const blocks = this._pmBlocks.get(ptType);
      if (!blocks || !blocks[blockIndex]) {
        throw new Error("illegal primitive pt_type.");
      }
      const blockItem = blocks[blockIndex];
      const stretchResult = this.stretchBuffer(blockItem, localIndex, ptData, false);
      if (typeof indices !== "undefined") {
        blockItem.indicesBuilder.setArrByIndex(stretchResult.nowStartIndex, indices);
      }
      blockItem.isChanged = true;
      return blockItem;
    }
    deletePrimitiveItem(ptType, globalIndex) {
      const blockIndex = Math.floor(globalIndex / PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType]);
      const localIndex = globalIndex % PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType];
      const blocks = this._pmBlocks.get(ptType);
      if (!blocks || !blocks[blockIndex]) {
        throw new Error("illegal primitive pt_type.");
      }
      const blockItem = blocks[blockIndex];
      const bitMapIndex = this._pmBitMapIndex.get(ptType);
      bitMapIndex.markRemove(globalIndex);
      blockItem.ptIdsBuilder.setValueByIndex(localIndex, 0);
      const nowStartIndex = blockItem.ptDatasRecordBuilder.getItemByIndex(localIndex * 2);
      const nextStartSize = blockItem.ptDatasRecordBuilder.getItemByIndex(localIndex * 2 + 1);
      blockItem.ptDatasRecordBuilder.setValueByIndex(localIndex * 2, 0);
      blockItem.ptDatasRecordBuilder.setValueByIndex(localIndex * 2 + 1, 0);
      blockItem.ptDatasBuilder.setArrByIndex(nowStartIndex, new blockItem.ptDatasBuilder.arrayConstructor(nextStartSize));
      const indicesUpperItemIndex = blockItem.indicesBuilder.getUpperItemIndex();
      if (indicesUpperItemIndex >= 0) {
        blockItem.indicesBuilder.clearArr();
      }
      this.arrangeBuffer(ptType, blockItem);
      blockItem.isChanged = true;
      return blockItem;
    }
    clearAll() {
      for (let [ptType, blocks] of this._pmBlocks) {
        for (let i = 0; i < blocks.length; i++) {
          const blockItem = blocks[i];
          blockItem.ptIdsBuilder.clearArr();
          blockItem.ptDatasBuilder.clearArr();
          blockItem.indicesBuilder.clearArr();
          blockItem.ptDatasBuilder.update();
          blockItem.indicesBuilder.update();
        }
      }
      this._pmBlocks.clear();
      this._pmBitMapIndex.clear();
      this._pmBlockIndex.clear();
    }
    insertPtItem(ptType, globalIndex, ptData, indices) {
      const blockIndex = Math.floor(globalIndex / PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType]);
      const localIndex = globalIndex % PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType];
      const blocks = this._pmBlocks.get(ptType);
      if (!blocks[blockIndex]) {
        blocks.push(this.initBlock(ptType));
      }
      const blockItem = blocks[blockIndex];
      blockItem.isEnableIndices = ptType === 6 /* D2_TEXT */;
      if (localIndex === blockItem.ptIdsBuilder.arrItemSize) {
        blockItem.ptIdsBuilder.setValueByIndex(blockItem.ptIdsBuilder.getUpperItemIndex() + 1, globalIndex);
        blockItem.ptDatasRecordBuilder.setValueByIndex(
          blockItem.ptDatasRecordBuilder.getUpperItemIndex() + 1,
          blockItem.ptDatasBuilder.arrItemSize
        );
        blockItem.ptDatasRecordBuilder.setValueByIndex(blockItem.ptDatasRecordBuilder.getUpperItemIndex() + 1, ptData.length);
        blockItem.ptDatasBuilder.setArrByIndex(blockItem.ptDatasBuilder.getUpperItemIndex() + 1, ptData);
        if (typeof indices !== "undefined") {
          blockItem.indicesBuilder.setArrByIndex(blockItem.indicesBuilder.getUpperItemIndex() + 1, indices);
        }
      } else {
        blockItem.ptIdsBuilder.setValueByIndex(localIndex, globalIndex);
        const stretchResult = this.stretchBuffer(blockItem, localIndex, ptData, true);
      }
      this._pmBlocks.set(ptType, blocks);
      this._pmBlockIndex.set(ptType, blockIndex);
      blockItem.isChanged = true;
      return blockItem;
    }
    stretchBuffer(blockItem, localIndex, ptData, isInsert) {
      const nowUseSize = ptData.length;
      const nextStartIndex = blockItem.ptDatasRecordBuilder.getItemByIndex((localIndex + 1) * 2);
      let nowStartIndex = 0;
      if (localIndex === 0) {
        nowStartIndex = 0;
      } else {
        nowStartIndex = blockItem.ptDatasRecordBuilder.getItemByIndex((localIndex - 1) * 2) + blockItem.ptDatasRecordBuilder.getItemByIndex((localIndex - 1) * 2 + 1);
      }
      if (typeof nextStartIndex !== "undefined" && nextStartIndex > nowStartIndex && nowUseSize > nextStartIndex - nowStartIndex) {
        const stretchSize = blockItem.ptDatasBuilder.stretchArr(nowStartIndex, nextStartIndex, nowUseSize);
        blockItem.ptDatasRecordBuilder.setValueByIndex(localIndex * 2, nowStartIndex);
        blockItem.ptDatasRecordBuilder.setValueByIndex(localIndex * 2 + 1, nowUseSize);
        const usedStartSize = blockItem.ptDatasRecordBuilder.arrItemSize;
        for (let i = nextStartIndex; i < usedStartSize; i += 2) {
          blockItem.ptDatasRecordBuilder.setValueByIndex(i, blockItem.ptDatasRecordBuilder.getItemByIndex(i) + stretchSize);
        }
      } else {
        if (isInsert) {
          blockItem.ptDatasRecordBuilder.setValueByIndex(localIndex * 2, nowStartIndex);
          blockItem.ptDatasRecordBuilder.setValueByIndex(localIndex * 2 + 1, nowUseSize);
        }
      }
      blockItem.ptDatasBuilder.setArrByIndex(nowStartIndex, ptData);
      return {
        nowStartIndex,
        nextStartIndex
      };
    }
    arrangeBuffer(ptType, blockItem) {
      let idsUpperIndex = blockItem.ptIdsBuilder.getUpperItemIndex();
      let ptsUpperIndex = -2;
      while (idsUpperIndex >= 0) {
        const globalIndex = blockItem.ptIdsBuilder.getItemByIndex(idsUpperIndex);
        if (idsUpperIndex === 0) {
          const nowPtSize = blockItem.ptDatasRecordBuilder.getItemByIndex(1);
          if (nowPtSize <= 0) {
            ptsUpperIndex = -1;
            blockItem.ptIdsBuilder.setUpperItemIndex(-1);
            blockItem.ptDatasRecordBuilder.setUpperItemIndex(-1);
            break;
          }
          ptsUpperIndex = nowPtSize - 1;
          blockItem.ptIdsBuilder.setUpperItemIndex(0);
          blockItem.ptDatasRecordBuilder.setUpperItemIndex(1);
          break;
        }
        const localIndex = globalIndex % PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType];
        if (localIndex <= 0) {
          blockItem.ptIdsBuilder.setUpperItemIndex(blockItem.ptIdsBuilder.getUpperItemIndex() - 1);
          blockItem.ptDatasRecordBuilder.setUpperItemIndex(blockItem.ptDatasRecordBuilder.getUpperItemIndex() - 2);
          idsUpperIndex--;
          continue;
        }
        ptsUpperIndex = blockItem.ptDatasRecordBuilder.getItemByIndex(localIndex * 2) + blockItem.ptDatasRecordBuilder.getItemByIndex(localIndex * 2 + 1) - 1;
        break;
      }
      if (ptsUpperIndex >= -1) {
        blockItem.ptDatasBuilder.setUpperItemIndex(ptsUpperIndex);
      }
    }
    initBlock(ptType) {
      const arrSize1 = PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType];
      const arrSize2 = PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType] * 2;
      const arrSize3 = PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType] * 30;
      const blockItem = {
        isChanged: true,
        isEnableIndices: false,
        blockSize: PRIMITIVE_BLOCK_PTTYPE_MAXNUM[ptType],
        texture: null,
        ptIdsBuilder: new BufferBuilderGL(
          Float32Array,
          new DataBufferGL(this._webGL, arrSize1, "ARRAY_BUFFER", this._webGL.gl.STATIC_DRAW),
          new Float32Array(arrSize1),
          arrSize1
        ),
        indicesBuilder: new BufferBuilderGL(
          Uint16Array,
          new DataBufferGL(this._webGL, arrSize3, "ELEMENT_ARRAY_BUFFER", this._webGL.gl.STATIC_DRAW),
          new Uint16Array(arrSize3),
          arrSize3
        ),
        ptDatasRecordBuilder: new BufferBuilderGL(
          Float32Array,
          new DataBufferGL(this._webGL, arrSize2, "ARRAY_BUFFER", this._webGL.gl.STATIC_DRAW),
          new Float32Array(arrSize2),
          arrSize2
        ),
        ptDatasBuilder: new BufferBuilderGL(
          Float32Array,
          new DataBufferGL(this._webGL, arrSize3, "ARRAY_BUFFER", this._webGL.gl.STATIC_DRAW),
          new Float32Array(arrSize3),
          arrSize3
        )
      };
      return blockItem;
    }
  };

  // src/engine/webgl/primitives/d2Arc/D2ArcDataGL.ts
  var D2ArcDataGL = class {
    static createArrayData(primitiveItemValueData, layerAlpha = 1) {
      const { startRadian, endRadian, sweep } = primitiveItemValueData;
      let sng = startRadian % (Math.PI * 2);
      let eng = endRadian % (Math.PI * 2);
      let sng1 = sweep === 1 /* CCW */ ? sng : eng;
      let eng1 = sweep === 1 /* CCW */ ? eng : sng;
      const fillColorData = primitiveItemValueData.fillColorData ? primitiveItemValueData.fillColorData : { r: 0, g: 0, b: 0, a: 0 };
      const typedArray = [
        1 /* D2_ARC */,
        // 0
        /* ... */
        mm2px(primitiveItemValueData.centerPoint.x, InsConfig.DPI[0]),
        // 1
        mm2px(primitiveItemValueData.centerPoint.y, InsConfig.DPI[1]),
        // 2
        mm2px(0, InsConfig.DPI[0]),
        // 3
        mm2px(primitiveItemValueData.radius, InsConfig.DPI[0]),
        // 4
        /* ... */
        sng1,
        // 5
        eng1,
        // 6
        eng1 > sng1 ? eng1 - sng1 : eng1 - sng1 + Math.PI,
        // 7
        0,
        // 8
        /* ... */
        primitiveItemValueData.alpha * layerAlpha,
        // 9
        primitiveItemValueData.lineCap === "ROUND" /* ROUND */ ? 1 : 0,
        // 10
        mm2px(primitiveItemValueData.strokeWidth, InsConfig.DPI[0]),
        // 11
        primitiveItemValueData.isFill ? 1 : 0,
        // 12
        /* ... */
        primitiveItemValueData.strokeColorData.r,
        // 13
        primitiveItemValueData.strokeColorData.g,
        // 14
        primitiveItemValueData.strokeColorData.b,
        // 15
        primitiveItemValueData.strokeColorData.a,
        // 16
        /* ... */
        fillColorData.r,
        // 17
        fillColorData.g,
        // 18
        fillColorData.b,
        // 19
        fillColorData.a
        // 20
        /* ... */
        // primitiveItemValueData.isSolid ? 1 : 0,  // 21
        // mm2px(primitiveItemValueData.gapSize, InsConfig.DPI[0]),  // 22
        // mm2px(primitiveItemValueData.segSize, InsConfig.DPI[0]),  // 23
        // primitiveItemValueData.isFixedStrokeWidth ? 1 : 0,  // 24
      ];
      return new Float32Array(typedArray);
    }
  };
  D2ArcDataGL.ITEM_SIZE = 21;
  D2ArcDataGL.STRIDE = 21 * FLOAT_32_ARRAY_BYTESIZE;

  // src/engine/webgl/primitives/d2Circle/D2CircleDataGL.ts
  var D2CircleDataGL = class {
    static createArrayData(primitiveItemValueData, layerAlpha = 1) {
      const fillColorData = primitiveItemValueData.fillColorData ? primitiveItemValueData.fillColorData : { r: 0, g: 0, b: 0, a: 0 };
      const typedArray = [
        2 /* D2_CIRCLE */,
        // 0
        /* ... */
        mm2px(primitiveItemValueData.centerPoint.x, InsConfig.DPI[0]),
        // 1
        mm2px(primitiveItemValueData.centerPoint.y, InsConfig.DPI[1]),
        // 2
        mm2px(0, InsConfig.DPI[0]),
        // 3
        mm2px(primitiveItemValueData.radius, InsConfig.DPI[0]),
        // 4
        /* ... */
        primitiveItemValueData.alpha * layerAlpha,
        // 5
        primitiveItemValueData.lineCap === "ROUND" /* ROUND */ ? 1 : 0,
        // 6
        mm2px(primitiveItemValueData.strokeWidth, InsConfig.DPI[0]),
        // 7
        primitiveItemValueData.isFill ? 1 : 0,
        // 8
        /* ... */
        primitiveItemValueData.strokeColorData.r,
        // 9
        primitiveItemValueData.strokeColorData.g,
        // 10
        primitiveItemValueData.strokeColorData.b,
        // 11
        primitiveItemValueData.strokeColorData.a,
        // 12
        /* ... */
        fillColorData.r,
        // 13
        fillColorData.g,
        // 14
        fillColorData.b,
        // 15
        fillColorData.a
        // 16
        /* ... */
        // primitiveItemValueData.isSolid ? 1 : 0,  // 17
        // mm2px(primitiveItemValueData.gapSize, InsConfig.DPI[0]),  // 18
        // mm2px(primitiveItemValueData.segSize, InsConfig.DPI[0]),  // 19
        // primitiveItemValueData.isFixedStrokeWidth ? 1 : 0,  // 20
      ];
      return new Float32Array(typedArray);
    }
  };
  D2CircleDataGL.ITEM_SIZE = 17;
  D2CircleDataGL.STRIDE = 17 * FLOAT_32_ARRAY_BYTESIZE;

  // src/engine/webgl/primitives/d2Image/D2ImageDataGL.ts
  var D2ImageDataGL = class {
    static createArrayData(primitiveItemValueData, layerAlpha = 1) {
      const typedArray = [
        3 /* D2_IMAGE */,
        // 0
        /* ... */
        mm2px(primitiveItemValueData.leftUp.x, InsConfig.DPI[0]),
        // 1
        mm2px(primitiveItemValueData.leftUp.y, InsConfig.DPI[1]),
        // 2
        mm2px(primitiveItemValueData.leftDown.x, InsConfig.DPI[0]),
        // 3
        mm2px(primitiveItemValueData.leftDown.y, InsConfig.DPI[1]),
        // 4
        /* ... */
        mm2px(primitiveItemValueData.rightUp.x, InsConfig.DPI[0]),
        // 5
        mm2px(primitiveItemValueData.rightUp.y, InsConfig.DPI[1]),
        // 6
        mm2px(primitiveItemValueData.rightDown.x, InsConfig.DPI[0]),
        // 7
        mm2px(primitiveItemValueData.rightDown.y, InsConfig.DPI[1]),
        // 8
        /* ... */
        primitiveItemValueData.alpha * layerAlpha,
        // 9
        0,
        // 10
        0,
        // 11
        0,
        // 12
        /* ... */
        0
        // 13
      ];
      return new Float32Array(typedArray);
    }
  };
  D2ImageDataGL.ITEM_SIZE = 14;
  D2ImageDataGL.STRIDE = 14 * FLOAT_32_ARRAY_BYTESIZE;

  // src/engine/webgl/primitives/d2Line/D2LineDataGL.ts
  var D2LineDataGL = class {
    static createArrayData(primitiveItemValueData, layerAlpha = 1) {
      const typedArray = [
        4 /* D2_LINE */,
        // 0
        /* ... */
        mm2px(primitiveItemValueData.startPoint.x, InsConfig.DPI[0]),
        // 1
        mm2px(primitiveItemValueData.startPoint.y, InsConfig.DPI[1]),
        // 2
        mm2px(0, InsConfig.DPI[0]),
        // 3
        mm2px(primitiveItemValueData.endPoint.x, InsConfig.DPI[0]),
        // 4
        mm2px(primitiveItemValueData.endPoint.y, InsConfig.DPI[1]),
        // 5
        mm2px(0, InsConfig.DPI[0]),
        // 6
        /* ... */
        primitiveItemValueData.alpha * layerAlpha,
        // 7
        primitiveItemValueData.lineCap === "ROUND" /* ROUND */ ? 1 : 0,
        // 8
        mm2px(primitiveItemValueData.strokeWidth, InsConfig.DPI[0]),
        // 9
        primitiveItemValueData.isSolid ? 1 : 0,
        // 10
        /* ... */
        mm2px(primitiveItemValueData.segSize, InsConfig.DPI[0]),
        // 11
        mm2px(primitiveItemValueData.gapSize, InsConfig.DPI[0]),
        // 12
        primitiveItemValueData.isFixedStrokeWidth ? 1 : 0,
        // 13
        mm2px(primitiveItemValueData.rectBorderRadius, InsConfig.DPI[0]),
        // 14
        /* ... */
        primitiveItemValueData.strokeColorData.r,
        // 15
        primitiveItemValueData.strokeColorData.g,
        // 16
        primitiveItemValueData.strokeColorData.b,
        // 17
        primitiveItemValueData.strokeColorData.a
        // 18
      ];
      return new Float32Array(typedArray);
    }
  };
  D2LineDataGL.ITEM_SIZE = 19;
  D2LineDataGL.STRIDE = 19 * FLOAT_32_ARRAY_BYTESIZE;

  // src/engine/webgl/primitives/d2Point/D2PointDataGL.ts
  var D2PointDataGL = class {
    static createArrayData(primitiveItemValueData, layerAlpha = 1) {
      const typedArray = [
        5 /* D2_POINT */,
        // 0
        /* ... */
        mm2px(primitiveItemValueData.centerPoint.x, InsConfig.DPI[0]),
        // 1
        mm2px(primitiveItemValueData.centerPoint.y, InsConfig.DPI[1]),
        // 2
        mm2px(0, InsConfig.DPI[0]),
        // 3
        mm2px(primitiveItemValueData.size, InsConfig.DPI[0]),
        // 4
        /* ... */
        primitiveItemValueData.alpha * layerAlpha,
        // 5
        primitiveItemValueData.isEnableScale ? 1 : 0,
        // 6
        primitiveItemValueData.shape === "DOT" /* DOT */ ? 1 : 2,
        // 7
        primitiveItemValueData.rotation,
        // 8
        /* ... */
        primitiveItemValueData.strokeColorData.r,
        // 9
        primitiveItemValueData.strokeColorData.g,
        // 10
        primitiveItemValueData.strokeColorData.b,
        // 11
        primitiveItemValueData.strokeColorData.a
        // 12
      ];
      return new Float32Array(typedArray);
    }
  };
  D2PointDataGL.ITEM_SIZE = 13;
  D2PointDataGL.STRIDE = 13 * FLOAT_32_ARRAY_BYTESIZE;

  // src/engine/webgl/primitives/d2Text/D2TextDataGL.ts
  var D2TextDataGL = class {
    static createArrayData(primitiveItemValueData, layerAlpha = 1) {
      const sourcePositions = primitiveItemValueData.vertexData.positions;
      const allPositions = [6 /* D2_TEXT */];
      for (let i = 0; i < sourcePositions.length; i++) {
        if (i > 0 && i % 2 === 0) {
          allPositions.push(0);
          allPositions.push(
            primitiveItemValueData.alpha * layerAlpha,
            primitiveItemValueData.fontSize,
            0,
            0,
            /* ... */
            primitiveItemValueData.strokeColorData.r,
            primitiveItemValueData.strokeColorData.g,
            primitiveItemValueData.strokeColorData.b,
            primitiveItemValueData.strokeColorData.a
          );
        }
        allPositions.push(mm2px(sourcePositions[i], InsConfig.DPI[0]));
      }
      allPositions.push(0);
      allPositions.push(
        primitiveItemValueData.alpha * layerAlpha,
        primitiveItemValueData.fontSize,
        0,
        0,
        /* ... */
        primitiveItemValueData.strokeColorData.r,
        primitiveItemValueData.strokeColorData.g,
        primitiveItemValueData.strokeColorData.b,
        primitiveItemValueData.strokeColorData.a
      );
      return new Float32Array(allPositions);
    }
    static createIndicesData(primitiveItemValueData) {
      return new Uint16Array(primitiveItemValueData.vertexData.indices);
    }
  };
  D2TextDataGL.ITEM_SIZE = 11;
  D2TextDataGL.STRIDE = 11 * FLOAT_32_ARRAY_BYTESIZE;

  // src/engine/webgl/program/ProgramGL.ts
  var ProgramGL = class {
    constructor(webGL, vs, fs) {
      this._webGL = webGL;
      this._webGLProgram = this._webGL.createProgram(vs, fs);
      this._attributeLocaltions = [];
      this._disabledAttributeLocaltions = /* @__PURE__ */ new Set();
    }
    get webGL() {
      return this._webGL;
    }
    get webGLProgram() {
      return this._webGLProgram;
    }
    get attributeLocaltions() {
      return this._attributeLocaltions;
    }
    get disabledAttributeLocaltions() {
      return this._disabledAttributeLocaltions;
    }
    getWebGLAttributeLocation(name) {
      const loc = this._webGL.getWebGLAttributeLocation(this._webGLProgram, name);
      this.attributeLocaltions.push(loc);
      return loc;
    }
    getWebGLUniformLocation(name) {
      const loc = this._webGL.getWebGLUniformLocation(this._webGLProgram, name);
      return loc;
    }
    setEnable() {
      for (let loc of this.attributeLocaltions) {
        this._webGL.gl.enableVertexAttribArray(loc);
      }
      for (let loc of this._disabledAttributeLocaltions) {
        this._webGL.gl.enableVertexAttribArray(loc);
        this._webGL.gl.vertexAttrib4f(loc, 0, 0, 0, 1);
      }
    }
    setDisable() {
      for (let loc of this.attributeLocaltions) {
        this._webGL.gl.disableVertexAttribArray(loc);
      }
    }
    setEnableLoction(loc) {
      this._disabledAttributeLocaltions.delete(loc);
    }
    setDisableLoction(loc) {
      this._disabledAttributeLocaltions.add(loc);
    }
  };

  // src/engine/webgl/program/InstancedProgramGL.ts
  var InstancedProgramGL = class extends ProgramGL {
    constructor(webGL, vs, fs, indexData) {
      super(webGL, vs, fs);
      this._instancedArrays = this.webGL.getInstancedArrays();
      this._a_indexLoction = this.webGL.getWebGLAttributeLocation(this.webGLProgram, "a_index");
      this._indexWebGLBuffer = this.webGL.gl.createBuffer();
      this.webGL.gl.bindBuffer(this.webGL.gl.ARRAY_BUFFER, this._indexWebGLBuffer);
      this.webGL.gl.bufferData(this.webGL.gl.ARRAY_BUFFER, indexData, this.webGL.gl.STATIC_DRAW);
      this.webGL.gl.vertexAttribPointer(this._a_indexLoction, 1, this.webGL.gl.FLOAT, false, 0, 0);
    }
    get instancedArrays() {
      return this._instancedArrays;
    }
    // protected getWebGLAttributeLocation(name: string): number {
    // 	return super.getWebGLAttributeLocation(name)
    // }
    // protected getWebGLUniformLocation(name: string): WebGLUniformLocation {
    // 	return super.getWebGLUniformLocation(name)
    // }
    setEnable() {
      this.webGL.gl.bindBuffer(this.webGL.gl.ARRAY_BUFFER, this._indexWebGLBuffer);
      this.webGL.gl.vertexAttribPointer(this._a_indexLoction, 1, this.webGL.gl.FLOAT, false, 0, 0);
      this.webGL.gl.enableVertexAttribArray(this._a_indexLoction);
      for (let loc of this.attributeLocaltions) {
        this._instancedArrays.vertexAttribDivisorANGLE(loc, 1);
      }
      super.setEnable();
    }
    setDisable() {
      this.webGL.gl.disableVertexAttribArray(this._a_indexLoction);
      for (let loc of this.attributeLocaltions) {
        this._instancedArrays.vertexAttribDivisorANGLE(loc, 0);
      }
      super.setDisable();
    }
  };

  // src/engine/webgl/primitives/d2Arc/D2ArcShaderGL.ts
  var D2ArcShaderGL = class {
    static createVS() {
      return `
			precision mediump float;
			attribute lowp float a_index;
			attribute vec4 a_objPosition;  // [cx, cy, cz, radius]
			attribute vec4 a_angle;  // [startRadian, endRadian, sweepRadian, <un-use>]
			attribute vec4 a_param;  // [alpha, is-round, stroke-width, is-fill]
			attribute vec4 a_strokeColor;  // [red, green, blue, alpha]
			attribute vec4 a_fillColor;  // [red, green, blue, alpha]
			uniform mat4 u_matrix;
			varying vec4 v_objPosition;
			varying vec4 v_position;
			varying vec4 v_strokeColor;
			varying vec4 v_fillColor;
			varying vec4 v_angle;
			varying vec4 v_param;
			varying float R;
			varying float r;

			float getLess(float a, float b) {
                return a < b ? 1.0 : 0.0;
            }
			float getEqual(float value, float refer) {
                return value == refer ? 1.0 : 0.0;
            }

			void main() {
				if (a_angle[2] == 0.0) {
					return;
				}
				R = a_objPosition[3] + a_param[2] / 2.0;
				r = a_objPosition[3] - a_param[2] / 2.0;
				float strokeWidth = a_param[2];
				if (strokeWidth < 0.0 || r < 0.0 ) {
					return;
				}
				vec4 position = vec4(a_objPosition.x, a_objPosition.y, 0.0, 1.0);
				// \u9700\u8981\u5C06\u4E09\u89D2\u5F62\u7684\u9876\u70B9\u5916\u6269 strokeWidth \u7684\u8DDD\u79BB
                vec2 top = 
                    vec2(a_objPosition.x, a_objPosition.y) 
                    + vec2(0, 2.0 * a_objPosition.w + strokeWidth);
                vec2 leftBottom = 
                    vec2(a_objPosition.x, a_objPosition.y) 
                    + vec2(-1.0 * (sqrt(3.0) * a_objPosition.w + sqrt(3.0) * strokeWidth), -1.0 * (a_objPosition.w + strokeWidth / 2.0));
                vec2 rightBottom = 
                    vec2(a_objPosition.x, a_objPosition.y) 
                    + vec2(sqrt(3.0) * a_objPosition.w + sqrt(3.0) * strokeWidth, -1.0 * (a_objPosition.w + strokeWidth / 2.0));
                position.xy = top * getEqual(a_index, 0.0) + leftBottom * getEqual(a_index, 1.0) + rightBottom * getEqual(a_index, 2.0);
				gl_Position = u_matrix * position;
				v_objPosition = a_objPosition;
				v_angle = a_angle;
				v_param = a_param;
				v_position = position;
				v_strokeColor = a_strokeColor;
				v_fillColor = a_fillColor;
			}
        `;
    }
    static createFS() {
      return `
			precision mediump float;
			varying vec4 v_objPosition;
			varying vec4 v_position;
			varying vec4 v_strokeColor;
			varying vec4 v_fillColor;
			varying vec4 v_angle;
			varying vec4 v_param;
			varying float R;
			varying float r;

			void main() {
				float startRadian = v_angle[0];
				float endRadian = v_angle[1];
				float sweepRadian = v_angle[2];
				float radius = v_objPosition[3];
				float strokeWidth = v_param[2];
				vec2 circleCenter = v_objPosition.xy;
				bool isFill = v_param[3] == 1.0;
				float alpha = v_param[0];
				// \u5706\u5FC3\u5230\u4E09\u89D2\u9762\u4E0A\u4EFB\u610F\u70B9\u7684\u5411\u91CF, \u5E76\u8BA1\u7B97\u5176\u5355\u4F4D\u5411\u91CF
				vec2 circleDirLine = v_position.xy - circleCenter;
				vec2 norCircleDirLine = normalize(circleDirLine);
				// \u5706\u5FC3\u5230\u4E09\u89D2\u9762\u4E0A\u4EFB\u610F\u70B9\u7684\u8DDD\u79BB
				float d = length(circleDirLine);
				if (d > R) {
					discard;
				} else {
					// \u5706\u5FC3\u5230 startRadian \u5BF9\u5E94\u7684\u5706\u4E0A\u7684\u70B9\u7684\u5411\u91CF, \u5E76\u8BA1\u7B97\u5176\u5355\u4F4D\u5411\u91CF
					// \u5706\u5FC3\u5230 endRadian \u5BF9\u5E94\u7684\u5706\u4E0A\u7684\u70B9\u7684\u5411\u91CF, \u5E76\u8BA1\u7B97\u5176\u5355\u4F4D\u5411\u91CF
					vec2 circleStartLine = vec2(radius * cos(startRadian), radius * sin(startRadian));
					vec2 circleEndLine = vec2(radius * cos(endRadian), radius * sin(endRadian));
					vec2 norCircleStartLine = normalize(circleStartLine);
					vec2 norCircleEndLine = normalize(circleEndLine);
					// startRadian \u5BF9\u5E94\u7684\u89D2\u5EA6\u5728\u5706\u4E0A\u7684\u5750\u6807(\u76F8\u5BF9\u4E8E\u5750\u6807\u539F\u70B9)
					// endRadian \u5BF9\u5E94\u7684\u89D2\u5EA6\u5728\u5706\u4E0A\u7684\u5750\u6807(\u76F8\u5BF9\u4E8E\u5750\u6807\u539F\u70B9)
					vec2 startLine = circleCenter.xy + circleStartLine;
					vec2 endLine = circleCenter.xy + circleEndLine;
					// \u4E09\u89D2\u9762\u4E0A\u4EFB\u610F\u4E00\u70B9\u5230 startRadian \u5BF9\u5E94\u7684\u5706\u4E0A\u7684\u70B9\u7684\u8DDD\u79BB
					// \u4E09\u89D2\u9762\u4E0A\u4EFB\u610F\u4E00\u70B9\u5230 endRadian \u5BF9\u5E94\u7684\u5706\u4E0A\u7684\u70B9\u7684\u8DDD\u79BB
					float d1 = length(v_position.xy - startLine);
					float d2 = length(v_position.xy - endLine);
					// \u5411\u91CF norCircleStartLine x norCircleDirLine
					// \u5373 norCircleStartLine \u4E0E norCircleDirLine \u6240\u6784\u6210\u7684\u5E73\u884C\u56DB\u8FB9\u5F62\u7684\u6709\u5411\u9762\u79EF SA
					// SA \u5927\u4E8E 0, \u5373 norCircleDirLine \u4F4D\u4E8E norCircleStartLine \u7684\u9006\u65F6\u9488\u65CB\u8F6C\u65B9\u4F4D
					float SA = norCircleStartLine.x * norCircleDirLine.y - norCircleStartLine.y * norCircleDirLine.x;
					// \u5411\u91CF norCircleEndLine x norCircleDirLine
					// \u5373 norCircleEndLine \u4E0E norCircleDirLine \u6240\u6784\u6210\u7684\u5E73\u884C\u56DB\u8FB9\u5F62\u7684\u6709\u5411\u9762\u79EF EA
					// EA \u5C0F\u4E8E 0, \u5373 norCircleDirLine \u4F4D\u4E8E norCircleEndLine \u7684\u987A\u65F6\u9488\u65CB\u8F6C\u65B9\u4F4D
					float EA = norCircleEndLine.x * norCircleDirLine.y - norCircleEndLine.y * norCircleDirLine.x;
					float PI = 3.1415926535897932384626433832795;
					if ((sweepRadian < PI && SA > 0.0 && EA < 0.0) || (sweepRadian >= PI && (SA > 0.0 || EA < 0.0))) {
						// \u5706\u5F27\u4E3B\u6BB5
						if (d < r) {
							// \u5706\u5F27\u9762
							if (isFill) {
								gl_FragColor = vec4(v_fillColor.xyz, v_fillColor.w * alpha);
							}
							return;
						}
						gl_FragColor = vec4(v_strokeColor.xyz, v_strokeColor.w * alpha);
						// if (d < r) {
						// 	gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
						// 	return;
						// }
						// gl_FragColor = vec4(1.0, 0.0, 0.0, 0.5);
					} else if (d1 < strokeWidth / 2.0 && SA <= 0.0) {
						// \u8D77\u59CB\u70B9\u5706\u89D2
					 	if (v_param[1] == 0.0) {
							discard;
							return;
						}
						if (d < r) {
							// \u5706\u5F27\u9762
							return;
						}
						gl_FragColor = vec4(v_strokeColor.xyz, v_strokeColor.w * alpha);
						// if (d < r) {
						// 	gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
						// 	return;
						// }
						// gl_FragColor = vec4(0.0, 1.0, 0.0, 0.5);
					} else if (d2 < strokeWidth / 2.0 && EA >= 0.0) {
						// \u7ED3\u675F\u70B9\u5706\u89D2
					 	if (v_param[1] == 0.0) {
							discard;
							return;
						}
						if (d < r) {
							// \u5706\u5F27\u9762
							return;
						}
						gl_FragColor = vec4(v_strokeColor.xyz, v_strokeColor.w * alpha);
						// if (d < r) {
						// 	gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
						// 	return;
						// }
						// gl_FragColor = vec4(0.0, 0.0, 1.0, 0.5);
					} else {
						// discard;
					}
				}
			}
        `;
    }
  };

  // src/engine/webgl/primitives/d2Arc/D2ArcInstancedProgramGL.ts
  var INIT_INDEX_DATA = [0, 1, 2];
  var D2ArcInstancedProgramGL = class extends InstancedProgramGL {
    constructor(webGL) {
      super(webGL, D2ArcShaderGL.createVS(), D2ArcShaderGL.createFS(), new Float32Array(INIT_INDEX_DATA));
      this._a_objPosition = this.getWebGLAttributeLocation(`a_objPosition`);
      this._a_angle = this.getWebGLAttributeLocation(`a_angle`);
      this._a_param = this.getWebGLAttributeLocation(`a_param`);
      this._a_strokeColor = this.getWebGLAttributeLocation(`a_strokeColor`);
      this._a_fillColor = this.getWebGLAttributeLocation(`a_fillColor`);
      this._u_matrix = this.getWebGLUniformLocation(`u_matrix`);
    }
    render(ptsDataBuf, ptNums, viewMatrix4Data, zoomRatio) {
      const gl = this.webGL.gl;
      gl.useProgram(this.webGLProgram);
      this.setEnable();
      gl.bindBuffer(ptsDataBuf.webglBufferType, ptsDataBuf.webglBuffer);
      gl.vertexAttribPointer(this._a_objPosition, 4, gl.FLOAT, false, D2ArcDataGL.STRIDE, 1 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_angle, 4, gl.FLOAT, false, D2ArcDataGL.STRIDE, 5 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_param, 4, gl.FLOAT, false, D2ArcDataGL.STRIDE, 9 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_strokeColor, 4, gl.FLOAT, false, D2ArcDataGL.STRIDE, 13 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_fillColor, 4, gl.FLOAT, false, D2ArcDataGL.STRIDE, 17 * FLOAT_32_ARRAY_BYTESIZE);
      gl.uniformMatrix4fv(this._u_matrix, false, viewMatrix4Data);
      this.instancedArrays.drawArraysInstancedANGLE(gl.TRIANGLES, 0, INIT_INDEX_DATA.length, ptNums);
      this.setDisable();
    }
  };

  // src/engine/webgl/primitives/d2Circle/D2CircleShaderGL.ts
  var D2CircleShaderGL = class {
    static createVS() {
      return `
            precision mediump float;
            attribute lowp float a_index;
            attribute vec4 a_objPosition;  // [cx, cy, cz, r]
            attribute vec4 a_param;  // [alpha, is-round, stroke-width, is-fill]
            attribute vec4 a_strokeColor;  // [red, green, blue, alpha]
            attribute vec4 a_fillColor;  // [red, green, blue, alpha]
            uniform mat4 u_matrix;
            varying vec4 v_objPosition;
            varying vec4 v_param;
            varying vec4 v_position;
            varying vec4 v_strokeColor;
            varying vec4 v_fillColor;

            float getEqual(float value, float refer) {
                return value == refer ? 1.0 : 0.0;
            }

            void main() {
                if (a_objPosition[3] < 0.0) {
                    return;
                }
                float strokeWidth = a_param[2];
                vec4 position = vec4(a_objPosition.x, a_objPosition.y, 0.0, 1.0);
                // \u9700\u8981\u5C06\u4E09\u89D2\u5F62\u7684\u9876\u70B9\u5916\u6269 strokeWidth \u7684\u8DDD\u79BB
                vec2 top = 
                    vec2(a_objPosition.x, a_objPosition.y) 
                    + vec2(0, 2.0 * a_objPosition.w + strokeWidth);
                vec2 leftBottom = 
                    vec2(a_objPosition.x, a_objPosition.y) 
                    + vec2(-1.0 * (sqrt(3.0) * a_objPosition.w + sqrt(3.0) * strokeWidth), -1.0 * (a_objPosition.w + strokeWidth / 2.0));
                vec2 rightBottom = 
                    vec2(a_objPosition.x, a_objPosition.y) 
                    + vec2(sqrt(3.0) * a_objPosition.w + sqrt(3.0) * strokeWidth, -1.0 * (a_objPosition.w + strokeWidth / 2.0));
                position.xy = top * getEqual(a_index, 0.0) + leftBottom * getEqual(a_index, 1.0) + rightBottom * getEqual(a_index, 2.0);
                gl_Position = u_matrix * position;
                v_objPosition = a_objPosition;
                v_position = position;
                v_strokeColor = a_strokeColor;
                v_fillColor = a_fillColor;
                v_param = a_param;
            }
        `;
    }
    static createFS() {
      return `
            precision mediump float;
            varying vec4 v_objPosition;
            varying vec4 v_position;
            varying vec4 v_param;
            varying vec4 v_strokeColor;
            varying vec4 v_fillColor;

            void main() {
                vec2 circleCenter = v_objPosition.xy;
                float strokeWidth = v_param[2];
                float alpha = v_param[0];
                float radius = v_objPosition.w;
                bool isFill = v_param.w == 1.0;
                vec2 circleDirLine = v_position.xy - circleCenter;
                bool isOuter = length(circleDirLine) > radius + strokeWidth / 2.0;
                bool isInner = length(circleDirLine) < radius - strokeWidth / 2.0;
                if (isOuter) {
                    discard;
                    return;
                } else if (isInner) {
                    if (!isFill) {
                        discard;
                        return;
                    }
                    gl_FragColor = vec4(v_fillColor.xyz, v_fillColor.w * alpha);
                } else {
                    gl_FragColor = vec4(v_strokeColor.xyz, v_strokeColor.w * alpha);
                }
            }
        `;
    }
  };

  // src/engine/webgl/primitives/d2Circle/D2CircleInstancedProgramGL.ts
  var INIT_INDEX_DATA2 = [0, 1, 2];
  var D2CircleInstancedProgramGL = class extends InstancedProgramGL {
    constructor(webGL) {
      super(webGL, D2CircleShaderGL.createVS(), D2CircleShaderGL.createFS(), new Float32Array(INIT_INDEX_DATA2));
      this._a_objPosition = this.getWebGLAttributeLocation(`a_objPosition`);
      this._a_param = this.getWebGLAttributeLocation(`a_param`);
      this._a_strokeColor = this.getWebGLAttributeLocation(`a_strokeColor`);
      this._a_fillColor = this.getWebGLAttributeLocation(`a_fillColor`);
      this._u_matrix = this.getWebGLUniformLocation(`u_matrix`);
    }
    render(ptsDataBuf, ptNums, viewMatrix4Data, zoomRatio) {
      if (ptNums <= 0) {
        return;
      }
      const gl = this.webGL.gl;
      gl.useProgram(this.webGLProgram);
      this.setEnable();
      gl.bindBuffer(ptsDataBuf.webglBufferType, ptsDataBuf.webglBuffer);
      gl.vertexAttribPointer(this._a_objPosition, 4, gl.FLOAT, false, D2CircleDataGL.STRIDE, 1 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_param, 4, gl.FLOAT, false, D2CircleDataGL.STRIDE, 5 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_strokeColor, 4, gl.FLOAT, false, D2CircleDataGL.STRIDE, 9 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_fillColor, 4, gl.FLOAT, false, D2CircleDataGL.STRIDE, 13 * FLOAT_32_ARRAY_BYTESIZE);
      gl.uniformMatrix4fv(this._u_matrix, false, viewMatrix4Data);
      this.instancedArrays.drawArraysInstancedANGLE(gl.TRIANGLES, 0, INIT_INDEX_DATA2.length, ptNums);
      this.setDisable();
    }
  };

  // src/engine/webgl/primitives/d2Image/D2ImageShaderGL.ts
  var D2ImageShaderGL = class {
    static createVS() {
      return `
			precision highp float;
			precision highp int;
			attribute lowp float a_index;
            attribute vec4 a_leftPosition;  // [upX, upY, downX, downY]
			attribute vec4 a_rightPosition;  // [upX, upY, downX, downY]
            attribute vec4 a_param;  // [alpha, <un-use>, <un-use>, <un-use>]
            uniform mat4 u_matrix;
			uniform float u_zoomRatio;
			varying vec4 v_param;
			varying vec2 v_textureCoord;
			varying float v_zoomRatio;

			float getEqual(float value, float refer) {
                return value == refer ? 1.0 : 0.0;
            }

            void main() {
				float is04 = getEqual(a_index, 0.0) + getEqual(a_index, 4.0);
				float is13 = getEqual(a_index, 1.0) + getEqual(a_index, 3.0);
				float is2 = getEqual(a_index, 2.0);
				float is5 = getEqual(a_index, 5.0);
				vec2 position = a_leftPosition.xy * is04 + a_rightPosition.zw * is13 + a_leftPosition.zw * is2 + a_rightPosition.xy * is5;
				v_textureCoord = vec2(is13 + is5, is04 + is5);
                gl_Position = u_matrix * vec4(position.x, position.y, 0.0, 1.0);
                v_param = a_param;
				v_zoomRatio = u_zoomRatio;
            }
        `;
    }
    static createFS() {
      return `
            precision mediump float;
			uniform sampler2D u_texture;
            varying vec4 v_param;
			varying vec2 v_textureCoord;
			varying float v_zoomRatio;

            void main() {
				float alpha = v_param[0];
				gl_FragColor = texture2D(u_texture, v_textureCoord);
				gl_FragColor.a = gl_FragColor.a * alpha;
            }
        `;
    }
  };

  // src/engine/webgl/primitives/d2Image/D2ImageInstancedProgramGL.ts
  var INIT_INDEX_DATA3 = [0, 1, 2, 3, 4, 5];
  var D2ImageInstancedProgramGL = class extends InstancedProgramGL {
    // private readonly _u_zoomRatio: WebGLUniformLocation
    constructor(webGL) {
      super(webGL, D2ImageShaderGL.createVS(), D2ImageShaderGL.createFS(), new Float32Array(INIT_INDEX_DATA3));
      this._a_leftPosition = this.getWebGLAttributeLocation(`a_leftPosition`);
      this._a_rightPosition = this.getWebGLAttributeLocation(`a_rightPosition`);
      this._a_param = this.getWebGLAttributeLocation(`a_param`);
      this._u_matrix = this.getWebGLUniformLocation(`u_matrix`);
      this._u_texture = this.getWebGLUniformLocation(`u_texture`);
    }
    render(ptsDataBuf, ptNums, texture, viewMatrix4Data, zoomRatio) {
      if (texture === null) {
        return;
      }
      const gl = this.webGL.gl;
      gl.useProgram(this.webGLProgram);
      this.setEnable();
      gl.bindBuffer(ptsDataBuf.webglBufferType, ptsDataBuf.webglBuffer);
      gl.vertexAttribPointer(this._a_leftPosition, 4, gl.FLOAT, false, D2ImageDataGL.STRIDE, 1 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_rightPosition, 4, gl.FLOAT, false, D2ImageDataGL.STRIDE, 5 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_param, 4, gl.FLOAT, false, D2ImageDataGL.STRIDE, 9 * FLOAT_32_ARRAY_BYTESIZE);
      gl.uniform1i(this._u_texture, 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniformMatrix4fv(this._u_matrix, false, viewMatrix4Data);
      this.instancedArrays.drawArraysInstancedANGLE(gl.TRIANGLES, 0, INIT_INDEX_DATA3.length, ptNums);
      this.setDisable();
    }
  };

  // src/engine/webgl/primitives/d2Line/D2LineShaderGL.ts
  var D2LineShaderGL = class {
    static createVS() {
      return `
            precision mediump float;
            attribute lowp float a_index;
            attribute vec3 a_objPositionS;  // [sx, sy, sz]
            attribute vec3 a_objPositionE;  // [ex, ey, ez]
            attribute vec4 a_param;  // [alpha, is-round, stroke-width, is-solid]
            attribute vec4 a_profile;  // [seg-size, gap-size, is-fixed-stroke-width, <rect-border-radius>]
            attribute vec4 a_color;  // [red, green, blue, alpha]
            uniform mat4 u_matrix;
            uniform float u_zoomRatio;
            varying vec3 v_objPositionS;
            varying vec3 v_objPositionE;
            varying vec2 v_position;
            varying vec2 v_lineDirect;
            varying vec4 v_param;
            varying vec4 v_profile;
            varying vec4 v_color;
            varying vec4 v_options;  // [half-width, min-w, <un-use>, <un-use>]
            varying float v_zoomRatio;

            float getEqual(float value, float refer) {
                return value == refer ? 1.0 : 0.0;
            }
            float getLess(float a, float b) {
                return a < b ? 1.0 : 0.0;
            }

            void main() {
                float width = a_param[2];
                bool isFixedStrokeWidth = a_profile[2] == 1.0;
                if (isFixedStrokeWidth) {
                    width = width / u_zoomRatio;
                }
                float halfWidth = width / 2.0;
                v_param = vec4(a_param[0], a_param[1], width, a_param[3]);
                vec4 position = vec4(0.0, 0.0, 0.0, 1.0);
                // \u7EBF\u6BB5\u7684\u7EC8\u70B9\u5411\u91CF - \u7EBF\u6BB5\u7684\u8D77\u70B9\u5411\u91CF
                // \u5373\u7EBF\u6BB5\u5411\u91CF
                vec2 lineDirect = a_objPositionE.xy - a_objPositionS.xy;
                vec2 norLineDirect = normalize(lineDirect);
                // \u5C06\u7EBF\u6BB5\u7684\u5355\u4F4D\u5411\u91CF\u7ED5\u539F\u70B9\u9006\u65F6\u9488\u65CB\u8F6C 90 \u5EA6
                vec2 vertical = vec2(-norLineDirect.y, norLineDirect.x);
                // \u53C2\u8003 ./doc \u56FE\u793A
                // \u6C42"\u5BBD\u7EBF"\u77E9\u5F62\u56DB\u4E2A\u9876\u70B9\u7684\u5750\u6807
                vec2 v1 = a_objPositionS.xy;
                vec2 v2 = a_objPositionE.xy;
                vec2 v3 = vec2(vertical * halfWidth);
                vec2 v4 = norLineDirect * halfWidth * a_param[1];
                vec2 leftTop = v1 - v3 - v4;
                vec2 leftBottom = v2 - v3 + v4;
                vec2 rightBottom = v2 + v3 + v4;
                vec2 rightTop = v1 + v3 - v4;
                position.xy = 
                    leftTop * ((getEqual(a_index, 0.0) + getEqual(a_index, 3.0)))
                    + leftBottom * (getEqual(a_index, 1.0))
                    + rightBottom * (getEqual(a_index, 2.0) + getEqual(a_index, 4.0))
                    + rightTop * (getEqual(a_index, 5.0));
                gl_Position = u_matrix * vec4(position.xy, 0.0, 1.0);
                v_position = position.xy;
                v_lineDirect = lineDirect;
                v_objPositionS = a_objPositionS;
                v_objPositionE = a_objPositionE;
                float minW = halfWidth;
                minW = getLess(0.0, minW) * minW;
                v_options = vec4(halfWidth, minW, 0.0, 0.0);
                v_profile = a_profile;
                v_color = a_color;
                v_zoomRatio = u_zoomRatio;
            }
        `;
    }
    static createFS() {
      return `
            precision mediump float;
            varying vec3 v_objPositionS;
            varying vec3 v_objPositionE;
            varying vec2 v_position;
            varying vec2 v_lineDirect;
            varying vec4 v_param;
            varying vec4 v_profile;
            varying vec4 v_color;
            varying vec4 v_options;
            varying float v_zoomRatio;
        
            // \u5411\u91CF A \u5728\u5411\u91CF B \u4E0A\u7684\u6295\u5F71
            vec2 project(vec2 a, vec2 b) {
                float dotProduct = dot(a, b);
                float squaredLengthB = dot(b, b);
                if (squaredLengthB == 0.0) {
                    return vec2(0.0);
                }
                return dotProduct / squaredLengthB * b;
            }

            void rectBorderRadiusFilters(vec2 position, vec2 lineDirect, vec2 lineMiddle, float rectBorderRadius, float halfWidth) {
                vec2 norLineDirect = normalize(lineDirect);
                vec2 point2LineMiddle = v_position - lineMiddle;
                float x = abs(dot(norLineDirect, point2LineMiddle));
                float y = abs(point2LineMiddle.x * norLineDirect.y - point2LineMiddle.y * norLineDirect.x);
                float xEdge = length(lineDirect) * 0.5 - rectBorderRadius;
                float yEdge = halfWidth - rectBorderRadius;
                if (x >= xEdge && y >= yEdge) {
                    float deltaX = x - xEdge;
                    float deltaY = y - yEdge;
                    float dis = length(vec2(deltaX, deltaY));
                    if (dis >= rectBorderRadius) {
                        discard;
                        // gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);  // \u7EBF\u6761\u6240\u793A\u77E9\u5F62\u7684\u56DB\u4E2A\u76F4\u89D2(\u82E5\u4E3A\u5706\u89D2\u77E9\u5F62\u65F6, \u5219\u8868\u793A\u5706\u5F27\u5916\u4FA7\u533A\u57DF)
                    } else {
                        // gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);  // \u7EBF\u6761\u6240\u793A\u77E9\u5F62\u7684\u56DB\u4E2A\u76F4\u89D2(\u82E5\u4E3A\u5706\u89D2\u77E9\u5F62\u65F6, \u5219\u8868\u793A\u5706\u5F27\u5185\u6D4B\u534A\u5706)
                    }
                } else {
                   // gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);  // \u7EBF\u6761\u672C\u4F53
                }
            }

            void main() {
                float halfWidth = v_options[0];
                float segLength = v_profile[0];
                float gapLength = v_profile[1];
                bool isFixedStrokeWidth = v_profile[2] == 1.0;
                if (isFixedStrokeWidth) {
                    segLength = segLength / v_zoomRatio;
                    gapLength = gapLength / v_zoomRatio;
                }
                float rectBorderRadius = v_profile[3];
                // \u7EBF\u6BB5\u5411\u91CF
                vec2 norLineDirect = normalize(v_lineDirect);
                float lineLength = length(v_lineDirect);
                vec2 lineStart2Corner = v_position - v_objPositionS.xy;
                float v = dot(lineStart2Corner, norLineDirect); 
                if (v < 0.0) {
                    // v < 0.0
                    // \u6B64\u65F6 lineStart2Corner \u4F4D\u4E8E\u7EBF\u6BB5\u8D77\u70B9\u5916\u4FA7\u7684\u77E9\u5F62\u8303\u56F4\u5185
                    float radiuLen = length(lineStart2Corner);
                    if (radiuLen > halfWidth) {
                        discard;
                    } else {
                        // \u5BF9\u7EBF\u6BB5\u8D77\u70B9\u5916\u4FA7\u5706\u89D2\u7740\u8272
                        gl_FragColor = vec4(v_color.xyz, v_color.w * v_param[0]);
                    }
                    if (v_param[1] == 0.0) {
                        discard;
                    }
                } else if (v > lineLength) {
                    // v > lineLength
                    // \u6B64\u65F6 lineStart2Corner \u4F4D\u4E8E\u7EBF\u6BB5\u7EC8\u70B9\u5916\u4FA7\u7684\u77E9\u5F62\u8303\u56F4\u5185
                    float radiuLen = length(v_position - v_objPositionE.xy);
                    if (radiuLen > halfWidth) {
                        discard;
                    } else {
                        // \u5BF9\u7EBF\u6BB5\u7EC8\u70B9\u5916\u4FA7\u5706\u89D2\u7740\u8272
                        gl_FragColor = vec4(v_color.xyz, v_color.w * v_param[0]);
                    }
                    if (v_param[1] == 0.0) {
                        discard;
                    }
                } else {
                    vec2 lineMiddle = (v_objPositionS.xy + v_objPositionE.xy) * 0.5;
                    if (v_param[3] == 1.0) {  // \u5B9E\u7EBF
                        gl_FragColor = vec4(v_color.xyz, v_color.w * v_param[0]);
                        rectBorderRadiusFilters(v_position, v_lineDirect, lineMiddle, rectBorderRadius, halfWidth);
                        return;
                    }
                    vec2 cl = project(lineStart2Corner, norLineDirect);
                    float pLen = length(cl);
                    float m = mod(pLen, (segLength + gapLength));
                    float c = floor(pLen / (segLength + gapLength));
                    if (m <= segLength) {
                        // \u5BF9\u865A\u7EBF\u4E0A\u5B50\u77ED\u7EBF\u6BB5\u8FDB\u884C\u7740\u8272
                        // \u82E5\u7EBF\u6BB5\u4E3A\u5706\u89D2\u7AEF\u70B9, \u5219\u6B64\u5904\u4E0D\u5305\u542B\u6BCF\u4E2A\u5B50\u77ED\u7EBF\u6BB5\u4E0A\u7684\u4E24\u7AEF\u5706\u89D2\u90E8\u5206
                        gl_FragColor = vec4(v_color.xyz, v_color.w * v_param[0]);
                        rectBorderRadiusFilters(v_position, v_lineDirect, lineMiddle, rectBorderRadius, halfWidth);
                        // gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);
                    } else {
                        vec2 scaleVec1 = norLineDirect * (c * (segLength + gapLength) + segLength);
                        vec2 scaleVec2 = norLineDirect * ((c + 1.0) * (segLength + gapLength));
                        if (length(v_lineDirect) <= length(scaleVec2) + halfWidth * 0.5) {
                            gl_FragColor = vec4(v_color.xyz, v_color.w * v_param[0]);
                            rectBorderRadiusFilters(v_position, v_lineDirect, lineMiddle, rectBorderRadius, halfWidth);
                            // gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
                        } else {
                            float radiuLen1 = length(lineStart2Corner - scaleVec1);
                            float radiuLen2 = length(lineStart2Corner - scaleVec2);
                            if (v_param[1] == 1.0 && (radiuLen1 <= halfWidth || radiuLen2 <= halfWidth)) {
                                // \u5F53\u7EBF\u6BB5\u4E3A\u865A\u7EBF\u65F6, \u82E5\u7EBF\u6BB5\u4E3A\u5706\u89D2\u7AEF\u70B9, \u5219\u5BF9\u6BCF\u4E2A\u5B50\u77ED\u7EBF\u6BB5\u7684\u4E24\u7AEF\u5706\u89D2\u90E8\u5206\u7740\u8272
                                gl_FragColor = vec4(v_color.xyz, v_color.w * v_param[0]);
                            }
                        }
                    }
                }
            }
        `;
    }
  };

  // src/engine/webgl/primitives/d2Line/D2LineInstancedProgramGL.ts
  var INIT_INDEX_DATA4 = [0, 1, 2, 3, 4, 5];
  var D2LineInstancedProgramGL = class extends InstancedProgramGL {
    constructor(webGL) {
      super(webGL, D2LineShaderGL.createVS(), D2LineShaderGL.createFS(), new Float32Array(INIT_INDEX_DATA4));
      this._a_objPositionS = this.getWebGLAttributeLocation(`a_objPositionS`);
      this._a_objPositionE = this.getWebGLAttributeLocation(`a_objPositionE`);
      this._a_param = this.getWebGLAttributeLocation(`a_param`);
      this._a_profile = this.getWebGLAttributeLocation(`a_profile`);
      this._a_color = this.getWebGLAttributeLocation(`a_color`);
      this._u_matrix = this.getWebGLUniformLocation(`u_matrix`);
      this._u_zoomRatio = this.getWebGLUniformLocation(`u_zoomRatio`);
    }
    render(ptsDataBuf, ptNums, viewMatrix4Data, zoomRatio) {
      const gl = this.webGL.gl;
      gl.useProgram(this.webGLProgram);
      this.setEnable();
      gl.bindBuffer(ptsDataBuf.webglBufferType, ptsDataBuf.webglBuffer);
      gl.vertexAttribPointer(this._a_objPositionS, 3, gl.FLOAT, false, D2LineDataGL.STRIDE, 1 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_objPositionE, 3, gl.FLOAT, false, D2LineDataGL.STRIDE, 4 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_param, 4, gl.FLOAT, false, D2LineDataGL.STRIDE, 7 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_profile, 4, gl.FLOAT, false, D2LineDataGL.STRIDE, 11 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_color, 4, gl.FLOAT, false, D2LineDataGL.STRIDE, 15 * FLOAT_32_ARRAY_BYTESIZE);
      gl.uniformMatrix4fv(this._u_matrix, false, viewMatrix4Data);
      gl.uniform1f(this._u_zoomRatio, zoomRatio);
      this.instancedArrays.drawArraysInstancedANGLE(gl.TRIANGLES, 0, INIT_INDEX_DATA4.length, ptNums);
      this.setDisable();
    }
  };

  // src/engine/webgl/primitives/d2Point/D2PointShaderGL.ts
  var D2PointShaderGL = class {
    static createVS() {
      return `
            attribute lowp float a_index;
            attribute vec4 a_objPosition;  // [cx, cy, cz, size]
            attribute vec4 a_param;  // [alpha, is-enable-scale, shape, rotation]
            attribute vec4 a_color;  // [red, green, blue, alpha]
            uniform mat4 u_matrix;
            uniform float u_zoomRatio;
            varying vec4 v_objPosition;
            varying vec4 v_param;
            varying vec4 v_position;
            varying vec4 v_color;
            varying float v_zoomRatio;

            float getEqual(float value, float refer) {
                return value == refer ? 1.0 : 0.0;
            }

            vec2 rotateVec2(vec2 vector, float radian) {
                float c = cos(radian);
                float s = sin(radian);
                return vec2(vector.x * c + vector.y * (-1.0 * s), vector.x * s + vector.y * c);
            }

            void main() {
                if (a_objPosition[3] < 0.0) {
                    return;
                }
                float isEnableScale = a_param[1];
                float radius = a_objPosition.w / (isEnableScale == 1.0 ? 1.0 : u_zoomRatio);
                vec4 position = vec4(a_objPosition.x, a_objPosition.y, 0.0, 1.0);
                if (a_param.z == 2.0) {
                    // \u4E09\u89D2\u5F62
                    //...
                } else if (a_param.z == 1.0) {
                    // \u5706\u70B9
                    radius = radius * 2.0;
                }
                vec2 top = vec2(a_objPosition.x, a_objPosition.y) + vec2(0, radius);
                vec2 leftBottom = vec2(a_objPosition.x, a_objPosition.y) + vec2(-1.0 * (sqrt(3.0) * radius / 2.0), -1.0 * (radius / 2.0));
                vec2 rightBottom = vec2(a_objPosition.x, a_objPosition.y) + vec2(sqrt(3.0) * radius / 2.0, -1.0 * (radius / 2.0));
                vec2 center = vec2((top.x + leftBottom.x + rightBottom.x) / 3.0, (top.y + leftBottom.y + rightBottom.y) / 3.0);
                vec2 center2Top = rotateVec2(top - center, a_param[3]);
                vec2 center2leftBottom = rotateVec2(leftBottom - center, a_param[3]);
                vec2 center2rightBottom = rotateVec2(rightBottom - center, a_param[3]);
                top = center + center2Top;
                leftBottom = center + center2leftBottom;
                rightBottom = center + center2rightBottom;
                position.xy = top * getEqual(a_index, 0.0) + leftBottom * getEqual(a_index, 1.0) + rightBottom * getEqual(a_index, 2.0);
                gl_Position = u_matrix * position;
                v_objPosition = a_objPosition;
                v_position = position;
                v_color = a_color;
                v_param = a_param;
                v_zoomRatio = u_zoomRatio;
            }
        `;
    }
    static createFS() {
      return `
            precision mediump float;
            varying vec4 v_objPosition;
            varying vec4 v_position;
            varying vec4 v_param;
            varying vec4 v_color;
            varying float v_zoomRatio;

            void main() {
                float alpha = v_param[0];
                float isEnableScale = v_param[1];
                float radius = v_objPosition.w / (isEnableScale == 1.0 ? 1.0 : v_zoomRatio);
                if (v_param.z == 2.0) {
                    // \u4E09\u89D2\u5F62
                    //...
                } else if (v_param.z == 1.0) {
                    // \u5706\u70B9
                    if (length(v_position.xy - v_objPosition.xy) > radius) {
                        discard;
                    }
                }
                gl_FragColor = vec4(v_color.xyz, v_color.w * alpha);
            }
        `;
    }
  };

  // src/engine/webgl/primitives/d2Point/D2PointInstancedProgramGL.ts
  var INIT_INDEX_DATA5 = [0, 1, 2];
  var D2PointInstancedProgramGL = class extends InstancedProgramGL {
    constructor(webGL) {
      super(webGL, D2PointShaderGL.createVS(), D2PointShaderGL.createFS(), new Float32Array(INIT_INDEX_DATA5));
      this._a_objPosition = this.getWebGLAttributeLocation(`a_objPosition`);
      this._a_param = this.getWebGLAttributeLocation(`a_param`);
      this._a_color = this.getWebGLAttributeLocation(`a_color`);
      this._u_matrix = this.getWebGLUniformLocation(`u_matrix`);
      this._u_zoomRatio = this.getWebGLUniformLocation(`u_zoomRatio`);
    }
    render(ptsDataBuf, ptNums, viewMatrix4Data, zoomRatio) {
      const gl = this.webGL.gl;
      gl.useProgram(this.webGLProgram);
      this.setEnable();
      gl.bindBuffer(ptsDataBuf.webglBufferType, ptsDataBuf.webglBuffer);
      gl.vertexAttribPointer(this._a_objPosition, 4, gl.FLOAT, false, D2PointDataGL.STRIDE, 1 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_param, 4, gl.FLOAT, false, D2PointDataGL.STRIDE, 5 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_color, 4, gl.FLOAT, false, D2PointDataGL.STRIDE, 9 * FLOAT_32_ARRAY_BYTESIZE);
      gl.uniformMatrix4fv(this._u_matrix, false, viewMatrix4Data);
      gl.uniform1f(this._u_zoomRatio, zoomRatio);
      this.instancedArrays.drawArraysInstancedANGLE(gl.TRIANGLES, 0, INIT_INDEX_DATA5.length, ptNums);
      this.setDisable();
    }
  };

  // src/engine/webgl/primitives/d2Text/D2TextShaderGL.ts
  var D2TextShaderGL = class {
    static createVS() {
      return `
			precision mediump float;
            attribute vec3 a_objPosition;  // [x, y, z]
            attribute vec4 a_param;  // [alpha, font-size, <un-use>, <un-use>]
            attribute vec4 a_color;  // [red, green, blue, alpha]
            uniform mat4 u_matrix;
			varying vec4 v_param;
            varying vec4 v_color;

            void main() {
                vec4 position = vec4(a_objPosition.x, a_objPosition.y, a_objPosition.z, 1.0);
                gl_Position = u_matrix * position;
                v_color = a_color;
                v_param = a_param;
            }
        `;
    }
    static createFS() {
      return `
            precision mediump float;
            varying vec4 v_param;
            varying vec4 v_color;

            void main() {
				float alpha = v_param[0];
				gl_FragColor = vec4(v_color.xyz, alpha);
            }
        `;
    }
  };

  // src/engine/webgl/primitives/d2Text/D2TextProgramGL.ts
  var D2TextProgramGL = class extends ProgramGL {
    constructor(webGL) {
      super(webGL, D2TextShaderGL.createVS(), D2TextShaderGL.createFS());
      this._a_objPosition = this.getWebGLAttributeLocation(`a_objPosition`);
      this._a_param = this.getWebGLAttributeLocation(`a_param`);
      this._a_color = this.getWebGLAttributeLocation(`a_color`);
      this._u_matrix = this.getWebGLUniformLocation(`u_matrix`);
    }
    render(ptsDataBuf, indicesDataBuf, indicesNums, viewMatrix4Data, zoomRatio) {
      const gl = this.webGL.gl;
      gl.useProgram(this.webGLProgram);
      this.setEnable();
      gl.bindBuffer(ptsDataBuf.webglBufferType, ptsDataBuf.webglBuffer);
      gl.vertexAttribPointer(this._a_objPosition, 3, gl.FLOAT, false, D2TextDataGL.STRIDE, 1 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_param, 4, gl.FLOAT, false, D2TextDataGL.STRIDE, 4 * FLOAT_32_ARRAY_BYTESIZE);
      gl.vertexAttribPointer(this._a_color, 4, gl.FLOAT, false, D2TextDataGL.STRIDE, 8 * FLOAT_32_ARRAY_BYTESIZE);
      gl.uniformMatrix4fv(this._u_matrix, false, viewMatrix4Data);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesDataBuf.webglBuffer);
      gl.drawElements(gl.TRIANGLES, indicesNums, gl.UNSIGNED_SHORT, 0);
      this.setDisable();
    }
  };

  // src/engine/webgl/program/PrimitiveProgramBuilderGL.ts
  var PrimitiveProgramBuilderGL = class {
    constructor(webGL) {
      this._webGL = webGL;
      this._arcManager = new D2ArcInstancedProgramGL(this._webGL);
      this._circleManager = new D2CircleInstancedProgramGL(this._webGL);
      this._imageManager = new D2ImageInstancedProgramGL(this._webGL);
      this._lineManager = new D2LineInstancedProgramGL(this._webGL);
      this._pointManager = new D2PointInstancedProgramGL(this._webGL);
      this._textManager = new D2TextProgramGL(this._webGL);
    }
    render(ptType, blockItem, viewMatrix4Data, zoomRatio) {
      const ptsNums = blockItem.ptIdsBuilder.getUpperItemIndex() + 1;
      const indicesNums = blockItem.indicesBuilder.getUpperItemIndex() + 1;
      switch (ptType) {
        case 1 /* D2_ARC */: {
          this._arcManager.render(blockItem.ptDatasBuilder.dataBuffer, ptsNums, viewMatrix4Data, zoomRatio);
          break;
        }
        case 2 /* D2_CIRCLE */: {
          this._circleManager.render(blockItem.ptDatasBuilder.dataBuffer, ptsNums, viewMatrix4Data, zoomRatio);
          break;
        }
        case 3 /* D2_IMAGE */: {
          this._imageManager.render(blockItem.ptDatasBuilder.dataBuffer, ptsNums, blockItem.texture, viewMatrix4Data, zoomRatio);
          break;
        }
        case 4 /* D2_LINE */: {
          this._lineManager.render(blockItem.ptDatasBuilder.dataBuffer, ptsNums, viewMatrix4Data, zoomRatio);
          break;
        }
        case 5 /* D2_POINT */: {
          this._pointManager.render(blockItem.ptDatasBuilder.dataBuffer, ptsNums, viewMatrix4Data, zoomRatio);
          break;
        }
        case 6 /* D2_TEXT */: {
          this._textManager.render(
            blockItem.ptDatasBuilder.dataBuffer,
            blockItem.indicesBuilder.dataBuffer,
            indicesNums,
            viewMatrix4Data,
            zoomRatio
          );
          break;
        }
      }
    }
  };

  // src/engine/webgl/PlaneGL.ts
  var PlaneGL = class extends Plane {
    constructor(planeId, sceneGL) {
      super(planeId, sceneGL);
      this._sceneGL = sceneGL;
      this._dataBuilder = new PrimitiveDataBuilderGL(this._sceneGL.renderer);
      this._programBuilder = new PrimitiveProgramBuilderGL(this._sceneGL.renderer);
      this._elementsMap = /* @__PURE__ */ new Map();
    }
    getScene() {
      return this.scene;
    }
    deleteD2ArcItems(targetIds) {
      const arrTargetIds = Array.from(targetIds);
      for (let i = 0; i < arrTargetIds.length; i++) {
        const { ptType, globalIndex } = this._elementsMap.get(arrTargetIds[i]);
        const blockItem = this.deletePrimitiveItem(ptType, globalIndex);
        this._elementsMap.delete(arrTargetIds[i]);
      }
    }
    addD2ArcItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { globalIndex, blockItem } = this.addPrimitiveItem(1 /* D2_ARC */, D2ArcDataGL.createArrayData(primitiveItemValueData));
        this._elementsMap.set(key, { ptType: 1 /* D2_ARC */, globalIndex });
      }
    }
    updateD2ArcItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { ptType, globalIndex } = this._elementsMap.get(key);
        const blockItem = this.updatePrimitiveItem(ptType, globalIndex, D2ArcDataGL.createArrayData(primitiveItemValueData));
      }
    }
    deleteD2CircleItems(targetIds) {
      const arrTargetIds = Array.from(targetIds);
      for (let i = 0; i < arrTargetIds.length; i++) {
        const { ptType, globalIndex } = this._elementsMap.get(arrTargetIds[i]);
        const blockItem = this.deletePrimitiveItem(ptType, globalIndex);
        this._elementsMap.delete(arrTargetIds[i]);
      }
    }
    addD2CircleItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { globalIndex, blockItem } = this.addPrimitiveItem(2 /* D2_CIRCLE */, D2CircleDataGL.createArrayData(primitiveItemValueData));
        this._elementsMap.set(key, { ptType: 2 /* D2_CIRCLE */, globalIndex });
      }
    }
    updateD2CircleItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { ptType, globalIndex } = this._elementsMap.get(key);
        const blockItem = this.updatePrimitiveItem(ptType, globalIndex, D2CircleDataGL.createArrayData(primitiveItemValueData));
      }
    }
    deleteD2ImageItems(targetIds) {
      const arrTargetIds = Array.from(targetIds);
      for (let i = 0; i < arrTargetIds.length; i++) {
        const { ptType, globalIndex } = this._elementsMap.get(arrTargetIds[i]);
        const blockItem = this.deletePrimitiveItem(ptType, globalIndex);
        this._dataBuilder.updateBlockTexture(blockItem, null);
        this._elementsMap.delete(arrTargetIds[i]);
      }
    }
    addD2ImageItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { globalIndex, blockItem } = this.addPrimitiveItem(3 /* D2_IMAGE */, D2ImageDataGL.createArrayData(primitiveItemValueData));
        this._dataBuilder.updateBlockTexture(blockItem, primitiveItemValueData.texture);
        this._elementsMap.set(key, { ptType: 3 /* D2_IMAGE */, globalIndex });
      }
    }
    updateD2ImageItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { ptType, globalIndex } = this._elementsMap.get(key);
        const blockItem = this.updatePrimitiveItem(ptType, globalIndex, D2ImageDataGL.createArrayData(primitiveItemValueData));
      }
    }
    deleteD2LineItems(targetIds) {
      const arrTargetIds = Array.from(targetIds);
      for (let i = 0; i < arrTargetIds.length; i++) {
        const { ptType, globalIndex } = this._elementsMap.get(arrTargetIds[i]);
        const blockItem = this.deletePrimitiveItem(ptType, globalIndex);
        this._elementsMap.delete(arrTargetIds[i]);
      }
    }
    addD2LineItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { globalIndex, blockItem } = this.addPrimitiveItem(4 /* D2_LINE */, D2LineDataGL.createArrayData(primitiveItemValueData));
        this._elementsMap.set(key, { ptType: 4 /* D2_LINE */, globalIndex });
      }
    }
    updateD2LineItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { ptType, globalIndex } = this._elementsMap.get(key);
        const blockItem = this.updatePrimitiveItem(ptType, globalIndex, D2LineDataGL.createArrayData(primitiveItemValueData));
      }
    }
    deleteD2PointItems(targetIds) {
      const arrTargetIds = Array.from(targetIds);
      for (let i = 0; i < arrTargetIds.length; i++) {
        const { ptType, globalIndex } = this._elementsMap.get(arrTargetIds[i]);
        const blockItem = this.deletePrimitiveItem(ptType, globalIndex);
        this._elementsMap.delete(arrTargetIds[i]);
      }
    }
    addD2PointItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { globalIndex, blockItem } = this.addPrimitiveItem(5 /* D2_POINT */, D2PointDataGL.createArrayData(primitiveItemValueData));
        this._elementsMap.set(key, { ptType: 5 /* D2_POINT */, globalIndex });
      }
    }
    updateD2PointItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { ptType, globalIndex } = this._elementsMap.get(key);
        const blockItem = this.updatePrimitiveItem(ptType, globalIndex, D2PointDataGL.createArrayData(primitiveItemValueData));
      }
    }
    deleteD2TextItems(targetIds) {
      const arrTargetIds = Array.from(targetIds);
      for (let i = 0; i < arrTargetIds.length; i++) {
        const { ptType, globalIndex } = this._elementsMap.get(arrTargetIds[i]);
        const blockItem = this.deletePrimitiveItem(ptType, globalIndex);
        this._elementsMap.delete(arrTargetIds[i]);
      }
    }
    addD2TextItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const arrayData = D2TextDataGL.createArrayData(primitiveItemValueData);
        const indicesData = D2TextDataGL.createIndicesData(primitiveItemValueData);
        const { globalIndex, blockItem } = this.addPrimitiveItem(6 /* D2_TEXT */, arrayData, indicesData);
        this._elementsMap.set(key, { ptType: 6 /* D2_TEXT */, globalIndex });
      }
    }
    updateD2TextItems(targetPrimitives) {
      for (let [key, primitiveItemValueData] of targetPrimitives) {
        const { ptType, globalIndex } = this._elementsMap.get(key);
        const arrayData = D2TextDataGL.createArrayData(primitiveItemValueData);
        const indicesData = D2TextDataGL.createIndicesData(primitiveItemValueData);
        const blockItem = this.updatePrimitiveItem(ptType, globalIndex, arrayData, indicesData);
      }
    }
    render() {
      const viewMatrix4 = Camera.getInstance().getViewMatrix4(true);
      const viewMatrix4Data = new Float32Array(viewMatrix4.data);
      const zoomRatio = Camera.getInstance().getZoomRatio();
      const pmBlocks = this._dataBuilder.getPmBlocks();
      for (let [ptType, blocks] of pmBlocks) {
        for (let i = 0; i < blocks.length; i++) {
          this._dataBuilder.update(blocks[i]);
          this._programBuilder.render(ptType, blocks[i], viewMatrix4Data, zoomRatio);
        }
      }
    }
    quit() {
      this._dataBuilder.clearAll();
      this._dataBuilder = void 0;
      this._programBuilder = void 0;
      this._elementsMap.clear();
      this._elementsMap = void 0;
      super.quit();
    }
    addPrimitiveItem(ptType, ptData, indices) {
      const { globalIndex, blockItem } = this._dataBuilder.addPrimitiveItem(ptType, ptData, indices);
      return { globalIndex, blockItem };
    }
    updatePrimitiveItem(ptType, globalIndex, ptData, indices) {
      const blockItem = this._dataBuilder.updatePrimitiveItem(ptType, globalIndex, ptData, indices);
      return blockItem;
    }
    deletePrimitiveItem(ptType, globalIndex) {
      const blockItem = this._dataBuilder.deletePrimitiveItem(ptType, globalIndex);
      return blockItem;
    }
  };

  // src/engine/webgl/primitives/d2AnyTest/D2AnyTestShaderGL.ts
  var D2AnyTestShaderGL = class {
    static createVS() {
      return `
            precision mediump float;
            attribute vec3 a_objPosition;
            attribute vec4 a_color;
            uniform mat4 u_matrix;
            varying vec3 v_objPosition;
            varying vec4 v_color;

            bool nearZero(float n) {
                return abs(n) <= 0.0000001;
            }

            void main() {
                v_objPosition = a_objPosition;
                v_color = a_color;
                gl_Position = vec4(a_objPosition.xyz, 1.0);
            }
        `;
    }
    static createFS() {
      return `
            precision mediump float;
            varying vec3 v_objPosition;
            varying vec4 v_color;

            bool isLess(float x, float edge) {
                return step(x, edge) == 1.0;
            }

            void main () {
                vec4 color = v_color;
                color.x = smoothstep(0.4, 0.4, color.x);
                gl_FragColor = color;
            }
        `;
    }
  };

  // src/engine/webgl/primitives/d2AnyTest/D2AnyTestProgramGL.ts
  var VERTEX_SIZE = 3;
  var COLOR_SIZE = 4;
  var D2AnyTestProgramGL = class extends ProgramGL {
    constructor(webGL) {
      super(webGL, D2AnyTestShaderGL.createVS(), D2AnyTestShaderGL.createFS());
      this._viewWidth = 0;
      this._viewHeight = 0;
      this._a_objPosition = this.getWebGLAttributeLocation(`a_objPosition`);
      this._a_color = this.getWebGLAttributeLocation(`a_color`);
      this._u_matrix = null;
      this._origin = Vector3.ORIGIN;
      this._posData = [];
      this._posWebGLBuffer = this.webGL.createWebGLArrayBufferByBuffer(new Float32Array(this._posData), this.webGL.gl.STATIC_DRAW);
      this._colorData = [];
      this._coloWebGLBuffer = this.webGL.createWebGLArrayBufferByBuffer(new Float32Array(this._colorData), this.webGL.gl.STATIC_DRAW);
      this.flush();
    }
    updateCanvasRect(canvasWidth, canvasHeight) {
      this._viewWidth = canvasWidth;
      this._viewHeight = canvasHeight;
      this.flush();
    }
    render(scene) {
      return;
      const gl = this.webGL.gl;
      gl.useProgram(this.webGLProgram);
      gl.enableVertexAttribArray(this._a_objPosition);
      gl.enableVertexAttribArray(this._a_color);
      this.setUniformData(scene);
      gl.bindBuffer(gl.ARRAY_BUFFER, this._posWebGLBuffer);
      gl.vertexAttribPointer(this._a_objPosition, VERTEX_SIZE, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, this._coloWebGLBuffer);
      gl.vertexAttribPointer(this._a_color, COLOR_SIZE, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLES, 0, this._posData.length / VERTEX_SIZE);
      gl.disableVertexAttribArray(this._a_objPosition);
    }
    flush() {
      const gl = this.webGL.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this._posWebGLBuffer);
      this._posData = [
        -0.5,
        0.5,
        1,
        -0.5,
        -0.5,
        1,
        0.5,
        -0.5,
        1,
        -0.5,
        0.5,
        1,
        0.5,
        -0.5,
        1,
        0.5,
        0.5,
        1
      ];
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._posData), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ARRAY_BUFFER, this._coloWebGLBuffer);
      this._colorData = [
        0.1,
        0,
        0,
        1,
        0.4,
        0,
        0,
        1,
        0.7,
        0,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1
      ];
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._colorData), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    setUniformData(scene) {
      const camera = scene.camera;
      const gl = this.webGL.gl;
      gl.uniformMatrix4fv(this._u_matrix, false, new Float32Array(camera.getViewMatrix4().data));
    }
  };

  // src/engine/common/AxisParam.ts
  var AxisParam = class _AxisParam extends BaseInterface2 {
    static getInstance() {
      if (_AxisParam.instance === void 0) {
        _AxisParam.instance = new _AxisParam();
      }
      return _AxisParam.instance;
    }
    constructor() {
      super();
      this._origin = Vector2.ORIGIN;
      this._isAntialias = true;
      this._isFlip = false;
      this._isShowGrid = true;
      this._isShowMultiGrid = true;
      this._isShowGridDot = true;
      this._isShowAxis = true;
      this._gridColor = Color.GRAY;
      this._gridAlpha = 0.25;
      this._multiGridColor = Color.DIM_GRAY;
      this._multiGridAlpha = 0.55;
      this._gridDotColor = Color.DIM_GRAY;
      this._gridDotAlpha = 0.5;
      this._axisColor = Color.WHITE;
      this._axisAlpha = 0.65;
      this._axisStepX = 0.5;
      this._axisStepY = 0.5;
      this._axisSnapX = 0.5;
      this._axisSnapY = 0.5;
      this._pattern = true;
      this._multiRatio = 5;
    }
    get origin() {
      return this._origin;
    }
    set origin(value) {
      this._origin = value;
    }
    get isAntialias() {
      return this._isAntialias;
    }
    set isAntialias(value) {
      this._isAntialias = value;
    }
    get isShowGrid() {
      return this._isShowGrid;
    }
    set isShowGrid(value) {
      this._isShowGrid = value;
    }
    get isShowMultiGrid() {
      return this._isShowMultiGrid;
    }
    set isShowMultiGrid(value) {
      this._isShowMultiGrid = value;
    }
    get isShowGridDot() {
      return this._isShowGridDot;
    }
    set isShowGridDot(value) {
      this._isShowGridDot = value;
    }
    get isShowAxis() {
      return this._isShowAxis;
    }
    set isShowAxis(value) {
      this._isShowAxis = value;
    }
    get isFlip() {
      return this._isFlip;
    }
    set isFlip(value) {
      this._isFlip = value;
    }
    get gridColor() {
      return this._gridColor;
    }
    set gridColor(value) {
      this._gridColor = value;
    }
    get gridAlpha() {
      return this._gridAlpha;
    }
    set gridAlpha(value) {
      this._gridAlpha = value;
    }
    get multiGridColor() {
      return this._multiGridColor;
    }
    set multiGridColor(value) {
      this._multiGridColor = value;
    }
    get multiGridAlpha() {
      return this._multiGridAlpha;
    }
    set multiGridAlpha(value) {
      this._multiGridAlpha = value;
    }
    get gridDotColor() {
      return this._gridDotColor;
    }
    set gridDotColor(value) {
      this._gridDotColor = value;
    }
    get gridDotAlpha() {
      return this._gridDotAlpha;
    }
    set gridDotAlpha(value) {
      this._gridDotAlpha = value;
    }
    get axisColor() {
      return this._axisColor;
    }
    set axisColor(value) {
      this._axisColor = value;
    }
    get axisAlpha() {
      return this._axisAlpha;
    }
    set axisAlpha(value) {
      this._axisAlpha = value;
    }
    get axisStepX() {
      return this._axisStepX;
    }
    set axisStepX(value) {
      this._axisStepX = value;
    }
    get axisStepY() {
      return this._axisStepY;
    }
    set axisStepY(value) {
      this._axisStepY = value;
    }
    get axisSnapX() {
      return this._axisSnapX;
    }
    set axisSnapX(value) {
      this._axisSnapX = value;
    }
    get axisSnapY() {
      return this._axisSnapY;
    }
    set axisSnapY(value) {
      this._axisSnapY = value;
    }
    get pattern() {
      return this._pattern;
    }
    set pattern(value) {
      this._pattern = value;
    }
    get multiRatio() {
      return this._multiRatio;
    }
    set multiRatio(value) {
      this._multiRatio = value;
    }
    quit() {
    }
  };

  // src/engine/webgl/primitives/d2GridAxis/Utils.ts
  function fillLineVertical(posData, x, height) {
    posData.push(x, -height, 0, x, height, 0);
  }
  function fillLineHorizontal(posData, y, width) {
    posData.push(-width, y, 0.1, width, y, 0.1);
  }
  function fillDot(posData, x, y) {
    posData.push(x, y, 0.1);
  }

  // src/engine/webgl/primitives/d2GridAxis/D2AxisShaderGL.ts
  var D2AxisShaderGL = class {
    static createVS() {
      return `
            precision mediump float;
            attribute vec3 a_objPosition;
            uniform vec2 u_antialias;
            uniform mat4 u_matrix;
            uniform vec2 u_gridSize;
            uniform vec2 u_moveCount;
            uniform vec2 u_origin;
            uniform vec4 u_gridColor;
            uniform vec4 u_multiGridColor;
            uniform vec4 u_gridDotColor;
            uniform vec4 u_axisColor;
            uniform float u_multiRatio;
            uniform float u_drawType;
            uniform float u_isShowGrid;
            uniform float u_isShowMultiGrid;
            uniform float u_isShowGridDot;
            uniform float u_isShowAxis;
            varying vec4 v_color;

            bool nearZero(float n) {
                return abs(n) <= 0.0000001;
            }

            void main() {
                if (u_antialias.x == 0.5) {
                    gl_PointSize = 1.0 * (1.0 - u_antialias.y) + 1.5 * u_antialias.y;
                } else {
                    gl_PointSize = 2.0 * u_antialias.x;
                }
                vec4 objPosition = u_matrix * vec4(a_objPosition, 1.0);
                if (u_drawType == 2.0) {
                    if (u_isShowGridDot == 1.0) {
                        // #IF: \u4EC5\u663E\u793A\u7F51\u70B9
                        v_color = u_gridDotColor;
                        gl_Position = objPosition;
                    }
                    return;
                }
                vec4 origin = u_matrix * vec4(u_origin, 1.0, 1.0);
                vec2 pos = vec2(objPosition.xy) - u_origin;
                bool isAxis = false;
                bool isMultiGrid = false;
                float indexVert = a_objPosition.x / u_gridSize.x;
                float indexHori = a_objPosition.y / u_gridSize.y;
                float dx = floor((indexVert - u_moveCount.x) + 0.5);
                float dy = floor((indexHori - u_moveCount.y) + 0.5);
                if (dx > 0.0) {
                    dx = -dx;
                }
                if (dy > 0.0) {
                    dy = -dy;
                }
                if (a_objPosition.z == 0.0) {
                    isAxis = nearZero(pos.x);
                    isMultiGrid = nearZero(mod(dx, u_multiRatio));
                } else if (a_objPosition.z == 0.1) {
                    isAxis = nearZero(pos.y) || nearZero(pos.x);
                    isMultiGrid = nearZero(mod(dy, u_multiRatio));
                } else {
                    isAxis = nearZero(pos.x) || nearZero(pos.y);
                    isMultiGrid = nearZero(mod(dx, u_multiRatio)) || nearZero(mod(dy, u_multiRatio));
                }
                if (isAxis) {
                    if (u_isShowAxis != 1.0) {
                        if (u_isShowGrid == 1.0) {
                            v_color = u_gridColor;
                        }
                    } else {
                        v_color = u_axisColor;
                    }
                }  else {
                    if (u_isShowGrid != 1.0) {
                        return;
                    }
                    if (isMultiGrid) {
                        if (u_isShowMultiGrid != 1.0) {
                            v_color = u_gridColor;
                        } else {
                            v_color = u_multiGridColor;
                        }
                    } else {
                        v_color = u_gridColor;
                    }
                }
                gl_Position = objPosition;
            }
        `;
    }
    static createFS() {
      return `
            precision mediump float;
            varying vec4 v_color;

            void main () {
                gl_FragColor = v_color;
            }
        `;
    }
    static createLinePositionsData(viewWidth, viewHeight) {
      const positionsData = [];
      const ratio = 30;
      const axisParam = AxisParam.getInstance();
      const width = viewWidth / ratio * axisParam.axisStepX * 4;
      const height = viewHeight / ratio * axisParam.axisStepY * 4;
      for (let x = 0; x < width; x += axisParam.axisStepX) {
        fillLineVertical(positionsData, x, height);
      }
      for (let x = -axisParam.axisStepX; x > -width; x -= axisParam.axisStepX) {
        fillLineVertical(positionsData, x, height);
      }
      for (let y = 0; y < height; y += axisParam.axisStepY) {
        fillLineHorizontal(positionsData, y, width);
      }
      for (let y = -axisParam.axisStepY; y > -height; y -= axisParam.axisStepY) {
        fillLineHorizontal(positionsData, y, width);
      }
      return positionsData;
    }
    static createDotPositionsData(viewWidth, viewHeight) {
      const positionsData = [];
      const ratio = 30;
      const axisParam = AxisParam.getInstance();
      const width = viewWidth / ratio * axisParam.axisStepX * 4;
      const height = viewHeight / ratio * axisParam.axisStepY * 4;
      for (let x = 0; x < width; x += axisParam.axisStepX) {
        for (let y = 0; y < height; y += axisParam.axisStepY) {
          fillDot(positionsData, x, y);
        }
        for (let y = -axisParam.axisStepY; y > -height; y -= axisParam.axisStepY) {
          fillDot(positionsData, x, y);
        }
      }
      for (let x = -axisParam.axisStepX; x > -width; x -= axisParam.axisStepX) {
        for (let y = 0; y < height; y += axisParam.axisStepY) {
          fillDot(positionsData, x, y);
        }
        for (let y = -axisParam.axisStepY; y > -height; y -= axisParam.axisStepY) {
          fillDot(positionsData, x, y);
        }
      }
      return positionsData;
    }
  };

  // src/engine/webgl/primitives/d2GridAxis/D2AxisProgramGL.ts
  var VERTEX_SIZE2 = 3;
  var D2AxisProgramGL = class extends ProgramGL {
    constructor(webGL) {
      super(webGL, D2AxisShaderGL.createVS(), D2AxisShaderGL.createFS());
      this._axisParamInstance = AxisParam.getInstance();
      this._a_objPosition = this.getWebGLAttributeLocation(`a_objPosition`);
      this._u_antialias = this.getWebGLUniformLocation(`u_antialias`);
      this._u_matrix = this.getWebGLUniformLocation(`u_matrix`);
      this._u_gridSize = this.getWebGLUniformLocation(`u_gridSize`);
      this._u_moveCount = this.getWebGLUniformLocation(`u_moveCount`);
      this._u_origin = this.getWebGLUniformLocation(`u_origin`);
      this._u_gridColor = this.getWebGLUniformLocation(`u_gridColor`);
      this._u_multiGridColor = this.getWebGLUniformLocation(`u_multiGridColor`);
      this._u_gridDotColor = this.getWebGLUniformLocation(`u_gridDotColor`);
      this._u_axisColor = this.getWebGLUniformLocation(`u_axisColor`);
      this._u_multiRatio = this.getWebGLUniformLocation(`u_multiRatio`);
      this._u_drawType = this.getWebGLUniformLocation(`u_drawType`);
      this._u_isShowGrid = this.getWebGLUniformLocation(`u_isShowGrid`);
      this._u_isShowMultiGrid = this.getWebGLUniformLocation(`u_isShowMultiGrid`);
      this._u_isShowGridDot = this.getWebGLUniformLocation(`u_isShowGridDot`);
      this._u_isShowAxis = this.getWebGLUniformLocation(`u_isShowAxis`);
      this._viewWidth = 0;
      this._viewHeight = 0;
      this._ratio = 1;
      this._origin = Vector2.ORIGIN;
      this._linePosData = [];
      this._dotPosData = [];
      this._linePosWebGLBuffer = this.webGL.createWebGLArrayBufferByBuffer(new Float32Array(this._linePosData), this.webGL.gl.STATIC_DRAW);
      this._dotPosWebGLBuffer = this.webGL.createWebGLArrayBufferByBuffer(new Float32Array(this._dotPosData), this.webGL.gl.STATIC_DRAW);
      this.flush();
    }
    setEnableColor() {
    }
    setDisableColor() {
    }
    updateCanvasRect(canvasWidth, canvasHeight) {
      this._viewWidth = canvasWidth;
      this._viewHeight = canvasHeight;
      this.flush();
    }
    render(scene) {
      const gl = this.webGL.gl;
      gl.useProgram(this.webGLProgram);
      gl.enableVertexAttribArray(this._a_objPosition);
      this.setUniformData(scene);
      this.drawLines();
      this.drawDots();
      gl.disableVertexAttribArray(this._a_objPosition);
    }
    flush() {
      const gl = this.webGL.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this._linePosWebGLBuffer);
      this._linePosData = D2AxisShaderGL.createLinePositionsData(this._viewWidth, this._viewHeight);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._linePosData), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ARRAY_BUFFER, this._dotPosWebGLBuffer);
      this._dotPosData = D2AxisShaderGL.createDotPositionsData(this._viewWidth, this._viewHeight);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._dotPosData), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    calcTransform(scene) {
      const axisParamOrigin = this._axisParamInstance.origin;
      const camera = scene.camera;
      const camraProjectionMatrix4 = camera.getRectProjectionMatrix4();
      const minPixel = 20;
      const maxPixel = 30;
      const scale = camera.getZoomRatio();
      const min = Math.min(this._axisParamInstance.axisStepX, this._axisParamInstance.axisStepY);
      const pixel = min * scale * this._ratio;
      if (pixel < minPixel) {
        this._ratio = maxPixel / (min * scale);
      }
      if (this._ratio > 1 && pixel > maxPixel) {
        this._ratio = minPixel / (min * scale);
      }
      if (this._ratio < 1) {
        this._ratio = 1;
      }
      const baseMatrix4 = CanvasMatrix4.setScaleByValue(this._ratio, this._ratio, 1).multiply4(CanvasMatrix4.setTranslateByVector3(new Vector3(axisParamOrigin.x, axisParamOrigin.y, 0))).multiply4(camera.getLookMatrix4().multiply4(camera.getZoomMatrix4()));
      const scaleRatio = this._ratio * scale;
      const baseOrigin = Vector2.ORIGIN.multiplyMatrix4(baseMatrix4);
      const distX = baseOrigin.x - baseOrigin.x % (this._axisParamInstance.axisStepX * scaleRatio);
      const distY = baseOrigin.y - baseOrigin.y % (this._axisParamInstance.axisStepY * scaleRatio);
      this._origin = baseOrigin.multiplyMatrix4(camraProjectionMatrix4);
      const transform = baseMatrix4.multiply4(CanvasMatrix4.setTranslateByVector3(new Vector3(-distX, -distY, 0))).multiply4(camraProjectionMatrix4);
      const axisStepTransform = new Vector2(this._axisParamInstance.axisStepX, this._axisParamInstance.axisStepY).multiplyMatrix4(
        CanvasMatrix4.setScaleByValue(this._ratio, this._ratio, 1).multiply4(CanvasMatrix4.setScaleByValue(scale, scale, 1)).multiply4(camraProjectionMatrix4)
      );
      return {
        matrix: transform,
        moveCountX: this._origin.x >= 0 ? Math.floor(this._origin.x / axisStepTransform.x) : Math.ceil(this._origin.x / axisStepTransform.x),
        moveCountY: this._origin.y >= 0 ? Math.floor(this._origin.y / axisStepTransform.y) : Math.ceil(this._origin.y / axisStepTransform.y)
      };
    }
    setUniformData(scene) {
      const gl = this.webGL.gl;
      const { matrix, moveCountX, moveCountY } = this.calcTransform(scene);
      gl.uniform2fv(
        this._u_antialias,
        new Float32Array([this._axisParamInstance.isAntialias ? 1.5 : 0.5, this._axisParamInstance.isAntialias ? 0 : 1])
      );
      gl.uniform2fv(this._u_gridSize, new Float32Array([this._axisParamInstance.axisStepX, this._axisParamInstance.axisStepY]));
      gl.uniform2fv(this._u_moveCount, new Float32Array([moveCountX, moveCountY]));
      gl.uniform2fv(this._u_origin, new Float32Array([this._origin.x, this._origin.y]));
      gl.uniform4fv(
        this._u_gridColor,
        new Float32Array([
          this._axisParamInstance.gridColor.r,
          this._axisParamInstance.gridColor.g,
          this._axisParamInstance.gridColor.b,
          this._axisParamInstance.gridAlpha
        ])
      );
      gl.uniform4fv(
        this._u_multiGridColor,
        new Float32Array([
          this._axisParamInstance.multiGridColor.r,
          this._axisParamInstance.multiGridColor.g,
          this._axisParamInstance.multiGridColor.b,
          this._axisParamInstance.multiGridAlpha
        ])
      );
      gl.uniform4fv(
        this._u_gridDotColor,
        new Float32Array([
          this._axisParamInstance.gridDotColor.r,
          this._axisParamInstance.gridDotColor.g,
          this._axisParamInstance.gridDotColor.b,
          this._axisParamInstance.gridDotAlpha
        ])
      );
      gl.uniform4fv(
        this._u_axisColor,
        new Float32Array([
          this._axisParamInstance.axisColor.r,
          this._axisParamInstance.axisColor.g,
          this._axisParamInstance.axisColor.b,
          this._axisParamInstance.axisAlpha
        ])
      );
      gl.uniform1f(this._u_multiRatio, this._axisParamInstance.multiRatio);
      gl.uniform1f(this._u_isShowGrid, this._axisParamInstance.isShowGrid ? 1 : 0);
      gl.uniform1f(this._u_isShowMultiGrid, this._axisParamInstance.isShowMultiGrid ? 1 : 0);
      gl.uniform1f(this._u_isShowAxis, this._axisParamInstance.isShowAxis ? 1 : 0);
      gl.uniform1f(this._u_isShowGridDot, this._axisParamInstance.isShowGridDot ? 1 : 0);
      gl.uniformMatrix4fv(this._u_matrix, false, new Float32Array(matrix.data));
    }
    drawLines() {
      const gl = this.webGL.gl;
      gl.uniform1f(this._u_drawType, 1);
      gl.bindBuffer(gl.ARRAY_BUFFER, this._linePosWebGLBuffer);
      gl.vertexAttribPointer(this._a_objPosition, VERTEX_SIZE2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.LINES, 0, this._linePosData.length / VERTEX_SIZE2);
    }
    drawDots() {
      const gl = this.webGL.gl;
      if (!this._axisParamInstance.isShowGridDot) {
        return;
      }
      gl.uniform1f(this._u_drawType, 2);
      gl.bindBuffer(gl.ARRAY_BUFFER, this._dotPosWebGLBuffer);
      gl.vertexAttribPointer(this._a_objPosition, VERTEX_SIZE2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.POINTS, 0, this._dotPosData.length / VERTEX_SIZE2);
    }
  };

  // src/engine/webgl/primitives/d2GridAxis/TestD2AxisShaderGL.ts
  var TestD2AxisShaderGL = class {
    static createVS() {
      return `
            precision mediump float;
            attribute vec3 a_objPosition;
            uniform mat4 u_matrix;
            uniform vec2 u_origin;
            uniform vec2 u_deltaSize;
            uniform float u_multiRatio;
            varying vec4 v_color;

            bool nearZero(float n) {
                return abs(n) <= 0.0000001;
            }

            void main() {
                vec2 gridSize = vec2(0.5, 0.5);
                vec4 color1 = vec4(1.0, 0.0, 0.0, 1.0);
                vec4 color2 = vec4(0.0, 1.0, 0.0, 1.0);
                vec4 color3 = vec4(0.0, 0.0, 1.0, 1.0);
                vec4 position = u_matrix * vec4(a_objPosition, 1.0);
                vec2 pos = vec2(position.xy) - u_origin;
                bool isAxis = false;
                bool isBold = false;
                float delX = a_objPosition.x / gridSize.x;
                float delY = a_objPosition.y / gridSize.y;
                float dx = floor((delX - u_deltaSize.x) + 0.5);
                float dy = floor((delY - u_deltaSize.y) + 0.5);
                if (dx > 0.0) {
                    dx = -dx;
                }
                if (dy > 0.0) {
                    dy = -dy;
                }
                if (a_objPosition.z == 0.0) {
                    isAxis = nearZero(pos.x);
                    isBold = nearZero(mod(dx, u_multiRatio));
                } else if (a_objPosition.z == 1.0) {
                    isAxis = nearZero(pos.y) || nearZero(pos.x);
                    isBold = nearZero(mod(dy, u_multiRatio));
                } else {
                    isAxis = nearZero(pos.x) || nearZero(pos.y);
                    isBold = nearZero(mod(dx, u_multiRatio)) || nearZero(mod(dy, u_multiRatio));
                }
                if (isAxis) {
                    v_color = color1;
                } else {
                    v_color = isBold ? color2 : color3;
                }
                gl_Position = vec4(pos, 0.0, 1.0);
                gl_Position = position;
            }
        `;
    }
    static createFS() {
      return `
            precision mediump float;
            varying vec4 v_color;

            void main () {
                gl_FragColor = v_color;
            }
        `;
    }
    static createObjPositionData(data) {
    }
    static createParamData(data) {
    }
    static createColorData(data) {
    }
  };

  // src/engine/webgl/primitives/d2GridAxis/TestD2AxisProgramGL.ts
  var VERTEX_SIZE3 = 3;
  var TestD2AxisProgramGL = class extends ProgramGL {
    constructor(webGL) {
      super(webGL, TestD2AxisShaderGL.createVS(), TestD2AxisShaderGL.createFS());
      this._viewWidth = 0;
      this._viewHeight = 0;
      this._a_objPosition = this.getWebGLAttributeLocation(`a_objPosition`);
      this._u_matrix = this.getWebGLUniformLocation(`u_matrix`);
      this._u_origin = this.getWebGLUniformLocation(`u_origin`);
      this._u_deltaSize = this.getWebGLUniformLocation(`u_deltaSize`);
      this._u_multiRatio = this.getWebGLUniformLocation(`u_multiRatio`);
      this._origin = Vector3.ORIGIN;
      this._ratio = 1;
      this._linePosData = [];
      this._linePosWebGLBuffer = this.webGL.createWebGLArrayBufferByBuffer(new Float32Array(this._linePosData), this.webGL.gl.STATIC_DRAW);
      this.flush();
    }
    updateCanvasRect(canvasWidth, canvasHeight) {
      this._viewWidth = canvasWidth;
      this._viewHeight = canvasHeight;
      this.flush();
    }
    render(scene) {
      return;
      const gl = this.webGL.gl;
      const axisParam = AxisParam.getInstance();
      gl.useProgram(this.webGLProgram);
      gl.enableVertexAttribArray(this._a_objPosition);
      this.setUniformData(scene);
      gl.bindBuffer(gl.ARRAY_BUFFER, this._linePosWebGLBuffer);
      gl.vertexAttribPointer(this._a_objPosition, VERTEX_SIZE3, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.LINES, 0, this._linePosData.length / VERTEX_SIZE3);
      gl.disableVertexAttribArray(this._a_objPosition);
    }
    flush() {
      const gl = this.webGL.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this._linePosWebGLBuffer);
      const v = [
        -3,
        5,
        0,
        -3,
        -5,
        0,
        -2.5,
        5,
        0,
        -2.5,
        -5,
        0,
        -2,
        5,
        0,
        -2,
        -5,
        0,
        -1.5,
        5,
        0,
        -1.5,
        -5,
        0,
        -1,
        5,
        0,
        -1,
        -5,
        0,
        -0.5,
        5,
        0,
        -0.5,
        -5,
        0,
        0,
        5,
        0,
        0,
        -5,
        0,
        0.5,
        5,
        0,
        0.5,
        -5,
        0,
        1,
        5,
        0,
        1,
        -5,
        0,
        1.5,
        5,
        0,
        1.5,
        -5,
        0,
        2,
        5,
        0,
        2,
        -5,
        0,
        2.5,
        5,
        0,
        2.5,
        -5,
        0,
        3,
        5,
        0,
        3,
        -5,
        0
      ];
      const h = [
        -5,
        -3,
        1,
        5,
        -3,
        1,
        -5,
        -2.5,
        1,
        5,
        -2.5,
        1,
        -5,
        -2,
        1,
        5,
        -2,
        1,
        -5,
        -1.5,
        1,
        5,
        -1.5,
        1,
        -5,
        -1,
        1,
        5,
        -1,
        1,
        -5,
        -0.5,
        1,
        5,
        -0.5,
        1,
        -5,
        0,
        1,
        5,
        0,
        1,
        -5,
        0.5,
        1,
        5,
        0.5,
        1,
        -5,
        1,
        1,
        5,
        1,
        1,
        -5,
        1.5,
        1,
        5,
        1.5,
        1,
        -5,
        2,
        1,
        5,
        2,
        1,
        -5,
        2.5,
        1,
        5,
        2.5,
        1,
        -5,
        3,
        1,
        5,
        3,
        1
      ];
      this._linePosData = [...v, ...h];
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._linePosData), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    autoScale(scene) {
      const axisParam = AxisParam.getInstance();
      const axisParamOrigin = axisParam.origin;
      const camera = scene.camera;
      const minPixel = 25;
      const maxPixel = 30;
      const scale = camera.getZoomRatio();
      const min = Math.min(axisParam.axisStepX, axisParam.axisStepY);
      const pixel = min * scale * this._ratio;
      if (pixel < minPixel) {
        this._ratio = maxPixel / (min * scale);
      }
      if (this._ratio > 1 && pixel > maxPixel) {
        this._ratio = minPixel / (min * scale);
      }
      if (this._ratio < 1) {
        this._ratio = 1;
      }
      const c = CanvasMatrix4.setScaleByValue(this._ratio, this._ratio, 1).multiply4(CanvasMatrix4.setTranslateByVector3(new Vector3(axisParamOrigin.x, axisParamOrigin.y, 0))).multiply4(camera.getLookMatrix4().multiply4(CanvasMatrix4.setScaleByValue(scale, scale, 1)));
      const c2 = CanvasMatrix4.setScaleByValue(this._ratio, this._ratio, 1).multiply4(CanvasMatrix4.setScaleByValue(scale, scale, 1));
      const f = this._ratio * scale;
      const h = Vector2.ORIGIN.multiplyMatrix4(c);
      const _ = axisParam.axisStepX * f;
      const d = axisParam.axisStepY * f;
      const m = h.x - h.x % _;
      const g = h.y - h.y % d;
      const O = camera.getRectProjectionMatrix4();
      const s = h.multiplyMatrix4(O);
      this._origin = new Vector3(s.x, s.y, 0);
      const x = c.multiply4(CanvasMatrix4.setTranslateByVector3(new Vector3(-m, -g, 0))).multiply4(O);
      const LL = new Vector2(axisParam.axisStepX, axisParam.axisStepY).multiplyMatrix4(c2.multiply4(O));
      return {
        matrix: x,
        deltaX: this._origin.x >= 0 ? Math.floor(this._origin.x / LL.x) : Math.ceil(this._origin.x / LL.x),
        deltaY: this._origin.y >= 0 ? Math.floor(this._origin.y / LL.y) : Math.ceil(this._origin.y / LL.y)
      };
    }
    setUniformData(scene) {
      const camera = scene.camera;
      const axisParam = AxisParam.getInstance();
      const gl = this.webGL.gl;
      const { matrix, deltaX, deltaY } = this.autoScale(scene);
      gl.uniform2fv(this._u_origin, new Float32Array([this._origin.x, this._origin.y]));
      gl.uniformMatrix4fv(this._u_matrix, false, new Float32Array(matrix.data));
      gl.uniform2fv(this._u_deltaSize, new Float32Array([deltaX, deltaY]));
      gl.uniform1f(this._u_multiRatio, axisParam.multiRatio);
    }
    createLinePositionsData() {
      const positionsData = [];
      const ratio = 20;
      const axisParam = AxisParam.getInstance();
      const width = this._viewWidth / ratio * axisParam.axisStepX * 4;
      const height = this._viewHeight / ratio * axisParam.axisStepY * 4;
      for (let x = 0; x < width; x += axisParam.axisStepX) {
        fillLineVertical(positionsData, x, height);
      }
      for (let x = -axisParam.axisStepX; x > -width; x -= axisParam.axisStepX) {
        fillLineVertical(positionsData, x, height);
      }
      for (let y = 0; y < height; y += axisParam.axisStepY) {
        fillLineHorizontal(positionsData, y, width);
      }
      for (let y = -axisParam.axisStepY; y > -height; y -= axisParam.axisStepY) {
        fillLineHorizontal(positionsData, y, width);
      }
      return positionsData;
    }
  };

  // src/engine/webgl/SceneGL.ts
  var MAX_PLANE_NUM = 1024;
  var SceneGL = class extends Scene {
    constructor(webGL) {
      super(webGL.canvasElement);
      this.camera = Camera.getInstance();
      this._webGL = webGL;
      this._indexMap = new BitmapIndex(MAX_PLANE_NUM);
      this._indexMap.markUsed(0);
      this._contentPlanes = /* @__PURE__ */ new Map();
      this._controlPlanes = /* @__PURE__ */ new Map();
      this._d2AnyTestProgram = new D2AnyTestProgramGL(this._webGL);
      this._testD2AxisProgram = new TestD2AxisProgramGL(this._webGL);
      this._d2AxisProgram = new D2AxisProgramGL(this._webGL);
      this._textureMap = /* @__PURE__ */ new Map();
    }
    get renderer() {
      return this._webGL;
    }
    updateCanvasRect(canvasWidth, canvasHeight) {
      this._webGL.updateRect(canvasWidth, canvasHeight);
      this._webGL.gl.viewport(0, 0, canvasWidth, canvasHeight);
      this._d2AnyTestProgram.updateCanvasRect(canvasWidth, canvasHeight);
      this._testD2AxisProgram.updateCanvasRect(canvasWidth, canvasHeight);
      this._d2AxisProgram.updateCanvasRect(canvasWidth, canvasHeight);
    }
    updateCanvasOrigin(origin) {
      this._webGL.updateOrigin(origin);
    }
    addControlPlaneItem() {
      const planeId = this._indexMap.findEmpty(0);
      this._indexMap.markUsed(planeId);
      if (this._controlPlanes.has(planeId)) {
        return this._controlPlanes.get(planeId);
      }
      const planeItem = new PlaneGL(String(planeId), this);
      this._controlPlanes.set(planeId, planeItem);
      return planeItem;
    }
    addContentPlaneItem() {
      const planeId = this._indexMap.findEmpty(0);
      this._indexMap.markUsed(planeId);
      if (this._contentPlanes.has(planeId)) {
        return this._contentPlanes.get(planeId);
      }
      const planeItem = new PlaneGL(String(planeId), this);
      this._contentPlanes.set(planeId, planeItem);
      return planeItem;
    }
    deleteControlPlaneItem(planeId) {
      if (this._controlPlanes.has(planeId)) {
        this._controlPlanes.delete(planeId);
        return;
      }
    }
    deleteContentPlaneItem(planeId) {
      if (this._contentPlanes.has(planeId)) {
        this._contentPlanes.delete(planeId);
        return;
      }
    }
    getWebGLTexture(texImageSource) {
      let texture = this._textureMap.get(texImageSource);
      if (texture) {
        return texture;
      }
      texture = this._webGL.createRGBATexture(
        texImageSource,
        this._webGL.gl.LINEAR,
        this._webGL.gl.LINEAR,
        this._webGL.gl.CLAMP_TO_EDGE,
        this._webGL.gl.CLAMP_TO_EDGE
      );
      this._textureMap.set(texImageSource, texture);
      return texture;
    }
    render(timeStamp) {
      this._webGL.gl.clearColor(
        this.canvasBackgroundColor.r,
        this.canvasBackgroundColor.g,
        this.canvasBackgroundColor.b,
        this.canvasBackgroundColor.a
      );
      this._webGL.gl.clear(this._webGL.gl.COLOR_BUFFER_BIT | this._webGL.gl.DEPTH_BUFFER_BIT | this._webGL.gl.STENCIL_BUFFER_BIT);
      this._webGL.gl.viewport(0, 0, this._webGL.width, this._webGL.height);
      this._d2AnyTestProgram.render(this);
      this._testD2AxisProgram.render(this);
      this._d2AxisProgram.render(this);
      const allContentPlanes = Array.from(this._contentPlanes.values());
      for (let i = 0; i < allContentPlanes.length; i++) {
        const planeItem = allContentPlanes[i];
        planeItem.render();
      }
      const allControlPlanes = Array.from(this._controlPlanes.values());
      for (let i = 0; i < allControlPlanes.length; i++) {
        const planeItem = allControlPlanes[i];
        planeItem.render();
      }
    }
    quit() {
      this._webGL = void 0;
      this._indexMap = void 0;
      const allContentPlanes = Array.from(this._contentPlanes.values());
      for (let i = 0; i < allContentPlanes.length; i++) {
        const planeItem = allContentPlanes[i];
        planeItem.quit();
      }
      const allControlPlanes = Array.from(this._controlPlanes.values());
      for (let i = 0; i < allControlPlanes.length; i++) {
        const planeItem = allControlPlanes[i];
        planeItem.quit();
      }
      this._contentPlanes.clear();
      this._contentPlanes = void 0;
      this._controlPlanes.clear();
      this._controlPlanes = void 0;
      this._d2AnyTestProgram = void 0;
      this._testD2AxisProgram = void 0;
      this._d2AxisProgram = void 0;
      this._textureMap.clear();
      this._textureMap = void 0;
      super.quit();
    }
  };

  // src/engine/common/Renderer.ts
  var Renderer = class extends BaseInterface2 {
    constructor(canvasElement) {
      super();
      this._canvasElement = canvasElement;
      this._ctx = null;
      this._gl = null;
      this._width = 0;
      this._height = 0;
      this._origin = Vector3.ORIGIN;
      this._mode = "D2" /* D2 */;
    }
    get ctx() {
      return this._ctx;
    }
    set ctx(value) {
      this._ctx = value;
    }
    get gl() {
      return this._gl;
    }
    set gl(value) {
      this._gl = value;
    }
    get canvasElement() {
      return this._canvasElement;
    }
    get width() {
      return this._width;
    }
    get height() {
      return this._height;
    }
    get origin() {
      return this._origin;
    }
    set origin(value) {
      this._origin = value;
    }
    get mode() {
      return this._mode;
    }
    set mode(value) {
      this._mode = value;
    }
    updateRect(width, height) {
      this._width = width;
      this._height = height;
    }
    updateOrigin(origin) {
      this._origin = origin;
    }
    quit() {
      this._canvasElement = void 0;
      this._ctx = void 0;
      this._gl = void 0;
    }
  };

  // src/engine/webgl/WebGL.ts
  var WebGL = class extends Renderer {
    constructor(canvasElement) {
      super(canvasElement);
      this.gl = canvasElement.getContext("webgl", {
        depth: false,
        antialias: true,
        stencil: false,
        aplha: false,
        premultipliedAplha: false
      });
      if (!this.gl) {
        throw new Error(`failed to initialize WebGL.`);
      }
      this._frameBufferStack = [];
      this.gl.viewport(0, 0, 1, 1);
      this._bufferSize = 0;
    }
    get bufferSize() {
      return this._bufferSize;
    }
    set bufferSize(value) {
      this._bufferSize = value;
    }
    /**
     * 创建 WebGL [ARRAY_BUFFER/ELEMENT_ARRAY_BUFFER] 缓冲区并初始化填充 null
     *      - 绑定缓冲区对象
     *          标记此对象内存空间的"使用目标" gl.ARRAY_BUFFER | gl.ELEMENT_ARRAY_BUFFER
     *      - 写入缓冲区对象
     *          无法直接向创建的缓冲区写入数据, 而只能向"使用目标"派发数据, 从而间接地实现向缓冲区填充数据
     *          因此向缓冲区写入数据之前, 需要将其与特定的"使用目标"关联
     *          (亦可以将"使用目标"类比于向缓冲区空间输送数据的"管道")
     */
    createWebGLArrayBufferBySize(bufferSize32, glUsage) {
      const webGLBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, webGLBuffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(bufferSize32), glUsage);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
      return webGLBuffer;
    }
    createWebGLArrayBufferByBuffer(data, glUsage) {
      const webGLBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, webGLBuffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, data, glUsage);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
      return webGLBuffer;
    }
    createWebGLElementBufferBySize(bufferSize32, glUsage) {
      const webGLBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, webGLBuffer);
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Float32Array(bufferSize32), glUsage);
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
      return webGLBuffer;
    }
    createWebGLElementBufferByBuffer(data, glUsage) {
      const webGLBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, webGLBuffer);
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, glUsage);
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
      return webGLBuffer;
    }
    clearCanvas() {
      const { width, height, origin } = this;
      this.gl.viewport(0, 0, width, height);
      this.gl.clearColor(0, 0, 0, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }
    setRenderMode(mode) {
      if (mode === "D2" /* D2 */) {
        this.mode = mode;
        this.gl.disable(this.gl.DEPTH_TEST);
        this.gl.disable(this.gl.CULL_FACE);
        this.gl.enable(this.gl.POLYGON_OFFSET_FILL);
        this.gl.polygonOffset(1, 1);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        return;
      }
      if (mode === "D3" /* D3 */) {
        this.mode = mode;
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.enable(this.gl.POLYGON_OFFSET_FILL);
        this.gl.polygonOffset(1, 1);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        return;
      }
      throw new Error(`the preset rendering mode parameters are incorrect: ${mode}.`);
    }
    getWebGLAttributeLocation(webGLProgram, name) {
      const loc = this.gl.getAttribLocation(webGLProgram, name);
      if (loc < 0 || loc === null) {
        throw new Error(`failed to get attribute-location ${name} in ${webGLProgram}.`);
      }
      return loc;
    }
    getWebGLUniformLocation(webGLProgram, name) {
      const loc = this.gl.getUniformLocation(webGLProgram, name);
      if (loc === null) {
        throw new Error(`failed to get uniform-location ${name} in ${webGLProgram}.`);
      }
      return loc;
    }
    createShader(type, sourceCode) {
      const shader = this.gl.createShader(type);
      if (shader === null) {
        throw new Error(`failed to get create webgl shader ${type}.`);
      }
      this.gl.shaderSource(shader, sourceCode);
      this.gl.compileShader(shader);
      if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        const msg = this.gl.getShaderInfoLog(shader);
        throw new Error(msg || `failed to get compile webgl shader ${type}.`);
      }
      return shader;
    }
    createProgram(vs, fs) {
      const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vs);
      const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fs);
      const webGLProgram = this.gl.createProgram();
      if (webGLProgram === null) {
        throw new Error(`failed to get create webgl program.`);
      }
      this.gl.attachShader(webGLProgram, vertexShader);
      this.gl.attachShader(webGLProgram, fragmentShader);
      this.gl.linkProgram(webGLProgram);
      if (!this.gl.getProgramParameter(webGLProgram, this.gl.LINK_STATUS)) {
        const msg = this.gl.getProgramInfoLog(webGLProgram);
        throw new Error(msg || `failed to get link webgl program.`);
      }
      return webGLProgram;
    }
    createRGBATexture(texImageSource, minFilter, magFilter, wrapS, wrapT) {
      const texture = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, 1);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, minFilter);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, magFilter);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, wrapS);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, wrapT);
      this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, texImageSource);
      this.gl.bindTexture(this.gl.TEXTURE_2D, null);
      return texture;
    }
    createFrameBufferTexture(texture, width, height, depth) {
      const frameBuffer = this.gl.createFramebuffer();
      this.enterfb(frameBuffer);
      this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, texture, 0);
      if (depth) {
        const depthBuffer = this.gl.createRenderbuffer();
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, depthBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, width, height);
        this.gl.framebufferRenderbuffer(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, depthBuffer);
      }
      this.leavefb();
      return frameBuffer;
    }
    getInstancedArrays() {
      const ext = this.gl.getExtension(`ANGLE_instanced_arrays`);
      if (ext === null) {
        throw new Error(`failed to get webgl extension.`);
      }
      return ext;
    }
    enterfb(fb) {
      this._frameBufferStack.push(fb);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, fb);
    }
    leavefb() {
      this._frameBufferStack.pop();
      const fb = this._frameBufferStack.length > 0 ? this._frameBufferStack[this._frameBufferStack.length - 1] : null;
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, fb);
    }
    quit() {
      this._frameBufferStack = void 0;
      super.quit();
    }
  };

  // src/engine/common/Light.ts
  var Light = class _Light extends BaseInterface2 {
    static getInstance() {
      if (_Light.instance === void 0) {
        _Light.instance = new _Light();
      }
      return _Light.instance;
    }
    constructor() {
      super();
      this._iluType = "PARA" /* PARA */;
      this._direction = new Vector3(-1, -2, -3);
      this._position = new Vector3(0, 0, 0);
      this._color = Color.WHITE;
      this._ambient = Color.WHITE;
    }
    get iluType() {
      return this._iluType;
    }
    set iluType(value) {
      this._iluType = value;
    }
    get direction() {
      return this._direction;
    }
    set direction(value) {
      this._direction = value;
    }
    get position() {
      return this._position;
    }
    set position(value) {
      this._position = value;
    }
    get color() {
      return this._color;
    }
    set color(value) {
      this._color = value;
    }
    get ambient() {
      return this._ambient;
    }
    set ambient(value) {
      this._ambient = value;
    }
    quit() {
      _Light.instance = void 0;
    }
  };

  // src/engine/common/init.ts
  function createEngine(engineType, renderMode, canvasElement) {
    return __async(this, null, function* () {
      Camera.getInstance();
      Light.getInstance();
      AxisParam.getInstance();
      if (engineType === "WEBGL" /* WEBGL */) {
        Camera.getInstance().setProjectionType("ORHT" /* ORTH */);
        const webGL = new WebGL(canvasElement);
        const sceneGL = new SceneGL(webGL);
        sceneGL.renderer.setRenderMode(renderMode);
        return sceneGL;
      }
      return null;
    });
  }
  function destoryEngine(engineType, scene) {
    Camera.getInstance().quit();
    if (engineType === "WEBGL" /* WEBGL */) {
      Camera.getInstance().setProjectionType("ORHT" /* ORTH */);
      let sceneGL = scene;
      let renderer = sceneGL.renderer;
      sceneGL.quit();
      renderer.quit();
    }
  }

  // src/init/Launcher.ts
  var Launcher = class {
    constructor() {
      this._scene = null;
      this._isShouldHandleElementsPriority = false;
      this._isShouldUpdateCanvasView = false;
      this._rAFId = void 0;
      Constant.messageTool.messageBus.subscribe("RENDER_FRAME" /* RENDER_FRAME */, (params) => {
        this._isShouldHandleElementsPriority = !params ? false : !!params.elementPriority;
        this._isShouldUpdateCanvasView = true;
      });
    }
    init(canvasElement) {
      return __async(this, null, function* () {
        this._scene = yield createEngine(Constant.systemConfig.coreEngineType, Constant.systemConfig.renderMode, canvasElement);
        Constant.modifyController.setLayerPresenter(new DrawLayerPresenter(this._scene));
        Constant.modifyController.setElementPresenter(new ElementPresenter(this._scene));
      });
    }
    get scene() {
      return this._scene;
    }
    get rAFId() {
      return this._rAFId;
    }
    set rAFId(value) {
      this._rAFId = value;
    }
    renderFrame(timeStamp) {
      if (this._isShouldUpdateCanvasView) {
        Constant.modifyController.notify(this._isShouldHandleElementsPriority);
        this._scene.render(timeStamp);
        this._isShouldUpdateCanvasView = false;
        this._isShouldHandleElementsPriority = false;
      }
    }
    quit() {
      destoryEngine(Constant.systemConfig.coreEngineType, this._scene);
      this._isShouldHandleElementsPriority = false;
      this._isShouldUpdateCanvasView = false;
      this._scene = void 0;
    }
  };

  // src/controller/Environment.ts
  var Environment = class extends BaseInterface {
    constructor() {
      super();
      this._isQuit = true;
      this._launcher = null;
      this._canvasElement = null;
      this._origin = new Vector3(0, 0, 1);
      this._canvasHeight = 0;
      this._canvasWidth = 0;
      this._canvasLeft = 0;
      this._canvasTop = 0;
    }
    get isQuit() {
      return this._isQuit;
    }
    set isQuit(value) {
      this._isQuit = value;
    }
    get launcher() {
      return this._launcher;
    }
    get origin() {
      return this._origin;
    }
    set origin(value) {
      this._origin = value;
    }
    get canvasWidth() {
      return this._canvasWidth;
    }
    set canvasWidth(value) {
      this._canvasWidth = value;
    }
    get canvasHeight() {
      return this._canvasHeight;
    }
    set canvasHeight(value) {
      this._canvasHeight = value;
    }
    get canvasLeft() {
      return this._canvasLeft;
    }
    set canvasLeft(value) {
      this._canvasLeft = value;
    }
    get canvasTop() {
      return this._canvasTop;
    }
    set canvasTop(value) {
      this._canvasTop = value;
    }
    init(canvasElement) {
      this._canvasElement = canvasElement;
      this._launcher = new Launcher();
      this._launcher.init(this._canvasElement);
    }
    setRenderMode(mode) {
      if (mode === "D2" /* D2 */) {
        Camera.getInstance().setProjectionType("ORHT" /* ORTH */);
        this._launcher.scene.renderer.setRenderMode(mode);
        return;
      }
      if (mode === "D3" /* D3 */) {
        Camera.getInstance().setProjectionType("ORHT" /* ORTH */);
        this._launcher.scene.renderer.setRenderMode(mode);
        return;
      }
      throw new Error(`the preset rendering mode parameters are incorrect: ${mode}.`);
    }
    /**
     * 更新/设置画布尺寸
     */
    updateCanvasRectSize(canvasWidth, canvasHeight, canvasLeft, canvasTop) {
      this._canvasElement.width = canvasWidth;
      this._canvasElement.height = canvasHeight;
      this._canvasWidth = canvasWidth;
      this._canvasHeight = canvasHeight;
      this._canvasLeft = canvasLeft;
      this._canvasTop = canvasTop;
      this.origin = new Vector3(canvasWidth / 2, -canvasHeight / 2, 0);
      Camera.getInstance().updateRect(canvasWidth, canvasHeight);
      this._launcher.scene.updateCanvasRect(this.canvasWidth, this.canvasHeight);
      this._launcher.scene.updateCanvasOrigin(new Vector3(this.origin.x, this.origin.y, this.origin.z));
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchCanvasProfileChangeMessage();
    }
    /**
     * 设置画布上的鼠标样式
     */
    updateCanvasMouseCursor(cursor) {
      this._canvasElement.style.cursor = cursor;
    }
    quit() {
      this._launcher.quit();
      this._launcher = void 0;
      this._canvasElement = void 0;
      this._origin = void 0;
    }
  };

  // src/tool/ToolChain.ts
  var ToolChain = class extends BaseInterface {
    constructor() {
      super();
      this._nextTool = null;
    }
    get nextTool() {
      return this._nextTool;
    }
    set nextTool(value) {
      this._nextTool = value;
    }
    handler(process) {
      if (this.nextTool !== null) {
        process(this.nextTool);
      }
    }
  };

  // src/tool/Tool.ts
  var Tool = class extends ToolChain {
    constructor() {
      super();
      this._drawing = false;
    }
    get drawing() {
      return this._drawing;
    }
    set drawing(value) {
      this._drawing = value;
    }
    handler(process) {
      if (this.nextTool) {
        process(this.nextTool);
      }
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
    }
    viewResizeHandler(inputInfo, offset) {
    }
  };

  // src/tool/common/DropDragTool.ts
  var DropDragTool = class extends Tool {
    constructor() {
      super();
    }
    keyDownHandler(inputInfo) {
      Constant.selectManager.keyDownHandler(inputInfo);
    }
    keyUpHandler(inputInfo) {
      Constant.selectManager.keyUpHandler(inputInfo);
    }
    mouseLeftDownHandler(inputInfo) {
      Constant.selectManager.mouseLeftDownHandler(inputInfo);
    }
    mouseMiddleDownHandler(inputInfo) {
      Constant.selectManager.mouseMiddleDownHandler(inputInfo);
    }
    mouseRightDownHandler(inputInfo) {
      Constant.selectManager.mouseRightDownHandler(inputInfo);
    }
    mouseMoveHandler(inputInfo) {
      Constant.selectManager.mouseMoveHandler(inputInfo);
    }
    mouseLeftUpHandler(inputInfo) {
      Constant.selectManager.mouseLeftUpHandler(inputInfo);
    }
    mouseMiddleUpHandler(inputInfo) {
    }
    mouseRightUpHandler(inputInfo) {
    }
    mouseWheelHandler(inputInfo) {
    }
    mouseLeaveHandler(inputInfo) {
    }
    mouseEnterHandler(inputInfo) {
    }
    quit() {
    }
  };

  // src/objects/assist/primitive2d/D2AssistLineShape.ts
  function buildD2AssistLineShape(startPoint, endPoint, optional = {}) {
    const layerItemId = optional.layerItemId || "dw_ml_1000001" /* MaskLayer */;
    const elementModelItem = buildD2LineModel(layerItemId, startPoint, endPoint, __spreadProps(__spreadValues({}, optional), {
      isFixedStrokeWidth: typeof optional.isFixedStrokeWidth !== "undefined" ? optional.isFixedStrokeWidth : true
    }));
    const elementShapeItem = new D2AssistLineShape(
      elementModelItem,
      typeof optional.isSolid !== "undefined" ? optional.isSolid : false,
      typeof optional.lineCap !== "undefined" ? optional.lineCap : "ROUND" /* ROUND */
    );
    return elementShapeItem;
  }
  var D2AssistLineShape = class extends D2LineShape {
    constructor(model, isSolid = true, lineCap = "ROUND" /* ROUND */) {
      super(model);
      this.isSolid = isSolid;
      this.lineCap = lineCap;
      this._camera = Camera.getInstance();
      this.refreshRender();
    }
    quit() {
      this._camera = void 0;
      this.setDelete();
    }
    getType() {
      return "D2AssistLine" /* D2AssistLine */;
    }
    getStatus() {
      return this.status;
    }
    toJSON() {
      const elementModelItem = this.model;
      return {
        type: this.getType(),
        modelType: this.model.modelType,
        status: this.status,
        layerItemId: elementModelItem.layerItemId,
        elementItemId: elementModelItem.elementItemId,
        elementItemName: elementModelItem.elementItemName,
        alpha: elementModelItem.alpha,
        rotation: elementModelItem.rotation,
        isFlipX: elementModelItem.isFlipX,
        isFlipY: elementModelItem.isFlipY,
        strokeColorData: elementModelItem.strokeColor.toRGBAJSON(),
        strokeWidth: elementModelItem.strokeWidth,
        bbox2: elementModelItem.bbox2.toJSON(),
        /* ... */
        startPoint: elementModelItem.startPoint.toJSON(),
        endPoint: elementModelItem.endPoint.toJSON(),
        lineCap: elementModelItem.lineCap,
        isSolid: elementModelItem.isSolid,
        segSize: elementModelItem.segSize,
        gapSize: elementModelItem.gapSize,
        rectBorderRadius: 0,
        isFixedStrokeWidth: elementModelItem.isFixedStrokeWidth
      };
    }
  };

  // src/controller/SelectManage.ts
  var SelectManager = class extends BaseManager {
    constructor() {
      super();
      this._camera = Camera.getInstance();
      this._selectionBoxLines = [];
      this._isBoxSelection = false;
      this._leftDownRealScenePhysicsX = 0;
      this._leftDownRealScenePhysicsY = 0;
      this._strokeWidth = px2mm(1, InsConfig.DPI[0]);
      this._segSize = 1;
      this._gapSize = 0.5;
      Constant.messageTool.messageBus.subscribe("CLEAR_ALL_SELECTS" /* CLEAR_ALL_SELECTS */, this.clearAllSelectItems.bind(this));
    }
    get camera() {
      return this._camera;
    }
    /**
     * 获取所有被选中的图元
     */
    getAllSelectItems() {
      const selects = [];
      for (let [key, item] of this.items) {
        selects.push(item);
      }
      return selects;
    }
    /**
     * 清除所有选中图元的记录
     */
    clearAllSelectItems() {
      this.setSelectStatus(/* @__PURE__ */ new Set([]));
      Constant.handlerControl.clearProcessor();
    }
    /**
     * 在所有选中图元记录中删除指定图元 ID 对应的图元
     */
    clearSelectItemById(elementItemId) {
      if (this.items.has(elementItemId)) {
        const elementItem = this.items.get(elementItemId);
        this.items.delete(elementItem.elementItemId);
        elementItem.setUnSelect();
        Constant.handlerControl.clearProcessor();
      }
    }
    keyDownHandler(inputInfo) {
      Constant.handlerControl.keyDownHandler(inputInfo);
    }
    keyUpHandler(inputInfo) {
      Constant.handlerControl.keyUpHandler(inputInfo);
    }
    mouseLeftDownHandler(inputInfo) {
      const eventsManager = EventsManager.getInstance();
      this._isBoxSelection = false;
      this._leftDownRealScenePhysicsX = inputInfo.leftDownRealScenePhysicsX;
      this._leftDownRealScenePhysicsY = inputInfo.leftDownRealScenePhysicsY;
      if (Constant.systemConfig.interactive.enableCanvasSelection) {
        const clickSelect = Constant.handlerControl.mouseLeftDownSelect(inputInfo);
        const selectResults = this.pointSelect(inputInfo);
        if (clickSelect) {
          selectResults.add(clickSelect);
        } else {
          Constant.handlerControl.clearProcessor();
        }
        if (this.items.size <= 0) {
          this.setSelectStatus(selectResults);
        } else {
          let hit = false;
          for (let [key, item] of this.items) {
            if (selectResults.has(item)) {
              hit = true;
              break;
            }
          }
          if (!hit) {
            this.setSelectStatus(selectResults);
          }
        }
        Constant.handlerControl.updateProcessor(inputInfo, clickSelect);
        for (let elementItem of selectResults) {
          eventsManager.triggerEventHandlers(elementItem.elementItemId, "POINTER_LEFTDOWN" /* POINTER_LEFTDOWN */);
        }
      }
    }
    mouseMiddleDownHandler(inputInfo) {
      this.destorySelectionBox();
    }
    mouseRightDownHandler(inputInfo) {
      this.destorySelectionBox();
    }
    mouseLeftUpHandler(inputInfo) {
      this.destorySelectionBox();
      Constant.messageTool.messageBus.publish("REFRESH_RTREE" /* REFRESH_RTREE */, null);
      Constant.handlerControl.mouseLeftUpHandler(inputInfo);
      if (Constant.systemConfig.interactive.enableCanvasSelection) {
        if (this._isBoxSelection) {
          const selectResults = this.boxSelect(inputInfo);
          this.setSelectStatus(selectResults);
        }
      }
      this._leftDownRealScenePhysicsX = -Number.MAX_SAFE_INTEGER;
      this._leftDownRealScenePhysicsY = -Number.MAX_SAFE_INTEGER;
      Constant.handlerControl.updateProcessor(inputInfo, null);
    }
    mouseMoveHandler(inputInfo) {
      if (inputInfo.leftMouseDown) {
        if (Constant.systemConfig.interactive.enableCanvasSelection) {
          if (this.items.size <= 0) {
            if (!inputInfo.middleMouseDown && !inputInfo.rightMouseDown) {
              this._isBoxSelection = true;
              this.updateSelectionBox(inputInfo);
            } else {
              this._isBoxSelection = false;
              this.destorySelectionBox();
            }
          } else {
            this._isBoxSelection = false;
            this.destorySelectionBox();
            Constant.handlerControl.mouseMoveHandler(inputInfo);
          }
        }
      } else {
        Constant.handlerControl.mouseUpMoveHandler(inputInfo);
      }
    }
    quit() {
      super.quit();
    }
    /**
     * 获取点选图元集合(已过滤)
     */
    pointSelect(inputInfo) {
      const sourceResults = Constant.d2FilterController.pointSelectBeforeFilter(
        inputInfo.leftDownRealScenePhysicsX,
        inputInfo.leftDownRealScenePhysicsY
      );
      return sourceResults;
    }
    /**
     * 获取框选图元集合(已过滤)
     */
    boxSelect(inputInfo) {
      const rangeBBox2 = new BBox2(
        this._leftDownRealScenePhysicsX,
        this._leftDownRealScenePhysicsY,
        inputInfo.moveRealScenePhysicsX,
        inputInfo.moveRealScenePhysicsY
      );
      const sourceResults = Constant.d2FilterController.boxSelectBeforeFilter(rangeBBox2);
      return sourceResults;
    }
    /**
     * 设置图元的选中样式
     * 		添加进选中图元集合
     * 		设置图元的选中样式
     */
    setSelectStatus(selectedItems) {
      for (let [key, item] of this.items) {
        item.setUnSelect();
      }
      this.items.clear();
      for (let selectedItem of selectedItems) {
        selectedItem.setSelect();
        this.items.set(selectedItem.elementItemId, selectedItem);
      }
    }
    /**
     * 创建或更新框选辅助虚线框
     */
    updateSelectionBox(inputInfo) {
      if (this._selectionBoxLines.length <= 0) {
        const line1 = buildD2AssistLineShape(
          new Vector2(inputInfo.leftDownRealScenePhysicsX, inputInfo.leftDownRealScenePhysicsY),
          new Vector2(inputInfo.moveRealScenePhysicsX, inputInfo.leftDownRealScenePhysicsY),
          {
            strokeColor: Color.LIGHT_STEE_BLUE,
            strokeWidth: this._strokeWidth,
            alpha: 1,
            isSolid: false,
            lineCap: "ROUND" /* ROUND */
          }
        );
        const line2 = buildD2AssistLineShape(
          new Vector2(inputInfo.moveRealScenePhysicsX, inputInfo.leftDownRealScenePhysicsY),
          new Vector2(inputInfo.moveRealScenePhysicsX, inputInfo.moveRealScenePhysicsY),
          {
            strokeColor: Color.LIGHT_STEE_BLUE,
            strokeWidth: this._strokeWidth,
            alpha: 1,
            isSolid: false,
            lineCap: "ROUND" /* ROUND */
          }
        );
        const line3 = buildD2AssistLineShape(
          new Vector2(inputInfo.leftDownRealScenePhysicsX, inputInfo.moveRealScenePhysicsY),
          new Vector2(inputInfo.moveRealScenePhysicsX, inputInfo.moveRealScenePhysicsY),
          {
            strokeColor: Color.LIGHT_STEE_BLUE,
            strokeWidth: this._strokeWidth,
            alpha: 1,
            isSolid: false,
            lineCap: "ROUND" /* ROUND */
          }
        );
        const line4 = buildD2AssistLineShape(
          new Vector2(inputInfo.leftDownRealScenePhysicsX, inputInfo.leftDownRealScenePhysicsY),
          new Vector2(inputInfo.leftDownRealScenePhysicsX, inputInfo.moveRealScenePhysicsY),
          {
            strokeColor: Color.LIGHT_STEE_BLUE,
            strokeWidth: this._strokeWidth,
            alpha: 1,
            isSolid: false,
            lineCap: "ROUND" /* ROUND */
          }
        );
        line1.segSize = line2.segSize = line3.segSize = line4.segSize = this._segSize;
        line1.gapSize = line2.gapSize = line3.gapSize = line4.gapSize = this._gapSize;
        this._selectionBoxLines.push(line1);
        this._selectionBoxLines.push(line2);
        this._selectionBoxLines.push(line3);
        this._selectionBoxLines.push(line4);
      } else {
        this._selectionBoxLines[0].endPoint = new Vector2(inputInfo.moveRealScenePhysicsX, inputInfo.leftDownRealScenePhysicsY);
        this._selectionBoxLines[1].startPoint = new Vector2(inputInfo.moveRealScenePhysicsX, inputInfo.leftDownRealScenePhysicsY);
        this._selectionBoxLines[1].endPoint = new Vector2(inputInfo.moveRealScenePhysicsX, inputInfo.moveRealScenePhysicsY);
        this._selectionBoxLines[2].startPoint = new Vector2(inputInfo.leftDownRealScenePhysicsX, inputInfo.moveRealScenePhysicsY);
        this._selectionBoxLines[2].endPoint = new Vector2(inputInfo.moveRealScenePhysicsX, inputInfo.moveRealScenePhysicsY);
        this._selectionBoxLines[3].endPoint = new Vector2(inputInfo.leftDownRealScenePhysicsX, inputInfo.moveRealScenePhysicsY);
      }
    }
    /**
     * 销毁框选辅助虚线框
     */
    destorySelectionBox() {
      for (let i = 0; i < this._selectionBoxLines.length; i++) {
        this._selectionBoxLines[i].setDelete();
      }
      this._selectionBoxLines.length = 0;
    }
  };

  // src/controller/D2FilterController.ts
  var D2FilterController = class extends BaseInterface {
    constructor() {
      super();
    }
    /**
     * 获取点选图元集合
     */
    pointSelectBeforeFilter(x, y) {
      const selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
      const results = /* @__PURE__ */ new Set();
      if (!selectedDrawLayerShapeItem) {
        return results;
      }
      const rtreeResults = Constant.rtree.search({ x, y, w: 0, h: 0 });
      for (let i = 0; i < rtreeResults.length; i++) {
        const rtreeItem = rtreeResults[i].leaf;
        const elementItem = rtreeItem.target;
        if (elementItem.isSelect(x, y) && elementItem.model.layerItemId === selectedDrawLayerShapeItem.layerItemId) {
          results.add(elementItem);
        }
      }
      return results;
    }
    /**
     * 获取框选图元集合
     */
    boxSelectBeforeFilter(bbox2) {
      const selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
      const results = /* @__PURE__ */ new Set();
      if (!selectedDrawLayerShapeItem) {
        return results;
      }
      const rtreeResults = Constant.rtree.search({ x: bbox2.minX, y: bbox2.minY, w: bbox2.width, h: bbox2.height });
      for (let i = 0; i < rtreeResults.length; i++) {
        const rtreeItem = rtreeResults[i].leaf;
        const elementItem = rtreeItem.target;
        if (!elementItem.isSelectable) {
          continue;
        }
        const elementItemBBox2 = elementItem.model.bbox2;
        if (elementItemBBox2.isBeWrappedByBBox2(bbox2) && elementItem.model.layerItemId === selectedDrawLayerShapeItem.layerItemId) {
          if (elementItem.model.isEnableSelect === false) {
            continue;
          }
          results.add(elementItem);
        }
      }
      return results;
    }
    quit() {
    }
  };

  // src/config/Config.ts
  var MOUSE_WHEEL_ZOOM_RATIO = 1.1;
  var MOUSE_WHEEL_SCROLL_DIST = 25;
  var DIRECTION_KEY_MOVE_STEP = 5;
  var MIN_ZOOM_RATIO = 0.05;
  var MAX_ZOOM_RATIO = 1e3;

  // src/objects/assist/primitive2d/D2AssistPointShape.ts
  function buildD2AssistPointShape(centerPoint, optional = {}) {
    const layerItemId = optional.layerItemId || "dw_ml_1000001" /* MaskLayer */;
    const alpha = optional.alpha || 1;
    const size = optional.size || 1.2;
    const iSize = optional.shape === "TRIANGLE" /* TRIANGLE */ ? size + 0.2 : size;
    const elementModelItem = buildD2PointModel(layerItemId, centerPoint, __spreadProps(__spreadValues({}, optional), {
      alpha,
      size: iSize
    }));
    const elementShapeItem = new D2AssistPointShape(elementModelItem);
    return elementShapeItem;
  }
  var D2AssistPointShape = class extends D2PointShape {
    constructor(model) {
      super(model);
      this._camera = Camera.getInstance();
      this.refreshRender();
    }
    set parent(value) {
      this.parent = value;
    }
    isSelect(x, y) {
      const zoomRatio = this._camera.getZoomRatio();
      const point = new Vector2(x, y);
      const centerPoint = this.centerPoint;
      const distOfClickPointAndCenterPoint = point.sub(centerPoint).length;
      if (distOfClickPointAndCenterPoint <= this.size / zoomRatio) {
        return true;
      }
      return false;
    }
    quit() {
      this._camera = void 0;
      this.setDelete();
    }
    getType() {
      return "D2Point" /* D2Point */;
    }
    getStatus() {
      return this.status;
    }
    toJSON() {
      const elementModelItem = this.model;
      return {
        type: this.getType(),
        modelType: this.model.modelType,
        status: this.status,
        layerItemId: elementModelItem.layerItemId,
        elementItemId: elementModelItem.elementItemId,
        elementItemName: elementModelItem.elementItemName,
        alpha: elementModelItem.alpha,
        rotation: elementModelItem.rotation,
        isFlipX: elementModelItem.isFlipX,
        isFlipY: elementModelItem.isFlipY,
        strokeColorData: elementModelItem.strokeColor.toRGBAJSON(),
        strokeWidth: 0,
        bbox2: null,
        /* ... */
        centerPoint: elementModelItem.centerPoint.toJSON(),
        size: elementModelItem.size,
        shape: elementModelItem.shape,
        isEnableScale: elementModelItem.isEnableScale,
        isEnableSelect: elementModelItem.isEnableSelect
      };
    }
  };

  // src/tool/history/command/Command.ts
  var Command = class extends BaseInterface {
    constructor(groupId) {
      super();
      this._groupId = groupId;
    }
    get groupId() {
      return this._groupId;
    }
    set groupId(value) {
      this.groupId = value;
    }
  };

  // src/tool/history/command/Config.ts
  var ECommandAction = /* @__PURE__ */ ((ECommandAction2) => {
    ECommandAction2["MODIFY"] = "MODIFY";
    ECommandAction2["ADD"] = "ADD";
    ECommandAction2["DELETE"] = "DELETE";
    return ECommandAction2;
  })(ECommandAction || {});

  // src/tool/history/command/ElementCommand.ts
  var ElementCommand = class extends Command {
    constructor(groupId, action) {
      super(groupId);
      this._action = action;
      this._itemData = void 0;
    }
    get action() {
      return this._action;
    }
    set action(value) {
      this.action = value;
    }
    get itemData() {
      return this._itemData;
    }
    set itemData(value) {
      this._itemData = value;
    }
    undo() {
      if (this.action === "MODIFY" /* MODIFY */) {
        this.modify();
        return;
      }
      if (this.action === "ADD" /* ADD */) {
        this.delete();
        return;
      }
      if (this.action === "DELETE" /* DELETE */) {
        this.rebuild();
        return;
      }
    }
    redo() {
      if (this.action === "MODIFY" /* MODIFY */) {
        this.modify();
        return;
      }
      if (this.action === "ADD" /* ADD */) {
        this.rebuild();
        return;
      }
      if (this.action === "DELETE" /* DELETE */) {
        this.delete();
        return;
      }
    }
  };

  // src/tool/history/command/primitive2d/D2LineShapeCommand.ts
  var D2LineShapeCommand = class extends ElementCommand {
    constructor(elementItem, groupId, action) {
      super(groupId, action);
      this._elementItemId = elementItem.elementItemId;
      this.itemData = JSON.parse(JSON.stringify(elementItem));
    }
    quit() {
      this.itemData = void 0;
      this._elementItemId = void 0;
    }
    modify() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        startPoint,
        endPoint,
        lineCap,
        isSolid
      } = this.itemData;
      const elementItem = D2LineShapeManager.getInstance().getItemById(elementItemId);
      const elementItemNowData = JSON.parse(JSON.stringify(elementItem));
      if (elementItem.startPoint.x !== startPoint.x || elementItem.startPoint.y !== startPoint.y) {
        elementItem.startPoint = new Vector2(startPoint.x, startPoint.y);
      }
      if (elementItem.endPoint.x !== endPoint.x || elementItem.endPoint.y !== endPoint.y) {
        elementItem.endPoint = new Vector2(endPoint.x, endPoint.y);
      }
      if (elementItem.strokeWidth !== strokeWidth) {
        elementItem.strokeWidth = strokeWidth;
      }
      if (elementItem.strokeColor.r !== strokeColorData.r || elementItem.strokeColor.g !== strokeColorData.g || elementItem.strokeColor.b !== strokeColorData.b || elementItem.strokeColor.a !== strokeColorData.a) {
        elementItem.strokeColor = new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a);
      }
      if (elementItem.elementItemName !== elementItemName) {
        elementItem.elementItemName = elementItemName;
      }
      if (elementItem.lineCap !== lineCap) {
        elementItem.lineCap = lineCap;
      }
      if (elementItem.isSolid !== isSolid) {
        elementItem.isSolid = isSolid;
      }
      this.itemData = elementItemNowData;
    }
    rebuild() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        startPoint,
        endPoint,
        lineCap,
        isSolid
      } = this.itemData;
      const targetShapeItem = D2LineShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        new Vector2(startPoint.x, startPoint.y),
        new Vector2(endPoint.x, endPoint.y),
        {
          strokeWidth,
          strokeColor: new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a)
        }
      );
      targetShapeItem.elementItemName = elementItemName;
      targetShapeItem.lineCap = lineCap;
      targetShapeItem.isSolid = isSolid;
    }
    delete() {
      const { elementItemId } = this.itemData;
      D2LineShapeManager.getInstance().deleteShapeItem(elementItemId);
    }
  };

  // src/tool/history/command/primitive2d/D2CircleShapeCommand.ts
  var D2CircleShapeCommand = class extends ElementCommand {
    constructor(elementItem, groupId, action) {
      super(groupId, action);
      this._elementItemId = elementItem.elementItemId;
      this.itemData = JSON.parse(JSON.stringify(elementItem));
    }
    quit() {
      this.itemData = void 0;
      this._elementItemId = void 0;
    }
    modify() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        centerPoint,
        radius,
        fillColorData,
        lineCap,
        isFill,
        isSolid
      } = this.itemData;
      const elementItem = D2CircleShapeManager.getInstance().getItemById(elementItemId);
      const elementItemNowData = JSON.parse(JSON.stringify(elementItem));
      if (elementItem.centerPoint.x !== centerPoint.x || elementItem.centerPoint.y !== centerPoint.y) {
        elementItem.centerPoint = new Vector2(centerPoint.x, centerPoint.y);
      }
      if (elementItem.radius !== radius) {
        elementItem.radius = radius;
      }
      if (elementItem.strokeWidth !== strokeWidth) {
        elementItem.strokeWidth = strokeWidth;
      }
      if (elementItem.strokeColor.r !== strokeColorData.r || elementItem.strokeColor.g !== strokeColorData.g || elementItem.strokeColor.b !== strokeColorData.b || elementItem.strokeColor.a !== strokeColorData.a) {
        elementItem.strokeColor = new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a);
      }
      if (elementItem.fillColor.r !== fillColorData.r || elementItem.fillColor.g !== fillColorData.g || elementItem.fillColor.b !== fillColorData.b || elementItem.fillColor.a !== fillColorData.a) {
        elementItem.fillColor = new Color(fillColorData.r, fillColorData.g, fillColorData.b, fillColorData.a);
      }
      if (elementItem.elementItemName !== elementItemName) {
        elementItem.elementItemName = elementItemName;
      }
      if (elementItem.lineCap !== lineCap) {
        elementItem.lineCap = lineCap;
      }
      if (elementItem.isFill !== isFill) {
        elementItem.isFill = isFill;
      }
      if (elementItem.isSolid !== isSolid) {
        elementItem.isSolid = isSolid;
      }
      this.itemData = elementItemNowData;
    }
    rebuild() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        centerPoint,
        radius,
        fillColorData,
        lineCap,
        isFill,
        isSolid
      } = this.itemData;
      const targetShapeItem = D2CircleShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        new Vector2(centerPoint.x, centerPoint.y),
        {
          radius,
          strokeWidth,
          strokeColor: new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a),
          isFill,
          fillColor: new Color(fillColorData.r, fillColorData.g, fillColorData.b, fillColorData.a)
        }
      );
      targetShapeItem.elementItemName = elementItemName;
      targetShapeItem.lineCap = lineCap;
      targetShapeItem.isSolid = isSolid;
    }
    delete() {
      const { elementItemId } = this.itemData;
      D2CircleShapeManager.getInstance().deleteShapeItem(elementItemId);
    }
  };

  // src/tool/history/command/primitive2d/D2ArcShapeCommand.ts
  var D2ArcShapeCommand = class extends ElementCommand {
    constructor(elementItem, groupId, action) {
      super(groupId, action);
      this._elementItemId = elementItem.elementItemId;
      this.itemData = JSON.parse(JSON.stringify(elementItem));
    }
    quit() {
      this.itemData = void 0;
      this._elementItemId = void 0;
    }
    modify() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        centerPoint,
        radius,
        startRadian,
        endRadian,
        sweep,
        fillColorData,
        lineCap,
        isFill,
        isSolid
      } = this.itemData;
      const elementItem = D2ArcShapeManager.getInstance().getItemById(elementItemId);
      const elementItemNowData = JSON.parse(JSON.stringify(elementItem));
      if (elementItem.centerPoint.x !== centerPoint.x || elementItem.centerPoint.y !== centerPoint.y) {
        elementItem.centerPoint = new Vector2(centerPoint.x, centerPoint.y);
      }
      if (elementItem.radius !== radius) {
        elementItem.radius = radius;
      }
      if (elementItem.startRadian !== startRadian) {
        elementItem.startRadian = startRadian;
      }
      if (elementItem.endRadian !== endRadian) {
        elementItem.endRadian = endRadian;
      }
      if (elementItem.sweep !== sweep) {
        elementItem.sweep = sweep;
      }
      if (elementItem.strokeWidth !== strokeWidth) {
        elementItem.strokeWidth = strokeWidth;
      }
      if (elementItem.strokeColor.r !== strokeColorData.r || elementItem.strokeColor.g !== strokeColorData.g || elementItem.strokeColor.b !== strokeColorData.b || elementItem.strokeColor.a !== strokeColorData.a) {
        elementItem.strokeColor = new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a);
      }
      if (elementItem.fillColor.r !== fillColorData.r || elementItem.fillColor.g !== fillColorData.g || elementItem.fillColor.b !== fillColorData.b || elementItem.fillColor.a !== fillColorData.a) {
        elementItem.fillColor = new Color(fillColorData.r, fillColorData.g, fillColorData.b, fillColorData.a);
      }
      if (elementItem.elementItemName !== elementItemName) {
        elementItem.elementItemName = elementItemName;
      }
      if (elementItem.lineCap !== lineCap) {
        elementItem.lineCap = lineCap;
      }
      if (elementItem.isFill !== isFill) {
        elementItem.isFill = isFill;
      }
      if (elementItem.isSolid !== isSolid) {
        elementItem.isSolid = isSolid;
      }
      this.itemData = elementItemNowData;
    }
    rebuild() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        centerPoint,
        radius,
        startRadian,
        endRadian,
        sweep,
        fillColorData,
        lineCap,
        isFill,
        isSolid
      } = this.itemData;
      const targetShapeItem = D2ArcShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        new Vector2(centerPoint.x, centerPoint.y),
        radius,
        startRadian,
        endRadian,
        sweep,
        {
          strokeWidth,
          strokeColor: new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a),
          isFill,
          fillColor: new Color(fillColorData.r, fillColorData.g, fillColorData.b, fillColorData.a)
        }
      );
      targetShapeItem.elementItemName = elementItemName;
      targetShapeItem.lineCap = lineCap;
      targetShapeItem.isSolid = isSolid;
    }
    delete() {
      const { elementItemId } = this.itemData;
      D2ArcShapeManager.getInstance().deleteShapeItem(elementItemId);
    }
  };

  // src/tool/history/command/primitive2d/D2TextShapeCommand.ts
  var D2TextShapeCommand = class extends ElementCommand {
    constructor(elementItem, groupId, action) {
      super(groupId, action);
      this._elementItemId = elementItem.elementItemId;
      this.itemData = JSON.parse(JSON.stringify(elementItem));
    }
    quit() {
      this.itemData = void 0;
      this._elementItemId = void 0;
    }
    modify() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        position,
        content,
        fontFamily,
        fontStyle,
        fontSize,
        fontWeight
      } = this.itemData;
      const elementItem = D2TextShapeManager.getInstance().getItemById(elementItemId);
      const elementItemNowData = JSON.parse(JSON.stringify(elementItem));
      if (elementItem.position.x !== position.x || elementItem.position.y !== position.y) {
        elementItem.position = new Vector2(position.x, position.y);
      }
      if (elementItem.content !== content) {
        elementItem.updateContent(content);
      }
      if (elementItem.fontFamily !== fontFamily) {
        elementItem.fontFamily = fontFamily;
      }
      if (elementItem.fontStyle !== fontStyle) {
        elementItem.fontStyle = fontStyle;
      }
      if (elementItem.fontSize !== fontSize) {
        elementItem.fontSize = fontSize;
      }
      if (elementItem.fontWeight !== fontWeight) {
        elementItem.fontWeight = fontWeight;
      }
      if (elementItem.strokeColor.r !== strokeColorData.r || elementItem.strokeColor.g !== strokeColorData.g || elementItem.strokeColor.b !== strokeColorData.b || elementItem.strokeColor.a !== strokeColorData.a) {
        elementItem.strokeColor = new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a);
      }
      this.itemData = elementItemNowData;
    }
    rebuild() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        position,
        content,
        fontFamily,
        fontStyle,
        fontSize,
        fontWeight
      } = this.itemData;
      const targetShapeItem = D2TextShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        new Vector2(position.x, position.y),
        content,
        {
          fontFamily,
          fontStyle,
          fontSize,
          strokeColor: new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a)
        }
      );
      targetShapeItem.elementItemName = elementItemName;
    }
    delete() {
      const { elementItemId } = this.itemData;
      D2TextShapeManager.getInstance().deleteShapeItem(elementItemId);
    }
  };

  // src/tool/history/command/primitive2d/D2ImageShapeCommand.ts
  var D2ImageShapeCommand = class extends ElementCommand {
    constructor(elementItem, groupId, action) {
      super(groupId, action);
      this._elementItemId = elementItem.elementItemId;
      this.itemData = JSON.parse(JSON.stringify(elementItem));
    }
    quit() {
      this.itemData = void 0;
      this._elementItemId = void 0;
    }
    modify() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        fileHashUuid,
        imageDataURL,
        position,
        width,
        height
      } = this.itemData;
      const elementItem = D2ImageShapeManager.getInstance().getItemById(elementItemId);
      const elementItemNowData = JSON.parse(JSON.stringify(elementItem));
      if (elementItem.imageDataURL !== imageDataURL) {
        elementItem.imageDataURL = imageDataURL;
      }
      if (elementItem.position.x !== position.x || elementItem.position.y !== position.y) {
        elementItem.position = new Vector2(position.x, position.y);
      }
      if (elementItem.width !== width) {
        elementItem.width = width;
      }
      if (elementItem.height !== height) {
        elementItem.height = height;
      }
      this.itemData = elementItemNowData;
    }
    rebuild() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        imageDataURL,
        position,
        fileHashUuid,
        width,
        height
      } = this.itemData;
      const targetShapeItem = D2ImageShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        new Vector2(position.x, position.y),
        imageDataURL,
        fileHashUuid,
        width,
        height,
        {
          alpha
        }
      );
      targetShapeItem.elementItemName = elementItemName;
    }
    delete() {
      const { elementItemId } = this.itemData;
      D2ImageShapeManager.getInstance().deleteShapeItem(elementItemId);
    }
  };

  // src/tool/history/command/primitive2d/D2PointShapeCommand.ts
  var D2PointShapeCommand = class extends ElementCommand {
    constructor(elementItem, groupId, action) {
      super(groupId, action);
      this._elementItemId = elementItem.elementItemId;
      this.itemData = JSON.parse(JSON.stringify(elementItem));
    }
    quit() {
      this.itemData = void 0;
      this._elementItemId = void 0;
    }
    modify() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        centerPoint,
        size,
        shape,
        isEnableScale,
        isEnableSelect
      } = this.itemData;
      const elementItem = D2PointShapeManager.getInstance().getItemById(elementItemId);
      const elementItemNowData = JSON.parse(JSON.stringify(elementItem));
      if (elementItem.centerPoint.x !== centerPoint.x || elementItem.centerPoint.y !== centerPoint.y) {
        elementItem.centerPoint = new Vector2(centerPoint.x, centerPoint.y);
      }
      if (elementItem.size !== size) {
        elementItem.size = size;
      }
      if (elementItem.shape !== shape) {
        elementItem.shape = shape;
      }
      if (elementItem.strokeColor.r !== strokeColorData.r || elementItem.strokeColor.g !== strokeColorData.g || elementItem.strokeColor.b !== strokeColorData.b || elementItem.strokeColor.a !== strokeColorData.a) {
        elementItem.strokeColor = new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a);
      }
      if (elementItem.elementItemName !== elementItemName) {
        elementItem.elementItemName = elementItemName;
      }
      if (elementItem.isEnableScale !== isEnableScale) {
        elementItem.isEnableScale = isEnableScale;
      }
      if (elementItem.isEnableSelect !== isEnableSelect) {
        elementItem.isEnableSelect = isEnableSelect;
      }
      this.itemData = elementItemNowData;
    }
    rebuild() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        centerPoint,
        size,
        shape,
        isEnableScale,
        isEnableSelect
      } = this.itemData;
      const targetShapeItem = D2PointShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        new Vector2(centerPoint.x, centerPoint.y),
        {
          size,
          shape,
          strokeColor: new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a),
          alpha,
          isEnableScale,
          isEnableSelect
        }
      );
      targetShapeItem.elementItemName = elementItemName;
    }
    delete() {
      const { elementItemId } = this.itemData;
      D2PointShapeManager.getInstance().deleteShapeItem(elementItemId);
    }
  };

  // src/tool/history/command/primitive2d/D2RectShapeCommand.ts
  var D2RectShapeCommand = class extends ElementCommand {
    constructor(elementItem, groupId, action) {
      super(groupId, action);
      this._elementItemId = elementItem.elementItemId;
      this.itemData = JSON.parse(JSON.stringify(elementItem));
    }
    quit() {
      this.itemData = void 0;
      this._elementItemId = void 0;
    }
    modify() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        position,
        width,
        height,
        isFill,
        fillColorData,
        isSolid,
        borderRadius,
        isFixedStrokeWidth
      } = this.itemData;
      const elementItem = D2RectShapeManager.getInstance().getItemById(elementItemId);
      const elementItemNowData = JSON.parse(JSON.stringify(elementItem));
      if (elementItem.position.x !== position.x || elementItem.position.y !== position.y) {
        elementItem.position = new Vector2(position.x, position.y);
      }
      if (elementItem.width !== width) {
        elementItem.width = width;
      }
      if (elementItem.height !== height) {
        elementItem.height = height;
      }
      this.itemData = elementItemNowData;
    }
    rebuild() {
      const {
        type,
        modelType,
        status,
        layerItemId,
        elementItemId,
        elementItemName,
        strokeColorData,
        strokeWidth,
        alpha,
        isFlipX,
        isFlipY,
        rotation,
        /* ... */
        position,
        width,
        height,
        isFill,
        fillColorData,
        isSolid,
        borderRadius,
        isFixedStrokeWidth
      } = this.itemData;
      const targetShapeItem = D2RectShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        new Vector2(position.x, position.y),
        width,
        height,
        {
          strokeWidth,
          strokeColor: new Color(strokeColorData.r, strokeColorData.g, strokeColorData.b, strokeColorData.a),
          isFill,
          alpha,
          isSolid,
          borderRadius,
          isFixedStrokeWidth,
          isFlipX,
          isFlipY,
          rotation
        }
      );
      targetShapeItem.elementItemName = elementItemName;
    }
    delete() {
      const { elementItemId } = this.itemData;
      D2ImageShapeManager.getInstance().deleteShapeItem(elementItemId);
    }
  };

  // src/tool/history/command/primitive2d/CommandProxy.ts
  var CommandProxy = class {
    static getCommandInstance(elementItemId, action, groupId = String(performance.now())) {
      const elementItem = Helper.getElementShapeItemById(elementItemId);
      if (!elementItem) {
        throw new Error(`error in determining the type of occurrence in instantiating entity history records.`);
      }
      const elementItemModelType = elementItem.model.modelType;
      const setGroupId = groupId || String(performance.now());
      if (elementItemModelType === "D2Line" /* D2Line */) {
        return new D2LineShapeCommand(D2LineShapeManager.getInstance().getItemById(elementItemId), setGroupId, action);
      }
      if (elementItemModelType === "D2Circle" /* D2Circle */) {
        return new D2CircleShapeCommand(D2CircleShapeManager.getInstance().getItemById(elementItemId), setGroupId, action);
      }
      if (elementItemModelType === "D2Point" /* D2Point */) {
        return new D2PointShapeCommand(D2PointShapeManager.getInstance().getItemById(elementItemId), setGroupId, action);
      }
      if (elementItemModelType === "D2Arc" /* D2Arc */) {
        return new D2ArcShapeCommand(D2ArcShapeManager.getInstance().getItemById(elementItemId), setGroupId, action);
      }
      if (elementItemModelType === "D2Text" /* D2Text */) {
        return new D2TextShapeCommand(D2TextShapeManager.getInstance().getItemById(elementItemId), setGroupId, action);
      }
      if (elementItemModelType === "D2Image" /* D2Image */) {
        return new D2ImageShapeCommand(D2ImageShapeManager.getInstance().getItemById(elementItemId), setGroupId, action);
      }
      if (elementItemModelType === "D2Rect" /* D2Rect */) {
        return new D2RectShapeCommand(D2RectShapeManager.getInstance().getItemById(elementItemId), setGroupId, action);
      }
      throw new Error(`error in determining the type of occurrence in instantiating entity history records.`);
    }
  };

  // src/tool/selection/BaseSelectionTool.ts
  var BaseSelectionTool = class extends BaseInterface {
    constructor() {
      super();
      this._camrea = Camera.getInstance();
      this._moveStartPosition = null;
      this._moveScenePhysicsX = 0;
      this._moveScenePhysicsY = 0;
    }
    get camrea() {
      return this._camrea;
    }
    set selectedItems(value) {
      this._selectedItems = value;
    }
    get selectedItems() {
      return this._selectedItems;
    }
    set moveStartPosition(value) {
      this._moveStartPosition = value;
    }
    get moveStartPosition() {
      return this._moveStartPosition;
    }
    set moveScenePhysicsX(value) {
      this._moveScenePhysicsX = value;
    }
    get moveScenePhysicsX() {
      return this._moveScenePhysicsX;
    }
    set moveScenePhysicsY(value) {
      this._moveScenePhysicsY = value;
    }
    get moveScenePhysicsY() {
      return this._moveScenePhysicsY;
    }
    quit() {
      this._camrea = void 0;
      this._moveStartPosition = void 0;
    }
  };

  // src/tool/selection/primitive2d/D2SelectionTool.ts
  var D2SelectionTool = class extends BaseSelectionTool {
    constructor() {
      super();
    }
    isSelectAssistPoint(assistPoint, x, y) {
      const zoomRatio = this.camrea.getZoomRatio();
      const point = new Vector2(x, y);
      const centerPoint = new Vector2(assistPoint.centerPoint.x, assistPoint.centerPoint.y);
      const distOfClickPointAndCenterPoint = point.sub(centerPoint).length;
      if (distOfClickPointAndCenterPoint <= assistPoint.size / zoomRatio) {
        return true;
      }
      return false;
    }
  };

  // src/tool/selection/primitive2d/D2LineShapeSelectionTool.ts
  var D2LineShapeSelectionTool = class extends D2SelectionTool {
    constructor(selectedItem) {
      super();
      this._shapeItemCommand = null;
      this._selectedItem = selectedItem;
      this._pointStart = null;
      this._pointMiddle = null;
      this._pointEnd = null;
      this._isSelectedPointStart = false;
      this._isSelectedPointMiddle = false;
      this._isSelectedPointEnd = false;
      this.freshAssistShapes();
    }
    mouseLeftDownSelect(inputInfo) {
      const allControlAssistPoints = [this._pointStart, this._pointMiddle, this._pointEnd];
      let hitItem = null;
      for (let i = 0; i < allControlAssistPoints.length; i++) {
        if (allControlAssistPoints[i].isSelect(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
          hitItem = allControlAssistPoints[i];
          break;
        }
      }
      return hitItem ? hitItem.parent : null;
    }
    keyDownHandler(inputInfo) {
      switch (inputInfo.keyCode) {
        case 37 /* LEFT */: {
          this.moveSelectedItem(-DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 38 /* UP */: {
          this.moveSelectedItem(0, DIRECTION_KEY_MOVE_STEP);
          break;
        }
        case 39 /* RIGHT */: {
          this.moveSelectedItem(DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 40 /* DOWN */: {
          this.moveSelectedItem(0, -DIRECTION_KEY_MOVE_STEP);
          break;
        }
        default:
      }
    }
    keyUpHandler(inputInfo) {
    }
    mouseLeftDownHandler(inputInfo) {
      this.moveScenePhysicsX = inputInfo.leftDownScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.leftDownScenePhysicsY;
      if (this._selectedItem) {
        this._shapeItemCommand = CommandProxy.getCommandInstance(
          this._selectedItem.elementItemId,
          "MODIFY" /* MODIFY */,
          Constant.globalIdenManager.getCommandIden()
        );
      }
      this._isSelectedPointStart = this._pointStart.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointMiddle = this._pointMiddle.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointEnd = this._pointEnd.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
    }
    mouseLeftUpHandler(inputInfo) {
      if (this._selectedItem) {
        this._selectedItem.model.updateBBox2();
        if (this._shapeItemCommand) {
          Constant.historyManager.add(this._shapeItemCommand);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
      }
      this._shapeItemCommand = null;
    }
    mouseMoveHandler(inputInfo) {
      const diffX = inputInfo.moveScenePhysicsX - this.moveScenePhysicsX;
      const diffY = inputInfo.moveScenePhysicsY - this.moveScenePhysicsY;
      const diffVector2 = new Vector2(diffX, diffY);
      if (this._isSelectedPointStart) {
        this._selectedItem.startPoint = this._selectedItem.startPoint.add(diffVector2);
      } else if (this._isSelectedPointMiddle) {
        if (diffX === 0 && diffY === 0) {
          return;
        }
        const P = D2LineToolkit.calculateVectorProjection(
          this._selectedItem.endPoint.sub(this._selectedItem.startPoint),
          new Vector2(diffX, diffY)
        );
        this._selectedItem.startPoint = this._selectedItem.startPoint.add(P);
        this._selectedItem.endPoint = this._selectedItem.endPoint.add(P);
      } else if (this._isSelectedPointEnd) {
        this._selectedItem.endPoint = this._selectedItem.endPoint.add(diffVector2);
      } else {
        this.moveSelectedItem(diffX, diffY);
      }
      this.updateAssistShapes();
      this.moveScenePhysicsX = inputInfo.moveScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.moveScenePhysicsY;
    }
    mouseUpMoveHandler(inputInfo) {
      const allControlAssistPoints = [this._pointStart, this._pointMiddle, this._pointEnd];
      let hit = false;
      for (let i = 0; i < allControlAssistPoints.length; i++) {
        if (this.isSelectAssistPoint(allControlAssistPoints[i], inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
          hit = true;
          break;
        }
      }
      if (hit) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else {
        Constant.environment.updateCanvasMouseCursor("default");
      }
    }
    clear() {
      this._selectedItem = null;
      this._pointStart.setDelete();
      this._pointMiddle.setDelete();
      this._pointEnd.setDelete();
      this._pointStart = null;
      this._pointMiddle = null;
      this._pointEnd = null;
      this._isSelectedPointStart = false;
      this._isSelectedPointMiddle = false;
      this._isSelectedPointEnd = false;
    }
    quit() {
      this._shapeItemCommand = void 0;
      this._selectedItem = void 0;
      if (this._pointStart) {
        this._pointStart.quit();
      }
      if (this._pointMiddle) {
        this._pointMiddle.quit();
      }
      if (this._pointEnd) {
        this._pointEnd.quit();
      }
      super.quit();
    }
    freshAssistShapes() {
      if (this._pointStart) {
        this._pointStart.setDelete();
      }
      if (this._pointMiddle) {
        this._pointMiddle.setDelete();
      }
      if (this._pointEnd) {
        this._pointEnd.setDelete();
      }
      const middleVec = this._selectedItem.startPoint.add(this._selectedItem.endPoint);
      this._pointStart = buildD2AssistPointShape(this._selectedItem.startPoint, { strokeColor: Color.GREEN });
      this._pointMiddle = buildD2AssistPointShape(new Vector2(middleVec.x / 2, middleVec.y / 2), {
        shape: "TRIANGLE" /* TRIANGLE */,
        size: 1.6,
        strokeColor: Color.GREEN
      });
      this._pointEnd = buildD2AssistPointShape(this._selectedItem.endPoint, { strokeColor: Color.GREEN });
    }
    updateAssistShapes() {
      this._pointStart.centerPoint = this._selectedItem.startPoint.copy();
      const middleVec = this._selectedItem.startPoint.add(this._selectedItem.endPoint);
      this._pointMiddle.centerPoint = new Vector2(middleVec.x / 2, middleVec.y / 2);
      this._pointEnd.centerPoint = this._selectedItem.endPoint.copy();
    }
    moveSelectedItem(diffX, diffY) {
      const moveMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector2(diffX, diffY).toVector3());
      this._selectedItem.transform(moveMatrix4);
    }
  };

  // src/tool/selection/primitive2d/D2CircleShapeSelectionTool.ts
  var D2CircleShapeSelectionTool = class extends D2SelectionTool {
    constructor(selectedItem) {
      super();
      this._shapeItemCommand = null;
      this._selectedItem = selectedItem;
      this._pointCenter = null;
      this._pointTop = null;
      this._pointRight = null;
      this._pointBottom = null;
      this._pointLeft = null;
      this._isSelectedPointCenter = false;
      this._isSelectedPointTop = false;
      this._isSelectedPointRight = false;
      this._isSelectedPointBottom = false;
      this._isSelectedPointLeft = false;
      this.freshAssistShapes();
    }
    mouseLeftDownSelect(inputInfo) {
      const allControlAssistPoints = [
        this._pointCenter,
        this._pointTop,
        this._pointRight,
        this._pointBottom,
        this._pointLeft
      ];
      let hitItem = null;
      for (let i = 0; i < allControlAssistPoints.length; i++) {
        if (allControlAssistPoints[i].isSelect(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
          hitItem = allControlAssistPoints[i];
          break;
        }
      }
      return hitItem ? hitItem.parent : null;
    }
    keyDownHandler(inputInfo) {
      switch (inputInfo.keyCode) {
        case 37 /* LEFT */: {
          this.moveSelectedItem(-DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 38 /* UP */: {
          this.moveSelectedItem(0, DIRECTION_KEY_MOVE_STEP);
          break;
        }
        case 39 /* RIGHT */: {
          this.moveSelectedItem(DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 40 /* DOWN */: {
          this.moveSelectedItem(0, -DIRECTION_KEY_MOVE_STEP);
          break;
        }
        default:
      }
    }
    keyUpHandler(inputInfo) {
    }
    mouseLeftDownHandler(inputInfo) {
      this.moveScenePhysicsX = inputInfo.leftDownScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.leftDownScenePhysicsY;
      if (this._selectedItem) {
        this._shapeItemCommand = CommandProxy.getCommandInstance(
          this._selectedItem.elementItemId,
          "MODIFY" /* MODIFY */,
          Constant.globalIdenManager.getCommandIden()
        );
      }
      this._isSelectedPointCenter = this._pointCenter.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointTop = this._pointTop.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointRight = this._pointRight.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointBottom = this._pointBottom.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointLeft = this._pointLeft.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
    }
    mouseLeftUpHandler(inputInfo) {
      if (this._selectedItem) {
        this._selectedItem.model.updateBBox2();
        if (this._shapeItemCommand) {
          Constant.historyManager.add(this._shapeItemCommand);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
      }
      this._shapeItemCommand = null;
    }
    mouseMoveHandler(inputInfo) {
      const diffX = inputInfo.moveScenePhysicsX - this.moveScenePhysicsX;
      const diffY = inputInfo.moveScenePhysicsY - this.moveScenePhysicsY;
      if (this._isSelectedPointCenter) {
        this.moveSelectedItem(diffX, diffY);
      } else if (this._isSelectedPointTop) {
        this._selectedItem.updateRadius(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      } else if (this._isSelectedPointRight) {
        this._selectedItem.updateRadius(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      } else if (this._isSelectedPointBottom) {
        this._selectedItem.updateRadius(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      } else if (this._isSelectedPointLeft) {
        this._selectedItem.updateRadius(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      } else {
        this.moveSelectedItem(diffX, diffY);
      }
      this.updateAssistShapes();
      this.moveScenePhysicsX = inputInfo.moveScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.moveScenePhysicsY;
    }
    mouseUpMoveHandler(inputInfo) {
      const allControlAssistPoints = [
        this._pointCenter,
        this._pointTop,
        this._pointRight,
        this._pointBottom,
        this._pointLeft
      ];
      let hit = false;
      for (let i = 0; i < allControlAssistPoints.length; i++) {
        if (this.isSelectAssistPoint(allControlAssistPoints[i], inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
          hit = true;
          break;
        }
      }
      if (hit) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else {
        Constant.environment.updateCanvasMouseCursor("default");
      }
    }
    clear() {
      this._selectedItem = null;
      this._pointCenter.setDelete();
      this._pointTop.setDelete();
      this._pointRight.setDelete();
      this._pointBottom.setDelete();
      this._pointLeft.setDelete();
      this._pointCenter = null;
      this._pointTop = null;
      this._pointRight = null;
      this._pointBottom = null;
      this._pointLeft = null;
      this._isSelectedPointCenter = false;
      this._isSelectedPointTop = false;
      this._isSelectedPointRight = false;
      this._isSelectedPointBottom = false;
      this._isSelectedPointLeft = false;
    }
    quit() {
      this._shapeItemCommand = void 0;
      this._selectedItem = void 0;
      if (this._pointCenter) {
        this._pointCenter.quit();
      }
      if (this._pointTop) {
        this._pointTop.quit();
      }
      if (this._pointRight) {
        this._pointRight.quit();
      }
      if (this._pointBottom) {
        this._pointBottom.quit();
      }
      if (this._pointLeft) {
        this._pointLeft.quit();
      }
      super.quit();
    }
    freshAssistShapes() {
      if (this._pointCenter) {
        this._pointCenter.setDelete();
      }
      if (this._pointTop) {
        this._pointTop.setDelete();
      }
      if (this._pointRight) {
        this._pointRight.setDelete();
      }
      if (this._pointBottom) {
        this._pointBottom.setDelete();
      }
      if (this._pointLeft) {
        this._pointLeft.setDelete();
      }
      const circleCenterPoint = this._selectedItem.centerPoint;
      const circleRadius = this._selectedItem.radius;
      this._pointCenter = buildD2AssistPointShape(new Vector2(circleCenterPoint.x, circleCenterPoint.y), { strokeColor: Color.GREEN });
      this._pointTop = buildD2AssistPointShape(new Vector2(circleCenterPoint.x, circleCenterPoint.y + circleRadius), { strokeColor: Color.GREEN });
      this._pointRight = buildD2AssistPointShape(new Vector2(circleCenterPoint.x + circleRadius, circleCenterPoint.y), { strokeColor: Color.GREEN });
      this._pointBottom = buildD2AssistPointShape(new Vector2(circleCenterPoint.x, circleCenterPoint.y - circleRadius), {
        strokeColor: Color.GREEN
      });
      this._pointLeft = buildD2AssistPointShape(new Vector2(circleCenterPoint.x - circleRadius, circleCenterPoint.y), { strokeColor: Color.GREEN });
    }
    updateAssistShapes() {
      const circleCenterPoint = this._selectedItem.centerPoint;
      const circleRadius = this._selectedItem.radius;
      this._pointCenter.centerPoint = new Vector2(circleCenterPoint.x, circleCenterPoint.y);
      this._pointTop.centerPoint = new Vector2(circleCenterPoint.x, circleCenterPoint.y + circleRadius);
      this._pointRight.centerPoint = new Vector2(circleCenterPoint.x + circleRadius, circleCenterPoint.y);
      this._pointBottom.centerPoint = new Vector2(circleCenterPoint.x, circleCenterPoint.y - circleRadius);
      this._pointLeft.centerPoint = new Vector2(circleCenterPoint.x - circleRadius, circleCenterPoint.y);
    }
    moveSelectedItem(diffX, diffY) {
      const moveMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector2(diffX, diffY).toVector3());
      this._selectedItem.transform(moveMatrix4);
    }
  };

  // src/tool/selection/primitive2d/MoveOperSelectionTool.ts
  var MoveOperSelectionTool = class extends BaseSelectionTool {
    constructor() {
      super();
      this._shapeItemCommands = /* @__PURE__ */ new Map();
    }
    mouseLeftDownSelect(inputInfo) {
      return null;
    }
    keyDownHandler(inputInfo) {
      switch (inputInfo.keyCode) {
        case 37 /* LEFT */: {
          this.moveSelectedItems(-DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 38 /* UP */: {
          this.moveSelectedItems(0, DIRECTION_KEY_MOVE_STEP);
          break;
        }
        case 39 /* RIGHT */: {
          this.moveSelectedItems(DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 40 /* DOWN */: {
          this.moveSelectedItems(0, -DIRECTION_KEY_MOVE_STEP);
          break;
        }
        default:
      }
    }
    keyUpHandler(inputInfo) {
    }
    mouseLeftDownHandler(inputInfo) {
      this.moveScenePhysicsX = inputInfo.leftDownScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.leftDownScenePhysicsY;
      const allSelectItems = Constant.selectManager.getAllSelectItems();
      if (allSelectItems.length) {
        for (let i = 0; i < allSelectItems.length; i++) {
          const shapeItemCommand = CommandProxy.getCommandInstance(
            allSelectItems[i].elementItemId,
            "MODIFY" /* MODIFY */,
            Constant.globalIdenManager.getCommandIden()
          );
          this._shapeItemCommands.set(allSelectItems[i].elementItemId, shapeItemCommand);
        }
      }
    }
    mouseLeftUpHandler(inputInfo) {
      const allSelectItems = Constant.selectManager.getAllSelectItems();
      let hasModified = false;
      for (let i = 0; i < allSelectItems.length; i++) {
        const item = allSelectItems[i];
        hasModified = true;
        item.model.updateBBox2();
      }
      if (hasModified) {
        for (let commandItem of this._shapeItemCommands) {
          Constant.historyManager.add(commandItem[1]);
        }
      }
      this._shapeItemCommands.clear();
      OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
    }
    mouseMoveHandler(inputInfo) {
      const diffX = inputInfo.moveScenePhysicsX - this.moveScenePhysicsX;
      const diffY = inputInfo.moveScenePhysicsY - this.moveScenePhysicsY;
      this.moveSelectedItems(diffX, diffY);
      this.moveScenePhysicsX = inputInfo.moveScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.moveScenePhysicsY;
    }
    mouseUpMoveHandler(inputInfo) {
    }
    clear() {
    }
    quit() {
      this._shapeItemCommands.clear();
      this._shapeItemCommands = void 0;
      super.quit();
    }
    moveSelectedItems(diffX, diffY) {
      const allSelectItems = Constant.selectManager.getAllSelectItems();
      const moveMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector2(diffX, diffY).toVector3());
      for (let i = 0; i < allSelectItems.length; i++) {
        const item = allSelectItems[i];
        item.transform(moveMatrix4);
      }
    }
  };

  // src/tool/selection/primitive2d/D2ArcShapeSelectionTool.ts
  var D2ArcShapeSelectionTool = class extends D2SelectionTool {
    constructor(selectedItem) {
      super();
      this._shapeItemCommand = null;
      this._selectedItem = selectedItem;
      this._pointCenter = null;
      this._pointStart = null;
      this._pointEnd = null;
      this._pointMiddle = null;
      this._isSelectedPointCenter = false;
      this._isSelectedPointStart = false;
      this._isSelectedPointEnd = false;
      this._isSelectedPointMiddle = false;
      this.freshAssistShapes();
    }
    mouseLeftDownSelect(inputInfo) {
      const allControlAssistPoints = [this._pointCenter, this._pointStart, this._pointEnd, this._pointMiddle];
      let hitItem = null;
      for (let i = 0; i < allControlAssistPoints.length; i++) {
        if (allControlAssistPoints[i].isSelect(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
          hitItem = allControlAssistPoints[i];
          break;
        }
      }
      return hitItem ? hitItem.parent : null;
    }
    keyDownHandler(inputInfo) {
      switch (inputInfo.keyCode) {
        case 37 /* LEFT */: {
          this.moveSelectedItem(-DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 38 /* UP */: {
          this.moveSelectedItem(0, DIRECTION_KEY_MOVE_STEP);
          break;
        }
        case 39 /* RIGHT */: {
          this.moveSelectedItem(DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 40 /* DOWN */: {
          this.moveSelectedItem(0, -DIRECTION_KEY_MOVE_STEP);
          break;
        }
        default:
      }
    }
    keyUpHandler(inputInfo) {
    }
    mouseLeftDownHandler(inputInfo) {
      this.moveScenePhysicsX = inputInfo.leftDownScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.leftDownScenePhysicsY;
      if (this._selectedItem) {
        this._shapeItemCommand = CommandProxy.getCommandInstance(
          this._selectedItem.elementItemId,
          "MODIFY" /* MODIFY */,
          Constant.globalIdenManager.getCommandIden()
        );
      }
      this._isSelectedPointCenter = this._pointCenter.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointStart = this._pointStart.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointEnd = this._pointEnd.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointMiddle = this._pointMiddle.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
    }
    mouseLeftUpHandler(inputInfo) {
      if (this._selectedItem) {
        this._selectedItem.model.updateBBox2();
        if (this._shapeItemCommand) {
          Constant.historyManager.add(this._shapeItemCommand);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
      }
      this._shapeItemCommand = null;
    }
    mouseMoveHandler(inputInfo) {
      const diffX = inputInfo.moveScenePhysicsX - this.moveScenePhysicsX;
      const diffY = inputInfo.moveScenePhysicsY - this.moveScenePhysicsY;
      const diffVector2 = new Vector2(diffX, diffY);
      if (this._isSelectedPointCenter) {
        this.moveSelectedItem(diffX, diffY);
      } else if (this._isSelectedPointStart) {
        const newStartPoint = this._pointStart.centerPoint.add(diffVector2);
        const { startRadian, endRadian, radius, centerPoint, sweep } = D2ArcToolkit.calculateD2ArcProfileByThreePoint(
          newStartPoint,
          this._pointEnd.centerPoint,
          this._pointMiddle.centerPoint
        );
        this._selectedItem.radius = radius;
        this._selectedItem.centerPoint = centerPoint;
        this._selectedItem.startRadian = startRadian;
        this._selectedItem.endRadian = endRadian;
        this._selectedItem.sweep = sweep;
      } else if (this._isSelectedPointEnd) {
        const newEndPoint = this._pointEnd.centerPoint.add(diffVector2);
        const { startRadian, endRadian, radius, centerPoint, sweep } = D2ArcToolkit.calculateD2ArcProfileByThreePoint(
          this._pointStart.centerPoint,
          newEndPoint,
          this._pointMiddle.centerPoint
        );
        this._selectedItem.radius = radius;
        this._selectedItem.centerPoint = centerPoint;
        this._selectedItem.startRadian = startRadian;
        this._selectedItem.endRadian = endRadian;
        this._selectedItem.sweep = sweep;
      } else if (this._isSelectedPointMiddle) {
        const P = D2LineToolkit.calculateVectorProjection(
          this._pointEnd.centerPoint.sub(this._pointStart.centerPoint),
          new Vector2(diffX, diffY)
        );
        const newMiddlePoint = this._pointMiddle.centerPoint.add(P);
        const { startRadian, endRadian, radius, centerPoint, sweep } = D2ArcToolkit.calculateD2ArcProfileByThreePoint(
          this._pointStart.centerPoint,
          this._pointEnd.centerPoint,
          newMiddlePoint
        );
        this._selectedItem.radius = radius;
        this._selectedItem.centerPoint = centerPoint;
        this._selectedItem.startRadian = startRadian;
        this._selectedItem.endRadian = endRadian;
        this._selectedItem.sweep = sweep;
      } else {
        this.moveSelectedItem(diffX, diffY);
      }
      this.updateAssistShapes();
      this.moveScenePhysicsX = inputInfo.moveScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.moveScenePhysicsY;
    }
    mouseUpMoveHandler(inputInfo) {
      const allControlAssistPoints = [this._pointCenter, this._pointStart, this._pointEnd, this._pointMiddle];
      let hit = false;
      for (let i = 0; i < allControlAssistPoints.length; i++) {
        if (this.isSelectAssistPoint(allControlAssistPoints[i], inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
          hit = true;
          break;
        }
      }
      if (hit) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else {
        Constant.environment.updateCanvasMouseCursor("default");
      }
    }
    clear() {
      this._selectedItem = null;
      this._pointCenter.setDelete();
      this._pointStart.setDelete();
      this._pointEnd.setDelete();
      this._pointMiddle.setDelete();
      this._pointCenter = null;
      this._pointStart = null;
      this._pointEnd = null;
      this._pointMiddle = null;
      this._isSelectedPointCenter = false;
      this._isSelectedPointStart = false;
      this._isSelectedPointEnd = false;
      this._isSelectedPointMiddle = false;
    }
    quit() {
      this._shapeItemCommand = void 0;
      this._selectedItem = void 0;
      if (this._pointCenter) {
        this._pointCenter.quit();
      }
      if (this._pointStart) {
        this._pointStart.quit();
      }
      if (this._pointEnd) {
        this._pointEnd.quit();
      }
      if (this._pointMiddle) {
        this._pointMiddle.quit();
      }
      super.quit();
    }
    freshAssistShapes() {
      if (this._pointCenter) {
        this._pointCenter.setDelete();
      }
      if (this._pointStart) {
        this._pointStart.setDelete();
      }
      if (this._pointEnd) {
        this._pointEnd.setDelete();
      }
      if (this._pointMiddle) {
        this._pointMiddle.setDelete();
      }
      const arcCenterPoint = this._selectedItem.centerPoint;
      const { startPoint, endPoint, middlePoint } = D2ArcToolkit.calculateThreePointByArcProfile(
        this._selectedItem.radius,
        this._selectedItem.startRadian,
        this._selectedItem.endRadian
      );
      this._pointCenter = buildD2AssistPointShape(arcCenterPoint.copy(), { strokeColor: Color.GREEN });
      this._pointStart = buildD2AssistPointShape(arcCenterPoint.add(startPoint), { strokeColor: Color.GREEN });
      this._pointEnd = buildD2AssistPointShape(arcCenterPoint.add(endPoint), { strokeColor: Color.GREEN });
      this._pointMiddle = buildD2AssistPointShape(arcCenterPoint.add(middlePoint), {
        shape: "TRIANGLE" /* TRIANGLE */,
        size: 1.6,
        strokeColor: Color.GREEN
      });
    }
    updateAssistShapes() {
      const arcCenterPoint = this._selectedItem.centerPoint;
      const { startPoint, endPoint, middlePoint } = D2ArcToolkit.calculateThreePointByArcProfile(
        this._selectedItem.radius,
        this._selectedItem.startRadian,
        this._selectedItem.endRadian
      );
      this._pointCenter.centerPoint = this._selectedItem.centerPoint.copy();
      this._pointStart.centerPoint = arcCenterPoint.add(startPoint);
      this._pointEnd.centerPoint = arcCenterPoint.add(endPoint);
      this._pointMiddle.centerPoint = arcCenterPoint.add(middlePoint);
    }
    moveSelectedItem(diffX, diffY) {
      const moveMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector2(diffX, diffY).toVector3());
      this._selectedItem.transform(moveMatrix4);
    }
  };

  // src/tool/selection/primitive2d/D2TextShapeSelectionTool.ts
  var D2TextShapeSelectionTool = class extends D2SelectionTool {
    constructor(selectedItem) {
      super();
      this._shapeItemCommand = null;
      this._selectedItem = selectedItem;
    }
    mouseLeftDownSelect(inputInfo) {
      return null;
    }
    keyDownHandler(inputInfo) {
      switch (inputInfo.keyCode) {
        case 37 /* LEFT */: {
          this.moveSelectedItem(-DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 38 /* UP */: {
          this.moveSelectedItem(0, DIRECTION_KEY_MOVE_STEP);
          break;
        }
        case 39 /* RIGHT */: {
          this.moveSelectedItem(DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 40 /* DOWN */: {
          this.moveSelectedItem(0, -DIRECTION_KEY_MOVE_STEP);
          break;
        }
        default:
      }
    }
    keyUpHandler(inputInfo) {
    }
    mouseLeftDownHandler(inputInfo) {
      this.moveScenePhysicsX = inputInfo.leftDownScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.leftDownScenePhysicsY;
      if (this._selectedItem) {
        this._shapeItemCommand = CommandProxy.getCommandInstance(
          this._selectedItem.elementItemId,
          "MODIFY" /* MODIFY */,
          Constant.globalIdenManager.getCommandIden()
        );
      }
    }
    mouseLeftUpHandler(inputInfo) {
      if (this._selectedItem) {
        this._selectedItem.model.updateBBox2();
        if (this._shapeItemCommand) {
          Constant.historyManager.add(this._shapeItemCommand);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
      }
      this._shapeItemCommand = null;
    }
    mouseMoveHandler(inputInfo) {
      const diffX = inputInfo.moveScenePhysicsX - this.moveScenePhysicsX;
      const diffY = inputInfo.moveScenePhysicsY - this.moveScenePhysicsY;
      this.moveSelectedItem(diffX, diffY);
      this.moveScenePhysicsX = inputInfo.moveScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.moveScenePhysicsY;
    }
    mouseUpMoveHandler(inputInfo) {
      Constant.environment.updateCanvasMouseCursor("default");
    }
    clear() {
      this._selectedItem = null;
    }
    quit() {
      this._shapeItemCommand = void 0;
      this._selectedItem = void 0;
      super.quit();
    }
    moveSelectedItem(diffX, diffY) {
      const matrix4 = CanvasMatrix4.setTranslateByVector3(new Vector2(diffX, diffY).toVector3());
      this._selectedItem.transform(matrix4);
    }
  };

  // src/tool/selection/primitive2d/D2ImageShapeSelectionTool.ts
  var D2ImageShapeSelectionTool = class extends D2SelectionTool {
    constructor(selectedItem) {
      super();
      this._shapeItemCommand = null;
      this._selectedItem = selectedItem;
      this._pointLeftUp = null;
      this._pointUp = null;
      this._pointRightUp = null;
      this._pointRight = null;
      this._pointRightBottom = null;
      this._pointBottom = null;
      this._pointLeftBottom = null;
      this._pointLeft = null;
      this._isSelectedPointLeftUp = false;
      this._isSelectedPointUp = false;
      this._isSelectedPointRightUp = false;
      this._isSelectedPointRight = false;
      this._isSelectedPointRightBottom = false;
      this._isSelectedPointBottom = false;
      this._isSelectedPointLeftBottom = false;
      this._isSelectedPointLeft = false;
      this.freshAssistShapes();
    }
    mouseLeftDownSelect(inputInfo) {
      const allControlAssistPoints = [
        this._pointLeftUp,
        this._pointUp,
        this._pointRightUp,
        this._pointRight,
        this._pointRightBottom,
        this._pointBottom,
        this._pointLeftBottom,
        this._pointLeft
      ];
      let hitItem = null;
      for (let i = 0; i < allControlAssistPoints.length; i++) {
        if (allControlAssistPoints[i].isSelect(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
          hitItem = allControlAssistPoints[i];
          break;
        }
      }
      return hitItem ? hitItem.parent : null;
    }
    keyDownHandler(inputInfo) {
      switch (inputInfo.keyCode) {
        case 37 /* LEFT */: {
          this.moveSelectedItem(-DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 38 /* UP */: {
          this.moveSelectedItem(0, DIRECTION_KEY_MOVE_STEP);
          break;
        }
        case 39 /* RIGHT */: {
          this.moveSelectedItem(DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 40 /* DOWN */: {
          this.moveSelectedItem(0, -DIRECTION_KEY_MOVE_STEP);
          break;
        }
        default:
      }
    }
    keyUpHandler(inputInfo) {
    }
    mouseLeftDownHandler(inputInfo) {
      this.moveScenePhysicsX = inputInfo.leftDownScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.leftDownScenePhysicsY;
      if (this._selectedItem) {
        this._shapeItemCommand = CommandProxy.getCommandInstance(
          this._selectedItem.elementItemId,
          "MODIFY" /* MODIFY */,
          Constant.globalIdenManager.getCommandIden()
        );
      }
      this._isSelectedPointLeftUp = this._pointLeftUp.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointUp = this._pointUp.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointRightUp = this._pointRightUp.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointRight = this._pointRight.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointRightBottom = this._pointRightBottom.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointBottom = this._pointBottom.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointLeftBottom = this._pointLeftBottom.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointLeft = this._pointLeft.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this.testGetSelectP();
    }
    mouseLeftUpHandler(inputInfo) {
      if (this._selectedItem) {
        this._selectedItem.model.updateBBox2();
        if (this._shapeItemCommand) {
          Constant.historyManager.add(this._shapeItemCommand);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
      }
      this._shapeItemCommand = null;
    }
    mouseMoveHandler(inputInfo) {
      const isWidthPos = this._selectedItem.width > 0;
      const isHeightPos = this._selectedItem.height > 0;
      const diffX = inputInfo.moveScenePhysicsX - this.moveScenePhysicsX;
      const diffY = inputInfo.moveScenePhysicsY - this.moveScenePhysicsY;
      const moveDiffVector2 = new Vector2(diffX, diffY);
      if (this._isSelectedPointLeftUp) {
        const LINE_Y = isHeightPos ? this._selectedItem.leftUp.sub(this._selectedItem.leftDown) : this._selectedItem.leftDown.sub(this._selectedItem.leftUp);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        const LINE_X = isWidthPos ? this._selectedItem.rightUp.sub(this._selectedItem.leftUp) : this._selectedItem.leftUp.sub(this._selectedItem.rightUp);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.position = this._selectedItem.position.add(P_Y);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
        this._selectedItem.position = this._selectedItem.position.add(P_X);
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointUp) {
        const LINE_X = isWidthPos ? this._selectedItem.rightUp.sub(this._selectedItem.leftUp) : this._selectedItem.leftUp.sub(this._selectedItem.rightUp);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.position = this._selectedItem.position.add(P_X);
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointRightUp) {
        const LINE_Y = isHeightPos ? this._selectedItem.rightDown.sub(this._selectedItem.rightUp) : this._selectedItem.rightUp.sub(this._selectedItem.rightDown);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        const LINE_X = isWidthPos ? this._selectedItem.rightUp.sub(this._selectedItem.leftUp) : this._selectedItem.leftUp.sub(this._selectedItem.rightUp);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
        this._selectedItem.position = this._selectedItem.position.add(P_X);
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointRight) {
        const LINE_Y = isHeightPos ? this._selectedItem.rightDown.sub(this._selectedItem.rightUp) : this._selectedItem.rightUp.sub(this._selectedItem.rightDown);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
      } else if (this._isSelectedPointRightBottom) {
        const LINE_Y = isHeightPos ? this._selectedItem.rightDown.sub(this._selectedItem.rightUp) : this._selectedItem.rightUp.sub(this._selectedItem.rightDown);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        const LINE_X = isWidthPos ? this._selectedItem.leftDown.sub(this._selectedItem.rightDown) : this._selectedItem.rightDown.sub(this._selectedItem.leftDown);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointBottom) {
        const LINE_X = isWidthPos ? this._selectedItem.leftDown.sub(this._selectedItem.rightDown) : this._selectedItem.rightDown.sub(this._selectedItem.leftDown);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointLeftBottom) {
        const LINE_Y = isHeightPos ? this._selectedItem.leftUp.sub(this._selectedItem.leftDown) : this._selectedItem.leftDown.sub(this._selectedItem.leftUp);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        const LINE_X = isWidthPos ? this._selectedItem.leftDown.sub(this._selectedItem.rightDown) : this._selectedItem.rightDown.sub(this._selectedItem.leftDown);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.position = this._selectedItem.position.add(P_Y);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointLeft) {
        const LINE_Y = isHeightPos ? this._selectedItem.leftUp.sub(this._selectedItem.leftDown) : this._selectedItem.leftDown.sub(this._selectedItem.leftUp);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        this._selectedItem.position = this._selectedItem.position.add(P_Y);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
      } else {
        this.moveSelectedItem(diffX, diffY);
      }
      this.updateAssistShapes();
      this._selectedItem.updateBBox2();
      this.moveScenePhysicsX = inputInfo.moveScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.moveScenePhysicsY;
    }
    mouseUpMoveHandler(inputInfo) {
      Constant.environment.updateCanvasMouseCursor("default");
      if (this.isSelectAssistPoint(this._pointLeftUp, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointUp, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointRightUp, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointRight, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointRightBottom, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointBottom, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointLeftBottom, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointLeft, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      }
    }
    clear() {
      this._selectedItem = null;
      this._pointLeftUp.setDelete();
      this._pointUp.setDelete();
      this._pointRightUp.setDelete();
      this._pointRight.setDelete();
      this._pointRightBottom.setDelete();
      this._pointBottom.setDelete();
      this._pointLeftBottom.setDelete();
      this._pointLeft.setDelete();
      this._pointLeftUp = null;
      this._pointUp = null;
      this._pointRightUp = null;
      this._pointRight = null;
      this._pointRightBottom = null;
      this._pointBottom = null;
      this._pointLeftBottom = null;
      this._pointLeft = null;
    }
    quit() {
      this._shapeItemCommand = void 0;
      this._selectedItem = void 0;
      if (this._pointLeftUp) {
        this._pointLeftUp.quit();
      }
      if (this._pointUp) {
        this._pointUp.quit();
      }
      if (this._pointRightUp) {
        this._pointRightUp.quit();
      }
      if (this._pointRight) {
        this._pointRight.quit();
      }
      if (this._pointRightBottom) {
        this._pointRightBottom.quit();
      }
      if (this._pointBottom) {
        this._pointBottom.quit();
      }
      if (this._pointLeftBottom) {
        this._pointLeftBottom.quit();
      }
      if (this._pointLeft) {
        this._pointLeft.quit();
      }
      super.quit();
    }
    freshAssistShapes() {
      if (this._pointLeftUp) {
        this._pointLeftUp.setDelete();
      }
      if (this._pointUp) {
        this._pointUp.setDelete();
      }
      if (this._pointRightUp) {
        this._pointRightUp.setDelete();
      }
      if (this._pointRight) {
        this._pointRight.setDelete();
      }
      if (this._pointRightBottom) {
        this._pointRightBottom.setDelete();
      }
      if (this._pointBottom) {
        this._pointBottom.setDelete();
      }
      if (this._pointLeftBottom) {
        this._pointLeftBottom.setDelete();
      }
      if (this._pointLeft) {
        this._pointLeft.setDelete();
      }
      this._pointLeftUp = buildD2AssistPointShape(this._selectedItem.leftUp, { strokeColor: Color.GREEN });
      this._pointUp = buildD2AssistPointShape(this._selectedItem.leftUp.add(this._selectedItem.rightUp).mul(0.5), {
        shape: "TRIANGLE" /* TRIANGLE */,
        size: 1.6,
        strokeColor: Color.GREEN
      });
      this._pointRightUp = buildD2AssistPointShape(this._selectedItem.rightUp, { strokeColor: Color.GREEN });
      this._pointRight = buildD2AssistPointShape(this._selectedItem.rightUp.add(this._selectedItem.rightDown).mul(0.5), {
        shape: "TRIANGLE" /* TRIANGLE */,
        size: 1.6,
        strokeColor: Color.GREEN
      });
      this._pointRightBottom = buildD2AssistPointShape(this._selectedItem.rightDown, { strokeColor: Color.GREEN });
      this._pointBottom = buildD2AssistPointShape(this._selectedItem.leftDown.add(this._selectedItem.rightDown).mul(0.5), {
        shape: "TRIANGLE" /* TRIANGLE */,
        size: 1.6,
        strokeColor: Color.GREEN
      });
      this._pointLeftBottom = buildD2AssistPointShape(this._selectedItem.leftDown, { strokeColor: Color.GREEN });
      this._pointLeft = buildD2AssistPointShape(this._selectedItem.leftUp.add(this._selectedItem.leftDown).mul(0.5), {
        shape: "TRIANGLE" /* TRIANGLE */,
        size: 1.6,
        strokeColor: Color.GREEN
      });
      this.testGetSelectP();
    }
    updateAssistShapes() {
      this._pointLeftUp.centerPoint = this._selectedItem.leftUp.copy();
      this._pointUp.centerPoint = this._selectedItem.leftUp.add(this._selectedItem.rightUp).mul(0.5);
      this._pointRightUp.centerPoint = this._selectedItem.rightUp.copy();
      this._pointRight.centerPoint = this._selectedItem.rightUp.add(this._selectedItem.rightDown).mul(0.5);
      this._pointRightBottom.centerPoint = this._selectedItem.rightDown.copy();
      this._pointBottom.centerPoint = this._selectedItem.leftDown.add(this._selectedItem.rightDown).mul(0.5);
      this._pointLeftBottom.centerPoint = this._selectedItem.leftDown.copy();
      this._pointLeft.centerPoint = this._selectedItem.leftUp.add(this._selectedItem.leftDown).mul(0.5);
    }
    moveSelectedItem(diffX, diffY) {
      const moveMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector2(diffX, diffY).toVector3());
      this._selectedItem.transform(moveMatrix4);
    }
    testGetSelectP() {
      if (this._isSelectedPointUp) {
        console.log(`SelectedPointUp`);
        return;
      }
      if (this._isSelectedPointLeft) {
        console.log(`SelectedPointLeft`);
        return;
      }
      if (this._isSelectedPointRight) {
        console.log(`SelectedPointRight`);
        return;
      }
      if (this._isSelectedPointBottom) {
        console.log(`SelectedPointBottom`);
        return;
      }
    }
  };

  // src/tool/selection/primitive2d/D2PointShapeSelectionTool.ts
  var D2PointShapeSelectionTool = class extends D2SelectionTool {
    constructor(selectedItem) {
      super();
      this._shapeItemCommand = null;
      this._selectedItem = selectedItem;
      this.freshAssistShapes();
    }
    mouseLeftDownSelect(inputInfo) {
      return null;
    }
    keyDownHandler(inputInfo) {
      switch (inputInfo.keyCode) {
        case 37 /* LEFT */: {
          this.moveSelectedItem(-DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 38 /* UP */: {
          this.moveSelectedItem(0, DIRECTION_KEY_MOVE_STEP);
          break;
        }
        case 39 /* RIGHT */: {
          this.moveSelectedItem(DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 40 /* DOWN */: {
          this.moveSelectedItem(0, -DIRECTION_KEY_MOVE_STEP);
          break;
        }
        default:
      }
    }
    keyUpHandler(inputInfo) {
    }
    mouseLeftDownHandler(inputInfo) {
      this.moveScenePhysicsX = inputInfo.leftDownScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.leftDownScenePhysicsY;
      if (this._selectedItem) {
        this._shapeItemCommand = CommandProxy.getCommandInstance(
          this._selectedItem.elementItemId,
          "MODIFY" /* MODIFY */,
          Constant.globalIdenManager.getCommandIden()
        );
      }
    }
    mouseLeftUpHandler(inputInfo) {
      if (this._selectedItem) {
        this._selectedItem.model.updateBBox2();
        if (this._shapeItemCommand) {
          Constant.historyManager.add(this._shapeItemCommand);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
      }
      this._shapeItemCommand = null;
    }
    mouseMoveHandler(inputInfo) {
      const diffX = inputInfo.moveScenePhysicsX - this.moveScenePhysicsX;
      const diffY = inputInfo.moveScenePhysicsY - this.moveScenePhysicsY;
      this.moveSelectedItem(diffX, diffY);
      this.updateAssistShapes();
      this.moveScenePhysicsX = inputInfo.moveScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.moveScenePhysicsY;
    }
    mouseUpMoveHandler(inputInfo) {
      if (this._selectedItem.isSelect(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else {
        Constant.environment.updateCanvasMouseCursor("default");
      }
    }
    clear() {
      this._selectedItem = null;
    }
    quit() {
      this._shapeItemCommand = void 0;
      this._selectedItem = void 0;
      super.quit();
    }
    freshAssistShapes() {
    }
    updateAssistShapes() {
    }
    moveSelectedItem(diffX, diffY) {
      const moveMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector2(diffX, diffY).toVector3());
      this._selectedItem.transform(moveMatrix4);
    }
  };

  // src/tool/selection/primitive2d/D2RectShapeSelectionTool.ts
  var D2RectShapeSelectionTool = class extends D2SelectionTool {
    constructor(selectedItem) {
      super();
      this._shapeItemCommand = null;
      this._selectedItem = selectedItem;
      this._pointLeftUp = null;
      this._pointUp = null;
      this._pointRightUp = null;
      this._pointRight = null;
      this._pointRightBottom = null;
      this._pointBottom = null;
      this._pointLeftBottom = null;
      this._pointLeft = null;
      this._isSelectedPointLeftUp = false;
      this._isSelectedPointUp = false;
      this._isSelectedPointRightUp = false;
      this._isSelectedPointRight = false;
      this._isSelectedPointRightBottom = false;
      this._isSelectedPointBottom = false;
      this._isSelectedPointLeftBottom = false;
      this._isSelectedPointLeft = false;
      this.freshAssistShapes();
    }
    mouseLeftDownSelect(inputInfo) {
      const allControlAssistPoints = [
        this._pointLeftUp,
        this._pointUp,
        this._pointRightUp,
        this._pointRight,
        this._pointRightBottom,
        this._pointBottom,
        this._pointLeftBottom,
        this._pointLeft
      ];
      let hitItem = null;
      for (let i = 0; i < allControlAssistPoints.length; i++) {
        if (allControlAssistPoints[i].isSelect(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
          hitItem = allControlAssistPoints[i];
          break;
        }
      }
      return hitItem ? hitItem.parent : null;
    }
    keyDownHandler(inputInfo) {
      switch (inputInfo.keyCode) {
        case 37 /* LEFT */: {
          this.moveSelectedItem(-DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 38 /* UP */: {
          this.moveSelectedItem(0, DIRECTION_KEY_MOVE_STEP);
          break;
        }
        case 39 /* RIGHT */: {
          this.moveSelectedItem(DIRECTION_KEY_MOVE_STEP, 0);
          break;
        }
        case 40 /* DOWN */: {
          this.moveSelectedItem(0, -DIRECTION_KEY_MOVE_STEP);
          break;
        }
        default:
      }
    }
    keyUpHandler(inputInfo) {
    }
    mouseLeftDownHandler(inputInfo) {
      this.moveScenePhysicsX = inputInfo.leftDownScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.leftDownScenePhysicsY;
      if (this._selectedItem) {
        this._shapeItemCommand = CommandProxy.getCommandInstance(
          this._selectedItem.elementItemId,
          "MODIFY" /* MODIFY */,
          Constant.globalIdenManager.getCommandIden()
        );
      }
      this._isSelectedPointLeftUp = this._pointLeftUp.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointUp = this._pointUp.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointRightUp = this._pointRightUp.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointRight = this._pointRight.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointRightBottom = this._pointRightBottom.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointBottom = this._pointBottom.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointLeftBottom = this._pointLeftBottom.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this._isSelectedPointLeft = this._pointLeft.isSelect(inputInfo.leftDownScenePhysicsX, inputInfo.leftDownScenePhysicsY);
      this.testGetSelectP();
    }
    mouseLeftUpHandler(inputInfo) {
      if (this._selectedItem) {
        this._selectedItem.model.updateBBox2();
        if (this._shapeItemCommand) {
          Constant.historyManager.add(this._shapeItemCommand);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
      }
      this._shapeItemCommand = null;
    }
    mouseMoveHandler(inputInfo) {
      const isWidthPos = this._selectedItem.width > 0;
      const isHeightPos = this._selectedItem.height > 0;
      const diffX = inputInfo.moveScenePhysicsX - this.moveScenePhysicsX;
      const diffY = inputInfo.moveScenePhysicsY - this.moveScenePhysicsY;
      const moveDiffVector2 = new Vector2(diffX, diffY);
      if (this._isSelectedPointLeftUp) {
        const LINE_Y = isHeightPos ? this._selectedItem.leftUp.sub(this._selectedItem.leftDown) : this._selectedItem.leftDown.sub(this._selectedItem.leftUp);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        const LINE_X = isWidthPos ? this._selectedItem.rightUp.sub(this._selectedItem.leftUp) : this._selectedItem.leftUp.sub(this._selectedItem.rightUp);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.position = this._selectedItem.position.add(P_Y);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
        this._selectedItem.position = this._selectedItem.position.add(P_X);
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointUp) {
        const LINE_X = isWidthPos ? this._selectedItem.rightUp.sub(this._selectedItem.leftUp) : this._selectedItem.leftUp.sub(this._selectedItem.rightUp);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.position = this._selectedItem.position.add(P_X);
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointRightUp) {
        const LINE_Y = isHeightPos ? this._selectedItem.rightDown.sub(this._selectedItem.rightUp) : this._selectedItem.rightUp.sub(this._selectedItem.rightDown);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        const LINE_X = isWidthPos ? this._selectedItem.rightUp.sub(this._selectedItem.leftUp) : this._selectedItem.leftUp.sub(this._selectedItem.rightUp);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
        this._selectedItem.position = this._selectedItem.position.add(P_X);
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointRight) {
        const LINE_Y = isHeightPos ? this._selectedItem.rightDown.sub(this._selectedItem.rightUp) : this._selectedItem.rightUp.sub(this._selectedItem.rightDown);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
      } else if (this._isSelectedPointRightBottom) {
        const LINE_Y = isHeightPos ? this._selectedItem.rightDown.sub(this._selectedItem.rightUp) : this._selectedItem.rightUp.sub(this._selectedItem.rightDown);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        const LINE_X = isWidthPos ? this._selectedItem.leftDown.sub(this._selectedItem.rightDown) : this._selectedItem.rightDown.sub(this._selectedItem.leftDown);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointBottom) {
        const LINE_X = isWidthPos ? this._selectedItem.leftDown.sub(this._selectedItem.rightDown) : this._selectedItem.rightDown.sub(this._selectedItem.leftDown);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointLeftBottom) {
        const LINE_Y = isHeightPos ? this._selectedItem.leftUp.sub(this._selectedItem.leftDown) : this._selectedItem.leftDown.sub(this._selectedItem.leftUp);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        const LINE_X = isWidthPos ? this._selectedItem.leftDown.sub(this._selectedItem.rightDown) : this._selectedItem.rightDown.sub(this._selectedItem.leftDown);
        const P_X = D2LineToolkit.calculateVectorProjection(LINE_X, moveDiffVector2);
        this._selectedItem.position = this._selectedItem.position.add(P_Y);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
        this._selectedItem.height += P_X.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_X, moveDiffVector2));
      } else if (this._isSelectedPointLeft) {
        const LINE_Y = isHeightPos ? this._selectedItem.leftUp.sub(this._selectedItem.leftDown) : this._selectedItem.leftDown.sub(this._selectedItem.leftUp);
        const P_Y = D2LineToolkit.calculateVectorProjection(LINE_Y, moveDiffVector2);
        this._selectedItem.position = this._selectedItem.position.add(P_Y);
        this._selectedItem.width += P_Y.length * Math.sign(Vector2.calculateRadianCCWByTwoVector2(LINE_Y, moveDiffVector2));
      } else {
        this.moveSelectedItem(diffX, diffY);
      }
      this.updateAssistShapes();
      this._selectedItem.updateBBox2();
      this.moveScenePhysicsX = inputInfo.moveScenePhysicsX;
      this.moveScenePhysicsY = inputInfo.moveScenePhysicsY;
    }
    mouseUpMoveHandler(inputInfo) {
      Constant.environment.updateCanvasMouseCursor("default");
      if (this.isSelectAssistPoint(this._pointLeftUp, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointUp, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointRightUp, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointRight, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointRightBottom, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointBottom, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointLeftBottom, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      } else if (this.isSelectAssistPoint(this._pointLeft, inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY)) {
        Constant.environment.updateCanvasMouseCursor("pointer");
      }
    }
    clear() {
      this._selectedItem = null;
      this._pointLeftUp.setDelete();
      this._pointUp.setDelete();
      this._pointRightUp.setDelete();
      this._pointRight.setDelete();
      this._pointRightBottom.setDelete();
      this._pointBottom.setDelete();
      this._pointLeftBottom.setDelete();
      this._pointLeft.setDelete();
      this._pointLeftUp = null;
      this._pointUp = null;
      this._pointRightUp = null;
      this._pointRight = null;
      this._pointRightBottom = null;
      this._pointBottom = null;
      this._pointLeftBottom = null;
      this._pointLeft = null;
    }
    quit() {
      this._shapeItemCommand = void 0;
      this._selectedItem = void 0;
      if (this._pointLeftUp) {
        this._pointLeftUp.quit();
      }
      if (this._pointUp) {
        this._pointUp.quit();
      }
      if (this._pointRightUp) {
        this._pointRightUp.quit();
      }
      if (this._pointRight) {
        this._pointRight.quit();
      }
      if (this._pointRightBottom) {
        this._pointRightBottom.quit();
      }
      if (this._pointBottom) {
        this._pointBottom.quit();
      }
      if (this._pointLeftBottom) {
        this._pointLeftBottom.quit();
      }
      if (this._pointLeft) {
        this._pointLeft.quit();
      }
      super.quit();
    }
    freshAssistShapes() {
      if (this._pointLeftUp) {
        this._pointLeftUp.setDelete();
      }
      if (this._pointUp) {
        this._pointUp.setDelete();
      }
      if (this._pointRightUp) {
        this._pointRightUp.setDelete();
      }
      if (this._pointRight) {
        this._pointRight.setDelete();
      }
      if (this._pointRightBottom) {
        this._pointRightBottom.setDelete();
      }
      if (this._pointBottom) {
        this._pointBottom.setDelete();
      }
      if (this._pointLeftBottom) {
        this._pointLeftBottom.setDelete();
      }
      if (this._pointLeft) {
        this._pointLeft.setDelete();
      }
      this._pointLeftUp = buildD2AssistPointShape(this._selectedItem.leftUp, { strokeColor: Color.GREEN });
      this._pointUp = buildD2AssistPointShape(this._selectedItem.leftUp.add(this._selectedItem.rightUp).mul(0.5), {
        shape: "TRIANGLE" /* TRIANGLE */,
        size: 1.6,
        strokeColor: Color.GREEN
      });
      this._pointRightUp = buildD2AssistPointShape(this._selectedItem.rightUp, { strokeColor: Color.GREEN });
      this._pointRight = buildD2AssistPointShape(this._selectedItem.rightUp.add(this._selectedItem.rightDown).mul(0.5), {
        shape: "TRIANGLE" /* TRIANGLE */,
        size: 1.6,
        strokeColor: Color.GREEN
      });
      this._pointRightBottom = buildD2AssistPointShape(this._selectedItem.rightDown, { strokeColor: Color.GREEN });
      this._pointBottom = buildD2AssistPointShape(this._selectedItem.leftDown.add(this._selectedItem.rightDown).mul(0.5), {
        shape: "TRIANGLE" /* TRIANGLE */,
        size: 1.6,
        strokeColor: Color.GREEN
      });
      this._pointLeftBottom = buildD2AssistPointShape(this._selectedItem.leftDown, { strokeColor: Color.GREEN });
      this._pointLeft = buildD2AssistPointShape(this._selectedItem.leftUp.add(this._selectedItem.leftDown).mul(0.5), {
        shape: "TRIANGLE" /* TRIANGLE */,
        size: 1.6,
        strokeColor: Color.GREEN
      });
      this.testGetSelectP();
    }
    updateAssistShapes() {
      this._pointLeftUp.centerPoint = this._selectedItem.leftUp.copy();
      this._pointUp.centerPoint = this._selectedItem.leftUp.add(this._selectedItem.rightUp).mul(0.5);
      this._pointRightUp.centerPoint = this._selectedItem.rightUp.copy();
      this._pointRight.centerPoint = this._selectedItem.rightUp.add(this._selectedItem.rightDown).mul(0.5);
      this._pointRightBottom.centerPoint = this._selectedItem.rightDown.copy();
      this._pointBottom.centerPoint = this._selectedItem.leftDown.add(this._selectedItem.rightDown).mul(0.5);
      this._pointLeftBottom.centerPoint = this._selectedItem.leftDown.copy();
      this._pointLeft.centerPoint = this._selectedItem.leftUp.add(this._selectedItem.leftDown).mul(0.5);
    }
    moveSelectedItem(diffX, diffY) {
      const moveMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector2(diffX, diffY).toVector3());
      this._selectedItem.transform(moveMatrix4);
    }
    testGetSelectP() {
      if (this._isSelectedPointUp) {
        console.log(`SelectedPointUp`);
        return;
      }
      if (this._isSelectedPointLeft) {
        console.log(`SelectedPointLeft`);
        return;
      }
      if (this._isSelectedPointRight) {
        console.log(`SelectedPointRight`);
        return;
      }
      if (this._isSelectedPointBottom) {
        console.log(`SelectedPointBottom`);
        return;
      }
    }
  };

  // src/tool/selection/primitive2d/HandlerControl.ts
  var HandlerControl = class {
    constructor() {
      this._processor = null;
    }
    mouseLeftDownSelect(inputInfo) {
      if (!this.hasProcessor()) {
        return null;
      }
      return this._processor.mouseLeftDownSelect(inputInfo);
    }
    hasProcessor() {
      return this._processor !== null;
    }
    clearProcessor() {
      if (this._processor) {
        this._processor.clear();
      }
      this._processor = null;
    }
    updateProcessor(inputInfo, clickSelect) {
      const selectedItems = Constant.selectManager.getAllItems();
      if (selectedItems.length <= 0 && !clickSelect) {
        this.clearProcessor();
        return;
      }
      if (this._processor) {
        this._processor.mouseLeftDownHandler(inputInfo);
        return;
      }
      if (selectedItems.length >= 2) {
        this._processor = new MoveOperSelectionTool();
        this._processor.mouseLeftDownHandler(inputInfo);
        return;
      }
      const selectItem = selectedItems[0];
      if (selectItem.getType() === "D2Line" /* D2Line */) {
        this._processor = new D2LineShapeSelectionTool(selectItem);
        this._processor.mouseLeftDownHandler(inputInfo);
        return;
      }
      if (selectItem.getType() === "D2Circle" /* D2Circle */) {
        this._processor = new D2CircleShapeSelectionTool(selectItem);
        this._processor.mouseLeftDownHandler(inputInfo);
        return;
      }
      if (selectItem.getType() === "D2Point" /* D2Point */) {
        this._processor = new D2PointShapeSelectionTool(selectItem);
        this._processor.mouseLeftDownHandler(inputInfo);
        return;
      }
      if (selectItem.getType() === "D2Arc" /* D2Arc */) {
        this._processor = new D2ArcShapeSelectionTool(selectItem);
        this._processor.mouseLeftDownHandler(inputInfo);
        return;
      }
      if (selectItem.getType() === "D2Text" /* D2Text */) {
        this._processor = new D2TextShapeSelectionTool(selectItem);
        this._processor.mouseLeftDownHandler(inputInfo);
        return;
      }
      if (selectItem.getType() === "D2Image" /* D2Image */) {
        this._processor = new D2ImageShapeSelectionTool(selectItem);
        this._processor.mouseLeftDownHandler(inputInfo);
        return;
      }
      if (selectItem.getType() === "D2Rect" /* D2Rect */) {
        this._processor = new D2RectShapeSelectionTool(selectItem);
        this._processor.mouseLeftDownHandler(inputInfo);
        return;
      }
    }
    keyDownHandler(inputInfo) {
      this._processor && this._processor.keyDownHandler(inputInfo);
    }
    keyUpHandler(inputInfo) {
      this._processor && this._processor.keyUpHandler(inputInfo);
    }
    mouseLeftDownHandler(inputInfo) {
      this._processor && this._processor.mouseLeftDownHandler(inputInfo);
    }
    mouseLeftUpHandler(inputInfo) {
      this._processor && this._processor.mouseLeftUpHandler(inputInfo);
    }
    mouseMoveHandler(inputInfo) {
      this._processor && this._processor.mouseMoveHandler(inputInfo);
    }
    mouseUpMoveHandler(inputInfo) {
      this._processor && this._processor.mouseUpMoveHandler(inputInfo);
    }
    quit() {
      this._processor && this._processor.quit();
    }
  };

  // src/service/RtreeService.ts
  var RtreeService = class extends BaseInterface {
    constructor() {
      super();
      Constant.messageTool.messageBus.subscribe("REFRESH_RTREE" /* REFRESH_RTREE */, this.refreshRtree.bind(this));
    }
    quit() {
    }
    refreshRtree() {
      const updatedRtreeItems = [];
      const allRtreeItems = Constant.rtree.getAllItems();
      for (let rtreeItem of allRtreeItems) {
        const newBBox2 = rtreeItem.target.model.updateBBox2();
        const oldBBox2 = rtreeItem.getBBox2();
        if (newBBox2 && oldBBox2 && !newBBox2.equals(oldBBox2)) {
          updatedRtreeItems.push(rtreeItem);
        }
      }
      for (let i = 0; i < updatedRtreeItems.length; i++) {
        const rtreeItem = updatedRtreeItems[i];
        const oldBBox2 = rtreeItem.getBBox2();
        const r = Constant.rtree.remove(
          { x: oldBBox2.minX, y: oldBBox2.minY, w: oldBBox2.width, h: oldBBox2.height },
          rtreeItem
        );
      }
      for (let i = 0; i < updatedRtreeItems.length; i++) {
        const rtreeItem = updatedRtreeItems[i];
        const newBBox2 = rtreeItem.target.model.updateBBox2();
        rtreeItem.updateBBox2(newBBox2);
        Constant.rtree.insertItemData({ x: newBBox2.minX, y: newBBox2.minY, w: newBBox2.width, h: newBBox2.height }, rtreeItem);
      }
    }
  };

  // src/tool/Adsorption.ts
  var Adsorption = class {
    adsorpGrid(position) {
      const origin = Constant.environment.origin;
      let snapX = Constant.systemConfig.canvasAidedDesign.axisSnapX;
      let snapY = Constant.systemConfig.canvasAidedDesign.axisSnapY;
      snapX = snapX || 1;
      snapY = snapY || 1;
      return new Vector2(this.getAdsValue(position.x - origin.x, snapX) + origin.x, this.getAdsValue(position.y - origin.y, snapY) + origin.y);
    }
    getAdsValue(delta, snap) {
      if (snap === 0) {
        return delta;
      }
      const r = delta / snap;
      let x1 = Math.floor(r);
      let x2 = Math.ceil(r);
      let x = 0;
      if (Math.abs(x1 - r) > Math.abs(x2 - r)) {
        x = x2;
      } else {
        x = x1;
      }
      return x * snap;
    }
  };

  // src/controller/CanvasController.ts
  var CanvasController = class extends BaseInterface {
    constructor() {
      super();
      this._camera = Camera.getInstance();
    }
    /**
     * 重置画布内容
     */
    resetCanvasContent() {
      Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
      Constant.selectManager.clearAllSelectItems();
      Constant.drawLayerController.clearAllDrawLayersSelectedStatus();
      const allDrawLayers = Constant.drawLayerController.getAllDrawLayerResults();
      for (let i = 0; i < allDrawLayers.length; i++) {
        Constant.drawLayerController.deleteDrawLayerShapeItem(allDrawLayers[i].layerItemId);
      }
      Constant.historyManager.clear();
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, { elementPriority: true });
    }
    /**
     * 重置画布视图状态
     */
    resetCanvasStatus() {
      this.setCameraCenterByScenePhysicsPos(Vector3.ORIGIN);
      this._camera.setZoomRatio(1);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
    }
    /**
     * 以指定的
     * 			1. DOM <canvas /> 像素坐标(左上角原点, Y 轴向上为正)
     * 			2. 场景物理坐标
     * 		为中心点
     * 设置画布缩放倍率
     */
    setCanvasZoomRatioByCanvasSourceNativePixelPos(ratio, canvasDomSourceNativePixelPosition) {
      if (!canvasDomSourceNativePixelPosition) {
        canvasDomSourceNativePixelPosition = new Vector3(this._camera.width / 2, -this._camera.height / 2, 0);
      }
      const moveOffsetVector3 = this.setCameraCenterByCanvasSourceNativePixelPos(canvasDomSourceNativePixelPosition);
      const newRatio = ratio <= MIN_ZOOM_RATIO ? MIN_ZOOM_RATIO : ratio >= MAX_ZOOM_RATIO ? MAX_ZOOM_RATIO : ratio;
      this._camera.setZoomRatio(newRatio);
      const cameraZoomRatio = this._camera.getZoomRatio();
      this._camera.setMoveIncrement(
        new Vector3(moveOffsetVector3.x / cameraZoomRatio, moveOffsetVector3.y / cameraZoomRatio, moveOffsetVector3.z / cameraZoomRatio)
      );
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
    }
    setCanvasZoomRatioByScenePhysicsPos(ratio, scenePhysicsPosition) {
      if (!scenePhysicsPosition) {
        scenePhysicsPosition = Vector3.ORIGIN;
      }
      const d2R = Constant.d2CoordinateUtils.setScenePhysicsPos2CanvasSourceNativePixelPos(
        scenePhysicsPosition.toArray()
      );
      this.setCanvasZoomRatioByCanvasSourceNativePixelPos(ratio, Vector3.createByArray(d2R));
    }
    /**
     * 将指定的
     * 			1. DOM <canvas /> 像素坐标(左上角原点, Y 轴向上为正)
     * 			2. 场景物理坐标
     * 		设置为
     * 相机中心点
     */
    setCameraCenterByCanvasSourceNativePixelPos(canvasDomSourceNativePixelPosition) {
      const cameraZoomRatio = this._camera.getZoomRatio();
      const cameraCenterSourceNativePixelPosition = this._camera.getCenterSourceNativePixelPosition();
      const moveOffsetVector3 = canvasDomSourceNativePixelPosition.sub(cameraCenterSourceNativePixelPosition);
      this._camera.setMoveIncrement(new Vector3(-moveOffsetVector3.x / cameraZoomRatio, -moveOffsetVector3.y / cameraZoomRatio, 0));
      return moveOffsetVector3;
    }
    setCameraCenterByScenePhysicsPos(scenePhysicsPosition) {
      const d2R = Constant.d2CoordinateUtils.setScenePhysicsPos2CanvasSourceNativePixelPos(
        scenePhysicsPosition.toArray()
      );
      return this.setCameraCenterByCanvasSourceNativePixelPos(Vector3.createByArray(d2R));
    }
    moveCameraCenterByCanvasPosition(canvasDomSourceNativePixelPosition) {
      const cameraZoomRatio = this._camera.getZoomRatio();
      this._camera.setMoveTo(
        new Vector3(
          -(canvasDomSourceNativePixelPosition.x - this._camera.width / 2) / cameraZoomRatio,
          (canvasDomSourceNativePixelPosition.y - this._camera.height / 2) / cameraZoomRatio,
          0
        )
      );
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
    }
    quit() {
      this._camera = void 0;
    }
  };

  // ../utils-section/utils/Utils.ts
  function remove2(list, item) {
    let count = 0;
    let len = list.length;
    for (let i = 0; i < len; i++) {
      if (list[i] === item) {
        list.splice(i, 1);
        i--;
        len--;
        count++;
      }
    }
    return count;
  }
  function deepClone(data) {
    return traverse(data);
    function traverse(data2) {
      if (typeof data2 !== "object" || data2 === null || data2 instanceof Date || data2 instanceof ArrayBuffer || data2 instanceof Uint8ClampedArray || data2 instanceof Uint8Array || data2 instanceof Uint16Array || data2 instanceof Uint32Array) {
        return data2;
      }
      if (Array.isArray(data2)) {
        return data2.map(traverse);
      }
      const obj = {};
      for (let key in data2) {
        if (data2.hasOwnProperty(key)) {
          obj[key] = traverse(data2[key]);
        }
      }
      return obj;
    }
  }
  function getOrInit(obj, key, initializer = (key2) => null) {
    let value = obj[key];
    if (typeof value !== "undefined") {
      return value;
    }
    value = initializer(key);
    obj[key] = value;
    return value;
  }
  function getOrInitArr(obj, key) {
    return getOrInit(obj, key, () => {
      return [];
    });
  }

  // ../utils-section/messageBus/MessageBusTask.ts
  var MessageBusTask = class {
    constructor(callback) {
      __publicField(this, "_callback");
      __publicField(this, "_isRunning");
      this._isRunning = true;
      this._callback = callback;
    }
    cancel() {
      this._isRunning = false;
      this._callback = null;
    }
    getRunnigStatus() {
      return this._isRunning;
    }
    execute(data, bridge, source, keepRef) {
      try {
        const _data = keepRef ? data : deepClone(data);
        this._callback(_data, bridge, source);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // ../utils-section/utils/PriorityQueue.ts
  var PriorityQueue = class {
    constructor(comparator) {
      __publicField(this, "_blockHeap");
      __publicField(this, "_comparator");
      __publicField(this, "_count");
      this._comparator = comparator;
      this._blockHeap = [];
      this._count = 0;
    }
    getSize() {
      return this._count;
    }
    addItem(item) {
      if (this._count > 0) {
        this.siftUp(this._count, item);
      } else {
        this._blockHeap.push(item);
      }
      this._count += 1;
    }
    poll() {
      if (this._count > 0) {
        const result = this._blockHeap[0];
        this._count -= 1;
        if (this._count > 0) {
          this.siftDown(0, this._blockHeap[this._count]);
        }
        return result;
      }
      return null;
    }
    getHead() {
      return this._blockHeap[0];
    }
    siftUp(n, item) {
      while (n > 0) {
        const half = n - 1 >>> 1;
        const pt = this._blockHeap[half];
        if (this._comparator(item, pt) >= 0) {
          break;
        }
        this._blockHeap[n] = pt;
        n = half;
      }
      this._blockHeap[n] = item;
    }
    siftDown(n, item) {
      const half = this._count >>> 1;
      while (n < half) {
        let c = (n << 1) + 1;
        let child = this._blockHeap[c];
        let cr = c + 1;
        if (cr < this._count) {
          const right = this._blockHeap[cr];
          if (this._comparator(child, right) > 0) {
            c = cr;
            child = right;
          }
        }
        if (this._comparator(item, child) <= 0) {
          break;
        }
        this._blockHeap[n] = child;
        n = c;
      }
      this._blockHeap[n] = item;
    }
  };

  // ../utils-section/messageBus/profiles.ts
  function getGlobalScope() {
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof window !== "undefined") {
      return window;
    }
  }
  function getReferenceSource(source) {
    if (typeof source === "undefined" || source === null) {
      return void 0;
    }
    return new InsWeakRef(source);
  }
  function delReferenceSource(source) {
    return source == null ? void 0 : source.deref();
  }
  var GLOBAL_SCOPE = getGlobalScope();
  var _a;
  var InsWeakRef = GLOBAL_SCOPE.WeakRef || (_a = Symbol.toStringTag, class WeakRef {
    constructor(item) {
      __publicField(this, _a);
      __publicField(this, "_item");
      this._item = item;
    }
    deref() {
      return this._item;
    }
  });
  var iRequestAnimationFrame = GLOBAL_SCOPE["requestAnimationFrame"];
  var RPC_IDEN = `__MSG_IDEN__`;
  var RPC_DEFAULT_TIMEOUT = 5 * 60 * 1e3;
  var RPC_TIMEOUT_TASKQUEUE = new PriorityQueue((a, b) => {
    return a.timeout - b.timeout;
  });

  // ../utils-section/messageBus/MessageBus.ts
  var rpcTimeoutCheckLoop = () => {
    const now = performance.now();
    while (RPC_TIMEOUT_TASKQUEUE.getSize() > 0) {
      const head = RPC_TIMEOUT_TASKQUEUE.getHead();
      if (head.timeout <= now) {
        RPC_TIMEOUT_TASKQUEUE.poll();
        head.reject(`RPC Call ${head.topic} Time-out.`);
        continue;
      }
      break;
    }
    iRequestAnimationFrame(rpcTimeoutCheckLoop);
  };
  iRequestAnimationFrame(rpcTimeoutCheckLoop);
  var MessageBus = class {
    constructor(keepRef) {
      __publicField(this, "_keepRef");
      __publicField(this, "_subscribed");
      __publicField(this, "_pulled");
      __publicField(this, "_pushed");
      __publicField(this, "_rpcTicket");
      this._keepRef = keepRef;
      this._subscribed = {};
      this._pulled = {};
      this._pushed = {};
      this._rpcTicket = 0;
    }
    createTopicUniqueTag(topic) {
      return topic + RPC_IDEN + this._rpcTicket++;
    }
    subscribe(topic, callback) {
      const taskItem = new MessageBusTask(callback);
      getOrInitArr(this._subscribed, topic).push(taskItem);
      return taskItem;
    }
    publish(topic, data, bridge, source) {
      const tasks = this._subscribed[topic];
      if (!tasks) {
        console.warn(`this topic: ${topic} has no subscribers.`);
        return;
      }
      let deletion = [];
      for (let taskItem of tasks) {
        if (taskItem.getRunnigStatus()) {
          taskItem.execute(data, bridge, source, this._keepRef);
        } else {
          deletion.push(taskItem);
        }
      }
      for (let taskItem of deletion) {
        remove2(tasks, taskItem);
      }
    }
    registeAsyncService(topic, callback) {
      return this.subscribe(
        topic,
        (rpcData, bridge, source) => {
          const { data, reply } = rpcData;
          try {
            const returns = callback(data);
            if (returns instanceof Promise) {
              const _source = getReferenceSource(source);
              returns.then((result) => {
                this.rpcReply(reply, result, bridge, delReferenceSource(_source));
              }).catch((e) => {
                console.error(e);
                this.rpcReply(topic, void 0, bridge, delReferenceSource(_source));
              });
              return;
            }
            this.rpcReply(topic, returns, bridge, source);
          } catch (e) {
            console.error(e);
            this.rpcReply(topic, void 0, bridge, source);
          }
        }
      );
    }
    asyncRequest(_0, _1) {
      return __async(this, arguments, function* (topic, data, timeout = RPC_DEFAULT_TIMEOUT) {
        return new Promise((resolve, reject) => {
          const target = {
            timeout: performance.now() + timeout,
            reject,
            topic
          };
          RPC_TIMEOUT_TASKQUEUE.addItem(target);
          const reply = this.createTopicUniqueTag(topic);
          this.publish(topic, { data, reply });
          this.pull(reply, (data2, bridge, source) => {
            resolve({ data: data2, bridge, source: getReferenceSource(source) });
            target.reject = null;
          });
        });
      });
    }
    push(topic, data, bridge, source) {
      let consumed = false;
      const tasks = this._pulled[topic];
      if (tasks) {
        while (tasks.length > 0) {
          const taskItem = tasks.shift();
          if (taskItem && taskItem.getRunnigStatus()) {
            taskItem.execute(data, bridge, source, this._keepRef);
            consumed = true;
            break;
          }
        }
        if (tasks.length <= 0) {
          delete this._pulled[topic];
        }
      }
      if (!consumed) {
        getOrInitArr(this._pushed, topic).push({ data, bridge, source: getReferenceSource(source) });
      }
    }
    pull(topic, callback) {
      const taskItem = new MessageBusTask(callback);
      const remoteMessages = this._pushed[topic];
      if (remoteMessages) {
        const remoteMessage = remoteMessages.shift();
        taskItem.execute(remoteMessage.data, remoteMessage.bridge, delReferenceSource(remoteMessage.source), this._keepRef);
        if (remoteMessages.length <= 0) {
          delete this._pushed[topic];
        }
      } else {
        getOrInitArr(this._pulled, topic).push(taskItem);
      }
      return taskItem;
    }
    pullA(topic) {
      return new Promise((resolve) => {
        this.pull(topic, (data, bridge, source) => {
          resolve({ data, bridge, source: getReferenceSource(source) });
        });
      });
    }
    clearAll() {
      this._keepRef = false;
      this._subscribed = {};
      this._pulled = {};
      this._pushed = {};
      this._rpcTicket = 0;
    }
    rpcReply(topic, data, bridge, source) {
      if (bridge) {
        bridge.push(topic, data, source);
        return;
      }
      this.push(topic, data);
    }
  };

  // ../utils-section/messageBus/MessageBusBridge.ts
  var MessageBusBridge = class {
    constructor(bus) {
      __publicField(this, "_bus");
      this._bus = bus;
    }
    asyncRequest(topic, data, target, timeout = RPC_DEFAULT_TIMEOUT) {
      const referenceTarget = getReferenceSource(target);
      return new Promise((resolve, reject) => {
        const target2 = {
          timeout: performance.now() + timeout,
          reject,
          topic
        };
        RPC_TIMEOUT_TASKQUEUE.addItem(target2);
        const reply = this._bus.createTopicUniqueTag(topic);
        this.publish(topic, { data, reply }, delReferenceSource(referenceTarget));
        this._bus.pull(reply, (data2, bridge, source) => {
          resolve({ data: data2, bridge, source: getReferenceSource(source) });
          target2.reject = null;
        });
      });
    }
    processRemoteMessage(innerMessage, source) {
      const referenceSource = getReferenceSource(source);
      const { topic, type, message } = innerMessage;
      switch (type) {
        case "PULL" /* PULL */: {
          this._bus.pull(topic, (data) => {
            this.push(topic, data, delReferenceSource(referenceSource));
          });
          break;
        }
        case "PUSH" /* PUSH */: {
          this._bus.push(topic, message, this, delReferenceSource(referenceSource));
          break;
        }
        case "SUBSCRIBE" /* SUBSCRIBE */: {
          this._bus.subscribe(topic, (data) => {
            this.publish(topic, data, delReferenceSource(referenceSource));
          });
          break;
        }
        case "PUBLISH" /* PUBLISH */: {
          this._bus.publish(topic, message, this, delReferenceSource(referenceSource));
          break;
        }
      }
    }
  };

  // ../utils-section/messageBus/WindowMessageBridge.ts
  var WindowMessageBridge = class extends MessageBusBridge {
    constructor(bus) {
      super(bus);
      __publicField(this, "_processRemoteMessageScopeHandler");
      this._processRemoteMessageScopeHandler = this.processRemoteMessageHandler.bind(this);
      window.addEventListener("message", this._processRemoteMessageScopeHandler, false);
    }
    publish(topic, message, target) {
      this.postMessage(topic, "PUBLISH" /* PUBLISH */, message, target);
    }
    subscribe(topic, target) {
      if (target === window) {
        throw new Error(`regist remote subscribe from current window is not supported.`);
      }
      this.postMessage(topic, "SUBSCRIBE" /* SUBSCRIBE */, void 0, target);
    }
    push(topic, message, target) {
      this.postMessage(topic, "PUSH" /* PUSH */, message, target);
    }
    pull(topic, target) {
      if (target === window) {
        throw new Error(`regist remote pull from current window is not supported.`);
      }
      this.postMessage(topic, "PULL" /* PULL */, void 0, target);
    }
    quit() {
      window.removeEventListener("message", this._processRemoteMessageScopeHandler);
    }
    postMessage(topic, type, message, target) {
      target.postMessage(
        {
          topic,
          type,
          message
        },
        "*"
      );
    }
    processRemoteMessageHandler(e) {
      this.processRemoteMessage(e.data, e.source);
    }
  };

  // src/tool/MessageTool.ts
  var MessageTool = class extends BaseInterface {
    constructor() {
      super();
      this._messageBus = new MessageBus(false);
      this._windowMessageBridge = new WindowMessageBridge(this._messageBus);
    }
    get messageBus() {
      return this._messageBus;
    }
    get windowMessageBridge() {
      return this._windowMessageBridge;
    }
    quit() {
      this._messageBus.clearAll();
      this._messageBus = void 0;
      this._windowMessageBridge.quit();
      this._windowMessageBridge = void 0;
    }
  };

  // src/tool/history/Utils.ts
  function removeFromTo(array, from, to) {
    array.splice(from, !to || 1 + to - from + (!(to < 0 ^ from >= 0) && (to < 0 || -1) * array.length));
    return array.length;
  }

  // src/tool/history/HistoryManager.ts
  var HistoryManager = class extends BaseInterface {
    constructor(limit = 20) {
      super();
      this._commands = [];
      this._index = 0;
      this._limit = limit;
      this._callback = null;
    }
    get index() {
      return this._index;
    }
    set index(value) {
      this._index = value;
    }
    get isExecuting() {
      return this._isExecuting;
    }
    execute(command, action) {
      if (!command || typeof command[action] !== "function") {
        throw new Error(`[history-manager][excute] parameter error.`);
      }
      this._isExecuting = true;
      command[action]();
      this._isExecuting = false;
    }
    add(command) {
      if (this._isExecuting) {
        return this;
      }
      this._commands.splice(this.index + 1, this._commands.length - this.index);
      this._commands.push(command);
      if (this._limit && this._commands.length > this._limit) {
        removeFromTo(this._commands, 0, -(this._limit + 1));
      }
      this.index = this._commands.length - 1;
      this._callback && this._callback();
      return this;
    }
    setCallback(callback) {
      this._callback = callback;
      return this;
    }
    undo() {
      let command = this._commands[this.index];
      if (!command) {
        return this;
      }
      const groupId = command.groupId;
      while (command.groupId === groupId) {
        this.execute(command, "undo");
        this.index -= 1;
        command = this._commands[this.index];
        if (!command || !command.groupId) {
          break;
        }
      }
      this._callback && this._callback();
      return this;
    }
    redo() {
      let command = this._commands[this.index + 1];
      if (!command) {
        return this;
      }
      const groupId = command.groupId;
      while (command.groupId === groupId) {
        this.execute(command, "redo");
        this.index += 1;
        command = this._commands[this.index + 1];
        if (!command || !command.groupId) {
          break;
        }
      }
      this._callback && this._callback();
      return this;
    }
    clear() {
      let prevSize = this._commands.length;
      this._commands = [];
      this.index = -1;
      if (this._callback && prevSize > 0) {
        this._callback();
      }
    }
    hasUndo() {
      return this.index !== -1 && this._commands.length >= 1;
    }
    hasRedo() {
      return this.index < this._commands.length - 1;
    }
    getCommands(groupId) {
      return groupId ? this._commands.filter((cItem) => {
        return cItem.groupId === groupId;
      }) : this._commands;
    }
    quit() {
      this._commands.length = 0;
      this._callback = void 0;
    }
  };

  // src/controller/OperationController.ts
  var OperationController = class extends BaseInterface {
    constructor() {
      super();
    }
    addHistroyRecord(elementItemId, action, groupId = String(performance.now())) {
      const commandItem = CommandProxy.getCommandInstance(elementItemId, action, groupId);
      Constant.historyManager.add(commandItem);
    }
    undo() {
      Constant.historyManager.undo();
      Constant.messageTool.messageBus.publish("CLEAR_ALL_SELECTS" /* CLEAR_ALL_SELECTS */, null);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("HISTORY_UNDO" /* HISTORY_UNDO */, {});
    }
    redo() {
      Constant.historyManager.redo();
      Constant.messageTool.messageBus.publish("CLEAR_ALL_SELECTS" /* CLEAR_ALL_SELECTS */, null);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("HISTORY_REDO" /* HISTORY_REDO */, {});
    }
    hasHistoryUndoRecord() {
      return Constant.historyManager.hasUndo();
    }
    hasHistoryRedoRecord() {
      return Constant.historyManager.hasRedo();
    }
    resetCanvasContent() {
      Constant.canvasController.resetCanvasContent();
    }
    quit() {
    }
  };

  // src/controller/systemConfig/CanvasAidedDesign.ts
  var CanvasAidedDesign = class extends BaseInterface {
    constructor() {
      super();
      this._alignGrid = true;
    }
    set enableGrid(value) {
      AxisParam.getInstance().isShowGrid = value;
    }
    get enableGrid() {
      return AxisParam.getInstance().isShowGrid;
    }
    set enableMultiGrid(value) {
      if (!AxisParam.getInstance().isShowGrid && value) {
        console.warn(`when enabling bold grids, the universal grid must be enabled first.`);
      }
      AxisParam.getInstance().isShowMultiGrid = value;
    }
    get enableMultiGrid() {
      return AxisParam.getInstance().isShowMultiGrid;
    }
    set enableGridDot(value) {
      AxisParam.getInstance().isShowGridDot = value;
    }
    get enableGridDot() {
      return AxisParam.getInstance().isShowGridDot;
    }
    set enableAxis(value) {
      AxisParam.getInstance().isShowAxis = value;
    }
    get enableAxis() {
      return AxisParam.getInstance().isShowAxis;
    }
    set alignGrid(value) {
      this._alignGrid = value;
    }
    get alignGrid() {
      return this._alignGrid;
    }
    get gridColor() {
      return AxisParam.getInstance().gridColor;
    }
    set gridColor(value) {
      AxisParam.getInstance().gridColor = value;
    }
    get gridAlpha() {
      return AxisParam.getInstance().gridAlpha;
    }
    set gridAlpha(value) {
      AxisParam.getInstance().gridAlpha = value;
    }
    get multiGridColor() {
      return AxisParam.getInstance().multiGridColor;
    }
    set multiGridColor(value) {
      AxisParam.getInstance().multiGridColor = value;
    }
    get multiGridAlpha() {
      return AxisParam.getInstance().multiGridAlpha;
    }
    set multiGridAlpha(value) {
      AxisParam.getInstance().multiGridAlpha = value;
    }
    get gridDotColor() {
      return AxisParam.getInstance().gridDotColor;
    }
    set gridDotColor(value) {
      AxisParam.getInstance().gridDotColor = value;
    }
    get gridDotAlpha() {
      return AxisParam.getInstance().gridAlpha;
    }
    set gridDotAlpha(value) {
      AxisParam.getInstance().gridAlpha = value;
    }
    get axisColor() {
      return AxisParam.getInstance().axisColor;
    }
    set axisColor(value) {
      AxisParam.getInstance().axisColor = value;
    }
    get axisAlpha() {
      return AxisParam.getInstance().axisAlpha;
    }
    set axisAlpha(value) {
      AxisParam.getInstance().axisAlpha = value;
    }
    get axisStepX() {
      return AxisParam.getInstance().axisStepX;
    }
    set axisStepX(value) {
      AxisParam.getInstance().axisStepX = value;
    }
    get axisStepY() {
      return AxisParam.getInstance().axisStepY;
    }
    set axisStepY(value) {
      AxisParam.getInstance().axisStepY = value;
    }
    get axisSnapX() {
      return AxisParam.getInstance().axisSnapX;
    }
    set axisSnapX(value) {
      AxisParam.getInstance().axisSnapX = value;
    }
    get axisSnapY() {
      return AxisParam.getInstance().axisSnapY;
    }
    set axisSnapY(value) {
      AxisParam.getInstance().axisSnapY = value;
    }
    toJSON() {
      return {
        enableGrid: this.enableGrid,
        enableMultiGrid: this.enableMultiGrid,
        enableGridDot: this.enableGridDot,
        enableAxis: this.enableAxis,
        /* ... */
        alignGrid: this.alignGrid,
        axisStepX: this.axisStepX,
        axisStepY: this.axisStepY,
        axisSnapX: this.axisSnapX,
        axisSnapY: this.axisSnapY,
        /* ... */
        gridColor: AxisParam.getInstance().gridColor,
        gridAlpha: AxisParam.getInstance().gridAlpha,
        multiGridColor: AxisParam.getInstance().multiGridColor,
        multiGridAlpha: AxisParam.getInstance().multiGridAlpha,
        gridDotColor: AxisParam.getInstance().gridDotColor,
        gridDotAlpha: AxisParam.getInstance().gridDotAlpha,
        axisColor: AxisParam.getInstance().axisColor,
        axisAlpha: AxisParam.getInstance().axisAlpha
      };
    }
    quit() {
    }
  };

  // src/controller/systemConfig/Interactive.ts
  var Interactive = class extends BaseInterface {
    constructor() {
      super();
      this._enableCanvasZoomChange = true;
      this._enableCanvasTranslate = true;
      this._enableCanvasTranslateByLeftDownMove = false;
      this._enableCanvasTranslateByRightDownMove = true;
      this._enableCanvasSelection = true;
    }
    set enableCanvasZoomChange(value) {
      this._enableCanvasZoomChange = value;
    }
    get enableCanvasZoomChange() {
      return this._enableCanvasZoomChange;
    }
    set enableCanvasTranslate(value) {
      this._enableCanvasTranslate = value;
    }
    get enableCanvasTranslate() {
      return this._enableCanvasTranslate;
    }
    set enableCanvasTranslateByLeftDownMove(value) {
      this._enableCanvasTranslateByLeftDownMove = value;
    }
    get enableCanvasTranslateByLeftDownMove() {
      return this._enableCanvasTranslateByLeftDownMove;
    }
    set enableCanvasTranslateByRightDownMove(value) {
      this._enableCanvasTranslateByRightDownMove = value;
    }
    get enableCanvasTranslateByRightDownMove() {
      return this._enableCanvasTranslateByRightDownMove;
    }
    set enableCanvasSelection(value) {
      this._enableCanvasSelection = value;
    }
    get enableCanvasSelection() {
      return this._enableCanvasSelection;
    }
    toJSON() {
      return {
        enableCanvasZoomChange: this.enableCanvasZoomChange,
        enableCanvasTranslate: this.enableCanvasTranslate,
        enableCanvasTranslateByLeftDownMove: this.enableCanvasTranslateByLeftDownMove,
        enableCanvasTranslateByRightDownMove: this.enableCanvasTranslateByRightDownMove,
        enableCanvasSelection: this.enableCanvasSelection
      };
    }
    quit() {
    }
  };

  // src/controller/systemConfig/Theme.ts
  var Theme = class extends BaseInterface {
    constructor() {
      super();
      this._canvasBackgroundColor = Color.BLACK;
    }
    set canvasBackgroundColor(value) {
      this._canvasBackgroundColor = value;
      Constant.environment.launcher.scene.canvasBackgroundColor = value;
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
    }
    get canvasBackgroundColor() {
      return this._canvasBackgroundColor;
    }
    toJSON() {
      return {
        canvasBackgroundColor: this.canvasBackgroundColor
      };
    }
    quit() {
    }
  };

  // src/controller/systemConfig/SystemConfig.ts
  var SystemConfig = class extends BaseInterface {
    constructor() {
      super();
      this._interactive = new Interactive();
      this._canvasAidedDesign = new CanvasAidedDesign();
      this._theme = new Theme();
      this._enbaleOperationMessagesNotify = true;
      this._enbaleFPSCount = false;
      this._coreEngineType = "WEBGL" /* WEBGL */;
      this._renderMode = "D2" /* D2 */;
    }
    get renderMode() {
      return this._renderMode;
    }
    set renderMode(value) {
      this._renderMode = value;
    }
    get interactive() {
      return this._interactive;
    }
    get canvasAidedDesign() {
      return this._canvasAidedDesign;
    }
    get theme() {
      return this._theme;
    }
    get enbaleOperationMessagesNotify() {
      return this._enbaleOperationMessagesNotify;
    }
    set enbaleOperationMessagesNotify(value) {
      this._enbaleOperationMessagesNotify = value;
    }
    get enbaleFPSCount() {
      return this._enbaleFPSCount;
    }
    set enbaleFPSCount(value) {
      this._enbaleFPSCount = value;
    }
    get coreEngineType() {
      return this._coreEngineType;
    }
    set coreEngineType(value) {
      this._coreEngineType = value;
    }
    toJSON() {
      return {
        enbaleOperationMessagesNotify: this.enbaleOperationMessagesNotify,
        coreEngineType: this.coreEngineType,
        renderMode: this.renderMode,
        interactive: this.interactive.toJSON(),
        canvasAidedDesign: this.canvasAidedDesign.toJSON(),
        theme: this.theme.toJSON()
      };
    }
    update(moduleName, key, value) {
      if (moduleName === "Interactive") {
        if (key && typeof this.interactive[key] !== "undefined") {
          this.interactive[key] = value;
        }
        return;
      }
      if (moduleName === "CanvasAidedDesign") {
        if (key && typeof this.canvasAidedDesign[key] !== "undefined") {
          this.canvasAidedDesign[key] = value;
        }
        return;
      }
      if (moduleName === "Theme") {
        if (key && typeof this.theme[key] !== "undefined") {
          this.theme[key] = value;
        }
        return;
      }
      if (moduleName && typeof this[moduleName] !== "undefined") {
        this[moduleName] = key;
      }
    }
    quit() {
      this._interactive.quit();
      this._interactive = void 0;
      this._canvasAidedDesign.quit();
      this._canvasAidedDesign = void 0;
      this._theme.quit();
      this._theme = void 0;
    }
  };

  // src/utils/FPSCount.ts
  var FPSCount = class {
    constructor(freshInterval = 200) {
      this._fps = 0;
      this._lastFreshTimeStamp = 0;
      this._freshInterval = freshInterval >= 1e3 ? 1e3 : freshInterval <= 10 ? 10 : freshInterval;
      this._recordCount = 0;
      this._diffFreshInterval = 0;
    }
    getFPSCount() {
      return this._fps;
    }
    getDiffFreshInterval() {
      return this._diffFreshInterval >> 0;
    }
    calcFPSCount(nowTimeStamp) {
      const distTimeStamp = nowTimeStamp - this._lastFreshTimeStamp;
      if (distTimeStamp >= this._freshInterval) {
        this._fps = 1e3 / (distTimeStamp / this._recordCount) >> 0;
        this._recordCount = 0;
        this._lastFreshTimeStamp = nowTimeStamp;
        this._diffFreshInterval = distTimeStamp;
      }
      this._recordCount++;
    }
  };

  // src/algorithm/rtree2/Rectangle.ts
  var Rectangle = class _Rectangle {
    /**
     * 判断 a 与 b 是否有重叠
     */
    static overlapRectangle(a, b) {
      if (a.h === 0 && a.w === 0 || b.h === 0 && b.w === 0) {
        return a.x <= b.x + b.w && a.x + a.w >= b.x && a.y <= b.y + b.h && a.y + a.h >= b.y;
      }
      return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
    }
    /**
     * 判断 a 是否包含于 b 中
     */
    static containsRectangle(a, b) {
      return a.x + a.w <= b.x + b.w && a.x >= b.x && a.y + a.h <= b.y + b.h && a.y >= b.y;
    }
    /**
     * 读取 nodes 中各项的矩形尺寸, 重新修改 expandRect 的矩形尺寸
     * 以使得 expandRect 能够包含所有 nodes[i]
     */
    static makeMBR(expandRect, nodes) {
      if (!nodes.length) {
        return {
          x: 0,
          y: 0,
          w: 0,
          h: 0
        };
      }
      expandRect.x = nodes[0].x;
      expandRect.y = nodes[0].y;
      expandRect.w = nodes[0].w;
      expandRect.h = nodes[0].h;
      let len = nodes.length;
      for (let i = 1; i < len; i++) {
        _Rectangle.expandRectangle(expandRect, nodes[i]);
      }
      return expandRect;
    }
    /**
     * 读取 b 的尺寸数据来修改 a 的尺寸数据
     * 使得 a 占用范围能够"包裹" b
     *
     * a - 待扩展的矩形
     * b - 被覆盖的矩形
     */
    static expandRectangle(a, b) {
      let nx = 0;
      let ny = 0;
      let axw = a.x + a.w;
      let bxw = b.x + b.w;
      let ayh = a.y + a.h;
      let byh = b.y + b.h;
      nx = a.x > b.x ? b.x : a.x;
      ny = a.y > b.y ? b.y : a.y;
      a.w = axw > bxw ? axw - nx : bxw - nx;
      a.h = ayh > byh ? ayh - ny : byh - ny;
      a.x = nx;
      a.y = ny;
      return a;
    }
    static squarifiedRatio(l, w, fill) {
      const a = (l + w) / 2;
      return a * a * fill;
    }
  };

  // src/algorithm/rtree2/linearSplit.ts
  function pickLinear(nodes) {
    let indexLowestEndX = nodes.length - 1;
    let indexHighestStartX = 0;
    let indexLowestEndY = nodes.length - 1;
    let indexHighestStartY = 0;
    for (let i = nodes.length - 2; i >= 0; i--) {
      const childItem = nodes[i];
      if (childItem.x > nodes[indexHighestStartX].x) {
        indexHighestStartX = i;
      } else if (childItem.x + childItem.w < nodes[indexLowestEndX].x + nodes[indexLowestEndX].w) {
        indexLowestEndX = i;
      }
      if (childItem.y > nodes[indexHighestStartY].y) {
        indexHighestStartY = i;
      } else if (childItem.y + childItem.h < nodes[indexLowestEndY].y + nodes[indexLowestEndY].h) {
        indexLowestEndY = i;
      }
    }
    const lowestEndX = nodes[indexLowestEndX].x + nodes[indexLowestEndX].w;
    const lowestEndY = nodes[indexLowestEndY].y + nodes[indexLowestEndY].h;
    const highestStartX = nodes[indexHighestStartX].x;
    const highestStartY = nodes[indexHighestStartY].y;
    const dx = Math.abs(lowestEndX - highestStartX);
    const dy = Math.abs(lowestEndY - highestStartY);
    let itemLowestEnd;
    let itemHighestStart;
    if (dx > dy) {
      if (indexLowestEndX > indexHighestStartX) {
        itemLowestEnd = nodes.splice(indexLowestEndX, 1)[0];
        itemHighestStart = nodes.splice(indexHighestStartX, 1)[0];
      } else {
        itemHighestStart = nodes.splice(indexHighestStartX, 1)[0];
        itemLowestEnd = nodes.splice(indexLowestEndX, 1)[0];
      }
    } else {
      if (indexLowestEndY > indexHighestStartY) {
        itemLowestEnd = nodes.splice(indexLowestEndY, 1)[0];
        itemHighestStart = nodes.splice(indexHighestStartY, 1)[0];
      } else {
        itemHighestStart = nodes.splice(indexHighestStartY, 1)[0];
        itemLowestEnd = nodes.splice(indexLowestEndY, 1)[0];
      }
    }
    return [
      {
        x: itemLowestEnd.x,
        y: itemLowestEnd.y,
        w: itemLowestEnd.w,
        h: itemLowestEnd.h,
        nodes: [itemLowestEnd]
      },
      {
        x: itemHighestStart.x,
        y: itemHighestStart.y,
        w: itemHighestStart.w,
        h: itemHighestStart.h,
        nodes: [itemHighestStart]
      }
    ];
  }
  function pickNext(nodes, a, b, minWidth) {
    let areaA = Rectangle.squarifiedRatio(a.w, a.h, a.nodes.length + 1);
    let areaB = Rectangle.squarifiedRatio(b.w, b.h, b.nodes.length + 1);
    let highAreaDelta = void 0;
    let highAreaNode = void 0;
    let lowestGrowthGroup = void 0;
    for (let i = nodes.length - 1; i >= 0; i--) {
      let l = nodes[i];
      let newAreaA = { x: 0, y: 0, w: 0, h: 0 };
      newAreaA.x = Math.min(a.x, l.x);
      newAreaA.y = Math.min(a.y, l.y);
      newAreaA.w = Math.max(a.x + a.w, l.x + l.w) - newAreaA.x;
      newAreaA.h = Math.max(a.y + a.h, l.y + l.h) - newAreaA.y;
      let changeNewAreaA = Math.abs(Rectangle.squarifiedRatio(newAreaA.w, newAreaA.h, a.nodes.length + 2) - areaA);
      let newAreaB = { x: 0, y: 0, w: 0, h: 0 };
      newAreaB.x = Math.min(b.x, l.x);
      newAreaB.y = Math.min(b.y, l.y);
      newAreaB.w = Math.max(b.x + b.w, l.x + l.w) - newAreaB.x;
      newAreaB.h = Math.max(b.y + b.h, l.y + l.h) - newAreaB.y;
      let changeNewAreaB = Math.abs(Rectangle.squarifiedRatio(newAreaB.w, newAreaB.h, b.nodes.length + 2) - areaB);
      if (!highAreaNode || !highAreaDelta || Math.abs(changeNewAreaB - changeNewAreaA) < highAreaDelta) {
        highAreaNode = i;
        highAreaDelta = Math.abs(changeNewAreaB - changeNewAreaA);
        lowestGrowthGroup = changeNewAreaB < changeNewAreaA ? b : a;
      }
    }
    let tempNode = nodes.splice(highAreaNode, 1)[0];
    if (a.nodes.length + nodes.length + 1 <= minWidth) {
      a.nodes.push(tempNode);
      Rectangle.expandRectangle(a, tempNode);
    } else if (b.nodes.length + nodes.length + 1 <= minWidth) {
      b.nodes.push(tempNode);
      Rectangle.expandRectangle(b, tempNode);
    } else {
      lowestGrowthGroup.nodes.push(tempNode);
      Rectangle.expandRectangle(lowestGrowthGroup, tempNode);
    }
  }
  function linearSplit(nodes, minWidth) {
    let n = pickLinear(nodes);
    while (nodes.length > 0) {
      pickNext(nodes, n[0], n[1], minWidth);
    }
    return n;
  }

  // src/algorithm/rtree2/chooseLeafSubtree.ts
  function chooseLeafSubtree(currentNode, root) {
    let bestChoiceIndex = -1;
    let bestChoiceStack = [];
    let bestChoiceArea = void 0;
    let first = true;
    let nodes = root.nodes;
    bestChoiceStack.push(root);
    do {
      if (!first) {
        bestChoiceStack.push(nodes[bestChoiceIndex]);
        nodes = nodes[bestChoiceIndex].nodes;
        bestChoiceIndex = -1;
      }
      first = false;
      for (let i = nodes.length - 1; i >= 0; i--) {
        let childNode = nodes[i];
        if ("leaf" in childNode) {
          bestChoiceIndex = -1;
          break;
        }
        const ax = Math.min(childNode.x, currentNode.x);
        const ay = Math.min(childNode.y, currentNode.y);
        const bx = Math.max(childNode.x + childNode.w, currentNode.x + currentNode.w);
        const by = Math.max(childNode.y + childNode.h, currentNode.y + currentNode.h);
        const nw = bx - ax;
        const nh = by - ay;
        const oldChildItemRatio = Rectangle.squarifiedRatio(childNode.w, childNode.h, childNode.nodes.length + 1);
        const newChildItemRatio = Rectangle.squarifiedRatio(nw, nh, childNode.nodes.length + 2);
        if (bestChoiceIndex < 0 || Math.abs(newChildItemRatio - oldChildItemRatio) < bestChoiceArea) {
          bestChoiceArea = Math.abs(newChildItemRatio - oldChildItemRatio);
          bestChoiceIndex = i;
        }
      }
    } while (bestChoiceIndex !== -1);
    return bestChoiceStack;
  }

  // src/algorithm/rtree2/insertSubtree.ts
  function insertSubtree(willInsertNode, root, maxWidth, minWidth) {
    if (root.nodes.length === 0) {
      root.x = willInsertNode.x;
      root.y = willInsertNode.y;
      root.w = willInsertNode.w;
      root.h = willInsertNode.h;
      root.nodes.push(willInsertNode);
      return;
    }
    let nodeDeepthPath = chooseLeafSubtree(willInsertNode, root);
    let nowHandleObj = willInsertNode;
    let bc = void 0;
    let bcChild = void 0;
    let expandRect = null;
    while (nodeDeepthPath.length > 0) {
      if (bc && "nodes" in bc && bc.nodes.length === 0) {
        expandRect = null;
        bcChild = bc;
        bc = nodeDeepthPath.pop();
        for (let t = 0; t < bc.nodes.length; t++) {
          if (bc.nodes[t] === bcChild) {
            const item = bc.nodes.splice(t, 1);
            break;
          } else if (bc.nodes[t].nodes.length === 0) {
            const item = bc.nodes.splice(t, 1);
            break;
          }
        }
      } else {
        bc = nodeDeepthPath.pop();
      }
      if (expandRect) {
        Rectangle.expandRectangle(bc, expandRect);
        expandRect = { x: bc.x, y: bc.y, w: bc.w, h: bc.h };
      } else {
        if ("leaf" in nowHandleObj || "nodes" in nowHandleObj || Array.isArray(nowHandleObj)) {
          expandRect = null;
          if (Array.isArray(nowHandleObj)) {
            for (let ai = 0; ai < nowHandleObj.length; ai++) {
              Rectangle.expandRectangle(bc, nowHandleObj[ai]);
            }
            bc.nodes = bc.nodes.concat(nowHandleObj);
          } else {
            Rectangle.expandRectangle(bc, nowHandleObj);
            bc.nodes.push(nowHandleObj);
          }
          if (bc.nodes.length <= maxWidth) {
            expandRect = { x: bc.x, y: bc.y, w: bc.w, h: bc.h };
          } else {
            let fissionList = linearSplit(bc.nodes, minWidth);
            if (nodeDeepthPath.length <= 0) {
              bc.nodes.push(fissionList[0]);
              nodeDeepthPath.push(bc);
              nowHandleObj = fissionList[1];
            } else {
              nowHandleObj = fissionList;
            }
          }
        }
      }
    }
  }

  // src/algorithm/rtree2/flatten.ts
  function flatten(trees) {
    const result = [];
    let treesCopy = trees.slice();
    while (treesCopy.length) {
      const current = treesCopy.pop();
      if (current.nodes) {
        treesCopy = treesCopy.concat(current.nodes);
        continue;
      }
      if (current.leaf) {
        result.push(current);
        continue;
      }
    }
    return result;
  }

  // src/algorithm/rtree2/searchSubtree.ts
  function searchSubtree(rect, root) {
    const result = [];
    if (!Rectangle.overlapRectangle(rect, root)) {
      return result;
    }
    const hitStack = [];
    hitStack.push(root.nodes);
    while (hitStack.length > 0) {
      const nodes = hitStack.pop();
      for (let i = nodes.length - 1; i >= 0; i--) {
        let ltree = nodes[i];
        if (Rectangle.overlapRectangle(rect, ltree)) {
          if ("nodes" in ltree) {
            hitStack.push(ltree.nodes);
          } else if ("leaf" in ltree) {
            result.push(ltree);
          }
        }
      }
    }
    return result;
  }

  // src/algorithm/rtree2/removeSubtree.ts
  function removeSubtree(rect, obj, root, maxWidth, minWidth) {
    let removedList = [];
    if (!rect || !Rectangle.overlapRectangle(rect, root)) {
      return removedList;
    }
    let handleObj = { x: rect.x, y: rect.y, w: rect.w, h: rect.h, target: obj };
    let chooseStack = [];
    let chooseChildIndexStack = [];
    let lastItemIndex = -1;
    let currentDepth = 1;
    let tree = null;
    let itemTree = null;
    chooseStack.push(root);
    chooseChildIndexStack.push(root.nodes.length - 1);
    TREE_LOOP: while (chooseStack.length > 0) {
      tree = chooseStack.pop();
      lastItemIndex = chooseChildIndexStack.pop();
      if ("target" in handleObj) {
        while (lastItemIndex >= 0) {
          itemTree = tree.nodes[lastItemIndex];
          if (Rectangle.overlapRectangle(handleObj, itemTree)) {
            if (handleObj.target && "leaf" in itemTree && itemTree.leaf === handleObj.target || !handleObj.target && ("leaf" in itemTree || Rectangle.containsRectangle(itemTree, handleObj))) {
              const rmSelectedList = tree.nodes.splice(lastItemIndex, 1);
              if ("nodes" in itemTree) {
                removedList = flatten(rmSelectedList);
              } else {
                removedList = rmSelectedList;
              }
              Rectangle.makeMBR(tree, tree.nodes);
              delete handleObj.target;
              break TREE_LOOP;
            } else if ("nodes" in itemTree) {
              currentDepth++;
              chooseChildIndexStack.push(lastItemIndex - 1);
              chooseStack.push(tree);
              tree = itemTree;
              lastItemIndex = itemTree.nodes.length - 1;
            }
          }
          lastItemIndex--;
        }
      } else if ("nodes" in handleObj) {
        tree.nodes.splice(lastItemIndex, 1);
        Rectangle.makeMBR(tree, tree.nodes);
        const childNodes = handleObj.nodes || [];
        for (let k = 0; k < childNodes.length; k++) {
          insertSubtree(childNodes[k], tree, minWidth, maxWidth);
        }
        handleObj.nodes = [];
        if (chooseStack.length === 0 && tree.nodes.length <= 1) {
          handleObj.nodes = searchSubtree({ x: tree.x, y: tree.y, w: tree.w, h: tree.h }, tree);
          tree.nodes = [];
          chooseStack.push(tree);
          chooseChildIndexStack.push(0);
          currentDepth -= 1;
          continue;
        }
        if (chooseStack.length > 0 && tree.nodes.length < minWidth) {
          handleObj.nodes = searchSubtree({ x: tree.x, y: tree.y, w: tree.w, h: tree.h }, tree);
          tree.nodes = [];
          currentDepth -= 1;
          continue;
        }
        delete handleObj.nodes;
        currentDepth -= 1;
      } else {
        Rectangle.makeMBR(tree, tree.nodes);
      }
      currentDepth -= 1;
    }
    return removedList;
  }

  // src/algorithm/rtree2/Rtree.ts
  var RTree = class extends BaseInterface {
    constructor(width = 10) {
      super();
      this._getWidth = width;
      this._root = null;
      this._minWidth = 3;
      this._maxWidth = 6;
      this._allItems = /* @__PURE__ */ new Set();
      this.refresh();
    }
    refresh() {
      let minWidth = this._minWidth;
      let maxWidth = this._maxWidth;
      if (!isNaN(this._getWidth)) {
        minWidth = Math.floor(this._getWidth / 2);
        maxWidth = this._getWidth;
      }
      this._allItems = /* @__PURE__ */ new Set();
      const rootTree = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        nodes: [],
        id: `root`
      };
      this._root = rootTree;
      this._minWidth = minWidth;
      this._maxWidth = maxWidth;
    }
    getAllItems() {
      return this._allItems;
    }
    insertItemData(rect, obj) {
      this._allItems.add(obj);
      insertSubtree({ x: rect.x, y: rect.y, w: rect.w, h: rect.h, leaf: obj }, this._root, this._maxWidth, this._minWidth);
    }
    search(rect) {
      return searchSubtree(rect, this._root);
    }
    remove(rect, obj) {
      let removedList = [];
      if (!obj) {
        removedList = this.removeArea(rect);
      } else {
        removedList = this.removeObj(rect, obj);
      }
      for (let i = 0; i < removedList.length; i++) {
        this._allItems.delete(removedList[i].leaf);
      }
      return removedList;
    }
    clearAllItems() {
      this.refresh();
    }
    quit() {
      this.clearAllItems();
      this._allItems.clear();
      this._allItems = void 0;
    }
    removeArea(rect) {
      let numberDeleted = 1;
      let allRemovedList = [];
      while (numberDeleted > 0) {
        const removedList = removeSubtree(rect, false, this._root, this._maxWidth, this._minWidth);
        numberDeleted = removedList.length;
        allRemovedList = allRemovedList.concat(removedList);
      }
      return allRemovedList;
    }
    removeObj(rect, obj) {
      const removedList = removeSubtree(rect, obj, this._root, this._maxWidth, this._minWidth);
      return removedList;
    }
  };

  // src/controller/D2TextElementController.ts
  var D2TextElementController = class extends BaseInterface {
    constructor() {
      super();
    }
    /**
     * 创建 D2-Text-Shape
     */
    createD2TextElementItem(layerItemId, position, content, optional = {}, callback) {
      const checkResult = Helper.checkDrawLayer(layerItemId);
      if (checkResult.code !== 0) {
        console.error(`error: target layer does not exist or has been deleted.`);
        return null;
      }
      const elementItemId = Constant.globalIdenManager.getElementIden();
      const targetShapeItem = D2TextShapeManager.getInstance().createShapeItem(
        elementItemId,
        layerItemId,
        position,
        content,
        optional,
        callback
      );
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      return targetShapeItem.model.elementItemId;
    }
    /**
     * 创建 D2-Text-Shape
     */
    createD2TextElementItemByVertexData(layerItemId, textVertexData, position, optional = {}) {
      const checkResult = Helper.checkDrawLayer(layerItemId);
      if (checkResult.code !== 0) {
        console.error(`error: target layer does not exist or has been deleted.`);
        return null;
      }
      const { bbox2: bbox22, vertexDataArray: vertexDataArray2 } = TextLayout.translateVertexData(textVertexData.vertexDataArray);
      const elementItemId = Constant.globalIdenManager.getElementIden();
      const targetShapeItem = D2TextShapeManager.getInstance().createShapeItemByVertexData(
        elementItemId,
        layerItemId,
        position,
        __spreadProps(__spreadValues({}, textVertexData), { initBbox2: bbox22, vertexDataArray: vertexDataArray2 }),
        optional
      );
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      return targetShapeItem.model.elementItemId;
    }
    /**
     * 创建 D2-Text 顶点数据
     */
    createD2TextVertexDataItem(content, optional) {
      return __async(this, null, function* () {
        const fontSize = optional.fontSize || DEFAULT_FONT_SIZE;
        const styleSetting = createD2TextModelStyleDefaultSetting(fontSize);
        const locSetting = __spreadValues({
          fontFamily: "auto",
          fontStyle: "normal" /* NORMAL */,
          fontSize,
          fontWeight: 100,
          lineHeight: styleSetting.lineHeight,
          rotation: 0,
          isFlipX: false,
          isFlipY: false
        }, optional);
        return new Promise((_) => {
          const hashIden = getHashIden();
          Constant.textFontService.addVectorizeTextTask(
            hashIden,
            content,
            {
              fontSize: locSetting.fontSize,
              lineHeight: locSetting.lineHeight
            },
            {
              fontFamily: locSetting.fontFamily,
              fontWeight: locSetting.fontWeight,
              fontStyle: locSetting.fontStyle
            },
            ({ width, height, initBbox2, vertexDataArray }) => {
              _({
                content,
                fontSize: locSetting.fontSize,
                fontFamily: locSetting.fontFamily,
                fontWeight: locSetting.fontWeight,
                fontStyle: locSetting.fontStyle,
                width,
                height,
                initBbox2,
                vertexDataArray
              });
            }
          );
        });
      });
    }
    /**
     * 设置文本图元字符串内容
     */
    updateD2TextElementItemContent(elementItemId, elementItemContent, callback) {
      let targetElement = null;
      targetElement = D2TextShapeManager.getInstance().getItemById(elementItemId);
      if (!targetElement) {
        return;
      }
      targetElement.updateContent(elementItemContent);
      D2TextShapeManager.getInstance().refreshGraphicsPostions(targetElement.model, callback);
      OutProfileMessage.dispatchOperationProfileChangeMessage("MODIFY_ELEMENT" /* MODIFY_ELEMENT */, {});
    }
    quit() {
    }
  };

  // src/manager/TexImageSourceManager.ts
  var TexImageSourceTemplate = class {
    constructor(fileHashUuid, texImageSource) {
      this._fileHashUuid = fileHashUuid;
      this._texImageSource = texImageSource;
    }
    get fileHashUuid() {
      return this._fileHashUuid;
    }
    get texImageSource() {
      return this._texImageSource;
    }
  };
  var TexImageSourceManager = class _TexImageSourceManager extends BaseManager {
    static getInstance() {
      if (_TexImageSourceManager.instance === void 0) {
        _TexImageSourceManager.instance = new _TexImageSourceManager();
      }
      return _TexImageSourceManager.instance;
    }
    constructor() {
      super();
    }
    addTexImageSourceCache(hashId, texImageSourceTemplate) {
      this.items.set(hashId, texImageSourceTemplate);
    }
    getTexImageSourceCache(hashId) {
      let texImageSourceTemplate = this.items.get(hashId);
      if (!texImageSourceTemplate) {
        return null;
      }
      return texImageSourceTemplate;
    }
    quit() {
      super.quit();
      _TexImageSourceManager.instance = void 0;
    }
  };

  // src/service/ImageReSourceService.ts
  var ImageReSourceService = class extends BaseInterface {
    constructor() {
      super();
      this._isRuning = false;
      this._taskDataList = [];
      this._flushCallbacks = [];
    }
    addImageLoadTaskItem(imageId, fileHashUuid, imageDataURL, flushCallback) {
      this._taskDataList.push({
        imageId,
        fileHashUuid,
        imageDataURL
      });
      this._flushCallbacks.push(flushCallback ? flushCallback : null);
      if (this._taskDataList.length && !this._isRuning) {
        const itemData = this._taskDataList.shift();
        if (itemData) {
          this.loadImageDataURL(itemData.imageId, itemData.fileHashUuid, itemData.imageDataURL);
        }
      }
    }
    quit() {
      this._taskDataList = void 0;
      this._flushCallbacks = void 0;
    }
    loadImageDataURL(imageId, fileHashUuid, imageDataURL) {
      const texImageSourceTemplate = TexImageSourceManager.getInstance().getTexImageSourceCache(fileHashUuid);
      if (texImageSourceTemplate) {
        this.flushImageData(imageId, texImageSourceTemplate.fileHashUuid, texImageSourceTemplate.texImageSource);
        return;
      }
      const self2 = this;
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.dataset.imageId = imageId;
      image.dataset.fileHashUuid = fileHashUuid;
      image.onload = function(e) {
        if (Constant.systemConfig.coreEngineType === "WEBGL" /* WEBGL */ || Constant.systemConfig.coreEngineType === "WEBGPU" /* WEBGPU */) {
          const fileHashUuid3 = image.dataset.fileHashUuid;
          const texImageSourceTemplate3 = new TexImageSourceTemplate(fileHashUuid3, image);
          TexImageSourceManager.getInstance().addTexImageSourceCache(fileHashUuid3, texImageSourceTemplate3);
          self2.flushImageData(imageId, texImageSourceTemplate3.fileHashUuid, image);
          return;
        }
        const fileHashUuid2 = image.dataset.fileHashUuid;
        const texImageSourceTemplate2 = new TexImageSourceTemplate(fileHashUuid2, image);
        TexImageSourceManager.getInstance().addTexImageSourceCache(fileHashUuid2, texImageSourceTemplate2);
        self2.flushImageData(imageId, texImageSourceTemplate2.fileHashUuid, image);
      };
      image.onerror = function(e) {
        console.error(e);
      };
      image.src = imageDataURL;
    }
    flushImageData(imageId, fileHashUuid, texImageSourceTemplate) {
      const flushCallback = this._flushCallbacks.shift();
      if (flushCallback instanceof Function) {
        flushCallback(imageId, fileHashUuid, texImageSourceTemplate);
      }
      if (this._taskDataList.length && !this._isRuning) {
        const itemData = this._taskDataList.shift();
        if (itemData) {
          this.loadImageDataURL(itemData.imageId, itemData.fileHashUuid, itemData.imageDataURL);
        }
      }
    }
  };

  // src/tool/D2CoordinateUtils.ts
  var D2CoordinateUtils = class {
    constructor() {
      this._camera = Camera.getInstance();
      this._camera = Camera.getInstance();
    }
    /**
     * 输入:
     * 		场景物理坐标
     * 输出:
     * 		DOM <canvas /> 像素坐标(左上角原点, Y 轴向上为正)
     * 			也即: 相机可视范围的像素坐标(左上角原点, Y 轴向上为正)
     */
    setScenePhysicsPos2CanvasSourceNativePixelPos(scenePhysicsPoint) {
      const scenePxielX = mm2px(scenePhysicsPoint[0], InsConfig.DPI[0]);
      const scenePxielY = mm2px(scenePhysicsPoint[1], InsConfig.DPI[1]);
      const M = this._camera.getLookMatrix4().multiply4(this._camera.getZoomMatrix4());
      const V1 = new Vector3(scenePxielX, scenePxielY, 0).multiplyMatrix4(M);
      const VR = this._camera.getCenterSourceNativePixelPosition().add(V1);
      return [VR.x, VR.y];
    }
    /**
     * 输入:
     * 		DOM <canvas /> 像素坐标(左上角原点, Y 轴向上为正)
     * 			也即: 相机可视范围的像素坐标(左上角原点, Y 轴向上为正)
     * 输出:
     * 		场景像素坐标
     */
    setCanvasSourceNativePixelPos2ScenePixelPos(canvasDomSourceNativePixelPoint) {
      const V1 = new Vector3(canvasDomSourceNativePixelPoint[0], canvasDomSourceNativePixelPoint[1], 0).sub(
        this._camera.getCenterSourceNativePixelPosition()
      );
      const M = this._camera.getLookMatrix4().multiply4(this._camera.getZoomMatrix4());
      const VR = V1.multiplyMatrix4(M.getInverseMatrix());
      return [VR.x, VR.y];
    }
    /**
     * 输入:
     * 		DOM <canvas /> 像素坐标(左上角原点, Y 轴向上为正)
     * 			也即: 相机可视范围的像素坐标(左上角原点, Y 轴向上为正)
     * 输出:
     * 		场景物理坐标
     */
    setCanvasSourceNativePixelPos2ScenePhysicsPos(canvasDomSourceNativePixelPoint) {
      const [scenePixelX, scenePixelY] = this.setCanvasSourceNativePixelPos2ScenePixelPos(canvasDomSourceNativePixelPoint);
      const scenePhysicsX = px2mm(scenePixelX, InsConfig.DPI[0]);
      const scenePhysicsY = px2mm(scenePixelY, InsConfig.DPI[0]);
      return [scenePhysicsX, scenePhysicsY];
    }
    quit() {
      this._camera = void 0;
    }
  };

  // src/Constant.ts
  var Constant = {
    environment: null,
    messageTool: null,
    globalIdenManager: null,
    rtree: null,
    historyManager: null,
    operationController: null,
    d2ElementController: null,
    d2TextElementController: null,
    drawLayerController: null,
    canvasController: null,
    d2FilterController: null,
    selectManager: null,
    modifyController: null,
    systemConfig: null,
    d2CoordinateUtils: null,
    /* ... */
    rtreeService: null,
    textFontService: null,
    imageReSourceService: null,
    /* ... */
    dropDragTool: null,
    adsorption: null,
    handlerControl: null,
    /* ... */
    fpsCount: null
  };
  var createConstant = () => {
    Constant.environment = new Environment();
    Constant.messageTool = new MessageTool();
    Constant.globalIdenManager = new GlobalIdenManager();
    Constant.rtree = new RTree(50);
    Constant.historyManager = new HistoryManager(Number.MAX_SAFE_INTEGER);
    Constant.operationController = new OperationController();
    Constant.d2ElementController = new D2ElementController();
    Constant.d2TextElementController = new D2TextElementController();
    Constant.drawLayerController = new DrawLayerController();
    Constant.canvasController = new CanvasController();
    Constant.d2FilterController = new D2FilterController();
    Constant.selectManager = new SelectManager();
    Constant.modifyController = new ModifyController();
    Constant.systemConfig = new SystemConfig();
    Constant.d2CoordinateUtils = new D2CoordinateUtils();
    Constant.rtreeService = new RtreeService();
    Constant.textFontService = new TextFontService();
    Constant.imageReSourceService = new ImageReSourceService();
    Constant.dropDragTool = new DropDragTool();
    Constant.adsorption = new Adsorption();
    Constant.handlerControl = new HandlerControl();
    Constant.fpsCount = new FPSCount(200);
  };
  var destoryConstant = () => {
    D2ArcModelManager.getInstance().quit();
    D2CircleModelManager.getInstance().quit();
    D2ImageModelManager.getInstance().quit();
    D2LineModelManager.getInstance().quit();
    D2PointModelManager.getInstance().quit();
    D2RectModelManager.getInstance().quit();
    D2TextModelManager.getInstance().quit();
    D2ArcShapeManager.getInstance().quit();
    D2CircleShapeManager.getInstance().quit();
    D2ImageShapeManager.getInstance().quit();
    D2LineShapeManager.getInstance().quit();
    D2PointShapeManager.getInstance().quit();
    D2RectShapeManager.getInstance().quit();
    D2TextShapeManager.getInstance().quit();
    DrawLayerModelManager.getInstance().quit();
    DrawLayerShapeManager.getInstance().quit();
    EventsManager.getInstance().quit();
    TexImageSourceManager.getInstance().quit();
    TextGraphicsManager.getInstance().quit();
    WorkerManager.getInstance().quit();
    Constant.environment.quit();
    Constant.environment = void 0;
    Constant.messageTool.quit();
    Constant.messageTool = void 0;
    Constant.globalIdenManager = void 0;
    Constant.rtree.quit();
    Constant.rtree = void 0;
    Constant.historyManager.quit();
    Constant.historyManager = void 0;
    Constant.operationController.quit();
    Constant.operationController = void 0;
    Constant.d2ElementController.quit();
    Constant.d2ElementController = void 0;
    Constant.d2TextElementController.quit();
    Constant.d2TextElementController = void 0;
    Constant.drawLayerController.quit();
    Constant.drawLayerController = void 0;
    Constant.canvasController.quit();
    Constant.canvasController = void 0;
    Constant.d2FilterController.quit();
    Constant.d2FilterController = void 0;
    Constant.selectManager.quit();
    Constant.selectManager = void 0;
    Constant.modifyController.quit();
    Constant.modifyController = void 0;
    Constant.systemConfig.quit();
    Constant.systemConfig = void 0;
    Constant.d2CoordinateUtils.quit();
    Constant.d2CoordinateUtils = void 0;
    Constant.rtreeService.quit();
    Constant.rtreeService = void 0;
    Constant.textFontService.quit();
    Constant.textFontService = void 0;
    Constant.imageReSourceService.quit();
    Constant.imageReSourceService = void 0;
    Constant.dropDragTool = void 0;
    Constant.adsorption = void 0;
    Constant.handlerControl.quit();
    Constant.handlerControl = void 0;
    Constant.fpsCount = void 0;
  };

  // src/view/ViewInit.ts
  var ViewInit = class {
    static init() {
      return __async(this, null, function* () {
        window.setTimeout(() => {
          render(performance.now());
        });
        function render(timestamp) {
          Constant.environment.launcher.renderFrame(timestamp);
          if (Constant.systemConfig.enbaleFPSCount) {
            Constant.fpsCount.calcFPSCount(timestamp);
          }
          Constant.environment.launcher.rAFId = window.requestAnimationFrame(render);
          OutProfileMessage.dispatchCanvasProfileChangeMessage();
        }
      });
    }
  };

  // src/tool/auxiliary/BaseAuxiliary.ts
  var BaseAuxiliary = class extends BaseInterface {
    constructor() {
      super();
      this._camera = Camera.getInstance();
    }
    get camera() {
      return this._camera;
    }
    quit() {
      this._camera = void 0;
    }
  };

  // src/tool/auxiliary/primitive2d/D2CrossAssist.ts
  var D2CrossAssist = class extends BaseAuxiliary {
    constructor() {
      super();
      this._strokeWidth = px2mm(1, InsConfig.DPI[0]);
      this._segSize = 1;
      this._gapSize = 0.5;
      this._xLineShape = null;
      this._yLineShape = null;
    }
    hasInstance() {
      return this._xLineShape !== null && this._yLineShape !== null;
    }
    create() {
      const [leftTopScenePhysicsX, leftTopScenePhysicsY] = Constant.d2CoordinateUtils.setCanvasSourceNativePixelPos2ScenePhysicsPos([0, 0]);
      const [rightBottomScenePhysicsX, rightBottomScenePhysicsY] = Constant.d2CoordinateUtils.setCanvasSourceNativePixelPos2ScenePhysicsPos([
        Constant.environment.canvasWidth,
        -Constant.environment.canvasHeight
      ]);
      this._xLineShape = buildD2AssistLineShape(new Vector2(leftTopScenePhysicsX, 0), new Vector2(rightBottomScenePhysicsX, 0), {
        strokeColor: Color.LIGHT_STEE_BLUE,
        strokeWidth: this._strokeWidth,
        alpha: 1,
        isSolid: false
      });
      this._yLineShape = buildD2AssistLineShape(new Vector2(0, leftTopScenePhysicsY), new Vector2(0, rightBottomScenePhysicsY), {
        strokeColor: Color.LIGHT_STEE_BLUE,
        strokeWidth: this._strokeWidth,
        alpha: 1,
        isSolid: false
      });
      this._xLineShape.segSize = this._yLineShape.segSize = this._segSize;
      this._xLineShape.gapSize = this._yLineShape.gapSize = this._gapSize;
    }
    update(inputInfo) {
      const [leftTopScenePhysicsX, leftTopScenePhysicsY] = Constant.d2CoordinateUtils.setCanvasSourceNativePixelPos2ScenePhysicsPos([0, 0]);
      const [rightBottomScenePhysicsX, rightBottomScenePhysicsY] = Constant.d2CoordinateUtils.setCanvasSourceNativePixelPos2ScenePhysicsPos([
        Constant.environment.canvasWidth,
        -Constant.environment.canvasHeight
      ]);
      if (this._xLineShape) {
        this._xLineShape.startPoint = new Vector2(leftTopScenePhysicsX, inputInfo.moveScenePhysicsY);
        this._xLineShape.endPoint = new Vector2(rightBottomScenePhysicsX, inputInfo.moveScenePhysicsY);
      }
      if (this._yLineShape) {
        this._yLineShape.startPoint = new Vector2(inputInfo.moveScenePhysicsX, leftTopScenePhysicsY);
        this._yLineShape.endPoint = new Vector2(inputInfo.moveScenePhysicsX, rightBottomScenePhysicsY);
      }
    }
    destory() {
      this._xLineShape && this._xLineShape.setDelete();
      this._yLineShape && this._yLineShape.setDelete();
      this._xLineShape = null;
      this._yLineShape = null;
    }
    quit() {
      super.quit();
    }
  };

  // src/tool/draw/primitive2d/DrawD2ShapeTool.ts
  var DrawD2ShapeTool = class extends Tool {
    constructor(toolData) {
      super();
      this._isDrawing = false;
      this._hasMoveWhenAfterRightDown = false;
      this._toolData = toolData;
      this._lastMoveRealScenePhysicsX = 0;
      this._lastMoveRealScenePhysicsY = 0;
    }
    get hasMoveWhenAfterRightDown() {
      return this._hasMoveWhenAfterRightDown;
    }
    set hasMoveWhenAfterRightDown(value) {
      this._hasMoveWhenAfterRightDown = value;
    }
    get isDrawing() {
      return this._isDrawing;
    }
    set isDrawing(value) {
      this._isDrawing = value;
    }
    get d2CrossAssist() {
      return this._d2CrossAssist;
    }
    set d2CrossAssist(value) {
      this._d2CrossAssist = value;
    }
    get toolData() {
      return this._toolData;
    }
    set toolData(value) {
      this._toolData = value;
    }
    get lastMoveRealScenePhysicsX() {
      return this._lastMoveRealScenePhysicsX;
    }
    set lastMoveRealScenePhysicsX(value) {
      this._lastMoveRealScenePhysicsX = value;
    }
    get lastMoveRealScenePhysicsY() {
      return this._lastMoveRealScenePhysicsY;
    }
    set lastMoveRealScenePhysicsY(value) {
      this._lastMoveRealScenePhysicsY = value;
    }
    initAuxiliaryTools() {
      this.d2CrossAssist = new D2CrossAssist();
      this.d2CrossAssist.create();
      return this.d2CrossAssist;
    }
    destoryAuxiliaryTools() {
      if (this.d2CrossAssist) {
        this.d2CrossAssist.quit();
        this.d2CrossAssist = void 0;
      }
    }
  };

  // src/tool/draw/primitive2d/DrawD2Shape.ts
  var DrawD2Shape = class extends BaseInterface {
    constructor() {
      super();
      this._selectedDrawLayerShapeItem = null;
      this._strokeWidth = 2;
      this._strokeColor = Color.GOLDEN;
      this._isSolid = true;
      this._isFill = true;
      this._fillColor = Color.ORIGIN;
      this._inputInfo = null;
    }
    get selectedDrawLayerShapeItem() {
      return this._selectedDrawLayerShapeItem;
    }
    set selectedDrawLayerShapeItem(value) {
      this._selectedDrawLayerShapeItem = value;
    }
    get strokeWidth() {
      return this._strokeWidth;
    }
    set strokeWidth(value) {
      this._strokeWidth = value;
    }
    get strokeColor() {
      return this._strokeColor;
    }
    set strokeColor(value) {
      this._strokeColor = value;
    }
    get isSolid() {
      return this._isSolid;
    }
    set isSolid(value) {
      this._isSolid = value;
    }
    get isFill() {
      return this._isFill;
    }
    set isFill(value) {
      this._isFill = value;
    }
    get fillColor() {
      return this._fillColor;
    }
    set fillColor(value) {
      this._fillColor = value;
    }
    get inputInfo() {
      return this._inputInfo;
    }
    set inputInfo(value) {
      this._inputInfo = value;
    }
  };

  // src/tool/draw/primitive2d/drawD2LineShape/DrawD2LineShape.ts
  var DrawD2LineShape = class extends DrawD2Shape {
    constructor() {
      super();
      this._shapeInstances = [];
    }
    get shapeInstances() {
      return this._shapeInstances;
    }
    set shapeInstances(value) {
      this._shapeInstances = value;
    }
    completeDraw() {
      const drawedItems = [];
      if (this.shapeInstances.length) {
        for (let i = 0; i < this.shapeInstances.length; i++) {
          const targetShapeItem = this.shapeInstances[i];
          const elementItemId = Constant.globalIdenManager.getElementIden();
          const newTargetShapeItem = D2LineShapeManager.getInstance().createShapeItem(
            elementItemId,
            this.selectedDrawLayerShapeItem.model.layerItemId,
            targetShapeItem.startPoint,
            targetShapeItem.endPoint,
            __spreadProps(__spreadValues({}, targetShapeItem.toJSON()), {
              strokeWidth: this.strokeWidth,
              strokeColor: this.strokeColor
            })
          );
          drawedItems.push(newTargetShapeItem);
          targetShapeItem.setDelete();
        }
      }
      this.destoryShapes();
      return drawedItems;
    }
    cancelDraw() {
      this.destoryShapes();
    }
    updateShapes(inputInfo) {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        this.shapeInstances[i].endPoint = new Vector2(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      }
    }
    createShapes(x, y) {
      this.selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
      if (!this.selectedDrawLayerShapeItem) {
        console.warn(`[draw d2-element] please activate a draw-layer first.`);
        return;
      }
      this.shapeInstances.push(
        buildD2LineShape(this.selectedDrawLayerShapeItem.model.layerItemId, new Vector2(x, y), new Vector2(x, y), {
          strokeWidth: this.strokeWidth,
          strokeColor: this.strokeColor
        })
      );
    }
    destoryShapes() {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        this.shapeInstances[i].setDelete();
      }
      this.shapeInstances.length = 0;
    }
    quit() {
      this._shapeInstances = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2LineShape/DrawD2LineShapeTool.ts
  var DrawD2LineShapeTool = class extends DrawD2ShapeTool {
    constructor() {
      super({});
      this._drawShapeHandler = new DrawD2LineShape();
    }
    keyDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    keyUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      if (inputInfo.rightMouseDown) {
        this.hasMoveWhenAfterRightDown = true;
      }
      if (this.isDrawing) {
        this._drawShapeHandler.updateShapes(inputInfo);
      }
      this.lastMoveRealScenePhysicsX = inputInfo.moveRealScenePhysicsX;
      this.lastMoveRealScenePhysicsY = inputInfo.moveRealScenePhysicsY;
      const handlerAction = (nextTool) => {
        nextTool.mouseMoveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.isDrawing) {
        this.isDrawing = true;
        this._drawShapeHandler.createShapes(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      } else {
        this.isDrawing = false;
        const items = this._drawShapeHandler.completeDraw();
        for (let i = 0; i < items.length; i++) {
          Constant.operationController.addHistroyRecord(items[i].elementItemId, "ADD" /* ADD */);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.hasMoveWhenAfterRightDown) {
        this.isDrawing = false;
        this._drawShapeHandler.cancelDraw();
        Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
      }
      this.hasMoveWhenAfterRightDown = false;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseWheelHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeaveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseEnterHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    quit() {
      this.destoryAuxiliaryTools();
      this._drawShapeHandler.quit();
      this._drawShapeHandler = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2CircleShape/DrawD2CircleShape.ts
  var DrawD2CircleShape = class extends DrawD2Shape {
    constructor() {
      super();
      this._shapeInstances = [];
    }
    get shapeInstances() {
      return this._shapeInstances;
    }
    set shapeInstances(value) {
      this._shapeInstances = value;
    }
    completeDraw() {
      const drawedItems = [];
      if (this.shapeInstances.length) {
        for (let i = 0; i < this.shapeInstances.length; i++) {
          const targetShapeItem = this.shapeInstances[i];
          const elementItemId = Constant.globalIdenManager.getElementIden();
          const newTargetShapeItem = D2CircleShapeManager.getInstance().createShapeItem(
            elementItemId,
            this.selectedDrawLayerShapeItem.model.layerItemId,
            targetShapeItem.centerPoint,
            __spreadProps(__spreadValues({}, targetShapeItem.toJSON()), {
              strokeWidth: this.strokeWidth,
              strokeColor: this.strokeColor,
              isFill: this.isFill,
              fillColor: this.fillColor
            })
          );
          drawedItems.push(newTargetShapeItem);
          targetShapeItem.setDelete();
        }
      }
      this.destoryShapes();
      return drawedItems;
    }
    cancelDraw() {
      this.destoryShapes();
    }
    updateShapes(inputInfo) {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        const centerPoint = this.shapeInstances[i].centerPoint;
        const nowPoint = new Vector2(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
        this.shapeInstances[i].radius = nowPoint.sub(centerPoint).length;
      }
    }
    createShapes(x, y) {
      this.selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
      if (!this.selectedDrawLayerShapeItem) {
        console.warn(`[draw d2-element] please activate a draw-layer first.`);
        return;
      }
      this.shapeInstances.push(
        buildD2CircleShape(this.selectedDrawLayerShapeItem.model.layerItemId, new Vector2(x, y), {
          radius: 0,
          strokeWidth: this.strokeWidth,
          strokeColor: this.strokeColor,
          isFill: this.isFill,
          fillColor: this.fillColor
        })
      );
    }
    destoryShapes() {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        this.shapeInstances[i].setDelete();
      }
      this.shapeInstances.length = 0;
    }
    quit() {
      this._shapeInstances = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2CircleShape/DrawD2CircleShapeTool.ts
  var DrawD2CircleShapeTool = class extends DrawD2ShapeTool {
    constructor() {
      super({});
      this._drawShapeHandler = new DrawD2CircleShape();
    }
    keyDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    keyUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      if (inputInfo.rightMouseDown) {
        this.hasMoveWhenAfterRightDown = true;
      }
      if (this.isDrawing) {
        this._drawShapeHandler.updateShapes(inputInfo);
      }
      this.lastMoveRealScenePhysicsX = inputInfo.moveRealScenePhysicsX;
      this.lastMoveRealScenePhysicsY = inputInfo.moveRealScenePhysicsY;
      const handlerAction = (nextTool) => {
        nextTool.mouseMoveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.isDrawing) {
        this.isDrawing = true;
        this._drawShapeHandler.createShapes(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      } else {
        this.isDrawing = false;
        const items = this._drawShapeHandler.completeDraw();
        for (let i = 0; i < items.length; i++) {
          Constant.operationController.addHistroyRecord(items[i].elementItemId, "ADD" /* ADD */);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.hasMoveWhenAfterRightDown) {
        this.isDrawing = false;
        this._drawShapeHandler.cancelDraw();
        Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
      }
      this.hasMoveWhenAfterRightDown = false;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseWheelHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeaveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseEnterHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    quit() {
      this.destoryAuxiliaryTools();
      this._drawShapeHandler.quit();
      this._drawShapeHandler = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2ArcShape/DrawD2ArcShape.ts
  var DrawD2ArcShape = class extends DrawD2Shape {
    constructor() {
      super();
      this._shapeInstances = [];
      this._firstInitD2Lines = [];
      this._pointsGroup = [];
    }
    get shapeInstances() {
      return this._shapeInstances;
    }
    set shapeInstances(value) {
      this._shapeInstances = value;
    }
    get firstInitD2Lines() {
      return this._firstInitD2Lines;
    }
    set firstInitD2Lines(value) {
      this._firstInitD2Lines = value;
    }
    completeDraw() {
      const drawedItems = [];
      if (this.shapeInstances.length) {
        for (let i = 0; i < this.shapeInstances.length; i++) {
          const targetShapeItem = this.shapeInstances[i];
          const elementItemId = Constant.globalIdenManager.getElementIden();
          const { startRadian, endRadian, radius, centerPoint, sweep } = D2ArcToolkit.calculateD2ArcProfileByThreePoint(
            this._pointsGroup[i][0],
            this._pointsGroup[i][1],
            this._pointsGroup[i][2]
          );
          const newTargetShapeItem = D2ArcShapeManager.getInstance().createShapeItem(
            elementItemId,
            this.selectedDrawLayerShapeItem.model.layerItemId,
            centerPoint,
            radius,
            startRadian,
            endRadian,
            sweep,
            __spreadProps(__spreadValues({}, targetShapeItem.toJSON()), {
              strokeWidth: this.strokeWidth,
              strokeColor: this.strokeColor,
              isFill: this.isFill,
              fillColor: this.fillColor
            })
          );
          drawedItems.push(newTargetShapeItem);
          targetShapeItem.setDelete();
        }
      }
      this.clearFirstInitD2LineShapes();
      this.clearStartAndEndPoints();
      this.destoryShapes();
      return drawedItems;
    }
    cancelDraw() {
      this.clearFirstInitD2LineShapes();
      this.clearStartAndEndPoints();
      this.destoryShapes();
    }
    clearStartAndEndPoints() {
      this._pointsGroup.length = 0;
    }
    clearFirstInitD2LineShapes() {
      for (let i = 0; i < this._firstInitD2Lines.length; i++) {
        this._firstInitD2Lines[i].setDelete();
      }
      this._firstInitD2Lines.length = 0;
    }
    updateFirstInitD2LineShapes(inputInfo) {
      for (let i = 0; i < this._firstInitD2Lines.length; i++) {
        this._firstInitD2Lines[i].endPoint = new Vector2(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
        this._pointsGroup[i][1] = new Vector2(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      }
    }
    createFirstInitD2LineShapes(x, y) {
      this.selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
      if (!this.selectedDrawLayerShapeItem) {
        console.warn(`[draw d2-element] please activate a draw-layer first.`);
        return;
      }
      this._firstInitD2Lines.push(
        buildD2LineShape(this.selectedDrawLayerShapeItem.model.layerItemId, new Vector2(x, y), new Vector2(x, y), {
          strokeWidth: this.strokeWidth,
          strokeColor: this.strokeColor
        })
      );
      this._pointsGroup.push([new Vector2(x, y), new Vector2(x, y), null]);
    }
    updateShapes(inputInfo) {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        this._pointsGroup[i][2] = new Vector2(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
        const { startRadian, endRadian, radius, centerPoint, sweep } = D2ArcToolkit.calculateD2ArcProfileByThreePoint(
          this._pointsGroup[i][0],
          this._pointsGroup[i][1],
          this._pointsGroup[i][2]
        );
        this.shapeInstances[i].startRadian = startRadian;
        this.shapeInstances[i].endRadian = endRadian;
        this.shapeInstances[i].radius = radius;
        this.shapeInstances[i].sweep = sweep;
        this.shapeInstances[i].centerPoint = centerPoint;
      }
    }
    createShapes(x, y) {
      this.selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
      if (!this.selectedDrawLayerShapeItem) {
        console.warn(`[draw d2-element] please activate a draw-layer first.`);
        return;
      }
      for (let i = 0; i < this._firstInitD2Lines.length; i++) {
        this._pointsGroup[i][2] = new Vector2(x + 5e-3, y + 5e-3);
        const { startRadian, endRadian, radius, centerPoint, sweep } = D2ArcToolkit.calculateD2ArcProfileByThreePoint(
          this._pointsGroup[i][0],
          this._pointsGroup[i][1],
          this._pointsGroup[i][2]
        );
        this.shapeInstances.push(
          buildD2ArcShape(this.selectedDrawLayerShapeItem.model.layerItemId, centerPoint, radius, startRadian, endRadian, sweep, {
            strokeWidth: this.strokeWidth,
            strokeColor: this.strokeColor,
            isFill: this.isFill,
            fillColor: this.fillColor
          })
        );
      }
    }
    destoryShapes() {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        this.shapeInstances[i].setDelete();
      }
      this.shapeInstances.length = 0;
    }
    quit() {
      this._shapeInstances = void 0;
      this._firstInitD2Lines = void 0;
      this._pointsGroup = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2ArcShape/DrawD2ArcShapeTool.ts
  var DrawD2ArcShapeTool = class extends DrawD2ShapeTool {
    constructor() {
      super({});
      this._drawShapeHandler = new DrawD2ArcShape();
    }
    keyDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    keyUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      if (inputInfo.rightMouseDown) {
        this.hasMoveWhenAfterRightDown = true;
      }
      if (this.isDrawing) {
        if (this._drawShapeHandler.firstInitD2Lines.length) {
          this._drawShapeHandler.updateFirstInitD2LineShapes(inputInfo);
        } else {
          this._drawShapeHandler.updateShapes(inputInfo);
        }
      }
      this.lastMoveRealScenePhysicsX = inputInfo.moveRealScenePhysicsX;
      this.lastMoveRealScenePhysicsY = inputInfo.moveRealScenePhysicsY;
      const handlerAction = (nextTool) => {
        nextTool.mouseMoveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.isDrawing) {
        this.isDrawing = true;
        this._drawShapeHandler.createFirstInitD2LineShapes(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      } else {
        if (this._drawShapeHandler.firstInitD2Lines.length) {
          this._drawShapeHandler.createShapes(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
          this._drawShapeHandler.clearFirstInitD2LineShapes();
          return;
        }
        this.isDrawing = false;
        const items = this._drawShapeHandler.completeDraw();
        for (let i = 0; i < items.length; i++) {
          Constant.operationController.addHistroyRecord(items[i].elementItemId, "ADD" /* ADD */);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.hasMoveWhenAfterRightDown) {
        this.isDrawing = false;
        this._drawShapeHandler.cancelDraw();
        Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
      }
      this.hasMoveWhenAfterRightDown = false;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseWheelHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeaveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseEnterHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    quit() {
      this.destoryAuxiliaryTools();
      this._drawShapeHandler.quit();
      this._drawShapeHandler = void 0;
    }
  };

  // src/tool/draw/BaseDrawToolManager.ts
  var BaseDrawToolManager = class extends BaseInterface {
    constructor() {
      super();
      this._frameToolHandler = null;
    }
    get frameToolHandler() {
      return this._frameToolHandler;
    }
    set frameToolHandler(value) {
      this._frameToolHandler = value;
    }
  };

  // src/tool/draw/primitive2d/drawD2TextShape/DrawD2TextShape.ts
  var DrawD2TextShape = class extends DrawD2Shape {
    constructor() {
      super();
      this._shapeInstances = [];
    }
    get shapeInstances() {
      return this._shapeInstances;
    }
    set shapeInstances(value) {
      this._shapeInstances = value;
    }
    completeDraw() {
      const drawedItems = [];
      if (this.shapeInstances.length) {
        for (let i = 0; i < this.shapeInstances.length; i++) {
          const targetShapeItem = this.shapeInstances[i];
          const elementItemId = Constant.globalIdenManager.getElementIden();
          const newTargetShapeItem = D2TextShapeManager.getInstance().createShapeItem(
            elementItemId,
            this.selectedDrawLayerShapeItem.model.layerItemId,
            new Vector2(this.inputInfo.moveRealScenePhysicsX, this.inputInfo.moveRealScenePhysicsY),
            targetShapeItem.content,
            targetShapeItem.toJSON()
          );
          drawedItems.push(newTargetShapeItem);
          targetShapeItem.setDelete();
        }
      }
      this.destoryShapes();
      return drawedItems;
    }
    cancelDraw() {
      this.destoryShapes();
    }
    updateShapes(inputInfo, diffX, diffY) {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        const diffMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector3(diffX, diffY, 0));
        this.shapeInstances[i].transform(diffMatrix4);
      }
    }
    createShapes(x, y, textContent) {
      this.selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
      if (!this.selectedDrawLayerShapeItem) {
        console.warn(`[draw d2-element] please activate a draw-layer first.`);
        return;
      }
      const textShape = buildD2TextShape(
        this.selectedDrawLayerShapeItem.model.layerItemId,
        new Vector2(0, 0),
        textContent,
        {
          alpha: 0.5
        },
        (elementShapeItem) => {
          const x2 = this.inputInfo ? this.inputInfo.moveRealScenePhysicsX : 0;
          const y2 = this.inputInfo ? this.inputInfo.moveRealScenePhysicsY : 0;
          elementShapeItem.transform(CanvasMatrix4.setTranslateByVector3(new Vector3(x2, y2, 0)));
          Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
        }
      );
      this.shapeInstances.push(textShape);
    }
    destoryShapes() {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        this.shapeInstances[i].setDelete();
      }
      this.shapeInstances.length = 0;
    }
    isShapeInsatncesContentReady() {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        if (!this.shapeInstances[i].isContentReady()) {
          return false;
        }
      }
      return true;
    }
    quit() {
      this._shapeInstances = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2TextShape/DrawD2TextShapeTool.ts
  var DrawD2TextShapeTool = class extends DrawD2ShapeTool {
    constructor(toolData) {
      super(toolData);
      this._drawShapeHandler = new DrawD2TextShape();
      window.setTimeout(() => {
        this.isDrawing = true;
        this._drawShapeHandler.createShapes(0, 0, this.toolData.textContent);
      });
    }
    keyDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    keyUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      const diffX = inputInfo.moveRealScenePhysicsX - this.lastMoveRealScenePhysicsX;
      const diffY = inputInfo.moveRealScenePhysicsY - this.lastMoveRealScenePhysicsY;
      if (inputInfo.rightMouseDown) {
        this.hasMoveWhenAfterRightDown = true;
      }
      if (this.isDrawing) {
        this._drawShapeHandler.updateShapes(inputInfo, diffX, diffY);
      }
      this.lastMoveRealScenePhysicsX = inputInfo.moveRealScenePhysicsX;
      this.lastMoveRealScenePhysicsY = inputInfo.moveRealScenePhysicsY;
      const handlerAction = (nextTool) => {
        nextTool.mouseMoveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.isDrawing) {
        this.isDrawing = true;
        this._drawShapeHandler.createShapes(0, 0, this.toolData.textContent);
      } else {
        if (this._drawShapeHandler && this._drawShapeHandler.isShapeInsatncesContentReady()) {
          this.isDrawing = false;
          const items = this._drawShapeHandler.completeDraw();
          for (let i = 0; i < items.length; i++) {
            Constant.operationController.addHistroyRecord(items[i].elementItemId, "ADD" /* ADD */);
          }
          OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
          window.setTimeout(() => {
            this.isDrawing = true;
            this._drawShapeHandler.createShapes(0, 0, this.toolData.textContent);
          });
        } else {
          console.warn(`the data is being initialized and the element cannot be placed.`);
        }
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.hasMoveWhenAfterRightDown) {
        this.isDrawing = false;
        this._drawShapeHandler.cancelDraw();
        Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
      }
      this.hasMoveWhenAfterRightDown = false;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseWheelHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeaveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseEnterHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    quit() {
      this.destoryAuxiliaryTools();
      this._drawShapeHandler.quit();
      this._drawShapeHandler = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2ImageShape/DrawD2ImageShape.ts
  var DrawD2ImageShape = class extends DrawD2Shape {
    constructor() {
      super();
      this._shapeInstances = [];
    }
    get shapeInstances() {
      return this._shapeInstances;
    }
    set shapeInstances(value) {
      this._shapeInstances = value;
    }
    completeDraw() {
      const drawedItems = [];
      if (this.shapeInstances.length) {
        for (let i = 0; i < this.shapeInstances.length; i++) {
          const targetShapeItem = this.shapeInstances[i];
          const elementItemId = Constant.globalIdenManager.getElementIden();
          const newTargetShapeItem = D2ImageShapeManager.getInstance().createShapeItem(
            elementItemId,
            this.selectedDrawLayerShapeItem.model.layerItemId,
            new Vector2(this.inputInfo.moveRealScenePhysicsX, this.inputInfo.moveRealScenePhysicsY),
            targetShapeItem.fileHashUuid,
            targetShapeItem.imageDataURL,
            targetShapeItem.width,
            targetShapeItem.height,
            targetShapeItem.toJSON()
          );
          drawedItems.push(newTargetShapeItem);
          targetShapeItem.setDelete();
        }
      }
      this.destoryShapes();
      return drawedItems;
    }
    cancelDraw() {
      this.destoryShapes();
    }
    updateShapes(inputInfo, diffX, diffY) {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        const moveMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector3(diffX, diffY, 0));
        this.shapeInstances[i].transform(moveMatrix4);
      }
    }
    createShapes(x, y, fileHashUuid, imageDataURL, width, height) {
      this.selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
      if (!this.selectedDrawLayerShapeItem) {
        console.warn(`[draw d2-element] please activate a draw-layer first.`);
        return;
      }
      const textShape = buildD2ImageShape(
        this.selectedDrawLayerShapeItem.model.layerItemId,
        new Vector2(x, y),
        fileHashUuid,
        imageDataURL,
        width,
        height,
        {
          alpha: 0.75
        },
        (elementShapeItem) => {
          const x2 = this.inputInfo ? this.inputInfo.moveRealScenePhysicsX : 0;
          const y2 = this.inputInfo ? this.inputInfo.moveRealScenePhysicsY : 0;
          elementShapeItem.position = new Vector2(x2, y2);
          Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
        }
      );
      this.shapeInstances.push(textShape);
    }
    destoryShapes() {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        this.shapeInstances[i].setDelete();
      }
      this.shapeInstances.length = 0;
    }
    isShapeInsatncesContentReady() {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        if (!this.shapeInstances[i].isContentReady()) {
          return false;
        }
      }
      return true;
    }
    quit() {
      this._shapeInstances = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2ImageShape/DrawD2ImageShapeTool.ts
  var DrawD2ImageShapeTool = class extends DrawD2ShapeTool {
    constructor(toolData) {
      super(toolData);
      this._drawShapeHandler = new DrawD2ImageShape();
      window.setTimeout(() => {
        this.isDrawing = true;
        this._drawShapeHandler.createShapes(
          0,
          0,
          this.toolData.fileHashUuid,
          this.toolData.imageDataURL,
          this.toolData.width,
          this.toolData.height
        );
      });
    }
    keyDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    keyUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      const diffX = inputInfo.moveRealScenePhysicsX - this.lastMoveRealScenePhysicsX;
      const diffY = inputInfo.moveRealScenePhysicsY - this.lastMoveRealScenePhysicsY;
      if (inputInfo.rightMouseDown) {
        this.hasMoveWhenAfterRightDown = true;
      }
      if (this.isDrawing) {
        this._drawShapeHandler.updateShapes(inputInfo, diffX, diffY);
      }
      this.lastMoveRealScenePhysicsX = inputInfo.moveRealScenePhysicsX;
      this.lastMoveRealScenePhysicsY = inputInfo.moveRealScenePhysicsY;
      const handlerAction = (nextTool) => {
        nextTool.mouseMoveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.isDrawing) {
        this.isDrawing = true;
        this._drawShapeHandler.createShapes(
          inputInfo.moveRealScenePhysicsX,
          inputInfo.moveRealScenePhysicsY,
          this.toolData.fileHashUuid,
          this.toolData.imageDataURL,
          this.toolData.width,
          this.toolData.height
        );
      } else {
        if (this._drawShapeHandler && this._drawShapeHandler.isShapeInsatncesContentReady()) {
          this.isDrawing = false;
          const items = this._drawShapeHandler.completeDraw();
          for (let i = 0; i < items.length; i++) {
            Constant.operationController.addHistroyRecord(items[i].elementItemId, "ADD" /* ADD */);
          }
          OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
          window.setTimeout(() => {
            this.isDrawing = true;
            this._drawShapeHandler.createShapes(
              inputInfo.moveRealScenePhysicsX,
              inputInfo.moveRealScenePhysicsY,
              this.toolData.fileHashUuid,
              this.toolData.imageDataURL,
              this.toolData.width,
              this.toolData.height
            );
          });
        } else {
          console.warn(`the data is being initialized and the element cannot be placed.`);
        }
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.hasMoveWhenAfterRightDown) {
        this.isDrawing = false;
        this._drawShapeHandler.cancelDraw();
        Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
      }
      this.hasMoveWhenAfterRightDown = false;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseWheelHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeaveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseEnterHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    quit() {
      this.destoryAuxiliaryTools();
      this._drawShapeHandler.quit();
      this._drawShapeHandler = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2PointShape/DrawD2PointShape.ts
  var DrawD2PointShape = class extends DrawD2Shape {
    constructor() {
      super();
      this._shapeInstances = [];
    }
    get shapeInstances() {
      return this._shapeInstances;
    }
    set shapeInstances(value) {
      this._shapeInstances = value;
    }
    completeDraw() {
      const drawedItems = [];
      if (this.shapeInstances.length) {
        for (let i = 0; i < this.shapeInstances.length; i++) {
          const targetShapeItem = this.shapeInstances[i];
          const elementItemId = Constant.globalIdenManager.getElementIden();
          const newTargetShapeItem = D2PointShapeManager.getInstance().createShapeItem(
            elementItemId,
            this.selectedDrawLayerShapeItem.model.layerItemId,
            targetShapeItem.centerPoint,
            __spreadProps(__spreadValues({}, targetShapeItem.toJSON()), {
              isEnableScale: true
            })
          );
          drawedItems.push(newTargetShapeItem);
          targetShapeItem.setDelete();
        }
      }
      this.destoryShapes();
      return drawedItems;
    }
    cancelDraw() {
      this.destoryShapes();
    }
    updateShapes(inputInfo) {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        const centerPoint = this.shapeInstances[i].centerPoint;
        const nowPoint = new Vector2(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
        this.shapeInstances[i].size = nowPoint.sub(centerPoint).length;
      }
    }
    createShapes(x, y) {
      this.selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
      if (!this.selectedDrawLayerShapeItem) {
        console.warn(`[draw d2-element] please activate a draw-layer first.`);
        return;
      }
      this.shapeInstances.push(
        buildD2PointShape(this.selectedDrawLayerShapeItem.model.layerItemId, new Vector2(x, y), {
          size: 1
        })
      );
    }
    destoryShapes() {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        this.shapeInstances[i].setDelete();
      }
      this.shapeInstances.length = 0;
    }
    quit() {
      this._shapeInstances = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2PointShape/DrawD2PointShapeTool.ts
  var DrawD2PointShapeTool = class extends DrawD2ShapeTool {
    constructor() {
      super({});
      this._drawShapeHandler = new DrawD2PointShape();
    }
    keyDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    keyUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      if (inputInfo.rightMouseDown) {
        this.hasMoveWhenAfterRightDown = true;
      }
      if (this.isDrawing) {
        this._drawShapeHandler.updateShapes(inputInfo);
      }
      this.lastMoveRealScenePhysicsX = inputInfo.moveRealScenePhysicsX;
      this.lastMoveRealScenePhysicsY = inputInfo.moveRealScenePhysicsY;
      const handlerAction = (nextTool) => {
        nextTool.mouseMoveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.isDrawing) {
        this.isDrawing = true;
        this._drawShapeHandler.createShapes(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      } else {
        this.isDrawing = false;
        const items = this._drawShapeHandler.completeDraw();
        for (let i = 0; i < items.length; i++) {
          Constant.operationController.addHistroyRecord(items[i].elementItemId, "ADD" /* ADD */);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.hasMoveWhenAfterRightDown) {
        this.isDrawing = false;
        this._drawShapeHandler.cancelDraw();
        Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
      }
      this.hasMoveWhenAfterRightDown = false;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseWheelHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeaveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseEnterHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    quit() {
      this._drawShapeHandler.quit();
      this._drawShapeHandler = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2RectShape/DrawD2RectShape.ts
  var DrawD2RectShape = class extends DrawD2Shape {
    constructor() {
      super();
      this._shapeInstances = [];
    }
    get shapeInstances() {
      return this._shapeInstances;
    }
    set shapeInstances(value) {
      this._shapeInstances = value;
    }
    completeDraw() {
      const drawedItems = [];
      if (this.shapeInstances.length) {
        for (let i = 0; i < this.shapeInstances.length; i++) {
          const targetShapeItem = this.shapeInstances[i];
          const elementItemId = Constant.globalIdenManager.getElementIden();
          const newTargetShapeItem = D2RectShapeManager.getInstance().createShapeItem(
            elementItemId,
            this.selectedDrawLayerShapeItem.model.layerItemId,
            targetShapeItem.position,
            targetShapeItem.width,
            targetShapeItem.height,
            __spreadProps(__spreadValues({}, targetShapeItem.toJSON()), {
              strokeWidth: this.strokeWidth,
              strokeColor: this.strokeColor
            })
          );
          drawedItems.push(newTargetShapeItem);
          targetShapeItem.setDelete();
        }
      }
      this.destoryShapes();
      return drawedItems;
    }
    cancelDraw() {
      this.destoryShapes();
    }
    updateShapes(inputInfo) {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        const width = inputInfo.moveScenePhysicsX - this.shapeInstances[i].position.x;
        const height = inputInfo.moveScenePhysicsY - this.shapeInstances[i].position.y;
        this.shapeInstances[i].width = width;
        this.shapeInstances[i].height = -height;
      }
    }
    createShapes(x, y) {
      this.selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
      if (!this.selectedDrawLayerShapeItem) {
        console.warn(`[draw d2-element] please activate a draw-layer first.`);
        return;
      }
      this.shapeInstances.push(
        buildD2RectShape(this.selectedDrawLayerShapeItem.model.layerItemId, new Vector2(x, y), 0, 0, {
          strokeWidth: this.strokeWidth,
          strokeColor: this.strokeColor,
          isFill: false
        })
      );
    }
    destoryShapes() {
      for (let i = 0; i < this.shapeInstances.length; i++) {
        this.shapeInstances[i].setDelete();
      }
      this.shapeInstances.length = 0;
    }
    quit() {
      this._shapeInstances = void 0;
    }
  };

  // src/tool/draw/primitive2d/drawD2RectShape/DrawD2RectShapeTool.ts
  var DrawD2RectShapeTool = class extends DrawD2ShapeTool {
    constructor() {
      super({});
      this._drawShapeHandler = new DrawD2RectShape();
    }
    keyDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    keyUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.keyUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightDownHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      const diffX = inputInfo.moveRealScenePhysicsX - this.lastMoveRealScenePhysicsX;
      const diffY = inputInfo.moveRealScenePhysicsY - this.lastMoveRealScenePhysicsY;
      if (inputInfo.rightMouseDown) {
        this.hasMoveWhenAfterRightDown = true;
      }
      if (this.isDrawing) {
        this._drawShapeHandler.updateShapes(inputInfo);
      }
      this.lastMoveRealScenePhysicsX = inputInfo.moveRealScenePhysicsX;
      this.lastMoveRealScenePhysicsY = inputInfo.moveRealScenePhysicsY;
      const handlerAction = (nextTool) => {
        nextTool.mouseMoveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.isDrawing) {
        this.isDrawing = true;
        this._drawShapeHandler.createShapes(inputInfo.moveScenePhysicsX, inputInfo.moveScenePhysicsY);
      } else {
        this.isDrawing = false;
        const items = this._drawShapeHandler.completeDraw();
        for (let i = 0; i < items.length; i++) {
          Constant.operationController.addHistroyRecord(items[i].elementItemId, "ADD" /* ADD */);
        }
        OutProfileMessage.dispatchOperationProfileChangeMessage("CREATE_ELEMENT" /* CREATE_ELEMENT */, {});
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (!this.hasMoveWhenAfterRightDown) {
        this.isDrawing = false;
        this._drawShapeHandler.cancelDraw();
        Constant.messageTool.messageBus.publish("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, { type: "BLANK_DROP" /* BLANK_DROP */ });
      }
      this.hasMoveWhenAfterRightDown = false;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightUpHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      if (this.d2CrossAssist) {
        this.d2CrossAssist.update(inputInfo);
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseWheelHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeaveHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
      this._drawShapeHandler.inputInfo = inputInfo;
      const handlerAction = (nextTool) => {
        nextTool.mouseEnterHandler(inputInfo);
      };
      this.handler(handlerAction);
    }
    quit() {
      this.destoryAuxiliaryTools();
      this._drawShapeHandler.quit();
      this._drawShapeHandler = void 0;
    }
  };

  // src/tool/draw/primitive2d/DrawD2ToolManager.ts
  var DrawD2ToolManager = class extends BaseDrawToolManager {
    constructor() {
      super();
      Constant.messageTool.messageBus.subscribe("SWITCH_DRAW_TOOL" /* SWITCH_DRAW_TOOL */, this.update.bind(this));
    }
    update(params) {
      const { type, data } = params;
      switch (type) {
        case "BLANK_DROP" /* BLANK_DROP */: {
          const selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
          if (!selectedDrawLayerShapeItem) {
            console.warn(`[${type}] please activate a draw-layer first.`);
            break;
          }
          console.warn(`\u8FDB\u5165\u9009\u62E9\u6A21\u5F0F.`);
          Constant.selectManager.clearAllSelectItems();
          this.frameToolHandler.nextTool = Constant.dropDragTool;
          this.frameToolHandler.nextTool.drawing = false;
          if (this.frameToolHandler.auxiliaryTool) {
            this.frameToolHandler.auxiliaryTool.destory();
            this.frameToolHandler.auxiliaryTool = null;
          }
          break;
        }
        case "D2LINE" /* D2LINE */: {
          const selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
          if (!selectedDrawLayerShapeItem) {
            console.warn(`[${type}] please activate a draw-layer first.`);
            break;
          }
          console.warn(`\u8FDB\u5165\u7ED8\u5236\u6A21\u5F0F: \u7ED8\u5236 ${type}.`);
          Constant.selectManager.clearAllSelectItems();
          if (!(this.frameToolHandler.nextTool instanceof DrawD2LineShapeTool)) {
            if (this.frameToolHandler.auxiliaryTool) {
              this.frameToolHandler.auxiliaryTool.destory();
            }
            const newNextTool = new DrawD2LineShapeTool();
            this.frameToolHandler.auxiliaryTool = newNextTool.initAuxiliaryTools();
            this.frameToolHandler.nextTool = newNextTool;
            this.frameToolHandler.nextTool.drawing = true;
          }
          break;
        }
        case "D2CIRCLE" /* D2CIRCLE */: {
          const selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
          if (!selectedDrawLayerShapeItem) {
            console.warn(`[${type}] please activate a draw-layer first.`);
            break;
          }
          console.warn(`\u8FDB\u5165\u7ED8\u5236\u6A21\u5F0F: \u7ED8\u5236 ${type}.`);
          Constant.selectManager.clearAllSelectItems();
          if (!(this.frameToolHandler.nextTool instanceof DrawD2CircleShapeTool)) {
            if (this.frameToolHandler.auxiliaryTool) {
              this.frameToolHandler.auxiliaryTool.destory();
            }
            const newNextTool = new DrawD2CircleShapeTool();
            this.frameToolHandler.auxiliaryTool = newNextTool.initAuxiliaryTools();
            this.frameToolHandler.nextTool = newNextTool;
            this.frameToolHandler.nextTool.drawing = true;
          }
          break;
        }
        case "D2POINT" /* D2POINT */: {
          const selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
          if (!selectedDrawLayerShapeItem) {
            console.warn(`[${type}] please activate a draw-layer first.`);
            break;
          }
          console.warn(`\u8FDB\u5165\u7ED8\u5236\u6A21\u5F0F: \u7ED8\u5236 ${type}.`);
          Constant.selectManager.clearAllSelectItems();
          if (!(this.frameToolHandler.nextTool instanceof DrawD2PointShapeTool)) {
            if (this.frameToolHandler.auxiliaryTool) {
              this.frameToolHandler.auxiliaryTool.destory();
            }
            const newNextTool = new DrawD2PointShapeTool();
            this.frameToolHandler.auxiliaryTool = newNextTool.initAuxiliaryTools();
            this.frameToolHandler.nextTool = newNextTool;
            this.frameToolHandler.nextTool.drawing = true;
          }
          break;
        }
        case "D2ARC" /* D2ARC */: {
          const selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
          if (!selectedDrawLayerShapeItem) {
            console.warn(`[${type}] please activate a draw-layer first.`);
            break;
          }
          console.warn(`\u8FDB\u5165\u7ED8\u5236\u6A21\u5F0F: \u7ED8\u5236 ${type}.`);
          Constant.selectManager.clearAllSelectItems();
          if (!(this.frameToolHandler.nextTool instanceof DrawD2ArcShapeTool)) {
            if (this.frameToolHandler.auxiliaryTool) {
              this.frameToolHandler.auxiliaryTool.destory();
            }
            const newNextTool = new DrawD2ArcShapeTool();
            this.frameToolHandler.auxiliaryTool = newNextTool.initAuxiliaryTools();
            this.frameToolHandler.nextTool = newNextTool;
            this.frameToolHandler.nextTool.drawing = true;
          }
          break;
        }
        case "D2TEXT" /* D2TEXT */: {
          const selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
          if (!selectedDrawLayerShapeItem) {
            console.warn(`[${type}] please activate a draw-layer first.`);
            break;
          }
          console.warn(`\u8FDB\u5165\u7ED8\u5236\u6A21\u5F0F: \u7ED8\u5236 ${type}.`);
          Constant.selectManager.clearAllSelectItems();
          if (!(this.frameToolHandler.nextTool instanceof DrawD2TextShapeTool)) {
            if (this.frameToolHandler.auxiliaryTool) {
              this.frameToolHandler.auxiliaryTool.destory();
            }
            const newNextTool = new DrawD2TextShapeTool(data);
            this.frameToolHandler.auxiliaryTool = newNextTool.initAuxiliaryTools();
            this.frameToolHandler.nextTool = newNextTool;
            this.frameToolHandler.nextTool.drawing = true;
          }
          break;
        }
        case "D2IMAGE" /* D2IMAGE */: {
          const selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
          if (!selectedDrawLayerShapeItem) {
            console.warn(`[${type}] please activate a draw-layer first.`);
            break;
          }
          console.warn(`\u8FDB\u5165\u7ED8\u5236\u6A21\u5F0F: \u7ED8\u5236 ${type}.`);
          Constant.selectManager.clearAllSelectItems();
          if (!(this.frameToolHandler.nextTool instanceof DrawD2ImageShapeTool)) {
            if (this.frameToolHandler.auxiliaryTool) {
              this.frameToolHandler.auxiliaryTool.destory();
            }
            const newNextTool = new DrawD2ImageShapeTool(data);
            this.frameToolHandler.auxiliaryTool = newNextTool.initAuxiliaryTools();
            this.frameToolHandler.nextTool = newNextTool;
            this.frameToolHandler.nextTool.drawing = true;
          }
          break;
        }
        case "D2RECT" /* D2RECT */: {
          const selectedDrawLayerShapeItem = DrawLayerShapeManager.getInstance().getFirstSelectedItem();
          if (!selectedDrawLayerShapeItem) {
            console.warn(`[${type}] please activate a draw-layer first.`);
            break;
          }
          console.warn(`\u8FDB\u5165\u7ED8\u5236\u6A21\u5F0F: \u7ED8\u5236 ${type}.`);
          Constant.selectManager.clearAllSelectItems();
          if (!(this.frameToolHandler.nextTool instanceof DrawD2RectShapeTool)) {
            if (this.frameToolHandler.auxiliaryTool) {
              this.frameToolHandler.auxiliaryTool.destory();
            }
            const newNextTool = new DrawD2RectShapeTool();
            this.frameToolHandler.auxiliaryTool = newNextTool.initAuxiliaryTools();
            this.frameToolHandler.nextTool = newNextTool;
            this.frameToolHandler.nextTool.drawing = true;
          }
          break;
        }
        default:
      }
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
    }
    quit() {
    }
  };

  // src/tool/InputInfo.ts
  var InputContext = class {
    constructor() {
      this._type = "";
      this._keyCode = -1;
      this._leftDownSourceNativePixelX = 0;
      this._leftDownSourceNativePixelY = 0;
      this._middleDownSourceNativePixelX = 0;
      this._middleDownSourceNativePixelY = 0;
      this._rightDownSourceNativePixelX = 0;
      this._rightDownSourceNativePixelY = 0;
      this._moveSourceNativePixelX = 0;
      this._moveSourceNativePixelY = 0;
      this._deltaSourceNativePixelX = 0;
      this._deltaSourceNativePixelY = 0;
      this._leftDownScenePixelX = 0;
      this._leftDownScenePixelY = 0;
      this._middleDownScenePixelX = 0;
      this._middleDownScenePixelY = 0;
      this._rightDownScenePixelX = 0;
      this._rightDownScenePixelY = 0;
      this._moveScenePixelX = 0;
      this._moveScenePixelY = 0;
      this._leftDownScenePhysicsX = 0;
      this._leftDownScenePhysicsY = 0;
      this._middleDownScenePhysicsX = 0;
      this._middleDownScenePhysicsY = 0;
      this._rightDownScenePhysicsX = 0;
      this._rightDownScenePhysicsY = 0;
      this._moveScenePhysicsX = 0;
      this._moveScenePhysicsY = 0;
      this._leftDownRealScenePhysicsX = 0;
      this._leftDownRealScenePhysicsY = 0;
      this._middleDownRealScenePhysicsX = 0;
      this._middleDownRealScenePhysicsY = 0;
      this._rightDownRealScenePhysicsX = 0;
      this._rightDownRealScenePhysicsY = 0;
      this._moveRealScenePhysicsX = 0;
      this._moveRealScenePhysicsY = 0;
      this._shiftKey = false;
      this._ctrlKey = false;
      this._altKey = false;
      this._metaKey = false;
      this._rightMouseDown = false;
      this._middleMouseDown = false;
      this._leftMouseDown = false;
      this._mouseTimeStamp = 0;
    }
    get type() {
      return this._type;
    }
    set type(value) {
      this._type = value;
    }
    get keyCode() {
      return this._keyCode;
    }
    set keyCode(value) {
      this._keyCode = value;
    }
    /************************************************************/
    /************************************************************/
    get leftDownSourceNativePixelX() {
      return this._leftDownSourceNativePixelX;
    }
    set leftDownSourceNativePixelX(value) {
      this._leftDownSourceNativePixelX = value;
    }
    get leftDownSourceNativePixelY() {
      return this._leftDownSourceNativePixelY;
    }
    set leftDownSourceNativePixelY(value) {
      this._leftDownSourceNativePixelY = value;
    }
    get middleDownSourceNativePixelX() {
      return this._middleDownSourceNativePixelX;
    }
    set middleDownSourceNativePixelX(value) {
      this._middleDownSourceNativePixelX = value;
    }
    get middleDownSourceNativePixelY() {
      return this._middleDownSourceNativePixelY;
    }
    set middleDownSourceNativePixelY(value) {
      this._middleDownSourceNativePixelY = value;
    }
    get rightDownSourceNativePixelX() {
      return this._rightDownSourceNativePixelX;
    }
    set rightDownSourceNativePixelX(value) {
      this._rightDownSourceNativePixelX = value;
    }
    get rightDownSourceNativePixelY() {
      return this._rightDownSourceNativePixelY;
    }
    set rightDownSourceNativePixelY(value) {
      this._rightDownSourceNativePixelY = value;
    }
    /************************************************************/
    /************************************************************/
    get moveSourceNativePixelX() {
      return this._moveSourceNativePixelX;
    }
    set moveSourceNativePixelX(value) {
      this._moveSourceNativePixelX = value;
    }
    get moveSourceNativePixelY() {
      return this._moveSourceNativePixelY;
    }
    set moveSourceNativePixelY(value) {
      this._moveSourceNativePixelY = value;
    }
    /************************************************************/
    /************************************************************/
    get deltaSourceNativePixelX() {
      return this._deltaSourceNativePixelX;
    }
    set deltaSourceNativePixelX(value) {
      this._deltaSourceNativePixelX = value;
    }
    get deltaSourceNativePixelY() {
      return this._deltaSourceNativePixelY;
    }
    set deltaSourceNativePixelY(value) {
      this._deltaSourceNativePixelY = value;
    }
    /************************************************************/
    /************************************************************/
    get leftDownScenePixelX() {
      return this._leftDownScenePixelX;
    }
    set leftDownScenePixelX(value) {
      this._leftDownScenePixelX = value;
    }
    get leftDownScenePixelY() {
      return this._leftDownScenePixelY;
    }
    set leftDownScenePixelY(value) {
      this._leftDownScenePixelY = value;
    }
    get middleDownScenePixelX() {
      return this._middleDownScenePixelX;
    }
    set middleDownScenePixelX(value) {
      this._middleDownScenePixelX = value;
    }
    get middleDownScenePixelY() {
      return this._middleDownScenePixelY;
    }
    set middleDownScenePixelY(value) {
      this._middleDownScenePixelY = value;
    }
    get rightDownScenePixelX() {
      return this._rightDownScenePixelX;
    }
    set rightDownScenePixelX(value) {
      this._rightDownScenePixelX = value;
    }
    get rightDownScenePixelY() {
      return this._rightDownScenePixelY;
    }
    set rightDownScenePixelY(value) {
      this._rightDownScenePixelY = value;
    }
    /************************************************************/
    /************************************************************/
    get moveScenePixelX() {
      return this._moveScenePixelX;
    }
    set moveScenePixelX(value) {
      this._moveScenePixelX = value;
    }
    get moveScenePixelY() {
      return this._moveScenePixelY;
    }
    set moveScenePixelY(value) {
      this._moveScenePixelY = value;
    }
    /************************************************************/
    /************************************************************/
    get leftDownScenePhysicsX() {
      return this._leftDownScenePhysicsX;
    }
    set leftDownScenePhysicsX(value) {
      this._leftDownScenePhysicsX = value;
    }
    get leftDownScenePhysicsY() {
      return this._leftDownScenePhysicsY;
    }
    set leftDownScenePhysicsY(value) {
      this._leftDownScenePhysicsY = value;
    }
    get middleDownScenePhysicsX() {
      return this._middleDownScenePhysicsX;
    }
    set middleDownScenePhysicsX(value) {
      this._middleDownScenePhysicsX = value;
    }
    get middleDownScenePhysicsY() {
      return this._middleDownScenePhysicsY;
    }
    set middleDownScenePhysicsY(value) {
      this._middleDownScenePhysicsY = value;
    }
    get rightDownScenePhysicsX() {
      return this._rightDownScenePhysicsX;
    }
    set rightDownScenePhysicsX(value) {
      this._rightDownScenePhysicsX = value;
    }
    get rightDownScenePhysicsY() {
      return this._rightDownScenePhysicsY;
    }
    set rightDownScenePhysicsY(value) {
      this._rightDownScenePhysicsY = value;
    }
    /************************************************************/
    /************************************************************/
    get moveScenePhysicsX() {
      return this._moveScenePhysicsX;
    }
    set moveScenePhysicsX(value) {
      this._moveScenePhysicsX = value;
    }
    get moveScenePhysicsY() {
      return this._moveScenePhysicsY;
    }
    set moveScenePhysicsY(value) {
      this._moveScenePhysicsY = value;
    }
    /************************************************************/
    /************************************************************/
    get leftDownRealScenePhysicsX() {
      return this._leftDownRealScenePhysicsX;
    }
    set leftDownRealScenePhysicsX(value) {
      this._leftDownRealScenePhysicsX = value;
    }
    get leftDownRealScenePhysicsY() {
      return this._leftDownRealScenePhysicsY;
    }
    set leftDownRealScenePhysicsY(value) {
      this._leftDownRealScenePhysicsY = value;
    }
    get middleDownRealScenePhysicsX() {
      return this._middleDownRealScenePhysicsX;
    }
    set middleDownRealScenePhysicsX(value) {
      this._middleDownRealScenePhysicsX = value;
    }
    get middleDownRealScenePhysicsY() {
      return this._middleDownRealScenePhysicsY;
    }
    set middleDownRealScenePhysicsY(value) {
      this._middleDownRealScenePhysicsY = value;
    }
    get rightDownRealScenePhysicsX() {
      return this._rightDownRealScenePhysicsX;
    }
    set rightDownRealScenePhysicsX(value) {
      this._rightDownRealScenePhysicsX = value;
    }
    get rightDownRealScenePhysicsY() {
      return this._rightDownRealScenePhysicsY;
    }
    set rightDownRealScenePhysicsY(value) {
      this._rightDownRealScenePhysicsY = value;
    }
    /************************************************************/
    /************************************************************/
    get moveRealScenePhysicsX() {
      return this._moveRealScenePhysicsX;
    }
    set moveRealScenePhysicsX(value) {
      this._moveRealScenePhysicsX = value;
    }
    get moveRealScenePhysicsY() {
      return this._moveRealScenePhysicsY;
    }
    set moveRealScenePhysicsY(value) {
      this._moveRealScenePhysicsY = value;
    }
    /************************************************************/
    /************************************************************/
    get shiftKey() {
      return this._shiftKey;
    }
    set shiftKey(value) {
      this._shiftKey = value;
    }
    get ctrlKey() {
      return this._ctrlKey;
    }
    set ctrlKey(value) {
      this._ctrlKey = value;
    }
    get altKey() {
      return this._altKey;
    }
    set altKey(value) {
      this._altKey = value;
    }
    get metaKey() {
      return this._metaKey;
    }
    set metaKey(value) {
      this._metaKey = value;
    }
    /************************************************************/
    /************************************************************/
    get rightMouseDown() {
      return this._rightMouseDown;
    }
    set rightMouseDown(value) {
      this._rightMouseDown = value;
    }
    get middleMouseDown() {
      return this._middleMouseDown;
    }
    set middleMouseDown(value) {
      this._middleMouseDown = value;
    }
    get leftMouseDown() {
      return this._leftMouseDown;
    }
    set leftMouseDown(value) {
      this._leftMouseDown = value;
    }
    /************************************************************/
    /************************************************************/
    get mouseTimeStamp() {
      return this._mouseTimeStamp;
    }
    set mouseTimeStamp(value) {
      this._mouseTimeStamp = value;
    }
  };
  var InputInfo = class extends InputContext {
    constructor() {
      super();
      this._pointer = [];
    }
    get pointer() {
      return this._pointer;
    }
    set pointer(value) {
      this._pointer = value;
    }
    toJSON() {
      const data = {
        type: this.type,
        keyCode: this.keyCode,
        /* ... */
        leftDownSourceNativePixelX: this.leftDownSourceNativePixelX,
        leftDownSourceNativePixelY: this.leftDownSourceNativePixelY,
        middleDownSourceNativePixelX: this.middleDownSourceNativePixelX,
        middleDownSourceNativePixelY: this.middleDownSourceNativePixelY,
        rightDownSourceNativePixelX: this.rightDownSourceNativePixelX,
        rightDownSourceNativePixelY: this.rightDownSourceNativePixelY,
        /* ... */
        moveSourceNativePixelX: this.moveSourceNativePixelX,
        moveSourceNativePixelY: this.moveSourceNativePixelY,
        /* ... */
        deltaSourceNativePixelX: this.deltaSourceNativePixelX,
        deltaSourceNativePixelY: this.deltaSourceNativePixelY,
        /* ... */
        leftDownScenePixelX: this.leftDownScenePixelX,
        leftDownScenePixelY: this.leftDownScenePixelY,
        middleDownScenePixelX: this.middleDownScenePixelX,
        middleDownScenePixelY: this.middleDownScenePixelY,
        rightDownScenePixelX: this.rightDownScenePixelX,
        rightDownScenePixelY: this.rightDownScenePixelY,
        /* ... */
        moveScenePixelX: this.moveScenePixelX,
        moveScenePixelY: this.moveScenePixelY,
        /* ... */
        leftDownScenePhysicsX: this.leftDownScenePhysicsX,
        leftDownScenePhysicsY: this.leftDownScenePhysicsY,
        middleDownScenePhysicsX: this.middleDownScenePhysicsX,
        middleDownScenePhysicsY: this.middleDownScenePhysicsY,
        rightDownScenePhysicsX: this.rightDownScenePhysicsX,
        rightDownScenePhysicsY: this.rightDownScenePhysicsY,
        /* ... */
        moveScenePhysicsX: this.moveScenePhysicsX,
        moveScenePhysicsY: this.moveScenePhysicsY,
        /* ... */
        leftDownRealScenePhysicsX: this.leftDownRealScenePhysicsX,
        leftDownRealScenePhysicsY: this.leftDownRealScenePhysicsY,
        middleDownRealScenePhysicsX: this.middleDownRealScenePhysicsX,
        middleDownRealScenePhysicsY: this.middleDownRealScenePhysicsY,
        rightDownRealScenePhysicsX: this.rightDownRealScenePhysicsX,
        rightDownRealScenePhysicsY: this.rightDownRealScenePhysicsY,
        /* ... */
        moveRealScenePhysicsX: this.moveRealScenePhysicsX,
        moveRealScenePhysicsY: this.moveRealScenePhysicsY,
        /* ... */
        shiftKey: this.shiftKey,
        ctrlKey: this.ctrlKey,
        altKey: this.altKey,
        metaKey: this.metaKey,
        rightMouseDown: this.rightMouseDown,
        middleMouseDown: this.middleMouseDown,
        leftMouseDown: this.leftMouseDown,
        mouseTimeStamp: this.mouseTimeStamp
      };
      return data;
    }
  };

  // src/utils/SyncCanvasRect.ts
  var SyncCanvasRect = class {
    static syncCanvasRectByWindow(canvasElement) {
      const windowInnerWidth = window.innerWidth;
      const windowInnerHeight = window.innerHeight;
      canvasElement.width = windowInnerWidth;
      canvasElement.height = windowInnerHeight;
    }
  };

  // src/tool/EventsLoader.ts
  function updateMouseInputInfo(inputInfo) {
    const DPI = InsConfig.DPI;
    const [scenePixelPosX, scenePixelPosY] = Constant.d2CoordinateUtils.setCanvasSourceNativePixelPos2ScenePixelPos([
      inputInfo.moveSourceNativePixelX,
      -inputInfo.moveSourceNativePixelY
    ]);
    inputInfo.moveScenePixelX = scenePixelPosX;
    inputInfo.moveScenePixelY = scenePixelPosY;
    inputInfo.moveRealScenePhysicsX = inputInfo.moveScenePhysicsX = px2mm(inputInfo.moveScenePixelX, DPI[0]);
    inputInfo.moveRealScenePhysicsY = inputInfo.moveScenePhysicsY = px2mm(inputInfo.moveScenePixelY, DPI[1]);
    if (Constant.systemConfig.canvasAidedDesign.alignGrid) {
      const offset = Constant.adsorption.adsorpGrid(new Vector2(inputInfo.moveRealScenePhysicsX, inputInfo.moveRealScenePhysicsY));
    }
    if (inputInfo.type === "mousedown") {
      if (inputInfo.leftMouseDown) {
        inputInfo.leftDownScenePixelX = inputInfo.moveScenePixelX;
        inputInfo.leftDownScenePixelY = inputInfo.moveScenePixelY;
        inputInfo.leftDownScenePhysicsX = inputInfo.moveScenePhysicsX;
        inputInfo.leftDownScenePhysicsY = inputInfo.moveScenePhysicsY;
        inputInfo.leftDownRealScenePhysicsX = inputInfo.moveRealScenePhysicsX;
        inputInfo.leftDownRealScenePhysicsY = inputInfo.moveRealScenePhysicsY;
      }
      if (inputInfo.middleMouseDown) {
        inputInfo.middleDownScenePixelX = inputInfo.moveScenePixelX;
        inputInfo.middleDownScenePixelY = inputInfo.moveScenePixelY;
        inputInfo.middleDownScenePhysicsX = inputInfo.moveScenePhysicsX;
        inputInfo.middleDownScenePhysicsY = inputInfo.moveScenePhysicsY;
        inputInfo.middleDownRealScenePhysicsX = inputInfo.moveRealScenePhysicsX;
        inputInfo.middleDownRealScenePhysicsY = inputInfo.moveRealScenePhysicsY;
      }
      if (inputInfo.rightMouseDown) {
        inputInfo.rightDownScenePixelX = inputInfo.moveScenePixelX;
        inputInfo.rightDownScenePixelY = inputInfo.moveScenePixelY;
        inputInfo.rightDownScenePhysicsX = inputInfo.moveScenePhysicsX;
        inputInfo.rightDownScenePhysicsY = inputInfo.moveScenePhysicsY;
        inputInfo.rightDownRealScenePhysicsX = inputInfo.moveRealScenePhysicsX;
        inputInfo.rightDownRealScenePhysicsY = inputInfo.moveRealScenePhysicsY;
      }
    }
    if (inputInfo.type === "mouseup") {
      inputInfo.leftDownScenePixelX = null;
      inputInfo.leftDownScenePixelY = null;
      inputInfo.middleDownScenePixelX = null;
      inputInfo.middleDownScenePixelY = null;
      inputInfo.rightDownScenePixelX = null;
      inputInfo.rightDownScenePixelY = null;
      inputInfo.leftDownScenePhysicsX = null;
      inputInfo.leftDownScenePhysicsY = null;
      inputInfo.middleDownScenePhysicsX = null;
      inputInfo.middleDownScenePhysicsY = null;
      inputInfo.rightDownScenePhysicsX = null;
      inputInfo.rightDownScenePhysicsY = null;
      inputInfo.leftDownRealScenePhysicsX = null;
      inputInfo.leftDownRealScenePhysicsY = null;
      inputInfo.middleDownRealScenePhysicsX = null;
      inputInfo.middleDownRealScenePhysicsY = null;
      inputInfo.rightDownRealScenePhysicsX = null;
      inputInfo.rightDownRealScenePhysicsY = null;
    }
  }
  var MOUSE_LEFT_BUTTONS = 1;
  var MOUSE_RIGHT_BUTTONS = 2;
  var MOUSE_MIDDLE_BUTTONS = 4;
  var EventsLoader = class extends ToolChain {
    constructor(canvasElement) {
      super();
      this._canvasElement = canvasElement;
      this._inputInfo = new InputInfo();
      this._viewResizeHandlerScopeHandler = this.viewResizeHandler.bind(this);
      this._keyDownHandlerScopeHandler = this.keyDownHandler.bind(this);
      this._keyUpHandlerScopeHandler = this.keyUpHandler.bind(this);
      this._mouseDownHandlerScopeHandler = this.mouseDownHandler.bind(this);
      this._mouseMoveHandlerScopeHandler = this.mouseMoveHandler.bind(this);
      this._mouseUpHandlerScopeHandler = this.mouseUpHandler.bind(this);
      this._contextmenuHandlerScopeHandler = this.contextmenuHandler.bind(this);
      this._mouseWheelHandlerScopeHandler = this.mouseWheelHandler.bind(this);
      this._mouseLeaveHandlerScopeHandler = this.mouseLeaveHandler.bind(this);
      this._mouseEnterHandlerScopeHandler = this.mouseEnterHandler.bind(this);
    }
    init() {
      this.bindEvent();
    }
    get inputInfo() {
      return this._inputInfo;
    }
    get canvasElement() {
      return this._canvasElement;
    }
    getWindowRatio(ratio = window.devicePixelRatio) {
      return ratio > 1 ? ratio : 1;
    }
    bindEvent() {
      const canvasElement = this.canvasElement;
      window.addEventListener("resize", this._viewResizeHandlerScopeHandler);
      window.addEventListener("keydown", this._keyDownHandlerScopeHandler);
      window.addEventListener("keyup", this._keyUpHandlerScopeHandler);
      canvasElement.addEventListener("mousedown", this._mouseDownHandlerScopeHandler, false);
      canvasElement.addEventListener("mousemove", this._mouseMoveHandlerScopeHandler, false);
      canvasElement.addEventListener("mouseup", this._mouseUpHandlerScopeHandler, false);
      canvasElement.addEventListener("contextmenu", this._contextmenuHandlerScopeHandler, false);
      canvasElement.addEventListener("wheel", this._mouseWheelHandlerScopeHandler, false);
      canvasElement.addEventListener("mouseleave", this._mouseLeaveHandlerScopeHandler, false);
      canvasElement.addEventListener("mouseenter", this._mouseEnterHandlerScopeHandler, false);
    }
    quit() {
      const canvasElement = this.canvasElement;
      window.removeEventListener("resize", this._viewResizeHandlerScopeHandler);
      window.removeEventListener("keydown", this._keyDownHandlerScopeHandler);
      window.removeEventListener("keyup", this._keyUpHandlerScopeHandler);
      canvasElement.removeEventListener("mousedown", this._mouseDownHandlerScopeHandler, false);
      canvasElement.removeEventListener("mousemove", this._mouseMoveHandlerScopeHandler, false);
      canvasElement.removeEventListener("mouseup", this._mouseUpHandlerScopeHandler, false);
      canvasElement.removeEventListener("contextmenu", this._contextmenuHandlerScopeHandler, false);
      canvasElement.removeEventListener("wheel", this._mouseWheelHandlerScopeHandler, false);
      canvasElement.removeEventListener("mouseleave", this._mouseLeaveHandlerScopeHandler, false);
      canvasElement.removeEventListener("mouseenter", this._mouseEnterHandlerScopeHandler, false);
      this._canvasElement = void 0;
      this._inputInfo = void 0;
    }
    viewResizeHandler() {
      SyncCanvasRect.syncCanvasRectByWindow(this.canvasElement);
      const canvasRect = this.canvasElement.getBoundingClientRect().toJSON();
      Constant.environment.updateCanvasRectSize(canvasRect.width, canvasRect.height, canvasRect.left, canvasRect.top);
      const handlerAction = (nextTool) => {
        nextTool.viewResizeHandler(this.inputInfo, {
          distX: canvasRect.width - Constant.environment.canvasWidth,
          distY: canvasRect.height - Constant.environment.canvasHeight,
          canvasRect
        });
      };
      this.handler(handlerAction);
    }
    prepareSystemEventInputInfo(e) {
      e.preventDefault();
      const sourceOffsetX = e.offsetX * this.getWindowRatio();
      const sourceOffsetY = e.offsetY * this.getWindowRatio();
      this.inputInfo.mouseTimeStamp = e.timeStamp;
      this.inputInfo.type = e.type;
      this.inputInfo.moveSourceNativePixelX = sourceOffsetX;
      this.inputInfo.moveSourceNativePixelY = sourceOffsetY;
      this.inputInfo.ctrlKey = !!e.ctrlKey;
      this.inputInfo.altKey = !!e.altKey;
      this.inputInfo.shiftKey = !!e.shiftKey;
      this.inputInfo.metaKey = !!e.metaKey;
      this.inputInfo.deltaSourceNativePixelX = e.deltaX || 0;
      this.inputInfo.deltaSourceNativePixelY = e.deltaY || 0;
      if (e.type === "mousedown") {
        if (this.inputInfo.leftMouseDown === false) {
          this.inputInfo.leftDownSourceNativePixelX = sourceOffsetX;
          this.inputInfo.leftDownSourceNativePixelY = sourceOffsetY;
        }
        if (this.inputInfo.middleMouseDown === false) {
          this.inputInfo.middleDownSourceNativePixelX = sourceOffsetX;
          this.inputInfo.middleDownSourceNativePixelY = sourceOffsetY;
        }
        if (this.inputInfo.leftMouseDown === false) {
          this.inputInfo.rightDownSourceNativePixelX = sourceOffsetX;
          this.inputInfo.rightDownSourceNativePixelY = sourceOffsetY;
        }
        this.inputInfo.leftMouseDown = (e.buttons & MOUSE_LEFT_BUTTONS) > 0;
        this.inputInfo.rightMouseDown = (e.buttons & MOUSE_RIGHT_BUTTONS) > 0;
        this.inputInfo.middleMouseDown = (e.buttons & MOUSE_MIDDLE_BUTTONS) > 0;
      }
      if (e.type === "mouseup") {
        this.inputInfo.leftMouseDown = (e.buttons & MOUSE_LEFT_BUTTONS) > 0;
        this.inputInfo.rightMouseDown = (e.buttons & MOUSE_RIGHT_BUTTONS) > 0;
        this.inputInfo.middleMouseDown = (e.buttons & MOUSE_MIDDLE_BUTTONS) > 0;
        if (this.inputInfo.leftMouseDown === false) {
          this.inputInfo.leftDownSourceNativePixelX = null;
          this.inputInfo.leftDownSourceNativePixelY = null;
        }
        if (this.inputInfo.middleMouseDown === false) {
          this.inputInfo.middleDownSourceNativePixelX = null;
          this.inputInfo.middleDownSourceNativePixelY = null;
        }
        if (this.inputInfo.leftMouseDown === false) {
          this.inputInfo.rightDownSourceNativePixelX = null;
          this.inputInfo.rightDownSourceNativePixelY = null;
        }
      }
      updateMouseInputInfo(this.inputInfo);
    }
    prepareKeyboardEventInputInfo(e) {
      e.preventDefault();
      this.inputInfo.type = e.type;
      this.inputInfo.keyCode = e.keyCode;
      this.inputInfo.ctrlKey = !!e.ctrlKey;
      this.inputInfo.altKey = !!e.altKey;
      this.inputInfo.shiftKey = !!e.shiftKey;
      this.inputInfo.metaKey = !!e.metaKey;
      updateMouseInputInfo(this.inputInfo);
    }
    keyDownHandler(e) {
      this.prepareKeyboardEventInputInfo(e);
      const handlerAction = (nextTool) => {
        nextTool.keyDownHandler(this.inputInfo);
      };
      this.handler(handlerAction);
    }
    keyUpHandler(e) {
      this.prepareKeyboardEventInputInfo(e);
      const handlerAction = (nextTool) => {
        nextTool.keyUpHandler(this.inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseDownHandler(e) {
      this._canvasElement.focus();
      window.focus();
      this.prepareSystemEventInputInfo(e);
      let handlerAction;
      if (e.button === 0) {
        handlerAction = (nextTool) => {
          nextTool.mouseLeftDownHandler(this.inputInfo);
        };
      } else if (e.button === 1) {
        handlerAction = (nextTool) => {
          nextTool.mouseMiddleDownHandler(this.inputInfo);
        };
      } else if (e.button === 2) {
        handlerAction = (nextTool) => {
          nextTool.mouseRightDownHandler(this.inputInfo);
        };
      }
      handlerAction && this.handler(handlerAction);
    }
    mouseMoveHandler(e) {
      this.prepareSystemEventInputInfo(e);
      const handlerAction = (nextTool) => {
        nextTool.mouseMoveHandler(this.inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseUpHandler(e) {
      this.prepareSystemEventInputInfo(e);
      let handlerAction;
      if (e.button === 0) {
        handlerAction = (nextTool) => {
          nextTool.mouseLeftUpHandler(this.inputInfo);
        };
      } else if (e.button === 1) {
        handlerAction = (nextTool) => {
          nextTool.mouseMiddleUpHandler(this.inputInfo);
        };
      } else if (e.button === 2) {
        handlerAction = (nextTool) => {
          nextTool.mouseRightUpHandler(this.inputInfo);
        };
      }
      handlerAction && this.handler(handlerAction);
    }
    mouseWheelHandler(e) {
      this.prepareSystemEventInputInfo(e);
      const handlerAction = (nextTool) => {
        nextTool.mouseWheelHandler(this.inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseLeaveHandler(e) {
      this.prepareSystemEventInputInfo(e);
      const handlerAction = (nextTool) => {
        nextTool.mouseLeaveHandler(this.inputInfo);
      };
      this.handler(handlerAction);
    }
    mouseEnterHandler(e) {
      this.prepareSystemEventInputInfo(e);
      const handlerAction = (nextTool) => {
        nextTool.mouseEnterHandler(this.inputInfo);
      };
      this.handler(handlerAction);
    }
    contextmenuHandler(e) {
      e.preventDefault();
    }
  };

  // src/tool/frameTool/BaseFrameTool.ts
  var BaseFrameTool = class extends Tool {
    constructor() {
      super();
      this._camera = Camera.getInstance();
      this._isMouseRightDwon = false;
      this._isMouseMiddleDwon = false;
      this._isMouseLeftDwon = false;
      this._mouseRightPrevSourceNativePixelX = 0;
      this._mouseRightPrevSourceNativePixelY = 0;
      this._mouseMiddlePrevSourceNativePixelX = 0;
      this._mouseMiddlePrevSourceNativePixelY = 0;
      this._mouseLeftPrevSourceNativePixelX = 0;
      this._mouseLeftPrevSourceNativePixelY = 0;
      this._auxiliaryTool = null;
    }
    get camera() {
      return this._camera;
    }
    get isMouseRightDwon() {
      return this._isMouseRightDwon;
    }
    set isMouseRightDwon(value) {
      this._isMouseRightDwon = value;
    }
    get isMouseMiddleDwon() {
      return this._isMouseMiddleDwon;
    }
    set isMouseMiddleDwon(value) {
      this._isMouseMiddleDwon = value;
    }
    get isMouseLeftDwon() {
      return this._isMouseLeftDwon;
    }
    set isMouseLeftDwon(value) {
      this._isMouseLeftDwon = value;
    }
    get mouseRightPrevSourceNativePixelX() {
      return this._mouseRightPrevSourceNativePixelX;
    }
    set mouseRightPrevSourceNativePixelX(value) {
      this._mouseRightPrevSourceNativePixelX = value;
    }
    get mouseRightPrevSourceNativePixelY() {
      return this._mouseRightPrevSourceNativePixelY;
    }
    set mouseRightPrevSourceNativePixelY(value) {
      this._mouseRightPrevSourceNativePixelY = value;
    }
    get mouseMiddlePrevSourceNativePixelX() {
      return this._mouseMiddlePrevSourceNativePixelX;
    }
    set mouseMiddlePrevSourceNativePixelX(value) {
      this._mouseMiddlePrevSourceNativePixelX = value;
    }
    get mouseMiddlePrevSourceNativePixelY() {
      return this._mouseMiddlePrevSourceNativePixelY;
    }
    set mouseMiddlePrevSourceNativePixelY(value) {
      this._mouseMiddlePrevSourceNativePixelY = value;
    }
    get mouseLeftPrevSourceNativePixelX() {
      return this._mouseLeftPrevSourceNativePixelX;
    }
    set mouseLeftPrevSourceNativePixelX(value) {
      this._mouseLeftPrevSourceNativePixelX = value;
    }
    get mouseLeftPrevSourceNativePixelY() {
      return this._mouseLeftPrevSourceNativePixelY;
    }
    set mouseLeftPrevSourceNativePixelY(value) {
      this._mouseLeftPrevSourceNativePixelY = value;
    }
    get auxiliaryTool() {
      return this._auxiliaryTool;
    }
    set auxiliaryTool(value) {
      this._auxiliaryTool = value;
    }
    quit() {
      this._camera = void 0;
    }
  };

  // src/tool/frameTool/D2FrameTool.ts
  var D2FrameTool = class extends BaseFrameTool {
    constructor() {
      super();
      this._lastCanvasOffset = null;
    }
    init() {
      this.nextTool = Constant.dropDragTool;
      Constant.messageTool.messageBus.subscribe("SET_STATIC_REST" /* SET_STATIC_REST */, () => {
        this.isMouseLeftDwon = false;
        this.isMouseMiddleDwon = false;
        this.isMouseRightDwon = false;
        Constant.selectManager.clearAllSelectItems();
      });
    }
    viewResizeHandler(inputInfo, offset) {
      this.prepare(inputInfo);
      const newWidth = Constant.environment.canvasWidth;
      const newHeight = Constant.environment.canvasHeight;
      const oldWidth = newWidth - offset.distX;
      const oldHeight = newHeight - offset.distY;
      const oldRectVector2 = new Vector2(oldWidth, oldHeight);
      const newRectVector2 = new Vector2(newWidth, newHeight);
      const deltaVector2 = newRectVector2.sub(oldRectVector2).mul(0.5, 0.5);
      const startVector2 = new Vector2(Constant.environment.canvasLeft, Constant.environment.canvasTop);
      let offsetVector3 = new Vector3(-deltaVector2.x, deltaVector2.y, 0);
      if (this._lastCanvasOffset !== null) {
        const off = startVector2.sub(this._lastCanvasOffset);
        if (off.x < 0 && newWidth > oldWidth || off.x > 0 && newWidth < oldWidth) {
          offsetVector3 = new Vector3(deltaVector2.x, deltaVector2.y, 0);
        }
        if (off.y < 0 && newHeight > oldHeight || off.y > 0 && newHeight < oldHeight) {
          offsetVector3 = new Vector3(deltaVector2.x, deltaVector2.y, 0);
        }
      }
      this._lastCanvasOffset = startVector2;
      const cameraZoomRatio = this.camera.getZoomRatio();
      this.camera.setMoveIncrement(new Vector3(offsetVector3.x / cameraZoomRatio, offsetVector3.y / cameraZoomRatio, offsetVector3.z));
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
    }
    keyDownHandler(inputInfo) {
      this.prepare(inputInfo);
      const handlerAction = (nextTool) => {
        nextTool.keyDownHandler(inputInfo);
      };
      if (inputInfo.ctrlKey) {
        if (inputInfo.keyCode === 187) {
          this.zoomCanvas(inputInfo, -100);
        } else if (inputInfo.keyCode === 189) {
          this.zoomCanvas(inputInfo, 100);
        }
      } else {
        const cameraZoomRatio = this.camera.getZoomRatio();
        switch (inputInfo.keyCode) {
          case 37 /* LEFT */: {
            if (Constant.systemConfig.interactive.enableCanvasTranslate && Constant.selectManager.items.size <= 0) {
              this.camera.setMoveIncrement(new Vector3(-DIRECTION_KEY_MOVE_STEP / cameraZoomRatio, 0, 0));
            }
            break;
          }
          case 38 /* UP */: {
            if (Constant.systemConfig.interactive.enableCanvasTranslate && Constant.selectManager.items.size <= 0) {
              this.camera.setMoveIncrement(new Vector3(0, DIRECTION_KEY_MOVE_STEP / cameraZoomRatio, 0));
            }
            break;
          }
          case 39 /* RIGHT */: {
            if (Constant.systemConfig.interactive.enableCanvasTranslate && Constant.selectManager.items.size <= 0) {
              this.camera.setMoveIncrement(new Vector3(DIRECTION_KEY_MOVE_STEP / cameraZoomRatio, 0, 0));
            }
            break;
          }
          case 40 /* DOWN */: {
            if (Constant.systemConfig.interactive.enableCanvasTranslate && Constant.selectManager.items.size <= 0) {
              this.camera.setMoveIncrement(new Vector3(0, -DIRECTION_KEY_MOVE_STEP / cameraZoomRatio, 0));
            }
            break;
          }
          default:
        }
      }
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    keyUpHandler(inputInfo) {
      this.prepare(inputInfo);
      const handlerAction = (nextTool) => {
        nextTool.keyUpHandler(inputInfo);
      };
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
      this.prepare(inputInfo);
      this.mouseLeftPrevSourceNativePixelX = inputInfo.moveSourceNativePixelX;
      this.mouseLeftPrevSourceNativePixelY = inputInfo.moveSourceNativePixelY;
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftDownHandler(inputInfo);
      };
      this.isMouseLeftDwon = true;
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
      this.prepare(inputInfo);
      this.mouseMiddlePrevSourceNativePixelX = inputInfo.moveSourceNativePixelX;
      this.mouseMiddlePrevSourceNativePixelY = inputInfo.moveSourceNativePixelY;
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleDownHandler(inputInfo);
      };
      this.isMouseMiddleDwon = true;
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
      this.prepare(inputInfo);
      this.mouseRightPrevSourceNativePixelX = inputInfo.moveSourceNativePixelX;
      this.mouseRightPrevSourceNativePixelY = inputInfo.moveSourceNativePixelY;
      const handlerAction = (nextTool) => {
        nextTool.mouseRightDownHandler(inputInfo);
      };
      this.isMouseRightDwon = true;
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
      this.prepare(inputInfo);
      const handlerAction = (nextTool) => {
        nextTool.mouseMoveHandler(inputInfo);
      };
      let isF = false;
      let mousePrevSourceNativePixelX = 0;
      let mousePrevSourceNativePixelY = 0;
      if (Constant.systemConfig.interactive.enableCanvasTranslate) {
        if (Constant.systemConfig.interactive.enableCanvasTranslateByRightDownMove && this.isMouseRightDwon) {
          isF = true;
          mousePrevSourceNativePixelX = this.mouseRightPrevSourceNativePixelX;
          mousePrevSourceNativePixelY = this.mouseRightPrevSourceNativePixelY;
        }
        if (!isF && Constant.systemConfig.interactive.enableCanvasTranslateByLeftDownMove && this.isMouseLeftDwon && !Constant.systemConfig.interactive.enableCanvasSelection) {
          isF = true;
          mousePrevSourceNativePixelX = this.mouseLeftPrevSourceNativePixelX;
          mousePrevSourceNativePixelY = this.mouseLeftPrevSourceNativePixelY;
        }
      }
      if (isF) {
        const cameraZoomRatio = this.camera.getZoomRatio();
        const offsetX = inputInfo.moveSourceNativePixelX - mousePrevSourceNativePixelX;
        const offsetY = inputInfo.moveSourceNativePixelY - mousePrevSourceNativePixelY;
        this.camera.setMoveIncrement(new Vector3(offsetX / cameraZoomRatio, -offsetY / cameraZoomRatio, 0));
        OutProfileMessage.dispatchCanvasProfileChangeMessage();
      }
      this.mouseRightPrevSourceNativePixelX = this.mouseMiddlePrevSourceNativePixelX = this.mouseLeftPrevSourceNativePixelX = inputInfo.moveSourceNativePixelX;
      this.mouseRightPrevSourceNativePixelY = this.mouseMiddlePrevSourceNativePixelY = this.mouseLeftPrevSourceNativePixelY = inputInfo.moveSourceNativePixelY;
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
      this.prepare(inputInfo);
      const handlerAction = (nextTool) => {
        nextTool.mouseLeftUpHandler(inputInfo);
      };
      this.isMouseLeftDwon = false;
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
      this.prepare(inputInfo);
      const handlerAction = (nextTool) => {
        nextTool.mouseMiddleUpHandler(inputInfo);
      };
      this.isMouseMiddleDwon = false;
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
      this.prepare(inputInfo);
      const handlerAction = (nextTool) => {
        nextTool.mouseRightUpHandler(inputInfo);
      };
      this.isMouseRightDwon = false;
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
      this.prepare(inputInfo);
      if (inputInfo.altKey) {
        if (Constant.systemConfig.interactive.enableCanvasTranslate) {
          this.horizontalScrollCanvas(inputInfo);
        }
      } else if (inputInfo.ctrlKey) {
        if (Constant.systemConfig.interactive.enableCanvasTranslate) {
          this.verticalScrollCanvas(inputInfo);
        }
      } else {
        if (Constant.systemConfig.interactive.enableCanvasZoomChange) {
          this.zoomCanvas(inputInfo);
        }
      }
      const handlerAction = (nextTool) => {
        nextTool.mouseWheelHandler(inputInfo);
      };
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
      this.prepare(inputInfo);
      const handlerAction = (nextTool) => {
        nextTool.mouseLeaveHandler(inputInfo);
      };
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
      this.prepare(inputInfo);
      const handlerAction = (nextTool) => {
        nextTool.mouseEnterHandler(inputInfo);
      };
      OutProfileMessage.dispatchInputsChangeMessage(inputInfo);
      this.handler(handlerAction);
    }
    quit() {
      super.quit();
    }
    zoomCanvas(inputInfo, setDelta) {
      const delta = setDelta || inputInfo.deltaSourceNativePixelY;
      let scale = 1;
      if (delta < 0) {
        scale = MOUSE_WHEEL_ZOOM_RATIO;
      } else {
        scale = 1 / MOUSE_WHEEL_ZOOM_RATIO;
      }
      Constant.canvasController.setCanvasZoomRatioByCanvasSourceNativePixelPos(
        scale * this.camera.getZoomRatio(),
        new Vector3(inputInfo.moveSourceNativePixelX, -inputInfo.moveSourceNativePixelY, 0)
      );
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchCanvasProfileChangeMessage();
    }
    verticalScrollCanvas(inputInfo) {
      const delta = inputInfo.deltaSourceNativePixelY;
      let scrollDist = 1;
      if (delta < 0) {
        scrollDist = MOUSE_WHEEL_SCROLL_DIST;
      } else {
        scrollDist = -MOUSE_WHEEL_SCROLL_DIST;
      }
      const cameraZoomRatio = this.camera.getZoomRatio();
      this.camera.setMoveIncrement(new Vector3(0, -scrollDist / cameraZoomRatio, 0));
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchCanvasProfileChangeMessage();
    }
    horizontalScrollCanvas(inputInfo) {
      const delta = inputInfo.deltaSourceNativePixelY;
      let scrollDist = 1;
      if (delta < 0) {
        scrollDist = MOUSE_WHEEL_SCROLL_DIST;
      } else {
        scrollDist = -MOUSE_WHEEL_SCROLL_DIST;
      }
      const cameraZoomRatio = this.camera.getZoomRatio();
      this.camera.setMoveIncrement(new Vector3(scrollDist / cameraZoomRatio, 0, 0));
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchCanvasProfileChangeMessage();
    }
    prepare(inputInfo) {
    }
  };

  // src/init/Init.ts
  var CoreInit = class {
    static init() {
      return __async(this, null, function* () {
        const isSupportWebGPUResult = yield isSupportWebGPU();
        Constant.systemConfig.coreEngineType = "WEBGL" /* WEBGL */;
        Constant.systemConfig.renderMode = "D2" /* D2 */;
      });
    }
  };
  var EnvirInit = class {
    static init(canvasElement) {
      return __async(this, null, function* () {
        SyncCanvasRect.syncCanvasRectByWindow(canvasElement);
        const canvasRect = canvasElement.getBoundingClientRect().toJSON();
        Constant.environment.updateCanvasRectSize(canvasRect.width, canvasRect.height, canvasRect.left, canvasRect.top);
      });
    }
  };
  var LayerInit = class {
    static init() {
      return __async(this, null, function* () {
        DrawLayerShapeManager.getInstance().createControlShapeItem("dw_ml_1000001" /* MaskLayer */);
      });
    }
  };
  var D2ToolInit = class _D2ToolInit {
    static d2Init(canvasElement) {
      _D2ToolInit.eventsLoader = new EventsLoader(canvasElement);
      _D2ToolInit.eventsLoader.init();
      _D2ToolInit.d2FrameTool = new D2FrameTool();
      _D2ToolInit.d2FrameTool.init();
      _D2ToolInit.eventsLoader.nextTool = _D2ToolInit.d2FrameTool;
      _D2ToolInit.drawD2ToolManager = new DrawD2ToolManager();
      _D2ToolInit.drawD2ToolManager.frameToolHandler = _D2ToolInit.d2FrameTool;
      return {
        drawD2ToolManager: _D2ToolInit.drawD2ToolManager
      };
    }
    static d2Quit() {
      _D2ToolInit.eventsLoader.quit();
      _D2ToolInit.d2FrameTool.quit();
      _D2ToolInit.drawD2ToolManager.quit();
    }
  };

  // src/helper/FloatPanel.ts
  var panelPublicStyle = `
	min-width: 345px;
	margin: 5px 0; 
	padding: 0 10px 1px 10px; 
	font-size: 12px;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); 
	background: rgba(25, 25, 25, 0.75); 
	border: 1px solid #666666; 
	border-radius: 3px;
`;
  var FloatPanel = class {
    static createContainer(container, position = "RB") {
      const positionStyle = {
        LT: "left: 0; top: 0;",
        RT: "right: 0; top: 0;",
        LB: "left: 0; bottom: 0;",
        RB: "right: 0; bottom: 0;"
      }[position];
      const elementId = `floatPanel${Math.random()}`;
      const wrapperHTML = `
			<section id="${elementId}" style="
				position: fixed; 
				${positionStyle} 
				z-index: 9999; 
				user-select: none;
				padding: 5px 10px;
			">
			</section>
		`;
      container.append(document.createRange().createContextualFragment(wrapperHTML));
      return document.getElementById(elementId);
    }
  };
  FloatPanel.inputsPanelControl = {
    appendTo(container) {
      const wrapperHTML = `
				<main style="${panelPublicStyle}">
					<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
						<div>\u9F20\u6807\u5B9E\u65F6 DOM \u5750\u6807(pixel):&nbsp;&nbsp;</div>
						<div id="infoMouseMoveNativeAbsPos" style="min-width: 75px;">-/-</div>
					</div>
					<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
						<div>\u9F20\u6807\u5B9E\u65F6\u573A\u666F\u5750\u6807(pixel):&nbsp;&nbsp;</div>
						<div id="infoMouseMoveSceneTruthPos" style="min-width: 75px;">-/-</div>
					</div>
					<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color:rgb(250, 152, 110); font-weight: bolder;">
						<div>\u9F20\u6807\u5B9E\u65F6\u7269\u7406\u5750\u6807(mm):&nbsp;&nbsp;</div>
						<div id="infoMouseMoveScenePhysicsPos" style="min-width: 75px;">-/-</div>
					</div>
				</main>
			`;
      container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    update(data) {
      const infoMouseMoveNativeAbsPosElement = document.getElementById("infoMouseMoveNativeAbsPos");
      infoMouseMoveNativeAbsPosElement.innerHTML = `${data.moveSourceNativePixelX}/${data.moveSourceNativePixelY}`;
      const infoMouseMoveSceneTruthPosElement = document.getElementById("infoMouseMoveSceneTruthPos");
      infoMouseMoveSceneTruthPosElement.innerHTML = `${toFixed(data.moveScenePixelX, 8, true)}/${toFixed(data.moveScenePixelY, 8, true)}`;
      const infoMouseMoveScenePhysicsPosElement = document.getElementById("infoMouseMoveScenePhysicsPos");
      infoMouseMoveScenePhysicsPosElement.innerHTML = `${toFixed(data.moveScenePhysicsX, 8, true)}/${toFixed(data.moveScenePhysicsY, 8, true)}`;
    }
  };
  FloatPanel.canvasProfilePanelControl = {
    lastUpdateTimeStamp: 0,
    appendTo(container) {
      const wrapperHTML = `
				<main style="${panelPublicStyle}">
					<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
						<div>\u753B\u5E03\u7F29\u653E\u6BD4\u4F8B:&nbsp;&nbsp;</div>
						<div id="canvasZoomRatio" style="min-width: 75px;">-%</div>
					</div>
					<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
						<div>\u753B\u5E03\u5C3A\u5BF8/DPI:&nbsp;&nbsp;</div>
						<div id="canvasBoundingRect" style="min-width: 75px;">-%</div>
						<div id="viewDPI" style="min-width: 75px;">-</div>
					</div>
					<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
						<div>FPS:&nbsp;&nbsp;</div>
						<div id="fpsCount" style="min-width: 75px;">-</div>
					</div>
					<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
						<div>\u5185\u5B58\u4F7F\u7528:&nbsp;&nbsp;</div>
						<div id="jsMemory" style="min-width: 75px;">-</div>
					</div>
				</main>
			`;
      container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    update(data) {
      const canvasZoomRatioElement = document.getElementById("canvasZoomRatio");
      canvasZoomRatioElement.innerHTML = `${Number((data.zoomRatio * 100).toString().match(/^\d+(?:\.\d{0,2})?/)) + "%"}`;
      const canvasBoundingRectElement = document.getElementById("canvasBoundingRect");
      canvasBoundingRectElement.innerHTML = `${data.canvasWidth} x ${data.canvasHeight}`;
      const viewDPIElement = document.getElementById("viewDPI");
      viewDPIElement.innerHTML = `${data.DPI[0]} * ${data.DPI[1]}`;
      const fpsCountElement = document.getElementById("fpsCount");
      fpsCountElement.innerHTML = `${data.fpsCount}/${data.diffFreshInterval}`;
      if (performance.now() - this.lastUpdateTimeStamp >= 500) {
        this.lastUpdateTimeStamp = performance.now();
        const jsMemoryElement = document.getElementById("jsMemory");
        const memory = performance.memory || {};
        jsMemoryElement.innerHTML = `${toFixed(memory.usedJSHeapSize / Math.pow(1024, 2), 2, true)}/${toFixed(
          memory.totalJSHeapSize / Math.pow(1024, 2),
          2,
          true
        )}`;
      }
    }
  };
  FloatPanel.btnsControl = {
    appendTo(container) {
      const wrapperHTML = `
				<main style="${panelPublicStyle}">
					<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
						<button id="quitCanvas" style="background-color: #dcdcdc; border: 1px solid #acacac; border-radius: 3px; color: #333333; height: 24px; margin: 0 5px; padding: 0 5px; cursor: pointer; margin-left: 0;">\u9500\u6BC1\u753B\u5E03</button>
						<button id="resetCanvasStatus" style="background-color: #dcdcdc; border: 1px solid #acacac; border-radius: 3px; color: #333333; height: 24px; margin: 0 5px; padding: 0 5px; cursor: pointer; margin-left: 0;">\u91CD\u7F6E\u753B\u5E03\u72B6\u6001</button>
						<button disabled="disabled" id="setRenderMode2D" style="background-color: #dcdcdc; border: 1px solid #acacac; border-radius: 3px; color: #333333; height: 24px; margin: 0 5px; padding: 0 5px; cursor: not-allowed;">2D</button>
						<button disabled="disabled" id="setRenderMode3D" style="background-color: #dcdcdc; border: 1px solid #acacac; border-radius: 3px; color: #333333; height: 24px; margin: 0 5px; padding: 0 5px; cursor: not-allowed;">3D</button>
					</div>
				</main>
			`;
      container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    update() {
    },
    event(optional = {}) {
      const quitCanvasElement = document.getElementById("quitCanvas");
      quitCanvasElement.addEventListener("click", (e) => {
        optional.quitCanvasClickCallback && optional.quitCanvasClickCallback();
      });
      const resetCanvasStatusElement = document.getElementById("resetCanvasStatus");
      resetCanvasStatusElement.addEventListener("click", (e) => {
        optional.resetCanvasStatusClickCallback && optional.resetCanvasStatusClickCallback();
      });
      const setRenderMode2DElement = document.getElementById("setRenderMode2D");
      setRenderMode2DElement.addEventListener("click", (e) => {
        optional.setRenderMode2DClickCallback && optional.setRenderMode2DClickCallback();
      });
      const setRenderMode3DElement = document.getElementById("setRenderMode3D");
      setRenderMode3DElement.addEventListener("click", (e) => {
        optional.setRenderMode3DClickCallback && optional.setRenderMode3DClickCallback();
      });
    }
  };

  // src/Main.ts
  var DRAW_D2TOOL_COMMAND = __spreadValues({}, EDrawD2ToolCommand);
  var OPERATION_ACRION = __spreadValues({}, EOperationAction);
  var HISTORY_CMD_ACTION = __spreadValues({}, ECommandAction);
  var CANVAS_LINE_CAP = __spreadValues({}, ECanvasD2LineCap);
  var POINT_EVENT_NAME = __spreadValues({}, EPointerEventName);
  var SWEEP = __spreadValues({}, ESweep);
  var D2ELEMENT_TYPE = __spreadValues({}, ED2ElementType);
  var D2FONT_STYLE = __spreadValues({}, ED2FontStyle);
  var D2POINT_SHAPE = __spreadValues({}, ED2PointShape);
  var Helper2 = {
    FloatPanel
  };
  var WebCanvas = class {
    constructor(canvasElement) {
      this._isInit = false;
      this._canvasElement = canvasElement;
      this._drawD2ToolManager = null;
      createConstant();
    }
    init() {
      return __async(this, null, function* () {
        if (this._isInit) {
          console.log(`Do not allow duplicate initialization.`);
          return Constant.environment.isQuit;
        }
        this._isInit = true;
        Constant.environment.init(this._canvasElement);
        yield CoreInit.init();
        yield ViewInit.init();
        yield EnvirInit.init(this._canvasElement);
        yield LayerInit.init();
        const { drawD2ToolManager } = D2ToolInit.d2Init(this._canvasElement);
        this._drawD2ToolManager = drawD2ToolManager;
        this._canvasElement.focus();
        Constant.environment.isQuit = false;
        return Constant.environment.isQuit;
      });
    }
    get isQuit() {
      return Constant.environment ? Constant.environment.isQuit : true;
    }
    get messageTool() {
      if (this.checkIsQuit()) {
        return null;
      }
      return Constant.messageTool;
    }
    get drawLayerController() {
      if (this.checkIsQuit()) {
        return null;
      }
      return Constant.drawLayerController;
    }
    get d2ElementController() {
      if (this.checkIsQuit()) {
        return null;
      }
      return Constant.d2ElementController;
    }
    get d2TextElementController() {
      if (this.checkIsQuit()) {
        return null;
      }
      return Constant.d2TextElementController;
    }
    get canvasController() {
      if (this.checkIsQuit()) {
        return null;
      }
      return Constant.canvasController;
    }
    get operationController() {
      if (this.checkIsQuit()) {
        return null;
      }
      return Constant.operationController;
    }
    resetCanvasStatus() {
      if (this.checkIsQuit()) {
        return null;
      }
      Constant.canvasController.resetCanvasStatus();
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
      OutProfileMessage.dispatchCanvasProfileChangeMessage();
    }
    /**
     * 以指定的
     * 			1. DOM <canvas /> 像素坐标(左上角原点, Y 轴向上为正)
     * 			2. 场景物理坐标
     * 		为中心点
     * 设置画布缩放倍率
     */
    setCanvasZoomRatioByCanvasSourceNativePixelPos(ratio, canvasDomSourceNativePixelPosition) {
      Constant.canvasController.setCanvasZoomRatioByCanvasSourceNativePixelPos(
        ratio,
        canvasDomSourceNativePixelPosition ? canvasDomSourceNativePixelPosition.toVector3() : void 0
      );
      OutProfileMessage.dispatchCanvasProfileChangeMessage();
    }
    setCanvasZoomRatioByScenePhysicsPos(ratio, scenePhysicsPosition) {
      Constant.canvasController.setCanvasZoomRatioByScenePhysicsPos(ratio, scenePhysicsPosition ? scenePhysicsPosition.toVector3() : void 0);
      OutProfileMessage.dispatchCanvasProfileChangeMessage();
    }
    /**
     * 将指定的
     * 			1. DOM <canvas /> 像素坐标(左上角原点, Y 轴向上为正)
     * 			2. 场景物理坐标
     * 		设置为
     * 相机中心点
     */
    setCameraCenterByCanvasSourceNativePixelPos(canvasDomSourceNativePixelPosition) {
      Constant.canvasController.setCameraCenterByCanvasSourceNativePixelPos(canvasDomSourceNativePixelPosition);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
    }
    setCameraCenterByScenePhysicsPos(scenePhysicsPosition) {
      Constant.canvasController.setCameraCenterByScenePhysicsPos(scenePhysicsPosition);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
    }
    /**
     * 互换
     * 		1. DOM <canvas /> 像素坐标(左上角原点, Y 轴向上为正)
     * 		2. 场景物理坐标
     */
    setScenePhysicsPos2CanvasSourceNativePixelPos(scenePhysicsPoint) {
      return Constant.d2CoordinateUtils.setScenePhysicsPos2CanvasSourceNativePixelPos(scenePhysicsPoint);
    }
    setCanvasSourceNativePixelPos2ScenePhysicsPos(canvasDomSourceNativePixelPoint) {
      return Constant.d2CoordinateUtils.setCanvasSourceNativePixelPos2ScenePhysicsPos(canvasDomSourceNativePixelPoint);
    }
    getCanvasRect() {
      if (this.checkIsQuit()) {
        return null;
      }
      return this._canvasElement.getBoundingClientRect().toJSON();
    }
    getDPI() {
      if (this.checkIsQuit()) {
        return null;
      }
      return [...InsConfig.DPI];
    }
    getSystemConfig() {
      if (this.checkIsQuit()) {
        return null;
      }
      return Constant.systemConfig.toJSON();
    }
    setSystemConfig(moduleName, key, value) {
      if (this.checkIsQuit()) {
        return null;
      }
      Constant.systemConfig.update(moduleName, key, value);
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
    }
    getCanvasProfileData() {
      if (this.checkIsQuit()) {
        return null;
      }
      return OutProfileMessage.createCanvasProfileData({});
    }
    setCanvasStaticRest() {
      Constant.messageTool.messageBus.publish("SET_STATIC_REST" /* SET_STATIC_REST */, null);
    }
    flushShapesStorage() {
      Constant.messageTool.messageBus.publish("REFRESH_RTREE" /* REFRESH_RTREE */, null);
    }
    setDrawD2ToolCommand(type, data = {}) {
      this._drawD2ToolManager.update({ type, data });
    }
    forceRender() {
      Constant.messageTool.messageBus.publish("RENDER_FRAME" /* RENDER_FRAME */, null);
    }
    addInputsChangeListener(callback) {
      Constant.messageTool.messageBus.subscribe("INPUTS_CHANGE" /* INPUTS_CHANGE */, callback);
    }
    addCanvasProfileChangeListener(callback) {
      Constant.messageTool.messageBus.subscribe("CANVASPROFILE_CHANGE" /* CANVASPROFILE_CHANGE */, callback);
    }
    addOperationProfileChangeListener(callback) {
      Constant.messageTool.messageBus.subscribe("OPERATION_CHANGE" /* OPERATION_CHANGE */, callback);
    }
    quit() {
      Constant.environment.isQuit = true;
      window.cancelAnimationFrame(Constant.environment.launcher.rAFId);
      D2ToolInit.d2Quit();
      destoryConstant();
      this._canvasElement = void 0;
    }
    checkIsQuit() {
      if (Constant.environment.isQuit) {
        console.warn(`The canvas instance has been destroyed, please create a new instance.`);
        return true;
      }
      return false;
    }
  };
  function createCanvasElement(containerElement) {
    if (containerElement.childNodes.length) {
      throw new Error(`you must provide a container that does not contain any child nodes.`);
    }
    const containerClientRect = containerElement.getBoundingClientRect();
    const canvasElement = document.createElement("canvas");
    canvasElement.width = containerClientRect.width;
    canvasElement.height = containerClientRect.height;
    canvasElement.style.position = "absolute";
    containerElement.appendChild(canvasElement);
    return canvasElement;
  }

  // src/$instance/public/initEventHandle.ts
  function initEventHandle(webCanvas) {
    webCanvas.addInputsChangeListener((data) => {
      Helper2.FloatPanel.inputsPanelControl.update(data);
    });
    webCanvas.addCanvasProfileChangeListener((data) => {
      Helper2.FloatPanel.canvasProfilePanelControl.update(data);
    });
  }

  // src/$instance/public/initFloatPanel.ts
  function initFloatPanel(webCanvas) {
    const floatPanelElement = Helper2.FloatPanel.createContainer(document.body);
    Helper2.FloatPanel.inputsPanelControl.appendTo(floatPanelElement);
    Helper2.FloatPanel.canvasProfilePanelControl.appendTo(floatPanelElement);
    Helper2.FloatPanel.btnsControl.appendTo(floatPanelElement);
    Helper2.FloatPanel.btnsControl.event({
      quitCanvasClickCallback() {
        console.warn(`will quit canvas!!!`);
        webCanvas.quit();
      },
      resetCanvasStatusClickCallback() {
        console.warn(`will reset canvas status.`);
        webCanvas.resetCanvasStatus();
      },
      setRenderMode2DClickCallback() {
        console.warn(`will reset canvas status.`);
        webCanvas.resetCanvasStatus();
      },
      setRenderMode3DClickCallback() {
        console.warn(`will reset canvas status.`);
        webCanvas.resetCanvasStatus();
      }
    });
  }

  // src/$instance/public/initWebCanvas.ts
  function initWebCanvas() {
    return __async(this, null, function* () {
      const canvasContainerElement = document.getElementById("canvasContainer");
      const webCanvas = new WebCanvas(createCanvasElement(canvasContainerElement));
      yield webCanvas.init();
      return {
        webCanvas,
        canvasContainerElement
      };
    });
  }

  // src/$instance/d2FreeTest/utils/initWebSystemConfig.ts
  function initWebSystemConfig(webCanvas) {
    const systemConfig = webCanvas.getSystemConfig();
    webCanvas.setSystemConfig("enbaleFPSCount", true);
    console.log(systemConfig);
  }

  // src/$instance/d2FreeTest/utils/createPoints.ts
  function createPoints(webCanvas, layerItemId, points) {
    const { d2ElementController, d2TextElementController } = webCanvas;
    const result = {
      tIds: [],
      pIds: []
    };
    for (let i = 0; i < points.length; i++) {
      const tId = d2TextElementController.createD2TextElementItem(
        layerItemId,
        points[i].position,
        `${points[i].label}(${points[i].position.x}, ${points[i].position.y})`,
        {
          isEnableSelect: false,
          strokeColor: points[i].labelColor || Color.GOLDEN,
          fontSize: points[i].labelSize || 5
        }
      );
      const pId = d2ElementController.createD2PointElementShapeItem(layerItemId, points[i].position, {
        strokeColor: points[i].pointColor || Color.GOLDEN,
        isEnableScale: true,
        isEnableSelect: false,
        size: points[i].pointSize || 1
      });
      result.tIds.push(tId);
      result.pIds.push(pId);
    }
    return result;
  }

  // src/$instance/d2FreeTest/modules/d2LineToolkitTest.ts
  function d2LineToolkitTest06(webCanvas, layerItemId) {
    const { d2ElementController } = webCanvas;
    const defaultLayerItemId = layerItemId;
    const [lineAStartPoint, lineAEndPoint] = [new Vector2(-50, -50), new Vector2(50, 50)];
    d2ElementController.createD2LineElementShapeItem(defaultLayerItemId, lineAStartPoint, lineAEndPoint, {
      strokeColor: Color.RED,
      isEnableSelect: false
    });
    const [lineBStartPoint, lineBEndPoint] = [new Vector2(-30, 30), new Vector2(30, -30)];
    d2ElementController.createD2LineElementShapeItem(defaultLayerItemId, lineBStartPoint, lineBEndPoint, {
      strokeColor: Color.RED,
      isEnableSelect: false
    });
    console.log("%c <T: \u83B7\u53D6\u7EBF\u6BB5 lineA \u4E0E\u7EBF\u6BB5 lineB \u7684\u91CD\u53E0\u533A\u57DF(\u8FD4\u56DE BBox2)>", "color: #ff6600");
    const [lineA, lineB] = [new Line(lineAStartPoint, lineAEndPoint), new Line(lineBStartPoint, lineBEndPoint)];
    const inters = D2LineToolkit.getIntersectionByLines(lineA, lineB);
    console.log(inters);
    console.log("%c </T>", "color: #ff6600");
    createPoints(webCanvas, layerItemId, [
      { label: `lineAStartPoint`, position: lineAStartPoint },
      { label: `lineAEndPoint`, position: lineAEndPoint },
      { label: `lineBStartPoint`, position: lineBStartPoint },
      { label: `lineBEndPoint`, position: lineBEndPoint }
    ]);
  }

  // src/$instance/d2FreeTest/index.ts
  function initMessageHandle(webCanvas) {
    return __async(this, null, function* () {
      const { messageTool, drawLayerController, d2ElementController, operationController } = webCanvas;
      const DPI = webCanvas.getDPI();
      messageTool.messageBus.subscribe("UI2CAS_EVT-SET_DRAW_LAYER", (params) => {
        const { cmd, targetItemId } = params;
        switch (cmd) {
          case "CREATE_DRAWLAYER_ITEM": {
            drawLayerController.createDrawLayerShapeItem(`drawlayer-${getHashIden(5)}`);
            break;
          }
          case "DELETE_DRAWLAYER_ITEM": {
            if (targetItemId) {
              drawLayerController.deleteDrawLayerShapeItem(targetItemId);
            }
            break;
          }
          case "SWITCH_ACTIVE_DRAWLAYER_ITEM": {
            if (targetItemId === "") {
              drawLayerController.clearAllDrawLayersSelectedStatus();
            } else {
              drawLayerController.setActiveDrawLayerShapeItem(targetItemId);
            }
            break;
          }
          default:
        }
      });
      messageTool.messageBus.subscribe("UI2CAS_EVT-SET_DRAW_ELEMENT", (params) => {
        const { cmd, data } = params;
        switch (cmd) {
          case "DRAW_D2LINE": {
            webCanvas.setDrawD2ToolCommand(DRAW_D2TOOL_COMMAND.D2LINE);
            break;
          }
          case "DRWA_D2CIRCLE": {
            webCanvas.setDrawD2ToolCommand(DRAW_D2TOOL_COMMAND.D2CIRCLE);
            break;
          }
          case "DRWA_D2POINT": {
            webCanvas.setDrawD2ToolCommand(DRAW_D2TOOL_COMMAND.D2POINT);
            break;
          }
          case "DRWA_D2ARC": {
            webCanvas.setDrawD2ToolCommand(DRAW_D2TOOL_COMMAND.D2ARC);
            break;
          }
          case "DRWA_D2TEXT": {
            webCanvas.setDrawD2ToolCommand(DRAW_D2TOOL_COMMAND.D2TEXT, data);
            break;
          }
          case "DRWA_D2IMAGE": {
            webCanvas.setDrawD2ToolCommand(DRAW_D2TOOL_COMMAND.D2IMAGE, __spreadProps(__spreadValues({}, data), {
              width: px2mm(data.width, DPI[0]),
              height: px2mm(data.height, DPI[1])
            }));
            break;
          }
          case "DRWA_D2RECT": {
            webCanvas.setDrawD2ToolCommand(DRAW_D2TOOL_COMMAND.D2RECT);
            break;
          }
          default:
        }
      });
      messageTool.messageBus.subscribe("UI2CAS_EVT-SET_TOOL", (params) => __async(null, null, function* () {
        const { cmd, content, targetItemId } = params;
        switch (cmd) {
          case "SET_SELECTION": {
            webCanvas.setDrawD2ToolCommand(DRAW_D2TOOL_COMMAND.BLANK_DROP);
            break;
          }
          case "DO_COPY": {
            console.log(`\u6682\u672A\u652F\u6301\u6B64\u64CD\u4F5C.`);
            break;
          }
          case "DO_UNDO": {
            operationController.undo();
            break;
          }
          case "DO_REDO": {
            operationController.redo();
            break;
          }
          case "EXPORT": {
            console.log(`\u6682\u672A\u652F\u6301\u6B64\u64CD\u4F5C.`);
            break;
          }
          case "IMPORT": {
            console.log(`\u6682\u672A\u652F\u6301\u6B64\u64CD\u4F5C.`);
            break;
          }
          case "DO_DELETE": {
            const allSelectedElementIds = d2ElementController.getAllSelectedD2ElementShapeResults().map((item) => {
              return item.elementItemId;
            });
            const commandGroupId = String(performance.now());
            allSelectedElementIds.forEach((idItem) => {
              operationController.addHistroyRecord(idItem, HISTORY_CMD_ACTION.DELETE, commandGroupId);
              d2ElementController.deleteD2ElementShapeItemById(idItem);
            });
            allSelectedElementIds.length = 0;
            break;
          }
          case "CLEAR_DRAWLAYER_ELEMENTS": {
            drawLayerController.deleteDrawLayerElements(targetItemId);
            break;
          }
          case "CLEAR_CANVAS_ELEMENTS": {
            const allDrawLayers = drawLayerController.getAllDrawLayerResults();
            allDrawLayers.forEach((item) => {
              drawLayerController.deleteDrawLayerElements(item.layerItemId);
            });
            break;
          }
          case "RESET_CANVAS": {
            operationController.resetCanvasContent();
            console.log(`\u5DF2\u6E05\u9664\u753B\u5E03\u6240\u6709\u5185\u5BB9.`);
            break;
          }
          default:
        }
      }));
      webCanvas.addOperationProfileChangeListener((params) => __async(null, null, function* () {
        const { action, allDrawLayers, targetItemId } = params;
        switch (action) {
          case OPERATION_ACRION.CREATED_DRAWLAYER:
          case OPERATION_ACRION.REFRESH_DRAWLAYER:
          case OPERATION_ACRION.DELETED_DRAWLAYER:
          case OPERATION_ACRION.SWITCH_ACTIVE_DRAWLAYER:
          case OPERATION_ACRION.CLEAR_ALL_ACTIVE_DRAWLAYER:
          case OPERATION_ACRION.CLEAR_ALL_DRAWLAYER_ELEMENTS: {
            const allDrawLayers2 = drawLayerController.getAllDrawLayerResults();
            messageTool.windowMessageBridge.publish(
              `CAS2UI_EVT-UPDATE_DRAWLAYER_LIST`,
              {
                allDrawLayers: allDrawLayers2,
                selectedDrawLayerItemId: ""
              },
              window.top
            );
            break;
          }
          default:
        }
      }));
    });
  }
  function main() {
    initWebCanvas().then((_0) => __async(null, [_0], function* ({ webCanvas, canvasContainerElement }) {
      const { messageTool, d2ElementController } = webCanvas;
      initWebSystemConfig(webCanvas);
      initFloatPanel(webCanvas);
      initEventHandle(webCanvas);
      initMessageHandle(webCanvas);
      Helper2.FloatPanel.canvasProfilePanelControl.update(webCanvas.getCanvasProfileData());
      const messageResult = (yield messageTool.windowMessageBridge.asyncRequest(`CAS2UI_SVR-CANVAS_READY`, { ready: true }, window.top)).data;
      console.log(`CAS2UI_SVR-CANVAS_READY: `, messageResult);
      const drawLayerController = webCanvas.drawLayerController;
      const layerItem01Id = drawLayerController.createDrawLayerShapeItem(`Canvas Test Layer 01`);
      d2LineToolkitTest06(webCanvas, layerItem01Id);
      console.log(webCanvas);
    }));
  }

  // src/$instance/public/formatDates.ts
  var formatDates = (date = /* @__PURE__ */ new Date(), format = "yyyy-MM-dd HH:ii:ss") => {
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "H+": date.getHours(),
      "h+": date.getHours(),
      "i+": date.getMinutes(),
      "s+": date.getSeconds(),
      "q+": Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return format;
  };

  // src/$instance/d2SimpleClock/modules/planeClock.ts
  var RUN_PROFILE = {
    isShowSecondHand: true,
    isShowMinuteHand: true,
    isShowHourHand: true,
    isShowMinuteScaleLine: true,
    isShowHourScaleLine: true,
    isShowScaleText: true,
    isShowRipple: true,
    isShowDateTime: true,
    /* ... */
    baseLength: 0,
    outCircleRadius: 0,
    /* ... */
    scaleFontFamily: "auto",
    scaleTextVertexs: [],
    /* ... */
    nowTimeStamp: 0,
    lastTimeStamp: 0,
    distTimeStamp: 0
  };
  var RIPPLE_PROFILE = {
    maxRadius: 0,
    radius: 0,
    duration: 2e3,
    speed: 0
  };
  function drawPlaneClock(webCanvas, canvasContainerElement, timeStamp, layerItemId1, layerItemId2, layerItemId3) {
    if (webCanvas.isQuit) {
      canvasContainerElement.remove();
      return;
    }
    RUN_PROFILE.nowTimeStamp = timeStamp;
    RUN_PROFILE.distTimeStamp = RUN_PROFILE.nowTimeStamp - RUN_PROFILE.lastTimeStamp;
    RUN_PROFILE.lastTimeStamp = RUN_PROFILE.nowTimeStamp;
    const { drawLayerController, d2TextElementController, d2ElementController } = webCanvas;
    drawLayerController.deleteDrawLayerElements(layerItemId1);
    drawLayerController.deleteDrawLayerElements(layerItemId2);
    drawLayerController.deleteDrawLayerElements(layerItemId3);
    const timeString = formatDates();
    const nowHours = (/* @__PURE__ */ new Date()).getHours();
    const nowMinutes = (/* @__PURE__ */ new Date()).getMinutes();
    const nowSeconds = (/* @__PURE__ */ new Date()).getSeconds();
    const nowMilliSeconds = (/* @__PURE__ */ new Date()).getMilliseconds();
    const totalMillSecOfHou = nowHours % 12 * 60 * 60 * 1e3 + nowMinutes * 60 * 1e3 + nowSeconds * 1e3 + nowMilliSeconds * 1;
    const totalMillSecOfMin = nowMinutes * 60 * 1e3 + nowSeconds * 1e3 + nowMilliSeconds * 1;
    const totalMillSecOfSec = nowSeconds * 1e3 + nowMilliSeconds * 1;
    const rotationOfHou = totalMillSecOfHou * -Angles.degreeToRadian(360 / 12 / 60 / 60 / 1e3);
    const rotationOfMin = totalMillSecOfMin * -Angles.degreeToRadian(360 / 60 / 60 / 1e3);
    const rotationOfSec = totalMillSecOfSec * -Angles.degreeToRadian(360 / 60 / 1e3);
    const outCircleRadius1 = RUN_PROFILE.outCircleRadius;
    const outCircleRadius2 = RUN_PROFILE.outCircleRadius - 2;
    const outArcElementId1 = d2ElementController.createD2ArcElementShapeItem(
      layerItemId1,
      new Vector2(0, 0),
      outCircleRadius1 + 10,
      -(Math.PI * 1) / 4,
      Math.PI * 1 / 4,
      SWEEP.CCW,
      {
        strokeWidth: 1,
        strokeColor: Color.GOLDEN,
        isSolid: true
      }
    );
    const outArcElementId2 = d2ElementController.createD2ArcElementShapeItem(
      layerItemId1,
      new Vector2(0, 0),
      outCircleRadius1 + 10,
      3 * (Math.PI * 1) / 4,
      5 * (Math.PI * 1) / 4,
      SWEEP.CCW,
      {
        strokeWidth: 1,
        strokeColor: Color.GOLDEN,
        isSolid: true
      }
    );
    const outCircleElementId1 = d2ElementController.createD2CircleElementShapeItem(layerItemId1, new Vector2(0, 0), {
      radius: outCircleRadius1,
      strokeWidth: 0.5
    });
    d2ElementController.updateD2ElementShapeItemAttrByJSONData(outCircleElementId1, {
      elementItemName: `\u5916\u5C42\u5927\u5706 1`,
      strokeColor: Color.createByAlpha(0.7, Color.YELLOW_GREEN)
    });
    const outCircleElementId2 = d2ElementController.createD2CircleElementShapeItem(layerItemId1, new Vector2(0, 0), {
      radius: outCircleRadius2,
      strokeWidth: 0.5
    });
    d2ElementController.updateD2ElementShapeItemAttrByJSONData(outCircleElementId2, {
      elementItemName: `\u5916\u5C42\u5927\u5706 2`,
      strokeColor: Color.createByAlpha(0.7, Color.GOLDEN)
    });
    if (RUN_PROFILE.isShowScaleText && RUN_PROFILE.scaleTextVertexs.length >= 12) {
      const baseEndPosition = new Vector3(0, outCircleRadius2 * 0.84, 0);
      for (let i = 0; i < RUN_PROFILE.scaleTextVertexs.length; i++) {
        const { d2TextVertexData } = RUN_PROFILE.scaleTextVertexs[i];
        const rotationMatrix42 = CanvasMatrix4.setRotationByVector3(-Angles.degreeToRadian(30 * (i + 1)), new Vector3(0, 0, 1));
        const endPosition2 = baseEndPosition.multiplyMatrix4(rotationMatrix42);
        d2TextElementController.createD2TextElementItemByVertexData(
          layerItemId1,
          d2TextVertexData,
          new Vector2(
            endPosition2.x - (d2TextVertexData.initBbox2.maxX - d2TextVertexData.initBbox2.minX) / 2,
            endPosition2.y + (d2TextVertexData.initBbox2.maxY - d2TextVertexData.initBbox2.minY) / 2
          ),
          {
            strokeColor: Color.GREEN_YELLOW,
            alpha: 1
          }
        );
      }
    }
    d2ElementController.createD2RectElementShapeItem(
      layerItemId1,
      new Vector2(-RUN_PROFILE.outCircleRadius / 12 * 3.5, RUN_PROFILE.outCircleRadius * 0.25),
      RUN_PROFILE.outCircleRadius / 12 * 3.5 * 2,
      10,
      {
        strokeColor: Color.GOLDEN,
        strokeWidth: 0.5,
        isFill: false,
        alpha: 0.5,
        borderRadius: 2
      }
    );
    if (RUN_PROFILE.isShowDateTime) {
      d2TextElementController.createD2TextElementItem(
        layerItemId1,
        new Vector2(-RUN_PROFILE.outCircleRadius / 12 * 4.5, -RUN_PROFILE.outCircleRadius * 0.45),
        timeString,
        {
          fontFamily: RUN_PROFILE.scaleFontFamily,
          fontStyle: "italic" /* ITALIC */,
          fontSize: RUN_PROFILE.outCircleRadius / 12,
          strokeColor: Color.GOLDEN,
          fontWeight: 100,
          styleSetting: {
            backgourdColor: Color.createByAlpha(0.25, Color.YELLOW_GREEN),
            padding: { left: 3, top: 3, right: 3, bottom: 3 },
            borderRadius: 3
          }
        }
      );
    }
    if (RUN_PROFILE.isShowRipple) {
      RIPPLE_PROFILE.radius += RUN_PROFILE.distTimeStamp * RIPPLE_PROFILE.speed;
      if (RIPPLE_PROFILE.radius > RIPPLE_PROFILE.maxRadius) {
        RIPPLE_PROFILE.radius = 0;
      }
      const rippleRadiusDist = RIPPLE_PROFILE.maxRadius - RIPPLE_PROFILE.radius;
      const setRippleCircleFillColorAlpha = 0.25 * (rippleRadiusDist / RIPPLE_PROFILE.maxRadius);
      const setRippleCircleStrokeColorAlpha = 0.25 * (rippleRadiusDist / RIPPLE_PROFILE.maxRadius);
      const rippleCircleElementId = d2ElementController.createD2CircleElementShapeItem(layerItemId1, new Vector2(0, 0), {
        radius: RIPPLE_PROFILE.radius,
        strokeWidth: 0.3
      });
      d2ElementController.updateD2ElementShapeItemAttrByJSONData(rippleCircleElementId, {
        elementItemName: `\u6CE2\u7EB9\u5706`,
        strokeColor: new Color(
          Color.YELLOW_GREEN.r * 255,
          Color.YELLOW_GREEN.g * 255,
          Color.YELLOW_GREEN.b * 255,
          setRippleCircleStrokeColorAlpha
        ),
        fillColor: new Color(Color.YELLOW_GREEN.r * 255, Color.YELLOW_GREEN.g * 255, Color.YELLOW_GREEN.b * 255, setRippleCircleFillColorAlpha)
      });
    }
    if (RUN_PROFILE.isShowHourScaleLine) {
      for (let i = 1; i <= 12; i++) {
        const baseStartPosition = new Vector3(0, 0, 0);
        const baseEndPosition = new Vector3(0, 8, 0);
        const translateMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector3(0, outCircleRadius2 - 8, 0));
        const rotationMatrix42 = CanvasMatrix4.setRotationByVector3(-Angles.degreeToRadian(30 * i), new Vector3(0, 0, 1));
        const startPosition2 = baseStartPosition.multiplyMatrix4(translateMatrix4.multiply4(rotationMatrix42));
        const endPosition2 = baseEndPosition.multiplyMatrix4(translateMatrix4.multiply4(rotationMatrix42));
        const lineElementId2 = d2ElementController.createD2LineElementShapeItem(
          layerItemId1,
          startPosition2.toVector2(),
          endPosition2.toVector2(),
          {
            strokeWidth: 1
          }
        );
        let setColor = Color.GOLDEN;
        if (nowSeconds === i * 5 - 1 && nowMilliSeconds >= 900 || nowSeconds === i * 5 && nowMilliSeconds <= 150) {
          setColor = Color.ORIGIN;
        }
        d2ElementController.updateD2ElementShapeItemAttrByJSONData(lineElementId2, {
          elementItemName: `\u65F6\u949F\u523B\u5EA6 ${i}`,
          lineCap: CANVAS_LINE_CAP.SQUARE,
          strokeColor: setColor
        });
      }
    }
    if (RUN_PROFILE.isShowMinuteScaleLine) {
      for (let i = 1; i <= 60; i++) {
        if (i % 5 === 0) {
          continue;
        }
        const baseStartPosition = new Vector3(0, 0, 0);
        const baseEndPosition = new Vector3(0, 5, 0);
        const translateMatrix4 = CanvasMatrix4.setTranslateByVector3(new Vector3(0, outCircleRadius2 - 5, 0));
        const rotationMatrix42 = CanvasMatrix4.setRotationByVector3(-Angles.degreeToRadian(6 * i), new Vector3(0, 0, 1));
        const startPosition2 = baseStartPosition.multiplyMatrix4(translateMatrix4.multiply4(rotationMatrix42));
        const endPosition2 = baseEndPosition.multiplyMatrix4(translateMatrix4.multiply4(rotationMatrix42));
        const lineElementId2 = d2ElementController.createD2LineElementShapeItem(
          layerItemId1,
          startPosition2.toVector2(),
          endPosition2.toVector2(),
          {
            strokeWidth: 0.5
          }
        );
        let setColor = Color.GOLDEN;
        if (nowSeconds === i - 1 && nowMilliSeconds >= 900 || nowSeconds === i && nowMilliSeconds <= 150) {
          setColor = Color.ORIGIN;
        }
        d2ElementController.updateD2ElementShapeItemAttrByJSONData(lineElementId2, {
          elementItemName: `\u5206\u949F\u523B\u5EA6 ${i}`,
          lineCap: CANVAS_LINE_CAP.SQUARE,
          strokeColor: setColor
        });
      }
    }
    let rotationMatrix4 = null;
    let startPosition = null;
    let endPosition = null;
    let lineElementId = null;
    if (RUN_PROFILE.isShowHourHand) {
      rotationMatrix4 = CanvasMatrix4.setRotationByVector3(rotationOfHou, new Vector3(0, 0, 1));
      startPosition = new Vector3(0, 0, 0).multiplyMatrix4(rotationMatrix4);
      endPosition = new Vector3(0, outCircleRadius2 - 40, 0).multiplyMatrix4(rotationMatrix4);
      lineElementId = d2ElementController.createD2LineElementShapeItem(layerItemId2, startPosition.toVector2(), endPosition.toVector2(), {
        strokeWidth: 3.5
      });
      d2ElementController.updateD2ElementShapeItemAttrByJSONData(lineElementId, { elementItemName: `\u65F6\u9488`, strokeColor: Color.GREEN });
      rotationMatrix4 = CanvasMatrix4.setRotationByVector3(rotationOfHou + Math.PI, new Vector3(0, 0, 1));
      startPosition = new Vector3(0, 0, 0).multiplyMatrix4(rotationMatrix4);
      endPosition = new Vector3(0, 18, 0).multiplyMatrix4(rotationMatrix4);
      lineElementId = d2ElementController.createD2LineElementShapeItem(layerItemId2, startPosition.toVector2(), endPosition.toVector2(), {
        strokeWidth: 3.5
      });
      d2ElementController.updateD2ElementShapeItemAttrByJSONData(lineElementId, { elementItemName: `\u65F6\u9488\u5C3E`, strokeColor: Color.GREEN });
    }
    if (RUN_PROFILE.isShowMinuteHand) {
      rotationMatrix4 = CanvasMatrix4.setRotationByVector3(rotationOfMin, new Vector3(0, 0, 1));
      startPosition = new Vector3(0, 0, 0).multiplyMatrix4(rotationMatrix4);
      endPosition = new Vector3(0, outCircleRadius2 - 25, 0).multiplyMatrix4(rotationMatrix4);
      lineElementId = d2ElementController.createD2LineElementShapeItem(layerItemId2, startPosition.toVector2(), endPosition.toVector2(), {
        strokeWidth: 3.5
      });
      d2ElementController.updateD2ElementShapeItemAttrByJSONData(lineElementId, { elementItemName: `\u5206\u9488`, strokeColor: Color.YELLOW });
      rotationMatrix4 = CanvasMatrix4.setRotationByVector3(rotationOfMin + Math.PI, new Vector3(0, 0, 1));
      startPosition = new Vector3(0, 0, 0).multiplyMatrix4(rotationMatrix4);
      endPosition = new Vector3(0, 25, 0).multiplyMatrix4(rotationMatrix4);
      lineElementId = d2ElementController.createD2LineElementShapeItem(layerItemId2, startPosition.toVector2(), endPosition.toVector2(), {
        strokeWidth: 3.5
      });
      d2ElementController.updateD2ElementShapeItemAttrByJSONData(lineElementId, { elementItemName: `\u5206\u9488\u5C3E`, strokeColor: Color.YELLOW });
    }
    if (RUN_PROFILE.isShowSecondHand) {
      rotationMatrix4 = CanvasMatrix4.setRotationByVector3(rotationOfSec, new Vector3(0, 0, 1));
      startPosition = new Vector3(0, 0, 0).multiplyMatrix4(rotationMatrix4);
      endPosition = new Vector3(0, outCircleRadius2 - 10, 0).multiplyMatrix4(rotationMatrix4);
      lineElementId = d2ElementController.createD2LineElementShapeItem(layerItemId2, startPosition.toVector2(), endPosition.toVector2(), {
        strokeWidth: 2.5
      });
      d2ElementController.updateD2ElementShapeItemAttrByJSONData(lineElementId, { elementItemName: `\u79D2\u9488`, strokeColor: Color.RED });
      rotationMatrix4 = CanvasMatrix4.setRotationByVector3(rotationOfSec + Math.PI, new Vector3(0, 0, 1));
      startPosition = new Vector3(0, 0, 0).multiplyMatrix4(rotationMatrix4);
      endPosition = new Vector3(0, 32, 0).multiplyMatrix4(rotationMatrix4);
      lineElementId = d2ElementController.createD2LineElementShapeItem(layerItemId2, startPosition.toVector2(), endPosition.toVector2(), {
        strokeWidth: 2.5
      });
      d2ElementController.updateD2ElementShapeItemAttrByJSONData(lineElementId, { elementItemName: `\u79D2\u9488\u5C3E`, strokeColor: Color.RED });
    }
    const centerCircleElementItem1 = d2ElementController.createD2CircleElementShapeItem(layerItemId3, new Vector2(0, 0), {
      radius: 4,
      strokeWidth: 0.5
    });
    d2ElementController.updateD2ElementShapeItemAttrByJSONData(centerCircleElementItem1, {
      elementItemName: `\u4E2D\u5FC3\u5916\u5706`,
      strokeColor: Color.ORIGIN,
      fillColor: Color.ORIGIN
    });
    const centerCircleElementItem2 = d2ElementController.createD2CircleElementShapeItem(layerItemId3, new Vector2(0, 0), {
      radius: 2,
      strokeWidth: 0.5
    });
    d2ElementController.updateD2ElementShapeItemAttrByJSONData(centerCircleElementItem2, {
      elementItemName: `\u4E2D\u5FC3\u5185\u5706`,
      strokeColor: Color.GOLDEN,
      fillColor: Color.GOLDEN
    });
    window.requestAnimationFrame((timeStamp2) => {
      drawPlaneClock(webCanvas, canvasContainerElement, timeStamp2, layerItemId1, layerItemId2, layerItemId3);
    });
  }
  function createTextVertexData(d2TextElementController) {
    const allTexts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    for (let i = 0; i < allTexts.length; i++) {
      d2TextElementController.createD2TextVertexDataItem(allTexts[i], {
        fontFamily: RUN_PROFILE.scaleFontFamily,
        fontSize: RUN_PROFILE.outCircleRadius / 7
      }).then((d2TextVertexData) => {
        RUN_PROFILE.scaleTextVertexs.push({
          textContent: allTexts[i],
          d2TextVertexData
        });
      });
    }
  }
  function drawPlaneClockInit(webCanvas, canvasContainerElement) {
    const { d2ElementController, d2TextElementController, drawLayerController } = webCanvas;
    const clockLayerItemId1 = drawLayerController.createDrawLayerShapeItem(`Layer Clock1`);
    const clockLayerItemId2 = drawLayerController.createDrawLayerShapeItem(`Layer Clock2`);
    const clockLayerItemId3 = drawLayerController.createDrawLayerShapeItem(`Layer Clock2`);
    drawLayerController.clearAllDrawLayersSelectedStatus();
    const DPI = webCanvas.getDPI();
    const canvasRect = webCanvas.getCanvasRect();
    const isWidthLess = canvasRect.width < canvasRect.height;
    const shorterSideSize = isWidthLess ? canvasRect.width : canvasRect.height;
    const shorterSideSizePhysics = px2mm(+shorterSideSize, isWidthLess ? DPI[0] : DPI[1]);
    RUN_PROFILE.baseLength = shorterSideSizePhysics / 2 * 0.7;
    RUN_PROFILE.outCircleRadius = RUN_PROFILE.baseLength + 5;
    RIPPLE_PROFILE.maxRadius = RUN_PROFILE.outCircleRadius;
    RIPPLE_PROFILE.speed = RIPPLE_PROFILE.maxRadius / RIPPLE_PROFILE.duration;
    createTextVertexData(d2TextElementController);
    window.requestAnimationFrame((timeStamp) => {
      RUN_PROFILE.lastTimeStamp = timeStamp;
      drawPlaneClock(webCanvas, canvasContainerElement, timeStamp, clockLayerItemId1, clockLayerItemId2, clockLayerItemId3);
    });
  }

  // src/$instance/d2SimpleClock/utils/initWebSystemConfig.ts
  function initWebSystemConfig2(webCanvas) {
    const systemConfig = webCanvas.getSystemConfig();
    webCanvas.setSystemConfig("Interactive", "enableCanvasSelection", false);
    webCanvas.setSystemConfig("Interactive", "enableCanvasTranslateByLeftDownMove", false);
    webCanvas.setSystemConfig("Interactive", "enableCanvasTranslateByRightDownMove", true);
    webCanvas.setSystemConfig("CanvasAidedDesign", "enableAxis", true);
    webCanvas.setSystemConfig("CanvasAidedDesign", "enableGridDot", true);
    webCanvas.setSystemConfig("CanvasAidedDesign", "enableGrid", true);
    webCanvas.setSystemConfig("CanvasAidedDesign", "enableMultiGrid", true);
    webCanvas.setSystemConfig("enbaleFPSCount", true);
    console.log(systemConfig);
  }

  // src/$instance/d2SimpleClock/index.ts
  function initMessageHandle2(webCanvas) {
    return __async(this, null, function* () {
      webCanvas.addOperationProfileChangeListener((params) => __async(null, null, function* () {
      }));
    });
  }
  function main2() {
    initWebCanvas().then((_0) => __async(null, [_0], function* ({ webCanvas, canvasContainerElement }) {
      const { messageTool } = webCanvas;
      initWebSystemConfig2(webCanvas);
      initFloatPanel(webCanvas);
      initEventHandle(webCanvas);
      initMessageHandle2(webCanvas);
      Helper2.FloatPanel.canvasProfilePanelControl.update(webCanvas.getCanvasProfileData());
      webCanvas.addCanvasProfileChangeListener((params) => {
      });
      const messageResult = yield messageTool.windowMessageBridge.asyncRequest(`LIB2UI_SVR-CANVAS_READY`, { ready: true }, window.top);
      console.log(`LIB2UI_SVR-CANVAS_READY: `, messageResult);
      drawPlaneClockInit(webCanvas, canvasContainerElement);
      console.log(webCanvas);
    }));
  }

  // src/index.ts
  window.addEventListener("DOMContentLoaded", () => {
    main2();
  });
})();
//# sourceMappingURL=index.js.map
