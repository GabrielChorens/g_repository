export default {
    title: "02 ¿Hay lógica de negocio en el front?",
    videoId: "x5uSQCw96k8",
    notes: [
        { type: "text", content: "La lógica de negocio es la que define y controla las reglas y procesos que rigen la operación de una aplicación, independientemente de elementos como el framework usado o la UI." },
        { type: "text", content: "Por ejemplo, en el apartado de abrir nueva issue en GitHub, el front se encarga de que no se pueda crear una issue sin título. Aunque se valide otra vez en backend, esta lógica vive también en el frontend." },
        { type: "text", content: "También tenemos en cuenta la estructura de datos con la que trabajamos, por ejemplo los datos de usuario que necesitamos en la home son distintos a los datos de usuario que cargamos en el formulario de asignar la issue. Para conseguir esto podríamos crear una interface en TypeScript con campos opcionales:" },
        {
            type: "code", content: `export interface User {
    id: UUID;
    username: string;
    imageUrl?: URL;
    email: string | null;
    status: string | null;
}` },
        { type: "text", content: "Pero eso nos obligaría a añadir más condicionales en nuestro código y lo hace más complicado de mantener. Nosotros optaríamos por tener interfaces distintas:" },
        {
            type: "code", content: `export interface User {
    id: UUID;
    username: string;
    imageUrl: URL;
}

export interface Assignee {
    id: UUID;
    username: string;
    imageUrl: string;
    email: string;
    status: string;
}` },
        { type: "text", content: "Este tipo de decisiones son por las que consideramos que sí existe la lógica de negocio en frontend." }

    ]
}; 