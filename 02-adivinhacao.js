const prompt = require('prompt-sync')();
// Função para gerar número inteiro aleatório entre min e max
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroSecreto = numeroAleatorio(1, 100);

let tentativa = 0;
let palpite;

while (palpite !== numeroSecreto) {
  palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    console.log("Por favor, digite um número válido entre 1 e 100.");
    continue;
  }

  tentativa++;
  if (palpite < numeroSecreto) {
    console.log("Mais alto!");
  } else if (palpite > numeroSecreto) {
    console.log("Mais baixo!");
  } else {
    console.log(`Parabéns! Você acertou em ${tentativa} tentativas.`);
  }
}