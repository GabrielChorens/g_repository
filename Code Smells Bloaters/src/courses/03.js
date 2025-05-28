export default {
  title: "03 Detección, problemas y estado ideal",
  videoId: "cLdwctNY450",
  notes: [
    {
      type: "text",
      content:
        "El primer code smell que vamos a tratar es precisamente uno de los más habituales y fáciles de identificar: Long method",
    },
    {
      type: "text",
      content:
        "A la hora de consensuar dentro del equipo de trabajo cuando podemos señalar que un método es excesivamente largo no debemos olvidar que el propio contexto del proyecto y la tipología de elementos presentes juegan un papel muy importante",
    },
    {
      type: "text",
      content:
        "Cuando hablamos de distintas tipologías nos estamos refiriendo por ejemplo a la diferencia entre Servicios como CourseCreator y Modelos como este Course.",
    },
    {
      type: "code",
      content:
        "public void create(CourseId id, CourseName name, CourseCreation duration) {\n    Course course = CourseCreator(id, name, duration);\n    repository.save(course);\n    eventBus.publish(course.pullDomainEvents());\n}",
    },
    {
      type: "text",
      content:
        "Por otro lado, cuando hablamos de un modelo como Course, que tiene una responsabilidad única y bien definida, podemos encontrarnos con métodos más largos que requieren validaciones y cálculos complejos como el que vemos en la imagen",
    },
    {
      type: "code",
      content:
        "public float calculate(List<Pair<Integer, Float>> examGrades, boolean hasTeacherRecommendation) {\n  if (!examGrades.isEmpty()) {\n    // Cálculos y validaciones complejas\n    return result;\n  }\n  return 0;\n}",
    },
    {
      type: "text",
      content:
        "En este sentido, entendemos que en términos de responsabilidad única este servicio sólo se encargue de hacer una cosa (huyamos de servicios con prefijos del tipo service o manager que dan pie a meter de todo en ellos), por lo que detectar tener un método lo más pequeño posible dentro del propio servicio, único punto de entrada del servicio, resulta muy sencillo ya que tenemos un determinado nivel de abstracción que es lo que sucede dentro sin necesidad de quebrarnos la cabeza",
    },

    {
      type: "text",
      content:
        "Por contra, como vemos en este ejemplo, al margen del número de líneas (más de 40) como un factor cuantitativo, destacamos el factor cualitativo, y es que salta a la vista la complejidad existente, que nos obliga a interiorizar bastante el método para entender qué es lo que está haciendo",
    },

    {
      type: "text",
      content:
        "Y vosotros ¿Tenéis ejemplos de métodos largos? Si os apetece, nos encantaría que los compartierais en un comentario y nos contéis la razón de ser",
    },
  ],
};
