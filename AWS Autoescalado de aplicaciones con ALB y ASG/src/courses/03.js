export default {
  title: "03 Balanceador público o interno",
  videoId: "cdV8tCiy8w8",
  notes: [
    {
      type: "text",
      content: "Una de las primeras decisiones que debemos tomar cuando estamos creando un balanceador de carga en EC2 es si lo queremos público (internet-facing) o privado (internal)."
    },
    {
      type: "text",
      content: "Si elegimos internet-facing, la DNS que EC2 asigna al balanceador resolverá a una IP pública, accesible desde cualquier sitio."
    },
    {
      type: "text", 
      content: "Si elegimos internal, la DNS que EC2 asigna al balanceador resolverá a una IP privada que solo es accesible en la misma VPC donde hayamos creado el balanceador."
    },
    {
      type: "text",
      content: "Que la IP sea accesible es una cosa, pero no olvides que podremos controlar quién puede acceder al balanceador configurando security groups."
    }
  ],
};
