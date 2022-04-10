//not solved
(function (input) {
   let answer = 0;
   let m = 28;
   let n = input.length;
   input.sort((a, b) => a[0] - b[0]);

   for (let i = 0; i < n; i++) {
      let money = m - (Math.floor(input[i][0] / 2) + input[i][1]);
      let cnt = 1;
      for (let j = 0; j < n; j++) {

         if (i !== j && (input[j][0] + input[j][1]) <= money) {
            money -= (input[j][0] + input[j][1]);
            cnt++;
         } else {
            break;
            //언제 브레이크 해줄지?? 이걸 생각해보자
         }
      }
      answer = Math.max(answer, cnt);
   }
   console.log(answer);

})([
   [6, 6],
   [2, 2],
   [4, 3],
   [4, 5],
   [10, 3]
]);
