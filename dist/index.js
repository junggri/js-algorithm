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

// src/20220415/4.js
function solution(input) {
  const answer = [];
  for (let i = 0; i < input.length; i++) {
    const tmp = input[i];
    let j;
    for (j = i - 1; i >= 0; j--) {
      if (input[j] > tmp) {
        input[j + 1] = input[j];
      } else {
        break;
      }
    }
    input[j + 1] = tmp;
  }
  console.log(input);
}
solution([11, 7, 5, 6, 10, 9]);
