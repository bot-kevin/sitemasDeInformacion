Ext.onReady(function(){
	function estudiante (codigo, nombre, nota){
			this.codigo = codigo;
			this.nombre = nombre;
			this.nota = nota;
	}
	
	var estudiantes = new Array();
	var salida = 0;
	var codigo ;
	var nombre;
	var nota = 0;
	var sumatoria = 0;
	var promedio = 0;
	
	for (i=0;i<4;i++) {
		codigo = prompt('Escriba el codigo del estudiante:'+ (i+1));
		nombre = prompt('Escriba el nombre del estudiante:'+ (i+1));
		nota = parseFloat(prompt('Escriba la nota del estudiante:'+ (i+1)));
		
		estudiantes[i] = new estudiante(codigo,nombre,nota);
		sumatoria+= estudiantes[i].nota;
	}
		
	promedio = sumatoria/estudiantes.length;
	
	window.alert('EL promedio del grupo S.T es: '+promedio);
});

