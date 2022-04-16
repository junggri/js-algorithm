function solution(input) {
   const answer = [];

   for (let i = 1; i < input.length; i++) {
      const tmp = input[i];
      for (let j = i - 1; j >= 0; j--) {
         if (input[i][0] < input[j][0]) {
            input[j + 1] = input[j];
         } else {
            break;
         }
         input[j] = tmp;
      }
   }
   console.log(input);
}


solution([[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]]);


