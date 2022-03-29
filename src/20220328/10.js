(function solution(input) {
   let answer;
   //first
   answer = Array.from(input).filter((e) => e === "R").length;
   //second;
   //반목문을 안돌리고 할 수 있는방법?
   input.split("R").length - 1;//구분자로도 해결가능하가
   return answer;
})("COMPUTERPROGRAMMING");
