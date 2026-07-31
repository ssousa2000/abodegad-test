import type { Metadata } from "next";
import { business, cartas, horarios, siteUrl } from "../data/site";

const defaultTitle = "La Dalmacia | Restaurante en Miraflores, Lima";
const defaultDescription = `${business.shortName} — ${business.description} Reserva tu mesa en ${business.address.neighborhood}, Lima.`;

export const seoKeywords = [
  "la dalmacia",
  "dalmacia",
  "bodega dalmacia",
  "restaurante la dalmacia",
  "restaurante dalmacia",
  "restaurante miraflores",
  "restaurante lima",
  "comida peruana miraflores",
  "restaurante peruano lima",
  "lomo saltado miraflores",
  "desayunos miraflores",
  "almuerzo miraflores",
  "cena miraflores",
  "reservar restaurante lima",
  "restaurante san fernando miraflores",
];

export const ogImage = {
  url: "/images/dalmacia-interior.jpg",
  width: 1200,
  height: 630,
  alt: "Interior del restaurante Bodega Dalmacia en Miraflores, Lima",
};

export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${business.shortName}`,
    },
    description: defaultDescription,
    keywords: seoKeywords,
    authors: [{ name: business.name, url: siteUrl }],
    creator: business.name,
    publisher: business.name,
    category: "restaurant",
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "es_PE",
      url: siteUrl,
      siteName: business.name,
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [ogImage.url],
    },
    other: {
      "geo.region": "PE-LIM",
      "geo.placename": business.address.neighborhood,
      "geo.position": `${business.geo.latitude};${business.geo.longitude}`,
      ICBM: `${business.geo.latitude}, ${business.geo.longitude}`,
      "business:contact_data:street_address": business.address.street,
      "business:contact_data:locality": business.address.neighborhood,
      "business:contact_data:region": business.address.region,
      "business:contact_data:postal_code": business.address.postalCode,
      "business:contact_data:country_name": "Peru",
      "business:contact_data:email": business.email,
      "business:contact_data:phone_number": business.phoneDisplay,
      "business:contact_data:website": siteUrl,
    },
    verification: {},
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
}

function formatAddress() {
  const { street, neighborhood, city, region, postalCode, country } =
    business.address;
  return {
    "@type": "PostalAddress",
    streetAddress: street,
    addressLocality: neighborhood,
    addressRegion: region,
    postalCode: postalCode,
    addressCountry: country,
  };
}

function buildOpeningHours() {
  const specs: Record<string, unknown>[] = [];

  for (const group of horarios) {
    for (const row of group.rows) {
      if (row.label === "Lunes a Sábados") {
        specs.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "12:00",
          closes: "23:00",
        });
      } else if (row.label === "Domingos") {
        specs.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "12:00",
          closes: "18:00",
        });
      } else if (row.label === "Martes a Domingo" && group.title === "Desayunos") {
        specs.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "07:30",
          closes: "12:00",
          description: "Desayunos",
        });
      }
    }
  }

  return specs;
}

export function buildJsonLd() {
  const address = formatAddress();
  const menuItems = cartas.map((carta) => ({
    "@type": "Menu",
    name: carta.nombre,
    url: `${siteUrl}${carta.archivo}`,
  }));

  return [
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": `${siteUrl}/#restaurant`,
      name: business.name,
      alternateName: [business.shortName, "Dalmacia", "La Dalmacia Miraflores"],
      description: business.description,
      url: siteUrl,
      image: [
        `${siteUrl}/images/dalmacia-interior.jpg`,
        `${siteUrl}/images/hero/2.jpg`,
        `${siteUrl}/LogoDalmacia/dalmacia-copy.png`,
      ],
      logo: `${siteUrl}/LogoDalmacia/dalmacia.png`,
      telephone: business.phone,
      email: business.email,
      address,
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      servesCuisine: business.cuisine,
      priceRange: business.priceRange,
      openingHoursSpecification: buildOpeningHours(),
      hasMenu: menuItems,
      sameAs: [
        business.instagram,
        "https://www.tripadvisor.com.pe/Restaurant_Review-g294316-d813492-Reviews-Bodega_Dalmacia-Lima_Lima_Region.html",
        "https://www.mesa247.pe/lima/restaurante/la-dalmacia",
        "https://www.google.com/maps/place/Bodega+Dalmacia",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: business.aggregateRating.ratingValue,
        reviewCount: business.aggregateRating.reviewCount,
        bestRating: business.aggregateRating.bestRating,
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/#reservas`,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        result: {
          "@type": "FoodEstablishmentReservation",
          name: `Reserva en ${business.shortName}`,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: business.shortName,
      alternateName: business.name,
      description: business.description,
      inLanguage: "es-PE",
      publisher: {
        "@id": `${siteUrl}/#restaurant`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: defaultTitle,
      description: defaultDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#restaurant` },
      inLanguage: "es-PE",
    },
  ];
}

export const heroImageAlts = [
  "Ambiente del restaurante Bodega Dalmacia en Miraflores, Lima",
  "Salón principal de La Dalmacia, restaurante peruano en Miraflores",
  "Mesa servida en Bodega Dalmacia, Miraflores",
  "Experiencia gastronómica en La Dalmacia, Lima",
  "Detalle del restaurante Dalmacia en San Fernando, Miraflores",
];

export const carouselImageAlts = [
  "Lomo saltado en Bodega Dalmacia, Miraflores",
  "Plato tradicional peruano en La Dalmacia, Lima",
  "Ceviche y mariscos en restaurante Dalmacia, Miraflores",
  "Entrada peruana en Bodega Dalmacia",
  "Especialidad de la casa en La Dalmacia, Miraflores",
  "Postre en restaurante Bodega Dalmacia, Lima",
  "Cóctel en la barra de La Dalmacia",
  "Desayuno en Bodega Dalmacia, Miraflores",
  "Plato de res en restaurante La Dalmacia, Lima",
  "Arroz con mariscos en Dalmacia, Miraflores",
  "Sanguchito en Bodega Dalmacia",
  "Vino y copa en La Dalmacia, Miraflores",
  "Ambiente de cena en restaurante Dalmacia, Lima",
  "Carta de temporada en Bodega Dalmacia",
  "Plato peruano en La Dalmacia, Miraflores",
  "Experiencia culinaria en restaurante Bodega Dalmacia",
  "Momento en la mesa de La Dalmacia, Lima",
];
