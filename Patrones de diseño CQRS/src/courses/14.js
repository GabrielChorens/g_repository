export default {
  title: "14 FAQ 2",
  videoId: "gPfnC5WpOgw",
  notes: [
    {
      type: "subtitle",
      content: "Validación con CommandBus asíncrono"
    },
    {
      type: "text", 
      content: "Una duda super interesante al plantearnos introducir un CommandBus asíncrono en nuestra aplicación es ¿Cómo hacemos si necesitamos validar los datos y responder al front si alguno es incorrecto? (Ej. emails con formato incorrecto, un nombre demasiado corto…)"
    },
    {
      type: "subtitle",
      content: "¿Es necesaria la asincronía?"
    },
    {
      type: "text",
      content: "Lo primero que deberíamos considerar es si realmente nuestra aplicación requiere realmente que añadamos esa complejidad extra ¿Se trata de una operación con un coste computacional demasiado alto? 🤔 Si se trata de una tarea de este tipo (Ej. subir un video, exportar información compleja de procesar a un fichero…) Si que resultará interesante apostar por esta opción, por supuesto habrá otros escenarios en los que no nos compense y podamos optar por una solución síncrona 🏃"
    },
    {
      type: "subtitle",
      content: "Validación en el Controller"
    },
    {
      type: "text",
      content: "Igualmente, aunque estemos trabajando con un CommandBus asíncrono, una solución para validar los datos de forma sencilla es hacerlo desde el mismo Controller, para ello podemos hacer uso de cualquier librería ligera de validación con la que contrastar si los datos vienen con un formato correcto y responder al front rápidamente"
    },
    {
      type: "text",
      content: "Aquí el vídeo que comentamos al respecto de compartir una clase Validator entre Controller y Value Objects"
    },
    {
      type: "text",
      content: "Como hablábamos en este otro video, entendemos que el objetivo de la validación será diferente en el controller (dar una respuesta rápida al usuario por motivos de UX) y en el dominio (mantener las restricciones de integridad), por lo que consideramos que no tendría mucho sentido compartir el mismo Validator para ambos casos 🙅"
    },
    {
      type: "subtitle",
      content: "Validaciones complejas"
    },
    {
      type: "text",
      content: "En aquellos casos en los que la validación que necesitamos hacer es más compleja (Ej. consultar en BD si el usuario existe, comprobar si en los últimos 20 pedidos hubo algún descuento), la respuesta inevitablemente se hará esperar. Aquí podríamos optar por diferentes alternativas"
    },
    {
      type: "text",
      content: "👋🏻 Utilizar endpoints específicos para validar diferente información (Ej. si existe el email, si el producto está agotado…)"
    },
    {
      type: "text",
      content: "🛎️ Ir lanzando llamadas continuamente para comprobar si los datos del formulario tienen errores (Ojo 👀, esta opción no es recomendable cuando vamos a tener un tráfico elevado)"
    },
    {
      type: "text",
      content: "👥 Conectar ambas partes con un websocket para que el backend pueda responderle al front en cualquier momento con el resultado del procesamiento de los datos (Como en el caso de Stripe)"
    }
  ],
};
