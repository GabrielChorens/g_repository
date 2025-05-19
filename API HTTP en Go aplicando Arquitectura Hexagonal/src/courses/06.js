export default {
    title: "06 Testeando nuestro endpoint",
    videoId: "O09aPgLDK6w",
    notes: [
        { type: "text", content: "Ahora que ya hemos aplicado ese principio de inversión de dependencias mediante la inyección de dichas dependencias, y que ya hemos proporcionado el mock relativo a la capa de persistencia, ya estamos en disposición de definir los tests de nuestro controlador." },
        { type: "subtitle", content: "Mocks" },
        { type: "text", content: "Como ya hemos avanzado anteriormente, para la definición de los mocks vamos a usar el paquete testify/mock, que nos podemos remitir a la documentación del mismo para ver qué opciones tenemos a la hora de definir nuestros mocks (espiar llamadas a determinados métodos, falsear los retornos, etc)." },
        { type: "link", content: "https://pkg.go.dev/github.com/stretchr/testify/mock" },
        { type: "link", content: "https://pkg.go.dev/github.com/stretchr/testify" },
        { type: "text", content: "Por ejemplo, el método Mock.AssertExpectations así como el resto de métodos Mock.Assert* nos permitirían comprobar que se han producido (o no) determinadas interactuaciones con el mock." },
        { type: "link", content: "https://pkg.go.dev/github.com/stretchr/testify@v1.7.0/mock#Mock.AssertExpectations" },
        { type: "subtitle", content: "El paquete net/http/httptest" },
        { type: "text", content: "Vamos a testear nuestro controlador y para ello vamos a tener que levantar un servidor que exponga dicho controlador, por esa razón vamos a activar el modo \"test\" de Gin, pero no solo eso sino que también vamos a usar las estructuras que nos proporciona el paquete" },
        { type: "link", content: "https://pkg.go.dev/net/http/httptest" },
        { type: "text", content: "de la librería estándar de Go para poder hacer dichos tests sin tener que depender de una interfaz de red real con lo que ello implica (posible colisión de puertos, etc)." },
        { type: "text", content: "Además, el patrón que vemos en el identificador de dicho paquete httptest es el que da lugar a nuestra convención a la hora de definir dónde alojamos los mocks. Así, de un modo similar, tendremos storage/storagemocks." },
        { type: "subtitle", content: "assert vs require" },
        { type: "text", content: "Recordemos que los paquetes assert y require de la librería testify nos proporcionan la misma interfaz en términos de funciones de validación. Sin embargo, el uso de uno u otro dependerá de lo que queramos comprobar:" },
        { type: "text", content: "assert cuando queramos hacer aserciones sin detener la ejecución de nuestros tests, por ejemplo, para validar la salida de una función." },
        { type: "text", content: "require cuando queramos hacer aserciones deteniendo la ejecución de nuestros tests en caso de que no se cumplan, por ejemplo, para validar los posibles errores que se hayan producido durante la inicialización de nuestros datos de test (\"arrange\"), en cuyo caso la ejecución del test sin el mismo no tendría sentido." }
    ]
}; 