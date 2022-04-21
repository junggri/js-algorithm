function solution(input) {

   let answer = 0;
   let minValue = Number.MIN_SAFE_INTEGER;
   input.sort((a, b) => a[0] - b[0]);

   for (let i = 0; i < input.length; i++) {
      let can = 1;
      for (let j = 0; j < input.length; j++) {
         if (j < i) {
            if (input[i][0] >= input[j][0] && input[i][0] < input[j][1]) {
               can++;
            }
         } else if (j < i) {
            if (input[i][1] >= input[j][0] && input[i][1] < input[j][1]) {
               can++;
            }
         }
      }
      if (minValue < can) {
         answer = can;
         minValue = can;
      }
   }
   console.log(answer);

}

solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]);

