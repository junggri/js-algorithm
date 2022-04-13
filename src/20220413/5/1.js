function solution(a, b) {
   const answer = [];
   let leftPoint = 0, rightPoint = 0;

   while (leftPoint < a.length && rightPoint < b.length) {
      if (a[leftPoint] <= b[rightPoint]) answer.push(a[leftPoint++]);
      if (a[leftPoint] > b[rightPoint]) answer.push(b[rightPoint++]);
   }
   while (leftPoint < a.length) answer.push(a[leftPoint++]);
   while (rightPoint < b.length) answer.push(b[rightPoint++]);
   console.log(answer);
}

solution([1, 3, 5], [2, 3, 6, 7, 9]);

