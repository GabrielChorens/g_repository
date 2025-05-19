export default {
    title: "14 Timeouts en operaciones asíncronas",
    videoId: "xnG-1KeBNQU",
    notes: [
        { type: "subtitle", content: "¡Timeouts al rescate!" },
        { type: "text", content: "El propósito de este vídeo no es otro que el de ver un ejemplo más de cómo hacer uso del patrón Context para gestionar el ciclo de vida de las diferentes rutinas." },
        { type: "text", content: "Así como vimos que podíamos usar el método shutdown con un cierto periodo de gracia al servidor HTTP mientras se apaga, también podemos usarlo para limitar tiempos máximos de peticiones a servicios externos (BBDDs, APIs, etc)." },
        { type: "text", content: "Pero no solo eso, también es posible hacer uso del mismo concepto con un enfoque muy similar, por ejemplo, a la hora de implementar un Command Bus o un Event Bus que realmente sea production-ready, evitando casos de operaciones críticas como pueden ser deadlocks y evitar OOMs de nuestro sistema porque tengamos leaks de memoria y/o gorrutinas." },
        { type: "link", content: "https://en.wikipedia.org/wiki/Out_of_memory" }
    ]
}; 