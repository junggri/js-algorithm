function count(input, capacity) {
   let cnt = 1, sum = 0;

   for (let x of input) {
      if (sum + x > capacity) {
         cnt++;
         sum = x;
      } else {
         sum += x;
      }
   }
   return cnt;
}

function solution(input) {
   let answer;
   let lt = Math.max(...input);
   let rt = input.reduce((acc, pre, i) => {
      return acc + pre;
   }, 0);

   while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      if (count(input, mid) <= 3) {
         answer = mid;
         rt = mid - 1;
      } else {
         lt = mid + 1;
      }
   }
   return answer;

}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9]);

