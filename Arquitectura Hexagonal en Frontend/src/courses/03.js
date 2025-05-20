export default {
    title: "03 ¿Cómo encaja ReactVueFrameworks con la Arquitectura Hexagonal?",
    videoId: "ukoGqAmhi6s",
    notes: [
        { type: "text", content: "Con Arquitectura Hexagonal buscamos separar la lógica de negocio de la lógica de la UI (mostrar/ocultar elementos, tratar con inputs, etc.)." },
        { type: "text", content: "Si separamos nuestra aplicación en 3 capas, nos queda la duda si esta lógica de UI que es de la que se encarga el framework es dominio, aplicación o infraestructura." },
        { type: "text", content: "Podríamos considerarlo infraestructura ya que el framework es una dependencia externa. Pero, como veremos más adelante, en testing será nuestro punto de entrada de los test unitarios, algo que tradicionalmente ha sido la capa de aplicación." },
        { type: "text", content: "Además, las peculiaridades de los frameworks a menudo nos pueden limitar la estructura de nuestra aplicación (por ejemplo frameworks que fijan un fichero main.ts dentro de la carpeta src)" }
    ]
}; 