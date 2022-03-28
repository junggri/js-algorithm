function solution(number) {
   let answer = 0;
   let i = number;
   while (i > 0) {
      answer += i;
      i--;
   }
   console.log(answer);
   return answer;
}

solution(10);
