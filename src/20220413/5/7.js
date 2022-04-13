function solution(a, b,) {
   let answer = "YES";
   const hash = new Map();

   for (let x of a) {
      if (!hash.has(x)) {
         hash.set(x, 0);
      }
      hash.set(x, hash.get(x) + 1);
   }

   for (let x of b) {
      if (!hash.has(x) || hash.get(x) === 0) answer = "NO";
      hash.set(x, hash.get(x) - 1);
   }

   for (let [_, value] of hash) {
      if (value) {
         answer = "NO";
         break;
      }
   }

   console.log(answer);
}

solution("AbaAeCe", "baeeACA");
