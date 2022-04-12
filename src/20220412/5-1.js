(function (a, b) {
   let answer = [];
   answer = [...a, ...b];
   answer.sort((a, b) => a - b);
   console.log(answer);

})([1, 3, 5], [2, 3, 6, 7, 9]);
