function solution(input) {
   let answer = 0;
   let minValue = Number.MIN_SAFE_INTEGER;

   input.sort((a, b) => a[0] - b[0]);

   for (let i = 0; i < input.length - 1; i++) {
      let target = input[i];
      let can = 1;
      for (let j = i + 1; j < input.length; j++) {
         if (target[1] <= input[j][0]) {
            target = input[j];
            can++;
         }
      }
      if (minValue < can) {
         answer = can;
         minValue = can;
      }

   }
   console.log(answer);
}

solution([
   [1, 4],
   [2, 3],
   [3, 5],
   [4, 6],
   [5, 7]
]);
