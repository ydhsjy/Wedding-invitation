# Luxury Wedding Invitation

Modern wedding invitation website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Structure

```txt
src/
  app/
  components/
  data/
  hooks/
  lib/
  sections/
  styles/
public/
  assets/
```

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Dynamic guest names are read from the `to` query parameter:

```txt
http://localhost:3000/?to=Bang+Albertus+Yudha+Sanjaya
```

## Production

```bash
npm run build
npm run start
```

## Deploy To GitHub Pages

This repository deploys automatically through GitHub Actions when changes are pushed to `main`.

Live URL:

```txt
https://undanganaldayudha.my.id/
```

With guest name:

```txt
https://undanganaldayudha.my.id/?to=Bang+Albertus+Yudha+Sanjaya
```
