
// Clases y Métodos: 
// Define una clase Rectangle que tenga dos propiedades width y height. 
// Incluye métodos para calcular el área y el perímetro del rectángulo.


class Rectangle{
    #width = 0
    #height = 0

    constructor(ancho, alto){
        this.#width = ancho
        this.#height = alto
    }

    CalcularAreaRectangulo(){
        let area = this.#width * this.#height
        return area
    }
    CalcularPerimetroRectangulo(){
        let perimetro = 2 * (this.#width * this.#height)
        return perimetro
    }
}

let ancho_rectangulo = 20
let alto_rectangulo = 10
let rectangulo1 = new Rectangle(ancho_rectangulo, alto_rectangulo)
console.log(`El area del rectangulo  es: ${rectangulo1.CalcularAreaRectangulo()}`)
console.log(`El perimetro del rectangulo  es: ${rectangulo1.CalcularPerimetroRectangulo()}`)


