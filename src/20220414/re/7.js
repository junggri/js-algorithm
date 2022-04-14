function solution(course, word) {
   let answer = "YES";
   const stack = Array.from(course);

   for (let x of word) {
      if (stack.includes(x)) {
         console.log(x, stack);
         stack.shift();
         console.log(stack);
      }
   }
   console.log(stack);
}

solution("CBA", "CADBGE");
