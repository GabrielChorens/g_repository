export default {
    title: "17 Implementando el middleware de recuperación de errores en Gin",
    videoId: "10kpO79Ls3I",
    notes: [
        { type: "subtitle", content: "La importancia de la recuperación de panics" },
        { type: "text", content: "Si bien es cierto que la implementación estándar del http.Server nos proporciona una protección mínima ante panics, es recomendable añadir una capa extra de seguridad en función de nuestras necesidades, pues la recuperación estándar ni siquiera devuelve una respuesta al cliente." },
        { type: "text", content: "De este modo, seremos capaces de gestionar todas aquellas operaciones que consideramos necesarias en nuestro servicio cada vez que ocurre un panic, como, por ejemplo:" },
        { type: "text", content: "• Devolver un 500 Internal Server Error al cliente." },
        { type: "text", content: "• Escribir una línea de log con lo ocurrido." },
        { type: "text", content: "• Reportar el error a alguna plataforma de reporting de errores." },
        { type: "text", content: "• Etc" },
        { type: "subtitle", content: "Middlewares en Gin" },
        { type: "text", content: "Como hemos visto, la diferencia entre implementar un middleware en Gin e implementarlo en la librería estándar reside en las propias diferencias existentes a nivel de la propia firma que define qué es un middleware (o handler) HTTP." },
        { type: "text", content: "En este caso, reemplazamos los parámetros habituales por el contexto de Gin, quien ya nos dota de la funcionalidad necesaria para poder operar sobre la petición entrante y la respuesta saliente." }
    ]
}; 