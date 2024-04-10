/*

Questão 3: Crie um vetor com 10 elementos e remova o último elemento e imprima
 vetor sem o elemento removido em JavaScript?
 
*/
resposta
let meuArray = [];
meuArray.push(10);
meuArray.push(20);
meuArray.push(30);
meuArray.push(40);
meuArray.push(50);
meuArray.push(60);
meuArray.push(70);
meuArray.push(80);
meuArray.push(90);
meuArray.push(100);


let elementoRemovido = meuArray.pop();

console.log(elementoRemovido); 
console.log(meuArray);