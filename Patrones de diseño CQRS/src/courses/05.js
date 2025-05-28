export default {
  title: "05 Ejemplo implementación Command",
  videoId: "_WnYQS0S-HY",
  notes: [
    {
      type: "subtitle",
      content: "Creando un nuevo Vídeo",
    },
    {
      type: "subtitle",
      content: "Petición",
    },
    {
      type: "text",
      content:
        "En el curso de testing veremos más en detalle, pero por empezar por el principio (la petición POST para crear el vídeo), aquí tenéis el test de Behat (para gente no proveniente de PHP, es un framework de test de comportamiento como lo podría ser Cucumber, implementa un lenguaje Gerkin).",
    },
    {
      type: "subtitle",
      content: "Punto de entrada",
    },
    {
      type: "text",
      content:
        "El punto de entrada de nuestra aplicación será el Controlador encargado de recibir la petición POST. Este controlador lo único que hará será obtener los datos de la petición, y encapsularlos en el CreateVideoCommand para poder lanzarlo al CommandBus.",
    },
    {
      type: "subtitle",
      content: "CommandBus",
    },
    {
      type: "text",
      content:
        "Como decíamos, el controlador lanza el comando a la implementación concreta de la interface de dominio CommandBus que se le haya inyectado. En este caso, la implementación será la del CommandBusSync.",
    },
    {
      type: "text",
      content:
        "Este CommandBus tendrá el mapeo del handler correspondiente al que debe trasladar el comando.",
    },
    {
      type: "subtitle",
      content: "CommandHandler",
    },
    {
      type: "text",
      content:
        "En este caso, ejecutaremos el CreateVideoCommandHandler. Responsable como sabemos de recibir el comando con primitivos e instanciar objetos del dominio en forma de value objects como por ejemplo el VideoUrl. Estos Value Objects, como se ve en el ejemplo del VideoUrl son los encargados de encapsular la lógica correspondiente a cada uno de los elementos. En este caso concreto, validar que es una URL correcta.",
    },
    {
      type: "text",
      content:
        "Una vez ha instanciado todos los objetos de dominio, el CommandHandler sabe qué ApplicationService/UseCase/Action ejecutar ya que la tiene inyectada. Con lo cuál, invoca este servicio pasándole todos los parámetros necesarios con su tipo correspondiente.",
    },
    {
      type: "subtitle",
      content: "Caso de uso",
    },
    {
      type: "text",
      content:
        "Una vez el caso de uso recibe la petición, simplemente ejecuta la lógica correspondiente. En el caso del VideoCreator, instanciará la entidad/agregado Video, la guardará en el repositorio, y publicará el evento de dominio correspondiente.",
    },
    {
      type: "text",
      content:
        "El publicar el evento de dominio es un paso crítico ya que es lo que permitirá que luego nos subscribamos a este evento para poder almacenar estos datos como más nos convenga para el modelo de lectura (queries). Esto lo veremos en el curso de Read Model/Write Model.",
    },
  ],
};
