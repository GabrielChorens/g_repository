export default {
    title: "07 Añadiendo validaciones a nuestro dominio",
    videoId: "xGKzWSlXiF4",
    notes: [
        { type: "subtitle", content: "Inmutabilidad, value objects y otras cosas" },
        { type: "text", content: "Si bien es cierto que en la comunidad Go los getters y setters no están muy bien vistos, es decir, se consideran código no idiomático, como sucede en muchos otros lenguajes de programación, cualquier atributo público de un struct podría ser modificado sin consecuencias desde fuera de dominio (eventos de dominio, validaciones, etc)." },
        { type: "text", content: "Es por ello, que nosotros apostamos por hacer uso de esos getters y setters en caso de que queramos lograr esa inmutabilidad y \"proteger\" nuestro dominio." },
        { type: "subtitle", content: "Construcción de structs" },
        { type: "text", content: "Una particularidad de Go es que, a diferencia de la mayoría de lenguajes de POO (como Java, PHP o C#), no tenemos constructoras al uso para la inicialización de nuestros structs." },
        { type: "text", content: "Para ello, vamos a seguir la convención en Go de definir un método New o NewX que nos permita encapsular la inicialización de nuestras estructuras de datos (validaciones, etc). Es esa la razón por la que, ahora que hemos añadido validaciones de dominio, dicha función ahora nos devolverá, además de la entidad, un error." }
    ]
}; 