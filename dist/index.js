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

// src/20220413/5/8.js
function compare(map1, map2) {
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value)
      return false;
  }
  return true;
}
function solution(a, b) {
  let answer = 0;
  const t = b.length;
  const hash1 = /* @__PURE__ */ new Map();
  const hash2 = /* @__PURE__ */ new Map();
  for (let i = 0; i < b.length; i++) {
    if (!hash1.has(b[i]))
      hash1.set(b[i], 1);
    else
      hash1.set(b[i], hash1.get(b[i]) + 1);
  }
  for (let i = 0; i < t; i++) {
    if (!hash2.has(a[i]))
      hash2.set(a[i], 1);
    else
      hash2.set(a[i], hash2.get(a[i]) + 1);
  }
  const data = compare(hash1, hash2);
  if (data) {
    answer++;
  }
  let lp = 0;
  for (let rp = t; rp < a.length; rp++) {
    if (hash1.has(a[rp]))
      hash1.set(a[rp], hash1.get(a[rp]) + 1);
    else
      hash1.set(a[rp], 1);
    if (hash1.has(a[lp]))
      hash1.set(a[lp], hash1.get(a[lp]) - 1);
    if (!hash1.get(a[lp]))
      hash1.delete(a[lp]);
    lp++;
    console.log(hash1, hash2);
    const data2 = compare(hash1, hash2);
    if (data2) {
      answer++;
    }
  }
  console.log(answer);
}
solution("bacaAacba", "abc");
