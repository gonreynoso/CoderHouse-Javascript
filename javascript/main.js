//GONZALO REYNOSO


//CONSTANTES
const listaProductos = document.getElementById("lista-productos");
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito').content;

//VARIABLES
let articulosCarrito = [];
let cantidadTotal = 0;



document.addEventListener('DOMContentLoaded',() => {
  fetchData();
})

//RENDERIZACION DE CARDS POR HTML
const fetchData = async () => {
  const listaProductos = document.getElementById("lista-productos");
  try {
    //codigo peligroso en caso de que el servidor esté caído
    const response = await fetch("https://raw.githubusercontent.com/gonreynoso/CoderHouse-Javascript/main/javascript/data.json");
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

const mostrarCarrito = () => {
  const items = document.createElement("template-carrito")
  items.innerHTML = `
  Object.values(articulosCarrito).forEach(producto => {
    templateCarrito.querySelector('th').textContent = producto.id
    templateCarrito.querySelectorAll('td')[0].textContent = producto.title
    templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
    templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
  `
  templateCarrito.append(items)

}
  


// function vaciarCarrito () {
//   btnVaciarCarrito.addEventListener('click', () => {
//     articulosCarrito = []; // reseteamos el arreglo
//     cantidadTotal = 0; // reseteamos la variable cantidadTotal
//     localStorage.removeItem("carrito");
//     // limpiarHTML(); // Eliminamos todo el HTML
//   })
// }


// btnVaciarCarrito.addEventListener('click', () =>{
//   vaciarCarrito();
// })

// FUNCION PARA BUSCAR EN EL CARRITO
// ERROR NO PUDE HACER EL BUSCADOR
// const buscarProducto = (string) => {
//     let productoBuscado = data.find(producto => producto.nombre.includes(string));
//     console.log(productoBuscado);
//     inputBusqueda.value = "";
//     console.log(productoBuscado);

//     inputBusqueda.addEventListener("click", () => console.log(botonBuscar.value));

// }

