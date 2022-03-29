(function (input) {
   let answer;
   let isVisible = 0;

   for (let i = 0; i < input.length - 1; i++) {

      if (input[i] < input[i + 1]) {
         isVisible++;
      }
   }
   answer = isVisible;
   return answer;
})([130, 135, 148, 140, 145, 150, 150, 153]);
