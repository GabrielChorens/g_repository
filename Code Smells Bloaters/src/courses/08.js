export default {
  title: "08 Extract class",
  videoId: "b3asC0elpnw",
  notes: [
    {
      type: "subtitle",
      content: "Extract Class Refactoring: Encapsulando responsabilidades",
    },
    {
      type: "text",
      content:
        "Ya hemos visto los pros y contras del Template Method en este caso de refactor, así que pasamos a ver la opción que nosotros consideramos más beneficiosa para refactorizar nuestra large class",
    },
    {
      type: "subtitle",
      content: "Añadiendo semántica",
    },
    {
      type: "text",
      content:
        "Recordemos que partíamos de este escenario de clase demasiado larga",
    },
    {
      type: "code",
      content: `export class Teachers {
    allYearTeachers = {
        2020: [
            ["Josefina", true],
            ["Egoisto", true],
            ["Eduardo", false],
        ],
        2019: [
            ["Eduardo", false],
            ["Melanie", false], 
            ["Francisco", false],
        ]
    };
}`,
    },
    {
      type: "text",
      content:
        "El primer paso que vamos a dar será extraer a una clase de tipo colección tipada a parte todos los datos de los profesores que teníamos en StudentGradeCalculator. Con esto, no sólo ganamos en semántica, sino que damos pie a poder ubicar toda la lógica referente a los profesores en esta clase",
    },
    {
      type: "subtitle",
      content: "Inyección de dependencia y empujando la lógica",
    },
    {
      type: "text",
      content: "Clase StudentGradeCalculator (inyectando Teachers):",
    },
    {
      type: "code",
      content: `export class StudentGradeCalculator {
    constructor(yearToCalculate, teachers) {
        this.yearToCalculate = yearToCalculate;
        this.teachers = teachers;
    }
    // more...
}`,
    },
    {
      type: "text",
      content:
        "Al haber extraído esta clase, será ahora necesario pasarla por constructor a StudentGradeCalculator, para asignarle estos datos al campo de clase. Por supuesto, este cambio nos obligará a modificar todas las instanciaciones que tuviéramos previas para añadir este nuevo parámetro",
    },
    {
      type: "text",
      content:
        "Una vez que contamos con la clase Teachers, resulta mucho más sencillo ver qué lógica le pertenecería, como es el caso de la comprobación que realizábamos para saber si había algún profesor benevolente en el año dado, por lo que será algo que sacaremos de StudentGradeCalculator. Como veremos en el ejemplo, la semántica de este código también ha cambiado al ubicarla dentro de su propio modelo",
    },
    {
      type: "code",
      content: `export class Teachers {
    isThereAnyBenevolent(yearToCalculate) {
        let isThereAnyBenevolent = false;
        
        for (let [year, teachers] of Object.entries(this.allYearTeachers)) {
            if (yearToCalculate == year) {
                for (let teacher of teachers) {
                    if (teacher[1] == true) {
                        continue;
                    }
                }
                isThereAnyBenevolent = true;
            }
        }
        
        return isThereAnyBenevolent;
    }
}`,
    },
    {
      type: "text",
      content:
        "Con esto además abordamos otro code smell conocido como Feature Envy: Nuestro servicio está solicitando datos y teniendo que realizar una serie de cómputos que realmente pertenecen al propio modelo, recordemos que la orientación a objetos persigue una alta cohesión y bajo acoplamiento",
    },
    {
      type: "text",
      content:
        "Si bien hemos llegado a un buen punto en nuestro refactor, cabe pensar que al final, nuestra clase Teachers no deja de ser un conjunto de datos, por lo que presumiblemente serán introducidos por algún mecanismo de Entrada/Salida. Si quieres profundizar más sobre cómo introducir el uso de repositorios te recomendamos revisar los cursos de Principios SOLID y de Arquitectura Hexagonal",
    },

    {
      type: "text",
      content:
        "Como veníamos comentando, podemos concluir que este refactoring aboga por el principio de composición sobre herencia, aumentando la trazabilidad y testabilidad del código y ganando bastante en declaraciones explícitas",
    },
  ],
};
