function solution(input) {
   let answer = 0;
   const moves = [1, 5, 3, 5, 1, 2, 1, 4];
   const stack = [];

   moves.forEach((pos) => {
      for (let i = 0; i < input.length; i++) {
         if (input[i][pos - 1] !== 0) {
            const tmp = input[i][pos - 1];
            input[i][pos - 1] = 0;
            if (tmp === stack[stack.length - 1]) {
               stack.pop();
               answer += 2;
            } else {
               stack.push(tmp);
            }
            break;
         }
      }
   });
   console.log(answer);
}

solution([
   [0, 0, 0, 0, 0],
   [0, 0, 1, 0, 3],
   [0, 2, 5, 0, 1],
   [4, 2, 4, 4, 2],
   [3, 5, 1, 3, 1]]
);
