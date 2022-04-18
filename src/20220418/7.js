function solution(input) {

   for (let i = 0; i < input.length; i++) {
      const tmp = input[i];
      let j;
      for (j = i; j > 0; j--) {
         if (input[j][0] < input[j - 1][0]) {
            input[j] = input[j - 1];
            input[j - 1] = tmp;

            if (input[j][0] === input[j - 1][0] && input[j][1] < tmp[1]) {
               [input[j], input[j - 1]] = [input[j - 1], input[j]];
            }
         } else {
            break;
         }
      }

   }

   console.log(input);

   for (let i = 0; i < input.length; i++) {
      const tmp = input[i];

   }


}

solution([[2, 7], [1, 3], [1, 2], [1, 1], [3, 6]]);

// 27 13 12 11 36 => 13 27 12 11 36 i 1 j 0
// 13 27 12 11 36 =>

