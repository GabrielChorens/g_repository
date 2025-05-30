export default {
  title: "37 Gestion de errores al consumir con RabbitMQ",
  videoId: "bHiB7rQsLcY",
  notes: [
    { type: "subtitle", content: "🐣 Gestión de errores al consumir con RabbitMQ" },
    {
      type: "text",
      content: "Cerramos el bloque de publicación y consumo de eventos de dominio con RabbitMQ volviendo al tema de la gestión de errores en tiempo de consumo"
    },
    {
      type: "text",
      content: "A nivel estructura hemos visto que contamos con una cola de 'retry' a donde irán los eventos si se produce algún error, desde aquí lo que haremos será devolver el evento a la cola principal. A la hora de crear la cola de retry le habíamos especificado que su dead-letter será justamente el exchange principal y la routingKey el nombre del caso de uso y un delay de 1 segundo antes de volver a publicar el evento"
    },
    {
      type: "subtitle",
      content: "Clase RabbitMqEventBusConfiguration:"
    },
    {
      type: "code",
      content: "public class RabbitMqEventBusConfiguration {\n    \n    //...\n\n    private HashMap<String, Object> retryQueueArguments(TopicExchange exchange, String routingKey) {\n      return new HashMap<String, Object>() {{\n          put(\"x-dead-letter-exchange\", exchange.getName());\n          put(\"x-dead-letter-routing-key\", routingKey);\n          put(\"x-message-ttl\", 1000);\n      }};\n  }\n}"
    },
    {
      type: "text",
      content: "Aquí empezamos a ver el por qué necesitábamos poder hacer una configuración mas 'particular' que la que nos podría ofrecer una librería con una abstracción superior, ya que estamos usando ese concepto de dead-letter de un modo distinto para cumplir con nuestras necesidades: Que la cola de retry se lleve el evento fallido automágicamente exchange principal (estableciéndo así el primer nivel de nuestro mecanismo de gestión de errores)"
    },
    {
      type: "text",
      content: "Cada vez que un evento se ha publicado en la cola de retry habremos incrementado un contador de reintentos para que el propio RabbitMQ sepa en qué momento dejar de intentarlo y enviarlo finalmente al exchange de dead-letter"
    },
    {
      type: "text",
      content: "A nivel de código esto se traducirá en que dentro del catch que capture algún error durante el consumo del evento, llevaremos a comprobar si el evento se ha reenviado muchas veces (si el contador de los headers ha alcanzado nuestro valor máximo) y, de ser así, lo mandamos a la dead-letter. Sea como fuere, a la hora de enviar el evento añadiremos o incrementaremos el contador de reintentos"
    },
    {
      type: "text",
      content: "CodelyTv Tip ☝️: Es muy interesante poder jugar con el ttl y no sólo con el número de reintentos en nuestra política de retries, ya que en muchas ocasiones no nos supondrá ningún problema una inconsistencia de 1 minuto por ejemplo desde que creamos un recursos hasta que se muestra actualizado el contador en pantalla y nos permitirá el ahorro computacional de estár haciendo múltiples retries"
    },
    {
      type: "text",
      content: "Una conclusión que podemos extraer de este planteamiento respecto a trabajar con eventos aplicando una buena red de seguridad es que nos va a permitir ser mucho más resilientes frente a fallos externos (ajenos a nuestra propia arquitectura) ya que al separar de este modo las acciones principales de los efectos derivados, podemos garantizar que el hecho de que fallara un elemento externo (por ejemplo el servicio de publicación de facturas) no estaremos sacrificando la acción principal (realizar el cobro) por más que ese evento quede 'aparcado' en la cola de dead-letter"
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?"
    },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: CQRS!"
    }
  ],
};
