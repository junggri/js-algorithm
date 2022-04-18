//not solved

function solution(input) {
   const answer = [];
   let min, max;
   const sortArr = input.slice();

   sortArr.sort((a, b) => a - b);
   console.log(sortArr);


}

solution([120, 125, 152, 130, 135, 135, 143, 127, 160]);

// 120, 125, 152, 130, 135, 135, 143, 127, 160

// 120 130 150 150 130 150

// 120 130 130 150 150 150
