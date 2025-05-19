export default {
    title: "18 Publicando eventos de curso creado",
    videoId: "sKhTYk-PIeM",
    notes: [
        { type: "subtitle", content: "El patrón Event Bus" },
        { type: "text", content: "Ahora que ya hemos visto cómo asentar las bases de nuestra aplicación, ha llegado la hora de seguir extendiéndola, pero queremos poder hacerlo de la forma más mantenible posible. Por ello, vamos a introducir el patrón de diseño Event Bus que nos permitirá desacoplar las diferentes piezas de nuestra aplicación con lo que ello implica, y que, potencialmente, nos permitirá también segregar nuestra aplicación en diferentes servicios." },
        { type: "subtitle", content: "Kit" },
        { type: "text", content: "En este caso, vamos a seguir extendiendo las funcionalidades compartidas entre los diferentes contextos o puntos de entrada de nuestra aplicación para añadirle todas las piezas 'genéricas' que nos permitirán poder implementar dicho Event Bus." },
        { type: "text", content: "En él, podemos encontrar, por un lado, la definición de lo que es un evento y un bus de eventos, y por otro lado, lo que es la base del evento ( BaseEvent )." },
        { type: "subtitle", content: "In-memory" },
        { type: "text", content: "Para poder hacer que todas las piezas queden finalmente conectadas, necesitamos una implementación de dicho Event Bus. Para ello, y siguiendo con el propósito formativo del curso, hemos implementado un Event Bus in-memory (en memoria) en el que entraremos un poco en detalle más adelante, pero hay que tener en cuenta que esto sería una implementación para un sistema de mensajería (RabbitMQ, Apache Kafka, etc)." }
    ]
}; 