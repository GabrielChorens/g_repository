export default {
    title: "10 Refactorizando el endpoint para extraer Application Service",
    videoId: "lIzQjwxaEFs",
    notes: [
        { type: "subtitle", content: "Refactorizando a caso de uso" },
        { type: "text", content: "En las anteriores lecciones vimos cómo aplicar el principio de inversión de dependencia mediante la inyección de la misma para descoplar nuestro controlador (o handler) HTTP de la capa de persistencia y de su implementación específica (MySQL)." },
        { type: "link", content: "https://es.wikipedia.org/wiki/Principio_de_inversi%C3%B3n_de_la_dependencia" },
        { type: "text", content: "Sin embargo, si creemos que nuestra aplicación puede seguir creciendo, y que potencialmente:" },
        { type: "text", content: "• Nuestros casos de usos podrán ser ejecutados desde diferentes puntos de entrada (interfaz de línea de comandos, event handlers, etc)." },
        { type: "link", content: "placehhttps://es.wikipedia.org/wiki/Interfaz_de_l%C3%ADnea_de_comandosolder" },
        { type: "text", content: "• Y cada uno de ellos podrá llevar asociada una lógica de aplicación (diferentes acciones como determinadas validaciones a nivel de aplicación, publicación de eventos, etc.) transversales a todos los puntos de entrada." },
        { type: "text", content: "Entonces, lo mejor será que traslademos el centralizar dicho código en una pieza independiente, que posteriormente podrá ser inyectada en cualquiera de los puntos de entrada, sin necesidad de tener que duplicar dicho código." },
        { type: "subtitle", content: "Nomenclatura y estructura de carpetas" },
        { type: "text", content: "Con la refactorización mencionada, ahora se nos abre la puerta a la tercera y última de las habituales capas que comúnmente forman la Arquitectura Hexagonal: la capa de aplicación." },
        { type: "text", content: "A nivel conceptual estará situada entre nuestra capa de infraestructura y nuestro dominio, lo cual lo representaremos en nuestra estructura de carpetas añadiendo una nueva carpeta en el nivel donde hasta ahora solo teníamos nuestro dominio. De este modo nos quedaría:" },
        { type: "text", content: "• src: dominio." },
        { type: "text", content: "• carpetas a primer nivel (excepto platform): aplicación." },
        { type: "text", content: "• carpetas segundo nivel (dentro de platform): infraestructura." },
        { type: "text", content: "Además, la separación de esta nueva capa (es decir, las carpetas que la conformarán), será a nivel de grupo de operaciones (creating, fetching)." },
        { type: "text", content: "De este modo, podemos crear los correspondientes servicios de aplicación o casos de uso (p. ej: creación de curso: creating.CourseService), dejando clara la intención de cada uno de ellos." },
        { type: "subtitle", content: "Referencias adicionales" },
        { type: "text", content: "Como veníamos diciendo, las adaptaciones de Arquitectura Hexagonal a Go y la correspondiente estructura de carpetas que se propone en este curso es algo que tiene mucho toque personalizado pero que no nos hemos sacado de la manga, sino que ha sido el resultado de horas de consultar las diferentes propuestas proporcionadas y de contrastarlas con la infraestructura." },
        { type: "text", content: "En este caso específico, una de las referencias de la comunidad más populares es el repositorio GoDDD en el que Marcio Olivera estructuró a Go la aplicación Java que desarrolló Citerus en Suecia colaborando con Eric Evans, basada en los ejemplos de su libro. En el primer ejemplo podemos encontrar un patrón muy similar a la hora de organizar la capa de aplicación (creating, booking, etc) pero sin separación física con la infraestructura (platform)." },
        { type: "link", content: "https://github.com/marcusolsson/goddd" },
        { type: "link", content: "https://www.goodreads.com/book/show/179133.Domain_Driven_Design" }
    ]
}; 