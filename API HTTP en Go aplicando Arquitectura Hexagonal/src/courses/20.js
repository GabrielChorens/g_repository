export default {
    title: "20 Implementación del Event Bus",
    videoId: "o_BHp3eyXWU",
    notes: [
        { type: "subtitle", content: "Implementación in-memory" },
        { type: "text", content: "En esta ocasión, igual que en el caso del Command Bus, indagamos por una implementación sencilla y que para nada podría ser considerada production-ready." },
        { type: "text", content: "Pues, como podemos ver, lo único que hacemos es usar un map para relacionar cada uno de los tipos de eventos con sus handlers y llamar a estos últimos cada vez que se publica un nuevo evento. Todo esto se produce de forma secuencial y síncrona, por simplicidad." },
        { type: "subtitle", content: "Nota aclarativa sobre los receivers" },
        { type: "text", content: "Tal y como se comenta en el vídeo, lo más habitual es que siempre que tengamos que modificar la estructura (su estado) dentro de la función, el parámetro del receiver sea un puntero, pues de otro modo estaríamos trabajando dicha estructura sin que realmente estuviésemos modificando la copia." },
        { type: "text", content: "Sin embargo, estrictamente hablando, en el caso del vídeo esto no es del todo cierto, porque los map y los slice SON 'punteros' al array/map (es decir, tienen una referencia a los datos que hay internamente), por eso, en el caso del ejemplo, no sería estrictamente necesario. Lo cuál no significa que no sea la convención, y en la mayoría de casos, estrictamente necesario." },
        { type: "subtitle", content: "¿Production-ready?" },
        { type: "text", content: "En su momento, ¿fuisteis capaces de formalizar la implementación del Command Bus para que realmente fuese production-ready?" },
        { type: "text", content: "Si no lo hicisteis, ha llegado un nuevo reto de características similares, a ver si esta vez conseguís llevarlo a cabo." },
        { type: "text", content: "En caso de que ya lo hicierais, ¿qué os parece si lo volvéis a intentar con el Event Bus y nos comentáis si os habéis encontrado diferencias y cuáles?" },
        { type: "subtitle", content: "¿Os atrevéis a formalizar una implementación del Event Bus que realmente sea production-ready?" },
        { type: "text", content: "Recordad que la implementación de ejemplo es secuencial y síncrona, todo lo lógico que podría estar de una implementación 'ideal'. Para poder darle un poco de gracia, os recomendamos que echéis un vistazo a lo que ya hemos hecho ahí." },
        { type: "subtitle", content: "El paquete errgroup" },
        { type: "text", content: "La siguiente pregunta es: ¿conocéis el paquete errgroup? Si no es el caso, os invitamos a que le echéis un vistazo al artículo de nuestro blog y veáis cómo éste nos podría ayudar a la hora de gestionar el ciclo de vida de múltiples rutinas." },
        { type: "link", content: "https://blog.friendsofgo.tech/posts/errgroup-agrupando-procesos" },
        { type: "text", content: "¡Hasta ahora!" }
    ]
};
