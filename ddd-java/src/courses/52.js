export default {
  title: "52 Filtrado de elementos Patron Criteria en MySQL",
  videoId: "7d9WBpyLGQg",
  notes: [
    { type: "subtitle", content: "⚔️ Filtrado de elementos: Patrón Criteria en MySQL" },
    {
      type: "text",
      content: "Visto en qué consiste el Patrón Criteria y añadirlo a la firma de nuestro repositorio no queda sino darle forma en la implementación de éste en MySQL, en concreto con la ayuda de la librería javax e Hibernate"
    },
    {
      type: "text", 
      content: "Nuestra implementación de MySqlBackofficeCourseRepository hereda de la clase abstracta HibernateRepository, la cual utilizaremos internamente al invocar el método  matching(), será dentro del byCriteria() de esta clase abstracta donde transformemos el Criteria de nuestro dominio a una CriteriaQuery propia de Hibernate y la ejecutaremos"
    },
    {
      type: "subtitle",
      content: "Clase HibernateCriteriaConverter:"
    },
    {
      type: "code",
      content: "public CriteriaQuery<T> convert(Criteria criteria, Class<T> aggregateClass) {\n    CriteriaQuery<T> hibernateCriteria = builder.createQuery(aggregateClass);\n    Root<T>          root              = hibernateCriteria.from(aggregateClass);\n\n    hibernateCriteria.where(formatPredicates(criteria.filters().filters(), root));\n\n    if (criteria.order().hasOrder()) {\n        Path<Object> orderBy = root.get(criteria.order().orderBy().value());\n        Order        order   = criteria.order().orderType().isAsc() ? builder.asc(orderBy) : builder.desc(orderBy);\n\n        hibernateCriteria.orderBy(order);\n    }\n\n    return hibernateCriteria;\n}"
    },
    {
      type: "text",
      content: "La magia de esta conversión la encontramos en al llamar al conversor HibernateCriteriaConverter. En primer lugar construirá el CriteriaQuery en base a la clase genérica que le pasemos por parámetro (lo cual nos permitirá que Hibernate sepa a qué tabla consultar y a qué clase mapear los resultados). A partir de aquí traduciremos el Criteria para añadírselo a la query que Hibernate entienda"
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
      content: "¡Nos vemos en la siguiente lección: ⚡ Optimizando rendimiento - Moviéndonos a NoSQL: Elasticsearch al rescate!"
    }
  ],
};
