function solution(input) {
   let answer = 0;
   // let minValue = Number.MIN_SAFE_INTEGER;
   //
   // input.sort((a, b) => a[0] - b[0]);
   //
   // for (let i = 0; i < input.length - 1; i++) {
   //    let target = input[i];
   //    let can = 1;
   //    for (let j = i + 1; j < input.length; j++) {
   //       if (target[1] <= input[j][0]) {
   //          target = input[j];
   //          can++;
   //       }
   //    }
   //    if (minValue < can) {
   //       answer = can;
   //       minValue = can;
   //    }
   //
   // }
   // console.log(answer);
   input.sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return a[1] - b[1];
      // return a[1] - b[1];
   });

   let et = 0;
   for (let x of input) {
      if (x[0] >= et) {
         answer++;
         et = x[1];
      }

   }
   console.log(answer);
}

solution([
   [3, 3],
   [2, 3],
   [1, 3],
]);
