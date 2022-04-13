//투포인터
(function (a, b) {
   let answer = [];
   // for (let x of a) {
   //    if (b.indexOf(x) !== -1) {
   //       answer.push(x);
   //    }
   // }
   // answer.sort((a, b) => a - b);
   // console.log(answer);
   let n = a.length;
   let m = b.length;

   a.sort((a, b) => a - b);
   b.sort((a, b) => a - b);

   let p1 = 0, p2 = 0;

   while (p1 < n && p2 < m) {
      if (a[p1] === b[p2]) {
         answer.push(a[p1]);
         p1++;
         p2++;
      } else {
         if (a[p1] < b[p2]) p1++;
         if (a[p1] > b[p2]) p2++;
      }
   }
   console.log(answer);
})([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
