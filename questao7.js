/*
Questão 7: Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é
simétrica em relação à sua diagonal principal. 
*/
resposta

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] !== matriz[j][i]) {
            return false;
        }
    }
}
return true;


let matrizSimetrica = [
[1, 2, 3],
[2, 4, 5],
[3, 5, 6]
];

let matrizNaoSimetrica = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

console.log("A matriz simétrica é: " + verificarSimetria(matrizSimetrica));
console.log("A matriz não simétrica é: " + verificarSimetria(matrizNaoSimetrica));