function solution(input) {
   let answer;
   const stack = [];

   for (let x of input) {
      stack.push(x);

      if (x === ")") {
         while (stack.pop() !== "(") ;
      }
   }

   answer = stack.join("");
   console.log(answer);
}

solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)");
