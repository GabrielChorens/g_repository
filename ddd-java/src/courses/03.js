export default {
  title: "03 Monorepo multiproyecto con Gradle",
  videoId: "GMTYdt-i6dc",
  notes: [
    { type: "subtitle", content: "Monorepo multiproyecto con Gradle" },
    {
      type: "text",
      content:
        "Una vez tenemos claro la estructura de carpetas y sub-proyectos que queremos veamos cómo podemos hacerlo con la ayuda de Gradle 🐢",
    },
    { type: "subtitle", content: "Configurando Gradle 🐢" },
    {
      type: "text",
      content:
        "Lo primero que debemos hacer es indicar en el fichero settings.gradle los sub-proyectos (incluyendo el Shared Kernel) que requerirán las distintas aplicaciones que, por su parte, constituyen los proyectos 'padre'",
    },
    {
      type: "text",
      content:
        "Puesto que no estamos siguiendo la estructura estándar de directorios 📂, es importante que le indiquemos donde debe encontrar cada uno de estos contextos y los respectivos ficheros build.gradle sus preferencias y dependencias particulares",
    },
    {
      type: "text",
      content:
        "Este fichero settings será cargado por el build.gradle padre, que actúa como punto de entrada. Desde aquí añadiremos todo lo que aplicará tanto al proyecto padre como a los sub-proyectos (plugins, repositorios, dependencias)",
    },
    {
      type: "text",
      content:
        "Ojo 👀! esta tarea dentro de build.gradle puede resultar de mucha utilidad para identificar los path de los distintos proyectos 👌",
    },
    {
      type: "named_link",
      text: "build.gradle: Fichero de configuración de Gradle",
      url: "https://github.com/CodelyTV/java-ddd-skeleton/blob/3db5fffb7f0ff6cd7fef94b48eb07436ad493fad/build.gradle#L65-L75",
    },
    {
      type: "text",
      content:
        "También especificamos para los sub-proyectos la estructura de directorios que estaremos utilizando, ya que precisamente lo que queremos es trabajar con una estructura más simple y que nos diga más a nivel de Dominio que del lenguaje o el patrón que estemos utilizando",
    },
    {
      type: "text",
      content:
        "Por otra parte encontramos igualmente aquella configuración que solo afectará al proyecto padre (incluyendo de nuevo las especificaciones respecto a la ubicación de los directorios) tales como cual será la clase principal desde donde arrancará y las dependencias con los sub-proyectos",
    },
    {
      type: "text",
      content:
        "Dentro de cada sub-proyecto tendremos otro fichero build.gradle con la configuración propia de dependencias y preferencias que cada uno de los contextos requiera",
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content:
        "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇",
    },
    {
      type: "text",
      content:
        "¡Nos vemos en la siguiente lección: 👩‍⚕️ Health check de la aplicación: Nuestro primer endpoint!",
    },
  ],
};
