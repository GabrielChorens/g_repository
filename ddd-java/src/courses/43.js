export default {
  title: "43 Dando de alta una nueva aplicacin Backoffice Frontend",
  videoId: "xfolH3IDCjY",
  notes: [
    { type: "subtitle", content: "🧞‍♂️ Dando de alta una nueva aplicación Backoffice Frontend" },
    {
      type: "text",
      content: "En el próximo bloque comenzaremos a trabajar en el frontend de nuestro backoffice, repasando todas las consideraciones a tener en cuenta cuando seguimos DDD. Pero antes necesitaremos dar de alta esta aplicación 🏃"
    },
    {
      type: "text",
      content: "Recapitulando videos anteriores veíamos que habíamos creado las APIs de nuestras aplicaciones dentro del directorio /apps junto a la clase Starter. Así, dentro del directorio /backoffice/frontend crearemos la clase BackofficeFrontendApplication que seguirá el mismo patrón de configuración que vimos en el caso del Backend del Mooc."
    },
    {
      type: "text", 
      content: "Dentro de esta clase le indicaremos que directorios queremos que nos escanee, en este caso la carpeta shared, la propia de la aplicación y también la carpeta de mooc ya que de momento seguiremos acoplándonos en parte a ésta"
    },
    {
      type: "subtitle",
      content: "Clase Starter:"
    },
    {
      type: "code",
      content: "  private static HashMap<String, Class<?>> applications() {\n      HashMap<String, Class<?>> applications = new HashMap<>();\n\n      applications.put(\"mooc_backend\", MoocBackendApplication.class);\n      applications.put(\"backoffice_frontend\", BackofficeFrontendApplication.class);\n\n      return applications;\n  }"
    },
    {
      type: "text",
      content: "En la clase Starter daremos de alta esta nueva aplicación para que éste sepa que existe ✋"
    },
    {
      type: "text",
      content: "Por otro lado, para poder comprobar que el frontend se levanta correctamente seguiremos la estrategia de crear un controlador de HealthCheck al que consultar tal y como venimos haciendo para el Backend del Mooc"
    },
    {
      type: "text",
      content: "Con esto, ya sólo nos quedaría ejecutar el comando para levantar la aplicación y comprobar que el controlador responde bien. Este comando llamará al Starter, el cual irá a buscar el fichero de configuración de la aplicación"
    },
    {
      type: "text",
      content: "Ojo 👀 Recordemos que para que todo funcione correctamente será necesario que a la hora de escanear los directorios en BackoffieFrontendApplication añadamos tanto la carpeta del contexto como la de la propia aplicación (la API)"
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
      content: "¡Nos vemos en la siguiente lección: 🎨 Frontend web!"
    }
  ],
};
