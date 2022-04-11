function isPrime(num) {
   if (num === 1) {
      return false;
   }

   for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}

(function (input) {
   let answer = [];


   for (let x of input) {
      let reverse = 0;

      while (x) {
         let addNumber = x % 10;
         reverse = reverse * 10 + addNumber;
         x = Math.floor(x / 10);

      }

      if (isPrime(reverse)) {
         answer.push(reverse);
      }
   }

   console.log(answer);

})([32, 55, 62, 20, 250, 370, 200, 30, 100]);
