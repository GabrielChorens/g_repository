export default {
    title: "09 Servicios de dominio vs Agregados ¿Dónde van las reglas de negocio",
    videoId: "hXx9q2CrPkU",
    notes: [
        { 
            type: "text", 
            content: "💻 Puedes ver el código de este vídeo en:" 
        },
        { 
            type: "link", 
            content: "https://github.com/CodelyTV/aggregates-course/tree/main/03-define_aggregates/3-domain_services_vs_aggregates" 
        },
        { 
            type: "text", 
            content: "Script para poder ver qué ficheros se modifican juntos (cambia el 5 de la última línea para mostrar más resultados):" 
        },
        {
            type: "code",
            content: `git log --pretty=format: --name-only |
awk 'BEGIN { RS = "" } { for (i = 1; i <= NF; i++) for (j = i + 1; j <= NF; j++) print $i " <-> " $j }' |
sort |
uniq -c |
sort -mn |
head -n 5`
        }
    ]
}; 