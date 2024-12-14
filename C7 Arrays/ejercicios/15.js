function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let c = 0;
  valor = true;
  while (valor) {
    for (let index = 1; index < array.length; index++) {
      if (array[c] > array[index]) continue;
      else c = index;
    }
    valor = false;
  }
  return c;
}

module.exports = encontrarIndiceMayor;
