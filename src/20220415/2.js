function solution(input) {
   let answer = [];

   // for (let i = input.length - 1; i > 0; i--) {
   //    let targetIndex = i;
   //    for (let j = i - 1; j >= 0; j--) {
   //       if (input[targetIndex] < input[j]) {
   //          const tmp = input[j];
   //          const tmp2 = input[targetIndex];
   //          input[j] = tmp2;
   //          input[targetIndex] = tmp;
   //          targetIndex = j;
   //       }
   //    }
   // }
   // console.log(input);
   for (let i = 0; i < input.length - 1; i++) {
      for (let j = 0; j < input.length - i - 1; j++) {
         if (input[j] > input[j + 1]) {
            [input[j], input[j + 1]] = [input[j + 1], input[j]];
         }
      }
   }
   console.log(input);
}

solution([13, 5, 11, 7, 23, 15]);

