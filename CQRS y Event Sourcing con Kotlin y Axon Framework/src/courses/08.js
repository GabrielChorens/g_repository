export default {
  title: "08 Carrito con Event Sourcing",
  videoId: "RNIisW0k4qU",
  notes: [
    {
      type: "text",
      content: "Hasta ahora teníamos en nuestro proyecto los endpoints conectados a los buses pero aún no habíamos desarrollado la lógica del dominio."
    },
    {
      type: "text",
      content: "Recordad que tenéis acceso al código del capítulo aquí:"
    },
    {
      type: "link", 
      content: "https://github.com/kotato/axon-examples/tree/carri..."
    },
    {
      type: "subtitle",
      content: "El carrito"
    },
    {
      type: "text",
      content: "Lo primero que vamos a hacer es diseñar los agregados de nuestro dominio. Nuestro proyecto es bastante sencillo pero ya incluye interacción entre diversos agregados. El primer de ellos va a ser el carrito de la compra. En este agregado van a recaer las operaciones de:"
    },
    {
      type: "text",
      content: "Creación del carrito.\nAñadir producto.\nEliminar producto.\nConfirmar carrito, creando un pedido que será pagado."
    },
    {
      type: "text",
      content: "Veamos cómo queda el esqueleto básico del agregado del carrito siguiendo lo que hemos explicado en el capítulo anterior."
    },
    {
      type: "image",
      content: "src/assets/08a.png"
    },
    {
      type: "text",
      content: "Ahora podemos ver como exponemos la creación del carrito y la operación de añadir un producto aplicando el evento que corresponde a cada una. Además también podemos ver los event sourcing handlers que recibirán cada uno de los eventos para su proceso y obtener un estado final del agregado."
    },
    {
      type: "image",
      content: "src/assets/08b.png"
    },
    {
      type: "text",
      content: "No vamos a poner aquí todas las operaciones. Las podéis ver en el código y en el video."
    },
    {
      type: "subtitle",
      content: "Proyección del carrito"
    },
    {
      type: "text",
      content: "El siguiente punto interesante es ver cómo vamos a proyectar el carrito de modo que podamos obtener un listado del mismo."
    },
    {
      type: "image",
      content: "src/assets/08c.png"
    },
    {
      type: "image",
      content: "src/assets/08d.png"
    },
    {
      type: "text",
      content: "Las capturas corresponden al caso de creación del carrito. Haremos algo parecido para el resto de operaciones, por favor, echad un vistazo al código y al video para ver más detalles."
    },
    {
      type: "subtitle", 
      content: "Confirmación del carrito"
    },
    {
      type: "text",
      content: "La operación de confirmar el carrito es tal vez la más compleja ya que implica varios agregados."
    },
    {
      type: "text",
      content: "Al confirmar el carrito tienen que ocurrir los siguiente:\n\nMarcar el carrito como confirmado.\nCrear pedido en estado en proceso en espera de que se produzca el pago.\nRealizar el pago por parte del usuario (este paso lo podemos simular en nuestro ejemplo).\nSi el pago se realiza correctamente, confirmar el pedido. En caso contrario marcar el pedido como fallido."
    },
    {
      type: "text",
      content: "Podemos intuir que a parte del agregado del carrito, van a aparecer otros dos agregados, el del pedido y el de pago."
    },
    {
      type: "text",
      content: "Estos nuevos agregados van a realizar operaciones suscribiéndose a eventos, es decir, usando event handlers. Concretamente el pedido será creado a consecuencia de la confirmación del carrito y el pago será creado a consecuencia de la creación del pedido y finalmente completado o rechazado por acción del usuario."
    },
    {
      type: "subtitle",
      content: "Interacción entre agregados"
    },
    {
      type: "text",
      content: "Cuando nos encontramos en un escenario donde existen más de un agregado que tienen que interactuar, surge la duda de cómo vamos a obtener los identificadores de los agregados de los que hay dependencia."
    },
    {
      type: "text",
      content: "Podríamos seguir la estrategia básica de esperar a que los agregados de los que depende el primer agregado, publiquen su evento de creación con su identificador y el identificador del primer agregado. Pero en ese caso estaríamos acoplando a las dependencias conocimiento de la existencia del primer agregado que generalmente puede no ser necesaria."
    },
    {
      type: "text",
      content: "Los dos principales inconvenientes de esta aproximación son:\n\nLimitamos poder componer los agregado secundarios con otros agregados. Pongamos como ejemplo el agregado que gestiona pagos. El concepto de pago en nuestro proyecto consiste en cobrar dinero de un usuario hacia nuestra empresa. Bajo ese concepto cabe imaginar que podríamos querer usar ese agregado no sólo para hacer el pago del carrito, también lo podríamos usar para pagar una tarifa plana de envio, una suscripción, un cheque regalo… Incluso podríamos llegar a tener el agregado en otro bounded context dónde se gestionaría todo lo referente a pagos con sus sistemas antifraude. Visto de este modo, que el agregado de pago no tenga dependencia del agregado del carrito parece una mejor opción, abierta a evolucionar.\nExiste mayor complejidad debido a la mutua dependencia entre agregados y tendremos que gestionar los identificadores que van en un sentido y en otro."
    },
    {
      type: "text",
      content: "La estratégia que vamos a usar en nuestro caso va a ser otra vez la ya mencionada: \"Tell, don't ask\"."
    },
    {
      type: "text",
      content: "A grandes rasgos estos son los pasos:\n\nEn la operación de confirmación aplicaremos el evento \"el carrito fue confirmado\" donde añadiremos el identificador del pedido.\nEl agregado de pedido, escuchará el evento anterior y aplicará el evento \"pedido fue creado\" dónde se incorporará el identificador de pago.\nEl agregado de pago, escuchará el evento anterior y aplicará el evento \"pago fue creado\".\nEl usuario podrá entonces proceder a realizar el pago y nuestra aplicación recibirá el típico callback por parte del banco (lo simularemos). En el agregado del pago se aplicará el evento \"pago realizado con éxito\" o \"pago fallado\".\nEl agregado de pedido, escuchará el evento anterior y actualizará el estado del pedido."
    },
    {
      type: "text",
      content: "Así resulta sencillo simplemente habilitar event handlers que escuchan si el pago se ha producido correctamente o no pudiendo saber a que pedido corresponde el pago, realizando una búsqueda por identificador de pago sobre nuestra proyección de pedidos."
    },
    {
      type: "text",
      content: "Además como extra, este planteamiento nos va a habilitar a usar un concepto avanzado que aunque no vamos a ver en el curso, resulta interesante conocer para aquellos que quieran profundizar e ir más allá. Se trata del concepto de sagas."
    },
    {
      type: "subtitle",
      content: "Veamos cada paso en código"
    },
    {
      type: "subtitle",
      content: "1. Marcar carrito como confirmado"
    },
    {
      type: "image",
      content: "src/assets/08e.png"
    },
    {
      type: "image",
      content: "src/assets/08f.png"
    },
    {
      type: "image",
      content: "src/assets/08g.png"
    },
    {
      type: "image",
      content: "src/assets/08h.png"
    },
    {
      type: "image",
      content: "src/assets/08i.png"
    },
    {
      type: "subtitle",
      content: "2. Crear pedido en estado en proceso"
    },
    {
      type: "image",
      content: "src/assets/08j.png"
    },
    {
      type: "image",
      content: "src/assets/08k.png"
    },
    {
      type: "image",
      content: "src/assets/08l.png"
    },
    {
      type: "image",
      content: "src/assets/08m.png"
    },
    {
      type: "subtitle",
      content: "3. Realizar pago"
    },
    {
      type: "image",
      content: "src/assets/08n.png"
    },
    {
      type: "image",
      content: "src/assets/08o.png"
    },
    {
      type: "image",
      content: "src/assets/08p.png"
    },
    {
      type: "image",
      content: "src/assets/08q.png"
    },
    {
      type: "subtitle",
      content: "4. Pago correcto/incorrecto"
    },
    {
      type: "image",
      content: "src/assets/08r.png"
    },
    {
      type: "text",
      content: "Pago correcto"
    },
    {
      type: "image",
      content: "src/assets/08s.png"
    },
    {
      type: "image",
      content: "src/assets/08t.png"
    },
    {
      type: "image",
      content: "src/assets/08u.png"
    },
    {
      type: "text",
      content: "Pago incorrecto"
    },
    {
      type: "image",
      content: "src/assets/08v.png"
    },
    {
      type: "image",
      content: "src/assets/08w.png"
    },
    {
      type: "image",
      content: "src/assets/08x.png"
    },
    {
      type: "subtitle",
      content: "Agregado"
    },
    {
      type: "image",
      content: "src/assets/08y.png"
    },
    {
      type: "subtitle",
      content: "5. Actualizar estado del pedido"
    },
    {
      type: "image",
      content: "src/assets/08z.png"
    },
    {
      type: "text",
      content: "Pago correcto"
    },
    {
      type: "image",
      content: "src/assets/08z1.png"
    },
    {
      type: "image",
      content: "src/assets/08z2.png"
    },
    {
      type: "text",
      content: "Pago incorrecto"
    },
    {
      type: "image",
      content: "src/assets/08z3.png"  
    },
    {
      type: "image",
      content: "src/assets/08z4.png"
    },
    {
      type: "subtitle",
      content: "Agregado"
    },
    {
      type: "image",
      content: "src/assets/08z5.png"
    },
  ],
};
