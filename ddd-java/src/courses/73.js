export default {
  title: "73 Creacion distribuida de una entidad",
  videoId: "2ComipE1R3o",
  notes: [
    { type: "subtitle", content: "Creación distribuída de una entidad" },
    { type: "text", content: "Al empezar a trabajar con DDD y mantener proyecciones de nuestros datos para los distintos contextos, una duda bastante frecuente es ¿Cómo gestionamos la creación de recursos desde más de un contexto? 🤔" },
    { type: "text", content: "Siguiendo los ejemplos del curso, cabe la posibilidad de que nuestro agregado Course se crease tanto desde el contexto de Mooc como desde el de Backoffice, entonces ¿Quién tiene el source of true? ¿Qué pasa si los campos requeridos son diferentes entre un contexto y el otro?" },
    { type: "subtitle", content: "Mooc como contexto central" },
    { type: "text", content: "En este contexto y bajo nuestra opinión, debería ser el contexto de Mooc quien centralice esta lógica y se encargue de crear el curso" },
    { type: "text", content: "En el caso de que el Backoffice también vaya a tener esa capacidad de crear cursos, optaríamos por gestionar la creación de cursos vía Command al contexto de Mooc, es decir, tanto la app de Backoffice como la de Mock estarían enviando un Command al contexto de Mock para que siga aquí centralizada esta lógica 🧲" },
    { type: "text", content: "Una vez creado el curso, desde el contexto de Mooc se enviará un evento de dominio con los datos de este nuevo curso y los que puedan necesitar en el resto de contextos que estén escuchando para mantener su proyección de cursos" },
    { type: "subtitle", content: "Beneficios del diseño" },
    { type: "text", content: "Tal como hemos comentado durante el curso, lo que perseguimos con este tipo de macro-diseño es que los equipos de trabajo sean lo más autónomos posibles y favorecer la alta cohesión y bajo acomplamiento tanto a nivel de código como de infraestructura 🏗" },
    { type: "text", content: "Por supuesto, la separación de contextos, cómo va a modelarse y consumirse la información, y las necesidades de la aplicación en el tiempo jugarán un papel fundamental en cómo definamos esta infraestructura y, por tanto, afectará a las soluciones por las que optaríamos" },
    { type: "subtitle", content: "¿Alguna Duda?" },
    { type: "text", content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇" },
    { type: "text", content: "¡Nos vemos en el La siguiente lección: Conclusión y siguientes pasos!" }
  ],
};
