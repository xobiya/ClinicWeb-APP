# BoneCare Clinic Web App

Modern, bilingual (English & Amharic) marketing site for **BoneCare Clinic**, an orthopedic and bone health specialist located in Addis Ababa. The experience uses a clean glassmorphism aesthetic, Ethiopian-inspired color palette, and reliable imagery to communicate trust and accessibility for local patients.

## Features

- Multi-page React experience (Home, About, Services, Doctors, Appointment, Contact)
- Tailwind CSS utility styling with custom Ethiopian color tokens and shadows
- Bilingual UI copy and CTAs (English/Amharic) with localized contact details
- Appointment form with inline validation and call/WhatsApp shortcuts
- Optimized gradient background and high-quality imagery hosted on Pexels
- Responsive layout optimized for mobile, tablet, and desktop breakpoints

## Tech Stack

- React 18 + Vite 6
- Tailwind CSS 3
- React Router (client-side navigation)
- PostCSS + Autoprefixer

## Getting Started

```bash
# Install dependencies
npm install

# Start the local dev server
npm run dev

# Build for production
npm run build
```

Open the dev server at `http://localhost:5173` (default Vite port).

## Project Structure

```
├── public/                 # Manifest, icons, static assets
└── src/
	├── components/         # Reusable UI components (Navbar, Footer, Cards, forms)
	├── pages/              # Route-level views (Home, Services, Doctors, etc.)
	├── App.jsx             # Route definitions & layout shell
	├── index.jsx           # React entry point
	└── index.css           # Global Tailwind layers + background gradients
```

Key configuration files:
- `tailwind.config.cjs` — custom colors, fonts, shadows, and content paths.
- `postcss.config.cjs` — Tailwind + Autoprefixer pipeline.
- `vite.config.js` — Vite bundler configuration.

## Customization

- **Brand colors**: adjust in `tailwind.config.cjs` under `extend.colors`.
- **Background gradient**: tweak radial/linear layers in `src/index.css`.
- **Copy & localization**: update English/Amharic text inside components and pages.
- **Images**: swap Pexels URLs in `src/pages/*` to point at your own hosted images.
- **Form handling**: wire `AppointmentForm.jsx` to a backend API or service as needed.

## Testing & Linting

- `npm test` — runs the default React Testing Library setup from Vite. Extend suites in `src/App.test.jsx`.
- Integrate ESLint/Prettier by adding config files if code quality checks are required.

## Deployment

The production build emits static assets in `dist/`. Deploy the folder to any static host (Netlify, Vercel, GitHub Pages, Nginx, etc.).

```bash
npm run build
# deploy the generated dist/ directory
```

## License

See [`LICENSE`](LICENSE) for details.
