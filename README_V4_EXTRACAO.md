# V4 (ClickReview) — Standalone (pronto pra deploy)

Este projeto já está no formato **standalone** (somente catálogo), sem o site da Exo.

## Rotas
- `/` → Home / Landing do catálogo (V4)
- `/catalogo` → Lista de produtos (placeholder)
- `/produto/[id]` → Tela de produto / click-review (placeholder)

## Compatibilidade (redirects)
Mantém redirects para URLs antigas da época em que a V4 estava dentro do site:
- `/catalogo/v4` → `/`
- `/catalogo/v4/catalogo` → `/catalogo`
- `/catalogo/v4/produto/:id` → `/produto/:id`

## Rodar local
```bash
npm install
npm run dev
```

## Próximo passo
Quando você tiver dados reais (planilha/API), dá pra substituir os mocks e renderizar com base em JSON/DB.
