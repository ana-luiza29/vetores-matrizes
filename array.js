let meuArray = [];
//Adiciando elementos ao final do array 

meuArray.push(10);
meuArray.push(20);
meuArray.push(30);

console.log(meuArray);

meuArray.push(40,50,60);

console.log(meuArray);
// Alterando o valor de um elemento de array
meuArray[2] =35;
console.log(meuArray);

//removendo o ultimo elemento do array
let elementoRemovido = meuArray.pop();

console.log(elementoRemovido); // saida
console.log(meuArray);

let tamanhoArray = meuArray.length;

console.log(tamanhoArray); //Saida