export default {
  title: "27 Valores de argumentos por defecto Como lidiar con ellos",
  videoId: "_vnK6_SfkSo",
  notes: [
    {
      type: "subtitle",
      content: "Valores por defecto y legibilidad del código"
    },
    {
      type: "text",
      content: "Uno de los aspectos que ha ido guiando todos los code smells que hemos visto a lo largo del curso es que se trataban de elementos que dañaban la legibilidad y mantenibilidad del código, y es por esto por lo que hemos querido abordar también el tema de los argumentos que tienen valores por defecto"
    },
    {
      type: "subtitle", 
      content: "Clase DailyBonusPointsCalculator (estado inicial)"
    },
    {
      type: "code",
      content: "export class DailyBonusPointsCalculator {\n    calculate(consecutiveDays, isPremium = false) {\n        if (isPremium) {\n            const consecutiveWeeks = Math.floor(consecutiveDays / 7);\n\n            let consecutiveWeeksMultiplier = 1;\n            if (consecutiveWeeks > 0) {\n                consecutiveWeeksMultiplier = Math.pow(this.PREMIUM_USER_WEEKS_MULTIPLIER, consecutiveWeeks);\n            }\n\n            return consecutiveDays * this.PREMIUM_USER_POINTS_PER_DAY * consecutiveWeeksMultiplier;\n        } else {\n            return consecutiveDays * this.NORMAL_USER_POINTS_PER_DAY;\n        }\n    }\n}"
    },
    {
      type: "text",
      content: "Si recordamos cómo estaba definido el método calculate(), veíamos como dentro de la propia implementación del método estábamos atrayendo las responsabilidades respecto a si un usuario era o no premium 👨‍👧‍👦"
    },
    {
      type: "text",
      content: "Si bien es cierto que hemos perseguido durante todo el curso cumplir con el principio de Tell, Don't Ask y, en general, empujar la lógica lo más profundamente posible, en este tipo de casos con valores por defecto mantenemos una visión que podría resultar contradictoria"
    },
    {
      type: "text",
      content: "El factor clave llega a la hora de tratar de ser más explícitos, revelar claramente las intenciones y especialmente de evitar crear 'embudos' en nuestro código en pro de mantener un flujo lineal y mucho más sencillo de seguir 🗺 lo cual se aleja mucho de lo que vemos en el ejemplo de arriba"
    },
    {
      type: "text",
      content: "Así, lo que buscaríamos sería que el cliente sea precisamente quien haga explícito si lo que quiere es el cálculo para un usuario normal o para un usuario premium, tal y como veíamos en el video anterior al separar la lógica con el método calculatePremium(), pues es dicho cliente quien sabe de primera mano si el usuario que está enviando es premium o no"
    },
    {
      type: "text",
      content: "Pero es que además, el tema de los argumentos con valores por defecto nos chirría mucho en términos de pérdida de control y generación de incertidumbre, ya que al no ser explícitos perdemos la garantía de que el cliente sabe que quiere que se ejecute un caso de uso concreto u otro 🤯"
    },
    {
      type: "subtitle",
      content: "¿Cuándo usar valores por defecto?"
    },
    {
      type: "text",
      content: "Y habiendo visto las contraprestaciones ¿Cuándo veríamos correcto usar valores por defecto? En nuestra opinión, uno de los casos en que si tendría sentido sería en el caso de los tests (Ej. uso de ObjectMothers) a la hora de instanciar objetos con diferentes valores, jugando tanto con el uso de valores por defecto como de aleatorización de valores"
    },
    {
      type: "text",
      content: "Named Constructors: Video en el canal de YouTube sobre constructores semánticos/named constructors"
    },
    {
      type: "text",
      content: "Los named constructors o factory methods constituyen así mismo una alternativa al uso de métodos con valores por defecto, proporcionándonos mayor semántica y una carga mucho más explícita sobre lo que queremos hacer (Ej. crear un usuario de tipo Admininstrador)"
    },
    {
      type: "link",
      content: "https://www.youtube.com/watch?v=J0SFLG5B3wo"
    },
    {
      type: "text",
      content: "Finalmente, la recomendación en aquellos casos en los que no nos queda más remedio que tener valores por defecto es llevarnos dichos valores lo más afuera posible 🔙"
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?"
    },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido de este video o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la próxima lección: 🌍 Ejemplos prácticos para El Mundo Real™️: ¡Uniendo las piezas!!"
    }
  ],
};
