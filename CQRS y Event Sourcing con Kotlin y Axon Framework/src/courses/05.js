export default {
  title: "05 Implementación carrito con CQRS",
  videoId: "6A5Zm-rSwXo",
  notes: [
    {
      type: "text",
      content: "Imaginemos que estamos en el punto en el que se nos pide desarrollar una funcionalidad específica de negocio."
    },
    {
      type: "text", 
      content: "Ahora ya tenemos una base de infraestructura que nos levanta una aplicación con toda la utilería que necesitamos para empezar un desarrollo basado en los principios de CQRS."
    },
    {
      type: "text",
      content: "En concreto lo que se nos pide es construir un servicio que gestione un carrito de un ecommerce con las siguientes operaciones:"
    },
    {
      type: "text",
      content: "Añadir producto.\nModificar productos.\nListar productos.\nConfirmar carrito con pago incluido (el pago lo simularemos)."
    },
    {
      type: "text",
      content: "El curso está pensado en comenzar explicando CQRS y acabar con Event Sourcing. De ese modo resulta sencillo montar el proyecto de fuera hacia dentro ya que vamos a conectar los endpoints de la API con el dominio usando el Command Bus y el Query Bus."
    },
    {
      type: "text",
      content: "Por ahora en esta sección no vamos a implementar las lógicas de dominio ya que para ello usaremos Event Sourcing que explicaremos más adelante, así simplemente nos limitaremos a conectar los buses a unos handlers que por ahora poco van a hacer."
    },
    {
      type: "text",
      content: "El código de esta sección lo puedes ver en:"
    },
    {
      type: "link",
      content: "https://github.com/kotato/axon-examples/tree/carri..."
    },
    {
      type: "subtitle",
      content: "Añadir producto"
    },
    {
      type: "image",
      content: "src/assets/05a.png"
    },
    {
      type: "image",
      content: "src/assets/05b.png"
    },
    {
      type: "subtitle",
      content: "Modificar productos"
    },
    {
      type: "image",
      content: "src/assets/05c.png"
    },
    {
      type: "image",
      content: "src/assets/05d.png"
    },
    {
      type: "subtitle",
      content: "Listar productos"
    },
    {
      type: "image",
      content: "src/assets/05e.png"
    },
    {
      type: "image",
      content: "src/assets/05f.png"
    },
    {
      type: "subtitle",
      content: "Confirmar carrito con pago incluido"
    },
    {   
      type: "image",
      content: "src/assets/05g.png"
    },
    {
      type: "image",
      content: "src/assets/05h.png"
    },
    {
      type: "subtitle",
      content: "Command + Query"
    },
    {
      type: "text", 
      content: "Hasta este momento hemos solucionado los endpoints de una forma sencilla, con un command o una query. Pero nos podríamos encontrar el caso en el que queramos ejecutar alguna operación y obtener algún dato o listado de datos. Eso sería equivalente a ejecutar un comando y luego hacer una query."
    },
    {
      type: "text",
      content: "El detalle que no debemos olvidar es que estamos ante sistemas que tienen consistencia eventual por lo que puede pasar un pequeño lapso de tiempo entre que se ejecuta el comando con éxito y se puede realizar una consulta que tenga que ver con el comando ejecutado."
    },
    {
      type: "text",
      content: "Una forma simple de solucionar esta circunstancia puede ser añadir una espera deliberada de algunos milisegundos. Pero si queremos afinar un poco más lo recomendable sería usar alguna librería que nos permita realizar reintentos de operaciones espaciadas en el tiempo hasta un tiempo máximo. Por ejemplo"
    },
    {
      type: "link",
      content: "https://github.com/awaitility/awaitility"
    }
  ],
};
