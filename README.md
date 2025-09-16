# TextUtils — Vite + TypeScript + Tailwind + Playwright

This repository was migrated from Create React App to a modern Vite + TypeScript setup and includes Tailwind CSS for styling and Playwright for end-to-end tests. A GitHub Actions workflow builds the site and runs Playwright on push/PR to `main`.

Quick commands

- Install dependencies

```bash
npm ci
```

- Run development server (Vite)

```bash
npm run dev
```

- Build for production

```bash
npm run build
```

- Preview production build

```bash
npm run preview
```

- Run Playwright end-to-end tests (requires the app to be running at `http://localhost:5173`)

```bash
npm run test:e2e
```

Note: Playwright is configured to start a preview server automatically when running tests (see `playwright.config.ts` -> `webServer`). You can run `npm run test:e2e` and Playwright will start a preview server on port `5173` for the duration of the tests. If you prefer to start the server yourself, run `npm run preview -- --port 5173` first.

Notes and next steps

- This migration updated the project layout to use `index.html` + `src/main.tsx` as Vite expects and converted `App` to TypeScript. Existing components in `src/Components` remain JavaScript — you can incrementally convert them to `.tsx` and add types.
- Tailwind is configured via `tailwind.config.cjs` and PostCSS (`postcss.config.cjs`). The main stylesheet `src/index.css` includes Tailwind directives.
- Playwright config lives in `playwright.config.ts` and a basic example test is included in `tests/example.spec.ts`.
 - Playwright config lives in `playwright.config.ts`. There are now two test types in `tests/`:
	 - `unit.calc.spec.ts` — small unit-style tests that exercise utility functions (run with Playwright runner).
	 - `example.spec.ts` — e2e test that visits the site (Playwright will start the preview server automatically).
- CI workflow at `.github/workflows/ci.yml` will install, build and run Playwright on Ubuntu runners.

If you'd like, I can:

- Convert all `src/Components/*.js` to `.tsx` with types.
- Add unit tests (Jest/Vitest) and type-checking CI step.
- Add Playwright test recording and screenshots configuration.

Local CI / Troubleshooting

- To run CI-like steps locally:

```bash
npm ci
npm run build
npm run preview -- --port 5173 &
# wait for server to be available, then:
npx playwright test
```

Converting components to TypeScript

- Existing files in `src/Components` are still `.js`. To convert a component:

1. Rename `ComponentName.js` to `ComponentName.tsx`.
2. Add types for `props` and state where appropriate.
3. Fix any TypeScript errors and run `npm run dev`.

If you want, I can convert all components to `.tsx` and add stricter type checking in CI.

Contact me which next step you'd like me to take.
