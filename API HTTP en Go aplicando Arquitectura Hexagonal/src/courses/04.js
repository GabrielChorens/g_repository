export default {
    title: "04 Implementando el endpoint de creación de curso",
    videoId: "3hz3ERURkLY",
    notes: [
        { type: "text", content: "Ahora ya sí que sí, ha llegado el momento de añadir funcionalidad a nuestra API HTTP en Go, para ello vamos a seguir la convención del resto de cursos de CodelyTV y vamos a añadir funcionalidades relacionadas con el negocio de los MOOC" },
        { type: "link", content: "https://es.wikipedia.org/wiki/Massive_Open_Online_Course" },
        { type: "text", content: "Más concretamente vamos a ver cómo implementar un endpoint de creación de curso." },
        { type: "subtitle", content: "Registrar una nueva ruta" },
        { type: "text", content: "Para ello, vamos a añadir una línea en nuestro método registerRoutes() en la que llamaremos al método POST del engine de Go al que le indicaremos la ruta que queremos registrar y la función handler (o controlador) que procesará dichas peticiones." },
        { type: "subtitle", content: "Parseo del payload de la petición" },
        { type: "text", content: "Una vez ya definido nuestro controlador HTTP, lo siguiente será ver cómo podemos usar Gin para simplificar la tarea de parsear el payload de la petición, en este caso un JSON." },
        { type: "text", content: "Para ello, vamos a crear un nuevo struct a modo de DTO que contendrá algunos tags de Gin que nos permitirán aplicar unas validaciones mínimas en la capa del controlador, como, por ejemplo, que determinados campos sean requeridos." },
        {
            type: "code", content: `type CreateCourseRequest struct {
    ID       string ` + "`json:\"id\" binding:\"required\"`" + `
    Name     string ` + "`json:\"name\" binding:\"required\"`" + `
    Duration string ` + "`json:\"duration\" binding:\"required\"`" + `
}` },
        { type: "text", content: "La magia, en este caso, la va a hacer la función BindJSON del contexto de Gin. Si todo va bien, dicha función nos rellenará nuestro struct/DTO con los datos presentes en el payload de la petición entrante. En caso de que haya algún problema, esta función nos devolverá un error y podremos devolver una respuesta HTTP de error como consecuencia." },
        { type: "subtitle", content: "Definición de nuestro dominio" },
        { type: "text", content: "Como ya hemos visto antes, la estructura de carpetas de nuestro proyecto seguirá las convenciones del Standard Go Project Layout, y por lo mismo, vamos a definir el dominio de nuestra aplicación en la raíz de la carpeta internal, pues, como sabemos, ahí será aqué código con nuestras reglas de negocio que no deberá depender de ninguna dependencia externa." },
        { type: "link", content: "https://github.com/golang-standards/project-layout/tree/master/internal" },
        { type: "subtitle", content: "Persistencia en base de datos" },
        { type: "text", content: "Finalmente, el último paso que deberá realizar nuestro controlador, previamente a devolver la respuesta de que todo ha ido bien, será persistir el nuevo curso que hemos creado. Para ello, de momento vamos a asumir que tenemos una función de Save junto a nuestro controlador que será la encargada de almacenar el curso en base de datos y, de persistir el nuevo curso. En futuras lecciones veremos que inyectar el código responsable de dicha tarea." }
    ]
}; 