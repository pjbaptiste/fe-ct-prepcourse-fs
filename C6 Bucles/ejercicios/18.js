function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  suma = 1;
  for (let index = a; index <= b; index++) {
    if (a<0)
      return 0 
    suma *= index
  }
 
   return suma

}

module.exports = productoEntreNúmeros;