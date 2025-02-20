// Importamos ela de outro arquivo
import { dobro } from './funcoes.js';

// Solicitamos ao usuário um número
let numero = parseFloat(prompt("Digite um número:"));

if (!isNaN(numero)){
    // Se for um número válido, executamos a função dobro()
    let resultado = dobro(numero);
    alert(`O dobro de ${numero} é ${resultado}`);
} else {
    alert("Por favor, insira um número válido.");
}