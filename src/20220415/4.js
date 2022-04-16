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
            console.log(input);
         } else {
            break;
         }
      }
      input[j + 1] = tmp;
   }
}

solution([3, 2, 1,]);

// 3 2 1 i=0 j =-1
// 3 2 1 i= 1 j=0; tmp 2 va 3  => 2 2 1 => 2 3 1
// 2 3 1 i = 2 j =1 tmp 1 va 3 =>  2 3 3 =>
// 2 3 3  i=2 j-0 tmp 1 va 2
