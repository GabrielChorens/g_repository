export default {
    title: "15 Usando middlewares HTTP en Go",
    videoId: "XvC-FlbuML4",
    notes: [
        { type: "subtitle", content: "Los middlewares HTTP en Go" },
        { type: "text", content: "Como hemos visto durante esta lección, los middlewares en Go no dejan de ser, al igual que en la mayoría de lenguajes de programación, una implementación del patrón de diseño Cadena de responsabilidad con funciones que cumplen la firma definida por el tipo http.HandlerFunc" },
        { type: "link", content: "https://es.wikipedia.org/wiki/Cadena_de_responsabilidad" },
        { type: "link", content: "https://golang.org/pkg/net/http/#HandlerFunc" },
        { type: "text", content: "¡Eso es todo!" },
        { type: "subtitle", content: "Testeando los middlewares" },
        { type: "text", content: "A la hora de testear nuestros middlewares, la librería estándar de Go nos proporciona el paquete net/http/httptest cuyo contenido incluye las estructuras de datos y la funcionalidad necesaria para simular peticiones HTTP sin tener que pasar por una interfaz de red real en todo lo que ello implica (tests más lentos por dependencia con infraestructura real, posibles conflictos de puertos, etc)." },
        { type: "link", content: "https://golang.org/pkg/net/http/httptest/" },
        { type: "text", content: "De este modo, podemos desarrollar tests que podríamos considerar tests 'unitarios' de cada uno de nuestros middlewares de una forma sencilla, rápida y poco costosa." }
    ]
}; 