function delayExecution(callback, waitTime) {
  let timerId;

  return function (...params) {
    // Se já tiver um timer, cancela para reiniciar a contagem
    if (timerId) clearTimeout(timerId);

    // Define um novo timer para executar o callback após o tempo esperado
    timerId = setTimeout(() => {
      callback(...params);
    }, waitTime);
  };
}

// Exemplo de função para usar com delayExecution
function enviarAtualizacao(info) {
  console.log('Atualização enviada:', info);
}

// Criando uma versão com atraso da função enviarAtualizacao
const envioComDelay = delayExecution(enviarAtualizacao, 1200);

// Chamadas rápidas simuladas
envioComDelay({ texto: 'Olá Mundo' });
setTimeout(() => envioComDelay({ texto: 'Olá Universo' }), 1300);
setTimeout(() => envioComDelay({ texto: 'Olá Galáxia' }), 2700);

