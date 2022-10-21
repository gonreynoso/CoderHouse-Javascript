//GONZALO REYNOSO


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
fetch("./televisores.json")
.then(response => response.json())
.then(televisores => {
    televisores.forEach(producto => {
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
})


//ACA TRATÉ DE CREAR UN INNERHTML PARA MOSTRAR EL CARRITO SELECCIONADO

// carrito.forEach(carrito => {
//     const productoComprado = document.createElement("div");
//     productoComprado.innerHTML = 
//     `
//     <p>Usted compró ${carrito.nombre}, ${carrito.marca}, 
//     ${carrito.presentacion}, y el precio total a pagar es de $${carrito.precio}<p/>
//     `
//     contenedorMensajeCarrito.append(productoComprado);
//     boton.addEventListener("click", () => mostrarCarrito(carrito));
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

