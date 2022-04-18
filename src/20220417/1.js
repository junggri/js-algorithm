function solution(input) {
   const answer = [];

   for (let i = 0; i < 5; i++) {
      let minValue = input[i];
      for (let j = i + 1; j < input.length; j++) {
         if (minValue > input[j]) {
            minValue = input[j];
            input[j] = input[i];
            input[i] = minValue;
         }
      }
   }
   console.log(input);
}

solution([13, 5, 11, 7, 23, 15]);

