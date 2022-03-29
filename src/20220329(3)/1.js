(function (input) {
  let answer = "YES";

  const stringArray = Array.from(input)
  const checkLength = Math.floor(stringArray.length / 2);
  for (let i = 0; i < checkLength; i++) {

    if (stringArray[i].toLowerCase() !== stringArray[stringArray.length - i - 1].toLowerCase()) {
      answer = "NO"
    }
  }
  return answer
})("asad")
