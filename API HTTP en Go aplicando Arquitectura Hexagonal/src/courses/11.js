export default {
    title: "11 Testeando el Application Service",
    videoId: "TIDC6ZwCRJE",
    notes: [
        { type: "subtitle", content: "Entendiendo la unidad como el caso de uso" },
        { type: "text", content: "Ahora que ya hemos introducido esta nueva capa en nuestra arquitectura (la capa de aplicación) y que hemos aislado el código correspondiente a cada uno de nuestros casos de uso en una pieza aislada, ha llegado el momento de testear dicha pieza." },
        { type: "text", content: "Sin embargo, antes de ir al turrón es importante hacer una aclaración, que evidentemente tampoco nos hemos sacado de la manga, sino que es algo ampliamente extendido en la comunidad: para la creación de los tests unitarios de nuestros casos de uso (o application services), vamos a entender \"la unidad\" como todo el caso de uso." },
        { type: "text", content: "Es decir, vamos a comprobar que todo el caso de uso en su conjunto funciona correctamente, lo cual significa que:" },
        { type: "text", content: "• Ejecutaremos manualmente el caso de uso, asumiendo que esa sería la operación que realizaría cualquiera de los puntos de entrada de nuestra aplicación." },
        { type: "text", content: "• Mockearemos la persistencia (y demás piezas de infraestructura), para garantizar que nos centramos en testear la lógica estricta de nuestro caso de uso, que incluye tanto la nueva capa de aplicación como las piezas de dominio que manipula en su trabajo." },
        { type: "subtitle", content: "Trade-off" },
        { type: "text", content: "Si bien es cierto que no hay ninguna regla estricta que nos fuerce a entender que \"la unidad\" debería ser una función, una clase, etc, es cierto que en algunos contextos se entienden los tests que involucran diferentes clases como tests de integración." },
        { type: "text", content: "En este caso, sin embargo, decidimos tomar dicho trade-off y entender \"la unidad\" como el caso de uso porque:" },
        { type: "text", content: "• Eso nos permitirá obtener tests más fáciles de mantener, con menos dobles de tests, y por lo tanto menos frágiles, la vez que:" },
        { type: "text", content: "• Seguirán siendo muy rápidos de ejecutar y seguirá siendo muy fácil localizar el error en caso de que rompamos alguno de dichos tests." },
        { type: "text", content: "De todos modos, el enfoque que adoptemos para dichos tests, no nos impide que, si lo consideramos necesario, añadamos tests unitarios adicionales a nuestra capa de dominio, en caso de que algunas de las piezas de la misma tengan una complejidad suficiente que nos tenga sentido replicar desde la capa de infraestructura." }
    ]
}; 