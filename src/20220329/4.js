(function (input) {
  let answer = 0;
  let addValue = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i + 1] === undefined) {
      break
    }
    answer += input[i + 1];
    if (input[i] === input[i + 1]) {
      answer += addValue
      addValue += 1;
    } else {
      addValue = 1;
    }
  }

  return answer
})([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])
