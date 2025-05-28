export default {
  title: "02 Un poco de DDD",
  videoId: "q8JTASNfIuk",
  notes: [
    {
      type: "text",
      content:
        "Nuestro curso quiere centrarse en explicar Event Sourcing pero en el viaje resulta inevitable hacer una parada en DDD, al igual que lo haremos en CQRS.",
    },
    {
      type: "text",
      content:
        "Para ser sinceros, aunque a primera vista el objetivo del curso parece ser Event Sourcing en realidad queremos hacer aplicaciones que se adapten a los requisitos del negocio y que soporten los cambios de forma simple (al final es de lo que comemos!). Para lograr este objetivo unas buenas herramientas son CQRS, DDD y ES ya que tendremos un buen modelado del dominio del negocio, un histórico de todos los cambios en el estado del sistema y una arquitectura que nos facilitará la gestión de dichos cambios en el código.",
    },
    {
      type: "text",
      content:
        "Intentaremos centrarnos en las partes esenciales que nos interesan para el curso, así que profundizaremos lo justo.",
    },
    {
      type: "subtitle",
      content: "Lo esencial de DDD, las ideas",
    },
    {
      type: "subtitle",
      content: "Bounded context, context, módulos…",
    },
    {
      type: "text",
      content: 'En una palabra: "ORGANIZACION".',
    },
    {
      type: "text",
      content:
        "Cómo está organizado el modelo de negocio de la empresa y su proceso? Qué equipos existen en la empresa? Cómo llaman a las cosas? Qué productos intermedios existen? Qué condiciones tienen que cumplir? Qué roles hacen las personas? Es lógico pensar que todas las respuestas a estas preguntas tienen implicaciones en el software que dicha organización usa para llevar a cabo su tarea. Sino es que tenemos un software completamente desvinculado de la actividad diaria y que por tanto es más una carga que una ayuda. (seguro que a más de uno esa situación le suena. :) )",
    },
    {
      type: "text",
      content:
        "Si vamos un poco más lejos, estas preguntas y sus respuestas deben influir en el proceso de construcción del software. Cómo vamos a organizar los proyectos de la empresa (en términos de microservicios)? O sea que partes están altamente cohesionadas y deben ir en una misma pieza de software. Que partes cambian constantemente? Dónde está el factor diferencial de nuestra organización respecto a sus competidores? Qué partes son necesarias pero son un proceso estándar? Dónde debemos invertir más esfuerzo?",
    },
    {
      type: "text",
      content: "Pues DDD va de estas preguntas y sus respuestas.",
    },
    {
      type: "text",
      content:
        "Algo que es imprescindible hacer en una organización que quiere aplicar DDD, es analizar cómo está organizada o quiere organizarse y trocear la actividad de la empresa definiendo contextos (bounded contexts) que tenga sentido tratar como una unidad. Esos contextos nos servirán para poder tomar decisiones de manera más simple.",
    },
    {
      type: "text",
      content:
        'Por ejemplo, si tenemos una empresa que se dedica a vender piruletas parece lógico pensar que no tiene mucho sentido que destinemos esfuerzo a crear un programa de contabilidad a medida. Seguramente con un programa estándar que podemos comprar a un proveedor y que sirve para muchos tipos de negocio, nos basta ya que las piruletas no requieren demasiadas argucias contables. Al ser un paquete de un proveedor podemos tratar esta aplicación como una unidad (bounded context en jerga DDD) con la que tenemos una interfaz definida y que puede tener su propio lenguaje. Además esta aplicación tendrá su ciclo de vida independiente al resto de componentes ya que mayoritáriamente viene determinado por las decisiones del proveedor. Es importante explicitar que este bounded context de contabilidad puede tener su arquitectura particular, los componentes que el proveedor considere necesario y que tiene unos contratos que nosotros deberemos usar para facilitar y obtener datos del mismo. Es importante explicitar estos contratos y asegurarnos que se cumplen, DDD tiene multitud de herramientas para facilitar esta tarea. El contexto que acabamos de describir es un contexto de tipo "generic".',
    },
    {
      type: "text",
      content:
        "En cambio, el contexto que controla el proceso de elaboración de las piruletas dónde reside la fórmula secreta que nuestro tatarabuelo se inventó en un convento benedictino perdido en Alsacia, es lo que nos diferencia de nuestros competidores. Ahí tiene sentido destinar el tiempo y la energía de nuestro equipo de software ya que un cambio en esa parte puede implicar un aumento o decremento de los ingresos de la empresa importante.",
    },
    {
      type: "text",
      content:
        'El contexto de control de la elaboración nos interesa que sea fácil de evolucionar así que también interesa organizar el código de una forma expresiva y organizada según funcionalidades. Así, por ejemplo, tendremos menos errores que impliquen el paro de producción. Además cuando necesitemos empezar el proyecto de la planta de producción de piruletas en Marte (ya que los recursos en el planeta Tierra son finitos, al contrario que la demanda de piruletas) ese equipo podrá empezar a trabajar en el proyecto de forma más segura ya que los conceptos están claros, las responsabilidades definidas y la funcionalidad explicitada. Este importante contexte es de tipo "core".',
    },
    {
      type: "text",
      content:
        'Otro beneficio de DDD es conseguir cierta "independencia". Independencia entre equipos y también independencia entre funcionalidades y contextos. Cada contexto o funcionalidad tiene definidas de forma muy explícita las dependencias y contratos que necesita para ejecutar su tarea. Al tener dependencias y contratos explícitos podemos trabajar en cada parte sabiendo cuando rompemos algo (ya que modificamos el contrato) o las implicaciones que tiene un cambio (debido a los contratos que tocamos). También al tener contextos de funcionalidad (y sus contratos y dependencias) bien definidos ganamos en movilidad del código. Esto facilita modelar la actividad de la empresa en diferentes APIs, bases de datos o workers en función de las necesidades específicas de cada funcionalidad.',
    },
    {
      type: "text",
      content:
        "Dicho en otras palabras y en concreto en nuestro código, estos conceptos se deberían traducir en una alta cohesión dentro del mismo módulo y bajo acoplamiento entre módulos. Es decir, las peras con la peras, los pasteles con los pasteles y cuando toco las peras no me quedo sin comer pasteles :)",
    },
    {
      type: "text",
      content:
        'Pero falta algo. Muchas veces el negocio de una empresa no lo puede desarrollar una persona sola. Así que si hay más de una persona necesitamos poder "comunicar" de forma efectiva personas, equipos y sistemas. Aquí entra el ubiquitous language.',
    },
    {
      type: "subtitle",
      content: "Ubiquitous language",
    },
    {
      type: "text",
      content:
        'Necesitamos crear un lenguaje que al menos dentro de cada contexto exprese los conceptos con suficiente semántica y rigurosidad para que sea entendido entre los desarrolladores y las personas "expertas del dominio" (las personas que tienen el conocimiento de cómo es un flujo o operaciones de negocio).',
    },
    {
      type: "text",
      content:
        "Además ese lenguaje, esas palabras, las tenemos que ver reflejadas en el código (recordar que el código es un modelo de la realidad que nos sirve para no tener que hacer los procesos de la empresa apuntando en libretas y mandando palomas).",
    },
    {
      type: "text",
      content:
        'Podemos encontrar casos donde el desarrollador utilice el término "usuario" y el experto de dominio use "cuenta". Debemos evitar esas ambigüedades e invertir tiempo en encontrar términos que faciliten la comunicación entre las personas implicadas en el desarrollo.',
    },
    {
      type: "text",
      content:
        'Subimos la apuesta y diremos que a veces una misma palabra dentro de una empresa no quiere decir lo mismo en dos departamentos distintos. Por ejemplo, "unidad" en la planta de piruletas, donde están los proletarios del azúcar, quiere decir un palo con caramelo en el extremo. Pero en la oficina, donde habitan las personas de gris, "unidad" es un palo con caramelo en el extremo, envuelto con una fina capa de plástico de colores empaquetado en cajas de 100.',
    },
    {
      type: "text",
      content:
        "DDD va de analizar y profundizar en el conocimiento del negocio y sus procesos para extraer todos los detalles de flujos y conceptos.",
    },
    {
      type: "subtitle",
      content: "Domain e Infrastructure",
    },
    {
      type: "text",
      content:
        "Un proyecto bien estructurado intenta separar lo que hace la aplicación en términos de funcionalidad, operaciones y datos de negocio, de cómo lo hace, es decir, de cómo es la implementación de esas operaciones y cómo se adaptan entradas y salidas al mundo exterior.",
    },
    {
      type: "text",
      content:
        "El qué se suele llamar dominio (domain) y el cómo se suele llamar infraestructura (infrastructure).",
    },
    {
      type: "text",
      content:
        "El dominio debe ser:\n\nFácil de testear\nAdaptada a cambios\nExpresiva y explícita\n(Apuntar que en el dominio es donde nos jugamos la pasta)",
    },
    {
      type: "text",
      content:
        "Para favorecer estas propiedades es buena práctica hacer que esta lógica sea lo más pura posible (simple y sin estado). Este gran objetivo lo conseguimos desplazando todo lo que tenga estado o sea responsabilidad de un tercero fuera del dominio. En este punto el dominio va a depender de estas partes que hemos desplazado a la periferia. Esta dependencia la explicitaremos mediante contratos implementados con algún mecanismo del lenguaje que nos permita especificar las características que necesitamos pero no cómo implementamos esas características.",
    },
    {
      type: "text",
      content:
        "Por ejemplo con una interfaz, clase abstracta o protocolo haremos que la lógica de negocio (dominio) sólo conozca ese contrato permitiendo cambiar la implementación según necesitemos y testear esa lógica de una forma más sencilla.",
    },
    {
      type: "text",
      content:
        "Recalcar también que la dependencia entre dominio e infrastructure siempre será en el sentido que el dominio (la lógica de negocio) demandará una implementación a la infrastructure, jamás a la inversa.",
    },
    {
      type: "text",
      content:
        "En la infraestructura, escribiremos las implementaciones de las interfaces que tenemos en el dominio.",
    },
    {
      type: "text",
      content:
        "Esas implementaciones tienen básicamente 2 formas:\n\nPuertos de entrada (ej.: controladores HTTP)\nPuertos de salida (ej.: repositorios de bbdd, APIs de servicios a terceros)",
    },
    { type: "image", content: "src/assets/02a.png" },
    { type: "image", content: "src/assets/02b.png" },
    {
      type: "subtitle",
      content: "Destacamos dos ideas en esta sección:",
    },
    {
      type: "text", 
      content: "Respecto a la lógica de negocio, expresa lo que hace, no cómo lo hace. Por ejemplo si una operación de negocio requiere consultar algún dato, especificaremos que esa lógica requiere una dependencia que nos pueda resolver la consulta sin detallar la forma cómo se va a resolver la misma, ya que lo que nos importa es tener una respuesta, no cómo se consiga la respuesta."
    },
    {
      type: "text",
      content: "Usa interfaces para conectar con el mundo exterior. Eliminando dependencias con la implementación."
    },
    {
      type: "subtitle",
      content: "Concretando"
    },
    {
      type: "text",
      content: "En el momento que empezamos a escribir código, aparece la necesidad de plasmar conceptos en él. Veremos que algunos objetos son los protagonistas con nombre propio de nuestro dominio y otros objetos nos sirven para explicar mejor qué les pasa a esos objetos protagonistas."
    },
    {
      type: "subtitle",
      content: "Value objects"
    },
    {
      type: "text",
      content: "Se trata de objetos que representan conceptos que no tienen ni ciclo de vida ni identidad.\n\nEstos objetos, una vez creados permanecen inalterables, es decir, inmutables.\n\nCuando se quiere comparar dos value objects entre sí, se debe comparar uno a uno los valores de sus propiedades. En este punto, Kotlin nos ayuda con las data class.\n\nEs de programador de bien usarlos como alternativas a primitivas para asegurar validaciones y además enriquecer la semántica de nuestro código.\n\nFinalmente comentar que un value object en una aplicación puede ser una entidad en otra aplicación. Por ejemplo, en un ecommerce el concepto moneda será un value object y para la aplicación del Banco de Europa sería una entidad con un ciclo de vida."
    },
    {
      type: "text",
      content: "Veamos unos ejemplos:"
    },
    {
      type: "code",
      content: "data class Currency(val code: String)\n\nCurrency(\"EUR\") == Currency(\"EUR\")\nCurrency(\"USD\") != Currency(\"EUR\")"
    },
    {
      type: "text",
      content: "Una instancia que contenga el nombre, EUR es igual a otra instancia que contenga la misma propiedad nombre con EUR.\nAdemás podemos añadir validaciones:"
    },
    {
      type: "code",
      content: "data class Currency(val code: String) {\n  init {\n    if (code.length != 3) throw IllegalArgumentException(\"Currency code must have 3 chars\")\n  }\n}"
    },
    {
      type: "text",
      content: "Otros ejemplos:"
    },
    {
      type: "code",
      content: "data class UserId(val id: UUID)\ndata class CountryCode(val code: String)\ndata class Address(val street: String, val number: Int, val city: String)"
    },
    {
      type: "text",
      content: "En última instancia, los value objects nos van a servir para acabar con un código mucho más expresivo."
    },
    {
      type: "subtitle",
      content: "Aggregates"
    },
    {
      type: "text",
      content: "Los agregados son la raíz de toda funcionalidad que vayamos a desarrollar.\n\nEn estas entidades recae la representación de las operaciones y flujos de negocio. Por lo tanto podríamos decir que son las encargadas de gestionar estados.\n\nLas unidades mínimas de cambio de estado o transacciones tienen que estar representadas en un agregado. Por lo tanto, debemos analizar un flujo de negocio, seccionándolo hasta encontrar las unidades mínimas de cambio de estado (transacciones) que lo componen y a su vez encontrar aquellos agregados (entidades) que tienen sentido semántico en el negocio y que ligan las transacciones analizadas."
    },
    {
      type: "text",
      content: "Seamos pragmáticos. Qué quiere decir esto en el caso de nuestro proyecto? Pues en nuestro proyecto de ecommerce, la entidad que gestiona un flujo y tiene sentido semántico es el propio carrito. Se representa como la clase \"Cart\" que mantiene el estado de una instancia de carrito, con el listado de productos que tiene en cada momento un determinado usuario. Además las operaciones que expone serían:\n\nCrear carrito.\nAñadir producto.\nModificar productos.\nConfirmar carrito.\n\nCada una de estas operaciones tienen que ser completadas totalmente o no realizarse en absoluto. O sea, hablamos de \"transacciones\".\n\nEn este sentido se debe evitar el uso de setters ya que su uso viola la transaccionalidad de nuestros agregados además de permitir cambios no controlados por el mismo agregado."
    },
    {
      type: "subtitle",
      content: "Application services"
    },
    {
      type: "text",
      content: "El problema aparece cuando necesitamos información externa al agregado para poder completar lógicas de negocio. Imaginad que por ejemplo antes de crear un carrito al usuario queremos ver si el usuario ya tenía un carrito. Necesitaremos lanzar una query para poder hacer esa consulta.\n\nLa pieza que va a contener ese código será un application service que vamos a situar antes del agregado."
    }
  ],
};
