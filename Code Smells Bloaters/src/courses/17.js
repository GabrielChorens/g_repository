export default {
  title: "17 Casos de El Mundo Real™️ Relaciones complejas",
  videoId: "jbtKyJROGxo",
  notes: [
    {
      type: "text",
      content: "Seguimos aplicando nuestro refactor sobre la clase Booking y ahora llega el momento de poner el foco en lo relativo al Customer que, a diferencia del caso anterior con DateRange, contiene algo más de miga que le dará cierto nivel de complejidad 🤔"
    },
    {
      type: "text",
      content: "Clase Booking (estado inicial):"
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
        this.id = id,
        this.startDate = bookingPeriod.start(),
        this.endDate = bookingPeriod.end(),
        this.customerId = customerId,
        this.customerName = customerName,
        this.customerEmail = customerEmail,
        this.bookingType = bookingType,
        this.discountType = discountType,
        this.discountValue = discountValue,
        this.taxType = taxType,
        this.taxValue = taxValue
      );

    }
    // more...
}`
    },
    {
      type: "text",
      content: "Si recordamos el camino seguido en el video anterior, los pasos que seguimos y que volveremos a aplicar en esta ocasión son:"
    },
    {
      type: "text",
      content: "👥 Crear un nuevo constructor con la firma mejorada\n🧲 Crear la nueva clase (Customer en este caso) donde empujaremos los atributos relacionados\n🔧 Sustituir las llamadas al antiguo constructor en todos los clientes\n🗑 Eliminar el antiguo constructor"
    },
    {
      type: "text",
      content: "Clase Booking (Extrayendo atributos a Customer):"
    },
    {
      type: "code",
      content: `public final class Booking {
    // more...
    public Booking(
        BookingId id,
        DateRange bookingPeriod,
        Customer customer,
        BookingType bookingType,
        DiscountType discountType,
        DiscountValue discountValue,
        TaxType taxType,
        TaxValue taxValue
    ) {
      this(
        this.id = id,
        this.startDate = bookingPeriod.start(),
        this.endDate = bookingPeriod.end(),
        this.customerId = customer.id(),
        this.customerName = customer.name(),
        this.customerEmail = customer.emailAdress(),
        this.bookingType = bookingType,
        this.discountType = discountType,
        this.discountValue = discountValue,
        this.taxType = taxType,
        this.taxValue = taxValue
      );

    }
    // more...
}`
    },
    {
      type: "text",
      content: "Un detalle super importante en este caso es que Customer tiene un identificador único, por lo que estamos hablando de una Entidad propiamente dicha: No dejará de ser el mismo Customer a pesar de que modifiquemos el nombre o la dirección de email 🙋"
    },
    {
      type: "text",
      content: "Tal y como teníamos inicialmente definida nuestra clase Booking y su relación con los datos del Customer, cuando queríamos traerla de BD, era necesario enganchar toda esa información por medio de JOINs, lo que se traduce en una carga considerable para el rendimiento de la aplicación cuando posiblemente sólo necesitemos todos los datos del Customer en un número limitado de casos de uso 🐢"
    },
    {
      type: "text",
      content: "Los cambios aplicados facilitarán una relación por identificador de tal modo que, de base, lo único que tendremos de Customer será su id, y sólo en caso de necesitar más datos adicionales será cuando se soliciten paralelamente por QueryBus por ejemplo (Por supuesto, este tipo de cambios en la manera de recuperar la información están sujetos a las necesidades de nuestra aplicación 🤗)"
    },
    {
      type: "text",
      content: "Otro detalle que podemos observar en la clase Customer es que al empujar los atributos dentro de esta clase, los prefijos que tenían ya no son necesarios, se deduce del propio contexto 👌"
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
      content: "¡Nos vemos en la próxima lección: 🎂 Long Parameter List Code Smell: Empujando lógica de negocio a modelos!"
    }
  ],
};
