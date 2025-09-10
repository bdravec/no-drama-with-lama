## Example – Vite + React + TypeScript

A minimal React app bootstrapped with Vite and SWC. Includes TypeScript, ESLint, Prettier, and Vitest.

### Prerequisites
- Node.js 20+

### Getting started
```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:5173` by default.

### Available scripts
- **dev**: Start Vite dev server
- **build**: Type-check and build for production (`tsc -b && vite build`)
- **preview**: Preview the production build locally
- **test**: Run unit tests with Vitest
- **lint**: Lint the project with ESLint

### Project structure
```
.
├─ public/                 # Static assets served as-is
├─ src/
│  ├─ assets/             # Images and other assets
│  ├─ App.tsx             # App entry component
│  ├─ main.tsx            # Client entry
│  ├─ sum.ts              # Example util
│  └─ sum.test.ts         # Example test (Vitest)
├─ index.html             # HTML entry
├─ vite.config.ts         # Vite configuration
├─ tsconfig*.json         # TypeScript configs
└─ eslint.config.js       # ESLint configuration
```

### Testing
```bash
npm run test
```

### Linting & formatting
```bash
npm run lint
```

Prettier is configured and integrated with ESLint (eslint-plugin-prettier, eslint-config-prettier).

### Building
```bash
npm run build
npm run preview
```

### Tech stack
- React
- Vite with `@vitejs/plugin-react-swc`
- TypeScript
- ESLint + Prettier
- Vitest

### Contributing
See `CONTRIBUTING.md` for guidelines.


