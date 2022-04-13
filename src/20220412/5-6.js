(function (input) {
   let answer = 0;
   // let maxValue = Number.MIN_SAFE_INTEGER;
   // for (let x of input) {
   //    if (!answer[x]) {
   //       answer[x] = 0;
   //    }
   //    answer[x]++;
   // }
   //
   // Object.entries(answer).forEach((e) => {
   //
   //    if (e[1] > maxValue) {
   //       maxValue = e[1];
   //       answer = e[0];
   //    }
   //
   // });
   // console.log((answer));

   //풀이 Map을 사용

   const sh = new Map();
   for (let x of input) {
      if (!sh.has(x)) {
         sh.set(x, 0);
      }
      sh.set(x, sh.get(x) + 1);
   }

   for (let value of sh) {

      answer = Math.max(value[1], answer);
   }
   console.log(answer);

})(["B", "A", "C", "B", "A", "C", "C", "A", "C", "C", "B", "D", "E", "D", "E"]);
