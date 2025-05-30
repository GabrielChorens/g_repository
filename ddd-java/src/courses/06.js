export default {
  title: "06 Implementacion del test de aceptacion y controller",
  videoId: "ZlDqFKcDpFc",
  notes: [
    { type: "subtitle", content: "Implementación del test de aceptación y controller" },
    {
      type: "text",
      content: "Ya tenemos implementado un health check que nos permita comprobar que la aplicación se está ejecutando correctamente y el objetivo que planteamos ahora es crear el caso de uso para la publicación de un nuevo curso, para lo cual siguiendo lo que vimos en el curso de CQRS, le estaremos pasando desde fuera el identificador del recurso 📥"
    },
    { type: "subtitle", content: "Test de Aceptación ✅" },
    { type: "subtitle", content: "Test CoursesPutControllerShould:" },
    {
      type: "code",
      content: "public final class CoursesPutControllerShould extends MoocApplicationTestCase {\n    @Test\n    void create_a_valid_non_existing_course() throws Exception {\n        assertRequestWithBody(\n            \"PUT\",\n            \"/courses/1aab45ba-3c7a-4344-8936-78466eca77fa\",\n            \"{\\\"name\\\": \\\"The best course\\\", \\\"duration\\\": \\\"5 hours\\\"}\",\n            201\n        );\n    }\n}"
    },
    {
      type: "text",
      content: "Crearemos el test de aceptación dentro del directorio de aplicación de Mooc en test (Podemos ver en el propio nombre del test cómo seguimos haciendo explícito el protocolo de comunicación del punto de entrada). Utilizaremos el método 'helper' assertRequestWithBody() para simular la petición PUT, pasándole el identificador en la url y el body con los campos necesarios, esperando que nos devuelva un StatusCode 201 (Created)"
    },
    { type: "subtitle", content: "Creando el Controller 💂‍♂️" },
    {
      type: "text",
      content: "Como vimos en el caso del Health Check, crearemos un directorio '/courses' dentro de los controladores de la aplicación de Mooc y en dentro de éste el controlador `CoursesPutController``"
    },
    { type: "subtitle", content: "Clase CoursesPutController:" },
    {
      type: "code",
      content: "@RestController\npublic final class CoursesPutController extends ApiController {\n\n    @PutMapping(value = \"/courses/{id}\")\n    public ResponseEntity create(\n        @PathVariable String id,\n        @RequestBody Request request\n    ){\n        return new ResponseEntity<>(HttpStatus.CREATED);\n    }\n}\n\nfinal class Request {\n    private String name;\n    private String duration;\n\n    // ...\n}"
    },
    {
      type: "text",
      content: "En este caso necesitaremos indicar en elPutMapping que dentro de la ruta recibiremos el atributo id, definiéndolo en los parámetros como @PathVariable. Crearemos un POJO Request que usaremos posteriormente para recoger el cuerpo de la Request que recibamos en la petición (Indicado también en los parámetros con la anotación @RequestBody)"
    },
    {
      type: "text",
      content: "De momento iremos directamente a hacer que el test de aceptación pase (frente a un enfoque más purista de desarrollo con ATDD) porque a nuestro parecer este planteamiento tendremos mayor confianza en el proceso de desarrollo, asegurándonos que a nivel de infraestructura con el protocolo HTTP funciona correctamente, recogiendo los parámetros y devolviendo lo que debemos responder"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text", 
      content: "¡Nos vemos en el siguiente video: Implementación del test unitario y caso de uso!"
    }
  ],
};
