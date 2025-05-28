export default {
  title:
    "26 Valores por defecto en argumentos Replace parameter with explicit method JS",
  videoId: "FAzS9eC1LjQ",
  notes: [
    {
      type: "subtitle",
      content: "Parámetros condicionales en métodos"
    },
    {
      type: "text",
      content: "Una práctica habitual es introducir parámetros a un método solo para determinar qué lógica ejecutar internamente. Esto puede afectar la escalabilidad del código."
    },
    {
      type: "subtitle", 
      content: "Clase DailyBonusPointsCalculator (estado inicial)"
    },
    {
      type: "code",
      content: "export class DailyBonusPointsCalculator {\n    PREMIUM_USER_POINTS_PER_DAY   = 20;\n    NORMAL_USER_POINTS_PER_DAY    = 10;\n    PREMIUM_USER_WEEKS_MULTIPLIER = 1.5;\n\n    calculate(consecutiveDays, isPremium = false) {\n        if (isPremium) {\n            const consecutiveWeeks = Math.floor(consecutiveDays / 7);\n\n            let consecutiveWeeksMultiplier = 1;\n            if (consecutiveWeeks > 0) {\n                consecutiveWeeksMultiplier = Math.pow(this.PREMIUM_USER_WEEKS_MULTIPLIER, consecutiveWeeks);\n            }\n\n            return consecutiveDays * this.PREMIUM_USER_POINTS_PER_DAY * consecutiveWeeksMultiplier;\n        } else {\n            return consecutiveDays * this.NORMAL_USER_POINTS_PER_DAY;\n        }\n    }\n}"
    },
    {
      type: "text",
      content: "Este ejemplo podría darse en un juego online que premia la recurrencia de usuarios y tiene opción premium. El parámetro isPremium condiciona la lógica del cálculo de puntos bonus."
    },
    {
      type: "text",
      content: "Aunque tener un único punto de entrada puede parecer ventajoso, la escalabilidad se ve perjudicada al contener toda la lógica en un solo método, especialmente si se añaden más tipos de usuarios o factores."
    },
    {
      type: "subtitle",
      content: "Clase DailyBonusPointsCalculator (introduciendo método explícito)"
    },
    {
      type: "code",
      content: "export class DailyBonusPointsCalculator {\n    PREMIUM_USER_POINTS_PER_DAY   = 20;\n    NORMAL_USER_POINTS_PER_DAY    = 10;\n    PREMIUM_USER_WEEKS_MULTIPLIER = 1.5;\n\n    calculate(consecutiveDays, isPremium = false) {\n        if (isPremium) {\n          return this.calculatePremium(consecutiveDays);\n        } else {\n            return consecutiveDays * this.NORMAL_USER_POINTS_PER_DAY;\n        }\n    }\n\n    calculatePremium(consecutiveDays) {\n        const consecutiveWeeks = Math.floor(consecutiveDays / 7);\n\n        let consecutiveWeeksMultiplier = 1;\n        if (consecutiveWeeks > 0) {\n            consecutiveWeeksMultiplier = Math.pow(this.PREMIUM_USER_WEEKS_MULTIPLIER, consecutiveWeeks);\n        }\n\n        return consecutiveDays * this.PREMIUM_USER_POINTS_PER_DAY * consecutiveWeeksMultiplier;\n    }\n}"
    },
    {
      type: "text",
      content: "El primer paso es extraer la lógica del bloque condicional a un método explícito (extract method)."
    },
    {
      type: "subtitle",
      content: "Tests de DailyBonusPointsCalculator"
    },
    {
      type: "code",
      content: "it('Calculate points for a premium user on its second consecutive week', () => {\n    const calculator = new DailyBonusPointsCalculator();\n\n    expect(calculator.calculatePremium(14)).toBe(630);\n});"
    },
    {
      type: "subtitle",
      content: "Clase DailyBonusPointsCalculator (eliminando lógica innecesaria)"
    },
    {
      type: "code",
      content: "export class DailyBonusPointsCalculator {\n    PREMIUM_USER_POINTS_PER_DAY   = 20;\n    NORMAL_USER_POINTS_PER_DAY    = 10;\n    PREMIUM_USER_WEEKS_MULTIPLIER = 1.5;\n\n    calculate(consecutiveDays) {\n        return consecutiveDays * this.NORMAL_USER_POINTS_PER_DAY;\n    }\n\n    calculatePremium(consecutiveDays) {\n        const consecutiveWeeks = Math.floor(consecutiveDays / 7);\n\n        let consecutiveWeeksMultiplier = 1;\n        if (consecutiveWeeks > 0) {\n            consecutiveWeeksMultiplier = Math.pow(this.PREMIUM_USER_WEEKS_MULTIPLIER, consecutiveWeeks);\n        }\n\n        return consecutiveDays * this.PREMIUM_USER_POINTS_PER_DAY * consecutiveWeeksMultiplier;\n    }\n}"
    },
    {
      type: "text",
      content: "CodelyTv Tip ☝️: Un truco útil al aplicar este refactor es usar 'find usages' para identificar todas las ocurrencias y marcar las que vayamos modificando 🙂"
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
      content: "¡Nos vemos en el siguiente video: 🌈 Valores de argumentos por defecto: Como lidiar con ellos!"
    }
  ],
};
