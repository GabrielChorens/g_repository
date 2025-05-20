export default {
    title: "07 Tests unitarios en Arquitectura Hexagonal",
    videoId: "B95wI2kB-Gw",
    notes: [
        { type: "text", content: "Al usar Arquitectura Hexagonal y inversión de dependencias, nos es muy fácil desacoplarnos de la capa de infraestructura a la hora de escribir nuestros tests:" },
        { type: "code", content: `describe("CreateCourseForm component", () => {
    it("displays success message when data is correct", async () => {
        const repository = {};
        render(
            <CourseContextProvider repository={repository}>
                <CreateCourseForm />
            </CourseContextProvider>
        );
        // ...puedes ver más en el test
    });
});` },
        { type: "text", content: "En el vídeo anterior hemos dicho que poner un punto de corte en la implementación del repository, pero esto tradicionalmente se ha hecho para que los tests sean más rápido, ya que normalmente los repositorios contactan con una base de datos, una API, etc." },
        { type: "text", content: "En el caso del repositorio de localStorage, podríamos plantearnos no doblarlo ya que Jest simula el localStorage de forma nativa. Por lo tanto, la prueba sería real y pasaría rápido igual que si falseáramos el repositorio." },
        { type: "text", content: "Pero en otros casos, por ejemplo si el repositorio llama a una API, sí que tendremos que crear un doble del caso de uso:" },
        { type: "code", content: `const save = jest.fn();
const repository = {
    save,
    get: jest.fn(),
    getAll: jest.fn(),
};

render(
    <CourseContextProvider repository={repository}>
        <CreateCourseForm />
    </CourseContextProvider>
);` },
        { type: "text", content: "Guardamos la función falseada de save a parte para poder asegurar que se llama en el test. Aquí tienes la implementación completa del test con el repository falseado:" },
        { type: "code", content: `describe("CreateCourseForm component", () => {
    it("displays success message when data is correct", async () => {
        const save = jest.fn();
        const repository = {
            save,
            get: jest.fn(),
            getAll: jest.fn(),
        };

        render(
            <CourseContextProvider repository={repository}>
                <CreateCourseForm />
            </CourseContextProvider>
        );

        const titleInput = screen.getByLabelText("title");
        userEvent.type(titleInput, "awesome course");

        const imageUrlInput = screen.getByLabelText("image");
        userEvent.type(imageUrlInput, "http://placekitten.com/200/300");

        const submitButton = screen.getByText("create course");
        userEvent.click(submitButton);

        const successMessage = await screen.findByText("loading", { exact: false });
        expect(save).toHaveBeenCalled();
        expect(successMessage).toBeInTheDocument();
    });
});` }
    ]
}; 