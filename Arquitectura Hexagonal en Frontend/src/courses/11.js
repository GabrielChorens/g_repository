export default {
  title: "11 Promesas y la Arquitectura Hexagonal",
  videoId: "QN4LRaAAxvM",
  notes: [
    {
      type: "text",
      content:
        "Inicialmente, implementamos nuestro CourseRepository con la siguiente interfaz:",
    },
    {
      type: "code",
      content: `export interface CourseRepository {
    save: (course: Course) => void;
    get: (id: string) => Course | null;
    getAll: () => Course[];
}`,
    },
    {
      type: "text",
      content:
        "Esto nos funciona bien con la implementación de Local Storage, pero cuando implementamos una API nos vemos forzados a cambiar el tipo para que acepte Promesas:",
    },
    {
      type: "code",
      content: `export interface CourseRepository {
    save: (course: Course) => Promise<void>;
    get: (id: string) => Promise<Course | null>;
    getAll: () => Promise<Course[]>;
}`,
    },
    {
      type: "text",
      content:
        "Esto nos obliga a promisificar el repositorio LocalStorage para que cumpla la interfaz:",
    },
    {
      type: "code",
      content: `async function save(course: Course) {
    const courses = getAll().fromLocalStorage();
    
    courses.set(course.id, course);
    localStorage.setItem("courses", JSON.stringify(Array.from(courses.entries())));
    
    await Promise.resolve();
}`,
    },
    {
      type: "text",
      content:
        "Eso sí, cuando ejecutemos cualquier método tendremos que tratarlo siempre como promesa, ya que no sabemos qué implementación del repositorio nos llegará.",
    },
  ],
};
