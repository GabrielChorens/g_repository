export default {
  title: "09 Event Sourcing & Testing",
  videoId: "auEhX4WfCRA&t=413s",
  notes: [
    {
      type: "text",
      content: "Diclaimer este no es el video pero es interesante. leer el blog"
    },
    {
      type: "text",
      content: "En este capítulo vamos a ver cómo se testea un modelado con event sourcing a nivel unitario, entendiendo como unidad a testear NO a una clase, sino a una lógica o caso de uso concreto del dominio."
    },
    {
      type: "text", 
      content: "Vamos a ver como se testea un sistema desarrollado siguiendo los principios de event sourcing. Veremos cómo podemos preparar el sistema para llevarlo a cierto estado a partir del cual le mandaremos un comando para luego verificar que se han producido ciertos cambios en forma de eventos aplicados."
    },
    {
      type: "subtitle",
      content: "CQRS y testing"
    },
    {
      type: "text",
      content: "Una de las ventajas más grandes de CQRS y especialmente con event sourcing, es que es posible expresar los tests puramente en términos de eventos y comandos."
    },
    {
      type: "text",
      content: "Ambos son componentes funcionales que tienen un significado claro en el dominio. Así que los tests se escriben de forma que tienen un significado funcional claro y que además apenas dependen de los detalles de implementación."
    },
    {
      type: "text",
      content: "El API de una arquitectura CQRS esencialmente es bastante sencilla. Entran comandos y salen eventos. En algunos casos puede haber alguna query como parte de la ejecución del comando. A parte de eso, comandos y eventos es lo único que tiene nuestra API. Esto quiere decir que es posible definir completamente un escenario de test en términos de eventos y comandos:"
    },
    {
      type: "text",
      content: "\"Given\" ciertos eventos en el pasado\n\n↓\n\n\"When\" ejecutamos un comando\n\n↓\n\n\"Then\", esperamos que estos eventos sean publicado y/o almacenados"
    },
    {
      type: "subtitle",
      content: "Implementación"
    },
    {
      type: "text",
      content: "Axon Framework pone a disposición de las herramientas necesarias para crear nuestros tests. Para usarlas tenemos que añadir la dependencia al módulo axon-test y podemos echar un vistazo a"
    },
    {
      type: "link",
      content: "https://docs.axoniq.io/reference-guide/v/3.0/part-ii-domain-logic/testing"
    },
    {
      type: "image",
      content: "src/assets/09a.png"
    },
    {
      type: "text",
      content: "Veamos un ejemplo de una \"fixture de test given-when-then\":"
    },
    {
      type: "image",
      content: "src/assets/09b.png"
    },
    {
      type: "text",
      content: "La \"fixture de test given-when-then\" define tres etapas:\n\nConfiguración\nEjecución\nValidación"
    },
    {
      type: "text",
      content: "Cada etapa se representa con una \"interface\":\n\nFixtureConfiguration\nTestExecutor\nResultValidator"
    },
    {
      type: "subtitle",
      content: "Configuración"
    },
    {
      type: "text",
      content: "Durante la fase de configuración (antes del primer given), podemos añadir los requerimientos para la ejecución del test. Por ejemplo los command handlers que no hayan sido registrados directamente en el Aggregate. Para ello usaremos registerAnnotatedCommandHandler. A parte podemos configurar todos los componentes que definan cómo se configura la infraestructura alrededor del test."
    },
    {
      type: "text",
      content: "La parte más importante de esta etapa se encuentra en la secuencia de eventos que proporcionamos al given para llegar al estado del agregado que vamos a testear."
    },
    {
      type: "text",
      content: "Opcionalmente podríamos usar comandos para establecer el escenario de test. En este caso lo que realmente se acaba usando para establecer el escenario, son los eventos que desencadena el comando. Para esta opción usaremos givenCommands."
    },
    {
      type: "subtitle",
      content: "Ejecución"  
    },
    {
      type: "text",
      content: "La etapa de ejecución nos permite lanzar un comando que será ejecutado contra el command handler. El comportamiento del handler y el agregado será monitoreado y luego comparado con las expectaciones en la etapa de validación."
    },
    {
      type: "subtitle",
      content: "Validación"
    },
    {
      type: "text",
      content: "El último paso es la validación que nos permitirá verificar la actividad del command handler. Lo haremos puramente en términos de retorno de valores y eventos."
    },
    {
      type: "text",
      content: "Podremos explícitamente definir el valor \"expectado\" o simplemente que la ejecución del comando se acabe con éxito. Además podremos \"expectar\" excepciones."
    },
    {
      type: "text",
      content: "También podremos validar la publicación de eventos. Existen dos formas de hacer \"matching\" de eventos \"expectados\"."
    },
    {
      type: "text",
      content: "La primera consiste en pasar una instancia de Event que será comparada literalmente usando equals()."
    },
    {
      type: "text",
      content: "La segunda consiste en usar \"Matchers\"."
    },
    {
      type: "subtitle",
      content: "Ejemplo"
    },
    {
      type: "text",
      content: "Explicadas las etapas, veamos cómo queda en código usando la interfaz \"fluent\" que provee Axon."
    },
    {
      type: "image",
      content: "src/assets/09c.png"
    },
    {
      type: "text",
      content: "Para más información y detalle os dejamos el link a la documentación de Axon."
    },
    {
      type: "link",
      content: "https://docs.axoniq.io/reference-guide/v/3.0/part-ii-domain-logic/testing"
    }
  ],
};
