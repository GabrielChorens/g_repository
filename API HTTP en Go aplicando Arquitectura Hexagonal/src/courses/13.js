export default {
    title: "13 Graceful shutdown",
    videoId: "As2MjfaX7VE",
    notes: [
        { type: "subtitle", content: "El patrón Context" },
        { type: "text", content: "El concepto más fundamental, no solo de este vídeo, sino de la lección entera, es el patrón Context, el cual os puede resultar muy familiar si venís de determinados entornos donde se aplican conceptos similares, pero a la par os puede resultar algo engorroso y complejo al principio si no os habéis trabajado con un concepto similar." },
        { type: "text", content: "Para ello, os recomendamos:" },
        { type: "text", content: "• Echar un vistazo rápido a las estructuras y métodos que nos proporciona el paquete context de la librería estándar, así como el artículo correspondiente del blog oficial de Go." },
        { type: "link", content: "https://blog.golang.org/context" },
        { type: "text", content: "• Leer los artículos (1,2) del blog de Ernesto Pérez." },
        { type: "link", content: "https://twitter.com/friendsofgotech" },
        { type: "text", content: "• Leer los artículos del blog de Ernesto Pérez." },
        { type: "link", content: "https://dev.to/eperedo/using-context-in-go-part-1-59k9" },
        { type: "link", content: "https://dev.to/eperedo/using-context-in-go-part-2-545k" },
        { type: "subtitle", content: "Graceful shutdown" },
        { type: "text", content: "De nuevo, queremos dejar claro que el concepto de la aplicación que vemos durante el curso, pese a que se intenta que se asemeje lo máximo posible a un entorno real, no deja de ser una aplicación sencilla." },
        { type: "text", content: "Es por eso que en este caso el graceful shutdown básicamente consiste en (i) detectar las señales de terminación del sistema operativo y (ii) hacer la llamada al método shutdown del servidor HTTP, dándole un periodo de gracia para que termine." },
        { type: "text", content: "Sin embargo, la magia negra no existe, así que cualquier otra rutina adicional que tengamos (conexión a la base de datos, API providers, event handlers, etc) también deberemos gestionarla, controlando su ciclo de vida, comunicándole que debe apagarse y dándole, también, un periodo de gracia para que lo haga correctamente. En nuestra cuenta, independientemente del servidor HTTP, el cual solo se encarga de escuchar las peticiones HTTP entrantes, nada más." }

    ]
}; 