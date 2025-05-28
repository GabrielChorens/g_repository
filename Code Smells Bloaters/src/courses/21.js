export default {
  title:
    "21 Comunicación entre capas Introduce Parameter Object Refactoring para objeto Request",
  videoId: "ekY297WLIns",
  notes: [
    { type: "text", content: "El caso del 'Introduce Parameter Object' como técnica de refactoring es bastante habitual y en esta ocasión lo veremos con un ejemplo en Javascript donde resalta el hecho de que podemos encontrar ciertos acoplamientos en nuestro código que podrían pasar por alto debido a la ausencia de namespaces que nos avisen explícitamente de este problema" },

    { type: "text", content: "Concretamente nos encontramos con el típico objeto Request que podríamos tener en cualquiera de nuestros controllers y que contendrá los datos necesarios para gestionar alguna petición que recibamos 📥" },

    { type: "text", content: "Clase CourseCreator (Estado inicial):" },

    { type: "code", content: `export class CourseCreator {
    constructor(repository) {
        this.repository = repository;
    }

    create(request) {
        const course = new Course(request.body.id, request.body.name, request.body.duration);

        this.repository.save(course);
    }
}` },

    { type: "text", content: "Este caso de uso recibe la misma request que nos llega en el controller, con los atributos recibidos en esta request instanciará el Course que posteriormente persista en BD. Aunque a simple vista parezca que no tenemos ningún acoplamiento con el framework o librería empleada para la comunicación HTTP (No estamos importando nada que venga de fuera ni el tipado del parámetro nos lo sugiere), lo cierto es que si lo hay 🕵️‍♀️" },

    { type: "text", content: "Si nos fijamos en el formato que tiene este request veremos que para acceder a los distintos atributos debemos entrar dentro de algún objeto body, esto es algo que no hemos definido nosotros de forma interna y, por lo tanto, no tenemos control sobre él: Si el framework decidiera cambiar la estructura de su objeto Request, nos afectaría gravemente en cada punto en el que estemos accediendo a él" },

    { type: "text", content: "Podéis profundizar más en estos conceptos de acoplamiento, capa de infraestructura, dominio… en el curso de Arquitectura Hexagonal que tenéis incluído en la plataforma 👌" },

    { type: "subtitle", content: "En resumen:" },

    { type: "text", content: "🙈 Que no veamos imports o un tipado concreto no significa que no haya acoplamiento" },
    { type: "text", content: "🏗 El acoplamiento puede provocar un grave impacto si se realizan cambios en la librería/framework" },

    { type: "text", content: "Para evitar el perjucio que supone mantener este diseño de nuestra aplicación será necesario que añadamos un nivel de indirección entre el controlador y el caso de uso a modo de 'contrato'" },

    { type: "subtitle", content: "☝️ Enviando los atributos separados" },

    { type: "text", content: "Un primer paso que podríamos llevar a cabo es dejar de enviar todo el objeto Request al caso de uso para enviarle únicamente los campos que necesita para crear el curso, para ello podemos ayudarnos con el IDE para realizar un 'extract method'" },

    { type: "text", content: "Clase CourseCreator (pasando argumentos):" },

    { type: "code", content: `export class CourseCreator {
    constructor(repository) {
        this.repository = repository;
    }

    create(id, name, duration) {
        const course = new Course(id, name, duration);

        this.repository.save(course);
    }
}` },

    { type: "text", content: "Este paso nos permite ya ser mucho mas explícitos con respecto a lo que el caso de uso requiere realmente y evitar que pueda hacer acceder a cualquier otro elemento que pueda llevar la request original 🔎 (otro ejemplo donde podemos ver claramente este code smell es en el uso de 'containers' que pasemos a las clases por inyección de dependencias)" },

    { type: "subtitle", content: "✌️ Introduciendo Parameter Object" },

    { type: "text", content: "Si bien ya hemos conseguido desacoplar nuestros casos de uso del framework que estemos utilizando en la comunicación con nuestros controladores, lo cierto es que tener que pasar todos los parámetros disgregados al caso de uso resulta algo bastante tedioso además de que dificultará cualquier posible migración posterior a CQRS" },

    { type: "text", content: "Así pues, el siguiente paso que daríamos en este proceso de refactoring sería el de introducir un DTO (Data Transfer Object) en la comunicación con el caso de uso" },

    { type: "text", content: "Clase CoursesController:" },

    { type: "code", content: `export class CoursesController {
    constructor(courseCreator) {
        this.courseCreator = courseCreator;
    }

    create(request) {
        this.courseCreator.create(new CreateCourseRequest(request.body.id, request.body.name, request.body.duration));

        return {status: 201};
    }
}` },

    { type: "text", content: "Como su propio nombre indica, se trata de agrupar todos esos elementos separados en un único objeto de parámetros cuya función no es más que transferir datos entre las distintas capas de nuestra aplicación" },

    { type: "text", content: "Clase CourseCreator (estado final):" },

    { type: "code", content: `export class CourseCreator {
    constructor(repository) {
        this.repository = repository;
    }

    create(request) {
        const course = new Course(request.id, request.name, request.duration);

        this.repository.save(course);
    }
}` },

    { type: "text", content: "Aunque en este caso el nombre del objeto que pasamos al caso de uso coincide con el que había inicialmente, podemos ver que ahora lo que enviamos es un DTO modelado por nosotros y sobre el que si tenemos control 🙌" },

    { type: "subtitle", content: "¿Alguna Duda?" },

    { type: "text", content: "Si tienes alguna duda sobre el contenido del video o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇" },

    { type: "text", content: "¡Nos vemos en el siguiente video: 🎛️ Cómo gestionar configuración de infraestructura!" }
  ],
};
