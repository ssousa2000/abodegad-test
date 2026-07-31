// app/layout.tsx
import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import JsonLd from "./components/JsonLd";
import { buildMetadata } from "./lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
});

export const metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-PE"
      className={`${poppins.variable} ${playfair.variable} font-poppins`}
    >
      <body className="font-poppins bg-beige text-darkgreen">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}




