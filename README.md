# b89k57w62.github.io

Personal portfolio website. Built with Astro + Tailwind CSS, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npx astro check  # type + content-schema validation
```

## Edit content

- Profile / About / Skills / Services / Experience: `src/data/profile.zh.ts` and `src/data/profile.en.ts` (keep both in sync — TypeScript enforces the same shape).
- Projects: add a `.md` file in `src/content/projects/` (copy `_TEMPLATE.md`) and a screenshot in `src/assets/projects/`. Omit the `link:` line for internal systems.
- UI strings: `src/i18n/ui.ts`.

## Deploy

Push to `main`. GitHub Actions builds and deploys automatically. Enable Pages → Source: GitHub Actions (one-time, in repo Settings).
