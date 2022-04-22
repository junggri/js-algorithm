function solution(input) {
   let answer = 0;

   input.sort((a, b) => a - b);

   // let lp = 0;
   // let rp = input.length - 1;
   //
   // while (lp < rp) {
   //    let cursor = Math.floor((rp + lp) / 2);
   //
   //
   //    if (input[cursor] > 32) {
   //       rp = cursor - 1;
   //    }
   //    if (input[cursor] < 32) {
   //       lp = cursor + 1;
   //    }
   //
   //    if (input[cursor] === 32) {
   //       break;
   //    }
   // }
   //
   // console.log(answer);
   let lt = 0;
   let rt = input.length - 1;

   while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);

      if (input[mid] === 32) {
         answer = mid + 1;
         break;
      } else if (input[mid] > 32) {
         rt = mid - 1;
      } else {
         lt = mid + 1;
      }
   }

   console.log(answer);
}

solution([23, 87, 65, 12, 57, 32, 99, 81]);


//12 23 32 57 65 81 87 99 lp 0(12) rp 7(99)
//12 23 32 57 65 81 87 99 lp 0(12) rp 4(57)
//12 23 32 57 65 81 87 99 lp 2(31) rp 4(57)
//12 23 32 57 65 81 87 99 lp 2(31) rp 4(57)
