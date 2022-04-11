//모든 경우의 수를 구하여햐한다
(function (input) {
   let answer = 0;
   let test = [];
   let m = input.length;
   let n = input[0].length;
   for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 4; j++) {
//모든 경우의 수 만큼 반복문을 돌린다
         let cnt = 0;
         for (let k = 0; k < m; k++) {
            let pi = 0, pj = 0;

            for (let s = 0; s < n; s++) {
               if (input[k][s] === i) pi = s;
               if (input[k][s] === j) pj = s;

            }
            if (pi < pj) cnt++;

         }
         if (cnt === 3) {
            answer++;
         }

      }
   }
   console.log(answer, test);
})(
   [
      [3, 4, 1, 2],
      [4, 3, 2, 1],
      [3, 1, 4, 2]
   ]
);
//(3,1)
