# Darren Gao — Portfolio

A basic responsive React portfolio based on the Graphite Mint concept. Built with React, Vite, and plain CSS; no backend is required.

## Run locally

Install Node.js 22.12+ (or a compatible newer version) and pnpm 11, then run:

```sh
pnpm install
pnpm dev
```

Open the local address printed in the terminal.

## Production build

```sh
pnpm build
pnpm preview
```

The build is written to `dist/`. Relative asset paths allow deployment at a domain root or a repository subdirectory.

## Edit the site

- `src/main.jsx`: resume content, project cards, navigation, and links.
- `src/styles.css`: colors, typography, and responsive layout.
- `public/Darren-Gao-Resume.pdf`: downloadable resume.
- `index.html`: page title and description.

Contact links open email or LinkedIn. The navigation scrolls to page sections. The site uses Google Fonts with local system fallbacks when offline. Project cards describe the projects; they do not link to live demos because demo URLs have not been provided.

## GitHub

Repository: [DarrenZG123/ADC-Web-Dev-Bootcamp](https://github.com/DarrenZG123/ADC-Web-Dev-Bootcamp).

The `.gitignore` excludes installed dependencies and generated builds. This repository contains the website source; hosting is not configured.
