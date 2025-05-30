export default {
  title: "02 Estructura de carpetas DDD en Java",
  videoId: "1NhJnYZbgq4",
  notes: [
    { type: "subtitle", content: "Estructura de carpetas DDD en Java" },
    {
      type: "text",
      content: "Comenzamos nuestro proyecto y el primer paso será definir la estructura de carpetas con la que trabajaremos de aquí en adelante, viendo cómo llevarnos los conceptos de DDD a un proyecto en Java ☕️"
    },
    {
      type: "text", 
      content: "Partimos de la decisión desde negocio de crear una plataforma de cursos (mooc) que será gestionada y analizada desde un backoffice, además también contaremos con un blog donde se publicarán artículos y entrevistas. Estas 'entidades' las entenderemos como Bounded Contexts que, a su vez, estarán compuestos por distintos módulos (Videos, Cursos, Tickets, Estudiantes…)"
    },
    {
      type: "text",
      content: "Tal como explicamos en el curso de DDD Aplicado, las aplicaciones (entry points del frontend y el backend) atacarán a estos contextos y se situarán fuera de éstos ya que una misma aplicación podrá necesitar atacar a distintos Bounded Contexts"
    },
    {
      type: "text",
      content: "El conjunto de aplicaciones y Bounded Contexts podremos tenerlos dentro de un mismo repositorio (monorepositorio) o en repositorios distintos, esto es totalmente viable gracias a que aplicaremos una capa de anti-corrupción vía eventos con los que nos comunicaremos entre contextos e incluso entre módulos de un mismo contexto 📬"
    },
    { type: "subtitle", content: "Directorios 📁" },
    {
      type: "text",
      content: "A nivel de directorios lo que encontraremos en el primer nivel serán dos carpetas"
    },
    {
      type: "text",
      content: "apps: Aquí se ubicarán las aplicaciones (BackofficeFrontend, BackofficeBackend…)\nsrc: En esta carpeta irán todos nuestros contextos (Mooc, Backoffice…)"
    },
    {
      type: "text",
      content: "Este nivel materializa precisamente la idea de que las aplicaciones están fuera de los Bounded Contexts (una aplicación podrá atacar al código de n Bounded Contexts), lo cual supone una gran ventaja en términos de rendimiento ya que nos evitará tener que salir a la red para realizar llamadas Http a la API"
    },
    {
      type: "text",
      content: "Dentro de apps encontramos la carpeta /main y /test, que como veremos mimificará la estructura de /main. Dentro de la carpeta main tendremos la carpeta /resources y /apps, en la cual separaremos las aplicaciones frontend y backend pertenecientes a cada contexto"
    },
    {
      type: "text",
      content: "En la carpeta src tendremos en un primer nivel los distintos contextos además del shared kernel  y, dentro de cada uno de ellos encontramos la carpeta /main y la carpeta /test (de nuevo mimificando a la carpeta main)"
    },
    {
      type: "text",
      content: "Tal como comentábamos al inicio, cada Bounded Context contendrá una serie de módulos además de un 'shared' en el que llevaremos todas las piezas comunes entre los módulos de cada contexto. Esta estructura lo que nos ofrece es que lo primero que encontraremos al entrar serán conceptos de dominio (curso, video, estudiantes…) dando más importancia a éstos que a los aspectos técnicos 🤔, además la aplicación estará mucho más cohesionada y será mucho más fácil identificar posibles acoplamientos no deseados"
    },
    {
      type: "text",
      content: "Si entramos en cualquiera de estos módulos ya si encontraremos las distintas carpetas de Arquitectura Hexagonal (aplicación, dominio, infraestructura) conteniendo el menor código posible, siendo este el momento en el que cobra mayor importancia el modelado de nuestro dominio"
    },
    {
      type: "image",
      content: "src/assets/02.png"
    },
    {
      type: "subtitle",
      content: "Automatización 🚀"
    },
    {
      type: "named_link",
      text: "java-ddd-skeleton: Repositorio sobre el cual trabajaremos a lo largo del curso",
      url: "placeholder"
    },
    {
      type: "text",
      content: "Hemos preparado este repositorio abierto en Github que podéis usar a modo de plantilla base sobre la que levantar vuestros proyectos Java en DDD. Una ventaja que supone la función 'Use this template' es que os creará un proyecto en vuestro repo con un commit inicial a vuestro nombre, dejándolo mucho más limpio que si hiciéramos un 'fork' de la plantilla"
    }
  ],
};
