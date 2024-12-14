function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  valor=0
  for (var element of resultadosTest) {
    valor += element;
  }
  valor2 = valor / resultadosTest.length
  return valor2
}

module.exports = promedioResultadosTest;
