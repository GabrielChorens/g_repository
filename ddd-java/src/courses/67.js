export default {
  title: "67 Errores comunes",
  videoId: "QcC43vCfuxc",
  notes: [
    { type: "subtitle", content: "Errores comunes" },
    { type: "subtitle", content: "Eventos en lugar de comandos" },
    { type: "text", content: "Un error que a veces puede producirse es el hecho crear eventos de dominio que, en realidad, serían comandos. Como hemos visto en videos y cursos anteriores, los eventos de dominio son acciones inmutables que ya han sucedido (Ej. Usuario registrado), mientras que un comando denota la intención de ejecutar una acción (Ej. Enviar email de bienvenida)" },
    { type: "text", content: "Al publicar un evento de tipo 'SendUserRegistrationEmailDomainEvent' estamos incurriendo en conocer desde el caso de uso primario las acciones derivadas de esta acción, y cada vez que queramos añadir una nueva acción derivada supondría tener que publicar un nuevo evento en el caso de uso primario, violando el principio OCP de SOLID. Lo que debemos de buscar entonces es que sean los subscriptores quienes conozcan del caso de uso primario y no al contrario" },
    { type: "subtitle", content: "Formato de eventos no estandarizados" },
    { type: "text", content: "Otro error con el que podemos encontrarnos es que en un proyecto grande con diferentes equipos de desarrollo, cada uno de ellos haya empezado a introducir los eventos de dominio sin un consenso previo en el que estandarizar el formato de estos (Ej. diferente formato json/xml o diferente estructura de la información…). Esto supondrá no sólo el trabajo de tener que parsear los eventos que vengan de una u otra aplicación sino el riesgo de estar perdiendo información en los eventos 💬" },
    { type: "text", content: "Por esta razón es muy importante pararnos a definir un standard global que todos los equipos sigan antes de ponernos a tirar código y encontrarnos posteriormente con estos problemas" },
    { type: "subtitle", content: "Eventos genéricos" },
    { type: "text", content: "Una cuestión importante que también debemos tener en cuenta es la granularidad con la que vayamos a publicar eventos de dominio. Esto nos lleva a tener que optar bien por eventos más genéricos (Ej. UserChanged) o bien por eventos más específicos (Ej. UserRenamed, UserBanned…)" },
    { type: "text", content: "Es decir, aquí la decisión estaría en si nos interesa más publicar un único evento con más datos y al que escuchen mas suscriptores o si nos interesa publicar múltiples eventos y que la suscripción a estos sea más específica 🤷🏼‍♂️. Trabajar con unos eventos más específicos (y por tanto más numerosos) nos evitará que los suscriptores tengan que hacer un análisis previo del evento para saber si le interesa, pero este mayor número de eventos también supone un mayor coste en el sistema de colas utilizado para consumirlos" },
    { type: "subtitle", content: "Eventos de 'Ingeniería'" },
    { type: "text", content: "Otro error con el que podemos encontrarnos es, tratando de registrar todo lo que sucede en nuestra aplicación, publicar eventos de dominio sobre acciones que en realidad pertenecen a la propia infraestructura como no encontrar un registro en BD o no haber podido persistirlo. Estos escenarios no suponen una mutación en nuestro universo de la aplicación y deberían registrarse más bien mediante trazas de logs" },
    { type: "subtitle", content: "¿Alguna Duda?" },
    { type: "text", content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇" },
    { type: "text", content: "¡Nos vemos en el siguiente video: 👮‍♀️ Logging y Monitoring!" }
  ],
};
