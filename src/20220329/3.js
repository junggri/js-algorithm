(function (a, b) {
   let answer;
   const winnerArray = [];
   //1가위
   //2바위
   //3보;
   //1 > 3 , 2 > 1 , 3 > 2
   for (let i = 0; i < 5; i++) {
//중요한 건 한명을 기준으로 삼았다.
      if (a[i] === b[i]) {
         winnerArray.push("D");
      } else if (a[i] === 1 && b[i] === 3 || a[i] === 2 && b[i] === 1 || a[i] === 3 && b[i] === 2) {
         winnerArray.push("A");
      } else {
         winnerArray.push("B");
      }


      // switch (mySign) {
      //    case 1:
      //       if (otherSign === 1) {//가위
      //          winnerArray.push("D");
      //       } else if (otherSign === 2) {
      //          winnerArray.push("B");
      //       } else {
      //          winnerArray.push("A");
      //       }
      //       continue;
      //    case 2:
      //       if (otherSign === 2) {
      //          winnerArray.push("D");
      //       } else if (otherSign === 1) {
      //          winnerArray.push("A");
      //       } else {
      //          winnerArray.push("B");
      //       }
      //       continue;
      //    case 3:
      //       if (otherSign === 3) {
      //          winnerArray.push("D");
      //       } else if (otherSign === 1) {
      //          winnerArray.push("B");
      //       } else {
      //          winnerArray.push("A");
      //       }
      // }
   }
   answer = winnerArray;
   console.log(answer);
   return answer;
})([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
