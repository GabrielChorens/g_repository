export default {
  title: "63 Alternativas con oAuth y ACLs",
  videoId: "3HUzpjiEyVI",
  notes: [
    { type: "subtitle", content: "🤝 Alternativas con oAuth y ACLs" },
    {
      type: "text",
      content: "Hemos visto cómo implementar y modelar una Basic Auth HTTP en nuestra aplicación que nos brinda una autenticación & autorización con las que gestionar el acceso a ésta, sin embargo no es el sistema mas amigable con el que podríamos contar hoy día, ya que contamos con alternativas mucho más finas y que ofrecen una mejor UX: OAuth 👌"
    },
    {
      type: "text",
      content: "El estandard OAuth nos permite poder hacer login a través de un servicio externo (Ej. Facebook, Google, Github…) en lugar de hacerlo desde un sistema de autenticación interno"
    },
    {
      type: "subtitle",
      content: "Flujo de Autenticación OAuth:"
    },
    {
      type: "image",
      content: "src/assets/63.png"
    },
    {
      type: "text",
      content: "Al acceder a la aplicación se solicita al usuario que se autentique con alguna de las alternativas disponibles"
    },
    {
      type: "text", 
      content: "El usuario envía las credenciales y el proveedor con el que quiere autenticarse"
    },
    {
      type: "text",
      content: "La aplicación envía las credenciales al proveedor para que las verifique"
    },
    {
      type: "text",
      content: "El proveedor, si todo está correcto mandará un token en la respuesta para identificar al usuario"
    },
    {
      type: "text",
      content: "En cada petición que enviemos a nuestra API le pasamos el token por cabecera para validar el acceso"
    },
    {
      type: "text",
      content: "Si no hay problema, la API devuelve el recurso solicitado con normalidad"
    },
    {
      type: "text",
      content: "A nivel de código habrá pocas diferencias con lo que ya teníamos previamente, ya que contaremos con un middleware que recibirá el token y se encargará de conectar con el servidor de oAuth que corresponda"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: ❓ Preguntas frecuentes!"
    }
    
  ],
};
