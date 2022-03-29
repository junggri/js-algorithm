// O(n)
(function (input) {
  let answer;
  let notDuplicatedArray = [];


  for (let i = 0; i < input.length; i++) {
    const checkWord = input[i]
    if (!notDuplicatedArray.includes(checkWord)) {
      notDuplicatedArray.push(checkWord)
    }
  }


  return answer
})(['good', 'time', 'good', 'time', 'student'])
