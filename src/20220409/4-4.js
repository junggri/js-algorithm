//not solved
(function (input) {
   let answer = [];
   let budget = 28;

   for (let i = 0; i < input.length; i++) {
      let sum = 0;
      const price = input[i][0];
      const delivery = input[i][1];
      sum += (price / 2) + delivery;

      for (let j = 0; j < 5; j++) {
         if (i !== j) {
            sum += input[i][0] + input[i][1];
            // break;
         }
      }
      console.log(sum);
   }


})([
   [6, 6],
   [2, 2],
   [4, 3],
   [4, 5],
   [10, 3]
]);
