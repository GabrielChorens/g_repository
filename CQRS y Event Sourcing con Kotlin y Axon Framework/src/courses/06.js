export default {
  title: "06 Event Sourcing",
  videoId: "XgXfsc5hrVM",
  notes: [

    {
      type: "text",
      content: "Ya hemos visto en capítulos anteriores que usando los principios de CQRS, para aplicar cambios en nuestro sistema, enviamos comandos que acaban desencadenando en eventos reflejo de los cambios de estado necesarios para satisfacer al comando. Es pues, natural pensar en el estado actual de un agregado como en la suma de los de eventos lanzados por los comandos. Persistir el estado de esa forma, como una lista de eventos, es a lo que vamos a llamar Event Sourcing."
    },
    {
      type: "text", 
      content: "Si modelamos nuestro sistema usando sincronizaciones (entre los subsistemas de escritura y lectura u otros) basadas en eventos, usar Event Sourcing en la persistencia va cogido de la mano."
    },
    {
      type: "text",
      content: "Y eso es lo que vamos a hacer en nuestro subsistema de escritura."
    },
    {
      type: "text",
      content: "En resumen, podemos decir que el \"presente\" de un agregado es el \"plegado\" (fold) sobre su historia."
    },
    {
      type: "text",
      content: "Llevándolo a la práctica, vamos a disponer de un repositorio (event store) que nos ofrecerá dos operaciones respecto a un determinado identificador (clave primaria) de un agregado:"
    },
    {
      type: "text",
      content: "Load: Nos entregará el listado ordenado de todos los eventos que se han aplicado al agregado.\nApply: Añadirá un nuevo evento a la secuencia de eventos que componen el estado del agregado."
    },
    {
      type: "text",
      content: "Si nos preguntamos cómo podremos hacer búsquedas por algún campo de algún evento aplicado, la respuesta es \"no se puede\". Buscar por un evento por una propiedad que no sea el identificador del agregado es una consulta y esa responsabilidad recae sobre el subsistema de lectura."
    },
    {
      type: "text",
      content: "Los agregados forman parte del subsistema de escritura y solo necesitan disponer del último estado para ejecutar un nuevo comando."
    },
    {
      type: "subtitle",
      content: "Event Sourcing y CQRS"
    },
    {
      type: "text",
      content: "Como estáis viendo a medida que desgranamos lo que es Event Sourcing, no parece que tenga sentido usarlo sólo de forma aislada."
    },
    {
      type: "text",
      content: "Event Sourcing suele ir complementado de CQRS. De hecho tendría más sentido decirlo de otro modo, partiendo de la experiencia de usar CQRS en nuestros proyectos, es natural evolucionar hacia Event Sourcing."
    },
    {
      type: "text",
      content: "Habitualmente, un equipo suele ir mejorando y madurando la forma de desarrollar sus proyectos, profundizando en el modelado del dominio y aplicando nuevos patrones de arquitecturas llegando a un punto dónde se empieza a usar CQRS. A partir de ahí es fácil el paso a Event Sourcing."
    },
    {
      type: "text",
      content: "Porque Event Sourcing + CQRS:\n\nDesde un punto de vista CQRS:\nAplicamos una secuencia de comandos a nuestro sistema para cambiar estado.\n↓\n\nDicho de otro modo, vemos una secuencia de eventos que describen cambios en nuestro sistema.\n↓\n\nPor lo tanto es natural pensar en el estado actual de un agregado como en una secuencia ordenada de eventos."
    },
    {
      type: "text",
      content: "El repositorio (event store) ofrece una funcionalidad limitada y relativa sólo a la clave primaria del agregado:\nTenemos que apoyarnos en el subsistema de lectura para poder obtener el identificador del agregado a partir de otros atributos."
    },
    {
      type: "subtitle",
      content: "Beneficios"
    },
    {
      type: "text",
      content: "Solventa el problema de consistencia de datos en arquitectura de microservicios/NoSQL (sin transacciones). Aprovechando que el estado del agregado es una secuencia de eventos, se añade al evento a guardar un número de secuencia para detectar intentos de modificar un mismo agregado de forma concurrente. (Optimistic concurrency control).\nElimina el problema de mapeo Objeto/Relacional ya que las entidades pueden contener propiedades de cualquier tipo ya que lo que se serializa son los eventos que contienen tipos escalares.\nSe explicitan los cambios de estado.\nSimple\nPreserva la historia:\nFacilita auditorías.\nFacilita la depuración.\nFacilita la implementación de requerimientos futuros.\nMenor uso de loggers para anotar lo que ha ocurrido en nuestra aplicación ya que los mismos eventos nos proporcionan esa información."
    },
    {
      type: "link",
      content: "https://en.m.wikipedia.org/wiki/Object-relational_impedance_mismatch"
    },
    {
      type: "subtitle",
      content: "Contrapartidas"  
    },
    {
      type: "text",
      content: "Poco familiar.\nEventos = registro histórico de una mala decisión de diseño.\nGestionar eventos duplicados puede ser peliagudo.\nLa aplicación tiene que lidiar con consistencia eventual.\nEl event store únicamente soporta búsquedas por clave primaria. Tendremos que apoyarnos en el subsistema de lectura para responder a las consultas.\nRequiere de experiencia modelando dominios"
    },
    {
      type: "subtitle",
      content: "Temas avanzados"
    },
    {
      type: "text",
      content: "En esta sección vamos a comentar temas con una mirada pragmática a problemas o dudas que nos van a surgir a medida que nos adentramos en el uso de Event Sourcing en un proyecto."
    },
    {
      type: "subtitle", 
      content: "Versionado"
    },
    {
      type: "text",
      content: "Tal vez, este sea el punto más importante de los tres que exponemos y también uno de los que podría ser más extenso, incluso como para dedicarle un minicurso, así que intentaremos mostrar lo más relevante."
    },
    {
      type: "text",
      content: "En los sistemas donde el estado de los modelos lo guardamos directamente como una foto, en el momento que ese modelo evoluciona y cambia debemos aplicar operaciones para alterar la estructura en la base de datos. Típicamente una operación ALTER TABLE."
    },
    {
      type: "text",
      content: "No hace falta mencionar la problemática que conlleva en sistemas grandes o que no pueden permitirse paradas dels servicio."
    },
    {
      type: "text",
      content: "Llevando esa normal evolución que sucede en nuestros proyectos al terreno del Event Sourcing, nos planteamos cómo lidiar con los cambios. En nuestro caso el estado reside en la sucesión de eventos. Y son los eventos los que pueden incorporar cambios bajo tres escenarios:"
    },
    {
      type: "text",
      content: "La mayor parte de cambios que va a sufrir nuestro sistema se va a reflejar en nuevos eventos. Con lo que la solución es simple, añadimos dicho evento y sus suscriptores. El resto del sistema permanece inalterado ya que no reaccionan a los nuevos eventos."
    },
    {
      type: "text",
      content: "También nos encontramos ante la necesidad de tener que añadir nuevos atributos a un evento. En ese caso lo aconsejable es usar estrategias basadas en soft schemas de forma que la deserialización de eventos permita la flexibilidad de setear un valor por defecto a atributos que no teníamos con anterioridad."
    },
    {
      type: "text",
      content: "Finalmente nos podemos enfrentar con la necesidad de tener que cambiar un atributo en un evento. En ese caso vamos a tener que usar upcasting. Básicamente de lo que se trata es en convertir una estructura de evento de una versión antigua a una nueva. El código que va a realizar esa transformación lo escribiremos nosotros, así que vamos a tener libertad para hacer lo que necesitemos."
    },
    {
      type: "text",
      content: "Hay que remarcar que los eventos que se encuentran almacenados en el event store, tienen que ser vistos y tratados como datos inmutables. De hecho incluso en algunos sistemas se fuerza que así sea a nivel físico por requerimientos legales."
    },
    {
      type: "text",
      content: "Como nota adicional, decir que a veces lo que parece una evolución de un evento no es tal. Siempre nos tenemos que plantear si lo que realmente tenemos delante es un nuevo evento. Pero eso ya comienza a caer en el terreno de DDD."
    },
    {
      type: "text",
      content: "Por último, comentar que existen otras estrategias a parte de las tres expuestas pero al menos para este curso lo vamos a dejar en estas ya que nos solventan ampliamente necesidades del mundo real. De todas formas os dejamos una referencia para aquellos que queráis profundizar: Versioning in an Event Sourced System (Greg Young)."
    },
    {
      type: "link",
      content: "https://leanpub.com/esversioning"
    },
    {
      type: "subtitle",
      content: "Replay"
    },
    {
      type: "text",
      content: "Partiendo de que:\n\nAlmacenamos todos los eventos que se producen en el sistema.\nUsamos los eventos para proyectar vistas.\nEs viable reprocesar todos los eventos para:\n\nCrear una nueva proyección.\nReparar una proyección corrompida por un bug, recreándose de nuevo."
    },
    {
      type: "text", 
      content: "El concepto es bastante sencillo de entender una vez hemos interiorizado lo que es event sourcing. Pero cuidado porque si queremos implementar un replay tenemos que tener en cuenta sobretodo dos puntos:\n\nAfectar sólo a los handlers deseados.\nQue no tenga \"side effects\" en otros sistemas."
    },
    {
      type: "subtitle",
      content: "Optimizaciones"
    },
    {
      type: "text",
      content: "Hemos dejado este punto para el final expresamente. Aunque estamos seguros que a la mayoría, a medida que avanzaba en lo que era event sourcing, le aparecía una vocecilla que le decía: \"pero qué pasa con el rendimiento de esto? pero cómo puede ser, cargar cada vez TODOS los eventos?? es una locura?!!\""
    },
    {
      type: "text",
      content: "Bueno, primero decir que ese pensamiento es normal. A todos nos sorprende y nos surgen miles de dudas, la más común la del rendimiento."
    },
    {
      type: "text",
      content: "Ahora si nos paramos a pensar un poco y desgranamos el funcionamiento de una arquitectura CQRS + Event Sourcing nos damos cuenta de que:\n\nEvent Sourcing sólo aplica en el subsistema de comandos. Es decir que cargaremos los eventos de un agregado sólo al tener que realizar operaciones.\nLa mayor parte de las optimizaciones las necesitamos en el subsistema de consulta.\nUn agregado concreto no suele acumular una gran cantidad de eventos. Al menos, en el 99% de los casos. Por lo que cargar 4, 5 ó 10 eventos no supone una gran carga o penalización de rendimiento."
    },
    {
      type: "text",
      content: "La forma habitual de optimizar el event sourcing consiste en hacer un \"snapshot\" del estado del agregado, serializarlo y persistirlo cada N eventos o cada T tiempo de forma que no sea necesario tener que cargar todos los eventos. De esta forma, cuando necesitamos cargar el estado de un agregado, el event store partirá del snapshot y luego añadirá los eventos que se hayan producido después del snapshot."
    },
    {
      type: "text",
      content: "Otra forma de optimizar consiste en usar cachés para mantener en memoria el estado de un agregado ya que podemos pensar que un agregado concreto puede ser usado diversas veces en un espacio de tiempo próximo."
    },
    {
      type: "text",
      content: "La realidad es que estos sistemas no suelen necesitar de las optimizaciones que explicamos en esta sección. Y de hecho recomendamos intentar evitarlas ya que añaden complejidad accidental al sistema y entre otros problemas, en el caso del snapshoting, dificultan el uso de upcasting."
    }
  ],
};
