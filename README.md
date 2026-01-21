# ExoCloud Solutions — Site (Next.js 100%)

Projeto 100% Next.js (App Router) com Tailwind local (sem CDN) + pasta de protótipos em `public/static/clientes`.

## Rodar local
```bash
npm install
npm run dev
```

## Rotas
- `/` — Landing (ExoCloud)
- `/cliente` — Lista protótipos encontrados em `public/static/clientes/**/index.html`
- `/cliente/<pasta>` — Serve `index.html` automaticamente (e também CSS/JS/imagens) a partir de `public/static/clientes/`

## Onde ficam os arquivos estáticos
Tudo que era `static/` no Flask agora está em:
- `public/static/`

Então links como `/static/img/...` funcionam igual no Vercel.

## Upload de protótipos (futuro)
Para Vercel, upload em disco não persiste. O caminho recomendado é:
- versionar no Git **ou**
- armazenar os sites de cliente em Cloudflare R2 / S3 e servir por URL.
