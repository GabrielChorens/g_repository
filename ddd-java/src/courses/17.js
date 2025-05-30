export default {
  title: "17 Inicializando multiaplicaciones con Spring",
  videoId: "OIYUpd4wbcs",
  notes: [
    { type: "subtitle", content: "Inicializando multiaplicaciones con Spring" },
    {
      type: "text",
      content: "El modo en que habíamos planteado inicialmente el Starter de nuestro proyecto, pese a funcionar correctamente como ya hemos visto, arrastra una complicación considerable ya que hasta ahora lo que veníamos haciendo era levantar todas las aplicaciones simultáneamente"
    },
    {
      type: "text", 
      content: "Esta clase lo primero que hacía era escanear todo lo que hubiera dentro de '/apps' y de cada uno de los distintos contextos, por lo que cuando queríamos levantar por ejemplo la aplicación de 'Mooc' teníamos que levantar también el Backoffice y cualquier otra que tengamos"
    },
    {
      type: "text",
      content: "Lo que buscamos ahora por tanto es parametrizar este 'Starter' para poder indicarle vía comando qué aplicación del monorepo es la que queremos que nos levante. Así lo que haremos será enviar como primer argumento el nombre de la aplicación a levantar (diferenciando frontend y backend) y como segundo el nombre del comando a ejecutar"
    },
    { type: "subtitle", content: "Levantando una aplicación:" },
    {
      type: "code",
      content: "./gradlew :run --args=\"mooc_backend api\""
    },
    {
      type: "text",
      content: "Con el nombre de la aplicación podremos identificar a que clase llamar para levantar la aplicación:"
    },
    { type: "subtitle", content: "Clase MoockBackendApplication:" },
    {
      type: "code",
      content: "@SpringBootApplication(exclude = HibernateJpaAutoConfiguration.class)\n@ComponentScan(\n    includeFilters = @ComponentScan.Filter(type = FilterType.ANNOTATION, classes = Service.class),\n    value = {\"tv.codely.shared\", \"tv.codely.mooc\", \"tv.codely.apps.mooc\"}\n)\npublic class MoocBackendApplication {\n    public static HashMap<String, Class<?>> commands() {\n        return new HashMap<String, Class<?>>() {{\n            put(\"fake\", FakeCommand.class);\n            put(\"another_fake\", AnotherFakeCommand.class);\n        }};\n    }\n}"
    },
    {
      type: "text",
      content: "Como se puede ver, hemos movido las anotaciones de SpringBoot desde el Starter a esta clase, por lo que será aquí donde escaneemos los namespaces en busca de cualquier cosa configuración que necesitemos para levantar la aplicación"
    },
    {
      type: "text",
      content: "Un detalle importante que tendremos en el Starter es que la comprobación del tipo de comando que recibíamos como argumento nos servirá para diferenciar en qué casos levantar el Web Server y en cuales no, ya que SpringBoot por defecto lo levantará siempre (es decir, inhabilitará esta acción)"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🦑 Ejecutando comandos de consola: Preparándonos para consumir eventos!"
    }
  ],
};
