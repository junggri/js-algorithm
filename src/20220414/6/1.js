function solution(input) {
   let answer = "YES";
   const stack = [];

   for (let x of input) {
      if (!stack.length && x === ")") {
         answer = "NO";
         break;
      }
      if (stack[stack.length - 1] === "(" && x === ")") {
         stack.pop();
      } else {
         stack.push(x);
      }
   }
   if (stack.length) {
      answer = "NO";
   }
   console.log(answer);
}

solution("())");
