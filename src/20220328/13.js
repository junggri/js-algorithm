(function (input) {
  let answer;
  const convertMap = Array.from(input).map(e => {
    if (e.toUpperCase() === e) {
      return e.toLowerCase()
    }
    return e.toUpperCase()
  })
  answer = convertMap.join("")
  console.log(answer)
  return answer
})("StuDY")
