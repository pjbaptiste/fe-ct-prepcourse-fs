function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  count = 0
  for (var element of array) {
    if(element>10){
      count+=1
    }
  }
  return count
}

module.exports = contarElementosMayoresA10;
