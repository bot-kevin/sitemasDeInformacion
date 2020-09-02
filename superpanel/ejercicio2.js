		
Ext.onReady(function(){


//panel con pestañas south
var pestañas = new Ext.TabPanel({
	margins: '3 3 3 0',
	activeTab: 0,
	defaults:{autoScroll:true},
	// es esta seccion se agregan las pestañas al panen, donde agregamos a 
	// item o pesaña un titulo, el contenido que puede ser texto o HTML
	// y opcionalmente un atributo que permite cerrar la pestañas
	
	items:[		
		{title: 'Gabriel Garcia MArquez',
		html:'<h1>Gabriel Garcia MArquez</h1> <h3>Aracataca, 6 de marzo de 1927-Ciudad de México, 17 de abril de 2014'+			
				'fue un escritor, guionista, editor y periodista colombiano. En 1982 recibió el Premio Nobel de Literatura.'+
				'Está relacionado de manera inherente con el realismo mágico y su obra más conocida, la novela Cien años de soledad, es considerada una de las más representativas de este movimiento literario, e incluso se considera que por el éxito de la novela es que tal término se aplica a la literatura surgida a partir de los años 1960 en América Latina'+
				'Fue famoso tanto por su genialidad como escritor como por su postura política'+
				'​Su amistad con el líder cubano Fidel Castro fue bastante conocida en el mundo literario y político</h3>'
		},
		{title: 'Jorge Ricardo Isaacs Ferrer', 
		html: '<h1>Jorge Ricardo Isaacs Ferrer</h1><h3>(Santiago de Cali, 1 de abril de 1837-Ibagué, 17 de abril de 1895)'+
					'fue un novelista, escritor y poeta colombiano del género romántico. Jorge Isaacs vivió durante la época de consolidación de la República' +
					'La obra literaria de Isaacs se reduce al libro de poemas que publicó en 1864 y a su única novela, María (1867), considerada una de las obras más destacadas de la literatura hispanoamericana del siglo xix.'+
					'La novela, basada en experiencias románticas, tiene un tono elegíaco, y narra la historia de los amores trágicos de María y su primo Efraín, en el departamento del Valle del Cauca. Como el propio autor, Efraín debe abandonar el Valle para seguir estudios en Bogotá. Este viaje lo obliga a separarse de su prima María, de la que está enamorado.</h3>'},
		{title: 'Piedad Bonnett', 
		html:'<h1>Piedad Bonnett</h1> <h3>Es contenido del piano 3'+
				'(Amalfi, Antioquia, 1951) es una poeta, novelista, dramaturga y crítica literaria colombiana.'+
				'Es licenciada en Filosofía y Letras de la Universidad de los Andes, donde ha ejercido como profesora en filosofía y lenguas. Su poesía, teatro y narrativa están profundamente arraigadas en su experiencia vital y expresan la visión de la mujer de clase media en un país desgarrado por múltiples violencias, desigualdades y conflictos. Ha desarrollado, además, una fructífera labor crítica y de difusión de la poesía. Es columnista del periódico El Espectador desde 2012.<h3>'					
		},
		{title: 'José Rafael de Pombo y Rebolledo',		
		html: '<h1>José Rafael de Pombo y Rebolledo</h1>' +
				'<h3>(Bogotá, 7 de noviembre de 1833 - † Ibídem, 5 de mayo de 1912) fue un escritor, poeta, fabulista, traductor, intelectual y diplomático colombiano.'+
				"José Rafael Pombo Rebolledo nació en el hogar conformado por Lino de Pombo O' Donell y Ana María Rebolledo Tejada, ambos pertenecientes a familias de la aristocracia de Popayán. Cuando el General Francisco de Paula Santander designó a Lino de Pombo como secretario del Interior y de Relaciones Exteriores, se trasladó con su familia a Bogotá, ciudad a la que Ana María llegó con siete meses de embarazo"+

				'En el hogar aprendió lasprimeras letras de labios de su madre. Su casa era un escenario social e intelectual al que acudían grandes exponentes de la política y las letras nacionales como Salvador Camacho Roldán, Sergio Arboleda Pombo, Manuel Ancízar, Ignacio Gutiérrez, Alejandro Posada, Rufino Cuervo, José Ignacio de Márquez, José Eusebio Caro, Nicolás Tanco, José María Rojas Garrido y Carlos Holguín Mallarino, entre otros.'+
				'A la edad de once años ingresó en el seminario de la capital, donde el estudio del latín hizo de él un diestro traductor de los clásicos. Marcelino Menéndez Pelayo opinó de sus traducciones: "No las hay más valientes y atrevidas en nuestra lengua". De los poetas greco-latinos tradujo el episodio de Laoconte de Virgilio y a Horacio. También vertió al castellano El poeta moribundo, de Alphonse de Lamartine, y el soliloquio de Hamlet de Shakespeare.</h3>'									
		},	
				
		]
});

// panel este
var panelEste = new Ext.Panel({	
		autoScroll:true,
		title: '<h2>Mis Autores Colombianos</h2>',
		region :'east',
		split : true,
		width : 600,		
		collapsible :true,
		margins: '3 3 3 3',
		cmargins: '3 3 3 3',		
		items:[pestañas]
});




var seccion1 =  new Ext.Panel({
	autoScroll:true,
	title: '<h2>Cien años de soledad</h2>',
	html: ' La idea original de esta obra surge en 1952 durante un viaje que realiza el autor a su pueblo natal, Aracataca, en compañía de su madre'+
			'En su primer libro, La hojarasca, hace referencia por primera vez a Macondo, y varios de los personajes de esta obra aparecen en algunos de sus cuentos y novelas anteriores.9​ Gabriel García Márquez inicialmente le presentó Cien años de Soledad a Carlos Barral, quien a mediados de los años 60 dirigía la que en ese entonces era la editorial de vanguardia en lengua castellana Seix Barral de Barcelona, pero recibió una desalentadora respuesta: «Yo creo que esa novela no va a tener éxito. Yo creo que esa novela no sirve», aunque también se ha dicho que el editor nunca llegó a leerla'+
		'Después del rechazo inicial, García Márquez envió el manuscrito a la Editorial Sudamericana de Buenos Aires, donde Francisco Porrúa, su director, decidió publicarla de inmediato: «no se trataba de llegar al final para saber si la novela se podía publicar. La publicación ya estaba decidida con la primera línea, con el primer párrafo. Simplemente comprendí lo que cualquier editor sensato hubiera comprendido en mi lugar: que se trataba de una obra excepcional»',
	cls:'empty'
});
var seccion2 =  new Ext.Panel({
	autoScroll:true,
	title: '<h2>La María</h2>',
	html: 'La María'+
			'Por su tema y estructura conserva todas las características de la novela sentimental que en Francia había llegado a su apogeo con Atala de Chateaubriand y Pablo y Virginia de Saint Pierre. La novela presenta muchos aspectos asimilados de sus modelos franceses; pero su gran originalidad consiste en que pone por primera vez, como idilio romántico el ambiente real de la naturaleza americana.'+
			'El eje central de la novela es la relación de los desdichados amores de dos adolescentes: Efraín, hacendado en la región del Cauca, y su hermana adoptiva María. Este idilio va a tener como marco el bucólico ambiente natural de esa región colombiana.'+
			'La novela consta de sesenta y cinco capítulos. Los precede una dedicatoria, «a los hermanos de Efraín», en la que el autor, oculto tras la figura de quien ejecuta un encargo, presenta los hechos como ocurridos tiempo atrás. Anticipa, asimismo, el final del protagonista',
	cls:'empty'
});
var seccion3 =  new Ext.Panel({	
	autoScroll:true,
	title: '<h2>Lo que no tiene nombre</h2>',
	html: 'Lo que no tiene nombre'+
			'La naturalidad y la extrañeza conviven en las páginas de este libro igual que en su mirada conviven la sequedad de la inteligencia y el latido más intenso de la emoción. Buscar respuestas es solo un modo de hacerse preguntas, de negociar con las preguntas, de saber cuántas preguntas caben en una obsesión. Es también una forma de seguir cuidando al hijo más allá de la muerte, de defenderlo contra el frío, comprarle ropa nueva, preguntarle por los estudios y por su arte.'+
			'Aunque no haya ningún sobre en la habitación, todo suicidio es una carta a los seres que se dejan en la vida. El dolor, el amor, los recuerdos, las imaginaciones, los sentimientos de culpa, la conciencia de haber ayudado y la certeza de la enfermedad se mezclan en nuestros ojos al leer esa carta y nos interpelan sobre nuestra propia realidad',
	cls:'empty'
});


// panel Oeste
var panelOeste = new Ext.Panel({
		title: '<h1>MIS LIBROS</h1>',
		region :'center',
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

var raiz = {text:'Libros',
			children:[
				{text:'Gabriel Garcia Marquez',children:[{text:'Cien-años-de-soledad.pdf',iconCls:'mipdf',leaf:true},{text:'La-hojarasca.pdf',iconCls:'mipdf',leaf:true},{text:'Relatos-De-un-naufrago.pdf',iconCls:'mipdf',leaf:true}]},
				{text:'Jorge Ricardo Isaacs Ferrer',children:[{text:'La-maria.pdf',iconCls:'mipdf',leaf:true}, {text:'Mi-patria.pdf',iconCls:'mipdf',leaf:true},{text:'Alocución.pdf',iconCls:'mipdf',leaf:true}]},
				{text:'Piedad Bonnett',children:[{text:'Loque-no-tiene-nombre.pdf',iconCls:'mipdf',leaf:true}, {text:'donde-nadie-me-espere.pdf',iconCls:'mipdf',leaf:true},{text:'el-prestigio-de-la-bellesa.pdf',iconCls:'mipdf',leaf:true}]},
				{text:'José Rafael de Pombo y Rebolledo',children:[{text:'LaProble-viejecita.pdf',iconCls:'mipdf',leaf:true}, {text:'ElRenacuajo-Pescador.pdf',iconCls:'mipdf',leaf:true},{text:'Pastorcita.pdf',iconCls:'mipdf',leaf:true}]},
			]};
var arbol = new Ext.tree.TreePanel({
	border:false,
	animate:true,
	useArrows:true,
	root:raiz
});

// panel este
var panelNorte = new Ext.Panel({
		title: '<h2>Descargar Libro Digital</h2>',
		region :'north',
		split : true,
		width : 100,
		height: 200,
		autoScroll: true,
		collapsible :true,
		margins: '3 3 3 3',
		cmargins: '3 3 3 3',		
		items:[arbol]
});



//panel principanel
var panelPrincipal = new Ext.Panel({
	renderTo: "panel",
	title: '<h1>BIBLIOTECA MUNICIPAL DANIELA GONZÁLEZ<h1>',
	layout: "border",
	height: 600,
	width: 1100,	
	items: [panelEste,panelOeste,panelNorte]
});

});