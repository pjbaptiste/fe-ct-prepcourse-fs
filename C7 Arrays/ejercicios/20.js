function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  a=1
  b=0
  c=0
  for (var element of array) {
    if(element === array[a])
      {
        a++
        if(a>array.length-1)
          break;
        continue
      }
      else
      {
        return false
      }
  }
  return true
}

module.exports = todosIguales;
