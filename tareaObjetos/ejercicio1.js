/*
✓ Desarrollar un Programa que permita ingresar un vector de 6 Estudiantes de
Programación (Clase) de los cuales se debe capturar Nombre, Edad, Nota. El
programa debe calcular:
a) El promedio de Edad de los estudiantes del Programación.
b) La nota más alta de los estudiantes del Programación.
c) La nota más baja de los estudiantes del Programación.
d) La cantidad de Estudiantes mayores de edad y menores de 21 que aprobaron la
asignatura de Programación.*/

Ext.onReady(function(){
	
	function Estudiante (nombre, edad,nota){		
		this.nombre = nombre;
		this.edad = edad;
		this.nota = nota;
	}
	
	var vecEstudiantes = new Array();
	var acumuladoEdad = 0;
	var	notaMax = 0;
	var notaMin = 99;
	var canEst_18_and_21_aprobaron = 0;
	
	for (i=0; i<5; i++) {		
		var nombre = prompt('Ingrese el nombre del estudiante '+(i+1));
		var edad = parseInt(prompt('Ingrese la edad del estudiante '+(i+1)));
		var nota = parseFloat(prompt('Ingrese la nota del estudiante '+(i+1)));
		
		vecEstudiantes[i] = new Estudiante(nombre,edad,nota);		
		
		// acumulado 
		acumuladoEdad += vecEstudiantes[i].edad;
		
		// nota mayor
		if ( vecEstudiantes[i].nota > notaMax ){
			notaMax = vecEstudiantes[i].nota;
		} 
		// nota menor
		if ( vecEstudiantes[i].nota < notaMin ) {
			notaMin = vecEstudiantes[i].nota;
		}
		// mayores de edad
		if ( (vecEstudiantes[i].edad >= 18 && vecEstudiantes[i].edad < 21) && vecEstudiantes[i].nota >= 3.0 ) {
			canEst_18_and_21_aprobaron++;
		}
		
	}
	
	var promedio = acumuladoEdad/vecEstudiantes.length;
	
	document.write("\n El promedio de la edad de los estudiantes es: " + promedio)
	//window.alert('La nota más de los estudiantes es: ' + Math.max(vecEstudiantes.edad))
	document.write('\n La nota mayor de los estudiantes es: ' + notaMax);
	document.write('\n La nota menor de los estudiantes es: ' + notaMin)
	document.write("\n La cantidad de Estudiantes mayores de edad y menores de 21 que aprobaron laasignatura de Programación.: "+ canEst_18_and_21_aprobaron)
	console.log(vecEstudiantes);
});




