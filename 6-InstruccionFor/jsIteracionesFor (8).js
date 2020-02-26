function mostrar()
{

	var numero;
	var i; //interaccion.
	var bandera; //puede llamarse contador.

	bandera=0;
	numero=prompt("Ingrese numero");
	numero=parseInt(numero);

	for (i=2;i<numero;i++) //empiezo en 2. 
	{
		//console.log(i);
		if (numero%i==0)
		{
			bandera=1; //++; funciona como contador y = 1 funciona como bandera
			//break;
		}
	}

	if(bandera==0)
	{
		alert("el numero es primo " + numero);
	}	





}//FIN DE LA FUNCIÓN