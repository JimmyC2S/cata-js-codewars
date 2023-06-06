// comptage entré 5 sortie 1+2+3+4+5=15

var summation = function (num) {
    let sum = 0;
   for (let i = 1; i <= num; i++) {
     sum += i;
   }
   return sum;
 }