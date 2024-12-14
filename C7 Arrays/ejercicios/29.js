function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  } else {
    for (const element of numeros) {
      if (numeros.indexOf(element) + 1 < numeros.length) {
        if (numeros[numeros.indexOf(element) + 1] !== element + 1) {
          return element + 1;
        }
      } else return null;
    }
  }
}

module.exports = encontrarNumeroFaltante;
