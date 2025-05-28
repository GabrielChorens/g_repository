export default {
  title: "15 Resumen del refactor y estado final",
  videoId: "jc8d8dDOeP0",
  notes: [
    {
      type: "text",
      content: "Para cerrar esta lección vamos a dar un repaso sobre el refactor que hemos aplicado en el código para llegar al estado final 🤔"
    },
    {
      type: "text",
      content: "Podéis ver aquí cómo ha quedado el código así como los tests para comprobar que todo ha seguido funcionando correctamente sin que hayamos tenido que tocarlos en absoluto"
    },
    {
      type: "text", 
      content: "Clase Step:"
    },
    {
      type: "code",
      content: `final class Step
{
    private string   $title;
    private StepType $type;

    public function __construct(string $title, int $typeCode, ?int $videoDurationInMinutes, ?array $quizQuestions)
    {
        $this->title = $title;
        $this->type  = StepType::fromPrimitive($typeCode, $videoDurationInMinutes, $quizQuestions);
    }

    public function estimatedCompletionMinutes(): int
    {
        return $this->type->estimatedCompletionMinutes();
    }
}`
    },
    {
      type: "text",
      content: "Si observamos la clase Step veremos que únicamente ha mantenido como atributos de clase los que realmente necesita y que le pertenecen: el título del step y el tipo (StepType) por lo que el resto de parámetros recibidos por constructor sólo los utilizará para pasárselos al factory method fromPrimitive() a fin de instanciar el tipo de step"
    },
    {
      type: "text",
      content: "Dentro de este fromPrimitive() decidimos qué subtipo de StepType instanciar en base al código recibido, aquí estaremos haciendo uso de la función estática code() que obligábamos a implementar en cada una de las clases hijas para poder realizar esta comprobación"
    },
    {
      type: "text",
      content: "Hasta llegar a este factory method o named constructor, los valores de videoDurationInMinutes y quizQuestions son nullables puesto que aún no se ha determinado que tipo de step va a instanciar, recayendo esa obligatoriedad o restricción en las propias implementaciones de cada clase hija"
    },
    {
      type: "text",
      content: "Clase ExerciseStepType:"
    },
    {
      type: "code",
      content: `final class ExerciseStepType extends StepType
{
    private const EXERCISE_STEP_DURATION_ESTIMATION_IN_MINUTES = 30;

    public function estimatedCompletionMinutes(): int
    {
        return self::EXERCISE_STEP_DURATION_ESTIMATION_IN_MINUTES;
    }

    // more...
}`
    },
    {
      type: "text",
      content: "Como vemos en el caso del ExerciseStepType, el cálculo del tiempo estimado del step se vuelve absolutamente sencillo. Aquí podríamos debatir en si utilizar una constante para un valor fijo o devolver directamente el valor como escalar, ya que nos encontramos en un espacio muy acotado y un nivel de especificidad en el que podría ser redundante recurrir a una constante para algo así"
    },
    {
      type: "text",
      content: "El hecho de no haber tenido que modificar los tests durante este proceso de refactor nos deja ver desde un principio que la firma del constructor en la clase Step no se ha modificado en ningún momento, y si bien podríamos tratar de subir más arriba la lógica para que la clase Step ya recibiera directamente el la instancia de StepType en lugar de hacerla en su constructor, en este punto ya hemos conseguido aplicar las correcciones que veníamos buscando y hemos decidido mantener ese 'embudo' en la clase Step"
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?"
    },
    {
      type: "text",
      content: "Si tienes cualquier duda sobre el contenido del video y la lección o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: 📐 Long Parameter List Code Smell!"
    }
  ],
};
