
// Uso de for...of con Objetos: 
// Escribe una función que reciba un objeto con propiedades de alumnos y sus notas (por ejemplo, {Juan: 8, Maria: 9, Pedro: 7}) y devuelva el promedio de las notas. 
// Utiliza un bucle for...of para iterar sobre los valores del objeto.

function calcular_promedo(objeto){
    let clave = Object.keys(objeto)
    let longitud = clave.length
    let promedio = 0
    for (let valor of Object.values(objeto)) {
        promedio += valor
    }    
    promedio /= longitud
    return promedio
}

mi_objeto = {
    juan: 8,
    maria: 9,
    pedro: 7
}
console.log(calcular_promedo(mi_objeto))