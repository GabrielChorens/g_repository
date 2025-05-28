export default {
  title: "01 Bienvenidos al curso",
  videoId: "x-Z15eYLeKY",
  notes: [
    {
      type: "text",
      content: "El curso está enfocado principalmente a desarrolladores que ya tienen conocimientos previos en DDD (Domain Driven Design) y CQRS (Command Query Responsibility Segregation), y que quieran ir un paso más allá en su forma de entender, modelar y solucionar funcionalidades de negocio."
    },
    {
      type: "text",
      content: "De todas formas explicaremos, con suficiente profundidad, conceptos como \"event\", \"value object\", \"aggregate\", \"CQRS\"... para aquellos que les sean poco familiares."
    },
    {
      type: "text",
      content: "El curso quiere enfocarse a Event Sourcing pero como se verá, tiene bastante sentido acompañarlo de CQRS."
    },
    {
      type: "subtitle",
      content: "Qué usaremos?"
    },
    {
      type: "text",
      content: "Evidentemente no sólo nos queremos quedar en el mundo teórico, como personas con mente de ingeniero que somos, queremos ver las ideas en acción así que vamos a crear una pequeña aplicación para gestionar el carrito de un ecommerce."
    },
    {
      type: "text",
      content: "Podemos acceder al código en:"
    },
    {
      type: "link",
      content: "https://github.com/kotato/axon-examples"
    },
    {
      type: "text",
      content: "Finalmente decir que el proyecto lo implementaremos usando:"
    },
    {
      type: "text",
      content: "Kotlin. Como lenguaje de programación.\nAxon framework. Para implementar CQRS y Event Sourcing.\nSpring boot. Para poner en marcha la aplicación."
    },
    {
      type: "subtitle",
      content: "Kotlin"
    },
    {
      type: "link",
      content: "https://kotlinlang.org"
    },
    {
      type: "text",
      content: "Kotlin es un lenguaje de programación que funciona sobre la JVM, que permite una muy buena interoperabilidad bidireccional con Java."
    },
    {
      type: "text",
      content: "Se trata de un lenguaje imperativo y orientado a objetos pero que abraza la programación funcional."
    },
    {
      type: "text",
      content: "De forma resumida podríamos decir que es un lenguaje con una clara orientación al pragmatismo y la productividad. Intenta coger las mejores ideas que se encuentran en otros lenguajes y las incorpora para conseguir un lenguaje que evita el \"boiler plate\" y ayuda al programador."
    },
    {
      type: "text",
      content: "Algunas características principales:\n\nData classes\nType inference\nExtension functions\nDefault arguments\nString interpolation\nPotente set de funciones para manipular colecciones\nNull safety\nType alias\nOperator overloading\nClass delegation\n@Deprecated\nInteroperabilidad con Java\nInline functions\nReified generics"
    },
    {
      type: "subtitle",
      content: "Axon framework"
    },
    {
      type: "link",
      content: "https://axoniq.io/axonframework"
    },
    {
      type: "text",
      content: "Axon es un framework enfocado a solucionar la vida de los programadores que queremos crear aplicaciones Java basadas en CQRS y Event Sourcing. También nos ofrece una buena integración con el framework Spring."
    },
    {
      type: "text",
      content: "Axon ofrece implementaciones de los bloques más importantes a nivel de arquitectura de DDD: agregados, repositorios y de Event Sourcing: el bus de eventos e implementación de event store. Además, ofrece soporte para anotaciones, que permite construir agregados y handlers de eventos sin acoplar nuestro código a la lógica específica del framework. Eso nos permite enfocarnos en la lógica de negocio en vez de en cómo se conecta. También nos lleva a crear un código más fácil de testear de forma aislada."
    },
    {
      type: "text",
      content: "Otro punto que se debe saber es que Axon no intenta esconder la arquitectura CQRS o ninguno de los componentes del punto de vista del desarrollador. Por este motivo resulta recomendable añadir, dependiendo del tamaño del equipo, uno o más desarrolladores con buenos conocimiento de CQRS en cada equipo."
    },
    {
      type: "text",
      content: "Axon junto a Spring ponen a disposición una serie de anotaciones que nos permiten usar los conceptos de CQRS sin tener que preocuparnos de cómo se ha implementado que en resumen es lo que esperamos de este framework."
    },
    {
      type: "subtitle",
      content: "Spring boot"
    },
    {
      type: "link",
      content: "https://projects.spring.io/spring-boot/"
    },
    {
      type: "text",
      content: "El \"state of the art\" para cualquier tipo de aplicación sobre Java con Spring, es utilizar Spring Boot como punto de partida. Spring Boot se ha diseñado para poner en funcionamiento nuestra aplicación en el menor tiempo posible y con el mínimo esfuerzo de configuración del framework Spring."
    },
    {
      type: "text",
      content: "Pero qué es Spring Framework? En el ecosistema Java es uno de los frameworks más conocidos y ampliamente usado para todo tipo de aplicaciones. Spring se ocupa de resolver las funcionalidades más típicas que encontramos en una aplicación y que habitualmente se solventan con un framework, las más básicas como configuración, inyección de dependencias, ciclo de vida de una aplicación y un largo etcétera, llegando a funcionalidades muchísimo más complejas."
    },
    {
      type: "text",
      content: "La capacidad de flexibilidad y configuración que nos permite Spring es extrema, tanto que a veces se le puede acusar de añadir demasiada complejidad a sus implementaciones y puede llegar a ser compleja la depuración de código."
    },
    {
      type: "text",
      content: "Y entonces qué es Spring Boot? Pues son \"facilidades\" que se le han añadido a Spring framework de forma que con mínimas configuraciones podamos poner un funcionamiento una aplicación."
    },
    {
      type: "text",
      content: "Qué podemos hacer con Spring Boot:\n\nEmpezar el esqueleto de un proyecto en segundos usando Spring Initializr.\nConstruir cualquier tipo de aplicación: API REST, WebSocket, Web, Streaming, Tareas...\nSeguridad de forma simplificada.\nGran soporte para SQL y NoSQL.\nSoporte para \"embedded runtime servers\": Tomcat, Jetty y Undertow.\nHerramientas de productividad para desarrolladores como \"live reload\" y \"auto restart\".\nProbadas dependencias que simplemente funcionan.\nFuncionalidades preparadas para producción como trazabilidad, métricas y \"health status\".\nIntegración en tu IDE favorito: Spring Tool Suite, IntelliJ IDEA y NetBeans."
    },
    {
      type: "subtitle",
      content: "Preparemos el proyecto"
    },
    {
      type: "text",
      content: "Como ya comentamos, a lo largo del curso vamos a poner en práctica lo que aprendamos en forma de un proyecto que gestionará el carrito de compra de un ecommerce."
    },
    {
      type: "text",
      content: "El código del proyecto completo lo vamos a encontrar en"
    },
    {
      type: "link",
      content: "https://github.com/kotato/axon-examples"
    },
    {
      type: "text",
      content: "En la rama \"master\" vamos a tener el proyecto completo listo para funcionar y en el resto de ramas encontraremos el paso a paso de lo que iremos construyendo en cada capítulo."
    },
    {
      type: "text",
      content: "Lo único que necesitas tener instalado en tu ordenador es Java y tu IDE favorito (con soporte para Kotlin) aunque nosotros usaremos IntelliJ IDEA."
    },
    {
      type: "text",
      content: "En el video verás cómo iniciaremos un proyecto desde cero y le añadiremos las dependencias que vamos a necesitar para construir nuestro carrito. Verás que a parte de las dependencias de Spring y Axon usaremos una librería propia que nos proporciona adaptaciones que nos facilita usar Axon en nuestro proyecto. Esta dependencia propia se entrega con una licencia que te va a permitir usarla en cualquier proyecto personal o profesional."
    },
    {
      type: "subtitle",
      content: "Path del curso"
    },
    {
      type: "text",
      content: "El curso está planteado en ocho capítulos en los que combinaremos explicaciones teóricas con desarrollos prácticos alrededor del proyecto de un carrito para ecommerce que ya hemos comentado."
    },
    {
      type: "text",
      content: "Empezaremos introduciendo los principios de una arquitectura CQRS siguiendo con la explicación de las piezas que vamos a usar para aplicar CQRS en un proyecto."
    },
    {
      type: "text",
      content: "A continuación y siguiendo con CQRS, veremos cómo aplicaremos todo lo aprendido, comenzando a construir el carrito de la compra."
    },
    {
      type: "text",
      content: "Visto CQRS, ya orientaremos el curso al objetivo de explicar Event Sourcing pero préviamente dedicaremos un capítulo a explicar ideas y conceptos relacionados con DDD. Ya sea para introducirlos o para refrescarlos ya creemos que es importante conocerlos y usarlos en un proyecto."
    },
    {
      type: "text",
      content: "Una vez adquiridos los conocimientos de CQRS y DDD, pasaremos a ver e implementar Event Sourcing. Primero con un capítulo dedicado a la explicación teórica, seguido de otro algo más pragmático donde explicaremos cómo se aplica Event Sourcing. Esta sección la acabaremos implementando la parte final del proyecto del carrito."
    },
    {
      type: "text",
      content: "Para acabar el curso, tenemos un capítulo sobre cómo testear cuando usamos Event Sourcing y finalmente un capítulo resumen de los conceptos teóricos acompañado de un glosario de términos usados en el curso."
    },
    {
      type: "subtitle",
      content: "Glosario"
    },
    {
      type: "text",
      content: "API: La interfaz de programación de aplicaciones, abreviada como API del inglés: Application Programming Interface, es un conjunto de subrutinas, funciones y procedimientos (o métodos, en la programación orientada a objetos) que ofrece cierta biblioteca para ser utilizado por otro software como una capa de abstracción."
    },
    {
      type: "text", 
      content: "Adaptador: El patrón adaptador (adapter) se utiliza para transformar una interfaz en otra, de tal modo que una clase que no pueda utilizar la primera haga uso de ella a través de la segunda."
    },
    {
      type: "text",
      content: "Agregado: El agregado es un patrón DDD. Un agregado DDD es un conjunto de objetos de dominio que se pueden tratar como una sola unidad. Un ejemplo puede ser un pedido y sus artículos, estos serán objetos separados, pero es útil tratar el pedido (junto con sus artículos) como un agregado único."
    },
    {
      type: "text",
      content: "Axon: Axon es un framework ligero que ayuda a los desarrolladores a desarrollar aplicaciones escalables y extensibles al abordar estos conceptos directamente en la arquitectura. Nos permite crear aplicaciones Java basadas en CQRS y Event Sourcing."
    },
    {
      type: "link",
      content: "https://axoniq.io/axonframework"
    },
    {
      type: "text",
      content: "Bounded context: Múltiples modelos están en juego en cualquier proyecto grande. Sin embargo, cuando el código basado en distintos modelos se combina, el software se vuelve defectuoso, poco confiable y difícil de entender. La comunicación entre los miembros del equipo se vuelve confusa. A menudo no está claro en qué contexto no se debe aplicar un modelo.\n\nPor lo tanto: define explícitamente el contexto dentro del cual se aplica un modelo. Establece límites explícitamente en términos de organización del equipo, uso dentro de partes específicas de la aplicación y bases de códigos y esquemas de bases de datos. Manten el modelo estrictamente consistente dentro de estos límites, pero no te distraigas por problemas externos."
    },
    {
      type: "text",
      content: "Bus: En arquitectura de programación, un bus (una contracción de ómnibus del latín) es un sistema de comunicación que transfiere datos entre componentes."
    },
    {
      type: "text",
      content: "CQRS: Command Query Responsibility Segregation (CQRS) es un patrón de arquitectura en el que se separan y se desacoplan la escritura (vía commands) de la lectura (vía queries)."
    },
    {
      type: "text",
      content: "Command: Objetos que representan una intención de aplicar una operación de negocio."
    },
    {
      type: "text",
      content: "Complect: Entrelazar, intercalar o trenzar."
    },
    {
      type: "text",
      content: "DDD: Domain Driven Design."
    },
    {
      type: "text",
      content: "DTO: Data Transfer Object."
    },
    {
      type: "text",
      content: "Dominio: En la organización de paquete, es el lugar dónde vamos a colocar todo el código de dominio, es decir, toda la lógica de negocio. No pondremos ninguna implementación ni referencia a implementaciones (usaremos interfaces).\n\nCampo que define un conjunto de requisitos comunes, terminología y funcionalidad para cualquier programa de software construido para resolver un problema. La palabra dominio también se toma como un sinónimo de dominio de aplicación. También se ve como una esfera de conocimiento."
    },
    {
      type: "text",
      content: "Endpoint: El punto de entrada a un servicio. En una API HTTP correspondería a una URL."
    },
    {
      type: "text",
      content: "Event sourcing: Persistir el estado de un agregado en forma de secuencia ordenada de eventos que se habían aplicado al agregado."
    },
    {
      type: "text",
      content: "Evento: Mensaje que representa que algo ha pasado en el sistema."
    },
    {
      type: "text",
      content: "JVM: Java Virtual Machine."
    },
    {
      type: "text",
      content: "Kotlin: Lenguaje de programación que funciona sobre la JVM y que permite una muy buena interoperabilidad bidireccional con Java."
    },
    {
      type: "text",
      content: "Handler: Pieza de código que atiende y procesa los datos."
    },
    {
      type: "text",
      content: "Infrastructure: En la organización de paquetes, es el lugar dónde vamos a colocar las implementaciones a las que hace referencia la interfaces que tenemos en el dominio."
    },
    {
      type: "text",
      content: "ISP: Interface Segregation Principle. Se trata de partir interfaces en partes más pequeñas de modo que habilite a los clientes a que puedan usar sólo lo que requieran."
    },
    {
      type: "text",
      content: "Query: Objeto que representa una petición de información al sistema."
    },
    {
      type: "text",
      content: "Módulo: Se trata de la organización del código en una unidad funcional desde un punto de vista de negocio."
    },
    {
      type: "text",
      content: "Osificación: Es la idea de crear de forma muy preliminar estructuras de código que más tarde marcaran y orientaran el desarrollo de una forma tan dura que resultará complejo de evolucionar."
    },
    {
      type: "text",
      content: "Programador de bien: Dícese de aquellos programadores que aplican buenas prácticas tales como usar value objects :P"
    },
    {
      type: "text",
      content: "Proyección: Vista de un conjunto de datos. Por ejemplo, una proyección de las facturas de nuestros usuarios podría ser una tabla en la bbdd con todos los datos de las facturas."
    },
    {
      type: "text",
      content: "Replay: Reprocesar todos los eventos almacenados en el event store para recrear o crear una nueva proyección."
    },
    {
      type: "text",
      content: "Servicio de aplicación de domino: Cuando necesitamos información externa al agregado para poder completar lógicas de negocio, usamos este componente para coordinar esa información y aplicar lógicas."
    },
    {
      type: "text",
      content: "Simple vs. fácil: fácil en el sentido que nos resulta sencillo de usar por ser familiar aunque puede ser muy complejo y hacer múltiples cosas. Y simple en el sentido que hace una sóla cosa aunque para poder hacer diversas cosas deberemos componer diversas piezas simples."
    },
    {
      type: "text",
      content: "SRP: Single Responsibility Principle."
    },
    {
      type: "text",
      content: "Spring: En el ecosistema Java es uno de los frameworks más conocidos y ampliamente usado para todo tipo de aplicaciones."
    },
    {
      type: "text",
      content: "Ubiquitous language: Lenguaje marco con suficiente semántica y rigurosidad para que sea entendido transversalmente entre todas las personas de la organización."
    },
    {
      type: "text",
      content: "Upcasting: Cuando surge la necesidad de evolucionar un evento, podemos usar esta estrategia que consiste en convertir una estructura de evento de una versión antigua a una nueva."
    },
    {
      type: "text",
      content: "Value object: Objetos que representan conceptos. Cada concepto concreto es representado por la suma de todas las propiedades del objeto."
    }
  ],
};
