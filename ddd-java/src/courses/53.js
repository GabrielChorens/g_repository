export default {
  title: "53 Integracion de Elasticsearch",
  videoId: "aBUAbmwLuJc",
  notes: [
    { type: "subtitle", content: "🐛 Integración de Elasticsearch" },
    {
      type: "text",
      content: "Hemos visto cómo sacar una proyección de cursos para el Backoffice y cómo filtrar las búsquedas con ayuda del patrón Criteria, ahora nos toca ir más allá y optimizar el rendimiento de las consultas pasándonos a NoSQL y, para ello, integraremos Elasticsearch 🙌"
    },
    {
      type: "text",
      content: "Lo primero que necesitaremos será añadir en nuestro 'build.gradle' principal las dependencia del cliente de elasticsearch tanto de alto como de bajo nivel (veremos más adelante por qué necesitamos en ocasiones bajarnos a un nivel de abstracción más bajo)"
    },
    {
      type: "text",
      content: "Al igual que hicimos para Hibernate, crearemos dentro de la estructura compartida el fichero BackofficeElasticsearchConfiguration que nos cargue toda la configuración necesaria en el momento de arrancar la aplicación. Esta configuración nos proveerá de una instancia del cliente de Elasticsearch: ElasticsearchClient. Está no es sino un wrapper para los clientes alto y bajo nivel que mencionábamos, además de definir el prefijo del índice (por ejemplo 'backoffice_course' para la proyección de Cursos del Backoffice) en caso de no existir"
    },
    {
      type: "text",
      content: "Éste índice se representa por un fichero Json dentro de los recursos de cada contexto (/resources/database/backoffice), por lo que tendremos un fichero por cada índice/agregado existente"
    },
    {
      type: "text",
      content: "A la hora de comprobar si existe ya o no un índice recorreremos todos estos ficheros y consultando a través del cliente de alto nivel, será en caso de no existir aún el índice cuando recojamos la configuración del fichero Json y se la pasemos a Elasticsearch para darlo de alta mediante el cliente de bajo nivel"
    },
    {
      type: "text",
      content: "Finalmente, este ElasticsearchClient lo inyectaremos vía constructor a la clase abstracta ElasticSearchRepository de la cual posteriormente heredarán las distintas implementaciones del repositorio para cada agregado"
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
      content: "¡Nos vemos en el siguiente video: ♻️ Mantener sincronizada la proyección de Elasticsearch!"
    }
    
  ],
};