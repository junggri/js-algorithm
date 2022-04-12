//이건 스택이랑 큐를 사용하지 않았는데..
function solution(a, b) {
   let answer;
   const stack = [];

   for (let i = 0; i < b.length; i++) {
      if (a.includes(b[i])) {
         stack.push(b[i]);
      }
   }

   const courseArray = Array.from(a);
   const tmp = [...stack];

   for (let i = 0; i < stack.length; i++) {
      const a = courseArray.pop();
      const b = tmp.pop();
      console.log(a, b);

      if (a === b) {
         answer = true;
      } else {
         answer = false;
         break;
      }
   }

   console.log(answer);
}

solution("BCA", "CBDAGE");

