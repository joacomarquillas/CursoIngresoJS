function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var nota;
	var respuesta;

	respuesta = "si";

	while(respuesta="si")
	{
		nombre=prompt("ingrese nombre");
		edad=prompt("ingrese edad");
		edad=parseInt(edad);

		while(isNaN(edad)|| (edad>12 || edad<70) 
		{
			edad=prompt("ingrese edad");
			edad=parseInt(edad);
		}	
	}		


}	

