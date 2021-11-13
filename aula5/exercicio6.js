/*
Crie uma função chamada criaPares que receba como parâmetro o array valoresNum, 
nessa função deve ser executado um for que imprime na tela apenas os valores pares.
*/

let numerosPares = [];

function criaPares(valoresNum) {
   for (let i = 0; i < valoresNum.length; i++) {
      if (valoresNum[i] % 2 === 0) {
         numerosPares.push(valoresNum[i]);
      }
   }
   return numerosPares;
}
let valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(criaPares(valoresNum));