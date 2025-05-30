export default {
  title: "13 Tests mas semánticos",
  videoId: "tU36Jnk5kig",
  notes: [
    { type: "subtitle", content: "Tests más semánticos" },
    {
      type: "text",
      content: "Hemos llevado a cabo una mejora de nuestros tests con la incorporación del patrón ObjectMother y visto los beneficios que nos aporta en términos de robustez, pero aún podemos dar un pasito más y hacer que sean más semánticos 💬"
    },
    { type: "subtitle", content: "Configurando nuestros builds 🛠" },
    {
      type: "text",
      content: "Vimos en el video anterior cómo el contexto de Mooc ahora dependía del Shared en tiempo de tests y, puesto que entendemos que sucederá lo mismo en el resto de contextos, lo hemos añadido en la configuración de todos los sub-proyectos del fichero build.gradle principal"
    },
    { type: "subtitle", content: "Fichero build.gradle:" },
    {
      type: "code",
      content: "//...\ndependencies {\n  implementation 'org.springframework.boot:spring-boot-starter-web:2.1.8.RELEASE'\n\n  testImplementation rootProject.sourceSets.main.output\n  testImplementation 'org.springframework.boot:spring-boot-starter-test:2.2.1.RELEASE'\n\n  if (project.name != \"shared\") {\n    implementation project(\":shared\")\n    testImplementation project(\":shared\").sourceSets.test.output\n  }\n}"
    },
    {
      type: "text",
      content: "En concreto especificamos que todos los sub-proyectos salvo 'shared' implementarán el sub-proyecto 'shared' en producción y test, por lo que ya no tendremos que añadir estas dependencias en el fichero build.gradle de cada sub-proyecto 🙌"
    },
    {
      type: "text",
      content: "Además también le indicamos que todos nuestros sub-proyectos dependerán del testImplementation de nuestro proyecto padre, lo cual nos permitirá tomar la implementación de nuestra infraestructura desde el container de Springboot tal y como hacemos en producción(vía Autowiring)"
    },
    { type: "subtitle", content: "Haciendo nuestros tests más semánticos 💬" },
    {
      type: "text",
      content: "Ahora que tenemos lista la configuración podemos indicarle a nuestros tests de Integración que en lugar de tener que hacer un 'new' de InMemoryRepository nos lo cargue desde el container tal como vemos en CoursesModuleInfrastructureTestCase, la clase base de la que heredarán nuestros tests de infraestructura para el módulo de Cursos"
    },
    { type: "subtitle", content: "Clase MoocContextInfrastructureTestCase:" },
    {
      type: "code",
      content: "@ContextConfiguration(classes = MoocBackendApplication.class)\n@SpringBootTest\npublic abstract class MoocContextInfrastructureTestCase extends InfrastructureTestCase {\n}"
    },
    {
      type: "text",
      content: "Para poder añadirle la anotación @Autowired al repositorio en esta clase hemos añadido dos anotaciones fundamentales en la clase MoocContextInfrastructureTestCase (En el video InfrastructureTestCase, se ha creado una de estas clases 'base' por contexto), por un lado le indicamos con la anotación @SpringBootTest que se trata de la clase base para un test de SpringBoot, lo cual nos permitirá hacer uso de piezas de SpringBoot como es el container, y por otro lado le indicamos mediante la anotación @ContextConfiguration cual es la clase que debe de utilizar para la configuración (En este caso la propia clase Starter)"
    },
    { type: "subtitle", content: "Clase CoursesModuleUnitTestCase:" },
    {
      type: "code",
      content: "public abstract class CoursesModuleUnitTestCase extends UnitTestCase {\n    protected CourseRepository repository;\n\n    @BeforeEach\n    protected void setUp() {\n        super.setUp();\n\n        repository = mock(CourseRepository.class);\n    }\n\n    public void shouldHaveSaved(Course course) {\n        verify(repository, atLeastOnce()).save(course);\n    }\n}"
    },
    {
      type: "text",
      content: "En el caso de los Tests Unitarios también hemos extraído a una clase 'base' aquellos elementos que serán comunes para todos los casos de uso de un mismo módulo y que por tanto tendremos que lanzar en cada uno de ellos, como puede ser el mockear el repositorio al inicio de cada Testcase. De este modo nuestros tests unitarios quedan también mucho más limpios y semánticos 📖"
    },
    {
      type: "text",
      content: "Seguir estas técnicas y manteniendo nuestros tests lo más acotados posible obtendremos beneficios como la reutilización de código y mayor semántica. No obstante es posible que prefiráis otras alternativas o que ésta no os convenza tanto como a nosotros, ¡Estamos abiertos a escuchar cualquier opinión o sugerencia 🙌!"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: 🕋 Guardar en base de datos con Hibernate!"
    }
  ],
};
