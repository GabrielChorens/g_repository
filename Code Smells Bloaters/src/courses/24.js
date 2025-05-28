export default {
  title:
    "24 Simplificando niveles de indentación Replace Control Flag with Break Refactoring",
  videoId: "TXwfDZEfRkE",
  notes: [
    {
      type: "subtitle",
      content: "Simplificando la complejidad ciclomática"
    },
    {
      type: "text", 
      content: "Analizamos el código inicial de hasToIncreaseOneExtraPoint() que presenta alta complejidad ciclomática con múltiples niveles de indentación, bucles y condicionales anidados."
    },
    {
      type: "code",
      content: "private boolean hasToIncreaseOneExtraPoint() {\n    boolean hasToIncreaseOneExtraPoint = false;\n\n    for (Map.Entry<Integer, List<Pair<String, Boolean>>> yearlyTeachers : allYearsTeachers.entrySet()) {\n        if (!(yearToCalculate != yearlyTeachers.getKey())) {\n            List<Pair<String, Boolean>> teachers = yearlyTeachers.getValue();\n\n            for (Pair<String, Boolean> teacher : teachers) {\n                if (teacher.second() != true) {\n                    continue;\n                }\n                hasToIncreaseOneExtraPoint = true;\n            }\n        } else {\n            continue;\n        }\n    }\n    return hasToIncreaseOneExtraPoint;\n}"
    },
    {
      type: "subtitle",
      content: "Simplificando con inversión de condicionales"
    },
    {
      type: "text",
      content: "Realizamos una primera mejora invirtiendo condicionales y eliminando bloques else redundantes, manteniendo la misma funcionalidad pero con código más limpio."
    },
    {
      type: "code",
      content: "private boolean hasToIncreaseOneExtraPoint() {\n    boolean hasToIncreaseOneExtraPoint = false;\n\n    for (Map.Entry<Integer, List<Pair<String, Boolean>>> yearlyTeachers : allYearsTeachers.entrySet()) {\n        if (yearToCalculate != yearlyTeachers.getKey()) {\n          continue;\n        }\n        List<Pair<String, Boolean>> teachers = yearlyTeachers.getValue();\n\n        for (Pair<String, Boolean> teacher : teachers) {\n            if (teacher.second() != true) {\n                continue;\n            }\n            hasToIncreaseOneExtraPoint = true;\n        }\n\n    }\n    return hasToIncreaseOneExtraPoint;\n}"
    },
    {
      type: "subtitle",
      content: "Eliminando el Control Flag"
    },
    {
      type: "text",
      content: "Finalmente eliminamos la variable de control (control flag) rompiendo el flujo y retornando directamente el valor cuando sea posible, mejorando así la legibilidad y mantenibilidad del código."
    },
    {
      type: "code",
      content: "private boolean hasToIncreaseOneExtraPoint() {\n\n    for (Map.Entry<Integer, List<Pair<String, Boolean>>> yearlyTeachers : allYearsTeachers.entrySet()) {\n        if (yearToCalculate != yearlyTeachers.getKey()) {\n          continue;\n        }\n        List<Pair<String, Boolean>> teachers = yearlyTeachers.getValue();\n\n        for (Pair<String, Boolean> teacher : teachers) {\n            Boolean isBenevolent = teacher.second();\n\n            if (isBenevolent) {\n                return true;\n            }\n        }\n    }\n\n    return false;\n}"
    },
    {
      type: "subtitle",
      content: "Beneficios de la refactorización"
    },
    {
      type: "text",
      content: "- Reducción de la complejidad ciclomática\n- Eliminación de control flags\n- Mejor legibilidad del código\n- Código más mantenible y testeable"
    },
    {
      type: "text",
      content: "Se sugiere además mejorar el modelado creando clases específicas como 'Teacher' y 'TeachersCollection' para encapsular mejor la lógica del negocio."
    }
  ],
};
