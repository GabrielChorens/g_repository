export default {
  title: "21 Modelado del dominio step video y challenge",
  videoId: "V1J9trn7vIo",
  notes: [
    { type: "subtitle", content: "Modelado del dominio: step vídeo y challenge" },
    {
      type: "text",
      content: "Vammos a volver a centrarnos en el nucleo de nuestra aplicación 🎯 y poner el ojo en nuestro Dominio, en concreto en el concepto de Steps, para acercarnos al uso del 'Discriminator Map'"
    },
    {
      type: "text",
      content: "A lo largo del curso hemos venido defendiendo la regla de 'Composición sobre Herencia' (Como cuando aplicábamos Inversión de Dependencias con los repositorios) y hemos hablado del por qué desde el curso de SOLID. No obstante habrá ocasiones en las que nos interese hacer uso de la herencia (Por ejemplo en los Tests suites a nivel de infraestructura) y esta será una de ellas 👨‍👧‍👦"
    },
    {
      type: "text",
      content: "Si recordamos el lenguaje ubicuo de la plataforma, dentro de cada Lección de un Curso encontrábamos varios Steps los cuales podían ser de distinto tipo (Watch, Quiz, Challenge…). Es en estos Steps donde vemos que va a existir una abstracción que encaja bastante con el uso de la herencia, es decir, tiene sentido definir una clase abstracta con los aspectos generales (id y título en este caso) de la cual heredarán todos los distintos tipos de Step"
    },
    { type: "subtitle", content: "Clase Step:" },
    {
      type: "code",
      content: "public abstract class Step {\n    private final StepId    id;\n    private final StepTitle title;\n\n    public Step(StepId id, StepTitle title) {\n        this.id    = id;\n        this.title = title;\n    }\n\n  //...\n}"
    },
    {
      type: "text",
      content: "Un detalle sutil pero importante es que esta clase Step esté definida precisamente como abstracta para evitar así que pudiera instanciarse en algún momento esta clase, forzando a que las instancias sean siempre de los tipos específicos. Por otra parte también hemos modelado los atributos tanto de la abstracción como de los tipos específicos a Value Objects"
    },
    {
      type: "text",
      content: "Ahora que tenemos mucho mas claro cual es el modelado para los Steps ya estamos listos para ver cómo llevar a cabo el mapeo de estas entidades con Hibernate 🐻"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🦅 Discriminator Map con Hibernate!"
    }
  ],
};
