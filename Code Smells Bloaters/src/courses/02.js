export default {
  title: "02 Caso evernote p1 hasta 656",
  videoId: "r06zI2VkU3k",
  notes: [
    {
      type: "subtitle",
      content: "Muerte por deuda técnica: Cuándo refactorizar",
    },
    {
      type: "text",
      content:
        "Los problemas derivados de acumular demasiada deuda técnica en nuestra aplicación no son algo que deberiamos menospreciar tal y como vemos en el ejemplo de Evernote, que se vio en la necesidad de parar durante 18 meses todos sus desarrollos sólo para poder renacer la aplicación",
    },
    { type: "link", content: "placeholder" },
    {
      type: "text",
      content:
        "El caso de Evernote se encuentra en un escenario bastante frecuente de entropia continua de valor, ya que con ritmo de trabajo vamos empujando los problemas técnicos hacia un rincon oscuro y en lugar de irlos abordando, acabamos generando esa deuda técnica. Una de las soluciones a este problema es la que aquí abordaremos: Frenar los desarrollos de nuevas features y renacer todo desde cero",
    },
    {
      type: "text",
      content:
        "Por supuesto, ya se hubieran detectado a tiempo todos esos 'code smells' que conforman la marcha atrás y hubieran sido recomendaciones más sencillas y habría permitido obtener unas bases sólidas de clean code sobre las que trabajar",
    },
    {
      type: "text",
      content:
        "Pero ¿cuándo refactorizar? ¿Es necesario un paron total o nos ponemos a refactorizar código? Por supuesto habra que tempranar en lo que probablemente NO sea necesario: imaginar que un se esta validando simplemente la idea del producto a vender.",
    },
    {
      type: "text",
      content:
        "Por otra lado, cuando ya tenemos un producto validado, que genera beneficios y debemos seguir teniendo en consideración cuando hacerlo y a que alcance. El riego para este tipo de acciones en una empresa de venta online es muy alto, sobretodo en periodos de ventas finales de verano. Por supuesto, cuanto más deuda técnica acumulemos, más riesgo y mayor impacto tendrá cuando nos decidamos a pagarla.",
    },
    { type: "subtitle", content: "La regla del boy scout" },
    {
      type: "text",
      content:
        "Al igual que los buenos scouts procuran dejar el campo un poco mejor de como lo encontraron, una buena práctica para evitar precisamente esta 'muerte por deuda técnica' es aprovechar cuando debemos modificar algún código para mejorarlo si detectamos pequeños code smells por el camino 🔥",
    },
    {
      type: "text",
      content:
        "Con esto entramos en una toma de decisión bastante importante: ¿mejoramos el código primero o después? Existen dos factores principales a tener en cuenta: Por un lado la alternativa va a depender de distintos factores como:",
    },
    {
      type: "text",
      content:
        "• Mi conocimiento del dominio ¿Conozco bien el código afectado o espero a terminar mi desarrollo?",
    },
    {
      type: "text",
      content:
        "• Afectación sobre mi desarrollo ¿Facilitará mi tarea el hecho de refactorizar primero?",
    },
    {
      type: "text",
      content:
        "Evidentemente, es algo más que recomendado contar con una mínima cobertura de tests que nos brinde la tranquilidad de saber que el refactor aplicado no está rompiendo nada 🧪 y aportar la seguridad por un método preventivo en lugar de tratar de revertir todo de una sola vez.",
    },
    {
      type: "text",
      content:
        "Como apunte final 👾 queremos incidir en que evaluar de un código legacy sin pararnos a identificar los problemas que presenta y las cosas que lo hacen difícil de mantener, muy probablemente nos llevará igualmente a repetir los mismos problemas aunque nos lancemos a rehacer todo desde 0, eso es lo que hace tan importante y necesario aprender a identificar todos esos code smells y cómo solucionarlos.",
    },
    {
      type: "text",
      content:
        "En las siguientes lecciones profundizaremos en cómo identificar y refactorizar todos esos code smells ¡Vamos allá!",
    },
    {
      type: "text",
      content:
        "We broke up the Monolith, and started using Event Sourcing: Slides de la charla que comentamos en el video",
    },
    {
      type: "link",
      content:
        "https://es.slideshare.net/JavierCane/we-broke-up-with-the-monolith-and-started-dating-eventsourcing-symfonycat",
    },
  ],
};
