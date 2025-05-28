export default {
  title:
    "22 Simplificando niveles de indentación Replace Nested Conditional with Guard Clauses Refactoring",
  videoId: "9OY4pKfwiRA",
  notes: [
    { type: "subtitle", content: "Complex Conditionals y Cláusulas de Guarda" },
    { type: "text", content: "Uno de los code smells que más frecuentemente vamos a encontrar y que más nos pueden dificultar la comprensión del código son los Complex Conditionals, y entre las estrategias que tenemos para simplificar los niveles de identación generados en estos casos está el uso de Cláusulas de Guarda" },
    { type: "subtitle", content: "Ejemplo: StudentGradeCalculator" },
    { type: "text", content: "Para ver los beneficios que aporta esta técnica retomaremos el ejemplo que vimos en lecciones anteriores sobre la clase StudentGradeCalculator" },
    { type: "subtitle", content: "Estado inicial" },
    { type: "code", content: `public float calculateGrades(final List<Pair<Integer, Float>> examsGrades, final boolean hasReachedMinimumClasses) {
    if (!examsGrades.isEmpty()) {
        float gradesSum       = gradesSum(examsGrades);
        int   gradesWeightSum = gradesWeightSum(examsGrades);

        if (gradesWeightSum == 100) {
            if (hasReachedMinimumClasses) {
                if (hasToIncreaseOneExtraPoint()) {
                    return Float.min(10f, gradesSum + 1);
                } else {
                    return gradesSum;
                }
            } else {
                return 0f;
            }
        } else if (gradesWeightSum > 100) {
            return -1f;
        } else {
            return -2f;
        }
    } else {
        return 0f;
    }
}` },
    { type: "text", content: "Este método recibe el listado de pares peso-nota junto a la indicación de si el alumno ha asistido al mínimo de clases exigido y en base a esto calculaba la nota final del alumno" },
    { type: "text", content: "Como se puede apreciar, existe una gran complejidad en términos de niveles de identación que nos van a dificultar enormemente seguir mentalmente las condiciones que se están cumpliendo a cada nivel que nos adentramos, pero es que, además, toda la lógica relativa a la gestión de errores está tan lejos del punto donde se evalúa esa lógica, que la visibilidad sobre donde proviene esa salida es tremendamente reducida 🔭" },
    { type: "subtitle", content: "Aplicando Cláusulas de Guarda" },
    { type: "text", content: "Aunque generalmente las cláusulas de guarda se establecen para gestionar casos excepcionales (lanzamiento de excepciones), en este caso vamos a utilizarla para controlar un caso completamente válido como es el hecho de que un alumno no haya asistido a clase." },
    { type: "subtitle", content: "Invirtiendo el condicional" },
    { type: "code", content: `public float calculateGrades(final List<Pair<Integer, Float>> examsGrades, final boolean hasReachedMinimumClasses) {
    if(examsGrades.isEmpty()){
      return 0f;
    }
    } else {
        float gradesSum       = gradesSum(examsGrades);
        int   gradesWeightSum = gradesWeightSum(examsGrades);

        if (gradesWeightSum == 100) {
          // more...
}` },
    { type: "text", content: "Lo primero que haremos será invertir la condición del bloque IF gracias a la ayuda del propio IDE (pulsando Alt + Intro sobre el if) para traernos arriba el comportamiento que antes estaba asociado al else" },
    { type: "subtitle", content: "Eliminando else redundante" },
    { type: "code", content: `public float calculateGrades(final List<Pair<Integer, Float>> examsGrades, final boolean hasReachedMinimumClasses) {
    if(examsGrades.isEmpty()){
      return 0f;
    }

    float gradesSum       = gradesSum(examsGrades);
    int   gradesWeightSum = gradesWeightSum(examsGrades);

    if (gradesWeightSum == 100) {
      // more...
}` },
    { type: "text", content: "Al existir un return dentro del bloque if que rompe con el flujo, tenemos la certeza de que sólo entrará en el resto del código si no ha entrado previamente en el if, por lo que carece de sentido mantener la identación del else y podemos así eliminarla, simplificando nuestro código 👌" },
    { type: "text", content: "Cabe señalar que el hecho de tener múltiples puntos de retorno no debe entenderse necesariamente como mala práctica, aunque en lenguajes como BASIC o Pascal fuera algo que convenía evitar, hoy en día en la mayoría de lenguajes es un leak de cara a la máquina más que superado y que no debería de imponerse por encima de la legibilidad y la eficiencia de cara al humano 🤖👩‍💻" },
    { type: "subtitle", content: "Reduciendo aún más los niveles de identación" },
    { type: "code", content: `public float calculateGrades(final List<Pair<Integer, Float>> examsGrades, final boolean hasReachedMinimumClasses) {
    // more...
    if (gradesWeightSum != 100) {
      if (gradesWeightSum > 100) {
              return -1f;
          } else {
              return -2f;
          }
    }
    if (hasReachedMinimumClasses) {
            if (hasToIncreaseOneExtraPoint()) {
                return Float.min(10f, gradesSum + 1);
            } else {
                return gradesSum;
            }
        } else {
            return 0f;
        }
}` },
    { type: "text", content: "En el caso de la lógica vinculada a gradesWeightSum nos encontramos que tenemos que además de validar si el valor es correcto, tenemos un bloque else if y else para los casos contrarios (corner cases) tanto por encima como por debajo, pero de nuevo podremos invertir el condicional y, puesto que ambos corner cases ejecutarán un return, nuevamente podremos ahorrarnos la identación del else 🙌" },
    { type: "text", content: "Una vez aplicadas todas las cláusulas de guarda, vemos cómo no existe más de un nivel de identación dentro de los bloques if y la lógica de este cálculo de notas del estudiante se encuentra en este primer nivel y no al final de una serie de condicionales encadenados, lo cual hace que sea sumamente fácil de leer y comprender" },
    { type: "subtitle", content: "¿Alguna Duda?" },
    { type: "text", content: "Si tienes alguna duda sobre el contenido del video o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇" },
    { type: "text", content: "¡Nos vemos en el siguiente video: ⛓️ Simplificando niveles de indentación: Replace Control Flag with Break Refactoring!" },
  ],
};
