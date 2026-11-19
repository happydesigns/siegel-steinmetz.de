![siegel-steinmetz de](https://github.com/happydesigns/siegel-steinmetz.de/assets/22038857/e83f6947-be87-47a8-bdde-c8073d100b11)

# siegel-steinmetz.de

![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)

Look at the [Content documentation](https://content.nuxt.com/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

Studio 1.8.2 uses Comark to edit the Nuxt Content collections. The pnpm patch
reads the current file when reopening local documents and connects the album
editor to Studio's active draft session. Preview builds can set
`STUDIO_GIT_BRANCH` to store Studio edits on the preview branch.

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
