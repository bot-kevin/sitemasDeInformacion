/*
Desarrollar un programa que permita ingresar un vector de 12 Productos (Clase) de
los cuales se debe capturar Nombre, Categoría, Precio Neto, Precio Total e IVA., y
que permita

a) Calcular el acumulado del valor total de los Productos del vector de Categoría
Granos.
b) Calcular el promedio del valor neto de los Productos del vector de Categoría
Lácteos.
c) Calcular el acumulado del valor neto de los Productos del vector de Categoría
Verduras.
d) Calcular el promedio del valor total de los Productos del vector de Categoría Aseo.

*/

Ext.onReady(function(){
	
	function Producto (nombre, categoria,precioNeto, precioTotal, IVA){		
		this.nombre = nombre;
		this.categoria = categoria;
		this.precioNeto = precioNeto;
		this.precioTotal = precioTotal;
		this.IVA = IVA;
	}
	
	var vecProductos = new Array();
	var acuValorTotalGranos = 0;
	
	var acuValorNetoLacteos = 0;
	var cantidadLacteos = 0;
	var promedioValorNetoLacteos = 0;
	
	var acuValorNetoVegetales = 0;
	
	var acuValorTotalAseo = 0;
	var cantidadAseo = 0;
	var promedioValorTotalAseo = 0;
	
	for (i=0; i<10; i++) {		
		var nombre = prompt('Ingrese el nombre del producto '+(i+1));
		var categoria = prompt('Ingrese la categoría del producto '+(i+1));
		var precioNeto = parseFloat(prompt('Ingrese la precio neto del producto: '+(i+1)));		
		var IVA = 19;
		var precioTotal = precioNeto + ((precioNeto*19)/100)
		
		vecProductos[i] = new Producto(nombre,categoria,precioNeto,precioTotal,IVA);		
	
		// valor acumulado de categoria granos
		if (vecProductos[i].categoria  == "granos") {
			acuValorTotalGranos += vecProductos[i].precioTotal;
		}
		
		//acumulado del valor neto lacteos
		if (vecProductos[i].categoria == "lacteos") {
			cantidadLacteos++;
			acuValorNetoLacteos += vecProductos[i].precioNeto;
		}
		
		// valor acumulado de categoria vegetales
		if (vecProductos[i].categoria  == "vegetales") {
			acuValorNetoVegetales += vecProductos[i].precioNeto;
		}
		
		//acumulado del valor total aseo
		if (vecProductos[i].categoria == "aseo") {
			cantidadAseo++;
			acuValorTotalAseo += vecProductos[i].precioTotal;
		}
	}
	
	//promedio del valor neto lacteos
	promedioValorNetoLacteos =  acuValorNetoLacteos	/ cantidadLacteos;
	
	//promedio del valor total aseo
	promedioValorTotalAseo = acuValorTotalAseo / cantidadAseo;
	
	
	console.log(vecProductos);
	document.write("El acumulado del valor total de los Productos del vector de Categoría Granos: "+acuValorTotalGranos + "<br>");
	document.write("El promedio del valor neto de los Productos del vector de Categoría Lácteos: "+promedioValorNetoLacteos+ "<br>");
	document.write("el acumulado del valor neto de los Productos del vector de Categoría Verduras"+acuValorNetoVegetales+ "<br>");
	document.write("El promedio del valor total	de los Productos del vector de Categoría Aseo: "+promedioValorTotalAseo+ "<br>");
	
	
	
	
	
	
	
});




