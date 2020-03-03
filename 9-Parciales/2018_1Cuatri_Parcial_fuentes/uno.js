/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var nombre;
	var cantidaDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var maximoDePersonas;
	var maximoDePersonasNombre;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfectivo;
	var formaDePagoMasUtilizada;


	respuesta="si";
	contador=0;
	contadorQR=0;
	contadorTarjeta=0;
	contadorEfectivo=0;
	acumulador=0;


	while(respuesta=="si")
	{
		nombre=prompt("Ingrese nombre");

		cantidaDePersonas=prompt("Ingrese cantidad de personas");
		cantidaDePersonas=parseInt(cantidaDePersonas);
		while(isNaN(cantidaDePersonas) || cantidaDePersonas < 1)
		{
			cantidaDePersonas=prompt("Ingrese cantidad de personas");
			cantidaDePersonas=parseInt(cantidaDePersonas)
		}	

		cantidadDeDias=prompt("Ingrese cantidad de personas");
		cantidadDeDias=parseInt(cantidadDeDias);
		while(isNaN(cantidadDeDias) || cantidadDeDias < 1)
		{
			cantidadDeDias=prompt("Ingrese cantidad de personas");
			cantidadDeDias=parseInt(cantidaDePersonas);
		}	

		formaDePago=prompt("Ingrese forma de pago");
		while(!isNaN(formaDePago) || formaDePago != "QR" && formaDePago != "tarjeta" && formaDePago != "efectivo")
		{
			formaDePago=prompt("Ingrese forma de pago");
		}

	    console.log("personas :" + cantidaDePersonas);
	    console.log("dias :" + cantidadDeDias);
	    console.log("formaDePago : " + formaDePago);

		if(contador==0 || maximoDePersonas<cantidaDePersonas) //por cada maximo o minimo es un if 
		{
			maximoDePersonas=cantidaDePersonas;
			maximoDePersonasNombre=nombre;
		} /*else
		{
			if(maximoDePersonas<cantidaDePersonas)
			{
				maximoDePersonas=cantidaDePersonas;
				maximoDePersonasNombre=nombre;
			}	
		}*/
		if(contador==0 || maximoDeDias<cantidadDeDias) //por cada maximo o minimo es un if 
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidadDePersonas=cantidaDePersonas;
		}

		switch(formaDePago)
		{
			 case "efectivo":
			 contadorEfectivo++;
			   break;
			 case "tarjeta":
			 contadorTarjeta++;
			   break;
			 default:
			 contadorQR++;
			 break;  


		}


		contador++;
		respuesta = prompt ("desea continuar"); 
	}//termina while

		if(contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorQR)
		{
			formaDePagoMasUtilizada = "efectivo";

		}else
		{
			if(contadorQR>contadorTarjeta)
			{
				formaDePagoMasUtilizada = "QR";
			}else
			{
				formaDePagoMasUtilizada = "tarjeta";
			}	
		}	


		promedio=acumulador/contador;
		console.log("maximo personas " + maximoDePersonasNombre);
		console.log("maximo dias: " + maximoDeDiasCantidadDePersonas);	
		console.log("forma de pago mas utilizada " + formaDePagoMasUtilizada);


		document.write ("<br> nombre del huesped con mas invitados: " + maximoDePersonasNombre);
		document.write ("<br> cantidad de personas que se quedaron mas dias: " + maximoDeDiasCantidadDePersonas);
		document.write ("<br> forma de pago mas ultilizada: " + formaDePagoMasUtilizada);

}		

