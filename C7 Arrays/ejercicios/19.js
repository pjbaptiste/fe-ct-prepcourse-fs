function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  total = 1;
  if (arguments.length === 0) return 0;
  for (var element of arguments) {
    total *= element;
  }
  return total;
}

module.exports = multiplicarArgumentos;
