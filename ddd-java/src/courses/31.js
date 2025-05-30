export default {
  title: "31 Test y comando para el consumidor de eventos de dominio",
  videoId: "NyDE-KdI5wU",
  notes: [
    { type: "subtitle", content: "Test y comando para el consumidor de eventos de dominio" },
    {
      type: "text",
      content: "Testeando la publicación y consumo de eventos ✅"
    },
    {
      type: "text", 
      content: "A nivel de test queremos comprobar que podemos publicar y posteriormente consumir eventos de dominio sin que se produzca ningún error en el proceso"
    },
    {
      type: "subtitle",
      content: "Clase MySqlEventBusShould:"
    },
    {
      type: "code",
      content: "@Test\nvoid publish_and_consume_domain_events_from_msql() {\n    CourseCreatedDomainEvent domainEvent = CourseCreatedDomainEventMother.random();\n\n    eventBus.publish(Collections.singletonList(domainEvent));\n\n    consumer.consume();\n}"
    },
    {
      type: "text",
      content: "Lo que haremos por tanto será crearnos un evento cualquiera a través del ObjectMother para, en primer lugar, publicarlo con la implementación en MySql del EventBus y finalmente ejecutar el consumer que también estará tirando de la implementación en MySql. En este caso la validación pasa por ejecutar ammbas piezas sin que se haya producido ninguna excepción aunque podríamos hilar más fino y comprobar también que efectivamente se está llamando al EventBus local que usabamos dentro del consumer pasándole la instancia del evento que acabamos de publicar"
    },
    {
      type: "text",
      content: "(Podéis ver el test en este punto desde este commit del repo)"
    },
    {
      type: "subtitle",
      content: "Preparando el comando para consumir los eventos 🏎"
    },
    {
      type: "text",
      content: "Para poder ejecutar el consumidor de eventos cuando sea necesario vamos a crear un comando de consola (CLI). Estos comandos, como vimos al principio del curso cuando configurábamos la aplicación, se definen dentro de un HashMap de tipo <nombreComando, Comando> dentro de la clase de aplicación (En este caso MoocBackendApplication), lo que permite que sea cada equipo de desarrollo quien tome la responsabilidad de sus propios consumidores"
    },
    {
      type: "text",
      content: "Este comando recibe por constructor nuestra implementación en MySql del consumer y lo ejecuta dentro del método execute()"
    },
    {
      type: "text",
      content: "La idea será aprovechar que estamos trabajando con un lenguaje compilado como Java para mantener indefinidamente ejecutándose este proceso 🏃, a esto podríamos añadirle mayor complejidad a través de orquestadores que nos faciliten el escalado del volumen de consumidores en determinados contextos"
    },
    {
      type: "text",
      content: "Por otro lado, también es importante que establezcamos algún controller interno que nos permita establecer una cláusula de 'Graceful shutdown' para parar este proceso si fuera necesario como en el caso de ir a desplegar de nuevo la aplicación, dejando de consumir temporalmente estos eventos. Ojo 👀! Aunque hayamos parado de hacer peticiones a la BD, es muy importante dejar un tiempo prudencial para que terminen de procesarse los últimos eventos que han sido recuperados"
    },
    {
      type: "text",
      content: "También debemos tener presente tanto eliminar los eventos una vez procesados como el hecho de limpiar la Unit of Work a cada vuelta de estas iteraciones"
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
      content: "¡Nos vemos en la siguiente lección: ⚡️ Publicar eventos de dominio asíncronos y escalables utilizando RabbitMQ!"
    }
  ],
};
