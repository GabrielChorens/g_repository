export default {
  title: "30 Consumir eventos de dominio desde MySQL",
  videoId: "UlA9gCp7v1w",
  notes: [
    { type: "subtitle", content: "Consumir eventos de dominio desde MySQL" },
    {
      type: "text",
      content: "Estableciendo la nueva implementación de EventBus 🥇"
    },
    {
      type: "text", 
      content: "Antes de entrar en el consumidor de eventos vamos a establecer que al levantar nuestra aplicación tome la implementación de MySql cuando inyectemos el EventBus puesto que actualmente tenemos dos diferentes (con MySql y con Spring Events) 🤷‍♂"
    },
    {
      type: "text",
      content: "Una posibilidad para hacer esto sería añadir la anotación @Service en la implementación de MySql y borrarla en la de Spring Events, sin embargo esto supondría no poder inyectar dicha implementación en ninguna parte y lo cierto es que nos interesa poder seguir utilizándola en tiempo de Tests"
    },
    {
      type: "text",
      content: "En su lugar lo que haremos será añadir la anotación @Primary de Spring en la clase MySqlEventBus que lo que hará será indicarle al framework que cuando se encuentre con el conflicto de seleccionar una implementación de varias posibles, escoja esta 👉"
    },
    {
      type: "subtitle",
      content: "Consumiendo eventos desde MySql 🐳"
    },
    {
      type: "text",
      content: "Lo primero que encontramos en el consumer es una query nativa, tal como vimos en videos anteriores, para recuperar los eventos de BD ordenados por fecha ascendente y limitados por un 'chunk'"
    },
    {
      type: "text",
      content: "Ojo 👀, es muy importante la cuestión de recuperarlos y ejecutar las acciones derivadas de cada uno de forma ascendente. No obstante, nuestros consumidores deben ser tolerantes a la posibilidad de que la infraestructura utilizada no nos garantice que estén ordenados (profundizamos mucho más acerca de estos detalles en el curso de Event-Driven Architecture)"
    },
    {
      type: "text",
      content: "El hecho de establecer un límite con ese chunk se debe a que al no usar un sistema de streaming para hacer pulls en BD nos interesa más ir recuperando y procesando lotes de eventos (si tratásemos de recuperar todos de golpe podría darse el caso de que en el proceso de estuvieran añadiendo nuevos eventos)"
    },
    {
      type: "text",
      content: "Por cada row recuperada llamaremos al método executeSubscribers(), que recibirá los atributos del evento (los cuales extraemos del array de objetos en cada row)"
    },
    {
      type: "text",
      content: "Dentro de este método usaremos en primer lugar el nombre del evento para obtener la clase asociada, lo cual conseguimos gracias al mapeo realizado en la clase DomainEventsInformation. Esta clase utilizará la librería reflections para escanear nuestro package en busca de aquellas clases que hereden de DomainEvent para realizar el mapeo <nombreEvento, claseEvento>"
    },
    {
      type: "text",
      content: "Puesto que Java no nos permite tener métodos estáticos en clases abstractas y no poder llamar sin más al método eventName(), nos vemos obligados a crear una instancia vacía (para lo cual hemos tenido que añadir un constructor vacío en los eventos de dominio) de cada evento para así poder llamar a dicho método y recuperar el nombre"
    },
    {
      type: "text",
      content: "Aunque este proceso de reflexión es bastante costoso, el hecho de definir la clase DomainEventsInformation como servicio hará que se cree como un Singleton y que una vez arrancado llamemos siempre a la misma instancia 🙋"
    },
    {
      type: "text",
      content: "Una vez recuperada la clase del Evento concreto tendremos que hacer uso una vez más de una instancia vacía para poder llamar al método fromPrimitives() que como vimos en lecciones anteriores nos permitía instanciar un evento a partir de datos primitivos, parseando campo body de Json al HashMap que espera el método"
    },
    {
      type: "text",
      content: "Con nuestra instancia de DomainEvent ya sólo queda publicarla en el bus. Ojo 👀 porque aprovecharemos esa instancia local de EventBus de Spring que habíamos visto previamente, lo que buscamos con esto es beneficiarnos tanto de las ventajas que nos ofrece el EventBus distribuído (como poder atacarlo desde cualquier otra aplicación) como de las que nos ofrece consumirlas en ese EventBus local"
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
      content: "¡Nos vemos en el siguiente video: 🎭 Test y comando para el consumidor de eventos de dominio!"
    }
  ],
};
