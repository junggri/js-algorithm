(function solution(arr) {
   let answer = 0;
   const carNumber = 0;
   const filteredNumber = arr.filter((e) => {
      const date = e % 10;
      return date === carNumber;
   });
   console.log(filteredNumber.length);
   return answer;
})([12, 20, 54, 30, 87, 91, 30]);
