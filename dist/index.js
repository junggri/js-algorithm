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

// src/20220412/6-7.js
function solution(a, b) {
  let answer;
  const stack = [];
  for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i])) {
      stack.push(b[i]);
    }
  }
  const courseArray = Array.from(a);
  const tmp = [...stack];
  for (let i = 0; i < stack.length; i++) {
    const a2 = courseArray.pop();
    const b2 = tmp.pop();
    console.log(a2, b2);
    if (a2 === b2) {
      answer = true;
    } else {
      answer = false;
      break;
    }
  }
  console.log(answer);
}
solution("BCA", "CBDAGE");
