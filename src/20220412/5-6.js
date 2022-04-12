(function (input) {
   let answer = {};
   let maxValue = Number.MIN_SAFE_INTEGER;
   for (let x of input) {
      if (!answer[x]) {
         answer[x] = 0;
      }
      answer[x]++;
   }

   Object.entries(answer).forEach((e) => {

      if (e[1] > maxValue) {
         maxValue = e[1];
         answer = e[0];
      }

   });
   console.log((answer));
})(["B", "A", "C", "B", "A", "C", "C", "A", "C", "C", "B", "D", "E", "D", "E"]);
