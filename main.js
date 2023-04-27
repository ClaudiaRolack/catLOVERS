function comprar(precio) {
    let comprar = confirm("¿Quieres comprar?")

    if (comprar === true) {
        alert("Son " + precio + " pesos")
        alert("¡Gracias por tu compra!")
    } else {
        alert("Escoge otro gatito")
    }
}

function menu() {
    let gatito = prompt('¿Qué gatito deseas comprar?\n1. azul ruso\n2. siamés\n3. tiffanie')

    switch (gatito.toLowerCase()) {
        case "azul ruso":
            alert("Escogiste el gatito de raza " + gatito)
            comprar(300000)
            break
        case "siamés":
            alert("Escogiste el gatito de raza " + gatito)
            comprar(80000)
            break
        case "tiffanie":
            alert("Escogiste el gatito de raza " + gatito)
            comprar(40000)
            break
        default:
            alert("Escribe bien")
            break
    }
}

function autenticador() {
    let usuario = prompt("Ingresa tu usuario:")

    if (usuario === null || usuario === undefined) {
        alert("El usuario está vacío")
    }
    if (usuario === "claudia rolack" && intentos <= 3) {
        alert("Bienvenida " + usuario)
        menu()
    } else {
        alert("No se reconoce al usuario: " + usuario)
        intentos++
        if (intentos > 3) {
            alert("Vuelve a intentarlo luego de 24 horas")
            identificar = false
            intentos = 1
        }
    }
}

let intentos = 1
let identificar = true

alert("¡Bienvenido a catLOVERS!")
do {
    autenticador()
} while (identificar)