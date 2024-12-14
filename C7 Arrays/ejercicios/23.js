function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  arr = [];
  for (let index = 0; index < 10; index++) {
    arr.push((num += 2));
    if (num == index) return "Se interrumpió la ejecución";
  }
  return arr;
}

module.exports = breakStatement;
