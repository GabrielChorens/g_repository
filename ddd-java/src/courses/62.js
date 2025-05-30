export default {
  title: "62 Modelando el concepto Auth",
  videoId: "j16lDjmR6wI",
  notes: [
    { type: "subtitle", content: "👌 Modelando el concepto \"Auth\"" },
    {
      type: "text",
      content: "Aunque ya contamos con un sistema de autenticación totalmente válido en nuestra aplicación, nos interesa mucho poder definirlo dentro de nuestro esquema de DDD y modelar la lógica de dominio que habíamos introducido dentro de ese middleware"
    },
    {
      type: "text", 
      content: "En primer lugar vemos que ahora éste middleware recibirá vía constructor al CommandBus de su contexto, esto ya nos deja ver que vamos a provocar un 'side effect' o efecto colateral cuando se ejecute, además de permitirnos desacoplarnos de esa lógica"
    },
    {
      type: "text",
      content: "Aunque cabría pensar que en este escenario tendría sentido lanzar una Query al bus, el hecho de que al hacer login se está provocando una modificación en el universo de nuestra aplicación (Un usuario se ha autenticado) ya nos empuja a lanzar un Command"
    },
    {
      type: "text",
      content: "Hay que tener en cuenta que el hecho de lanzar un comando no significa que paralelamente no podamos lanzar queries si, además de estar provocando esta modificación de nuestro universo, necesitamos recuperar cierta información, es una situación totalmente válida 👌"
    },
    {
      type: "text",
      content: "A nivel de manejo de errores ahora la gestión pasa a manos de las excepciones que pudiera devolvernos el Bus (recordemos que el CommandBus puede lanzarnos excepciones de vuelta)"
    },
    {
      type: "text",
      content: "Por otra parte, será el caso de uso UserAuthenticator disparado por el CommandBus el que recoja la lógica de dominio, recibiendo por inversión de dependencia el repositorio (en este caso en memoria) con el cual contrastar las credenciales. Esto facilitará enormemente la tarea de testear toda esta lógica ya que podremos mockear la infraestructura cómodamente y hemos separado claramente la responsabilidad en cada capa que interviene 🙌"
    },
    {
      type: "text",
      content: "Finalmente, el haber llevado esta lógica a un módulo independiente dentro de backoffice nos va a permitir que pueda promocionar a un contexto propio si finalmente esta autenticación fuera compartida por el resto de contextos"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🤝 Alternativas con oAuth y ACLs!"
    }
  ],
};
