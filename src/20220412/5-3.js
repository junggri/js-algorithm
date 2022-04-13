(function (input) {
   let answer = 0;
   //
   // for (let i = 0; i < input.length; i++) {
   //    let n = 6;
   //    let cursor = i;
   //    while (n >= 0 && input[cursor]) {
   //       n -= input[cursor];
   //       cursor++;
   //       if (n === 0) {
   //          answer++;
   //       }
   //    }
   // }
   // console.log(answer);

   //풀이//중요하다
   let lt = 0, sum = 0;
   for (let rt = 0; rt < input.length; rt++) {
      sum += input[rt];
      if (sum === 6) {
         answer++;
      }

      while (sum >= 6) {
         sum -= input[lt++];
         if (sum === 6) answer++;
      }
   }

   // let lp = 0, rp = 0;
   // let sum = 0;
   // while (rp < input.length) {
   //
   //    if (sum < 6) {
   //       sum += input[rp];
   //       rp++;
   //    }
   //
   //    if (sum > 6) {
   //       sum -= input[lp];
   //       lp++;
   //    }
   //
   //    if (sum === 6) {
   //       answer++;
   //       sum += input[rp];
   //       rp++;
   //
   //    }
   //
   // }
   console.log(answer);

})([1, 2, 1, 3, 1, 1, 1, 2]);
