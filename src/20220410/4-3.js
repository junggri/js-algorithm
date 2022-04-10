//브루트포스//모든 경우의 수를 확인한다
//
(function (input) {
   let answer = 0;
   let m = input.length;
   let n = input[0].length;
   for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
         let cnt = 0;
         for (let k = 0; k < m; k++) {
            let pi = 0, pj = 0;
            for (let s = 0; s < n; s++) {
               if (input[k][s] === i) {
                  pi = s;
               }
               if (input[k][s] === j) {
                  pj = s;
               }
               if (pi < pj) {
                  cnt++;
               }
            }
            if (cnt === m) {//3번의 시힘동안 다 같아야한다
               answer++;
            }
         }

      }
   }
   console.log(answer);
})([
   [3, 4, 1, 2],
   [4, 3, 2, 1],
   [3, 1, 4, 2]
]);
