function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  valor = 0
  for (var element of arrayOfNums) {
    valor += element;
  }
  return valor
}

module.exports = agregarNumeros;
