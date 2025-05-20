export default {
    title: "03.5 Crea un curso mediante un formulario utilizando Arquitectura Hexagonal",
    videoId: "IZNQWVnefuY",
    notes: [     { type: "text", content: "A lo largo del curso verás que trabajamos con herramientas como React, Jest, Cypress... pero los conceptos que aprenderás son totalmente independientes y aplicables a otras tecnologías como Vue, Svelte, Vitest, etc." },
        { type: "text", content: "Vamos a crear un caso de uso básico, la creación de un curso. Haremos un componente de React que se encargará de pintar el formulario, errores de validación, etc. Pero a la vez usará un hook para gestionar el estado, pero todo esto vive en nuestra aplicación React y no entraremos en detalle, lo que nos interesa ahora es cómo gestionar la lógica de negocio y cómo guardamos los datos del curso." },
        { type: "text", content: "Empezaremos por crear nuestra primera interfaz para definir cómo va a ser nuestro curso, en la carpeta domain dentro de src/modules/courses:" },
        { type: "code", content: `export interface Course {
    id: string;
    title: string;
    imageUrl: string;
}` },
        { type: "text", content: "A continuación empezaremos a crear nuestro caso de uso, una función createCourse dentro de la carpeta application:" },
        { type: "code", content: `export function createCourse(course: Course): void {
}` },
        { type: "text", content: "La función recibirá nuestro objeto Course (que ya tenemos definido en dominio) como parámetro." },
        { type: "text", content: "Tenemos varias opciones a la hora de guardar nuestro curso desde el front: llamando a una API, guardando en LocalStorage... Pero ¿cómo guardamos nuestro curso si desde aplicación no podemos tener una dependencia de infraestructura? Y no es solo para ser puristas negando la regla de dependencias, queremos tener el código desacoplado para que si cambiamos la implementación no tengamos que cambiar demasiado el código y para poder testear sin problemas." },
   ]
}; 