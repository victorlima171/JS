//arrays -> vetores, matrizes
// estrutura de dados para armanezenar um conjunto de elementos

const { numeroSecreto } = require("./script");

let frutas = ["Banana", "Maça", "Melancia"]; // array de tamanho 3
console.log(frutas);
console.log(frutas[5]);

let numeros = new Array(2,8,9,10);
console.log(numeros);

let arrayVazio = [];
console.log(arrayVazio);
arrayVazio[0] = "Gaby";
console.log(arrayVazio);

//Tamanho do array -> length 
let dados = [10,50,30]; //tamanho 3 -> length 3
console.log(dados.length);
console.log(dados[1]);
let ultimoElemento = numero
function iniciarjogo() {
    // Gerar um novo numero secreto (entre 1 e 100)
    //Math.rondom()gera um numero entre 0 (inclusivo) e 1 (esclisivo)
    //multiplicamos por 100 para ter entre 0 e 98.99...
    // adicionamos 1  para ter entre 1 é 100.00...
    // math.floor() arredonda para o menor inteiro, então teremos entre 1 e 100.
    numeroSecreto = Math.floor(Math.rondo() * 100) + 1;
    console.log("Numero Secreto (apenas para testes): , Numero Secreto)-+");
}
