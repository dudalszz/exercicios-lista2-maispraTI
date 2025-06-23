const produtos = [
  { nome: 'Mouse', preco: 50 },
  { nome: 'Teclado', preco: 80 },
  { nome: 'Monitor', preco: 600 },
  { nome: 'Fone', preco: 100 }
];

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() // copia para não alterar o original
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

console.log(nomesOrdenadosPorPreco(produtos));
