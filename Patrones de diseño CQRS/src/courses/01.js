export default {
  title: "01 Introducción",
  videoId: "OGzW9eO4tbE",
  notes: [
    {
      type: "text",
      content: "En esta primera lección haremos un repaso rápido por todos los componentes que intervienen en el flujo de una petición. En concreto será una petición con el fin de crear un nuevo vídeo en un sistema de gestión de vídeos, comentarios y demás 😬"
    },
    {
      type: "text", 
      content: "Importante destacar que en las siguientes lecciones estudiaremos con más detenimiento cada uno de estos componentes y capas que intervienen en nuestra arquitectura. Analizaremos qué beneficio tiene cada uno de ellos para formarnos un criterio de cuándo nos compensa introducirlos."
    },
    {
      type: "subtitle",
      content: "Elementos de la arquitectura"
    },
    {
      type: "text",
      content: "En el vídeo repasamos cada uno de los siguientes elementos:"
    },
    {
      type: "subtitle",
      content: "POST /videos/"
    },
    {
      type: "text",
      content: "Responsabilidad: Servir de protocolo de comunicación con los clientes. Petición a través del protocolo de comunicación HTTP revelando la intención de crear un nuevo recurso bajo la colección de recursos videos."
    },
    {
      type: "subtitle",
      content: "VideoPostController"
    },
    {
      type: "text",
      content: "Capa: Infraestructura"
    },
    {
      type: "text",
      content: "Responsabilidades:\n- Recibir la petición HTTP\n- Recuperar los datos necesarios para la creación del vídeo y encapsularlos en el Comando correspondiente\n- Enviar el comando al bus"
    },
    {
      type: "subtitle",
      content: "CreateVideoCommand"
    },
    {
      type: "text",
      content: "Capa: Aplicación"
    },
    {
      type: "text",
      content: "Responsabilidades:\n- Encapsular los datos necesarios para la creación de un vídeo\n- Permitir su fácil transporte entre capas y serialización"
    },
    {
      type: "text",
      content: "Consideraciones:\n- Para garantizar el propósito de este elemento (fácil transporte y serialización de datos), los datos que contiene deberían ser primitivos o escalares. En resumen, podremos almacenar cualquier tipo de dato que podamos meter en un JSON (string, int, bool, array, etc)\n- Aquí vemos una aplicación del patrón de diseño Data Transfer Object (DTO)"
    },
    {
      type: "subtitle",
      content: "CommandBus"
    },
    {
      type: "text",
      content: "Capa: Dominio (esto representaría el contrato, la interface)"
    },
    {
      type: "text",
      content: "Responsabilidades:\n- Transportar un determinado Command a su CommandHandler correspondiente\n- Almacenar por tanto el mapeo 1 a 1 entre commands y command handlers"
    },
    {
      type: "text",
      content: "Beneficios:\n- Al ser un punto de indirección introducido entre la recepción de la petición y la ejecución de la lógica de negocio asociada, permitirá por tanto cortar el flujo de ejecución y por tanto procesar peticiones de forma asíncrona\n- Al tratarse de un mapeo entre intención de realizar una acción, y la propia ejecución de esa acción con su lógica de negocio pertinente, permite ser reutilizado por cualquier pieza que necesite ejecutar dicha lógica de negocio. Esto es, podremos tirar comandos desde distintos puntos de nuestro sistema y tendremos un único punto de cambio en caso de necesitar modificar cómo deberían tratarse estos comandos (los handlers)."
    },
    {
      type: "subtitle",
      content: "SyncCommandBus"
    },
    {
      type: "text",
      content: "Capa: Infraestructura"
    },
    {
      type: "text",
      content: "Responsabilidades:\n- Implementación concreta de la interface de dominio anteriormente descrita.\n- En este ejemplo se trata de una implementación síncrona. Bloqueará por tanto el hilo de ejecución desde que recibe el command hasta que obtiene una respuesta que permita liberar el hilo de ejecución."
    },
    {
      type: "subtitle",
      content: "CreateVideoCommandHandler"
    },
    {
      type: "text",
      content: "Capa: Aplicación"
    },
    {
      type: "text",
      content: "Responsabilidades:\n- Recibir Command a través del bus\n- Transformar datos del Command a tipos del dominio (value objects, nunca instanciará entidades, de eso se encargará el propio caso de uso).\n- Invocar al caso de uso pasándole los parámetros recibidos ya mapeados a Value Objects."
    },
    {
      type: "subtitle",
      content: "VideoCreator"
    },
    {
      type: "text",
      content: "Capa: Aplicación"
    },
    {
      type: "text",
      content: "Responsabilidades:\n- Encapsular la lógica de negocio asociada a un determinado caso de uso\n- Recibir los datos necesarios para ejecutar los casos de uso\n- Orquestar las llamadas a los distintos elementos que deberán entrar en acción para la consecución del caso de uso (repositorios, servicios de domino, modificaciones en entidades, etc)"
    },
    {
      type: "text",
      content: "Consideraciones:\nEste tipo de elementos son denominados \"Application Services\" en el libro \"Implementing Domain-Driven Desing\" (DDD). No obstante, Sandro Mancuso también los denomina \"Actions\" en sus charlas sobre \"Interaction Driven Design\""
    },
    {
      type: "subtitle",
      content: "Video"
    },
    {
      type: "text",
      content: "Capa: Dominio"
    },
    {
      type: "text",
      content: "Responsabilidad: Representar un determinado concepto de dominio. Se puede entender como Entidad o, en términos de DDD, como Aggregate. Más concretamente, en este caso estaríamos hablando de la Entidad que adopta el rol de Aggregate Root dentro del agregado."
    },
    {
      type: "subtitle",
      content: "VideoRepository"
    },
    {
      type: "text",
      content: "Capa: Dominio"
    },
    {
      type: "text",
      content: "Responsabilidad:\n- Expresar el contrato de dominio para la interacción con la capa de persistencia.\n- Guardar, actualizar, y eliminar recursos de tipo video"
    },
    {
      type: "text",
      content: "Consideraciones:\n- Implementa el patrón de diseño \"Repository\".\n- Patrón de diseño que nos interesará evitar: Data Access Objects (DAO). Motivo: Forzar a que nuestra lógica de negocio se encuentre en los casos de uso o servicios de dominio. Evitar la explosión de métodos en nuestras interfaces de interacción con la persistencia."
    },
    {
      type: "subtitle",
      content: "MySqlVideoRepository"
    },
    {
      type: "text",
      content: "Capa: Infraestructura"
    },
    {
      type: "text",
      content: "Responsabilidad: Implementación concreta de la interface antes descrita. Proveer de la lógica necesaria para interaccionar con la base de datos MySQL."
    }
  ],
};
