(function (input) {
   let answer = "";
   const hashMap = {};

   for (let i = 0; i < input.length; i++) {
      if (!hashMap[input[i]]) {
         hashMap[input[i]] = 0;
      }
      hashMap[input[i]]++;
   }

   for (let data in hashMap) {
      if (hashMap[data] === 1) {
         answer += data;
      } else {
         answer += data + hashMap[data];
      }
   }

})("KKHSSSSSSSE");
