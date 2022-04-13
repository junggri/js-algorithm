function solution(arr) {
   let answer = 0;
   let sum = 0;
   let l = 0;
   for (let r = 0; r < arr.length; r++) {
      sum += arr[r];
      if (sum === 6) answer++;

      while (sum > 6) {
         sum -= arr[l++];
         if (sum === 6) answer++;
      }
   }
   console.log(answer);
}

solution([1, 2, 1, 3, 1, 1, 1, 2, 3, 2]);
