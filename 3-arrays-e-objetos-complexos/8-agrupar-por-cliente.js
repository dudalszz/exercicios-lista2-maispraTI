const vendas = [
  { cliente: 'Maria', total: 100 },
  { cliente: 'João', total: 150 },
  { cliente: 'Maria', total: 200 },
  { cliente: 'João', total: 50 },
  { cliente: 'Ana', total: 300 }
];

const totaisPorCliente = vendas.reduce((acumulador, venda) => {
  const { cliente, total } = venda;

  if (acumulador[cliente]) {
    acumulador[cliente] += total; //
  } else {
    acumulador[cliente] = total; 
  }

  return acumulador;
}, {});

console.log(totaisPorCliente);
