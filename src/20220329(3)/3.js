(function (input) {
   let answer;
   const reg = new RegExp(/[^a-zA-Z]/, "gi");
   const letter = input.replace(reg, "");
   console.log(letter);

   return answer;
})("g0en2T0s8eSoft");
