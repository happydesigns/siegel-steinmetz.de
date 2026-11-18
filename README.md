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

The current preview uses the adjacent `../ui` checkout for the
`@happydesigns/ui/content` layer. A standalone build needs that checkout too.

Studio stays on 1.7.0 while the 1.8 Markdown editor rewrites existing source on
opening. The pnpm patch rereads the file when reopening a local document and
exposes the active Studio draft session to the album editor. The content
roundtrip and local reopening tests cover the document adapter.

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
