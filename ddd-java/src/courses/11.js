export default {
  title: "11 Value Objects Immutabilidad y tips para agilizar desarrollo",
  videoId: "L0U1FQrB6Kw",
  notes: [
    { type: "subtitle", content: "Value Objects: Inmutabilidad y tips para agilizar desarrollo" },
    {
      type: "text",
      content: "Ya que hemos visto cómo pasar nuestros identificadores a Value Objects, terminaremos esta lección siguiendo los mismos pasos con los demás atributos de nuestro Curso, añadiéndoles mayor semántica y permitiendo llevar a estos la lógica de validación."
    },
    {
      type: "text", 
      content: "A diferencia del UUID, que nos interesa mantener compartido dentro del Shared Kernel al tratarse de una pieza que usaremos en la comunicación entre distintos módulos y contextos, querremos que los atributos CourseId y CourseDuration se mantengan dentro del módulo y evitar compartir su lógica. Ya que tendremos múltiples Value Objects en cada Bounded Context, nos va a interesar que su creación sea un proceso ágil 🏃"
    },
    { type: "subtitle", content: "Clase CourseName:" },
    {
      type: "code",
      content: "public final class CourseName extends StringValueObject {\n    public CourseName(String value) {\n        super(value);\n    }\n\n}"
    },
    {
      type: "text",
      content: "El modificar directamente los argumentos que recibía el agregado Course de Strings a Value Objects y permitir que sea el propio IDE quien nos ayude a generar estas clases va a facilitarnos mucho la tarea, pero por supuesto es algo abierto al gusto de cada uno"
    },
    {
      type: "text",
      content: "Ambos Value Objects encapsulan un atributo de tipo String, así que tal como vimos en el caso del UUID, también nos interesará hacer uso de la herencia y que extiendan de una clase padre StringValueObject En este caso no le vemos tanto sentido a extraerlo a un servicio y hacer uso de la composición (puesto que no tocamos Entrada/Salida de datos ni tratamos de abstraernos de algo que pueda cambiar en el futuro). Será interesante igualmente este tipo de jerarquía con otros Value Objects de distinto tipo (ej: IntValueObject)"
    },
    {
      type: "text",
      content: "La clase StringValueObject nos encapsulará tanto la validación de que estamos recibiendo realmente un valor de tipo String como la implementación del método equals() que podremos utilizar para comparar por valores como veíamos previamente en los tests"
    },
    {
      type: "text",
      content: "Al modificar el tipo de parámetros que recibe Course tendremos que modificar también aquellos puntos en nuestros tests donde estuviéramos instanciando esta clase, veremos en el siguiente video cómo hacer que nuestros tests sean menos frágiles a este tipo de cambios"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: ✅ Modelando el dominio: Implicaciones en tests!"
    }
  ],
};
