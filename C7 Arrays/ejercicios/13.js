function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let array2 = [];
  for (var element of array) {
    if (element % 2 === 0) {
      array2.push(element);
    }
  }
  return array2;
}

module.exports = filtrarNumerosPares;
