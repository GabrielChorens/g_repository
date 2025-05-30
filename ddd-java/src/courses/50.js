export default {
  title: "50 Listado de cursos Usando la nueva proyeccin en el Backoffice",
  videoId: "9s58vHa36P8",
  notes: [
    { type: "subtitle", content: "🥳 Listado de cursos: Usando la nueva proyección en el Backoffice" },
    {
      type: "text", 
      content: "Con la proyección de datos nutriéndose de la BD de Mooc y lista para ser consumida por el Backoffice nos toca ver cuál será el flujo que usaremos para listar todos los cursos de la aplicación 🙌"
    },
    {
      type: "text",
      content: "Lo que tendrémos para ello será un endpoint dentro de la aplicación de Backoffice que lance una Query para recuperar todos los cursos al QueryBus, por su parte, el QueryHandler asociado tendrá inyectado el caso de uso para llamarlo una vez invocado el método handle()"
    },
    {
      type: "subtitle",
      content: "Clase AllBackofficeCoursesSearcher:"
    },
    {
      type: "code",
      content: "public BackofficeCoursesResponse search() {\n    return new BackofficeCoursesResponse(\n        repository.searchAll().stream().map(BackofficeCourseResponse::fromAggregate).collect(Collectors.toList())\n    );\n}"
    },
    {
      type: "text",
      content: "Este caso de uso AllBackofficeCoursesSearcher lo que hará será llamar al repositorio y, una vez recuperado el listado de nuestros agregados BackofficeCourse lo mapearemos a un objeto BackofficeCourseResponse (Recordemos que utilizamos objetos Response para comunicarnos vía Query/Command y así evitar acoplamientos)"
    },
    {
      type: "text",
      content: "Finalmente esta Response llegará al controlador, donde se parsea a un objeto plano que en última instancia Springboot convertirá en un Json"
    },
    {
      type: "text",
      content: "Este controlador está actualmente dentro de la aplicación de frontend a pesar de no estar pintando nada directamente en la página, pero creemos que lo ideal sería que posteriormente se moviera a los controladores del backend de esta aplicación de Backoffice"
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
      content: "¡Nos vemos en la siguiente lección: 🕵️ Filtrando elementos en Backoffice: Patrón Criteria/Specification!"
    }
  ],
};
