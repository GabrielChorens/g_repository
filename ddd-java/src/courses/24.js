export default {
  title: "24 Implementación de repositorio sin Hibernate",
  videoId: "SxNMtugIIz8",
  notes: [
    { type: "subtitle", content: "Implementación de repositorio sin Hibernate" },
    {
      type: "text",
      content: "Una de las dudas que nos transmitían desde el cuestionario de Feedback es el hecho de no utilizar Hibernate en la implementación de los repositorios, ya sea por evitar esa complejidad o porque queremos especificar nosotros mismos las queries, por lo que antes de continuar en la línea del curso nos detendremos un momento a hablar sobre este tema 🙋‍♂️"
    },
    {
      type: "text",
      content: "En casos en los que partimos un proyecto de cero y sabemos que no tendremos más de dos o tres queries, añadirlas y lanzarlas en plano puede ser más rápido que añadir las dependencias y montar el mapping correspondiente. No obstante, en el momento en el que el número de queries aumente, nos resultará más rentable un ORM y reutilizar las piezas en común"
    },
    {
      type: "text",
      content: "A nivel de código, gracias a los contratos de dominio establecidos, sólo tendríamos que tocar la implementación del repositorio. La diferencia en comparación con lo que actualmente tenemos estaría en que por una parte eliminaríamos las dependencias con Hibernate y por otra lanzaríamos las queries en plano desde los métodos save/search realizando los bindings de los valores en la sentencia directamente"
    },
    {
      type: "text",
      content: "Al haber seguido Arquitectura Hexagonal y acotar el contenido en módulos entre los cuales no se dan JOINs, las queries que montará el ORM serán muy sencillas y con una buena performance, no habiendo generalmente apenas diferencia con la que podríamos montar nosotros en plano"
    },
    {
      type: "text",
      content: "Un contexto en el que podemos asumir que podemos necesitar esas consultas personalizadas y picadas por nosotros mismos es aquél en el que tengamos relaciones many-to-many que no podamos remodelar a relaciones más sencillas. No obstante, tal y como vimos en el curso de DDD Aplicado, es muy importante considerar modelar los datos en base a como serán consumidos y no a como se reciben (Read-model) ya que en comparación con los accesos de escritura, las lecturas a nuestra BD serán mucho más elevadas y las que finalmente paguen el coste de cómo hayamos modelado los datos"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: 📤 Eventos de dominio en memoria con Spring Events: Incrementar el total de cursos!"
    }
  ],
};
