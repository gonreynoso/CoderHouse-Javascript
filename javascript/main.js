//Primer desafío entregable Gonzalo Reynoso


function introducirClave(){

	let claveIngresada = prompt("Ingrese su clave");
	let intento = 0;



	while (claveIngresada != "celular") {
		
		intento++
		alert("Código incorrecto" + " Pista: celular" + " Intento Nro" + intento);
		claveIngresada = prompt("Ingrese palabra clave");
	}

	if(claveIngresada == "celular"){
		alert("Código correcto - Bienvenido" )
		}

}

introducirClave();