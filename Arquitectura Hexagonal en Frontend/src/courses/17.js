export default {
  title: "17 Arquitectura Hexagonal en el Mundo Real",
  videoId: "BDac9OX-ZYE",
  notes: [
    {
      type: "text",
      content:
        "Para terminar el curso, vamos a ver un ejemplo de aplicación algo distinta.",
    },
    {
      type: "text",
      content:
        "En esta ocasión tendremos que pintar una lista de localizaciones en un mapa. Aunque pueda parecer que algo así implica mucha decisión de arquitectura distinta, pero toda la lógica de pintar puntos e interacción con plugin de Google Maps pasa en la parte de UI, en nuestros componentes de React. Aun así, veremos cosas interesantes.",
    },
    {
      type: "text",
      content:
        "En la parte de infraestructura vemos de nuevo un repositorio que se encarga de ir a buscar nuestra lista de localizaciones. En este caso las busca de un JSON, y vamos a imaginar que no tenemos la capacidad de cambiar la estructura de este ni el nombre de los campos que nos vienen. Es decir, las localizaciones del JSON pueden tener una interfaz distinta a la de nuestro dominio:",
    },
    {
      type: "code",
      content: `// Interfaz que llega de /public/locations
interface ApiLocation {
    export: boolean;
    lat: number;
    lng: number;
};

// Interfaz Location en nuestro dominio
export interface Location {
    isVisible: boolean;
    longitude: number;
    name: string;
}`,
    },
    {
      type: "text",
      content:
        "Sería un error condicionar la forma de nuestro dominio a lo que nos llegue vía JSON, API, etc, ya que no tenemos el control de servicios externos y estos podrían cambiar en cualquier momento. Además, preferimos ser nosotros quien determine el nombre de las propiedades, para utilizar el lenguaje propio del equipo.",
    },
    {
      type: "text",
      content:
        "Terminaremos con un punto interesante: el caso de uso calculateCenter. A diferencia de lo que hemos visto anteriormente, este caso de uso no necesita ningún repositorio, ya que no depende de ningún servicio externo. Es toda pura lógica de negocio, que incluso podríamos mover a la capa de dominio, especialmente si es una lógica que queremos reutilizar.",
    },
  ],
};
