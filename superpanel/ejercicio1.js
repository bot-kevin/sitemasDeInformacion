
Ext.onReady(function(){
	
//panel con pestañas
var pestañas = new Ext.TabPanel({
	margins: '3 3 3 0',
	activeTab: 0,
	defaults:{autoScroll:true},
	// es esta seccion se agregan las pestañas al panen, donde agregamos a 
	// item o pesaña un titulo, el contenido que puede ser texto o HTML
	// y opcionalmente un atributo que permite cerrar la pestañas
	
	items:[
		{title: 'El piano 1',html:'El contenido del piano 1'},
		{title: 'El piano 2', html: 'El contenido del piano 2'},
		{title: 'El piano 3', html:'Es contenido del piano 3',closable:true}
	]
});

// panel este
var panelEste = new Ext.Panel({
		title: 'Panel Este',
		region :'east',
		split : true,
		width : 250,
		collapsible :true,
		margins: '3 3 3 3',
		cmargins: '3 3 3 3',		
		items:[pestañas]
});

//panel central
var panelCentral = new Ext.Panel({
	title: 'Mi Panel Central',
	region :'center',
	split : true,
	width : 200,	
	margins: '3 3 3 3',
	cmargins: '3 3 3 3'	
});


// seccion con el contenido para el acordion panel cada seccion o pestaña un titulo, el contenido que puede ser texto o HTML
// ademas cada seccion puede importar una clase Css que debe esta creada en el 

var seccion1 =  new Ext.Panel({
	title: 'Dragon Ball',
	html: 'es un buen anime',
	cls:'empty'
});
var seccion2 =  new Ext.Panel({
	title: 'Dragon Ball',
	html: 'es un buen anime',
	cls:'empty'
});
var seccion3 =  new Ext.Panel({
	title: 'Dragon Ball',
	html: 'es un buen anime',
	cls:'empty'
});

// panel Oeste
var panelOeste = new Ext.Panel({
		title: 'Panel Oeste',
		region :'west',
		split : true,
		width : 250,
		collapsible :true,
		margins: '3 3 3 3',
		cmargins: '3 3 3 3',
		layout: 'accordion',
		layoutConfig:{
			titleCollapse:false,
			animate:true
		},
		items:[seccion1,seccion2,seccion3]
});

//Datos estaticos que alimentaran el almacen
var datosEstudiantes = [
	['1234567','Daniela Andrea',4.8],
	['1234567','Kevin Santiago',4.8],
	['1234567','Daniel alejandro',4.8],
	['1234567','Ivan',4.8],
	['1234567','Ivan',4.8]
];

//Creamos el almacen de informacion indicando un nombre o identificandor para los datos 
var almacen = new Ext.data.ArrayStore({
		fields: [
			{name: 'codigo', type: 'string'},
			{name: 'nombre', type: 'string'},
			{name: 'nota', type: 'float'}
		]
});
almacen.loadData(datosEstudiantes);

var panelSur = new Ext.grid.GridPanel({
			title: 'Panel Sur - Estudiantes 6 Semestre',
			collapsible: true,
			region: 'south',
			store: almacen,
			width: 200,
			height: 200,
			stripeRows: true,
			autoExpandColumn : 'nombre',
			columns: [{
				header: "Codigo",
				sortable : true,
				width: 50,
				dataIndex: "codigo"
			},{
				id: "nombre",
				header: "Nombre",
				sortable : true,
				width: 100,
				dataIndex: "nombre"
			}, {
				header: "Nota",
				sortable : true,
				width: 50,
				dataIndex: "nota"
				}]

		});

var raiz = {text:'Raiz',
			children:[
				{text:'Documentos',children:[{text:'archivo.doc',leaf:true}]},
				{text:'Fotos',children:[{text:'amigos.doc',leaf:true}, {text:'amigos.doc',leaf:true}]},
				{text:'presentacion.ppt',leaf:true}					
			]};
var arbol = new Ext.tree.TreePanel({
	border:false,
	animate:true,
	useArrows:true,
	root:raiz
})

// panel este
var panelNorte = new Ext.Panel({
		title: 'Panel Norte',
		region :'north',
		split : true,
		width : 200,
		height: 100,
		autoScroll: true
		collapsible :true,
		margins: '3 3 3 3',
		cmargins: '3 3 3 3',		
		items:[arbol]
});



//panel principanel
var panelPrincipal = new Ext.Panel({
	renderTo: "panel",
	title: 'panel principal',
	layout: "border",
	height: 600,
	width: 600,
	items: [panelEste,panelCentral,panelOeste, panelSur, panelNorte]
});

});