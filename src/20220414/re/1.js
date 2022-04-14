//스택에 쌓아나가야 한다.
function solution(input) {
   let answer = "YES";
   const stack = [];

   for (let x of input) {
      if (x === "(") stack.push(x);
      else {
         if (stack.length === 0) return "NO";
         stack.pop();
      }
   }
   if (stack.length) answer = "NO";
   console.log(answer, stack);
}

solution("(()(()))(()");
