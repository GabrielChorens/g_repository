## parse notes from this image

# Tipos de notas permitidos
- **text**: Texto plano o explicación
- **subtitle**: Texto destacado (se muestra en negrita o resaltado)
- **image**: URL de imagen (puedes usar un placeholder como `placeholder`)
- **link**: Enlace externo (puedes usar `placeholder` como placeholder)
- **code**: Bloque de código (usa un ejemplo relevante o un placeholder como `// tu código aquí`)

# cuando veas texto subrayado al terminar la oracion que contenia el texto subrayado inserta un link con el place holder

# ejemplo
    notes: [
        { type: "subtitle", content: "Subtítulo destacado del curso." },
        { type: "text", content: "Descripción o explicación relevante del curso." },
        { type: "image", content: "placeholder" },
        { type: "link", content: "placeholder" },
        { type: "code", content: "// tu código aquí" }
    ]