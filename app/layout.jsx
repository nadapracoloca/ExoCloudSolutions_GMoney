import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "ClickReview",
  description: "Catálogo V4 (standalone) — layout preto com detalhes dourados.",
  icons: [{ rel: "icon", url: "/static/favicon.ico" }],
  openGraph: {
    title: "ClickReview",
    description: "Catálogo V4 (standalone) — layout preto com detalhes dourados.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={roboto.className} suppressHydrationWarning>
      <body className="bg-neutral-950 text-neutral-50 antialiased">{children}</body>
    </html>
  );
}
