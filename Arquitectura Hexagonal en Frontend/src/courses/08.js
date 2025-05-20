export default {
    title: "08 Tests de integración y E2E en Arquitectura Hexagonal",
    videoId: "EHj90aaJ13w",
    notes: [
        { type: "text", content: "Los tests de integración validan que los diferentes adaptadores de nuestra aplicación web funcionen correctamente, sin falsear las llamadas externas, por lo que pasan más lentamente que los tests unitarios." },
        {
            type: "code", content: `describe("Api Course repository", () => {
    it("lists all courses with the generated id, title and imageUrl", async () => {
        const repository = createApiCourseRepository();
        
        const courses = await repository.getAll();
        
        expect(courses.length).to.be.greaterThan(0);
        expect(courses[0].id).to.equal("f1/f7b7-g1d1-4bd4-8dd4-d6bd6-f90b17");
        expect(courses[0].title).to.equal("¿Por Si Javascript aplicado al mundo real");
        expect(courses[0].imageUrl).to.equal("http://placekitten.com/200/300");
    });
});` },
        { type: "text", content: "Los tests e2e o de aceptación cubren toda la aplicación pero se ejecutan lentamente ya que tenemos que levantar todas las partes de nuestra aplicación, además de un navegador para testear en un entorno real." },
        {
            type: "code", content: `describe("The Home Page", () => {
    it("creates a course when filling up the form correctly", () => {
        cy.visit("/");
        cy.findByRole("textbox", { name: /title/i }).type("Awesome Hexagonal Architecture");
        cy.findByLabelText(/image url/i).type("http://placekitten.com/200/300");
        cy.findByText(/create course/i).click();
        cy.findByRole("heading", { name: /course created/i }).should("exist");
        cy.findByRole("heading", { name: "Awesome Hexagonal Architecture" }).should("exist");
    });
});` },
        { type: "text", content: "Las distintas capas de tests se suelen representar en una pirámide, estando los unitarios con la mayor cantidad de tests en la base, ya que pasan muy rápido pero nos dan menos confianza porque testean una pequeña parte de nuestra aplicación falseando llamadas externas, y los e2e en la parte superior, siendo menos tests ya que pasan lentamente pero aportándonos el máximo de confianza." },
        { type: "text", content: "Según nuestro contexto podemos ajustar la cantidad de tests de una capa u otra. Por ejemplo, en una aplicación sencilla podríamos hacer solo tests de aceptación, o si nuestros puertos no tienen mucha complejidad podríamos no hacer tests de integración." }
    ]
}; 