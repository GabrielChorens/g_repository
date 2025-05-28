export default {
  title: "15 FAQ 3",
  videoId: "3KFDMsz7Ckc",
  notes: [
    {
      type: "subtitle",
      content: "Autenticación y autorización con CQRS"
    },
    {
      type: "text",
      content: "Una cuestión super interesante al introducir CQRS en el flujo de nuestra aplicación es ¿Dónde situamos la lógica de autenticación, permisos, auditoría de usuarios…? 👮"
    },
    {
      type: "text",
      content: "Al romper con el flujo lineal de 'HttpRequest -> Controller -> Caso de Uso' puede resultarnos un poco confuso en qué punto situamos toda esta lógica ya que, una vez nos llega la petición al Controller, éste montará un DTO con los datos recibidos y lo despachará al Bus, con lo que ya no contaremos con información como la sesión u otro dato en el estado de la aplicación para gestionar la autenticación del usuario 🕵️"
    },
    {
      type: "text",
      content: "Un dato clave aquí es entender la diferenciación entre la autenticación y la autorización: Por un lado vamos a Autenticar que el usuario es quien dice ser cuando accede a nuestro endpoint (Autenticándolo en el Controller o en un Middleware), mientras que por otro lado, estaremos comprobando si el usuario tiene Permisos para realizar una acción (Autorización en el Caso de Uso)"
    },
    {
      type: "text",
      content: "Será fundamental entonces que, una vez autenticado el usuario en el Controller, recuperemos su userId a través de un JWT o cualquier otro tipo de credencial recibida y añadamos este dato en el DTO para que el Handler pueda, asumiendo que es quien dice ser, verificar si tiene permisos para hacer lo que quiere hacer"
    }
  ],
};
