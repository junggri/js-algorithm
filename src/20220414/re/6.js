function solution(l, call) {
   let answer = new Array(l).fill(0).map((e, i) => i + 1);

   // while (answer.length !== 1) {
   while (answer.length !== 1) {

      for (let i = 0; i < call; i++) {
         if (i !== call - 1) {
            const a = answer.shift();
            answer.push(a);
         } else {
            answer.shift();
         }
      }

      // if (i !== call - 1) {
      //    const a = answer.shift();
      //    console.log(a);
      //    answer.push(a);
      // }
      // answer.shift();
   }
   // }
   console.log(answer);
}

solution(8, 3);
