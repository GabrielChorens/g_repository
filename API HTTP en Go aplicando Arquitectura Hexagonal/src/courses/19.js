export default {
    title: "19 Implementando nuestro suscriptor de eventos",
    videoId: "9op-8u7Qykg",
    notes: [
        { type: "subtitle", content: "Event Handlers" },
        { type: "text", content: "Ahora que ya hemos visto como delegar la responsabilidad de determinadas piezas de nuestra aplicación en otros componentes mediante la publicación de eventos, necesitamos hacer que esto se haga realmente efectivo. Y es que tenemos que ver como podemos escuchar dichos eventos y reaccionar a ellos." },
        { type: "text", content: "Los componentes responsables de dicha tarea serán esos Event Handlers que básicamente serán struct que implementan con la interfaz event.handler (handle(context.Context, Event))" },
        { type: "text", content: "Una vez tengamos definido y registrado nuestro Event Handler, será el Event Bus el que haga la magia de 'mapear' cada uno de los eventos que nos lleguen en sus correspondientes Event Handlers." },
        { type: "text", content: "En esta ocasión, de un modo similar a como vimos con el patrón Command y sus Command Handlers, podremos inyectar los Application Service (o caso de uso) de nuestra aplicación a esos Event Handlers para que hagan uso de los mismos y ejecuten la lógica correspondiente esperada." },
        { type: "subtitle", content: "Genéricos en Go" },
        { type: "text", content: "Como hemos visto, este tipo de abstracción en Go es algo tediosa debido a que se trata de un lenguaje fuerte y estáticamente tipado, compilado y sin genéricos. De esta, precisamente, es una de las razones porque a Go siempre se le ha acusado la falta de genéricos. Por suerte, tenemos buenas noticias recién salidas del horno: la propuesta de genéricos ha sido aceptada y pasa a formar parte del draft del siguiente Go." },
        { type: "link", content: "https://github.com/golang/go/issues/43651#issuecomment-776944155" }
    ]
};
