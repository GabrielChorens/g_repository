export default {
    title: "12 Unificando nuestros casos de uso CommandBus",
    videoId: "6JNkywDkzZw",
    notes: [
        { type: "subtitle", content: "El patrón Command Bus" },
        { type: "text", content: "Sin ánimo de profundizar en CQSCQRS con todo lo que ello implica (beneficios y compensaciones de dicha arquitectura), entendemos que lo que sí podría suceder mientras extendemos nuestra aplicación es que observemos un conjunto de acciones que queremos ejecutar de forma transversal al caso de uso y al punto de entrada específico." },
        { type: "link", content: "https://es.wikipedia.org/wiki/Command%E2%80%93query_separation" },
        { type: "text", content: "Algunas ideas podrían ser:" },
        { type: "text", content: "• Registrar (logear) lo que sucede en nuestro sistema (qué acciones, cuándo, etc)." },
        { type: "text", content: "• Aplicar reglas de autorización (ACL, RBAC, etc)." },
        { type: "link", content: "https://es.wikipedia.org/wiki/Lista_de_control_de_acceso" },
        { type: "link", content: "https://en.wikipedia.org/wiki/Role-based_access_control" },
        { type: "text", content: "• Transaccionalidad." },
        { type: "text", content: "Es por ello por lo que refactorizaremos nuestros casos de uso, y para ello vamos a usar el patrón Command y su correspondiente Command Bus." },
        { type: "link", content: "https://es.wikipedia.org/wiki/Command_(patr%C3%B3n_de_dise%C3%B1o)" },
        { type: "text", content: "Además, como veremos en los ejemplos de código, esto nos aportará otros beneficios colaterales, como por ejemplo la reducción de las dependencias de nuestro servidor HTTP ya que, en lugar de tener que inyectarle todos y cada uno de los servicios de aplicación para cada uno de los controladores, ahora solo tendremos que inyectarle el Command Bus." },
        { type: "text", content: "Consecuentemente, nuestros controladores HTTP quedarán reducidos a la mínima expresión, pues ahora solo serán los responsables de convertir las peticiones HTTP entrantes (JSON, o lo que sea) en comandos y de llamar al Command Bus." },
        { type: "subtitle", content: "Implicaciones" },
        { type: "text", content: "Grosso modo los cambios que vamos a tener que realizar en nuestra aplicación serían:" },
        { type: "text", content: "• Definir un comando (DTO) para cada uno de nuestros casos de uso, con todos los parámetros necesarios para la ejecución del mismo." },
        { type: "text", content: "• Crear una pieza intermedia (command handler), a la cual se le inyectará el servicio de aplicación, y que recibirá el comando anteriormente mencionado como parámetro de entrada." },
        { type: "text", content: "• Si un comando, por lo tanto, será el responsable de la ejecución del caso de uso (o application service) en base a los parámetros del comando entrante." },
        { type: "text", content: "• Adaptar nuestro servidor HTTP para que, en lugar de recibir inyectado y ejecutar el caso de uso directamente, y pasen a construir dicho comando y llamarlo por el bus que recibirán inyectado en su lugar." },
        { type: "subtitle", content: "Command Bus" },
        { type: "text", content: "Para que todo lo anteriormente descrito funcione, nos hace falta una pieza fundamental: el command bus. Dicha pieza es la encargada de mapear cada uno de los comandos con su correspondiente command handler, de modo que, cuando cualquiera de los controladores HTTP (o cualquier otro punto de entrada), lance un comando a través del bus, este internamente invoque el command handler descrito anteriormente." },
        { type: "subtitle", content: "In-memory" },
        { type: "text", content: "Si bien en el entorno de algunos lenguajes de programación tenemos implementaciones populares de este patrón (en PHP, por ejemplo, tenemos Tactician o el propio Symfony Messenger), en Go nos encontramos con una librería bastante específica y ligeramente típica), sin generics y relativamente joven." },
        { type: "link", content: "https://tactician.thephpleague.com/" },
        { type: "link", content: "https://symfony.com/doc/current/messenger.html" },
        { type: "text", content: "Es por ello que la solución más sencilla para el propósito formativo de este curso ha sido hacer una implementación custom en memoria que podéis encontrar junto a los ejemplos de código." },
        { type: "text", content: "Sin embargo, queremos dejar claro que se trata tan solo de eso, un ejemplo, y que ni mucho menos está pensada para ser un modelo para una aplicación en producción, pues hay muchos aspectos que se deberían definir y controlar de forma apropiada antes de poder hacerlo (sincronía vs asincronía, concurrencia y accesos, etc)." }
    ]
}; 