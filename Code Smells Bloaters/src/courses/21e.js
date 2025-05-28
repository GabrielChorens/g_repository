export default {
  title:
    "21e Cómo gestionar configuración de infraestructura   Parameter Object",
  videoId: "1RmPww4wTXc",
  notes: [
    { type: "subtitle", content: "Del Explicit Arguments al Parameter Object" },
    { type: "text", content: "Pasar todos los atributos de configuración disgregados no es la mejor solución, por lo que el siguiente paso será cohesionarlos dentro de un Parameter Object" },
    { type: "subtitle", content: "Implementación con Parameter Object" },
    { type: "code", content: `export class MySqlUserRepository {
    constructor(config) {
        const Mysql     = require('sync-mysql');
        this.connection = new Mysql({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database,
            port: config.port
        });
    }

    searchAll() {
        return this.connection.query('SELECT * FROM users');
    }
}` },
    { type: "text", content: "El DTO MySqlConfig que aglutina la configuración de BD se llevará hasta el propio repositorio para establecer la conexión. Los valores de configuración están harcodeados en el DTO, pero podría escalarse para parsear valores desde un fichero yaml según el entorno" },
    { type: "subtitle", content: "Consideraciones importantes" },
    { type: "text", content: "Si bien este paso permite compartir la configuración de BD entre distintos repositorios, también permite que estos sigan siendo los encargados de establecer la conexión a BD y conozcan la lógica de instanciación de la conexión 🙅‍♂️" }
    ],
};
