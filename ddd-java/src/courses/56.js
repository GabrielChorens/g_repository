export default {
  title: "56 Extraer aplicación backoffice backend",
  videoId: "RJLVyUM-TRM",
  notes: [
    { type: "subtitle", content: "✂️ Extraer aplicación backoffice backend" },
    {
      type: "text",
      content: "A lo largo del curso hemos ido haciendo algunas cosas que, si bien nos han permitido avanzar rápidamente, no eran lo mas finas que pudieran ser y se han convertido en una 'deuda técnica', veremos ahora cómo podemos saldar parte de esta deuda 💪🏻"
    },
    {
      type: "text",
      content: "En concreto hablamos de aquel controlador 'api' que habíamos creado dentro de la aplicación frontend del Backoffice que, aunque no encajaba mucho ahi dentro por no tratarse de un controlador web, asumimos esa deuda técnica y lo habíamos mantenido a falta de contar con una aplicación backend del Backoffice donde ubicarlo"
    },
    {
      type: "text",
      content: "Así pues, el objetivo que nos marcamos aquí es desligar ✂️ la parte puramente web de la API a la cual ataque para que ambas aplicaciones puedan evolucionar de forma autónoma e independiente y que cada una pueda desplegarse en servidores distintos"
    },
    {
      type: "text",
      content: "A nivel de estructura de carpetas replicaremos la que ya teníamos creada para el frontend dentro del directorio /tv/codely/apps/backoffice con las carpetas para comandos, controladores y configuración. Moveremos ese ApiCoursesGetController del que hablábamos renombrándolo simplemente a CoursesGetController y eliminando el '/api' del path ya que esta aplicación estará corriendo en un puerto o servidor distinto y se hace totalmente innecesaria esta especificación"
    },
    {
      type: "text",
      content: "Por otra parte, adaptaremos la clase BackofficeBackendApplication para que escanee y pueda levantar esta nueva aplicación con todo lo que tenga dentro. Esta nueva aplicación la daremos de alta en la clase Starter añadiéndola al HashMap que teníamos definido en application()"
    },
    {
      type: "text",
      content: "También habremos de especificar en nuestras variables de entorno que levantaremos el backend en un puerto distinto al que habíamos definido para el frontend. Con esto y habiendo dado de alta la aplicación, ya podemos añadir el comando para levantar la aplicación en el fichero Makefile"
    },
    {
      type: "text",
      content: "Ojo 👀 que al levantar ambas aplicaciones por separado y por tanto estar en hosts distintos tendremos que especificar en el controlador del backend que vamos a permitir peticiones GET desde cualquier origen y así no vernos bloqueados por la política de CORS del navegador. Para ello nos valdremos de la anotación @CrossOrigin de SpringBoot (al estar en la capa de infraestructura no hay problema 🙌). Por supuesto a nivel de seguridad lo más adecuado será definir una política mucho más restrictiva respecto a quien puede comunicarse con nuestra API"
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
      content: "¡Nos vemos en la siguiente lección: 🏎 Optimizando rendimiento - Más allá de Elasticsearch: Cache de cliente y servidor!"
    }

  ],
};
