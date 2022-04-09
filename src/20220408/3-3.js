//강의 다시 보는 거 추천
(function (input) {
   let answer = 0;
   const reg = new RegExp(/[a-zA-Z]/, "gi");
   const letter = input.replace(reg, "");
   const split = letter.split("");

   for (let i = 0; i < split.length; i++) {
      const mulValue = 1 + new Array(split.length - i - 1).fill(0).join("");
      answer += Number(mulValue) * split[i];
   }
   console.log(answer);

})("g0en2T0s8eSoft");
