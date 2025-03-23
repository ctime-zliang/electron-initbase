(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/engine/common/algorithm/RBTree/RBTree.ts":
/*!******************************************************!*\
  !*** ./src/engine/common/algorithm/RBTree/RBTree.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RBTree: () => (/* binding */ RBTree),
/* harmony export */   RBTreeNode: () => (/* binding */ RBTreeNode),
/* harmony export */   createRBTree: () => (/* binding */ createRBTree)
/* harmony export */ });

var ERBTREE_COLOR = /* @__PURE__ */ ((ERBTREE_COLOR2) => {
  ERBTREE_COLOR2["RED"] = "RED";
  ERBTREE_COLOR2["BLACK"] = "BLACK";
  return ERBTREE_COLOR2;
})(ERBTREE_COLOR || {});
function defaultCompare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
function cloneNode(node) {
  return new RBTreeNode(node.color, node.key, node.value, node.left, node.right, node.count);
}
function repaint(color, node) {
  return new RBTreeNode(color, node.key, node.value, node.left, node.right, node.count);
}
function recount(node) {
  node.count = 1 + (node.left ? node.left.count : 0) + (node.right ? node.right.count : 0);
}
function doVisit(lo, hi, compare, visit, node) {
  let l = compare(lo, node.key);
  let h = compare(hi, node.key);
  let v = void 0;
  if (l <= 0) {
    if (node.left) {
      v = doVisit(lo, hi, compare, visit, node.left);
      if (v) {
        return v;
      }
    }
    if (h > 0) {
      v = visit(node.key, node.value);
      if (v) {
        return v;
      }
    }
  }
  if (h > 0 && node.right) {
    return doVisit(lo, hi, compare, visit, node.right);
  }
}
function doVisitHalf(lo, compare, visit, node) {
  const l = compare(lo, node.key);
  if (l <= 0) {
    if (node.left) {
      const v2 = doVisitHalf(lo, compare, visit, node.left);
      if (v2) {
        return v2;
      }
    }
    const v = visit(node.key, node.value);
    if (v) {
      return v;
    }
  }
  if (node.right) {
    return doVisitHalf(lo, compare, visit, node.right);
  }
}
function doVisitFull(visit, node) {
  if (node.left) {
    const v2 = doVisitFull(visit, node.left);
    if (v2) {
      return v2;
    }
  }
  const v = visit(node.key, node.value);
  if (v) {
    return v;
  }
  if (node.right) {
    return doVisitFull(visit, node.right);
  }
}
function swapNode(n, v) {
  n.key = v.key;
  n.value = v.value;
  n.left = v.left;
  n.right = v.right;
  n.color = v.color;
  n.count = v.count;
}
function fixDoubleBlack(stack) {
  let n = null;
  let p = null;
  let s = null;
  let z = null;
  for (let i = stack.length - 1; i >= 0; --i) {
    n = stack[i];
    if (i === 0) {
      n.color = "BLACK" /* BLACK */;
      return;
    }
    p = stack[i - 1];
    if (p.left === n) {
      s = p.right;
      if (s.right && s.right.color === "RED" /* RED */) {
        s = p.right = cloneNode(s);
        z = s.right = cloneNode(s.right);
        p.right = s.left;
        s.left = p;
        s.right = z;
        s.color = p.color;
        n.color = "BLACK" /* BLACK */;
        p.color = "BLACK" /* BLACK */;
        z.color = "BLACK" /* BLACK */;
        recount(p);
        recount(s);
        if (i > 1) {
          let pp = stack[i - 2];
          if (pp.left === p) {
            pp.left = s;
          } else {
            pp.right = s;
          }
        }
        stack[i - 1] = s;
        return;
      } else if (s.left && s.left.color === "RED" /* RED */) {
        s = p.right = cloneNode(s);
        z = s.left = cloneNode(s.left);
        p.right = z.left;
        s.left = z.right;
        z.left = p;
        z.right = s;
        z.color = p.color;
        p.color = "BLACK" /* BLACK */;
        s.color = "BLACK" /* BLACK */;
        n.color = "BLACK" /* BLACK */;
        recount(p);
        recount(s);
        recount(z);
        if (i > 1) {
          let pp = stack[i - 2];
          if (pp.left === p) {
            pp.left = z;
          } else {
            pp.right = z;
          }
        }
        stack[i - 1] = z;
        return;
      }
      if (s.color === "BLACK" /* BLACK */) {
        if (p.color === "RED" /* RED */) {
          p.color = "BLACK" /* BLACK */;
          p.right = repaint("RED" /* RED */, s);
          return;
        } else {
          p.right = repaint("RED" /* RED */, s);
          continue;
        }
      } else {
        s = cloneNode(s);
        p.right = s.left;
        s.left = p;
        s.color = p.color;
        p.color = "RED" /* RED */;
        recount(p);
        recount(s);
        if (i > 1) {
          let pp = stack[i - 2];
          if (pp.left === p) {
            pp.left = s;
          } else {
            pp.right = s;
          }
        }
        stack[i - 1] = s;
        stack[i] = p;
        if (i + 1 < stack.length) {
          stack[i + 1] = n;
        } else {
          stack.push(n);
        }
        i = i + 2;
      }
    } else {
      s = p.left;
      if (s.left && s.left.color === "RED" /* RED */) {
        s = p.left = cloneNode(s);
        z = s.left = cloneNode(s.left);
        p.left = s.right;
        s.right = p;
        s.left = z;
        s.color = p.color;
        n.color = "BLACK" /* BLACK */;
        p.color = "BLACK" /* BLACK */;
        z.color = "BLACK" /* BLACK */;
        recount(p);
        recount(s);
        if (i > 1) {
          let pp = stack[i - 2];
          if (pp.right === p) {
            pp.right = s;
          } else {
            pp.left = s;
          }
        }
        stack[i - 1] = s;
        return;
      } else if (s.right && s.right.color === "RED" /* RED */) {
        s = p.left = cloneNode(s);
        z = s.right = cloneNode(s.right);
        p.left = z.right;
        s.right = z.left;
        z.right = p;
        z.left = s;
        z.color = p.color;
        p.color = "BLACK" /* BLACK */;
        s.color = "BLACK" /* BLACK */;
        n.color = "BLACK" /* BLACK */;
        recount(p);
        recount(s);
        recount(z);
        if (i > 1) {
          let pp = stack[i - 2];
          if (pp.right === p) {
            pp.right = z;
          } else {
            pp.left = z;
          }
        }
        stack[i - 1] = z;
        return;
      }
      if (s.color === "BLACK" /* BLACK */) {
        if (p.color === "RED" /* RED */) {
          p.color = "BLACK" /* BLACK */;
          p.left = repaint("RED" /* RED */, s);
          return;
        } else {
          p.left = repaint("RED" /* RED */, s);
          continue;
        }
      } else {
        s = cloneNode(s);
        p.left = s.right;
        s.right = p;
        s.color = p.color;
        p.color = "RED" /* RED */;
        recount(p);
        recount(s);
        if (i > 1) {
          let pp = stack[i - 2];
          if (pp.right === p) {
            pp.right = s;
          } else {
            pp.left = s;
          }
        }
        stack[i - 1] = s;
        stack[i] = p;
        if (i + 1 < stack.length) {
          stack[i + 1] = n;
        } else {
          stack.push(n);
        }
        i = i + 2;
      }
    }
  }
}
class RBTreeNode {
  constructor(color, key, value, left, right, count) {
    this._color = color;
    this._key = key;
    this._value = value;
    this._left = left;
    this._right = right;
    this._count = count;
  }
  get color() {
    return this._color;
  }
  set color(value) {
    this._color = value;
  }
  get key() {
    return this._key;
  }
  set key(value) {
    this._key = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  get left() {
    return this._left;
  }
  set left(value) {
    this._left = value;
  }
  get right() {
    return this._right;
  }
  set right(value) {
    this._right = value;
  }
  get count() {
    return this._count;
  }
  set count(value) {
    this._count = value;
  }
}
class RBTree {
  constructor(compare, root) {
    this._compare = compare;
    this._root = root;
  }
  get compare() {
    return this._compare;
  }
  set compare(value) {
    this._compare = value;
  }
  get root() {
    return this._root;
  }
  set root(value) {
    this._root = value;
  }
  get keys() {
    const result = [];
    this.forEach((k, v) => {
      result.push(k);
    });
    return result;
  }
  get values() {
    const result = [];
    this.forEach((k, v) => {
      result.push(v);
    });
    return result;
  }
  get length() {
    if (this.root) {
      return this.root.count;
    }
    return 0;
  }
  get begin() {
    let stack = [];
    let n = this.root;
    while (n) {
      stack.push(n);
      n = n.left;
    }
    return new RedBlackTreeIterator(this, stack);
  }
  get end() {
    let stack = [];
    let n = this.root;
    while (n) {
      stack.push(n);
      n = n.right;
    }
    return new RedBlackTreeIterator(this, stack);
  }
  forEach(visit, lo, hi) {
    if (!this.root) {
      return;
    }
    switch (arguments.length) {
      case 1:
        return doVisitFull(visit, this.root);
      case 2:
        return doVisitHalf(lo, this.compare, visit, this.root);
      case 3:
        if (this.compare(lo, hi) >= 0) {
          return;
        }
        return doVisit(lo, hi, this.compare, visit, this.root);
    }
  }
  insert(key, value) {
    let cmp = this.compare;
    let n = this.root;
    let n_stack = [];
    let d_stack = [];
    while (n) {
      let d = cmp(key, n.key);
      n_stack.push(n);
      d_stack.push(d);
      if (d <= 0) {
        n = n.left;
      } else {
        n = n.right;
      }
    }
    n_stack.push(new RBTreeNode("RED" /* RED */, key, value, null, null, 1));
    for (let s = n_stack.length - 2; s >= 0; --s) {
      let n2 = n_stack[s];
      if (d_stack[s] <= 0) {
        n_stack[s] = new RBTreeNode(n2.color, n2.key, n2.value, n_stack[s + 1], n2.right, n2.count + 1);
      } else {
        n_stack[s] = new RBTreeNode(n2.color, n2.key, n2.value, n2.left, n_stack[s + 1], n2.count + 1);
      }
    }
    for (let s = n_stack.length - 1; s > 1; --s) {
      let p = n_stack[s - 1];
      let n2 = n_stack[s];
      if (p.color === "BLACK" /* BLACK */ || n2.color === "BLACK" /* BLACK */) {
        break;
      }
      let pp = n_stack[s - 2];
      if (pp.left === p) {
        if (p.left === n2) {
          let y = pp.right;
          if (y && y.color === "RED" /* RED */) {
            p.color = "BLACK" /* BLACK */;
            pp.right = repaint("BLACK" /* BLACK */, y);
            pp.color = "RED" /* RED */;
            s -= 1;
          } else {
            pp.color = "RED" /* RED */;
            pp.left = p.right;
            p.color = "BLACK" /* BLACK */;
            p.right = pp;
            n_stack[s - 2] = p;
            n_stack[s - 1] = n2;
            recount(pp);
            recount(p);
            if (s >= 3) {
              let ppp = n_stack[s - 3];
              if (ppp.left === pp) {
                ppp.left = p;
              } else {
                ppp.right = p;
              }
            }
            break;
          }
        } else {
          let y = pp.right;
          if (y && y.color === "RED" /* RED */) {
            p.color = "BLACK" /* BLACK */;
            pp.right = repaint("BLACK" /* BLACK */, y);
            pp.color = "RED" /* RED */;
            s -= 1;
          } else {
            p.right = n2.left;
            pp.color = "RED" /* RED */;
            pp.left = n2.right;
            n2.color = "BLACK" /* BLACK */;
            n2.left = p;
            n2.right = pp;
            n_stack[s - 2] = n2;
            n_stack[s - 1] = p;
            recount(pp);
            recount(p);
            recount(n2);
            if (s >= 3) {
              let ppp = n_stack[s - 3];
              if (ppp.left === pp) {
                ppp.left = n2;
              } else {
                ppp.right = n2;
              }
            }
            break;
          }
        }
      } else {
        if (p.right === n2) {
          let y = pp.left;
          if (y && y.color === "RED" /* RED */) {
            p.color = "BLACK" /* BLACK */;
            pp.left = repaint("BLACK" /* BLACK */, y);
            pp.color = "RED" /* RED */;
            s -= 1;
          } else {
            pp.color = "RED" /* RED */;
            pp.right = p.left;
            p.color = "BLACK" /* BLACK */;
            p.left = pp;
            n_stack[s - 2] = p;
            n_stack[s - 1] = n2;
            recount(pp);
            recount(p);
            if (s >= 3) {
              let ppp = n_stack[s - 3];
              if (ppp.right === pp) {
                ppp.right = p;
              } else {
                ppp.left = p;
              }
            }
            break;
          }
        } else {
          let y = pp.left;
          if (y && y.color === "RED" /* RED */) {
            p.color = "BLACK" /* BLACK */;
            pp.left = repaint("BLACK" /* BLACK */, y);
            pp.color = "RED" /* RED */;
            s -= 1;
          } else {
            p.left = n2.right;
            pp.color = "RED" /* RED */;
            pp.right = n2.left;
            n2.color = "BLACK" /* BLACK */;
            n2.right = p;
            n2.left = pp;
            n_stack[s - 2] = n2;
            n_stack[s - 1] = p;
            recount(pp);
            recount(p);
            recount(n2);
            if (s >= 3) {
              let ppp = n_stack[s - 3];
              if (ppp.right === pp) {
                ppp.right = n2;
              } else {
                ppp.left = n2;
              }
            }
            break;
          }
        }
      }
    }
    n_stack[0].color = "BLACK" /* BLACK */;
    return new RBTree(cmp, n_stack[0]);
  }
  at(idx) {
    if (idx < 0) {
      return new RedBlackTreeIterator(this, []);
    }
    let n = this.root;
    let stack = [];
    while (true) {
      stack.push(n);
      if (n.left) {
        if (idx < n.left.count) {
          n = n.left;
          continue;
        }
        idx -= n.left.count;
      }
      if (!idx) {
        return new RedBlackTreeIterator(this, stack);
      }
      idx -= 1;
      if (n.right) {
        if (idx >= n.right.count) {
          break;
        }
        n = n.right;
      } else {
        break;
      }
    }
    return new RedBlackTreeIterator(this, []);
  }
  ge(key) {
    let cmp = this.compare;
    let n = this.root;
    let stack = [];
    let last_ptr = 0;
    while (n) {
      let d = cmp(key, n.key);
      stack.push(n);
      if (d <= 0) {
        last_ptr = stack.length;
      }
      if (d <= 0) {
        n = n.left;
      } else {
        n = n.right;
      }
    }
    stack.length = last_ptr;
    return new RedBlackTreeIterator(this, stack);
  }
  gt(key) {
    let cmp = this.compare;
    let n = this.root;
    let stack = [];
    let last_ptr = 0;
    while (n) {
      let d = cmp(key, n.key);
      stack.push(n);
      if (d < 0) {
        last_ptr = stack.length;
      }
      if (d < 0) {
        n = n.left;
      } else {
        n = n.right;
      }
    }
    stack.length = last_ptr;
    return new RedBlackTreeIterator(this, stack);
  }
  lt(key) {
    let cmp = this.compare;
    let n = this.root;
    let stack = [];
    let last_ptr = 0;
    while (n) {
      let d = cmp(key, n.key);
      stack.push(n);
      if (d > 0) {
        last_ptr = stack.length;
      }
      if (d <= 0) {
        n = n.left;
      } else {
        n = n.right;
      }
    }
    stack.length = last_ptr;
    return new RedBlackTreeIterator(this, stack);
  }
  le(key) {
    let cmp = this.compare;
    let n = this.root;
    let stack = [];
    let last_ptr = 0;
    while (n) {
      let d = cmp(key, n.key);
      stack.push(n);
      if (d >= 0) {
        last_ptr = stack.length;
      }
      if (d < 0) {
        n = n.left;
      } else {
        n = n.right;
      }
    }
    stack.length = last_ptr;
    return new RedBlackTreeIterator(this, stack);
  }
  find(key) {
    let cmp = this.compare;
    let n = this.root;
    let stack = [];
    while (n) {
      let d = cmp(key, n.key);
      stack.push(n);
      if (d === 0) {
        return new RedBlackTreeIterator(this, stack);
      }
      if (d <= 0) {
        n = n.left;
      } else {
        n = n.right;
      }
    }
    return new RedBlackTreeIterator(this, []);
  }
  remove(key) {
    const iter = this.find(key);
    if (iter) {
      return iter.remove();
    }
    return this;
  }
  get(key) {
    let cmp = this.compare;
    let n = this.root;
    while (n) {
      let d = cmp(key, n.key);
      if (d === 0) {
        return n.value;
      }
      if (d <= 0) {
        n = n.left;
      } else {
        n = n.right;
      }
    }
    return;
  }
}
class RedBlackTreeIterator {
  constructor(tree, stack) {
    this._tree = tree;
    this._stack = stack;
  }
  get tree() {
    return this._tree;
  }
  set tree(value) {
    this._tree = value;
  }
  get stack() {
    return this._stack;
  }
  set stack(value) {
    this._stack = value;
  }
  get valid() {
    return this._stack.length > 0;
  }
  get hasPrev() {
    let stack = this.stack;
    if (stack.length === 0) {
      return false;
    }
    if (stack[stack.length - 1].left) {
      return true;
    }
    for (let s = stack.length - 1; s > 0; --s) {
      if (stack[s - 1].right === stack[s]) {
        return true;
      }
    }
    return false;
  }
  get hasNext() {
    let stack = this._stack;
    if (stack.length === 0) {
      return false;
    }
    if (stack[stack.length - 1].right) {
      return true;
    }
    for (let s = stack.length - 1; s > 0; --s) {
      if (stack[s - 1].left === stack[s]) {
        return true;
      }
    }
    return false;
  }
  clone() {
    return new RedBlackTreeIterator(this.tree, this._stack.slice());
  }
  remove() {
    let stack = this.stack;
    if (stack.length === 0) {
      return this.tree;
    }
    let cstack = new Array(stack.length);
    let n = stack[stack.length - 1];
    cstack[cstack.length - 1] = new RBTreeNode(n.color, n.key, n.value, n.left, n.right, n.count);
    for (let i = stack.length - 2; i >= 0; --i) {
      let n2 = stack[i];
      if (n2.left === stack[i + 1]) {
        cstack[i] = new RBTreeNode(n2.color, n2.key, n2.value, cstack[i + 1], n2.right, n2.count);
      } else {
        cstack[i] = new RBTreeNode(n2.color, n2.key, n2.value, n2.left, cstack[i + 1], n2.count);
      }
    }
    n = cstack[cstack.length - 1];
    if (n.left && n.right) {
      let split = cstack.length;
      n = n.left;
      while (n.right) {
        cstack.push(n);
        n = n.right;
      }
      let v = cstack[split - 1];
      cstack.push(new RBTreeNode(n.color, v.key, v.value, n.left, n.right, n.count));
      cstack[split - 1].key = n.key;
      cstack[split - 1].value = n.value;
      for (let i = cstack.length - 2; i >= split; --i) {
        n = cstack[i];
        cstack[i] = new RBTreeNode(n.color, n.key, n.value, n.left, cstack[i + 1], n.count);
      }
      cstack[split - 1].left = cstack[split];
    }
    n = cstack[cstack.length - 1];
    if (n.color === "RED" /* RED */) {
      let p = cstack[cstack.length - 2];
      if (p.left === n) {
        p.left = null;
      } else if (p.right === n) {
        p.right = null;
      }
      cstack.pop();
      for (let i = 0; i < cstack.length; ++i) {
        cstack[i].count--;
      }
      return new RBTree(this.tree.compare, cstack[0]);
    } else {
      if (n.left || n.right) {
        if (n.left) {
          swapNode(n, n.left);
        } else if (n.right) {
          swapNode(n, n.right);
        }
        n.color = "BLACK" /* BLACK */;
        for (let i = 0; i < cstack.length - 1; ++i) {
          cstack[i].count--;
        }
        return new RBTree(this.tree.compare, cstack[0]);
      } else if (cstack.length === 1) {
        return new RBTree(this.tree.compare, null);
      } else {
        for (let i = 0; i < cstack.length; ++i) {
          cstack[i].count--;
        }
        let parent = cstack[cstack.length - 2];
        fixDoubleBlack(cstack);
        if (parent.left === n) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    return new RBTree(this.tree.compare, cstack[0]);
  }
  next() {
    let stack = this._stack;
    if (stack.length === 0) {
      return;
    }
    let n = stack[stack.length - 1];
    if (n.right) {
      n = n.right;
      while (n) {
        stack.push(n);
        n = n.left;
      }
    } else {
      stack.pop();
      while (stack.length > 0 && stack[stack.length - 1].right === n) {
        n = stack[stack.length - 1];
        stack.pop();
      }
    }
  }
  prev() {
    let stack = this._stack;
    if (stack.length === 0) {
      return;
    }
    let n = stack[stack.length - 1];
    if (n.left) {
      n = n.left;
      while (n) {
        stack.push(n);
        n = n.right;
      }
    } else {
      stack.pop();
      while (stack.length > 0 && stack[stack.length - 1].left === n) {
        n = stack[stack.length - 1];
        stack.pop();
      }
    }
  }
  update(value) {
    let stack = this._stack;
    if (stack.length === 0) {
      throw new Error("Can't update empty node!");
    }
    let cstack = new Array(stack.length);
    let n = stack[stack.length - 1];
    cstack[cstack.length - 1] = new RBTreeNode(n.color, n.key, value, n.left, n.right, n.count);
    for (let i = stack.length - 2; i >= 0; --i) {
      n = stack[i];
      if (n.left === stack[i + 1]) {
        cstack[i] = new RBTreeNode(n.color, n.key, n.value, cstack[i + 1], n.right, n.count);
      } else {
        cstack[i] = new RBTreeNode(n.color, n.key, n.value, n.left, cstack[i + 1], n.count);
      }
    }
    return new RBTree(this.tree.compare, cstack[0]);
  }
}
Object.defineProperty(RedBlackTreeIterator.prototype, "node", {
  get: function() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
    return null;
  },
  enumerable: true
});
Object.defineProperty(RedBlackTreeIterator.prototype, "key", {
  get: function() {
    if (this._stack.length > 0) {
      return this._stack[this._stack.length - 1].key;
    }
    return void 0;
  },
  enumerable: true
});
Object.defineProperty(RedBlackTreeIterator.prototype, "value", {
  get: function() {
    if (this._stack.length > 0) {
      return this._stack[this._stack.length - 1].value;
    }
    return void 0;
  },
  enumerable: true
});
Object.defineProperty(RedBlackTreeIterator.prototype, "index", {
  get: function() {
    let idx = 0;
    let stack = this._stack;
    if (stack.length === 0) {
      let r = this.tree.root;
      if (r) {
        return r.count;
      }
      return 0;
    } else if (stack[stack.length - 1].left) {
      idx = stack[stack.length - 1].left.count;
    }
    for (let s = stack.length - 2; s >= 0; --s) {
      if (stack[s + 1] === stack[s].right) {
        ++idx;
        if (stack[s].left) {
          idx += stack[s].left.count;
        }
      }
    }
    return idx;
  },
  enumerable: true
});
function createRBTree(compare) {
  return new RBTree(compare || defaultCompare, null);
}


/***/ }),

/***/ "./src/engine/common/algorithm/binarySearchBounds/binarySearchBounds.ts":
/*!******************************************************************************!*\
  !*** ./src/engine/common/algorithm/binarySearchBounds/binarySearchBounds.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bounds: () => (/* binding */ bounds)
/* harmony export */ });

function ge() {
  function A(a, l, h, y) {
    let i = h + 1;
    while (l <= h) {
      let m = l + h >>> 1;
      let x = a[m];
      if (x >= y) {
        i = m;
        h = m - 1;
      } else {
        l = m + 1;
      }
    }
    return i;
  }
  function P(a, l, h, y, c) {
    let i = h + 1;
    while (l <= h) {
      let m = l + h >>> 1;
      let x = a[m];
      if (c(x, y) >= 0) {
        i = m;
        h = m - 1;
      } else {
        l = m + 1;
      }
    }
    return i;
  }
  return function(a, y, c, l, h) {
    if (typeof c === "function") {
      return P(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    } else {
      return A(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
    }
  };
}
function gt() {
  function A(a, l, h, y) {
    let i = h + 1;
    while (l <= h) {
      let m = l + h >>> 1;
      let x = a[m];
      if (x > y) {
        i = m;
        h = m - 1;
      } else {
        l = m + 1;
      }
    }
    return i;
  }
  function P(a, l, h, y, c) {
    let i = h + 1;
    while (l <= h) {
      let m = l + h >>> 1;
      let x = a[m];
      if (c(x, y) > 0) {
        i = m;
        h = m - 1;
      } else {
        l = m + 1;
      }
    }
    return i;
  }
  return function(a, y, c, l, h) {
    if (typeof c === "function") {
      return P(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    } else {
      return A(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
    }
  };
}
function lt() {
  function A(a, l, h, y) {
    let i = l - 1;
    while (l <= h) {
      let m = l + h >>> 1;
      let x = a[m];
      if (x < y) {
        i = m;
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
    return i;
  }
  function P(a, l, h, y, c) {
    let i = l - 1;
    while (l <= h) {
      let m = l + h >>> 1;
      let x = a[m];
      if (c(x, y) < 0) {
        i = m;
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
    return i;
  }
  return function(a, y, c, l, h) {
    if (typeof c === "function") {
      return P(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    } else {
      return A(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
    }
  };
}
function le() {
  function A(a, l, h, y) {
    let i = l - 1;
    while (l <= h) {
      let m = l + h >>> 1;
      let x = a[m];
      if (x <= y) {
        i = m;
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
    return i;
  }
  function P(a, l, h, y, c) {
    let i = l - 1;
    while (l <= h) {
      let m = l + h >>> 1;
      let x = a[m];
      if (c(x, y) <= 0) {
        i = m;
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
    return i;
  }
  return function(a, y, c, l, h) {
    if (typeof c === "function") {
      return P(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    } else {
      return A(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
    }
  };
}
function eq() {
  function A(a, l, h, y) {
    let i = l - 1;
    while (l <= h) {
      let m = l + h >>> 1;
      let x = a[m];
      if (x === y) {
        return m;
      } else if (x <= y) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
    return -1;
  }
  function P(a, l, h, y, c) {
    let i = l - 1;
    while (l <= h) {
      let m = l + h >>> 1;
      let x = a[m];
      let p = c(x, y);
      if (p === 0) {
        return m;
      } else if (p <= 0) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
    return -1;
  }
  return function(a, y, c, l, h) {
    if (typeof c === "function") {
      return P(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    } else {
      return A(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
    }
  };
}
const bounds = {
  ge: (...args) => {
    return ge()(...args);
  },
  gt: (...args) => {
    return gt()(...args);
  },
  lt: (...args) => {
    return lt()(...args);
  },
  le: (...args) => {
    return le()(...args);
  },
  eq: (...args) => {
    return eq()(...args);
  }
};


/***/ }),

/***/ "./src/engine/common/algorithm/intervalTree/intervalTree.ts":
/*!******************************************************************!*\
  !*** ./src/engine/common/algorithm/intervalTree/intervalTree.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EIntervalTreeSear: () => (/* binding */ EIntervalTreeSear),
/* harmony export */   IntervalTree: () => (/* binding */ IntervalTree),
/* harmony export */   makeIntervalTree: () => (/* binding */ makeIntervalTree)
/* harmony export */ });
/* harmony import */ var _binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../binarySearchBounds/binarySearchBounds */ "./src/engine/common/algorithm/binarySearchBounds/binarySearchBounds.ts");


var EIntervalTreeSear = /* @__PURE__ */ ((EIntervalTreeSear2) => {
  EIntervalTreeSear2[EIntervalTreeSear2["NOT_FOUND"] = 0] = "NOT_FOUND";
  EIntervalTreeSear2[EIntervalTreeSear2["SUCCESS"] = 1] = "SUCCESS";
  EIntervalTreeSear2[EIntervalTreeSear2["EMPTY"] = 2] = "EMPTY";
  return EIntervalTreeSear2;
})(EIntervalTreeSear || {});
function reportLeftRange(arr, hi, cb) {
  for (let i = 0; i < arr.length && arr[i][0] <= hi; ++i) {
    let r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}
function reportRightRange(arr, lo, cb) {
  for (let i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    let r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}
function reportRange(arr, cb) {
  for (let i = 0; i < arr.length; ++i) {
    let r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}
function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}
function rebuild(node, intervals) {
  const ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}
function rebuildWithInterval(node, interval) {
  const intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}
function rebuildWithoutInterval(node, interval) {
  const intervals = node.intervals([]);
  const idx = intervals.indexOf(interval);
  if (idx < 0) {
    return 0 /* NOT_FOUND */;
  }
  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return 1 /* SUCCESS */;
}
class IntervalTreeNode {
  constructor(mid, left, right, leftPoints, rightPoints) {
    this._mid = mid;
    this._left = left;
    this._right = right;
    this._leftPoints = leftPoints;
    this._rightPoints = rightPoints;
    this._count = (left ? left._count : 0) + (right ? right._count : 0) + leftPoints.length;
  }
  get mid() {
    return this._mid;
  }
  set mid(value) {
    this._mid = value;
  }
  get left() {
    return this._left;
  }
  set left(value) {
    this._left = value;
  }
  get right() {
    return this._right;
  }
  set right(value) {
    this._right = value;
  }
  get leftPoints() {
    return this._leftPoints;
  }
  set leftPoints(value) {
    this._leftPoints = value;
  }
  get rightPoints() {
    return this._rightPoints;
  }
  set rightPoints(value) {
    this._rightPoints = value;
  }
  get count() {
    return this._count;
  }
  set count(value) {
    this._count = value;
  }
  intervals(result) {
    result.push.apply(result, this.leftPoints);
    if (this.left) {
      this.left.intervals(result);
    }
    if (this.right) {
      this.right.intervals(result);
    }
    return result;
  }
  insert(interval) {
    let weight = this.count - this.leftPoints.length;
    this.count += 1;
    if (interval[1] < this.mid) {
      if (this.left) {
        if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
          rebuildWithInterval(this, interval);
        } else {
          this.left.insert(interval);
        }
      } else {
        this.left = createIntervalTree([interval]);
      }
    } else if (interval[0] > this.mid) {
      if (this.right) {
        if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
          rebuildWithInterval(this, interval);
        } else {
          this.right.insert(interval);
        }
      } else {
        this.right = createIntervalTree([interval]);
      }
    } else {
      const l = _binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.ge(this.leftPoints, interval, (a, b) => {
        let d = a[0] - b[0];
        if (d) {
          return d;
        }
        return a[1] - b[1];
      });
      const r = _binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.ge(this.rightPoints, interval, (a, b) => {
        const d = a[1] - b[1];
        if (d) {
          return d;
        }
        return a[0] - b[0];
      });
      this.leftPoints.splice(l, 0, interval);
      this.rightPoints.splice(r, 0, interval);
    }
  }
  remove(interval) {
    let weight = this.count - this.leftPoints.length;
    if (interval[1] < this.mid) {
      if (!this.left) {
        return 0 /* NOT_FOUND */;
      }
      let rw = this.right ? this.right.count : 0;
      if (4 * rw > 3 * (weight - 1)) {
        return rebuildWithoutInterval(this, interval);
      }
      let r = this.left.remove(interval);
      if (r === 2 /* EMPTY */) {
        this.left = null;
        this.count -= 1;
        return 1 /* SUCCESS */;
      } else if (r === 1 /* SUCCESS */) {
        this.count -= 1;
      }
      return r;
    } else if (interval[0] > this.mid) {
      if (!this.right) {
        return 0 /* NOT_FOUND */;
      }
      let lw = this.left ? this.left.count : 0;
      if (4 * lw > 3 * (weight - 1)) {
        return rebuildWithoutInterval(this, interval);
      }
      let r = this.right.remove(interval);
      if (r === 2 /* EMPTY */) {
        this.right = null;
        this.count -= 1;
        return 1 /* SUCCESS */;
      } else if (r === 1 /* SUCCESS */) {
        this.count -= 1;
      }
      return r;
    } else {
      if (this.count === 1) {
        if (this.leftPoints[0] === interval) {
          return 2 /* EMPTY */;
        } else {
          return 0 /* NOT_FOUND */;
        }
      }
      if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
        if (this.left && this.right) {
          let p = this;
          let n = this.left;
          while (n.right) {
            p = n;
            n = n.right;
          }
          if (p === this) {
            n.right = this.right;
          } else {
            let l = this.left;
            let r = this.right;
            p.count -= n.count;
            p.right = n.left;
            n.left = l;
            n.right = r;
          }
          copy(this, n);
          this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
        } else if (this.left) {
          copy(this, this.left);
        } else {
          copy(this, this.right);
        }
        return 1 /* SUCCESS */;
      }
      for (let l = _binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.ge(this.leftPoints, interval, (a, b) => {
        let d = a[0] - b[0];
        if (d) {
          return d;
        }
        return a[1] - b[1];
      }); l < this.leftPoints.length; ++l) {
        if (this.leftPoints[l][0] !== interval[0]) {
          break;
        }
        if (this.leftPoints[l] === interval) {
          this.count -= 1;
          this.leftPoints.splice(l, 1);
          for (let r = _binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.ge(this.rightPoints, interval, (a, b) => {
            const d = a[1] - b[1];
            if (d) {
              return d;
            }
            return a[0] - b[0];
          }); r < this.rightPoints.length; ++r) {
            if (this.rightPoints[r][1] !== interval[1]) {
              break;
            } else if (this.rightPoints[r] === interval) {
              this.rightPoints.splice(r, 1);
              return 1 /* SUCCESS */;
            }
          }
        }
      }
      return 0 /* NOT_FOUND */;
    }
  }
  queryPoint(x, cb) {
    if (x < this.mid) {
      if (this.left) {
        let r = this.left.queryPoint(x, cb);
        if (r) {
          return r;
        }
      }
      return reportLeftRange(this.leftPoints, x, cb);
    } else if (x > this.mid) {
      if (this.right) {
        let r = this.right.queryPoint(x, cb);
        if (r) {
          return r;
        }
      }
      return reportRightRange(this.rightPoints, x, cb);
    } else {
      return reportRange(this.leftPoints, cb);
    }
  }
  queryInterval(lo, hi, cb) {
    if (lo < this.mid && this.left) {
      let r = this.left.queryInterval(lo, hi, cb);
      if (r) {
        return r;
      }
    }
    if (hi > this.mid && this.right) {
      let r = this.right.queryInterval(lo, hi, cb);
      if (r) {
        return r;
      }
    }
    if (hi < this.mid) {
      return reportLeftRange(this.leftPoints, hi, cb);
    } else if (lo > this.mid) {
      return reportRightRange(this.rightPoints, lo, cb);
    } else {
      return reportRange(this.leftPoints, cb);
    }
  }
}
class IntervalTree {
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root;
  }
  set root(value) {
    this._root = value;
  }
  get count() {
    if (this.root) {
      return this.root.count;
    }
    return 0;
  }
  get intervals() {
    if (this.root) {
      return this.root.intervals([]);
    }
    return [];
  }
  insert(interval) {
    if (this.root) {
      this.root.insert(interval);
    } else {
      this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
    }
  }
  remove(interval) {
    if (this.root) {
      const r = this.root.remove(interval);
      if (r === 2 /* EMPTY */) {
        this.root = null;
      }
      return r !== 0 /* NOT_FOUND */;
    }
    return false;
  }
  queryPoint(p, cb) {
    if (this.root) {
      return this.root.queryPoint(p, cb);
    }
  }
  queryInterval(lo, hi, cb) {
    if (lo <= hi && this.root) {
      return this.root.queryInterval(lo, hi, cb);
    }
  }
}
function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }
  const pts = [];
  for (let i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }
  pts.sort((a, b) => {
    return a - b;
  });
  const mid = pts[pts.length >> 1];
  const leftIntervals = [];
  const rightIntervals = [];
  const centerIntervals = [];
  for (let i = 0; i < intervals.length; ++i) {
    let s = intervals[i];
    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  }
  const leftPoints = centerIntervals;
  const rightPoints = centerIntervals.slice();
  leftPoints.sort((a, b) => {
    let d = a[0] - b[0];
    if (d) {
      return d;
    }
    return a[1] - b[1];
  });
  rightPoints.sort((a, b) => {
    const d = a[1] - b[1];
    if (d) {
      return d;
    }
    return a[0] - b[0];
  });
  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
}
function makeIntervalTree(intervals) {
  if (!intervals || intervals.length === 0) {
    return new IntervalTree(null);
  }
  return new IntervalTree(createIntervalTree(intervals));
}


/***/ }),

/***/ "./src/engine/common/algorithm/slabDecomposition/SlabDecomposition.ts":
/*!****************************************************************************!*\
  !*** ./src/engine/common/algorithm/slabDecomposition/SlabDecomposition.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlabDecomposition: () => (/* binding */ SlabDecomposition),
/* harmony export */   createSlabDecomposition: () => (/* binding */ createSlabDecomposition)
/* harmony export */ });
/* harmony import */ var _RBTree_RBTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../RBTree/RBTree */ "./src/engine/common/algorithm/RBTree/RBTree.ts");
/* harmony import */ var _orderSegments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderSegments */ "./src/engine/common/algorithm/slabDecomposition/orderSegments.ts");



class SlabDecomposition {
  constructor(slabs, coordinates, horizontal) {
    this._slabs = slabs;
    this._coordinates = coordinates;
    this._horizontal = horizontal;
  }
  get slabs() {
    return this._slabs;
  }
  set slabs(value) {
    this._slabs = value;
  }
  get coordinates() {
    return this._coordinates;
  }
  set coordinates(value) {
    this._coordinates = value;
  }
  get horizontal() {
    return this._horizontal;
  }
  set horizontal(value) {
    this._horizontal = value;
  }
}
class IntervalSegment {
  constructor(y, index, start, closed) {
    this._y = y;
    this._index = index;
    this._start = start;
    this._closed = closed;
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
  }
  get index() {
    return this._index;
  }
  set index(value) {
    this._index = value;
  }
  get start() {
    return this._start;
  }
  set start(value) {
    this._start = value;
  }
  get closed() {
    return this._closed;
  }
  set closed(value) {
    this._closed = value;
  }
}
class Event {
  constructor(x, segment, create, index) {
    this._x = x;
    this._segment = segment;
    this._create = create;
    this._index = index;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
  }
  get segment() {
    return this._segment;
  }
  set segment(value) {
    this._segment = value;
  }
  get create() {
    return this._create;
  }
  set create(value) {
    this._create = value;
  }
  get index() {
    return this._index;
  }
  set index(value) {
    this._index = value;
  }
}
function createSlabDecomposition(segments) {
  let numSegments = segments.length;
  let numEvents = 2 * numSegments;
  let events = new Array(numEvents);
  for (let i = 0; i < numSegments; ++i) {
    let s = segments[i];
    let f = s[0][0] < s[1][0];
    events[2 * i] = new Event(s[0][0], s, f, i);
    events[2 * i + 1] = new Event(s[1][0], s, !f, i);
  }
  events.sort((a, b) => {
    let d = a.x - b.x;
    if (d) {
      return d;
    }
    d = a.create - b.create;
    if (d) {
      return d;
    }
    return Math.min(a.segment[0][1], a.segment[1][1]) - Math.min(b.segment[0][1], b.segment[1][1]);
  });
  let tree = (0,_RBTree_RBTree__WEBPACK_IMPORTED_MODULE_0__.createRBTree)(_orderSegments__WEBPACK_IMPORTED_MODULE_1__.OrderSegments.process);
  let slabs = [];
  let lines = [];
  let horizontal = [];
  for (let i = 0; i < numEvents; ) {
    let x = events[i].x;
    let horiz = [];
    while (i < numEvents) {
      let e = events[i];
      if (e.x !== x) {
        break;
      }
      i += 1;
      if (e.segment[0][0] === e.x && e.segment[1][0] === e.x) {
        if (e.create) {
          if (e.segment[0][1] < e.segment[1][1]) {
            horiz.push(new IntervalSegment(e.segment[0][1], e.index, true, true));
            horiz.push(new IntervalSegment(e.segment[1][1], e.index, false, false));
          } else {
            horiz.push(new IntervalSegment(e.segment[1][1], e.index, true, false));
            horiz.push(new IntervalSegment(e.segment[0][1], e.index, false, true));
          }
        }
      } else {
        if (e.create) {
          tree = tree.insert(e.segment, e.index);
        } else {
          tree = tree.remove(e.segment);
        }
      }
    }
    slabs.push(tree.root);
    lines.push(x);
    horizontal.push(horiz);
  }
  return new SlabDecomposition(slabs, lines, horizontal);
}


/***/ }),

/***/ "./src/engine/common/algorithm/slabDecomposition/orderSegments.ts":
/*!************************************************************************!*\
  !*** ./src/engine/common/algorithm/slabDecomposition/orderSegments.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderSegments: () => (/* binding */ OrderSegments)
/* harmony export */ });
/* harmony import */ var _geometry_Orients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/Orients */ "./src/engine/common/geometry/Orients.ts");


function horizontalOrder(a, b) {
  let bl;
  let br;
  if (b[0][0] < b[1][0]) {
    bl = b[0];
    br = b[1];
  } else if (b[0][0] > b[1][0]) {
    bl = b[1];
    br = b[0];
  } else {
    let alo = Math.min(a[0][1], a[1][1]);
    let ahi = Math.max(a[0][1], a[1][1]);
    let blo = Math.min(b[0][1], b[1][1]);
    let bhi = Math.max(b[0][1], b[1][1]);
    if (ahi < blo) {
      return ahi - blo;
    }
    if (alo > bhi) {
      return alo - bhi;
    }
    return ahi - bhi;
  }
  let al;
  let ar;
  if (a[0][1] < a[1][1]) {
    al = a[0];
    ar = a[1];
  } else {
    al = a[1];
    ar = a[0];
  }
  let d = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(br, bl, al);
  if (d) {
    return d;
  }
  d = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(br, bl, ar);
  if (d) {
    return d;
  }
  return ar[0] - br[0];
}
class OrderSegments {
  static process(b, a) {
    let al;
    let ar;
    if (a[0][0] < a[1][0]) {
      al = a[0];
      ar = a[1];
    } else if (a[0][0] > a[1][0]) {
      al = a[1];
      ar = a[0];
    } else {
      return horizontalOrder(a, b);
    }
    let bl;
    let br;
    if (b[0][0] < b[1][0]) {
      bl = b[0];
      br = b[1];
    } else if (b[0][0] > b[1][0]) {
      bl = b[1];
      br = b[0];
    } else {
      return -horizontalOrder(b, a);
    }
    let d1 = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(al, ar, br);
    let d2 = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(al, ar, bl);
    if (d1 < 0) {
      if (d2 <= 0) {
        return d1;
      }
    } else if (d1 > 0) {
      if (d2 >= 0) {
        return d1;
      }
    } else if (d2) {
      return d2;
    }
    d1 = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(br, bl, ar);
    d2 = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(br, bl, al);
    if (d1 < 0) {
      if (d2 <= 0) {
        return d1;
      }
    } else if (d1 > 0) {
      if (d2 >= 0) {
        return d1;
      }
    } else if (d2) {
      return d2;
    }
    return ar[0] - br[0];
  }
}


/***/ }),

/***/ "./src/engine/common/algorithm/triangulation/Triangulation.ts":
/*!********************************************************************!*\
  !*** ./src/engine/common/algorithm/triangulation/Triangulation.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Triangulation: () => (/* binding */ Triangulation),
/* harmony export */   createTriangulation: () => (/* binding */ createTriangulation)
/* harmony export */ });
/* harmony import */ var _binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../binarySearchBounds/binarySearchBounds */ "./src/engine/common/algorithm/binarySearchBounds/binarySearchBounds.ts");


function removePair(list, j, k) {
  for (let i = 1, n = list.length; i < n; i += 2) {
    if (list[i - 1] === j && list[i] === k) {
      list[i - 1] = list[n - 2];
      list[i] = list[n - 1];
      list.length = n - 2;
      return;
    }
  }
}
class Triangulation {
  constructor(stars, edges) {
    this._stars = stars;
    this._edges = edges;
    this._e = [0, 0];
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
  isConstraint(i, j) {
    this._e[0] = Math.min(i, j);
    this._e[1] = Math.max(i, j);
    return _binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.eq(this.edges, this._e, (a, b) => {
      return a[0] - b[0] || a[1] - b[1];
    }) >= 0;
  }
  removeTriangle(i, j, k) {
    removePair(this.stars[i], j, k);
    removePair(this.stars[j], k, i);
    removePair(this.stars[k], i, j);
  }
  addTriangle(i, j, k) {
    this.stars[i].push(j, k);
    this.stars[j].push(k, i);
    this.stars[k].push(i, j);
  }
  opposite(j, i) {
    const list = this.stars[i];
    for (let k = 1, n = list.length; k < n; k += 2) {
      if (list[k] === j) {
        return list[k - 1];
      }
    }
    return -1;
  }
  flip(i, j) {
    const a = this.opposite(i, j);
    const b = this.opposite(j, i);
    this.removeTriangle(i, j, a);
    this.removeTriangle(j, i, b);
    this.addTriangle(i, b, a);
    this.addTriangle(j, a, b);
  }
  cells() {
    const result = [];
    for (let i = 0, n = this.stars.length; i < n; ++i) {
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
}
function createTriangulation(numVerts, edges) {
  const stars = new Array(numVerts);
  for (let i = 0; i < numVerts; ++i) {
    stars[i] = [];
  }
  return new Triangulation(stars, edges);
}


/***/ }),

/***/ "./src/engine/common/geometry/Orients.ts":
/*!***********************************************!*\
  !*** ./src/engine/common/geometry/Orients.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orient: () => (/* binding */ orient)
/* harmony export */ });
/* harmony import */ var _math_Twos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Twos */ "./src/engine/common/math/Twos.ts");


const EPSILON = 11102230246251565e-32;
const ERRBOUND3 = (3 + 16 * EPSILON) * EPSILON;
const ERRBOUND4 = (7 + 56 * EPSILON) * EPSILON;
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
function scaleLinearExpansion(e, scale) {
  let n = e.length;
  if (n === 1) {
    let ts = (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(e[0], scale);
    if (ts[0]) {
      return ts;
    }
    return [ts[1]];
  }
  let g = new Array(2 * n);
  let q = [0.1, 0.1];
  let t = [0.1, 0.1];
  let count = 0;
  (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(e[0], scale, q);
  if (q[0]) {
    g[count++] = q[0];
  }
  for (let i = 1; i < n; ++i) {
    (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(e[i], scale, t);
    let pq = q[1];
    (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoSum)(pq, t[0], q);
    if (q[0]) {
      g[count++] = q[0];
    }
    let a = t[1];
    let b = q[1];
    let x = a + b;
    let bv = x - a;
    let y = b - bv;
    q[1] = x;
    if (y) {
      g[count++] = y;
    }
  }
  if (q[1]) {
    g[count++] = q[1];
  }
  if (count === 0) {
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
    linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m1[1], m2[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m2[1], m1[0])),
    linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m0[1], m1[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m1[1], m0[0]))
  );
  let n = linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m0[1], m2[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m2[1], m0[0]));
  let d = robustSubtract(p, n);
  return d[d.length - 1];
}
function orientation4Exact(...args) {
  const m0 = arguments[0];
  const m1 = arguments[1];
  const m2 = arguments[2];
  const m3 = arguments[4];
  let p = linearExpansionSum(
    linearExpansionSum(
      scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m2[1], m3[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m3[1], m2[0])), m1[2]),
      linearExpansionSum(
        scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m1[1], m3[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m3[1], m1[0])), -m2[2]),
        scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m1[1], m2[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m2[1], m1[0])), m3[2])
      )
    ),
    linearExpansionSum(
      scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m1[1], m3[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m3[1], m1[0])), m0[2]),
      linearExpansionSum(
        scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m0[1], m3[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m3[1], m0[0])), -m1[2]),
        scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m0[1], m1[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m1[1], m0[0])), m3[2])
      )
    )
  );
  let n = linearExpansionSum(
    linearExpansionSum(
      scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m2[1], m3[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m3[1], m2[0])), m0[2]),
      linearExpansionSum(
        scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m0[1], m3[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m3[1], m0[0])), -m2[2]),
        scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m0[1], m2[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m2[1], m0[0])), m3[2])
      )
    ),
    linearExpansionSum(
      scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m1[1], m2[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m2[1], m1[0])), m0[2]),
      linearExpansionSum(
        scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m0[1], m2[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m2[1], m0[0])), -m1[2]),
        scaleLinearExpansion(linearExpansionSum((0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(m0[1], m1[0]), (0,_math_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(-m1[1], m0[0])), m2[2])
      )
    )
  );
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
      let l = (a[1] - c[1]) * (b[0] - c[0]);
      let r = (a[0] - c[0]) * (b[1] - c[1]);
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


/***/ }),

/***/ "./src/engine/common/math/NDArray.ts":
/*!*******************************************!*\
  !*** ./src/engine/common/math/NDArray.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   View3DUint8Clamped: () => (/* binding */ View3DUint8Clamped),
/* harmony export */   createCanvasImageDataArray: () => (/* binding */ createCanvasImageDataArray)
/* harmony export */ });

class View3DUint8Clamped {
  constructor(a, b0, b1, b2, c0, c1, c2, d) {
    this._data = a;
    this._shape = [b0, b1, b2].filter((item) => {
      return typeof item !== "undefined";
    });
    this._stride = [c0, c1, c2].filter((item) => {
      return typeof item !== "undefined";
    });
    this._offset = d | 0;
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
    throw new Error("View3DUint8Clamped: arguments error.");
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
    throw new Error("View3DUint8Clamped: arguments error.");
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
    throw new Error("View3DUint8Clamped: arguments error.");
  }
  hi(i0, i1, i2) {
    switch (arguments.length) {
      case 0: {
        return new View3DUint8Clamped(this.data, void 0, void 0, void 0, void 0, void 0, void 0, this.offset);
      }
      case 1: {
        return new View3DUint8Clamped(
          this.data,
          typeof arguments[0] !== "number" || arguments[0] < 0 ? this.shape[0] : arguments[0] | 0,
          void 0,
          void 0,
          this.stride[0],
          void 0,
          void 0,
          this.offset
        );
      }
      case 2: {
        return new View3DUint8Clamped(
          this.data,
          typeof arguments[0] !== "number" || arguments[0] < 0 ? this.shape[0] : arguments[0] | 0,
          typeof arguments[1] !== "number" || arguments[1] < 0 ? this.shape[1] : arguments[1] | 0,
          void 0,
          this.stride[0],
          this.stride[1],
          void 0,
          this.offset
        );
      }
      case 3: {
        return new View3DUint8Clamped(
          this.data,
          typeof arguments[0] !== "number" || arguments[0] < 0 ? this.shape[0] : arguments[0] | 0,
          typeof arguments[1] !== "number" || arguments[1] < 0 ? this.shape[1] : arguments[1] | 0,
          typeof arguments[2] !== "number" || arguments[2] < 0 ? this.shape[2] : arguments[2] | 0,
          this.stride[0],
          this.stride[1],
          this.stride[2],
          this.offset
        );
      }
    }
    throw new Error("View3DUint8Clamped: arguments error.");
  }
  lo(i0, i1, i2) {
    switch (arguments.length) {
      case 0: {
        let b = this.offset;
        return new View3DUint8Clamped(this.data, void 0, void 0, void 0, void 0, void 0, void 0, b);
      }
      case 1: {
        let b = this.offset;
        let d = 0;
        let a0 = this.shape[0];
        let c0 = this.stride[0];
        if (typeof arguments[0] === "number" && arguments[0] >= 0) {
          d = arguments[0] | 0;
          b += c0 * d;
          a0 -= d;
        }
        return new View3DUint8Clamped(this.data, a0, void 0, void 0, c0, void 0, void 0, b);
      }
      case 2: {
        let b = this.offset;
        let d = 0;
        let a0 = this.shape[0];
        let a1 = this.shape[1];
        let c0 = this.stride[0];
        let c1 = this.stride[1];
        if (typeof arguments[0] === "number" && arguments[0] >= 0) {
          d = arguments[0] | 0;
          b += c0 * d;
          a0 -= d;
        }
        if (typeof arguments[1] === "number" && arguments[1] >= 0) {
          d = arguments[1] | 0;
          b += c1 * d;
          a1 -= d;
        }
        return new View3DUint8Clamped(this.data, a0, a1, void 0, c0, c1, void 0, b);
      }
      case 3: {
        let b = this.offset;
        let d = 0;
        let a0 = this.shape[0];
        let a1 = this.shape[1];
        let a2 = this.shape[2];
        let c0 = this.stride[0];
        let c1 = this.stride[1];
        let c2 = this.stride[2];
        if (typeof arguments[0] === "number" && arguments[0] >= 0) {
          d = arguments[0] | 0;
          b += c0 * d;
          a0 -= d;
        }
        if (typeof arguments[1] === "number" && arguments[1] >= 0) {
          d = arguments[1] | 0;
          b += c1 * d;
          a1 -= d;
        }
        if (typeof arguments[2] === "number" && arguments[2] >= 0) {
          d = arguments[2] | 0;
          b += c2 * d;
          a2 -= d;
        }
        return new View3DUint8Clamped(this.data, a0, a1, a2, c0, c1, c2, b);
      }
    }
    throw new Error("View3DUint8Clamped: arguments error.");
  }
  step(i0, i1, i2) {
    switch (arguments.length) {
      case 0: {
        let c = this.offset;
        return new View3DUint8Clamped(this.data, void 0, void 0, void 0, void 0, void 0, void 0, c);
      }
      case 1: {
        let a0 = this.shape[0];
        let b0 = this.stride[0];
        let c = this.offset;
        let d = 0;
        if (typeof arguments[0] === "number") {
          d = arguments[0] | 0;
          if (d < 0) {
            c += b0 * (a0 - 1);
            a0 = Math.ceil(-a0 / d);
          } else {
            a0 = Math.ceil(a0 / d);
          }
          b0 *= d;
        }
        return new View3DUint8Clamped(this.data, a0, void 0, void 0, b0, void 0, void 0, c);
      }
      case 2: {
        let a0 = this.shape[0];
        let a1 = this.shape[1];
        let b0 = this.stride[0];
        let b1 = this.stride[1];
        let c = this.offset;
        let d = 0;
        if (typeof arguments[0] === "number") {
          d = arguments[0] | 0;
          if (d < 0) {
            c += b0 * (a0 - 1);
            a0 = Math.ceil(-a0 / d);
          } else {
            a0 = Math.ceil(a0 / d);
          }
          b0 *= d;
        }
        if (typeof arguments[1] === "number") {
          d = arguments[1] | 0;
          if (d < 0) {
            c += b1 * (a1 - 1);
            a1 = Math.ceil(-a1 / d);
          } else {
            a1 = Math.ceil(a1 / d);
          }
          b1 *= d;
        }
        return new View3DUint8Clamped(this.data, a0, a1, void 0, b0, b1, void 0, c);
      }
      case 3: {
        let a0 = this.shape[0];
        let a1 = this.shape[1];
        let a2 = this.shape[2];
        let b0 = this.stride[0];
        let b1 = this.stride[1];
        let b2 = this.stride[2];
        let c = this.offset;
        let d = 0;
        if (typeof arguments[0] === "number") {
          d = arguments[0] | 0;
          if (d < 0) {
            c += b0 * (a0 - 1);
            a0 = Math.ceil(-a0 / d);
          } else {
            a0 = Math.ceil(a0 / d);
          }
          b0 *= d;
        }
        if (typeof arguments[1] === "number") {
          d = arguments[1] | 0;
          if (d < 0) {
            c += b1 * (a1 - 1);
            a1 = Math.ceil(-a1 / d);
          } else {
            a1 = Math.ceil(a1 / d);
          }
          b1 *= d;
        }
        if (typeof arguments[2] === "number") {
          d = arguments[2] | 0;
          if (d < 0) {
            c += b2 * (a2 - 1);
            a2 = Math.ceil(-a2 / d);
          } else {
            a2 = Math.ceil(a2 / d);
          }
          b2 *= d;
        }
        return new View3DUint8Clamped(this.data, a0, a1, a2, b0, b1, b2, c);
      }
    }
    throw new Error("View3DUint8Clamped: arguments error.");
  }
  transpose(i0 = 0, i1 = 0, i2 = 0) {
    switch (arguments.length) {
      case 0: {
        let a = this.shape;
        let b = this.stride;
        return new View3DUint8Clamped(this.data, void 0, void 0, void 0, void 0, void 0, void 0, this.offset);
      }
      case 1: {
        arguments[0] = arguments[0] === void 0 ? 0 : arguments[0] | 0;
        let a = this.shape;
        let b = this.stride;
        return new View3DUint8Clamped(
          this.data,
          a[arguments[0]],
          void 0,
          void 0,
          b[arguments[0]],
          void 0,
          void 0,
          this.offset
        );
      }
      case 2: {
        arguments[0] = arguments[0] === void 0 ? 0 : arguments[0] | 0;
        arguments[1] = arguments[1] === void 0 ? 1 : arguments[1] | 0;
        let a = this.shape;
        let b = this.stride;
        return new View3DUint8Clamped(
          this.data,
          a[arguments[0]],
          a[arguments[1]],
          void 0,
          b[arguments[0]],
          b[arguments[1]],
          void 0,
          this.offset
        );
      }
      case 3: {
        arguments[0] = arguments[0] === void 0 ? 0 : arguments[0] | 0;
        arguments[1] = arguments[1] === void 0 ? 1 : arguments[1] | 0;
        arguments[2] = arguments[2] === void 0 ? 2 : arguments[2] | 0;
        let a = this.shape;
        let b = this.stride;
        return new View3DUint8Clamped(
          this.data,
          a[arguments[0]],
          a[arguments[1]],
          a[arguments[2]],
          b[arguments[0]],
          b[arguments[1]],
          b[arguments[2]],
          this.offset
        );
      }
    }
    throw new Error("View3DUint8Clamped: arguments error.");
  }
  pick(i0, i1, i2) {
    const a = [];
    const b = [];
    let c = this.offset;
    if (typeof arguments[0] === "number" && arguments[0] >= 0) {
      c = c + this.stride[0] * arguments[0] | 0;
    } else {
      a.push(this.shape[0]);
      b.push(this.stride[0]);
    }
    if (typeof arguments[1] === "number" && arguments[1] >= 0) {
      c = c + this.stride[1] * arguments[1] | 0;
    } else {
      a.push(this.shape[1]);
      b.push(this.stride[1]);
    }
    if (typeof arguments[2] === "number" && arguments[2] >= 0) {
      c = c + this.stride[2] * arguments[2] | 0;
    } else {
      a.push(this.shape[2]);
      b.push(this.stride[2]);
    }
    return ((data, shape, stride, offset) => {
      return new View3DUint8Clamped(data, shape[0], shape[1], shape[2], stride[0], stride[1], stride[2], offset);
    })(this.data, a, b, c);
  }
}
function createCanvasImageDataArray(data, shape, stride = void 0, offset = void 0) {
  if (shape === void 0) {
    shape = [data.length];
  }
  let d = shape.length;
  if (stride === void 0) {
    stride = new Array(d);
    for (let i = d - 1, sz = 1; i >= 0; --i) {
      stride[i] = sz;
      sz *= shape[i];
    }
  }
  if (offset === void 0) {
    offset = 0;
    for (let i = 0; i < d; ++i) {
      if (stride[i] < 0) {
        offset -= (shape[i] - 1) * stride[i];
      }
    }
  }
  return ((data2, shape2, stride2, offset2) => {
    return new View3DUint8Clamped(data2, shape2[0], shape2[1], shape2[2], stride2[0], stride2[1], stride2[2], offset2);
  })(data, shape, stride, offset);
}


/***/ }),

/***/ "./src/engine/common/math/Number.ts":
/*!******************************************!*\
  !*** ./src/engine/common/math/Number.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sgn: () => (/* binding */ sgn)
/* harmony export */ });

function sgn(x) {
  if (x < 0) {
    return -1;
  }
  if (x > 0) {
    return 1;
  }
  return 0;
}


/***/ }),

/***/ "./src/engine/common/math/RobustCalc.ts":
/*!**********************************************!*\
  !*** ./src/engine/common/math/RobustCalc.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   robustProduct: () => (/* binding */ robustProduct),
/* harmony export */   robustScale: () => (/* binding */ robustScale),
/* harmony export */   robustSum: () => (/* binding */ robustSum),
/* harmony export */   scalarScalar: () => (/* binding */ scalarScalar)
/* harmony export */ });
/* harmony import */ var _Twos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Twos */ "./src/engine/common/math/Twos.ts");


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
function robustSum(e, f) {
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
  let a = void 0;
  let b = void 0;
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
  let _x = void 0;
  let _bv = void 0;
  let _av = void 0;
  let _br = void 0;
  let _ar = void 0;
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
function robustProduct(a, b) {
  if (a.length === 1) {
    return robustScale(b, a[0]);
  }
  if (b.length === 1) {
    return robustScale(a, b[0]);
  }
  if (a.length === 0 || b.length === 0) {
    return [0];
  }
  let r = [0];
  if (a.length < b.length) {
    for (let i = 0; i < a.length; ++i) {
      r = robustSum(r, robustScale(b, a[i]));
    }
  } else {
    for (let i = 0; i < b.length; ++i) {
      r = robustSum(r, robustScale(a, b[i]));
    }
  }
  return r;
}
function robustScale(e, scale) {
  let n = e.length;
  if (n === 1) {
    let ts = (0,_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(e[0], scale);
    if (ts[0]) {
      return ts;
    }
    return [ts[1]];
  }
  let g = new Array(2 * n);
  let q = [0.1, 0.1];
  let t = [0.1, 0.1];
  let count = 0;
  (0,_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(e[0], scale, q);
  if (q[0]) {
    g[count++] = q[0];
  }
  for (let i = 1; i < n; ++i) {
    (0,_Twos__WEBPACK_IMPORTED_MODULE_0__.twoProduct)(e[i], scale, t);
    (0,_Twos__WEBPACK_IMPORTED_MODULE_0__.twoSum)(q[1], t[0], q);
    if (q[0]) {
      g[count++] = q[0];
    }
    let a = t[1];
    let b = q[1];
    let x = a + b;
    let bv = x - a;
    let y = b - bv;
    q[1] = x;
    if (y) {
      g[count++] = y;
    }
  }
  if (q[1]) {
    g[count++] = q[1];
  }
  if (count === 0) {
    g[count++] = 0;
  }
  g.length = count;
  return g;
}


/***/ }),

/***/ "./src/engine/common/math/Twos.ts":
/*!****************************************!*\
  !*** ./src/engine/common/math/Twos.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   twoProduct: () => (/* binding */ twoProduct),
/* harmony export */   twoSum: () => (/* binding */ twoSum)
/* harmony export */ });

const SPLITTER = +(Math.pow(2, 27) + 1);
function twoProduct(a, b, result = null) {
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
function twoSum(a, b, result = null) {
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


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/Config.ts":
/*!**********************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/Config.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ORIENTATION: () => (/* binding */ ORIENTATION),
/* harmony export */   createDefaultOptional: () => (/* binding */ createDefaultOptional)
/* harmony export */ });
/* harmony import */ var _config_CommonProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/CommonProfile */ "./src/engine/config/CommonProfile.ts");
/* harmony import */ var _config_PrimitiveProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/PrimitiveProfile */ "./src/engine/config/PrimitiveProfile.ts");



const ORIENTATION = _config_CommonProfile__WEBPACK_IMPORTED_MODULE_0__.ESweep.CW;
function createDefaultOptional() {
  return {
    fontFamily: "normal",
    fontStyle: _config_PrimitiveProfile__WEBPACK_IMPORTED_MODULE_1__.ED2FontStyle.NORMAL,
    fontVariant: "normal",
    fontWeight: 100
  };
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/pixelFilter/PixelFilter.ts":
/*!***************************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/pixelFilter/PixelFilter.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EPixelFilterResult: () => (/* binding */ EPixelFilterResult),
/* harmony export */   PixelFilter: () => (/* binding */ PixelFilter)
/* harmony export */ });
/* harmony import */ var _config_CommonProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/CommonProfile */ "./src/engine/config/CommonProfile.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/engine/common/modules/d2Canvas2Svg/Config.ts");
/* harmony import */ var _polygon_PolygonsCrappy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polygon/PolygonsCrappy */ "./src/engine/common/modules/d2Canvas2Svg/polygon/PolygonsCrappy.ts");
/* harmony import */ var _simplify_Simplifys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../simplify/Simplifys */ "./src/engine/common/modules/d2Canvas2Svg/simplify/Simplifys.ts");
/* harmony import */ var _surfaceNets_surfaceNets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../surfaceNets/surfaceNets */ "./src/engine/common/modules/d2Canvas2Svg/surfaceNets/surfaceNets.ts");
/* harmony import */ var _triangles_Cdt2ds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../triangles/Cdt2ds */ "./src/engine/common/modules/d2Canvas2Svg/triangles/Cdt2ds.ts");







var EPixelFilterResult = /* @__PURE__ */ ((EPixelFilterResult2) => {
  EPixelFilterResult2["GRAHP"] = "GRAHP";
  EPixelFilterResult2["POLYGON"] = "POLYGON";
  EPixelFilterResult2["TRIANGLE"] = "TRIANGLE";
  return EPixelFilterResult2;
})(EPixelFilterResult || {});
class PixelFilter {
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
      if (this._type === "POLYGON" /* POLYGON */) {
        return {
          polygons: this.covertPixel2Polygons(pixels, true)
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
      polygons: null,
      graphs: null
    };
  }
  covertPixel2GraphLines(pixels, simplify) {
    const contour = { edges: null, positions: null };
    const surface = _surfaceNets_surfaceNets__WEBPACK_IMPORTED_MODULE_4__.SurfaceNets.process(pixels, 128);
    if (simplify) {
      const { edges: edges2, positions } = _simplify_Simplifys__WEBPACK_IMPORTED_MODULE_3__.Simplifys.proecss(surface.cells, surface.positions, 0.25);
      contour.edges = edges2;
      contour.positions = positions;
    } else {
      contour.edges = surface.cells;
      contour.positions = surface.positions;
    }
    const edges = contour.edges;
    return {
      edges,
      positions: contour.positions
    };
  }
  covertPixel2Polygons(pixels, simplify) {
    const contour = { edges: null, positions: null };
    const surface = _surfaceNets_surfaceNets__WEBPACK_IMPORTED_MODULE_4__.SurfaceNets.process(pixels, 128);
    if (simplify) {
      const { edges: edges2, positions: positions2 } = _simplify_Simplifys__WEBPACK_IMPORTED_MODULE_3__.Simplifys.proecss(surface.cells, surface.positions, 0.25);
      contour.edges = edges2;
      contour.positions = positions2;
    } else {
      contour.edges = surface.cells;
      contour.positions = surface.positions;
    }
    const positions = contour.positions;
    const edges = contour.edges;
    const flip = _config_CommonProfile__WEBPACK_IMPORTED_MODULE_0__.ESweep.CCW === _Config__WEBPACK_IMPORTED_MODULE_1__.ORIENTATION;
    let result = _polygon_PolygonsCrappy__WEBPACK_IMPORTED_MODULE_2__.PolygonsCrappy.proecss(edges, positions);
    let nresult = new Array(result.length);
    for (let i = 0; i < result.length; ++i) {
      let loops = result[i];
      let nloops = new Array(loops.length);
      for (let j = 0; j < loops.length; ++j) {
        let loop = loops[j];
        let nloop = new Array(loop.length);
        for (let k = 0; k < loop.length; ++k) {
          nloop[k] = positions[loop[k]].slice();
        }
        if (flip) {
          nloop.reverse();
        }
        nloops[j] = nloop;
      }
      nresult[i] = nloops;
    }
    return nresult;
  }
  covertPixel2Triangles(pixels, simplify) {
    const contour = { edges: null, positions: null };
    const surface = _surfaceNets_surfaceNets__WEBPACK_IMPORTED_MODULE_4__.SurfaceNets.process(pixels, 128);
    if (simplify) {
      const { edges: edges2, positions } = _simplify_Simplifys__WEBPACK_IMPORTED_MODULE_3__.Simplifys.proecss(surface.cells, surface.positions, 0.25);
      contour.edges = edges2;
      contour.positions = positions;
    } else {
      contour.edges = surface.cells;
      contour.positions = surface.positions;
    }
    const edges = contour.edges;
    return {
      cells: _triangles_Cdt2ds__WEBPACK_IMPORTED_MODULE_5__.Cdt2ds.process(contour.positions, edges, {
        delaunay: false,
        exterior: false,
        interior: true
      }),
      positions: contour.positions
    };
  }
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/polygon/CompareAngles.ts":
/*!*************************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/polygon/CompareAngles.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompareAngles: () => (/* binding */ CompareAngles)
/* harmony export */ });
/* harmony import */ var _geometry_Orients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/Orients */ "./src/engine/common/geometry/Orients.ts");
/* harmony import */ var _math_Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../math/Number */ "./src/engine/common/math/Number.ts");
/* harmony import */ var _math_RobustCalc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../math/RobustCalc */ "./src/engine/common/math/RobustCalc.ts");
/* harmony import */ var _math_Twos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../math/Twos */ "./src/engine/common/math/Twos.ts");





function testInterior(a, b, c) {
  const x0 = (0,_math_Twos__WEBPACK_IMPORTED_MODULE_3__.twoSum)(a[0], -b[0]);
  const y0 = (0,_math_Twos__WEBPACK_IMPORTED_MODULE_3__.twoSum)(a[1], -b[1]);
  const x1 = (0,_math_Twos__WEBPACK_IMPORTED_MODULE_3__.twoSum)(c[0], -b[0]);
  const y1 = (0,_math_Twos__WEBPACK_IMPORTED_MODULE_3__.twoSum)(c[1], -b[1]);
  const d = (0,_math_RobustCalc__WEBPACK_IMPORTED_MODULE_2__.robustSum)((0,_math_RobustCalc__WEBPACK_IMPORTED_MODULE_2__.robustProduct)(x0, x1), (0,_math_RobustCalc__WEBPACK_IMPORTED_MODULE_2__.robustProduct)(y0, y1));
  return d[d.length - 1] >= 0;
}
class CompareAngles {
  static compareProcess(a, b, c, d) {
    const bcd = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(b, c, d);
    if (bcd === 0) {
      let sabc = (0,_math_Number__WEBPACK_IMPORTED_MODULE_1__.sgn)((0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(a, b, c));
      let sabd = (0,_math_Number__WEBPACK_IMPORTED_MODULE_1__.sgn)((0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(a, b, d));
      if (sabc === sabd) {
        if (sabc === 0) {
          const ic = testInterior(a, b, c);
          const id = testInterior(a, b, d);
          if (ic === id) {
            return 0;
          } else if (ic) {
            return 1;
          } else {
            return -1;
          }
        }
        return 0;
      } else if (sabd === 0) {
        if (sabc > 0) {
          return -1;
        } else if (testInterior(a, b, d)) {
          return -1;
        } else {
          return 1;
        }
      } else if (sabc === 0) {
        if (sabd > 0) {
          return 1;
        } else if (testInterior(a, b, c)) {
          return 1;
        } else {
          return -1;
        }
      }
      return (0,_math_Number__WEBPACK_IMPORTED_MODULE_1__.sgn)(sabd - sabc);
    }
    const abc = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(a, b, c);
    if (abc > 0) {
      if (bcd > 0 && (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(a, b, d) > 0) {
        return 1;
      }
      return -1;
    } else if (abc < 0) {
      if (bcd > 0 || (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(a, b, d) > 0) {
        return 1;
      }
      return -1;
    } else {
      const abd = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(a, b, d);
      if (abd > 0) {
        return 1;
      } else {
        if (testInterior(a, b, c)) {
          return 1;
        } else {
          return -1;
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/polygon/PlanarDuals.ts":
/*!***********************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/polygon/PlanarDuals.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanarDuals: () => (/* binding */ PlanarDuals)
/* harmony export */ });
/* harmony import */ var _CompareAngles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompareAngles */ "./src/engine/common/modules/d2Canvas2Svg/polygon/CompareAngles.ts");


class PlanarDuals {
  static process(cells, positions) {
    const numVertices = positions.length | 0;
    const numEdges = cells.length;
    const adj = [new Array(numVertices), new Array(numVertices)];
    const cycles = [];
    const cut = (c, i) => {
      const a = adj[i][c[i]];
      a.splice(a.indexOf(c), 1);
    };
    const shouldGlue = (pcycle, ncycle) => {
      return ncycle[1] === ncycle[ncycle.length - 1];
    };
    const next = (a, b, noCut = false) => {
      let nextCell = [];
      let nextVertex;
      let nextDir = void 0;
      for (let i = 0; i < 2; ++i) {
        if (adj[i][b].length > 0) {
          nextCell = adj[i][b][0];
          nextDir = i;
          break;
        }
      }
      nextVertex = nextCell[nextDir ^ 1];
      for (let dir = 0; dir < 2; ++dir) {
        const nbhd = adj[dir][b];
        for (let k = 0; k < nbhd.length; ++k) {
          let e = nbhd[k];
          let p = e[dir ^ 1];
          let cmp = _CompareAngles__WEBPACK_IMPORTED_MODULE_0__.CompareAngles.compareProcess(positions[a], positions[b], positions[nextVertex], positions[p]);
          if (cmp > 0) {
            nextCell = e;
            nextVertex = p;
            nextDir = dir;
          }
        }
      }
      if (noCut) {
        return nextVertex;
      }
      if (nextCell) {
        cut(nextCell, nextDir);
      }
      return nextVertex;
    };
    const extractCycle = (v, dir) => {
      let e0 = adj[dir][v][0];
      let cycle = [v];
      cut(e0, dir);
      let u = e0[dir ^ 1];
      let d0 = dir;
      while (true) {
        while (u !== v) {
          cycle.push(u);
          u = next(cycle[cycle.length - 2], u, false);
        }
        if (adj[0][v].length + adj[1][v].length === 0) {
          break;
        }
        let a = cycle[cycle.length - 1];
        let b = v;
        let c = cycle[1];
        let d = next(a, b, true);
        if (_CompareAngles__WEBPACK_IMPORTED_MODULE_0__.CompareAngles.compareProcess(positions[a], positions[b], positions[c], positions[d]) < 0) {
          break;
        }
        cycle.push(v);
        u = next(a, b);
      }
      return cycle;
    };
    for (let i = 0; i < numVertices; ++i) {
      adj[0][i] = [];
      adj[1][i] = [];
    }
    for (let i = 0; i < numEdges; ++i) {
      const c = cells[i];
      adj[0][c[0]].push(c);
      adj[1][c[1]].push(c);
    }
    for (let i = 0; i < numVertices; ++i) {
      if (adj[0][i].length + adj[1][i].length === 0) {
        cycles.push([i]);
      }
    }
    for (let i = 0; i < numVertices; ++i) {
      for (let j = 0; j < 2; ++j) {
        let pcycle = [];
        while (adj[j][i].length > 0) {
          let ni = adj[0][i].length;
          let ncycle = extractCycle(i, j);
          if (shouldGlue(pcycle, ncycle)) {
            pcycle.push.apply(pcycle, ncycle);
          } else {
            if (pcycle.length > 0) {
              cycles.push(pcycle);
            }
            pcycle = ncycle;
          }
        }
        if (pcycle.length > 0) {
          cycles.push(pcycle);
        }
      }
    }
    return cycles;
  }
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/polygon/PolygonsCrappy.ts":
/*!**************************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/polygon/PolygonsCrappy.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PolygonsCrappy: () => (/* binding */ PolygonsCrappy)
/* harmony export */ });
/* harmony import */ var _math_RobustCalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../math/RobustCalc */ "./src/engine/common/math/RobustCalc.ts");
/* harmony import */ var _math_Twos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../math/Twos */ "./src/engine/common/math/Twos.ts");
/* harmony import */ var _utils_Uniq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/Uniq */ "./src/engine/common/utils/Uniq.ts");
/* harmony import */ var _PlanarDuals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlanarDuals */ "./src/engine/common/modules/d2Canvas2Svg/polygon/PlanarDuals.ts");
/* harmony import */ var _PrePolygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrePolygon */ "./src/engine/common/modules/d2Canvas2Svg/polygon/PrePolygon.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils */ "./src/engine/common/modules/d2Canvas2Svg/polygon/Utils.ts");







class PolygonsCrappy {
  static proecss(edges, positions) {
    const result = (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.trimLeaves)(edges, positions);
    edges = result[0];
    positions = result[1];
    const numVertices = positions.length;
    const numEdges = edges.length;
    const adj = (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.edgeToAdjacency)(edges, positions.length);
    let faces = _PlanarDuals__WEBPACK_IMPORTED_MODULE_3__.PlanarDuals.process(edges, positions);
    for (let i = 0; i < numVertices; ++i) {
      if (adj[i].length % 2 === 1) {
        throw new Error("planar-graph-to-polyline: graph must be manifold");
      }
    }
    faces = faces.filter((c) => {
      let n = c.length;
      let area = [0];
      for (let j = 0; j < n; ++j) {
        let a = positions[c[j]];
        let b = positions[c[(j + 1) % n]];
        let t00 = (0,_math_Twos__WEBPACK_IMPORTED_MODULE_1__.twoProduct)(-a[0], a[1]);
        let t01 = (0,_math_Twos__WEBPACK_IMPORTED_MODULE_1__.twoProduct)(-a[0], b[1]);
        let t10 = (0,_math_Twos__WEBPACK_IMPORTED_MODULE_1__.twoProduct)(b[0], a[1]);
        let t11 = (0,_math_Twos__WEBPACK_IMPORTED_MODULE_1__.twoProduct)(b[0], b[1]);
        area = (0,_math_RobustCalc__WEBPACK_IMPORTED_MODULE_0__.robustSum)(area, (0,_math_RobustCalc__WEBPACK_IMPORTED_MODULE_0__.robustSum)((0,_math_RobustCalc__WEBPACK_IMPORTED_MODULE_0__.robustSum)(t00, t01), (0,_math_RobustCalc__WEBPACK_IMPORTED_MODULE_0__.robustSum)(t10, t11)));
      }
      return area[area.length - 1] > 0;
    });
    let numFaces = faces.length;
    let parent = new Array(numFaces);
    let containment = new Array(numFaces);
    const fadj = (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.makeArrayOfArrays)(numFaces);
    const edgeAdjacency = {};
    const internalVertices = (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.makeArray)(numVertices, false);
    const toVisit = [];
    const parity = (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.makeArray)(numFaces, -1);
    const results = [];
    const sharedBoundary = (c) => {
      const n = c.length;
      for (let i = 0; i < n; ++i) {
        if (!internalVertices[c[i]]) {
          return false;
        }
      }
      return true;
    };
    LOOP1:
      for (let i = 0; i < numFaces; ++i) {
        parent[i] = i;
        let row = new Array(numFaces);
        let loopVertices = faces[i].map((v) => {
          return positions[v];
        });
        let pmc = _PrePolygon__WEBPACK_IMPORTED_MODULE_4__.PrePolygon.process([loopVertices]);
        let count = 0;
        LOOP2:
          for (let j = 0; j < numFaces; ++j) {
            row[j] = 0;
            if (i === j) {
              continue;
            }
            let c = faces[j];
            let n = c.length;
            LOOP3:
              for (let k = 0; k < n; ++k) {
                let d = pmc(positions[c[k]]);
                if (d !== 0) {
                  if (d < 0) {
                    row[j] = 1;
                    count += 1;
                  }
                  continue LOOP2;
                }
              }
            row[j] = 1;
            count += 1;
          }
        containment[i] = [count, i, row];
      }
    containment.sort((a, b) => {
      return b[0] - a[0];
    });
    for (let i = 0; i < numFaces; ++i) {
      let row = containment[i];
      let idx = row[1];
      let children = row[2];
      for (let j = 0; j < numFaces; ++j) {
        if (children[j]) {
          parent[j] = idx;
        }
      }
    }
    for (let i = 0; i < numFaces; ++i) {
      fadj[i].push(parent[i]);
      fadj[parent[i]].push(i);
    }
    for (let i = 0; i < numFaces; ++i) {
      let c = faces[i];
      let n = c.length;
      for (let j = 0; j < n; ++j) {
        let a = c[j];
        let b = c[(j + 1) % n];
        let key = Math.min(a, b) + ":" + Math.max(a, b);
        if (key in edgeAdjacency) {
          let neighbor = edgeAdjacency[key];
          fadj[neighbor].push(i);
          fadj[i].push(neighbor);
          internalVertices[a] = internalVertices[b] = true;
        } else {
          edgeAdjacency[key] = i;
        }
      }
    }
    for (let i = 0; i < numFaces; ++i) {
      if (parent[i] === i && !sharedBoundary(faces[i])) {
        toVisit.push(i);
        parity[i] = 0;
      } else {
        parity[i] = -1;
      }
    }
    while (toVisit.length > 0) {
      const top = toVisit.pop();
      const nbhd = fadj[top];
      (0,_utils_Uniq__WEBPACK_IMPORTED_MODULE_2__.unique)(nbhd, (a, b) => {
        return a - b;
      });
      let nnbhr = nbhd.length;
      let p = parity[top];
      let polyline = [];
      if (p === 0) {
        let c = faces[top];
        polyline = [c];
      }
      for (let i = 0; i < nnbhr; ++i) {
        let f = nbhd[i];
        if (parity[f] >= 0) {
          continue;
        }
        parity[f] = p ^ 1;
        toVisit.push(f);
        if (p === 0) {
          let c = faces[f];
          if (!sharedBoundary(c)) {
            c.reverse();
            polyline.push(c);
          }
        }
      }
      if (p === 0) {
        results.push(polyline);
      }
    }
    return results;
  }
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/polygon/PrePolygon.ts":
/*!**********************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/polygon/PrePolygon.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrePolygon: () => (/* binding */ PrePolygon)
/* harmony export */ });
/* harmony import */ var _algorithm_slabDecomposition_SlabDecomposition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../algorithm/slabDecomposition/SlabDecomposition */ "./src/engine/common/algorithm/slabDecomposition/SlabDecomposition.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/engine/common/modules/d2Canvas2Svg/polygon/Utils.ts");



class PrePolygon {
  static process(loops) {
    const numLoops = loops.length;
    const segments = [];
    const vsegments = [];
    for (let i = 0; i < numLoops; ++i) {
      let loop = loops[i];
      let numVertices = loop.length;
      for (let s = numVertices - 1, t = 0; t < numVertices; s = t++) {
        let a = loop[s];
        let b = loop[t];
        if (a[0] === b[0]) {
          vsegments.push([a, b]);
        } else {
          segments.push([a, b]);
        }
      }
    }
    if (segments.length === 0) {
      if (vsegments.length === 0) {
        return () => {
          return 1;
        };
      } else {
        return (p) => {
          const handler = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.buildVerticalIndex)(vsegments);
          if (handler(p[0], p[1])) {
            return 0;
          }
          return 1;
        };
      }
    }
    const slabs = (0,_algorithm_slabDecomposition_SlabDecomposition__WEBPACK_IMPORTED_MODULE_0__.createSlabDecomposition)(segments);
    const testSlab = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.buildSlabSearch)(slabs.slabs, slabs.coordinates);
    if (vsegments.length === 0) {
      return testSlab;
    } else {
      const handler = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.buildVerticalIndex)(vsegments);
      return function(p) {
        if (handler(p[0], p[1])) {
          return 0;
        }
        return testSlab(p);
      };
    }
  }
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/polygon/Utils.ts":
/*!*****************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/polygon/Utils.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSlabSearch: () => (/* binding */ buildSlabSearch),
/* harmony export */   buildVerticalIndex: () => (/* binding */ buildVerticalIndex),
/* harmony export */   edgeToAdjacency: () => (/* binding */ edgeToAdjacency),
/* harmony export */   makeArray: () => (/* binding */ makeArray),
/* harmony export */   makeArrayOfArrays: () => (/* binding */ makeArrayOfArrays),
/* harmony export */   trimLeaves: () => (/* binding */ trimLeaves)
/* harmony export */ });
/* harmony import */ var _algorithm_binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../algorithm/binarySearchBounds/binarySearchBounds */ "./src/engine/common/algorithm/binarySearchBounds/binarySearchBounds.ts");
/* harmony import */ var _algorithm_intervalTree_intervalTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../algorithm/intervalTree/intervalTree */ "./src/engine/common/algorithm/intervalTree/intervalTree.ts");
/* harmony import */ var _geometry_Orients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/Orients */ "./src/engine/common/geometry/Orients.ts");
/* harmony import */ var _utils_Uniq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/Uniq */ "./src/engine/common/utils/Uniq.ts");





function buildVerticalIndex(segments) {
  let table = {};
  for (let i = 0; i < segments.length; ++i) {
    let s = segments[i];
    let x = s[0][0];
    let y0 = s[0][1];
    let y1 = s[1][1];
    let p = [Math.min(y0, y1), Math.max(y0, y1)];
    if (x in table) {
      table[x].push(p);
    } else {
      table[x] = [p];
    }
  }
  let intervalTable = {};
  let keys = Object.keys(table);
  for (let i = 0; i < keys.length; ++i) {
    let segs = table[keys[i]];
    intervalTable[keys[i]] = (0,_algorithm_intervalTree_intervalTree__WEBPACK_IMPORTED_MODULE_1__.makeIntervalTree)(segs);
  }
  return (x, y) => {
    const tree = intervalTable[x];
    if (tree) {
      return !!tree.queryPoint(y, () => {
        return true;
      });
    }
    return false;
  };
}
function buildSlabSearch(slabs, coordinates) {
  return (p) => {
    let bucket = _algorithm_binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.le(coordinates, p[0]);
    if (bucket < 0) {
      return 1;
    }
    let root = slabs[bucket];
    if (!root) {
      if (bucket > 0 && coordinates[bucket] === p[0]) {
        root = slabs[bucket - 1];
      } else {
        return 1;
      }
    }
    let lastOrientation = 1;
    while (root) {
      let s = root.key;
      let o = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_2__.orient)(p, s[0], s[1]);
      if (s[0][0] < s[1][0]) {
        if (o < 0) {
          root = root.left;
        } else if (o > 0) {
          lastOrientation = -1;
          root = root.right;
        } else {
          return 0;
        }
      } else {
        if (o > 0) {
          root = root.left;
        } else if (o < 0) {
          lastOrientation = 1;
          root = root.right;
        } else {
          return 0;
        }
      }
    }
    return lastOrientation;
  };
}
function edgeToAdjacency(edges, numVertices) {
  const numEdges = edges.length;
  if (typeof numVertices !== "number") {
    numVertices = 0;
    for (let i = 0; i < numEdges; ++i) {
      numVertices = Math.max(numVertices, edges[i][0], edges[i][1]);
    }
    numVertices = (numVertices | 0) + 1;
  }
  numVertices = numVertices | 0;
  const adj = new Array(numVertices);
  for (let i = 0; i < numVertices; ++i) {
    adj[i] = [];
  }
  for (let i = 0; i < numEdges; ++i) {
    const e = edges[i];
    adj[e[0]].push(e[1]);
    adj[e[1]].push(e[0]);
  }
  for (let j = 0; j < numVertices; ++j) {
    (0,_utils_Uniq__WEBPACK_IMPORTED_MODULE_3__.unique)(adj[j], (a, b) => {
      return a - b;
    });
  }
  return adj;
}
function trimLeaves(edges, positions) {
  const adj = edgeToAdjacency(edges, positions.length);
  const live = new Array(positions.length);
  const nbhd = new Array(positions.length);
  const dead = [];
  for (let i = 0; i < positions.length; ++i) {
    const count = adj[i].length;
    nbhd[i] = count;
    live[i] = true;
    if (count <= 1) {
      dead.push(i);
    }
  }
  while (dead.length > 0) {
    const v = dead.pop();
    const n = adj[v];
    live[v] = false;
    for (let i = 0; i < n.length; ++i) {
      const u = n[i];
      if (--nbhd[u] === 0) {
        dead.push(u);
      }
    }
  }
  const newIndex = new Array(positions.length);
  const npositions = [];
  for (let i = 0; i < positions.length; ++i) {
    if (live[i]) {
      const v = npositions.length;
      newIndex[i] = v;
      npositions.push(positions[i]);
    } else {
      newIndex[i] = -1;
    }
  }
  const nedges = [];
  for (let i = 0; i < edges.length; ++i) {
    const e = edges[i];
    if (live[e[0]] && live[e[1]]) {
      nedges.push([newIndex[e[0]], newIndex[e[1]]]);
    }
  }
  return [nedges, npositions];
}
function makeArray(length, fill) {
  const result = new Array(length);
  for (let i = 0; i < length; ++i) {
    result[i] = fill;
  }
  return result;
}
function makeArrayOfArrays(length) {
  const result = new Array(length);
  for (let i = 0; i < length; ++i) {
    result[i] = [];
  }
  return result;
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/simplify/Simplifys.ts":
/*!**********************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/simplify/Simplifys.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Simplifys: () => (/* binding */ Simplifys)
/* harmony export */ });
/* harmony import */ var _geometry_Orients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/Orients */ "./src/engine/common/geometry/Orients.ts");


function errorWeight(base, a, b) {
  const area = Math.abs((0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_0__.orient)(base, a, b));
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
      let d = a[0] + a[1] - b[0] - b[1];
      if (d) {
        return d;
      }
      return Math.min(a[0], a[1]) - Math.min(b[0], b[1]);
    }
    case 3: {
      let l1 = a[0] + a[1];
      let m1 = b[0] + b[1];
      let d = l1 + a[2] - (m1 + b[2]);
      if (d) {
        return d;
      }
      let l0 = Math.min(a[0], a[1]);
      let m0 = Math.min(b[0], b[1]);
      d = Math.min(l0, a[2]) - Math.min(m0, b[2]);
      if (d) {
        return d;
      }
      return Math.min(l0 + a[2], l1) - Math.min(m0 + b[2], m1);
    }
    default: {
      let as = a.slice(0);
      as.sort();
      let bs = b.slice(0);
      bs.sort();
      for (let i = 0; i < n; ++i) {
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
    let len = cells.length;
    let zipped = new Array(len);
    for (let i = 0; i < len; ++i) {
      zipped[i] = [cells[i], attr[i]];
    }
    zipped.sort((a, b) => {
      return compareCells(a[0], b[0]);
    });
    for (let i = 0; i < len; ++i) {
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
  let len = cells.length;
  for (let i = 1; i < len; ++i) {
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
class Simplifys {
  static proecss(cells, positions, minArea) {
    let n = positions.length;
    let nc = cells.length;
    let inv = new Array(n);
    let outv = new Array(n);
    let weights = new Array(n);
    let dead = new Array(n);
    let heap = [];
    let index = new Array(n);
    let npositions = [];
    let ncells = [];
    let heapCount = heap.length;
    const computeWeight = (i) => {
      if (dead[i]) {
        return Infinity;
      }
      const s = inv[i];
      const t = outv[i];
      if (s < 0 || t < 0) {
        return Infinity;
      } else {
        return errorWeight(positions[i], positions[s], positions[t]);
      }
    };
    const heapSwap = (i, j) => {
      const a = heap[i];
      const b = heap[j];
      heap[i] = b;
      heap[j] = a;
      index[a] = j;
      index[b] = i;
    };
    const heapWeight = (i) => {
      return weights[heap[i]];
    };
    const heapParent = (i) => {
      if (i & 1) {
        return i - 1 >> 1;
      }
      return (i >> 1) - 1;
    };
    const heapDown = (i) => {
      let w = heapWeight(i);
      while (true) {
        let tw = w;
        let left = 2 * i + 1;
        let right = 2 * (i + 1);
        let next = i;
        if (left < heapCount) {
          let lw = heapWeight(left);
          if (lw < tw) {
            next = left;
            tw = lw;
          }
        }
        if (right < heapCount) {
          let rw = heapWeight(right);
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
      let w = heapWeight(i);
      while (i > 0) {
        let parent = heapParent(i);
        if (parent >= 0) {
          let pw = heapWeight(parent);
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
        let head = heap[0];
        heapSwap(0, heapCount - 1);
        heapCount -= 1;
        heapDown(0);
        return head;
      }
      return -1;
    };
    const heapUpdate = (i, w) => {
      let a = heap[i];
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
    for (let i = 0; i < n; ++i) {
      inv[i] = outv[i] = -1;
      weights[i] = Infinity;
      dead[i] = false;
    }
    for (let i = 0; i < nc; ++i) {
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
    for (let i = 0; i < n; ++i) {
      let w = weights[i] = computeWeight(i);
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
      let hmin = heapPop();
      if (hmin < 0 || weights[hmin] > minArea) {
        break;
      }
      kill(hmin);
    }
    for (let i = 0; i < n; ++i) {
      if (!dead[i]) {
        index[i] = npositions.length;
        npositions.push(positions[i].slice());
      }
    }
    cells.forEach((c) => {
      let tin = tortoiseHare(inv, c[0]);
      let tout = tortoiseHare(outv, c[1]);
      if (tin >= 0 && tout >= 0 && tin !== tout) {
        let cin = index[tin];
        let cout = index[tout];
        if (cin !== cout) {
          ncells.push([cin, cout]);
        }
      }
    });
    unique(normalize(ncells));
    return {
      positions: npositions,
      edges: ncells
    };
  }
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/surfaceNets/Builders.ts":
/*!************************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/surfaceNets/Builders.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSurfaceNets: () => (/* binding */ buildSurfaceNets)
/* harmony export */ });
/* harmony import */ var _Mallocs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mallocs */ "./src/engine/common/modules/d2Canvas2Svg/surfaceNets/Mallocs.ts");


function buildSurfaceNets(order, dtype) {
  const handleParam = {
    order,
    scalarArguments: 3,
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
        case 0:
          a.push([d0 - 0.5, (d1 - 0.5) * yFlip]);
          break;
        case 1:
          a.push([d0 - 0.25 - 0.25 * (v1 + v0 - 2 * c) / (v0 - v1), (d1 - 0.25 - 0.25 * (v2 + v0 - 2 * c) / (v0 - v2)) * yFlip]);
          break;
        case 2:
          a.push([d0 - 0.75 - 0.25 * (-v1 - v0 + 2 * c) / (v1 - v0), (d1 - 0.25 - 0.25 * (v3 + v1 - 2 * c) / (v1 - v3)) * yFlip]);
          break;
        case 3:
          a.push([d0 - 0.5, (d1 - 0.5 - 0.5 * (v2 + v0 + v3 + v1 - 4 * c) / (v0 - v2 + v1 - v3)) * yFlip]);
          break;
        case 4:
          a.push([d0 - 0.25 - 0.25 * (v3 + v2 - 2 * c) / (v2 - v3), (d1 - 0.75 - 0.25 * (-v2 - v0 + 2 * c) / (v2 - v0)) * yFlip]);
          break;
        case 5:
          a.push([d0 - 0.5 - 0.5 * (v1 + v0 + v3 + v2 - 4 * c) / (v0 - v1 + v2 - v3), (d1 - 0.5) * yFlip]);
          break;
        case 6:
          a.push([
            d0 - 0.5 - 0.25 * (-v1 - v0 + v3 + v2) / (v1 - v0 + v2 - v3),
            (d1 - 0.5 - 0.25 * (-v2 - v0 + v3 + v1) / (v2 - v0 + v1 - v3)) * yFlip
          ]);
          break;
        case 7:
          a.push([d0 - 0.75 - 0.25 * (v3 + v2 - 2 * c) / (v2 - v3), (d1 - 0.75 - 0.25 * (v3 + v1 - 2 * c) / (v1 - v3)) * yFlip]);
          break;
        case 8:
          a.push([d0 - 0.75 - 0.25 * (-v3 - v2 + 2 * c) / (v3 - v2), (d1 - 0.75 - 0.25 * (-v3 - v1 + 2 * c) / (v3 - v1)) * yFlip]);
          break;
        case 9:
          a.push([
            d0 - 0.5 - 0.25 * (v1 + v0 + -v3 - v2) / (v0 - v1 + v3 - v2),
            (d1 - 0.5 - 0.25 * (v2 + v0 + -v3 - v1) / (v0 - v2 + v3 - v1)) * yFlip
          ]);
          break;
        case 10:
          a.push([d0 - 0.5 - 0.5 * (-v1 - v0 + -v3 - v2 + 4 * c) / (v1 - v0 + v3 - v2), (d1 - 0.5) * yFlip]);
          break;
        case 11:
          a.push([d0 - 0.25 - 0.25 * (-v3 - v2 + 2 * c) / (v3 - v2), (d1 - 0.75 - 0.25 * (v2 + v0 - 2 * c) / (v0 - v2)) * yFlip]);
          break;
        case 12:
          a.push([d0 - 0.5, (d1 - 0.5 - 0.5 * (-v2 - v0 + -v3 - v1 + 4 * c) / (v2 - v0 + v3 - v1)) * yFlip]);
          break;
        case 13:
          a.push([d0 - 0.75 - 0.25 * (v1 + v0 - 2 * c) / (v0 - v1), (d1 - 0.25 - 0.25 * (-v3 - v1 + 2 * c) / (v3 - v1)) * yFlip]);
          break;
        case 14:
          a.push([d0 - 0.25 - 0.25 * (-v1 - v0 + 2 * c) / (v1 - v0), (d1 - 0.25 - 0.25 * (-v2 - v0 + 2 * c) / (v2 - v0)) * yFlip]);
          break;
        case 15:
          a.push([d0 - 0.5, (d1 - 0.5) * yFlip]);
          break;
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
  const fill = function(a0, verts, cells, level) {
    let s0 = a0.shape[0] | 0;
    let s1 = a0.shape[1] | 0;
    let d0 = a0.data;
    let o0 = a0.offset | 0;
    let t0_0 = a0.stride[0] | 0;
    let t0_1 = a0.stride[1] | 0;
    let p0 = o0;
    let c0_0;
    let d0_1 = -t0_0 | 0;
    let c0_1 = 0;
    let d0_2 = -t0_1 | 0;
    let c0_2 = 0;
    let d0_3 = -t0_0 - t0_1 | 0;
    let c0_3 = 0;
    let u0_0 = t0_0 | 0;
    let u0_1 = t0_1 - t0_0 * s0 | 0;
    let i0 = 0;
    let i1 = 0;
    let N = 0;
    let Q = 2 * s0 | 0;
    let P = (0,_Mallocs__WEBPACK_IMPORTED_MODULE_0__.mallocUint32)(Q);
    let V = (0,_Mallocs__WEBPACK_IMPORTED_MODULE_0__.mallocUint32)(Q);
    let X = 0;
    let b0 = 0;
    let e1 = -1 | 0;
    let y1 = -1 | 0;
    let b1 = 0;
    let e2 = -s0 | 0;
    let y2 = s0 | 0;
    let b2 = 0;
    let e3 = -s0 - 1 | 0;
    let y3 = s0 - 1 | 0;
    let b3 = 0;
    let v0 = 0;
    let T = 0;
    for (i0 = 0; i0 < s0; ++i0) {
      P[X++] = handleParam.phase(d0[p0], verts, cells, level);
      p0 += u0_0;
    }
    p0 += u0_1;
    if (s1 > 0) {
      i1 = 1;
      P[X++] = handleParam.phase(d0[p0], verts, cells, level);
      p0 += u0_0;
      if (s0 > 0) {
        i0 = 1;
        c0_0 = d0[p0];
        b0 = P[X] = handleParam.phase(c0_0, verts, cells, level);
        b1 = P[X + e1];
        b2 = P[X + e2];
        b3 = P[X + e3];
        if (b0 !== b1 || b0 !== b2 || b0 !== b3) {
          c0_1 = d0[p0 + d0_1];
          c0_2 = d0[p0 + d0_2];
          c0_3 = d0[p0 + d0_3];
          handleParam.vertex(i0, i1, c0_0, c0_1, c0_2, c0_3, b0, b1, b2, b3, verts, cells, level);
          v0 = V[X] = N++;
        }
        X += 1;
        p0 += u0_0;
        for (i0 = 2; i0 < s0; ++i0) {
          c0_0 = d0[p0];
          b0 = P[X] = handleParam.phase(c0_0, verts, cells, level);
          b1 = P[X + e1];
          b2 = P[X + e2];
          b3 = P[X + e3];
          if (b0 !== b1 || b0 !== b2 || b0 !== b3) {
            c0_1 = d0[p0 + d0_1];
            c0_2 = d0[p0 + d0_2];
            c0_3 = d0[p0 + d0_3];
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
      for (i1 = 2; i1 < s1; ++i1) {
        P[X++] = handleParam.phase(d0[p0], verts, cells, level);
        p0 += u0_0;
        if (s0 > 0) {
          i0 = 1;
          c0_0 = d0[p0];
          b0 = P[X] = handleParam.phase(c0_0, verts, cells, level);
          b1 = P[X + e1];
          b2 = P[X + e2];
          b3 = P[X + e3];
          if (b0 !== b1 || b0 !== b2 || b0 !== b3) {
            c0_1 = d0[p0 + d0_1];
            c0_2 = d0[p0 + d0_2];
            c0_3 = d0[p0 + d0_3];
            handleParam.vertex(i0, i1, c0_0, c0_1, c0_2, c0_3, b0, b1, b2, b3, verts, cells, level);
            v0 = V[X] = N++;
            if (b3 !== b2) {
              handleParam.cell(V[X + e2], v0, c0_2, c0_3, b2, b3, verts, cells, level);
            }
          }
          X += 1;
          p0 += u0_0;
          for (i0 = 2; i0 < s0; ++i0) {
            c0_0 = d0[p0];
            b0 = P[X] = handleParam.phase(c0_0, verts, cells, level);
            b1 = P[X + e1];
            b2 = P[X + e2];
            b3 = P[X + e3];
            if (b0 !== b1 || b0 !== b2 || b0 !== b3) {
              c0_1 = d0[p0 + d0_1];
              c0_2 = d0[p0 + d0_2];
              c0_3 = d0[p0 + d0_3];
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
    (0,_Mallocs__WEBPACK_IMPORTED_MODULE_0__.freeUint32)(V);
    (0,_Mallocs__WEBPACK_IMPORTED_MODULE_0__.freeUint32)(P);
  };
  return function(pixels, level) {
    const verts = [];
    const cells = [];
    fill(pixels, verts, cells, level);
    return {
      positions: verts,
      cells
    };
  };
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/surfaceNets/Mallocs.ts":
/*!***********************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/surfaceNets/Mallocs.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bitsNextPow2: () => (/* binding */ bitsNextPow2),
/* harmony export */   freeUint32: () => (/* binding */ freeUint32),
/* harmony export */   mallocArrayBuffer: () => (/* binding */ mallocArrayBuffer),
/* harmony export */   mallocUint32: () => (/* binding */ mallocUint32)
/* harmony export */ });

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
function mallocArrayBuffer(n) {
  const sn = bitsNextPow2(n);
  return new ArrayBuffer(sn);
}
function mallocUint32(n) {
  return new Uint32Array(mallocArrayBuffer(4 * n), 0, n);
}
function freeUint32(array) {
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/surfaceNets/surfaceNets.ts":
/*!***************************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/surfaceNets/surfaceNets.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurfaceNets: () => (/* binding */ SurfaceNets)
/* harmony export */ });
/* harmony import */ var _Builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builders */ "./src/engine/common/modules/d2Canvas2Svg/surfaceNets/Builders.ts");


const _SurfaceNets = class {
  static process(pixels, level) {
    const typesig = pixels.order.join() + "-" + pixels.dtype;
    let proc = _SurfaceNets.CACHE[typesig];
    level = +level || 0;
    if (!proc) {
      proc = _SurfaceNets.CACHE[typesig] = (0,_Builders__WEBPACK_IMPORTED_MODULE_0__.buildSurfaceNets)(pixels.order, pixels.dtype);
    }
    return proc(pixels, level);
  }
};
let SurfaceNets = _SurfaceNets;
SurfaceNets.CACHE = {};


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/triangles/Cdt2ds.ts":
/*!********************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/triangles/Cdt2ds.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cdt2ds: () => (/* binding */ Cdt2ds)
/* harmony export */ });
/* harmony import */ var _FaceIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FaceIndex */ "./src/engine/common/modules/d2Canvas2Svg/triangles/FaceIndex.ts");
/* harmony import */ var _algorithm_triangulation_Triangulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../algorithm/triangulation/Triangulation */ "./src/engine/common/algorithm/triangulation/Triangulation.ts");
/* harmony import */ var _Delaunays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Delaunays */ "./src/engine/common/modules/d2Canvas2Svg/triangles/Delaunays.ts");
/* harmony import */ var _MonotoneTriangulates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MonotoneTriangulates */ "./src/engine/common/modules/d2Canvas2Svg/triangles/MonotoneTriangulates.ts");

var __defProp = Object.defineProperty;
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




class Cdt2ds {
  static process(points, edges, options = {}) {
    const defaultOptions = {
      delaunay: true,
      interior: true,
      exterior: true,
      infinity: false
    };
    const optional = __spreadValues(__spreadValues({}, defaultOptions), options);
    if (!optional.interior && !optional.exterior || points.length === 0) {
      return [];
    }
    const cells = (0,_MonotoneTriangulates__WEBPACK_IMPORTED_MODULE_3__.monotoneTriangulates)(points, edges);
    if (optional.delaunay || optional.interior !== optional.exterior || optional.infinity) {
      let triangulation = (0,_algorithm_triangulation_Triangulation__WEBPACK_IMPORTED_MODULE_1__.createTriangulation)(
        points.length,
        edges.map((e) => {
          return [Math.min(e[0], e[1]), Math.max(e[0], e[1])];
        }).sort((a, b) => {
          return a[0] - b[0] || a[1] - b[1];
        })
      );
      for (let i = 0; i < cells.length; ++i) {
        let f = cells[i];
        triangulation.addTriangle(f[0], f[1], f[2]);
      }
      if (optional.delaunay) {
        (0,_Delaunays__WEBPACK_IMPORTED_MODULE_2__.delaunayRefines)(points, triangulation);
      }
      if (!optional.exterior) {
        return (0,_FaceIndex__WEBPACK_IMPORTED_MODULE_0__.classifyFaces)(triangulation, -1);
      } else if (!optional.interior) {
        return (0,_FaceIndex__WEBPACK_IMPORTED_MODULE_0__.classifyFaces)(triangulation, 1, optional.infinity);
      } else if (optional.infinity) {
        return (0,_FaceIndex__WEBPACK_IMPORTED_MODULE_0__.classifyFaces)(triangulation, 0, optional.infinity);
      } else {
        return triangulation.cells();
      }
    }
    return cells;
  }
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/triangles/Delaunays.ts":
/*!***********************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/triangles/Delaunays.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delaunayRefines: () => (/* binding */ delaunayRefines)
/* harmony export */ });

function inCircle(a, b, c, p) {
  const [ax, ay] = a;
  const [bx, by] = b;
  const [cx, cy] = c;
  const [px, py] = p;
  const det = (ax - px) * ((by - py) * (cx * cx + cy * cy - (bx * bx + by * by)) - (cy - py) * (bx * bx + by * by - (ax * ax + ay * ay))) - (ay - py) * ((bx - px) * (cx * cx + cy * cy - (bx * bx + by * by)) - (cx - px) * (bx * bx + by * by - (ax * ax + ay * ay))) + (ax * ax + ay * ay - (px * px + py * py)) * ((bx - px) * (cy - py) - (cx - px) * (by - py));
  return det;
}
function testFlip(points, triangulation, stack, a, b, x) {
  let y = triangulation.opposite(a, b);
  if (y < 0) {
    return;
  }
  if (b < a) {
    let tmp = a;
    a = b;
    b = tmp;
    tmp = x;
    x = y;
    y = tmp;
  }
  if (triangulation.isConstraint(a, b)) {
    return;
  }
  if (inCircle(points[a], points[b], points[x], points[y]) < 0) {
    stack.push(a, b);
  }
}
function delaunayRefines(points, triangulation) {
  const stack = [];
  const numPoints = points.length;
  const stars = triangulation.stars;
  for (let a = 0; a < numPoints; ++a) {
    let star = stars[a];
    for (let j = 1; j < star.length; j += 2) {
      let b = star[j];
      if (b < a) {
        continue;
      }
      if (triangulation.isConstraint(a, b)) {
        continue;
      }
      let x = star[j - 1];
      let y = -1;
      for (let k = 1; k < star.length; k += 2) {
        if (star[k - 1] === b) {
          y = star[k];
          break;
        }
      }
      if (y < 0) {
        continue;
      }
      if (inCircle(points[a], points[b], points[x], points[y]) < 0) {
        stack.push(a, b);
      }
    }
  }
  while (stack.length > 0) {
    let b = stack.pop();
    let a = stack.pop();
    let x = -1;
    let y = -1;
    let star = stars[a];
    for (let i = 1; i < star.length; i += 2) {
      let s = star[i - 1];
      let t = star[i];
      if (s === b) {
        y = t;
      } else if (t === b) {
        x = s;
      }
    }
    if (x < 0 || y < 0) {
      continue;
    }
    if (inCircle(points[a], points[b], points[x], points[y]) >= 0) {
      continue;
    }
    triangulation.flip(a, b);
    testFlip(points, triangulation, stack, x, a, y);
    testFlip(points, triangulation, stack, a, y, x);
    testFlip(points, triangulation, stack, y, b, x);
    testFlip(points, triangulation, stack, b, x, y);
  }
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/triangles/FaceIndex.ts":
/*!***********************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/triangles/FaceIndex.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceIndex: () => (/* binding */ FaceIndex),
/* harmony export */   classifyFaces: () => (/* binding */ classifyFaces)
/* harmony export */ });
/* harmony import */ var _algorithm_binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../algorithm/binarySearchBounds/binarySearchBounds */ "./src/engine/common/algorithm/binarySearchBounds/binarySearchBounds.ts");


function indexCells(triangulation, infinity) {
  let cells = triangulation.cells();
  let nc = cells.length;
  for (let i = 0; i < nc; ++i) {
    let c = cells[i];
    let x = c[0];
    let y = c[1];
    let z = c[2];
    if (y < z) {
      if (y < x) {
        c[0] = y;
        c[1] = z;
        c[2] = x;
      }
    } else if (z < x) {
      c[0] = z;
      c[1] = x;
      c[2] = y;
    }
  }
  cells.sort((a, b) => {
    return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
  });
  let flags = new Array(nc);
  for (let i = 0; i < flags.length; ++i) {
    flags[i] = 0;
  }
  let active = [];
  let next = [];
  let neighbor = new Array(3 * nc);
  let constraint = new Array(3 * nc);
  let boundary = [];
  if (infinity) {
    boundary = [];
  }
  const index = new FaceIndex(cells, neighbor, constraint, flags, active, next, boundary);
  for (let i = 0; i < nc; ++i) {
    let c = cells[i];
    for (let j = 0; j < 3; ++j) {
      let x = c[j];
      let y = c[(j + 1) % 3];
      let a = neighbor[3 * i + j] = index.locate(y, x, triangulation.opposite(y, x));
      let b = constraint[3 * i + j] = triangulation.isConstraint(x, y);
      if (a < 0) {
        if (b) {
          next.push(i);
        } else {
          active.push(i);
          flags[i] = 1;
        }
        if (infinity) {
          boundary.push([y, x, -1]);
        }
      }
    }
  }
  return index;
}
function filterCells(cells, flags, target) {
  let ptr = 0;
  for (let i = 0; i < cells.length; ++i) {
    if (flags[i] === target) {
      cells[ptr++] = cells[i];
    }
  }
  cells.length = ptr;
  return cells;
}
class FaceIndex {
  constructor(cells, neighbor, constraint, flags, active, next, boundary) {
    this._cells = cells;
    this._neighbor = neighbor;
    this._constraint = constraint;
    this._flags = flags;
    this._active = active;
    this._next = next;
    this._cells = cells;
    this._boundary = boundary;
    this._key = [0, 0, 0];
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
  get active() {
    return this._active;
  }
  set active(value) {
    this._active = value;
  }
  get next() {
    return this._next;
  }
  set next(value) {
    this._next = value;
  }
  get boundary() {
    return this._boundary;
  }
  set boundary(value) {
    this._boundary = value;
  }
  locate(a, b, c) {
    let x = a;
    let y = b;
    let z = c;
    if (b < c) {
      if (b < a) {
        x = b;
        y = c;
        z = a;
      }
    } else if (c < a) {
      x = c;
      y = a;
      z = b;
    }
    if (x < 0) {
      return -1;
    }
    this._key[0] = x;
    this._key[1] = y;
    this._key[2] = z;
    return _algorithm_binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.eq(this.cells, this._key, (a2, b2) => {
      return a2[0] - b2[0] || a2[1] - b2[1] || a2[2] - b2[2];
    });
  }
}
function classifyFaces(triangulation, target, infinity = false) {
  const index = indexCells(triangulation, infinity);
  if (target === 0) {
    if (infinity) {
      return index.cells.concat(index.boundary);
    } else {
      return index.cells;
    }
  }
  let side = 1;
  let active = index.active;
  let next = index.next;
  let flags = index.flags;
  let cells = index.cells;
  let constraint = index.constraint;
  let neighbor = index.neighbor;
  while (active.length > 0 || next.length > 0) {
    while (active.length > 0) {
      let t = active.pop();
      if (flags[t] === -side) {
        continue;
      }
      flags[t] = side;
      let c = cells[t];
      for (let j = 0; j < 3; ++j) {
        let f = neighbor[3 * t + j];
        if (f >= 0 && flags[f] === 0) {
          if (constraint[3 * t + j]) {
            next.push(f);
          } else {
            active.push(f);
            flags[f] = side;
          }
        }
      }
    }
    let tmp = next;
    next = active;
    active = tmp;
    next.length = 0;
    side = -side;
  }
  let result = filterCells(cells, flags, target);
  if (infinity) {
    return result.concat(index.boundary);
  }
  return result;
}


/***/ }),

/***/ "./src/engine/common/modules/d2Canvas2Svg/triangles/MonotoneTriangulates.ts":
/*!**********************************************************************************!*\
  !*** ./src/engine/common/modules/d2Canvas2Svg/triangles/MonotoneTriangulates.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   monotoneTriangulates: () => (/* binding */ monotoneTriangulates)
/* harmony export */ });
/* harmony import */ var _algorithm_binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../algorithm/binarySearchBounds/binarySearchBounds */ "./src/engine/common/algorithm/binarySearchBounds/binarySearchBounds.ts");
/* harmony import */ var _geometry_Orients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/Orients */ "./src/engine/common/geometry/Orients.ts");



const EVENT_POINT = 0;
const EVENT_END = 1;
const EVENT_START = 2;
class PartialHull {
  constructor(a, b, idx, lowerIds, upperIds) {
    this._a = a;
    this._b = b;
    this._idx = idx;
    this._lowerIds = lowerIds;
    this._upperIds = upperIds;
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
  get lowerIds() {
    return this._lowerIds;
  }
  set lowerIds(value) {
    this._lowerIds = value;
  }
  get upperIds() {
    return this._upperIds;
  }
  set upperIds(value) {
    this._upperIds = value;
  }
}
class Event {
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
}
function addPoint(cells, hulls, points, p, idx) {
  let lo = _algorithm_binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.lt(hulls, p, (hull, p2) => {
    return (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_1__.orient)(hull.a, hull.b, p2);
  });
  let hi = _algorithm_binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.gt(hulls, p, (hull, p2) => {
    return (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_1__.orient)(hull.a, hull.b, p2);
  });
  for (let i = lo; i < hi; ++i) {
    let m = 0;
    let hull = hulls[i];
    let lowerIds = hull.lowerIds;
    m = lowerIds.length;
    while (m > 1 && (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_1__.orient)(points[lowerIds[m - 2]], points[lowerIds[m - 1]], p) > 0) {
      cells.push([lowerIds[m - 1], lowerIds[m - 2], idx]);
      m -= 1;
    }
    lowerIds.length = m;
    lowerIds.push(idx);
    let upperIds = hull.upperIds;
    m = upperIds.length;
    while (m > 1 && (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_1__.orient)(points[upperIds[m - 2]], points[upperIds[m - 1]], p) < 0) {
      cells.push([upperIds[m - 2], upperIds[m - 1], idx]);
      m -= 1;
    }
    upperIds.length = m;
    upperIds.push(idx);
  }
}
function findSplit(hull, edge) {
  let d = void 0;
  if (hull.a[0] < edge.a[0]) {
    d = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_1__.orient)(hull.a, hull.b, edge.a);
  } else {
    d = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_1__.orient)(edge.b, edge.a, hull.a);
  }
  if (d) {
    return d;
  }
  if (edge.b[0] < hull.b[0]) {
    d = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_1__.orient)(hull.a, hull.b, edge.b);
  } else {
    d = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_1__.orient)(edge.b, edge.a, hull.b);
  }
  return d || hull.idx - edge.idx;
}
function splitHulls(hulls, points, event) {
  let splitIdx = _algorithm_binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.le(hulls, event, findSplit);
  let hull = hulls[splitIdx];
  let upperIds = hull.upperIds;
  let x = upperIds[upperIds.length - 1];
  hull.upperIds = [x];
  hulls.splice(splitIdx + 1, 0, new PartialHull(event.a, event.b, event.idx, [x], upperIds));
}
function mergeHulls(hulls, points, event) {
  let tmp = event.a;
  event.a = event.b;
  event.b = tmp;
  let mergeIdx = _algorithm_binarySearchBounds_binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__.bounds.eq(hulls, event, findSplit);
  let upper = hulls[mergeIdx];
  let lower = hulls[mergeIdx - 1];
  lower.upperIds = upper.upperIds;
  hulls.splice(mergeIdx, 1);
}
function monotoneTriangulates(points, edges) {
  const numPoints = points.length;
  const numEdges = edges.length;
  const events = [];
  for (let i = 0; i < numPoints; ++i) {
    events.push(new Event(points[i], null, EVENT_POINT, i));
  }
  for (let i = 0; i < numEdges; ++i) {
    let e = edges[i];
    let a = points[e[0]];
    let b = points[e[1]];
    if (a[0] < b[0]) {
      events.push(new Event(a, b, EVENT_START, i), new Event(b, a, EVENT_END, i));
    } else if (a[0] > b[0]) {
      events.push(new Event(b, a, EVENT_START, i), new Event(a, b, EVENT_END, i));
    }
  }
  events.sort((a, b) => {
    let d = a.a[0] - b.a[0] || a.a[1] - b.a[1] || a.type - b.type;
    if (d) {
      return d;
    }
    if (a.type !== EVENT_POINT) {
      d = (0,_geometry_Orients__WEBPACK_IMPORTED_MODULE_1__.orient)(a.a, a.b, b.b);
      if (d) {
        return d;
      }
    }
    return a.idx - b.idx;
  });
  let minX = events[0].a[0] - (1 + Math.abs(events[0].a[0])) * Math.pow(2, -52);
  let hull = [new PartialHull([minX, 1], [minX, 0], -1, [], [])];
  let cells = [];
  for (let i = 0, numEvents = events.length; i < numEvents; ++i) {
    let event = events[i];
    let type = event.type;
    if (type === EVENT_POINT) {
      addPoint(cells, hull, points, event.a, event.idx);
    } else if (type === EVENT_START) {
      splitHulls(hull, points, event);
    } else {
      mergeHulls(hull, points, event);
    }
  }
  return cells;
}


/***/ }),

/***/ "./src/engine/common/utils/Uniq.ts":
/*!*****************************************!*\
  !*** ./src/engine/common/utils/Uniq.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unique: () => (/* binding */ unique)
/* harmony export */ });

function uniquePred(list, compare) {
  let ptr = 1;
  let len = list.length;
  let a = list[0];
  let b = list[0];
  for (let i = 1; i < len; ++i) {
    b = a;
    a = list[i];
    if (compare(a, b)) {
      if (i === ptr) {
        ptr++;
        continue;
      }
      list[ptr++] = a;
    }
  }
  list.length = ptr;
  return list;
}
function unique(list, compare) {
  if (list.length === 0) {
    return list;
  }
  list.sort(compare);
  return uniquePred(list, compare);
}


/***/ }),

/***/ "./src/engine/config/CommonProfile.ts":
/*!********************************************!*\
  !*** ./src/engine/config/CommonProfile.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ECoreEngineType: () => (/* binding */ ECoreEngineType),
/* harmony export */   ESweep: () => (/* binding */ ESweep)
/* harmony export */ });

var ECoreEngineType = /* @__PURE__ */ ((ECoreEngineType2) => {
  ECoreEngineType2["WEBGL2D"] = "WEBGL2D";
  ECoreEngineType2["WEBGL3D"] = "WEBGL3D";
  ECoreEngineType2["WEBGPU"] = "WEBGPU";
  return ECoreEngineType2;
})(ECoreEngineType || {});
var ESweep = /* @__PURE__ */ ((ESweep2) => {
  ESweep2[ESweep2["CW"] = 0] = "CW";
  ESweep2[ESweep2["CCW"] = 1] = "CCW";
  return ESweep2;
})(ESweep || {});


/***/ }),

/***/ "./src/engine/config/PrimitiveProfile.ts":
/*!***********************************************!*\
  !*** ./src/engine/config/PrimitiveProfile.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ECanvas2DLineCap: () => (/* binding */ ECanvas2DLineCap),
/* harmony export */   ED2FontStyle: () => (/* binding */ ED2FontStyle),
/* harmony export */   ED2PointShape: () => (/* binding */ ED2PointShape),
/* harmony export */   EPrimitiveStatus: () => (/* binding */ EPrimitiveStatus),
/* harmony export */   PRIMITIVE_INIT_STATUS: () => (/* binding */ PRIMITIVE_INIT_STATUS)
/* harmony export */ });

const PRIMITIVE_INIT_STATUS = 1;
var ECanvas2DLineCap = /* @__PURE__ */ ((ECanvas2DLineCap2) => {
  ECanvas2DLineCap2["ROUND"] = "round";
  ECanvas2DLineCap2["SQUARE"] = "square";
  return ECanvas2DLineCap2;
})(ECanvas2DLineCap || {});
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
var EPrimitiveStatus = /* @__PURE__ */ ((EPrimitiveStatus2) => {
  EPrimitiveStatus2[EPrimitiveStatus2["VISIBLE"] = 1] = "VISIBLE";
  EPrimitiveStatus2[EPrimitiveStatus2["LOCKED"] = 2] = "LOCKED";
  EPrimitiveStatus2[EPrimitiveStatus2["KILLED"] = 4] = "KILLED";
  EPrimitiveStatus2[EPrimitiveStatus2["HIGHTLIGHT"] = 8] = "HIGHTLIGHT";
  return EPrimitiveStatus2;
})(EPrimitiveStatus || {});


/***/ }),

/***/ "./src/worker/d2CanvasPixel2Svg/CacheData.ts":
/*!***************************************************!*\
  !*** ./src/worker/d2CanvasPixel2Svg/CacheData.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskDataList: () => (/* binding */ taskDataList)
/* harmony export */ });

const taskDataList = [];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************************************!*\
  !*** ./src/worker/d2CanvasPixel2Svg/D2CanvasPixel2Svg.ts ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_common_math_NDArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/common/math/NDArray */ "./src/engine/common/math/NDArray.ts");
/* harmony import */ var _engine_common_modules_d2Canvas2Svg_pixelFilter_PixelFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/common/modules/d2Canvas2Svg/pixelFilter/PixelFilter */ "./src/engine/common/modules/d2Canvas2Svg/pixelFilter/PixelFilter.ts");
/* harmony import */ var _CacheData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CacheData */ "./src/worker/d2CanvasPixel2Svg/CacheData.ts");

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



let WORKER_ID = "VectorizeText";
self.onmessage = (event) => {
  const payload = event.data;
  if (!payload.ID || payload.ID !== WORKER_ID) {
    return;
  }
  _CacheData__WEBPACK_IMPORTED_MODULE_2__.taskDataList.push(__spreadProps(__spreadValues({}, payload.data), { isRuning: false, pixelFilter: null }));
  main();
};
function main() {
  consumeTask();
}
function consumeTask() {
  if (_CacheData__WEBPACK_IMPORTED_MODULE_2__.taskDataList.length <= 0) {
    return;
  }
  const taskDataItem = _CacheData__WEBPACK_IMPORTED_MODULE_2__.taskDataList.shift();
  taskDataItem.isRuning = true;
  if (!taskDataItem.pixelFilter) {
    taskDataItem.pixelFilter = new _engine_common_modules_d2Canvas2Svg_pixelFilter_PixelFilter__WEBPACK_IMPORTED_MODULE_1__.PixelFilter(taskDataItem.pixelFilterType);
  }
  const { textArray, textPolygonBbox2Arrays, textCanvasRenderMetricsArray, imageCutArray, imagePixelArray, vertexDataArray } = taskDataItem;
  for (let rowIndex = 0, textIndex = -1; rowIndex < textArray.length; rowIndex++) {
    const colSize = textArray[rowIndex].length;
    for (let colIndex = 0; colIndex < colSize; colIndex++) {
      textIndex++;
      if (imagePixelArray[rowIndex][colIndex]) {
        const cutValueOfCell = imageCutArray[rowIndex][colIndex];
        const pixels = getPixels(imagePixelArray[rowIndex][colIndex], cutValueOfCell.xCut, cutValueOfCell.yCut);
        const pixelProgressResult = taskDataItem.pixelFilter.process(pixels);
        const { templateTriangleVertexData, templatePolygonBbox2 } = flatAllTrianglesVertexData(pixelProgressResult.triangles);
        vertexDataArray[rowIndex][colIndex] = templateTriangleVertexData;
        textPolygonBbox2Arrays[rowIndex][colIndex] = templatePolygonBbox2;
        imagePixelArray[rowIndex][colIndex] = null;
        imageCutArray[rowIndex][colIndex] = null;
        continue;
      }
    }
  }
  self.postMessage({
    ID: WORKER_ID,
    data: {
      taskId: taskDataItem.taskId,
      textStrId: taskDataItem.textStrId,
      optional: taskDataItem.optional,
      pixelFilterType: taskDataItem.pixelFilterType,
      fontSize: taskDataItem.fontSize,
      startPointData: taskDataItem.startPointData,
      /* ... */
      textArray,
      textPolygonBbox2Arrays,
      textCanvasRenderMetricsArray,
      vertexDataArray
    }
  });
  consumeTask();
}
function getPixels(imageData, xCut, yCut) {
  const pixels = (0,_engine_common_math_NDArray__WEBPACK_IMPORTED_MODULE_0__.createCanvasImageDataArray)(imageData, [yCut, xCut, 4]);
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
  for (let i = 0; i < sourceTriangles.cells.length; i++) {
    for (let j = 0; j < sourceTriangles.cells[i].length; j++) {
      templateTriangleVertexData.indices.push(sourceTriangles.cells[i][j]);
    }
  }
  let minX = 0;
  let minY = 0;
  let maxX = 0;
  let maxY = 0;
  for (let i = 0; i < allPositions.length; i += 2) {
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

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=D2CanvasPixel2Svg.js.map