export default {
  title: "03 Introducción a CQRS",
  videoId: "c6z1_rXwZiI",
  notes: [
    {
      type: "text",
      content: "Tradicionalmente hemos diseñado sistemas que al ejecutar operaciones de negocio, aplicaban cambios en un modelo de datos. Además ese mismo modelo nos servía para realizar consultas."
    },
    {
      type: "text", 
      content: "Así que un mismo modelo podía tener dos usos. Tal vez no nos hayamos parado a pensar que eso viola el principio de única responsabilidad (SRP - Single Responsibility Principle)."
    },
    {
      type: "text",
      content: "Nos tenemos que dar cuenta que esos dos usos tienen requisitos diferentes a nivel funcional, seguridad, escalabilidad, latencia…"
    },
    {
      type: "text",
      content: "Command Query Responsibility Segregation (CQRS) es un patrón de arquitectura en el que se separan y se desacoplan la escritura (vía commands) de la lectura (vía queries)."
    },
    {
      type: "text",
      content: "Los commands representan las intenciones de aplicar acciones de negocio y que por lo tanto aplicaran cambios de estado al sistema."
    },
    {
      type: "text",
      content: "Por otro lado, las queries son las peticiones de información al sistema y que por lo tanto no aplicarán cambios al estado del sistema."
    },
    {
      type: "text",
      content: "Tanto commands como queries serán atendidos por un componente llamado handler. Cada handler será capaz de atender a un command o query concreto realizando las peticiones necesarias a los componentes que implementan la lógica de negocio."
    },
    {
      type: "text",
      content: "Como consecuencia del planteamiento de commands/queries que son procesados por handlers concretos preparados específicamente para atenderlos, tenemos un sistema que favorece el ISP (Interface Segregation Principle) ya que se tratan de interfaces perfectamente adaptadas a la necesidad de negocio que representan."
    },
    {
      type: "text",
      content: "Como podemos imaginar cada subsistema tiene un diseño, modelos de datos, sistemas de persistencia y optimizaciones específicas. Habitualmente lo que suele ocurrir es que el subsistema de lectura es más sencillo que el de escritura."
    },
    {
      type: "image",
      content: "src/assets/03.png"
    },
    {
      type: "subtitle",
      content: "Subsistema de escritura (Command)"
    },
    {
      type: "text",
      content: "El subsistema de escritura es el encargado de gestionar las peticiones de ejecución de comandos.\n\nSu responsabilidad será:\n\nRecibir peticiones de comandos.\nHacer llegar el comando al handler adecuado capaz de gestionarlo.\nValidar que sea consistente con el estado actual del sistema.\nEjecutar una acción que aplica un cambio en el sistema. Un sólo cambio respetando SRP e ISP para mantener la simplicidad.\nNotificar el cambio. De esta forma el subsistema de lectura podrá sincronizar el cambio."
    },
    {
      type: "subtitle", 
      content: "Subsistema de lectura (Query)"
    },
    {
      type: "text",
      content: "El subsistema de lectura gestionará los cambios que se producen en el subsistema de escritura. Los cambios se recibirán por medio de un sistema de publicación y estos se proyectarán en modelos y formatos oportunos para responder a las consultas que se le formulen.\n\nSu responsabilidad será:\n\nRecibir las notificaciones de cambios por parte del subsistema de escritura.\nFiltrado. Ignorará los cambios y/o datos en los que no esté interesado.\nOpcionalmente:\nTransformación.\nAgregación de datos.\nActualización de la base de datos del sistema de lectura.\nRecibir peticiones de consulta.\nHacer llegar la query al handler correcto capaz de gestionarla.\nEjecutar la query:\nEjecutar la consulta en la BBDD.\nExportar los datos de la BBDD y serializarlos."
    },
    {
      type: "text",
      content: "En el caso que usemos una BBDD relacional, podemos definir un esquema desnormalizado y por lo tanto más óptimo ya que las consultas no requerirán usar joins. Las consultas SQL (selects) serán simples y óptimas.\n\nAdemás deberíamos tener una proyección para atender a cada necesidad de consulta."
    },
    {
      type: "subtitle",
      content: "Commands y Queries"
    },
    {
      type: "text",
      content: "Desde el punto de vista de uso del sistema, los desarrolladores vamos a tener \"intenciones\" de consultar datos o ordenar operaciones.\n\nComo ya comentamos, la representación de esas intenciones son los commands y queries que tienen forma de DTO (Data Transfer Objects) con un significado concreto dependiendo de la acción que queramos ejecutar.\n\nPor ejemplo:\n\nAddCartItemCommand\nRemoveCartItemCommand\nFindCartByUserIdQuery\n…\nEstos DTOs van a contener propiedades de tipos escalares para facilitar la serialización a través de los buses y el desacople de cualquier tipo de dominio."
    },
    {
      type: "subtitle",
      content: "Buses"
    },
    {
      type: "text",
      content: "Habitualmente para articular y conectar diversas partes de nuestro sistema se usan buses.\n\nUn bus podría verse como una simple función que ejecuta todos los handlers registrados dónde la clave corresponde al tipo del parámetro de entrada."
    },
    {
      type: "subtitle",
      content: "Command bus y Query bus"
    },
    {
      type: "text",
      content: "El Command bus y un Query bus, uno para cada subsistema.\n\nLa responsabilidad del bus será:\n\nMantener un listado de handlers.\nSaber a qué handler corresponde cada uno de los commands o queries.\nHacer llegar el command o query al handler adecuado capaz de gestionarlo.\nConectar diversas partes de la arquitectura del sistema:\nCommand bus:\nAdaptadores ↔️ Dominio\nQuery bus:\nAdaptadores ↔️ Dominio\nDominio ↔️ Dominio\nAntes de continuar, aclaremos de qué hablamos cuando decimos dominio y adaptadores.\n\nEl dominio es la capa que contiene la lógica de negocio y define cómo las capas externas pueden interactuar con ella. Define el comportamiento y restricciones de nuestra aplicación.\n\nLos adaptadores son los puentes entre la aplicación y el servicio que requiere la aplicación. Dicho de otro modo, son los componentes que conectan el dominio al mundo real. Por ejemplo los controladores que gestionan endpoints HTTP.\n\nRespecto a la conexión de diversas partes del sistema, vemos que en el caso del Command bus no comentamos que se pueda pueda conectar de dominio a dominio a diferencia del Query bus. Obviamente si lo queremos hacer, nadie nos lo va a impedir, pero permítenos darte algunos argumentos en contra para evitar esa práctica:\n\nAceptando SRP como un principio a seguir. Cuando lanzamos un command desde un adaptador lo que queremos conseguir a priori es que se aplique un sólo cambio. De esta forma tendremos un código sencillo de entender, depurar y evolucionar. Si además desde el servicio de aplicación lanzamos otro command para realizar más operaciones, estaríamos complicando una lógica que era muy simple.\nExiste un mecanismo que invierte la responsabilidad en el caso que sintamos la necesidad de lanzar un command desde un servicio. Podemos lanzar eventos y actuar en las otras partes del sistema con event handlers. Lo veremos más adelante.\nSi evitamos \"complectar\" (entrelazar, intercalar o trenzar) servicios crearemos un sistema más simple (compuesto de piezas que hacen una sola cosa), más granular, menos \"osificado\" (con menos estructuras que obligan a seguir un camino marcado) y que por lo tanto va a facilitar el cambio y evolución del mismo.\nEn el caso del Query bus sí que permitimos que desde el dominio se puedan lanzar consultas, habitualmente desde servicios de aplicación que se encuentran detrás de command handlers. Tal vez, la primera idea que nos viene a la cabeza sea la de, \"pues le inyecto el repositorio que necesito y ya lo tengo\". Si bien es cierto que parece lo más \"fácil\" (sencillo de aplicar, familiar), la realidad es que no es lo más \"simple\". Si tomamos ese camino, nos estamos llevando lógica de cómo funcionan otras partes de nuestro sistema cuando realmente lo que queremos es obtener una respuesta a una consulta, queremos saber el qué, y no nos importa el cómo se consiga esa respuesta.\n\nAsí pues, resulta buena idea inyectar el query bus a un servicio para que pueda satisfacer consulta de datos sin acoplarse a cómo funcionan otras partes del sistema o dónde estén."
    },
    {
      type: "subtitle",
      content: "Event Bus"
    },
    {
      type: "text",
      content: "Habíamos comentado que una de las responsabilidades de nuestro subsistema de lectura era recibir las notificaciones de cambios por parte del subsistema de escritura. Pues bien, esas notificaciones son los eventos que se producen en el sistema de escritura y son publicados. Publicados, dónde? La respuesta es, publicados al Event Bus.\n\nPodemos definir un Event Bus como un sistema de mensajería que nos facilita la intercomunicación entre componentes usando el patrón publisher/subscriber.\n\nEsta solución habilita que el componente que publica y los componentes que están suscritos no tengan conciencia de la existencia del otro (hemos conseguido desacoplar completamente nuestros componentes).\n\nSin embargo, usando este sistema, nos vamos a tener que enfrentar a la consistencia eventual. Qué es la consistencia eventual? Cuando aplicamos un cambio a nuestro subsistema de escritura, este no estará reflejado en el subsistema de lectura immediatamente. Siendo así, si aplicamos un cambio y hacemos una petición para traer información relacionada con el cambio, puede que obtengamos el antiguo estado.\n\nNormalmente los cambios entre dichos componentes suelen ser casi instantáneos. Sí es cierto que aún y así, podemos llegar a tener inconsistencia eventual en algún momento. Como bien sabemos, la perfección no existe y todo pro suele tener algún contra."
    },
    {
      type: "subtitle",
      content: "CQRS + Agregados"
    },
    {
      type: "text",
      content: "Un comando lanzado al Command Bus con la intención de realizar un cambio en el sistema, acabará siendo atendido por un único agregado (imaginemos un comando para añadir un producto al carrito). El agregado intentará completar la operación en forma de transacción pero en caso que no se pueda completar, lanzará una excepción.\n\nCabe añadir un matiz más. Respetando SRP (Single Responsibility Principle), un comando lanzado al sistema sólo puede cambiar el estado en un agregado. Si intentamos que un comando aplique cambios en más de un agregado, el sistema no lo debe permitir.\n\nPero si lo dejáramos ahí, sería poco viable crear aplicaciones reales. Es verdad que buscamos que una acción (comando) desencadene en una sola reacción o cambio del sistema, en nuestro caso obtendríamos la publicación de un evento. Y lo que haremos será suscribirnos a ese evento para poder aplicar otros cambios a otros agregados. Por ejemplo podríamos escuchar el evento de carrito confirmado para aplicar la operación de creación de pedido en el agregado \"Order\"."
    },
    {
      type: "subtitle",
      content: "Beneficios"
    },
    {
      type: "text",
      content: "Usar CQRS nos proporciona beneficios:\n\nEl escalado de los subsistemas de lectura y escritura está separado por lo que se puede optimizar el que lo necesite sin afectar al otro. En negocios donde se recibe gran cantidad de tráfico puede ser una necesidad vital.\nCada subsistema puede evolucionar independientemente. Habitualmente el ritmo de evolución del subsistema de lectura y de escritura es muy diferente. Nuestra experiencia nos indica que es más habitual añadir nuevas consultas que nuevos comandos.\nAl segregar los comandos y las consultas estamos tendiendo a crear un sistema con piezas con menos responsabilidad y por lo tanto más simples.\nPodemos relegar datos que no son importantes para mantener el estado de nuestra aplicación al subsistema de lectura. De esta forma, nuestros agregados/entidades son más simples, más fáciles de entender y tienen un propósito único."
    },
    {
      type: "subtitle",
      content: "Contrapartidas"
    },
    {
      type: "text",
      content: "En todo caso esta aproximación al modelado del dominio tiene un coste:\n\nEl sistema es complejo en el sentido que tiene más elementos y requiere de una buena organización. En función del tamaño de dichos elementos, de lo explícito de sus relaciones y responsabilidades, tendremos un sistema más o menos complejo de usar y entender.\nEl tener sistemas de persistencia separados para los comandos y las consultas provoca inconsistencia eventual.\nA veces cuesta diferenciar algunos datos que no pertenecen al estado de nuestro sistema y tendimos a ponerlos en los agregados/entidades del sistema de escritura, cuando realmente son cómputos y cálculos exclusivos del sistema de lectura."
    },
    {
      type: "subtitle",
      content: "Unidireccionalidad, porqué usar UUIDs"
    },
    {
      type: "text",
      content: "Cuando empezamos a sumergirnos en la arquitectura CQRS y nos planteamos cómo lo vamos a poner en práctica nos aparecen dudas respecto a cómo vamos a obtener los identificadores de los agregados o entidades.\n\nPor un lado, cuando pensamos en el command bus, visualizamos un comportamiento que parece moverse en una sola dirección. Desde los adaptadores (por ejemplo controladores) hacia el dominio y el sistema de persistencia. Y sólo en el caso que exista algún problema se interrumpirá la ejecución y se lanzará una excepción.\n\nSi estamos acostumbrados a obtener los identificadores desde el sistema de persistencia o incluso desde algún servicio de dominio, nos va a parecer que no encaja demasiado bien con el funcionamiento del command bus ya que este no nos puede responder con dato alguno.\n\nSiguiendo este razonamiento y llegado a este punto, deberíamos tomar aire un momento y cuestionarnos si eso que nos parece normal porque estamos acostumbrados, tiene del todo sentido y sinó será que nos estamos complicando la vida un poco más de la cuenta 🤔. No tiene mucho más sentido que si externamente al dominio se nos pide que creemos algo, también se nos determine el identificador de aquello que queremos crear? Es más, cómo sinó vamos a poder saber que una petición de creación nos llega duplicada? Además por qué queremos delegar la creación de identificadores a la infraestructura? No añade más complejidad accidental llegar hasta la infraestructura para obtener el identificador y luego volverlo a enviar junto con el resto del objeto? Porque no aplicamos el principio \"tell, don't ask\"? Si así lo hacemos, vamos a obtener tres grandes beneficios:\n\nSimplicidad\nIdempotencia\nNo tener que aplicar lógica defensiva por los posibles errores o estados inconsistentes por haber delegado la creación de los identificadores a la infraestructura.\nY cómo lo podemos hacer? Pues usando UUIDs. Un algoritmo matemático nos puede proporcionar un identificador único con una probabilidad extremadamente baja de colisión.\n\nAlgunos seguro que os preguntaréis qué impacto tiene guardar UUIDs como clave primaria en la BBDD. Obviamente no va a ser lo mismo usar un entero que un UUID. De todos formas el impacto no es tan grande como pueda parecer ya que existen formas de optimizar la forma de guardar el UUID. En el caso concreto de MySQL, debemos usar \"BINARY(16)\" ya que es la forma más óptima de guardar un UUID.\n\nTambién comentar que el uso de UUIDs cada vez es más común y los desarrolladores de motores de BBDD se dan cuenta de ello y invierten esfuerzos a desarrollar optimizaciones."
    },

    {
      type: "text", 
      content: "Por un lado, cuando pensamos en el command bus, visualizamos un comportamiento que parece moverse en una sola dirección. Desde los adaptadores (por ejemplo controladores) hacia el dominio y el sistema de persistencia. Y sólo en el caso que exista algún problema se interrumpirá la ejecución y se lanzará una excepción."
    },
    {
      type: "text",
      content: "Si estamos acostumbrados a obtener los identificadores desde el sistema de persistencia o incluso desde algún servicio de dominio, nos va a parecer que no encaja demasiado bien con el funcionamiento del command bus ya que este no nos puede responder con dato alguno."
    },
    {
      type: "text",
      content: "Siguiendo este razonamiento y llegado a este punto, deberíamos tomar aire un momento y cuestionarnos si eso que nos parece normal porque estamos acostumbrados, tiene del todo sentido y sinó será que nos estamos complicando la vida un poco más de la cuenta 🤔. No tiene mucho más sentido que si externamente al dominio se nos pide que creemos algo, también se nos determine el identificador de aquello que queremos crear? Es más, cómo sinó vamos a poder saber que una petición de creación nos llega duplicada? Además por qué queremos delegar la creación de identificadores a la infraestructura? No añade más complejidad accidental llegar hasta la infraestructura para obtener el identificador y luego volverlo a enviar junto con el resto del objeto? Porque no aplicamos el principio \"tell, don't ask\"?"
    },
    {
      type: "text",
      content: "Si así lo hacemos, vamos a obtener tres grandes beneficios:\n\nSimplicidad\nIdempotencia\nNo tener que aplicar lógica defensiva por los posibles errores o estados inconsistentes por haber delegado la creación de los identificadores a la infraestructura."
    },
    {
      type: "text",
      content: "Y cómo lo podemos hacer? Pues usando UUIDs. Un algoritmo matemático nos puede proporcionar un identificador único con una probabilidad extremadamente baja de colisión."
    },
    {
      type: "text",
      content: "Algunos seguro que os preguntaréis qué impacto tiene guardar UUIDs como clave primaria en la BBDD. Obviamente no va a ser lo mismo usar un entero que un UUID. De todos formas el impacto no es tan grande como pueda parecer ya que existen formas de optimizar la forma de guardar el UUID. En el caso concreto de MySQL, debemos usar \"BINARY(16)\" ya que es la forma más óptima de guardar un UUID."
    },
    {
      type: "text",
      content: "También comentar que el uso de UUIDs cada vez es más común y los desarrolladores de motores de BBDD se dan cuenta de ello y invierten esfuerzos a desarrollar optimizaciones."
    }
  ],
};
