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

// src/20220411/4-5.js
(function(input) {
  let answer = [];
  let k = 3;
  let n = input.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let s = j + 1; s < n; s++) {
        const sum = input[i] + input[j] + input[s];
        answer.push(sum);
      }
    }
  }
  const set = Array.from(new Set(answer)).sort((a, b) => b - a);
  answer = set[k - 1];
  console.log(answer);
})([13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
