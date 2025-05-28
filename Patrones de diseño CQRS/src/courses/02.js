export default {
  title: "02 Qué es un Command",
  videoId: "tOfrgo7YYbM",
  notes: [
    {
      type: "subtitle",
      content: "Qué no es un Command (en CQRS)"
    },
    {
      type: "text",
      content: "Estamos acostumbrados que al escuchar Command nos venga a la cabeza un comando de CLI, pero en el contexto de CQRS no es así."
    },
    {
      type: "text",
      content: "También se nos puede pasar por la cabeza la definición de Command del GoF (libro Design Patterns), una forma de encapsular la lógica de nuestro dominio en una clase autocontenida que sea autoejecutable, pero en este caso, tampoco es así."
    },
    {
      type: "image",
      content: "http://goats.con.com/images/merge-hell.gif"
    },
    {
      type: "subtitle",
      content: "Qué es un Command"
    },
    {
      type: "text",
      content: "En CQRS, un Command representa la intención de realizar una operación en nuestro sistema que acabe modificando el estado de tal."
    },
    {
      type: "subtitle",
      content: "Cuando nos viene bien utilizarlo"
    },
    {
      type: "text",
      content: "Muchas veces se dice que no has de hacer CQRS si lo que vas a montar es un blog, pero como todo en esta vida, depende."
    },
    {
      type: "text",
      content: "Si vas a construir o gestionas un blog con muchísimo tráfico, CQRS encaja muy bien dentro de tu aplicación, ya que por términos de rendimiento nos aporta de gratis poder realizar tareas asíncronas (usando una implementación asíncrona del CommandBus)."
    },
    {
      type: "text",
      content: "También nos vine muy bien trabajar con este patrón cuando tenemos equipos grandes, ya que al tener separado lo que son intenciones de consultas nos ahorraremos muchos merge hell's :)"
    },
    {
      type: "subtitle",
      content: "Ejemplo"
    },
    {
      type: "text",
      content: "Fuera de la teoría, el Command en sí no es más que un DTO (objeto de transferencia de datos) el cuál representa la acción que queremos hacer. Por ejemplo, si quisiéramos cambiar el nombre de un usuario podríamos tener un Command tal que:"
    },
    {
      type: "code",
      content: "final class RenameUserCommand extends Command\n{\n    private $userId;\n    private $newName;\n    public function __construct(string $userId, string $newName)\n    {\n        $this->userId  = $userId;\n        $this->newName = $newName;\n    }\n    public function userId(): string\n    {\n        return $this->userId;\n    }\n    public function newName(): string\n    {\n        return $this->newName;\n    }\n}"
    },
    {
      type: "text",
      content: "Este Command nos llegaría a nuestro CommandHandler, el cuál crearía dos Value Objects: UserId y UserName (de esta forma estaríamos validando que los valores del Command cumplen con los requisitos de nuestro dominio)."
    },
    {
      type: "text",
      content: "Luego el CommandHandler enviaría estos datos al caso de uso, el cuál ya se encargaría de ir al Repositorio para recuperar el usuario, cambiarle el nombre, volverlo a persistir y luego lanzar el evento de nombre modificado."
    },
    {
      type: "subtitle",
      content: "Enlaces relacionados"
    },
    {
      type: "named_link",
      text: "Is a CQRS Command = to a GoF Command?",
      url: "http://danielwhittaker.me/2015/05/25/is-a-cqrs-command-gof-command/"
    },
    {
      type: "named_link",
      url: "https://github.com/CodelyTV/cqrs-ddd-php-example/blob/master/src/Context/Video/Module/Video/Application/Create/CreateVideoCommand.php",
      text: "Ejemplo de Command"
    },
    {
      type: "subtitle",
      content: "Conclusión"
    },
    {
      type: "text",
      content: "Utilizar Commands nos ayuda a reutilizar el código de una manera muy sencilla. También hemos visto que se adapta muy bien cuando tenemos aplicaciones que exigen un alto rendimiento y cuando tenemos equipos grandes."
    }
  ],
};
