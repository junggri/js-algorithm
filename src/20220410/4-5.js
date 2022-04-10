//not solved
//set을 이용한다
(function (input) {
   let answer;
   let n = input.length;
   let m = 3;

   let tmp = new Set();

   for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
         for (let k = j + 1; k < n; k++) {
            tmp.add(input[i] + input[k] + input[j]);
         }
      }
   }
   let a = Array.from(tmp).sort((a, b) => b - a);
   console.log(a);
   answer = a[k - 1];

})([13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
