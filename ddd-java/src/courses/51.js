export default {
  title:
    "51 Filtrado de elementos Patron CriteriaSpecification objetos de dominio",
  videoId: "_yeZGmJkqnQ",
  notes: [
    { type: "subtitle", content: "🗃 Filtrado de elementos: Patrón Criteria/Specification (objetos de dominio)" },
    {
      type: "text",
      content: "Puesto que ya tenemos el listado de cursos mostrándose en el Backoffice será interesante poder filtrarlos y, para ello, haremos uso del Patrón Criteria o Specification Pattern 🔍"
    },
    {
      type: "text",
      content: "Aunque al principio pudiera parecer un mecanismo complicado, los beneficios que puede aportarnos son altos. Además contáis con este ejemplo que encontraréis en el repositorio del curso para que podáis añadirlo a vuestros proyectos y probar 🙌"
    },
    {
      type: "text",
      content: "Estos filtros tienen una serie de elementos tangenciales como son el Campo por el que queremos filtrar, el Operador que se ejecutará y el Valor introducido. En nuestro caso también añadiremos un Límite y un Offset para paginar la consulta, pero entendemos que puede haber escenarios en los que pueda interesar hacerlo en base a un identificador de recurso"
    },
    {
      type: "text",
      content: "Este patrón resulta altamente recomendable cuando el número de filtros que aplicamos en un listado puede aumentar demasiado y corremos el riesgo de acabar con repositorios con un sin fín de métodos que cubran todas las posibles combinatorias."
    },
    {
      type: "text",
      content: "Lo que busca este patrón es justamente tener un único método para filtrar en la Interface del repositorio que reciba un objeto Criteria de nuestro propio Dominio de modo que cada implementación se encargue de traducir dicho objeto a una query en el sistema que estemos utilizando (MySql, Elasticsearch, etc)"
    },
    {
      type: "text",
      content: "Así pues, una vez nos llegue la petición HTTP desde el front al Controller lo que haremos será extraer todos los posibles filtros de la Request y para guardarlos en un listado de HashMaps y enviarlos en la query SearchBackofficeCoursesByCriteriaQuery."
    },
    {
      type: "text",
      content: "Esta query acaba llegando al QueryHandler, donde crearemos un Filters y Order (de nuestro Dominio 👀) vía named constructor y se los pasaremos junto al limit y el offset al caso de uso"
    },
    {
      type: "text",
      content: "Desde el caso de uso instanciaremos nuestro Criteria y se lo pasaremos al matching() de nuestro repositorio que lo estará esperando por parámetro como comentábamos al inicio del video y que será lo que nos permita simplificar toda esa explosión de métodos de tipo 'searchBy…' en ún único método"
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?"
    },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🕵️ Filtrado de elementos: Patrón Criteria en MySQL!"
    }
  ],
};
