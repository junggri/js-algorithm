function addEachNumber(number) {
   const value = Array.from(String(number)).reduce((pre, acc, i) => {
      return Number(pre) + Number(acc);
   }, 0);

   return {value, number};
}

(function (input) {
   let answer;
   let bigNumber;
   let maxValue = Number.MIN_SAFE_INTEGER;


})([128, 460, 603, 40, 521, 137, 123]);
