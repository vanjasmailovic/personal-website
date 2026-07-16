# Vanja Smailovic — consulting website

Static professional website built with Astro, strict TypeScript, Tailwind CSS and minimal browser JavaScript.

## Local development

### Prerequisites

- [Node.js](https://nodejs.org/) 22.12 or newer
- [pnpm](https://pnpm.io/installation) 11 (the project pins pnpm 11.9.0)

If pnpm is not already available, enable the version bundled with modern Node.js:

```sh
corepack enable
corepack install
```

### Start the website

From the repository root, install dependencies and start Astro's development server:

```sh
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. The page reloads automatically when you save a source file. Press `Ctrl+C` in the terminal to stop the server.

If port 4321 is already occupied, Astro selects another port and prints the correct local URL in the terminal.

### Inspect the production build

To check the optimized static site locally:

```sh
pnpm build
pnpm preview
```

Open the URL printed by Astro (normally [http://localhost:4321](http://localhost:4321)). The generated files are written to `dist/`.

### Troubleshooting

- If `pnpm` is not found, run `corepack enable`, then open a new terminal.
- If dependencies behave unexpectedly after changing Node.js versions, remove `node_modules/` and run `pnpm install` again.
- Run `node --version` and `pnpm --version` to confirm the installed versions.

## Quality checks

```sh
pnpm format:check
pnpm check
pnpm build
```

The canonical origin is configured in `src/config/site.ts`. Case-study content lives in `src/content/case-studies/`.
