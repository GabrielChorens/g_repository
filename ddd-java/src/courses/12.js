export default {
  title: "12 Patron ObjectMother para nuestros tests",
  videoId: "KIUtqR8D24M",
  notes: [
    { type: "subtitle", content: "Patrón ObjectMother para nuestros tests" },
    {
      type: "text",
      content: "Hemos visto las ventajas que nos ofrece el uso de Value Objects dentro de nuestros agregados, peso este paso también se traducía en tener que modificar nuestros tests 😲. Para evitar tener que estar modificando tests cada vez que cambie alguna particularidad en nuestro dominio usaremos el Patrón ObjectMother al rescate 🤶"
    },
    {
      type: "text",
      content: "Un ObjectMother es una factoría que nos va a permitir crear instancias del objeto en cuestión que estemos 'wrappeando'. Tal como venimos haciendo, mimificaremos en tests lo que tengamos en real, por lo que llevaremos estos ObjectMothers a la carpeta de dominio del módulo en el directorio de tests."
    },
    { type: "subtitle", content: "Clase CourseNameMother:" },
    {
      type: "code",
      content: "public final class CourseNameMother {\n    public static CourseName create(String value) {\n        return new CourseName(value);\n    }\n\n    public static CourseName random() {\n        return create(WordMother.random());\n    }\n}"
    },
    {
      type: "text",
      content: "Generalmente todos nuestros ObjectMothers tendrán dos métodos: uno que devolverá una instancia del objeto en base a un valor que recibamos por parámetro y otro que la devuelva en base a un valor aleatorio. Además de generar las instancias de nuestros Value Objects nos van a permitir que nuestros tests no se vean afectados si dichos Value Objects se modifican. Es precisamente por esto por lo que este método random() nos resulta tan útil, ya que podremos abstraernos en los tests de detalles como el valor que estamos definiendo por ejemplo para CourseName cuando lo que realmente nos interesa es validar que el curso se está guardando en BD"
    },
    {
      type: "text",
      content: "A un nivel de abstracción superior y saliéndonos de nuestros conceptos de Dominio encontramos otro tipo de factorías como son los WordMother"
    },
    {
      type: "text",
      content: "Ojo 👀: Tendremos que añadir en el fichero build.gradle de los tests del contexto de Mooc que los tests dependerán del contexto de Shared, que es donde tendremos la clase WordMother"
    },
    {
      type: "text",
      content: "Para añadir valor a esta factoría y que podamos probar indirectamente la entrada de valores aleatorios en los tests nos apoyaremos en una librería externa como faker, que añadiremos en nuestros build.gradle. Una vez instalada, esta librería nos provee de una enorme cantidad de conceptos que podremos generar de forma aleatoria (En caso de tener restricciones de tamaño, tipo de caracteres… crearíamos métodos que acotasen estos valores a nuestras necesidades en la clase WordMother)"
    },
    {
      type: "text",
      content: "Delegando en estos ObjectMothers la tarea de instanciar nuestro Agregado conseguimos no sólo la aleatoriedad de los valores utilizados en los tests, sino que estos queden mucho más limpios al eliminar ruído y que hablen mucho más de lo que validan en lugar de perderse en otros detalles menos relevantes 🕵"
    },
    {
      type: "text",
      content: "Tal como hemos hecho con los Value Objects, también podremos disponer de ObjectMothers para nuestros Agregados. Estos seguirán teniendo un par de métodos para instanciar el agregado bien a partir de unos atributos recibidos o bien generándo estos valores de forma aleatoria, pero además hemos definido un método fromRequest() que nos permita hacer la instancia a partir de una Request como la que le llegaría al caso de uso (no una Request de Spring)"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🐒 Tests más semánticos!"
    }
  ],
};
