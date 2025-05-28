export default {
  title: "29 Qué pasa cuando no hay clases JavaScript te miro a ti",
  videoId: "vq3wp9sHVAM",
  notes: [
    {
      type: "subtitle",
      content: "Estructuras de datos sin clases"
    },
    {
      type: "text",
      content: "Cuando hemos venido hablando de clases, nos referimos a mantener una estructura de datos agrupados y no necesariamente bajo un paradigma más orientado a objetos"
    },
    {
      type: "text",
      content: "Partiendo de esta premisa, un factor decisivo a la hora de abordar todo lo que hemos ido aprendiendo en los videos anteriores y de trabajar de un modo más funcional es el hecho de tener o no tipos en el lenguaje que estemos manejando"
    },
    {
      type: "code",
      content: "// main.js\nimport { name, draw, reportArea, reportPerimeter } from './modules/square.js'\n\n// square.js\nexport const name = 'square';\n\nexport function draw(ctx, length, x, y, color) {\n  ctx.fillStyle = color;\n  ctx.fillRect(x, y, length, length);\n\n  return {\n    length: length,\n    x: x,\n    y: y,\n    color: color\n  };\n}"
    },
    {
      type: "text",
      content: "El hecho de no trabajar con un lenguaje fuertemente tipado, incluso sin trabajar con clase, no significa en absoluto que no podamos organizar nuestro código. Tal como vemos en el ejemplo, podemos perfectamente organizar nuestras funcionalidades y exportarlas desde nuestro fichero javascript (en esta caso con las sentencias export/import de ECMAScript)"
    },
    {
      type: "text",
      content: "Por otro lado, a pesar de que Javascript no sea un lenguaje de fuerte tipado ni orientado a objetos, si que incluyen actualmente con clases nativas (como veíamos en los ejemplos de los videos anteriores)"
    },
    {
      type: "text",
      content: "Si bien son pocos los navegadores que a día de hoy no soportan estas declaraciones, contamos con traspiladores de código que nos permitirán poder usarlas igualmente en nuestro código y trasformarlas a algo que el navegador entienda 👌"
    },
    {
      type: "text",
      content: "Lo que queremos resaltar con todo esto es que, a pesar de que trabajemos con lenguajes sin tipos y de no disponer de clases como veíamos por ejemplo en Java que nos faciliten en cierta medida los refactors automáticos que hemos llevado acabo a lo largo del curso, si que podemos aplicar estas técnicas aunque sea de una manera más manual (extraer funciones, aplicar claúsulas de guarda…)"
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
      content: "¡Nos vemos en el siguiente video: 👀 Cómo plantear un proceso de refactoring!"
    }
  ],
};
