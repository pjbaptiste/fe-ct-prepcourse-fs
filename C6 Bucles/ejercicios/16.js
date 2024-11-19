function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  switch (idioma) {
    case "aleman":
      return "Guten Tag!"
      break;
    case "mandarin":
      return "Ni Hao!"
      break; 
    case "ingles":
      return  "Hello!"
      break; 
    
    default:
      return "Hola!"
      break;
  }
}

module.exports = saludo;
