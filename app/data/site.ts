export type HorarioRow = { label: string; hours: string };
export type HorarioGroup = { title?: string; rows: HorarioRow[] };

export type CartaLayout = "hero" | "wide" | "default";

export type Carta = {
  nombre: string;
  archivo: string;
  imagen: string;
  /** Apple-style bento: hero = 2×2, wide = 2 cols, default = 1×1 */
  layout?: CartaLayout;
  /** Fine-tune cover crop when the card aspect ratio differs from the image */
  backgroundPosition?: string;
};

export const horarios: HorarioGroup[] = [
  {
    rows: [
      { label: "Lunes a Sábados", hours: "12:00 – 23:00" },
      { label: "Domingos", hours: "12:00 – 18:00" },
    ],
  },
  {
    title: "Desayunos",
    rows: [{ label: "Martes a Domingo", hours: "7:30 – 12:00" }],
  },
];

export const cartas: Carta[] = [
  // Hero: new morning service — highest visibility
  {
    nombre: "Desayunos",
    archivo: "/pdfs/carta-desayunos.pdf",
    imagen: "/cartas/desayunos.png",
    layout: "hero",
  },
  // Prime tiles beside hero: core menu + high-margin wine
  {
    nombre: "Carta Principal",
    archivo: "/pdfs/carta-principal.pdf",
    imagen: "/cartas/platos.png",
  },
  {
    nombre: "Vinos",
    archivo: "/pdfs/carta-vinos.pdf",
    imagen: "/cartas/vinos.png",
  },
  // Row 2: bar (brand anchor) + lunch promo
  {
    nombre: "La Barra",
    archivo: "/pdfs/carta-barra.pdf",
    imagen: "/cartas/barra.png",
  },
  {
    nombre: "La Hora del Sanguchito",
    archivo: "/pdfs/carta-sanguchito.pdf",
    imagen: "/cartas/sanguchito.png",
  },
  // Bottom row: end-of-meal upsells (desserts first, then non-alcoholic drinks)
  {
    nombre: "Postres y Cafés",
    archivo: "/pdfs/carta-postres.pdf",
    imagen: "/cartas/postresYcafe.png",
    layout: "wide",
  },
  {
    nombre: "Mocktails",
    archivo: "/pdfs/carta-mocktails.pdf",
    imagen: "/cartas/mocktails.png",
    layout: "wide",
  },
];
