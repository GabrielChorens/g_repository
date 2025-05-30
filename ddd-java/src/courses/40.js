export default {
  title: "40 Integracion y refactor a Query Bus",
  videoId: "c8VIGgw-W-4",
  notes: [
    { type: "subtitle", content: "🚎 Integración y refactor a Query Bus" },
    {
      type: "text",
      content: "Una vez que hemos visto cómo refactorizar nuestro código para integrar el CommandBus llega el turno de hacer lo propio con el QueryBus y revisar las diferencias entre ambos ya que en el caso de las queries vamos a esperar que se devuelva una Response que podamos enviar al cliente, dicha Response no será otra cosa que un DTO para pasar la información entre las distintas capas de la aplicación"
    },
    {
      type: "text", 
      content: "Como vemos aquí, un detalle particular de la interface de QueryBus es que le estaremos indicando al único método que tenemos por contrato: ask(), que además de recibir una Query por parámetro, retornará un objeto de tipo genérico pero que extienda de nuestro Response. A la hora de hacer el match Query-QueryHandler, el proceso será el mismo que veíamos en el caso del CommandBus donde recuperábamos la relación del CommandHandlersInformation e instanciábamos el handler con ayuda del container de la la aplicación"
    },
    {
      type: "text",
      content: "Siguiendo el ejemplo del endpoint para obtener el contador total de cursos, tendremos que cambiar de nuevo en el Controller la inyección del caso de uso por la del QueryBus, de modo que ahora recuperaremos nuestra CoursesCounterResponse a través de la llamada a este bus pasándole como argumento una instancia de FindCoursesCounterQuery. Ojo 👀 porque en este caso en que el caso de uso no recibía ninguna Request el cambio es ligeramente distinto: En lugar de transformar una Request existente a Query, estamos creando directamente la nueva Query (Habría sido distinto si el caso de uso hubiera estado recibiendo un objeto Request con parámetros de 'filtro')"
    },
    {
      type: "subtitle",
      content: "Clase FindCoursesCounterQueryHandler:"
    },
    {
      type: "code",
      content: "@Service\npublic final class FindCoursesCounterQueryHandler implements QueryHandler<FindCoursesCounterQuery, CoursesCounterResponse> {\n    // ...\n\n    @Override\n    public CoursesCounterResponse handle(FindCoursesCounterQuery query) {\n        return finder.find();\n    }\n}"
    },
    {
      type: "text",
      content: "Una vez en la implementación del QueryHandler tendremos que definir por contrato no sólo el tipo de Query que recibiremos de entrada sino también la Response que devolveremos como objeto de salida. Finalmente será en este Handler donde inyectaremos el caso de uso, al que llamaremos desde el método handle() (Pasándole si fuera necesario los parámetros recogidos en la Query)"
    },
    {
      type: "text",
      content: "Puesto que entendemos que estos elementos (Query, QueryHandler, Response) están inscritos en la capa de comunicación, los situaremos en nuestra carpeta /application como aquellas piezas que exponemos al exterior y con las que se podrá interactuar"
    },
    {
      type: "text",
      content: "Por último, también tendremos que adaptar nuestro test unitario estableciendo como punto de entrada el QueryHandler en lugar del propio caso de uso, al igual que hicimos con el CommandHandler, y añadiendo la Query u ObjectMother correspondiente a ésta (ya que antes no lo necesitábamos en este caso concreto) que lanzaremos para validar la respuesta devuelta"
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
      content: "¡Nos vemos en la siguiente lección: 🥡 Bounded Contexts y módulos!"
    }
  ],
};
