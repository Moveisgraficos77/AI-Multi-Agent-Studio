import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "AI Multi-Agent Studio",
  description: "Central inteligente de produção de conteúdo com agentes de IA."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
