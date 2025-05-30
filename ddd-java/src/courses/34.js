export default {
  title: "34 Error al publicar eventos Fallback en MySQL",
  videoId: "joH6QtIlaDA",
  notes: [
    { type: "subtitle", content: "😳 Error al publicar eventos Fallback en MySQL" },
    {
      type: "text",
      content: "Uno de los problemas a los que nos enfrentamos cuando introducimos la publicación de eventos en nuestra aplicación es precisamente que podríamos perder la conexión con el sistema de colas que utilicemos y por tanto perderíamos dichos eventos, con lo que no se estarían produciendo posteriormente los efectos derivados de ese evento"
    },
    {
      type: "text", 
      content: "Por esta razón es muy importante que establezcamos mecanismos de seguridad que nos ofrezcan la garantía de que a pesar de que pueda producirse cualquier fallo, estos eventos finalmente van a publicarse y se van a consumir correctamente"
    },
    {
      type: "text",
      content: "Puesto que ya tenemos la implementación de EventBus en MySql la opción que vemos más interesante es precisamente utilizarla como mecanismo de Fallback, de este modo, cuando se produzca un fallo al intentar (try)publicar el evento en RabbitMq lo que haremos será utilizar esta implementación en MySql dentro del bloque 'catch' para que persista el evento en BD"
    },
    {
      type: "text",
      content: "Un detalle importante al inyectar este fallback en el constructor de la clase RabbitMqEventBus es que lo haremos especificando la implementación concreta de MySql puesto si le pasáramos simplemente la Interface de EventBus, el framework se iría a buscar la implementación que tenemos definida como @Primary que en este caso sería justamente la de RabbitMq"
    },
    {
      type: "text",
      content: "Aunque guardemos estos eventos fallidos en BD, a la hora de consumirlos no usaremos ya en este caso la implementación de MySql que vimos anteriormente, sino que lo que querremos es que precisamente una vez se recuperen los eventos, vuelva a intentar pasarselos al publisher de RabbitMq"
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
      content: "¡Nos vemos en la siguiente lección: 🐰 Consumir eventos con RabbitMQ!"
    }
  ],
};
