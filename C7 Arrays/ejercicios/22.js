function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  arr = [];
  for (let index = 0; index <= 10; index++) {
    arr.push(index * 6);
  }
  return arr;
}

module.exports = tablaDelSeis;
