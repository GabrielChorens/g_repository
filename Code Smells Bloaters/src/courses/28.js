export default {
  title: "28 Refactorizando La Clase User",
  videoId: "wUqOpjLN7VY",
  notes: [
    {
      type: "subtitle",
      content: "Refactorizando bloaters code smells"
    },
    {
      type: "text",
      content: "Llegados a este punto ya hemos visto las distintas técnicas de refactoring que podemos aplicar para los bloaters code smells y el por qué de la necesidad de aplicar dichas técnicas, así que ahora veremos el proceso de una forma más global desde el punto de partida hasta el estado final del refactor"
    },
    {
      type: "text", 
      content: "El ejemplo que utilizaremos lo podéis encontrar aquí y se trata del mismo escenario que vimos en videos anteriores"
    },
    {
      type: "subtitle",
      content: "Clase UserController (estado inicial):"
    },
    {
      type: "code",
      content: "final class UserController\n{\n    public function post(string $emailAddress): User\n    {\n        if ('' === $emailAddress) {\n            throw new InvalidArgumentException('The email address is empty');\n        }\n\n        if (!filter_var($emailAddress, FILTER_VALIDATE_EMAIL)) {\n            throw new InvalidArgumentException(\"The email address <$emailAddress> is not valid\");\n        }\n\n        if (!(strpos($emailAddress, '@yahoo') || strpos($emailAddress, '@gmail') || strpos($emailAddress, '@outlook'))) {\n            throw new InvalidArgumentException(\"The email address <$emailAddress> has not a common provider\");\n        }\n\n        return new User($emailAddress);\n    }\n}"
    },
    {
      type: "text",
      content: "Lo primero que detectamos en este controlador son una serie de bloques if que bien podríamos extraer a cláusulas de guarda, de hecho las excepciones que lanzan ya nos están sugiriendo bastante que apliquemos este refactor. Lo mismo sucede en el caso del NewsletterController"
    },
    {
      type: "subtitle",
      content: "👮‍♂️ Extrayendo cláusulas de guarda"
    },
    {
      type: "text",
      content: "Podéis ver aquí cómo quedaría nuestro controlador una vez extraídas las cláusulas de guarda 👮"
    },
    {
      type: "text",
      content: "En este paso hemos definido estas cláusulas como métodos estáticos ya que al no depender del estado, de momento, los vendremos utilizando tanto en la propia clase UserController como en NotificationsController. Desde ambos puntos de entrada se llama a ensureEmaiIsValid(), el cual engloba las tres cláusulas o condiciones que veíamos inicialmente"
    },
    {
      type: "subtitle",
      content: "👤 Empujando validaciones hacia User"
    },
    {
      type: "text",
      content: "El siguiente paso podéis verlo aquí y consiste en empujar la lógica de la validación del email hacia nuestro dominio, moviéndola dentro de la clase User 🏗"
    },
    {
      type: "text",
      content: "Puesto que sólo hemos movido de sitio estos métodos (move method), en este punto el NewsletterController pasa de llamar a un método estático de UserController para hacerlo a uno de User, es decir, hemos pasado la dependencia entre controladores a una dependencia con un modelo más interno"
    },
    {
      type: "subtitle",
      content: "✉️ Definiendo Value Objects"
    },
    {
      type: "text",
      content: "Como se puede ver en este paso, hemos creado un Value Object EmailAddress que es quien recogerá las validaciones de que un email es válido. Por otro lado mantenemos la validación de que una dirección de email (emailAddress) pertenezca a un proveedor común justo donde estaba, ya que un email puede ser válido aunque pertenezca a un proveedor distinto"
    },
    {
      type: "text",
      content: "Un detalle importante es que al llevarnos estas validaciones/reglas de integridad al momento de instanciación de las clases estamos evitando que, por definición, se pueda instanciar cualquier clase inválida de este tipo, con lo que podemos asumir en todo momento que si recibimos un emailAddress, este cumple con las reglas"
    },
    {
      type: "subtitle",
      content: "👤✉️ Moviendo lógica a UserEmailAddress"
    },
    {
      type: "text",
      content: "Aún podemos hilar un poco más fino, tal como vemos aquí y empujar a UserEmailAddress aquella lógica particular de validación del Email para los usuarios y evitar así que la clase User asuma esa responsabilidad"
    },
    {
      type: "text",
      content: "Como se puede ir viendo, aunque de inicio hayamos estado definiendo funciones públicas y estáticas, el estado final que perseguimos es justamente el opuesto: que nuestros métodos sean lo más privados posible y evitar cualquier leak de información hacia el exterior"
    },
    {
      type: "text",
      content: "Notese que hemos llamado a la clase 'UserEmailAddress' y no 'UserEmail' con toda la intención, ya que en este caso estamos tratando únicamente con la dirección de correo y no con un correo completo (asunto, cuerpo, destinatarios…)"
    },
    {
      type: "subtitle",
      content: "Clase UserController (estado final):"
    },
    {
      type: "code",
      content: "final class UserController\n{\n    public function post(string $emailAddress): User\n    {\n        return new User(new UserEmailAddress($emailAddress));\n    }\n}"
    },
    {
      type: "text",
      content: "El estado final del controlador es mucho más conciso y limpio, habiéndo encapsulado la responsabilidad de las validaciones a cada Value Object y evitado todo el acoplamiento que tenía inicialmente"
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?"
    },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido de este video o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: ✨ Qué pasa cuando no hay clases: JavaScript te miro a ti!"
    }
  ],
};
