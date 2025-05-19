export default {
    title: "09 Test del repositorio de MySQL",
    videoId: "fnX4fr_5__8",
    notes: [
        { type: "subtitle", content: "Múltiples estrategias de tests para el repositorio" },
        { type: "text", content: "A la hora de cubrir mediante tests la implementación de nuestro repositorio tenemos varias estrategias. Una de las más frecuentes son los tests de integración, en cuyo caso lo que hacemos es testear las diferentes funciones de nuestra implementación contra su correspondiente infraestructura (una base de datos real)." },
        { type: "text", content: "Sin embargo, como creemos que con las herramientas que ya os hemos proporcionado deberíais ser capaces de escribir dichos tests, en esta lección os hemos querido proponer otro diferente tipo de tests, que tendrían un enfoque más unitario." },
        { type: "text", content: "Es decir, en este caso específico que vamos a testear una implementación SQL, lo que vamos a comprobar mediante tests es que nuestra implementación del repositorio realiza las sentencias SQL que nosotros queremos que haga, lo cual nos a permitir detectar bugs a la hora de usar librerías de generación de sentencias SQL (como go-sqlbuilder), como el popular problema de las N+1 consultas." },
        { type: "subtitle", content: "La librería go-sqlmock" },
        { type: "text", content: "Para ello, vamos a hacer uso de la librería go-sqlmock, que nos permitirá crear una conexión compatible con el paquete db/sql que vimos anteriormente para escuchar todas las consultas que se están enviando a través de la misma y poder realizar determinadas comprobaciones en base a ello." },
        { type: "link", content: "https://github.com/DATA-DOG/go-sqlmock" },
        { type: "subtitle", content: "Generación de valores de test" },
        { type: "text", content: "Como se comenta en el vídeo, una opción que tendríamos a la hora de escribir nuestros tests sería hacer uso de una librería de generación de datos falsos (por ejemplo, direcciones postales, nombres y apellidos, teléfonos, etc)." },
        { type: "text", content: "En caso de que queráis explorar esa opción, os recomendamos echar un vistazo a faker." },
        { type: "link", content: "https://github.com/dmgk/faker" }
    ]
}; 