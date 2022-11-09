//GONZALO REYNOSO PROYECTO FINAL


//CONSTANTES
const listaProductos = document.getElementById("lista-productos");
const listaProductosParrilla = document.getElementById("lista-productos-parrilla");
const items = document.getElementById("items");
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito').content;
const botonInput = document.getElementById('boton-input');
const inputAfter = document.getElementById('input-after');
const botonIniciarSesion = document.getElementById('botonIniciarSesion');

//VARIABLES
let articulosCarrito = [];
let cantidadTotal = 0;



document.addEventListener('DOMContentLoaded',() => {
  fetchData();
  fetchDataParrillas();
  if (localStorage.getItem('carrito')) {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
    mostrarCarrito()
  }
})


//RENDERIZACION DE CARDS POR HTML
const fetchData = async () => {
  const listaProductos = document.getElementById("lista-productos");
  try {
    //codigo peligroso en caso de que el servidor esté caído
    const response = await fetch("https://raw.githubusercontent.com/gonreynoso/CoderHouse-Javascript/main/javascript/camping.json");
    const data = await response.json();

    data.forEach(producto => {
      const renderizado = document.createElement("lista-productos");
      renderizado.innerHTML =
        `
    <div class= "container-fluid>
      <div class="row">
          <div class="col-12-mb-2 col-md-4 m-4">
              <div class="card">
                <img src= ${producto.imagen} class="card-img-top p-3 " alt="tarjeta-de-productos">
                <div class="card-body p-3">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <h5 class="card-title">${producto.marca}</h5>
                    <p class="card-text">${producto.presentacion}.</p>
                    <span class="precio">Precio: $${producto.precio}<span/><br>
                    <p class="card-text">${producto.descripcion}.</p>
                    <button id="${producto.id}" class="btn btn-dark agregar-carrito">Agregar al carrito</button>
              </div>
          </div>
      </div>
    </div>
    
    `
      listaProductos.append(renderizado);
      const botonAgregarCarrito = document.getElementById(producto.id);
      botonAgregarCarrito.addEventListener("click", () => agregarAlCarrito(producto));
    });
  } catch (error) {
    console.log(error);
  }
}


//RENDERIZACION PRODUCTOS PARRILLAS
const fetchDataParrillas = async () => {
  const listaProductosParrilla = document.getElementById("lista-productos-parrilla");
  try {
    //codigo peligroso en caso de que el servidor esté caído
    const response = await fetch("https://raw.githubusercontent.com/gonreynoso/CoderHouse-Javascript/main/javascript/parrillas.json");
    const data = await response.json();

    data.forEach(producto => {
      const renderizado = document.createElement("lista-productos-parrilla");
      renderizado.innerHTML =
        `
    <div class= "container-fluid>
      <div class="row">
          <div class="col-12-mb-2 col-md-4 m-4">
              <div class="card">
                <img src= ${producto.imagen} class="card-img-top p-3 " alt="tarjeta-de-productos">
                <div class="card-body p-3">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <h5 class="card-title">${producto.marca}</h5>
                    <p class="card-text">${producto.presentacion}.</p>
                    <span class="precio">Precio: $${producto.precio}<span/><br>
                    <p class="card-text">${producto.descripcion}.</p>
                    <button id="${producto.id}" class="btn btn-dark agregar-carrito">Agregar al carrito</button>
              </div>
          </div>
      </div>
    </div>
    
    `
      listaProductosParrilla.append(renderizado);
      const botonAgregarCarrito = document.getElementById(producto.id);
      botonAgregarCarrito.addEventListener("click", () => agregarAlCarrito(producto));
    });
  } catch (error) {
    console.log(error);
  }
}

// AGREGAR AL CARRITO
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
  mostrarCarrito();

}


//Captura el carrito en el DOM y lo muestra
const mostrarCarrito = () => {
  items.innerHTML = ''

  articulosCarrito.forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad

        const clone = templateCarrito.cloneNode(true)
        items.appendChild(clone)
  })

  localStorage.setItem('carrito', JSON.stringify(articulosCarrito))

  mostrarFooter();
}



//Proceso para mostrar el total del carrito
const mostrarFooter = () => {

  footer.innerHTML = ''
    
    if(articulosCarrito.length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío, comience a comprar</th>
        `
        return
    }
    // sumar cantidad y sumar totales
    const nCantidad = articulosCarrito.reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = articulosCarrito.reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    items.appendChild(clone)


    //Vaciar carrito
    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        articulosCarrito = []
        mostrarCarrito()
    })


    //Comprar carrito
    const botonComprar = document.querySelector('#comprar-carrito')
    botonComprar.addEventListener('click', () => {
      swal({
        title: `Compra realizada con éxito`,
        icon: "success",
        button: "Cerrar",
      })
      articulosCarrito = []
      mostrarCarrito()
    })
  };

//INICIAR SESION POR SWEETALERT
botonIniciarSesion.addEventListener("click", () => {
  let usuario;
  let usuarioStorage = localStorage.getItem("usuario");
    Swal.fire({
      title: "ingrese su nombre",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Bienvenido ${result.value}`,
        });
        localStorage.setItem("usuario", usuario);
      }
    });
  }
)


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

