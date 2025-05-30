 export default {
    title: "49 Listado de cursos Mantener proyeccion de cursos en MySQL",
    videoId: "J1FRG7r2rXg",
    notes: [
    { type: "subtitle", content: "📜 Listado de cursos: Mantener proyección de cursos en MySQL" },
    {
      type: "text",
      content: "Hasta ahora hemos visto cómo mostrar el total de cursos y como crear uno nuevo desde nuestra aplicación de backoffice, así que el siguiente paso que queremos dar es poder listar los cursos existentes, eso si, recuperándolos desde una proyección propia del contexto de Backoffice que le proporcione a este equipo una mayor autonomía con respecto al equipo de Mooc"
    },
    {
      type: "text",
      content: "El hecho de contar con una proyección de una tabla generalmente satisface una necesidad en términos de rendimiento: Puesto que lo habitual es que el número de accesos a BD sean mayoritariamente de lectura, nos interesará que el coste computacional recaiga en el momento de escritura, modelando los datos de la manera más óptima posible de cara a su consumo, en lugar de hacerlo en cada lectura (vía JOINs, cálculos derivados, etc)"
    },
    {
      type: "text",
      content: "La idea por tanto será llevar la lógica de la proyección a la capa de aplicación vía subscriber para que ésta sea quien lo gestione con independencia de donde la implementemos (no dejará de ser un detalle de implementación)"
    },
    {
      type: "text",
      content: "En lecciones anteriores veíamos cómo al crear un nuevo Curso por medio del named constructor, registrábamos el evento CourseCreatedDomainEvent que posteriormente publicábamos desde el caso de uso en el EventBus. Lo que haremos ahora será crear un Subscriber dentro del contexto de Backoffice que escuche dicho evento y ejecute el caso de uso BackofficeCourseCreator"
    },
    {
      type: "text",
      content: "Aunque pueda parecer redundante al principio el hecho de tener un agregado con el mismo nombre en diferentes contextos, tiene todo el sentido dentro de este planteamiento, como veremos en este caso, aunque el agregado Curso esté en ambos contextos, en cada uno de ellos tendrá aquellos atributos que nos interese 🤷🏼‍♂️"
    },
    {
      type: "text",
      content: "El caso de uso finalmente lo único que hará será persistir el curso (en este caso BackofficeCourse) en BD a través del repositorio que, ahora si, lleva anotado en el constructor el SessionFactory que queremos nos inyecte para que nos guarde nuestra proyección 🙌"
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
      content: "¡Nos vemos en el siguiente video: 🥳 Listado de cursos: Usando la nueva proyección en el Backoffice!"
    }
    ],
};