/*
✓ Desarrollar un programa que permita ingresar un empleado de la empresa X (Clase)
del cual se debe capturar Nombre, Cedula, Edad, Salario, y que permita:
a) Calcular el valor Neto a ganar teniendo en cuenta que si el salario supera $ 879.000
le harán retención en la fuente (descuento) del 7,0%.
b) Calcular el valor que deberá pagar por concepto de Salud el cual es equivalente al
12,5%.
c) Calcular el valor que deberá pagar por concepto de Pensión el cual es equivalente
al 16,0%.
d) Calcular el valor que deberá pagar por concepto de Riesgos Profesionales ARL el
cual es equivalente al 3,5%.
*/

Ext.onReady(function(){
	
	function Empleado (nombre,cedula,edad,salario){		
		this.nombre = nombre;
		this.cedula = cedula;
		this.edad = edad;
		this.salario = salario;
	}
	
	
	var nombre = prompt('Ingrese el nombre del empleado');
	var cedula  = prompt('Ingrese la cedula del empleado');
	var edad = prompt('Ingrese la edad del empleado');
	var salario = parseFloat(prompt('Ingrese el salario del empleado'));
	
	var miEmpleado = new Empleado(nombre,cedula,edad,salario);			
	
	// valor neto
	function calcular_valorneto(miEmpleado){
		if (miEmpleado.salario >  879000 ){
			var valor_neto = miEmpleado.salario - ((miEmpleado.salario*7)/100)
			return valor_neto;
		}		
	}
	
	// concepto salud
	function calcular_conceptoSalud(miEmpleado) {				 
		return 	(miEmpleado.salario*12.5)/100;
	}
	
	// concepto pension
	function calcular_conceptoPension(miEmpleado) {
		return 	(miEmpleado.salario*16)/100;
	}
	
	// concepto 
	function calcular_conceptoARL(miEmpleado) {
		return 	(miEmpleado.salario*3.5)/100;
	}
	document.write(calcular_valorneto(miEmpleado));
	document.write(calcular_conceptoSalud(miEmpleado));
	document.write(calcular_conceptoPension(miEmpleado));
	document.write(calcular_conceptoARL(miEmpleado));
	
		
		
});




