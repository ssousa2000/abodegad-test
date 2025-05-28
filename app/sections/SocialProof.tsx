import Image from "next/image";

const reviews = [
  {
    href: "https://www.google.com/search?q=la+dalmacia+miraflores+google+reviews#lrd=0x9105b7e2234bc335:0x87b75259116cb2b7,1",
    img: "/socialProof/googleReviews.png",
    imgAlt: "Google Reviews",
    imgW: 90,
    imgH: 36,
    rating: "4.5 / 5 (400+ opiniones)",
    stars: 5,
    quote: "Buena atención, excelente ambiente y platos tradicionales bien ejecutados.",
  },
  {
    href: "https://www.tripadvisor.com.pe/Restaurant_Review-g294316-d813492-Reviews-Bodega_Dalmacia-Lima_Lima_Region.html",
    img: "/socialProof/tripAdvisor.png",
    imgAlt: "TripAdvisor",
    imgW: 90,
    imgH: 36,
    rating: "4.0 / 5 (66 opiniones)",
    stars: 4,
    quote: "El lomo saltado es el mejor de Miraflores.",
  },
  {
    href: "https://www.mesa247.pe/lima/restaurante/la-dalmacia",
    img: "/socialProof/mesa24-7.png",
    imgAlt: "Mesa 24/7",
    imgW: 90,
    imgH: 36,
    rating: "4.5 / 5",
    stars: 5,
    quote: "Comida exquisita, ambiente tradicional con toques modernos.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-mustard text-lg align-middle">
      {Array.from({ length: count }).map((_, i) => "★")}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section
      id="socialproof"
      className="min-h-[50vh] flex flex-col justify-start items-center bg-beige text-darkgreen font-poppins py-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Reseñas y Reconocimientos</h2>
        <p className="text-lg mb-10">
          Siempre mejorando para brindarte la mejor calidad de atención.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full max-w-6xl">
        {reviews.map((r, i) => (
          <a
            key={i}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-[#f3ebc8] border border-lightmustard rounded-xl p-6 shadow hover:shadow-2xl transition-all duration-300 h-full min-h-[320px] aspect-square group focus:outline-none focus:ring-2 focus:ring-mustard"
          >
            {/* Top: Image (40%) */}
            <div className="flex flex-col justify-center items-center flex-[2_2_0%] w-full">
              <Image src={r.img} alt={r.imgAlt} width={r.imgW} height={r.imgH} className="object-contain max-h-16" />
            </div>
            {/* Middle: Stars/Rating (20%) */}
            <div className="flex flex-col justify-center items-center flex-[1_1_0%] w-full">
              <div className="flex items-center justify-center gap-1">
                <Stars count={r.stars} />
                <span className="text-base font-bold text-darkgreen ml-1">{r.rating}</span>
              </div>
            </div>
            {/* Bottom: Text (40%) */}
            <div className="flex flex-col justify-center items-center flex-[2_2_0%] w-full">
              <p className="text-sm italic text-gray-600 mt-2 max-w-[90%] mx-auto">“{r.quote}”</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
