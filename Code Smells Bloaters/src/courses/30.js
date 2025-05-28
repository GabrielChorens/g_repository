export default {
  title: "30 Cómo plantear un proceso de refactoring",
  videoId: "z-7dZfLPxDs",
  notes: [
    {
      type: "subtitle",
      content: "¿Por dónde empezamos?"
    },
    {
      type: "text", 
      content: "La primera duda que nos suele venir a la cabeza cuando nos planteamos refactorizar una aplicación es ¿Por dónde empezamos? La que podéis ver aquí sería un ejemplo de cualquier caso real que podéis encontrar en vuestro día a día"
    },
    {
      type: "subtitle",
      content: "¿Qué queremos conseguir?"
    },
    {
      type: "text",
      content: "Una primera cuestión antes de bajar al terreno es la motivación que nos mueve a querer refactorizar un código que de base está funcionando ¿Qué queremos conseguir con este proceso? La importancia de esta cuestión radica en que en base al motivo (mantenibilidad, fiabilidad, escalabilidad…) tendremos que poner el foco en unos elementos u otros del código"
    },
    {
      type: "subtitle",
      content: "Tests como punto de partida"
    },
    {
      type: "text",
      content: "Tal y como hemos venido hablando durante el curso, resulta super importante contar con tests que nos garanticen que no estamos rompiendo nada, aunque sólo podamos establecer pruebas de caja negra o introducir logs debido a la baja testabilidad del código, por lo que este debería ser el punto de partida en caso de no tenerlos ✅"
    },
    {
      type: "subtitle",
      content: "Identificar el dolor"
    },
    {
      type: "text",
      content: "Habiendo desbloqueado el tema de los tests, el siguiente paso debería ser identificar qué es realmente lo que más nos está doliendo dentro del código ¿Es la mantenibilidad del código o tenemos un cuello de botella que daña fuertemente el rendimiento de la aplicación?"
    },
    {
      type: "subtitle",
      content: "Quick wins de rendimiento"
    },
    {
      type: "text",
      content: "Con frecuencia, los problemas de rendimiento pueden solventarse parcial o totalmente cambiando el modo en que recuperamos la información de BD o de servicios externos (Podéis ver en más profundidad este tema en los cursos de Event-Driven Architecture y Domain-Driven Design). Cambios como el hecho de recuperar únicamente los datos que necesitamos de BD o agrupar consultas en lugar de lanzarlas en un bucle iterativo son 'quick wins' que también nos van a permitir ir mejorando el rendimiento de la aplicación y ganar tiempo para poder refactorizar el código con más tranquilidad 🏆"
    },
    {
      type: "subtitle",
      content: "Evitar patrones que dificultan la testabilidad"
    },
    {
      type: "text",
      content: "Otro aspecto de interés a la hora de plantearnos este tipo de procesos es evitar el uso de Singletons y otros pratrones y prácticas que dificultan la testabilidad del código: si tenemos problemas para testear la aplicación, tendremos problemas para garantizar que nada se rompe a causa del refactor 🤔 Además, poder establecer test unitarios nos permitirá abordar pequeñas porciones de código sin depender del enorme tiempo que requiera la ejecución de los tests de caja negra ⏳"
    },
    {
      type: "subtitle",
      content: "Promover flujos asíncronos"
    },
    {
      type: "text",
      content: "La ejecución de forma síncrona de acciones paralelas (Ej. Enviar una notificación al usuario) es otro factor que puede dañar el rendimiento e incluso la mantenibilidad del código, de modo que extraer esta lógica a parte e ir promoviéndola a un flujo asíncrono (Ej. colas de eventos) será otro paso positivo para abordar nuestro proceso de refactoring"
    }
  ],
};
