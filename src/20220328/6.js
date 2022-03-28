(function solution(arr) {
   let answer = 0;
   const odd = arr.filter(e => e % 2 === 1);
   const sum = odd.reduce((pre, a, c) => {
      return pre + a;
   }, 0);

   // let minValue = Number.MAX_SAFE_INTEGER;
   //
   // for (let i = 0; i < odd.length; i++) {
   //    if (odd[i] < minValue) {
   //       minValue = odd[i];
   //    }
   // }
   console.log(sum);
   console.log(Math.min(...odd));

   return answer;
})([12, 77, 38, 41, 53, 92, 85]);
