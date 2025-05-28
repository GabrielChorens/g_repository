export default {
  title: "19 Tell dont ask Fomentando la cohesión",
  videoId: "Z5YVXxZafKY",
  notes: [
    {
      type: "text",
      content: "Con el refactoring aplicado hasta ahora hemos conseguido despejar el terreno y facilitar el poder empujar la lógica de negocio que aún nos seguía chirriando en la clase Booking, con lo que aplicaremos 'Tell Don't Ask': Dime que lo quieres pero no preguntes por mis datos internos 🤐"
    },
    {
      type: "text", 
      content: "Clase Booking (estado inicial):"
    },
    {
      type: "code",
      content: `public final class Booking {
    // more...

    public BookingStatus statusFor(LocalDateTime date) {
        if (date.isBefore(period.startDate())) {
            return BookingStatus.NOT_STARTED;
        }

        if (date.isAfter(period.startDate()) && date.isBefore(period.endDate())) {
            return BookingStatus.ACTIVE;
        }

        return BookingStatus.FINISHED;
    }
}`
    },
    {
      type: "text",
      content: "Como podíamos ver en los videos anteriores, el método statusFor() de la clase Booking nos devolverá el estado de una reserva en base a la comprobación de la fecha que reciba por parámetro y los atributos de fecha de inicio/fin del periodo almacenado."
    },
    {
      type: "text",
      content: "Nuestro objetivo será mover esa lógica interna hacia la clase DateRange, pero tal y como están definidos los condicionales vemos que todo gira en torno al argumento de entrada, lo cual nos va a complicar este desplazamiento ¿Qué podemos hacer? Tan sencillo como invertir las condiciones para que la lógica gire alrededor de la clase que nosotros mismos hemos modelado 🙌"
    },
    {
      type: "text",
      content: "Clase Booking (invirtiendo condicionales):"
    },
    {
      type: "code",
      content: `public final class Booking {
    // more...

    public BookingStatus statusFor(LocalDateTime date) {
        if (period.startDate().isAfter(date)) {
            return BookingStatus.NOT_STARTED;
        }

        if (period.startDate().isBefore(date) && period.endDate().isAfter(date)) {
            return BookingStatus.ACTIVE;
        }

        return BookingStatus.FINISHED;
    }
}`
    },
    {
      type: "text",
      content: "Con esta primera iteración, aunque estamos evitando lanzar la consulta a ese date que recibimos por parámetro para lanzársela a nuestro propio DateRange, seguimos violando Tell Don't Ask: La clase Booking es la que está pidiendo los datos al atributo period (DateRange) para realizar su cálculo. Además, se hace bastante evidente también que estaríamos violando la Ley de Demeter (no hablemos con desconocidos), ya que desde Booking sólo deberíamos interactuar con DateRange y no con otros elemenos más distantes como sus atributos internos (Ojo al code smell chain method call 👃)"
    },
    {
      type: "text",
      content: "De cualquier modo, aún con estas contraprestaciones, hemos dado un paso hacia adelante y facilitado el poder llevarnos esta lógica dentro de la clase DateRange. Tal como hicimos en otros procesos de refactoring previos, lo haremos en dos pasos:"
    },
    {
      type: "text",
      content: "🍴 Extraer la lógica a un método de la propia clase Booking\n🚛 Mover este método dentro de la clase DateRange"
    },
    {
      type: "text",
      content: "Clase Booking (invirtiendo condicionales):"
    },
    {
      type: "code",
      content: `public final class Booking {
    // more...

    public BookingStatus statusFor(LocalDateTime date) {
        if (hasStarted(date)) {
            return BookingStatus.NOT_STARTED;
        }

        if (period.startDate().isBefore(date) && period.endDate().isAfter(date)) {
            return BookingStatus.ACTIVE;
        }

        return BookingStatus.FINISHED;
    }

      private boolean hasStarted(LocalDateTime date){
          return period.startDate().isAfter(date)
      }
}`
    },
    {
      type: "text",
      content: "A la hora de aprovechar el IDE para ayudarnos a aplicar este refactor es importante comprobar que el método extraído no sea definido como estático, puesto que precisamente queremos que funcione en torno a los datos de esa instancia concreta y que no tengamos que pasarle la instancia como argumento. Igualmente tampoco queremos que el DateRange se pase como argumento 🙅‍♀️"
    },
    {
      type: "text",
      content: "Clase DateRange:"
    },
    {
      type: "code",
      content: `public final class DateRange {

    // more...

    public boolean isBetween(LocalDateTime date) {
        return date.isAfter(startDate) && date.isBefore(endDate);
    }

    public boolean isAfter(LocalDateTime date) {
        return date.isBefore(startDate);
    }
}`
    },
    {
      type: "text",
      content: "Ahora ya si podemos empujar la lógica dentro de la clase DateRange, de modo que la clase Booking se limitará a pedir conocer si la fecha dada es anterior o está dentro de ese rango, sin tener que interactuar con sus datos internos. Con esto también ganamos la posibilidad de ahorrarnos los getters que hasta ahora veníamos necesitando para startDate y endDate puesto que ya no necesitamos acceder a estos datos desde fuera de la clase 👌"
    },
    {
      type: "text",
      content: "En este caso, DateRange es una clase compartida en nuestro sistema porque la lógica que recoge es bastante general y podemos ver que la semántica es más abstracta, pero si vieramos la necesidad de empujar aquí dentro cosas más específicas relativas al contexto de la reserva, lo que haríamos es crear una clase que encapsulara ésta (composición sobre herencia) y llevarnos ahí esas lógicas particulares"
    },
    {
      type: "subtitle",
      content: "¿Alguna Duda?"
    },
    {
      type: "text",
      content: "Si tienes cualquier duda sobre el contenido del video o te apetece compartir cualquier sugerencia recuerda que puedes en abrir una nueva discusión justo aquí abajo 👇👇👇"
    },
    {
      type: "text",
      content: "¡Nos vemos en el siguiente video: ⚙️ Cómo gestionar parámetros de aplicación: Replace Parameter with Method!"
    }
  ],
};
