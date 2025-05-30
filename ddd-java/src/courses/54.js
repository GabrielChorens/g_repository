export default {
  title: "54 Mantener sincronizada la proyección de Elasticsearch",
  videoId: "7W8vtQ5symE",
  notes: [
    { type: "subtitle", content: "♻️ Mantener sincronizada la proyección de Elasticsearch" },
    {
      type: "text",
      content: "Aunque los Eventos de Dominio nos ayudarán con todos los datos que se registren a partir de este momento, un problema con el que nos encontramos cuando tenemos una nueva Proyección o Base de Datos es la cuestión acerca de qué hacer con todos los registros que ya existían en la tabla original 🕋"
    },
    {
      type: "text",
      content: "Una de las posibles soluciones será crear un comando de CLI que, una vez ejecutado, nos transfiera todo el contenido de una BD a la otra. Siguiendo esta alternativa crearemos el comando dentro de la aplicación de Backoffice, que recibirá por constructor tanto el repositorio con la fuente de los datos como el repositorio de destino para éstos"
    },
    {
      type: "text",
      content: "A nivel del agregado BackoficeCourse hemos añadido los métodos fromPrimitives() y toPrimitives() que nos ayudarán a la hora de recuperar y persistir nuestros agregados en el repositorio de Elasticsearch. En el caso de querer recuperar todos los registros, por ejemplo, una vez recuperada la SearchResponse iteraríamos sobre los hits recuperados y lo mapearíamos con este toPrimitives para poder devolver un listado de nuestro BackofficeCourse"
    },
    {
      type: "subtitle",
      content: "Clase MigrateCoursesFromMysqlToElasticsearchCommand:"
    },
    {
      type: "code",
      content: "public void execute() {\n  mysqlRepository.searchAll().forEach(elasticSearchRepository::save);\n}"
    },
    {
      type: "text",
      content: "Para el Comando de CLI pasaremos por constructor tanto el repositorio que contiene la fuente de datos como el repositorio de destino y, una vez invocado, simplemente recuperaremos todos los registros de la fuente y por cada registros invocaremos al método save() del repositorio de destino. Ojo 👀 que al no tener que realizar ninguna conversión (porque coinciden el tipo del repo de entrada como el de salida), podemos hacer esta llamada automáticamente, pero si tuviéramos que realizar alguna adaptación de los datos para el repositorio de destino, sería aquí donde lo haríamos"
    },
    {
      type: "text",
      content: "Cabe decir que esta solución no resultará nada óptima en caso de que tengamos un volumen de registros muy elevado ya que se eternizaría este proceso, para ello podríamos trabajar en alternativas con ese streaming de datos (por ejemplo ir procesando los registros por chunks)"
    },
    {
      type: "text",
      content: "Frente a esta alternativa de ejecutar un comando desde consola, otra opción podría ser el recuperar todos los eventos de dominio que se hayan producido desde el inicio de la aplicación (en caso de poder contar con este registro) y lanzárselos al contexto del Backoffice"
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
      content: "¡Nos vemos en el siguiente video: 🏎 Patrón Criteria/Specification con Elasticsearch!"
    }
  ],
};
