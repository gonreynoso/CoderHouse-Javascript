
// //VARIABLES

// let productoIngresado;
// let sumaFinalPrecios;
// let precioTermo = 40;
// let precioMate = 30;
// let precioBombilla = 10;
// let contadorTermo = 0;
// let contadorMate = 0;
// let contadorBombilla = 0;
// let descuentoDel10 = 10;
// let precioFinalTermo;
// let precioFinalMate;
// let precioFinalBombilla;
// let mensajeDescuento;
// let mensaje;
// let mostrar;
// let productos;
// let articulos;
// let cantidadTotalDeProductos;
// let precioConDescuento;
// let precioFinal;
// let productoEncontrado;


//     //Proceso de contar y guardar cantidad     CONTADORES
//     function contadores(){
//         switch (productoIngresado) {
//         case "termo":
//             contadorTermo++;
//             break;
    
//         case "mate":
//             contadorMate++;
//             break;
    
//         case "bombilla":
//             contadorBombilla++;
//             break;
//         }
//     }

//     //Lógica de productos
//     function calcularProductos() {
//         precioFinalTermo = precioTermo * contadorTermo;
//         precioFinalMate = precioMate * contadorMate;
//         precioFinalBombilla = precioBombilla * contadorBombilla;
        
//         sumaFinalPrecios = precioFinalTermo + precioFinalMate + precioFinalBombilla;
        
//         cantidadTotalDeProductos = contadorTermo + contadorMate + contadorBombilla;
//     }

//     //Cálculo de descuentos
//     function calcularDescuento() {
//         if (cantidadTotalDeProductos >= 3) {
//             mensajeDescuento = "Felicidades, por su compra obtuvo un 10% de descuento";
//             precioConDescuento = sumaFinalPrecios / descuentoDel10;
//         } else if (cantidadTotalDeProductos == 2) {
//             mensajeDescuento = "Cómpre 3 unidades o más y obtendrá un 10% de descuento";
//             precioConDescuento = 0;
//         } else {
//             mensajeDescuento = "No hay descuento";
//             precioConDescuento = 0;
//         }
//         precioFinal = sumaFinalPrecios - precioConDescuento;
//     }

    
//     //Mostrar compra final
//     function mostrarProductos(){
//         mensaje = `Usted compró: <br>
//         ${contadorTermo} termo/s, <br>
//         ${contadorMate} mate/s, <br>
//         ${contadorBombilla} bombillas/s, <br>
//         El precio final a pagar es de $${precioFinal}
//         ${mensajeDescuento}`;

//         document.write(mensaje);
//     }

//     //CONTRUCTOR DE PRODUCTOS
//     //Forma antigua de crear CONSTRUCTOR
//     // function CrearProducto(titulo, imagen, descripcion){
//     //     this.titulo = titulo;
//     //     this.imagen = imagen;
//     //     this.descripcion = descripcion;
//     // }

//     // const productoTermo = new CrearProducto('Mate Stanley', 'imagen', 'El mate Stanley es el mejor');

//     //Forma mas nueva de crear un CONSTRUCTOR con CLASS y un objeto por párametro en vez de muchos parámetros
//     class CrearProducto{   
//         constructor(datos){
//             this.id = datos.id;
//             this.titulo = datos.titulo;
//             this.imagen = datos.imagen;
//             this.precio = datos.precio;
//             this.descripcion = datos.descripcion;
//             this.cantidad = datos.cantidad;
//             //this.vendido = datos.vendido;
//         }
//         vender(){
//             this.cantidad--;
//         }
//     };

//     const productoTermo = new CrearProducto(
//         {
//         id:1,
//         titulo: 'Termo Stanley',
//         imagen: 'https://m.media-amazon.com/images/I/71ao2vh5tDL._AC_SL1500_.jpg',
//         descripcion: 'El termo mantiene tus líquidos calientes o fríos durante 28 horas. El mate mantiene la temperatura durante toda la cebada, es práctico, fácil de limpiar e inocuo, ya que no transfiere ningún aroma ni sabor defectuoso a tu mate. Mantiene la temperatura al cliente durante 30 minutos y fría durante 3 horas.',
//         precio: 19000,
//         cantidad: 4,
//         vendido: 'no',
//         }
//     );

//     const productoMate = new CrearProducto(
//         {
//         id:2,
//         titulo: 'Mate Stanley',
//         imagen: 'https://d2ye0ltusw47tz.cloudfront.net/270469/mate-stanley-236-ml-black.jpg',
//         descripcion: 'Mantiene la temperatura durante toda la cebada - El práctico e higiénico - No traspasa sabores ni aromas a tu mate - Construido en acero 18/8 - Aislación de doble pared - Libre de BPA, aprobado por INAL - Mantiene 30 minutos el agua caliente, - 3 horas el frío. - Altura: 10,5 cm - Diámetro: 8 cm - Peso: 245gr - Presentación en caja de cartón individual.',
//         precio: 12000,
//         cantidad: 5,
//         vendido: 'no',
//         }
//     );

//     const productoBombilla = new CrearProducto(
//         {
//         id:3,
//         titulo: 'Bombilla Stanley',
//         imagen: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/105/855/products/a141c14b-a22d-4ea9-8f29-2844eff8b542-3913b5d5c8ab48bd0d16487363612924-640-0.png',
//         descripcion: 'Desde las más finas a las más gruesas, desde pura yerba, hasta mezclas de hierbas. usted controla el proceso! Atornilla para limitar o aumentar el flujo a tu gusto, la bombilla de resorte ajustable Stanley trae innovación a su momento de disfrutar de un buen mate.',
//         precio: 2000,
//         cantidad: 5,
//         vendido: 'no',
//         }
//     );


//     //Arreglo PRODUCTOS
//     productos = [];
//     productos.push(new CrearProducto(productoTermo));
//     productos.push(new CrearProducto(productoMate));
//     productos.push(new CrearProducto(productoBombilla));

//     //Forma de vender
//     // console.log(productoTermo);
//     // productoTermo.vender();
//     // console.log(productoTermo);

//     //Renderización de cards para el HTML
//     const div = document.getElementById("div");

//     productos.forEach(producto => {
//         productoRenderizado = document.createElement("div")
//         productoRenderizado.innerHTML = `
//         <h5>${producto.titulo}<h5/>
//         <img class="imagenCards "src="${producto.imagen}" alt="producto de camping"> <br>
//         <span>${producto.descripcion}<span/>
//         <span>precio: $${producto.precio}<span/><br>
//         <button id=${producto.id}>Agregar al carrito</button>`;

//         div.append(productoRenderizado);
//         const boton = document.getElementById(producto.id);
//         boton.addEventListener("click", () => buscarProducto(producto));
//     });

//     //Abrir consola y ver la compra efectuada
//     const buscarProducto = (producto) => {
//         console.log(`Compraste el producto ${producto.id} con el nombre ${producto.titulo} y tiene un precio de $${producto.precio}`);
//     }

    
// 1-Crear un array vacio llamado productos
// 2-crear una funcion crearProductos() que construya un objeto producto y pida las propiedades del producto.
// 3-Crear una funcion que agregue los productos al array productos

// let productos = [];
// let repetir = true;

// // clase Producto
// class Producto {
//     constructor(nombre, precio, cantidad) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }
// }

// // Función constructora Producto
// // function Producto(nombre, precio, cantidad) {
// //     this.nombre = nombre;
// //     this.precio = precio;
// //     this.cantidad = cantidad;
// // }

// function crearProducto() {
//     let nuevoProducto = [];
//     let nombre = "";
//     let precio = 0;
//     let cantidad = 0;

//     nombre = prompt("Introduzca el nombre del producto");
//     precio = Number(prompt("Introduzca el precio del producto"));
//     cantidad = Number(prompt("Introduzca la cantidad del producto"));

//     nuevoProducto = new Producto(nombre, precio, cantidad);

//     return nuevoProducto;
// }

// function agregarProductos() {
//     return productos.push(crearProducto());
// }

// while (repetir) {
//     let consulta;
//     alert("Introduzca los datos del producto.");
//     agregarProductos();

//     do {
//         consulta = Number(prompt("¿Desea introducir los datos de otro producto? Seleccione una opción(1 o 2) \n\n1- Si \n2- No"));
//         if (consulta == 1) {
//             alert("Ha seleccionado ingresar un nuevo producto");
//         } else if (consulta == 2) {
//             alert("Ha seleccionado no ingresar más productos");
//             repetir = false;
//         } else {
//             alert(":( Ha introducido una opción incorrecta, por favor selecciona la opción(1 o 2)");
//         }
//     }
//     while (consulta < 1 || consulta > 2);
// }

// console.log(productos);



