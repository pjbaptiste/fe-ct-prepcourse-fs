function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  arr=[]
  for (var element of array) {
    if (element==="Enero"||element==="Marzo"||element==="Noviembre") {
      arr.push(element)
    }
  }
  if (arr.length<3) {
    return "No se encontraron los meses pedidos"    
  }
  else
    return arr
}

module.exports = mesesDelAño;
