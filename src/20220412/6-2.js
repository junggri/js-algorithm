function solution(input) {
   let answer = [];
   const split = Array.from(input);
   let innerCount = 0;
   let outerCount = 0;


   for (let i = 0; i < split.length; i++) {
      if (split[i] === "(") innerCount++;
      if (split[i] === ")") outerCount++;

      if (split[i] !== "(" || split[i] !== ")") {
         if (!innerCount && !outerCount) {
            answer.push(split[i]);
         }
         if (innerCount === outerCount) {
            innerCount = 0;
            outerCount = 0;
         }
      }
   }
   answer = answer.join("");
   console.log(answer);
}

const data = solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)");
