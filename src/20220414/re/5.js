function solution(input) {
   let answer = 0;
   const stack = [];

   for (let i = 0; i < input.length; i++) {
      if (input[i] === "(") stack.push(input[i]);
      else {
         stack.pop();
         if (input[i - 1] === "(") {
            answer += stack.length;
         } else {
            answer++;
         }
      }
   }
   console.log(answer);
}

solution("(((()(()()))(())()))(()())");
