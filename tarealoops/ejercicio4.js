/*Realizar un programa que pida la base y la altura de múltiples triángulos rectángulos
y posteriormente calcule su área para saber si supera los 100 m2 o no, donde si el
área es mayor pida la base y la altura del siguiente triángulo rectángulo, de lo
contrario salga de la aplicación y muestre cuantos triángulos rectángulos tuvieron
un área mayor a 100 m2.*/

Ext.onReady(function(){
	
	//variables
	var base = 0;
	var altura = 0;
	var area = 0;
	var cantidad_mayor_area_100 = 0;
	
	// procosos
	while(true){
		base = parseFloat(prompt("Ingrese el base"))	;
		altura = parseFloat(prompt("Ingrese el altura"));	
		
		area  = (base*altura)/2
		
		if (area < 100 ) {
			break;
		} else {
			cantidad_mayor_area_100 ++;
		}			
	}
	
	// resultados
	alert("La cantidad mayor a 100 es " + cantidad_mayor_area_100);

});