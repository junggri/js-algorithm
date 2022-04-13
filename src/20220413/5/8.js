// function compare(hash, word) {
//    let count = 0;
//
//    for (let x of word) {
//       if (!hash.has(x) || hash.get(x) === 0) break;
//       else hash.set(hash.get(x) - 1);
//       count++;
//    }
//    console.log(hash);
//    return count;
// }
function compare(map1, map2) {
   for (let [key, value] of map1) {
      if (!map2.has(key) || map2.get(key) !== value) return false;
   }
   return true;
}

function solution(a, b) {
   let answer = 0;

   const t = b.length;
   const hash1 = new Map();
   const hash2 = new Map();

   for (let i = 0; i < b.length; i++) {
      if (!hash1.has(b[i])) hash1.set(b[i], 1);
      else hash1.set(b[i], hash1.get(b[i]) + 1);
   }

   for (let i = 0; i < t; i++) {
      if (!hash2.has(a[i])) hash2.set(a[i], 1);
      else hash2.set(a[i], hash2.get(a[i]) + 1);
   }
   const data = compare(hash1, hash2);
   if (data) {
      answer++;
   }
   let lp = 0;
   for (let rp = t; rp < a.length; rp++) {
      if (hash1.has(a[rp])) hash1.set(a[rp], hash1.get(a[rp]) + 1);
      else hash1.set(a[rp], 1);

      if (hash1.has(a[lp])) hash1.set(a[lp], hash1.get(a[lp]) - 1);
      if (!hash1.get(a[lp])) hash1.delete(a[lp]);
      lp++;
      console.log(hash1, hash2);
      const data = compare(hash1, hash2);

      if (data) {
         answer++;
      }
   }
   console.log(answer);
}

solution("bacaAacba", "abc");
