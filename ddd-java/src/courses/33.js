export default {
  title: "33 Publicar eventos en RabbitMQ",
  videoId: "fYRcnVpqExc",
  notes: [
    { type: "subtitle", content: "🐇 Publicar eventos en RabbitMQ" },
    {
      type: "text",
      content: "Una vez visto cómo podemos publicar y consumir nuestros Eventos de Dominio desde MySql, vamos a iterar de nuevo para poder hacerlo con un sistema de colas en RabbitMQ (Os recomendamos que si esto os pilla de nuevas veáis el Curso de Event-Driven Architecture antes de seguir 🙏)"
    },
    {
      type: "text", 
      content: "A nivel de EventBus la implementación será muy similar a lo que ya vimos en la de MySql: por cada evento que recibamos llamaremos al método publish() de la implementación de RabbitMqPublisher pasándole tanto el evento como el exchangeName que hemos definido vía constructor"
    },
    {
      type: "subtitle",
      content: "Clase RabbitMqPublisher:"
    },
    {
      type: "code",
      content: "@Service\npublic final class RabbitMqPublisher {\n\t\t// ...\n\n    public void publish(DomainEvent domainEvent, String exchangeName) throws AmqpException {\n        String serializedDomainEvent = DomainEventJsonSerializer.serialize(domainEvent);\n\n        Message message = new Message(\n            serializedDomainEvent.getBytes(),\n            MessagePropertiesBuilder.newInstance()\n                                    .setContentEncoding(\"utf-8\")\n                                    .setContentType(\"application/json\")\n                                    .build()\n        );\n\n        rabbitTemplate.send(exchangeName, domainEvent.eventName(), message);\n    }\n\n    // ..."
    },
    {
      type: "text",
      content: "Este publisher recibirá por constructor un RabbitTemplate, librería perteneciente a Spring y, gracias a que tenemos la anotación @Service, se inyectará automágicamente (Podríamos haber utilizado Spring Cloud pero creemos que el hecho de ser tan genérico hace que nos incluya conceptos que no son propios de RabbitMQ y apostamos por algo más concreto que nos permita definir un estándar propio y no vernos atados al estándar que nos obligaría a utilizar en este caso Spring Cloud)"
    },
    {
      type: "text",
      content: "Una vez dentro del publish() de esta clase lo primero que haremos será serializar el evento completo (no sólo el body) con el formato que podéis ver en este serializador, recogiendo los datos en dos estructuras 'data' y 'meta'. Esta estructura 'data' almacenará en un primer nivel los datos estándar de comunicación y en un segundo nivel dentro de 'attributes' la información propia del evento en cuestión"
    },
    {
      type: "text",
      content: "Para enviarlo a través de RabbitTemplate convertiremos este Json a un objeto de tipo Message (que es precisamente lo que espera recibir) y se lo pasaremos junto al exchangeName y el nombre del evento que actuará como routingKey (como veíamos en el curso de Comunicación entre Microservicios, la routingKey será lo que nos permita establecer la bindingKey y que el exchange determine si llevar o no un determinado evento a una cola)"
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
      content: "¡Nos vemos en el siguiente video: 😳 Error al publicar eventos Fallback en MySQL!"
    }
  ],
};
