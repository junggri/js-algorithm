function solution(input) {
   const answer = [];

   for (let i = 0; i < input.length - 1; i++) {
      for (let j = 0; j < input.length - 1; j++) {
         if (input[j] && input[j + 1] < 0) {
            [input[j], input[j + 1]] = [input[j + 1], input[j]];
         }
      }
   }
   console.log(input);
}

solution([1, 2, 3, -3, -2, 5, 6, -6]);


// i 0 j 0-6
// 1 2 3 -3 -2 5 6 -6 => 1 2 -3 -2 3 5 -6 6
//i 1 j =0-6
// 

