function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    // Cria uma chave única para os argumentos
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      // Retorna resultado armazenado no cache
      console.log('Resultado em cache para:', args);
      return cache.get(key);
    }

    // Executa a função original
    const result = fn(...args);

    // Armazena o resultado no cache
    cache.set(key, result);

    return result;
  };
}
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const memoizedFatorial = memoize(fatorial);

console.log(memoizedFatorial(5)); // Calcula e armazena no cache
console.log(memoizedFatorial(5)); // Retorna instantaneamente do cache
console.log(memoizedFatorial(6)); // Calcula porque argumento diferente
