(function (input) {
  let answer;
  let compareNumber = 6;

  const biggerThanCompareNumber = input.filter(e => {
    return e >= compareNumber
  })
  answer = biggerThanCompareNumber;
  console.log(answer)
  return answer
})([7, 3, 9, 5, 6, 12])
