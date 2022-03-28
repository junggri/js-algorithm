(function solution(arr) {
   let answer = 0;
   let minValue = Number.MAX_SAFE_INTEGER;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minValue) {
         minValue = arr[i];
      }
   }
   answer = minValue;

   return answer;
})([5, 7, 10, 3, 2, 9, 11]);
