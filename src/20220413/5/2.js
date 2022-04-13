function solution(a, b) {
   const answer = [];
   let p1 = 0, p2 = 0;
   a.sort((a, b) => a - b);
   b.sort((a, b) => a - b);

   while (p1 < a.length && p2 < b.length) {//p1의 값과 a의 길이가 같다면 반복문은 끝난다.
      if (a[p1] === b[p2]) {
         answer.push(a[p1]);
         p1++;
         p2++;
      } else if (a[p1] < b[p2]) {
         p1++;
      } else {
         p2++;
      }
   }
   console.log(answer);
}

solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
