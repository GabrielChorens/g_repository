export default {
  title: "58 Alternativas de cache en servidor",
  videoId: "WfCBWFMb7B4",
  notes: [
    { type: "subtitle", content: "🤷‍ Alternativas de cache en servidor" },
    {
      type: "text",
      content: "A nivel de Servidor también contamos con distintas alternativas que podríamos diferenciar en base a dónde las ubicaríamos y, por supuesto, cada una de ellas nos ofrecerá diferentes ventajas e inconvenientes"
    },
    { type: "subtitle", content: "1- Caché delante del Controller" },
    {
      type: "text", 
      content: "Esta opción implica situar una pieza por delante del Controller (Por ejemplo Varnish o Akamai), lo que entendemos como Proxys reversos. Tiene a favor que no necesitaremos picar nada para disponer de esta caché, pero por contra, al ser una pieza externa a nuestra aplicación, estaremos perdiendo el control de lo que sucede en ella 🤔"
    },
    {
      type: "text",
      content: "A diferencia de lo que veíamos con la caché de cliente no será necesario que haya un primer cliente para que se cachée el contenido, de modo que podemos forzarla y que el primer acceso que recibamos ya se beneficie de ello (Especialmente útil cuando necesitamos que los scrapers recorran nuestro sitio web lo más rápido posible), además de evitar saturaciones en sistemas de alta concurrencia"
    },
    { type: "subtitle", content: "2- Caché delante del Application Service" },
    {
      type: "text",
      content: "Otra opción que tenemos es llevar la gestión de la caché a un Middleware en el Controller o entre éste y el Application Service y que sea este middleware quien tenga cacheado el resultado de las Queries en un Redis u otro almacenamiento rápido."
    },
    {
      type: "text", 
      content: "El beneficio que nos aporta esta alternativa es poder centralizar en un punto concreto la caché, lo que a su vez también será un problema ya que el middleware se encargaría de cachear todas las queries y gestionar la configuración de cada una se hace mas tediosa 🤯"
    },
    {
      type: "text",
      content: "Por otra parte, a diferencia de lo que veíamos en un proxy reverso, esta alternativa tampoco nos permite cachear directamente toda la respuesta (lo que nos ahorraría el coste computacional de generarla)"
    },
    { type: "subtitle", content: "3- Caché dentro del Application Service" },
    {
      type: "text",
      content: "Una tercera alternativa podría ser llevar la caché dentro del propio application service, no obstante consideramos que no estaría bien contaminar el caso de uso con el concepto de caché ya que ésta no es algo que pertenezca realmente a nuestro Dominio"
    },
    {
      type: "text",
      content: "Debemos considerar que si estamos generando esta lógica en el caso de uso, seguramente se deba a que la infraestructura concreta que estamos utilizando va lenta, es decir, si esa lógica resulta innecesaria en el momento en que cambiamos ese detalle de infraestructura nos vamos a encontrar en un escenario en el cual un detalle de implementación está condicionando nuestro caso de uso 🤦‍♂️"
    },
    { type: "subtitle", content: "4- Caché en la capa de Infraestructura" },
    {
      type: "text",
      content: "Esta alternativa supondría llevar esta lógica a la propia capa de infraestructura (Por ejemplo utilzando un decorador de nuestra implementación de MySQL) sin que el propio caso de uso se vea afectado y es la opción por la cual nos decantaríamos particularmente (entraremos en más detalle en el siguiente video)"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: ✌️ Cache de servidor: Optimizar casos de uso sin ensuciar el dominio!"
    }
  ],
};
