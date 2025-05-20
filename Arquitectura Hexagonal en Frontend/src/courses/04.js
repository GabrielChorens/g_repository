export default {
    title: "04 Abre las puertas a la mantenibilidad, cambiabilidad y testabilidad utilizando Repositorios",
    videoId: "ByslXj58YBc",
    notes: [{ type: "text", content: "Para solucionar el problema de desacoplar el caso de uso de la capa de infraestructura usaremos repositorios." },
        { type: "text", content: "En primer lugar crearemos la interfaz de nuestro repositorio en nuestro dominio. Esto nos permite definir el contrato que nuestros repositorios van a seguir a la hora de guardar el curso (recibiendo un parámetro Course y devolviendo void) sin entrar en detalles de implementación." },
        {
            type: "code", content: `import { Course } from "./Course";

export interface CourseRepository {
    save: (course: Course) => void;
}` },
        { type: "text", content: "De esta forma podemos modificar el caso de uso createCourse para que reciba un CourseRepository como primer parámetro, que usaremos para guardar de nuevo sin entrar en detalles de implementación ni acoplarnos a ellos." },
        {
            type: "code", content: `import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export function createCourse(courseRepository: CourseRepository, course: Course): void {
    courseRepository.save(course);
}` },
        { type: "text", content: "En infraestructura crearemos nuestro repositorio siguiendo la interfaz que habíamos definido en nuestro dominio. De esta forma todas las peculiaridades de la implementación concreta (por ejemplo la función setItem de localStorage) quedan limitadas a esta capa." },
        {
            type: "code", content: `import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export class LocalStorageCourseRepository implements CourseRepository {
    save(course: Course): void {
        const courses = this.getAllFromLocalStorage();
        courses.set(course.id, course);
        localStorage.setItem("courses", JSON.stringify(Array.from(courses.entries())));
    }

    private getAllFromLocalStorage(): Map<string, Course> {
        const courses = localStorage.getItem("courses");
        
        if (courses === null) {
            return new Map();
        }

        const map = new Map(JSON.parse(courses)) as Map<string, Course>;
        return map;
    }
}` },
        { type: "text", content: "Ahora podemos crear una instancia de nuestro repositorio y pasársela a nuestro caso de uso:" },
        {
            type: "code", content: `const courseRepository = new LocalStorageCourseRepository();
createCourse(courseRepository, {
    id: "1",
    title: "Curso de Arquitectura Hexagonal",
    imageUrl: "https://example.com/image.jpg"
});` }
    
    ]
}; 