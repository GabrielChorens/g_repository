export default {
  title: "04 Refactor extract method",
  videoId: "N094x0iZX84",
  notes: [
    {
      type: "text",
      content:
        "Para empezar a refactorizar el código que vimos en el vídeo anterior vamos a ayudarnos de algunas de las herramientas y utilidades que nos ofrece nuestro IDE de confianza, en este caso utilizaremos IntelliJ por lo que se recomendamos encarecidamente que lo echéis un ojo al curso de IntelliJ IDEA",
    },

    {
      type: "text",
      content:
        "Una vez decidido a refactorizar nuestro código, hay dos cuestiones sumamente importantes que debemos considerar desde el inicio: comprender qué es lo que hace el código y disponer de una cobertura de tests que nos indiquen si hemos roto algo al tratar de mejorarlo. En este caso, y como vemos aquí, contamos con varios tests que ya de por sí nos dejan entrever que hay muchas casuísticas a validar dentro de este método, con lo que si a ciegas hubieras sido todo un peligro",
    },

    {
      type: "code",
      content:
        "class Pair<FirstType, SecondType> {\n    final private FirstType first;\n    final private SecondType second;\n\n    public Pair(FirstType first, SecondType second) {\n        this.first = first;\n        this.second = second;\n    }\n\n    public FirstType first() {\n        return first;\n    }\n\n    public SecondType second() {\n        return second;\n    }\n}",
    },
    {
      type: "text",
      content:
        'Para seguir posicionándonos en situación, esta clase `Pair` que veremos en el método no es sino un contenedor de dos valores de tipos genéricos, en el caso que nos atañe se viene utilizando para recoger pares de notas con sus respectivos pesos en la evaluación, así como para la asociación de estudiantes con su catalogación como becarios/tutores o no. En otros lenguajes menos tipados que tendríamos en su lugar sería simplemente arrays con pares de valores (["data", true], ["id", 1])',
    },
    {
      type: "text",
      content:
        "Una vez ubicados ¿Por dónde empezamos? En un fallo habitual (super ponernos a refactorizarlo todo de una vez) ya que sino corre el riesgo de abrumarse. Gracias al conocimiento que nos permitirá seguir una cierta metodología de refactoring, que es justamente lo que queremos lograr",
    },

    {
      type: "code",
      content:
        "public float calculateGrade(final List<Pair<Integer, Float>> examGrades, final boolean hasTeacherRecommendation) {\n    if (!examGrades.isEmpty()) {\n        boolean hasTeacherRecommendation = false;\n        \n        if (!examGrades.isEmpty()) {\n            List<Pair<String, Boolean>> teachers = pairsByTeachers.get();\n            \n            for (Pair<String, Boolean> teacher : teachers) {\n                if (teacher.second() == true) {\n                    hasTeacherRecommendation = true;\n                    continue;\n                }\n            }\n        } else {\n            continue;\n        }\n        \n        if (hasTeacherRecommendation) {\n            return Float.min(10, gradeValue + 1);\n        }\n    }\n    return 0;\n}",
    },
    {
      type: "text",
      content:
        "Para extraer el método, bastará con seleccionar la porción de texto en cuestión, hacer click derecho para abrir el menú de opciones y elegir la opción Refactor Method. Si queremos hacerlo algo más pro podemos utilizar el atajo de teclado Ctrl + T que nos abrirá el menú de refactor con la opción preseleccionada directamente para seleccionar esa porción de código seleccionado. También podemos utilizar el atajo Ctrl + Option + M si nos encontramos directamente la opción de extraer un método.",
    },
    {
      type: "text",
      content:
        "Sea como sea, esto nos llevará al menú de configuración donde el IDE ya nos estará decidiendo el tipo de retorno del método, los parámetros de entrada que necesitará y la visibilidad (recordad que los detalles de implementación siempre siempre siempre debería tener la menor visibilidad posible). Al retornar un booleano, el propio IDE nos añade el prefijo 'is' de forma bastante semántica.",
    },

    {
      type: "text",
      content:
        "Ahora nuestro método ya resulta algo más sencillo de leer, reduciendo todo el código anterior a una única llamada al método para asignarle el valor de retorno a la variable, y si ejecutamos los test veremos que siguen pasando correctamente",
    },
    {
      type: "text",
      content:
        "Algo que no debemos pasar por alto al llevar a cabo este tipo de técnicas es preguntarnos ¿Este nuevo método está realizando algún side effect además de devolver un valor? Y es que resulta muy peligroso el hecho de modificar el estado de la clase en que tengamos constancia explícita de qué está pasando, estaríamos ejecutando el método pensando que va a producir un determinado efecto cuando en realidad está haciendo mucho más por debajo",
    },
    {
      type: "text",
      content:
        "En su lugar, deberíamos intentar que las modificaciones de estado queden siempre fuera del código sobre el que vamos a aplicar el extract method. Un símil útil del lenguaje típados es el hecho de marcar métodos como void/null para especificar justamente métodos que van a producir side effects",
    },
    {
      type: "text",
      content:
        "Finalmente, daremos un pasito más en la mejora del código gracias al inline, que consiste en sustituir las llamadas a una variable por el cálculo de su derecha (su asignación). En este caso, como vimos al principio, sólo había un punto en el que se estuviera consultando el valor de esa variable y es precisamente donde estaremos llamando al método que acabamos de extraer. Este tipo de técnica también es conocida como 'Query method' porque únicamente nos interesa consultar un valor",
    },
  ],
};
