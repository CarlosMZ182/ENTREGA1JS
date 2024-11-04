// Constantes
const NOMBRE_TIENDA = "Tienda Virtual JS";
const IMPUESTO = 0.19; // IVA en Chile

// Variables a utilizar
let carrito = [];
let total = 0;

// Array de productos (precios en CLP)
const productos = [
    { id: 1, nombre: "Camiseta", precio: 14990 }, // 15.59 USD
    { id: 2, nombre: "Pantalones", precio: 29900 }, // 31.10 USD
    { id: 3, nombre: "Zapatos", precio: 34990 }, // 36.39 USD
    { id: 4, nombre: "Gorra", precio: 9990 } // 10.39 USD
];

// Función para mostrar productos
function mostrarProductos() {
    console.log(`Bienvenido a ${NOMBRE_TIENDA}`);
    console.log("Productos disponibles:");
    productos.forEach((producto) => {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio} CLP`);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito() {
    let productoId = parseInt(prompt("Ingresa el ID del producto que deseas agregar al carrito:"));
    console.log(`ID del producto ingresado: ${productoId}`);
    let producto = productos.find((p) => p.id === productoId);

    if (producto) {
        carrito.push(producto);
        total += producto.precio;
        console.log(`Producto agregado: ${producto.nombre}, Precio: $${producto.precio} CLP, Total actual: $${total} CLP`);
        alert(`Has agregado ${producto.nombre} al carrito. Total actual: $${total} CLP`);
    } else {
        console.log("Producto no encontrado.");
        alert("Producto no encontrado. Intenta de nuevo.");
    }
}

// Función para finalizar compra
function finalizarCompra() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        alert("Tu carrito está vacío. ¡Agrega productos para continuar!");
    } else {
        let confirmacion = confirm("¿Deseas finalizar tu compra?");
        console.log(`Confirmación de compra: ${confirmacion}`);
        if (confirmacion) {
            let totalConImpuestos = total + (total * IMPUESTO);
            let totalRedondeado = Math.round(totalConImpuestos); // Redondear el total
            console.log(`Total con impuestos: $${totalRedondeado} CLP`);
            alert(`Compra finalizada. Total con impuestos: $${totalRedondeado} CLP`);
            carrito = [];
            total = 0;
        } else {
            console.log("Compra no finalizada. Continúa comprando.");
            alert("Continúa comprando.");
        }
    }
}

// Función principal para controlar el flujo de la tienda
function iniciarTienda() {
    mostrarProductos();

    let continuar = true;
    while (continuar) {
        let opcion = prompt("Elige una opción: \n1. Agregar producto al carrito\n2. Finalizar compra\n3. Salir");
        console.log(`Opción seleccionada: ${opcion}`);

        switch (opcion) {
            case "1":
                agregarAlCarrito();
                break;
            case "2":
                finalizarCompra();
                break;
            case "3":
                continuar = false;
                console.log("Saliendo de la tienda.");
                alert("Gracias por visitar la tienda. ¡Hasta pronto!");
                break;
            default:
                console.log("Opción no válida.");
                alert("Opción no válida. Intenta nuevamente.");
                break;
        }
    }
}

// Iniciar la tienda
iniciarTienda();