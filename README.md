# 🎟️ Conference Ticket Generator

Generador de tickets personalizados para conferencias, desarrollado como solución al desafío de [Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w).

## 📸 Preview

<!-- Agregá acá una captura de pantalla o GIF del proyecto funcionando -->

## ✨ Características

- 📝 Formulario con validación en tiempo real
- 🖼️ Carga y previsualización de avatar/foto de perfil
- 🎨 Generación dinámica de ticket personalizado
- ✅ Validación de campos (nombre completo, email, usuario de GitHub)
- 💾 Gestión de estado global con Zustand
- 📱 Diseño responsive y adaptable
- 🎯 Feedback visual de errores en formularios

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos utility-first
- **React Hook Form** - Manejo y validación de formularios
- **Zustand** - Gestión de estado global
- **Vite** - Build tool y dev server

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Cloná el repositorio:**
```bash
git clone https://github.com/tu-usuario/ticket-generator.git
cd ticket-generator
```

2. **Instalá las dependencias:**
```bash
npm install
```

3. **Ejecutá el proyecto en modo desarrollo:**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build de producción
```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto
```
src/
├── components/
│   ├── Form/
│   │   ├── Form.tsx           # Formulario principal
│   │   ├── TextInput.tsx      # Input de texto reutilizable
│   │   ├── UploadInput.tsx    # Input para subir imágenes
│   │   └── Button.tsx         # Botón del formulario
│   └── Ticket/
│       └── Ticket.tsx          # Componente del ticket generado
├── hooks/
│   └── UseShowTicket.tsx       # Hook para mostrar/ocultar ticket
├── store/
│   └── User.ts                 # Store de Zustand con datos del usuario
├── App.tsx                     # Componente principal
└── index.css                   # Estilos globales y tema
```

## 🎯 Funcionalidades Destacadas

### Validación de Formularios
Implementación de validaciones robustas usando React Hook Form:
- Campo obligatorio para nombre completo
- Validación de formato de email con regex
- Usuario de GitHub opcional
- Mensajes de error descriptivos

### Gestión de Estado
Uso de Zustand para manejar el estado de forma simple y eficiente:
```typescript
interface UserData {
  fullName: string;
  email: string;
  gitHubUser: string;
  url: string;
}
```

### Carga de Imágenes
Sistema de preview instantáneo al seleccionar una imagen usando FileReader API.

## 🎨 Diseño

El proyecto implementa un sistema de diseño personalizado con colores definidos usando la directiva `@theme` de Tailwind:

- **Neutral 0-900**: Escala de grises para textos y fondos
- **Orange 500-700**: Color principal para CTAs y acentos

## 🧩 Desafíos Técnicos Resueltos

1. **Ajuste de imágenes en contenedores fijos**: Uso de `object-cover` para mantener proporciones
2. **Validación compleja de emails**: Implementación de regex pattern en React Hook Form
3. **Estado compartido entre componentes**: Zustand para evitar prop drilling
4. **Preview de imágenes antes de subir**: FileReader API para convertir a base64

## 📚 Aprendizajes

- Profundización en React Hook Form para formularios complejos
- Integración de Zustand como alternativa ligera a Redux
- Trabajo con Tailwind CSS v4 y directiva `@theme`
- Manejo de archivos y preview de imágenes en React
- TypeScript para garantizar type-safety en toda la aplicación

## 🔮 Mejoras Futuras

- [ ] Descarga del ticket como imagen (PNG/JPEG)
- [ ] Compartir ticket en redes sociales
- [ ] Modo oscuro / claro
- [ ] Múltiples diseños de tickets
- [ ] Integración con API de GitHub para validar usuarios
- [ ] Animaciones de entrada del ticket generado

## 👤 Autor

**Tu Nombre**
- GitHub: [@JuanciDev, ](https://github.com/JuanciDev)
- LinkedIn: [Juan Manuel Berraz Montyn],(https://www.linkedin.com/in/juan-manuel-berraz-montyn/)
- Frontend Mentor: [@tu-usuario](https://www.frontendmentor.io/profile/tu-usuario)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 🙏 Agradecimientos

- Desafío proporcionado por [Frontend Mentor](https://www.frontendmentor.io)
- Inspiración y recursos de la comunidad de desarrollo web
