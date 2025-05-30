export default {
  title: "42 Promocionar un Modulo notificaciones a Bounded Context retencin",
  videoId: "vDb5pwipSlQ",
  notes: [
    { type: "subtitle", content: "📲 Promocionar un Módulo notificaciones a Bounded Context retención" },
    {
      type: "text",
      content: "Siguiendo con el ejemplo del módulo de notificaciones, un escenario con el cual podríamos encontrarnos sería que detectásemos que nos está aportando un gran beneficio para la plataforma y decidiésemos que un equipo de desarrollo se dedicase exclusívamente a este aspecto, apostando por promocionarlo a un Bounded Context propio de retención"
    },
    {
      type: "text",
      content: "Es super importante entender que esta promoción supone dotar a esta pieza de un nuevo nivel de importancia a nivel organizacional y que englobará no sólo notificaciones sino también otros conceptos relacionados con la retención de usuarios en la plataforma. Más que una cuestión del equipo puramente técnico, este empuje se deberá a una cuestión de producto en tanto que será quien nos defina cuales son las separaciones entre los distintos equipos de desarrollo 👩‍🏫"
    },
    {
      type: "text",
      content: "A nivel de refactor, lo primero que tendremos que hacer será crear un nuevo directorio '/retention' al mismo nivel que teníamos los contextos de Mooc, Backoffice y Shared. Al igual que hicimos con éstos al inicio del curso, también tendremos que dar de alta este contexto en el fichero 'setting.gradle' para que tanto Gradle como Spring sepan que existe este nuevo contexto y así poder llevar a cabo la inyección de servicios y lectura de ficheros"
    },
    {
      type: "code",
      content: "|-/retention\n    |-/main\n    |   |-/tv.codely.retention\n    |      |-/campaign\n    |      |-/email\n    |      |-...\n    |-/test\n    |-build.gradle"
    },
    {
      type: "text",
      content: "Dentro de este directorio, además del fichero build.gradle crearemos la estructura de carpetas que veíamos en los otros contextos, partiendo de los directorios /main y /test. Será dentro de /tv/codely/retention donde posteriormente añadiremos todos los módulos pertenecientes a este Bounded Context (con sus respectivas carpetas de Arquitectura Hexagonal en cada uno de ellos)"
    },
    {
      type: "text",
      content: "A la hora de definir estos módulos debemos tener en cuenta que ya no tenemos por qué estar hablando en los mismos términos que cuando estábamos en el contexto de Mooc, por lo que podríamos hablar en términos de mensajes transaccionales, campañas… En definitiva, cada contexto tendrá su lenguaje ubicuo"
    },
    {
      type: "text",
      content: "A nivel de infraestructura 🏗 lo que nos sugeriría el hecho de usar DDD es que cada Bounded Context tenga su propia infraestructura por separado. Esto es muy recomendable, a pesar de que a nivel de configuración sean prácticamente copias (adaptando las parametrizaciones necesarias), ya que nos brinda una mayor autonomía. Aún cuando no podamos disponer de diferentes infraestructuras para cada contexto recomendamos que, aunque apunte a la misma, esta configuración esté separada y no reutilicemos la misma clase, de modo que a futuro sea mucho más sencillo sacarla fuera si acabamos teniendo la ocasión"
    },
    {
      type: "text",
      content: "Una vez creada la estructura del nuevo Bounded Context, lo lógico será llevarnos a éste nuestro antiguo módulo de notificaciones adaptándolo a los nuevos conceptos, pero ojo 👀 porque habrá elementos que no podremos simplemente desplazar al contexto de retención sin más, sino que pueden ser requeridos en ambos contextos (especialmente a nivel de Dominio), en cuyo caso tendremos que duplicarlos y no simplemente cambiarlos de contexto"
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?"
    },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    }
  ],
};
