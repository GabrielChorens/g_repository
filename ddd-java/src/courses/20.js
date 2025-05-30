export default {
  title: "20 Test de integración del repositorio",
  videoId: "MOtP0OP5N-4",
  notes: [
    { type: "subtitle", content: "Test de integración del repositorio" },
    {
      type: "text",
      content: "Ya hemos visto el caso de uso de 'Crear un nuevo Curso', persistiendo finalmente en MySql a través de Hibernate y hemos preparado y lanzado los tests unitarios y de aceptación. Sin embargo aún nos queda por añadir los test de integración del repositorio, es decir, probaremos que nos integramos correctamente con la pieza de infraestructura correspondiente al repositorio de MySql (Os recomendamos en este punto haber hecho previamente el curso de Testing)"
    },
    {
      type: "text", 
      content: "Básicamente lo que queremos validar en este caso es que si guardamos un Curso y posteriormente tratamos de recuperarlo, vamos a recuperar el mismo Curso (asegurándonos así que no se producen fallos como una inconsistencia debida a un encoding distinto al esperado en nuestra BD). Así pues, lo que buscaremos testear son los contratos que la interface del repositorio expone públicamente (Ojo 👀 que exponer métodos públicos no definidos en la interface supondría estar violando el ISP de SOLID) tal y como veíamos en el test del repositorio en memoria"
    },
    { type: "subtitle", content: "Clase MoocContextInfrastructureTestCase:" },
    {
      type: "code",
      content: "@ContextConfiguration(classes = MoocBackendApplication.class)\n@SpringBootTest\npublic abstract class MoocContextInfrastructureTestCase extends InfrastructureTestCase {\n}"
    },
    {
      type: "text",
      content: "En estos tests al igual que en los de Aceptación queremos atacar a la infraestructura de producción sin necesidad de hacer un 'new' del repositorio. Para ayudarnos hemos añadido estas dos anotaciones en la clase de la cual heredan los Tests de infraestructura en el contexto de Mooc: la anotación @SpringBootTest como vimos anteriormente nos permite acceder al contenedor de dependencias desde nuestros tests, mientras que con @ContextConfiguration le indicamos que la configuración debe cargarla desde la clase MoocBackendApplication que es justamente la misma que estábamos llamando desde el Starter en el código de producción"
    },
    {
      type: "text",
      content: "Si quisiéramos que en lugar de cargar todo lo que actualmente incluye MoocBackendApplication (Servicios, Controladores, etc) sólo nos cargara lo perteneciente al contexto de Mooc, podríamos separarlo en diferentes componentes, haciendo que los tests sólo cargaran lo que necesiten y desde MoocBackendApplication se cargaran todos lo que actualmente incluye"
    },
    {
      type: "text",
      content: "Una cuestión que podría ser objeto de debate es el hecho de definir el tipo del repositorio en base a la interface y no en base a la clase concreta 🤔. Actualmente sólo tenemos una implementación por lo que será la que tome por defecto, sin embargo en el momento en que tuviésemos varias implementaciones distintas, tendríamos que venir a los tests y decirle cual es la que queremos que coja por defecto. Hay que tener en cuenta que no podemos hacemos el Autowired directamente a la implementación porque el propio framework nos lo impide al ser la interface la que lleva la anotación @Service (podríamos hacer alguna triquiñuela para anotar la clase concreta en lugar de la interface pero es una complejidad que en nuestro supuesto no vemos necesaria)"
    },
    { type: "subtitle", content: "Manteniendo el repositorio ordenado 🧹" },
    {
      type: "text",
      content: "El flujo que se lleva a cabo en estos tests implica que cada vez que los lancemos se estará persistiendo un nuevo Curso en la BD lo cual no sólo va a incluir registros falsos sino que creará conflictos de consistencia con otros tests en los que validemos que los datos que recuperamos de la tabla son los esperados 😦. Una posible alternativa podría ser ejecutar un truncate al final de cada test, sin embargo en un contexto de concurrencia de tests esto puede ser incluso más conflictivo ya podríamos estar borrando registros en un test al tiempo en que en otro estamos guardando y tratando de recuperarlos 🤯"
    },
    {
      type: "text",
      content: "Una alternativa más limpia que proponemos es aprovechar la anotación @Transactional de javax que también usábamos en el código de producción. Dentro del contexto de tests lo que hace es abrir una transacción por cada test case y cuando éste se ha ejecutado lanza un rollback  deshaciendo todo lo generado dentro de esa transacción (Aunque la anotación se situa a nivel de clase, su acción será a nivel de test case). Esta técnica además resulta mucho más rápida que tener que lanzar un truncate de todas las tablas por cada fichero de Test que ejecutemos"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 💭 Modelado del dominio: step vídeo y challenge!"
    }
  ],
};
