//GONZALO REYNOSO PROYECTO FINAL


//CONSTANTES


const listaProductosParrilla = document.getElementById("lista-productos");

document.addEventListener('DOMContentLoaded',() => {
  fetchDataParrillas();
  if (localStorage.getItem('carrito')) {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
    mostrarCarrito()
  }
})

//RENDERIZACION PRODUCTOS PARRILLAS
const fetchDataParrillas = async () => {
    const listaProductosParrilla = document.getElementById("lista-productos");
    try {
        //codigo peligroso en caso de que el servidor esté caído
        const response = await fetch("https://raw.githubusercontent.com/gonreynoso/CoderHouse-Javascript/main/javascript/parrillas.json");
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
            listaProductosParrilla.append(renderizado);
            const botonAgregarCarrito = document.getElementById(producto.id);
            botonAgregarCarrito.addEventListener("click", () => agregarAlCarrito(producto));
        });
    } catch (error) {
        console.log(error);
    }
}