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

// src/20220421/10.js
function solution(input) {
  let answer = 0;
  input.sort((a, b) => a - b);
  let lp = 0;
  let rp = input.length;
  while (lp < rp) {
    let cursor = Math.floor((rp - lp) / 2);
    console.log(input[cursor]);
    answer++;
    if (input[cursor] > 32)
      rp = cursor;
    if (input[cursor] < 32)
      lp = cursor;
    if (input[cursor] === 32) {
      break;
    }
  }
  console.log(answer);
}
solution([23, 87, 65, 12, 57, 31, 32, 99, 81]);
