function solution(input) {
   let answer = 0;
   let sum = 0;
   let lp = 0;

   //개수 구하는 것이 중요하다 rp - lt + 1
   for (let rp = 0; rp < input.length; rp++) {
      sum += input[rp];
      if (sum <= 5) {
         answer += rp - lp + 1;
      }

      while (sum > 5) {
         sum -= input[lp++];
         if (sum <= 5) {
            answer += rp - lp + 1;
         }
      }
   }
}

solution([1, 3, 1, 2, 3]);
