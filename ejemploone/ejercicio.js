Ext.onReady(function(){
	window.alert("Hola mundo");
});

Ext.onReady( function(){
	var mensaje = prompt("Escriba tu mensaje");
	alert("Mucho gusto "+mensaje)
});

Ext.onReady( function(){
	var numerodoble = parseFloat(prompt("Ingrese un numero"))
	alert("El numero es: " + numerodoble)
});

Ext.onReady( function(){
	var base = parseFloat(prompt("Escribe la base del rectacgulo"));
	var altura = parseFloat(prompt("Escribe la altura de rectacgulo"));
	var area  = (base*altura);
	alert("El area del rectacgulo es: " + area)	
});
