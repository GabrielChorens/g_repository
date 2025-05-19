export default {
    title: "01 Nuestro primer endpoint HTTP en Go",
    videoId: "2vlYmKck2lE",
    notes: [
        { type: "subtitle", content: "Comenzando con HTTP en Go" },
        { type: "text", content: "El código de esta lección lo puedes encontrar en este repositorio" },
        { type: "link", content: "https://github.com/CodelyTV/go-hexagonal_http_api-course" },
        { type: "text", content: "Solo hace falta echar un vistazo rápido al sitio web oficial de Go para ver la enorme cantidad de paquetes que nos incluye la librería estándar. Es decir, todo un conjunto de funcionalidades que tenemos a nuestra disposición desde que empezamos a escribir nuestras primeras líneas de código, sin necesidad de recurrir a dependencias externas." },
        { type: "link", content: "https://golang.org" },
        { type: "subtitle", content: "El paquete net/http" },
        { type: "link", content: "https://golang.org/pkg/net/http/" },
        { type: "text", content: "Y como parte de dicha librería, uno de los paquetes más populares es el paquete net/http. Especialmente si hablamos de aplicaciones web, por supuesto." },
        { type: "text", content: "Dicho paquete, no solo nos ofrece los recursos necesarios para hacer peticiones HTTP sino que además también nos permite exponer un servidor HTTP con muy poquitas líneas. Veamos un ejemplo:" },
        {
            type: "code", content: `package main
import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/hello", func(w http.ResponseWriter, req *http.Request) {
        w.WriteHeader(http.StatusOK)
        fmt.Fprintf(w, "Hello\\n")
    })

    http.ListenAndServe(":8080", nil)
}` },
        { type: "subtitle", content: "La función http.HandleFunc" },
        { type: "text", content: "Si nos fijamos en el ejemplo anterior, lo que estamos haciendo, básicamente, es exponer un servidor en la dirección :8080 que será capaz de responder a las peticiones HTTP que nos lleguen a la URL registrada mediante la función http.HandleFunc." },
        { type: "link", content: "https://pkg.go.dev/net/http#HandleFunc" },
        { type: "text", content: "Esta función espera dos parámetros:" },
        { type: "text", content: "• El \"path\" que queremos registrar.\n• La función que actuará como \"handler\" o controlador." },
        { type: "text", content: "Y, como hemos visto, la función que actuará como \"handler\" (o controlador) debe cumplir con la siguiente firma: func(w http.ResponseWriter, req *http.Request)." },
        { type: "text", content: "Estas dos estructuras (http.ResponseWriter y http.Request) son las que nos permitirán tratar la petición entrante (cuerpo, cabeceras, etc.) y determinar cuál deberá ser la salida (código http, cuerpo de la respuesta, etc). Más adelante entraremos en detalle." },
        { type: "link", content: "https://pkg.go.dev/net/http#ResponseWriter" },
        { type: "link", content: "https://pkg.go.dev/net/http#Request" },
        { type: "subtitle", content: "La estructura http.Server" },
        { type: "text", content: "Sin ánimo de empezar a profundizar antes de hora, no queríamos despedir esta primera lección sin recordar que, de igual modo que sucede con los métodos http.Get, http.Post y similares, nuestro ejemplo anterior no se podría considerar un ejemplo \"production-ready\" y lo suyo sería usar la estructura http.Server para definir adecuadamente todos los parámetros de configuración de nuestro servidor HTTP." },
        { type: "link", content: "https://pkg.go.dev/net/http#Server" }
    ]
}; 