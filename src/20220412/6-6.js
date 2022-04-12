//이건 스택이랑 큐를 사용하지 않았는데..
function solution(input) {
   let answer = 0;
   let k = 3;
   const stack = [];
   const prince = new Array(input).fill(0).map((_, i) => i + 1);
   let cursor = 0;

   while (prince.length > 1) {
      cursor = (cursor + k - 1) % prince.length;
      prince.splice(cursor, 1);
   }


}

const data = solution(8);

