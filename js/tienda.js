const productosTienda = [
    {
        id : 1,
        img : "../assets/img-1.jpg" ,
        producto: "Chaqueta Caza Solognac 100 Hombre Cálida Impermeable Camuflaje Verde Militar",
        marca : "SOLOGNAC",
        precio : 34.99,
        descripcion1 : "Diseñada para todas las modalidades de caza mayor y menor con tiempo frio. Adecuado para la observacion de la naturaleza, fotografia, bushcraft y supervivencia.",
        descripcion2 : "Chaqueta resistente, cómoda y cálida. Protección para todas las actividades en la naturaleza cuando baja la temperatura.",
        oferta : false

    },
    {
        id : 2,
        img : "../assets/img-2.jpg" ,
        producto: "CHAQUETA DE MTB INVIERNO HOMBRE ROCKRIDER ST 500 NEGRO ROJO",
        marca : "ROCKRIDER",
        precio : 39.99 ,
        descripcion1 : "Esta resistente chaqueta de bicicleta de montaña ha sido concebida para travesías MTB de hasta 4 h, con tiempo frío.",
        descripcion2 : "Este invierno, circula sin preocuparte por el contacto con la vegetación. Concebida para aportarte calor, comodidad y sencillez, para disfrutar de tus salidas con todo al alcance de la mano.",
        oferta : true
        
    },
    {
        id : 3,
        img : "../assets/img-3.jpg" ,
        producto: "Chaqueta cortavientos Running Hombre perlante Kalenji Run Rain negro",
        marca : "KALENJI",
        precio : 33.99,
        descripcion1 : "Chaqueta cortavientos para poder seguir corriendo bajo una lluvia fina sin molestias. Con efecto perlante donde el agua se desliza sin penetrar en el tejido.",
        descripcion2 : "Chaqueta con capucha para correr los días de viento y lluvia. Transpirabilidad para facilitar la circulación del aire. Tiene dos bolsillos con cremalleras.",
        oferta : false
        
    },
    {
        id : 4,
        img : "../assets/img-4.jpg" ,
        producto: "Pantalón chándal fitness regular Hombre Domyos 100 negro",
        marca : "DOMYOS",
        precio : 9.99,
        descripcion1 : "Un pantalón sencillo y cálido, para llevar durante el fitness y en el día a día. Tiene bolsillos laterales. Su material esta compuesto de algodón y poliéster.",
        descripcion2 : "Con su corte atemporal y su felpa muy suave, este pantalón es una pieza estrella de tu armario deportivo... ¡y mucho más! ",
        oferta : false
        
    },
    {
        id : 5,
        img : "../assets/img-5.jpg" ,
        producto: "Pantalón de Chándal Sereno SLIM 3 franjas adulto negro",
        marca : "ADIDAS",
        precio : 39.99,
        descripcion1 : "Este pantalón de chándal ADIDAS te acompaña a cualquier lado, tanto si preparas una competición como si te relajas en casa.",
        descripcion2 : "Mantente motivado a pesar del frío, gracias a este pantalón de fútbol Sereno para adultos.",
        oferta : false
        
    },
    {
        id : 6,
        img : "../assets/img-6.jpg" ,
        producto: "Camiseta de Fútbol Adidas Entrada 22 Adulto Negra",
        marca : "ADIDAS",
        precio : 17.99,
        descripcion1 : "Una camiseta de fútbol adidas con diseño clásico y estilizado para los entrenamientos y las competiciones.",
        descripcion2 : "Una camiseta de fútbol que evacua el sudor.",
        oferta : true
        
    },
    {
        id : 7,
        img : "../assets/img-7.jpg" ,
        producto: "Camiseta de fútbol Adulto Kipsta F100 blanca",
        marca : "KIPSTA",
        precio : 5.99,
        descripcion1 : "Camiseta de fútbol F100 diseñada por nuestros expertos para los entrenamientos y los partidos. Aporta libertad de movimiento y transpirabilidad.",
        descripcion2 : "Para facilitar tus desplazamientos sobre el terreno, hemos desarrollado una nueva camiseta F100 ligera y transpirable.",
        oferta : false
        
    },
    {
        id : 8,
        img : "../assets/img-8.jpg" ,
        producto: "Camiseta de tenis manga corta transpirable mujer Artengo Dry soft 500 negro",
        marca : "ARTENGO",
        precio : 5.99,
        descripcion1 : "Camiseta de tenis de diseño ecológico concebida por nuestro equipo para entrenamientos/partidos. Se puede usar todo el año independientemente de la temperatura.",
        descripcion2 : "Disfruta de la comodidad de esta camiseta en la cancha gracias a su tacto suave y su materia transpirable en la espalda. Apreciarás también su corte femenino y agradable de llevar.",
        oferta : false
        
    },
    {
        id : 9,
        img : "../assets/img-9.jpg" ,
        producto: "Falda pantalón de tenis mujer Artengo Dry Soft 500 negro",
        marca : "ARTENGO",
        precio : 9.99,
        descripcion1 : "Esta falda de tenis ha sido concebida por nuestro equipo para entrenamientos o partidos. Se puede usar todo el año independientemente de la temperatura.",
        descripcion2 : "Una falda aireada con un marcado estilo de tenista, muy favorecedora sea cual sea tu físico.La malla short integrada tiene un bolsillo específico para la pelota.",
        oferta : false
        
    },
    {
        id : 10,
        img : "../assets/img-10.jpg" ,
        producto: "Pantalón chándal de fútbol Mujer Viralto azul",
        marca : "KIPSTA",
        precio : 23.99,
        descripcion1 : "Nuestro equipo de apasionados por el fútbol ha diseñado este pantalón VIRALTO+ para tus entrenamientos.Ponla a prueba 4 veces por semana.",
        descripcion2 : "Elige este pantalón de entrenamiento VIRALTO+ para tener libertad de movimiento en tus entrenamientos.",
        oferta : true
        
    },
    {
        id : 11,
        img : "../assets/img-11.jpg" ,
        producto: "Mallas térmicas mujer SWIX RACE",
        marca : "SWIX",
        precio : 19.99,
        descripcion1 : "Para esquiadoras de fondo que buscan comodidad en uso.",
        descripcion2 : "Se lleva muy ceñido.",
        oferta : false
        
    },
    {
        id : 12,
        img : "../assets/img-12.jpg" ,
        producto: "Leggings mallas fitness largos talle alto 120 Mujer animal print",
        marca : "DOMYOS",
        precio : 11.99,
        descripcion1 : "Unos leggings con talle alto, el tipo de tejido evita la transparencia incluso estirado. Tiene un bolsillo lateral para guardar las llaves y el móvil.",
        descripcion2 : "Transpirables, extensibles y con una cintura elástica tipo talle alto, estos leggings apuestan por el confort. Y tampoco descuidan la practicidad con su bolsillo invisible.",
        oferta : false
        
    },
    {
        id : 13,
        img : "../assets/img-13.jpg" ,
        producto: "Zapatillas Reebok Prime Niños Blanco Cordones",
        marca : "REEBOK",
        precio : 34.99,
        descripcion1 : "Las zapatillas deportivas Reebok Prime están diseñadas para acompañar a los niños en sus actividades diarias y deportivas en el colegio.",
        descripcion2 : "Con su caña monocromática, este modelo hace gala de minimalismo. Gracias a la suela de goma, tu hijo podrá participar en los juegos más agitados sin temor a que se dañen.",
        oferta : false
        
    },
    {
        id : 14,
        img : "../assets/img-14.jpg" ,
        producto: "Zapatillas running Mujer Asics Gel Windhawk gris rosa",
        marca : "ASICS",
        precio : 39.99,
        descripcion1 : "Ideal para practicantes de running con zancada neutra, que se inician en o buscan una zapatilla multiusos.",
        descripcion2 : "Equipada con tecnologías GEL™ para la máxima comodidad, entresuela AMPLIFOAM™ y plantilla de espuma EVA™ para una amortiguación óptima. Aporta un tacto muy suave en el primer impacto.",
        oferta : true
        
    },
    {
        id : 15,
        img : "../assets/img-15.jpg" ,
        producto: "Zapatillas caminar Mujer Adidas Breaknet Blanco",
        marca : "ADIDAS",
        precio : 39.99,
        descripcion1 : "caminar por la ciudad.",
        descripcion2 : "Un look deportivo clásico con las 3 bandas que garantiza la máxima comodidad durante todo el día. Su plantilla ofrece suavidad a los pies.",
        oferta : false
        
    },
]