function solution(a, b, c) {
   let answer;
   let lower;
   if (a < b) {
      lower = a;
      if (c < a) {
         lower = c;
      }
   } else if (a > b) {
      lower = b;
      if (b > c) {
         lower = c;
      }
   }

   answer = lower;

   if (a < b) answer = a;
   else answer = b;

   if (c < answer) answer = c;

   return answer;
}

console.log(solution(20, 12, 11));
