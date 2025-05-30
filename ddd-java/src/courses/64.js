export default {
  title: "64 Subscriber a todos los eventos",
  videoId: "euosXClrgy0",
  notes: [
    { type: "subtitle", content: "👂 Subscriber a todos los eventos" },
    {
      type: "text",
      content: "Una cuestión muy interesante que nos habéis planteado es cómo haríamos para establecer un subscriptor que escuchase todos los eventos sin necesidad de incluirlos todos en de forma explícita en este subscriptor"
    },
    {
      type: "text", 
      content: "Esta casuística no se repetirá en muchas ocasiones pero si que podemos encontrarla cuando queremos llevar a cabo acciones analíticas en nuestra aplicación. Podríamos registrar todo lo que sucede en ella y almacenarlo (Event Store) para luego explotarlo en gráficas o consultas masivas 🍭"
    },
    {
      type: "subtitle",
      content: "Clase StoreDomainEventOnOccurred:"
    },
    {
      type: "code",
      content: "// ...\n@EventListener\npublic void on(DomainEvent event) {\n    AnalyticsDomainEventId id = new AnalyticsDomainEventId(event.eventId());\n    AnalyticsDomainEventAggregateId aggregateId = new AnalyticsDomainEventAggregateId(event.aggregateId());\n    AnalyticsDomainEventName name = new AnalyticsDomainEventName(event.eventName());\n    AnalyticsDomainEventBody body = new AnalyticsDomainEventBody(event.toPrimitives());\n\n    storer.store(id, aggregateId, name, body);\n}"
    },
    {
      type: "text",
      content: "Para recoger todos los eventos sin necesidad de añadir cada uno de ellos al subscriber (lo cual redundaría en una violación del OCP de SOLID) será tan sencillo como indicarle que escuche la clase abstracta DomainEvent de la cual extienden todos nuestros eventos. Así, nuestras implementaciones de EventBus interpretarán esto como que debe pasarle cualquier clase que extienda de DomainEvent 🙆‍♂"
    },
    {
      type: "text",
      content: "Por supuesto, orientarnos a este nivel de generalización con los eventos también implica que no podremos hacer uso de ningún método que sea específico de un evento en concreto (Siempre podríamos recurrir a hacer casting de los eventos comprobando la instancia concreta, pero estaríamos incurriendo precisamente en una violación del OCP)"
    },
    {
      type: "text",
      content: "Finalmente, siguiendo el propósito que que comentábamos de alimentar un event store, enviaríamos los datos del evento al caso de uso donde persistiríamos el evento como un nuevo agregado en BD"
    },
    {
      type: "text",
      content: "Este flujo resulta super interesante ya que supone aprovechar los beneficios que ya veníamos viendo durante el curso acerca de la publicación de eventos para obtener un beneficio añadido como es el hecho de registrar todos los sucesos que tengan lugar en el universo de nuestra aplicación con las amplias opciones de consumo que esto nos ofrece"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🤕 Gestión de errores!"
    }
  ],
};
