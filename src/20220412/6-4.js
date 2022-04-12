//후위식 전위식 중위식을 알아야한다.
function solution(input) {
   let answer = 0;
   const split = Array.from(input);
   const numberStack = [];
   const calStack = [];

   for (let i = 0; i < split.length; i++) {
      if (isNaN(split[i]) && numberStack.length) {
         const a = numberStack.pop();
         const b = numberStack.pop();
         if (split[i] === "*") numberStack.push(b * a);
         if (split[i] === "-") numberStack.push(b - a);
         if (split[i] === "+") numberStack.push(b + a);
         if (split[i] === "/") numberStack.push(b / a);

      } else {
         numberStack.push(Number(split[i]));
      }
   }
   console.log(numberStack, calStack);
}

const data = solution("352+*9-");

