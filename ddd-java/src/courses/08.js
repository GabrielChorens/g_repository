export default {
  title: "08 Implementacion del repositorio en memoria y test de integracion",
  videoId: "1HSBc8GYKPM",
  notes: [
    { type: "subtitle", content: "Implementación del repositorio en memoria y test de integración" },
    {
      type: "text",
      content: "Llegados a este punto sólo nos quedaría añadir la implementación del repositorio (en este caso lo haremos en memoria) y su test de integración asociado para cerrar el ciclo de ATDD para el caso de uso de publicar un nuevo curso"
    },
    {
      type: "text", 
      content: "Esta implementación del repositorio la tendremos en Infraestructura. Recordemos que llevaremos a esta capa aquellas piezas de código que:"
    },
    {
      type: "text",
      content: "Toquen Entrada/Salida de datos 📤\nSe estén acoplando a un vendor externo 📦\nNecesitemos que nos ofrezca tolerancia al cambio a la hora de falsear la implementación 🤸‍♂️"
    },
    { type: "subtitle", content: "Clase InMemoryCourseRepository:" },
    {
      type: "code",
      content: "public final class InMemoryCourseRepository implements CourseRepository {\n\n    private HashMap<String, Course> courses = new HashMap<>();\n\n    @Override\n    public void save(Course course) {\n        courses.put(course.id(), course);\n    }\n\n    public Optional<Course> search(String id) {\n        return Optional.ofNullable(courses.get(id));\n    }\n\n}"
    },
    {
      type: "text",
      content: "Un primer detalle que podemos ver es que la interface del repositorio no tiene nada en el nombre que la identifique como tal, y esto es así porque al haberla definido como CourseRepository nos obligará a que cualquier implementación que hagamos de ella tenga que especificar en el nombre y de forma explícita 💬 las particularidades que tiene (En memoria, MySQL, o cualquier otra)"
    },
    {
      type: "text",
      content: "La implementación del método save() será tan simple como añadir el Curso recibido en un Map dentro de la clase con el id como clave. Por otra parte, de cara a la testabilidad de esa implementación nos interesará también crear un método search() que nos permita recuperar un Curso a partir del id y verificar si realmente se está guardando, devolviendo un Optional de null si no encuentra nada"
    },
    { type: "subtitle", content: "Test InMemoryCourseRepositoryShould:" },
    {
      type: "code",
      content: "final class InMemoryCourseRepositoryShould {\n    @Test\n    void save_a_course() {\n        InMemoryCourseRepository repository = new InMemoryCourseRepository();\n\n        repository.save(new Course(\"some-id\",\"some-name\",\"some-duration\"));\n    }\n\n    @Test\n    void return_an_existing_course() {\n      InMemoryCourseRepository repository = new InMemoryCourseRepository()\n        Course course = new Course(\"some-id\",\"some-name\",\"some-duration\");\n\n        repository.save(course);\n\n        assertEquals(Optional.of(course), repository.search(course.id()));\n    }\n\n    @Test\n    void not_return_a_non_existing_course() {\n      InMemoryCourseRepository repository = new InMemoryCourseRepository();\n        assertFalse(repository.search(\"non-existing-id\").isPresent());\n    }\n}"
    },
    {
      type: "text",
      content: "En el primer testCase simplemente comprobaremos que no se produce ningún error cuando guardamos el nuevo curso en BD, mientras que en el segundo lo que haremos una vez persistido será llamar al método search() para comprobar que efectivamente se ha guardado en nuestro repositorio en memoria, comparando el Curso que hemos pasado en el save() y lo que nos devuelva la búsqueda (Recordemos que nos devolverá un Optional de Course)"
    },
    {
      type: "text",
      content: "En nuestra opinión no vemos necesidad de eliminar el primer testCase pese a estar cubierto por el segundo porque de este modo, si falla al guardar saltará el error en ambos tests, mientras que si el problema está al recuperar sólo fallará el segundo test"
    },
    {
      type: "text",
      content: "Finalmente también aprovechamos para comprobar que, si intentamos buscar un curso con un id no existente, no nos devolverá nada"
    },
    {
      type: "text",
      content: "¡Ojo 👀! No olvidemos que para que Spring reconozca nuestras nuevas implementaciones para poder inyectarlas debemos añadirles la anotación @Service"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: 👤 Modelando el dominio: Agregado Course"
    }
  ],
};
