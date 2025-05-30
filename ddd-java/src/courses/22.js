export default {
  title: "22 Discriminator Map con Hibernate",
  videoId: "93DT-cm0Ti8",
  notes: [
    { type: "subtitle", content: "Discriminator Map con Hibernate" },
    {
      type: "text",
      content: "Habiendo visto cómo modelar en nuestro Dominio entidades con herencia, el siguiente paso es preparar la configuración para poder mapearlas con Hibernate e insertarlas en BD 📦"
    },
    {
      type: "text",
      content: "Hibernate Inheritance Mapping : Post muy recomendado en el que se plantean diferentes alternativas para el mapeo de clases con herencia en Hibernate"
    },
    { type: "link", content: "https://www.baeldung.com/hibernate-inheritance" },
    {
      type: "text",
      content: "Si echamos un vistazo al script de BD, podemos ver la tabla 'padre' step y que por cada tipo hemos creado una tabla con sus campos particulares y cuyo id es una foreign key apuntando a step. Cabe señalar que este tipo de diseño implica la desventaja de tener que hacer JOIN cada vez que queramos recuperar todos los steps de un curso (En nuestro caso este no será un gran handicap ya que el volumen de steps por curso nunca será demasiado elevado ni hay un gran número de columnas)"
    },
    {
      type: "text", 
      content: "Otra alternativa podría haber sido mantenerlo todo en una única tabla step que contuviera un campo 'tipo' y recogiera además todos los campos de cada tipo distinto de step. Esto nos obligaría a definir todos los campos específicos de cada step como nullables y rellenar sólo los correspondientes al tipo que estemos registrando. Además de ir generando una tabla mucho más difícil de ver, cada vez que quisiéramos añadir un nuevo tipo tendríamos que hacer un ALTER a la tabla (con la complejidad y riesgo que implica) por lo que no nos parece tan buena opción como el hecho de separarlo en diferentes tablas ✂️"
    },
    { type: "subtitle", content: "Mapeando Steps 🗺 👣" },
    { type: "subtitle", content: "Mapeo xml de Step:" },
    {
      type: "code",
      content: "<hibernate-mapping>\n    <class name=\"tv.codely.mooc.steps.domain.Step\" table=\"steps\">\n        <composite-id name=\"id\" class=\"tv.codely.mooc.steps.domain.StepId\" access=\"field\">\n            <key-property column=\"id\" name=\"value\" length=\"36\" access=\"field\" />\n        </composite-id>\n\n        <component name=\"title\" class=\"tv.codely.mooc.steps.domain.StepTitle\" access=\"field\">\n            <property name=\"value\" column=\"title\" type=\"string\" access=\"field\" />\n        </component>\n\n        <joined-subclass name=\"tv.codely.mooc.steps.domain.challenge.ChallengeStep\" table=\"steps_challenges\">\n            <key column=\"id\" />\n\n            <component name=\"statement\" class=\"tv.codely.mooc.steps.domain.challenge.ChallengeStepStatement\"\n                       access=\"field\">\n                <property name=\"value\" column=\"statement\" type=\"string\" access=\"field\" />\n            </component>\n        </joined-subclass>\n        \n        <!-- ... -->\n\n</hibernate-mapping>"
    },
    {
      type: "text",
      content: "El mapeo de la clase 'padre' será bastante similar a lo que vimos para el agregado Curso, utilizando el tag composite-id para la primary key de la tabla y component para los Value Objects (dentro de la cual usaremos property para acceder al valor primitivo)."
    },
    {
      type: "text",
      content: "Debajo del mapeo de la clase padre tendremos el mapeo de los distintos hijos, por cada uno de estos tendremos un tag joined-subclass en la cual relacionamos la clase con la tabla en BD y dentro indicamos tanto el identificador con el que vamos a asociarla con la tabla principal como el resto de campos particulares que tenga"
    },
    {
      type: "text",
      content: "Ojo 👀 recordad que la ubicación de estos ficheros de mapeo xml sigue un patrón concreto que hemos definido por convención para poder pasárselos a Hibernate y que él gestione esta configuración"
    },
    {
      type: "text",
      content: "A nivel de Tests lo que haremos será asegurarnos de que efectivamente se guardan y recuperan cada uno de los distintos tipos de steps. Si habilitamos el loggeo de las queries que se lanzan durante éstos, veremos como la consulta añade un join por cada tipo de step que tengamos (es importante controlar el consumo que esto implica ya que uno de los problemas de las queries lanzadas por los propios ORMs es que a veces pueden ser demasiado lentas)"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: 👼 Enfoques alternativos: Simplificando tests y mapping sin ORM!"
    }
  ],
};
