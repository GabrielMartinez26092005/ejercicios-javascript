
// Uso de for y Cadenas: 
// Crea una función que reciba una cadena y devuelva una nueva cadena con las vocales en mayúsculas. 
// Utiliza un bucle for para iterar sobre los caracteres de la cadena.

function cambiar_a_mayusculas(cadena){
    let nueva_cadena = ''
    let longitud_cadena = cadena.length
    for (let i = 0; i < longitud_cadena; i++){
        if (cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' || cadena[i] == 'u'){
            nueva_cadena += cadena[i].toUpperCase()
        }
        else{
            nueva_cadena += cadena[i]
        } 
    }
    return nueva_cadena
}

let mi_cadena = 'hola, mundo!'
console.log(mi_cadena)
let cadena_mayusculas = cambiar_a_mayusculas(mi_cadena)
console.log(cadena_mayusculas)
