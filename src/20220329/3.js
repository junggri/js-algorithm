(function (input) {
  let answer;
  const gameCount = input[0].length
  const winnerArray = []
  //1가위
  //2바위
  //3보;
  //1 > 3 , 2 > 1 , 3 > 2
  for (let i = 0; i < gameCount; i++) {
    const mySign = input[0][i];
    const otherSign = input[1][i];

    switch (mySign) {
      case 1:
        if (otherSign === 1) {//가위
          winnerArray.push("D")
        } else if (otherSign === 2) {
          winnerArray.push("B")
        } else {
          winnerArray.push("A")
        }
        continue
      case 2:
        if (otherSign === 2) {
          winnerArray.push("D")
        } else if (otherSign === 1) {
          winnerArray.push("A")
        } else {
          winnerArray.push("B")
        }
        continue
      case 3:
        if (otherSign === 3) {
          winnerArray.push("D")
        } else if (otherSign === 1) {
          winnerArray.push("B")
        } else {
          winnerArray.push("A")
        }
        continue
    }
  }
  answer = winnerArray
  return answer
})([
  [2, 3, 3, 1, 3],
  [1, 1, 2, 2, 3]
])
