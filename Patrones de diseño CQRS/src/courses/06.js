export default {
  title: "06 Nuestro primer command",
  videoId: "mohB_BoEpjQ",
  notes: [
    {
      type: "subtitle",
      content: "Creando un VideoLike"
    },
    {
      type: "text", 
      content: "En este caso seguiremos exactamente el mismo patrón que hemos visto en el vídeo anterior. Al final, esta justamente es la gracia de seguir un determinado patrón arquitectónico, una vez asimilamos la parte metódica del mismo, es cuestión de seguir bien los pasos."
    },
    {
      type: "subtitle",
      content: "Semántica"
    },
    {
      type: "text",
      content: "Es importantísimo definir la semántica que usaremos a la hora de implementar nuestro caso de uso. Ésta deberá estar reflejada en todos los puntos de nuestra aplicación. Desde lo más profundo como los Value Objects, agregados/entidades, Repositorios, Casos de uso, etc, hasta lo más externo como la propia URL y el controlador."
    },
    {
      type: "subtitle", 
      content: "Clases final por defecto"
    },
    {
      type: "text",
      content: "En nuestra opinión, es un enfoque más que valido asumir por defecto la \"presunción de culpabilidad\" en términos de herencia. Por lo tanto, en nuestro template de nuestro IDE, tendremos modificada la plantilla para crear nuevas clases de tal forma que por defecto incluya la keyword `final`."
    },
    {
      type: "text",
      content: "De esta forma hacemos que si alguien pretende heredar de nuestros Commands, CommandHandlers, y demás, se lo piense dos veces ya que ese componente no fue ideado para soportar herencia."
    },
    {
      type: "subtitle",
      content: "Named Constructors"
    },
    {
      type: "text",
      content: "En nuestros agregados usaremos la técnica de constructores semánticos, más información al respecto en este vídeo."
    },
    {
      type: "link",
      content: "https://codely.tv/screencasts/constructores-semanticos/"
    }
  ],
};
