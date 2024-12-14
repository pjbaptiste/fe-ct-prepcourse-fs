function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  arr =[]
  for (var element of array) {
    arr.push(element* 2);
  }
  return arr
}

module.exports = duplicarElementos;
