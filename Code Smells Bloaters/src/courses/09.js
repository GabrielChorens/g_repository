export default {
  title: "09 Cuándo usar clases para representar datos con Value Objects",
  videoId: "eyCIWbNj4vw",
  notes: [
    {
      type: "text",
      content:
        "Como cabe imaginar, Primitive Obsession es un tipo de code smell caracterizado por la obsesión de utilizar siempre tipos primitivos. En relación a este, vamos a dar un repaso sobre cuándo utilizar clases para representar nuestros datos",
    },
    {
      type: "text",
      content:
        "El concepto de Value Object es algo que hemos visto más en profundidad en cursos como el de DDD aplicado, no obstante haremos un rápido resumen",
    },
    {
      type: "subtitle",
      content: "Primitive VS Value Object",
    },
    {
      type: "text",
      content:
        "Los primitivos son tipos de datos que vienen de forma nativa en el lenguaje y por tanto no tenemos que picar nada para disponer de ellos (int, string, integer, number). Aunque las clases, los wrappers como Integer o String en el caso de Java también se consideran primitivos ya que igualmente no están picadas por nosotros y no aportan mayor valor",
    },
    {
      type: "text",
      content:
        "Los Value Objects son clases que encapsulan un tipo primitivo y que nos permiten añadir lógica relacionada con ese valor. Esto nos permite validar los datos y añadir comportamiento específico para ese tipo de dato",
    },
    {
      type: "code",
      content: `class User {
    private locale: $locale;
    private age: $age;

    public function __construct($locale $locale, age $age) 
    {
        $this->locale = $locale;
        $this->age = $age;
    }
}

class Age {
    private int $value;

    public function __construct(int $value)
    {
        if ($value < 18) {
            throw new InvalidArgumentException("Must be young");
        }
        $this->value = $value;
    }
}`,
    },
    {
      type: "text",
      content:
        "En este código ya podemos empezar a ver algunas cosas interesantes. Los tipos definidos en la firma del API nos está aportando mucha más semántica e información sobre lo que espera recibir como argumentos",
    },
    {
      type: "text",
      content:
        "Dicho en otras palabras, nos permite empajar las restricciones de integridad de nuestro dominio a la propia definición",
    },
    {
      type: "text",
      content:
        "Si bien podríamos llevarnos estas restricciones a la clase User en nuestro ejemplo, esto nos lleva a varios problemas importantes: En primer lugar estaríamos haciendo que esta clase se vuelva mucho más difícil de mantener y comprenda demasiado (open/closed) que ya vimos en anteriores sesiones. En segundo lugar, esta alternativa muy probablemente nos lleve a tener que implementar las mismas reglas validaciones en cada clase en la que vayamos a pasar esa edad a una localización (fail en reutilización de código 😞)",
    },
    {
      type: "subtitle",
      content: "Beneficios Value Objects",
    },
    {
      type: "text",
      content:
        "Haciendo resumen, los Value Objects nos ofrecen una serie de beneficios a tener en cuenta:",
    },
    {
      type: "text",
      content: "✅ Mayor robustez en las validaciones",
    },
    {
      type: "text",
      content: "🧲 Imán de lógica de negocio perteneciente al VO",
    },
    {
      type: "text",
      content: "👌 Aportan semántica",
    },
    {
      type: "text",
      content: "👀 Simplifican la API",
    },
    {
      type: "text",
      content: "🥶 Otorgan inmutabilidad del objeto",
    },
    {
      type: "subtitle",
      content: "¿Dónde usar Value Objects?",
    },
    {
      type: "text",
      content:
        "Hemos visto algunos ejemplos en los que resulta interesante utilizar Value Objects, no obstante existen algunos escenarios en los que suele acertar más sobre si debemos o no utilizarlos:",
    },
    {
      type: "text",
      content:
        "Comunicación entre capas: En la comunicación entre capas de nuestra arquitectura es recomendable utilizar DTOs (Data Transfer Object), que no contienen ninguna lógica de negocio",
    },
    {
      type: "text",
      content:
        "Modelos de dominio: Aquí debemos diferenciar entre VO y Modelos de dominio, ya que estos últimos tienen un identificador y el ciclo de vida identificable",
    },
    {
      type: "text",
      content:
        "Servicios: Al igual que en el caso de los boilerplate, hay distintas situaciones en las que deberíamos a nivel de equipo, enviando los primitivos a los modelos directamente o viceversa el propio servicio el encargado de instanciar los VO para pasárselos al modelo",
    },
    {
      type: "subtitle",
      content: "🚀 ¿Boilerplate?",
    },
    {
      type: "text",
      content:
        "Hemos visto los beneficios que nos ofrece, ya que queremos utilizar los Value Objects, pero además queremos poder generarlos de forma rápida. Por suerte, existen ciertas soluciones en base a los principales lenguajes:",
    },
    {
      type: "text",
      content:
        "Existe una propuesta denominada Records que entrará a partir de la JDK14 que nos ofrecerá una forma de definir clases inmutables con sus getters (no setters), equals, hashCode, getters para dichos campos, su constructor y las implementaciones de toString, equals y hashCode",
    },
    {
      type: "link",
      content: "https://openjdk.java.net/jeps/359",
    },
    {
      type: "text",
      content:
        "En el caso de Kotlin encontramos las data class, que son bastante similares al caso de Java pero incluye algunas fantásticas como el hecho de sobrescribir internamente el 'toString' para acceder a un campo directamente, si está nombrado como 'value'. Puede verse una aproximación a lo que ya encontrábamos en Scala con las CaseClass",
    },
    {
      type: "link",
      content:
        "https://dev.to/flbenz/kotlin-and-domain-driven-design-value-objects-4m32",
    },
    {
      type: "text",
      content:
        "En el caso de Typescript también encontramos una aproximación con el uso de los readonly en los atributos de una clase, si bien es una solución algo más verbosa, de momento no hay una estructura específica como las que vimos en los lenguajes",
    },

    {
      type: "text",
      content:
        "A partir de PHP 8 encontramos lo que han denominado Constructor Property Promotion, que consiste en la posibilidad de añadir la visibilidad en los argumentos del constructor como pública, privada o protegida, lo cual nos ahorra mucho código repetitivo. La contra que tiene esta solución es que también estaríamos permitiendo modificar el valor de dicho atributo 🤔 también por lo cual nos queda la visibilidad pública, asegurándonos que no pueda modificarse pero obligándonos a picar nosotros mismos el getter",
    },
    {
      type: "link",
      content: "https://php.watch/versions/8.0/constructor-property-promotion",
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?",
    },
    {
      type: "text",
      content:
        "Si tienes cualquier duda sobre el contenido del vídeo o te apetece compartir cualquier sugerencia siempre puedes hacerlo en una nueva discusión justo aquí abajo 👇 👇 👇",
    },
    {
      type: "text",
      content:
        "¡Nos vemos en el siguiente vídeo! 👋 Replace Data Value with Object: Value Objects como imanes de lógica para tus modelos!",
    },
  ],
};
