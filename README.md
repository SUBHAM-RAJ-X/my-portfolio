# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

## Project

My portfolio app built with **Expo** + **Expo Router**.

## Requirements

- Node.js (LTS recommended)
- npm

## Setup

```bash
npm install
```

## Run (Development)

### Start dev server

```bash
npx expo start
```

### Run on web

```bash
npx expo start --web
```

## Build / Export for Web (Static)

This project is configured to export a **static web build**.

```bash
npx expo export --platform web
```

Output is generated in:

```
dist/
```

## Preview the Export Locally

After exporting, serve the `dist` folder:

```bash
npx serve dist
```

Then open:

```
http://localhost:3000
```

## Deployment

Deploy the contents of the `dist/` folder to any static hosting provider:

- Netlify
- Vercel (Static)
- GitHub Pages
- Cloudflare Pages

## Notes

- Routing is handled by **Expo Router** (file-based routing).
- Web export uses Expo's static rendering when enabled.

## Useful Links

- Expo: https://docs.expo.dev/
- Expo Router: https://docs.expo.dev/router/introduction/
