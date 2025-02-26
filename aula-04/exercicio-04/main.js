import { calcularDiasRestantesParaAniversario, calcularIdade} from './funcoes.js';

// Solicita a data para o usuário
const dataNascimento = prompt("Digite sua data de nascimento (AAAA-MM-DD):");

// Executar as funções
const idade = calcularIdade(dataNascimento);
const diasRestantes = calcularDiasRestantesParaAniversario(dataNascimento);

// Exibe o resultado
alert(`Você tem ${idade} anos e faltam ${diasRestantes} dias para o seu aniversário.`);