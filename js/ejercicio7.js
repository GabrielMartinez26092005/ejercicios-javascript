
// Uso de for y Arrays: 
// Escribe una función que reciba dos arrays de la misma longitud y devuelva un nuevo array con la suma de los elementos correspondientes. 
// Utiliza un bucle for para iterar sobre los índices de los arrays.

function sumar_arrays(array1, array2){
    let suma = 0
    let longitud = array1.length
    for (let i = 0; i < longitud ; i++){
        suma += array1[i] + array2[i] 
    }
    return suma
}

let primer_array = [1,2,3]
console.log(primer_array)
let segundo_array = [1,2,3]
console.log(segundo_array_array)
console.log(sumar_arrays(primer_array,segundo_array))