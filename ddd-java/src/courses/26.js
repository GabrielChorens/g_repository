export default {
  title: "26 Implementación del Event Bus con Spring Events",
  videoId: "XNG2X9wC9RM",
  notes: [
    { type: "subtitle", content: "Implementación del Event Bus con Spring Events" },
    {
      type: "text",
      content: "Hemos visto cómo se publicarán Eventos de Dominio desde el Application Service y preparado los tests unitarios para validarlo, por lo que el siguiente paso será añadir la implementación del EventBus gracias a Spring Events para verlo funcionando realmente"
    },
    {
      type: "text",
      content: "Spring Events es la herramienta que nos provee SpringFramework para la publicación de eventos y es una implementación bastante sencilla de integrar en nuestro proyecto. Viene a sustituir la librería reactor-bus de reactor que actualmente está deprecada (ojo 👀 aunque esta librería está en desuso, reactor-core si que se mantiene en pleno funcionamiento!)"
    },
    { type: "subtitle", content: "Clase SpringApplicationEventBus:" },
    {
      type: "code",
      content: "@Service\npublic class SpringApplicationEventBus implements EventBus {\n    private final ApplicationEventPublisher publisher;\n\n    public SpringApplicationEventBus(ApplicationEventPublisher publisher) {\n        this.publisher = publisher;\n    }\n\n    @Override\n    public void publish(final List<DomainEvent> events) {\n        events.forEach(this::publish);\n    }\n\n    private void publish(final DomainEvent event) {\n        this.publisher.publishEvent(event);\n    }\n}"
    },
    {
      type: "text",
      content: "Lo primero que podemos ver en esta implementación es que vamos a inyectar en el constructor el ApplicationEventPublisher que nos ofrece Spring y que nos provee tanto del mapeo de <EventListeners,Domain Events> como de los métodos encargados de publicar los eventos a todos los casos de uso que estén escuchando. De este modo, lo que haremos será englobar y adaptar esta pieza de Spring al contrato especificado en nuestra interface EventBus (y no modificar nuestro contrato en base a las particularidades de la implementación)"
    },
    {
      type: "text",
      content: "Tal como hemos visto en lecciones anteriores, gracias a la anotación @Service el propio framework identificará las dependencias que debe inyectar por lo que será quien se encarge de inicializar este publicador de eventos"
    },
    {
      type: "text",
      content: "Finalmente, a nivel de caso de uso lo que haremos será añadir la anotación @EventListener (de Springframework 🤷‍♀) al método del caso de uso que queramos que esté escuchando, pasando como argumento de entrada el propio evento de dominio al que se subscriba"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🤟 Incrementar contador de curso!"
    }
  ],
};
