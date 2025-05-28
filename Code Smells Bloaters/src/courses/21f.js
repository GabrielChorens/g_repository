export default {
  title: "21f Cómo gestionar configuración de infraestructura   DB Connection",
  videoId: "pxsKzbqVNJA",
  notes: [
    { type: "subtitle", content: "Del Parameter Object a DB Connection" },
    { type: "text", content: "Tener que repetir la creación de la conexión a BD en cada repositorio es algo que nos chirría bastante y que obliga a que cada repositorio tenga que conocer demasiados detalles de cómo se instancia dicha conexión, para solucionarlo podemos optar por la creación de una clase Connection que se encargue de dichos detalles" },
    { type: "subtitle", content: "Implementación en MySqlUserRepository" },
    { type: "code", content: `export class MySqlUserRepository {
    constructor(connection) {
        this.connection = connection;
    }

    searchAll() {
        return this.connection.query('SELECT * FROM users');
    }
}` },
    { type: "text", content: "Con esto estamos consiguiendo que nuestro repositorio se desentienda absolutamente de parámetros y lógica de configuración, responsabilizándose únicamente de la ejecución de consultas a BD" },
    { type: "subtitle", content: "Implementación en Container" },
    { type: "code", content: `export class Container {
    Mysql = require('sync-mysql');
    
    mysqlConfig     = new MySqlConfig();
    mySqlConnection = new this.Mysql({
        host:     this.mysqlConfig.host,
        user:     this.mysqlConfig.user,
        password: this.mysqlConfig.password,
        database: this.mysqlConfig.database,
        port:     this.mysqlConfig.port
    });
    
    mysqlUserRepository = new MySqlUserRepository(this.mySqlConnection);
    usersSearcher       = new UsersSearcher(this.mysqlUserRepository);
}` },
    { type: "text", content: "Al inyectar la conexión de este modo, evitamos también el hecho de tener que llevarnos todo el Container a los repositorios, que era uno de los problemas que veíamos previamente, además de dejar las relaciones de dependencias mucho más explícitas 🙌" },
    { type: "text", content: "En relación a la posibilidad de extraer aún más la inyección de esta conexión podéis revisar los cursos de Principios SOLID y Arquitectura Hexagonal para profundizar más en el tema de composición sobre herencia" },
    { type: "subtitle", content: "En resumen:" },
    { type: "text", content: "Nuestro caso de uso ahora recibe el repositorio por inyección de dependencias, por lo que podemos doblarlo en tiempo de tests: Ahora es testeable 👍" },
    { type: "text", content: "El repositorio estaría recibiendo también por inyección una conexión a BD, con lo que su responsabilidad es ahora mínima y el código mucho más legible 👍" },
    { type: "text", content: "La conexión pertenece a una librería externa, pero al estar ya acoplados a esta librería a nivel de infraestructura, nuestra opinión es que no merece la pena introducir otro nivel más de indirección creando nuestra propia clase Connection 🤷🏼‍♂️" },
    { type: "subtitle", content: "¿Alguna Duda?" },
    { type: "text", content: "Si tienes alguna duda sobre el contenido del video o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇" },
    { type: "text", content: "¡Nos vemos en la siguiente lección: Complex Conditionals Code Smell!" },
  ],
};
