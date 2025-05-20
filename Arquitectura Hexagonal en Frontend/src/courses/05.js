export default {
    title: "05 Añade Validaciones a la creación del curso. Cómo y dónde?",
    videoId: "yYjOLj6q2dg",
    notes: [ { type: "text", content: "Tenemos nuestro caso de uso para crear cursos, pero ahora queremos añadir validación para evitar guardar cursos con un formato incorrecto." },
        { type: "text", content: "Por ejemplo, queremos validar que el título del curso tenga un mínimo y un máximo de caracteres. Para ello crearemos la validación en la carpeta de dominio:" },
        {
            type: "code", content: `// CourseTitle.ts

export const TITLE_MIN_LENGTH = 5;
export const TITLE_MAX_LENGTH = 100;

export function isCourseTitleValid(title: string): boolean {
    return title.length >= TITLE_MIN_LENGTH && title.length <= TITLE_MAX_LENGTH;
}` },
        { type: "text", content: "Crearemos también otra función en la capa de dominio que asegura que el curso es válido llamando a la función anterior (y validando los demás parámetros si es necesario), y lanzando un error si no es así:" },
        {
            type: "code", content: `// Course.ts

export function ensureCourseIsValid(id: string, title: string, imageUrl: string): void {
    if (!isCourseIdValid(id)) {
        throw CourseIdNotValidError(id);
    }
    
    if (!isCourseTitleValid(title)) {
        throw CourseTitleNotValidError(title);
    }
    
    if (!isCourseImageUrlValid(imageUrl)) {
        throw CourseImageUrlNotValidError(imageUrl);
    }Z
}` },
        { type: "text", content: "Esta función la llamaremos antes de guardar el curso, en el caso de uso:" },
        {
            type: "code", content: `// createCourse.ts

export function createCourse(courseRepository: CourseRepository, course: Course): void {
    ensureCourseIsValid(course.id, course.title, course.imageUrl);
    courseRepository.save(course);
}` },
        { type: "text", content: "Ahora podemos testear nuestras validaciones de forma aislada, sin necesidad de montar toda la infraestructura:" },
        {
            type: "code", content: `// CourseTitle.test.ts

describe('CourseTitle', () => {
    test('should return false when title is shorter than minimum length', () => {
        expect(isCourseTitleValid('abc')).toBe(false);
    });

    test('should return false when title is longer than maximum length', () => {
        const longTitle = 'a'.repeat(TITLE_MAX_LENGTH + 1);
        expect(isCourseTitleValid(longTitle)).toBe(false);
    });

    test('should return true when title length is valid', () => {
        expect(isCourseTitleValid('Valid course title')).toBe(true);
    });
});` },
        { type: "text", content: "Y también podemos testear nuestro caso de uso de forma aislada usando un mock del repositorio:" },
        {
            type: "code", content: `// createCourse.test.ts

describe('createCourse', () => {
    const mockRepository: CourseRepository = {
        save: jest.fn()
    };

    test('should throw error when course title is not valid', () => {
        const invalidCourse = {
            id: "valid-id",
            title: "abc",
            imageUrl: "valid-url"
        };

        expect(() => createCourse(mockRepository, invalidCourse))
            .toThrow(CourseTitleNotValidError);
        expect(mockRepository.save).not.toHaveBeenCalled();
    });

    test('should save course when all validations pass', () => {
        const validCourse = {
            id: "valid-id",
            title: "Valid course title",
            imageUrl: "valid-url"
        };

        createCourse(mockRepository, validCourse);
        expect(mockRepository.save).toHaveBeenCalledWith(validCourse);
    });
});` }

        ]
}; 