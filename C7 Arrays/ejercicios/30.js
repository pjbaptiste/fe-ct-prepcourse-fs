function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  a = 0;
  for (var elemento of numeros) {
    for (let index = 0; index < numeros.length; index++) {
      a += 1;
      if (a === numeros.length) {
        a = numeros.indexOf(elemento) + 1;
        break;
      }
      if (elemento === numeros[a]) {
        return elemento;
      }
    }
  }
}

module.exports = encontrarElementoRepetido;
