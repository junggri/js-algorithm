//not solved
function solution(input) {
   const answer = [];

   let init = 1;

   function recursive(init) {
      console.log(init);
      if (init * 2 > 7) return;
      recursive(init * 2);
      recursive(init * 2 + 1);
   }

   recursive(init);

}

solution();

//1 2 4
