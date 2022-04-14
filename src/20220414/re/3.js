function solution(input) {
   let answer = 0;
   const moves = [1, 5, 3, 5, 1, 2, 1, 4];
   const stack = [];

   for (let i = 0; i < moves.length; i++) {
      for (let j = 0; j < input.length; j++) {
         if (input[j][moves[i] - 1]) {
            if (stack[stack.length - 1] === input[j][moves[i] - 1]) {
               stack.pop();
               answer += 2;
            } else {
               stack.push(input[j][moves[i] - 1]);
               input[j][moves[i] - 1] = 0;
            }
            break;
            // if (stack[stack.length - 1] === input[j][moves[i] - 1]) {
            //    stack.pop();
            //    console.log(stack);
            //    answer += 2;
            //    break;
            // } else {
            //    // stack.push(input[j][moves[i] - 1]);
            //    // break;
            // }
         }
      }
   }
   console.log(answer);
}

solution([
   [0, 0, 0, 0, 0],
   [0, 0, 1, 0, 3],
   [0, 2, 5, 0, 1],
   [4, 2, 4, 4, 2],
   [3, 5, 1, 3, 1]
]);
