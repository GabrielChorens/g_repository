export default {
  title:
    "66 Casos de uso complejos que requieren informacion de varios contextos",
  videoId: "lXv32Fi3klM",
  notes: [
    { type: "subtitle", content: "🖼 😮 Casos de uso complejos que requieren información de varios contextos" },
    {
      type: "text",
      content: "Una cuestión que nos puede surgir fácilmente cuando tratamos de llevar DDD a escenarios reales en producción es cómo lidiar con aquellos casos de uso con mayor complejidad que necesitan acceder a información de varios contextos. Para bajarnos al código y verlo en detalle planteamos el siguiente escenario:"
    },
    {
      type: "subtitle",
      content: "Borrar Cursos"
    },
    {
      type: "text",
      content: "👨🏽‍💻 Un usuario ha de poder borrar un curso"
    },
    {
      type: "text",
      content: "✋ Con la restricción de que sólo se puede borrar un curso siempre y cuando hayan más de 20"
    },
    {
      type: "text",
      content: "Este caso supondrá que tengamos que acceder no sólo al módulo de cursos para borrar aquél que nos está indicando el usuario, sino que también accederemos al módulo de contador de cursos para comprobar cuantos hay actualmente"
    },
    {
      type: "text",
      content: "Es aquí cuando cobra mayor importancia el hecho de trabajar con CQRS y poder comunicarnos vía QueryBus, ya que será el mecanismo que nos permita comunicarnos entre contextos y módulos 🙌 En este caso vendríamos inyectando el QueryBus no en el Controller sino en el Application Service ya que será quien necesite validar la lógica de negocio  de comprobar el total de cursos, además, si tuviéramos otro punto de entrada (Ej. nuestros propios tests, subscribers…) y dejáramos esa lógica en el Controller, nos obligaría a repetir esa misma lógica 👎"
    },
    {
      type: "text",
      content: "Lo que ganamos justamente con esta comunicación vía QueryBus es no tener que inyectar el caso de uso de 'obtener el total de cursos' ni el repositorio del contador de cursos (Inyectaremos únicamente el repositorio de nuestro módulo 👆) o lanzar un 'count' a nuestra propia tabla de cursos. Lo que venimos buscando durante todo este curso es que nuestros módulos y bounded context sigan estando lo más desacoplados posible y que sean las Query/Commands el 'contrato' que establezcamos para la comunicación entre ellos, asumiendo que estamos trabajando en un proyecto a largo plazo y con perspectiva a que siga escalando progresivamente"
    },
    {
      type: "text",
      content: "Por otro lado, un detalle también interesante es que hemos venido almacenando nuestro agregados en una BD relacional sin haber establecido relaciones entre ellos ¿Por qué? 🤔 Precisamente porque lo que estamos primando es el modelado de datos de cara a su consumo (Lo veíamos con mucho más detalle en el curso de Domain-Driven Design Aplicado), por lo que buscamos que el coste computacional recaiga en el momento de escritura y no cada vez que vayamos a consumir los datos"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🤭 Errores comunes!"
    }
  ],
};
