// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Beau_Rivage, Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Puedes agregar más pesos si los necesitas
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "La Dalmacia",
  description: "Restaurante La Dalmacia",
  icons: {
    icon: [
      { url: "/icon", type: "image/png" },
      {
        url: "/icons/icon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${playfair.variable} font-poppins`}>
      <body className="font-poppins bg-beige text-darkgreen">{children}</body>
    </html>
  );
}




