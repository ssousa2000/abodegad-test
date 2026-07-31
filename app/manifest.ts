import type { MetadataRoute } from "next";
import { business } from "./data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.shortName} — ${business.name}`,
    short_name: business.shortName,
    description: business.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fffadd",
    theme_color: "#244605",
    lang: "es-PE",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
