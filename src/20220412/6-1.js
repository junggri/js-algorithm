//카운트가 같아야한다

(function (input) {
   let answer = "YES";
   const spilt = Array.from(input);
   let innerCount = 0;
   let outerCount = 0;

   if (spilt[0] === ")" || spilt.length % 2 === 1) {
      answer = "NO";
      console.log(answer);
      return;
   }

   for (let i = 0; i < spilt.length; i++) {
      if (spilt[i] === "(") {
         innerCount++;
      } else {
         outerCount++;
      }
   }
   if (innerCount === outerCount) {
      answer = "YES";
   } else {
      answer = "NO";
   }
   return answer;
})("(())()))");
