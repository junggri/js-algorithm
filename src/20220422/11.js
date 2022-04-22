//not solved
function solution(input) {
   const answer = [];
   let sum = 0;
   for (let i = input.length - 1; i >= 0; i--) {
      sum += input[i];

      let record = 0;
      let count = 0;

      for (let j = input.length - 1; j >= 0; j--) {
         if (record + input[j] > sum) {
            record = 0;
            count++;
         }
         record += input[j];
         if (count >= 3) {
            break;
         }
      }
      console.log(123123, sum);


   }
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9]);
