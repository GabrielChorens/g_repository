export default {
  title: "14 Limpiando los pasos intermedios del refactoring",
  videoId: "6oZJCposU80",
  notes: [
    {
      type: "text",
      content: "Como veíamos en el video anterior, al llevarnos el método estimatedCompletionMinutes() hacia la clase StepType, nos había metido la instancia de Step por parámetro e internamente seguía haciendo la consulta a $instance->type a la hora de acceder a cualquier atributo de StepType, pero obviamente ¡ya no es necesario dar toda esa vuelta!"
    },
    {
      type: "text",
      content: "Clase StepType:"
    },
    {
      type: "code",
      content: `  public function estimatedCompletionMinutes(Step $instance): int
  {
      $estimation = 0;

      switch($instance->type->code()){
        case: self::STEP_TYPE_VIDEO:
          $estimation = $instance->videoDurationInMinutes;
          break;
        case: self::STEP_TYPE_QUIZ:
          $estimation = self::QUIZ_STEP_QUESTION_DURATION_ESTIMATION_IN_MINUTES * count($instance->quizQuestions);
          break;
        case: self::STEP_TYPE_EXERCISE:
          $estimation = self::EXERCISE_STEP_DURATION_ESTIMATION_IN_MINUTES;
          break;
      }
      return $estimation;
  }`
    },
    {
      type: "text",
      content: "Lo primero que haremos para limpiar el código será sustituir todas las referencias al parámetro $instance por los atributos de la propia clase"
    },
    {
      type: "subtitle",
      content: "⬇️ Empujando la lógica hacia abajo"
    },
    {
      type: "text",
      content: "Tal y como hicimos previamente a la hora de mover el método a otra clase, vamos a dar un 'pasito atrás' llevándonos la lógica a un método dentro de la propia clase, será este método 'temporal' sobre el cual apliquemos el refactor de tipo 'Push members down…' para empujarlo desde la clase abstracta a las distintas implementaciones de ésta."
    },
    {
      type: "text",
      content: "Es importante este paso intermedio para poder empujar la lógica sin llegar a perder la firma del método en la clase abstracta y que sea ese método temporal el que pase a ser su implementación en las clases que heredan"
    },
    {
      type: "text",
      content: "Clase QuizStepType:"
    },
    {
      type: "code",
      content: `final class QuizStepType extends StepType
{
    // more...

    public function estimatedCompletionMinutes(): int
    {
        return StepType::QUIZ_STEP_QUESTION_DURATION_ESTIMATION_IN_MINUTES * count($this->quizQuestions);
    }
}`
    },
    {
      type: "text",
      content: "Al llevarnos la lógica a las tres clases que heredan de StepType nos encontramos con que en cada una de ellas estamos replicando todo el switch-case para el cálculo de la estimación en minutos, cuando ya no sería necesario, por lo que podemos limpiar esta lógica y devolver simplemente el contenido correspondiente a cada 'case' (aquí la ventaja de la preparación que realizamos previa al propio refactor) y dejar de pasar la instancia de Step como argumento"
    },
    {
      type: "subtitle",
      content: "🔀 Reubicando constantes"
    },
    {
      type: "text",
      content: "Clase StepType:"
    },
    {
      type: "code",
      content: `abstract class StepType
{
    public static function fromPrimitive(int $code, ?int $videoDurationInMinutes, ?array $quizQuestions)
    {
        switch ($code) {
            case self::VIDEO_STEP_TYPE:
                return new VideoStepType($videoDurationInMinutes);
            case self::QUIZ_STEP_TYPE:
                return new QuizStepType($quizQuestions);
            case self::EXERCISE_STEP_TYPE:
                return new ExerciseStepType();
            default:
                throw new InvalidArgumentException("Unrecognized Step type code");
        }
    }

    abstract protected static function code(): int;

    abstract public function estimatedCompletionMinutes(): int;
}`
    },
    {
      type: "text",
      content: "Una vez que hemos llevado la lógica al punto que le corresponde, vemos que las constantes relativas al código de cada tipo de step y al cálculo de la duración han dejado de tener sentido dentro de la clase StepType, por lo que también podemos empujarlas hacia donde le corresponde y hacerlas privadas, simplificando aún más la clase abstracta (Desde IntelliJ: Refactor This => Move members…)"
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
}`
    },
    {
      type: "text",
      content: "Finalmente podemos hilar un poco más fino y convertir la función code() en estática para poder llamarla desde StepType antes de instanciar ninguno de las clases hijas y no tener que dejar la constante que establece el código de cada tipo como pública"
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
      content: "¡Nos vemos en el siguiente video: 5️⃣ Resumen del refactor y estado final!"
    }
  ],
};
