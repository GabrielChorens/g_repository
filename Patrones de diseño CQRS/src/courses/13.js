export default {
  title: "13 FAQ 1",
  videoId: "oyt6uZMSDZc",
  notes: [
    {
      type: "subtitle",
      content: "Análisis de diagrama de flujo CQRS",
    },
    {
      type: "text",
      content:
        "En este último bloque analizamos las interacciones de la comunidad más interesantes para responder dudas y aportar feedback sobre la implementación de CQRS.",
    },
    {
      type: "text",
      content:
        "En este caso analizamos el diagrama compartido por uno de los miembros de la comunidad a fin de identificar dónde instanciar nuestros Value Objects en el flujo de una petición de ‘crear un video’ con CQRS 👀",
    },
    { type: "image", content: "src/assets/13.png" },

    {
      type: "subtitle",
      content: "Método HTTP de entrada",
    },
    {
      type: "text",
      content:
        "Aunque podríamos usar POST, otra opción interesante sería que el identificador del nuevo recurso viniera desde el cliente en la URL, usando PUT.",
    },
    {
      type: "subtitle",
      content: "Flujo de la petición",
    },
    {
      type: "text",
      content:
        "El Controller instancia un Command con los escalares recibidos en la request y lo lanza al CommandBus (Interface).",
    },
    {
      type: "text",
      content:
        "La interface del CommandBus tendría una implementación SyncCommandBus, aunque podríamos usar un nombre más específico (Ej. SymfonyCommandBus) ya que podríamos tener múltiples implementaciones (Ej. Async => RabbitMQ, SNS…).",
    },
    {
      type: "subtitle",
      content: "Instanciación de Value Objects",
    },
    {
      type: "text",
      content:
        "El VideoCreateCommandHandler instancia los Value Objects desde primitivos, para que el caso de uso reciba los VO ya instanciados (desde el Handler o Controller).",
    },
    {
      type: "text",
      content:
        "Sin embargo, actualmente recomendamos delegar esta responsabilidad al constructor de la Entidad (Video), centralizando la lógica en un único punto cohesionado donde la propia entidad gestiona la instanciación de los VO.",
    },
    {
      type: "subtitle",
      content: "Persistencia",
    },
    {
      type: "text",
      content:
        "Una vez instanciada la entidad en el Caso de Uso, persistimos en BD usando una interface VideoRepository implementada por MySqlVideoRepository.",
    },
    {
      type: "subtitle",
      content: "Detalles adicionales",
    },
    {
      type: "text",
      content:
        "Todas las clases del diagrama serían final (excepto las interfaces) y podríamos añadir el acoplamiento de los diferentes Value Objects a la entidad (Ej. VideoId, VideoTitle…) para mayor precisión.",
    },
  ],
};
