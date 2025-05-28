export default {
  title: "07 Async Commands",
  videoId: "1b5B04cVRRY",
  notes: [
    {
      type: "subtitle",
      content: "Casos de uso para comandos asíncronos"
    },
    {
      type: "text",
      content: "Es importante destacar en qué casos de uso nos interesará especialmente que el procesado de los comandos se efectúe de forma asíncrona. Por los propios beneficios de la asincronía (no bloquear la respuesta al cliente a pesar de no haber finalizado la ejecución del caso de uso), nos interesará aplicarla especialmente en todos aquellos casos en los que la lógica sea costosa."
    },
    {
      type: "text", 
      content: "En el caso del vídeo de hoy, ponemos por caso el \"trim\" de vídeos. Es decir, modificar la duración del vídeo cortando un trozo por el inicio y/o final. Este tipo de acción requeriría de procesar el vídeo, algo que puede resultar en una operación costosa."
    },
    {
      type: "subtitle",
      content: "AsyncCommandBus"
    },
    {
      type: "text",
      content: "En el caso del ejemplo, vemos una implementación sencilla que lo único que hace es serializar la petición y dejarla en un fichero. En el repositorio de ejemplo del curso podéis ver su implementación. En el caso del ejemplo, el servicio encargado de procesar los comandos entrantes en un segundo plano sería el AsyncRequestFinder."
    },
    {
      type: "text",
      content: "Como decimos en el vídeo, en un caso real lo que haríamos sería añadir los comandos a procesar en una cola. Hay sistemas de colas como por ejemplo SQS de AWS que nos ofrecen una API sencilla para poder montar un sistema como el que se propone."
    }
  ],
};
