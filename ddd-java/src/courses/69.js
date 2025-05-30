export default {
  title: "69 Planteamiento pipeline del deploy a produccion",
  videoId: "1Mw7FjPbAE4",
  notes: [
    { type: "subtitle", content: "🚀 Planteamiento pipeline del deploy a producción" },
    { type: "text", content: "A la hora de desplegar en producción contamos con dos posibilidades: crear un único archivo jar para todas las aplicaciones (fat jar) o crear un jar por cada aplicación (thin jar). En nuestro caso nos decantamos por tener un único jar ejecutable que podremos posteriormente parametrizar a la hora de levantarlo en el servidor (tal como veíamos en la ejecución del Starter)" },
    { type: "text", content: "El comando bootJar de Spring será el que nos cree el fatjar comprimido en nuestro directorio '/build/distributions', posteriormente podremos bien descomprimirlo y lanzar el ejecutable o utilizar el comando de java java -jar para que se ejecute directamente" },
    { type: "text", content: "Hemos creado esta pipeline de Github Actions que nos permitirá de una manera super sencilla levantar el entorno en docker y lanzar los tests para asegurarnos de que el código que despleguemos funciona correctamente 👌 Ademas, esta misma build que ha pasado los tests será la que nos llevemos al servicio de turno en producción" },
    { type: "subtitle", content: "¿Alguna Duda?" },
    { type: "text", content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇" },
    { type: "text", content: "¡Nos vemos en el siguiente video: 🚶‍♂️ Conclusión y siguientes pasos!" }
  ],
};
