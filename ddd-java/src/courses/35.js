export default {
  title: "35 Generar la configuracion del RabbitMQ automaticamente",
  videoId: "LjUuHip9Q30",
  notes: [
    { type: "subtitle", content: "🤔 Diseñando la arquitectura con RabbitMQ" },
    {
      type: "text",
      content: "Una cuestión crucial al decidir utilizar RabbitMQ para consumir Eventos de Dominio será el hecho de definir la arquitectura a nivel de colas con la que vamos a trabajar y la 'red' de seguridad que añadiremos para que todo funcione correctamente. Veremos ahora la opción que nosotros hemos tomado y el modo de automatizar esta configuración para cada caso de uso"
    },
    {
      type: "text",
      content: "tryrabbitmq: Esta web nos permite generar un diagrama de la estructura que queremos crear para nuestro sistema de colas"
    },
    { 
      type: "link",
      content: "http://tryrabbitmq.com/"
    },
    {
      type: "text",
      content: "Partimos de que el productor será justamente nuestro RabbitMqEventBus, que publicará los eventos contra un exchange de tipo topic 'domain_events'. Siguiendo con el ejemplo que venimos viendo en el curso, tendríamos la cola 'increment_courses_counter_on_course_created' que corresponderá precisamente con el caso de uso a ejecutar al producirse el evento y que llevará por bindingKey el nombre del evento a consumir. Finalmente el consumidor RabbitMqConsumer será quien recoja todos esos eventos y los envíe al EventBus local para invocar a los application services que corresponda 📥"
    },
    {
      type: "text",
      content: "Además de este exchange 'principal' crearemos dos más a nivel global: 'retry-' y 'dead_letter-' que serán los dos niveles de red de seguridad que apliquemos a la hora de consumir eventos. Puesto que cada Bounded Context tiene su propia infraestructura, cada uno de ellos publicará los eventos a su propio exchange (recordemos que el filtrado de los eventos lo obtenemos a nivel de bindingKeys y no a nivel de exchange)"
    },
    {
      type: "text",
      content: "Cuando el consumo de un evento provoque cualquier excepción, lo que hará RabbitMq en primera instancia será pasarlo a la cola de 'retry' hasta un número X de veces. Este exchange de retry tiene un emparejamiento 1-1 con las colas existentes en el exchange principal (de modo que la routingKey ya no será el nombre del evento sino de la propia cola/caso de uso). Así, pasado varios segundos volverá a enviar el evento, esta vez con la routingKey del caso de uso, por lo que la cola tendrá siempre dos bindingKeys: una con el nombre del evento y otra con el nombre de la cola para conectar con el exchange de retry"
    },
    {
      type: "text",
      content: "Una vez que un evento pase al exchange de retry, incrementaremos un contador en los Headers del evento para gestionar el número de reintentos y poder pasarlo al exchange de 'dead_letter' una vez fallados N reintentos (definidos también a nivel de Headers), una vez en la cola de dead_letter el evento se queda ahí sin hacer nada más a la espera de que nosotros hagamos algo manualmente al recibir la alerta de que esto ha pasado. De este modo, delegamos en la propia infraestructura la gestión del número de reintentos que llevamos y cuando debe enviarse a la cola de dead_letter"
    },
    { type: "subtitle", content: "😎 Automatizando la configuración" },
    {
      type: "text",
      content: "Por supuesto no queremos tener que hacer a mano toda esta configuración para cada uno de los casos de uso que tengamos en nuestra aplicación ni cada vez que creemos uno nuevo, por lo que vamos a automatizarlo para que se realice con cada despliegue 🙌"
    },
    {
      type: "text",
      content: "Para ello hemos preparado la clase RabbitMqEventBusConfiguration, añadiéndole la anotación de Spring @Configuration para que el framework sepa que debe ejecutarla al levantar la aplicación, proveyéndonos de distintos métodos como declaration() que, al definirse como un @Bean que devuelve un Declarables, se ejecutará gracias a la librería de AMPQ"
    },
    {
      type: "text",
      content: "Dentro de este método lo primero que haremos será declarar los tres exchanges (principal, retry, dead_letter) que como vimos en el curso de Comunicación entre Microservicios queremos que sean de tipo 'topic' y añadirlos a la pila de Declarables. Una decisión que debemos tomar en este aspecto es si queremos que toda la aplicación comparta la misma infraestructura y tire de los mismos exchanges comunes o si por el contrario queremos separarlos a nivel de Bounded Context (sea como sea, debemos considerar que potencialmente querremos siempre escuchar eventos producidos en bounded contexts distintos), en nuestro caso vamos a optar por la primera opción y asumir que tendremos un exchange de 'domain_event' común a toda la aplicación y jugar con la nomenclatura de las colas para especificar bounded contexts"
    },
    {
      type: "text",
      content: "Una vez declarados los elementos 'estáticos' de esta arquitectura, pasamos a declarar las colas y los bindings desde el método declareQueuesAndBindings(). Internamente esta clase llamará a DomainEventSubscribersInformation"
    },
    { type: "subtitle", content: "Clase DomainEventSubscribersInformation:" },
    {
      type: "code",
      content: "@Service\npublic final class DomainEventSubscribersInformation {\n\t\t// ...\n\n    private static HashMap<Class<?>, DomainEventSubscriberInformation> scanDomainEventSubscribers() {\n        Reflections   reflections = new Reflections(\"tv.codely\");\n        Set<Class<?>> subscribers = reflections.getTypesAnnotatedWith(DomainEventSubscriber.class);\n\n        HashMap<Class<?>, DomainEventSubscriberInformation> subscribersInformation = new HashMap<>();\n\n        for (Class<?> subscriberClass : subscribers) {\n            DomainEventSubscriber annotation = subscriberClass.getAnnotation(DomainEventSubscriber.class);\n\n            subscribersInformation.put(\n                subscriberClass,\n                new DomainEventSubscriberInformation(subscriberClass, Arrays.asList(annotation.value()))\n            );\n        }\n\n        return subscribersInformation;\n    }\n}\n  // ..."
    },
    {
      type: "text",
      content: "Lo que haremos aquí será aprovechar de nuevo la reflexión, pero esta vez para recuperar todas las clases dentro de nuestro namespace que contengan la anotación propia @DomainEventSubscriber, además, esta anotación incluye un campo value que contiene un array con los eventos de dominio a los que está subscrito, con lo que tendremos mapeados el conjunto de subscribers con los eventos a los que se subscribe 🙌"
    },
    {
      type: "text",
      content: "Con este mapeo recuperado, el siguiente paso es recorrer los subscribers para crear para cada uno 3 colas (una por exchange) y 4 bindings (3 para los exchanges y un cuarto binding para conectar la cola de retry con la principal). En el caso de la cola de retry además le hemos añadido una serie de argumentos que nos permitirán, como comentábamos antes automatizar y delegar en la infraestructura el proceso de reintentar consumir el evento en la cola principal. Con todo listo y agrupado en un array de Declarables lo añadimos a la pila anterior haciéndole un flatMap() para simplificar la lista a un sólo nivel de Declarables"
    },
    {
      type: "text",
      content: "Con esto ya tendríamos lista nuestra automatización, y cada vez que despleguemos sabremos que se ejecutará este método. Tal como funciona RabbitMQ, si al intentar crear una nueva cola ésta ya existiese, simplemente lo omitirá y no hará nada, sólo en el caso de que intentemos crear una cola con unos parámetros de configuración distintos a los de la misma cola ya existente será cuando nos lance un error para poder revisar por qué estamos pasando una configuración diferente para esa misma cola"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🐰 Consumir eventos desde RabbitMQ!"
    }
  ],
};
