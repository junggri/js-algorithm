//왼쪽과 오른쪽으로 가면서 비교해준다
(function (input) {
   let answer = [];
   let word = "e";
   let p = 1000;

   for (let i = 0; i < input.length; i++) {
      if (input[i] === word) {
         p = 0;
         answer.push(p);
      } else {
         p++;
         answer.push(p);
      }

   }
   p = 1000;
   for (let i = input.length - 1; i >= 0; i--) {
      if (input[i] === word) {
         p = 0;
         answer[i] = 0;
      } else {
         p++;
         answer[i] = Math.min(answer[i], p);
      }

   }
   console.log(answer);
   //
   // let word = "e";
   //
   // let wordIndexArray = [];
   // for (let i = 0; i < input.length; i++) {
   //    if (input[i] === word) {
   //       wordIndexArray.push(i);
   //    }
   // }
   //
   //
   // for (let i = 0; i < input.length; i++) {
   //    let minDistance = Number.MAX_SAFE_INTEGER;
   //    for (let j = 0; j < wordIndexArray.length; j++) {
   //       let distance = Math.abs(i - wordIndexArray[j]);
   //       if (distance < minDistance) {
   //          minDistance = distance;
   //       }
   //    }
   //    answer.push(minDistance);
   // }
   // console.log(answer);
})("teachermode");
