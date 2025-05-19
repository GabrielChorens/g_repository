export default {
    title: "08 Implementando nuestro repositorio para MySQL",
    videoId: "aTy6Rq4KLLA",
    notes: [
        { type: "subtitle", content: "El paquete db/sql" },
        { type: "text", content: "El paquete db/sql de la librería estándar de Go nos proporciona una interfaz genérica para cualquier base de datos de tipo SQL, así que es esta la alternativa que recomendamos para la implementación de nuestros repositorios." },
        { type: "link", content: "https://golang.org/pkg/database/sql/" },
        { type: "text", content: "Pues, más allá de la propia capa de abstracción que nos proporciona nuestro repositorio, dicho paquete nos ayuda a tener que cambiar lo mínimo nuestro código si el día de mañana cambiamos el tipo de base de datos." },
        { type: "subtitle", content: "Los drivers" },
        { type: "text", content: "Si bien el paquete db/sql nos permitirá que nuestro código sea lo más agnóstico posible a la base de datos SQL específica que usemos, no por ello nos evitaremos tener que usar un driver específico." },
        { type: "text", content: "En nuestro caso hemos usado el driver mysql para MySQL, pero también tenemos drivers para PostgreSQL (pg), SQLite (go-sqlite3) o Microsoft SQL Server (go-mssqldb), entre otros." },
        { type: "link", content: "https://github.com/go-sql-driver/mysql" }
        ,
        { type: "subtitle", content: "La construcción de las sentencias SQL" },
        { type: "text", content: "Como ya hemos comentado durante las diferentes lecciones, en el ecosistema Go tenemos varias alternativas si lo que preferimos es usar un ORM." },
        { type: "text", content: "Sin embargo, para este curso vamos a usar go-sqlbuilder, que simplemente se trata de la librería que lo que nos permitirá es una forma más sencilla de construir nuestras sentencias SQL en base a nuestros DTOs de persistencia." },
        { type: "link", content: "https://github.com/huandu/go-sqlbuilder" },
        { type: "text", content: "Aquí podéis encontrar la documentación de dicha librería con algunos ejemplos de código para los diferentes tipos de sentencias (SELECT, INSERT INTO, UPDATE, etc)." },
        { type: "link", content: "https://pkg.go.dev/github.com/huandu/go-sqlbuilder" }
    ]
}; 