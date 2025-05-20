export default {
    title: "13 Clean Architecture los peligros de shared",
    videoId: "kaRaDYWuV4k",
    notes: [
        {
            type: "text",
            content: "Como veíamos al inicio del curso, si en nuestra aplicación tenemos objetos User y Asignee puede ser tentador extraer una interfaz común a un módulo shared con campos similares."
        },
        {
            type: "code",
            content: `export interface User {
    id: UUID;
    username: string;
    imageUrl: URL;
    name: string | null;
    status: string | null;
}`
        },
        {
            type: "text", 
            content: "Pero esto nos generará problemas a la hora de mantener, escalar y testear nuestro código, ya que tendremos que comprobar si tenemos los datos que esperamos, se vuelve complicado saber que campos son los que pertenecen a cada tipo de usuario (Asignee, Admin, etc.), dificulta la aplicación del patrón object mother, etc."
        },
        {
            type: "text",
            content: "Sin embargo tener un módulo shared también nos puede ser muy útil para evitar duplicar nuestro código y simplificar ciertas partes. Para asegurar que no se nos va de las manos, seguiremos estas reglas:"
        },
        {
            type: "text",
            content: "• Solo moveremos código a capas, dominio e infraestructura, no capas de uso (aplicación)"
        },
        {
            type: "text", 
            content: "• La regla de 3: solo moveremos código a shared cuando se haya duplicado por lo menos dos veces. A la tercera que vayamos a hacerlo, consideramos si es buena idea."
        }
    ]
}; 