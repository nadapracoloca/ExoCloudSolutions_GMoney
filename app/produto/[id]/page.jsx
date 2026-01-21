import Link from "next/link";

export const metadata = {
  title: "Produto | ClickReview",
};

function getMockProduct(id) {
  const n = Number(id) || 1;
  const titles = {
    1: "Geladeira Frost Free 400L",
    2: "Lavadora 12kg Inverter",
    3: "Smart TV 55\" 4K",
  };

  return {
    id: n,
    title: titles[n] || `Produto ${n}`,
    category: n === 1 ? "Geladeiras" : n === 2 ? "Lavadoras" : "TVs",
    avgPrice: n === 1 ? "R$ 3.200 – R$ 4.500 (média)" : "R$ 1.900 – R$ 3.900 (média)",
    summary:
      "Placeholder: resumo direto do que é esse produto e para quem ele faz sentido. Aqui entra a pegada click-review.",
    pros: [
      "Boa eficiência (placeholder)",
      "Recursos úteis no dia a dia (placeholder)",
      "Construção/garantia (placeholder)",
    ],
    cons: [
      "Atenção a medidas/voltagem (placeholder)",
      "Consumo varia por uso (placeholder)",
      "Confira itens inclusos (placeholder)",
    ],
    specs: [
      { k: "Capacidade", v: "400L (exemplo)" },
      { k: "Voltagem", v: "127V / 220V (exemplo)" },
      { k: "Consumo", v: "Selo Procel (exemplo)" },
      { k: "Dimensões", v: "Altura/Largura/Profundidade (exemplo)" },
    ],
  };
}

export default function ProdutoV4Page({ params }) {
  const product = getMockProduct(params?.id);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-white/60">ClickReview • V4</p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                {product.title}
              </h1>
              <p className="mt-2 text-sm text-white/70">
                {product.category} • <span className="text-amber-200">Média de preço:</span> {product.avgPrice}
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-xl border border-amber-300/40 bg-transparent px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
              >
                Voltar ao catálogo
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Imagem (esquerda) */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="flex h-[420px] items-center justify-center">
                  <div className="h-40 w-40 rounded-3xl border border-white/10 bg-neutral-950/60" />
                </div>
                <div className="absolute bottom-4 left-4 rounded-full border border-amber-300/35 bg-black/40 px-3 py-1 text-[11px] font-semibold text-amber-200">
                  Espaço da imagem
                </div>
              </div>
            </div>
          </div>

          {/* Descrição completa (direita) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-base font-bold text-amber-200">Visão geral</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{product.summary}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-5">
                  <h3 className="text-sm font-bold text-amber-200">Pontos fortes</h3>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {product.pros.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="text-amber-200">•</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-5">
                  <h3 className="text-sm font-bold text-amber-200">Atenção</h3>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {product.cons.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="text-amber-200">•</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-950/60 p-5">
                <h3 className="text-sm font-bold text-amber-200">Especificações (placeholder)</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {product.specs.map((s) => (
                    <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs font-semibold text-white/60">{s.k}</div>
                      <div className="mt-1 text-sm font-semibold text-white">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-amber-300/35 bg-transparent px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
                >
                  Link de compra (placeholder)
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 transition"
                >
                  Compartilhar (placeholder)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs text-white/60">© 2026 ClickReview — ClickReview (V4).</p>
        </div>
      </footer>
    </main>
  );
}
