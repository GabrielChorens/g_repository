# Instrucciones para crear un nuevo curso

## 1. Estructura de archivos necesaria

```
📁 Nombre del Curso/
├── 📁 src/
│   └── 📁 courses/
│       ├── 01.js
│       ├── 02.js
│       └── ... (archivos por cada video)
│   ├── 📄 config.js
│   ├── 📄 courses.js
└── 📄 index.html
```

## 2. Pasos para crear el curso

### 2.1 Crear la estructura de carpetas

```bash
mkdir "Nombre del Curso"
cd "Nombre del Curso"
mkdir -p src/courses
```

### 2.2 Copiar el index.html

- Copiar el archivo `index.html` de cualquier curso existente
- No requiere modificaciones, es el mismo para todos los cursos

### 2.3 Crear el archivo config.js

Crear un archivo en `src/config.js` con la configuración del curso:

```javascript
export const CONFIG = {
  courseTitle: "Nombre del Curso",
  theme: {
    primary: "#0891b2",
    secondary: "#06b6d4",
    accent: "#22d3ee",
    background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
  },
};
```

### 2.4 Crear los archivos de curso

Para cada video del curso, crear un archivo en `src/courses/` con el siguiente formato:

```javascript
// src/courses/XX.js
export default {
  title: "Título del video",
  videoId: "ID_DEL_VIDEO_DE_YOUTUBE",
  notes: [],
};
```

### 2.5 Crear el archivo courses.js

Crear un archivo en `src/courses.js` que importe y exporte todos los cursos:

```javascript
import c1 from "./courses/01.js";
import c2 from "./courses/02.js";
// ... importar todos los cursos ...

export const courses = [c1, c2 /* ... */];
```

### 2.6 Crear el archivo de configuración del curso

Crear un archivo en `src/courses/nombre-del-curso.js`:

```javascript
export default {
  title: "Nombre del Curso",
  firstVideoId: "ID_DEL_PRIMER_VIDEO",
  folder: "Nombre del Curso",
  notes: [
    {
      type: "named_link",
      text: "Repositorio del curso",
      url: "PLACEHOLDER",
    },
  ],
};
```

### 2.7 Actualizar courses-list.js

1. Abrir `src/courses-list.js`
2. Agregar la importación del nuevo curso:

```javascript
import nuevoCurso from "./courses/nombre-del-curso.js";
```

3. Agregar el curso al array de cursos:

```javascript
export const courses = [
  { type: "category", name: "All" },
  // ... otros cursos ...
  nuevoCurso,
];
```

## 3. Ejemplo de uso

Para crear un curso llamado "Mi Nuevo Curso" con 3 videos:

1. Crear estructura:

```bash
mkdir "Mi Nuevo Curso"
cd "Mi Nuevo Curso"
mkdir -p src/courses
```

2. Copiar index.html de cualquier curso existente al curso correspondiente

3. Crear config.js:

```javascript
// src/config.js
export const CONFIG = {
  courseTitle: "Mi Nuevo Curso",
  theme: {
    primary: "#0891b2",
    secondary: "#06b6d4",
    accent: "#22d3ee",
    background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
  },
};
```

4. Crear archivos de videos:

```javascript
// src/courses/01.js
export default {
    title: "01 Introducción",
    videoId: "abc123",
    notes: []
};

// src/courses/02.js
export default {
    title: "02 Conceptos básicos",
    videoId: "def456",
    notes: []
};

// src/courses/03.js
export default {
    title: "03 Ejemplos prácticos",
    videoId: "ghi789",
    notes: []
};
```

5. Crear courses.js:

```javascript
// src/courses.js
import c1 from "./courses/01.js";
import c2 from "./courses/02.js";
import c3 from "./courses/03.js";

export const courses = [c1, c2, c3];
```

6. Crear configuración del curso:

```javascript
// src/courses/mi-nuevo-curso.js
// en la raiz del proyecto!!!
export default {
  title: "Mi Nuevo Curso",
  firstVideoId: "abc123",
  folder: "Mi Nuevo Curso",
  notes: [
    { type: "subtitle", content: "Curso sobre..." },
    { type: "text", content: "Descripción detallada del curso..." },
  ],
};
```

7. Actualizar courses-list.js en la raiz del proyect src/courses-list.js:

```javascript
import miNuevoCurso from "./courses/mi-nuevo-curso.js";

export const courses = [
  { type: "category", name: "All" },
  // ... otros cursos ...
  miNuevoCurso,
];
```

## 4. Notas importantes

- Los IDs de los videos son los que aparecen en la URL de YouTube después de `v=`
- Mantener consistencia en el nombramiento de archivos (usar kebab-case para nombres de archivo)
- Asegurarse de que el `firstVideoId` coincida con el ID del primer video del curso
- El `folder` debe coincidir exactamente con el nombre de la carpeta del curso
- El `courseTitle` en config.js debe coincidir con el título del curso
