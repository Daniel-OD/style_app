# style_app

Wardrobe Intelligence este o aplicație React + Vite pentru planificare vestimentară, reguli de stil și conținut teoretic în limba română.

## Stack

- React 18
- Vite
- Framer Motion
- Lucide React prin wrapper-ul intern `Icon`

## Pornire locală

```bash
npm install
npm run dev
```

## Build producție

```bash
npm run build
npm run preview
```

## Arhitectură

- `src/design` — design system (tokens, motion, icons)
- `src/data` — date statice și reguli de domeniu
- `src/components/ui` — componente UI reutilizabile
- `src/screens` — ecrane de produs
- `src/hooks` — logică reutilizabilă
- `src/app` — shell aplicație

## Deploy

Configurația Vite folosește `base: "/style_app/"` pentru GitHub Pages. Același build poate fi folosit și pe Vercel.
