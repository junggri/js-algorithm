var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
module.exports = __toCommonJS(src_exports);

// src/20220410/4-5.js
(function(input) {
  let answer;
  let n = input.length;
  let m = 3;
  let tmp = /* @__PURE__ */ new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k2 = j + 1; k2 < n; k2++) {
        tmp.add(input[i] + input[k2] + input[j]);
      }
    }
  }
  let a = Array.from(tmp).sort((a2, b) => b - a2);
  console.log(a);
  answer = a[k - 1];
})([13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
