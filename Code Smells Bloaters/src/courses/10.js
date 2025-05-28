export default {
  title:
    "10 Replace Data Value with Object Value Objects como imanes de lógica para tus modelos",
  videoId: "KafrUaY-Q5o",
  notes: [
    {
      type: "text",
      content: "Y habiéndonos empapado de la teoría es momento de ver cómo poner en práctica y pasito a pasito 👣 este tipo de refactoring para pasar escalares a Value Objects. Para ello seguiremos el ejemplo de la clase User que tenemos en el repo del curso"
    },
    {
      type: "subtitle",
      content: "Escenario Inicial - Escalares"
    },
    {
      type: "text",
      content: "Clase User:"
    },
    {
      type: "code",
      content: `final class User
{
    private const SPANISH_LANGUAGE = "es";
    private const UNDERAGE_UNTIL_AGE = 18;

    private string $locale;
    private int    $age;

    public function __construct(string $locale, int $age)
    {
        $this->locale = $locale;
        $this->age    = $age;
    }

    public function understandSpanish(): bool
    {
        $language = substr($this->locale, 0, 2);

        return $language === self::SPANISH_LANGUAGE;
    }

    public function isUnderage(): bool
    {
        return $this->age < self::UNDERAGE_UNTIL_AGE;
    }
}`
    },
    {
      type: "text",
      content: "Tal como veíamos en el video anterior, nos encontramos con una clase User que cuenta con dos atributos que se instancian en el constructor, además de una lógica que gira alrededor de estos atributos con unas constantes privadas y unos métodos de clase. Nuestro objetivo es pasar esos atributos a Value Objects y empujar hacia ellos la lógica de negocio 🌬"
    },
    {
      type: "text",
      content: "Antes de empezar con el proceso es super importante que contemos con el respaldo de una buena cobertura de tests que nos garanticen que no estamos rompiendo nada en ninguno de los pasos que vayamos dando 👌"
    },
    {
      type: "subtitle",
      content: "Primeros pasos - Paralell Change"
    },
    {
      type: "text",
      content: "Siguiendo la dinámica que vimos en videos anteriores, seguiremos trabajando mediante cambios paralelos que nos permitan ir avanzando con mayor seguridad, lo cual será especialmente recomendable cuando nos encontremos con grandes aplicaciones sin una buena cobertura de tests en la que sea más difícil saber si estamos rompiendo algo por otra parte"
    },
    {
      type: "text",
      content: "Clase User:"
    },
    {
      type: "code",
      content: `final class User
{
    private const SPANISH_LANGUAGE = "es";

    private string $locale;
    private Age    $age;

    public function __construct(string $locale, int $age)
    {
        $this->locale = $locale;
        $this->age    = new Age($age);
    }

    public function understandSpanish(): bool
    {
        $language = substr($this->locale, 0, 2);

        return $language === self::SPANISH_LANGUAGE;
    }

    public function isUnderage(): bool
    {
        return $this->age->isUnderage()
    }

}`
    },
    {
      type: "text",
      content: "Al crear la clase Age lo primero que podemos ver es que ya podemos llevarnos ahi la lógica sobre si el usuario es o no mayor de edad. En nuestra clase User el primer cambio que llevaremos a cabo será instanciar el Value Object dentro del constructor 👀 Ojo porque seguimos respetando la firma"
    },
    {
      type: "text",
      content: "En el caso de haber múltiples métodos donde se estuviera accediendo a información de Age, lo interesante sería ir refactorizando método a método e incluso ir asignando a variables de método el atributo de clase para acotar mucho más el acceso que se hace al estado global de la clase. Otra alternativa para ir más pasito a pasito sería instanciar el Value Object como un atributo de clase distinto e ir sustituyéndolo método a método mientras vamos verificando que todo funciona correctamente 🐌"
    },
    {
      type: "subtitle",
      content: "CodelyTV Tips ☝️"
    },
    {
      type: "text",
      content: "Es super importante acordarnos de ir eliminando todo ese código 'extra' que vayamos generando al hacer Paralell Changes una vez demos el paso para evitar que acabe quedánose ahí generando ruído y confusión 🌀"
    },
    {
      type: "text",
      content: "Clase User:"
    },
    {
      type: "code",
      content: `final class User
{
    // more...

    public function understandSpanish(): bool
    {
        return $this->locale->understandSpanish();
    }

    public function isUnderage(): bool
    {
        return $this->age->isUnderage();
    }

}`
    },
    {
      type: "text",
      content: "Otro de los detalles super interesantes que podemos ver es cómo se aplica Tell, Don't Ask en nuestra clase User, a pesar de haber empujado esta lógica dentro de los Value Objects, los clientes externos sólo se van a comunicar con User, y será ésta la encargada de llamar a los métodos correspondientes de cada uno de los Value Objects, en lugar de encadenar llamadas del tipo $this->user->locale->understandSpanish()"
    },
    {
      type: "subtitle",
      content: "Seguimos refactorizando - Añadiendo semántica"
    },
    {
      type: "text",
      content: "Aún podemos trabajar un poco más nuestra clase User añadiendo semántica en su instanciación, para lo cual hemos consensuado que queremos que, en lugar de recibir los escalares por parámetro y pasarlos internamente a Value Objects, será el cliente el que nos pase los VO ya instanciados como argumentos."
    },
    {
      type: "text",
      content: "Clase User:"
    },
    {
      type: "code",
      content: `final class User
{
    // more...
    public static function signUp(Locale $locale, Age $age): User
    {
        return new self($locale, $age);
    }
    // more...
}`
    },
    {
      type: "text",
      content: "En el caso de otros lenguajes como Java que soportan múltiples constructores, añadir uno nuevo sería mucho más sencillo, en el caso de PHP será necesario que hagamos uso de una función estática que devuelva una instancia de la propia clase. Una vez listo, lo siguiente sería, al igual que vimos en el caso de los VO, ir sustituyendo cliente a cliente las llamadas que se realizaban al constructor anterior por esta nueva función mucho más semántica"
    },
    {
      type: "text",
      content: "Si queréis ver el tema de los Object Mothers podéis acceder a los videos concretos en los que se abordan dentro del curso de Testing: Introducción y buenas prácticas 😃"
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?"
    },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o te gustaría compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la próxima lección: 🚸 Respetando SOLID en modelos de dominio: El clásico \"type\" en usuarios, pedidos, clientes…!"
    }
  ],
};
