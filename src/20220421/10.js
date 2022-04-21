function solution(input) {
   let answer = 0;

   input.sort((a, b) => a - b);

   let lp = 0;
   let rp = input.length;

   while (lp < rp) {
      let cursor = Math.floor((rp - lp) / 2);
      console.log(input[cursor]);
      answer++;
      if (input[cursor] > 32) rp = cursor;
      if (input[cursor] < 32) lp = cursor;
      if (input[cursor] === 32) {
         break;
      }

   }
   console.log(answer);
}

solution([23, 87, 65, 12, 57, 31, 32, 99, 81]);


//12 23 31 32 57 65 81 87 99
