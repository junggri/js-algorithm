(function (input) {
  let answer = "YES";
  const reg = new RegExp(/[0-9;:, ]/, "gi")
  const replaceInput = input.replace(reg, "")

  const stringArray = Array.from(replaceInput);
  const checkLength = Math.floor(stringArray.length / 2);

  for (let i = 0; i < checkLength; i++) {
    if (stringArray[i].toLowerCase() !== stringArray[stringArray.length - i - 1].toLowerCase()) {
      answer = "NO"
    }
  }
  console.log(answer)

  return answer;
})('found7, time: study; Yduts; emit, 7Dnuof')
