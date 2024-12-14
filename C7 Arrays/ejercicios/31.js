function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  b = texto.split("");
  c = b.reverse().join("");
  return c;
}

module.exports = invertirTexto;
