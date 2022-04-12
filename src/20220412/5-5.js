(function (input) {
   let answer = 0;
   let n = 3;
   let maxValue = Number.MIN_SAFE_INTEGER;

   for (let i = 0; i < input.length - (n - 1); i++) {
      const sum = input[i] + input[i + 1] + input[i + 2];
      if (sum > maxValue) {
         maxValue = sum;
      }
   }
   console.log(maxValue);
   answer = maxValue;
})([12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);
