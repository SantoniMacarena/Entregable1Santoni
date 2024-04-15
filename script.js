// Declaración de variables
let nombreUsuario;
let edadUsuario;

// Declaración de constantes
const EDAD_MINIMA = 18;

// Declaración de array
const productos = ['Producto 1', 'Producto 2', 'Producto 3'];

// Función para solicitar nombre y edad al usuario
function solicitarDatosUsuario() {
    nombreUsuario = prompt("Por favor, introduce tu nombre:");
    edadUsuario = parseInt(prompt("Hola " + nombreUsuario + ", ¿cuál es tu edad?"));
}

// Función para verificar si el usuario es mayor de edad
function verificarEdad() {
    if (edadUsuario >= EDAD_MINIMA) {
        alert("Bienvenido " + nombreUsuario + ", puedes continuar con la compra.");
        mostrarProductos();
    } else {
        alert("Lo siento, " + nombreUsuario + ", debes ser mayor de edad para comprar aquí.");
    }
}

// Función para mostrar los productos disponibles
function mostrarProductos() {
    console.log("Productos disponibles:");
    for (let i = 0; i < productos.length; i++) {
        console.log((i+1) + ". " + productos[i]);
    }
}

// Función principal
function main() {
    solicitarDatosUsuario();
    verificarEdad();
}

// Ejecución del programa
main();
