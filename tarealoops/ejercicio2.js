/*Realizar un programa que pida la carga de dos vectores numéricos enteros de 4
elementos. Obtener la suma de los dos vectores, dicho resultado guardarlo en un
tercer vector del mismo tamaño. Sumar componente a componente*/

Ext.onReady(function(){
	
	// vectores
	var vec1 = new Array();
	var vec2 = new Array();
	var vec3 = new Array();
	
	
	// procesos
	for (i = 0 ; i < 4 ; i++) {
		vec1[i]= parseInt(prompt("Ingrese el valor " +i+ " para el vector 1--> "))
		vec2[i]= parseInt(prompt("Ingrese el valor " +i+ " para el vector 2--> "))
	}
	
	for (i = 0; i < vec1.length; i++) {
		vec3[i] = vec1[i] +vec2[i];
	}
	
	//resultados
	alert("El vecto es " + vec3)
});