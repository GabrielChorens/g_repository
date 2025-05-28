export default {
  title: "13 Modelando clase Type: ¡Bisturí!",
  videoId: "FxfTScgJLII",
  notes: [
    {
      type: "text",
      content: "Una vez que hemos 'limpiado' el código podemos empezar a abordar nuestro proceso refactoring extrayendo milimétricamente la lógica asociada al tipo de step 😷"
    },
    {
      type: "text", 
      content: "Tal y como está planteada actualmente la lógica en nuestro código, cada vez que quisiéramos añadir un nuevo tipo de step tendremos que venir a modificarla en todos los puntos en los que se esté haciendo referencia a ella, con lo que chocamos directamente con el OCP de SOLID 👎 De ahi la importancia de este refactor que nos permitirá que simplemente extendamos el código en términos de funcionalidad 👍"
    },
    {
      type: "text",
      content: "Si no lo habéis visto previamente, os recomendamos encarecidamente que accedáis al curso de SOLID en la plataforma."
    },
    {
      type: "subtitle",
      content: "Definiendo la jerarquía de clases"
    },
    {
      type: "text",
      content: "Clase StepType:"
    },
    {
      type: "code",
      content: `public static function fromPrimitive(int $code, ?int $videoDurationInMinutes, ?array $quizQuestions)
{
    switch ($code) {
        case VideoStepType::code():
            return new VideoStepType($videoDurationInMinutes);
        case QuizStepType::code():
            return new QuizStepType($quizQuestions);
        case ExerciseStepType::code():
            return new ExerciseStepType();
        default:
            throw new InvalidArgumentException("Unrecognized Step type code");
    }
}

abstract protected static function code(): int;

abstract public function estimatedCompletionMinutes(): int;`
    },
    {
      type: "text",
      content: "El primer paso que habríamos llevado a cabo sería la creación de la clase abstracta StepType que contiene un named constructor estático que será el encargado de devolver de devolver la instancia de una de las clases hijas en base al código recibido. El objetivo de definir este método 'factoría' es centralizar en un único punto de nuestra aplicación ese bloque switch-case"
    },
    {
      type: "text",
      content: "Recordemos que este código utilizado por la función fromPrimitive()  es el type que la clase Step recibía en el constructor, es decir, la firma de Step no se ha modificado y los clientes no se están viendo afectados 🙌"
    },
    {
      type: "text",
      content: "Como podemos ver en el caso de VideoStepType, cada una de las clases que heredan de StepType reciben únicamente los datos que necesita por constructor además de implementar el cálculo particular de la estimación de completado en minutos. Justamente el objetivo de este refactor será llevarnos esa lógica que hasta ahora teníamos en Step::estimatedCompletionMinutes() hacia los diferentes tipos de Step"
    },
    {
      type: "text",
      content: "Clase Step:"
    },
    {
      type: "code",
      content: `    private string    $title;
    private StepType  $type;
    private ?int      $videoDurationInMinutes;
    private ?array    $quizQuestion;

    public function __construct(string $title, int $typeCode, ?int $videoDurationInMinutes, ?array $quizQuestions)
    {
        $this->title                    = $title;
        $this->type                     = StepType::fromPrimitive($typeCode, $videoDurationInMinutes, $quizQuestions);
        $this->videoDurationInMinutes   = $videoDurationInMinutes;
        $this->quizQuestion             = $quizQuestion;
    }
    // more...`
    },
    {
      type: "text",
      content: "Aunque de puertas para afuera seguimos manteniendo la misma firma en el constructor, dentro de éste podemos ver un primer cambio al sustituir el campo type con el tipo StepType y asignarle valor llamando al fromPrimitive que veíamos previamente"
    },
    {
      type: "subtitle",
      content: "CodelyTV Tip ☝️"
    },
    {
      type: "text",
      content: "Podemos utilizar el 'type info' (Cmd + P en IntelliJ IDEA) para comprobar qué argumentos y de que tipo espera recibir un método y asegurarnos así de que los primitivos que le estamos pasando son los correctos 👌"
    },
    {
      type: "text",
      content: "Ahora que hemos pasado a usar StepType dentro de la clase Step, ya no tendremos que acceder al $this->type como teníamos previamente en el switch-case del método estimatedCompletionMinutes() sino que accederemos al $this->type->code(), puesto que lo habíamos empujado dentro de la clase abstracta"
    },
    {
      type: "subtitle",
      content: "Extrayendo con ayuda del IDE"
    },
    {
      type: "text",
      content: "Llega el momento de llevarnos la lógica del estimatedCompletionMinutes() desde Step hacia StepType y para ello vamos a ayudarnos de los refactors automáticos que nos proporciona el IDE 🤘"
    },
    {
      type: "subtitle",
      content: "1- Encapsular la lógica en un método a parte"
    },
    {
      type: "text",
      content: "Clase Step:"
    },
    {
      type: "code",
      content: `    // more...
    public function estimatedCompletionMinutes(): int
    {
        return $this->innerEstimatedCompletionMinutes();
    }`
    },
    {
      type: "text",
      content: "El primer paso por el que vamos a pivotar será extraer a un método a parte (pero aún en la misma clase) la lógica que había dentro del método estimatedCompletionMinutes() (Cmd + Alt + M en IntelliJ), al ser un método temporal que va a desaparecer al terminar el refactor, el nombre que le pongamos nos importa algo menos 🤷🏼‍♂️"
    },
    {
      type: "subtitle",
      content: "2- Moviendo la lógica a StepType"
    },
    {
      type: "text",
      content: "Clase Step:"
    },
    {
      type: "code",
      content: `    // more...
    public function estimatedCompletionMinutes(): int
    {
        return $this->type->estimatedCompletionMinutes($this);
    }`
    },
    {
      type: "text",
      content: "Al haber encapsulado la lógica en un método a parte, ahora resultará muy sencillo mover este método a nuestra clase StepType (Move Instance Method en el menú de Refactor This en IntelliJ). En este punto detectaremos (o el IDE nos ayudará a detectar 😬) que va a cambiar la accesibilidad en algunas de las constantes de las que estábamos haciendo uso dentro del método por la visibilidad que le hayamos definido previamente"
    },
    {
      type: "text",
      content: "Al mover este método, que está siendo llamado desde la clase Step, el IDE nos lo ha convertido en estático y metido como argumento la instancia de la propia clase, ya que no estaría reconociendo que ya dispone de una estancia de StepType dentro de Step, por lo que este cambio de StepType::estimatedCompletionMinutes($this) a $this->type->estimatedCompletionMinutes($this) tendremos que hacerlo nosotros mismos a mano"
    },
    {
      type: "text",
      content: "Por otro lado, el propio IDE nos está dando también la pista de que no está pudiendo acceder desde StepType a las constantes que habíamos definido como privadas en Step, y es que, si vemos los accesos que se hacen a éstas, veremos que ya no tiene ningún sentido mantenerlas aquí, por lo que podemos empujarlas hacia donde le pertenece: La clase StepType"
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?"
    },
    {
      type: "text",
      content: "Si tienes cualquier duda sobre el contenido del video o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 4️⃣ Limpiando los pasos intermedios del refactoring!"
    }
  ],
};
