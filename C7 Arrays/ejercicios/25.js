function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  count = 0;
  for (const element of numeros) {
    if (element%2==0) {
      count++;
    }
  }
  return count;
}

module.exports = contarParesConContinue;
