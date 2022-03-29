(function (input) {
  let answer;
  const letterMap = Array.from(input).map(e => {
    return e.toUpperCase()
  })

  answer = letterMap.join("")
  return answer
})('ItisTimeToStudy')
