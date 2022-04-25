function solution(input) {
   const answer = [];
   let idx = 0;
   const recursive = (idx) => {
      if (idx < input.length) {
         console.log(input[idx]);
         idx++;
         recursive(idx);
      }
   };
   recursive(idx);
}


solution([1, 2, 3]);
