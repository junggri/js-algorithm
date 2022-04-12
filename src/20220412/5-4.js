(function (input) {
   let answer = 0;

   for (let i = 0; i < input.length; i++) {
      let number = 5;
      let cursor = i;

      while (number - input[cursor] >= 0 && cursor <= input.length) {
         number -= input[cursor];
         cursor++;
         answer++;
      }
   }
   console.log(answer);
})([1, 3, 1, 2, 3]);

