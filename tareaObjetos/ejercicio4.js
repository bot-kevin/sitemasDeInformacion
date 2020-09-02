/*
✓ Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
a) El valor acumulado de todos los elementos del vector.
b) El valor acumulado de los elementos del vector que sean menores a 20.
c) Cantidad de valores mayores a 50.
NOTA: Realizar la solución en lenguaje JAVASCRIPT utilizando los tres tipos de ciclos
vistos en clase.

*/

Ext.onReady(function(){
	// arreglos
	var vec = new Array();
	
	// variables
	var acu = 0
	var acu_mayor_36 = 0
	var cantidad_mayor_50 = 0
	
	// captura valores
	for (i=0; i <=7; i++) {
		vec[i] = parseInt(prompt("Ingrese un elemento " +i+ "->"))			
	}
	
	
	// procesos
	for (i=0; i < vec.length; i++) {
		
		acu += vec[i];
		
		if (vec[i] > 36) {
			acu_mayor_36 += vec[i]
		}
		
		if (vec[i] > 50) {
			cantidad_mayor_50++;
		}
	}
	
	//resultado		
	alert("El valor acumulado es: "+ acu)
	alert("El acumulado de los valores mayores a 36 es: " + acu_mayor_36)
	alert("La cantidad de valores mayores a 50 es: " + cantidad_mayor_50)
	
});




