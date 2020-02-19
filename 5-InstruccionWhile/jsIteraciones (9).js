function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;

	var respuesta='si';

	while(respuesta!='no')
	{
		contador = contador + 1;
		numeroIngresado=prompt("ingreseNumero");
		numeroIngresado=parseInt(numeroIngresado);//despues de getelem o prompt, nunca antes

		if(contador ==  1)
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
		}else
		{
			if(numeroIngresado > maximo)
			{
				maximo = numeroIngresado;
			}
			if (numeroIngresado<minimo);
			{
				minimo = numeroIngresado;
			}	
		}

		respuesta=prompt("Ingrese no, para salir");
	}



	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;





}//FIN DE LA FUNCIÓN