export default {
  title: "65 Gestion de errores",
  videoId: "qRkU67SM1y4",
  notes: [
    { type: "subtitle", content: "🤕 Gestión de errores" },
    {
      type: "text",
      content: "Hay muchas alternativas a la hora de gestionar los errores y excepciones que se generan y que devolvemos desde nuestra aplicación, pero en este video os traemos nuestra propuesta siguiendo la línea de DDD"
    },
    {
      type: "text", 
      content: "Es importante llevar a cabo un manejo de excepciones propio ya que, aunque generalmente los frameworks como SpringBoot ya se encargan de traducir las excepciones en un código de error HTTP que devolver al cliente, esta traducción será muy generalista (devolviendo por ejemplo un status code 500 en casos en los que no aplique), devolviendo muchos casos una respuesta que no se corresponda con el problema real"
    },
    {
      type: "text",
      content: "En aquellos puntos en los que se generase una excepción (Ej. al atacar a un repositorio) lo que haremos será propagar hacia arriba una excepción propia de nuestro dominio que, al heredar de nuestra DomainError, obligaremos a que establezca un mnemotécnico y un mensaje descriptivo"
    },
    {
      type: "text",
      content: "Aunque ésta excepción finalmente se traduciría e n un código de error HTTP (400, 404…) y podría ser tentador aprovechar para meterlo dentro 😈, hay que tener en cuenta que por un lado, podríamos utilizar una excepción en distintos escenarios que llevaran a diferentes respuestas HTTP y, por otro lado, justamente estamos hablando de un detalle de infraestructura específico de este protocolo de comunicación, con lo que nos estaríamos acoplando desde nuestro dominio y es algo de lo que venimos huyendo 🤟"
    },
    {
      type: "text",
      content: "Hemos añadido una clase ApiController de la cual heredarán nuestros controllers y que, además de recoger la lógica del Query/CommandBus, nos obliga a implementar el método errorMapping(), que será el encargado de establecer la relación de los diferentes errores de dominio con sus status code de HTTP"
    },
    {
      type: "text",
      content: "¿Y donde se produce la magia? 🧙‍♀️En este caso hemos añadido este middleware que interceptará la request enviada por el cliente. Una vez identificado el controller al que se está llamando, dejará que siga ejecutándose el caso de uso asociado y si se arrojara una excepción dentro de éste la capturará para hacer el match con el status code que devolverá en la response"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🖼 😮 Casos de uso complejos que requieren información de varios contextos !"
    }
  ],
};
