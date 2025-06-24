function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

// Testando:
const pares = [['nome', 'Ana'], ['idade', 28]];
const obj = { curso: 'JS', carga: 30 };

console.log(paresParaObjeto(pares)); 
// { nome: 'Ana', idade: 28 }

console.log(objetoParaPares(obj)); 
// [ ['curso', 'JS'], ['carga', 30] ]
