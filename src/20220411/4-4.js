(function (input) {
   let answer = 0;
   let budget = 28;

   input.sort((a, b) => a[0] + a[1] - b[0] - b[1]);

   console.log(input);
   for (let i = 0; i < input.length; i++) {
      let sum = 0;
      let discount = (input[i][0] / 2) + input[i][1];
      let cnt = 1;
      sum += discount;


      for (let j = 0; j < input.length; j++) {
         if (i !== j && sum + input[j][0] + input[j][1] <= 28) {
            sum += input[j][0] + input[j][1];
            cnt++;
         }
      }
      console.log(cnt);
   }

})([
   [6, 6],
   [2, 2],
   [4, 3],
   [4, 5],
   [10, 3]
]);
