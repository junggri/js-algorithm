function solution(input) {
   let answer = [];
   const stack = [];
   //
   // for (let x of input) {
   //    if (x === "(") {
   //       stack.push(x);
   //    } else if (x === ")" && stack.length !== 0) {
   //       stack.pop();
   //       continue;
   //    }
   //
   //    console.log(stack, x);
   //    if (!stack.length) {
   //       answer.push(x);
   //    }
   // }
   // console.log(answer);

   //내 방법보다 훨신 깔끔하다
   for (let x of input) {
      if (x === ")") {
         while (stack.pop() !== "(") {
         }
         console.log(stack);
      } else {
         stack.push(x);
      }
   }
}

solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)");
