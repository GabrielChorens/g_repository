export default {
  title: "45 Contador de cursos va query desde Controller",
  videoId: "3voWCV4baBs",
  notes: [
    { type: "subtitle", content: "⌚️ Contador de cursos vía query desde Controller" },
    {
      type: "text",
      content: "Ahora que ya tenemos funcionando nuestro sistema de plantillas vamos a empezar a añadir contenido más dinámico como puede ser recuperar el total de cursos creados, para ello lo que haremos será lanzar una Query desde el Controller hacia el Bus"
    },
    {
      type: "text",
      content: "Para ello hemos creado un controller para este apartado de cursos en el que estamos inyectando el QueryBus. Desde el punto de entrada lanzaremos al bus una FindCountCoursesQuery que pertenece al contexto de Mooc 👀 (asumimos este trade-off ya que estamos empezando de cero con esta aplicación y no tenemos aún una proyección de los datos propia en el contexto de backoffice), aquí es donde reluce la importancia de separar las aplicaciones de los contextos puesto que esto nos va a permitir que desde una aplicación podamos atacar a distintos Bounded Contexts"
    },
    {
      type: "text",
      content: "De la respuesta que nos devuelva la Query extraeremos el total y se lo pasaremos al ModelAndView como un valor más dentro del Map que recibe. Otra opción en lugar de pasarle directamente el atributo total podría ser pasar el objeto counterResponse completo y acceder a los distintos datos que necesitemos desde la plantilla, en nuestra opinión el tomar una alternativa u otra dependerá del número de atributos que vayamos a pasar a la plantilla, pero por supuesto es una opinión y al final dependerá de lo que más os interese en cada caso 🤗"
    },
    {
      type: "text",
      content: "Finalmente en la template simplemente pintaremos el atributo tal y como veníamos haciendo con el título y la descripción, así de sencillo será cargar datos dinámicamente desde el Controller 🙌"
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
      content: "¡Nos vemos en el siguiente video: ✌️ Crear curso Formulario y command desde Controller!"
    }
  ],
};
