export default {
  title: "15 Mapeo de modelos de dominio en Hibernate",
  videoId: "wV1V0mYrp5E",
  notes: [
    { type: "subtitle", content: "Mapeo de Modelos de Dominio en Hibernate" },
    {
      type: "text",
      content: "Como vimos previamente, a fin de evitar contaminar nuestro Dominio con detalles de Infraestructura como las anotaciones de Hibernate, usaremos XMLs para el mapeo de nuestras entidades."
    },
    {
      type: "text",
      content: "El caso del agregado Course tiene algunas particularidades y es que sus atributos no son de tipo String que pudiéramos mapear fácilmente a su correspondencia en BD, sino que tanto la primary key como el resto de atributos son Value Objects. Por esta razón será necesario que volvamos a personalizar la manera en que trabajará Hibernate"
    },
    {
      type: "text",
      content: "Ojo 👀: es importante que definamos el Charset de nuestra tabla en BD como utf8mb4 para que nos permita guardar emojis 🙌 en los campos de nuestra tabla"
    },
    {
      type: "code",
      content: "<hibernate-mapping>\n    <class name=\"tv.codely.mooc.courses.domain.Course\" table=\"courses\">\n        <composite-id name=\"id\" class=\"tv.codely.mooc.courses.domain.CourseId\" access=\"field\">\n            <key-property column=\"id\" name=\"value\" length=\"36\" access=\"field\" />\n        </composite-id>\n\n        <component name=\"name\" class=\"tv.codely.mooc.courses.domain.CourseName\" access=\"field\">\n            <property name=\"value\" column=\"name\" type=\"string\" access=\"field\" />\n        </component>\n\n        <component name=\"duration\" class=\"tv.codely.mooc.courses.domain.CourseDuration\" access=\"field\">\n            <property name=\"value\" column=\"duration\" type=\"string\" access=\"field\" />\n        </component>\n    </class>\n</hibernate-mapping>"
    },
    {
      type: "text",
      content: "Como en cualquier otro mapeo, dentro de la etiqueta <class>le indicamos cual es la clase y la tabla con la que vamos a relacionarla."
    },
    {
      type: "text",
      content: "Para el identificador usaremos un truquillo que Hibernate nos permite: En lugar de un <id> normal, usaremos un <composite-id> en el cual indicaremos que la clase es CourseId y relacionaremos la etiqueta <key-property> el atributo valuede esta clase con la columna idde la tabla"
    },
    {
      type: "text",
      content: "CodelyTv Tip ☝️: Por defecto Hibernate espera que tengamos unos getters y setters definidos en las entidades para rellenar los campos, esto no nos resulta una solución limpia y no nos convence el hecho de tener que modelar nuestro dominio por culpa de una librería externa. Para evitar esta concesión podemos definir el atributo 'access' con el valor 'field' cuando mapeamos los atributos para indicarle que rellene el valor por reflexión"
    },
    {
      type: "text",
      content: "Para los demás Value Objects usaremos la etiqueta <component> seguiremos un proceso muy similar, indicándole dentro de que clase está el campo y dentro de esta clase cual es el nombre del atributo que debe utilizar para mapear con la columna en BD. Al igual que para el identificador, usaremos el atributo 'access' para especificarle que utilice reflexión para rellenar el valor"
    },
    {
      type: "text",
      content: "Este es el modo con el que conseguimos eludir algunos de los cambios sobre nuestro Dominio que Hibernate nos impone, no obstante hay un aspecto con el cual no tendremos tanta suerte, ya que para poder hacer reflexión este ORM llamará al método newInstance() de la clase sobre la que actúe, el cual necesita que ésta tenga implementado un constructor vacío 🤷🏼‍♂️, es decir, todos nuestros Value Objects tendrán que implementar un constructor vacío. aunque por suerte podremos definirlo como privado y reducir así el impacto en nuestro Dominio"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🐋 Implementación del repositorio para MySql!"
    }
  ],
};
