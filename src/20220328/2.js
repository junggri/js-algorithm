function solution(a, b, c) {
   let answer = "YES", max;
   let longest, middle, short;
   let sum = a + b + c;
   //ㅇㅏ 나는 모든 변수에 할당되는 값을 구하려고 했지만,
   //그러지 않고 모두 더해서 뺴주면 나머지 두값을 구할 수가 있구
   if (a > b) longest = a;
   else longest = b;
   if (c > longest) longest = c;


   // if (a > b) {
   //    longest = a;
   //    if (b < c) {
   //       short = b;
   //       middle = c;
   //    }
   // } else {
   //    longest = b;
   //    if (a > c) {
   //       middle = a;
   //       short = c;
   //    }
   // }

   middle + short > longest ? answer = "YES" : answer = "NO";
   return answer;
}

// console.log(solution(6, 7, 11));


