# sicolo

React app built with Create React App.

## Prerequisites

- Node.js 18+ (Node 20 recommended)
- npm 8+

## Getting started

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Scripts

- `npm start`: start dev server
- `npm test`: run tests once in CI mode (`CI=true npm test`)
- `npm run build`: production build

## Project structure

- `src/`: application source code
- `public/`: static assets and HTML template

## CI

This repo includes a GitHub Actions workflow that installs dependencies, runs tests in CI mode, and builds the app on pushes and pull requests to `main`.

## License

MIT
