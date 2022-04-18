function solution(input) {
   const answer = [];
   const cache = [];

   let pos = 0;
   for (let i = 0; i < input.length; i++) {
      const tmp = input[i];
      if (cache.includes(tmp)) pos = cache.indexOf(tmp);
      else pos = cache.length >= 5 ? cache.length - 1 : cache.length;

      for (let j = pos; j > 0; j--) {
         cache[j] = cache[j - 1];
      }
      cache[0] = tmp;

   }
   console.log(cache);

}

solution([1, 2, 3, 2, 6, 2, 3, 5, 7]);



