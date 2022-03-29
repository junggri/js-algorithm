(function solution(input) {
  let answer;
  const upperCaseLetters = Array.from(input).filter((e) => {
    return e.toUpperCase() === e
  })
  answer = upperCaseLetters.length
  return answer;
})('KoreaTimeGood')
