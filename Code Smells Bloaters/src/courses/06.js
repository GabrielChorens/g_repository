export default {
  title: "06 Large class deteccion",
  videoId: "ejfG1vwL5I8",
  notes: [
    {
      type: "subtitle",
      content: "Large Class: Detección, problemas y estado ideal"
    },
    {
      type: "text",
      content: "Aunque seguimos con el mismo ejemplo de los vídeos anteriores, vamos a introducir dos diferencias: Por un lado vamos a pasar todo con Javascript (tenéis el acceso al ejemplo justo aquí)"
    },

    {
      type: "text", 
      content: "y por otro pasaremos a enfocarnos al code smell de Large Class 🗂"
    },
    {
      type: "text",
      content: "Como indica su nombre, este code smell hace referencia a aquellas class que son excesivamente grandes. Si bien podríamos pensar que este está estrechamente relacionado del Long Method, no siempre era así"
    },
    {
      type: "text",
      content: "Pongamos como ejemplo el típico modelo de 'User', el cual tiene una serie de campos 'base', puede ser que se supone necesarios que para un determinado contexto (Backend/Contract en DDD) este User además de esos campos tenga otros tantos más, por lo que se los añadimos al modelo"
    },
    {
      type: "text",
      content: "Al final, con esto conseguiremos tener una clase User enorme por todo ese conjunto de campos que no necesitamos para un determinado contexto"
    },
    {
      type: "text",
      content: "Por otra parte, podríamos considerar llevar la gestión de estas diferencias a la capa de servicio y que fueran unos UserMockManager y UserBackofficeManager se ocuparan de toda esta información particular de cada contexto, pero si entramos hablando de una herencia práctica (como veremos a continuación), ni estaríamos evitando que finalmente en BD siguiéramos teniendo una tabla User con un montón de columnas"
    },
    {
      type: "text",
      content: "Siguiendo el enfoque de DDD, si los campos de User necesarios en el contexto de Mooc son diferentes a los necesarios para el Backoffice, tiene bastante sentido separarlo en dos clases User diferentes con los datos realmente necesarios para su contexto"
    },
    {
      type: "text",
      content: "Esta separación nos ayuda no sólo a que este modelo User no sea una clase inmensa, sino también a que, a nivel de infraestructura, en BD contemos con tablas con menor número de columnas y que cualquier posible impacto sobre una de las tablas se mantenga en el ámbito del bloque en el que estamos trabajando"
    },
    {
      type: "text",
      content: "Todo esto nos lleva a considerar detalles de diseño de la aplicación para definir a dónde debemos llevar la lógica. Tal como plantea el principio de Tell, Don't Ask o Ley de Demeter, deberíamos asignar toda la lógica de negocio lo más próximo posible, siempre que el principio de menor servicio externo. Con esto nos acercamos justamente a dos aspectos clave de la Programación Orientada a Objetos: Alta Cohesión y Bajo Acoplamiento"
    },
    {
      type: "link",
      content: "https://es.wikipedia.org/wiki/Ley_de_Demeter"
    },
    {
      type: "text", 
      content: "Así, si en la capa de servicio podemos evitar tener una clase larga a través de la Responsabilidad Única y una composición sobre herencia, en el modelo del dominio únicamente tendremos que hacer uso de la Segregación en base al contexto"
    }
  ],
};
