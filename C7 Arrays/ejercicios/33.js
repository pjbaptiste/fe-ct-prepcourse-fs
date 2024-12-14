function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let b = "";
  c = Math.max(str1.length, str2.length, str3.length);
  for (let index = 0; index < c; index++) {
    if (index < str1.length) {
      s1 = str1[index];
      b += s1;
    }
    if (index < str2.length) {
      s2 = str2[index];
      b += s2;
    }
    if (index < str3.length) {
      s3 = str3[index];
      b += s3;
    }
  }
  return b;
}

module.exports = combine;
