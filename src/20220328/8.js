(function solution(arr) {
  let answer = 0;
  let copy = [...arr];

  function sum(selectedNumberArray) {
    const value = selectedNumberArray.reduce((pre, acc, i) => {
      return pre + acc
    }, 0)
    if (value === 100) {
      return selectedNumberArray
    } else {
      copy = [...arr];
      for (let i = 0; i < 2; i++) {
        const random = Math.floor(Math.random() * copy.length);
        copy.splice(random, 1);
      }
      return sum(copy)
    }
  }

  for (let i = 0; i < 2; i++) {
    const random = Math.floor(Math.random() * copy.length);
    copy.splice(random, 1);
  }

  answer = sum(arr);

  return answer;
})([20, 7, 23, 19, 10, 15, 25, 8, 13]);
