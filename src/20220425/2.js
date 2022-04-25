function solution(input) {
   let answer = "";
   let tmp = input;

   let value = 0;

   while (Math.pow(2, value) < input) {

      value++;
      if (Math.pow(2, value) > input) {
         value--;
         break;
      }
   }

   function recursive() {
      if (value < 0) return;
      if (tmp - Math.pow(2, value) >= 0) {
         answer += "1";
         tmp -= Math.pow(2, value);
      } else {
         answer += "0";
      }
      value--;
      recursive();
   }

   recursive();
}

solution(11);

// 8 + 4 * 0 + 2 + 1;
