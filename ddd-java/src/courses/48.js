 export default {
    title: "48 Nuevo Bounded Context Backoffice",
    videoId: "frv5KMhnHi4",
    notes: [
    { type: "subtitle", content: "🤖 Nuevo Bounded Context: Backoffice" },
    {
      type: "text",
      content: "Ya tenemos la aplicación del frontend del backoffice en funcionamiento pero, tal como lo habíamos planteado hasta ahora, a la hora de recuperar el listado de cursos lo hacía solicitándolo al contexto de Mooc, como parte de la deuda técnica que habíamos asumido en un momento inicial"
    },
    {
      type: "text",
      content: "Siguiendo la premisa de que estamos trabajando con DDD y que contamos con equipos organizacionales divididos por áreas (Mooc, Backoffice…) entendemos que, aunque tengamos mecanismos para ello, no tiene sentido que desde el frontend de uno estemos llamando al backend de otro (Pensemos por ejemplo en los bloqueos que supondrá si necesitamos que cambia algo de esa lógica). Por eso decidimos pagar la deuda técnica contraída y crear el backend propio para Backoffice 🤝"
    },
    {
      type: "text",
      content: "A nivel de estructura de carpetas no supondrá ningún cambio ya que al inicio del curso ya habíamos dado de alta el contexto de backoffice, sin embargo si que hemos preparado la configuración de BD para el contexto en esta clase BackofficeHibernateConfiguration que guardaremos en el módulo Shared del contexto"
    },
    {
      type: "text",
      content: "Este fichero de configuración nos proveerá de distintos servicios (transaction_manager, session_factory, data_source) para conectar a la BD, de modo que cualquier repositorio del contexto pueda acceder a ellos inyectando la dependencia. Tener la configuración guardada de este modo nos da la ventaja de tener distintas conexiones a BD"
    },
    {
      type: "text",
      content: "Para evitar tener que copiar y pegar la configuración para cada uno de estos ficheros hemos abstraído la creación de las instancias a la clase HibernateConfigurationFactory"
    },
    {
      type: "subtitle",
      content: "Clase MySqlCourseRepository:"
    },
    {
      type: "code",
      content: "@Transactional(\"mooc-transaction_manager\")\npublic class MySqlCourseRepository extends HibernateRepository<Course> implements CourseRepository {\n    public MySqlCourseRepository(@Qualifier(\"mooc-session_factory\") SessionFactory sessionFactory) {\n        super(sessionFactory, Course.class);\n    }\n}"
    },
    {
      type: "text",
      content: "En este punto es importante incidir en que al poder tener aplicaciones que carguen distintos contextos, tendremos que especificar que configuración queremos cargar, como vemos en este repositorio del contexto de Mooc. Aunque esto nos obliga a añadir anotaciones de Springboot, al estar encapsulado dentro de la infraestructura, asumimos este 'mal menor' sin que nos pese tanto"
    },
    {
      type: "text",
      content: "Por otro lado y siguiendo unas buenas prácticas, hemos sacado a parámetros los datos de acceso a las distintas BD de la aplicación (host, puerto, usuario…). En este caso lo hemos sacado a un fichero '.env', tal y como suele hacerse en entornos como Kubernetes, y hecho uso de la librería Dotenv para manejar este tipo de ficheros (Envuelto en nuestra clase Parameter)"
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
      content: "¡Nos vemos en el siguiente video: 📜 Listado de cursos: Mantener proyección de cursos en MySQL!"
    }
        
    ],
};