export default {
  title: "14 Exprime la programación funcional en la Arquitectura Hexagonal",
  videoId: "FdqTcplQbi0",
  notes: [
    {
      type: "text",
      content:
        "Por las peculiaridades de JavaScript en el frontend no es tan habitual usar clases como en otros lenguajes, por lo que en los ejemplos del curso hemos querido evitarlas.",
    },
    {
      type: "text",
      content: "Veamos cosas que nos parecen interesantes de este enfoque:",
    },
    {
      type: "text",
      content:
        "• No hay instanciación del objeto curso (es decir, no hay `new Course()`). El objeto que nos llega por parámetro ya cumple con la interfaz de curso, por lo que lo único que hay que hacer es validar que las propiedades de este son correctas. Esto nos ha ido siguiendo durante el curso.",
    },
    {
      type: "text",
      content:
        "• Al no haber constructor, no podemos ejecutar las validaciones allí. Por eso las tenemos en funciones separadas (en CourseFile.ts, CourseTitle.ts, etc), que ejecutamos en la validación de curso y lanzamos una excepción si las propiedades no son correctas:",
    },
    {
      type: "code",
      content: `export function validateCourseTitle(id: string, title: ImageUrl): Course) void {
    if (!isCourseTitleValid()) {
        throw CourseTitleNotValidError(id);
    }
    
    if (!isCourseTitleLengthValid(title)) {
        throw CourseTitleLengthNotValidError(title);
    }
}

if (!isCourseTitleImageUrlValid(imageUrl)) {
    throw CourseImageNotValidError(imageUrl);
}`,
    },
    {
      type: "text",
      content:
        "• Además, podemos reutilizar estas validaciones en nuestra lógica de UI",
    },
    {
      type: "text",
      content:
        "• El tipado del repositorio podría ser alternativamente en funciones sueltas:",
    },
    {
      type: "code",
      content: `export type getCourse = (id: string) => Promise<Course>;
export type getCourses = (id: string) => Promise<Course[]>;
export type getallCourses = () => Promise<Course[]>;`,
    },
    {
      type: "text",
      content:
        "De esta forma no tendríamos que crear el objeto de repositorio con la función createLocalStorageRepository, si no que al caso de uso le pasaríamos directamente el método que tenga que usar.",
    },
    {
      type: "text",
      content:
        "• Podemos separar los parámetros propios del caso de uso de sus dependencias mediante currying:",
    },
    {
      type: "code",
      content: `export function createCourse(courseRepository: CourseRepository) {
	return async function (course: Course): Promise<void> {
		ensureCourseIsValid(course);

		await courseRepository.save(course);
	};
}

// Y llamarlo de la siguiente manera:
createCourse(repository)({id, title, imageUrl});`,
    },
  ],
};
