// Define your courses here
export const courses = [
    { type: 'category', name: 'All' },
    {
        title: "Agregados [Modelado de dominio]",
        firstVideoId: "fk5gHvTOjjU",
        folder: "Agregados [Modelado de dominio]",

        notes: [
            { type: "subtitle", content: "Curso sobre modelado de dominio y agregados en DDD." },
            { type: "text", content: "Domina los Agregados en el diseño de software y haz tus aplicaciones más mantenibles, escalables y testables. Aprende cómo definir el dominio con precisión, sin problemas comunes de rendimiento y amplía tus habilidades en arquitectura de Software." },
            { type: "named_link", text: "Repositorio del curso", url: "https://github.com/CodelyTV/aggregates-course" },
        ]
    },
    {
        title: "Proyecciones [Modelado del dominio]",
        firstVideoId: "pnb1aX69a_c",
        folder: "Proyecciones [Modelado del dominio]",
        notes: [
            { type: "subtitle", content: "Curso sobre proyecciones en DDD." },
            { type: "text", content: "Domina las Proyecciones en el diseño de software para hacer tus aplicaciones más mantenibles, escalables y testeables." },
            { type: "named_link", text: "Repositorio del curso", url: "https://github.https://github.com/CodelyTV/domain_modeling-projections-course/tree/main/CodelyTV/projections-course" },
        ]

    },
    {
        title: "AWS Tu primer deploy en EC2",
        firstVideoId: "kCv4wpzWgws",
        folder: "AWS Tu primer deploy en EC2",
        notes: [
            { type: "subtitle", content: "Curso sobre AWS y EC2." },
            { type: "text", content: "Aprende las bases de Amazon Web Services (AWS) para levantar tu primera aplicación en la nube. Crea tu propia VPC, elige la instancia adecuada de EC2, configurar acceso SSH, elige tu AMI base y crea la tuya propia, define los Security Groups apropiados, Deploya, y configura Route53 como DNS!" },
        ]
    },
    {
        title: "API HTTP en Go aplicando Arquitectura Hexagonal",
        firstVideoId: "2vlYmKck2lE",
        folder: "API HTTP en Go aplicando Arquitectura Hexagonal",
        notes: [
            { type: "subtitle", content: "Curso sobre API HTTP en Go aplicando Arquitectura Hexagonal." },
            { type: "text", content: "Aprende a desarrollar tu primera API HTTP en Go aplicando algunos de los fundamentos de la Arquitectura Hexagonal." },
            { type: "text", content: "El caso de uso de las APIs HTTP (y similares) es uno de los más frecuentes hoy en día en el mundo del desarrollo, así que no hay mejor manera de continuar con el aprendizaje del lenguaje de programación Go que implementar una." },
            { type: "text", content: "Para ello, seguiremos algunos de los fundamentos de la Arquitectura Hexagonal que nos permitirán mejorar la mantenibilidad, testabilidad y escalabilidad del código." },
            { type: "subtitle", content: "Qué veremos en este curso:" },
            { type: "text", content: "✨ Estructura de un proyecto en Go aplicando los fundamentos de la Arquitectura Hexagonal" },
            { type: "text", content: "🔌 Montar un API HTTP en Golang desde los tests" },
            { type: "text", content: "🎯 Definir nuestra interfaz HTTP y nuestros middlewares mediante el uso de la librería estándar y middleware framework" },
            { type: "text", content: "📱 Crear una implementación de nuestro repositorio compatible con MySQL" },
            { type: "text", content: "🔄 Monolito, aplicación y suscripción de eventos de dominio" },
            { type: "text", content: "🎯 Testing: Testearemos nuestra aplicación haciendo uso de mocks y verlo ejemplos de integración a fila a fila" },
            { type: "text", content: "Pese a que se repasan algunos de los conceptos, este curso asume unos conocimientos básicos tanto del lenguaje de programación Go como de la Arquitectura Hexagonal." },
            { type: "named_link", text: "Repositorio del curso", url: "https://github.com/CodelyTV/go-hexagonal_http_api-course" },
        ]
    }
];