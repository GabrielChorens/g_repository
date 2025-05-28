export default {
  title: "09 Ejemplo implementación Query",
  videoId: "tikV58MtW4Q",
  notes: [
    {
      type: "subtitle",
      content: "Obteniendo los detalles de un Vídeo"
    },
    {
      type: "subtitle", 
      content: "Petición"
    },
    {
      type: "text",
      content: "En este caso se trata de la API REST con la que venimos jugando a modo de ejemplo a lo largo de todo el curso. Como buena API REST, para el caso de obtener información nos apoyaremos en una llamada HTTP de tipo GET. En el curso de testing veremos más en detalle, pero para que os hagáis una idea aquí tenéis el test de Behat. Para los que no estéis acostumbrados a PHP, Behat es un framework de test de comportamiento como lo podría ser Cucumber, es decir, implementa un lenguaje Gerkin."
    },
    {
      type: "subtitle",
      content: "Punto de entrada"
    },
    {
      type: "text",
      content: "El punto de entrada de nuestra aplicación será el Controlador encargado de recibir la petición GET: VideoGetController. Este controlador lo único que hará será obtener los datos de la petición, y encapsularlos en la FindVideoQuery para poder lanzarla al QueryBus."
    },
    {
      type: "subtitle",
      content: "QueryBus"
    },
    {
      type: "text",
      content: "Como decíamos, el controlador lanza la query a la implementación concreta de la interface de dominio QueryBus que se le haya inyectado. En este caso, la implementación será la del QueryBusSync."
    },
    {
      type: "text",
      content: "Este QueryBus tendrá el mapeo del handler correspondiente al que debe trasladarse la query."
    },
    {
      type: "subtitle",
      content: "QueryHandler"
    },
    {
      type: "text",
      content: "En este caso, ejecutaremos el FindVideoQueryHandler. Responsable como sabemos de recibir la query con primitivos e instanciar objetos del dominio en forma de value objects como por ejemplo el VideoId. Estos Value Objects, como se ve en este mismo ejemplo de VideId, son los encargados de encapsular la lógica correspondiente a cada uno de los elementos. En este caso concreto, comprobar en el momento de instanciación que el UUID es válido."
    },
    {
      type: "text",
      content: "Una vez ha instanciado todos los objetos de dominio, el QueryHandler sabe qué ApplicationService/UseCase/Action ejecutar ya que la tiene inyectada. Con lo cuál, invoca este servicio pasándole todos los parámetros necesarios con su tipo correspondiente."
    },
    {
      type: "subtitle",
      content: "Response"
    },
    {
      type: "text",
      content: "Un aspecto importante y que marca la principal diferencia con el caso de los comandos, es que el QueryHandler ahora sí debe tener un retorno. En concreto, será el QueryHandler el encargado de llamar al VideoResponseConverter para convertir la instancia Video que le pasa el VideoFinder, a una instancia de tipo VideoResponse."
    },
    {
      type: "text",
      content: "La diferencia entre estos dos elementos, Video y VideoReponse, radica en el hecho de que VideoReponse únicamente contiene primitivos. Es decir, es un DTO que nos servirá para pasar por el QueryBus en el sentido contrario al que lo hacíamos con la Query."
    },
    {
      type: "text",
      content: "Como sabemos, por el bus sólo pueden pasar datos en plano, con lo cuál, tenemos que convertir esa instancia de Video que modela a través de los distintos Value Objects ese concepto de dominio, a un elemento que únicamente tenga primitivos."
    },
    {
      type: "subtitle",
      content: "Caso de uso"
    },
    {
      type: "text",
      content: "Una vez el caso de uso recibe la petición con el identificador del vídeo a obtener los datos, simplemente ejecuta la lógica correspondiente. En el caso del VideoFinder, buscará a través del VideoRepository el Video correspondiente al VideoId recibido y lo devolverá."
    }
  ]
}; 