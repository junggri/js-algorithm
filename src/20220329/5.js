(function (input) {
   let answer;

   // const gradeArray = []
   // let index = 0;
   //
   // function calculateGrade(scoreArray) {
   //   let grade = 0;
   //   const value = input[index];
   //
   //   for (let i = 0; i < scoreArray.length; i++) {
   //     if (input[i] >= value) {
   //       grade += 1
   //     }
   //   }
   //   gradeArray.push(grade);
   //   index += 1;
   //
   //   if (index < input.length) {
   //     calculateGrade(input)
   //   }
   // }
   //
   // calculateGrade(input)
   // answer = gradeArray

   let gradeArray = new Array(5).fill(1);

   for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < gradeArray.length; j++) {
         if (input[i] < input[j]) {
            gradeArray[i] += 1;
         }
      }
   }
   console.log(gradeArray);

   //재귀함수와 2중반복문의 차이점을 알아야한다.
   return answer;
})([92, 92, 92, 100, 76]);
