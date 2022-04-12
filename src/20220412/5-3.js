(function (input) {
   let answer = 0;

   for (let i = 0; i < input.length; i++) {
      let n = 6;
      let cursor = i;
      while (n >= 0 && input[cursor]) {
         n -= input[cursor];
         cursor++;
         if (n === 0) {
            answer++;
         }
      }
   }
   console.log(answer);

})([1, 2, 1, 3, 1, 1, 1, 2]);
