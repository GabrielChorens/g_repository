export default {
  title: "07 Implementación de la infraestructura de Event Sourcing",
  videoId: "MmemmGc_kIc",
  notes: [
    {
      type: "text",
      content:
        "Lo único que necesitamos para trabajar con Event Sourcing va a ser un agregado y configurar su repositorio. Para ello Axon nos lo pone fácil.",
    },
    {
      type: "text",
      content:
        "Crear un agregado simplemente va a consistir en crear una clase y anotarla con @Aggregate.",
    },
    {
      type: "text",
      content:
        "También vamos a tener que indicar qué propiedad de la clase va a ser el identificador y para ello la anotaremos con @AggregateIdentifier.",
    },
    {
      type: "image",
      content: "src/assets/07a.png",
    },
    {
      type: "text",
      content:
        "Una vez ya tenemos la base del agregado ya podemos darle vida y “aplicarle” eventos y escribir los handlers que actualizarán el estado del agregado.",
    },
    {
      type: "image",
      content: "src/assets/07b.png",
    },
    {
      type: "text",
      content:
        "Para que el agregado puede almacenar los eventos que componen su estado final vamos a necesitar definir su repositorio. Veamos cómo:",
    },
    {
      type: "image",
      content: "src/assets/07c.png",
    },
    {
      type: "image",
      content: "src/assets/07d.png",
    },
  ],
};
