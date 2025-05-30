export default {
  title: "27 Incrementar contador de curso",
  videoId: "Eo6Zoh_3LBw",
  notes: [
    { type: "subtitle", content: "Incrementar contador de curso" },
    {
      type: "text",
      content: "Tenemos un caso de uso en el que queremos poder ver el contador total de cursos desde la Home de la web, por lo que se nos plantea la necesidad de incrementar dicho contador cuando se produzca un evento de 'Curso Creado'"
    },
    {
      type: "text", 
      content: "Esta necesidad queda explícita en el test de aceptación, donde vemos que dado que se hayan enviado al EventBus N eventos de 'Curso Creado', lo que esperaremos es que una consulta al endpoint del contador de cursos nos devuelva un valor total de N"
    },
    { type: "subtitle", content: "Recuperar el total de cursos 🕵" },
    { type: "subtitle", content: "Clase CoursesCounterFinder:" },
    {
      type: "code",
      content: "@Service\npublic final class CoursesCounterFinder {\n    private CoursesCounterRepository repository;\n\n    public CoursesCounterFinder(CoursesCounterRepository repository) {\n        this.repository = repository;\n    }\n\n    public CoursesCounterResponse find() {\n        CoursesCounter coursesCounter = repository.search().orElseGet(() -> {\n            throw new CoursesCounterNotInitialized();\n        });\n\n        return new CoursesCounterResponse(coursesCounter.total().value());\n    }\n}"
    },
    {
      type: "text",
      content: "Este endpoint lo que hará será llamar a un caso de uso CourseCounterFinder que simplemente buscará el contador de cursos en BD (lanzando una excepción si no se hubiera inicializado aún ) y lo devolverá en la Response"
    },
    {
      type: "text",
      content: "A nivel de Test recordar que al estar lanzando nuestros tests de aceptación, la implementación que usamos del EventBus es la misma que en producción (precisamente lo que buscamos es comprobar que este EventBus publica los eventos que le pasamos)"
    },
    { type: "subtitle", content: "Incrementar el total de cursos 💯" },
    {
      type: "text",
      content: "Para que esto funcione correctamente, previamente ha debido de actuar un EventListener que hubiera estado escuchando el evento de 'Curso Creado', de modo que cuando éste se produce lo que hará será recuperar el contador actual de BD (e inicializarlo si no existe aún), incrementarlo en uno y volver a persistirlo"
    },
    {
      type: "text",
      content: "Ojo 👀, el hecho de inicializarlo a través de una función lambda viene del hecho de que no queremos que ejecute ese código en el momento de declararlo sino cuando el search() no encuentre nada"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text", 
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🚷 Idempotencia al consumir eventos: Lista de elementos en JSON con Hibernate!"
    }
  ],
};
