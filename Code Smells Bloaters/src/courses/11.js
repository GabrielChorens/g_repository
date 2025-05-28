export default {
  title:
    "11 Replace Type Code with State o Strategy Refactoring Code Smell y estado deseado",
  videoId: "eOTmztoN85Y",
  notes: [
    {
      type: "text",
      content:
        "Para ilustrar el code smell utilizaremos el ejemplo de la propia plataforma de cursos. Dentro de cada curso podemos encontrar diferentes bloques o lecciones que, a su vez, se dividen en steps, estos steps pueden ser de distintos tipos: Videos, Preguntas, Actividades propuestas…",
    },
    {
      type: "text",
      content:
        "Es aquí, en estos tipos/types, donde vamos a poner el foco 🕵️ ya que es uno de esos pocos escenarios en los que si que consideramos que tiene sentido aplicar la Herencia en lugar de la Composición. Así, entendemos que estos Steps pueden asumirse como elementos genéricos que pueden ser de diferentes tipos (VideoStep, QuizStep…). Podéis ver el código de referencia de el estado inicial justo aquí",
    },
    {
      type: "link",
      content: "https://github.com/CodelyTV/refactoring-code-smells/blob/master/examples/php/php-step_strategy-01_base/src/Step.php",
    },
    {
      type: "subtitle",
      content: "Estado Inicial - ¿Qué tenemos?",
    },
    {
      type: "text",
      content:
        "Si vemos el diseño original de la clase Step, algo que nos puede ir chocando es el hecho de tener atributos como quizQuestions o videoDurationInMinutes que no nos van a servir de mucho si no se trata de un step del tipo Quiz o Video respectivamente, y sin embargo están ahí, e igual sucede con las constantes que corresponden a cosas de un tipo de step concreto 🤷‍♀️",
    },
    {
      type: "text",
      content: "Clase Step:",
    },
    {
      type: "code",
      content: `final class Step
{
    // more...

    public function estimatedCompletionMinutes(): int
    {
        $estimation = 0;

        if ($this->type === 0) { // Video
            $estimation = $this->videoDurationInMinutes;
        } elseif ($this->type === 1) { // Quiz
            $estimation = self::QUIZ_STEP_QUESTION_DURATION_ESTIMATION_IN_MINUTES * count($this->quizQuestions);
        } elseif ($this->type === 2) { // Exercise
            $estimation = self::EXERCISE_STEP_DURATION_ESTIMATION_IN_MINUTES;
        }

        return $estimation;
    }
}`,
    },
    {
      type: "text",
      content:
        "Por último encontramos la guinda del pastel con el método estimatedCompletionMinutes() en el que vemos una lógica que también puede chocar bastante con el uso de múltiples bloques if valores poco explícitos que necesitan comentarios a un lado y un campo temporal",
    },
    {
      type: "subtitle",
      content: "Estado Final - ¿A dónde queremos llegar?",
    },
    {
      type: "text",
      content:
        "La propuesta que planteamos está, como decíamos, en aplicar la herencia en este código, pero no en Step (Polimorfismo), sino en el atributo type, que dejaría de ser un valor numérico para ser un StepType. Será ésta la clase abstracta de la que hereden los diferentes tipos de ejercicio (State o Strategy Pattern) 👨‍👦‍👦",
    },
    {
      type: "text",
      content:
        "Una de las ventajas que podemos ir vislumbrando de llevarnos la herencia a StepType y no a Step es la capacidad de poder modificar el tipo de step una vez creado sin necesidad de destruir la nueva instancia y crear otra nueva 👌",
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?",
    },
    {
      type: "text",
      content:
        "Si tienes cualquier duda sobre el contenido del video o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇",
    },
    {
      type: "text",
      content:
        "¡Nos vemos en el siguiente video: 2️⃣ Preparando el quirófano desinfección de la zona!",
    },
  ],
};
