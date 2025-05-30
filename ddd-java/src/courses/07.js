export default {
  title: "07 Implementacion del test unitario y caso de uso",
  videoId: "Un-Q984Kwmk",
  notes: [
    { type: "subtitle", content: "Implementación del test unitario y caso de uso" },
    {
      type: "text",
      content: "Es hora de crear el test unitario que cubra nuestro caso de uso y de implementar el mismo. Iremos directamente al paso de tener la implementación del caso de uso en la capa de aplicación y no en el Controller, ya que a pesar de poder considerarlo un caso previo, esto supone un problema a la hora de crear el test unitario y nos obligará a duplicar el test si queremos llamar al caso de uso desde un comando de cli 🤯"
    },
    { type: "subtitle", content: "Creación del Caso de Uso 👨🏽‍💻" },
    {
      type: "text",
      content: "El primer paso será crear en el módulo de cursos (contexto de Mooc) sus correspondientes carpetas de Arquitectura Hexagonal 🎯. Dentro de aplicación seguimos una lógica de crear una carpeta para cada acción que vayamos a tener asociada a ese módulo, por lo que ahora tendremos una para 'crear' un curso (Veremos como esta separación por acciones será muy útil cuando usemos CQRS) y dentro de esta añadimos nuestro caso de uso"
    },
    {
      type: "text",
      content: "Este caso de uso será el que inyectaremos en el Controller, llamándo al método create() que recibirá tanto el id de la ruta como el nombre y la duración del cuerpo de la Request. Este método está declarado como void, haciéndo énfasis en que lo que hará precisamente será provocar un efecto colateral (Publicar un curso)"
    },
    {
      type: "text",
      content: "Recordemos que en la clase Starter ya habíamos indicado que nos escaneara ciertos directorios para saber qué inyectar, además de esto hemos añadido la anotación @Service (encapsulando la anotación de SpringBoot)"
    },
    { type: "subtitle", content: "Clase CourseCreator:" },
    {
      type: "code",
      content: "@Service\npublic final class CourseCreator {\n    private final CourseRepository repository;\n\n    public CourseCreator(CourseRepository repository) {\n        this.repository = repository;\n    }\n\n    public void create(String id, String name, String duration) {\n        Course course = Course.create(id, name, duration);\n\n        repository.save(course);\n    }\n}"
    },
    {
      type: "text",
      content: "Y puesto que lo que queremos es precisamente guardar un Curso, necesitaremos que reciba la Interface del repositorio donde vamos a persistirlo (Tal como vimos en el curso de DDD Aplicado, este nivel de indirección nos permitirá falsear la implementación del repositorio en tiempo de test)"
    },
    {
      type: "text",
      content: "También venimos hablando que nuestros repositorios deben hablar siempre en el mismo nivel de abstracción, es decir, siempre van a recibir como argumento un Agregado o, en caso de búsqueda, el identificador único del recurso, por lo que al llamar al método save() del repositorio tendremos que pasarle una instancia de Curso"
    },
    { type: "subtitle", content: "Creación del Test Unitario ✅" },
    {
      type: "text",
      content: "Mimificando lo que acabamos de crear en real, tendremos su correspondiente test unitario en en la carpeta /application dentro del módulo de cursos en nuestro directorio de tests"
    },
    {
      type: "text",
      content: "Lo primero que tendremos que hacer será instanciar este caso de uso, pero ojo 👀, aquí es donde está la trampa, ya que no le estaremos pasando la implementación real del repositorio sino un 'test double' con mockito. Lo que queremos precisamente es verificar el paso de mensajes entre el caso de uso y el repositorio, no nos interesa en este test comprobar si efectivamente estamos guardando el curso en BD"
    },
    {
      type: "text",
      content: "Así, lo que comprobamos en el test es justamente que se llama al menos una vez al método save() del repositorio inyectado recibiendo un curso igual que el que hemos instanciado con los mismos parámetros que recibe el caso de uso"
    },
    {
      type: "text",
      content: "Será necesario implementar el equals() para que compare el Curso por sus valores y no por identificador de la propia instancia"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: Implementación del repositorio en memoria y test de integración!"
    }
  ],
};
