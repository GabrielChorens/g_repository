# Instrucciones para crear un nuevo curso

## Guía rápida de ubicación de archivos

### Archivos en la raíz del proyecto (/src)

- `courses-list.js`: Lista de todos los cursos disponibles
- `app.js`: Lógica principal de la aplicación

### Archivos específicos del curso (/src/courses)

- `$NOMBRE_DEL_CURSO.js`: Configuración general del curso (título, primer video, notas)
- Otros archivos de cursos

### Archivos dentro de la carpeta del curso (/$NOMBRE_DEL_CURSO/src)

- `config.js`: Configuración visual del curso (título, colores)
- `courses.js`: Lista de videos del curso

### Archivos de videos (/$NOMBRE_DEL_CURSO/src/courses)

- `01.js`, `02.js`, etc.: Archivos individuales para cada video

## Resumen de ubicaciones importantes

- Configuración general del curso: `/src/courses/$NOMBRE_DEL_CURSO.js`
- Lista de cursos: `/src/courses-list.js`
- Configuración visual: `/$NOMBRE_DEL_CURSO/src/config.js`
- Videos del curso: `/$NOMBRE_DEL_CURSO/src/courses/XX.js`

## 1. Estructura de archivos necesaria

```
📁 root/
├── 📁 src/
│   ├── 📄 app.js
│   ├── 📄 courses-list.js
│   └── 📁 courses/
│       ├── 📄 $NOMBRE_DEL_CURSO.js // <-
│       ├── 📄 mi-nuevo-curso.js
│       └── 📄 otros-cursos.js
└── 📁 $NOMBRE_DEL_CURSO/
    ├── 📁 src/
    │   ├── 📁 courses/
    │   │   ├── 01.js
    │   │   ├── 02.js
    │   │   └── ... (archivos por cada video)
    │   ├── 📄 config.js <- Archivo con el $NOMBRE_DEL_CURSO
    │   └── 📄 courses.js
    └── 📄 index.html <- CREAR ESTE ARCHIVO (no copiar)
```

## 2. Pasos para crear el curso

### 2.1 Crear la estructura de carpetas

```bash
mkdir "$NOMBRE_DEL_CURSO"
cd "$NOMBRE_DEL_CURSO"
mkdir -p src/courses
```

### 2.2 Crear el archivo index.html

Crea un archivo `index.html` en la raíz de la carpeta del curso con el siguiente contenido:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cargando...</title>
    <link rel="stylesheet" href="../../styles/main.css" />
  </head>
  <body>
    <div class="container">
      <nav class="sidebar">
        <a href="#" onclick="app.goHome();return false;" class="back-link"
          >⬅️ Home</a
        >
        <h2>Cursos</h2>
        <ul id="sidebarList"></ul>
      </nav>
      <main class="main-content">
        <header>
          <h1 id="courseTitle"></h1>
        </header>
        <div class="video-frame" id="videoFrame"></div>
        <section class="notes-section" id="notesSection"></section>
        <div class="nav-buttons">
          <button id="prevBtn"></button>
          <button id="nextBtn"></button>
        </div>
      </main>
    </div>
    <div id="toast" class="toast">¡Código copiado!</div>
    <script type="module">
      import { CourseApp } from "../../src/app.js";
      import { CONFIG } from "./src/config.js";
      import { courses } from "./src/courses.js";
      window.app = new CourseApp(CONFIG, courses);
    </script>
  </body>
</html>
```

### 2.3 Crear el archivo config.js

Crear un archivo en `/$NOMBRE_DEL_CURSO/src/config.js` con la configuración del curso:

```javascript
export const CONFIG = {
  courseTitle: "$NOMBRE_DEL_CURSO",
  theme: {
    primary: "#0891b2",
    secondary: "#06b6d4",
    accent: "#22d3ee",
    background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
  },
};
```

### 2.4 Crear los archivos de curso

Para cada video del curso, crear un archivo en `/$NOMBRE_DEL_CURSO/src/courses/` con el siguiente formato:

```javascript
// /$NOMBRE_DEL_CURSO/src/courses/XX.js
export default {
  title: "Título del video",
  videoId: "ID_DEL_VIDEO_DE_YOUTUBE",
  notes: [],
};
```

### 2.5 Crear el archivo courses.js

Crear un archivo en `/$NOMBRE_DEL_CURSO/src/courses.js` que importe y exporte todos los cursos:

```javascript
import c1 from "./courses/01.js";
import c2 from "./courses/02.js";
// ... importar todos los cursos ...

export const courses = [c1, c2 /* ... */];
```

### 2.6 Crear el archivo de configuración del curso

Crear un archivo en `/src/courses/$NOMBRE_DEL_CURSO.js`: //ROOT SRC NOT THE ACTUAL COURSE ONE

```javascript
export default {
  title: "$NOMBRE_DEL_CURSO",
  firstVideoId: "ID_DEL_PRIMER_VIDEO",
  folder: "$NOMBRE_DEL_CURSO",
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

1. Abrir `/src/courses-list.js`
2. Agregar la importación del nuevo curso:

```javascript
import nuevoCurso from "./courses/$NOMBRE_DEL_CURSO.js";
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

Para crear un curso llamado "$NOMBRE_DEL_CURSO" con 3 videos:

1. Crear estructura:

```bash
mkdir "$NOMBRE_DEL_CURSO"
cd "$NOMBRE_DEL_CURSO"
mkdir -p src/courses
```

2. Crear el archivo `index.html` en la raíz de la carpeta del curso con el contenido proporcionado en el paso 2.2.

3. Crear config.js:

```javascript
// /$NOMBRE_DEL_CURSO/src/config.js
export const CONFIG = {
  courseTitle: "$NOMBRE_DEL_CURSO",
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
// /$NOMBRE_DEL_CURSO/src/courses/01.js
export default {
    title: "01 Introducción",
    videoId: "abc123",
    notes: []
};

// /$NOMBRE_DEL_CURSO/src/courses/02.js
export default {
    title: "02 Conceptos básicos",
    videoId: "def456",
    notes: []
};

// /$NOMBRE_DEL_CURSO/src/courses/03.js
export default {
    title: "03 Ejemplos prácticos",
    videoId: "ghi789",
    notes: []
};
```

5. Crear courses.js:

```javascript
// /$NOMBRE_DEL_CURSO/src/courses.js
import c1 from "./courses/01.js";
import c2 from "./courses/02.js";
import c3 from "./courses/03.js";

export const courses = [c1, c2, c3];
```

6. Crear configuración del curso:

```javascript
// /src/courses/$NOMBRE_DEL_CURSO.js
export default {
  title: "$NOMBRE_DEL_CURSO",
  firstVideoId: "abc123",
  folder: "$NOMBRE_DEL_CURSO",
  notes: [
    { type: "subtitle", content: "Curso sobre..." },
    { type: "text", content: "Descripción detallada del curso..." },
  ],
};
```

7. Actualizar courses-list.js en la raíz del proyecto src/courses-list.js:

```javascript
import miNuevoCurso from "./courses/$NOMBRE_DEL_CURSO.js";

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
