function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (var element of array) {
    if (element.length >= 5) {
      return element;
      
    }
  }
}

module.exports = obtenerPrimerStringLargo;
