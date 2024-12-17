function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario.email === null) return false;
  else return objetoUsuario.hasOwnProperty("email");

  // if (objetoUsuario.hasOwnProperty("email") !== null) {
  //   return true;
  // } else return false;
}

module.exports = tieneEmail;
