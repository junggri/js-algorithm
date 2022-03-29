(function (input) {
   let answer, isOdd;
   input.length % 2 === 0 ? isOdd = false : isOdd = true;
   const centerIndex = Math.floor(input.length / 2);

   if (isOdd) {

      answer = input[centerIndex];

   } else {
      answer = input[centerIndex - 1] + input[centerIndex];
   }
   console.log(answer);
   return answer;
})("good");
