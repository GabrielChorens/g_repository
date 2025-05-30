export default {
  title: "55 Patron Criteria Specification con Elasticsearch",
  videoId: "ft5Y2QtiDMc",
  notes: [
    { type: "subtitle", content: "🏎 Patrón Criteria/Specification con Elasticsearch" },
    {
      type: "text",
      content: "Del mismo modo que habíamos creado un CriteriaConverter para transformar el Criteria de nuestro dominio al de Hibernate, vamos a hacer lo propio para el de Elasticsearch"
    },
    {
      type: "text",
      content: "En primer lugar, desde la implementación del matching() en nuestro ElasticsearchBackofficeCourseRepository llamaremos al método searchByCriteria(), perteneciente a la clase abstracta ElasticsearchRepository."
    },
    {
      type: "text",
      content: "Internamente, lo que hará este método es llamar al searchAllInElastic() que vimos en el video anterior pero como segundo parámetro ya no estaremos pasando una query vacía sino que será donde va a entrar en juego nuestro converter"
    },
    {
      type: "text",
      content: "Por su parte, el método convert() será el que haga la magia 🧙‍♂️ y transforme los parámetros de nuestro Criteria en una query de Elasticsearch"
    },
    {
      type: "text",
      content: "A nivel de tests también encontraremos algunas diferencias con respecto al repositorio en MySQL. En primer lugar, con Elasticsearch no podemos hacer uso del @Transactional para hacer rollback de todo lo que hubieramos insertado tal y como veíamos en el caso de Hibernate, por lo que antes de cada TestCase lo que haremos será llamar al clearElasticsearch() para que limpie todos los índices"
    },
    {
      type: "text",
      content: "Por otro lado, dado que elasticSearch no indexa tan rápido como lo hace MySQL, hemos creado la función eventually() para que reintente N veces la aserción hasta que nos de el OK (o falle si no lo consigue tras los reintentos). El hecho de pasarle una función de orden superior es lo que nos permitirá que no se ejecute en el momento de declararla sino que será dentro donde la invocaremos, jugando con el número de reintentos y el tiempo entre estos 🙌"
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
      content: "¡Nos vemos en la siguiente lección: 🧹 Limpiando deuda técnica: Separando Bounded Contexts!"
    }
  ],
};
