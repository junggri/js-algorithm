//not solved
function solution(input) {
   const answer = [];
   for (let i = 1; i < input.length - 1; i++) {

      if (input[i] >= input[i + 1] && input[i] > input[i - 1] && input[i + 1] >= input[i - 1]) {
         console.log(i);
      }
      if (input[i] <= input[i + 1] && input[i] < input[i - 1] && input[i + 1] >= input[i - 1]) {
         console.log(i);
      }
   }
   console.log(answer);
}

solution([120, 125, 152, 130, 135, 135, 143, 127, 160]);
// 120 125 127 130 135 152 135 135 160
//
