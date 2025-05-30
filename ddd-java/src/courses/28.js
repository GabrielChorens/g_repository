export default {
  title:
    "28 Idempotencia al consumir eventos Lista de elementos en JSON con Hibernate",
  videoId: "UShtDxKDqic",
  notes: [
    { type: "subtitle", content: "Idempotencia al consumir eventos: Lista de elementos en JSON con Hibernate" },
    {
      type: "subtitle",
      content: "Controlando el consumo de eventos duplicados 👯"
    },
    {
      type: "text",
      content: "Ahora que hemos visto cómo consumir eventos de Dominio nos surge una problemática: Podemos tener garantía de que el evento se publica al menos una vez pero no de que éste no se vuelva a publicar repetidas veces, en el caso que estamos contemplando se traduciría en que podría ser que publiquemos un curso pero el contador nos devuelva un total de dos o tres"
    },
    {
      type: "subtitle",
      content: "Clase CoursesCounterIncrementer:"
    },
    {
      type: "code",
      content: "@Service\npublic final class CoursesCounterIncrementer {\n\n    // ...\n \n    public void increment(CourseId id) {\n        CoursesCounter counter = repository.search()\n                                           .orElseGet(() -> CoursesCounter.initialize(uuidGenerator.generate()));\n\n        if (!counter.hasIncremented(id)) {\n            counter.increment(id);\n\n            repository.save(counter);\n        }\n    }\n}"
    },
    {
      type: "text",
      content: "Este es el caso de uso de 'Incrementar el contador de cursos' al que en última instancia llamábamos desde el Subscriber cuando se producía un evento de 'Curso creado', pasándole el identificador del curso por parámetro"
    },
    {
      type: "text",
      content: "La diferencia con lo que habíamos visto previamente es que ahora añadimos una validación que nos diga si el contador ya ha sido previamente incrementado con ese identificador recibido, modificando y volviendo a persistirlo sólo en el caso de que no se haya usado anteriormente. La validación simplemente comprobará si el identificador que le pasamos existe ya en el listado del contador que hemos recuperado de BD"
    },
    {
      type: "text",
      content: "Ojo 👀, que en caso de haber sido ya incrementado el contador con ese id no lanzaremos ninguna excepción, puesto que no queremos que nos vuelvan a enviar este evento, lo hemos procesado ya y simplemente no queremos que realice ningún efecto colateral"
    },
    {
      type: "subtitle",
      content: "Manejando listas de elementos en JSON con Hibernate 📖"
    },
    {
      type: "text",
      content: "Si nos fijamos en el agregado CourseCounter que hemos estado utilizando veremos que uno de los atributos que lo componen es una lista de Value Objects CourseId, este atributo se corresponde con el campo de tipo JSON existing_courses en BD (lo almacenamos del mismo modo en que lo esperamos utilizar en nuestro agregado)"
    },
    {
      type: "subtitle",
      content: "Fichero CustomTypes:"
    },
    {
      type: "code",
      content: "<hibernate-mapping>\n    <typedef class=\"tv.codely.shared.infrastructure.hibernate.JsonListType\" name=\"json_string\" />\n</hibernate-mapping>"
    },
    {
      type: "text",
      content: "Pero para que esto pueda ser así, es necesario que previamente configuremos el mapeo de este atributo apropiadamente. Aunque existen diversas librerías que pueden ayudar en ese sentido, ninguna de ellas termina de encajar en lo que nosotros queremos hacer, por lo que nos decantamos por hacer algo un poco más 'custom' a partir de uno existente en Hibernate"
    },
    {
      type: "subtitle",
      content: "Fichero CoursesCounter:"
    },
    {
      type: "code",
      content: "<hibernate-mapping>\n    <class name=\"tv.codely.mooc.courses_counter.domain.CoursesCounter\" table=\"courses_counter\">\n\n        <composite-id name=\"id\" class=\"tv.codely.mooc.courses_counter.domain.CoursesCounterId\" access=\"field\">\n            <key-property column=\"id\" name=\"value\" length=\"36\" access=\"field\" />\n        </composite-id>\n\n        <component name=\"total\" class=\"tv.codely.mooc.courses_counter.domain.CoursesCounterTotal\" access=\"field\">\n            <property name=\"value\" column=\"total\" type=\"integer\" access=\"field\" />\n        </component>\n\n        <property name=\"existingCourses\" column=\"existing_courses\" access=\"field\">\n            <type name=\"json_string\">\n                <param name=\"list_of\">tv.codely.mooc.courses.domain.CourseId</param>\n            </type>\n        </property>\n    </class>\n</hibernate-mapping>"
    },
    {
      type: "text",
      content: "De modo que podremos definir que uno de los atributos de nuestro agregado se mapeará en un campo json que contiene una lista de elementos especificados por parámetro (en este caso de Value Objects CourseId). Es importante el hecho de poder indicar qué tipo de objetos contiene la lista para poder deserializarlos posteriomente sin problemas"
    },
    {
      type: "text",
      content: "👆 Podéis consultar la clase JsonListType en el repo del curso, que esconde toda la mágia para poder llevar a cabo este mapeo y que podéis utilizar para vuestros proyectos 🙌"
    },
    {
      type: "text",
      content: "Todo este mapeo nos permite por un lado que nuestro Dominio siga siendo lo más sencillo posible y, por otro, evitar tener que realizar JOINs en las consultas a BD 👏"
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
      content: "¡Nos vemos en la siguiente lección: 📥 Eventos de dominio asíncronos y distribuidos - MySQL!"
    }
  ],
};
