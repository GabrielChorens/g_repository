export default {
  title: "59 Cache de servidor Optimizar casos de uso sin ensuciar el dominio",
  videoId: "qW3WZY82azQ",
  notes: [
    { type: "subtitle", content: "✌️ Cache de servidor: Optimizar casos de uso sin ensuciar el dominio" },
    {
      type: "text",
      content: "Comentábamos en el video anterior cual era la aproximación por la cual apostaríamos a la hora de establecer una caché de servidor: Encapsulada en la capa de Infraestructura sin que el caso de uso se vea afectado. Así que ahora veremos cómo podríamos implementarlo y la implicación que estos cambios tendrá en los tests 🤔"
    },
    {
      type: "text", 
      content: "Partimos de la premisa de que estuviéramos en un caso en que no queremos asumir de momento una nueva infraestructura en producción para nuestra BD (coste económico, curva de aprendizaje, etc), y en lugar de ello nos interesa mas meter una capa de caché en memoria o en un Redis por delante de nuestro repositorio de MySQL aplicando el Patrón Decorator"
    },
    {
      type: "text",
      content: "CodelyTv Tip ☝️: Vamos a trabajar con un ejemplo muy simplificado sin detenernos en temas de gestión de memoria, sin embargo es un aspecto que debemos tener muy presente para no encontrarnos posteriormente con problemas por exceso de consumo de memoria al cachear demasiado contenido y/o demasiado tiempo sin ir liberando de forma programada"
    },
    {
      type: "text",
      content: "Un primer detalle importante que encontramos en este decorator es que le pasamos la interface del repositorio por constructor, con lo que podremos envolver cualquier implementación (MySQL, Elasticsearch) indistintamente. Además, nos aseguramos de que la interacción del application service con el repositorio no se vea afectada ya que el decorator también estaría implementando la interface definida en el caso de uso ✌️"
    },
    {
      type: "text",
      content: "Lo que hará esta capa será actuar a modo de 'proxy' en el sentido de que cuando desde nuestro application service llamemos a recuperar el listado (completo o filtrado), lo que hará será comprobar primero si los tiene en caché y sólo si no los tiene, recuperarlos del repositorio decorado. A la hora de persistir, si en lugar de mantener la caché 'en memoria' lo hiciéramos en un Redis, simplemente guardaríamos los datos de forma paralela en ambos"
    },
    {
      type: "text",
      content: "Otra cuestión que podemos tener en cuenta a la hora de gestionar este tipo de cachés es el TTL (Time To Live) de lo que almacenamos, en nuestro caso optamos por delegarlo en la propia infraestructura ya que Redis cuenta de por si con un manejo muy fino 👌 de los TTL y nos aporta mayor beneficio que el hecho de gestionarlo nosotros mismos, además estaríamos asumiendo que este tipo de cachés no son una cuestión de negocio sino un detalle de infraestructura que nos permita avanzar sin tener que invertir demasiado en la mejora de dicha infraestructura"
    },
    {
      type: "text",
      content: "A nivel de Tests debemos considerar que lo que nos interesa comprobar acerca de este decorator es que la caché en memoria y la comunicación con el repositorio decorado realmente funciona correctamente, no así tanto si aquél persiste correctamente en BD puesto que es algo que ya estamos validando en otros tests de integración. Por esto, será este uno de los pocos casos en los que si que nos interese mockear el repositorio en un test de integración"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 👮‍ Autorización!"
    }
  ],
};
