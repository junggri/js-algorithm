(function (input) {
  let answer, maxLengthWord;
  let maxLength = Number.MIN_SAFE_INTEGER;

  input.forEach((e) => {
    if (e.length > maxLength) {
      maxLength = e.length
      maxLengthWord = e
    }
  })
  console.log(maxLengthWord)

  return answer
})(["teacher", "time", "studenddddddt", "beautiful", "good"])
