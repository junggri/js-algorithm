(function (a, b) {
   let answer = [];
   for (let x of a) {
      if (b.indexOf(x) !== -1) {
         answer.push(x);
      }
   }
   answer.sort((a, b) => a - b);
   console.log(answer);
})([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
