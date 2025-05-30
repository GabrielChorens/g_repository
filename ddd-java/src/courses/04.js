export default {
  title: "04 Crear Endpoint de health check",
  videoId: "e53z1qsozO0",
  notes: [
    { type: "subtitle", content: "Crear Endpoint de health check" },
    {
      type: "text",
      content: "Una vez lista la configuración e integración con Gradle ya podemos empezar a tocar código. Un primer aspecto que debemos tener en cuenta es que podamos determinar que nuestro sistema funciona correctamente, para lo cual crearemos un Health Check ❤️"
    },
    {
      type: "text", 
      content: "Un Health Check consiste simplemente en un punto de entrada en nuestra aplicación que nos confirme que esta se está ejecutando en el servidor. Este tipo de controladores son utilizados habitualmente por los Load Balancer para comprobar periódicamente si el servidor está bien o por el contrario debe echarlo abajo y levantar uno nuevo"
    },
    {
      type: "text",
      content: "A diferencia de los health check, los controladores de tipo Status evalúan el sistema completo (incluyendo, por ejemplo, el acceso a BD), por lo que deben evitarse si lo único que queremos es comprobar si la aplicación se ha levantado bien"
    },
    {
      type: "text",
      content: "Recordar que la clase Starter será la principal desde la cual indiquemos que se trata de una aplicación de SpringBoot, donde debe 'escanear' las clases que podrán ser inyectadas 💉 y otras configuraciones a nivel del framework"
    },
    {
      type: "text",
      content: "Siguiendo un cierto razonamiento en cuanto a lo que queremos hacer, podemos llegar a la conclusión de que pretendemos crear un punto de entrada a través del cual se pueda verificar mediante una llamada HTTP que la aplicación está correctamente levantada. Esto se traducirá en que dentro de la carpeta 'controller' de nuestra aplicación (tendremos una carpeta por cada protocolo de comunicación que introduzcamos) crearemos otra para 'health_check' y, dentro de esta, la clase HealthCheckGetController que tal como vimos en el curso de DDD aplicado queremos que se acople en el naming al protocolo de comunicación utilizado"
    },
    { type: "subtitle", content: "Clase HealthCheckGetController:" },
    {
      type: "code",
      content: "@RestController\npublic final class HealthCheckGetController {\n\n    @GetMapping(\"/health-check\")\n    public HashMap<String, String> handle() {\n        HashMap<String, String> status = new HashMap<>();\n        status.put(\"status\", \"ok\");\n\n        return status;\n    }\n\n}"
    },
    {
      type: "text",
      content: "Lo primero que encontramos en esta clase es la anotación 'RestController' que nos permitirá que sea identificada como un controlador por SpringBoot. Además añadimos la ruta de entrada con la anotación 'GetMapping' y lanzamos un HashMap como respuesta indicando que todo está OK 👌(El propio SpringBoot lo serializará a Json mágicamente)"
    },
    {
      type: "text",
      content: "El hecho de hacer explícito el verbo Http en el nombre de la clase y limitar el número de métodos de entrada subyace a la intención de acotar el acoplamiento lo máximo posible en la clase"
    },
    {
      type: "text",
      content: "Ya solo nos quedaría levantar la aplicación (o todas las aplicaciones) y hacer una llamada a la ruta /health-check y confirmar que todo va sobre ruedas 🙌"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: Añadir tests de aceptación con Spring Boot Runner!"
    }
  ],
};
