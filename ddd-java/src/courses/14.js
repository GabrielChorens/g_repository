export default {
  title: "14 Integración de Hibernate respetando DDD",
  videoId: "cEfTjK5ipeI",
  notes: [
    { type: "subtitle", content: "Integración de Hibernate respetando DDD" },
    {
      type: "text",
      content: "Hibernate es el ORM que utilizaremos para gestionar la comunicación con nuestra BD, pero por defecto éste nos obligaría a implementar múltiples anotaciones en nuestras entidades y, como venimos hablando con DDD, queremos que las entidades conozcan sólo de nuestro Dominio y no se vean acopladas al modo en que opere la Infraestructura. Además, este tipo de implementación con anotaciones supondría una gran restricción al limitarnos a un sólo tipo de mapeo (no podríamos mapear las entidades para guardarlas en un Redis, por ejemplo)"
    },
    { type: "subtitle", content: "Añadiendo las dependencias 👨‍👧‍👦" },
    {
      type: "text", 
      content: "Dentro del fichero build.gradle principal tendremos que añadir una serie de dependencias relacionadas con el ORM en el bloque que corresponde a todos los sub-proyectos"
    },
    {
      type: "text",
      content: "hibernate-core: Nos permitirá usar este ORM\nspring-orm: Nos facilitará la gestión de dependencias y el manejo de operaciones transaccionales\ntomcat-dbcp: Lo usaremos para el pull de conexiones en producción (por defecto hibernate nos proporciona uno para entornos de desarrollo)\njaxb-impl & jaxb-api: Nos ayudarán bastante cuando mapeemos nuestras entidades en XMLs"
    },
    { type: "subtitle", content: "Preparando nuestra configuración personalizada 👨‍🎨" },
    {
      type: "text",
      content: "Hemos preparado una configuración muy fina 👌 a base de leer mucha documentación y picar mucho en código, y que ya tenéis accesible en este repo"
    },
    {
      type: "text",
      content: "Como decíamos, queremos que el mapping de nuestras entidades esté definido por XMLs para no contaminar nuestro Dominio, pero tampoco queremos que estos ficheros XML se encuentren por cualquier parte de nuestro código sin ningún orden, sino que queremos mantenerlos dentro de la capa de Infraestructura de forma ordenada 📂"
    },
    {
      type: "text",
      content: "El estándar que seguiremos será crear dentro de la carpeta de Infraestructura de cada módulo un directorio 'persistencia' 🕋 (para recoger todo lo asociado a la persistencia de datos) y en ésta un sub-directorio 'hibernate' donde tendremos todo lo que sea propio y personalizado de este ORM (tendríamos una por cada adaptador), como son los XMLs de mapeo con las entidades. Esta convención nos va a permitir que después podamos escanear de forma automatizada estas carpetas en busca de ficheros de configuración 🔦"
    },
    {
      type: "text",
      content: "Será en el fichero HibernateConfigurationFactory (en el video MoocHibernateConfiguration, se ha abstraído esta lógica a la infraestructura compartida por todos los contextos, dejando en MoocHibernateConfiguration la configuración propia de acceso a su BD) donde se produce precisamente esta magia para recuperar estos XMLs y realizar el mapeo correspondiente con nuestras entidades de Dominio"
    },
    {
      type: "text",
      content: "En esta clase hemos añadido dos anotaciones importantes: por un lado @EnableTransactionManagement nos habilitará que podamos usar el transaccional y montar las queries adecuadamente, y por otro @Configuration nos servirá para indicarle que se trata de una clase de configuración. Dentro sessionFactory() estaremos cargando los 'dataSources' para la conexión a nuestra BD y las propiedades de Hibernate"
    },
    { type: "subtitle", content: "HibernateProperties:" },
    {
      type: "text",
      content: "HBM2DDL_AUTO : Con esta propiedad indicamos qué hacer cuando ejecutamos una query e Hibernate detecta que la tabla no existe\nSHOW_SQL : Determina si se mostrará en el output de la consola las queries que están ejecutándose\nDIALECT : Identifica el dialecto utilizado en las queries"
    },
    {
      type: "text",
      content: "Finalmente esta clase de configuración también cargará los ficheros de mapeo. Para ello hemos preparado una función que recorra el Path para recuperar de cada módulo sus correspondientes ficheros XMLs (Lo tenéis aquí a tiro fijo para ahorraros la paliza de investigar cómo hacerlo). Ojo 👀 que el método setMappingLocations() lo que espera recibir es un 'Variable Argments' y no un Array"
    },
    {
      type: "text",
      content: "Finalmente, si volvemos a nuestra clase Starter tendremos dos puntos a considerar: Por un lado el hecho de estar escaneando la carpeta 'tv.codely.mooc' y haber añadido la anotación @Configuration hará que SpringBoot cargue automágicamente la configuración que acabamos de ver, y por otro lado hemos indicado en la anotación @SpringBootAplication que nos excluya la clase HibernateJpaAutoConfiguration para que las magias de configuración interna de esta clase no entren en conflicto con la que hemos personalizado nosotros"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🗺 Mapeo de Modelos de Dominio en Hibernate!"
    }
  ],
};
