# Factura Fácil Web 🇨🇴

Sitio web oficial y catálogo comercial de **Factura Fácil Colombia**: Software POS y Facturación Electrónica DIAN + Hardware comercial (Combos All-in-One, PC Escritorio, Táctiles, Impresoras térmicas, Cajones monederos, Lectores de códigos y Balanzas).

---

## 🛠️ Stack Tecnológico

- **Framework:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [Radix UI](https://www.radix-ui.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Enrutamiento:** [React Router DOM v6](https://reactrouter.com/)

---

## 🚀 Inicio Rápido

### 1. Requisitos
- Node.js >= 18.x
- npm

### 2. Instalación de Dependencias
```bash
npm install
```

### 3. Servidor de Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:8080`.

### 4. Compilación para Producción
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`.

---

## ⚙️ Conexión con Twenty CRM (Opcional)

El proyecto incluye un conector modular en `src/services/crm.ts` listo para sincronizar automáticamente los leads recibidos desde el formulario de cotización.

Para activarlo, crea un archivo `.env` en la raíz (puedes guiarte con `.env.example`):

```env
# URL de tu servidor Twenty (ej. https://crm.tudominio.com o https://api.twenty.com)
VITE_TWENTY_API_URL=https://tu-servidor-twenty.com

# API Key generada en Twenty (Settings -> Developers -> API Keys)
VITE_TWENTY_API_KEY=tu_api_key_aqui
```

Si no se configuran estas variables, la web continuará operando normalmente enviando la solicitud directamente a WhatsApp.
