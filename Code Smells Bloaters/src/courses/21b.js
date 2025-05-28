export default {
  title:
    "21b Cómo gestionar configuración de infraestructura Introduce Parameter Object en constructor",
  videoId: "k5l_o81hg44",
  notes: [
    {
      type: "text",
      content: "Seguimos trabajando sobre el refactor de 'Introduce Parameter Object' pero simplificando el caso y dividiéndolo en 5 pequeños pasos."
    },
    {
      type: "subtitle", 
      content: "Estado inicial - Clase UserSearcher"
    },
    {
      type: "code",
      content: `const mysqlHost = "localhost";
const mysqlUser = "root"; 
const mysqlPassword = "";
const mysqlDatabase = "super_project";
const mysqlPort = 3306;

const Mysql = require('sync-mysql');
const connection = new Mysql({
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDatabase,
    port: mysqlPort
});

const users = connection.query('SELECT * FROM users')
console.log(users)`
    },
    {
      type: "text",
      content: "El código inicial tiene todo mezclado en el mismo archivo: configuración, infraestructura de BD y lógica de negocio. Esto dificulta la mantenibilidad y testabilidad."
    },
    {
      type: "text", 
      content: "Es imposible crear tests unitarios por el acoplamiento con la BD. Se necesitaría al menos un test de aceptación."
    },
    {
      type: "subtitle",
      content: "Primer paso - Clase MySqlUserRepository"  
    },
    {
      type: "code",
      content: `export class MySqlUserRepository {
    mysqlHost = "localhost";
    mysqlUser = "root";
    mysqlPassword = "";
    mysqlDatabase = "super_project";
    mysqlPort = 3306;

    constructor() {
        const Mysql = require('sync-mysql');
        this.connection = new Mysql({
            host: this.mysqlHost,
            user: this.mysqlUser,
            password: this.mysqlPassword,
            database: this.mysqlDatabase,
            port: this.mysqlPort
        });
    }

    searchAll() {
        return this.connection.query('SELECT * FROM users');
    }
}`
    },
    {
      type: "text",
      content: "Se encapsula la lógica de BD en una clase separada que se podrá inyectar en el caso de uso."
    },
    {
      type: "subtitle",
      content: "Inyección en el constructor - Clase UserSearcher"
    },
    {
      type: "code", 
      content: `export class UsersSearcher {
    constructor(repository) {
        this.repository = repository;
    }

    searchAll() {
        return this.repository.searchAll();
    }
}`
    },
    {
      type: "text",
      content: "En JavaScript no podemos especificar el tipo del repositorio, pero el caso de uso ahora solo maneja su lógica específica. Esto permite crear tests unitarios con un repositorio simulado."
    }
  ],
};
