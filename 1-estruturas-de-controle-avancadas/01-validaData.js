// Função para verificar se o ano é bissexto
function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function ehDataValida(dia, mes, ano) {
 
  if (mes < 1 || mes > 12) {
    return false;
  }

  const bissexto = ehBissexto(ano)

  let maxDia;
  if (mes === 2) {
    maxDia = bissexto ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(mes)) {
    maxDia = 30;
  } else {
    maxDia = 31;
  }

  return dia >= 1 && dia <= maxDia;
}

console.log(ehDataValida(29, 2, 2024)); 
console.log(ehDataValida(29, 2, 2023)); 
console.log(ehDataValida(31, 4, 2023)); 
console.log(ehDataValida(15, 8, 2023)); 
