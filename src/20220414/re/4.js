function solution(input) {
   let answer = 0;
   const stack = [];

   for (let x of input) {
      if (!isNaN(x)) {
         stack.push(x);
      } else {
         const a = Number(stack.pop());
         const b = Number(stack.pop());
         console.log(a, b);
         if (x === "*") stack.push(b * a);
         if (x === "/") stack.push(b / a);
         if (x === "+") stack.push(b + a);
         if (x === "-") stack.push(b - a);
      }
   }
   answer = stack[0];
}

solution("352+*9-");
