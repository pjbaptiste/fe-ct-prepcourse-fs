function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(Number.isInteger(x) && Number.isInteger(y))
  {
    return x>y?x:y;
  }
}

module.exports = obtenerMayor;
