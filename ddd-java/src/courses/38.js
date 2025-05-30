export default {
  title: "38 Integracion de Command y Query Bus",
  videoId: "sYqDtqIuP1s",
  notes: [
    { type: "subtitle", content: "🚌 Integración de Command y Query Bus" },
    {
      type: "text",
      content: "Antes de comenzar este nuevo bloque os recomendamos encarecidamente haber visto los cursos de CQRS y DDD Aplicado ya que daremos por comprendidos muchos conceptos y asumiremos que se trata de un contexto donde es beneficioso su uso para poder focalizarnos en su implementación en nuestra arquitectura en Java"
    },
    {
      type: "text", 
      content: "La implementación que haremos de nuestros CommandBus y QueryBus será muy similar a lo que hemos visto anteriormente en el EventBus, salvando la diferencia de que éste último tendrá una relación 1-N entre evento y subscriptores y, en el caso de Commands y Queries, la relación será siempre de 1-1 con sus respectivos CommandHandler/QueryHandler"
    },
    {
      type: "subtitle",
      content: "Clase InMemoryCommandBus:"
    },
    {
      type: "code",
      content: "@Service\npublic final class InMemoryCommandBus implements CommandBus {\n    private final CommandHandlersInformation information;\n    private final ApplicationContext         context;\n\n    // ...\n\n    @Override\n    public void dispatch(Command command) throws CommandHandlerExecutionError {\n        Class<? extends CommandHandler> commandHandlerClass = information.search(command.getClass());\n\n        CommandHandler handler = context.getBean(commandHandlerClass);\n\n        handler.handle(command);\n    }\n}"
    },
    {
      type: "text",
      content: "Al igual que hicimos para el mapeo de eventos/subscribers, la clase CommandHandlersInformation a través de reflexión escaneará nuestro proyecto para identificar todos los CommandHandlers (las implementaciones que extiendan de esta interface) y, a partir de estos, el Command al que esté conectado para obtener un mapeo de tipo <Command, CommandHandler>. Esta interface CommandHandler nos obliga por contrato a pasarle una clase genérica que extienda de Command, que será precisamente lo que nos permita hacer reflexión para mapear esta relación 🗺. Del mismo modo que veíamos en el caso de los eventos, todo este proceso se ejecutará en tiempo de compilación para que una vez arrancado se pueda acceder a esta información cuando sea necesaria (Recordemos que al añadirle la anotación @Service a la clase, nos la escaneará al lanzar la aplicación como un servicio inyectable)"
    },
    {
      type: "text",
      content: "A la hora de usarlo, lo que haríamos sería simplemente llamar al método dispatch() pasándole el comando que queremos ejecutar, dentro del método lo primero que hará será recuperar del CommandHandlersInformation el CommandHandler asociado a dicho comando, obteniendo la instancia desde el ApplicationContext y, finalmente, llamar al handle() de dicho CommandHandler"
    },
    {
      type: "text",
      content: "Un detalle relevante en esta integración es que la interface de CommandBus la encontraremos en la capa de Dominio de nuestra carpeta compartida, mientras que habrá una instancia de ésta por cada aplicación que tengamos"
    },
    {
      type: "text",
      content: "También es importante tener en cuenta que aunque en este caso estamos hablando de un CommandBus en memoria síncrono (sería así en la mayoría de los casos), también podría darse el caso en que lo hiciéramos de forma asíncrona, elección que podríamos considerar por cuestiones de rendimiento pero que llevará algunas complejidades asociadas como es el manejo de posibles excepciones"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: ♻️ Refactoring De Arquitectura Hexagonal a CQRS"
    }
  ],
};
