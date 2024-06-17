
// Uso de Math para Cálculos: 
// Escribe una función que reciba un número y devuelva un objeto con sus propiedades matemáticas: el cuadrado, la raíz cuadrada y el valor absoluto. 
// Utiliza métodos de Math.

class PropiedadesMatematicas{
    #potencia_cuadrada
    #raiz_cuadrada = 0
    #valor_absoluto = 0

    constructor(numero){
        this.#potencia_cuadrada = Math.pow(numero, 2)
        this.#raiz_cuadrada = Math.sqrt(numero)
        this.#valor_absoluto = Math.abs(numero)
    }

    MostrarPotenciaCuadrada() {
        return console.log(`$La potencia cuadrada de ${this.numero} es igual  a: ${this.#potencia_cuadrada}`)
    }
    MostrarRaizCuadrada() {
        return console.log(`$La raiz cuadrada de ${this.numero} es igual  a: ${this.#raiz_cuadrada}`)
    }
    MostrarValorAbsoluto() {
        return console.log(`$El valor absoluto de ${this.numero} es igual  a: ${this.#valor_absoluto}`)
    }

}


function crear_objeto(nombre_objeto, numero){
    let objeto = (nombre_objeto = new PropiedadesMatematicas(numero))
    return objeto
}
function mostrar_metodos_objeto(objeto){
    objeto.MostrarPotenciaCuadrada()
    objeto.MostrarRaizCuadrada()
    objeto.MostrarValorAbsoluto()
    return
}


let nombre = 'objeto1'
let numero = 5
let mi_objeto = crear_objeto(nombre, numero)
mostrar_metodos_objeto(mi_objeto)

