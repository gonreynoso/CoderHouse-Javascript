
//1er pre entrega del final e commerce Gonzalo Reynoso

//VARIABLES

let productoIngresado;
let sumaFinalPrecios;
let precioTermo = 40;
let precioMate = 30;
let precioBombilla = 10;
let contadorTermo = 0;
let contadorMate = 0;
let contadorBombilla = 0;
let descuentoDel10 = 10;
let precioFinalTermo;
let precioFinalMate;
let precioFinalBombilla;
let mensajeDescuento;
let mensaje;
let mostrar;
let productos;
let articulos;
let cantidadTotalDeProductos;
let precioConDescuento;
let precioFinal;
let productoEncontrado;

    //Buscador de productos
    function buscarProductos(){
        alert(`Buscador de productos`);
        productos = [
            {id: 1, nombre:'termo', precio: 40, marca: 'Stanley', presentacion: '950 ml'},
            {id: 2, nombre:'mate', precio: 30, marca: 'Stanley', presentacion: '250 ml'},
            {id: 3, nombre:'bombilla', precio: 10, marca: 'Stanley', presentacion: '18 cm'},
        ]
        
        productoIngresado = prompt('Ingrese un producto, termo, mate o bombilla');
        productoEncontrado = productos.find((articulos) => articulos.nombre === productoIngresado);

        mensaje= `Producto:
        ${productoEncontrado.nombre}
        ${productoEncontrado.marca}
        ${productoEncontrado.presentacion}
        Precio $${productoEncontrado.precio}`

        alert(mensaje);

        let = respuesta=prompt('Desea buscar otro producto?Ingrese si sino no')
        while (respuesta==='si') {
            buscarProductos();
        }
    }

    //Ingresar productos
    function ingresarProductos() {
        let= respuesta = "si"
        while (respuesta == "si"){ 
            productoIngresado = prompt("Ingrese un producto de la lista, el precio final acumulado será mostrado al final, $40 termo  $30 mate o $10 bombilla");

            while (productoIngresado != "termo" && productoIngresado != "mate" && productoIngresado !="bombilla"){
                productoIngresado = prompt("Error, reingrese productos de la lista", "termo mate o bombilla");
            }
            respuesta = prompt("¿Desea seguir agregando ventas?" + "si,no");
            while (respuesta != "si" && respuesta != "no") {
                respuesta = prompt("Ingrese si o no por favor únicamente");
            }    
            //Se aplica la funcion contadores
            contadores();
        }
    }

    //Proceso de contar y guardar cantidad     CONTADORES
    function contadores(){
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
    }

    //Lógica de productos
    function calcularProductos() {
        precioFinalTermo = precioTermo * contadorTermo;
        precioFinalMate = precioMate * contadorMate;
        precioFinalBombilla = precioBombilla * contadorBombilla;
        
        sumaFinalPrecios = precioFinalTermo + precioFinalMate + precioFinalBombilla;
        
        cantidadTotalDeProductos = contadorTermo + contadorMate + contadorBombilla;
    }

    //Cálculo de descuentos
    function calcularDescuento() {
        if (cantidadTotalDeProductos >= 3) {
            mensajeDescuento = "Felicidades, por su compra obtuvo un 10% de descuento";
            precioConDescuento = sumaFinalPrecios / descuentoDel10;
        } else if (cantidadTotalDeProductos == 2) {
            mensajeDescuento = "Cómpre 3 unidades o más y obtendrá un 10% de descuento";
            precioConDescuento = 0;
        } else {
            mensajeDescuento = "No hay descuento";
            precioConDescuento = 0;
        }
        precioFinal = sumaFinalPrecios - precioConDescuento;
    }

    
    //Mostrar compra final
    function mostrarProductos(){
        mensaje = `Usted compró: <br>
        ${contadorTermo} termo/s, <br>
        ${contadorMate} mate/s, <br>
        ${contadorBombilla} bombillas/s, <br>
        El precio final a pagar es de $${precioFinal}
        ${mensajeDescuento}`;

        document.write(mensaje);
    }

//Invocar funciones
buscarProductos();
ingresarProductos();
calcularProductos();
calcularDescuento();
mostrarProductos();