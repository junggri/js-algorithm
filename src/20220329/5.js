(function (input) {
  let answer;

  const gradeArray = []
  let index = 0;

  function calculateGrade(scoreArray) {
    let grade = 0;
    const value = input[index];

    for (let i = 0; i < scoreArray.length; i++) {
      if (input[i] >= value) {
        grade += 1
      }
    }
    gradeArray.push(grade);
    index += 1;

    if (index < input.length) {
      calculateGrade(input)
    }
  }

  calculateGrade(input)
  answer = gradeArray
  return answer
})([87, 89, 92, 100, 76])
