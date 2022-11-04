//GONZALO REYNOSO


//CONSTANTES

const carrito = document.getElementById("carrito");
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.getElementById("lista-productos");
const productosCarrito = document.getElementById('productos-carrito');
let articulosCarrito = [];
let cantidadTotal = 0;




//RENDERIZACION DE CARDS POR HTML

const traerProductos = async () => {
  const listaProductos = document.getElementById("lista-productos");
  try {
    //codigo peligroso en caso de que el servidor esté caído
    const response = await fetch("https://raw.githubusercontent.com/gonreynoso/CoderHouse-Javascript/main/javascript/data.json");
    const data = await response.json();

    data.forEach(producto => {
      const renderizado = document.createElement("lista-productos");
      renderizado.innerHTML =
        `
        <container class= "container-fluid>
          <div class="row">
              <div class="col-sm-6">
                  <div class="card">
                      <img src= ${producto.imagen} class="card-img-top p-3" alt="tarjeta-de-productos">
                      <div class="card-body p-3">
                          <h5 class="card-title">${producto.nombre}</h5>
                          <h5 class="card-title">${producto.marca}</h5>
                          <p class="card-text">${producto.presentacion}.</p>
                          <span class="precio">Precio: $${producto.precio}<span/><br>
                          <p class="card-text">${producto.descripcion}.</p>
                          <button id="${producto.id}" class="btn btn-primary agregar-carrito">Agregar al carrito</button>
                  </div>
              </div>
          </div>
        </container>
    `
      listaProductos.append(renderizado);
      const boton = document.getElementById(producto.id);
      boton.addEventListener("click", () => agregarAlCarrito(producto));
    });
  } catch (error) {
    console.log(error);
  }
}

traerProductos();

// FUNCION PARA AGREGAR AL CARRITO
// Abrir consola y ver la compra efectuada
const agregarAlCarrito = (producto) => {
    let productoExistente = articulosCarrito.find(item => item.id === producto.id)
    if (productoExistente !== undefined) {
        productoExistente.precio = productoExistente.precio + productoExistente.precio;
        productoExistente.cantidad = productoExistente.cantidad + 1;
    } else {
      articulosCarrito.push({
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
    boton.addEventListener("click", () => (articulosCarrito));
    console.log(articulosCarrito);

}



//   // Elimina productos del carrito
//   carrito.addEventListener('click', eliminarProducto);

//   // Muestra los productos de local Storage y calculamos total a pagar
//   document.addEventListener('DOMContentLoaded', () => {
//     articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

//     carritoHTML();
//   })

//   // Vaciar el carrito
//   vaciarCarritoBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     productosCarrito.style.display = "none"
//     articulosCarrito = []; // reseteamos el arreglo
//     cantidadTotal = 0; // reseteamos la variable cantidadTotal
//     localStorage.removeItem("carrito");
//     limpiarHTML(); // Eliminamos todo el HTML
//   })
// }

// function agregarProducto(e) {

//   e.preventDefault();

//   if (e.target.classList.contains('agregar-carrito')) {
//     const productoSeleccionado = e.target.parentElement.parentElement;
//     leerDatosProducto(productoSeleccionado);
//   }
// }

// // Elimina un producto del carrito
// function eliminarProducto(e) {
//   if (e.target.classList.contains('borrar-producto')) {
//     e.preventDefault();
//     const productoId = e.target.getAttribute('data-id')

//     // Elimina del arreglo de articulosCarrito por el data-id
//     articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

//     carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
//   }
// }

// // Lee el contenido del HTML al que le dimos click y extrae la información del producto
// function leerDatosProducto(producto) {

//   // Crear un objeto con el contenido del producto actual
//   const infoProducto = {
//     imagen: producto.querySelector('img').src,
//     nombre: producto.querySelector('h4').textContent,
//     precio: Number(producto.querySelector('.precio span.precio-rebajado').innerText),
//     id: producto.querySelector('a').getAttribute('data-id'),
//     cantidad: 1,
//     total: 0
//   }

//   infoProducto.total = infoProducto.precio * infoProducto.cantidad;

//   // Revisa si un elemento ya existe en el carrito
//   const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
//   if (existe) {
//     const productos = articulosCarrito.map(producto => {
//       if (producto.id === infoProducto.id) {
//         producto.cantidad++;
//         producto.total = producto.cantidad * producto.precio;

//         return producto; // retorna el objeto actualizado
//       } else {
//         return producto; // retorna los objetos que no son los duplicados
//       }
//     });
//     articulosCarrito = [...productos];
//   } else {
//     // Agrega elementos al arreglo de carrito
//     articulosCarrito = [...articulosCarrito, infoProducto];
//   }

//   console.log(articulosCarrito);

//   carritoHTML();
// }

// // Muestra el carrito de compras en el HTML
// function carritoHTML() {
//   let cantidadProductos = 0;

//   articulosCarrito.length > 0 ? productosCarrito.style.display = "block" : productosCarrito.style.display = "none"

//   // Limpia el HTML
//   limpiarHTML();

//   // Recorre el carrito y genera el HTML
//   // articulosCarrito.forEach(producto => {
//   //   const { imagen, nombre, precio, cantidad, total, id } = producto;
//   //   const row = document.createElement('tr');
//   //   row.innerHTML = `
//   //     <td><img src="${imagen}" width="100"></td>
//   //     <td>${nombre}</td>
//   //     <td>$${precio}</td>
//   //     <td>${cantidad}</td>
//   //     <td>$${total}</td>
//   //     <td><a href="#" class="borrar-producto" data-id="${id}"> X </a></td>
//   //   `;

//     // Agrega el HTML del carrito en el tbody
//   //   contenedorCarrito.appendChild(row);
//   // });

//   // obtenemos la cantidad total de productos y lo mostramos junto al carrito
//   for (let i = 0; i < articulosCarrito.length; i++) {
//     cantidadProductos += articulosCarrito[i].cantidad
//   }

//   if (cantidadProductos != 0) {
//     productosCarrito.innerHTML = cantidadProductos;
//   }

//   // Agregar el carrito de compras al storage
//   sincronizarStorage();

// }

// function sincronizarStorage() {
//   localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
// }

// // Elimina los productos del tbody
// function limpiarHTML() {
//   while (contenedorCarrito.firstChild) {
//     contenedorCarrito.removeChild(contenedorCarrito.firstChild);
//   }

//   productosCarrito.innerHTML = "";
// }


// const inputBusqueda = document.getElementById("inputBusqueda");
// const botonBuscar = document.getElementById("botonBuscar");
// const botonIniciarSesion = document.getElementById("botonIniciarSesion");
// const botonCerrarSesion = document.getElementById("botonCerrarSesion");
// const contenedorMensajeCarrito = document.getElementById("contenedor-mensaje-carrito");



// //SOLICITAR USUARIO POR LOCALSTORAGE
// botonIniciarSesion.addEventListener("click", () => {
//   let usuario;
//   let usuarioStorage = localStorage.getItem("usuario");
//   if (usuarioStorage) {
//     //alerta de SWEETALERT
//     swal({
//       title: `Bienvenido ${usuario}`,
//       text: "Haz ingresado con éxito",
//       icon: "success",
//       button: "Cerrar",
//     });
//     usuario = usuarioStorage;
//   } else {
//     swal({
//       text: 'Ingrese su usuario',
//       content: "input",
//       button: {
//         text: "Aceptar",
//       },
//     });
//     localStorage.setItem("usuario", usuario);
//   };
// });

// //FUNCION PARA CERRAR SESION POR LOCALSTORAGE
// botonCerrarSesion.addEventListener("click", () => {
//   localStorage.clear();
//   //alerta de SWEETALERT
//   swal({
//     title: `Sesión cerrada con éxito`,
//     icon: "success",
//     button: "Cerrar",
//   });
// })





//FUNCION PARA AGREGAR AL CARRITO
// Abrir consola y ver la compra efectuada
// const agregarAlCarrito = (producto) => {
//     let productoExistente = carrito.find(item => item.id === producto.id)
//     if (productoExistente !== undefined) {
//         productoExistente.precio = productoExistente.precio + productoExistente.precio;
//         productoExistente.cantidad = productoExistente.cantidad + 1;
//     } else {
//         carrito.push({
//             id: producto.id,
//             imagen: producto.imagen,
//             nombre: producto.nombre,
//             marca: producto.marca,
//             precio: producto.precio,
//             presentacion: producto.presentacion,
//             descripcion: producto.descripcion,
//             cantidad: 1
//         })
//     }
//     const boton = document.getElementById(producto.id);
//     boton.addEventListener("click", () => (productosCarrito));

// }

// //FUNCION PARA BUSCAR EN EL CARRITO
// //ERROR NO PUDE HACER EL BUSCADOR
// // const buscarProducto = (string) => {
// //     let productoBuscado = stockProductos.find(producto => producto.nombre.includes(string));
// //     console.log(productoBuscado);
// //     inputBusqueda.value = "";
// //     console.log(productoBuscado);

// //     inputBusqueda.addEventListener("click", () => console.log(botonBuscar.value));

// // }

