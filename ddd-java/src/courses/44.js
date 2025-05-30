export default {
  title: "44 Integracion con sistema de plantillas Freemarker",
  videoId: "O53kDIamb3E",
  notes: [
    { type: "subtitle", content: "🌇 Integración con sistema de plantillas Freemarker" },
    {
      type: "text",
      content: "Para crear el Frontend del backoffice utilizaremos FreeMarker como sistema de plantillas, así que lo primero que necesitamos es añadir esta dependencia a nuestra aplicación y llevar a cabo algunos ajustes para su integración"
    },
    {
      type: "text",
      content: "Esta dependencia la añadiremos en el fichero 'build.gradle' de la aplicación, en lugar de en el contexto como habíamos visto en otros casos, ya que es la propia aplicación la que servirá las plantillas."
    },
    {
      type: "text",
      content: "Una vez hecho el build de gradle con las nuevas dependencias será necesario definir la configuración web, para ello creamos dentro del /config de la aplicación esta clase BackofficeFrontendWebConfig (Se ha cambiado el nombre respecto al video para referenciar sobre qué frontal aplica 👀) que implementa el WebMvcConfigurer de Springboot, añadiendo las anotaciones necesarias para que el framework sepa que es un fichero de configuración y que debe habilitárnoslo como frontal web"
    },
    {
      type: "text",
      content: "Dentro de esta clase le especificaremos en addResourceHandlers() donde debe buscar los ficheros estáticos para llevárselos a la raiz de la url. Por otro lado, también especificaremos el sufijo de nuestras templates e inhabilitaremos la caché (sólo para pruebas, en producción debemos tenerla siempre habilitada ✅). Finalmente también vamos a especificar en qué ruta podrá encontrar las templates y con qué codificación vamos a trabajar: UTF-8"
    },
    {
      type: "text",
      content: "Así, crearemos las templates dentro del directorio /resources de nuestra aplicación, teniendo master.ftl como la principal en la propia raíz de este directorio (no olvidemos añadir este directorio en el listado del 'build.gradle' 🤔). Es importante que, aunque esté dentro de nuestra aplicación, lo encapsulemos en una carpeta con el nombre de la aplicación ya que al lanzar la aplicación los directorios de recursos se comprimen al primer nivel y esto provocaría una colisión al buscar los datos"
    },
    {
      type: "subtitle",
      content: "Clase HomeGetWebController:"
    },
    {
      type: "code",
      content: "@Controller\npublic final class HomeGetWebController {\n    @GetMapping(\"/\")\n    public ModelAndView index() {\n        return new ModelAndView(\"pages/home\", new HashMap<String, Serializable>() {{\n            put(\"title\", \"Welcome\");\n            put(\"description\", \"CodelyTV - Backoffice\");\n        }});\n    }\n}"
    },
    {
      type: "text",
      content: "Si nos fijamos en el controlador que nos proveerá la Home veremos que en lugar de añadir la anotación @RestController, lleva simplemente la anotación @Controller que prescinde de todos los recursos para la comunicación REST. Este controlador devolverá un ModelAndView que contiene tanto la ruta de nuestra template como un mapa con los atributos que le vamos a pasar a ésta para que los renderice"
    },
    {
      type: "text",
      content: "Esta template 'home.ftl' está heredando de 'master.ftl' para permitirnos reutilizar los elementos base de la web como el header y el footer y añadir los bloques que nos interesen en medio"
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
      content: "¡Nos vemos en el siguiente video: ⌚️ Contador de cursos vía query desde Controller!"
    }
  ],
};
