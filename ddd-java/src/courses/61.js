export default {
  title: "61 Implementacion con basic auth HTTP",
  videoId: "NCVBKIZqXIw",
  notes: [
    { type: "subtitle", content: "✋ Implementación con basic auth HTTP" },
    {
      type: "text",
      content: "Una vez visto a qué nos referimos cuando hablamos de Autenticación y Autorización, y teniendo claro qué datos enviar al respecto en nuestros Eventos de Dominio, nos toca entrar en cómo implementaríamos de forma sencilla Basic Auth HTTP 👮"
    },
    {
      type: "text",
      content: "Aunque en Spring Security ya contamos con un mecanismo de autenticación básica, vamos a prescindir de ella en vista a poder modelar en un futuro estos elementos en nuestro dominio. Por esta razón hemos llevado la lógica a este middleware que, además, nos permitirá tener un mayor control y testar esta pieza de nuestra aplicación"
    },
    {
      type: "text",
      content: "Lo primero que debemos hacer es registrar este middleware (Filter en términos de Spring) asociándolo a los Path que decidamos, lo cual estableceremos dentro de la clase de configuración BackofficeBackendServerConfiguration (Recordemos que la anotación @Configuration nos permitirá que el framework identifique la clase como una configuración a cargar cuando levantemos la aplicación)"
    },
    {
      type: "text",
      content: "Será necesario que el middleware implemente la interface Filter de Spring para poder registrarlo, lo cual nos obligará a sobrescribir el método doFilter(). En este método será donde llevemos a cabo la lógica de nuestra autenticación por lo que, en primer lugar, comprobaremos si la petición llega con la cabecera 'authorization'. En caso de que no se hayan enviado las credenciales, resetearemos la respuesta enviándole un status 401-Unauthorized y las cabeceras correspondientes para que el usuario se autentique"
    },
    {
      type: "text",
      content: "En caso de que la petición si contuviera la cabecera, haríamos la decodificación de la cabecera para extraer el usuario y contraseña para poder validar las credenciales. De ser válidas, añadiremos en la request el usuario (por si lo necesitase el controller) y ejecutaremos el doFilter() para que la petición se siga ejecutando con normalidad. De lo contrario, pararemos la petición devolviendo un status 403-Forbidden"
    },
    {
      type: "text",
      content: "Así tendríamos una primera aproximación bastante básica que nos permitirá no sólo contar con una autenticación funcional en nuestra aplicación sino también poder evolucionarla para añadirle posteriormente una mayor complejidad a nivel de modelado"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 👌 Modelando el concepto \"Auth\"!"
    }
  ],
};
