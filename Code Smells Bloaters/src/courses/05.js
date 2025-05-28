export default {
  title: "05 Jugando a ser puristas",
  videoId: "4Ay69Ad8F98",
  notes: [
    {
      type: "subtitle",
      content: "Jugando a ser puristas: Contiene trazas de programación funcional"
    },
    {
      type: "text", 
      content: "Seguimos puliendo un poco más nuestro método y ahora veremos cómo hacerlo siendo un poco más 'puristas' al darle un toque de programación funcional"
    },
    {
      type: "subtitle",
      content: "Identificando el code smell"
    },
    {
      type: "text",
      content: "Ponemos ahora el foco en este bucle for que vemos cómo está siendo aprovechado para hacer dos operaciones distintas: por un lado hacer el cálculo del sumatorio de notas y por otro el sumatorio del peso de dichas notas. Aunque este código podría aceptarse que es más óptimo para la máquina, entendemos que por el coste computacional que supone no compensa la pérdida de legibilidad en el código"
    },
    {
      type: "code",
      content: "public float calculateGrade(final List<Pair<Integer, Float>> examGrades) {\n    if (!examGrades.isEmpty()) {\n        float gradeSum = 0;\n        int gradesWeightSum = 0;\n        \n        for (Pair<Integer, Float> examGrade : examGrades) {\n            gradeSum += (examGrade.first() * examGrade.second() / 100);\n            gradesWeightSum += examGrade.first();\n        }\n    }\n    return 0;\n}"
    },
    {
      type: "text",
      content: "Ahora que hemos dado este pequeño 'paso atrás', resulta mucho más claro ver cuál será nuestro próximo refactor y es por eso que resulta interesante llevarlos lo más cerca de la inicialización de la variable ese fragmento de código en el cual la acabamos rellenando"
    },
    {
      type: "subtitle", 
      content: "Extrayendo a funciones lambda"
    },
    {
      type: "text",
      content: "En paso para transformar las iteraciones a funciones lambda lo primero que haremos será extraer ese código a métodos a parte, tal y como vimos en el vídeo anterior, con lo que ya de base estaremos ganando bastante en legibilidad"
    },
    {
      type: "code",
      content: "private int gradesWeightSum(List<Pair<Integer, Float>> examGrades){\n    int gradesWeightSum = 0;\n    for (Pair<Integer, Float> examGrade : examGrades) {\n        gradesWeightSum += examGrade.first();\n    }\n    return gradesWeightSum;\n}"
    },
    {
      type: "text",
      content: "Ahora que tenemos el código extraído en métodos separados, podemos empezar a aplicar programación funcional transformando los bucles for en streams con sus correspondientes operaciones map/reduce"
    },
    {
      type: "code", 
      content: "private float gradeSum(List<Pair<Integer, Float>> examGrades) {\n    float gradeSum = 0;\n    for (Pair<Integer, Float> examGrade : examGrades) {\n        gradeSum += (examGrade.first() * examGrade.second() / 100);\n    }\n    return gradeSum;\n}"
    },
    {
      type: "text",
      content: "Para avanzar en nuestro refactor vamos a aplicar lo que se conoce como 'parallel change', en lugar de ponernos a modificar el código directamente dentro de toda la marcha, nos aseguramos en primer lugar el código a un bloque a parte donde poder trastear libremente y con mucha menos presión para tener en cuenta todas las dependencias originalmente. Además, vamos a duplicar el método extraído y renombrar en principio sobre la copia, de modo que ahora mismo nuestro código seguirá funcionando perfectamente"
    },
    {
      type: "code",
      content: "private int gradesWeightSum(List<Pair<Integer, Float>> examGrades) {\n    return examGrades.stream().map(Pair::first).reduce(0, Integer::sum);\n}"
    },
    {
      type: "text", 
      content: "El método map() nos va a permitir convertir cada conjunto de elementos 8 aplicando una función de transformación, que en este caso sólo nos interesa la primera parte de cada par, con lo que la propia función de transformación 'first()' y a continuación ejecutar la operación de acumulación gracias al método reduce() que como su nombre indica, va a reducir todos los valores de la lista a uno sólo (en este caso sumándolos)"
    },
    {
      type: "text",
      content: "Ojo 👀 al usar el método stream() junto al reduce() puede ser que haya o no un resultado y el propio IDE nos advierte de que se espera que lo haya, por lo que en este caso estamos funcionando con un Optional que nos devuelva el valor, aunque esto podría devolvernos un error y sería adecuado gestionarlo además con algún recurso como el Optional"
    },
    {
      type: "code",
      content: "private float gradeSum(List<Pair<Integer, Float>> examGrades) {\n    return examGrades.stream()\n        .map(grade -> grade.first() * grade.second() / 100)\n        .reduce(0f, Float::sum);\n}"
    },
    {
      type: "text",
      content: "De forma similar, para el cálculo de la nota final también utilizaremos el método map() para transformar cada par de valores en el resultado de multiplicar la nota por su peso y dividirlo entre 100, y finalmente reduciremos todos esos valores parciales a uno sólo mediante la suma"
    },
    {
      type: "text", 
      content: "Una vez que hemos sustituido las llamadas al método comprobado que esta solución funciona y los tests siguen pasando en verde podemos eliminar el código anterior y guardar parcial antes de seguir refactorizando el código"
    }
  ],
};
