// //Primer desafío entregable Gonzalo Reynoso

// function introducirClave(){

// 	let claveIngresada = prompt("Ingrese su clave");
// 	let intento = 0;

// 	while (claveIngresada != "celular") {

// 		intento++
// 		alert("Código incorrecto" + " Pista: celular" + " Intento Nro" + intento);
// 		claveIngresada = prompt("Ingrese palabra clave");
// 	}

// 	if(claveIngresada === "celular"){
// 		alert("Código correcto - Bienvenido" )
// 		}

// }

// introducirClave();

// DESAFIO ENTREGABLE SIMULADOR INTERACTIVO GONZALO REYNOSO

let productoIngresado;
let respuesta = "si";
let sumaFinalPrecios;
let precioTermo = 10;
let precioMate = 5;
let precioBombilla = 2;
let contadorTermo = 0;
let contadorMate = 0;
let contadorBombilla = 0;
let descuentoDel10 = 10;
let precioFinalTermo;
let precioFinalMate;
let precioFinalBombilla;
let mensajeDescuento;
let mensaje;
let cantidadTotalDeProductos;
let precioConDescuento;
let precioFinal;
const productoTermo = {};
const productoMate = {};
const productoBombilla= {};




productoTermo = {
    marca: 'Stanley',
    presentacion: '900 ML',
    color: 'verde'
}

productoMate = {
    marca: 'Stanley',
    presentacion: '250 ML',
    color: 'bronce'
}

productoBombilla = {
    marca: 'Stanley',
    presentacion: '18 cm',
    color: 'plata'
}


function ingresarProductos() {
    while (respuesta == "si") {
    productoIngresado = prompt(
    "Ingrese un producto de la lista, el precio final acumulado será mostrado al final, $10 termo  $5 mate o $2 bombilla"
    );
    while (
    productoIngresado != "termo" &&
    productoIngresado != "mate" &&
    productoIngresado != "bombilla"
    ) {
    productoIngresado = prompt(
        "Error, reingrese productos de la lista",
        "termo mate o bombilla"
    );
    }

    //CONTADORES
    switch (productoIngresado) {
    case "termo":
        contadorTermo++;
        break;

    case "mate":
        contadorMate++;
        break;

    case "bombilla":
        contadorBombilla++;
        break;
    }

    alert(
    "Si compra 3 unidades o mas en total de cualquier item, tendrá un 10% de descuento!"
    );
    respuesta = prompt("¿Desea seguir agregando ventas?" + "si,no");
    while (respuesta != "si" && respuesta != "no") {
    respuesta = prompt("Ingrese si o no por favor únicamente");
    }
    }
}
//FIN WHILE

function calcularProductos() {
  precioFinalTermo = precioTermo * contadorTermo;
  precioFinalMate = precioMate * contadorMate;
  precioFinalBombilla = precioBombilla * contadorBombilla;

    sumaFinalPrecios = precioFinalTermo + precioFinalMate + precioFinalBombilla;

    cantidadTotalDeProductos = contadorTermo + contadorMate + contadorBombilla;

    if (cantidadTotalDeProductos >= 3) {
        mensajeDescuento = "Felicidades, por su compra obtuvo un 10% de descuento";
        precioConDescuento = sumaFinalPrecios / descuentoDel10;
    } else if (cantidadTotalDeProductos == 2) {
        mensajeDescuento = "Compre 3 unidades o mas y obtendrá un 10% de descuento";
        precioConDescuento = 0;
    } else {
        mensajeDescuento = "No hay descuento";
        precioConDescuento = 0;
    }

    precioFinal = sumaFinalPrecios - precioConDescuento;
    }

function mostrar() {
    mensaje = `Usted compró ${contadorTermo} unidad/es de termos, <br>
            ${contadorMate} unidad/es de mates,<br>
            ${contadorBombilla} unidad/es de bombillas,<br>
            ${mensajeDescuento} El precio final a pagar es de ${precioFinal}`;

    document.write(mensaje);
    console.log(mensaje);
    }

ingresarProductos();
calcularProductos();
mostrar();
