export default {
  title: "46 Crear curso Formulario y command desde Controller",
  videoId: "LdD_czXn79o",
  notes: [
    { type: "subtitle", content: "✌️ Crear curso Formulario y command desde Controller" },
    {
      type: "text",
      content: "Visto cómo recuperar datos vía QueryBus para plasmarlos en la template, lo siguiente que queremos poder hacer es enviar datos desde ésta para crear un nuevo recurso vía CommandBus"
    },
    {
      type: "text", 
      content: "El objetivo en este caso es poder crear un nuevo Curso a través de un formulario en la web, lo cual indirectamente implicará que se incremente el contador que vimos en el video anterior"
    },
    {
      type: "text",
      content: "Una primera consideración relativa a DDD es el hecho de que estamos enviando el identificador del curso desde el formulario, es decir, como ya hemos hablado anteriormente cuando veíamos CQRS será el cliente quien tenga la responsabilidad de generar y pasar el identificador del recurso al controlador (aunque generalmente será algo que permanezca invisible de cara al usuario)"
    },
    {
      type: "text",
      content: "Por otro lado, otra consideración importante es que estaremos forzando que se refresque 🔄 la página una vez enviado el formulario a fin de evitar que el usuario pueda volver a enviar los mismos datos de nuevo al ser él quien la refresque"
    },
    {
      type: "subtitle",
      content: "Clase CoursesPostWebController:"
    },
    {
      type: "code",
      content: "@PostMapping(value = \"/courses\", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)\npublic RedirectView index(@RequestParam Map<String, String> request) throws Exception {\n    bus.dispatch(new CreateCourseCommand(request.get(\"id\"), request.get(\"name\"), request.get(\"duration\")));\n\n    return new RedirectView(\"/courses\");\n}"
    },
    {
      type: "text",
      content: "Puesto que los navegadores no entienden de comunicación vía PUT, aunque le estemos enviando el identificador, hemos creado un controlador para el método POST que será el encargado de recibir la petición. En este caso además lo que devolveremos no será un ModelAndView sino un RedirectView que fuerce a la redirección una vez terminado lo que tengamos que hacer internamente"
    },
    {
      type: "text",
      content: "Otro detalle de este endpoint es que vamos a especificar que lo que va a recibir no es un objeto Json sino un formulario, el cual igualmente mapeará a un RequestParam del cual podremos recuperar los atributos (sin tipar)"
    },
    {
      type: "text",
      content: "Con los atributos recuperados de la request instanciaremos un nuevo CreateCourseCommand que mandaremos al bus sin esperar ninguna otra respuesta. No obstante, en este punto nos estaremos comiendo errores como el no recibir todos los parámetros necesarios, por lo que será necesario añadir validaciones 👮 que nos prevengan y avisen de este tipo de errors"
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
      content: "¡Nos vemos en el siguiente video: 🤷‍♀️ Crear curso Dónde ubicar validaciones de comandos!"
    }
  ],
};
