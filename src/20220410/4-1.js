(function (input) {
   let answer, max = Number.MIN_SAFE_INTEGER;
   for (let x of input) {
      let sum = 0, tmp = x;
      while (tmp) {
         let t = tmp % 10;
         sum += t;
         tmp = Math.floor(tmp / 10);
      }
      if (sum > max) {
         max = sum;
         answer = x;
      } else if (sum === max) {
         if (x > answer) {
            answer = x;
         }
      }
   }
   console.log(answer);
})([128, 460, 603, 40, 521, 137, 123]);
