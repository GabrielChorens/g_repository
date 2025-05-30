export default {
  title: "10 Refactoring a UUIDs como identificadores",
  videoId: "CQzt9kIi7X0",
  notes: [
    { type: "subtitle", content: "UUIDs como Identificadores" },
    {
      type: "text",
      content: "Antes de entrar a ver cómo llevamos a cabo el modelado de los identificadores os recomendamos encarecidamente que hayáis visto el curso de CQRS, donde dedicamos una lección exclusívamente dedicada a explicar por qué pasar los identificadores desde el cliente. Con este punto de partida asumimos que lo que esperamos será entonces recibir estos identificadores en formato UUIDs"
    },
    {
      type: "text", 
      content: "El objetivo entonces es crear nuestro primer Value Object CourseId, el cual nos permitirá poner una capa por encima a la propia clase UUID de Java y en la cual podremos modelar y asegurarnos de que cumple con el formato que queremos"
    },
    {
      type: "text",
      content: "El lenguaje Java nos provee de una clase UUID propia con un conjunto importante de métodos que nos facilitarán bastante la vida, ejemplo de ello es el método fromString(), que podremos usar a modo de named constructor para crear instancias de UUID en base a un String"
    },
    {
      type: "text",
      content: "Para ser consistentes con nuestra API, nuestro Value Object tendrá un atributo 'value' que definiremos como privado y de tipo String. Este atributo sólo se asigna desde el constructor y únicamente después de haber pasado una cláusula de guarda que nos garantice que cumple con nuestro formato. Es aquí, en esta cláusula, donde aprovecharemos el fromString() del UUID de Java, que lanza una excepción cuando el String que le pasamos no es válido"
    },
    { type: "subtitle", content: "Clase Identifier (Resultado final):" },
    {
      type: "code",
      content: "public abstract class Identifier implements Serializable {\n    final protected String value;\n\n    public Identifier(String value) {\n        ensureValidUuid(value);\n\n        this.value = value;\n    }\n\n    protected Identifier() {\n        this.value = null;\n    }\n\n    public String value() {\n        return value;\n    }\n\n    private void ensureValidUuid(String value) throws IllegalArgumentException {\n        UUID.fromString(value);\n    }\n\n    // ... \n}"
    },
    {
      type: "text",
      content: "Puesto que se trata de un patrón que va a repetirse en los identificadores de nuestros agregados, lo que haremos será sacar esta lógica a una clase abstracta Identifier en la carpeta Shared que ahora implementará nuestro CourseId (En el resultado final de esta clase, se ha añadido la interface Serializable para poder serializarla a formato Json)"
    },
    {
      type: "text",
      content: "El hecho de que el atributo de clase sea un String y no directamente un UUID puede ser objeto de discusión y al final es algo que debe consensuar el equipo, pero si que es importante el hecho de evitar filtraciones de los detalles de la implementación, es decir, debemos evitar exponer (en el getter o el constructor de la clase) el tipo de datos que estamos wrappeando y en su lugar trabajar con datos primitivos tanto a la entrada como a la salida. Además, encapsular estos detalles nos facilitará muchísimo el trabajo si en algún momento tuviéramos la necesidad de modificarlos"
    },
    { type: "subtitle", content: "¿Alguna Duda?" },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o quieres compartir alguna sugerencia no dudes en abrir una nueva discusión más abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: 🧞‍♂️ Value Objects: Immutabilidad y tips para agilizar desarrollo!"
    }
  ],
};
