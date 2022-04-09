function revert(number) {
   const numberToString = Array.from(String(number)).reverse().join("");
   return Number(numberToString);
}


(function (input) {
   let answer = [];
   for (let i = 0; i < input.length; i++) {
      const number = revert(input[i]);
      let divideNumber = 2;
      let flag = true;

      if (number === 1) {
         continue;
      }

      if (number === 2 || number === 3) {
         answer.push(number);
         continue;
      }

      for (let i = divideNumber; i < number; i++) {
         if (number % divideNumber === 0) {
            flag = false;
            break;
         }
         divideNumber++;
      }

      if (!flag) {
         continue;
      }
      answer.push(number);
   }
   console.log(answer);
})([32, 55, 62, 20, 250, 370, 200, 30, 100]);
