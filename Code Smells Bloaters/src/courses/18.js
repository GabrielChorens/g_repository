export default {
  title: "18 Preserve Whole Object Refactoring Respetando lenguaje ubicuo",
  videoId: "1NLoNlqOxss",
  notes: [
    {
      type: "text",
      content: "Aunque hemos mejorado nuestra clase Booking con respecto al estado inicial y la firma del constructor ya no tiene una lista inmensa de parámetros, lo cierto es que aún hay cosas que nos huelen mal, como el hecho de seguir teniendo toda una lista de atributos de clase disgregados"
    },
    {
      type: "text",
      content: "Si desde fuera estamos recibiendo un objeto DateRange bien cohesionado ¿Por qué desdoblarlo para asignar los valores a startDate y endDate? ¿Por qué no preservar ese objeto y llevarnos ahi la lógica de negocio vinculada hasta ahora a esos atributos? 🧲"
    },
    {
      type: "text",
      content: "El objetivo entonces será dejar los mismos atributos de clase que los recibidos en el constructor. Por supuesto existen diferentes enfoques que podríamos seguir para llevar a cabo este proceso de refactor dentro del planteamiento de 'parallel changes' que hemos venido comentando en los videos anteriores y que tendremos en cuenta"
    },
    {
      type: "text",
      content: "Una primera aproximación sería seguir con el mismo proceso que vimos en los videos anteriores al refactorizar el constructor: Añadir los nuevos atributos (En este caso Customer, DateRange, Tax…) al tiempo que mantenemos los antiguos"
    },
    {
      type: "text",
      content: "Clase Booking (primer enfoque):"
    },
    {
      type: "code",
      content: `public final class Booking {
    private final BookingId     id;
    private final LocalDateTime startDate;
    private final LocalDateTime endDate;
    private final CustomerId    customerId;
    private final CustomerName  customerName;
    private final EmailAddress  customerEmail;
    private final Customer      customer;
    // more...

    public Booking(
        BookingId id,
        DateRange bookingDateRange
        Customer customer
        BookingType bookingType,
        DiscountType discountType,
        DiscountValue discountValue,
        TaxType taxType,
        TaxValue taxValue
    ) {
        this.id            = id;
        this.startDate     = bookingDateRange.startDate();
        this.endDate       = bookingDateRange.endDate();
        this.customerId    = customer.id();
        this.customerName  = customer.name();
        this.customerEmail = customer.emailAdress();
        this.customer      = customer;
        // more...
    }`
    },
    {
      type: "text",
      content: "Así, estaríamos guardándonos desde el constructor tanto los distintos atributos que teníamos disgregados en Booking como el objeto Customer al completo."
    },
    {
      type: "text",
      content: "El problema que conlleva este procedimiento es el alto riesgo de dejarnos olvidado sin actualizar cualquiera de los sitios en nuestra aplicación donde se esté alterando el estado de los atributos internos de este Customer, es decir, la complejidad que nos genere puede llegar a ser mayor que los beneficios que nos aporte 🤦‍♂️"
    },
    {
      type: "text",
      content: "Clase Booking (segundo enfoque):"
    },
    {
      type: "code",
      content: `public final class Booking {
    private final BookingId   id;
    private final DateRange   period;
    private final Customer    customer;
    private final Discount    discount;
    private final Tax         tax;

    public Booking(
        BookingId id,
        DateRange period
        Customer customer
        BookingType bookingType,
        Discount discount,
        Tax tax
    ) {
        this.id         = id;
        this.period     = period;
        this.customer   = customer;
        // more...
    }`
    },
    {
      type: "text",
      content: "Por otro lado, pensamos que una aproximación más directa puede ser más interesante en estos casos: Una vez introducido como atributo el propio objeto Customer, eliminar los atributos relacionados que inicialmente teníamos disgregados (customerId, customerName…). Por supuesto nos encantaría que compartierais vuestra visión al respecto abriendo una discusión abajo 👇👇"
    },
    {
      type: "text",
      content: "Clase Booking (sustituyendo atributos):"
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
      content: "Una vez simplificado la lista de atributos, ya sólo nos quedará sustituir aquellos lugares donde el propio IDE ya nos estará indicando la ausencia del atributo por la llamada al getter desde nuestro objeto ♻️ Aquí nos puede estar chirriando aún mantener en Booking toda la lógica que tenemos en statusFor() para comprobar el estado de la reserva en base a la fecha indicada, pero más adelante pasaremos a empujarla aún más al fondo 🤗"
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
      content: "¡Nos vemos en el próximo video: 📞 Tell don't ask: Fomentando la cohesión!"
    }
  ],
};
