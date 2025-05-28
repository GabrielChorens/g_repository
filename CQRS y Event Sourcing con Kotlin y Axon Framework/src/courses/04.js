export default {
  title: "04 Implementación de la infraestructura de CQRS",
  videoId: "bqz24ynichk",
  notes: [
    {
      type: "text",
      content:
        "En todos los proyectos dónde vamos a querer trabajar tenemos la necesidad de librerías, frameworks, drivers… dónde sustentar las lógicas que vamos a desarrollar. Además en nuestro caso concreto además de querer crear una API y acabar guardando datos en una BBDD, queremos usar los principios de CQRS.",
    },
    {
      type: "text",
      content:
        "Por lo tanto vamos a necesitar implementaciones para los componentes estudiados en el capítulo anterior:",
    },
    {
      type: "text",
      content:
        "Command Bus.\nCommand DTO.\nCommand Handlers.\nQuery Bus.\nQuery DTO.\nQuery Handlers.\nEvent Bus.\nEvent DTO.\nEvent Handlers.",
    },
    {
      type: "text",
      content:
        "Aunque Axon Framework ya proporciona las implementaciones básicas para poder usar CQRS, hemos querido crear unas adaptaciones para poder usar los conceptos CQRS de forma más natural. Esas adaptaciones son públicas y las vamos a usar en forma de dependencia en nuestro proyecto:",
    },
    {
      type: "link",
      content: "https://github.com/kotato/KAxon-CQRS",
    },
    {
      type: "subtitle",
      content: "Cómo se usa?",
    },
    {
      type: "text",
      content:
        "Para activar el uso de nuestra dependencia y por lo tanto de las implementaciones de CQRS deberemos añadir la anotación @EnableCqrs en la configuración de la aplicación.",
    },
    {
      type: "image",
      content: "src/assets/04a.png",
    },
    {
      type: "subtitle",
      content: "Query Bus",
    },
    {
      type: "text",
      content:
        "Nuestra dependencia ya proporciona una implementación de Query Bus funcional. Así que simplemente se trata de inyectarlo allí donde lo necesitemos.",
    },
    {
      type: "image",
      content: "src/assets/04b.png",
    },
    {
      type: "subtitle",
      content: "Query DTO",
    },
    {
      type: "text",
      content:
        "Las clases que definen las Queries serán simples data classes de Kotlin que implementarán la interfaz Query definida en nuestra dependencia.",
    },
    {
      type: "image",
      content: "src/assets/04c.png",
    },
    {
      type: "subtitle",
      content: "Query Handlers",
    },
    {
      type: "text",
      content:
        "Los Query Handlers van a ser Beans de Spring con un método anotado con @QueryHandler. De esta forma, el sistema va a registrar el handler en el Query Bus para atender a la Query del tipo que especifiquemos como primer parámetro en el método.",
    },
    {
      type: "image",
      content: "src/assets/04d.png",
    },
    {
      type: "subtitle",
      content: "Command DTO",
    },
    {
      type: "text",
      content:
        "Las clases que definen los Commands serán simples data classes de Kotlin que implementarán la interfaz Command definida en nuestra dependencia.",
    },
    {
      type: "image",
      content: "src/assets/04e.png",
    },
    {
      type: "subtitle",
      content: "Command Handlers",
    },
    {
      type: "text",
      content:
        "Los Command Handlers van a ser Beans de Spring con un método anotado con @CommandHandler. De esta forma, el sistema va a registrar el handler en el Command Bus para atender al Command del tipo que especifiquemos como primer parámetro en el método.",
    },
    {
      type: "image",
      content: "src/assets/04f.png",
    },
    {
      type: "subtitle",
      content: "Command Bus",
    },
    {
      type: "text",
      content:
        "Al igual que con el Query Bus, la dependencia que hemos añadido al proyecto nos proporciona un Command Bus y que también podemos inyectar.",
    },
    {
      type: "image",
      content: "src/assets/04g.png",
    },
    {
      type: "subtitle",
      content: "Event Bus",
    },
    {
      type: "text",
      content:
        "Axon proporciona una implementación de Event Bus funcional. Normalmente no necesitaremos inyectarlo en ninguna parte a no ser que tengamos que publicar un evento directamente (sin aplicarlo a un agregado, ya lo veremos). Habitualmente sólo usaremos los event handlers.",
    },
    {
      type: "subtitle",
      content: "Event DTO",
    },
    {
      type: "text",
      content:
        "Las clases que definen los eventos serán simples data classes de Kotlin que implementarán la interfaz DomainEvent.",
    },
    {
      type: "image",
      content: "src/assets/04h.png",
    },
    {
      type: "subtitle",
      content: "Event Handler",
    },
    {
      type: "text",
      content:
        "Los Event Handlers van a ser Beans de Spring con un método anotado con @EventHandler. De esta forma, el sistema va a registrar el handler en el Event Bus para atender al evento del tipo que especifiquemos como primer parámetro en el método.",
    },
    {
      type: "image",
      content: "src/assets/04i.png",
    },
    {
      type: "subtitle",
      content: "Segregación de la BBDD de lectura y escritura",
    },
    {
      type: "text",
      content:
        "Un proyecto que use CQRS va a requerir de cómo mínimo la configuración de dos data sources y dos entity managers.",
    },
    {
      type: "text",
      content: "Podéis encontrar la configuración de la bbdd de escritura en",
    },
    {
      type: "link",
      content:
        "https://github.com/kotato/axon-examples/blob/master/ecommerce-cart/src/main/kotlin/com/kotato/configuration/AxonConfiguration.kt",
    },
    {
      type: "text",
      content: "La configuración de la bbdd de lectura la podéis encontrar en",
    },
    {
      type: "link",
      content: "https://github.com/kotato/axon-examples/blob/master",
    },
    {
      type: "text",
      content:
        "La forma de establecer a que entity manager pertenece cada entity consiste en establecer el path a escanear.",
    },
    {
      type: "subtitle",
      content: "En el proyecto",
    },
    {
      type: "text",
      content:
        "Vamos a seguir con el proyecto que ya iniciamos en anteriores capítulos y vamos a añadir la dependencia a nuestro módulo.",
    },
    {
      type: "image",
      content: "src/assets/04j.png",
    },
    {
      type: "text",
      content:
        "Sobretodo, acordarnos de añadir jitpack como repositorio para las dependencias, sinó no nos resolverá nuestra librería.",
    },
    {
      type: "image",
      content: "src/assets/04k.png",
    },
    {
      type: "text",
      content:
        "Añadida esa dependencia vamos a hacer un pequeño test para comprobar el funcionamiento del Command Bus y el Query Bus. Podéis encontrar el código en:",
    },
    {
      type: "link",
      content:
        "https://github.com/kotato/axon-examples/tree/04-implementacion-de-la-infraestructura-cqrs",
    },
    {
      type: "image",
      content: "src/assets/04l.png",
    },
    {
      type: "image",
      content: "src/assets/04m.png",
    },
  ],
};
