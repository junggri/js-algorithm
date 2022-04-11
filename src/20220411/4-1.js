(function (input) {
   let answer = 0;
   let maxValue = Number.MIN_SAFE_INTEGER;
   let sum = 0;

   for (let x of input) {
      let tmp = x;
      while (tmp) {
         sum += tmp % 10;
         tmp = Math.floor(tmp / 10);
      }

      if (sum > maxValue) {
         maxValue = sum;
         answer = x;
      } else if (sum >= maxValue && x > answer) {
         answer = x;
      }

      sum = 0;
   }
   console.log(answer);

})([128, 460, 603, 40, 521, 137, 123]);
