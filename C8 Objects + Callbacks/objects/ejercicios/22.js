function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  arr1 = str1.toLowerCase().split("");
  arr2 = str2.toLowerCase().split("");
  arr1.sort();
  arr2.sort();
  for (const element in arr1) {
    if (arr1[element] !== arr2[element]) {
      return false;
    }
  }

  return true;
}

module.exports = esAnagrama;
