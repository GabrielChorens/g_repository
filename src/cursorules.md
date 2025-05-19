# Cursorrules para crear un nuevo curso

Sigue estos pasos para crear un nuevo objeto de curso compatible con la plataforma.

---

## 1. Datos básicos del curso
- **title**: Nombre del curso (string)
- **videoId**: Identificador de YouTube (string)
- **notes**: Array de objetos, cada uno con un tipo y contenido

## 2. Tipos de notas permitidos
- **text**: Texto plano o explicación
- **subtitle**: Texto destacado (se muestra en negrita o resaltado)
- **image**: URL de imagen (puedes usar un placeholder como `https://via.placeholder.com/400x200?text=Imagen+del+curso`)
- **link**: Enlace externo (puedes usar `https://ejemplo.com` como placeholder)
- **named_link**: Enlace con texto personalizado, usa `{ type: "named_link", text: "Texto visible", url: "https://..." }`
- **code**: Bloque de código (usa un ejemplo relevante o un placeholder como `// tu código aquí`)

---

## 3. Plantilla de objeto de curso

```js
export default {
    title: "Nombre del Curso",
    videoId: "YouTubeID",
    notes: [
        { type: "subtitle", content: "Subtítulo destacado del curso." },
        { type: "text", content: "Descripción o explicación relevante del curso." },
        { type: "image", content: "https://via.placeholder.com/400x200?text=Imagen+del+curso" },
        { type: "link", content: "https://ejemplo.com" },
        { type: "named_link", text: "Ver documentación", url: "https://ejemplo.com/doc" },
        { type: "code", content: "// tu código aquí" }
    ]
};
```

---

## 4. Proceso para crear un nuevo curso

1. **Pide al usuario:**
   - Nombre del curso
   - ID de YouTube (o deja un placeholder)
   - Para cada nota, pide el tipo (text, subtitle, image, link, named_link, code) y el contenido (o deja un placeholder si no hay contenido real)
2. **Genera el objeto siguiendo la plantilla anterior.**

---

## 5. Ejemplo práctico

Supón que el usuario te da:
- Nombre: "Introducción a DDD"
- ID de YouTube: "abc123"
- Notas:
  - Subtítulo: "¡Aprende DDD desde cero!"
  - Texto: "Este curso introduce los conceptos básicos de DDD."
  - Imagen: (placeholder)
  - Enlace: (placeholder)
  - Named link: texto: "Repositorio", url: "https://github.com/codelytv"
  - Código: (placeholder)

El objeto sería:

```js
export default {
    title: "Introducción a DDD",
    videoId: "abc123",
    notes: [
        { type: "subtitle", content: "¡Aprende DDD desde cero!" },
        { type: "text", content: "Este curso introduce los conceptos básicos de DDD." },
        { type: "image", content: "https://via.placeholder.com/400x200?text=Imagen+del+curso" },
        { type: "link", content: "https://ejemplo.com" },
        { type: "named_link", text: "Repositorio", url: "https://github.com/codelytv" },
        { type: "code", content: "// tu código aquí" }
    ]
};
``` 