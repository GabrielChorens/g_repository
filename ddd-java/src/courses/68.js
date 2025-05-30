export default {
  title: "68 Logging y Monitoring",
  videoId: "kWmw8uCSMDc",
  notes: [
    { type: "subtitle", content: "👮‍♀️ Logging y Monitoring" },
    { type: "text", content: "Un tema super importante a la hora de desarrollar nuestra aplicación es cómo plantearemos nuestra estrategia de logging y monitoring en DDD" },
    { type: "text", content: "Podéis profundizar mucho más cómo montar este stack en el curso de ELK+Beats: Centraliza logs con Elastic Stack", url: "placeholder" },
    { type: "text", content: "Cuando hablamos de logging hacemos hincapié en las trazas que nos permiten saber qué está sucediendo y por qué está fallando algo en nuestra aplicación, mientras que el monitoring lo que busca es establecer métricas y analizar en tiempo real cómo está funcionando la aplicación" },
    { type: "text", content: "Si nos bajamos al código, lo que planteamos es una interface Logger donde hemos definido varios niveles de loggeo, seleccionados por convención de equipo y no por imposición de la infraestructura que estemos usando en ese momento. Esta interface podremos después inyectarla tal y como veníamos viendo con otras piezas como el EventBus o el repositorio en nuestro caso de uso, en la infraestructura propiamente, o llevarla a un middleware del mismo modo que hacíamos con las excepciones" },
    { type: "text", content: "Un detalle que debemos plantearnos a la hora de loggear en nuestra aplicación es que tener una infinidad de trazas que no nos aporten nada pasado un periodo de tiempo al final se traducirá en un tedio cuando llegue el momento de localizar rápidamente por qué está fallando algo" },
    { type: "subtitle", content: "¿Alguna Duda?" },
    { type: "text", content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇" },
    { type: "text", content: "¡Nos vemos en el siguiente video: 🚀 Planteamiento pipeline del deploy a producción!" }
  ],
};
