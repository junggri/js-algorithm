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

// src/20220412/5-8.js
(function(input) {
  let answer = 0;
  let anagram = "abc";
  for (let i = 0; i < input.length; i++) {
    let n = anagram.length;
    let hash = {};
    for (let i2 = 0; i2 < n; i2++) {
      if (!hash[anagram[i2]]) {
        hash[anagram[i2]] = 0;
      }
    }
    let cursor = i;
    let cnt = 0;
    while (n > 0 && input[cursor]) {
      hash[input[cursor]]++;
      cursor++;
      n--;
    }
    const value = Math.min(...Object.values(hash));
    if (value === 1) {
      answer++;
    }
  }
  console.log(answer);
})("bacaAacba");
