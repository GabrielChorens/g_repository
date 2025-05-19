export default {
    title: "05 Inyectando nuestro repositorio",
    videoId: "pbQHhA6-N6Y",
    notes: [
        { type: "subtitle", content: "Inversión de dependencias" },
        { type: "text", content: "La \"D\" de los Principios SOLID de ingeniería de software es precisamente el principio de inversión de dependencias, el cual puede ser aplicado mediante la inyección de dependencias." },
        { type: "link", content: "https://es.wikipedia.org/wiki/SOLID" },
        { type: "subtitle", content: "Definición de nuestro repositorio" },
        { type: "text", content: "Para ello, vamos a introducir el concepto de repositorio, que básicamente será una interfaz que nos definirá una capa de abstracción con el sistema de persistencia." },
        { type: "text", content: "En este caso, dicha interfaz la definimos en nuestro dominio juntamente con la definición de nuestro modelo." },
        { type: "subtitle", content: "Mocks" },
        { type: "text", content: "Además, ahora que ya hemos definido esa capa de abstracción con la persistencia, ya podemos proporcionar también los mocks que nos permitan testear aquellas piezas de código que dependan de esa persistencia independientemente de cuál sea la implementación. En el caso que nos remite nuestro controlador." },
        { type: "text", content: "Para generar dichos mocks vamos a usar mockery, que se trata de un generador de código que funciona por encima de la librería testify que ya hemos utilizado anteriormente para el desarrollo de los tests." },
        { type: "link", content: "https://github.com/vektra/mockery" },
        { type: "link", content: "https://github.com/stretchr/testify" },
        { type: "subtitle", content: "Inicialización e inyección del repositorio" },
        { type: "text", content: "Sin ánimo de avanzarnos a lo que está por venir (porque el cómo hacer nuestra implementación de MySQL para nuestro repositorio lo veremos más adelante), sólo nos faltaría mencionar que para terminar de aplicar esa inyección de dependencias sólo necesitaremos hacer que nuestra encapsulación del servidor reciba un repositorio en su inicialización, para poder emitirlo al controlador en cuestión." },
        { type: "text", content: "Finalmente en el bootstrap será donde inicialicemos dicha implementación y donde finalmente la inyectemos a la hora de inicializar el servidor." }
    ]
}; 