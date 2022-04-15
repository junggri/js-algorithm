function solution(input) {
   const answer = [];

   // for (let i = 1; i < input.length; i++) {
   //    let targetIndex = i;
   //    for (let j = i; j >= 0; j--) {
   //
   //       if (input[targetIndex] < input[j]) {
   //          const tmp = input[targetIndex];
   //          input[targetIndex] = input[j];
   //          input[j] = tmp;
   //          targetIndex = j;
   //          ;
   //       }
   //    }
   // }
   // console.log(input);
   for (let i = 0; i < input.length; i++) {
      const tmp = input[i];
      let j;
      for (j = i - 1; i >= 0; j--) {
         if (input[j] > tmp) {
            input[j + 1] = input[j];
         } else {
            break;
         }
      }
      input[j + 1] = tmp;
   }
   console.log(input);
}

solution([11, 7, 5, 6, 10, 9]);
