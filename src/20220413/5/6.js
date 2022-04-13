function solution(input) {
   const answer = 0;
   const hash = new Map();

   for (let x of input) {
      if (!hash.has(x)) {
         hash.set(x, 0);
      }
      hash.set(x, hash.get(x) + 1);
   }
   

}

solution("BACBACCACCBDEDE");
