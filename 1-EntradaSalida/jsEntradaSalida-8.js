/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	dividendo=document.getElementById('numeroDividendo').value;
	dividendo=parseInt(dividendo)
	console.log("ingreso : "+dividendo)

	divisor=document.getElementById('numeroDivisor').value;
	divisor=parseInt(divisor)
	console.log("ingreso : "+divisor)

	resto=dividendo % divisor;

	console.log(resto)



}
