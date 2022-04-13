//슬라디이
function solution(arr) {
   let answer = 0;
   let sum = 0;
   let k = 3;

   for (let i = 0; i < k; i++) {
      sum += arr[i];
   }

   for (let i = k; i < arr.length; i++) {
      sum += (arr[i] - arr[i - k]);
      answer = Math.max(answer, sum);
   }
   console.log(answer);
}


solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);
