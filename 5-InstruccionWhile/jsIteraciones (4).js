function mostrar()
{

	var numero;
	numero= prompt("ingrese un número entre 0 y 9.");
	numero=parseInt(numero);
	var valorDeVerdad= isNaN(numero);
	//numero=parsent(numero); 
	
	while(isNaN(numero) || numero <0  || numero >10)
	{
		numero = prompt("ingrese un número entre 0 y 9.");
	}

	document.getElementById('numero').value;


	//var valorDeVerdad= isNaN(numero);
		



}//FIN DE LA FUNCIÓN