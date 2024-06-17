
// Uso de for...of y Arrays: 
// Escribe una función que reciba un array de números y retorne un nuevo array con cada número elevado al cuadrado. 
// Utiliza un bucle for...of para iterar sobre los elementos del array.

function elevar_al_cuadrado_un_array(lista){
    let lista_modificada = []
    for (const item of lista) {
        lista_modificada.push(item * item)        
    }
    return lista_modificada
}


let array = [2, 4, 6]
console.log(array)
let array_cuadrado = elevar_al_cuadrado_un_array(array)
console.log(array_cuadrado)


