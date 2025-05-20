export default {
  title: "04 Configurando security groups para el balanceador",
  videoId: "xw5JEjPK7ik",
  notes: [
    {
      type: "text",
      content: "Cuando utilizamos un balanceador, el tráfico de nuestros usuarios ya no llegará directamente a nuestra instancia de EC2, sino que llegará al balanceador, y este será el que se conecte a nuestro servidor."
    },
    {
      type: "text", 
      content: "Es necesario entender quién se conecta a quién para poder configurar correctamente los security groups. No debemos permitir conexiones que no sean las que sabemos que se producirán."
    }
  ],
};
