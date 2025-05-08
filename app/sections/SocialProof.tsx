import Image from "next/image";

export default function SocialProof() {
  return (
    <section
      id="socialproof"
      className="min-h-[50vh] flex flex-col justify-start items-center bg-darkgreen text-white font-poppins py-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Reseñas y Reconocimientos</h2>
        <p className="text-lg mb-10">
          Siempre mejorando para brindarte la mejor calidad de atención.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-4">
        {/* Google Reviews */}
        <a
          href="https://www.google.com/search?q=la+dalmacia+miraflores+google+reviews#lrd=0x9105b7e2234bc335:0x87b75259116cb2b7,1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-lightmustard rounded-lg p-6 shadow hover:shadow-xl transition flex flex-col gap-2 items-center text-center"
        >
          <Image src="/socialProof/googleReviews.png" alt="Google Reviews" width={80} height={30} />
          <p className="text-sm text-darkgreen">⭐⭐⭐⭐⭐ 4.5 / 5 (400+ opiniones)</p>
          <p className="text-xs italic text-gray-600">
            “Buena atención, excelente ambiente y platos tradicionales bien ejecutados.”
          </p>
        </a>

        {/* TripAdvisor */}
        <a
          href="https://www.tripadvisor.com.pe/Restaurant_Review-g294316-d813492-Reviews-Bodega_Dalmacia-Lima_Lima_Region.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-lightmustard rounded-lg p-4 shadow hover:shadow-xl transition flex flex-col gap-2 items-center text-center"
        >
          <Image src="/socialProof/tripAdvisor.png" alt="TripAdvisor" width={90} height={30} />
          <p className="text-sm text-darkgreen">⭐⭐⭐⭐ 4.0 / 5 (66 opiniones)</p>
          <p className="text-xs italic text-gray-600">
            “El lomo saltado es el mejor de Miraflores.”
          </p>
        </a>

        {/* Mesa 24/7 */}
        <a
          href="https://www.mesa247.pe/lima/restaurante/la-dalmacia"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-lightmustard rounded-lg p-6 shadow hover:shadow-xl transition flex flex-col gap-5 items-center text-center"
        >
          <Image src="/socialProof/mesa24-7.png" alt="Mesa 24/7" width={100} height={50} />
          <p className="text-sm text-darkgreen">⭐⭐⭐⭐⭐ 4.5 / 5</p>
          <p className="text-xs italic text-gray-600">
            “Comida exquisita, ambiente tradicional con toques modernos.”
          </p>
        </a>
      </div>
    </section>
  );
}
