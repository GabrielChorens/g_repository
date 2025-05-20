export default {
    title: "01 Aprende Arquitectura Hexagonal en 10 minutos",
    videoId: "SOSKrUrpXpM",
    notes: [
        { type: "subtitle", content: "La arquitectura hexagonal se compone de tres capas principales:" },
        { type: "text", content: "1. Capa de Dominio: Esta capa contiene la lógica de negocio central de la aplicación y define las reglas de negocio. No depende de ninguna otra capa y puede contener cosas como tipos, interfaces o funciones de validación." },
        { type: "text", content: "2. Capa de Aplicación: Esta capa se encarga de la comunicación entre la capa de dominio y el mundo exterior, lo que denominamos casos de uso." },
        { type: "text", content: "3. Capa de Infraestructura: Esta capa contiene los detalles de implementación concretos, como las llamadas a una API, bases de datos, etc." },
        { type: "text", content: "Las dependencias deben apuntar hacia el interior de las capas, es decir, las capas de nivel inferior deben definir interfaces que las capas de nivel superior puedan utilizar para interactuar con ellas." },
        { type: "text", content: "Pero si aplicamos Arquitectura Hexagonal por sí sola, podemos terminar con un proyecto con una estructura como esta:" },
        {
            type: "code", content: `
.
├── 📁 application
│  ├── 📄 AuthCommand
│  ├── 📄 AuthCommandHandler 
│  ├── 📄 Authenticator
│  ├── 📄 CourseCreator
│  └── 📄 CourseRenamer
├── 📁 domain
│  ├── 📄 Auth
│  ├── 📄 AuthRepository
│  ├── 📄 AuthToken
│  ├── 📄 Course
│  ├── 📄 CourseRepository
│  ├── 📄 Product
│  ├── 📄 ProductRepository
│  ├── 📄 Student
│  ├── 📄 StudentRepository
│  ├── 📄 Teacher
│  ├── 📄 TeacherId
│  ├── 📄 TeacherName
│  └── 📄 TeacherRepository
└── 📁 infrastructure
   ├── 📄 MySqlCourseRepository
   └── 📄 RedisAuthRepository` },
        { type: "text", content: "Esta estructura, aunque organizada por capas, puede llevar a tener muchos archivos en cada carpeta, lo que dificulta encontrar los archivos relacionados con una funcionalidad específica." },
        { type: "text", content: "Por eso, se recomienda aplicar Vertical Slicing junto con Arquitectura Hexagonal. Consiste en dividir el sistema en funcionalidades verticales completas, que atraviesan todas las capas de la arquitectura hexagonal. Cada vertical slice es un conjunto de características que proporcionan un valor tangible al usuario y que se implementa de forma independiente:" },
        {
            type: "code", content: `
.
├── 📁 auth
│  ├── 📁 application
│  │  ├── 📄 AuthCommand
│  │  ├── 📄 AuthCommandHandler
│  │  └── 📄 Authenticator
│  ├── 📁 domain
│  │  ├── 📄 Auth
│  │  ├── 📄 AuthRepository
│  │  └── 📄 AuthToken
│  └── 📁 infrastructure
│     └── 📄 RedisAuthRepository
├── 📁 courses
│  ├── 📁 application
│  │  ├── 📄 CourseCreator
│  │  └── 📄 CourseRenamer
│  ├── 📁 domain
│  │  ├── 📄 Course
│  │  └── 📄 CourseRepository
│  └── 📁 infrastructure
│     └── 📄 MySqlCourseRepository
└── 📁 teachers
   ├── 📁 domain
   │  ├── 📄 Teacher
   │  ├── 📄 TeacherId
   │  └── 📄 TeacherName
   └── 📁 infrastructure
      └── 📄 TeacherRepository` },
        { type: "text", content: "Esta estructura facilita encontrar todos los archivos relacionados con una funcionalidad específica, ya que están agrupados por contexto de negocio en lugar de por capa técnica." }
    ]
}; 