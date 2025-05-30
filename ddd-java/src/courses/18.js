export default {
  title:
    "18 Ejecutando comandos de consola: Preparandonos para consumir eventos",
  videoId: "bYwGTioxhN8",
  notes: [
    { type: "subtitle", content: "Ejecutando comandos de consola: Preparándonos para consumir eventos" },
    {
      type: "text",
      content: "Además de poder levantar únicamente aquella aplicación que nos interese, el refactor que hemos llevado a cabo también nos va a permitir lanzar comandos desde consola"
    },
    {
      type: "text",
      content: "Al igual que habíamos mapeado cada nombre de las aplicaciones con su respectiva clase para indicarlo al ejecutar el comando desde la consola, también hemos preparado un mapeo entre dicho nombre de la aplicación con los comandos (recogidos en un mapa de tipo <someCommandName, SomeCommand.class>) que tendrá disponibles, siendo precisamente cada aplicación quien tendrá la responsabilidad de devolvernos dicho emparejamiento como vemos aquí. De este modo, para lanzar un comando 'fake' que se encuentra dentro de la aplicación 'mooc_backend' simplemente tendremos que ejecutar el comando"
    },
    {
      type: "code",
      content: "./gradlew :run --args=\"mooc_backend fake\""
    },
    {
      type: "text",
      content: "Además estos comandos están preparados muy finos para que, en caso de tratar de ejecutar un comando que no tengamos registrado, nos devuelva no sólo un error en este sentido sino también el listado de comandos disponibles dentro de esa aplicación"
    },
    {
      type: "text",
      content: "Por último, estos comandos no dejan de ser servicios que vamos a inyectar, por lo que deben o bien llevar la anotación @Service o bien heredar de esta clase ConsoleCommand que hemos preparado y que ya contiene dicha anotación"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🙉 Declaración de servicios desacoplados!"
    }
  ],
};
