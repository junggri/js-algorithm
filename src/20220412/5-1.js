//sort=>nLog(n)
//여기서는 포인터를 사용한다 o(n)
(function (a, b) {
   let answer = [];
   // answer = [...a, ...b];
   // answer.sort((a, b) => a - b);
   // console.log(answer);
   let n = a.length;
   let m = b.length;

   let p1 = 0, p2 = 0;

   while (p1 < n && p2 < m) {
      if (a[p1] <= b[p2]) {
         answer.push(a[p1]);
         p1++;
      } else {
         answer.push(b[p2]);
         p2++;
      }
   }

   while (p1 < n) {
      answer.push(a[p1++]);
   }
   while (p2 < m) {
      answer.push(b[p2++]);
   }

   console.log(answer);
})([1, 3, 5], [2, 3, 6, 7, 9]);
