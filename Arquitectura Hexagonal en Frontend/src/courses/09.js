export default {
    title: "09 De jQuery a Arquitectura Hexagonal",
    videoId: "oWjypyb78Kk",
    notes: [
        { type: "text", content: "Tenemos un código legacy en el que toda la funcionalidad que veíamos en vídeos anteriores se encuentra en un solo archivo main.js. Las responsabilidades de la lógica de negocio, lógica de UI y infraestructura están mezcladas, haciendo que el código sea más difícil de mantener y testear." },
        { type: "text", content: "Antes de empezar nuestro refactor, lo primero que haremos será añadir tests de aceptación (no podemos añadir tests unitarios ya que nuestro código está demasiado acoplado)." },
        { type: "text", content: "A continuación empezamos a extraer nuestra lógica. Pasaremos el proyecto a TypeScript para poder dar forma a nuestro dominio, es decir, crear nuestra interfaz Course. A la vez que nos centramos hacia algo pero nos desacoplamos del repositorio para poder extraer las funciones que interactuan con local storage al repositorio en la capa de infraestructura. En la capa de application crearemos métodos por cada caso de uso, es decir, para crear y para listar cursos. Esto nos permite invertir las dependencias pasando el repositorio por parámetro para poder así desacoplarnos de la implementación concreta." },
        { type: "text", content: "De esta forma en nuestro main.ts queda limpio de interacciones directas con local storage. Ahora nos queda el paso de extraer las validaciones, que son puramente lógica de negocio por la que las moveremos a dominio." },
        { type: "text", content: "Nos quedaría por último separar el main.ts en módulos para que sea más fácilmente de mantener y testear. Ahora tenemos un código más unitario, más modular y más fácil de leer, ahora que hemos aislado y desacoplado nuestra lógica de negocio." }
    ]
}; 