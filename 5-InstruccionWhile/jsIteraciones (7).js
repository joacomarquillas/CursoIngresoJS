function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si")
	{
		
		numeroIngresado=prompt("ingreseNumero");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador + 1;
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("ingresa 'si' o de lo contrario sale")

	}
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN