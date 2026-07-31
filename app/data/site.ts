export const siteUrl = "https://bodegadalmacia.com";

export const business = {
  name: "Bodega Dalmacia",
  shortName: "La Dalmacia",
  description:
    "Restaurante de cocina peruana tradicional en Miraflores, Lima. Desayunos, almuerzos y cenas con recetas familiares, lomo saltado, vinos y ambiente acogedor.",
  tagline:
    "Un espacio único donde la tradición y la modernidad se encuentran para crear experiencias inolvidables.",
  email: "labodegareservas@gmail.com",
  phone: "+51980080232",
  phoneDisplay: "+51 980 080 232",
  address: {
    street: "San Fernando 401",
    neighborhood: "Miraflores",
    city: "Lima",
    region: "Lima",
    postalCode: "15074",
    country: "PE",
  },
  geo: {
    latitude: -12.132375,
    longitude: -77.027847,
  },
  instagram: "https://www.instagram.com/bodegadalmacia/",
  cuisine: ["Peruvian", "Latin American"],
  priceRange: "$$",
  aggregateRating: {
    ratingValue: 4.5,
    reviewCount: 400,
    bestRating: 5,
  },
} as const;

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
