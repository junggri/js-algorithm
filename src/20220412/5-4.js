(function (input) {
   let answer = 0;
   let lt = 0, sum = 0;
   // for (let i = 0; i < input.length; i++) {
   //    let number = 5;
   //    let cursor = i;
   //
   //    while (number - input[cursor] >= 0 && cursor <= input.length) {
   //       number -= input[cursor];
   //       cursor++;
   //       answer++;
   //    }
   // }

   for (let rt = 0; rt < input.length; rt++) {
      sum += input[rt];
      if (sum <= 5) {
         answer += rt - lt + 1;
      }

      while (sum > 5) {
         sum -= input[lt++];
         if (sum <= 5) {
            answer += rt - lt + 1;
         }
      }
   }
   console.log(answer);
})([1, 3, 1, 2, 3]);

