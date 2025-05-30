export default {
  title:
    "09 Utilizando objetos Request y Response para comunicarnos con el Application Service",
  videoId: "PGD8SOWSSnY",
  notes: [
    { type: "subtitle", content: "Utilizando Request/Response para comunicarnos con los AS" },
    {
      type: "text",
      content: "Ya hemos iniciado un planteamiento de desarrollo Outside-in, establecido mínimamente nuestra estrategia de testing e incluso hemos extraído el Application Service fuera del Controller, por lo que ya va siendo hora de llevar a cabo cierto refactor ♻️ para comenzar a modelar nuestro dominio a través de las clases Request/Response"
    },
    {
      type: "text",
      content: "Estas clases no tienen que ver con las Requests y Responses del protocolo HTTP, sino que se tratan de DTOs (También conocidos como POJOs en el ecosistema Java) que nos permitirán dar el paso para desacoplar los Controladores de los Servicios de Aplicación"
    },
    {
      type: "text",
      content: "Hasta ahora, el procedimiento que llevábamos a cabo era invocar al caso de uso desde el controller pasándole directamente los atributos, sin embargo a la larga esto nos supondrá un problema tanto al comenzar a utilizar Value Objects que encapsulen cierta lógica de Dominio (¡Chirría instanciar estos elementos desde la capa de infraestructura!) como cuando queramos migrar a CQRS"
    },
    {
      type: "text",
      content: "Aunque ya tenemos un objeto Request dentro del propio controller, no creemos que tenga sentido mantener su uso ya que el hecho de tener que pasarle los atributos a través de los setters supone siempre un riesgo de que olvidemos pasarle alguno de ellos y nos genere un error (es mucho más recomendable usar un objeto que nos fuerce a pasarle todos los campos en el constructor), además queremos poder reutilizar el caso de uso tanto en diferentes protocolos de comunicación como en Eventos de Dominio, por lo que nos interesa añadir esta 'complejidad' y evitar cualquier dependencia con la capa de infraestructura (como también suponía utilizar el objeto Request de Spring)"
    },
    {
      type: "text",
      content: "Así pues crearemos nuestro propio CreateCourseRequest al mismo nivel de directorio que el caso de uso y con los mismos parámetros que el agregado Course. Será ahora esta request lo que reciba el método create() del caso de uso por parámetro, de donde extraerá los valores y seguirá el flujo tal y como habíamos visto hasta ahora"
    },
    {
      type: "text",
      content: "CodelyTV Tip ☝️: Estamos omitiendo el prefijo 'get' en los getters del DTO puesto que asumimos que los atributos de clase serán siempre privados (obligando a que las mutaciones de estado se den sólo dentro de la propia clase) y no habrá por tanto confusión respecto a si se llama al método o al propio atributo"
    },
    {
      type: "text",
      content: "Este refactor implicará también modificar nuestro test unitario del caso de uso para que el caso de uso reciba también una instancia de nuestro objeto request, los tests de aceptación, por su parte, no sufrirán ningún cambio ya que el protocolo de comunicación (con el cual interaccionamos en este test) no se ve afectado 🤷🏼‍♂️"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🆔 UUIDs como Identificadores!"
    }
  ],
};
