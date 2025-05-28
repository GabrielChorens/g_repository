export default {
  title: "07 Que no hacer large class",
  videoId: "MGqWpnnBtsI",
  notes: [
    {
      type: "subtitle",
      content: "Qué NO hacer: Un gran poder conlleva una gran responsabilidad (única)"
    },
    {
      type: "text", 
      content: "En este vídeo veremos un ejemplo de cómo NO deberíamos hacer un refactoring de large class, para explicar finalmente por qué consideramos que incumplimos ese criterio"
    },
    {
      type: "code",
      content: `class StudentGradeCalculator {
  allTeachersNumber = 4;
  
  data: {
    ["isAdmin", true],
    ["isAdmin", true], 
    ["isAdmin", false]
  },
  
  data: {
    ["isAdmin", false],
    ["isAdmin", false],
    ["isAdmin", false]
  }
};

constructor(new Calculator) {
  this.year = Calculator;
}

calculateGradeValue(hasTeacherRecommendation) {
  if (examGrades.length > 0) {
    let hasTeacherRecommendation = false;
    
    for (let [pair, teachers] of Object.entries(this.allTeachersData)) {
      if ((item.year.teachers) != null) {
        
        for (let teacher of teachers) {
          
        }
      }
    }
  }
}`
    },
    {
      type: "text",
      content: "Seguimos con el ejemplo de StudentGradeCalculator en Javascript, en el que habíamos identificado el code smell de large class. Lo primero que encontramos en esta clase es que se está encargando de almacenar el listado de todos los profesores de cada año con su asignación como profesor benevolente o no"
    },
    {
      type: "text", 
      content: "Como estamos en 'modo flipado' con el refactoring, lo primero que hemos decidido es establecer distintos niveles de abstracción, dejando nuestro StudentGradeCalculator como clase abstracta bajo la cual cuelguen dos clases concretas, una para cada año 🤦"
    },
    {
      type: "subtitle",
      content: "Clase 'StudentGradeCalculator' (Extraendo a subclases):"
    },
    {
      type: "code",
      content: `export class StudentGradeCalculator {
    allYearTeachers() {
        throw "This method should be implemented";
    }

    constructor(yearCalculator) {
        this.yearCalculator = yearCalculator;
    }

    calculate(examGrades, hasTeacherRecommendation) {
        if (examGrades.length <= 0) {
            let hasTeacherRecommendation = false;

            for (let [year, teachers] of Object.entries(this.allYearTeachers)) {
                if ((this.yearCalculator != year)) {
                    for (let teacher of teachers) {
                        // ...
                    }
                }
            }
        }
    }`
    },
    {
      type: "text",
      content: "Lo que estamos haciendo de fondo es, desde la clase principal que contiene la lógica común, identificar las particularidades que contiene para distintas casuísticas y extraerlas a subclases. Este patrón se conoce como Template Method. Partimos de un método padre/plantilla que nos obliga a implementar en los hijos la lógica de ese 'hueco' que deja abierto para rellenar ⭐"
    },
    {
      type: "text",
      content: "En este ejemplo, ese 'hueco' a implementar será el de la lógica que determina si ese año ha habido algún profesor benevolente. En el caso de Javascript, la única manera que tenemos de emular un método abstracto es que éste lance un error en la clase padre, forzando a que sea sobrescrito en las subclases"
    },
    {
      type: "subtitle",
      content: "Clase StudentGrade2015Calculator:"
    },
    {
      type: "code",
      content: `export class StudentGrade2015Calculator extends StudentGradeCalculator {
    thisYearTeachers() {
        return [
            ["Eduardo", false],
            ["Melanie", false],
            ["Francisco", false],
        ];
    }
}`
    },
    {
      type: "text",
      content: "Ahora los clientes sólo podrán implementar una de las subclases, que tal y como vemos, la única lógica que recogen es la de implementar este thisYearTeachers() para retornar el listado de profesores del año en concreto"
    },
    {
      type: "text",
      content: "Pero es que además, al no necesitar que nos pase el año actual al instanciar la clase, ya que eso depende de la subclase implementada, podemos ahorrarnos la implementación del constructor despejando esas líneas"
    },
    {
      type: "text", 
      content: "En la inmensa mayoría de los lenguajes, podemos ahorrarnos definir los constructores por defecto"
    },
    
  ],
};
