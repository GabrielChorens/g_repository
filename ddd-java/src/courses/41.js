export default {
  title: "41 Crear mdulo de notificaciones",
  videoId: "qq25JrS9E9M",
  notes: [
    { type: "subtitle", content: "📱 Crear módulo de notificaciones" },
    {
      type: "text",
      content: "Ya vimos anteriormente a qué nos referíamos cuando hablábamos de Módulos, Bounded Contexts y Aplicaciones y ahora llega el momento de ver cómo lo materializamos en nuestro proyecto Java ☕️, empezando por el bloque más pequeño: el módulo"
    },
    {
      type: "text", 
      content: "En el curso de DDD Aplicado hablábamos ya de la idea de definir un módulo por cada agregado/recurso, recogiendo en dicho módulo todos aquellos casos de uso asociados al agregado o recurso en cuestión. En este caso crearemos el módulo de Notificaciones, asumiendo que no tenemos un equipo que se centre únicamente en este tema (veremos más adelante cómo promocionaríamos el módulo si esto cambiara)"
    },
    {
      type: "subtitle",
      content: "Estructura de carpetas del módulo:"
    },
    {
      type: "code",
      content: "-tv.codely.mooc\n  |-notifications\n    |-application\n    | |-send_reset_password_email\n    | |-send_welcome_user_email\n    |   |-SendWelcomeUserEmailOnUserRegistered.java\n    |-domain\n    |-infrastructure"
    },
    {
      type: "text",
      content: "Dicho esto, crearíamos la carpeta /notifications dentro del Bounded Context de mooc y, dentro de esta, las tres carpetas relativas a la Arquitectura Hexagonal (application, domain, infrastructure). Será dentro de la carpeta /application donde picaremos todos los casos de uso relativos al envío de notificaciones"
    },
    {
      type: "text",
      content: "Otro ejemplo sería el de un subscriber que envíe el email de bienvenida cuando un usuario se registra. Este Subscriber habría sido invocado por el EventBus por lo que, en nuestra opinión, en lugar de lanzar después un comando para que se ejecute el caso de uso en cuestión, llamaríamos directamente al Caso de Uso desde el Subscriber. Creemos que ya se añade suficiente nivel de indirección a este flujo al pasar por el sistema de colas como para pasar también por el CommandBus y, de hecho, el patrón es el mismo: Recibe un DTO con datos primitivos que pasa a Value Objects de nuestro Dominio e invoca al Caso de Uso"
    },
    {
      type: "text",
      content: "Como veis, la creación de nuevos módulos es un proceso bastante trivial pero que nos permitirá establecer una estructura con mayores implicaciones dentro de DDD, como el hecho de que tendremos un tipo de comunicación distinta entre módulos y dentro de uno mismo"
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
      content: "¡Nos vemos en el siguiente video: 📲 Promocionar un Módulo notificaciones a Bounded Context retención!"
    }
  ],
};
