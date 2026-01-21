# Deploy no Vercel (Catálogo V4 — Standalone)

Este projeto é **Next.js (App Router)** e está pronto para subir no Vercel.

## ✅ Checklist rápido (pra não dar 404)

1. **Root Directory correto**
   - No Vercel: **Project → Settings → General → Root Directory**
   - Tem que apontar para a pasta onde existe o `package.json` deste projeto.

2. **Framework**
   - Deve aparecer **Next.js** automaticamente.

3. **Build & Output**
   - **Install Command:** `npm ci` (ou deixe automático)
   - **Build Command:** `npm run build` (ou deixe automático)
   - **Output Directory:** **deixe vazio** (não coloque `.next` / `out`)

4. **Node**
   - O projeto funciona com Node **>= 18.17** (configurado em `package.json`).

## Deploy pelo Dashboard (GitHub)

1. Suba o projeto para um repositório (GitHub).
2. Vercel → **Add New… → Project** → escolha o repositório.
3. Confirme o **Root Directory** e clique em **Deploy**.

## Deploy pelo Vercel CLI

Dentro da pasta do projeto (onde está o `package.json`):

```bash
npm ci
npm run build
vercel
# e para produção:
vercel --prod
```

## Rotas
- `/` → Home
- `/catalogo` → Catálogo (placeholder)
- `/produto/[id]` → Produto / ClickReview (placeholder)

## Se aparecer "404: NOT_FOUND" (tela do Vercel)

Isso normalmente significa **configuração do projeto**, não erro do Next.

- Você provavelmente está acessando um domínio apontando para outro projeto, **ou**
- O Vercel está apontando para o **Root Directory errado** (não encontrou `package.json`).

A correção mais comum é: **Settings → Root Directory → selecionar a pasta do Next** e redeploy.
