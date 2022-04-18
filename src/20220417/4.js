function solution(input) {
   const answer = [];
   for (let i = 1; i < input.length; i++) {
      const tmp = input[i];
      let j;
      for (j = i; j > 0; j--) {
         if (input[j - 1] > tmp) {
            input[j] = input[j - 1];
         } else {
            break;
         }
      }
      input[j] = tmp;
   }
}

solution([11, 7, 5, 6, 10, 9]);


//tmp 7 i = 1 j = 1
// 11 7 5 6 10 9
// 11 11 5 6 10 9
// 7 11 5 6 10 9

// 7 11 5 6 10 9 i=2 j=2
// 7 11 11 6 10 9 i=2 j=1
// 7 7 11


