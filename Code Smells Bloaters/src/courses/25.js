export default {
  title:
    "25 Trasladando reglas de integridad con semántica de dominio a condicionales Decompose Conditional",
  videoId: "0ZusdVpqKu4",
  notes: [
    {
      type: "subtitle",
      content: "Refactorizando condicionales complejos"
    },
    {
      type: "text", 
      content: "Ya hemos conseguido refactorizar enormemente nuestra clase StudentGradeCalculator aplicando diversas técnicas y eliminando diferentes code smells, sin embargo queremos añadir una vuelta de tuerca más para abordar otro problema bastante habitual como es la presencia de condicionales complejos"
    },
    {
      type: "subtitle",
      content: "Clase StudentGradeCalculator (condicional inicial)"
    },
    {
      type: "code",
      content: "private boolean hasToIncreaseOneExtraPoint() {\n\n    for (Map.Entry<Integer, List<Pair<String, Boolean>>> yearlyTeachers : allYearsTeachers.entrySet()) {\n        if (yearToCalculate != yearlyTeachers.getKey()) {\n          continue;\n        }\n        List<Pair<String, Boolean>> teachers = yearlyTeachers.getValue();\n\n        for (Pair<String, Boolean> teacher : teachers) {\n            Boolean isBenevolent = teacher.second();\n\n            if (isBenevolent) {\n                return true;\n            }\n        }\n    }\n\n    return false;\n}"
    },
    {
      type: "text",
      content: "Hasta ahora, la lógica para determinar si a un alumno se le debía subir un punto extra en la nota giraba únicamente en torno al hecho de que al menos uno de los profesores de ese año fuera benevolente, lo cual se reflejaba a través de un booleano en el Pair que identifica a cada profesor"
    },
    {
      type: "text",
      content: "Pero a fin de emular otras condiciones más complejas que podríamos encontrar en nuestro día a día hemos añadido algo más de miga:"
    },
    {
      type: "subtitle",
      content: "Clase StudentGradeCalculator (condicional complejo)"
    },
    {
      type: "code",
      content: "private boolean hasToIncreaseOneExtraPoint() {\n\n    // more...\n        for (Pair<String, Boolean> teacher : teachers) {\n            Boolean isBenevolent = teacher.second();\n\n            if (isBenevolent && yearToCalculate % 2 == 0 || tearcher.first().equals(\"Nuria\")) {\n                return true;\n            }\n        }\n    }\n\n    return false;\n}"
    },
    {
      type: "text",
      content: "Con este nuevo escenario, un alumno recibirá un punto extra siempre que haya algún profesor benevolente en un año par o si 'Nuria' está entre el equipo docente de ese año 🤔. No obstante, a simple vista y aún siendo un ejemplo sencillo, ya resulta algo difícil de ver dónde acaba cada condición y qué elementos se evalúan"
    },
    {
      type: "text",
      content: "Podéis ver aquí Los tests correspondientes a este nuevo escenario. Como hemos señalado en otros vídeos, el hecho de manejar internamente el listado de profesores (ya sea en una colección estática, accediendo a un repositorio que no es inyectado vía constructor o por otra vía) nos supone un problema enorme a la hora de testear toda esta lógica, ya que estamos completamente acoplados a esos datos ⛓️ Una manera de solucionar este problema sería precisamente inyectar los datos por constructor y poder así mockearlo en base a la casuística que queramos testear 👌"
    },
    {
      type: "subtitle",
      content: "Clase StudentGradeCalculator (asociaciones explícitas)"
    },
    {
      type: "code",
      content: "private boolean hasToIncreaseOneExtraPoint() {\n\n    // more...\n        for (Pair<String, Boolean> teacher : teachers) {\n            Boolean isBenevolent = teacher.second();\n\n            if ((isBenevolent && yearToCalculate % 2 == 0) || tearcher.first().equals(\"Nuria\")) {\n                return true;\n            }\n        }\n    }\n\n    return false;\n}"
    },
    {
      type: "text",
      content: "A la hora de abordar el refactor de este tipo de casos condicionales complejos, algo que consideramos de bastante ayuda es hacer explícitas las reglas de interpretación que el lenguaje tenga para los operadores lógicos (AND, OR, &&, ||) 🔍 Desde nuestro IDE de confianza podemos ayudarnos del atajo de 'añadir paréntesis clarificadores' para que justamente nos haga más explícitas las agrupaciones y prioridades existentes dentro del condicional, también podremos posteriormente eliminar aquellos paréntesis que consideremos innecesarios desde la misma colección de atajos del IDE"
    },
    {
      type: "text",
      content: "Una vez identificados, podemos descomponer (decompose conditional) el condicional en sus tres bloques (condición-cuerpo-alternativa) para evidenciar la distinción entre las distintas condiciones y poder aportar posteriormente mayor semántica (consolidate conditional) a estas reglas de integridad de nuestro negocio"
    },
    {
      type: "text",
      content: "Otro tip que consideramos interesante es el hecho de utilizar nombres en positivo a la hora de consolidar una condición, lo que nos permitirá una evaluación mucho más sencilla de cada sentencia de forma aislada 👍"
    },
    {
      type: "subtitle",
      content: "Clase StudentGradeCalculator (descomponer y consolidar condicional)"
    },
    {
      type: "code",
      content: "private boolean hasToIncreaseOneExtraPoint() {\n\n    // more...\n        for (Pair<String, Boolean> teacher : teachers) {\n            Boolean isBenevolent = teacher.second();\n            boolean isEvenYear   = yearToCalculate % 2 == 0;\n\n            if ((isBenevolent && isEvenYear) || teacher.first().equals(\"Núria\")) {\n                return true;\n            }\n        }\n    }\n\n    return false;\n}"
    },
    {
      type: "text",
      content: "Una vez que descomponemos el condicional, resulta muy sencillo separarlo (split) en múltiples bloques if, lo cual resulta muy interesante en aquellos casos en los que tenemos un mayor número de bloques para tener una lectura mucho más sencilla del código, además de que nos permitirá identificar y refactorizar aquellos bloques de condiciones/criterios que pueden estar repitiéndose en multiples puntos de nuestro código"
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?"
    },
    {
      type: "text",
      content: "Si tienes alguna duda sobre el contenido del video o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en la siguiente lección: 🦵 Argumentos de funciones usados como parámetros: Parameter Code Smell!"
    }
  ],
};
