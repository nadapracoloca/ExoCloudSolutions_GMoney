import Link from "next/link";

export const metadata = {
  title: "Catálogo",
};

const CATEGORIES = ["Geladeiras", "Lavadoras", "TVs", "Micro-ondas", "Ar-condicionado"];

const FEATURED = [
  {
    id: 1,
    category: "Geladeiras",
    tag: "Destaque",
    title: "Geladeira Frost Free 400L",
    short: "Review rápida e objetiva com prós, atenção e especificações.",
    avgPrice: "R$ 3.200 – R$ 4.500 (média)",
  },
  {
    id: 2,
    category: "Lavadoras",
    tag: "Novo",
    title: "Lavadora 12kg Inverter",
    short: "Pontos fortes, economia e recursos principais.",
    avgPrice: "R$ 2.200 – R$ 3.600 (média)",
  },
  {
    id: 3,
    category: "TVs",
    tag: "Oferta",
    title: "Smart TV 55\" 4K",
    short: "O que olhar antes de comprar: painel, som, apps e entradas.",
    avgPrice: "R$ 2.100 – R$ 3.900 (média)",
  },
];

export default function CatalogoV4StandaloneHome() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/35 bg-black/40 text-amber-200 font-bold">
                C
              </span>
              <div className="leading-tight">
                <div className="font-bold">Catálogo</div>
                <div className="text-xs text-white/50">placeholder do cliente</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 bg-neutral-950/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                <Link className="text-amber-200 hover:text-amber-300" href="/">
                  Home
                </Link>
                <Link className="text-white/75 hover:text-white" href="/catalogo">
                  Catálogo
                </Link>
                <a className="text-white/75 hover:text-white" href="#sobre">
                  Sobre
                </a>
                <a className="text-white/75 hover:text-white" href="#contato">
                  Contato
                </a>
              </nav>

              <form className="flex w-full gap-2 md:w-auto" role="search">
                <input
                  type="search"
                  placeholder="Buscar (ex.: geladeira 410L, 127V...)"
                  className="w-full md:w-96 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none placeholder:text-white/40 focus:border-amber-300/60"
                />
                <button
                  type="button"
                  className="rounded-xl border border-amber-300/35 px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
                >
                  Buscar
                </button>
              </form>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c}
                  href={`/catalogo?cat=${encodeURIComponent(c)}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
                >
                  {c}
                </Link>
              ))}
              <Link
                href="/catalogo"
                className="rounded-full border border-amber-300/35 bg-black/40 px-4 py-2 text-xs font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
              >
                Ver tudo
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-amber-300/35 bg-black/40 px-4 py-2 text-xs font-semibold text-amber-200">
              ClickReview • catálogo inteligente
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">
              Escolha melhor. <span className="text-amber-300">Compre com segurança.</span>
            </h1>
            <p className="mt-4 text-white/70 leading-relaxed">
              Compare opções por medidas, consumo e recursos. Clique, leia a review e decida com mais clareza.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/catalogo"
                className="rounded-xl border border-amber-300/35 bg-transparent px-5 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
              >
                Ver catálogo
              </Link>
              <a
                href="#contato"
                className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/15 transition"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-2 text-xs text-white/50">Dica: abra 2–3 opções e compare antes de comprar.</div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-base font-bold">Contato rápido</h2>
              <p className="mt-1 text-sm text-white/60">Placeholder: WhatsApp e e-mail do cliente.</p>
              <div className="mt-4 grid gap-2">
                <a
                  href="#contato"
                  className="rounded-xl border border-amber-300/35 px-4 py-3 text-center text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
                >
                  Abrir contato
                </a>
                <Link
                  href="/catalogo"
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-semibold hover:bg-white/15 transition"
                >
                  Ver itens em destaque
                </Link>
              </div>
              <p className="mt-4 text-xs text-white/50">Sem enrolação: encontre e decida em poucos cliques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">Um catálogo rápido e direto.</h2>
          <p className="mt-2 text-white/70 leading-relaxed">
            Em ~10 segundos: o objetivo é comparar opções, ver especificações e clicar para falar/comprar com segurança.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/catalogo"
              className="rounded-xl border border-amber-300/35 px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
            >
              Ver catálogo
            </Link>
            <a
              href="#contato"
              className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 transition"
            >
              Contato
            </a>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Destaques (placeholder)</h2>
            <p className="mt-1 text-sm text-white/60">Exemplos para validar a navegação e a tela de review.</p>
          </div>
          <Link
            href="/catalogo"
            className="rounded-xl border border-amber-300/35 px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
          >
            Ver catálogo completo
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {FEATURED.map((p) => (
            <article key={p.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="flex h-44 items-center justify-center">
                  <div className="h-24 w-24 rounded-2xl border border-white/10 bg-neutral-950/60" />
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-amber-300/35 bg-black/40 px-3 py-1 text-[11px] font-semibold text-amber-200">
                  {p.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-amber-200">{p.tag}</span>
                  <span className="text-xs text-white/60">{p.avgPrice}</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold">{p.title}</h3>
                <p className="mt-1 text-xs text-white/60">{p.short}</p>

                <Link
                  href={`/produto/${p.id}`}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-amber-300/35 bg-transparent px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-300 hover:text-black transition"
                >
                  Ver detalhes
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-amber-300/35 bg-black/40 text-amber-200 font-bold">
                  C
                </span>
                <span className="font-bold">Catálogo</span>
              </div>
              <p className="mt-2 text-sm text-white/60">Placeholder: texto curto explicando o propósito do site.</p>
            </div>
            <div>
              <div className="font-bold text-white mb-2">Contato</div>
              <p className="text-sm text-white/60">
                Placeholder: WhatsApp / e-mail / redes sociais
                <br />
                Ex.: (XX) 9XXXX-XXXX • contato@dominio.com
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/50">
            <div>© 2026 Catálogo • Todos os direitos reservados.</div>
            <div>ClickReview</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
