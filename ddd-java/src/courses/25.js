export default {
  title: "25 Publicación de eventos de dominio Curso creado",
  videoId: "vAV_OIhks3k",
  notes: [
    { type: "subtitle", content: "Publicación de eventos de dominio: Curso creado" },
    {
      type: "text",
      content: "En esta lección vamos a introducir el concepto de Eventos de Dominio en nuestro sistema, lo cual nos permitirá escuchar y reaccionar a las acciones que se produzcan en éste. El primer paso será definir cómo se llevará a cabo la publicación de eventos, independientemente de la implementación que finalmente utilicemos"
    },
    {
      type: "text",
      content: "Si estos conceptos aún os bailan o no tenéis del todo claro os recomendamos encarecidamente que vayáis primero al curso de DDD Aplicado"
    },
    {
      type: "text", 
      content: "Lo primero que debemos tener en consideración es el concepto de EventBus, esta será la pieza encargada de publicar los eventos en algún lugar desde el cual se podrán consumir posteriormente. Para nosotros este EventBus de momento no es más que una interface propia con un método publish() el cual espera recibir una lista de eventos de Dominio"
    },
    { type: "subtitle", content: "Clase Course:" },
    {
      type: "code",
      content: "public final class Course extends AggregateRoot {\n    // ...\n\n    public Course(CourseId id, CourseName name, CourseDuration duration) {\n        this.id       = id;\n        this.name     = name;\n        this.duration = duration;\n    }\n    public Course(CourseId id, CourseName name, CourseDuration duration) {\n        id       = null;\n        name     = null;\n        duration = null;\n    }\n\n    public static Course create(CourseId id, CourseName name, CourseDuration duration) {\n        Course course = new Course(id, name, duration);\n\n        course.record(new CourseCreatedDomainEvent(id.value(), name.value(), duration.value()));\n\n        return course;\n    }\n    // ...\n}"
    },
    {
      type: "text",
      content: "Dentro del método de nuestro caso de uso podemos ver como en lugar de hacer un 'new' de Course, estamos llamando al named constructor create(). El sentido de este cambio es que además de crear una instancia válida, también registraremos el evento de dominio que acaba de producirse"
    },
    {
      type: "text",
      content: "El método record() con el que lo hacemos viene heredado de AggregateRoot, clase que además de este método que nos añade un evento a la lista ofrece un pullDomainEvents() que como su nombre indica volcará todos los eventos de la lista y la vaciará (para evitar volverlos a tener en un posterior acceso)"
    },
    {
      type: "text",
      content: "Este pullDomainEvents() será precisamente al que llamaremos desde el caso de uso en el momento en el que queremos que el EventBus los publique una vez que la lógica se ha llevado a cabo y, en este caso, se ha guardado correctamente el curso en BD (recordemos que es el servicio de aplicación el que va a llamar a los distintos servicios de dominio y establecer la barrera transaccional a nivel de acceso a BD y publicación de Eventos)"
    },
    {
      type: "text",
      content: "A nivel de tests también tendremos que validar, tal como hicimos con la persistencia en BD mockeando la implementación del repositorio, que el evento creado se acaba publicando (podéis verlo aquí)"
    },
    {
      type: "text",
      content: "Una alternativa a esta propuesta de publicación de eventos para evitar tener que apilarlos dentro del agregado podría ser pasar por parámetro del named constructor el propio eventBus y el repositorio, de modo que sea desde este mismo punto donde persistamos en BD y publiquemos el evento para quien esté escuchando. El beneficio que nos ofrece esta posibilidad es el hecho de evitar que pudiera llamarse a este método sin guardar en BD o publicar el evento"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: ♨ Implementación del Event Bus con Spring Events!"
    }
  ],
};
