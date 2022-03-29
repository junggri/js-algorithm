(function (input) {
   let answer;
   let maxValue = Number.MIN_SAFE_INTEGER;

//다시 풀어보기 Math.max()이거 사용해서
   function sumVertical() {
      for (let i = 0; i < 5; i++) {
         let sumValue = 0;
         for (let j = 0; j < 5; j++) {
            sumValue += input[j][i];
         }
         if (sumValue > maxValue) {
            maxValue = sumValue;
         }
      }
   }


   function sumHorizontal() {
      for (let i = 0; i < 5; i++) {
         let sumValue = 0;
         for (let j = 0; j < 5; j++) {
            sumValue += input[i][j];
         }
         if (sumValue > maxValue) {
            maxValue = sumValue;
         }
      }
   }

   function sumDiagonal() {
      let sumValue = 0;
      for (let i = 0; i < 5; i++) {
         sumValue += input[i][i];
      }

      if (sumValue > maxValue) {
         maxValue = sumValue;
      }

      for (let i = 0; i < 5; i++) {
         sumValue += input[i][5 - i];
      }

      if (sumValue > maxValue) {
         maxValue = sumValue;
      }
   }


   sumHorizontal();
   sumVertical();
   sumDiagonal();

   answer = maxValue;
   return answer;
})([
   [10, 13, 10, 12, 15],
   [12, 39, 30, 23, 11],
   [11, 25, 50, 53, 15],
   [19, 27, 29, 37, 27],
   [19, 13, 30, 13, 19,]
]);
