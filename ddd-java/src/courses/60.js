export default {
  title:
    "60 Donde comprobar permisos de usuarios y que info anadir en los eventos",
  videoId: "dw0HoZyaf-Q",
  notes: [
    { type: "subtitle", content: "🕳 Dónde comprobar permisos de usuarios y qué info añadir en los eventos" },
    {
      type: "text",
      content: "En esta lección entraremos en cuestiones acerca de dónde y cómo incluir la Autenticación y Autorización dentro de nuestra aplicación (gracias al feedback aportado en los cuestionarios 🙌), y lo haremos partiendo de la Basic Auth de HTTP. Este es un tipo muy básico de autenticación que estableceremos en la API de la aplicación, de modo que sólo sea nuestro frontend quien pueda comunicarse con ésta"
    },
    {
      type: "text",
      content: "Una cuestión que se puede plantear cuando añadimos estos mecanismos en una aplicación siguiendo DDD es si deberíamos añadir los datos de la autenticación/autorización a los eventos de dominio para que los casos de uso derivados validen si puede llevarse a cabo. En nuestra opinión, entendemos que si un usuario ha podido ejecutar el caso de uso original será porque tiene permisos para hacerlo, por lo cual no debería ser necesario volver a validar si podía hacerlo en las acciones derivadas"
    },
    {
      type: "text",
      content: "En aquellos casos en los que tenemos una lógica en el subscriber que implica diferenciar el tipo de usuario que ha realizado la acción original lo que si haríamos es recuperar el identificador de usuario del evento y consultar la información que necesitásemos (perfil, nombre…). Es decir, recae en los subscribers la responsabilidad de recuperar y validar otros datos que pudiera necesitar para su lógica interna, asumiendo que el usuario tenía los permisos necesarios para realizar la acción principal y sin condicionar la información que viaja en el evento por los distintos subscriptores que puedan escucharlo (No violemos el OCP de SOLID! 🚪)"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: ✋ Implementación con basic auth HTTP!"
    }
  ],
};
