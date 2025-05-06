// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Puedes agregar más pesos si los necesitas
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "AbodegaD",
  description: "Restaurante AbodegaD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-poppins bg-beige text-darkgreen">{children}</body>
    </html>
  );
}