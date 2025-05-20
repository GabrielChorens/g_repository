export default {
    title: "16 Tienen sentido los Value Objects en el frontend",
    videoId: "e0mmg8zKjHA",
    notes: [
        {
            type: "text",
            content: "Un Value Object es una clase que representa una propiedad y nos hace de imán para atraer la lógica relacionada."
        },
        {
            type: "text", 
            content: "Así, las propiedades de nuestra clase Course, no serán tipos primitivos (string, number...), serán siempre value objects. Si una propiedad no tiene lógica asociada, tendríamos una clase vacía:"
        },
        {
            type: "code",
            content: `export class CourseTitle {
    constructor(readonly value: string) {}
}`
        },
        {
            type: "text",
            content: "Puede parecer absurdo, pero esto hará que cuando queramos añadir lógica, como la validación de la longitud, no tengamos la tentación de añadirla en la clase Course, empujando siempre esa lógica hacia el value object:"
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
}`
        },
        {
            type: "text",
            content: "Es un patrón propio de la orientación a objetos, pero podemos hacer algo parecido en nuestro ejemplo de programación funcional."
        },
        {
            type: "text",
            content: "Desde nuestro archivo CourseTitle.ts exportaremos su tipo, export type CourseTitle = string. Así, nuestra interfaz Course ya no tratará con primitivos directamente:"
        },
        {
            type: "code",
            content: `export interface Course {
    id: CourseId;
    title: CourseTitle;
    imageUrl: CourseImageUrl;
}`
        },
        {
            type: "text", 
            content: "Y si necesitamos añadir lógica relacionada, lo más obvio será añadirla a nuestro value file CourseTitle.ts:"
        },
        {
            type: "code",
            content: `export type CourseTitle = string;

const TITLE_MIN_LENGTH = 5;
const TITLE_MAX_LENGTH = 100;

export function isCourseTitleValid(title: string): boolean {
    return title.length >= TITLE_MIN_LENGTH && title.length <= TITLE_MAX_LENGTH;
}

export function CourseTitleNotValidError(title: string): Error {
    return new Error(\`Title \${title} is not valid\`);
}`
        }
    ]
}; 