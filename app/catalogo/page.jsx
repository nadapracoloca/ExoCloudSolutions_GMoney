import Link from "next/link";

export const metadata = {
  title: "Catálogo | ClickReview",
};

const CATEGORIES = ["Geladeiras", "Lavadoras", "TVs", "Micro-ondas", "Ar-condicionado"];

const PRODUCTS = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Produto ${i + 1}`,
  price: (1999 + i * 120).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
  tag: i % 3 === 0 ? "Destaque" : i % 3 === 1 ? "Novo" : "Oferta",
  category: CATEGORIES[i % CATEGORIES.length],
}));

export default function CatalogoV4Catalogo({ searchParams }) {
  const selectedCat = (searchParams?.cat || "").toString();
  const filtered = selectedCat ? PRODUCTS.filter((p) => p.category === selectedCat) : PRODUCTS;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-white/60">ClickReview</p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                Catálogo
              </h1>
              <p className="mt-2 text-sm text-white/70">
                Padrão visual: preto + dourado. Clique e abra a review.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <div className="relative w-full md:w-80">
                <input
                  type="search"
                  placeholder="Buscar produtos…"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-amber-300/60"
                />
              </div>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-amber-300/40 bg-transparent px-4 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
              >
                Início
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/catalogo"
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                !selectedCat
                  ? "border-amber-300/35 bg-black/40 text-amber-200"
                  : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
              }`}
            >
              Todas
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                href={`/catalogo?cat=${encodeURIComponent(c)}`}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  selectedCat === c
                    ? "border-amber-300/35 bg-black/40 text-amber-200"
                    : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                }`}
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="flex h-44 items-center justify-center">
                  <div className="h-24 w-24 rounded-2xl border border-white/10 bg-neutral-950/60" />
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-amber-300/35 bg-black/40 px-3 py-1 text-[11px] font-semibold text-amber-200">
                  {p.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="mt-1 text-xs text-white/60">{p.category} • Garantia • Nota fiscal • Entrega</p>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-white/60">A partir de</p>
                    <p className="text-lg font-bold text-amber-200">{p.price}</p>
                  </div>

                  <Link
                    href={`/produto/${p.id}`}
                    className="inline-flex items-center rounded-xl border border-amber-300/35 bg-transparent px-3 py-2 text-xs font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-neutral-950 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold text-white/60">Próximo passo</p>
              <p className="mt-1 text-sm text-white/75">
                Quando você enviar os dados reais (ou API), esta versão vira o catálogo oficial do click-review.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
              >
                Início
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-amber-300/40 bg-transparent px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
              >
                Início
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs text-white/60">© 2026 ClickReview — Catálogo (Next.js).</p>
        </div>
      </footer>
    </main>
  );
}
