function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  for (var element in array) {
    array[element]*=element;
  }
  return array
}

module.exports = multiplicarElementosPorIndice;
