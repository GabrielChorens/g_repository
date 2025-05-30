export default {
  title: "39 Refactoring De Arquitectura Hexagonal a CQRS",
  videoId: "m5YUTxS93QU",
  notes: [
    { type: "subtitle", content: "♻️ Refactoring De Arquitectura Hexagonal a CQRS" },
    {
      type: "text",
      content: "Una vez integrado nuestro CommandBus, vamos a refactorizar el flujo de nuestra aplicación para, en lugar de llamar al caso de uso desde el controlador directamente, hacer que éste sólamente conozca acerca del CommandBus y le envíe el comando en cuestión"
    },
    {
      type: "text",
      content: "Gracias a que en videos anteriores habíamos preparado ya cierta abstracción al introducir nuestro propio objeto Request para comunicarnos con el caso de uso, los cambios a nivel del controlador serán mínimos(Ojo 👀 no confundamos este Request que habíamos creado nosotros con el que nos proporciona Spring y que el framework rellena automáticamente con el body de la petición)"
    },
    {
      type: "text",
      content: "En términos de confianza con el refactor que llevemos a cabo cobra un papel super importante el hecho de que nuestros tests de aceptación sigan pasando en verde una vez realizadas las modificaciones. Por otra parte, tendremos que realizar algunos cambios en los tests unitarios puesto que ahora el punto de entrada ya no será el caso de uso sino el propio CommandHandler"
    },
    {
      type: "subtitle",
      content: "Clase CoursesPutController:"
    },
    {
      type: "code",
      content: "@RestController\npublic final class CoursesPutController {\n\n    public CoursesPutController(CommandBus commandBus) {\n        this.bus = bus;\n    }\n\n    @PutMapping(value = \"/courses/{id}\")\n    public ResponseEntity<String> index(\n        @PathVariable String id,\n        @RequestBody Request request\n    ) throws CommandHandlerExecutionError {\n        bus.dispatch(new CreateCourseCommand(id, request.name(), request.duration()));\n\n        return new ResponseEntity<>(HttpStatus.CREATED);\n    }\n    // ...\n}"
    },
    {
      type: "text",
      content: "Lo primero que haremos en nuestro Controller será dejar de requerir el caso de uso tal como hacíamos inicialmente e inyectar vía constructor el CommandBus. También modificaremos el objeto CreateCourseRequest para que sea un CreateCourseCommand que extienda de Command, esta herencia será la que nos permita hacer el match entre Commands y CommandHandlers como vimos al inicio de esta lección y, además, nos facilitará poder llevar a esta interface en un futuro cualquier información relativa a la capa de transporte que sea transversal a todos los comandos 👨‍👧‍👦 Este CreateCourseCommand se lo enviaremos al dispatch() del CommandBus en el lugar en el que anteriormente llamábamos al caso de uso"
    },
    {
      type: "subtitle",
      content: "Clase CreateCourseCommandHandler:"
    },
    {
      type: "code",
      content: "@Service\npublic final class CreateCourseCommandHandler implements CommandHandler<CreateCourseCommand> {\n    //...\n\n    @Override\n    public void handle(CreateCourseCommand command) {\n        CourseId       id       = new CourseId(command.id());\n        CourseName     name     = new CourseName(command.name());\n        CourseDuration duration = new CourseDuration(command.duration());\n\n        creator.create(id, name, duration);\n    }\n}"
    },
    {
      type: "text",
      content: "Tendremos que crear por tanto el CreateCourseCommandHandler asociado a este Command (Recordemos que en el caso de los comandos, a diferencia de los eventos, queremos que siempre haya un handler para ejecutar la acción en cuestión), el cual le especificaremos al implementar la interface CommandHandler. El handle() de esta clase será quien se encargue ahora de traducir los datos primitivos recibidos en el Command y pasárselos al caso de uso el cual ahora, en lugar de esperar un objeto Request, recibirá los Value Objects propios de nuestro Dominio. Esta traducción a objetos de nuestro dominio es un 'lujo' que podemos permitirnos porque entendemos que el CommandHandler se encuentra ya dentro del subsistema y puede conocer el Dominio de nuestra aplicación"
    },
    {
      type: "text",
      content: "Tal como vimos al inicio de la lección en el momento de hacer el match Command-CommandHandler, tendremos que ir al container de la aplicación para instanciar el CommandHandler, por lo que es importante que le añadamos a este la anotación @Service para que desde el framework se añada al container y podamos encontrarlo"
    },
    {
      type: "text",
      content: "A nivel de Tests Unitarios que nos ofrezcan la confianza de que todo siga funcionando correctamente también tendremos que hacer algunas pequeñas modificaciones, y es que nuestro punto de entrada ya no será el caso de uso en sí, sino el propio CommandHandler, por lo que será éste el que instanciemos y, en lugar de generar un ObjectMother de nuestro CreateCourseRequest, lo haremos de CreateCourseCommand para pasárselo a ese CommandHandler en la llamada al método handle(). Finalmente, seguiremos validando que se ha persistido el curso en BD y que hemos publicado el correspondiente Evento de Dominio como veníamos haciendo previamente"
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
      content: "¡Nos vemos en el siguiente video: 🚎 Integración y refactor a Query Bus!"
    }
  ],
};
