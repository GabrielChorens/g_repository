export default {
  title: "16 Implementación del repositorio para MySQL",
  videoId: "LRgK305Dw4c",
  notes: [
    { type: "subtitle", content: "Implementación del repositorio para MySql" },
    {
      type: "text", 
      content: "Una vez lista toda la configuración y el mapeo de nuestras entidades, lo que nos toca es implementar el repositorio en MySql para guardar Cursos y ver que los tests de aceptación pasan y que efectivamente estamos persistiendo en nuestra BD 👌"
    },
    {
      type: "text",
      content: "Hemos inyectado en esta implementación el bean de SessionFactory que vimos en la configuración anterior gracias al Autowiring (recordemos que para que nos inyecte las dependencias tendremos que añadir la anotación @Service a la clase), esta SessionFactory será la que utilicemos en los métodos save() y search() para engancharnos a la sesión actual de conexión a BD"
    },
    {
      type: "text",
      content: "En el caso del método save() simplemente le pasaremos por parámetro el agregado e internamente ya sabrá hacer el mapping con la tabla correspondiente. Puesto que toda query en Hibernate debe ser transaccional, tenemos dos opciones: picar nosotros mismos toda esa lógica de try-catch y rollbacks o delegarlo en javax, que nos provee de la anotación @Transactional para hacerlo de forma interna, en nuestro caso apostamos por esta segunda opción"
    },
    {
      type: "text",
      content: "De momento mantenemos la transacción a nivel de implementación de la infraestructura, pero tal como vimos en los cursos de DDD Aplicado y Arquitectura Hexagonal, debería ser el Application Service o Caso de Uso quien mantenga la atomicidad y la barrera transaccional a nivel de BD y de publicación de Eventos 🚧 ya que si algo falla en cualquiera de los colaboradores incluidos en el AS, no tendremos manera de hacer rollback de todo."
    },
    {
      type: "text",
      content: "Por tanto, aunque de momento nos veamos obligados a mantener este Transactional en la implementación del repositorio, iteraremos más adelante para moverlo a algún Middleware entre el Controller y el Application Service"
    },
    {
      type: "text",
      content: "En el método search() de nuevo aprovecharemos la sesión actual de conexión a BD para llamar al método find() pasándole tanto el identificador del recurso como la clase de nuestro agregado, en caso de no encontrar nada lo que nos devolverá será simplemente un null"
    },
    {
      type: "text",
      content: "Para ver las queries que se están lanzando internamente al ejecutar los tests de aceptación, podríamos activar el flag SHOW_SQL que vimos al inicio de la lección, otra alternativa será lanzar el comando mysql_general_log para que nos pinte el log de todo lo que ocurre con esta BD"
    },
    {
      type: "text",
      content: "CodelyTv Tip ☝️: Si queremos que nuestras queries de MySql se pinten de una forma mucho más legible podemos añadir la sentencia \\G al final de la query para que nos devuelva cada campo en una fila distinta 👌"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: Multiaplicaciones y comandos en monorepositorio!"
    }
  ],
};
