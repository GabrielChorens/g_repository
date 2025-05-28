export default {
  title:
    "20 Cómo gestionar parámetros de aplicación Replace Parameter with Method Call Refactoring",
  videoId: "YeBgDBkRVEc",
  notes: [
    { type: "text", content: "Los parámetros de aplicación son algo bastante habitual y no queríamos pasar sin ver las distintas alternativas que podemos encontrar para gestionarlos. Para ponernos todos en situación, un parámetro de aplicación será algo que vamos a inyectar en nuestro caso de uso" },
    
    { type: "subtitle", content: "⚒ Parámetro de aplicación" },
    
    { type: "text", content: "Clase ChatController:" },
    
    { type: "code", content: `public final class ChatController {
  public static final int NEW_CHAT_ROLLOUT_PERCENTAGE = 30;

  public String pullMessages() {
      if (new Random().nextInt(100) <= NEW_CHAT_ROLLOUT_PERCENTAGE) {
          return "Messages from the NEW chat system";
      } else {
        return "Messages from the OLD chat system"
      }
  }
}` },

    { type: "text", content: "Un ejemplo de parámetro de aplicación podría ser el rango de porcentaje de peticiones/usuarios que queremos que entren por un nuevo sistema para ir balanceando la carga de peticiones por cualquier razón" },
    
    { type: "text", content: "Simplificando al máximo posible, vemos cómo el valor del porcentage que establece ese criterio de balanceo viene definido por una constante a modo de 'feature flag' dentro del propio controlador. Aunque en principio cumple con su función correctamente, esta técnica implica algunos problemas 😓" },
    
    { type: "text", content: "Clase ChatControllerShould:" },
    
    { type: "code", content: `public final class ChatControllerShould {
    @Test
    @Disabled("This fails randomly because we can't control the CHAT_ROLLOUT_PERCENTAGE")
    void should_use_the_old_chat_system_pulling_messages() {
        var controller = new ChatController();

        assertEquals("Messages from the OLD chat system", controller.pullMessages());
    }
    // more...
}` },

    { type: "text", content: "El principal problema que encontramos aquí es que, al tener harcodeado el valor del porcentage en el controlador directamente, los tests van a fallarnos aleatoriamente y no podremos comprobar que al ejecutarse van a ir a un sistema o al otro. Esto habitualmente va a llevarnos a desactivar los tests implicados asumiendo que será algo temporal durante el RollOut" },
    
    { type: "subtitle", content: "🧶 Costura de Test" },
    
    { type: "text", content: "Una alternativa para evitar ese problema sería definir un método dentro del controlador que establezca el valor del porcentaje, de modo que podamos crear una clase hija de dicho controlador en la cual sobrescribamos el método y así podamos jugar con una clase hija que siempre devuelva 0 o 100 en base al sistema por el que queramos que acceda" },
    
    { type: "text", content: "Aunque sigue siendo una opción no demasiado limpia, puede ser totalmente válida si estamos trabajando sobre una clase demasiado grande y no podemos abordar otro tipo de refactor en ese momento, además de permitirnos ir añadiendo cobertura de tests a nuestro código 🤷🏼‍♂️" },
    
    { type: "subtitle", content: "📥 Parametrizando la clase" },
    
    { type: "text", content: "La alternativa por la que nosotros apostamos es la de parametrizar el valor del porcentaje, es decir, que la clase ChatController recibirá desde el exterior dicho valor 📥" },
    
    { type: "text", content: "Clase ChatController (parametrizando el valor):" },
    
    { type: "code", content: `public final class ChatController {
  private final int newChatRolloutPercentage;

  public ChatController(int newChatRolloutPercentage) {
      this.newChatRolloutPercentage = newChatRolloutPercentage;
  }

  public String pullMessages() {
      if (new Random().nextInt(100) <= newChatRolloutPercentage) {
          return "Messages from the NEW chat system";
      } else {
        return "Messages from the OLD chat system"
      }
  }
}` },

    { type: "text", content: "Aquí se nos abren diferentes posibilidades, como recibirlo en el constructor al instanciar la clase o que sea el método pullMessages() quien lo reciba como argumento. En este caso, al ser un valor que no variará en tiempo de ejecución, optaríamos por pasárselo en el constructor" },
    
    { type: "text", content: "De este modo, ya sólo tendríamos que pasarle el valor que queramos al instanciar la clase en cada uno de los tests. Además estamos permitiendo que el valor que reciba pueda ser diferente para los distintos entornos de trabajo" },
    
    { type: "subtitle", content: "🆙 Reemplazar parámetro de aplicación por llamada a un método" },
    
    { type: "text", content: "Generalmente, cuando introducimos este tipo de flags para pruebas A/B, quien tiene mayor interés en probar cómo se comporta en uno u otro caso suele ser el equipo de producto, y no tiene mucho sentido tener que depender de que el desarrollador nos modifique el valor de estos parámetros cada vez que necesitemos probar la nueva feature" },
    
    { type: "text", content: "En estos casos, lo ideal es que cualquier persona que necesite probarlo pueda modificarlo fácilmente desde un panel de administración, con lo que la inyección del valor como habíamos visto previamente no resulta la mejor opción ¿Qué podemos hacer en su lugar? ¡Patrón Repository al rescate! 🙌" },
    
    { type: "text", content: "Clase ChatController (repository):" },
    
    { type: "code", content: `public final class ChatController {
    private final ChatRolloutPercentageRepository rolloutRepository;

    public ChatController(ChatRolloutPercentageRepository rolloutRepository) {
        this.rolloutRepository = rolloutRepository;
    }

    public String pullMessages() {
        if (new Random().nextInt(100) <= rolloutRepository.percentage()) {
            return "Messages from the NEW chat system";
        } else {
            return "Messages from the OLD chat system";
        }
    }
}` },

    { type: "text", content: "Al hacer uso de este patrón, podemos utilizar cualquier implementación para ChatRolloutPercentageRepository que acceda, por ejemplo, a un campo almacenado en BD y que podríamos modificar de forma externa en un dashboard sin necesidad de tocar el código 👌" },
    
    { type: "text", content: "Clase ChatControllerShould (repository):" },
    
    { type: "code", content: `public final class ChatControllerShould {
    @Test
    void should_use_the_old_chat_system_pulling_messages() {
        var controller = new ChatController(new AlwaysOldChatChatRolloutPercentageRepository());

        assertEquals("Messages from the OLD chat system", controller.pullMessages());
    }

    // more...` },

    { type: "text", content: "Además, al hacer uso de inversión de dependencias podemos aprovechar para cambiar la implementación de este repository en tiempo de tests, utilizando una que tenga un valor fijo y determinado en base a lo que queramos testear (Podéis profundizar más sobre el Principio de Inversión de Dependencias en el curso de Principios SOLID)" },
    
    { type: "text", content: "Por supuesto, en base a las necesidades de nuestra aplicación bien podemos preferir o interesarnos más cualquiera de las distintas alternativas que hemos visto y os invitamos a comentar aquí abajo por qué apostaríais por una u otra opción 😃" },
    
    { type: "subtitle", content: "¿Alguna Duda?" },
    
    { type: "text", content: "Si tienes alguna duda sobre el contenido del video o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇" },
    
    { type: "text", content: "¡Nos vemos en la próxima lección: 🥖 Data Clumps Code Smell!" }
  ],
};
