function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  for (var element in array) {
    array[element]=array[element].toUpperCase();
  }
  return array
}

module.exports = convertirStringAMayusculas;
