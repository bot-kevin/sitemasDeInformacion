
/*Se tienen las notas del primer parcial de los alumnos de dos cursos, el curso A y el
curso B, cada curso cuenta con 5 alumnos.
Realizar un programa que muestre el curso que obtuvo el mayor promedio general.*/

Ext.onReady(function(){
	// vectores
	var cursoA = new Array();
	var cursoB = new Array();
	
	var promedioA = 0.0
	var promedioB = 0.0
	
	
	// procesos
	for (i = 0 ; i < 5 ; i++) {
		cursoA[i]= parseFloat(prompt("Ingrese la nota " +i+ " para el curso A--> "))
		cursoB[i]= parseFloat(prompt("Ingrese la nota " +i+ " para el curso B--> "))
	}
	
	for (i = 0; i < cursoA.length; i++) {
		promedioA += cursoA[i]  / cursoA.length
		promedioB += cursoB[i]  / cursoB.length			
	}
	
	if (promedioA > promedioB) {
			alert("EL grupo que tuvo mayor promedio fue Grupo a: " + promedioA)
	} else {
			alert("EL grupo que tuvo mayor promedio fue Grupo B: " + promedioB)
	}
	
})