export default {
  title: "36 Consumir eventos desde RabbitMQ",
  videoId: "aqIvk5Fz0Cg",
  notes: [
    { type: "subtitle", content: "🐰 Consumir eventos desde RabbitMQ" },
    {
      type: "text",
      content: "Una vez que tenemos preparada toda la infraestructura de nuestras colas de Eventos vamos a ver cómo podemos consumir de ellas"
    },
    {
      type: "text",
      content: "Tal como funciona la librería de Spring AMQP, espera que nuestra implementación del consumer contenga un método con la anotación @RabbitListener en la que indicaremos el nombre del consumer (se lo pasaremos como una constante definida en la misma clase) y el atributo autoStartup que, en nuestro caso establecemos a false para especificarle que emmpiece 'apagado' y sólo se active cuando se llame a consume() (llamaremos a este método al ejecutar el comando de consola)"
    },
    {
      type: "subtitle",
      content: "Clase RabbitMqDomainEventsConsumer:"
    },
    {
      type: "code",
      content: "public final class RabbitMqDomainEventsConsumer {\n    // ...\n    public void consume() {\n        AbstractMessageListenerContainer container = (AbstractMessageListenerContainer) registry.getListenerContainer(\n            CONSUMER_NAME\n        );\n\n        container.addQueueNames(information.rabbitMqFormattedNames());\n\n        container.start();\n    }\n}"
    },
    {
      type: "text",
      content: "En el momento de llamar a este consume() lo primero que haremos será recuperar el consumer especificado que precisamente será el mismo que tenemos en esta clase, casteando a AbstractMessageListenerContainer. Una vez recuperado le pasaremos los nombres de todas las colas para que sepa que debe escucharlas todas y, finalmente, arrancamos el container que acabará llamando al método consumer() por cada Mensaje/Evento"
    },
    {
      type: "text",
      content: "Por cada uno de estos mensajes, recuperaremos en primer lugar el evento de dominio que contiene y a continuación extraemos el subscriber asociado (lo cual podremos resolver a partir de la cola de la cual provenga el mensaje). Por medio de la reflexión obtendremos el método on del subscriber que espera recibir el evento recuperado, al cual podremos llamar pasándole dicho evento"
    },
    {
      type: "text",
      content: "En este punto, si se produce un error debido a que el subscriber no esté implementando un método on (derivado de la reflexión), lanzaremos una Exception hacia arriba notificándolo. Diferenciaremos este tipo de errores de aquellos que puedan generarse una vez se haya llamado sin problema al subscriber (veremos en el siguiente video como gestionar estos errores)"
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
      content: "¡Nos vemos en el siguiente video: 🐣 Gestión de errores al consumir con RabbitMQ!"
    }
  ],
};
