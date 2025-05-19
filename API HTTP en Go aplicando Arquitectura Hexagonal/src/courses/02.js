export default {
    title: "02 Usando Gin nuestro primer framework",
    videoId: "eWK94ZRdF4M",
    notes: [
        { type: "subtitle", content: "Frameworks HTTP en Go" },
        { type: "text", content: "Si habéis llegado a esta sección y venís de otros lenguajes de programación como PHP o Java, quizás estéis esperando el Spring o Symfony de turno. Sin embargo, por suerte o por desgracia, en la comunidad de Go aún no se ha establecido un framework HTTP de facto, y las alternativas son múltiples." },
        { type: "text", content: "Si bien es cierto que la librería estándar nos permite exponer nuestro servidor HTTP con plenas garantías, a medida que vamos adentrándose en el desarrollo de nuestra API, nos daremos cuenta que varias de las tareas habituales en nuestro día a día (recepción y respuesta de datos formateados JSON, XML, etc., validaciones, URL params, etc.) se vuelven un poco arduas, y es en este punto en el que, quizás, nos empezamos a plantear el uso de un framework, por el simple hecho de que nos simplificaría la vida." },
        { type: "text", content: "Para el propósito de este curso hemos elegido Gin, sin embargo, si queda algo de tiempo, al final del curso haremos un breve repaso de otras alternativas que tenemos en el panorama Go que también serían perfectamente válidas." },
        { type: "link", content: "https://gin-gonic.com/" },
        { type: "subtitle", content: "Gin Web Framework" },
        { type: "text", content: "Como hemos dicho, la decisión de usar Gin no es otra que la de simplificarnos la vida y poder centrarnos en lo que realmente nos parece importante, y precisamente por ello, nuestra intención no es hacer un curso propiamente de Gin, sino que éste no deje de ser más que una herramienta para llevar a cabo el curso." },
        { type: "subtitle", content: "Nuestro primer endpoint con Gin" },
        { type: "text", content: "Una buena manera de introducirnos en Gin podría ser convirtiendo nuestro primer endpoint (el de la lección anterior) a lo que sería equivalente en Gin:" },
        {
            type: "code", content: `package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
    r := gin.Default()
	r.GET("/hello", func(c *gin.Context) {
		c.String(http.StatusOK, "hello")
	})
    r.Run(":8080")
}` },
        { type: "subtitle", content: "El contexto de Gin" },
        { type: "text", content: "Como podéis ver, en esta ocasión hemos dejado de usar las estructuras proporcionadas por el paquete net/http para empezar a usar las de Gin, que al final no dejan de ser una encapsulación de las anteriores." },
        { type: "text", content: "En este caso, nuestra función de \"handler\" (o controlador), en lugar de esperar un http.ResponseWriter y una http.Request, lo que esperará será el contexto de Gin (gin.Context) que será este el responsable de centralizar, tanto el procesado de la petición entrante (Context.Request) como la definición de la respuesta, con métodos como Context.String o Context.JSON entre otros." },
        { type: "link", content: "https://pkg.go.dev/github.com/gin-gonic/gin#Context" }
    ]
}; 