function solution(input) {
   const answer = [];

   // for (let i = 0; i < input.length; i++) {
   //    for (let j = i + 1; j < input.length; j++) {
   //       let minValue;
   //       if (i === 0) {
   //          minValue = Math.min(...input);
   //       } else {
   //          minValue = Math.min(...input.slice(j - 1, input.length));
   //          console.log(input.slice(j - 1, input.length), minValue);
   //       }
   //       const minIndex = input.indexOf(minValue);
   //       let firstValue = input[i];
   //       input[i] = minValue;
   //       input[minIndex] = firstValue;
   //       break;
   //    }
   // }
   // console.log(input);
   for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
         let idx = i;
         if (input[i] > input[j]) {
            // const tmp = input[j];
            // input[j] = input[idx];
            // input[i] = tmp;
            [input[j], input[idx]] = [input[idx], input[j]];//이게 중요하네
            idx = j;
            break;
         }
      }
   }

   console.log(input);
}

solution([13, 5, 11, 7, 23, 15]);
