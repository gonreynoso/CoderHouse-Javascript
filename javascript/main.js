//2DA PRE ENTREGA FINAL GONZALO REYNOSO
//STOCK DE PRODUCTOS
const stockProductos = [

    { id: 1, nombre: "Termo Stanley", marca: "Stanley", presentacion: "940ml", precio: 20, descripcion: "mejor termo", imagen: "https://www.stanleypmi.com.py/wp-content/uploads/2021/09/1-13.jpg" },
    { id: 2, nombre: "Mate Stanley", marca: "Stanley", presentacion: "240ml", precio: 10, descripcion: "mejor mate", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_615433-MLA46334848707_062021-F.webp" },
    { id: 3, nombre: "Bombilla Stanley", marca: "Stanley", presentacion: "18cm", precio: 20, descripcion: "mejor bombilla", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_874452-MLA49513557450_032022-F.webp" },
    { id: 4, nombre: "Linterna Indestructible Varta", marca: "VARTA", presentacion: "F20 Pro", precio: 20, descripcion: "linterna", imagen: "https://www.pescatienda.com/large/LINTERNA-INDESTRUCTIBLE-F10-PRO-VARTA-i30739.jpg" },
    { id: 5, nombre: "", marca: "", presentacion: "LED110 Lumens", precio: 20, descripcion: "linterna", imagen: "https://www.pescatienda.com/large/LINTERNA-FRONTAL-1-LED-110-LUMENS-i28429.jpg" },
    { id: 5, nombre: "Contador de metros", marca: "Yoshikawa", presentacion: "Z046", precio: 20, descripcion: "contador de metros", imagen: "https://www.pescatienda.com/large/Z046-CONTADOR-DE-METROS-YOSHIKAWA-%28Sin-caja%29-i30626.jpg" }
];

//CONSTANTES
const contenedorProductos = document.getElementById("contenedor-productos");
const inputBusqueda = document.getElementById("inputBusqueda");
const botonBuscar = document.getElementById("botonBuscar");
const botonIniciarSesion = document.getElementById("botonIniciarSesion");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");
const contenedorMensajeCarrito = document.getElementById("contenedor-mensaje-carrito");



//SOLICITAR USUARIO POR LOCALSTORAGE
botonIniciarSesion.addEventListener("click", () => {
    let usuario;
    let usuarioStorage = localStorage.getItem("usuario");
    if (usuarioStorage) {
                                                //alerta de SWEETALERT
        swal({
            title: `Bienvenido ${usuario}`,
            text: "Haz ingresado con éxito",
            icon: "success",
            button: "Cerrar",
        });
        usuario = usuarioStorage;
    } else {
        swal({
            text: 'Ingrese su usuario',
            content: "input",
            button: {
            text: "Aceptar",
            },
        });
        localStorage.setItem("usuario", usuario);
    };
});

//FUNCION PARA CERRAR SESION POR LOCALSTORAGE
botonCerrarSesion.addEventListener("click", () => {
    localStorage.clear();
                                                //alerta de SWEETALERT
    swal({
        title: `Sesión cerrada con éxito`,
        icon: "success",
        button: "Cerrar",
    });
})

//RENDERIZACION DE CARDS POR HTML
let carrito = [];
stockProductos.forEach(producto => {
    const renderizado = document.createElement("div");
    renderizado.innerHTML =
        `
    <img class= "imagenCards" src = ${producto.imagen} alt "">
    <h3>${producto.nombre}</h3>
    <h4>${producto.marca}</h4>
    <h4>${producto.presentacion}</h4>
    <p>${producto.descripcion}<p/><br>
    <span>Precio: $${producto.precio}<span/><br>
    <button id=${producto.id}>Agregar al carrito</button><br>
    `
    contenedorProductos.append(renderizado);
    const boton = document.getElementById(producto.id);
    boton.addEventListener("click", () => agregarAlCarrito(producto));
})


//ACA TRATÉ DE CREAR UN INNERHTML PARA MOSTRAR EL CARRITO SELECCIONADO

// carrito.forEach(producto => {
//     const productoComprado = document.createElement("div");
//     productoComprado.innerHTML = 
//     `
//     Usted compró ${carrito.nombre}, ${carrito.marca}, 
//     ${carrito.presentacion}, y el precio total a pagar es de $${carrito.precio}
//     `
//     contenedorMensajeCarrito.append(productoComprado);
// })

//FUNCION PARA AGREGAR AL CARRITO
// Abrir consola y ver la compra efectuada
const agregarAlCarrito = (producto) => {
    let productoExistente = carrito.find(item => item.id === producto.id)
    if (productoExistente !== undefined) {
        productoExistente.precio = productoExistente.precio + productoExistente.precio;
        productoExistente.cantidad = productoExistente.cantidad + 1;
    } else {
        carrito.push({
            id: producto.id,
            imagen: producto.imagen,
            nombre: producto.nombre,
            marca: producto.marca,
            precio: producto.precio,
            presentacion: producto.presentacion,
            descripcion: producto.descripcion,
            cantidad: 1
        })
    }
    const boton = document.getElementById(producto.id);
    boton.addEventListener("click", () => console.log(carrito));
}

//FUNCION PARA BUSCAR EN EL CARRITO
//ERROR NO PUDE HACER EL BUSCADOR
const buscarProducto = (string) => {
    let productoBuscado = stockProductos.find(producto => producto.nombre.includes(string));
    console.log(productoBuscado);
    inputBusqueda.value = "";
    console.log(productoBuscado);

    inputBusqueda.addEventListener("click", () => console.log(botonBuscar.value));

}

