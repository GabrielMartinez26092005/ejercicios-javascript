
// Manipulación de Strings: 
// Crea una función que reciba una cadena y devuelva la misma cadena con las palabras en orden inverso. 
// Utiliza métodos de manipulación de cadenas y arrays.

function cadena_orden_inverso(cadena){
    let array = cadena.split('')
    array = array.reverse()
    cadena = array.join('')
    return cadena
}

let mi_cadena = 'Hola'
console.log(cadena_orden_inverso(mi_cadena))
