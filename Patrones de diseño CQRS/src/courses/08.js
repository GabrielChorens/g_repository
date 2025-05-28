export default {
  title: "08 IDs desde fuera",
  videoId: "OeGDv5QtcDA",
  notes: [
    {
      type: "subtitle",
      content: "Posibles responsables para generar el identificador"
    },
    {
      type: "subtitle",
      content: "MySqlVideoRepository"
    },
    {
      type: "text",
      content: "En este caso haríamos el insert sin especificar el identificador del vídeo. A posteriori sería cuando le pediríamos a MySQL el último identificador generado, o todos los datos del vídeo recién creado incluyendo el ID que se le ha asignado."
    },
    {
      type: "subtitle",
      content: "Contras"
    },
    {
      type: "text",
      content: "Delegamos la responsabilidad de gestionar los identificadores a un componente de infraestructura. Desde el momento en el que movemos esto a infraestructura, sería un aspecto más a tener en cuenta a la hora de cambiar este componente. Con lo cuál, dificultaría la transición de un adaptador a otro."
    },
    {
      type: "text",
      content: "Representaciones de recursos inconsistentes en cliente. El cliente nos hace la petición sin el identificador, ya que es el backend quien general el ID. Esto implica que el cliente permita que el ID sea nulo en ciertos momentos."
    },
    {
      type: "text",
      content: "Complejidad adicional en testing. Desde el momento en el que la generación de identificadores no es determinista, no podemos comparar que todos los atributos de nuestros recursos sean iguales. Lo que deberemos hacer será comprobar que todos los atributos, a excepción del identificador, coinciden con los del recurso que le hemos pedido al sistema que cree."
    },
    {
      type: "subtitle",
      content: "VideoCreator (servicio / caso de uso)"
    },
    {
      type: "subtitle",
      content: "Beneficios"
    },
    {
      type: "text",
      content: "Ahora ya no tenemos el primero de los contras anteriores. Podemos cambiar la infraestructura manteniendo la lógica de gestión de identificadores."
    },
    {
      type: "subtitle",
      content: "Contras"
    },
    {
      type: "text",
      content: "Seguimos teniendo los problemas que analizábamos antes en términos de inconsistencia en clientes, y complejidad de testing. No obstante, sí que es cierto que en este caso podríamos encapsular la lógica de generación de IDs en un servicio para poder hacer un doble de test y que éste fuera determinista. No obstante, estaríamos añadiendo una complejidad tanto al testing como al código de producción que nos podemos ahorrar."
    },
    {
      type: "subtitle",
      content: "Cliente (app, JS del frontend, etc.)"
    },
    {
      type: "subtitle",
      content: "Beneficios"
    },
    {
      type: "text",
      content: "Mantenimiento y cambiabilidad: Podemos cambiar cualquier componente de infraestructura que ello no implicará tener que replicar la lógica de gestión de identificadores, ni tenerla duplicada entre todos los adaptadores."
    },
    {
      type: "text",
      content: "Testing: Ya podemos comparar la entidad que le pedimos crear a nuestro sistema de forma íntegra (sin obviar el atributo de ID)."
    },
    {
      type: "text",
      content: "Integridad de representación de recursos en cliente: El cliente va a poder establecer el atributo del identificador como obligatorio (no null) ya que en todo momento va a disponer de éste."
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente vídeo!"
    }
  ],
};
