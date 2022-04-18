function solution(input) {
   const answer = [];
   for (let i = 0; i < input.length - 1; i++) {
      for (let j = i; j < input.length - 1; j++) {
         console.log(input[j], input[j + 1]);
         if (input[j] > input[j + 1]) {
            [input[j], input[j + 1]] = [input[j + 1], input[j]];
         }
      }
   }
}

solution([13, 5, 11, 7, 23, 15]);

