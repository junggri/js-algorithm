//중복된 문자를 제거하라.
(function (input) {
  let answer;
  let notDuplicatedString = "";

  function removeDuplicate(value) {
    const letter = value[0];
    const checkString = value.slice(1);
    notDuplicatedString += letter;
    if (checkString.length > 0) {
      const reg = new RegExp(letter, "gi")
      const removedWord = checkString.replace(reg, "");
      removeDuplicate(removedWord)
    }
  }

  removeDuplicate(input)
  answer = notDuplicatedString
  return answer;
})('ksekksetl');
