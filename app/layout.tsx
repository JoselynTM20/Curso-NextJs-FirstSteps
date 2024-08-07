import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First page Next.js",
  description: "First project in Next.Js with vercell",
};


//se ejecuta antes que la pagina
//esto impacta todas las páginas de la app
export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
