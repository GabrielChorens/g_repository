export default {
  title: "05 Anadir tests de aceptacion con Spring Boot Runner",
  videoId: "CJnNwSeAgRs",
  notes: [
    { type: "subtitle", content: "Añadir tests de aceptación con Spring Boot Runner" },
    {
      type: "text",
      content: "Tal como vimos en el curso de testing, seguimos una estrategia de desarrollo de tests basada en las capas de Arquitectura Hexagonal 🎯"
    },
     { type: "image", content: "src/assets/05.png" },
    {
      type: "text",
      content: "Esta estrategia se traduce en que vamos a definir qué alcance tendrá cada uno de los distintos tipos de tests en base a las capas que van a verse afectadas:"
    },
    {
      type: "text",
      content: "Unit Test: Comienzan en nuestro Caso de uso (Entendiendo cada Caso de uso como una 'unidad') y validarán precisamente la lógica que hay dentro de este con independencia del número de puntos de entrada existentes y sin alcanzar la implementación de la infraestructura\n\nIntegration Test: Se encargan de validar nuestra Infraestructura (Acceso a BD, Conexiones a colaboradores externos…)\n\nAcceptance Test: Implica todo el flujo de la petición, incluyendo el propio punto de entrada (controladores, comandos…)"
    },
    {
      type: "text",
      content: "Visto esto, entendemos que para validar nuestro Health Check necesitaremos justamente un test de aceptación. Como estamos mimificando la estructura de carpetas real en la de tests, crearemos éste en la carpeta '/apps/mooc/backend/controller/health_check' del directorio de tests"
    },
    {
      type: "subtitle",
      content: "Test HealthCheckGetControllerShould:"
    },
    {
      type: "code",
      content: "final class HealthCheckGetControllerShould extends RequestTestCase {\n    @Test\n    void check_health_check_is_working_ok() throws Exception {\n        assertResponse(\"/health-check\", 200, \"{'application':'mooc_backend','status':'ok'}\");\n    }\n}"
    },
    {
      type: "text",
      content: "Lo primero que observamos en el test es que estamos heredando de RequestTestCase (en el repo podéis encontrarla como MoocApplicationTestCase), que se trata de una clase custom propia en la que tenemos toda la magia de Spring necesaria para simular una Request Http (Así dejamos encapsulado todo el acoplamiento en Infraestructura dejando limpio nuestro dominio)"
    },
    {
      type: "text",
      content: "Ojo 👀, en este caso no nos compensa realmente hacer uso de la composición sobre la herencia, ya que no vamos a tener un punto donde introducirnos y falsear una implementación (como vimos con SOLID)"
    },
    {
      type: "text",
      content: "Finalmente, dentro del TestCase lo que haremos será simplemente hacer uso de nuestro método helper assertResponse() con el que simularemos una petición a la ruta especificada, pasándole además el StatusCode y la Response esperada"
    },
    {
      type: "text",
      content: "🐢Este tipo de tests requieren levantar por detrás toda la infraestructura necesaria, por lo que, aunque los tests en si mismos corran raudos y veloces 🐇, siempre tendrán una demora de tiempo para esa preparación inicial"
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
      content: "¡Nos vemos en la siguiente lección: ♻️ Desarrollo Outside-in: Implementación del caso de uso para crear curso!"
    }
  ],
};
