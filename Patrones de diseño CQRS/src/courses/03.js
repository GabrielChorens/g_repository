export default {
  title: "03 Qué es una Query",
  videoId: "tMjCqaO0Lt4",
  notes: [
    {
      type: "subtitle",
      content: "Qué no es una Query (en CQRS)"
    },
    {
      type: "text", 
      content: "Normalmente si alguien nos dice Query nos viene a la mente SQL. En el contexto de CQRS no es así."
    },
    {
      type: "text",
      content: "En CQRS, una Query representa la intención de pedir unos datos a nuestro sistema sin que ello acabe alterando el estado de tal."
    },
    {
      type: "subtitle",
      content: "Cuando nos viene bien utilizarlo"
    },
    {
      type: "text",
      content: "A la que tengamos un sistema con un volumen alto de tráfico ya nos podremos aprovechar de las ventajas que nos aporta."
    },
    {
      type: "text",
      content: "Al no tener side-effects nos viene muy bien para poder cachearlas."
    },
    {
      type: "subtitle",
      content: "Ejemplo"
    },
    {
      type: "text",
      content: "Fuera de la teoría, la Query en sí no es más que un DTO (objeto de transferencia de datos) el cuál representa la petición que queremos consultar. Por ejemplo, si quisiéramos ver el detalle de un vídeo:"
    },
    {
      type: "code",
      content: "final class FindVideoQuery implements Query\n{\n    private $id;\n    public function __construct(string $id)\n    {\n        $this->id = $id;\n    }\n    public function id(): string\n    {\n        return $this->id;\n    }\n}"
    },
    {
      type: "text",
      content: "Esta Query nos llegaría a nuestro QueryHandler, el cuál crearía el Value Object de VideoId (de esta forma estaríamos validando que la Query cumpla con los requisitos de nuestro dominio)."
    },
    {
      type: "text",
      content: "Luego el QueryHandler enviaría estos datos al caso de uso (VideoFinder), el cuál ya se encargaría de ir al Repositorio para recuperar el vídeo, devolverlo y transformarlo en un VideoResponse."
    },
    {
      type: "subtitle",
      content: "Enlaces relacionados"
    },
    {
      type: "named_link",
      text: "Ejemplo FindVideoQuery",
      url: "https://github.com/CodelyTV/cqrs-ddd-php-example/blob/12bda8290dda1b42294ea63d1c631ead1bdb376f/src/Mooc/Videos/Application/Find/FindVideoQuery.php"
    },
    {
      type: "subtitle",
      content: "Conclusión"
    },
    {
      type: "text",
      content: "El trabajar con Queries nos ayuda a separar mejor nuestro dominio, también nos permite cachear muy fácilmente (al no tener side-effects)."
    },
    {
      type: "text",
      content: "En el curso de Read Model\\Write Model veremos como podemos tener proyecciones las cuales nos ayudarán a que nuestras Queries sean más simples, veloces y eficaces."
    }
  ],
};
