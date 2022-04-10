function isPrime(num) {
   if (num === 1) {
      return false;
   }
   for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      console.log(num, i, num % i);
      if (!(num % i)) {
         return false;
      }
   }
   return true;
}

(function (input) {
   let answer = [];
   for (let x of input) {
      let res = 0;
      while (x) {
         //이것이 팁이다 숫자 뒤집는 방법
         let t = x % 10;
         res = res * 10 + t;
         x = Math.floor(x / 10);
      }

      if (isPrime(res)) answer.push(res);
   }
   console.log(answer);
})([32]);
