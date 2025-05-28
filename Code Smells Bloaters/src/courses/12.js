export default {
  title: "12 Preparando el quirófano desinfección de la zona",
  videoId: "tCuP3x258hc",
  notes: [
    {
      type: "text",
      content: "Sabemos de donde venimos y a donde queremos llegar con nuestro proceso de refactoring, pero antes de llevarlo a cabo resulta super interesante y nos facilitará mucho el trabajo si hacemos una pequeña limpieza en el código 🧼"
    },
    {
      type: "text", 
      content: "Es una buena práctica realizar este tipo de limpieza previa para asegurarnos de que entendemos bien el código que vamos a refactorizar y que podemos avanzar sobre terreno seguro"
    },
    {
      type: "subtitle",
      content: "Clase Step (Estado inicial):"
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
}`
    },
    {
      type: "text",
      content: "Uno de los code smells que ya habíamos identificado en este código era el tema de los comentarios para explicar el código, que precisamente en este caso hace referencia al type de cada step, que es el tema principal de este refactor"
    },
    {
      type: "subtitle",
      content: "💬 Aportando semántica"
    },
    {
      type: "text",
      content: "Clase Step (Aportando semántica):"
    },
    {
      type: "code",
      content: `final class Step
{
    // more...

    public function estimatedCompletionMinutes(): int
    {
        $estimation = 0;

        if ($this->type === self::STEP_TYPE_VIDEO) {
            $estimation = $this->videoDurationInMinutes;
        } elseif ($this->type === self::STEP_TYPE_QUIZ) {
            $estimation = self::QUIZ_STEP_QUESTION_DURATION_ESTIMATION_IN_MINUTES * count($this->quizQuestions);
        } elseif ($this->type === self::STEP_TYPE_EXERCISE) {
            $estimation = self::EXERCISE_STEP_DURATION_ESTIMATION_IN_MINUTES;
        }

        return $estimation;
    }
}`
    },
    {
      type: "text",
      content: "Lo que haremos en primer lugar será aportar más semántica a los valores definidos para cada tipo de step, de modo que resulte mucho más explícito y sepamos de qué se trata sin necesidad de añadir comentarios, esto lo haremos extrayendo los valores a constantes privadas."
    },
    {
      type: "text",
      content: "Mucho ojo 👀 al extraer magic numbers a una constante, porque podemos incurrir en sustituir otros valores que no tienen que ver con la variable que estamos extrayendo (Como vemos con el valor '0', que tiene múltiples significados en nuestro código)"
    },
    {
      type: "subtitle",
      content: "📐 Delimitando el código"
    },
    {
      type: "text",
      content: "Habíamos visto que otra de las cosas que nos chocaba en este estimatedCompletionMinutes() era el uso de los if-elseif encadenados, que finalmente no eran sino un switch-case camuflado. Lo que buscamos en este caso es asegurarnos de que la lógica de este bloque gira en torno a un único elemento, en este caso el valor de type"
    },
    {
      type: "text",
      content: "Clase Step (Simplificando):"
    },
    {
      type: "code",
      content: `final class Step
{
    // more...

    public function estimatedCompletionMinutes(): int
    {
        $estimation = 0;
        
        switch($this->type){
          case: self::STEP_TYPE_VIDEO:
           $estimation = $this->videoDurationInMinutes;
           break;
          case: self::STEP_TYPE_QUIZ:
            $estimation = self::QUIZ_STEP_QUESTION_DURATION_ESTIMATION_IN_MINUTES * count($this->quizQuestions);
            break;
          case: self::STEP_TYPE_EXERCISE:
            $estimation = self::EXERCISE_STEP_DURATION_ESTIMATION_IN_MINUTES;
            break;
        }
        return $estimation;
    }
}`
    },
    {
      type: "text",
      content: "Con este paso, nos aseguramos de que toda la lógica gira alrededor de un único valor ($this->type), ya que a diferencia del if, en el switch-case no podemos añadir múltiples condiciones a cumplir. Con esto ya podemos ir empezando a vislumbrar que posteriormente cada uno de estos case pasará a ser una subclase distinta"
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
      content: "¡Nos vemos en el siguiente video: 3️⃣ Modelando clase Type: ¡Bisturí!"
    }
  ],
};
