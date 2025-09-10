## Contributing to Example

Thanks for your interest in contributing! This project uses Vite, React, TypeScript, ESLint, Prettier, and Vitest.

### Development setup
1. Fork and clone the repo
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the dev server
   ```bash
   npm run dev
   ```

### Branching
- Use short, descriptive branch names like `feat/add-widget`, `fix/button-crash`, `chore/update-deps`.

### Code style
- TypeScript preferred for new code.
- Run lints locally before pushing:
  ```bash
  npm run lint
  ```
- Keep functions small and readable; avoid deep nesting.

### Testing
- Add or update tests for changes when applicable.
- Run the test suite:
  ```bash
  npm run test
  ```

### Pull requests
- Keep PRs focused and short where feasible.
- Include a brief description of the change and rationale.
- Ensure:
  - [ ] `npm run lint` passes
  - [ ] `npm run test` passes
  - [ ] No unused code or console logs
  - [ ] Updated docs (README, comments) if needed

### Reporting issues
- Provide steps to reproduce, expected vs actual behavior, and environment info.

### Release & build
- CI/CD may run `npm run build` which performs type-checking and production build.

Thanks again for contributing!