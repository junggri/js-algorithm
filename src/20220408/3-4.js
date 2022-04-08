(function (input) {
   let answer = [];
   let word = "e";

   let wordIndexArray = [];
   for (let i = 0; i < input.length; i++) {
      if (input[i] === word) {
         wordIndexArray.push(i);
      }
   }


   for (let i = 0; i < input.length; i++) {
      let minDistance = Number.MAX_SAFE_INTEGER;
      for (let j = 0; j < wordIndexArray.length; j++) {
         let distance = Math.abs(i - wordIndexArray[j]);
         if (distance < minDistance) {
            minDistance = distance;
         }
      }
      answer.push(minDistance);
   }
   console.log(answer);
})("teachermode");
