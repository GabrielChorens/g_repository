export default {
  title: "71 Alternativa al mapeo con ficheros XML de Hibernate",
  videoId: "CLR-hz5zohg",
  notes: [
    { type: "subtitle", content: "Alternativas de mapeo en Hibernate" },
    { type: "text", content: "Una de las dudas más votadas a lo largo del curso es esta acerca de la alternativa al uso de ficheros XML para el mapeo de nuestras entidades con Hibernate." },
    { type: "text", content: "Al trabajar con este ORM disponemos de dos formas de realizar el mapeo entre nuestras entidades de dominio y los registros en BD: Usando ficheros XML o a través de anotaciones." },
    { type: "text", content: "Si bien el uso de anotaciones contaminaría nuestra entidad, podríamos reducir este problema si utilizamos otra entidad dentro de infraestructura que use estas anotaciones y realizar en un segundo paso el mapeo de esta entidad de infraestructura a la entidad de dominio." },
    { type: "subtitle", content: "Beneficios del uso de anotaciones:" },
    { type: "text", content: "- Menor verbosidad que los ficheros XML" },
    { type: "text", content: "- Mayor estandarización al usar anotaciones de JPA" },
    { type: "text", content: "- Mayor robustez derivada de la compilación de estas entidades" },
    { type: "text", content: "- Refactoring automático por el IDE" },
    { type: "subtitle", content: "¿Por qué seguir usando XML?" },
    { type: "text", content: "A pesar de estos beneficios, apostaríamos igualmente por el uso de XML ya que:" },
    { type: "text", content: "- Los IDEs ya nos probeen igualmente de refactoring en los XML, además de que estará igual de centralizado en ambos casos" },
    { type: "text", content: "- La compilación de estas entidades con anotaciones no nos parece un criterio de total confianza" },
    { type: "text", content: "- Podemos usar parámetros de JPA en los XML para tener mayor estandarización" },
    { type: "text", content: "- La menor verbosidad de las entidades se obtiene a costa de un doble mapeo que afectará a la performance de la aplicación" },
    { type: "text", content: "Desintoxicándonos de Eloquent: Aquí hablamos de cómo abstraernos de Eloquent para que Active Record no contamine nuestro dominio" },
    { type: "link", content: "https://www.youtube.com/watch?v=EInyOtPra44" },
    { type: "subtitle", content: "¿Alguna Duda?" },
    { type: "text", content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo." },
    { type: "text", content: "¡Nos vemos en el siguiente video: Monorepo - Deploy de sólo algunos contextos!" }
  ],
};
