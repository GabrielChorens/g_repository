export default {
  title:
    "16 Mejorando El Mundo Real™️ Introduce Parameter Object Refactoring para entidades con más de 20 at",
  videoId: "L-UNHhw57tg",
  notes: [
    {
      type: "text",
      content: "Otro de los code smells que podemos encontrar con bastante frecuencia en nuestro día a día es el de aquellas entidades con un número demasiado grande de argumentos 🚛 en su constructor"
    },
    {
      type: "text", 
      content: "Para refactorizar este tipo de constructores, o también en métodos que también reciban muchos argumentos, y simplificar su firma utilizaremos el concepto de Parameter Object. Este tipo de técnica consistirá en agrupar en una sóla clase aquellos parámetros que estén fuertemente relacionados"
    },
    {
      type: "text",
      content: "Clase Booking (Constructor inicial):"
    },
    {
      type: "code",
      content: `public final class Booking {
    // more...
    public Booking(
        BookingId id,
        LocalDateTime startDate,
        LocalDateTime endDate,
        CustomerId customerId,
        CustomerName customerName,
        EmailAddress customerEmail,
        BookingType bookingType,
        DiscountType discountType,
        DiscountValue discountValue,
        TaxType taxType,
        TaxValue taxValue
    ) {
        this.id            = id;
        this.startDate     = startDate;
        this.endDate       = endDate;
        this.customerId    = customerId;
        this.customerName  = customerName;
        this.customerEmail = customerEmail;
        this.bookingType   = bookingType;
        this.discountType  = discountType;
        this.discountValue = discountValue;
        this.taxType       = taxType;
        this.taxValue      = taxValue;
    }
    // more...
}`
    },
    {
      type: "text",
      content: "Como podemos ver en este ejemplo, la clase Booking viene requiriendo una cantidad bastante grande de argumentos para ser instanciada, probablemente porque iterativamente hemos ido necesitando añadir esos atributos para satisfacer diferentes necesidades en la aplicación."
    },
    {
      type: "text",
      content: "El objetivo es reducir el número de elementos y de paso tratar de empujar hacia abajo la lógica que tengan asociada ¿Cómo? 🤔"
    },
    {
      type: "text",
      content: "CodelyTV Tips ☝️: Un truquillo útil para ver si tiene sentido agrupar algunos atributos es fijarse en los prefijos/sufijos que tengan (Ej. DiscountType, DiscountValue…)"
    },
    {
      type: "text",
      content: "Como estamos trabajando con Java, aprovecharemos que nos permite hacer sobrecarga de métodos y constructores para trabajar sobre un segundo constructor sin tener que modificar el que ya teníamos, y así los clientes no se estarán viendo aún afectados. En el caso de otros lenguajes como PHP lo que podremos hacer es recurrir a un named constructor"
    },
    {
      type: "text",
      content: "Clase Booking (Sobrecarga de constructor):"
    },
    {
      type: "code",
      content: `public final class Booking {
    // more...
    public Booking(
        BookingId id,
        DateRange bookingPeriod,
        CustomerId customerId,
        CustomerName customerName,
        EmailAddress customerEmail,
        BookingType bookingType,
        DiscountType discountType,
        DiscountValue discountValue,
        TaxType taxType,
        TaxValue taxValue
    ) {
      this(
        id,
        bookingPeriod.start(),
        bookingPeriod.end(),
        customerId,
        customerName,
        customerEmail,
        bookingType,
        discountType,
        discountValue,
        taxType,
        taxValue
      );
        
    }
    // more...
}`
    },
    {
      type: "text",
      content: "En esta ocasión, y siguiendo algo que vendríamos haciendo familiarmente en nuestro día a día, optamos por definir en primer lugar el nuevo constructor y dejar que el IDE nos vaya avisando de aquellas cositas que hay que añadir o modificar 🕵️"
    },
    {
      type: "text",
      content: "Al crear la clase DateRange podemos agrupar los parámetros de fecha de entrada y salida de la reserva, reduciendo un poco el listado de argumentos que recibiría este constructor. De momento lo que haremos será pasarle al constructor inicial los dos parámetros desglosados de esta clase"
    },
    {
      type: "text",
      content: "De momento mantendremos el constructor inicial, ya que podríamos estar afectando a cualquier cliente que lo esté usando, pero modificaremos nuestros tests para utilizar el nuevo y ver que, efectivamente, todo sigue funcionando correctamente"
    },
    {
      type: "text",
      content: "Resaltar que, en nuestra opinión, seguir este tipo de mecánica de refactoring resulta muy interesante en el Mundo Real™ para poder ir pagando deuda técnica pasito a pasito cada vez que tengamos que entrar a estas clases para, por ejemplo, añadir alguna nueva funcionalidad, ya que son cambios paralelos que podemos ir abordando poco a poco y teniendo la tranquilidad de no estar rompiendo nada"
    },
    {
      type: "text",
      content: "Una vez aplicado el cambio y nos hemos asegurado de que todos los clientes utilizan ahora el nuevo constructor, podemos eliminar el antiguo para evitar que vuelva a utilizarse por error. Pero ojo 👀 porque veníamos llamando a ese constructor desde el nuevo (this(...)), por lo que antes de borrarlo, tendremos que mover esa lógica y volver a validar que todo sigue funcionando bien ✅"
    },
    {
      type: "text",
      content: "Sabiendo que todo sigue funcionando después de haber mejorado la firma del constructor, podemos guardar cambios y seguir adelante 🙌"
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
      content: "¡Nos vemos en el siguiente video: ⚙️ Cómo gestionar parámetros de aplicación: Replace Parameter with Method Call Refactoring!"
    }
  ],
};
