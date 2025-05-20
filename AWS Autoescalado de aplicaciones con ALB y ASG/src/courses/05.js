export default {
  title: "05 Creando nuestro primer ALB",
  videoId: "I_H-zxtUe8Y",
  notes: [
    {
      type: "text",
      content: "En este video crearemos nuestro primer ALB, usando algunos conceptos de los que hemos explicado en videos anteriores."
    },
    {
      type: "text",
      content: "Para ello crearemos target groups, que son grupos de servidores que contienen la misma aplicación, ya los que el balanceador de carga les enviará las peticiones que vienen de los usuarios."
    },
    {
      type: "text",
      content: "No podemos olvidarnos de las comprobaciones de estado o health checks, que harán que cuando un servidor deja de funcionar, el balanceador no le envíe tráfico y así los usuarios no vean errores."
    }
  ],
};
