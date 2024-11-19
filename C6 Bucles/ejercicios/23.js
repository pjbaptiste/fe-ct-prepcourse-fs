function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  for (let index = numero; index >0; index--) {
    if(index==numero||index==1){
      continue;
    }
    else if(numero%index==0)
      return false
    
  }
  return true;
}

module.exports = esNumeroPrimo;
