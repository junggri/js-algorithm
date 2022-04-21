function solution(input) {

   const answer = [];
   input.sort((a, b) => {
      if (a[0] === b[0]) {
         return a[1] - b[1];
      }
      return a[0] - b[0];
   });
   console.log(input);
}

solution([[2, 7], [1, 3], [1, 2], [1, 1], [3, 6]]);
