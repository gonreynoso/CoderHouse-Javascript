//GONZALO REYNOSO


//CONSTANTES

const contenedorProductosPadre = document.getElementById("contenedor-productos-padre");
const inputBusqueda = document.getElementById("inputBusqueda");
const botonBuscar = document.getElementById("botonBuscar");
const botonIniciarSesion = document.getElementById("botonIniciarSesion");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");
const contenedorMensajeCarrito = document.getElementById("contenedor-mensaje-carrito");
let carrito = [];


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

const traerProductos = async () => {
    const contenedorProductosPadre = document.getElementById("contenedor-productos-padre");
    try {
        //codigo peligroso en caso de que el servidor esté caído
        const response = await fetch("https://raw.githubusercontent.com/gonreynoso/CoderHouse-Javascript/main/javascript/data.json");
        const data = await response.json();

        data.forEach(producto => {
            const renderizado = document.createElement("contenedor-productos-padre");
            renderizado.innerHTML =
                `
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="card">
                        <img src= ${producto.imagen} class="card-img-top" alt="tarjeta-de-productos">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.presentacion}.</p>
                            <span>Precio: $${producto.precio}<span/><br>
                            <p class="card-text">${producto.descripcion}.</p>
                            <button id="${producto.id}" class="btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            `
            contenedorProductosPadre.append(renderizado);
            const boton = document.getElementById(producto.id);
            boton.addEventListener("click", () => console.log(producto)); 
            // agregarAlCarrito(producto.id));
        });
    } catch (error) {
        console.log(error);
    }
};

traerProductos();



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
    // boton = document.getElementById(producto.id);
    // boton.addEventListener("click", () => console.log(carrito));

}

//FUNCION PARA BUSCAR EN EL CARRITO
//ERROR NO PUDE HACER EL BUSCADOR
// const buscarProducto = (string) => {
//     let productoBuscado = stockProductos.find(producto => producto.nombre.includes(string));
//     console.log(productoBuscado);
//     inputBusqueda.value = "";
//     console.log(productoBuscado);

//     inputBusqueda.addEventListener("click", () => console.log(botonBuscar.value));

// }

