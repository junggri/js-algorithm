(function (input) {
   let answer = [];
   let k = 3;
   let n = input.length;

   for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
         for (let s = j + 1; s < n; s++) {
            const sum = input[i] + input[j] + input[s];
            answer.push(sum);
         }
      }
   }

   const set = Array.from(new Set(answer)).sort((a, b) => b - a);
   answer = set[k - 1];
   console.log(answer);

})([13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
