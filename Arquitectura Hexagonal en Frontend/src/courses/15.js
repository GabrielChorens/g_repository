export default {
    title: "15 Exprime la orientación a objetos en la Arquitectura Hexagonal",
    videoId: "mtIo-Lc8KdA",
    notes: [
        {
            type: "text",
            content: "Si prefieres una orientación a objetos usando clases, en este video vemos el mismo ejemplo anterior pero aplicando OO."
        },
        {
            type: "text", 
            content: "Vemos que la estructura de carpetas es exactamente la misma que la que hemos visto hasta ahora."
        },
        {
            type: "text",
            content: "Lo que en la versión anterior teníamos como una interfaz y funciones de validación en la carpeta domain, pasa a estar coleccionado en una clase:"
        },
        {
            type: "code",
            content: `export class Course {
    private constructor(
        readonly id: CourseId,
        readonly title: CourseTitle,
        readonly imageUrl: ImageUrl
    ) {}

    public static create({ id, title, imageUrl }: PrimitiveCourseData): Course {
        return new Course(new CourseId(id), new CourseTitle(title), new ImageUrl(imageUrl));
    }

    toValue(): string {
        return this.id.value;
    }

    titleValue(): string {
        return this.title.value;
    }

    imageUrlValue(): string {
        return this.imageUrl.value;
    }

    toPrimitives(): PrimitiveCourse {
        return {
            id: this.id.value,
            title: this.title.value,
            imageUrl: this.imageUrl.value,
        };
    }
}`
        },
        {
            type: "text",
            content: "Cada value object (CourseId, CourseTitle, etc) tiene sus funciones de validación dentro y se llaman en el constructor, así que no es posible crear un curso que no esté previamente validado. De esta forma, no es necesario validar en el caso de uso createCourse como hacíamos en la versión anterior, sino que queda validado en el momento de instanciación llamando a Course.create()."
        },
        {
            type: "text", 
            content: "Preferimos usar métodos estáticos para la creación para ocultar detalles de la forma del curso, sus value objects, etc."
        },
        {
            type: "text",
            content: "Debido a eso, en los value objects creemos un método estático para poder validar desde la lógica de la UI:"
        },
        {
            type: "code",
            content: `export class CourseTitle {
    static readonly MAX_COURSE_LENGTH = 30;

    constructor(readonly value: string) {
        if (!CourseTitle.isValid(value)) {
            throw new Error(CourseTitle.invalidMessage(value));
        }
    }

    public static isValid(value: string): boolean {
        return value.length < CourseTitle.MAX_COURSE_LENGTH;
    }

    public static invalidMessage(value: string): string {
        return \`The title \${value} is too long (max \${CourseTitle.MAX_COURSE_LENGTH} chars is the max allowed).\`;
    }
}`
        },
        {
            type: "text",
            content: "Así podemos validar cualquier string sin instanciar un CourseTitle, haciendo CourseTitle.isValid(title)."
        }
    ]
}; 