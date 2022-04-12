(function (a, b) {
   let answer = "YES";
   if (a.length !== b.length) {
      answer = "No";
   } else {


      let AHash = {};
      let BHash = {};

      for (let i = 0; i < a.length; i++) {
         if (!AHash[a[i]]) {
            AHash[a[i]] = 0;
         }
         if (!BHash[b[i]]) {
            BHash[b[i]] = 0;
         }
         AHash[a[i]]++;
         BHash[b[i]]++;
      }

      for (let x in AHash) {
         if (AHash[x] === BHash[x]) {
            answer = "YES";
         } else {
            answer = "NO";
         }
      }
   }
   console.log(answer);
   return answer;
})("AbaAeCe", "baeeACA");
