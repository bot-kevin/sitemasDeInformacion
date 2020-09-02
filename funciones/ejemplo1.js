Ext.onReady(function(){
	var opcion = "0";
	while(opcion != "T"){
		opcion = prompt("Escribe la letra de la opcion deseada:(S) Sumar - (R) Raíz Cuadrada - (A) Ayuda - (T) Terminar" );
		if (opcion=="S") suma();
		if (opcion=="R") raiz();
		if (opcion=="A") ayuda();
	}

	function suma(){
		//var numero1, numero2;
		var numero1 = parseFloat(prompt('Escribe el primer numero: '));
		var numero2 = parseFloat(prompt('Escribe el segundo numero: '));
		alert("La suma de " +numero1+" y "+numero2+" es "+ (numero1+numero2));		
	}
	function raiz(){
		//var numero;
		var numero = parseFloat(prompt("Escribe el radicando"));
		alert("La raíz cuadrada de "+numero+ " es" + Math.sqrt(numero));		
	}
	function ayuda(){
		alert("This is help");
	}
});
