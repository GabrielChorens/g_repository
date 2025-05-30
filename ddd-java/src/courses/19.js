export default {
  title: "19 Declaración de servicios desacoplados",
  videoId: "MfWRiwCegsU",
  notes: [
    { type: "subtitle", content: "Declaración de servicios desacoplados" },
    {
      type: "text",
      content: "En este video le daremos una vuelta de tuerca más al tema de desacoplarnos lo máximo posible del framework en lo que respecta a las anotaciones (Gracias al aporte de @juanavilaes 🙌) en nuestro Dominio"
    },
    { type: "subtitle", content: "Anotación Service (Versión inicial):" },
    {
      type: "code",
      content: "@org.springframework.sterotype.Service\npublic @interface Service {}"
    },
    {
      type: "text",
      content: "En concreto, hasta ahora veníamos utilizando una anotación propia con la que envolvíamos la anotación Service de Spring ,utilizada para la inyección de servicios, de modo que quedase 'oculta' en el resto de clases donde teníamos que utilizarla (pero seguimos acoplados igualmente al framework ⛓) y minimizara el impacto de la Infraestructura dentro de nuestro Dominio"
    },
    { type: "subtitle", content: "Anotación Service (Versión actual):" },
    {
      type: "code",
      content: "@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\n@Inherited\npublic @interface Service {\n}"
    },
    {
      type: "text",
      content: "Lo que hacemos es sustituir la anotación de Spring indicando que es una propia que se aplica sobre clases y es heredada, de modo que ya no usamos una pieza del framework sino del propio lenguaje Java de la cual tenemos control absoluto 👌. Por otra parte también tendremos que añadir ahora en nuestras clases de aplicación que incluya en los filtros aquellas clases que están anotadas con nuestro Service para declararlas como servicios"
    },
    { type: "subtitle", content: "Clase MoocBackendApplication:" },
    {
      type: "code",
      content: "@SpringBootApplication(exclude = HibernateJpaAutoConfiguration.class)\n@ComponentScan(\n    includeFilters = @ComponentScan.Filter(type = FilterType.ANNOTATION, classes = Service.class),\n    value = {\"tv.codely.shared\", \"tv.codely.mooc\", \"tv.codely.apps.mooc.backend\"}\n)\npublic class MoocBackendApplication {\n    // ...\n}"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: 👥 Hibernate y modelado del dominio!"
    }
  ],
};
