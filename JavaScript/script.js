export let numeroSecreto; // O numero que o jogador precisa adivinhar
let contadorDeChances = 1; // Começa na primeira chance
const MAX_CHANCHES = 10; // Número maximo de chances

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpites = document.querySelector('#botaoEnviarPalpite');
const botaoReniciar = document.querySeletor('#botaoReniciar');

const mensagemElement = document.querySeletor('.mensagem')
const palpitesAnterioresElements = document.quarySeletor('.palpites-anteriores');
const dicaElement = document.quarySeletor('.dica');
const chacesrestantesElement = document.querySelector('#chachesRestantes');

let listaDePalpites = []; // Array para guardar os palpites que o jogador ja deu

