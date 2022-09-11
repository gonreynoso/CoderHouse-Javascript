//Primer desafío entregable Gonzalo Reynoso


function introducirClave(){

	let claveIngresada = prompt("Ingrese su clave");
	let intento = 0;

	while (claveIngresada != "celular") {
		
		intento++
		alert("Código incorrecto" + " Pista: celular" + " Intento Nro" + intento);
		claveIngresada = prompt("Ingrese palabra clave");
	}

	if(claveIngresada === "celular"){
		alert("Código correcto - Bienvenido" )
		}

}

introducirClave();


// function calcularPrecios(){


// 	let productoIngresado = prompt('Ingrese un producto de la lista, el precio final acumulado será mostrado al final',' $10 termo  $5 mate o $2 bombilla');
// 	let respuesta = "si";
// 	let sumaDeTotales = 1;




// 	while (respuesta == "si") {
// 		while (productoIngresado != "termo" || productoIngresado != "mate" != productoIngresado != "bombilla"){
// 			productoIngresado = prompt("Error, reingrese productos de la lista","termo mate o bombilla");
// 		}
		
// 	}

// 	contadorTermo = productoIngresado 

// 	sumaDeTotales = 


// 	alert(productoIngresado);
// }

// calcularPrecios();


