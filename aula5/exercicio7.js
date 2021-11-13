//Adicione os números de 5 a 0 (inclusive) em ordem decrescente para meuArray usar um whileloop e imprima-o no final.
//Setup
const meuArray = [];

function numDecrescentes(num) {
   while (num >= 0) {
      meuArray.push(num);
      num--;
   }
   return meuArray;
}
let num = 5;

console.log(numDecrescentes(num));


