export default {
  title: "72 Monorepo: Deploy de solo algunos contextos",
  videoId: "xCtqT3uPjxs",
  notes: [
    { type: "subtitle", content: "Estrategias de despliegue en monorepos" },
    { type: "text", content: "Otra cuestión que ha generado cierto interés es qué estrategia seguiríamos para el despliegue y testeo de las diferentes aplicaciones de un monorepo." },
    { type: "subtitle", content: "Alternativas principales" },
    { type: "text", content: "Cuando trabajamos con un monorepositorio tenemos principalmente dos alternativas, entre las cuales perfectamente podemos cambiar conforme evolucione nuestro proyecto en base a que nos pueda beneficiar una u otra: Separar el despliegue de cada aplicación o tener un único fichero de despliegue" },
    { type: "subtitle", content: "Recomendación: Único archivo de despliegue" },
    { type: "text", content: "En nuestra opinión, lo ideal será optar siempre que sea posible por mantenerlo en un único elemento (un FatJar en el caso de Java) que sea el que se despliegue en cada entorno" },
    { type: "subtitle", content: "Ventajas del despliegue único:" },
    { type: "text", content: "De este modo, una misma build parametrizada nos servirá para todos nuestros entornos y contextos, además, todo el proceso será mucho más sencillo y no será necesario orquestar ninguna lógica de contextos compartidos" },
    { type: "subtitle", content: "Desventajas:" },
    { type: "text", content: "Por contra, todo el codigo estará metido en un único jar y tanto los tests en CI como la build tardarán bastante más que si la hacemos por separado" },
    { type: "text", content: "Dadas estas ventajas y contraprestaciones, nuestra recomendación sería apostar por un único archivo de despliegue mientras esto no suponga ningún problema real" },
    { type: "subtitle", content: "¿Alguna Duda?" },
    { type: "text", content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo" },
    { type: "text", content: "¡Nos vemos en el siguiente video: Creación distribuída de una entidad!" }
  ],
};
