export default {
  title:
    "21d Cómo gestionar configuración de infraestructura   Explicit Arguments",
  videoId: "QMr0hyVfK_c",
  notes: [
    { type: "subtitle", content: "Del Container a Explicit Arguments" },
    { type: "text", content: "En el paso anterior hemos conseguido extraer los parámetros de configuración de BD a un contenedor fuera de la clase, sin embargo esto nos lleva al problema de tener que traernos todos los datos que ese contenedor posea, con los riesgos que esto acarrea ⚠️" },
    { type: "subtitle", content: "Solución: Pasar solo lo necesario" },
    { type: "text", content: "Para evitar esta contraprestación y además hacer mucho más explícitos los datos con los que interactuamos lo que haremos será, tal y como vimos en videos anteriores, pasarle por constructor únicamente los datos que la clase necesita" },
    { type: "subtitle", content: "Implementación en Container" },
    { type: "code", content: `export class Container {
    mysqlHost     = "localhost";
    mysqlUser     = "root";
    mysqlPassword = "";
    mysqlDatabase = "super_project";
    mysqlPort     = 3306;

    mysqlUserRepository = new MySqlUserRepository(
        this.mysqlHost,
        this.mysqlUser,
        this.mysqlPassword,
        this.mysqlDatabase,
        this.mysqlPort
    );
    usersSearcher       = new UsersSearcher(this.mysqlUserRepository);
}` },
    { type: "text", content: "De este modo nuestro repositorio ya no necesita acoplarse a todo el contenedor, sino que sólo tendrá acceso a lo que necesita realmente." },
    { type: "subtitle", content: "Implementación en MySqlUserRepository" },
    { type: "code", content: `export class MySqlUserRepository {
    constructor(mysqlHost, mysqlUser, mysqlPassword, mysqlDatabase, mysqlPort) {
        const Mysql     = require('sync-mysql');
        this.connection = new Mysql({
            host: mysqlHost,
            user: mysqlUser,
            password: mysqlPassword,
            database: mysqlDatabase,
            port: mysqlPort
        });
    }

    searchAll() {
        return this.connection.query('SELECT * FROM users');
    }
}` },
    { type: "text", content: "Por supuesto, este pasito nos lleva de nuevo al problema de tener separadas y sin cohesión todas esas migas de información, pero ¡lo solucionaremos enseguida! 👌" }
  ],
};
