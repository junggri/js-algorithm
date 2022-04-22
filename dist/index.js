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
  let lt = 0;
  let rt = input.length - 1;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (input[mid] === 32) {
      answer = mid + 1;
      break;
    } else if (input[mid] > 32) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  console.log(answer);
}
solution([23, 87, 65, 12, 57, 32, 99, 81]);
