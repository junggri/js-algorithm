function solution(input) {
   const answer = [];
   const cache = new Array(5).fill(0);


   let pos = 0;
   for (let i = 0; i < input.length; i++) {
      if (cache.indexOf(input[i]) === -1) {
         const tmp = input[i];
         for (let i = pos; i >= 0; i--) {
            cache[i + 1] = cache[i];
            if (cache.length > 5) cache.pop();
         }
         cache[0] = tmp;
         pos++;
      } else {
         const pos = cache.indexOf(input[i]);
         const tmp = cache[pos];
         for (let i = pos - 1; i >= 0; i--) {
            cache[i + 1] = cache[i];
            if (cache.length > 5) cache.pop();
         }
         cache[0] = tmp;
      }
   }
   console.log(cache);
}

solution([1, 2, 3, 2, 6, 2, 3, 5, 7]);

// 3 1 2
//pos 2

// 2 1
