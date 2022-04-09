//not solved
(function (input) {
   let answer = [];

   const hash = {};

   for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {

         if (!hash[input[i][j]]) {
            hash[input[i][j]] = [];
         }
      }
   }

   console.log(hash);
})([
   [3, 4, 1, 2],
   [4, 3, 2, 1],
   [3, 1, 4, 2]
]);
