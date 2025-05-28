## parse notes from this text

### Bajo ningun concepto hacer rewriting. Organizar el texto que se muestra pero sin reinterpretaciones de contenido.

# Tipos de notas permitidos

- **text**: Texto plano o explicación
- **subtitle**: Texto destacado (se muestra en negrita o resaltado)
- **link**: Enlace externo (puedes usar `placeholder` como placeholder)
- **code**: Bloque de código (usa un ejemplo relevante o un placeholder como `// tu código aquí`)
- **named_link**: Enlace externo con un texto (puedes usar `placeholder` como placeholder)

# cuando veas texto subrayado al terminar la oracion que contenia el texto subrayado inserta un link con el place holder

# ejemplo

    notes: [
        { type: "subtitle", content: "Subtítulo destacado del curso." },
        { type: "text", content: "Descripción o explicación relevante del curso." },
        { type: "image", content: "placeholder" },
        { type: "link", content: "placeholder" },
        { type: "code", content: "// tu código aquí" },
        { type: "named_link", text: "Texto en concreto", url: "placeholder",
    },
    ]
