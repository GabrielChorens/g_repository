export default {
  title: "21c Cómo gestionar configuración de infraestructura   Container",
  videoId: "VRf5m3rzRVw",
  notes: [
    { type: "subtitle", content: "Extracción de configuración de infraestructura" },
    { type: "text", content: "Después de extraer la clase repositorio, aún tenemos los parámetros de configuración de infraestructura dentro de ella. Necesitamos una mejor solución para manejar estos parámetros que probablemente se usen en múltiples repositorios." },
    { type: "subtitle", content: "Container como solución" },
    { type: "text", content: "Crearemos un Container que podrá ser instanciado en cualquier parte de la aplicación para manejar estos parámetros de configuración." },
    { type: "code", content: `export class Container {
    mysqlHost     = "localhost";
    mysqlUser     = "root"; 
    mysqlPassword = "";
    mysqlDatabase = "super_project";
    mysqlPort     = 3306;

    mysqlUserRepository = new MySqlUserRepository(this);
    usersSearcher       = new UsersSearcher(this.mysqlUserRepository);
}` },
    { type: "text", content: "Esta práctica es común y similar a los archivos 'Env/environment' donde podemos tener diferentes valores según el entorno. En ambos casos nos conectamos a una única fuente que contiene toda la información de configuración." },
    { type: "subtitle", content: "Beneficios adicionales" },
    { type: "text", content: "Los containers no solo sirven para almacenar variables de configuración, sino que también son útiles para instanciar clases que necesitemos en diferentes partes de nuestra aplicación." }
  ],
};
