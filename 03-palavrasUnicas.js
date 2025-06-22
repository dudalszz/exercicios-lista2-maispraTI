const frase = "olá olá mundo mundo teste";
const palavras = frase.split(" ");
const unicas = []; 

for (let i = 0; i < palavras.length; i++) {
  let contador = 0;

  for (let j = 0; j < palavras.length; j++) {
    if (palavras[i] === palavras[j]) {
      contador++;
    }
  }

  if (contador === 1) {
    unicas.push(palavras[i]);
  }
}
console.log(unicas);