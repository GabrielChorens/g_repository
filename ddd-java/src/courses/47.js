export default {
  title: "47 Crear curso Donde ubicar validaciones de comandos",
  videoId: "fgza-wL2NqA",
  notes: [
    { type: "subtitle", content: "🤷‍♀️ Crear curso Dónde ubicar validaciones de comandos" },
    {
      type: "text",
      content: "Si bien ya podemos crear nuevos cursos a través del formulario, aún debemos añadir la gestión de errores correspondiente que nos permita indicar al usuario si hubiera algún dato incorrecto al enviarlos"
    },
    {
      type: "text",
      content: "Lo que queremos es poder mostrar al usuario todos los errores producidos en el formulario en un envío, es decir, no queremos que ante el primer error generado se corte el flujo de la aplicación vía Excepción como en el caso de las validaciones de los Value Objects sino que identifique todos los que haya en cada campo y pasárselos a la vista"
    },
    {
      type: "text", 
      content: "Aunque el propio Spring cuenta con un sistema de validación de formularios, éste no encaja completamente con lo que nosotros queremos hacer, ya que en lugar de recibir los escalares directamente lo que nos llegaría sería un modelo de Curso, lo cual supone que podríamos tener un Curso inválido 🙅‍♂️ (y no queremos tener instancias inválidas). Por esta razón hemos creado un validador propio bastante sencillo"
    },
    {
      type: "text",
      content: "Así pues, una vez recibida la request, se la pasaremos a este Validator junto con las reglas que hayamos definido en un HashMap dentro del propio controlador con el formato <field, rule1|rule2|rule..>"
    },
    {
      type: "text",
      content: "Este Validator se encuentra en la carpeta compartida para todos los contextos y en ella tendremos un mapeo de estas reglas con distintas implementaciones de FieldValidator, con lo que por cada campo pasaremos todas las reglas que le hayamos indicado en el controlador. Cada una de estas implementaciones contiene un método para realizar la validación y otro con el mensaje de error correspondiente"
    },
    {
      type: "text",
      content: "Es importante incidir en que este Validator está orientado a mostrar los errores en el frontal web con un formato <field, errorsList> y no para lanzar Excepciones, de hecho no estamos hablando propiamente de validaciones de Dominio sino validaciones de formulario, por lo que vemos aquí bastante sentido a duplicar la lógica de validación"
    },
    {
      type: "text",
      content: "Una vez que hemos pasado las validaciones, si éstas han pasado satisfactoriamente llamaremos a createCourse() donde seguiremos el flujo de creación y redirección que vimos en el video anterior, pero en el caso de haber errores llamaremos a redirectWithErrors() donde simplemente volveremos a renderizar la página pero pasándole en esta ocasión tanto la request (para volver a pintar en el formulario los datos que hubiera rellenado el usuario) como el listado de errores generados en el validador para mostrarlos. Pasaremos tanto los errores como los inputs de la request como FlashAttributes para que los borre de la sesión una vez pintados"
    },
    {
      type: "text",
      content: "A nivel de vista, lo que haremos será tratar cada campo para añadir los errores asociados bajo el input y darle el estilo apropiado para indicar al usuario que ha introducido mal los datos"
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
      content: "¡Nos vemos en la siguiente lección: 🤲 Listado de cursos en Backoffice!"
    }
  ],
};
