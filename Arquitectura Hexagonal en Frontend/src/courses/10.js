export default {
    title: "10 Quizás no te hace falta Arquitectura Hexagonal",
    videoId: "xYG_HiOOXdk",
    notes: [
        { type: "text", content: "Existen muchas formas de tener una aplicación mantenible, escalable y testable que no pasan por Arquitectura Hexagonal, así que puede que no necesites aplicarla." },
        { type: "text", content: "Lo más importante para conseguir un código limpio es poder desacoplarnos de dependencias externas. La lógica de negocio la podemos aislar en archivos a parte, separándola así de la UI. También nos será útil separar la obtención de datos de servicios externos con una API, como hacemos con courseService, parecido al patrón repository que veíamos anteriormente. Aunque no hacemos una interfaz, los tipos de retorno de cada función nos ayudan a evitar romper el contrato accidentalmente. A nivel de testing, aunque no usemos inversión de dependencias, las herramientas de testing en frontend nos proveen con funcionalidades de mock, que nos permiten falsear la implementación de ese courseService." },
        { type: "text", content: "Vemos así que lo que nos aporta Hexagonal es:" },
        { type: "text", content: "• Un framework mental para trabajar en equipo" },
        { type: "text", content: "• Separación más clara por capas" },
        { type: "text", content: "• Posibilidad de añadir reglas de linter para controlar reglas de dependencias" },
        { type: "link", content: "https://www.npmjs.com/package/eslint-plugin-hexagonal-architecture" }
    ]
}; 