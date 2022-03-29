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

// src/20220329/6.js
(function(input) {
  let answer;
  let maxValue = Number.MIN_SAFE_INTEGER;
  function sumVertical() {
    for (let i = 0; i < 5; i++) {
      let sumValue = 0;
      for (let j = 0; j < 5; j++) {
        sumValue += input[j][i];
      }
      if (sumValue > maxValue) {
        maxValue = sumValue;
      }
    }
  }
  function sumHorizontal() {
    for (let i = 0; i < 5; i++) {
      let sumValue = 0;
      for (let j = 0; j < 5; j++) {
        sumValue += input[i][j];
      }
      if (sumValue > maxValue) {
        maxValue = sumValue;
      }
    }
  }
  function sumDiagonal() {
    let sumValue = 0;
    for (let i = 0; i < 5; i++) {
      sumValue += input[i][i];
    }
    if (sumValue > maxValue) {
      maxValue = sumValue;
    }
    for (let i = 0; i < 5; i++) {
      sumValue += input[i][5 - i];
    }
    if (sumValue > maxValue) {
      maxValue = sumValue;
    }
  }
  sumHorizontal();
  sumVertical();
  sumDiagonal();
  answer = maxValue;
  return answer;
})([
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
]);
