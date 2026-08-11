# Nayli Press Website

Technical foundation for the official Nayli Press website, built with Next.js,
TypeScript, Tailwind CSS, ESLint, and Prettier.

## Development

```bash
npm run dev
```

Open `http://localhost:3000` in a browser.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Content maintenance

- Update publisher details and external links in `lib/site-config.ts`.
- Add future books to the typed collection in `data/books.ts`.
- Place book covers and the final logo in `public/images`.
