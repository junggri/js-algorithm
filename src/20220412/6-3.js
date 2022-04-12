function solution(input) {
   let answer = 0;
   const move = [1, 5, 3, 5, 1, 2, 1, 4];

   const arrangeArray = [];
   for (let i = 0; i < input.length; i++) {
      const arrange = [];
      for (let j = 0; j < input.length; j++) {
         if (input[input.length - 1 - j][i]) {
            arrange.push(input[input.length - 1 - j][i]);
         }
      }
      arrangeArray.push(arrange);
   }

   const stack = [];

   for (let i = 0; i < move.length; i++) {
      const target = arrangeArray[move[i] - 1];
      if (!target.length) {
         continue;
      }

      if (stack[stack.length - 1] === target[target.length - 1]) {
         stack.splice(stack.length - 1, 1);
         answer += 2;
      } else {
         stack.push(target[target.length - 1]);
      }
      target.splice(target.length - 1, 1);
   }

   console.log(answer);

}

const data = solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]);
