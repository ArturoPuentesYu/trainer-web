# Boxing Trainer Web (Astro + TypeScript + Tailwind CSS)

Bienvenido al proyecto **Boxing Trainer Web**, una página estática optimizada y accesible, construida con [Astro](https://astro.build), TypeScript y [Tailwind CSS v4](https://tailwindcss.com). Este README describe cómo instalar, desarrollar, probar y desplegar la aplicación, así como la estructura de carpetas y las herramientas de linting/formatting y control de calidad configuradas.

---

## 🚀 Tecnologías y Herramientas

- **Framework**: Astro (v5.2+)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4 (integrado via `@tailwindcss/vite`)
- **Linting**: ESLint (flat config v9+) con reglas personalizadas y orden de imports
- **Formateo**: Prettier
- **Git Hooks**: Husky & lint-staged para pre-commits (lint, format, build)
- **Gestor de Paquetes**: pnpm (recomendado), compatible con npm/yarn

---

## 🔧 Prerrequisitos

- Node.js (v18+) o superior
- pnpm (opcional, o npm/yarn)

---

## 📥 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ArturoPuentesYu/trainer-web.git
   cd trainer-web
   ```

2. Instala dependencias:

   ```bash
   pnpm install
   ```

   o

   ```bash
   pnpm install
   ```

---

## 🛠️ Scripts Disponibles

En `package.json` encontrarás:

| Comando            | Descripción                                    |
| ------------------ | ---------------------------------------------- |
| `pnpm dev`         | Levanta servidor de desarrollo (localhost)     |
| `pnpm build`       | Genera salida estática en `/dist/`             |
| `pnpm preview`     | Previsualiza el build en local                 |
| `pnpm lint`        | Ejecuta ESLint sobre `.js`, `.ts` y `.astro`   |
| `pnpm lint:fix`    | Aplica correcciones automáticas de ESLint      |
| `pnpm format`      | Formatea con Prettier                          |
| `pnpm prepare`     | Instala Husky → ganchos de Git                 |
| `pnpm lint-staged` | Corre linters/formateadores en archivos staged |

---

## 📁 Estructura de Carpetas

```plaintext
trainer-web/
├── public/             # Activos estáticos (favicon, robots.txt, imágenes)
├── src/
│   ├── components/     # Componentes UI reutilizables
│   ├── layouts/        # Plantillas de página
│   ├── pages/          # Páginas Astro (file-based routing)
│   ├── styles/         # CSS global (`global.css`) con `@import "tailwindcss"`
│   ├── scripts/        # Código TS/JS no UI (utilidades)
│   ├── content/        # Markdown o data para blog/testimonios
│   ├── lib/            # Helpers y wrappers de API
│   └── types/          # Tipos globales TS
├── astro.config.mjs    # Configuración Astro + plugin TailwindCSS
├── tailwind.config.js  # Configuración de Tailwind CSS (colores, darkMode)
├── postcss.config.mjs  # PostCSS para Tailwind
├── tsconfig.json       # Configuración TypeScript
├── eslint.config.cjs   # ESLint (flat config) + plugins TS, import, Astro
├── .prettierrc         # Reglas de Prettier
├── .gitignore          # Ignorados de Git
└── README.md           # Documentación del proyecto
```

---

## ✅ Linting y Formateo

1. **ESLint**: configuración en `eslint.config.cjs` con:

   - Parser TS (`@typescript-eslint/parser`)
   - Plugins: `import`, `@typescript-eslint`, `astro`
   - Reglas suaves de estilo y orden de imports (`import/order`)

2. **Prettier**: reglas en `.prettierrc` (sin punto y coma, comillas simples, etc.)
3. **Git Hooks**:

   - `pnpm prepare` para instalar ganchos Husky
   - Hook `pre-commit`: ejecuta `lint-staged` y luego `pnpm build`
   - Configuración de `lint-staged` en `package.json` para solo archivos staged

---

## 🌐 Desarrollo

Levanta el servidor de desarrollo y ve tu página en:

```bash
pnpm dev
# http://localhost:4321
```

Edita archivos en `src/`. Los cambios se reflejan al instante.

---

## 📦 Build y Previsualización

1. Genera la versión de producción:

   ```bash
   pnpm build
   ```

2. Previsualiza el resultado:

   ```bash
   pnpm preview
   # por defecto en http://localhost:4321
   ```

---

## 🤝 Contribuciones

1. Forkea el repositorio
2. Crea una rama para tu feature o bugfix
3. Asegúrate que `pnpm lint` y `pnpm format` pasan sin errores
4. Envía un Pull Request describiendo tus cambios

---

## 📄 Licencia

Este proyecto está licenciado bajo MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles. No se permite uso comercial sin permiso.

---

## ✉️ Contacto

Para dudas o sugerencias, contacta a Arturo Puentes en **[arturo.puentes.yu@gmail.com](mailto:arturo.puentes.yu@gmail.com)** o abre un issue en GitHub.

---

## 📍 Google Business Profile

Para potenciar la visibilidad local, crea y optimiza una ficha en **Google Business Profile** con la misma dirección y URL que utilizas en este sitio. Completa los datos de contacto, horario y ubicación en Ciudad de Panamá para que los usuarios puedan encontrarte fácilmente en las búsquedas locales.
