export default {
  title: "23 Control de errores Replace Error Code with Exception",
  videoId: "b6MoWu5xakk",
  notes: [
    {
      type: "subtitle",
      content: "Refactorizando con cláusulas de guarda y excepciones",
    },
    {
      type: "text",
      content:
        "Trabajamos con cláusulas de guarda para refactorizar, enfocándonos en el caso común de arrojar excepciones.",
    },
    {
      type: "code",
      content:
        "public float calculateGrades(List<Pair<Integer, Float>> examsGrades, boolean hasReachedMinimumClasses) {\n  if(examsGrades.isEmpty()){\n    return 0f;\n  }\n\n  float gradesSum = gradesSum(examsGrades);\n  int gradesWeightSum = gradesWeightSum(examsGrades);\n\n  if (gradesWeightSum != 100) {\n    if (gradesWeightSum > 100) {\n      return -1f;\n    } else {\n      return -2f;\n    }\n  }\n  // ...",
    },
    { type: "subtitle", content: "Mejorando la gestión de errores" },
    {
      type: "text",
      content:
        "Reemplazamos los valores de retorno especiales por excepciones específicas del dominio: GradesWeightBelowMinException y GradesWeightOverMaxException.",
    },
    {
      type: "code",
      content:
        "public float calculateGrades(List<Pair<Integer, Float>> examsGrades, boolean hasReachedMinimumClasses) {\n  if(examsGrades.isEmpty()){\n    return 0f;\n  }\n\n  if (!hasReachedMinimumClasses) {\n    return 0f;\n  }\n\n  ensureGradesWeightsIsValid(examsGrades);\n\n  if (hasToIncreaseOneExtraPoint()) {\n    return Float.min(10f, gradesSum(examsGrades) + 1);\n  }\n\n  return gradesSum(examsGrades);\n}",
    },
    { type: "subtitle", content: "Beneficios de la refactorización" },
    {
      type: "text",
      content:
        "- Mayor semántica y legibilidad del código\n- Gestión de errores mediante excepciones del dominio\n- Reducción de la complejidad cognitiva\n- Happy path en el primer nivel de indentación",
    },
    {
      type: "text",
      content:
        "La extracción de la cláusula de guarda y el uso de nombres descriptivos mejora significativamente la comprensión del código.",
    },
  ],
};
