export default {
  title: "29 Guardado de eventos de dominio en MySQL",
  videoId: "NDi_GTtezGM",
  notes: [
    { type: "subtitle", content: "Guardado de eventos de dominio en MySQL" },
    {
      type: "text",
      content: "Acabamos de ver cómo llevar a cabo la publicación y consumo de eventos de dominio con Spring Events y, aunque hasta ahora podía sernos de ayuda, lo cierto es que quizás no es la opción más óptima para entornos de alto rendimiento, además, este sistema no nos ofrece toda la seguridad que necesitamos en cuanto que los eventos se procesen correctamente si algo fallase mientras éstos están aún 'en vuelo'"
    },
    {
      type: "text",
      content: "Para solucionar estas carencias optaremos en una primera iteración por guardar los eventos en BD, lo cual no sólo nos aporta esta seguridad sino que además supone una aproximación a poder implementarlo más adelante en un sistema de colas como RabbitMQ. Por otro lado, este paso a un sistema distribuído (en lugar de mantenerlos en memoria) también nos permitirá que otras aplicaciones o sistemas puedan consumir estos eventos"
    },
    {
      type: "text",
      content: "Hemos preparado esta implementación en MySql de nuestra interface EventBus que, al igual que veíamos en el repositorio, recibe por inyección en el constructor un SessionFactory con el que conectaremos a nuestra BD"
    },
    {
      type: "text",
      content: "Aunque podríamos haber hecho el mapping como vimos en el caso de guardar un agregado Curso, para este caso lo que haremos será lanzar la query en plano a modo ilustrativo de las distintas opciones que tendríamos con esta implementación"
    },
    {
      type: "text",
      content: "Un detalle importante en los atributos del evento es el caso del body: utilizaremos la implementación del método toPrimitives() para guardar los atributos particulares del evento en un mapa de tipo <String, Serializable> (la interface Serializable nos agrupa cualquier tipo primitivo), este mapa lo convertiremos a Json que tal como vimos era uno de los tipos que MySql soporta de forma nativa"
    },
    {
      type: "text",
      content: "Ojo 👀: Para el parseo a Json hemos utilizado la librería 'Jackson', la cual es importante que, a pesar de poder incluirla de forma transitiva con Hibernate, añadamos explícitamente en nuestro gradle ya que si la dependencia interna de Hibernate con Jackson cambiara en cualquier momento nos provocaría errores en nuestro código"
    },
    {
      type: "text",
      content: "También es importante que, en lugar de permitir que se propague la excepción de esta librería en caso de error, lo que elevemos sea una excepción propia, ya que esto reforzará la tolerancia al cambio en nuestro código (Remember OCP de SOLID 🤔) y no queremos perder todo lo que hemos ganado con la inversión de dependencia mediante interfaces agnósticas"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🐳 Consumir eventos de dominio desde MySQL!"
    }
  ],
};
