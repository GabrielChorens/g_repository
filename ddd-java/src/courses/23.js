export default {
  title: "23 Simplificando los tests con el uso de data providers",
  videoId: "vfIsTT1F5L4",
  notes: [
    { type: "subtitle", content: "Simplificando los tests con el uso de \"data providers\"" },
    {
      type: "text",
      content: "Hemos llegado a un punto en el que vemos que dentro de nuestras suites de tests estamos repitiendo tests cuyas diferencias no son tan particulares como para merecer estar aislados testcase diferente. Una solución para estas 'repeticiones' es el uso de data providers"
    },
    {
      type: "text", 
      content: "El objetivo de los data providers no es otro que el de disponer de una función que nos devuelva datos para ejecutar un test. Si vemos el test rápidamente nos daremos cuenta de que estamos lanzando un test para comprobar que se persiste en BD por cada tipo de Step y que cada uno de éstos sólo varía en la instanciación del tipo"
    },
    {
      type: "text",
      content: "Nuestro data provider lo que hará será precisamente proveernos de un listado con los diferentes tipos de Step, de modo que solo necesitaríamos un testcase save_a_step() en el cual iteraremos ese listado de Steps llamando al repositorio para guardarlos. Del mismo modo para el caso de recuperar un Step existente volveríamos a introducir dentro del bucle la persistencia y posterior recuperación de cada uno de los Steps"
    },
    {
      type: "text",
      content: "Si más adelante creamos más tipos de Steps sólo tendremos que añadir su correspondiente ObjectMother al listado de nuestro data provider 👌"
    },
    {
      type: "text",
      content: "A nivel de resultados hay que tener en cuenta un detalle 👀 y es que ahora, si fallan nuestros tests, será más difícil identificar cual de estos Steps ha sido el responsable y tendremos que prestar mayor atención (perdemos lo explícito que suponía tener un testcase por cada tipo distinto)"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 😳 Implementación de repositorio sin Hibernate!"
    }
  ],
};
