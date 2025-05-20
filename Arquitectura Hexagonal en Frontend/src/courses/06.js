export default {
    title: "06 ¿Dónde empiezan y acaban los Tests unitarios?",
    videoId: "-YFmF9GfZO8",
    notes: [

        { type: "text", content: "La unidad que testean los tests unitarios consideramos que es la de caso de uso, es decir, pueden englobar más de una función o clase. Pero en el contexto del frontend, el punto de entrada no será el caso de uso en sí (la función createCourse que vive en application), sino el componente, ya que esto nos permite saber cómo el usuario llega al caso de uso y nos da mayor seguridad con un nivel de acoplamiento relativamente bajo." },
        { type: "text", content: "Los tests de integración nos permiten probar cómo se comunican las distintas capas de nuestra aplicación. Por ejemplo, podemos probar que cuando llamamos a createCourse desde el componente, se llama correctamente al repositorio y se guarda el curso." },
        { type: "text", content: "Los tests E2E (end-to-end) nos permiten probar el flujo completo de la aplicación, desde que el usuario interactúa con la interfaz hasta que se guardan los datos en el almacenamiento persistente." },
        { type: "image", content: "src/assets/06.png" }
    ]
}; 